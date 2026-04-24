# 04_Skills生态全景

The Skills Ecosystem2026年，Skills生态已经相当热闹了。但质量参差不齐，知道去哪找、怎么选，比找到多少更重要。

在写这章之前，我花了一个下午把市面上所有Skills平台都逛了一遍。结论是：Skills的数量已经不是问题了，质量才是。

全网加起来超过100万个Skills，但真正好用的可能不到1%。所以这一章不是给你列一份平台清单让你自己去淘金。

我会告诉你每个平台的特点、适合什么场景，以及最重要的——怎么判断一个Skill值不值得装。开放标准：agentskills.io（The OpenStandard）先说标准本身。

2025年12月，Anthropic把Agent Skills发布为开放标准，网站是agentskills.io，官方仓库在github.com/anthropics/skills。到2026年4月，已经有20多个AI产品采纳了这个标准。

 

[插图]

标准的核心其实非常简单：一个Skill就是一个SKILL.md文件。标准定义了三件事：●格式：YAML frontmatter + Markdown正文。

●触发机制：什么时候激活这个Skill（when字段或description匹配）●加载方式：放在哪个目录、怎么被AI工具发现。就这些。

没有复杂的API，没有SDK，没有编译步骤。你用记事本就能写一个Skill。

这个低门槛是Skills生态能爆发的根本原因。开放标准的意义在于：你写的一个SKILL.md，可以在Claude Code、Cursor、Codex、Gemini CLI等20多个产品上运行。

学一次，到处用。这和MCP的思路一样——不是让每个产品自己造轮子，而是大家用同一套规范。

## 七大Skills平台（Seven Platforms）目前值得关注的Skills来源有七个。

我按「从官方到社区」的顺序介绍。1. Anthropic官方Skills仓库（github.com/anthropics/skills）Anthropic自己维护的示例Skills。

数量不多，但每一个都是标杆级的质量。如果你刚开始接触Skills，从这里挑两三个装上体验，是最稳的起步方式。

官方仓库里的Skill，触发条件写得清晰、执行步骤可验证、上下文占用合理。它们不只是能用，而且是「这就是Skill该怎么写」的参考答案。

2. skills.sh（Vercel Labs推出）Vercel推出的开源Agent Skills目录（The Agent SkillsDirectory）​，用npx skills add安装。界面做得很干净，搜索体验不错。

注意这不是Anthropic官方的，是Vercel Labs的开源项目。3. AgentSkill.sh106,000+个Skills的社区市场。

安装方式很方便：在ClaudeCode里直接输入/learn @owner/skill-name就行。社区驱动意味着更新快、覆盖面广，但也意味着质量参差不齐。

有些Skill写得很精心，有些就是随手糊的一个Markdown。用之前最好先看一眼SKILL.md的内容，别无脑装。

4. SkillsMP（skillsmp.com）目前最大的Skills市场，700,000+个Skills。支持一键安装和 SKILL.md复制。

数量碾压其他平台，但大量Skills是自动生成的，质量参差不齐。适合有明确需求的时候去搜索，不适合随便逛。

5. SkillHub（skillhub.club）7,000+个Skills，数量不大但有个亮点：AI评审机制。每个上传的Skill都会经过自动质量评估，包括触发条件是否清晰、执行步骤是否完整、上下文长度是否合理。

这让SkillHub的平均质量明显高于其他社区平台。如果你不想花时间筛选，SkillHub是个省心的选择。

6. 腾讯SkillHub中国版1.3万+个Skills，国内最大的Skills聚合平台。它不只是翻译海外的Skills，还做了安全审计和本地化适配。

对国内开发者来说，最大的价值是与腾讯系AI产品的深度集成。如果你的工作环境主要在国内，这是首选平台。

我主要用的还是手动安装——把SKILL.md直接丢进.claude/skills/目录，简单粗暴但从来没出过问题。市场上那些平台我基本是当搜索引擎用，看到好的Skill就把内容复制下来自己改改，比直接装更放心。

7. 字节跳动生态字节的路径比较特别：不是做一个独立平台，而是把Skills能力嵌入到自己的产品矩阵里。Coze 2.0支持Agent Skills标准，ArkClaw适配飞书工作流，TRAE IDE内置了Skills管理。

