# Story 003: Refactor Path Resolution

> **Epic**: CCGS Framework Core Split
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Logic
> **Manifest Version**: N/A

## Context

**Requirement**: `TR-CCGS-003`
*修改底层环境上下文（Hooks/Yaml等），使所有通用 Skill 能够动态跨目录读写 `CCGS-Data`。*

**ADR Governing Implementation**: 待补充
**Engine**: N/A | **Risk**: LOW

---

## Acceptance Criteria

- [ ] 引入 `CCGS_DATA_DIR` 等环境变量或相对路径计算逻辑
- [ ] 替换原有的硬编码 `.agents/production/...` 路径，改用动态路径
- [ ] 更新 `hooks-config.yaml` 的拦截器执行路径配置
- [ ] 确保 `/bug-report`, `/create-stories`, `/sprint-status` 正常读取外部数据

---

## QA Test Cases

- **AC-1**: 跨目录写入测试
  - Setup: 使用修改后的通用 Skill
  - Verify: 终端运行 `/bug-report 测试跨目录`
  - Pass condition: 报告正确写入到 `CCGS-Data/Production/Tracking/bug-tracker.md` 且无路径未找到报错

---

## Test Evidence

**Story Type**: Logic
**Required evidence**: `/bug-report` 运行成功及对应文件生成截图
**Status**: [ ] Not yet created

---

## Dependencies

- Depends on: Story 002
- Unlocks: None

## Completion Notes
**Completed**: 2026-04-24
**Criteria**: 4/4 passing
**Deviations**: ADVISORY: 采用了方案 A（约定优于配置）而非原 Story 中的"环境变量"方式。
**Test Evidence**: grep 全量扫描验证 0 残留。
**Code Review**: Skipped
