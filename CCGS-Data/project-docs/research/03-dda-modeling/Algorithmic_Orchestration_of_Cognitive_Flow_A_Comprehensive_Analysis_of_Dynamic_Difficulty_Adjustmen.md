# Algorithmic Orchestration of Cognitive Flow: A Comprehensive Analysis of Dynamic Difficulty Adjustment in Puzzle-Based Environments

# Algorithmic Orchestration of Cognitive Flow: A Comprehensive Analysis of Dynamic Difficulty Adjustment in Puzzle-Based Environments

The progression of modern interactive media from static, predetermined challenge curves to personalized, adaptive experiences represents a paradigm shift in game design philosophy. At the epicenter of this transformation is Dynamic Difficulty Adjustment (DDA), an intricate suite of techniques that modulate game parameters in real-time to align with individual player performance, psychological states, and skill trajectories.[1, 2] In the specialized domain of puzzle games—where the primary engagement driver is the resolution of cognitive friction—DDA serves as the essential mechanism for sustaining the "flow" state, a psychological zone of optimal experience where the user is neither overwhelmed by complexity nor underwhelmed by simplicity.[3, 4] This report examines the evolution, psychological underpinnings, algorithmic frameworks, and ethical dimensions of DDA, drawing upon empirical data from commercial titles, academic research into player modeling, and advanced computational architectures.

## The Evolution of Challenge: From Commercial Throughput to Empathic Design

The historical antecedents of DDA can be traced to the 1970s and 1980s arcade era, though the motivations were largely commercial rather than empathic. In titles such as Space Invaders, Tetris, and Galaga, difficulty scaling was a reactive necessity; as players survived longer, the game increased speed or enemy density to prevent monotony and, crucially, to encourage a quick conclusion of the session to facilitate repeat coin insertion.[1] These early iterations utilized a rudimentary linear progression that did not account for individual variance in skill, often leading to "kill screens" or insurmountable difficulty spikes that excluded all but the most elite players.

In contrast, contemporary game design views difficulty as a primary lever for emotional pacing.[2] The transition from static "Easy," "Normal," and "Hard" menu options to subtle, covert adjustments reflects a move toward "personalized gaming".[5, 6] Modern DDA systems seek to personalize the experience moment-to-moment, responding not only to performance metrics but also to inferred emotional states, thereby broadening a game’s accessibility without sacrificing the depth of challenge required by veteran players.[1, 2]

### Historical Development of Difficulty Mechanisms in Games

|  |  |  |  |

| --- | --- | --- | --- |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

## Psychological Frameworks: Flow, Arousal, and Motivational Intensity

The efficacy of any DDA system is contingent upon its alignment with established psychological principles. Central to this is Flow Theory, which suggests that a player enters a "flow channel" when the challenges of the game are perfectly balanced with their skill level.[1, 11, 12] When this balance is disrupted, the experience degrades into either boredom (high skill, low challenge) or anxiety (low skill, high challenge). DDA acts as an automated steward of this channel, continuously fine-tuning variables to prevent these undesirable states.[2, 3]

### The Yerkes-Dodson Law and Task Complexity

Further depth is provided by the Yerkes-Dodson Law, which posits that performance increases with mental or physiological arousal—such as focus, excitement, or mild stress—only up to an optimal point.[13, 14] Beyond this inflection point, excessive arousal leads to stress, "tunnel vision," and a decline in cognitive performance.[14, 15] Crucially for puzzle design, the shape of the arousal-performance curve is highly dependent on task complexity.

**Simple/Well-Learned Tasks**: For repetitive or simple puzzles, higher levels of arousal (often induced through time pressure or high-intensity visual feedback) can actually improve performance and prevent boredom.[14, 16]

**Complex/Novel Tasks**: For intricate logic puzzles requiring lateral thinking or deep concentration, a lower level of arousal is more beneficial. Introducing stress in these contexts can cause a "freeze" response or cognitive overload, leading to frustration and churn.[15, 16, 17]

### Optimal Challenge Mapping based on Task Nature

|  |  |  |  |

| --- | --- | --- | --- |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

