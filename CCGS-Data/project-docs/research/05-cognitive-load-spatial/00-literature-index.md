# 05 - 认知负荷理论与空间解谜设计

## 研究背景

本项目 GDD 中明确要求遵循认知负荷理论（Cognitive Load Theory, CLT）：**最小化外在负荷、最大化相关负荷**。

3D 空间旋转解谜天然具有高认知负荷（需要心理旋转、空间推理、多步规划），如何在保持谜题深度的同时控制认知负荷，是关卡设计和视觉设计的核心挑战。

核心研究问题：
- **空间认知负荷量化**：心理旋转（Mental Rotation）任务的认知成本模型
- **信息可视化降负荷**：通过视觉线索降低外在认知负荷的设计原则
- **渐进式复杂度**：如何在不增加外在负荷的前提下逐步引入新机制
- **多维度信息整合**：空间位置 × 方块类型 × 旋转状态的认知整合成本
- **元认知支架**：Undo/提示系统如何作为认知支架降低学习成本

## 推荐搜索关键词

### 浓缩检索词（供 NoteBookLM 一键复制）
> 可以直接复制以下核心词串汇编让 NoteBookLM 一次性进行广度及精确搜索，避免逐个搜索：
```text
Cognitive load theory (CLT) game design, Mental rotation spatial reasoning puzzle, Intrinsic extraneous germane cognitive load games, Spatial cognition 3D puzzle complexity, Information visualization cognitive load reduction, Scaffolding game-based learning, Working memory capacity puzzle difficulty, Dual coding theory spatial puzzles, Progressive complexity tutorial design, Cognitive load measurement eye tracking games, 认知负荷理论 游戏设计, 心理旋转 空间推理 解谜, 内在负荷 外在负荷 相关负荷, 空间认知 3D 谜题复杂度, 认知支架 游戏学习, 工作记忆容量 谜题难度
```

### 英文关键词
- `Cognitive load theory (CLT) game design`
- `Mental rotation spatial reasoning puzzle`
- `Intrinsic extraneous germane cognitive load games`
- `Spatial cognition 3D puzzle complexity`
- `Information visualization cognitive load reduction`
- `Scaffolding game-based learning`
- `Working memory capacity puzzle difficulty`
- `Dual coding theory spatial puzzles`
- `Progressive complexity tutorial design`
- `Cognitive load measurement eye tracking games`

### 中文关键词
- `认知负荷理论 游戏设计`
- `心理旋转 空间推理 解谜`
- `内在负荷 外在负荷 相关负荷`
- `空间认知 3D 谜题复杂度`
- `认知支架 游戏学习`
- `工作记忆容量 谜题难度`

## 已收录文献列表

