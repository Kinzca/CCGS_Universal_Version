# 交错空间 (InterwovenSpace) — 主架构蓝图

## 文档状态
- **版本**: 1.0
- **最后更新**: 2026-04-24
- **引擎**: Unity 6000.2.10.f1 (C#)
- **配置系统**: Luban
- **GDDs 覆盖**: 01-game-overview, 02-player-controls, 03-tower-system, 04-level-generation, 05-block-traversal, 06-dda-flow-theory, 07-rendering-visual, 08-ar-interaction, 09-numerical-config, 12-audio-design, 14-ui-ux-design
- **ADRs 引用**: ADR-0001 (场景流转), ADR-0002 (事件总线), ADR-0003 (坐标系与数据真源), ADR-0004 (存档系统), ADR-0005 (PCG 生成管线), ADR-0006 (方块表面寻路), ADR-0007 (DDA 打乱步数), ADR-0008 (Luban 配表注入), ADR-0009 (主菜单 Overlay)
- **Technical Director Sign-Off**: 待签署
- **Lead Programmer Feasibility**: 待评估

---

## 引擎知识缺口摘要

| 风险等级 | 领域 | 说明 |
|:---|:---|:---|
| MEDIUM | Unity 6000.2.10.f1 全量 API | 较新版本，存在部分 LLM 知识断层，需查阅 Reference |
| MEDIUM | Luban 配表工具链 | Luban 版本迭代较快，生成的 C# 绑定代码结构可能与训练数据版本有细微差异，实现时需对照项目内实际生成产物 |

> **结论**: 本项目引擎风险极低。唯一需要关注的是 Luban 工具链的版本兼容性，在实现 ADR-0003 时需确认。

---

## 技术需求基线

从 12 份 GDD 中提取的核心技术需求，驱动后续所有架构决策。

| Req ID | GDD | System | Requirement | Domain |
|:---|:---|:---|:---|:---|
| TR-01-001 | 01-overview | Tower | 3×3×3 滑动窗口架构（无尽层级，视野常驻 3 层） | Foundation |
| TR-01-002 | 01-overview | Input | 固定 90° 的面切片旋转操控 | Core |
| TR-02-001 | 02-controls | Navigation | 基于方块表面法线的网格系统寻路与移动 | Core |
| TR-03-001 | 03-tower | State | 场景级状态机: MenuState ↔ TowerState ↔ GateState | Foundation |
| TR-03-002 | 03-tower | Data | 塔系统数据真源隔离（当前窗口快照与历史剥离） | Foundation |
| TR-04-001 | 04-pcg | Generation | 基于反向打乱法 (Backward Scrambling) 的纯逻辑状态树推演 | Core |
| TR-04-002 | 04-pcg | Validation | 脱离 Unity 视图的 Headless 寻路/通关验证 (Action Simulator) | Core |
| TR-05-001 | 05-block | Physics | 方块逻辑坐标系 (Grid) 与世界坐标系 (World) 解耦双向映射 | Core |
| TR-06-001 | 06-dda | Analytics | 采集退回率/停留时间，使用 EWMA 算法评估玩家水平 | Feature |
| TR-06-002 | 06-dda | Config | 动态控制 PCG 打乱步数 M 与最优解深度限制 | Feature |
| TR-09-001 | 09-config | Luban | 所有数值配表与 PCG 生成模板由外部 JSON/Excel 经 Luban 注入 | Foundation |
| TR-14-001 | 14-ui | Presentation | 主菜单与塔场景同框呈现，UI 为 Overlay 遮罩 | Presentation |

---

## 系统层级映射 (System Layer Map)

### 架构核心原则

**严格单向依赖**: 高层可以调用低层，低层绝不允许知道高层的存在。
Core 层必须可以完全脱离 Unity 的 GameObject 运行（Headless），以支撑纯逻辑生成与验证。

### 层级划分

```text
PRESENTATION (表现层)
  负责与 Unity 组件打交道：播放动画、音效、粒子特效，更新 UI，捕获原始输入。
  本层可以读取 Core 层的数据，但不包含核心游戏规则。
      │
      ▼
FEATURE (功能层)
  建立在基础玩法之上，不直接决定关卡能不能通关，
  但决定了游戏节奏和附加体验。
      │
      ▼
CORE (核心层)
  游戏的"心脏"。纯逻辑层，实现所有规则、状态推演和数学校验。
  此层必须可以完全脱离 Unity 的 GameObject 运行（Headless）。
      │
      ▼
FOUNDATION (基建层)
  为整个游戏提供基础设施支撑：生命周期流转、全局数据表、
  存档管理、事件总线。
      │
      ▼
PLATFORM (引擎平台层)
  引擎本体或第三方底层库。
```

### 模块到层级的映射

| Layer | 归属模块 | 对应 GDD |
|:---|:---|:---|
| **PRESENTATION** | `TowerTransitionAnimator` (滑窗动画), `ActionFailFeedbackSys` (失败反馈), `UI Toolkit / HUD` (菜单交互), `Audio System` (音效播放) | 07, 12, 14 |
| **FEATURE** | `TowerBehaviorTracker` (行为追踪), `EwmaTowerSkillEstimator` (水平估算), `TowerRhythmController` (节奏波), `AdaptiveTowerDdaProvider` (DDA 调控) | 06 |
| **CORE** | `TowerCenterSys` (塔核心控制), `TowerGeneratorSys` (PCG 生成), `CubeSurfaceNavigator` (表面导航), `RotationSafetyValidator` (旋转校验), `TowerActionSimulator` (动作模拟), `TowerBfsSolver` (BFS 验证), `TowerBackwardScrambler` (反向打乱), `TowerForwardMatchingScrambler` (续窗匹配), `RotateKeyDecision` (视角-输入映射) | 02, 03, 04, 05 |
| **FOUNDATION** | `TowerState / SceneStateMachine` (场景流转), `TowerDataSys` (塔数据真源), `TowerPatternProvider` (Luban 配表解析), `Event Bus` (事件总线), `SaveManager` (存档管理) | 01, 09 |
| **PLATFORM** | Unity Engine API, Luban SDK | — |

---

## 模块所有权 (Module Ownership)

### FOUNDATION 层

#### TowerDataSys (塔数据真源)
- **Owns**: `CurrentWindowResult` — 当前 3×3×3 窗口内所有 27 个 Block 的数据实体
- **Exposes**: `GetBlockAt(x,y,z)`, `UpdateBlock(x,y,z, data)`, `ApplyNewWindow()`
- **Consumes**: 基建层配置
- **Engine APIs**: 无（纯 C# 数据结构）

#### TowerPatternProvider (Luban 配表规则解析)
- **Owns**: Luban 三表（方块模板、难度梯度、关卡配置）的运行时缓存
- **Exposes**: `GetPatternProfile(difficulty)`, `GetBlockTemplate(id)`
- **Consumes**: Luban 生成的 C# 绑定类
- **Engine APIs**: Luban SDK

#### Event Bus (事件总线)
- **Owns**: 事件订阅注册表
- **Exposes**: `Subscribe<T>(handler)`, `Publish<T>(event)`
- **Consumes**: 无
- **Engine APIs**: 无（纯 C#）

### CORE 层

#### TowerCenterSys (塔核心控制)
- **Owns**: 当前塔的旋转角度轴、玩家逻辑坐标 (Logical Position)
- **Exposes**: `TryMove(Direction)`, `TryRotateLayer(int layerIndex, int angle)`
- **Consumes**: `RotationSafetyValidator` (操作前校验), `TowerDataSys` (操作后修改)
- **Engine APIs**: 无

#### TowerGeneratorSys (PCG 生成编排器)
- **Owns**: 生成树的计算状态队列、种子 (Seed)
- **Exposes**: `GenerateNextWindow(difficulty)` → 返回 `TowerWindowGenerationResult`
- **Consumes**: `TowerPatternProvider` (模板配置), `AdaptiveTowerDdaProvider` (难度系数 M)
- **Engine APIs**: 无（纯逻辑生成）

#### CubeSurfaceNavigator (表面导航器)
- **Owns**: 无状态 (Stateless utility)
- **Exposes**: `CalculateNextPosition(currentPos, inputDir, gridData)`
- **Consumes**: `TowerDataSys`（只读）
- **Engine APIs**: 无

#### RotationSafetyValidator (旋转安全校验)
- **Owns**: 无状态 (Stateless utility)
- **Exposes**: `CanRotate(layerIndex, playerPos)` → bool
- **Consumes**: `TowerDataSys`（只读）
- **Engine APIs**: 无

### FEATURE 层

#### AdaptiveTowerDdaProvider (DDA 难度调控)
- **Owns**: 当前难度系数、EWMA 滑动平均值、节奏波相位
- **Exposes**: `GetCurrentDifficulty()`, `ReportPlayerAction(action)`
- **Consumes**: `TowerBehaviorTracker` (行为指标)
- **Engine APIs**: 无

---

## 数据流转 (Data Flow)

### 1. 核心游戏循环：切片旋转 (Input → Core → Rendering)

```text
[Presentation] 玩家拖拽/按键
      │
      ▼ TryRotateLayer(layer, angle)
[Core] RotationSafetyValidator.CanRotate() ──→ 拒绝 ──→ [Presentation] 播放弹回动画
      │ 通过
      ▼
[Core] TowerCenterSys.RotateLayer() ──→ 修改 TowerDataSys 的 Block 矩阵
      │
      ▼ 触发 OnLayerRotated 事件
[Foundation] Event Bus 派发
      │
      ▼ 监听
[Presentation] TowerView 播放 Transform 旋转动画 + AudioSystem 播放音效
```

> **通信方式**: 同步调用（Input → Core），C# Event 单向广播（Core → Presentation）

### 2. 无尽滑窗生成流 (Window Shifting)

```text
[Core] TowerCenterSys 检测 PlayerPos == Window.ExitPos
      │
      ▼ 请求生成
[Core] TowerGeneratorSys.GenerateNextWindow(M)
      │  → TowerRandomPathSampler 采样主路径
      │  → TowerBackwardScrambler 反向打乱
      │  → TowerBfsSolver 验证可解性
      │
      ▼ 返回 TowerWindowGenerationResult
[Foundation] TowerDataSys.ApplyNewWindow()
      │  → 底层销毁，中/顶层下移，新顶层写入
      │
      ▼ 触发 OnWindowShifted 事件
[Presentation] TowerTransitionAnimator 播放错落入场/退场动画
```

> **通信方式**: 同步调用链（Core 内部），C# Event 广播（Foundation → Presentation）

### 3. 存档与读档流 (Save/Load)

```text
[Foundation] SaveManager 序列化以下数据:
      ├── TowerDataSys: 当前窗口的 Block 逻辑坐标与类型
      ├── TowerCenterSys: 玩家逻辑坐标 (Vector3Int)
      ├── DdaProvider: EWMA 技能值、节奏波相位
      └── Meta: 塔高度记录、Seed
```

> **规则**: 绝不序列化 Unity Transform / GameObject 引用。SaveManager 仅操作纯 C# 数据结构。
> **格式**: JSON (开发期易调试) → 发布时可切换为 Binary + 校验

### 4. 初始化顺序 (Initialization Order)

```text
1. [Platform]    Unity Engine 启动，加载 Tower.scene
2. [Foundation]  Luban 配表加载 → TowerPatternProvider 初始化
3. [Foundation]  Event Bus 初始化
4. [Foundation]  SaveManager 加载存档（若有）
5. [Foundation]  TowerDataSys 初始化（从存档恢复或空白初始化）
6. [Core]        TowerCenterSys 初始化（绑定 DataSys）
7. [Core]        TowerGeneratorSys 初始化（绑定 PatternProvider）
8. [Feature]     DDA 系统初始化（绑定 BehaviorTracker）
9. [Presentation] TowerView / UI / Audio 初始化（订阅事件）
10. [Foundation]  SceneStateMachine → 进入 MenuState
```

---

## API 边界契约 (API Boundaries)

Core 层暴露给 Presentation 层的公共接口。表现层**只能**通过这些接口与游戏世界交互。

### IPlayerController — 玩家移动控制边界

```csharp
/// <summary>
/// 玩家移动控制接口。表现层通过此接口请求角色移动。
/// 核心层内部完成寻路验证，返回结果供表现层选择播放对应动画。
/// </summary>
public interface IPlayerController
{
    /// <summary>
    /// 尝试向目标方向移动。由 CubeSurfaceNavigator 计算可行性。
    /// 返回值代表移动结果：成功、被阻挡、悬空等。
    /// </summary>
    MoveResult TryMove(Direction inputDir);

    /// <summary>
    /// 获取当前玩家的逻辑坐标（用于保存游戏或初始化模型位置）。
    /// </summary>
    Vector3Int GetLogicalPosition();
}
```

### ITowerController — 塔空间控制边界

```csharp
/// <summary>
/// 塔旋转控制接口。表现层通过此接口请求层旋转。
/// 同时提供事件订阅，用于表现层解耦监听状态变化。
/// </summary>
public interface ITowerController
{
    /// <summary>
    /// 尝试旋转指定层级。layerIndex: 0=Bottom, 1=Middle, 2=Top。
    /// angle 必须为 90 或 -90。返回旋转结果（成功/拒绝/原因）。
    /// </summary>
    RotationResult TryRotateLayer(int layerIndex, int angle);

    /// <summary>
    /// 窗口滑移事件。当玩家到达出口触发新窗口生成完毕后触发。
    /// </summary>
    event Action<WindowShiftEventArgs> OnWindowShifted;

    /// <summary>
    /// 层旋转事件。旋转逻辑执行完毕后触发，携带旋转轴和角度信息。
    /// </summary>
    event Action<LayerRotatedEventArgs> OnLayerRotated;
}
```

### ITowerDataProvider — 塔数据只读边界

```csharp
/// <summary>
/// 塔数据只读接口。渲染器和存储系统通过此接口读取当前窗口状态。
/// 此接口不允许修改数据，确保表现层无法绕过核心层篡改游戏状态。
/// </summary>
public interface ITowerDataProvider
{
    /// <summary>
    /// 获取当前 3×3×3 窗口内的所有逻辑方块数据。
    /// </summary>
    IReadOnlyList<BlockData> GetCurrentWindowBlocks();

    /// <summary>
    /// 检查某个坐标是否存在有效的方块结构。
    /// </summary>
    bool HasBlockAt(Vector3Int logicalPos);
}
```

---

## ADR 审查 (ADR Audit)

### 当前 ADR 状态

| ADR | 标题 | 状态 | 覆盖层级 |
|:---|:---|:---|:---|
| ADR-0001 | 全局场景流转与状态机架构 | Accepted | Foundation |
| ADR-0002 | 事件总线与跨层通信规范 | Accepted | Foundation |
| ADR-0003 | 逻辑坐标系与塔数据真源设计 | Accepted | Core / Foundation |
| ADR-0004 | 存档序列化与确定性状态重建 | Accepted | Foundation |
| ADR-0005 | 确定性 PCG 生成与反向打乱管线 | Accepted | Core |
| ADR-0006 | 基于方块表面法线的寻路系统 | Accepted | Core |
| ADR-0007 | DDA 自适应打乱步数控制 | Accepted | Foundation |
| ADR-0008 | Luban 配置表的全局注入与访问模式 | Accepted | Foundation |
| ADR-0009 | 主菜单 Overlay 遮罩与 3D 场景融合架构 | Accepted | Feature |

其他待创建 ADR 见下方「必须撰写的 ADR 清单」。

### 追溯覆盖校验

| Req ID | Requirement | ADR Coverage | Status |
|:---|:---|:---|:---|
| TR-01-001 | 3×3×3 滑动窗口架构 | ADR-0003 | ✅ |
| TR-01-002 | 固定 90° 面切片旋转 | ADR-0003 | ✅ |
| TR-02-001 | 基于方块表面法线的寻路 | ADR-0006 | ✅ |
| TR-03-001 | 场景级状态机 | ADR-0001 | ✅ |
| TR-03-002 | 塔数据真源隔离 | ADR-0002 | ✅ |
| TR-04-001 | 反向打乱法纯逻辑推演 | ADR-0005 | ✅ |
| TR-04-002 | Headless 寻路验证 | ADR-0005 | ✅ |
| TR-05-001 | 逻辑坐标系与世界坐标系映射 | ADR-0003 | ✅ |
| TR-06-001 | EWMA 玩家水平评估 | ADR-0004 | ✅ |
| TR-06-002 | 动态打乱步数控制 | ADR-0007 | ✅ |
| TR-09-001 | Luban 配表注入 | ADR-0008 | ✅ |
| TR-14-001 | 主菜单 Overlay 遮罩 | ADR-0009 | ✅ |

**统计**: 12 covered, 0 gaps

---

## 必须撰写的 ADR 清单 (Required ADRs)

### Foundation 层（在开始写游戏代码前必须拥有）

| 编号 | ADR 标题 | 覆盖需求 | 核心议题 |
|:---|:---|:---|:---|
| ADR-0001 | 全局场景流转与状态机架构 | TR-03-001 | SceneManager 硬切 vs 单 Master Scene 动态加载；FSM 实现方案 |
| ADR-0002 | 事件总线与跨层通信规范 | TR-03-002 | C# 原生 Action vs EventBus 中心总线 vs UniRx 响应式 |
| ADR-0003 | 逻辑坐标系与塔数据真源设计 | TR-05-001, TR-01-001 | 3D 数组结构；面旋转的矩阵重映射算法 |
| ADR-0004 | 存档与持久化数据结构 | TR-06-001 | JSON vs Binary；存档防篡改；统一接管点 |

### Core 层（在实现核心玩法系统前必须拥有）

| 编号 | ADR 标题 | 覆盖需求 | 核心议题 |
|:---|:---|:---|:---|
| ADR-0005 | 纯逻辑 PCG 框架设计 | TR-04-001, TR-04-002 | Headless 生成约束：禁用 GameObject/Transform；纯 C# Class |
| ADR-0006 | 表面导航与旋转安全校验 | TR-02-001, TR-01-002 | 方块表面法线寻路算法；旋转合法性判定规则 |

### Feature 层（在构建对应功能模块前撰写）

| 编号 | ADR 标题 | 覆盖需求 | 核心议题 |
|:---|:---|:---|:---|
| ADR-0007 | DDA 动态难度调控架构 | TR-06-001, TR-06-002 | EWMA 参数选择；难度曲线映射；节奏波控制 |

### Presentation 层（可延迟到实现阶段）

| 编号 | ADR 标题 | 覆盖需求 | 核心议题 |
|:---|:---|:---|:---|
| ADR-0008 | UI 框架与菜单/HUD 架构 | TR-14-001 | UI Toolkit vs UGUI；Overlay 遮罩实现方式 |

---

## 架构原则 (Architecture Principles)

基于游戏概念、GDD 和技术偏好，以下 5 条原则指导本项目所有技术决策：

1. **逻辑与视图分离 (Logic-View Separation)**
   Core 层的所有模块必须以纯 C# Class 实现，不依赖 MonoBehaviour / GameObject / Transform。这使得 PCG 生成和通关验证可以在无 Unity 渲染环境下执行（Headless）。

2. **数据真源唯一性 (Single Source of Truth)**
   每一份游戏状态数据只在一个模块中拥有写权限。`TowerDataSys` 是窗口方块数据的唯一真源；`DdaProvider` 是难度系数的唯一真源。其他模块只能通过只读接口访问。

3. **事件驱动的跨层通信 (Event-Driven Cross-Layer Communication)**
   低层（Core/Foundation）通过事件广播状态变化，高层（Presentation）通过订阅事件获取更新。禁止高层轮询低层状态，禁止低层直接调用高层方法。

4. **配置外置与数据驱动 (Data-Driven Configuration)**
   所有数值参数（方块模板、难度曲线、DDA 系数）由 Luban 配表管理，运行时通过 `TowerPatternProvider` 注入。硬编码魔法数字是被禁止的。

5. **100% 可解性保证 (Guaranteed Solvability)**
   PCG 生成管线的核心约束：每一个生成的窗口必须通过 `TowerBfsSolver` 的自动化通关验证。验证失败的窗口必须被丢弃并重新生成，绝不交付给玩家。

---

## 待解决问题 (Open Questions)

以下决策已推迟，必须在对应层级开始编码前做出：

1. **ADR-0001 未决**: 场景管理采用 Master Scene 模式还是 Multi-Scene 模式？需要结合团队规模和热重载需求评估。
2. **ADR-0002 未决**: 事件总线是否需要支持优先级和取消传播？还是保持最简的 `Action<T>` 委托？
3. **ADR-0003 未决**: 面旋转的矩阵变换是使用查找表 (LUT) 还是实时四元数旋转映射？需要性能测试。
4. **AR 模块 (GDD-08)**: AR 交互目前标记为"规划中"，架构层级已预留 Feature 层位置，但不为其编写 ADR，直到决定正式纳入。
5. **多线程**: PCG 生成是否需要放到后台线程以避免帧率卡顿？当前假设窗口生成足够快（<16ms），但复杂配置下可能需要异步化。
