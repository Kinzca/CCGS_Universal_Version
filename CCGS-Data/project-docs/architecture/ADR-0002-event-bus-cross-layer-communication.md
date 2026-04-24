# ADR-0002: 事件总线与跨层通信规范

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

《交错空间》的五层架构（Presentation → Feature → Core → Foundation → Platform）要求
层与层之间**严格单向依赖**。但游戏运行中存在大量"低层产生数据变化，高层需要响应"的场景：

- Core 层旋转完成后，Presentation 层需要播放动画
- Foundation 层进度变化后，GameFlow 状态机需要触发关卡入口
- 关卡系统解锁后，UI 层需要刷新显示

如果高层直接被低层调用，就会违反单向依赖原则。因此需要一套**反向通知机制**。

### 核心决策议题

1. 采用哪种事件总线？框架内置 vs 自研轻量 vs 第三方响应式？
2. 事件参数如何管理内存？GC 友好 vs 手动池化？
3. 同层之间的系统如何通信？事件 vs 直接方法调用？

---

## 决策 (Decision)

### 1. 采用 UnityGameFramework 内置事件总线 (`GameModule.Event`)

使用框架提供的中心化事件管理器，通过 `Subscribe / Unsubscribe / Fire` 三板斧实现跨层解耦通信。

**API 签名**:
```csharp
// 订阅（在 OnEnter 中调用）
GameModule.Event.Subscribe(SomeEventArgs.EventId, OnSomeEvent);

// 取消订阅（在 OnLeave 中调用，必须与 Subscribe 配对）
GameModule.Event.Unsubscribe(SomeEventArgs.EventId, OnSomeEvent);

// 发布（在数据产生侧调用）
GameModule.Event.Fire(this, SomeEventArgs.Create(data));
```

**理由**:
- 框架已深度集成 `ReferencePool`（对象池），事件参数零 GC Alloc
- 基于 `int EventId`（类型哈希）的查找表，O(1) 派发性能
- 与 ADR-0001 确定的 `GameModule` 生态完全一致，无额外依赖
- 项目中已有 5 个自定义事件类型稳定运行，验证了该方案的可行性

### 2. 事件参数规范：继承 `GameEventArgs` + `ReferencePool` 池化

所有自定义事件参数必须遵循以下模板：

```csharp
public class XxxEventArgs : GameEventArgs
{
    // 1. 静态 EventId（基于类型哈希，全局唯一）
    public static readonly int EventId = typeof(XxxEventArgs).GetHashCode();
    public override int Id => EventId;

    // 2. 携带的数据字段
    public int SomeData { get; set; }

    // 3. 无参构造（ReferencePool 要求）
    public XxxEventArgs() { SomeData = 0; }

    // 4. Clear 方法（归还池时清理数据，防止脏读）
    public override void Clear() { SomeData = 0; }

    // 5. 静态工厂方法（从池中获取实例并填充数据）
    public static XxxEventArgs Create(int data)
    {
        var args = ReferencePool.Acquire<XxxEventArgs>();
        args.SomeData = data;
        return args;
    }
}
```

**规则**:
- 事件参数类**禁止**直接 `new`，必须通过 `ReferencePool.Acquire<T>()` 获取
- `Clear()` 必须将所有字段重置为默认值
- 所有事件参数类集中存放在 `Common/Structure/EventArgs.cs` 中

### 3. 跨层通信的层级规则

| 通信方向 | 允许方式 | 禁止方式 |
|:---|:---|:---|
| **高层 → 低层** (如 Presentation → Core) | 直接方法调用（通过接口） | — |
| **低层 → 高层** (如 Core → Presentation) | `GameModule.Event.Fire()` 事件广播 | 直接方法调用、直接引用高层类型 |
| **同层内部** (如 Core 内 System A → System B) | 直接方法调用（通过单例或接口注入） | — |
| **跨层且双向协作** | 高层调用低层方法 + 低层通过事件回调高层 | 循环引用、双向直接调用 |

### 4. Subscribe/Unsubscribe 配对纪律

**硬性规则**: 在 `OnEnter` 中 Subscribe 的事件，必须在 `OnLeave` 中 Unsubscribe。
违反此规则会导致：
- 状态离开后仍收到事件回调 → 空引用崩溃
- 事件处理器累积 → 同一事件被多次处理

---

## 现有事件注册表 (Current Event Registry)

项目中已定义的游戏逻辑事件：