如果你是飞书重度用户或者在用Coze做Agent，字节生态的Skills会和你的工作环境衔接得最顺滑。

## 横向对比（Platform Comparison）

[插图]

选Skill的5个标准（Five Selection Criteria）平台再多，最终你还是要做一个判断：这个Skill值不值得装？

我用了大半年Skills，总结出5个标准。按重要性排序：

[插图]

[插图]

[插图]

[插图]

[插图]

核心建议新手最容易犯的错误是装太多Skill。

记住：每个Skill都有认知成本。装10个质量参差的Skill，不如精选3个真正好用的。

先从官方仓库和SkillHub选，用熟了再去社区淘金。社区现象：蒸馏宇宙（The Distillation Universe）2026年3月底，GitHub上出了个项目叫「同事.skill」​。

干的事很简单：把离职同事的飞书消息、邮件、工作文档喂进AI，生成一个Claude Code的Skill文件。这个Skill能用同事的语气说话，用他的方法干活，甚至保留他review代码时先问impact再看逻辑的习惯。

三天破千星，很快涨到5000多星。Slogan是：​「将冰冷的离别化为温暖的Skill，欢迎加入数字生命1.0」​。

[插图]

然后一切开始失控。几天之内，GitHub上冒出了一整个蒸馏宇宙：前任.skill（蒸馏前任，小红书一条帖子近万赞）​、自己.skill（蒸馏自己，创建24/7在线的数字分身）​、老板.skill、导师.skill。

最荒诞的是反蒸馏.skill——帮你生成一份看起来完整但核心知识被移除的版本，提供三档稀释强度，适用场景：公司只检查有没有交。打工人的数字时代留一手。

这些项目技术上都不复杂。同事.skill的架构把一个人拆成两层：Work Skill（工作能力层：技术规范、决策路径、代码习惯）和Persona（人格层：说话方式、沟通节奏、情绪反应）​。

接到任务后Persona判断态度和语气，Work Skill执行具体工作，用他的风格输出结果。但蒸馏宇宙真正有意思的地方不是技术，是它证明了一件事：Skills已经从开发者工具破圈到了大众视野。

当普通人开始讨论「我能不能被Skill化」的时候，说明这个概念已经触及了比编程更深的东西。女娲.skill：把蒸馏变成工程同事.skill蒸馏的是行为习惯——怎么说话、怎么干活。

但如果你想蒸馏芒格、费曼、马斯克这种人，光提取行为没什么意义。你不需要知道芒格几点起床，你需要的是他看问题的方式。

我做了一个叫「女娲」的工具来解决这个问题。它把蒸馏从行为层推进到了思维框架层。

GitHub开源两天star破千。

[插图]

女娲启动后会并行派出6个Agent，分别负责：著作和长文、长对话和访谈、碎片表达（推特、短文）​、外部视角（批评者怎么说）​、决策记录（不看说了什么，看做了什么）​、人生时间线。

6个维度跑完汇总，用三重验证提炼心智模型：跨域复现（至少在两个不同领域出现过）​、有生成力（能推断对新问题的态度）​、有排他性（不是所有聪明人都会这么想）​。三个都满足才收录。

目前已经蒸馏了8个Skill：乔布斯、马斯克、芒格、费曼、Naval、塔勒布、张雪峰，外加一个主题skill——X导师（不蒸馏人，蒸馏一个领域的方法论）​。每个都可以单独安装使用。

[插图]

蒸馏宇宙说明Skills生态正在经历一个有意思的分化：一边是工具型Skills（帮你做事）​，一边是认知型Skills（帮你思考）​。后者的出现，让Skills从「自动化工具」升级成了「思维扩展器」​。

这是2026年Skills生态最值得关注的新方向。

## 一门免费课程（A Free Course）如果你想系统地入门Agent Skills，推荐DeepLearning.AI在2026年1月发布的「Agent Skills with Anthropic」课程。

免费，2小时，由Anthropic的Elie Schoppik主讲。这门课覆盖了Skills的基本概念、创建方法和最佳实践。

它不会教你做很复杂的东西，但能帮你建立正确的心智模型。对于刚接触Skills的人，这2小时的投入非常值得。

讲完了去哪找，接下来讲怎么装。