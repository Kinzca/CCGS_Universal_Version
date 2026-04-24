# 交互范式库 (Interaction Patterns Library)
> Phase: Technical Setup / Initial Draft

## 1. 核心导航与结构 (Core Navigation)
- **返回/取消 (Back/Cancel)**: 全局统一放置于屏幕左上角。
- **确认/推进 (Confirm/Advance)**: 位于屏幕右下角或弹窗中心。
- **破坏性操作 (Destructive Actions)**: 所有的破坏性操作（如放弃本层进度、重置存档）必须包含醒目的二次确认弹窗。

## 2. 3D 空间解谜交互 (Spatial Interaction)
由于游戏的核心是空间心流，UI操作绝不能与3D控制冲突：
- **视角旋转 (Camera Orbit)**: 在屏幕的“非UI”及“非特定互动面”空白区域拖拽 (Drag)，以围绕当前焦点旋转摄像机。
- **方块面旋转 (Face Rotation)**: 长按并拖拽 (Hold & Drag) 可交互的塔身结构面边缘，进行 90° 的离散步进旋转。
- **寻路移动 (Movement/Pathing)**: 单击/点击 (Tap/Click) 目标空地，角色将自动寻路至该坐标。

## 3. 界面覆盖规范 (Overlay Hierarchy)
遵循 `ADR-0009: UI Overlay 解耦架构`，界面的 Z 轴层级如下：
1. **HUD 层**: 保持极度克制，仅显示塔层数 (M值) 和右上角的暂停/设置入口。
2. **浮窗层**: 胜利结算或新机制提示，带有轻微的背景变暗。
3. **全局遮罩层 (Pause/Settings)**: 铺满全屏的磨砂玻璃材质，呼出时游戏内的 `Time.timeScale` 必须冻结。