Complementary to these is Motivational Intensity Theory, which explains that player commitment and involvement increase as difficulty rises, provided the goal is perceived as attainable.[19] However, the moment a task is deemed impossible, the investment drops rapidly. DDA systems must therefore identify the "sweet spot" of difficulty where the player is "almost challenged but not overwhelmed," maximizing session length and emotional investment.[2, 19]

## Player Modeling: Metrics and Behavioral Prediction

To implement effective DDA, a game must possess a sophisticated model of the player. This is achieved through the continuous monitoring of multi-faceted behavioral metrics.[3, 5] Modern systems have moved beyond simple win/loss ratios to encompass a holistic understanding of the player's journey.

### Granular Metrics for Difficulty Estimation

Designers utilize telemetry to capture various dimensions of the player experience, which are then fed into predictive models to adjust game variables such as enemy health, puzzle complexity, or resource availability.[2, 5]

**Performance Metrics**: Accuracy, combo counts, success rates, and clear speeds provide a quantitative baseline for skill.[3, 5]

**Efficiency Metrics**: In puzzle contexts, the number of moves used relative to the limit (M) is a primary descriptor of difficulty.[20]

**Behavioral Patterns**: Decision-making speed, the frequency of hint usage, and movement patterns within a level indicate the level of cognitive load or struggle.[3, 5, 20]

**Engagement Metrics**: Survival time, retry rates, and churn points (where players stop playing) signal when the "flow channel" has been exited.[2, 20]

In levels-based puzzle games like Lily's Garden, researchers have formalised a model of level difficulty that extends beyond simple probability of success.[20, 21] By modeling the distribution of actions (moves) performed within a level using a negative binomial distribution, designers can generate a richer descriptor of the player's experience. This statistical approach allows for the estimation of "scale parameters" that describe the spread of the distribution, enabling level designers to compare the inherent difficulty of disparate levels and adjust move limits accordingly to stabilize the player experience.[21]

### Comparative Statistical Indicators of Struggle

|  |  |  |  |

| --- | --- | --- | --- |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

## Algorithmic Foundations: From Heuristics to Machine Learning

The mechanics of DDA range from simple rule-based systems to advanced artificial intelligence frameworks.

### Heuristics and Rule-Based Systems

Early DDA relied on "if-then" logic. For example, if a player fails a level three times, the game might offer a booster or reduce enemy hit points. While effective in simple scenarios, these systems often fail to capture the nuance of player behavior or emotional state.[22, 23]

### Reinforcement Learning (RL) and Deep Learning

Deep Reinforcement Learning (DRL) offers a more flexible and data-driven approach. Here, an AI agent treats the game difficulty as a Markov Decision Process (MDP), learning optimal responses to player performance in real-time.[22, 24] The SARSA algorithm (State-Action-Reward-State-Action) has shown promise in single-player, turn-based games, creating opponents or challenges that match the player’s relative skill by optimizing for a balanced match.[25, 26]

### Probabilistic Progression Graphs

A robust framework utilized by Electronic Arts (EA) models player progression as a probabilistic graph where states are defined by the current level (k) and the number of trials (t) at that level.[8] The objective function is the maximization of "stay time"—the total number of transitions within the progression graph.

The transition probabilities are defined by:

**Success**: Pr(s_{k+1,1}|s_{k,t}) = w_{k,t}(1 - c_{W})

**Loss and Retry**: Pr(s_{k,t+1}|s_{k,t}) = (1 - w_{k,t})(1 - c_{L})

**Churn (Risk)**: Pr(churn|s_{k,t}) = w_{k,t}c_{W} + (1 - w_{k,t})c_{L} [8]

Where w_{k,t} is the win probability at a given state and c_{W}/c_{L} are the churn rates after winning or losing. By using dynamic programming, the system calculates the optimal difficulty (the "levers," such as board seeds) that maximize the player's total duration in the game.[8]

## The Mathematics of Relative Challenge: Elo and Glicko Systems

