# Analysis of Algorithmic Paradigms in Procedural Puzzle Generation: From Constraint Satisfaction to Stochastic Optimization

# Analysis of Algorithmic Paradigms in Procedural Puzzle Generation: From Constraint Satisfaction to Stochastic Optimization

The evolution of procedural content generation (PCG) from rudimentary noise-based terrain synthesis to sophisticated, logic-aware puzzle generation marks a significant transition in the field of computational creativity and game design. While early applications of PCG focused on environmental variety and data compression—exemplified by the infinite celestial bodies of No Man’s Sky or the dwarven lineages of Dwarf Fortress—modern puzzle synthesis demands a rigorous adherence to solvability and structural coherence.[1, 2, 3] In the domain of puzzle games, the generative process is not merely an aesthetic endeavor but a functional necessity; a level that lacks a solution is a failure of the algorithm, rendering the content unplayable and breaking the player’s trust in the game’s logic.[4, 5] This report examines the predominant methodologies in procedural puzzle generation, focusing on Wave Function Collapse (WFC), Answer Set Programming (ASP), Search-Based PCG (SBPCG), and specialized heuristic pathfinding techniques, while analyzing their comparative performance, structural validity, and integration within hybrid generative frameworks.

## Foundations of Procedural Content Generation for Puzzles

Procedural content generation is defined as the automated creation of game assets through algorithmic means, a process that enables developers to scale content production while minimizing manual workload.[1, 3, 5] Within the context of puzzle games, this automation faces unique hurdles. Unlike open-world terrain, which can tolerate minor artifacts, puzzles require that every element be placed with intentionality to ensure a path to victory exists.[2, 4] This requirement has led to a distinction between two primary generative philosophies: constructive methods and generate-and-test methodologies.[6, 7]

Constructive PCG systems generate finished content in a single pass, relying on pre-defined rules and grammars to guarantee that the output is valid upon creation.[7, 8] These systems are efficient and can be used for real-time generation during gameplay, but they often lack the flexibility to optimize for specific difficulty levels or complex global constraints.[9, 10] Conversely, generate-and-test approaches produce candidate content and then apply a secondary evaluation phase to verify quality and solvability.[7, 11] If a candidate fails the test—such as a Sokoban level where the goal is unreachable—it is discarded or modified.[4, 5] This feedback loop is essential for maintaining the high standards of logic required in the genre.

### Comparative Classification of Generative Paradigms

|  |  |  |  |

| --- | --- | --- | --- |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

The tension between automation and authorial control remains a central challenge in PCG research.[10] While algorithms can produce vast quantities of content, they often lack the narrative intentionality and thematic pacing of handcrafted levels.[10] Researchers address this by developing metrics for quality, diversity, and controllability, allowing AI systems to identify and address limitations in their own outputs.[6] Quality measures the percentage of content that passes playability criteria, while diversity ensures the generator does not produce repetitive variants of the same core structure.[6] Controllability allows designers to manipulate parameters—such as the number of enemies or puzzle complexity—to steer the algorithm toward specific design goals.[6]

## Wave Function Collapse and 3D Tile Synthesis

Wave Function Collapse (WFC) has rapidly gained prominence as a powerful tool for generating locally coherent layouts from minimal input data.[10, 12, 13] Although its name is borrowed from quantum mechanics, WFC is a purely classical, greedy constraint-solving algorithm that operates by iteratively reducing the possibility space of a grid until a unique state is determined for every cell.[12, 14] The "wave function" refers to the set of all potential states (tiles) for each segment, while the "collapse" occurs when a specific state is chosen, triggering a cascade of constraints throughout the matrix.[12, 14, 15]

### The Implementation of 3D Matrix Structures

Translating the 2D bitmap-based origins of WFC into 3D space requires a more complex architectural approach.[15] Instead of pixels, the 3D algorithm operates on a matrix of cells that can hold 3D models or "tiles".[8, 15] Each cell begins in a state of maximum entropy, where every tile in the tileset is considered a valid possibility.[14, 15] The generation process follows a structured sequence:

**Selection (Observation):** The algorithm identifies the cell with the lowest Shannon entropy—meaning the one with the fewest valid tile options remaining.[12, 15] This selection often includes a small amount of random noise to ensure that identical entropy values do not result in deterministic, repetitive patterns.[15]

