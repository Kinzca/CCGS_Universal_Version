# Game Design Document: 关卡生成系统

> **系统：** Procedural Generation, Forward Matching Scramble & Validation  
> **版本：** 1.4  
> **设计：** Game Designer  
> **最后更新：** 2026-04-21

---

## 1. 生成哲学

> **从解出发，反向打乱，数学保证可解。**

不采用"先随机生成再暴力验解"的方式——因为带旋转和滑动约束的3D解谜是 **PSPACE-Complete** 级别的（见 Erik Demaine 相关研究），运行时枚举解会导致掉帧甚至卡死。

采用学术界与工业界一致推荐的**反向打乱法（Backward Scrambling）**：
- 数学本质：群论中"置换群"的可逆性
- 工业先例：WCA 官方乱序程序 `TNoodle` 使用同一原理
- 可解性保证：100%，无需额外验证

---

## 2. 生成主流程

### 2.1 Solved Seed 构造

```
1. 继承：旧顶层作为新底层
2. 构建主路径：新增中层/顶层，保证至少一条 "入口 → 中层 → 顶层" 可达链
3. 填充：其他格子用块池按权重填充，但不堵死主路径
```

### 2.2 反向打乱（Backward Scrambling）

实现类：`TowerBackwardScrambler`（纯逻辑，无 Unity 视图依赖）

```
1. 从已解状态（solved-seed）出发
2. 按 DDA 配置的步数 M 逆向施加合法动作
3. 混合操作集：12 种面旋转 + 4 种玩家移动（按 ScrambleMoveWeight 权重）
4. 轴过滤：仅使用 ScrambleAxis 配置的轴（0=Y, 1=X, 2=Z）
5. 剪枝策略：
   - 立即逆操作排除（避免原地打转）
   - 状态哈希去重（避免环路回退）
   - 玩家安全校验（复用 TowerRotationSafetyEvaluator）
6. 记录 ScrambleHistory（支持可追溯性验证）
```

### 2.3 最短解验证（BFS Solver）

实现类：`TowerBfsSolver`（纯逻辑，无 Unity 视图依赖）

#### 算法

采用广度优先搜索（BFS），从打乱后状态出发，搜索到达 solved-seed 的最短路径：

```
BFS(打乱后状态, 目标哈希, 搜索上限):
  1. 初始化队列和 visited 集合
  2. 层序展开全部 16 种语义动作
  3. 复用 TowerSimStateHasher 去重
  4. 命中目标哈希时返回最短解指标
  5. SolverNodeCap 截断保护
```

#### 目标条件

| 版本 | 目标条件 | 说明 |
|:-----|:---------|:-----|
| **第一版**（当前） | 模型状态还原 | goalHash 只编码方块状态，不含玩家坐标。模型还原后路径自然存在 |
| **后续升级** | 玩家到达顶层 | 检测玩家是否能不还原模型就通过“捷径”到达顶层，避免难度偏低 |

> **重要**：Tower 的通关条件是**到达顶层**（TopLayerAny），而非到达特定目标格子。这意味着多次旋转后可能产生绕过“正解”的捷径，使实际难度低于打乱步数预期。后续版本的求解器需要同时检测此类捷径。

#### DDA 约束检查

```
接受条件：
  ✓ Reachable == true
  ✓ RotateCount ∈ [TargetRotateDepthMin, TargetRotateDepthMax]
  ✓ TotalActions ≤ MaxTotalActions
  ✓ MoveCount ≤ MaxMoveActions

不满足 → 丢弃候选，重新打乱（受 ScrambleRetryLimit 约束）
```

#### 算法演进路线

| 阶段 | 算法 | 适用范围 | 备注 |
|:-----|:-----|:---------|:-----|
| 第一版（当前） | BFS + SolverNodeCap 截断 | M ≤ 8 | 实现简单，无需启发函数 |
| 第二版 | IDA* + 简单启发（错位方块计数） | M ≤ 15 | 内存 O(d)，需设计 admissible 启发函数 |
| 第三版 | IDA* + Pattern Database | M ≤ 20+ | 预计算 pattern 数据库，最优性能 |

### 2.4 代码示例