For puzzle games, where each level can be viewed as an "opponent," the Elo rating system provides a mathematically grounded method for difficulty matching. Originally designed for chess, the Elo system calculates the relative skill levels of players based on win/loss outcomes.[27, 28]

### Expected Outcome and Rating Updates

The probability E_A of a player A with rating R_A successfully solving a puzzle B with rating R_B is modeled as: E_A = \frac{1}{1 + 10^{\frac{R_B - R_A}{400}}} [27, 28]

After the attempt, the player's rating is updated: R'_A = R_A + K(S_A - E_A) [27, 29] Where S_A is the actual score (1 for win, 0 for loss) and K is a sensitivity constant.

Chess.com recently updated its tactical puzzles system to use Glicko-style logic, which introduces a "Rating Deviation" (RD) to account for uncertainty in a player's skill or a puzzle's inherent difficulty.[30] By re-rating over 17 billion puzzle attempts, the system corrected for rating inflation, ensuring that a puzzle's difficulty rating is a precise predictor of tactical strength. This allows users to choose their own "relative difficulty" (Standard, Hard, Extra Hard), where the puzzles presented are always calibrated to the user’s current skill level to ensure the optimal learning zone is maintained.[30]

### Difficulty Tiering in Rating-Based Puzzles

|  |  |  |  |

| --- | --- | --- | --- |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

## Procedural Content Generation (PCG) and Infinite Mode Scaling

In many contemporary titles, DDA is inextricably linked with Procedural Content Generation (PCG). This synergy allows for "infinite modes" where the game environment expands and adapts endlessly.[24, 31]

### Genetic Algorithms for Difficulty Evolution

Genetic Algorithms (GAs) evolve game content through iterative selection, crossover, and mutation. In 2D platformers or runner games, a GA uses a "fitness function" that evaluates environment aesthetics, physics constraints, and difficulty.[32] Research suggests that mutation rates between 0.5% and 1% with populations of 50-100 individuals are optimal for real-time generation, ensuring that the environments are both solvable and diverse.[32]

In the context of physics-based puzzles like Angry Birds, PCG systems generate self-contained structures by selecting block types from probability tables. These tables are dynamically adjusted based on the player's past performance; if a player clears levels efficiently, the probability of selecting unstable or complex blocks increases, raising the difficulty of the generated structures.[25, 33]

### Adaptive Rule Generation

For logic-based puzzles, such as those used in educational settings for children, generators can create rules rather than just physical layouts.[34] The difficulty is quantified by the number of allowed solutions remaining after a set of rules is applied. For a 30-tile game, the total possible solutions can be as high as 142,506; difficulty increases as the rule generator reduces this number toward a single, unique solution set.[34] Large Language Models (LLMs) are then used to contextualize these procedurally generated rules within a narrative, ensuring that the increase in difficulty feels meaningful rather than arbitrary.[34]

## Architecture of a Real-Time Adaptive System

Implementing DDA requires a robust, layered architecture to handle the complexity of data processing and real-time response.

### Layered Architecture for Game Data Analysis

**Logging Server Layer**: Acts as the single entry point for all event logs from game clients, ensuring standardized data collection across different devices.[35]

**Raw Event Storage**: Objective, immutable records of every action taken in the game.[35]

**Feature Extraction and Modeling**: This layer transforms raw logs into player state predictions. In advanced systems, this includes a "Closed-Loop Transformer" architecture. This model uses linear projection layers to handle continuous numerical state vectors (e.g., player health, position, inventory) and predicts future emotional trajectories.[10]

**Game Logic Layer**: Decoupled from the physics engine to allow for independent updates. It receives the difficulty "advice" and modifies in-game parameters (e.g., movement factors, enemy aggression) before the frame is rendered.[36]

### Dual-Network Strategy for "Cold-Start" Problems

One significant technical hurdle is the lack of historical data for new players. To address this, a secondary fully connected linear neural network can be employed to predict optimal initial game parameters based on a target emotional profile. Once the player has generated enough telemetry, the primary Transformer-based model takes over for high-precision affective steering.[10]

## Case Study: Lily's Garden and the Gothic Narrative-DDA Intersection

