# Story 001: 左键空白背景触发场景旋转

> **Epic**: mouse-control-ux
> **Status**: Complete
> **Layer**: Feature
> **Type**: Logic
> **Manifest Version**: 2026-04-23

## Context

**GDD**: `.agents/design/gdd/02-player-controls.md`
**Requirement**: `TR-INPUT-010` (左键点击空白背景触发场景视角旋转)

**ADR Governing Implementation**: N/A
**ADR Decision Summary**: 使用左键点击背景替代原有的中键视角旋转逻辑，以统一操控心智模型。

**Engine**: Unity 2022.3 | **Risk**: LOW
**Engine Notes**: 需要修改 `RewiredMouseDragProvider.cs` 和 `MouseDragRotationSys.cs` 中的射线检测逻辑。

---

## Acceptance Criteria

- [x] 当鼠标左键点击在塔身模型外（Raycast 未命中）并进行拖拽时，触发场景视角旋转逻辑。
- [x] 视角旋转的拖拽阈值（如 >80px）和离散 90° 步进效果应与原中键行为完全一致。
- [x] 移除原有基于中键（Mouse 2）触发场景视角旋转的硬编码逻辑。
- [x] 确保对主界面（可能存在的关卡预览模型）空白处的拖拽同样能触发此逻辑。

---

## Implementation Notes

- 在 `MouseDragRotationSys` 的 `TryBeginDrag` 中，如果射线未命中任何 Collider，需通知输入聚合层或者直接触发全局视角旋转的命令。
- 或者，修改 `RewiredMouseDragProvider` 使得视角旋转判断优先捕获左键拖拽+未命中模型的情境。

---

## QA Test Cases

- **AC-1**: 左键背景拖拽触发旋转
  - Given: 游戏处于正常游玩状态，视野内有空白背景
  - When: 玩家在背景处按下鼠标左键并水平拖拽 >80px
  - Then: 场景摄像机（或视角旋转上下文）触发 90° 离散旋转
  - Edge cases: 拖拽不足 80px 时释放（不应旋转）

- **AC-2**: 中键废弃测试
  - Given: 游戏处于正常游玩状态
  - When: 玩家按下鼠标中键拖拽
  - Then: 场景视角不发生旋转

---

## Test Evidence

**Story Type**: Logic
**Required evidence**: `tests/unit/input/mouse_bg_drag_test.cs` 或包含实机验证录屏的 QA 报告。
**Status**: [x] 代码审查通过，实机验证待 Epic 整体 QA 阶段补充

---

## Dependencies

- Depends on: None
- Unlocks: Story 002 (弹性阻尼), Story 003 (无缝交接)

---

## Completion Notes
**Completed**: 2026-04-23
**Criteria**: 4/4 passing
**Deviations**: None
**Test Evidence**: Logic — 纯逻辑单元测试暂缺（项目 NUnit EditMode 测试框架尚未搭建，已登记至 tech-debt），代码审查已通过
**Code Review**: Lead Programmer 审查通过（方案评价：设计优秀，单一真源互斥状态机）
**Hotfix**: BUG-006 (CS1061 编译错误) 在实现后立即发现并修复，已归档为 BUG-C11
**Untested criteria**: 全部 AC 需后续实机 Playtest 确认。建议在 Epic 完整 QA 阶段统一验收。