```csharp
// 打乱配置从 DDA 规则表构建
TowerScrambleProfile profile = BuildScrambleProfile(ddaRule);

// ScrambleStepCount=0 时跳过打乱，向后兼容
if (profile.StepCount > 0)
{
    if (TowerBackwardScrambler.TryScramble(
            result.Model, result.SpawnCoord, profile, rng,
            out TowerScrambleResult scrambleResult))
    {
        // 打乱成功：用打乱后的模型和出生点替换原始 solved-seed
        result.Model = scrambleResult.ScrambledModel;
        result.SpawnCoord = scrambleResult.ScrambledSpawnCoord;
        result.ScrambleResult = scrambleResult;
    }
    else
    {
        // 打乱失败为非阻塞性警告，仍使用未打乱的 solved-seed
        Log.Warning("打乱失败，回退到未打乱状态");
    }
}
```

---

## 3. 块池系统 (Block Pool)

### 3.1 双池模型

| 池 | 配置键 | 用途 |
| :--- | :--- | :--- |
| 主路径池 | `MainPathBlockPoolId` | 主路径上使用的方块模型 |
| 外围池 | `OuterBlockPoolId` | 非主路径区域的填充方块 |

### 3.2 权重分配

- 池内每个模型有 `SpawnWeights` 控制出现概率
- 从 `TowerSegmentRule → TowerBlockPool → TbBlockModel` 解析可用模型
- 优先解析 flat-capable 模型和 step-capable 模型

### 3.3 DifficultyWeights 定位

> **如果未来保留 `DifficultyWeights`，它应是对 `SpawnWeights` 的调制层，不是替代。**

---

## 4. 路径保护机制

外围补全不得破坏主路径关键位的运行时合同。

### 4.1 保护类型

| 类型 | 内容 |
| :--- | :--- |
| `OccupiedReserve` | 主路径节点自身坐标 |
| `StandabilityReserve` | 站立所需的净空位 |
| `SupportReserve` | Spawn/Goal 周边最小支撑邻域 |

### 4.2 各节点保护规则

| 节点 | 保护内容 |
| :--- | :--- |
| **Spawn** | 节点自身 + 上方 headroom + 至少一个基础落脚邻位 |
| **Goal** | 节点自身 + 上方 headroom + 至少一个到达邻位 |
| **Flat** | 节点自身 + 上方净空 |
| **Step** | 节点自身 + 楼梯通行所需净空 + 楼梯前后承接位 |

### 4.3 最低结构模板

外围补全拆成两层：
1. **最低结构模板层**：Spawn/Goal 基座、底层支撑、附着性保障
2. **噪声装饰层**：死胡同/噪声填充（在模板之上叠加）

---

## 5. 验证器 (Validator)

### 5.1 职责收敛

> **`ValidatePrimaryRoute(...)` 只做回放，不做找路。**

| 输入 | 来源 |
| :--- | :--- |
| `PrimaryBottomPath` | 生成阶段显式写入的底层主路径 |
| Middle 上楼 | 固定两步 |
| Top 上楼 | 固定两步 |

### 5.2 禁止行为

- ❌ 从 `ReservedWalkable` 找底层路
- ❌ 从 `PrimaryBottomTraversableCoords` 反推
- ❌ 推断替代路径
- ❌ 调用 BFS 生成"更像能走"的路

### 5.3 路径来源原则

> 底层主路径只能来自：**入口 footprint + 出口 footprint + 生成器显式连接结果**

---

## 6. 失败码体系

结构化失败码，每个阶段都保留失败码分布与诊断日志：

### 6.1 CP0 基线失败码

| 失败码 | 说明 |
| :--- | :--- |
| `TemplateResolutionFailed` | 模板解析失败（如无step-capable模型） |
| `EntrySpecInvalid` | 入口规范无效 |
| `AbstractPlanInvalid` | 抽象层计划无效 |
| `MaterializationFailed` | 物化失败 |
| `SpawnMissing` | 出生点缺失 |
| `GoalMissing` | 目标点缺失 |
| `WindowResultInvalid` | 窗口结果完整性校验失败 |
| `RuntimeBootstrapFailed` | 运行时初始化失败 |

### 6.2 续关失败码

| 失败码 | 阶段 | 说明 |
| :--- | :--- | :--- |
| `ContinuationSpecInvalid` | CP1 | 续关规范无效 |
| `TopProjectionFailed` | CP1 | 顶层投影失败 |
| `ProjectedEntryInvalid` | CP1 | 投影后入口无效 |
| `ExitPreflightFailed` | CP5 | 出口前瞻筛选失败 |
| `NoValidProjectedNextEntry` | CP5 | 无有效投影入口 |
| `NoValidNextExitCandidate` | CP5 | 无有效出口候选 |