**Collapse:** A single tile is assigned to the selected cell through a weighted random selection process.[12, 15] Tiles seen more frequently in an input sample can be weighted to appear more often in the output, allowing for the replication of specific styles or densities.[14, 15]

**Propagation (The "Wave"):** Once a cell is collapsed, the algorithm must update the possibility domains of its neighbors.[14, 15, 16] If a neighboring cell's domain is reduced, it, in turn, propagates changes to its own neighbors.[14] This process continues until the entire matrix is consistent or a contradiction occurs.[14, 15]

Establishing valid adjacency is a significant technical challenge in 3D WFC. Unlike images where color similarity determines connectivity, 3D tiles must match at their boundaries to ensure structural integrity.[15] One effective method involves comparing the vertices (x, y, z) on the extremes of the bounding volume for each tile.[15] By mapping these vertex matches across all rotated versions of every tile, developers can create exhaustive adjacency lists that guide the propagation step.[15]

### Backtracking and Constraint Resolution Strategies

A primary criticism of standard WFC is its lack of global awareness; the algorithm makes local decisions that can lead to unsolvable "dead-end" states where no tile satisfies the accumulated constraints.[14, 17, 18] This is particularly prevalent in highly constrained tilesets, such as those used for generating interconnected pipe systems or traversable interiors.[15, 19]

Naive backtracking serves as the most basic solution, where the algorithm unwinds recent collapses upon hitting a contradiction and attempts different tile choices.[14, 15, 19] However, the possibility space in 3D can be so vast that naive backtracking becomes computationally expensive, leading to slow generation times.[15, 19] More advanced implementations use arc-consistency algorithms, such as AC-3 or AC-4, as their propagation engine.[16] AC-3 maintains consistency by checking if every value in a variable's domain has a "support" (a compatible value) in the domains of its neighbors.[16] If a value has no support, it is removed, potentially triggering further removals.[16] Using a solver in this way, known as Maintaining Arc Consistency (MAC), allows the system to detect failures earlier than standard forward checking.[16]

### Advanced WFC Implementation Layers

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

Despite these improvements, WFC remains a local generator. It struggles with big-picture rules, such as ensuring a path exists between the front and back doors of a generated castle.[15, 17] To address this, developers often layer WFC, using it as a local refinement tool within a larger global framework.[17, 20]

## Answer Set Programming: A Declarative Approach to Puzzle Logic

Answer Set Programming (ASP) offers a radically different paradigm, moving away from procedural step-by-step algorithms toward a declarative model of problem-solving.[21, 22] In ASP, a problem is described as a set of logic rules and constraints; the solver then automatically computes "answer sets"—stable models that represent valid solutions to the described problem.[21, 23, 24] This paradigm is rooted in knowledge representation and non-monotonic reasoning, making it exceptionally well-suited for combinatorial search and optimization problems like puzzle generation.[23, 25]

### The Architecture of ASP solvers: Clingo and Clasp

Modern ASP research centers on tools like Clingo, which integrates the functionality of a grounder (Gringo) and a solver (Clasp).[26, 27] The process begins with modeling, where the developer writes a logic program in AnsProlog.[22, 25] This program is then "grounded," translating the high-level rules into a propositional logic equivalent that the solver can process.[27]

ASP programs typically follow a generate-and-test methodology embedded within a single logic file.[25] A core strength of ASP is its use of "choice rules," which allow the system to generate multiple consistent worlds rather than a single fact.[24] For example, the rule `{select(T,N) : node(N)} = 1` specifies that for every task T, exactly one node N must be selected.[28] Integrity constraints, such as `:- select(T,N), capacity(N,C), M > C`, then discard any potential solution that violates the rules of the game or the physical limits of the system.[28]

### The Core-Sim-Style Pattern in Level Synthesis

For generating game levels, ASP developers often utilize the "core-sim-style" pattern, which segments the logic into three distinct functional programs: core, simulation, and style.[24]

**Core Logic:** Defines the physical entities and their initial placement. For a grid-based puzzle like Swappy, this involves using cardinality constraints to place sprites (walls, goals, players) while ensuring that no tile contains multiple contradictory objects.[24]