Lily's Garden (Tactile Games) offers a compelling case study of DDA integrated with narrative progression. Unlike the standard "switcher" match-three mechanic of Candy Crush, Lily's Garden utilizes a "Collapse" (tap-to-match) system.[9, 37]

### Narrative-Driven Engagement

The game utilizes a "stars" economy where players must solve puzzles to earn the currency required to progress through a realistic, Gothic-themed story involving family secrets, inheritance disputes, and adult themes such as divorce.[9, 38] This creates a high intrinsic motivation to overcome challenges, which the DDA system must balance carefully.

### Mechanistic Adaptations in Lily's Garden

The game implements several subtle adaptive features:

**The Snowball Effect**: Success is rewarded with starting power-ups (bombs, rockets), facilitating "win chains" that keep the player in a state of high arousal and flow.[9]

**Variable Power-up Logic**: Since tap-to-match removes directional input, the orientation of generated rockets is randomized. DDA can subtly influence this "luck" factor, providing the correct orientation more frequently if a player has suffered repeated losses.[9, 39]

**Event-Based Scaling**: During hyper-competitive events like "Rocket Ruckus," the pressure is increased by requiring players to fire maximum power-ups. The DDA system must ensure that the subsequent "Hard Levels" don't become insurmountable roadblocks that cause the player to reset their tally and churn in frustration.[9]

Statistical analysis of Lily's Garden player data confirms that difficulty is the primary driver of engagement. The distribution of moves is monitored to ensure that the majority of levels fall within a "central cluster" of predictable difficulty, while outliers are flagged for manual or automatic recalibration to prevent "unfair" spikes.[21]

## Ethical Considerations: The Tension Between Flow and Monetization

The implementation of DDA is not without controversy, particularly regarding its use in monetized environments. "Covert" adjustment—where difficulty is changed without the player's knowledge—can be used to serve player experience by maintaining flow, but it can also be used as an instrument of manipulation.[2]

### Ethical vs. Manipulative DDA Practices

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

The phenomenon of "rubber-banding"—common in racing and puzzle games—aims to keep the game competitive by giving advantages to those falling behind. However, if over-tuned, it can undermine the value of player skill and reduce the psychological impact of the "Aha moment" or "Eureka effect".[11, 41] In the match-three game Candy Crush Saga, the Lives system and time-based regeneration manage session length, but the "difficulty walls" encountered in later levels are often cited by players as feeling unfair, leading to "player fatigue".[40]

## Future Horizons: Affective Steering and AI Co-Creation

The future of DDA lies in its transition from a reactive "thermostat" (adjusting to past errors) to a proactive "emotional guide."

### Affective Steering

Upcoming systems aim to actively steer emotional transitions. Rather than simply returning a player to a neutral state, these models seek to move players through a specific sequence of affective states—for instance, building tension before a major narrative reveal and then providing a "relief" adjustment to ensure a positive resolution.[10] This requires real-time inference of player emotions via behavioral telemetry, removing the need for intrusive hardware like heart-rate monitors or cameras.[10, 23]

### AI as Co-Creator

As AI handles more of the art, code, and level design, the distinction between the "engine" and the "content" is dissolving.[32] Future games may be fully "AI-generated" on the fly based on player prompts and skill profiles, reducing development costs by up to 50% through the use of "AI Interns" that auto-generate quests and levels.[42]

### Challenges for Future Implementation

**Computational Cost**: Real-time neural rendering and complex MCTS (Monte Carlo Tree Search) evaluations require significant processing power, potentially necessitating the use of lightweight models like TinyML or quantum computing in the long term.[31, 42]

**Player Trust**: As storytelling becomes AI-driven, maintaining the "authenticity" of the experience will be crucial. Players may reject a narrative if they feel it is being mechanically manipulated to keep them playing.[42]

**Algorithmic Bias**: Ensuring that DDA systems do not inadvertently discriminate against certain play styles or demographics is an emerging area of research in inclusive game design.[12]

## Conclusions and Strategic Recommendations

