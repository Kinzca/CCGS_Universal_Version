# Story 003: AskUserQuestion UI 降级重构

> **Epic**: CCGS 通用 IDE 适配与硬约束重构
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Config/Data

## 上下文

**需求来源**: Epic `wp-0-ccgs-optimization` — Story 3
**问题定义**: 原生 CCGS 框架中，大量 Director 角色和 Skill 工作流使用 `AskUserQuestion` 工具调用来向用户呈现结构化选择题（带按钮的 UI）。这个工具是 Claude Code CLI 的专有能力，在 VS Code 插件（Cline、Cursor、Continue.dev）或其他 AI 编辑器中不存在，调用时会导致报错或静默失败。

**影响范围**: 经 grep 扫描，共有 **48 个工作流文件** 包含 `AskUserQuestion` 引用。

**目标**: 将所有 `AskUserQuestion` 调用替换为通用的 Markdown 编号列表交互方式，使工作流在任意 IDE 环境中均可正常运行。

---

## 验收标准

- [ ] 所有 3 个 Tier 1 Director 文件中的 `AskUserQuestion` 引用被替换为 Markdown 列表交互说明
- [ ] 所有 8 个 Tier 2 Lead 文件中的 `AskUserQuestion` 引用被替换（如存在）
- [ ] 所有 Skill SKILL.md 文件中的 `AskUserQuestion` 引用被替换为等效的 Markdown 交互指令
- [ ] 替换后的交互格式统一为以下模板：
  ```
  请选择以下选项（回复数字编号）：
  1. **选项名称 (推荐)**：一句话说明
  2. **选项名称**：一句话说明
  ```
- [ ] 在非 Claude Code 环境中调用 `/architecture-decision` 工作流不报错
- [ ] 替换不改变工作流的逻辑语义（仅改变交互 UI 方式）

---

## 实现指引

### 涉及文件分类

**Tier 1 Directors（3 个）**:
- `.agents/workflows/Tier1-Directors/technical-director.md`
- `.agents/workflows/Tier1-Directors/creative-director.md`
- `.agents/workflows/Tier1-Directors/producer.md`

**Tier 2 Leads（最多 8 个）**:
- `game-designer.md`, `lead-programmer.md`, `art-director.md`, `audio-director.md`
- `narrative-director.md`, `qa-lead.md`, `release-manager.md`, `localization-lead.md`

**Skills（约 37 个）**:
- 高频使用: `create-epics`, `create-stories`, `architecture-decision`, `design-system`, `dev-story`, `story-done`
- 中频使用: `sprint-plan`, `brainstorm`, `map-systems`, `ux-design`, `gate-check`
- 低频使用: 其余团队编排类 Skill（`team-combat`, `team-narrative` 等）

### 替换策略

**统一替换模板**：

原文模式：
```markdown
Use the `AskUserQuestion` tool to present strategic decisions as a selectable UI.
Follow the **Explain → Capture** pattern:
1. **Explain first** — Write full strategic analysis...
2. **Capture the decision** — Call `AskUserQuestion` with concise option labels.
```

替换为：
```markdown
向用户呈现决策选项时，使用标准 Markdown 编号列表格式：

请选择以下选项（回复数字编号）：
1. **选项 A (推荐)**：一句话说明利弊
2. **选项 B**：一句话说明利弊
3. **选项 C**：一句话说明利弊

等待用户回复数字后再继续执行。
```

### 批量执行方式

建议使用 `grep + sed` 或逐文件手动替换。由于每个文件中 `AskUserQuestion` 的上下文不同（有的是独立段落，有的嵌在流程步骤中），**推荐逐文件审阅后替换**，而非盲目全局 sed。

### 优先级排序

1. **P0 — 必须改**: Tier 1 Director 文件（3 个）+ 核心 Skill（`architecture-decision`, `create-epics`, `create-stories`, `dev-story`）
2. **P1 — 应该改**: Tier 2 Lead 文件 + 中频 Skill
3. **P2 — 可以延后**: 低频团队编排类 Skill（使用频率极低，且通常由高频 Skill 间接触发）

---

## 超出范围

- Story 001: Git Hooks 脚本
- Story 002: 路径规则解耦
- 不改变任何工作流的逻辑流程和决策节点，仅改变 UI 呈现方式

---

## QA 测试用例

- **AC-1**: Tier 1 Director 清洁度检查
  - Given: 替换完成
  - When: `grep -r "AskUserQuestion" .agents/workflows/Tier1-Directors/`
  - Then: 返回 0 结果
  - Edge cases: 注释中的历史引用也应清除

- **AC-2**: 核心 Skill 清洁度检查
  - Given: 替换完成
  - When: `grep -r "AskUserQuestion" .agents/workflows/skills/architecture-decision/`
  - Then: 返回 0 结果

- **AC-3**: 跨 IDE 功能验证
  - Manual check: 在 VS Code + Cline 环境中输入 `/architecture-decision` 等效提示
  - Verify: AI 使用 Markdown 编号列表向用户提问，无工具调用报错
  - Pass condition: 用户能通过回复数字完成交互

---

## 测试证据

**Story Type**: Config/Data
**所需证据**: `grep -r "AskUserQuestion" .agents/workflows/` 的执行结果截图（应为 0 结果）
**Status**: [ ] 尚未创建

---

## 依赖关系

- 依赖: 无
- 解锁: 无