**Simulation Logic:** Acts as the internal game engine, formalizing the mechanics and win conditions. By defining facts like `touch(X, Y, Color)`, the simulation tracks reachability.[24] It uses grid math to establish adjacency and ensures that gameplay rules—such as the eponymous swapping mechanic—are strictly followed.[24] Most importantly, the simulation requires that the goal be "touched" by the appropriate player for an answer set to be valid, thus guaranteeing solvability.[24]

**Style Logic:** Governs the aesthetic and subjective qualities of the level. This layer might enforce symmetry, balance the distribution of colors, or ensure that a certain percentage of the grid remains open to prevent claustrophobic designs.[24]

By utilizing this expressive power, ASP can generate error-free, solvable levels in seconds or minutes—a process that manually could take 8 to 20 hours for an expert designer.[24] However, the declarative nature of ASP means it does not scale for "free." Grounding large-scale instances can lead to memory bottlenecks, necessitating the use of symmetry-breaking constraints to prune the search space of redundant, logically identical configurations.[23, 25]

## Search-Based PCG and Evolutionary Optimization

Search-based procedural content generation (SBPCG) represents a paradigm where the generation process is framed as a global optimization problem.[5, 7, 29] In this approach, stochastic search algorithms—most notably evolutionary algorithms (EAs)—search through a space of possible levels to find those that maximize a specific fitness function.[5, 7, 11]

### Genetic Algorithms and Fitness Landscape Navigation

The most common implementation of SBPCG is through the use of genetic algorithms (GAs), which mimic the processes of natural selection.[7, 11] A population of candidate content instances (chromosomes) is held in memory, each representing a potential level layout.[5, 11] Each generation, these candidates are evaluated and ranked based on their fitness.[5] The least suitable candidates are discarded and replaced by the offspring of high-fitness individuals, created through crossover (recombining traits from two parents) and mutation (randomly altering individual traits).[5, 7, 11]

Fitness functions are the "intelligence" of the GA and can be categorized into two types:

**Direct Fitness Functions:** Evaluate content based on static, easily extractable attributes.[7] In a puzzle, this might include the number of box-pushes required, the length of the solution path, or the density of obstacles.[4, 7, 30]

**Simulation-Based Fitness Functions:** Score content based on its performance within a simulated environment.[7, 29] For instance, an automated agent might attempt to solve a generated level; the fitness is then derived from the agent's performance, such as the number of backtracks it performed or the total time taken.[7, 31]

### Dynamic Evolution in Sokoban and Path-Based Puzzles

In Sokoban generation, the fitness function often targets "interestingness" by measuring the number of box lines or the depth of the solution tree.[4] As the target number of crates increases, the GA must navigate a more complex landscape where the majority of random configurations are unsolvable.[4] To ensure playability, a BFS-based solver is often embedded within the evaluation step to discard any level that cannot be completed.[4]

### SBPCG Evolutionary Components

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

Genetic algorithms are highly effective at finding "good" levels regardless of the path taken, but they can be prone to "stagnation" where the population converges on a local optimum, producing repetitive results.[6, 11, 29] This has led researchers to explore alternative search mechanisms, such as Monte Carlo Tree Search.

## Monte Carlo Tree Search in Procedural Generation

Monte Carlo Tree Search (MCTS) is a stochastic tree-search algorithm that has traditionally been used for NPC artificial intelligence, but it has recently shown promise as a competitive alternative to evolutionary algorithms in PCG.[29, 32] MCTS navigates large search spaces by building an asymmetric tree, focusing its computational efforts on the most promising branches through random simulations (rollouts).[29, 33]

### Representation and Deceptive Landscapes

A key finding in MCTS research is that its performance is heavily tied to the "representation" of the level within the tree.[29] Optimization algorithms like GAs typically use a "wide" representation where every cell in the grid can be modified simultaneously.[29] However, this leads to a massive branching factor that cripples MCTS.[29] To combat this, researchers use "narrow" representations, where the generator selects a single cell to modify at each step, significantly reducing the branching factor and allowing the tree to grow deeper.[29]

MCTS is particularly powerful in "deceptive" landscapes, such as Sokoban.[29] In Sokoban, many moves that appear good (e.g., pushing a box toward a goal) can lead to a state where the puzzle is unsolvable.[29] While a greedy search or a basic EA might waste time on these deceptive paths, MCTS uses rollouts to estimate the long-term quality of a branch before committing, allowing it to navigate around deadlocks more effectively.[29, 34]

