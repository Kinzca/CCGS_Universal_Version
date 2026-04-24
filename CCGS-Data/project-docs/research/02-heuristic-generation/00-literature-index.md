# 02 - 启发式过程化内容生成

## 研究背景

当前的塔窗口生成采用"随机采样 + 约束回退"策略：在 3×3×3 网格中随机铺设主路径，再填充外围方块。该方法在路径多样性和生成成功率上存在优化空间。

研究方向聚焦于：
- **启发式路径采样**：如何在满足可通行性约束的前提下，用启发式（而非纯随机）生成更多样、更有趣的攀爬路径
- **WFC / 约束传播**：Wave Function Collapse 等约束传播算法在 3D 网格拼接中的应用
- **进化算法 / 搜索算法**：遗传算法、MCTS 等在关卡生成中的应用

## 推荐搜索关键词

### 浓缩检索词（供 NoteBookLM 一键复制）
> 可以直接复制以下核心词串汇编让 NoteBookLM 一次性进行广度及精确搜索，避免逐个搜索：
```text
Procedural content generation (PCG) puzzle games, Wave Function Collapse 3D tile generation, Constraint-based procedural level generation, Heuristic path generation grid-based puzzles, Search-based procedural content generation (SBPCG), Evolutionary algorithms level design, Monte Carlo tree search level generation, Answer set programming puzzle generation, Constructive vs generate-and-test PCG, 过程化内容生成 解谜游戏, 波函数坍缩 3D 网格生成, 基于约束/搜索的关卡生成, 启发式路径生成 网格解谜
```

### 英文关键词
- `Procedural content generation (PCG) puzzle games`
- `Wave Function Collapse 3D tile generation`
- `Constraint-based procedural level generation`
- `Heuristic path generation in grid-based puzzles`
- `Search-based procedural content generation (SBPCG)`
- `Evolutionary algorithms level design`
- `Monte Carlo tree search level generation`
- `Answer set programming puzzle generation`
- `Constructive vs generate-and-test PCG`

### 中文关键词
- `过程化内容生成 解谜游戏`
- `波函数坍缩 3D 网格生成`
- `基于约束的关卡生成`
- `启发式路径生成 网格解谜`
- `基于搜索的过程化生成`

## 已收录文献列表

