# Story 002: 路径规则解耦与按需加载

> **Epic**: CCGS 通用 IDE 适配与硬约束重构
> **Status**: Complete
> **Layer**: Foundation
> **Type**: Config/Data

## 上下文

**需求来源**: Epic `wp-0-ccgs-optimization` — Story 2
**问题定义**: 当前 `user_global` 的协议 5（路径感知编码规则）将所有路径→规则的映射硬编码在全局 System Prompt 中。无论 AI 正在编辑什么文件，这些规则都会被加载，浪费数千 tokens 的上下文窗口，且在弱模型下容易被忽略。

**目标**: 将路径规则从全局 Prompt 中拆出，建立**单一真源**（`.agents/rules/*.md`）+ **自动分发脚本**（`distribute-rules.sh`）的架构。规则内容只维护一份，换 IDE 时只需运行一条命令即可自动生成对应格式的规则文件。

**⚠️ 架构约束（v2 修订）**: `.clinerules` / `.cursorrules` 等文件**禁止手动创建和维护**，必须由 `distribute-rules.sh` 自动生成。映射关系（哪个目录放哪条规则）也**禁止硬编码在脚本中**，必须从 `hooks-config.yaml` 的 `rules_mapping` 段读取。

---

## 验收标准

- [ ] 创建 `.agents/hooks/distribute-rules.sh` 自动分发脚本，支持参数 `cline` / `cursor` / `all`
- [ ] 脚本从 `hooks-config.yaml` 的 `rules_mapping` 段读取「源文件 → 目标目录」映射，脚本中零硬编码路径
- [ ] 运行分发后，各目录自动生成对应 IDE 的规则文件
- [ ] 规则唯一真源为 `.agents/rules/*.md`，生成文件头部含自动生成声明
- [ ] 创建 `.agents/rules/README.md`，说明分发脚本用法
- [ ] `user_global` 中的协议 5 表格被精简为一行引导文字
- [ ] 生成的规则文件加入 `.gitignore`
- [ ] 更换项目时只需修改 `hooks-config.yaml` 中的 `rules_mapping`，脚本零改动

---

## 实现指引

### 文件清单

| 文件 | 用途 |
|:---|:---|
| `.agents/rules/*.md` | **唯一真源** — 各领域的编码规则源文件 |
| `.agents/hooks/distribute-rules.sh` | 自动分发脚本 — 从源文件生成 IDE 专属规则文件 |
| `.agents/rules/README.md` | 分发策略说明文档 |
| `*/.clinerules` (自动生成) | Cline 专属格式（由脚本生成，禁止手动编辑） |
| `*/.cursorrules` (自动生成) | Cursor 专属格式（由脚本生成，禁止手动编辑） |

### 规则映射配置（hooks-config.yaml 中的 rules_mapping 段）

分发脚本从 `hooks-config.yaml` 读取以下映射，而非硬编码：

```yaml
# hooks-config.yaml 追加段
rules_mapping:
  # 源文件 → 目标目录（相对项目根目录）
  - source: "gameplay-code.md"
    target: "Assets/GameScripts/GameLogic"
  - source: "engine-code.md"
    target: "Assets/GameScripts/Engine"
  - source: "design-docs.md"
    target: ".agents/design/gdd"
```

更换项目时只需修改此映射，脚本零改动。

### IDE 适配映射

| IDE / 插件 | 规则文件名 | 加载机制 |
|:---|:---|:---|
| Cline (VS Code) | `.clinerules` | 编辑该目录文件时自动注入 |
| Cursor | `.cursorrules` | 项目根目录或各子目录 |
| Continue.dev | `config.json` 中的 `contextProviders` | 需手动配置路径 |
| Antigravity | `user_global` 中的路径表（当前方案） | 全局加载 |

### `user_global` 精简方案

将协议 5 的完整路径表替换为：

```markdown
### 🔒 协议 5：路径感知编码规则

> 路径规则已分发至各目录的 `.clinerules` 文件中，AI 在编辑对应目录文件时会自动加载。
> 规则源文件位于 `.agents/rules/` 目录。详情参照 `.agents/rules/README.md`。
```

---

## 超出范围

- Story 001: Git Hooks 脚本编写
- Story 003: AskUserQuestion UI 降级

---

## QA 测试用例

- **AC-1**: 自动分发功能验证
  - Given: `.agents/rules/gameplay-code.md` 源文件存在
  - When: `bash .agents/hooks/distribute-rules.sh cline`
  - Then: `Assets/GameScripts/GameLogic/.clinerules` 自动生成且内容非空
  - Edge cases: 目录不存在时脚本应自动创建；重复运行应覆盖旧文件

- **AC-2**: 规则内容完整性
  - Given: `.clinerules` 已创建
  - When: 对比 `.clinerules` 与源文件 `.agents/rules/gameplay-code.md`
  - Then: 核心约束条目一致，无遗漏

- **AC-3**: `user_global` 精简验证
  - Manual check: 打开 `user_global` 设置
  - Verify: 协议 5 已被精简为 ≤ 3 行引导文字
  - Pass condition: 不再包含完整的路径→规则映射表

---

## 测试证据

**Story Type**: Config/Data
**所需证据**: 文件差异截图 + Token 计数对比（精简前 vs 精简后）
**Status**: [ ] 尚未创建

---

## 依赖关系

- 依赖: 无
- 解锁: 无