### Self-Learning and Hybrid MCTS Models

The latest advancements in MCTS involve integrating neural networks to replace the rollout process, a technique known as Self-Learning MCTS (SL-MCTS).[34] In SL-MCTS, a two-branch neural network (PV-Network) predicts both the promising search directions (probability) and the value of a node.[34] This hybrid approach allows MCTS to balance exploration and exploitation more efficiently, reducing time consumption by half compared to traditional MCTS while significantly improving path quality.[34]

## Heuristic Pathfinding and Player-Centric Adaptation

In puzzles where pathfinding is the central mechanic—such as Cosmic Express—heuristic search algorithms like A* are utilized not just for solving but for the generation process itself.[31, 35, 36] The A* algorithm combines the actual travel cost from the start, g(n), with an estimated future cost to the goal, h(n), to guide the search.[36, 37]

### Heuristic Formulas for Grid Navigation

The choice of heuristic significantly impacts the efficiency of the search. In grid-based environments where movement is restricted to horizontal and vertical directions, the Manhattan distance is the preferred admissible heuristic [37]:

h(n) = D \times (|x_{current} - x_{goal}| + |y_{current} - y_{goal}|)

If diagonal movement is allowed, the Chebyshev distance or Octile distance is employed to account for the reduced step count.[38] For puzzles like the "15-Puzzle," heuristics often incorporate additional components, such as a weight based on the piece number, to encourage solving the puzzle from the top-left corner downward.[39]

### Adaptive Puzzle Systems and Player Modeling

Modern PCG systems are increasingly "adaptive," utilizing player-modeling mechanisms to match puzzle complexity to the individual player's skills in real time.[30, 31] A player model tracks behavior—such as time taken to reach a solution, number of backtracks, and frequency of resets—to suggest a new target difficulty level.[30, 31]

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

By calibrating these factors, adaptive systems can maintain an optimal difficulty balance, reducing player frustration and enhancing engagement.[30, 31] In one study, an AI-powered system using a genetic algorithm to tailor pathfinding-based puzzles reported a noticeable sense of progression and high player satisfaction.[31]

## Hybrid Architectures and Performance Benchmarking

Given the complementary strengths of different algorithms, the most effective modern PCG systems are often hybrid in nature.[10, 40] A prominent example is the integration of WFC and Genetic Algorithms (Hybrid WFC-GA).[40]

### Logic and Efficiency Comparison: Standalone vs. Hybrid

Standalone WFC is structurally reliable but lacks the logic to optimize for gameplay metrics.[40] GA-only approaches are gameplay-driven but frequently produce unplayable, logically inconsistent designs.[40] A hybrid system uses WFC as a preprocessing stage to ensure a valid structural foundation, which is then refined by a GA to optimize for difficulty, exploration potential, and flow.[40]

Experimental results demonstrate the superiority of the hybrid model:

**Generation Efficiency:** The hybrid model converges significantly faster than WFC-only or GA-only methods. WFC-only takes longer (19.40s) due to repeated backtracking in highly constrained grids, while the hybrid model averages 8.45s.[40]

**Playability and Validity:** While WFC-only guarantees 100% playability, it is inflexible. The hybrid model achieves an 89.9% playability rate—a massive improvement over the 62.5% rate of GA-only systems.[40]

**Computational Optimization:** To facilitate real-time use, these hybrid frameworks leverage parallel fitness evaluations through Unity’s Job System and Burst Compiler, achieving near-linear scaling with available CPU cores.[40]

### Global Structure and Narrative Intent

Another hybrid trajectory combines graph grammar with WFC (CG-WFC).[10] Designers use cyclic graph generation to define high-level mission structures (e.g., narrative beats or exploration rhythms).[10] WFC then takes this global graph and instantiates the local spatial layout.[10] This separation of concerns allows for the "fine-grained control" of handcrafted levels while maintaining the scale and variety of procedural systems.[10]

### Benchmarking PCG Algorithms

The Procedural Content Generation Benchmark (PCG Benchmark) provides the first standardized way to compare these diverse algorithms across 12 different problems.[6] By scoring algorithms on Quality, Diversity, and Controllability, researchers can pinpoint where specific methods fail.[6] For instance, results show that while evolution strategies are excellent for generating arcade-style levels, they may struggle with the tight logical constraints of word games compared to deterministic constructive methods.[6]