Dynamic Difficulty Adjustment has evolved from a commercial tool for arcade turnover into a sophisticated instrument of psychological and emotional orchestration. Its success in the puzzle genre is predicated on a deep understanding of the flow channel and the nuanced application of the Yerkes-Dodson Law.

To maximize the efficacy of DDA systems, designers should consider the following:

**Adopt Multi-Faceted Data Collection**: Relying solely on win/loss ratios is insufficient. Tracking move distributions and efficiency metrics provides the resolution required to distinguish between an engaged player and a frustrated one.

**Prioritize Seamless Integration**: Adjustments should be subtle and integrated with game elements like narrative and environment. Sudden, visible changes in difficulty can break immersion and foster a sense of being "managed."

**Balance Challenge with Agency**: Transparent difficulty settings (as seen in the Chess.com model) allow players to opt-in to higher challenge levels, preserving their sense of mastery and autonomy.

**Mitigate Ethical Risks**: Developers must resist the temptation to use DDA primarily as a monetization driver. Long-term player retention and brand trust are better served by using adaptive systems to support genuine mastery and emotional satisfaction.

As the industry moves toward more sophisticated affective computing and real-time procedural generation, the games of the future will not be static products, but living, adaptive environments that evolve in lockstep with the human experience. The "flow channel" of the next decade will be wider, deeper, and more responsive than ever before, promising a future where gaming is truly personalized for every individual.


--------------------------------------------------------------------------------


