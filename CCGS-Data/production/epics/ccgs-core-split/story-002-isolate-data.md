# Story 002: Isolate Project Data

> **Epic**: CCGS Framework Core Split
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Integration
> **Manifest Version**: N/A

## Context

**Requirement**: `TR-CCGS-002`
*建立 `CCGS-Data` (或迁移至根目录) 并安全转移 Production、Tracking、GDD 和项目专属文档。*

**ADR Governing Implementation**: 待补充
**Engine**: N/A | **Risk**: LOW

---

## Acceptance Criteria

- [ ] 建立存放项目运行时数据的新位置（如 `CCGS-Data`）
- [ ] 迁移 `.agents/production/` (包含 Epics, Stories, Tracking, QA) 到新位置
- [ ] 迁移 `.agents/design/` 和 `.agents/project-docs/`
- [ ] 迁移专属于《交错空间》的特化 Agent 脚本到特定项目级目录
- [ ] 彻底清理 `.ccgs-core` 里的项目特定缓存与文件

---

## QA Test Cases

- **AC-1**: 验证数据剥离彻底度
  - Setup: 完成文件转移后
  - Verify: 在 `.ccgs-core` 内执行 grep 搜索 `InterwovenSpace`
  - Pass condition: 无任何包含项目特定名称的数据残留

---

## Test Evidence

**Story Type**: Integration
**Required evidence**: grep 无残留验证截图
**Status**: [ ] Not yet created

---

## Dependencies

- Depends on: Story 001
- Unlocks: Story 003

## Completion Notes
**Completed**: 2026-04-24
**Criteria**: 5/5 passing
**Deviations**: Supplementary migration completed for tests, prototypes, rules, and docs.
**Test Evidence**: grep search passed, no InterwovenSpace remaining.
**Code Review**: Skipped - DevOps file operation
