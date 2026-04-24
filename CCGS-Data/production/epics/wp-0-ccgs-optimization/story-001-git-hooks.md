# Story 001: Git Hooks 硬约束校验脚本

> **Epic**: CCGS 通用 IDE 适配与硬约束重构
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Logic

## 上下文

**需求来源**: Epic `wp-0-ccgs-optimization` — Story 1
**问题定义**: 当前 CCGS 的提交规范校验（commit message 格式、JSON 合法性、资产命名）完全依赖大模型在 System Prompt 中的"自觉遵守"（协议 2：操作前自审查）。在长上下文或弱模型下，这些软约束会被遗忘，导致不规范的代码被提交。

**参考实现**: 原生 CCGS 框架的 `.claude/hooks/validate-commit.sh`、`validate-push.sh`、`validate-assets.sh`

**目标**: 编写 3 个 Bash 校验脚本，挂载到 `.agents/hooks/` 目录，并提供 Git Hooks 安装脚本，实现物理级的提交拦截。

**⚠️ 架构约束（v2 修订）**: 所有校验规则（路径、正则、章节列表）**禁止硬编码在脚本中**，必须从 `.agents/hooks/hooks-config.yaml` 配置文件中读取。脚本本身是通用的引擎，配置文件才是项目特定的参数源。这确保了框架可跨项目复用（如弹珠骑士和交错空间共用同一套脚本）。

---

## 验收标准

- [ ] 创建 `.agents/hooks/hooks-config.yaml` 配置文件，作为所有校验参数的唯一真源
- [ ] `validate-commit.sh`: 从 `hooks-config.yaml` 读取 commit message 格式正则并执行校验
- [ ] `validate-commit.sh`: 从 `hooks-config.yaml` 读取数据文件路径通配符，检查 `.json` / `.yaml` 格式合法性
- [ ] `validate-commit.sh`: 从 `hooks-config.yaml` 读取 GDD 路径和必要章节列表，检查 GDD 文件完整性
- [ ] `validate-push.sh`: 检测到 `git push` 时输出警告提醒，绝不自动执行 push
- [ ] `validate-assets.sh`: 从 `hooks-config.yaml` 读取资产路径和命名正则，检查资产文件命名规范
- [ ] `install-hooks.sh`: 一键将上述脚本软链接到 `.git/hooks/pre-commit` 和 `.git/hooks/pre-push`
- [ ] 所有脚本使用 POSIX 兼容语法（`grep -E`，非 `grep -P`），macOS / Linux 通用
- [ ] 脚本在缺少 `jq` 或 `python` 时优雅降级（跳过对应检查，不报错崩溃）
- [ ] 脚本中**零硬编码**：更换项目时只需修改 `hooks-config.yaml`，脚本文件零改动

---

## 实现指引

### 文件清单

| 文件 | 用途 |
|:---|:---|
| `.agents/hooks/hooks-config.yaml` | **唯一真源** — 所有校验参数的配置文件 |
| `.agents/hooks/validate-commit.sh` | pre-commit 钩子：格式检查 + 数据文件校验（通用引擎） |
| `.agents/hooks/validate-push.sh` | pre-push 钩子：push 警告拦截 |
| `.agents/hooks/validate-assets.sh` | 资产命名规范检查（可被 validate-commit 调用） |
| `.agents/hooks/install-hooks.sh` | 安装脚本：创建 `.git/hooks/` 软链接 |

### hooks-config.yaml 配置文件结构

```yaml
# .agents/hooks/hooks-config.yaml — 校验脚本的配置源（唯一真源）
# 更换项目时只需修改此文件，脚本零改动

commit_message:
  # commit message 格式正则
  pattern: "^(feat|fix|docs|style|refactor|perf|test|chore|hotfix|epic)\\(.+\\): .+$"

gdd_validation:
  # GDD 文件所在路径（相对项目根目录）
  path: ".agents/design/gdd/"
  # 必要章节标题列表（可按项目增减）
  required_sections:
    - "Overview"
    - "Player Fantasy"
    - "Detailed"
    - "Formulas"
    - "Edge Cases"
    - "Dependencies"
    - "Tuning Knobs"
    - "Acceptance Criteria"

data_files:
  # 需要校验格式合法性的数据文件通配符
  json_patterns:
    - "**/*.json"
  yaml_patterns:
    - ".agents/**/*.yaml"

asset_naming:
  # 需要检查命名规范的资产目录
  paths:
    - "Assets/"
  # 合法命名正则（小写字母+数字+下划线+扩展名）
  pattern: "^[a-z0-9_]+\\.[a-z]+$"
```

### 关键设计决策

1. **配置驱动（Data-Driven）**：所有校验参数从 `hooks-config.yaml` 读取，脚本本身是通用引擎
2. **YAML 解析方案**：优先使用 `python -c "import yaml"` 解析配置；无 Python 时降级为 `grep` 逐行提取
3. **退出码约定**：`exit 0` = 允许通过，`exit 1` = 阻塞提交（stderr 输出错误原因）
4. **路径适配**：脚本内部使用相对路径，基于 `git rev-parse --show-toplevel` 定位项目根目录
5. **与原生 CCGS 的差异**：原生框架的 hooks 接收 JSON stdin（Claude Code 专用协议），我们的版本直接读取 `git diff --cached` 和 commit message，不依赖任何 IDE 特定协议
6. **跨项目复用**：将此框架打包给弹珠骑士时，只需修改 `hooks-config.yaml`（比如 GDD 路径改为 `docs/gdd/`），脚本文件原封不动复制即可

---

## 超出范围

- Story 002: 路径规则文件的创建与分发
- Story 004: workspace-status 探针脚本

---

## QA 测试用例

- **AC-1**: Commit message 格式校验
  - Given: 用户暂存了一个文件
  - When: 执行 `git commit -m "随便写的"`
  - Then: 提交被拦截，stderr 输出格式提示
  - Edge cases: 中文 scope 如 `fix(塔系统): 修复旋转`、空 message、超长 message

- **AC-2**: JSON 合法性校验
  - Given: 用户修改了 `.agents/design/gdd/systems-index.json` 且格式非法
  - When: 执行 `git commit`
  - Then: 提交被拦截，提示 JSON 语法错误所在文件
  - Edge cases: 无 Python 环境时应跳过检查而非报错

- **AC-3**: 资产命名检查
  - Given: 用户新增了一个名为 `MyTexture-v2.png` 的资产文件
  - When: 执行 `git commit`
  - Then: stderr 输出命名规范警告（非阻塞）

---

## 测试证据

**Story Type**: Logic
**所需证据**: 终端截图或日志，展示至少 3 种违规场景被正确拦截
**Status**: [ ] 尚未创建

---

## 依赖关系

- 依赖: 无
- 解锁: Story 004（workspace-status 依赖 Git 信息读取基础）
