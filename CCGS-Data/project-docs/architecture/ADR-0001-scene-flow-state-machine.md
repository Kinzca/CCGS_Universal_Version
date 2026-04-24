# ADR-0001: 全局场景流转与状态机架构

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

《交错空间》需要管理多个游戏阶段之间的流转：主菜单（MenuState）、无尽塔核心玩法（TowerState）、手工关卡（GateState）。
项目使用 UnityGameFramework 作为基础框架，该框架自带泛型 FSM 模块 `IFsm<T>` / `FsmState<T>`。

### 核心决策议题

1. 场景管理模式：Multi-Scene 硬切 vs 单 Master Scene 动态加载？
2. 状态机实现：框架 FSM vs 自研 StateMachine vs 第三方？
3. 状态与场景的对应关系：1:1 还是 N:1？

---

## 决策 (Decision)

### 1. 单 Master Scene + 按需加载模式

采用 **Tower.scene 作为 Master Scene**，MenuState 和 TowerState 共享该场景。
GateState 通过 `ScenesLogicSys.EnterSceneByName("Gate")` 加载独立 Gate.scene。

**理由**:
- MenuState → TowerState 的过渡仅需摄像机动画 + UI Overlay 切换，无需卸载/重载场景，过渡更平滑
- Tower.scene 中的塔数据在 MenuState 就已初始化，进入 TowerState 时零延迟
- Gate 关卡使用独立场景，避免与无尽塔的 3D 资源冲突

### 2. 基于 UnityGameFramework 的泛型 FSM

采用框架内置的 `GameModule.Fsm.CreateFsm<GameFlowManager>()` 创建状态机。
所有游戏状态继承 `GameStateBase : FsmState<GameFlowManager>`。

**理由**:
- 框架 FSM 已提供完整的生命周期（OnInit/OnEnter/OnUpdate/OnLeave）
- 状态切换通过 `ChangeState<T>()` 泛型调用，编译期类型安全
- 无需引入额外依赖，与项目已有的 GameModule 生态一致

### 3. 状态与场景的 N:1 映射

| 状态 | 场景 | 说明 |
|:---|:---|:---|
| MenuState | Tower.scene | 远景摄像机 + MenuForm Overlay |
| TowerState | Tower.scene | 游玩摄像机 + 核心玩法输入 |
| GateState | Gate.scene | 独立场景，关卡解谜 |
| LevelBlockState | Tower.scene | 过渡状态，等待关卡完成事件 |

---

## 状态流转图 (State Transition Diagram)

```text
[App Launch]
    │
    ▼
MenuState (Tower.scene)
    │ 玩家点击"开始"
    ▼
TowerState (Tower.scene)
    │                       │
    │ 到达出口 → 滑窗续关    │ 触发关卡入口
    │ (内部循环)              │
    │                       ▼
    │               GateState (Gate.scene)
    │                       │
    │ ◀────────────────────┘ 关卡完成/取消
    │
    ▼
LevelBlockState (Tower.scene)  [过渡态]
    │ 收到 LevelCompleted 事件
    ▼
TowerState (Tower.scene)
```

---

## 初始化时序 (Initialization Sequence)

```text
1. GameApp.StartGameLogic()
   ├── Cfg.Load() — Luban 配表加载
   ├── InitSystem() — 注册所有 LogicSys 单例
   └── GameFlowManager.Instance.Start(
           MenuState, TowerState, GateState, GameLoadingState)
       └── FSM 创建 → 自动进入 MenuState

2. MenuState.OnEnter()
   ├── ScenesLogicSys.EnterSceneByName("Tower") — 加载主场景
   ├── GameSaveManager.Load() — 加载存档
   ├── TowerDataSys.ResetData() — 初始化数据真源
   ├── TowerCinemaSys.SetupCinemachine() — 初始化摄像机
   ├── TowerCenterSys.InitTower() — 生成/恢复塔
   ├── TowerCinemaSys.SetMenuCamera() — 远景俯视角
   └── GameModule.UI.OpenForm<MenuForm>() — 显示菜单

3. TowerState.OnEnter() (玩家点击"开始"后)
   ├── 检测 IsInMenuCamera → TransitionFromMenuAsync()
   │   └── 摄像机过渡动画 (2s) → 启用输入
   └── (后续进入 OnUpdate 驱动循环)
```

---

## 已知的技术债务与改进方向

### TD-001: GameLoadingState 遗留注册
`GameLoadingState` 已被 `MenuState` 取代，但仍注册在 FSM 中。可在后续清理中移除。

### TD-002: 状态内部直接持有业务逻辑
`TowerState.OnUpdate()` 中直接驱动 DDA、输入检测、拖拽旋转等大量逻辑（~500 行）。
理想情况下，状态应仅负责**生命周期编排**，具体 Tick 逻辑应委托给各 System。
这是一个可以在 Polish 阶段重构的优化点，当前不阻塞功能开发。

### TD-003: 硬编码的摄像机过渡延时
`await UniTask.Delay(2000)` 等硬编码延时散布在多个状态中。
应统一收敛到配置或 Cinemachine 自身的回调中。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-03-001 | 场景级状态机: MenuState ↔ TowerState ↔ GateState | ✅ GameFlowManager + FSM 完整实现 |
| TR-14-001 | 主菜单与塔场景同框呈现，UI 为 Overlay 遮罩 | ✅ MenuState 与 TowerState 共享 Tower.scene |

---

## 引擎兼容性 (Engine Compatibility)

- **引擎版本**: Unity 6000.2.10.f1
- **框架依赖**: UnityGameFramework (内置 FSM 模块)、UniTask (异步流)、DOTween (动画)
- **Post-Cutoff API 风险**: 无。所有使用的 API 均在 Unity 6000.2.10.f1 稳定范围内。
- **已废弃 API**: 无。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: 无（此 ADR 为 Foundation 层根决策）
- **Depended By**: ADR-0002 (事件总线)、ADR-0004 (存档系统)、ADR-0008 (UI 框架)

---

## 替代方案 (Alternatives Considered)

### 方案 B: Multi-Scene 硬切换
每个状态对应一个独立 Unity Scene，通过 `SceneManager.LoadScene()` 切换。
**否决原因**: MenuState → TowerState 过渡需要无缝摄像机动画，硬切会导致黑屏闪烁。
且塔数据需要在 Menu 阶段就初始化（用于远景展示），硬切会导致重复加载。

### 方案 C: 自研轻量 StateMachine
不使用框架 FSM，自行实现一个简单的 `Dictionary<Type, IState>` 状态机。
**否决原因**: 框架 FSM 已经提供了我们需要的全部功能，且与 GameModule 生态深度集成。
自研会增加维护成本，且失去框架 Debugger 窗口的状态可视化能力。