| 事件类 | 触发者 | 订阅者 | 数据 | 用途 |
|:---|:---|:---|:---|:---|
| `TowerProgressChangedEventArgs` | `TowerProgressSys` | `TowerState` | `CurrentProgress: int` | 爬塔高度变化，触发关卡解锁检查 |
| `LevelUnlockedEventArgs` | `LevelGateSys` | (UI层) | `ChapterId + LevelIndex` | 关卡解锁通知 |
| `ChapterUnlockedEventArgs` | `LevelGateSys` | (UI层) | `ChapterId` | 章节解锁通知 |
| `LevelPendingEventArgs` | `LevelProgressSys` | `TowerState` | `PendingLevelId` | 关卡阻塞，通知状态机切换 |
| `LevelCompletedEventArgs` | `LevelProgressSys` | `LevelBlockState` | `LevelId` | 关卡完成，解除阻塞 |

### 待定义的事件（随功能迭代补充）

| 事件类 | 预期触发者 | 预期用途 |
|:---|:---|:---|
| `WindowShiftedEventArgs` | `TowerDataSys` | 窗口滑移完成，通知动画器播放过渡特效 |
| `LayerRotatedEventArgs` | `TowerCenterSys` | 层旋转完成，通知视图同步 3D Transform |
| `PlayerMovedEventArgs` | `TowerCenterSys` | 玩家逻辑移动完成，通知角色动画系统 |
| `DdaDifficultyChangedEventArgs` | `AdaptiveTowerDdaProvider` | 难度系数变化，通知 UI 调试面板 |

---

## 数据流向图示 (Data Flow with Events)

```text
[Foundation 层]                    [Core 层]                    [Presentation 层]
TowerProgressSys ──Fire──→ TowerProgressChangedEvent ──→ TowerState (订阅)
LevelProgressSys ──Fire──→ LevelPendingEvent ──────────→ TowerState (订阅)
LevelProgressSys ──Fire──→ LevelCompletedEvent ────────→ LevelBlockState (订阅)

                           TowerCenterSys ──Fire──→ LayerRotatedEvent ──→ TowerView (订阅)
                           TowerDataSys   ──Fire──→ WindowShiftedEvent ──→ TransitionAnimator (订阅)
```

> **箭头方向 = 数据流向，与依赖方向相反**。低层 Fire 事件但不知道谁在监听，高层 Subscribe 事件但不知道谁在发布。这就是解耦。

---

## 已知的技术债务与改进方向

### TD-004: 部分跨层通信仍通过直接单例调用
当前 `TowerState.OnUpdate()` 中直接调用 `TowerCenterSys.Instance.TickRotate()` 等方法。
这属于"高层 → 低层"的合法调用方向，但如果未来需要将 Core 层抽取为独立 Assembly，
需要将这些调用改为通过接口注入。当前优先级低。

### TD-005: 事件参数文件体积
所有事件参数集中在一个 `EventArgs.cs` 文件中。当事件类型超过 10 个时，
建议按领域拆分为 `TowerEventArgs.cs`、`LevelEventArgs.cs` 等。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-03-002 | 塔数据真源隔离（逻辑与表现剥离，通过事件同步） | ✅ 低层 Fire 事件 → 高层 Subscribe 响应 |

---

## 引擎兼容性 (Engine Compatibility)

- **引擎版本**: Unity 6000.2.10.f1
- **框架依赖**: UnityGameFramework (`GameModule.Event`, `GameEventArgs`, `ReferencePool`)
- **Post-Cutoff API 风险**: 无
- **已废弃 API**: 无

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0001（事件总线运行在 GameFlowManager 管理的状态生命周期内）
- **Depended By**: ADR-0003（数据真源变更通过事件通知表现层）、ADR-0005（PCG 生成结果通过事件派发）

---

## 替代方案 (Alternatives Considered)

### 方案 B: C# 原生 `Action<T>` 委托
每个 System 自行声明 `public event Action<T> OnXxx`，订阅者直接绑定。
**优势**: 零框架依赖，类型安全。
**否决原因**: 缺乏中心化管理，难以调试"谁订阅了谁"；没有对象池，每次触发可能产生闭包 GC。
在小规模场景可用，但不适合作为全局标准。

### 方案 C: UniRx / R3 响应式
使用 `Observable.FromEvent` 将事件转化为响应式流，支持 `Where/Select/Throttle` 等操作符。
**优势**: 表达力极强，适合复杂的事件组合场景。
**否决原因**: 引入重量级依赖；团队学习成本高；项目当前的事件场景都是简单的 1:N 广播，
用不到响应式操作符。过度工程化。

### 方案 D: 自研轻量 EventBus
实现一个泛型 `EventBus.Publish<T>(T evt)` / `EventBus.Subscribe<T>(Action<T> handler)`。
**优势**: 类型安全（泛型 vs int Id）、可独立于框架。
**否决原因**: 重复造轮子。框架 `GameModule.Event` 已经是一个经过验证的 EventBus，
且自带 ReferencePool 和 Debugger 可视化。除非需要脱离框架独立发布 Core 层 Assembly，
否则不值得投入。
