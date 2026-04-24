# Epic: CCGS 通用 IDE 适配与硬约束重构

> **Layer**: Foundation (工具与管线层)
> **GDD**: N/A — 元架构优化（非游戏功能）
> **Architecture Module**: Framework Orchestration (框架编排)
> **Status**: Ready
> **Stories**: 4 个 Ready — 见下方 Stories 表格
> **创建日期**: 2026-04-24
> **发起人**: Technical Director

---

## 概述

本 Epic 旨在将 CCGS 框架从"仅适配 Claude Code / Antigravity 原生环境"升级为"通用 IDE 适配"。核心策略是：**将校验逻辑从大模型提示词（软约束）下沉至本地脚本（硬约束）**，同时消除对特定 CLI UI 工具（如 `AskUserQuestion`）的依赖，使框架能在 VS Code + Cline / Cursor / Continue.dev 等主流编辑器插件中无缝运行。

本 Epic 不涉及任何游戏逻辑或美术资源的修改，属于纯工具链基建。

---

## 背景与驱动因素

1. **平台锁定风险**：当前框架深度绑定在 Claude Code 原生的 `@` 和 `/` 命令语法上。如果用户迁移到 VS Code（接 MiniMax、DeepSeek 等模型），大量工作流无法直接复用。
2. **软约束不可靠**：`user_global` 中的"操作前自审查（协议 2）"完全依赖大模型的"自觉遵守"。在长上下文或弱模型下，这些自检规则会被遗忘，导致不规范的代码被 commit。
3. **上下文开销浪费**：所有路径规则（协议 5）被打包在全局 System Prompt 中，每次对话无差别加载，浪费数千 tokens。
4. **状态恢复低效**：Phase 0 的会话初始化完全依赖 AI 手动读取多个 Markdown 文件并进行总结，既慢又可能出错。

---

## 任务边界 (Scope)

### Story 1: 硬约束迁移 — Git Hooks 校验脚本

**目标**：编写 `validate-commit.sh`、`validate-push.sh` 等 Bash 脚本，配置到 `.git/hooks/pre-commit` 中，实现物理级的提交拦截。

**预期校验项**：
- Commit message 是否符合 `type(scope): description` 格式
- 是否存在未保存的 `session-state/active.md` 更新
- 被修改的 JSON/YAML 文件格式是否合法
- 禁止 `git push` 自动执行（仅允许手动）
- 资产文件命名是否符合小写+下划线规范

**验收标准**：
- [ ] `git commit -m "bad message"` 被脚本拦截并提示正确格式
- [ ] 修改 `.yaml` 文件但格式非法时，提交被拒绝
- [ ] 脚本在 macOS 和 Linux 下均可运行（POSIX 兼容）

---

### Story 2: 路径规则解耦 — 按需加载

**目标**：将 `user_global` 协议 5 中的路径感知规则，从全局 System Prompt 中拆出，分发到各目录下的独立规则文件中。

**具体操作**：
- `Scripts/GameLogic/` 目录下放置 `.clinerules`（或等效的 `.cursorrules`），内容来自 `.agents/rules/gameplay-code.md`
- `Scripts/Engine/` 目录下放置对应的引擎层规则
- `design/gdd/` 目录下放置设计文档规范规则
- 在 `user_global` 中移除协议 5 的硬编码表格，改为一行引导："路径规则已分发至各目录，请参照目录下的规则文件"

**验收标准**：
- [ ] 编辑 `GameLogic/` 下的文件时，AI 自动加载该目录的规则
- [ ] 编辑 `Engine/` 下的文件时，加载引擎层规则
- [ ] 全局 System Prompt 的 Token 开销减少 ≥ 30%

---

### Story 3: UI 降级重构 — AskUserQuestion 消除

**目标**：重构所有 Tier 1 Director 的工作流提示词，将对 `AskUserQuestion` 工具的硬性依赖替换为通用的 Markdown 列表式交互。

**涉及文件**：
- `.agents/workflows/Tier1-Directors/technical-director.md`
- `.agents/workflows/Tier1-Directors/creative-director.md`
- `.agents/workflows/Tier1-Directors/producer.md`
- 所有包含 `AskUserQuestion` 引用的 Skill 文件

**替换规则**：
```
原文: Use the `AskUserQuestion` tool to present strategic decisions...
替换: 使用标准 Markdown 编号列表向用户提问，格式如下：
      1. **选项 A (推荐)**：一句话说明
      2. **选项 B**：一句话说明
      请用户回复数字编号进行选择。
```

**验收标准**：
- [ ] 在非 Claude Code 环境（如 Cline）中调用 `/architecture-decision` 不报错
- [ ] 用户仍能通过回复数字来选择选项，交互体验无损

---

### Story 4: 上下文探针 — workspace-status 脚本

**目标**：编写 `workspace-status.py`（或 `.sh`）探针脚本，在 Phase 0 会话初始化时被 AI 调用，瞬间输出项目状态快照。

**脚本输出格式**：
```
📋 CCGS 状态: [分支名] | [最近 commit 摘要] | Bug: [N个Open] | 债务: [N个Open]
📂 最近修改: [最近3个被 git 修改的文件]
🔄 当前 Sprint: [sprint 文件名或 N/A]
```

**数据来源**：
- `git branch --show-current` → 分支名
- `git log --oneline -1` → 最近提交
- `grep -c "🔴\|🟡" .agents/production/tracking/bug-tracker.md` → Bug 计数
- `grep -c "🔴\|🟡" .agents/production/tracking/tech-debt.md` → 债务计数

**验收标准**：
- [ ] 脚本运行时间 < 1 秒
- [ ] 输出格式固定，AI 无需额外解析即可直接引用
- [ ] 在无 Python 环境的机器上自动降级为 Bash 版本

---

## 完成定义 (Definition of Done)

本 Epic 在以下条件全部满足时视为完成：
- 所有 Story 已实现、审查并通过 `/story-done` 关闭
- Git Hooks 在本地 macOS 环境下实测通过（至少 3 种违规场景被正确拦截）
- 在 VS Code + Cline 插件环境中，成功执行一次完整的 `/architecture-decision` 工作流（不报错、交互正常）
- `user_global` 的全局 Token 开销相比优化前减少 ≥ 30%

---

## 风险评估

| 风险 | 等级 | 缓解措施 |
|:---|:---|:---|
| Git Hooks 在 Windows Git Bash 下行为不一致 | MEDIUM | 使用 POSIX 兼容语法，避免 `grep -P` |
| 移除全局规则后 AI 忘记加载目录级规则 | LOW | 在 `user_global` 中保留一行提醒 |
| AskUserQuestion 替换后交互体验下降 | LOW | Markdown 列表 + 数字回复已是行业通用方案 |

---

## Stories

| # | Story | Type | Status | 依赖 |
|:---|:---|:---|:---|:---|
| 001 | [Git Hooks 硬约束校验脚本](story-001-git-hooks.md) | Logic | Ready | 无 |
| 002 | [路径规则解耦与按需加载](story-002-path-rules-decouple.md) | Config/Data | Ready | 无 |
| 003 | [AskUserQuestion UI 降级重构](story-003-askuser-downgrade.md) | Config/Data | Ready | 无 |
| 004 | [workspace-status 上下文探针脚本](story-004-workspace-status.md) | Logic | Ready | Story 001 |

---

## 下一步

按依赖顺序实施：Story 001 / 002 / 003 可并行，Story 004 需等 001 完成后开始。
运行 `/story-readiness story-001-git-hooks.md` 开始实施第一个 Story。
