# Story 004: workspace-status 上下文探针脚本

> **Epic**: CCGS 通用 IDE 适配与硬约束重构
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Logic

## 上下文

**需求来源**: Epic `wp-0-ccgs-optimization` — Story 4
**问题定义**: 当前 CCGS 协议 1（会话初始化）要求 AI 在每次新对话开始时手动读取 `active.md`、执行 `git status`、扫描 `bug-tracker.md` 等多个文件来生成状态快照。这个过程在长对话中会消耗大量上下文 tokens，且 AI 的总结可能出错（漏算 Bug 数量、读错分支名等）。

**参考实现**: 原生 CCGS 框架的 `.claude/hooks/session-start.sh` + `.claude/statusline.sh`

**目标**: 编写一个轻量级的 `workspace-status.sh` 探针脚本，一次执行即可输出格式固定的项目状态快照。

**⚠️ 架构约束（v2 修订）**: 脚本中所有可变路径（bug-tracker、tech-debt、sprint、session-state 的位置）**禁止硬编码**，必须从 `hooks-config.yaml` 的 `workspace_status` 段读取。这确保打包给其他项目时只需修改配置文件。

---

## 验收标准

- [ ] 脚本输出固定格式的状态快照（3 行）
- [ ] 所有可变路径从 `hooks-config.yaml` 的 `workspace_status` 段读取，脚本中零硬编码
- [ ] 脚本运行时间 < 1 秒
- [ ] 使用纯 Bash 实现，不依赖 Python、Node
- [ ] 配置中指定的文件不存在时优雅降级（输出 0 或 N/A）
- [ ] 非 Git 仓库中执行时输出 `分支: N/A`，不报错
- [ ] 检测会话状态文件是否存在（路径从配置读取）
- [ ] 更换项目时只需修改 `hooks-config.yaml`，脚本零改动

---

## 实现指引

### 文件清单

| 文件 | 用途 |
|:---|:---|
| `.agents/hooks/workspace-status.sh` | 主探针脚本 |

### 脚本配置（hooks-config.yaml 中的 workspace_status 段）

脚本从 `hooks-config.yaml` 读取以下路径，而非硬编码：

```yaml
# hooks-config.yaml 追加段
workspace_status:
  bug_tracker: ".agents/production/tracking/bug-tracker.md"
  tech_debt: ".agents/production/tracking/tech-debt.md"
  sprint_glob: ".agents/production/sprints/sprint-*.md"
  session_state: ".agents/production/session-state/active.md"
  # Bug/债务计数时匹配的 emoji 标记
  status_markers: "🔴|🟡"
```

### 脚本结构伪码

```bash
#!/bin/bash
# workspace-status.sh — CCGS 上下文探针（通用引擎，零硬编码）

PROJECT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
cd "$PROJECT_ROOT"
CONFIG=".agents/hooks/hooks-config.yaml"

# 从配置读取路径（降级方案：无配置时使用默认值）
BUG_FILE=$(grep 'bug_tracker:' "$CONFIG" 2>/dev/null | awk '{print $2}' | tr -d '"')
BUG_FILE=${BUG_FILE:-.agents/production/tracking/bug-tracker.md}

DEBT_FILE=$(grep 'tech_debt:' "$CONFIG" 2>/dev/null | awk '{print $2}' | tr -d '"')
DEBT_FILE=${DEBT_FILE:-.agents/production/tracking/tech-debt.md}

SPRINT_GLOB=$(grep 'sprint_glob:' "$CONFIG" 2>/dev/null | awk '{print $2}' | tr -d '"')
SPRINT_GLOB=${SPRINT_GLOB:-.agents/production/sprints/sprint-*.md}

SESSION_FILE=$(grep 'session_state:' "$CONFIG" 2>/dev/null | awk '{print $2}' | tr -d '"')
SESSION_FILE=${SESSION_FILE:-.agents/production/session-state/active.md}

MARKERS=$(grep 'status_markers:' "$CONFIG" 2>/dev/null | awk '{print $2}' | tr -d '"')
MARKERS=${MARKERS:-"🔴|🟡"}

# 1. 基础状态
BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "N/A")
LAST_COMMIT=$(git log --oneline -1 2>/dev/null || echo "无提交")
BUG_COUNT=$(grep -cE "$MARKERS" "$BUG_FILE" 2>/dev/null || echo 0)
DEBT_COUNT=$(grep -cE "$MARKERS" "$DEBT_FILE" 2>/dev/null || echo 0)
echo "📋 CCGS 状态: $BRANCH | $LAST_COMMIT | Bug: $BUG_COUNT | 债务: $DEBT_COUNT"

# 2. 最近修改
RECENT=$(git diff --name-only HEAD~1 2>/dev/null | head -3 | tr '\n' ', ')
echo "📂 最近修改: ${RECENT:-无变更}"

# 3. Sprint 状态
SPRINT=$(ls -t $SPRINT_GLOB 2>/dev/null | head -1)
echo "🔄 当前 Sprint: ${SPRINT:-N/A}"

# 4. 会话恢复
if [ -f "$SESSION_FILE" ]; then
    echo "⚡ 检测到上次会话状态: $SESSION_FILE"
fi
```

### 与 user_global 的集成

在协议 1（会话初始化）中，将原来的"逐步读取 5 个文件"替换为：

```markdown
1. 执行 `bash .agents/hooks/workspace-status.sh` 获取状态快照
2. 如果脚本提示存在 active.md，则读取恢复上次会话
3. 根据快照中的 Bug 数量和打开文件推测工作焦点
```

---

## 超出范围

- Story 001: Git Hooks 校验脚本
- Story 002: 路径规则解耦
- Story 003: AskUserQuestion UI 降级
- 不修改 `user_global` 本身（仅提供脚本，`user_global` 的更新由后续维护任务处理）

---

## QA 测试用例

- **AC-1**: 正常执行输出格式
  - Given: 项目处于正常 Git 仓库状态
  - When: `bash .agents/hooks/workspace-status.sh`
  - Then: 输出 3-4 行固定格式文本，包含分支名、Bug 数量等
  - Edge cases: 新建仓库无 commit 时应输出 "无提交"

- **AC-2**: 性能测试
  - Given: 项目含 100+ 文件的正常 Git 仓库
  - When: `time bash .agents/hooks/workspace-status.sh`
  - Then: 执行时间 < 1 秒
  - Edge cases: 大型仓库（1000+ 文件）

- **AC-3**: 降级测试
  - Given: `bug-tracker.md` 文件不存在
  - When: `bash .agents/hooks/workspace-status.sh`
  - Then: 输出 `Bug: 0`，脚本不报错
  - Edge cases: 非 Git 目录、无 `.agents/` 目录

- **AC-4**: 会话恢复检测
  - Given: `session-state/active.md` 存在
  - When: `bash .agents/hooks/workspace-status.sh`
  - Then: 额外输出第 4 行会话恢复提示

---

## 测试证据

**Story Type**: Logic
**所需证据**: 终端执行截图，展示正常输出 + 至少 1 种降级场景
**Status**: [ ] 尚未创建

---

## 依赖关系

- 依赖: Story 001（共享 `.agents/hooks/` 目录结构）
- 解锁: 无
