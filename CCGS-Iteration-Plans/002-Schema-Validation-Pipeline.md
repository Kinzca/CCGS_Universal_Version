# CCGS 迭代计划 002：数据结构化与 Schema 校验管线

> **制定时间**：2026-04-27
> **计划目标**：解决框架中核心输出物（Epic、Story、GDD 等）由于过度依赖纯 Markdown 文本所导致的格式不一致与字段遗漏问题，实现“机器可读”与“自动门禁拦截”。

## 一、 当前架构痛点 (Pain Point)
目前 CCGS 框架的 `Epic`、`Story` 以及 `GDD` 均为纯 Markdown 文件。这种 **“文本驱动”** 模式极度依赖 AI 的“自觉性”去读懂并遵守 `templates` 中的格式规定。
随着项目的演进和文档长度的急剧膨胀，大语言模型（LLM）的注意力会逐渐分散，极易发生格式错乱、关键字段遗漏（如丢失 Acceptance Criteria 或 Dependencies），这将大量增加技术总监或 QA 负责人的人肉 Review 成本。

## 二、 核心优化方案 (Optimization Plan: Schema Validation)
为了将框架从“文本驱动”升级为**“图谱/Schema约束”**，我们需要在底层的自动化校验能力上做减法并做强制约束。

### 1. 引入轻量级 Schema 定义文件
在 `.ccgs-core/rules/` 下创建专门的 YAML/JSON Schema 文件，精确定义各类文档的必填与选填字段结构。例如：
- **Story Schema** 必须包含：
  - `status` (Ready / In-Progress / Done / Blocked)
  - `type` (Logic / Visual / UI / Integration)
  - `acceptance_criteria` (数组格式，不能为空)
  - `dependencies` (必须拆分 Code 与 Asset 依赖)
- **Epic Schema** 必须包含：
  - `governing_adrs` (对应的决策记录编号)
  - `traced_requirements` (需求源头)

*(注：可以将 Markdown 的头部统一改用 YAML Frontmatter 格式，以便于机器脚本极速读取与校验。)*

### 2. 构建 `verify-schema.sh` 自动化门禁钩子
在 `.ccgs-core/hooks/` 目录下新增一个强约束校验脚本 `verify-schema.sh`。
- **触发时机**：当任何一个 Agent 执行完诸如 `/create-epics` 或 `/create-stories` 的生成任务后，强制触发此脚本。
- **执行逻辑**：脚本使用诸如 `yq` 或原生 Python 脚本提取 Markdown 文件中的元数据和区块，并与 `rules` 目录下的 Schema 进行比对。
- **自动打回机制**：一旦发现缺漏（如某个 Story 生成后忘记写 Acceptance Criteria 或是缺少 Asset Dependencies 字段），脚本会直接抛出标准错误码 (Exit 1) 并将报错信息（例如：“验证失败：Story 003 缺少 `acceptance_criteria` 字段”）返回给 AI。
- **闭环效果**：AI 在接收到报错后，将被迫自动触发重写逻辑，直到满足 Schema 校验为止。从而彻底缩短人肉 Review 的介入时间。

## 三、 实施路径规划 (Implementation Path)
1. **第一阶段：定义标准数据结构** 
   - 梳理现有的 `epic-template.md` 和 `story-template.md`，抽离出 YAML Frontmatter 结构。
   - 在 `.ccgs-core/rules/schemas/` 中编写对应的 JSON Schema 文件。
2. **第二阶段：编写校验挂载脚本**
   - 实现 `.ccgs-core/hooks/verify-schema.sh`，采用轻量级无额外依赖的方式（如原生 Python）进行文本块检测和 YAML 读取。
3. **第三阶段：集成至 Agent 工作流**
   - 修改 `workflows/skills/` 里的指令集，要求在 `write file` 操作后，必须执行 `bash .ccgs-core/hooks/verify-schema.sh [文件路径]`。若失败则进入修改循环。
