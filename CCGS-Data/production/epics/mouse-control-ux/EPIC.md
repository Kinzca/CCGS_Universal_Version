# Epic: Mouse Controls UX Refinement

> **Layer**: Presentation / Feature
> **GDD**: .agents/design/gdd/02-player-controls.md
> **Architecture Module**: Input System & Cube View
> **Stories**: 
> - [x] Story 001: 左键空白背景触发场景旋转
> - [x] Story 002: 无效拖拽的弹性阻尼 (Rubber Banding)
> - [x] Story 003: 拖拽释放时的动画无缝交接 (Seamless Handoff)

## Overview

This epic implements the v3.1 UX optimizations for mouse controls to enhance the physical feel and intuitive response of the puzzle interaction. It replaces the middle-mouse scene rotation with a more elegant left-click-on-background approach, adds "rubber-banding" elastic resistance for invalid drag attempts to improve physical affordances, and implements seamless visual handoff of drag progress to the rotation animation system to eliminate visual snapping artifacts. 

## Governing ADRs

| ADR | Decision Summary | Engine Risk |
|-----|-----------------|-------------|
| N/A | UX refinements mapping standard input to existing systems | LOW |

## GDD Requirements

| TR-ID | Requirement | ADR Coverage |
|-------|-------------|--------------|
| TR-INPUT-010 | 左键点击空白背景触发场景视角旋转 (替换中键) | ❌ No ADR |
| TR-INPUT-011 | 拖拽不可操作面时引入弹性阻尼及回弹机制 (Rubber Banding) | ❌ No ADR |
| TR-INPUT-012 | 拖拽松手提交时传递视觉进度，实现动画无缝交接 (Seamless Handoff) | ❌ No ADR |

## Stories

| # | Story | Type | Status | ADR |
|---|-------|------|--------|-----|
| 001 | 左键空白背景触发场景旋转 | Logic | Ready | N/A |
| 002 | 无效拖拽的弹性阻尼 (Rubber Banding) | Visual/Feel | Ready | N/A |
| 003 | 拖拽释放时的动画无缝交接 (Seamless Handoff) | Integration | Ready | N/A |

## Definition of Done

This epic is complete when:
- All stories are implemented, reviewed, and closed via `/story-done`
- All acceptance criteria from `.agents/design/gdd/02-player-controls.md` are verified
- All Logic and Integration stories have passing test files in `tests/`
- All Visual/Feel and UI stories have evidence docs with sign-off in `.agents/production/qa/evidence/`

## Next Step

Run `/create-stories mouse-control-ux` to break this epic into implementable stories.