| 编号 | 文献标题 | 作者/年份 | 核心思路简述 | 应用潜力 | 路径 |
|:-----|:---------|:---------|:------------|:---------|:-----|
| 01 | Analysis of Algorithmic Paradigms in Procedural Puzzle Generation: From Constraint Satisfaction to Stochastic Optimization | - | The evolution of procedural content generation (PCG) from rudimentary noise-based terrain synthesis ... | 待评估 | [Analysis_of_Algorith...](./Analysis_of_Algorithmic_Paradigms_in_Procedural_Puzzle_Generation_From_Constraint_Satisfaction_to_St.md) |
| 02 | Arc Consistency Explained - BorisTheBrave.Com | - | I've been doing a lot of experiments with WaveFunctionCollapse, which [as we've covered before](http... | 待评估 | [Arc_Consistency_Expl...](./Arc_Consistency_Explained_-_BorisTheBrave.Com.md) |
| 03 | Heuristics - Stanford CS Theory | - | From [Amit's Thoughts on Pathfinding](http://theory.stanford.edu/~amitp/GameProgramming/) | 待评估 | [Heuristics_-_Stanfor...](./Heuristics_-_Stanford_CS_Theory.md) |
| 04 | A Genetic Algorithm-Based Solver for Small-Scale Jigsaw Puzzles - PMC | - | Checking your browser before accessing pmc.ncbi.nlm.nih.gov ... | 待评估 | [A_Genetic_Algorithm-...](./A_Genetic_Algorithm-Based_Solver_for_Small-Scale_Jigsaw_Puzzles_-_PMC.md) |
| 05 | Monte Carlo Search - Lamsade | - | Monte Carlo Tree Search, a method so bold, Exploring the tree, with its stories untold, Simulating t... | 待评估 | [Monte_Carlo_Search_-...](./Monte_Carlo_Search_-_Lamsade.md) |
| 06 | Tree Search versus Optimization Approaches for Map Generation | - | Proceedings of the Sixteenth AAAI Conference on Artificial Intelligence and Interactive Digital Ente... | 待评估 | [Tree_Search_versus_O...](./Tree_Search_versus_Optimization_Approaches_for_Map_Generation.md) |
| 07 | Cons of WFC vs. more traditional procgen approaches? : r/proceduralgeneration - Reddit | - | Cons of WFC vs. more traditional procgen approaches? : r/proceduralgeneration | 待评估 | [Cons_of_WFC_vs._more...](./Cons_of_WFC_vs._more_traditional_procgen_approaches_r_proceduralgeneration_-_Reddit.md) |
| 08 | Potassco - the Potsdam Answer Set Solving Collection | - | Potassco - the Potsdam Answer Set Solving Collection | 待评估 | [Potassco_-_the_Potsd...](./Potassco_-_the_Potsdam_Answer_Set_Solving_Collection.md) |
| 09 | Learning efficient constraints in answer set programming | - | Learning efficient constraints in answer set programming – Association for Logic Programming | 待评估 | [Learning_efficient_c...](./Learning_efficient_constraints_in_answer_set_programming.md) |
| 10 | An Intro To WaveFunctionCollapse - UCSC Creative Coding | - | Technical description of observe and propagate cycle | 待评估 | [An_Intro_To_WaveFunc...](./An_Intro_To_WaveFunctionCollapse_-_UCSC_Creative_Coding.md) |
| 11 | A User's Guide to gringo, clasp, clingo, and iclingo | - | Martin Gebser Roland Kaminski Benjamin Kaufmann Max Ostrowski Torsten Schaub Sven Thiele ∗∗ | 待评估 | [A_User's_Guide_to_gr...](./A_User's_Guide_to_gringo,_clasp,_clingo,_and_iclingo.md) |
| 12 | Creating a Newer and Improved Procedural Content Generation (PCG) Algorithm with Minimal Human Intervention for Computer Gaming Development - MDPI | - | Creating a Newer and Improved Procedural Content Generation (PCG) Algorithm with Minimal Human Inter... | 待评估 | [Creating_a_Newer_and...](./Creating_a_Newer_and_Improved_Procedural_Content_Generation_(PCG)_Algorithm_with_Minimal_Human_Inter.md) |
| 13 | Using Answer Set Programming for Assigning Tasks to Computing Nodes - CEUR-WS.org | - | Using Answer Set Programming for Assigning Tasks to Computing Nodes Franz Wotawa1,* | 待评估 | [Using_Answer_Set_Pro...](./Using_Answer_Set_Programming_for_Assigning_Tasks_to_Computing_Nodes_-_CEUR-WS.org.md) |
| 14 | Heuristic Function In AI - GeeksforGeeks | - | Heuristic functions are essential in AI search algorithms, helping estimate the cost from a current ... | 待评估 | [Heuristic_Function_I...](./Heuristic_Function_In_AI_-_GeeksforGeeks.md) |
| 15 | A Hybrid Cyclic-Graph & WFC Method for Designer-Guided and Replayable Procedural Content Generation | - | ABSTRACT Procedural generation techniques offer powerful ways to produce | 待评估 | [A_Hybrid_Cyclic-Grap...](./A_Hybrid_Cyclic-Graph_&_WFC_Method_for_Designer-Guided_and_Replayable_Procedural_Content_Generation.md) |
| 16 | Wave Function Collapse in game dev. - Expectation vs Reality : r/proceduralgeneration | - | Wave Function Collapse in game dev. - Expectation vs Reality : r/proceduralgeneration | 待评估 | [Wave_Function_Collap...](./Wave_Function_Collapse_in_game_dev._-_Expectation_vs_Reality_r_proceduralgeneration.md) |
| 17 | Procedural Puzzle Generation: A Survey - SCSS - School of ... | - | **Abstract—Procedural ****content generation (PCG) for games has existed since the 1980s and is beco... | 待评估 | [Procedural_Puzzle_Ge...](./Procedural_Puzzle_Generation_A_Survey_-_SCSS_-_School_of_....md) |
| 18 | Challenges in Answer Set Solving - Institut für Informatik und Computational Science | - | Martin Gebser, Roland Kaminski, Benjamin Kaufmann, and Torsten Schaub? | 待评估 | [Challenges_in_Answer...](./Challenges_in_Answer_Set_Solving_-_Institut_für_Informatik_und_Computational_Science.md) |
| 19 | A Demonstration of Pathfinding-Based Puzzle Generation with Adaptive Difficulty - University of Calgary | - | A Demonstration of Pathfinding-Based Puzzle Generation with Adaptive Difficulty | 待评估 | [A_Demonstration_of_P...](./A_Demonstration_of_Pathfinding-Based_Puzzle_Generation_with_Adaptive_Difficulty_-_University_of_Calg.md) |
| 20 | Search-based Procedural Content Generation | - | Julian Togelius1, Georgios N. Yannakakis1, Kenneth O. Stanley2, Cameron Browne3 | 待评估 | [Search-based_Procedu...](./Search-based_Procedural_Content_Generation.md) |
| 21 | Hybrid Approaches to Procedural Content Generation for Game Design, Production, and Security | - | 无摘要 | 待评估 | [Hybrid_Approaches_to...](./Hybrid_Approaches_to_Procedural_Content_Generation_for_Game_Design,_Production,_and_Security.md) |
| 22 | Wave Function Collapse — UpRoom Games | - | Our Games [Dev Log](https://www.uproomgames.com/dev-log) | 待评估 | [Wave_Function_Collap...](./Wave_Function_Collapse_—_UpRoom_Games.md) |
| 23 | ASP-Bench: From Natural Language to Logic ProgramsTo appear in the proceedings of the 2nd International Workshop on Neuro-Symbolic Software Engineering (NSE@ICSE 2026). Supported by the Austrian Science Fund (FWF) projects 10.55776/P36688 and 10.55776/COE12. - arXiv | - | ASP-Bench: From Natural Language to Logic ProgramsTo appear in the proceedings of the 2nd Internatio... | 待评估 | [ASP-Bench_From_Natur...](./ASP-Bench_From_Natural_Language_to_Logic_ProgramsTo_appear_in_the_proceedings_of_the_2nd_Internation.md) |
| 24 | Hybrid Procedural Level Generation Using Wave Function Collapse ... | - | Hybrid Procedural Level Generation Using Wave Function Collapse and Genetic Algorithms | 待评估 | [Hybrid_Procedural_Le...](./Hybrid_Procedural_Level_Generation_Using_Wave_Function_Collapse_....md) |
| 25 | Generating Sokoban Puzzle Game Levels with Monte Carlo Tree Search - Semantic Scholar | - | Request blocked. We can't connect to the server for this app or website at this time. There might be... | 待评估 | [Generating_Sokoban_P...](./Generating_Sokoban_Puzzle_Game_Levels_with_Monte_Carlo_Tree_Search_-_Semantic_Scholar.md) |
| 26 | Literature review of procedural content generation in puzzle games | - | This is the third chapter from my Master Thesis (Automatic Game Generation). This chapter will provi... | 待评估 | [Literature_review_of...](./Literature_review_of_procedural_content_generation_in_puzzle_games.md) |
| 27 | Resolving contradictions in WFC more efficiently than naive backtracking | - | performance - Resolving contradictions in WFC more efficiently than naive backtracking - Game Develo... | 待评估 | [Resolving_contradict...](./Resolving_contradictions_in_WFC_more_efficiently_than_naive_backtracking.md) |
| 28 | TransPath: Learning Heuristics For Grid-Based Pathfinding via Transformers | - | TransPath: Learning Heuristics For Grid-Based Pathfinding via Transformers | 待评估 | [TransPath_Learning_H...](./TransPath_Learning_Heuristics_For_Grid-Based_Pathfinding_via_Transformers.md) |
| 29 | From Frustration to Fun: An Adaptive Problem-Solving Puzzle Game Powered by Genetic Algorithm - arXiv | - | From Frustration to Fun: An Adaptive Problem-Solving Puzzle Game Powered by Genetic Algorithm | 待评估 | [From_Frustration_to_...](./From_Frustration_to_Fun_An_Adaptive_Problem-Solving_Puzzle_Game_Powered_by_Genetic_Algorithm_-_arXiv.md) |
| 30 | Procedural Content Generation in Games: A Survey with Insights on Emerging LLM Integration - arXiv | - | Procedural Content Generation in Games: A Survey with Insights on Emerging LLM Integration | 待评估 | [Procedural_Content_G...](./Procedural_Content_Generation_in_Games_A_Survey_with_Insights_on_Emerging_LLM_Integration_-_arXiv.md) |
| 31 | Quantum Wave Function Collapse for Procedural Content Generation - arXiv | - | Quantum Wave Function Collapse for Procedural Content Generation | 待评估 | [Quantum_Wave_Functio...](./Quantum_Wave_Function_Collapse_for_Procedural_Content_Generation_-_arXiv.md) |
| 32 | Learning-Enhanced Wave Function Collapse: A Reinforcement Learning Approach to Procedural Content Generation - DiVA portal | - | 无摘要 | 待评估 | [Learning-Enhanced_Wa...](./Learning-Enhanced_Wave_Function_Collapse_A_Reinforcement_Learning_Approach_to_Procedural_Content_Gen.md) |
| 33 | Puzzle Level Generation with Answer Set Programming | - | Technical Library School of Computing and Information Systems | 待评估 | [Puzzle_Level_Generat...](./Puzzle_Level_Generation_with_Answer_Set_Programming.md) |
| 34 | A self-learning Monte Carlo tree search algorithm for robot path planning - PMC - NIH | - | Checking your browser before accessing pmc.ncbi.nlm.nih.gov ... | 待评估 | [A_self-learning_Mont...](./A_self-learning_Monte_Carlo_tree_search_algorithm_for_robot_path_planning_-_PMC_-_NIH.md) |
| 35 | A Pragmatic Programmer's Guide to Answer Set Programming - CEUR-WS.org | - | A Pragmatic Programmer’s Guide to Answer Set Programming | 待评估 | [A_Pragmatic_Programm...](./A_Pragmatic_Programmer's_Guide_to_Answer_Set_Programming_-_CEUR-WS.org.md) |
| 36 | Paper Database - PCG Workshop | - | THE 17TH WORKSHOP ON PROCEDURAL CONTENT GENERATION (PCG2026) | 待评估 | [Paper_Database_-_PCG...](./Paper_Database_-_PCG_Workshop.md) |
| 37 | Search-Based Procedural Content Generation in Games - GitHub Pages | - | Ian L. McGathey Division of Science and Mathematics | 待评估 | [Search-Based_Procedu...](./Search-Based_Procedural_Content_Generation_in_Games_-_GitHub_Pages.md) |
| 38 | A* algorithm and its Heuristic Search Strategy in Artificial Intelligence - GeeksforGeeks | - | A* algorithm and its Heuristic Search Strategy in Artificial Intelligence - GeeksforGeeks | 待评估 | [A_algorithm_and_its_...](./A_algorithm_and_its_Heuristic_Search_Strategy_in_Artificial_Intelligence_-_GeeksforGeeks.md) |
| 39 | The Procedural Content Generation Benchmark: An Open-source Testbed for Generative Challenges in Games - arXiv | - | The Procedural Content Generation Benchmark: An Open-source Testbed for Generative Challenges in Gam... | 待评估 | [The_Procedural_Conte...](./The_Procedural_Content_Generation_Benchmark_An_Open-source_Testbed_for_Generative_Challenges_in_Game.md) |
| 40 | Procedural Generation: Wave Function Collapse - Ptidej Team Blog | - | Back in the early 2010s, after spending long tedious days at elementary school, I was eager to come ... | 待评估 | [Procedural_Generatio...](./Procedural_Generation_Wave_Function_Collapse_-_Ptidej_Team_Blog.md) |

## AI 阅读笔记与思路提炼

### AI 核心提炼与思路总结
通过对这 40 篇过程化生成（PCG）与启发式搜索相关文献的梳理，核心可以提炼为以下几点，对本项目的“初始场景生成”及“打乱路径优化”极具指导意义：

1. **混合生成管线（Hybrid Generation Pipeline）成为趋势**：
   大量文献指出，纯依赖波函数坍缩（WFC）容易陷入死锁，而纯依赖遗传算法（GA）则容易产生不合理结构。**WFC（保证局部结构合法性） + GA/MCTS（优化全局连通性与游玩体验）** 是目前最可靠的路线。

2. **声明式约束逻辑与可解性验证**：
   在 3D 空间解谜中，与其生成后再验证，不如将“连通性约束”与“机制约束”写入生成算法的前置条件。例如 ASP（Answer Set Programming）或使用含有可通行性保证的搜索启发函数（Heuristic Function），能在生成初期极大地减少无效迭代。

3. **启发式评估函数的精细化**：
   对于 A* 或相关搜索算法，曼哈顿距离或切比雪夫距离在多维旋转解谜中可能不够准确。可以利用“模式数据库（Pattern Databases）”建立更精确的启发式缓存，以应对跨面旋转时的距离跳跃问题。
