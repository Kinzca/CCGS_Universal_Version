# Story 003: 拖拽释放时的动画无缝交接 (Seamless Handoff)

> **Epic**: mouse-control-ux
> **Status**: Complete
> **Layer**: Integration
> **Type**: Integration
> **Manifest Version**: 2026-04-23

## Context

**GDD**: `.agents/design/gdd/02-player-controls.md`
**Requirement**: `TR-INPUT-012` (拖拽松手提交时传递视觉进度，实现动画无缝交接)

**ADR Governing Implementation**: N/A
**ADR Decision Summary**: 解决输入逻辑和表现动画间交接时的视觉闪跳 Bug。

**Engine**: Unity 2022.3 | **Risk**: MEDIUM
**Engine Notes**: 涉及跨系统通信（输入系统 -> 旋转动画系统）及参数注入，需确保不破坏原有求解器和回放机制。

---

## Acceptance Criteria

- [x] 拖拽结束并触发有效旋转（超过 45° 阈值触发吸附）时，旋转动画不再从 0 开始播放。
- [x] 旋转动画能够接收拖拽结束时的实际物理角度进度（如 98%）。
- [x] 动画系统能够顺滑地完成剩余进度（如剩下的 2%），消除视觉上的“先弹回再重播”闪跳。
- [x] 此改动不可影响回放系统（Playback）中由非玩家输入触发的自动旋转动画。

---

## Implementation Notes

- 在 `MouseDragRotationSys.TryCommitDrag()` 中，计算当前的视觉进度比例：`startProgress = CurrentAngle / 90f`。
- 修改 `CubeRotateSys` 的触发指令接口，或 `TowerRotateCommand` 的相关参数，增加 `float startProgress = 0f` 可选参数。
- 在 `CubeRotateSys` 播放动画时，将 T 值起始点从 0 覆盖为传入的 `startProgress`，并确保时长也做相应的等比缩放以保持速度一致。

---

## QA Test Cases

- **AC-1**: 动画无缝衔接
  - Setup: 进入游戏，慢速拖动某个可操作面接近但不超过 90°（如 80°），然后松手
  - Verify: 该面直接从 80° 继续旋转到 90°，没有任何闪烁或跳变回 0° 的动作
  - Pass condition: 视觉连贯顺滑，帧与帧之间没有突变

- **AC-2**: 回放不受影响
  - Setup: 进行一系列有效旋转后执行撤销（Undo）
  - Verify: 撤销引发的自动旋转动画表现正常，不受此改动干扰
  - Pass condition: 撤销动画连贯、正确

---

## Test Evidence

**Story Type**: Integration
**Required evidence**: `.agents/production/qa/evidence/story-003-seamless-handoff-evidence.md` + 录屏对比验证
**Status**: [ ] Not yet created

---

## Dependencies

- Depends on: None
- Unlocks: None

## Completion Notes
**Completed**: 2026-04-24
**Criteria**: 4/4 passing (实机效果通过，待录屏补充)
**Deviations**: 额外修复了 `ActionFailFeedbackSys` 中被拒绝动作可能导致的视觉起跳，兼容了 `StartProgress` 反推真实0度。
**Test Evidence**: Integration - 需要录屏证据于 `.agents/production/qa/evidence/story-003-seamless-handoff-evidence.md`
**Code Review**: Complete (Approved)
