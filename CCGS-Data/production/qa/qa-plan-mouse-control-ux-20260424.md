# QA Test Plan: Mouse Controls UX Refinement

**Date**: 2026-04-24
**Scope**: mouse-control-ux (Story 001, 002, 003)

## Story Classification

1. **Story 001**: Logic - 左键空白背景触发场景旋转
2. **Story 002**: Visual/Feel - 无效拖拽的弹性阻尼
3. **Story 003**: Integration - 拖拽释放时的动画无缝交接

## Automated Test Requirements
由于当前项目暂未搭建完整的 EditMode 测试框架（已登记 tech-debt），且所有改动强依赖于屏幕坐标系与相机交互，因此本次迭代暂时豁免自动化单元测试。

## Manual QA Scope
本次周期的核心在于**手动实机验证**。
- **Story 001**: 验证左键拖动塔外/空白处能否顺滑转动视角。
- **Story 002**: 验证按住无法旋转的面时，是否表现出迟滞拖拽阻尼感，且松手立刻弹回原位。
- **Story 003**: 验证普通转塔操作中，拖拽释放时是否平滑过渡至剩余 90 度旋转动画，无闪烁回退。

## Out of Scope
- 本次测试不包含 Gamepad / 摇杆操作下的表现。
- 不验证除旋转交互以外的核心模拟器规则（这部分未发生改变）。

## Entry Criteria
- 所有代码均已完成 PR/合并，并可以通过 Unity Editor 正常运行。
- 冒烟测试：项目编译通过，塔窗能够正常生成（PASS WITH WARNINGS）。

## Exit Criteria
- 所有 Manual QA 的测试项全部执行完毕，标注通过或提交 Bug。
- 重大体验阻碍（S1/S2）需修复，允许 S3/S4 延期。
