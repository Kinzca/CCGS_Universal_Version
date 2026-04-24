# ADR-0006: 基于方块表面法线的寻路系统

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

游戏中的玩家角色并不是在一个平坦的地面上移动，而是在一个 3×3×3 的立方体网格表面上行走。随着玩家重力的改变和魔方切片的旋转，所谓的“上方”和“前方”都是动态的。这使得传统的 Unity NavMesh 或简单的 A* 寻路完全失效，因为它们都假设了一个固定的世界坐标重力方向（通常是 -Y）。

在这一前提下，我们需要一套寻路和位移验证机制，能够处理：
1. 玩家可以站在方块的 6 个面上（取决于当前重力）。
2. 在平地和楼梯之间无缝移动。
3. 这些验证必须能够在 Headless（无 Unity Physics）环境下运行，以支撑生成器的 PCG 推演。

### 核心决策议题

1. 如何定义方块的表面几何以及它的可连通性？
2. 移动规则由谁仲裁？是写在 PlayerState 内部还是分离为一个独立的子系统？

---

## 决策 (Decision)

### 1. 采用 `CubeSurfaceNavigator` 独立系统

寻路和位移验证的核心仲裁逻辑从具体的调用方（如玩家状态机或 PCG 生成器）中抽离，形成一个无状态的静态工具类 `CubeSurfaceNavigator`。

**优势**:
- 统一了运行时玩家移动验证与 PCG 生成验证两套逻辑的入口（真源唯一）。
- 支持在纯逻辑（Headless）环境下进行运算，所有坐标输入均为 `Vector3Int`。

### 2. 引入 `ISurfaceTraversalResolver` 策略模式

方块种类繁多（平地、楼梯、甚至未来的滑冰面、弹簧等）。通过注册不同的 `ISurfaceTraversalResolver` 来处理不同种类的表面通行验证。

目前实现了两个核心 Resolver:
- `FlatTraversalResolver`：处理同层平面移动（包含跨越空位）。
- `StairTraversalResolver`：处理涉及楼梯的高低跨层移动。

调度逻辑是：遍历所有注册的 resolvers，只要有一个 `CanResolve` 返回 true，就调用其 `TryResolve` 进行具体的计算。如果所有 resolver 均不通过，则视为不可达。

### 3. 基于 `FaceInfo` 和表面法线的抽象

决定玩家能否走到某个格子的条件，不在于这个方块整体是什么（`BlockType`），而在于**玩家目前踩在这个方块的哪一个面上**，以及**这个面的几何形状是什么**。

每个方块（`BlockModelInfo`）在初始化时，会记录其 6 个面的 `OriginalFaceMap`。当方块旋转时，生成 `RuntimeFaceMap`。
- 玩家的站立面判定，直接通过 `GravityUtil.GravityToFace(Actor.GravityDir)` 获取。
- 通过取出该面的 `FaceInfo`，判断其 `FaceGeometry`（Flat / Step）和 `FaceTraversal`（通行许可）。
- 一切逻辑都基于这一套离线的面信息映射，从而摆脱了对于碰撞体 (Collider) 的依赖。

---

## 已知的技术债务与改进方向

### TD-012: Resolver 注册顺序耦合
目前 `CubeSurfaceNavigator` 内部是通过一个 `List<ISurfaceTraversalResolver>` 进行硬编码顺序初始化的（先 Flat 后 Stair）。由于有些场景下（例如走到楼梯底部的平地上），Flat 和 Stair 的 `CanResolve` 可能会发生抢占，后续需要更严格的职责划分或者支持优先级权重的注册机制。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-02-001 | 基于方块表面法线的寻路 | ✅ 利用 FaceInfo 与 Resolver 策略模式完成对表面的纯逻辑判定，脱离 Unity 碰撞体和 NavMesh。 |

---

## 引擎兼容性 (Engine Compatibility)

- **引擎版本**: Unity 6000.2.10.f1
- 完全使用基础 C# 类型和 Unity 内置 `Vector3Int` 计算，对 `Transform` 的读取仅在 `CanActorStandAt` 的警告日志中使用，容许 `null` 值输入，保证了 100% 的 Headless 兼容性。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0003（基于其 3D Dictionary 坐标系）
- **Depended By**: ADR-0005（PCG 管线中的 Validator 深度依赖本系统进行路径连通性检查）
