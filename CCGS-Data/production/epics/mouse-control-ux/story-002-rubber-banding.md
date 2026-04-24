# Story 002: 无效拖拽的弹性阻尼 (Rubber Banding)

> **Epic**: mouse-control-ux
> **Status**: Complete
> **Layer**: Feature
> **Type**: Visual/Feel
> **Manifest Version**: 2026-04-23

## Context

**GDD**: `.agents/design/gdd/02-player-controls.md`
**Requirement**: `TR-INPUT-011` (拖拽不可操作面时引入弹性阻尼及回弹机制)

**ADR Governing Implementation**: N/A
**ADR Decision Summary**: 为了符合物理玩具的直觉，对无效拖拽增加防错反馈，而不是生硬地锁死。

**Engine**: Unity 2022.3 | **Risk**: LOW
**Engine Notes**: 纯数学/插值计算，需精细调控拖拽阻尼系数。

---

## Acceptance Criteria

- [x] 当尝试拖拽被限制旋转的面（如中间层，或禁止的垂直拖拽）时，允许拖拽行为开始。
- [x] 给此无效拖拽赋予极大的阻尼感（例如屏幕移动 100px，模型仅旋转极小角度，模拟弹性形变）。
- [x] 松开鼠标时，无论被拖动了多少，被拖动的面迅速且平滑地弹回 0°。
- [ ] 弹性阻尼参数应可配置，方便后续手感调优。

---

## Implementation Notes

- 可以在 `MouseDragRotationSys` 中生成一个特殊的 `RotateRule`，标记为 `IsInvalid`。
- 在 `DragPhase.Dragging` 阶段更新时，如果当前规则是无效的，将拖拽输入量乘以一个很小的阻尼系数（如 0.1f）。
- 在 `TryCommitDrag` 时，如果规则无效，不将指令发给 `CubeRotateSys`，而是直接触发本系统内的快速回弹逻辑，将视觉状态重置。

---

## QA Test Cases

- **AC-1**: 无效拖拽产生阻尼
  - Setup: 进入游戏，左键按住不可旋转的中间层并拖拽
  - Verify: 该层会轻微跟随鼠标移动，但移动量极小，表现出强烈的“拉扯感”
  - Pass condition: 明显感受到比正常层更重的拖动阻力

- **AC-2**: 松手快速回弹
  - Setup: 拖动不可操作层后松开鼠标左键
  - Verify: 该层迅速且平滑地弹回原位
  - Pass condition: 动画不生硬跳变，且最终回到完全对齐的状态

---

## Test Evidence

**Story Type**: Visual/Feel
**Required evidence**: `.agents/production/qa/evidence/story-002-rubber-banding-evidence.md` + 录屏验证
**Status**: [x] ADVISORY: 实机测试确认通过，无需强制补充文档存档

---

## Dependencies

- Depends on: Story 001 (推荐顺序)
- Unlocks: None

---

## Completion Notes
**Completed**: 2026-04-23
**Criteria**: 3/4 passing (AC-4 Deferred)
**Deviations**: ADVISORY: 阻尼参数暂以代码常量形式实现，待后续统一配置化系统接管
**Test Evidence**: Visual/Feel: 经 QA 实机确认体验合格 (ADVISORY 豁免文档化)
**Code Review**: Complete (Lead Programmer 通过)
**Hotfixes**: BUG-007 (竖向拖拽无弹性阻尼) 已合并修复
