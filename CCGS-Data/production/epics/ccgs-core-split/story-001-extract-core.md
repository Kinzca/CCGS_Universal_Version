# Story 001: Extract Core Framework

> **Epic**: CCGS Framework Core Split
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Integration
> **Manifest Version**: N/A

## Context

**Requirement**: `TR-CCGS-001`
*建立 `.ccgs-core` 并安全转移 Tier 1-3 Agent、通用 Skills、Hooks 逻辑与纯模板。*

**ADR Governing Implementation**: 待补充
**Engine**: N/A | **Risk**: LOW

---

## Acceptance Criteria

- [ ] 建立新的根目录 `.ccgs-core`
- [ ] 迁移通用的 Agent 到 `.ccgs-core/workflows/` (去除 InterwovenSpace 特定 Agent)
- [ ] 迁移通用 Skills 到 `.ccgs-core/workflows/skills/`
- [ ] 迁移通用 Hooks 配置与脚本到 `.ccgs-core/hooks/`
- [ ] 迁移通用模板到 `.ccgs-core/docs/templates/`

---

## QA Test Cases

- **AC-1**: 验证核心模板与脚本完整性
  - Setup: 执行文件迁移脚本
  - Verify: 检查 `.ccgs-core` 目录结构
  - Pass condition: 结构干净，无冗余项目数据，文件权限正常

---

## Test Evidence

**Story Type**: Integration
**Required evidence**: 结构检查清单与控制台输出截图
**Status**: [ ] Not yet created

---

## Dependencies

- Depends on: None
- Unlocks: Story 002

## Completion Notes
**Completed**: 2026-04-24
**Criteria**: 5/5 passing
**Deviations**: None
**Test Evidence**: DevOps file operation successful
**Code Review**: Skipped - DevOps file operation
