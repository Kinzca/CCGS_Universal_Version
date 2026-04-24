# ADR-0009: 主菜单 Overlay 遮罩与 3D 场景融合架构

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

游戏的主菜单不仅是一个静态的 2D 页面，背景是一个全 3D 渲染且持续旋转的塔模型（象征着“交错空间”的核心意象）。
为了实现极简、沉浸式的体验，当玩家在主菜单、设置界面（Settings）和关卡选择（Level Select）之间切换时，我们希望背景的 3D 渲染不仅不中断，还能根据 UI 操作进行景深（DOF）或滤镜的联动。

### 核心决策议题

1. UI 层与 3D 层的渲染层级如何划分？
2. 主菜单与游戏流程的耦合关系如何解除，使得可以在游戏内的暂停菜单中复用 Settings？

---

## 决策 (Decision)

### 1. 采用 Screen Space - Overlay / Camera 分层渲染
所有的全屏菜单（LoginForm, SettingsForm 等）统一采用 UGUI 的 Screen Space - Camera 或 Overlay 模式，确保 UI 层绝对置于 3D Scene 层之上。
- **背景 3D 模型**：由一个单独的 `MenuState` 在场景加载后生成（生成一个静态或缓慢旋转的首窗模型）。
- **UI 遮罩层**：UI 组件自带半透明遮罩背景（如毛玻璃特效或暗化遮罩），遮盖背景但透出光影，营造深度感。

### 2. UI 事件总线解耦
UI 的点击操作（如“开始游戏”）不直接操作 3D 场景，也不直接卸载场景，而是通过 `GameModule.Event.Fire` 抛出指令。
- **LoginForm** 点击 Start -> 抛出 `EventId.StartGameFlow`。
- **GameFlowManager** 监听到事件后，控制当前 `MenuState` 转入 `GameLoadingState`。
- 在状态流转的过渡期，触发“定向破碎与重组（Directional Shatter & Reassemble）”的过渡特效。

### 3. MVVM / MVC 变体框架
UI 的开发严格遵守 `UIForm`，`UIModel`，`UICtrl` 的三分层结构。
这种分离使得后续 Settings 菜单可以直接在 `GameLogicState`（游戏内暂停）时被独立唤出，而无需加载整个 `MenuState`。

---

## 已知的技术债务与改进方向

### TD-015: 后处理与 UI 的遮挡关系
当前如果使用 Overlay 模式，Unity 的 PostProcessing（如 Bloom）无法作用于 UI 上。如果有 UI 元素需要发光特效，必须使用单独的 Shader 或是将 Canvas 切换至 World Space / Screen Space - Camera 并在专门的 Layer 上渲染。后续可能需要对 Canvas 的渲染模式进行深度定制。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-14-001 | 主菜单 Overlay 遮罩 | ✅ 确立 UI 作为顶层 Overlay 并通过事件总线与背景 3D 场景联动的渲染架构。 |

---

## 引擎兼容性 (Engine Compatibility)

- 引擎版本: Unity 6000.2.10.f1
- 深度依赖 Unity UGUI 渲染管线与 Canvas 系统。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0001 (GameFlowManager 负责处理 UI 抛出的流转事件), ADR-0002 (通过事件总线进行跨层通信)
- **Depended By**: 无