---

## 7. 纯逻辑模拟层

用于生成器和求解器推演，**不依赖 Unity 视图对象**：

```csharp
public sealed class TowerSimState
{
    public CubeModel Model;
    public TowerPlayerSnapshot Player;
    public int RotateActionCount;
    public int MoveActionCount;
    public int TotalActionCount;
}

public sealed class TowerPlayerSnapshot
{
    public Vector3Int StandCoord;
    public GravityDir GravityDir;
    public float Height;
}

public interface ITowerActionSimulator
{
    bool TryApplyMove(TowerSimState state, TowerSemanticAction action, 
                      out TowerSimState nextState);
    bool TryApplyRotate(TowerSimState state, TowerSemanticAction action, 
                        out TowerSimState nextState);
}
```

### 7.1 语义动作集

```
移动：MoveNorth / MoveSouth / MoveWest / MoveEast
旋转：RotateTop / RotateBottom / RotateLeft / RotateRight（正/逆）
```

---

## 8. 远期规划

### 8.1 续窗打乱算法 — 正向匹配打乱（已实现，续窗唯一路径）

> **状态**：✅ 已实现（续窗唯一打乱路径，不再回退反向打乱）  
> **实现日期**：2026-04-21  
> **实现文件**：`TowerForwardMatchingScrambler.cs`  
> **文献资料**：[`research/01-partial-state-matching/`](../research/01-partial-state-matching/)

#### 三级约束模型

| 层级 | 约束目标 | 策略 |
| :--- | :--- | :--- |
| **Level 0 硬约束** | 玩家脚下格（`PlayerStandCoord` → Y=-1） | ModelId / Rotation 必须精确匹配旧顶层快照 |
| **Level 1 软约束** | 其余 8 个底层格 | 尽可能多地匹配，最大化匹配数 k（0~8） |
| **Level 2 无约束** | Y=0, Y=1 层 | 完全不约束（通配符） |

#### 玩家位置锁定（PinPlayerPosition）

续窗时 `TowerScrambleProfile.PinPlayerPosition = true`，约束机制如下：

| 约束项 | 实现方式 |
| :--- | :--- |
| **玩家坐标不变** | BFS 候选解硬约束 `StandCoord == spawnCoord`（路径中移动可自由展开，但最终必须回到原点） |
| **脚下方块不变** | `TowerRotationSafetyEvaluator.IsInLayer` 天然阻止包含玩家坐标的层/列/行被旋转 |
| **移动操作保留** | BFS 操作池直接读取 `profile.MoveEnabled`，不受 PinPlayerPosition 影响 → DDA MoveCount 可 > 0 |

#### 算法流程

```
① 独立生成 Goal Model（与旧顶层无关）
② 从 Goal Model 出发执行带深度限制的 BFS（操作集 = 12 旋转 + 4 移动）
③ 每个展开状态评估底层匹配度（硬约束门控 + 软匹配计分）
④ PinPlayerPosition 额外检查候选解的玩家坐标 == 原始入口
⑤ 从满足全部硬约束的候选中选择 SoftMatchCount 最高的
⑥ 若完美匹配（全 9 格）→ 提前终止
⑦ 搜索失败 → 窗口保持未打乱状态（日志告警）
```

#### 与反向打乱的策略分工

| 场景 | 打乱器 | 移动操作 | 玩家坐标约束 |
| :--- | :--- | :--- | :--- |
| **首窗** | `TowerBackwardScrambler` | ✅ 包含 | 无约束（PinPlayerPosition=false） |
| **续窗** | `TowerForwardMatchingScrambler` | ✅ 包含 | 硬约束锁定（PinPlayerPosition=true） |

---

### 8.2 混合打乱操作集

打乱操作集 = **12 种旋转 + 4 种移动 = 16 种语义动作**。

- 每步按 `ScrambleMoveWeight` 权重决定选取旋转还是移动
- `ScrambleMoveEnabled=false` 时退化为纯旋转打乱（向后兼容）
- 续窗正向匹配中移动操作使解法路径包含移动步骤，DDA MoveCount > 0
- 移动打乱解锁被 `TowerRotationSafetyEvaluator` 封锁的旋转操作

