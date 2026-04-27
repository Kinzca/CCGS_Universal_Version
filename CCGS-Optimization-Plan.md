# CCGS 框架临时优化计划：美术与资产管线集成

> **制定时间**：2026-04-27
> **计划目标**：升级框架的 Epic 与 Sprint 规划流程，确保美术/UI 资产的需求梳理、制作规划与验证标准与代码逻辑研发获得同等权重的管理，彻底打破“重代码轻美术”的倾向。

## 一、 优化背景与理念
原本提议的“自动化生成资产”方案具有局限性，过度自动化可能无法满足部分需要精细手绘 UI/资产的项目的实际需求。
因此，真正的优化方向应是**在生产管线（Pipeline）的设计层面上，将“美术资产规划”正式纳入 Epic 和 Sprint 的核心流程中**。无论资产是自动化生成还是手动制作，均需经历清晰的**“需求流转 -> 占位符解耦 -> 资产交付 -> 验收集成”**闭环。

## 二、 核心升级任务清单 (Task List)

### 1. 升级核心文档模板 (Templates Upgrade)
需要修改 `.ccgs-core/docs/templates/` 目录下的核心生产模板，强制加入美术视角：

- **`epic-template.md` 升级**：
  - 新增 **[资产依赖清单]** 区块，列出该 Epic 需要的所有图片、音效、UI 预设、特效。
  - 新增 **[美术与技术解耦策略]**，明确代码开发阶段如何使用占位符，以及最终资产的交接节点。
  
- **`sprint-plan.md` 升级**：
  - 在 Sprint Backlog 中，除了代码 Story 外，强制增加 `Art Task` (美术任务) 追踪。
  - 增加 **[资产交付门禁]** 检查项，在代码验收前，验证真实资产是否已正确替换占位符。

- **`story-template.md` 升级**：
  - 在“前置依赖 (Dependencies)”字段中，显式区分 `Code Dependencies` 与 `Asset Dependencies`。

### 2. 升级工作流与 AI Prompt (Workflow & Agent Upgrade)
在 `.ccgs-core/workflows/` 中调整 Producer、UI Programmer 和 Art Director 等关键 Agent 的行为准则：

- **Epic/Sprint 规划阶段 (`/create-epics`, `/sprint-plan`)**：
  - 强制要求 AI (如 `producer`) 在拆解任务时，交叉对比 GDD 和 UX 设计文档，主动提取并罗列所需的美术资产清单。
  - 为美术制作预留合理的 Sprint 点数或排期。

- **开发验证阶段 (`/story-done`, `/gate-check`)**：
  - QA 测试和验收阶段不能仅关注逻辑控制，必须包含“资产对齐审查（Asset Alignment Review）”，对比实机画面与 UI/美术规格是否一致。

## 三、 标准化资产集成管线 (Asset Integration Pipeline)
在未来的开发中，明确遵循以下**三步走**资产协作管线：

1. **白盒/占位符阶段 (Whitebox/Placeholder)**
   - 程序员基于 UX 规范，自行生成或使用内置色块/纯文字实现 UI 骨架，打通底层逻辑。
   - 美术人员同步进行切图与资产打磨。

2. **资产就绪状态 (Asset Ready)**
   - 美术交付资产，并依照规范（如 `validate-assets.sh` 命名规则）存入对应资源目录。

3. **拼图与抛光阶段 (Integration & Polish)**
   - 在 Sprint 末尾或专属的 Polish Sprint 中，程序员/技术美术负责将占位符批量替换为最终资产，并进行动画与转场调优。

## 四、 实施建议
该计划确立了资产管理的顶层规范。接下来可通过调整 `.ccgs-core/rules` 中的规则定义文件（如 `ui-code.md` 或新建 `asset-pipeline.md`），将以上要求固化为 AI 必须遵循的指令集，从而彻底在框架中落地这套“代码与美术并重”的工作流。
