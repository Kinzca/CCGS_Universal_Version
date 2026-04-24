# Epic: CCGS 框架核心与数据分离 (CCGS Framework Core Split)

> **Layer**: Foundation (Infrastructure)
> **GDD**: N/A (工具链架构重构)
> **Architecture Module**: CCGS Toolchain
> **Status**: Ready
> **Stories**: Created (001, 002, 003)

## Overview

本史诗任务旨在将当前高度耦合于《交错空间》项目的 `.agents` 目录彻底拆分为两层：只读/普适的 `.ccgs-core/` 核心框架层，以及存放项目实际运行态和专属配置的 `CCGS-Data/` 项目数据层。这将使 CCGS 具备开源分发的插拔能力（Plug-and-play），防止后续更新覆盖业务数据。

## Governing ADRs

| ADR | Decision Summary | Engine Risk |
|-----|-----------------|-------------|
| 待补充 | 核心机制与业务数据解耦决策 | LOW |

## Requirements

| TR-ID | Requirement | ADR Coverage |
|-------|-------------|--------------|
| TR-CCGS-001 | 建立 `.ccgs-core` 并安全转移 Tier 1-3 Agent、通用 Skills、Hooks 逻辑与纯模板。 | ❌ No ADR |
| TR-CCGS-002 | 建立 `CCGS-Data` (或迁移至根目录) 并安全转移 Production、Tracking、GDD 和项目专属文档。 | ❌ No ADR |
| TR-CCGS-003 | 修改底层环境上下文（Hooks/Yaml等），使所有通用 Skill 能够动态跨目录读写 `CCGS-Data`。 | ❌ No ADR |

## Definition of Done

This epic is complete when:
- 核心框架代码中不再包含 "InterwovenSpace" 的硬编码。
- `/bug-report` 和 `/create-stories` 等核心指令能在新架构下正常生成记录。
- 所有的物理目录迁移和脚本寻址替换已测试通过并提交 Git。

## Stories

| # | Story | Type | Status | ADR |
|---|-------|------|--------|-----|
| 001 | Extract Core Framework | Integration | Complete | 待补充 |
| 002 | Isolate Project Data | Integration | Complete | 待补充 |
| 003 | Refactor Path Resolution | Logic | Complete | 待补充 |

Run `/gate-check` to close out the epic.
