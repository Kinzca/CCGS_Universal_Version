# 05_安装你的第一个Skill

Install Your First Skill安装Skill比你想象的简单。最简单的方式就是把一个文件放到正确的目录。

很多人一听到「安装」就觉得要折腾环境、装依赖、跑命令。Skills不是这样的。

它的本质是一个Markdown文件。你把这个文件放到指定目录，AI工具就能读到它。

没有编译，没有构建，没有依赖。但「放到哪个目录」有讲究。

放错了位置，Skill不会生效；放对了位置，效果也因层级不同而不同。

## Skill的四个层级（Four Levels of Skills）Skills有一个层级体系。

从最广到最窄：

[插图]

[插图]

[插图]

[插图]

理解层级关系的关键是优先级：Enterprise级优先级最高，Personal次之，Project最低。也就是说，公司统一规范会覆盖个人偏好，个人偏好会覆盖项目设置。

这个设计是有道理的——如果公司规定了代码安全审查标准，你不能在项目里把它关掉。Plugin级通过命名空间隔离，不和其他层级冲突。

实际使用中，大多数人接触到的就是Personal和Project两级。我自己的经验是，通用的写作风格、代码review标准放Personal，项目特有的部署脚本、API规范放Project，基本不会打架。

用文件树来看，整个结构长这样：/.claude/└── skills/ # Personal级（全局）├── code-review/│ └── SKILL.md├── weekly-report/│ └── SKILL.md└── proofreading/└── SKILL.md/my-project/└── .claude/└── skills/ # Project级（项目专属）├── deploy-flow/│ └── SKILL.md└── api-spec/└── SKILL.mdClaude Code安装方式（Installing inClaude Code）Claude Code是目前Skills支持最完善的工具，也是我主要使用的工具。三种安装方式，从最基础到最方便：方式一：手动安装最笨但最可靠的方式。

创建目录，把SKILL.md放进去。# 项目级安装mkdir -p .claude/skills/my-skill# 然后把SKILL.md文件放到这个目录里# 全局安装mkdir -p ~/.claude/skills/my-skill# 同样把SKILL.md放进去就这样。

没有第三步。下次启动Claude Code，它会自动扫描这些目录，发现新的Skill并加载。

### 方式二：从市场安装AgentSkill.sh支持一条命令安装：/learn @owner/skill-name比如安装一个前端设计Skill：/learn @anthropics/frontend-design这条命令会自动把SKILL.md下载到正确的目录。

省去了手动创建文件夹的步骤。

### 方式三：从GitHub安装如果Skill是一个GitHub仓库，直接clone到skills目录：# 项目级git clone https://github.com/xxx/skill-name .claude/skills/skill-name# 全局git clone https://github.com/xxx/skill-name ~/.claude/skills/skill-name这种方式的好处是可以用gitpull来更新Skill。

当Skill的作者发布了新版本，你拉一下代码就是最新的了。全局还是项目级？

判断标准很简单：如果这个Skill跟你的身份有关（你的写作风格、你的review标准）​，放全局。如果跟特定项目有关（这个项目的部署脚本、这个项目的测试规范）​，放项目级。

拿不准的话，先放项目级，用了一段时间发现到处在用，再提升到全局。

## Cursor安装（Installing in Cursor）Cursor从一开始就有.cursorrules文件的概念，现在已经纳入了Agent Skills标准。

安装方式和Claude Code几乎一样：# 在项目根目录mkdir -p .cursor/skills/my-skill# 放入SKILL.mdCursor同时也兼容项目根目录的SKILL.md文件。如果你的Skill很简单（只有一个文件）​，直接放在.cursor/skills/目录下也行，不需要再嵌套一层子文件夹。

一个实际的好处是：如果你的项目同时有.claude/skills/和.cursor/skills/，两个工具各取所需，互不干扰。当然，如果Skill内容是一样的，你也可以用符号链接避免重复。

## 其他工具（Other Tools）Agent Skills标准已经被广泛采纳，以下是几个主流工具的安装方式：

[插图]

你会发现规律：目录结构都是.[工具名]/skills/skill-name/SKILL.md。

记住这个模式，遇到新工具也能猜对路径。

## 安装后验证（Verify Installation）装完了怎么确认Skill真的在工作？

最简单的办法：直接说触发词，看AI是否按Skill的流程来。比如你装了一个审校Skill，触发词是「审校」​「降AI味」​。

你对AI说「帮我审校一下这篇文章」​，如果AI开始按三遍审校流程走（而不是笼统地给你修改建议）​，说明Skill已经生效了。在Claude Code中，你还可以看到更直接的证据。

当Skill被加载时，日志里会显示加载了哪些Skills。如果你不确定，可以直接问AI：​「你现在加载了哪些Skills？

​」它会告诉你。

## 跟着装三个Skill（Hands-on: Install Three Skills）理论够了，动手吧。

下面跟着安装三个Skill，从官方到社区，体验完整的安装流程。

[插图]

[插图]

[插图]

核心建议这个Hello Skill当然没什么实际用处。

但它演示了一件关键的事：创建一个Skill的门槛低到令人意外。就是一个Markdown文件，加一个YAML头部。

后面的章节会教你怎么把这个能力用到真正有价值的场景上。

## 常见安装问题排查（Troubleshooting）装了Skill但不生效，90%的原因出在以下三个地方：问题一：Skill不生效先检查文件路径是否正确。

最常见的错误是把SKILL.md直接扔在.claude/skills/下面，没有创建子文件夹。正确的结构是.claude/skills/skill-name/SKILL.md。

另外确认文件名——标准推荐使用SKILL.md（大写）​，虽然有些工具对大小写不敏感，但用大写是最稳的选择。

### 问题二：触发不了Skill加载了，但你说了触发词它也不按Skill的流程走。

检查SKILL.md里的description或when字段，看看触发条件是否和你说的话匹配。比如你的触发条件写的是「当用户要求代码review时」​，但你说的是「帮我看看这段代码」​，AI可能没把这两者关联起来。

把触发条件写得更具体、覆盖更多同义表达会有帮助。

### 问题三：Skill之间冲突装了两个Skill，触发条件有重叠，AI不知道该用哪个。

比如你有一个「写作审校」Skill和一个「降AI味」Skill，用户说「帮我审校」时两个都被激活了。解决方法是让触发条件更精确，或者把功能相近的Skill合并成一个。

注意一个容易被忽略的问题：SKILL.md的YAML frontmatter格式必须严格正确。三个短横线开头，三个短横线结尾，中间是合法的YAML。

少一个短横线或者缩进不对，整个Skill都不会被识别。如果一切看起来都对但就是不生效，把frontmatter单独拿出来用YAML验证器检查一下。

装好了Skill，下一步就是真正用起来。第6章会讲Skills在实际工作中的使用方法和技巧。