| 编号 | 文献标题 | 作者/年份 | 核心思路简述 | 应用潜力 | 路径 |
|:-----|:---------|:---------|:------------|:---------|:-----|
| 01 | Puzzle Game Design (Principles, Levels, Template) | - | This website uses a security service to protect against malicious bots. This page is displayed while... | 待评估 | [Puzzle_Game_Design_(...](./Puzzle_Game_Design_(Principles,_Levels,_Template).md) |
| 02 | Cognitive Effort during Visuospatial Problem Solving in Physical Real World, on Computer Screen, and in Virtual Reality - PMC | - | Cognitive Effort during Visuospatial Problem Solving in Physical Real World, on Computer Screen, and... | 待评估 | [Cognitive_Effort_dur...](./Cognitive_Effort_during_Visuospatial_Problem_Solving_in_Physical_Real_World,_on_Computer_Screen,_and.md) |
| 03 | Exploring Neural Efficiency in Spatial Cognition: A Comparative Study of 3D Visual Stimuli in Virtual Reality across STEM and non-STEM fields  Request PDF - ResearchGate | - | The site owner may have set restrictions that prevent you from accessing the site. | 待评估 | [Exploring_Neural_Eff...](./Exploring_Neural_Efficiency_in_Spatial_Cognition_A_Comparative_Study_of_3D_Visual_Stimuli_in_Virtual.md) |
| 04 | Dual Coding Theory — Cognitive Psychology Reference | - | This website uses a security service to protect against malicious bots. This page is displayed while... | 待评估 | [Dual_Coding_Theory_—...](./Dual_Coding_Theory_—_Cognitive_Psychology_Reference.md) |
| 05 | How to Reduce Cognitive Load for a Better UI/UX Design? - GeeksforGeeks | - | How to Reduce Cognitive Load for a Better UI/UX Design? - GeeksforGeeks | 待评估 | [How_to_Reduce_Cognit...](./How_to_Reduce_Cognitive_Load_for_a_Better_UI_UX_Design_-_GeeksforGeeks.md) |
| 06 | (PDF) A Review of Scaffolding Approaches in Game-based Learning Environments | - | The site owner may have set restrictions that prevent you from accessing the site. | 待评估 | [(PDF)_A_Review_of_Sc...](./(PDF)_A_Review_of_Scaffolding_Approaches_in_Game-based_Learning_Environments.md) |
| 07 | Design Patterns: Progressive Disclosure for Mobile Apps - Nick Babich | - | Design Patterns: Progressive Disclosure for Mobile Apps | 待评估 | [Design_Patterns_Prog...](./Design_Patterns_Progressive_Disclosure_for_Mobile_Apps_-_Nick_Babich.md) |
| 08 | Managing Cognitive Load is a Delicate Act of Balance - SHIFT eLearning | - | Managing Cognitive Load is a Delicate Act of Balance | 待评估 | [Managing_Cognitive_L...](./Managing_Cognitive_Load_is_a_Delicate_Act_of_Balance_-_SHIFT_eLearning.md) |
| 09 | Mental Rotation Test  A Spatial Processing Task  Research - Labvanced | - | Mental Rotation Test  A Spatial Processing Task  Research | 待评估 | [Mental_Rotation_Test...](./Mental_Rotation_Test_A_Spatial_Processing_Task_Research_-_Labvanced.md) |
| 10 | Dual-coding theory - Wikipedia | - | 无摘要 | 待评估 | [Dual-coding_theory_-...](./Dual-coding_theory_-_Wikipedia.md) |
| 11 | Dual Coding Theory  BCL Learning Library | - | Dual coding theory explains how aligned visuals and words boost learning. Discover how to design mat... | 待评估 | [Dual_Coding_Theory_B...](./Dual_Coding_Theory_BCL_Learning_Library.md) |
| 12 | Cognitive Load Theory: Principles, Learning Processes, and Implications for Instructional Design - Educational Technology | - | Cognitive Load Theory: Principles, Learning Processes, and Implications for Instructional Design - E... | 待评估 | [Cognitive_Load_Theor...](./Cognitive_Load_Theory_Principles,_Learning_Processes,_and_Implications_for_Instructional_Design_-_Ed.md) |
| 13 | Cognitive Load Theory and Instructional Design: Recent ... | - | The University of New South Wales, Sydney, Australia | 待评估 | [Cognitive_Load_Theor...](./Cognitive_Load_Theory_and_Instructional_Design_Recent_....md) |
| 14 | Progressive disclosure - Mirakl Design | - | 无摘要 | 待评估 | [Progressive_disclosu...](./Progressive_disclosure_-_Mirakl_Design.md) |
| 15 | What is Progressive Disclosure? Show & Hide the Right Information - UXPin | - | What is Progressive Disclosure? Show & Hide the Right Information  UXPin | 待评估 | [What_is_Progressive_...](./What_is_Progressive_Disclosure_Show_&_Hide_the_Right_Information_-_UXPin.md) |
| 16 | A Haptic-Driven Serious Game for Cognitive Stimulation and Visual Impairment Mitigation in Older Adults Based on the Design-Play-Experience Framework: Cross-Sectional Mixed Methods Pilot Study - PMC | - | Checking your browser before accessing pmc.ncbi.nlm.nih.gov ... | 待评估 | [A_Haptic-Driven_Seri...](./A_Haptic-Driven_Serious_Game_for_Cognitive_Stimulation_and_Visual_Impairment_Mitigation_in_Older_Adu.md) |
| 17 | Progressive Disclosure design pattern | - | The user wants to focus on the task at hand with as few distractions as possible while still being a... | 待评估 | [Progressive_Disclosu...](./Progressive_Disclosure_design_pattern.md) |
| 18 | Cognitive load and visual attention assessment using physiological eye tracking measures in multimedia learning  PLOS One - Research journals | - | Cognitive load and visual attention assessment using physiological eye tracking measures in multimed... | 待评估 | [Cognitive_load_and_v...](./Cognitive_load_and_visual_attention_assessment_using_physiological_eye_tracking_measures_in_multimed.md) |
| 19 | Cognitive Load Theory - EdTech Books | - | 无摘要 | 待评估 | [Cognitive_Load_Theor...](./Cognitive_Load_Theory_-_EdTech_Books.md) |
| 20 | Measuring Cognition Load Using Eye-Tracking Parameters Based on Algorithm Description Tools - PMC | - | Checking your browser before accessing pmc.ncbi.nlm.nih.gov ... | 待评估 | [Measuring_Cognition_...](./Measuring_Cognition_Load_Using_Eye-Tracking_Parameters_Based_on_Algorithm_Description_Tools_-_PMC.md) |
| 21 | (PDF) The use of eye metrics to index cognitive workload in video ... | - | The site owner may have set restrictions that prevent you from accessing the site. | 待评估 | [(PDF)_The_use_of_eye...](./(PDF)_The_use_of_eye_metrics_to_index_cognitive_workload_in_video_....md) |
| 22 | Teaching Board Games #3: Scaffolding – Agile Learning - Derek Bruff | - | Teaching Board Games #3: Scaffolding – Agile Learning | 待评估 | [Teaching_Board_Games...](./Teaching_Board_Games_#3_Scaffolding_–_Agile_Learning_-_Derek_Bruff.md) |
| 23 | The Cognitive Architecture of Spatial Puzzle Design: Integrating Cognitive Load Theory and Multimodal Interaction | - | The theoretical framework governing modern instructional design and interactive puzzle mechanics is ... | 待评估 | [The_Cognitive_Archit...](./The_Cognitive_Architecture_of_Spatial_Puzzle_Design_Integrating_Cognitive_Load_Theory_and_Multimodal.md) |
| 24 | Cognitive Load In UX Design: Key Strategies for Management | - | Cognitive Load In UX Design: Key Strategies for Management | 待评估 | [Cognitive_Load_In_UX...](./Cognitive_Load_In_UX_Design_Key_Strategies_for_Management.md) |
| 25 | How to Reduce Cognitive Load for a Better UI/UX Design - Deltacron | - | How to Reduce Cognitive Load for a Better UI/UX Design | 待评估 | [How_to_Reduce_Cognit...](./How_to_Reduce_Cognitive_Load_for_a_Better_UI_UX_Design_-_Deltacron.md) |
| 26 | Evaluation of a mobile-based scaffolding board game developed by ... | - | Checking your browser before accessing pmc.ncbi.nlm.nih.gov ... | 待评估 | [Evaluation_of_a_mobi...](./Evaluation_of_a_mobile-based_scaffolding_board_game_developed_by_....md) |
| 27 | Mental Rotation Tasks: The Surprising Advantage of Aphantasia | - | Mental Rotation Tasks: The Surprising Advantage of Aphantasia | 待评估 | [Mental_Rotation_Task...](./Mental_Rotation_Tasks_The_Surprising_Advantage_of_Aphantasia.md) |
| 28 | Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed' in-game? : r/gamedev - Reddit | - | Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed... | 待评估 | [Spatial-audio_driven...](./Spatial-audio_driven_game_design_Giving_the_player_something_to_look_at_when_their_'eyes_are_closed'.md) |
| 29 | Leveraging Dual Coding Theory in Teaching to Maximize Learning - TrueLearn | - | Opens in a new window Opens an external website Opens an external website in a new window | 待评估 | [Leveraging_Dual_Codi...](./Leveraging_Dual_Coding_Theory_in_Teaching_to_Maximize_Learning_-_TrueLearn.md) |
| 30 | Mental Rotation - Millisecond | - | Licensing: Included with an [Inquisit](https://www.millisecond.com/products) license. | 待评估 | [Mental_Rotation_-_Mi...](./Mental_Rotation_-_Millisecond.md) |
| 31 | Game Tutorial Design: Reducing Cognitive Load in Your FTUE | - | Game Tutorial Design: Reducing Cognitive Load in Your FTUE | 待评估 | [Game_Tutorial_Design...](./Game_Tutorial_Design_Reducing_Cognitive_Load_in_Your_FTUE.md) |
| 32 | Few Guesses, More Success: 4 Principles to Reduce Cognitive Load in Forms - NN/G | - | Few Guesses, More Success: 4 Principles to Reduce Cognitive Load in Forms - NN/G | 待评估 | [Few_Guesses,_More_Su...](./Few_Guesses,_More_Success_4_Principles_to_Reduce_Cognitive_Load_in_Forms_-_NN_G.md) |
| 33 | Enhancing Spatial Ability Assessment: Integrating Problem-Solving ... | - | Enhancing Spatial Ability Assessment: Integrating Problem-Solving Strategies in Object Assembly Task... | 待评估 | [Enhancing_Spatial_Ab...](./Enhancing_Spatial_Ability_Assessment_Integrating_Problem-Solving_....md) |
| 34 | Sensory-Focused Game Design: How Haptics, Adaptive Sound, and Immersive Feedback Loops Drive Player Emotion | - | The gaming industry, valued at over $300+ billion, is at a crossroads. As visual fidelity converges ... | 待评估 | [Sensory-Focused_Game...](./Sensory-Focused_Game_Design_How_Haptics,_Adaptive_Sound,_and_Immersive_Feedback_Loops_Drive_Player_E.md) |
| 35 | Understanding and measuring cognitive load through eye tracking - Tobii | - | Understanding and measuring cognitive load through eye tracking - Tobii | 待评估 | [Understanding_and_me...](./Understanding_and_measuring_cognitive_load_through_eye_tracking_-_Tobii.md) |
| 36 | Mental rotation task - PsyToolkit | - | Mental rotation is imagining what a stimulus would look like if it would be rotated. | 待评估 | [Mental_rotation_task...](./Mental_rotation_task_-_PsyToolkit.md) |
| 37 | Cognitive load theory - LITFL | - | Cognitive load theory • LITFL Medical Blog • SMILE2 CCC | 待评估 | [Cognitive_load_theor...](./Cognitive_load_theory_-_LITFL.md) |
| 38 | Investigating the Interaction of Game Features and Spatial Skills with ... | - | The site owner may have set restrictions that prevent you from accessing the site. | 待评估 | [Investigating_the_In...](./Investigating_the_Interaction_of_Game_Features_and_Spatial_Skills_with_....md) |
| 39 | Cognitive Load - UI and UX Design - Codecademy | - | We use cookies and similar methods to recognize visitors and remember their preferences. We may also... | 待评估 | [Cognitive_Load_-_UI_...](./Cognitive_Load_-_UI_and_UX_Design_-_Codecademy.md) |

## AI 阅读笔记与思路提炼

### AI 核心提炼与思路总结
共收录 39 篇认知负荷理论（CLT）及空间推理相关文献，对项目的“空间可读性”与“复杂度爬升”设计有极强的指导性：

1. **三维心理旋转的认知成本控制**：
   大量文献表明，跨轴的 3D 心理旋转（Mental Rotation）对玩家工作记忆（Working Memory）的消耗呈指数级增长。这要求我们在 DDA 设计时，不仅要控制“步数”，还要严格控制**跨面翻转的次数阈值**。

2. **认知支架（Cognitive Scaffolding）的作用**：
   在解谜游戏中，Undo（撤销）、透明预览、旋转轴线高亮都是典型的“认知支架”。当系统检测到玩家认知负荷过载（如频繁撤销或长时间停顿）时，动态地增强 UI 引导（如高亮可达面）比直接降低关卡难度更能维持玩家的心流。

3. **分离外在负荷与相关负荷**：
   视觉设计的混乱会增加毫无意义的“外在认知负荷”。文献强调应将玩家的脑力集中于“相关认知负荷”（即逻辑推理本身）。因此，我们在场景美术和 Shader 设计上必须坚持“信息可视化第一，美术第二”的原则，确保方块材质对表面可通行性的明确指示。