## Insights and Implications for Future Puzzle Synthesis

The trajectory of procedural puzzle generation suggests a move away from "black-box" randomization toward "white-box" semantic understanding. The integration of Answer Set Programming and Wave Function Collapse indicates that the industry is prioritizing formal verification—the ability to prove that a level is solvable—over simple quantity. This shift has profound implications for game design:

**Guaranteed Replayability:** As solvability becomes a guaranteed output of the generative logic (as in ASP), developers can build games around truly endless content without the risk of "softlocking" the player.[5, 41]

**Adaptive Learning Tools:** Player-centric PCG can transform entertainment into education, as adaptive difficulty systems can be repurposed to teach complex subjects like mathematics or logic through personalized, pathfinding-based puzzles.[30, 31]

**Collaborative Design (Mixed-Initiative):** Future tools will likely be "mixed-initiative," where a human designer provides a high-level mission graph, and an AI hybrid (like CG-WFC) suggests various traversable layouts, allowing for a collaborative "authorial" process.[5, 10]

**Neurosymbolic Hybrids:** The success of SL-MCTS and PV-Networks suggests that the future of PCG lies in neurosymbolic AI—combining the symbolic reasoning of logic-based constraints (ASP, WFC) with the perceptual and predictive power of deep learning.[21, 34]

## Conclusion

Procedural content generation for puzzle games is no longer a matter of simple randomization; it is a discipline defined by the synthesis of logic, search, and optimization. Wave Function Collapse provides a robust mechanism for local spatial coherence, while Answer Set Programming offers the formal rigor necessary to guarantee complex game mechanics. Search-based methods, through genetic algorithms and Monte Carlo Tree Search, allow for the optimization of difficulty and player engagement, ensuring that puzzles are not only solvable but also "interesting." The move toward hybrid frameworks—integrating local structural rules with global gameplay objectives—represents the current state of the art, achieving high structural validity with significantly reduced generation times. As adaptive difficulty and standardization benchmarks continue to evolve, procedural generation will move from a backend production tool to a central gameplay mechanic, enabling a new generation of dynamic, personalized, and logically perfect puzzle experiences.


--------------------------------------------------------------------------------