Dynamic Difficulty Adjustment in Games: Concepts, Techniques, and Applications, [https://www.intechopen.com/chapters/1228576](https://www.intechopen.com/chapters/1228576)

Dynamic Difficulty Adjustment and Behavioral Control in Games | Bootcamp - Medium, [https://medium.com/design-bootcamp/product-design-and-psychology-the-use-of-dynamic-difficulty-adjustment-in-video-game-design-7a1e2d919b96](https://medium.com/design-bootcamp/product-design-and-psychology-the-use-of-dynamic-difficulty-adjustment-in-video-game-design-7a1e2d919b96)

Dynamic Difficulty Adjustment - Meegle, [https://www.meegle.com/en_us/topics/game-design/dynamic-difficulty-adjustment](https://www.meegle.com/en_us/topics/game-design/dynamic-difficulty-adjustment)

Dynamic difficulty adjustment using deep reinforcement learning: A review - ResearchGate, [https://www.researchgate.net/publication/383664462_Dynamic_difficulty_adjustment_using_deep_reinforcement_learning_A_review](https://www.researchgate.net/publication/383664462_Dynamic_difficulty_adjustment_using_deep_reinforcement_learning_A_review)

Dynamic Difficulty Adjustment: The Future of Personalized Gaming - Wayline, [https://www.wayline.io/blog/dynamic-difficulty-adjustment-personalized-gaming](https://www.wayline.io/blog/dynamic-difficulty-adjustment-personalized-gaming)

An Implementation of Adaptive Difficulty Systems for Challenging Video Games - Lume UFRGS, [https://lume.ufrgs.br/bitstream/handle/10183/245329/001145461.pdf?sequence=1](https://lume.ufrgs.br/bitstream/handle/10183/245329/001145461.pdf?sequence=1)

Dynamic Game Difficulty Adjustment. : r/truegaming - Reddit, [https://www.reddit.com/r/truegaming/comments/oz14q/dynamic_game_difficulty_adjustment/](https://www.reddit.com/r/truegaming/comments/oz14q/dynamic_game_difficulty_adjustment/)

(PDF) Dynamic Difficulty Adjustment for Maximized Engagement in ..., [https://www.researchgate.net/publication/322414816_Dynamic_Difficulty_Adjustment_for_Maximized_Engagement_in_Digital_Games](https://www.researchgate.net/publication/322414816_Dynamic_Difficulty_Adjustment_for_Maximized_Engagement_in_Digital_Games)

Lily's Garden - Ludocious - All work and Play, [https://ludocious.com/index.php?p=blog&u=lilys-drama](https://ludocious.com/index.php?p=blog&u=lilys-drama)

Orchestrating Player Affect: A Closed-Loop Transformer Architecture ..., [https://www.preprints.org/manuscript/202512.1305/v1](https://www.preprints.org/manuscript/202512.1305/v1)

the impact of dynamic game difficulty balancing on player user experience in puzzle games - Diva-portal.org, [http://www.diva-portal.org/smash/get/diva2:1810059/FULLTEXT01.pdf](http://www.diva-portal.org/smash/get/diva2:1810059/FULLTEXT01.pdf)

Dynamic Difficulty Adjustment in Serious Games: A Literature Review - MDPI, [https://www.mdpi.com/2078-2489/17/1/96](https://www.mdpi.com/2078-2489/17/1/96)

Yerkes-Dodson Law of Arousal and Performance - Simply Psychology, [https://www.simplypsychology.org/what-is-the-yerkes-dodson-law.html](https://www.simplypsychology.org/what-is-the-yerkes-dodson-law.html)

Yerkes–Dodson law - Wikipedia, [https://en.wikipedia.org/wiki/Yerkes%E2%80%93Dodson_law](https://en.wikipedia.org/wiki/Yerkes%E2%80%93Dodson_law)

Unlocking Peak Performance: Understanding the Yerkes-Dodson Law in Psychology, [https://psychotricks.com/yerkes-dodson-law/](https://psychotricks.com/yerkes-dodson-law/)

The Optimal Arousal Model – Introduction to Psychology - BC Open Textbooks, [https://opentextbc.ca/psychologymtdi/chapter/the-optimal-arousal-model/](https://opentextbc.ca/psychologymtdi/chapter/the-optimal-arousal-model/)

Yerkes-Dodson Law: How It Correlates to Stress, Anxiety, Performance - Healthline, [https://www.healthline.com/health/yerkes-dodson-law](https://www.healthline.com/health/yerkes-dodson-law)

Puzzle Design - Game Design, [https://home.uevora.pt/~fc/dj/13-puzzle_design.html](https://home.uevora.pt/~fc/dj/13-puzzle_design.html)

Player involvement as a result of difficulty: An introductory study to test the suitability of the motivational intensity approach to video game research - PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10004480/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10004480/)

Statistical Modelling of Level Difficulty in Puzzle Games - arXiv, [https://arxiv.org/html/2107.03305v2](https://arxiv.org/html/2107.03305v2)

Statistical Modelling of Level Difficulty in Puzzle Games - arXiv, [https://arxiv.org/pdf/2107.03305](https://arxiv.org/pdf/2107.03305)

Dynamic Difficulty Adjustment in Games using Reinforcement Learning, [https://hammer.purdue.edu/articles/thesis/Dynamic_Difficulty_Adjustment_in_Games_using_Reinforcement_Learning/30790583](https://hammer.purdue.edu/articles/thesis/Dynamic_Difficulty_Adjustment_in_Games_using_Reinforcement_Learning/30790583)

Orchestrating Player Affect: A Closed-Loop Transformer Architecture for Targeted Emotional Induction in Mobile Games - Preprints.org, [https://www.preprints.org/manuscript/202512.1305](https://www.preprints.org/manuscript/202512.1305)

Procedural Generation & Difficulty Control - Emergent Mind, [https://www.emergentmind.com/topics/procedural-generation-and-difficulty-control](https://www.emergentmind.com/topics/procedural-generation-and-difficulty-control)

(PDF) Dynamic difficulty adjustment using deep reinforcement ..., [https://www.researchgate.net/publication/383664462_Dynamic_difficulty_adjustment_using_deep_reinforcement_learning_a_review](https://www.researchgate.net/publication/383664462_Dynamic_difficulty_adjustment_using_deep_reinforcement_learning_a_review)

Investigating Reinforcement Learning for Dynamic Difficulty Adjustment - Scilit, [https://www.scilit.com/publications/a1e8957647c0e2b880e6d5c31efb5cdd](https://www.scilit.com/publications/a1e8957647c0e2b880e6d5c31efb5cdd)

Elo Rating Algorithm - GeeksforGeeks, [https://www.geeksforgeeks.org/dsa/elo-rating-algorithm/](https://www.geeksforgeeks.org/dsa/elo-rating-algorithm/)

Elo rating system - Wikipedia, [https://en.wikipedia.org/wiki/Elo_rating_system](https://en.wikipedia.org/wiki/Elo_rating_system)

Elo Rating Algorithm for the Purpose of Measuring Task Difficulty in Online Learning Environments - E-mentor, [https://www.e-mentor.edu.pl/artykul/index/numer/82/id/1444](https://www.e-mentor.edu.pl/artykul/index/numer/82/id/1444)

New Puzzles Ratings, Difficulty Settings, And More Consistent ..., [https://www.chess.com/news/view/announcing-new-puzzles-rating-system](https://www.chess.com/news/view/announcing-new-puzzles-rating-system)

Creating a Newer and Improved Procedural Content Generation (PCG) Algorithm with Minimal Human Intervention for Computer Gaming Development - MDPI, [https://www.mdpi.com/2073-431X/13/11/304](https://www.mdpi.com/2073-431X/13/11/304)

Evolutionary Procedural Content Generation for an Endless Platform Game - SBGames, [https://www.sbgames.org/proceedings2020/ComputacaoFull/209489.pdf](https://www.sbgames.org/proceedings2020/ComputacaoFull/209489.pdf)

Procedural Generation of Levels for Angry Birds Style Physics Games - Association for the Advancement of Artificial Intelligence (AAAI), [https://cdn.aaai.org/ojs/12871/12871-52-16388-1-2-20201228.pdf](https://cdn.aaai.org/ojs/12871/12871-52-16388-1-2-20201228.pdf)

Procedurally generating rules to adapt difficulty for narrative puzzle games - arXiv, [https://arxiv.org/html/2307.05518](https://arxiv.org/html/2307.05518)

An Architecture for Repeatable, Large-Scale Educational Game Data Analysis - NSF Public Access Repository, [https://par.nsf.gov/servlets/purl/10593399](https://par.nsf.gov/servlets/purl/10593399)

Ways to implement a game logic layer into current 2d game architecture - Stack Overflow, [https://stackoverflow.com/questions/45882808/ways-to-implement-a-game-logic-layer-into-current-2d-game-architecture](https://stackoverflow.com/questions/45882808/ways-to-implement-a-game-logic-layer-into-current-2d-game-architecture)

Lily's Garden: Match & Design - App Store - Apple, [https://apps.apple.com/nz/app/lilys-garden-match-design/id1437783446](https://apps.apple.com/nz/app/lilys-garden-match-design/id1437783446)

Lily's Garden: A Surprisingly Gothic Mobile Game, [https://www.thegothiclibrary.com/lilys-garden-a-surprisingly-gothic-mobile-game/](https://www.thegothiclibrary.com/lilys-garden-a-surprisingly-gothic-mobile-game/)

Lilys Garden help? : r/SwagBucks - Reddit, [https://www.reddit.com/r/SwagBucks/comments/1gt86es/lilys_garden_help/](https://www.reddit.com/r/SwagBucks/comments/1gt86es/lilys_garden_help/)

Case Study: Candy Crush Saga — The Game That Made Waiting Fun Again | by Lucy Michael | Medium, [https://medium.com/@chinwe.lucyy/case-study-candy-crush-saga-the-game-that-made-waiting-fun-again-b711a615955d](https://medium.com/@chinwe.lucyy/case-study-candy-crush-saga-the-game-that-made-waiting-fun-again-b711a615955d)

Dynamic difficulty adjustment approaches in video games: a systematic literature review, [https://colab.ws/articles/10.1007%2Fs11042-024-18768-x](https://colab.ws/articles/10.1007%2Fs11042-024-18768-x)

AI in Gaming: Procedural Content Generation, NPC Behavior, and Real-Time Strategy, [https://www.researchgate.net/publication/390557730_AI_in_Gaming_Procedural_Content_Generation_NPC_Behavior_and_Real-Time_Strategy](https://www.researchgate.net/publication/390557730_AI_in_Gaming_Procedural_Content_Generation_NPC_Behavior_and_Real-Time_Strategy)