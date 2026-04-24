# ADR-0005: 确定性 PCG 生成与反向打乱管线

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

游戏核心玩法需要在 3×3×3 的立方体网格中无尽生成关卡。为了保证生成的关卡 100% 有解，且难度受控，传统的“先随机生成方块 -> 再用算法搜索是否有解”的暴力探测（Forward Generation）方案效率极低，因为在面旋转谜题中，随机摆放产生无解死局的概率远大于有解。

我们需要一种能够在几毫秒内稳定产出必定有解，且支持 DDA（动态难度调节）约束的生成管线。并且，该管线必须在纯逻辑环境（Headless）下运行，完全独立于 Unity 的 Transform、Physics 或 GameObject。

### 核心决策议题

1. 如何确保生成的塔必定有解？
2. 首窗和续窗（无尽滚动）的生成管线差异如何处理？
3. 如何在无 Unity Physics 支持的情况下验证路径可达性？

---

## 决策 (Decision)

### 1. 采用“构建必定有解的种子 -> 反向打乱 (Backward Scramble)”的管线

抛弃正向随机摆放方案，采用**逆向推演（Backward Generation）**策略。

**管线四大阶段 (`TowerGeneratorSys`)**:
1. **Solved-Seed Builder (有解种子构建)**: 
   - 使用 `TowerRandomPathSampler` 在 3×3×3 空间内生成一条符合长度与转折要求的 3D 折线（Blueprint）。
   - 将主路径上的格子实例化为可通行的平地或楼梯，并验证可通行性。
   - 使用环境方块填充剩余的空位（外围填充）。
   - 此时得到一个玩家不需任何旋转即可直接从起点走到终点的“已解开状态（Solved State）”。
2. **Route Validator (Headless 验证)**:
   - 使用 `TowerRouteValidator` 和纯逻辑的 `CubeSurfaceNavigator` 模拟玩家在当前状态下沿着主路径行走。
   - 验证起始点是否可站立，以及每一步是否符合法线连通性要求，完全不需要 Unity Physics 和 NavMesh。
3. **Scrambler (打乱器)**:
   - **首窗打乱 (`TowerBackwardScrambler`)**: 对 Solved State 逆向执行 N 步随机的切片旋转（或玩家移动操作），将塔打乱。
   - **续窗打乱 (`TowerForwardMatchingScrambler`)**: 采用特殊的“正向匹配打乱”。由于续窗的底层格子必须与旧窗口的顶层无缝拼接，因此从原始（未打乱的）续窗状态出发，探索一套打乱操作组合，使得打乱后的底层布局尽可能拟合旧窗口顶层。
4. **Solver (BFS 难度验证)**:
   - 将打乱后的状态送入纯逻辑的 `TowerBfsSolver` 进行最短解搜索。
   - 提取 RotateCount, MoveCount, TotalActions 等指标，与 `TowerDDARule` 的约束下限/上限进行对比，并作为动态难度的反馈。

### 2. 纯逻辑状态机分离 (Headless Architecture)

打乱器和求解器涉及成千上万次的状态变化，不能直接操作包含视图引用的 `CubeModel`。

**策略**:
- 引入纯数据的快照结构 `TowerSimState`（封装 3D 数组、哈希索引和临时 PlayerActor）。
- 在 `TowerSimStateFactory` 中通过复制逻辑数据构建。
- 所有打乱推演和 BFS 搜索均在 `TowerSimState` 副本上进行，推演结束后，仅将成功的操作序列（Actions）应用回 `CubeModel`。

### 3. 数据隔离原则

在整个生成生命周期中：
- `TowerGeneratorSys` 只操作 `Dictionary<Vector3Int, SlotCell>` 和 `Vector3Int`。
- 完全不知道材质、动画、GameObject 的存在。
- 最终产出不可变数据结构 `TowerWindowGenerationResult` 交由外部（`TowerDataSys`）缓存并分发。

---

## 现有工作流演示 (Execution Flow)

```text
TowerGeneratorSys.GenerateInitialWindow(seed)
 ├──> 1. 解析 Lubric 配表 (Resolve Rule / Pool)
 ├──> 2. 采样 3D 折线 (PathSampler)
 ├──> 3. 物化方块模型 (Materialize Cells)
 ├──> 4. 路径通畅验证 (Validator + Headless Navigator)
 ├──> 5. 计算认知负荷评分 (BlockComplexityScore)
 ├──> 6. 执行反向打乱 (BackwardScrambler) -> 得到谜题
 └──> 7. 运行 BFS 求解 (Solver) -> 输出难度指标
```

---

## 已知的技术债务与改进方向

### TD-010: 续窗的正向匹配打乱成功率
目前的 `TowerForwardMatchingScrambler` 采用有限深度的前向搜索来拟合底层。如果目标底层极其复杂，可能会在步数耗尽前无法达到 100% 完美匹配（目前通过 `softMatch` 进行容错降级）。未来可考虑引入 A* 或双向 BFS 提升续窗拼接的连贯性。

### TD-011: BFS Solver 的性能极限
当前 3×3×3 阶的 BFS 节点扩展通常在数千到数万级别（耗时 10-30ms），可以放在同一帧。若后续扩展 4×4×4 魔方，状态空间会呈指数爆炸，BFS 将无法胜任，必须重构为异步搜索（分帧 Tick）或使用启发式 IDA*。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-04-001 | 反向打乱法纯逻辑推演 | ✅ 使用 BackwardScrambler / ForwardMatchingScrambler 打乱有解种子。 |
| TR-04-002 | Headless 寻路验证 | ✅ 使用 CubeSurfaceNavigator + Validator 在无 Physics 环境下回放路径。 |

---

## 引擎兼容性 (Engine Compatibility)

- **引擎版本**: Unity 6000.2.10.f1
- 核心算法完全基于纯 C# `System.Collections.Generic` 结构，无任何 `UnityEngine` 命名空间下的运行时限制调用。
- 高度并发安全（如果不共享 RNG 实例的话，未来可转移至 Worker Thread）。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0003（基于其确定的字典结构进行修改）
- **Depended By**: 寻路系统（复用 Headless 的 CubeSurfaceNavigator）

---

## 替代方案 (Alternatives Considered)

### 方案 B: 正向摆放 + A* 检测
随机旋转方块，然后用 A* 寻找从起点到终点的连通解。
**否决原因**: 3D 魔方的拓扑变化是非连续的。随机打乱后形成死胡同的概率极高，重试成本不可接受；而 Backward Generation 则在数学上 100% 保证至少有一条解（即原路返回）。