Hybrid Approaches to Procedural Content Generation for Game Design, Production, and Security, [https://uwo.scholaris.ca/bitstreams/0637268f-48b1-49eb-92bd-16c2ac1b4e9a/download](https://uwo.scholaris.ca/bitstreams/0637268f-48b1-49eb-92bd-16c2ac1b4e9a/download)

Procedural Puzzle Generation: A Survey - SCSS - School of ..., [https://www.scss.tcd.ie/mads.haahr/papers/de-kegel-2020-transactions.pdf](https://www.scss.tcd.ie/mads.haahr/papers/de-kegel-2020-transactions.pdf)

Procedural Content Generation in Games: A Survey with Insights on Emerging LLM Integration - arXiv, [https://arxiv.org/html/2410.15644v1](https://arxiv.org/html/2410.15644v1)

Literature review of procedural content generation in puzzle games, [https://www.um.edu.mt/library/oar/bitstream/123456789/82026/1/Literature_Review_of_Procedural_Content_Generation_in_2015.pdf](https://www.um.edu.mt/library/oar/bitstream/123456789/82026/1/Literature_Review_of_Procedural_Content_Generation_in_2015.pdf)

Search-based Procedural Content Generation, [https://www.um.edu.mt/library/oar/bitstream/123456789/22953/1/Search-Based_Procedural_Content_Generation%20%281%29.pdf](https://www.um.edu.mt/library/oar/bitstream/123456789/22953/1/Search-Based_Procedural_Content_Generation%20%281%29.pdf)

The Procedural Content Generation Benchmark: An Open-source Testbed for Generative Challenges in Games - arXiv, [https://arxiv.org/html/2503.21474v1](https://arxiv.org/html/2503.21474v1)

Search-Based Procedural Content Generation in Games - GitHub Pages, [https://umm-csci.github.io/senior-seminar/seminars/fall2014/Mcgathey.pdf](https://umm-csci.github.io/senior-seminar/seminars/fall2014/Mcgathey.pdf)

Wave Function Collapse Asset Generation - IS MUNI, [https://is.muni.cz/th/ogid5/thesis.pdf](https://is.muni.cz/th/ogid5/thesis.pdf)

Creating a Newer and Improved Procedural Content Generation (PCG) Algorithm with Minimal Human Intervention for Computer Gaming Development - MDPI, [https://www.mdpi.com/2073-431X/13/11/304](https://www.mdpi.com/2073-431X/13/11/304)

A Hybrid Cyclic-Graph & WFC Method for Designer-Guided and Replayable Procedural Content Generation, [https://blog.ptidej.net/content/files/2025/11/_ICSE_GAS_Laurent____Graph_WFC_Procedural_Gen-1_compressed.pdf](https://blog.ptidej.net/content/files/2025/11/_ICSE_GAS_Laurent____Graph_WFC_Procedural_Gen-1_compressed.pdf)

A Genetic Algorithm-Based Solver for Small-Scale Jigsaw Puzzles - PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC7354823/](https://pmc.ncbi.nlm.nih.gov/articles/PMC7354823/)

Quantum Wave Function Collapse for Procedural Content Generation - arXiv, [https://arxiv.org/html/2312.13853v2](https://arxiv.org/html/2312.13853v2)

Learning-Enhanced Wave Function Collapse: A Reinforcement Learning Approach to Procedural Content Generation - DiVA portal, [https://www.diva-portal.org/smash/get/diva2:1986617/FULLTEXT01.pdf](https://www.diva-portal.org/smash/get/diva2:1986617/FULLTEXT01.pdf)

Procedural Generation: Wave Function Collapse - Ptidej Team Blog, [https://blog.ptidej.net/procedural-generation-using-wave-function-collapse/](https://blog.ptidej.net/procedural-generation-using-wave-function-collapse/)

Wave Function Collapse — UpRoom Games, [https://www.uproomgames.com/dev-log/wave-function-collapse](https://www.uproomgames.com/dev-log/wave-function-collapse)

Arc Consistency Explained - BorisTheBrave.Com, [https://www.boristhebrave.com/2021/08/30/arc-consistency-explained/](https://www.boristhebrave.com/2021/08/30/arc-consistency-explained/)

Cons of WFC vs. more traditional procgen approaches? : r/proceduralgeneration - Reddit, [https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/](https://www.reddit.com/r/proceduralgeneration/comments/11f2fsm/cons_of_wfc_vs_more_traditional_procgen_approaches/)

An Intro To WaveFunctionCollapse - UCSC Creative Coding, [https://creativecoding.soe.ucsc.edu/courses/cmpm202_w20/slides/W2_Tues_Karth_WaveFunctionCollapse.pdf](https://creativecoding.soe.ucsc.edu/courses/cmpm202_w20/slides/W2_Tues_Karth_WaveFunctionCollapse.pdf)

Resolving contradictions in WFC more efficiently than naive backtracking, [https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking](https://gamedev.stackexchange.com/questions/178443/resolving-contradictions-in-wfc-more-efficiently-than-naive-backtracking)

Wave Function Collapse in game dev. - Expectation vs Reality : r/proceduralgeneration, [https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/](https://www.reddit.com/r/proceduralgeneration/comments/15i2wyw/wave_function_collapse_in_game_dev_expectation_vs/)

ASP-Bench: From Natural Language to Logic ProgramsTo appear in the proceedings of the 2nd International Workshop on Neuro-Symbolic Software Engineering (NSE@ICSE 2026). Supported by the Austrian Science Fund (FWF) projects 10.55776/P36688 and 10.55776/COE12. - arXiv, [https://arxiv.org/html/2602.01171v1](https://arxiv.org/html/2602.01171v1)

A Pragmatic Programmer's Guide to Answer Set Programming - CEUR-WS.org, [https://ceur-ws.org/Vol-546/49-63.pdf](https://ceur-ws.org/Vol-546/49-63.pdf)

Learning efficient constraints in answer set programming, [https://logicprogramming.org/learning-efficient-constraints-in-answer-set-programming-2/](https://logicprogramming.org/learning-efficient-constraints-in-answer-set-programming-2/)

Puzzle Level Generation with Answer Set Programming, [https://scholarworks.gvsu.edu/cgi/viewcontent.cgi?article=1318&context=cistechlib](https://scholarworks.gvsu.edu/cgi/viewcontent.cgi?article=1318&context=cistechlib)

Challenges in Answer Set Solving - Institut für Informatik und Computational Science, [https://www.cs.uni-potsdam.de/wv/publications/DBLP_conf/birthday/GebserKKS11.pdf](https://www.cs.uni-potsdam.de/wv/publications/DBLP_conf/birthday/GebserKKS11.pdf)

Potassco - the Potsdam Answer Set Solving Collection, [https://potassco.org/](https://potassco.org/)

A User's Guide to gringo, clasp, clingo, and iclingo, [http://wp.doc.ic.ac.uk/arusso/wp-content/uploads/sites/47/2015/01/clingo_guide.pdf](http://wp.doc.ic.ac.uk/arusso/wp-content/uploads/sites/47/2015/01/clingo_guide.pdf)

Using Answer Set Programming for Assigning Tasks to Computing Nodes - CEUR-WS.org, [https://ceur-ws.org/Vol-3812/paper9.pdf](https://ceur-ws.org/Vol-3812/paper9.pdf)

Tree Search versus Optimization Approaches for Map Generation, [https://cdn.aaai.org/ojs/7403/7403-52-10690-1-2-20200921.pdf](https://cdn.aaai.org/ojs/7403/7403-52-10690-1-2-20200921.pdf)

A Demonstration of Pathfinding-Based Puzzle Generation with Adaptive Difficulty - University of Calgary, [https://cspages.ucalgary.ca/~richard.zhao1/publications/2025aiide-adaptive_difficulty_game_demo.pdf](https://cspages.ucalgary.ca/~richard.zhao1/publications/2025aiide-adaptive_difficulty_game_demo.pdf)

From Frustration to Fun: An Adaptive Problem-Solving Puzzle Game Powered by Genetic Algorithm - arXiv, [https://arxiv.org/html/2509.23796v1](https://arxiv.org/html/2509.23796v1)

Monte Carlo Search - Lamsade, [https://www.lamsade.dauphine.fr/~cazenave/MonteCarlo.pdf](https://www.lamsade.dauphine.fr/~cazenave/MonteCarlo.pdf)

Generating Sokoban Puzzle Game Levels with Monte Carlo Tree Search - Semantic Scholar, [https://www.semanticscholar.org/paper/Generating-Sokoban-Puzzle-Game-Levels-with-Monte-Kartal-Sohre/136b356cda929e579102d696fca93fb1a6bf4380](https://www.semanticscholar.org/paper/Generating-Sokoban-Puzzle-Game-Levels-with-Monte-Kartal-Sohre/136b356cda929e579102d696fca93fb1a6bf4380)

A self-learning Monte Carlo tree search algorithm for robot path planning - PMC - NIH, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10358331/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10358331/)

TransPath: Learning Heuristics For Grid-Based Pathfinding via Transformers, [https://airi-institute.github.io/TransPath/](https://airi-institute.github.io/TransPath/)

Heuristic Function In AI - GeeksforGeeks, [https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/)

A* algorithm and its Heuristic Search Strategy in Artificial Intelligence - GeeksforGeeks, [https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-heuristic-search-strategy-in-artificial-intelligence/](https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-heuristic-search-strategy-in-artificial-intelligence/)

Heuristics - Stanford CS Theory, [http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html](http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html)

Exploring Algorithms — heuristic analysis of A* pathfinding for Puzzle15 | by Kamil Matejuk, [https://medium.com/@kamilmatejuk/exploring-algorithms-heuristic-analysis-of-a-pathfinding-for-puzzle15-2a9dfda87e1f](https://medium.com/@kamilmatejuk/exploring-algorithms-heuristic-analysis-of-a-pathfinding-for-puzzle15-2a9dfda87e1f)

Hybrid Procedural Level Generation Using Wave Function Collapse ..., [https://www.iccs-meeting.org/archive/iccs2025/papers/159090105.pdf](https://www.iccs-meeting.org/archive/iccs2025/papers/159090105.pdf)

Paper Database - PCG Workshop, [https://www.pcgworkshop.com/database.php](https://www.pcgworkshop.com/database.php)