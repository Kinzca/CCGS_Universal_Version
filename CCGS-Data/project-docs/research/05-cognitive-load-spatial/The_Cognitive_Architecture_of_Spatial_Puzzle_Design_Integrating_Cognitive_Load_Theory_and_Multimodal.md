# The Cognitive Architecture of Spatial Puzzle Design: Integrating Cognitive Load Theory and Multimodal Interaction

# The Cognitive Architecture of Spatial Puzzle Design: Integrating Cognitive Load Theory and Multimodal Interaction

## The Human Information Processing System and Cognitive Load Foundations

The theoretical framework governing modern instructional design and interactive puzzle mechanics is rooted in Cognitive Load Theory (CLT), a concept developed by John Sweller in the late 1980s. This theory posits that the human cognitive architecture is defined by the interaction between a limited working memory and an expansive long-term memory.[1, 2] Working memory serves as the primary processing unit for novel information, yet it is severely constrained in both capacity and duration. It is generally understood that working memory can hold approximately seven plus or minus two elements, but it can only actively process or manipulate between two and four elements at any given time.[3, 4] Information residing in working memory is highly transient, typically decaying within twenty seconds unless it is actively rehearsed or integrated into existing cognitive structures.[3]

Long-term memory, conversely, acts as a repository of schemas—complex structures that organize and store knowledge. Once a schema is formed, it can be treated as a single element within working memory, effectively bypassing the standard capacity limits and allowing for the processing of sophisticated concepts without overwhelming the individual.[3] This process of schema acquisition and automation is the fundamental goal of both educational instruction and puzzle-based learning. As schemas become more automated, they require fewer cognitive resources, enabling the individual to focus on higher-order problem-solving tasks.

Cognitive load refers to the total amount of mental effort being used in working memory at any given moment.[2] In the context of game design and spatial reasoning puzzles, this load is categorized into three discrete types: intrinsic, extraneous, and germane. The relationship between these loads is additive, meaning the total cognitive demand must not exceed the individual’s total working memory capacity to ensure that learning and successful problem-solving can occur.[3, 5]

### Structural Comparison of Cognitive Load Components

|  |  |  |  |

| --- | --- | --- | --- |

|  |  |  |  |

|  |  |  |  |

|  |  |  |  |

The management of these loads is a delicate balancing act. Intrinsic load is determined by the number of interacting elements within a task; for example, learning simple vocabulary has low element interactivity, whereas mastering complex grammar or 3D spatial rotations has high interactivity.[3] While intrinsic load was originally thought to be immutable except by changing the task itself, modern interpretations suggest it can be managed by breaking tasks into isolated elements before requiring full integration.[3, 6] Extraneous load is entirely determined by the designer’s choices—poorly organized instructions, redundant text and audio, or a cluttered visual interface all contribute to "noise" that hinders the player’s ability to solve the puzzle.[1, 6, 7] Germane load represents the "good" effort, where the mind is actively mapping new information onto old schemas or creating new ones entirely.[2, 8]

## Spatial Cognition and the Mechanics of Mental Rotation

Spatial reasoning is a pillar of human intelligence, particularly in Science, Technology, Engineering, and Mathematics (STEM) domains.[9, 10] A central component of spatial reasoning is the mental rotation (MR) task, which requires the mental manipulation of 2D or 3D objects to determine their relationship to other stimuli. First popularized by Shepard and Metzler in 1971, the mental rotation test presents subjects with pairs of 3D cube configurations and asks if they are identical or mirror images.[11, 12]

The process of mental rotation is believed to involve several distinct cognitive stages. First, the individual must encode the stimulus, identifying key features like edges, corners, and symmetry.[12, 13] Second, they mentally rotate the object, a process that appears to mimic physical rotation in terms of duration; response times increase linearly with the angle of rotation.[11, 12] Third, the rotated image is compared to the target, and finally, a decision is rendered and executed through a motor response.[10, 12]

### Cognitive Attributes in Spatial Assembly Tasks

In more complex spatial tasks, such as object assembly (OA), researchers have identified five essential cognitive attributes that define the difficulty and the required skill set for the participant. These attributes are used to construct a Q-matrix, which maps specific tasks to the underlying cognitive mastery required.[10]

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

The transition from 2D to 3D puzzles introduces significant cognitive hurdles. While 2D stimuli are simpler because they lack depth, 3D puzzles require the integration of information across multiple depth planes, often involving occlusion where parts of the object are hidden from view.[9, 14, 15] However, immersive virtual reality (VR) environments have shown remarkable potential in reducing this load. VR provides stereoscopic depth and visual cues that facilitate spatial visualization, often leading to higher "neural efficiency"—where the prefrontal cortex (PFC) achieves higher accuracy with lower metabolic effort.[9]

## Managing Intrinsic Load through Progressive Complexity

In 3D puzzle games, intrinsic load is managed primarily through the sequencing of challenges and the introduction of mechanics in isolation. The "one new thing" rule is a staple of effective level design: players should only be asked to master one new concept or interaction at a time.[4] This prevents cognitive overload by ensuring that the player is not trying to learn how to rotate an object while simultaneously learning how to use a new tool or navigate a complex interface.

### Scaffolding and the Simple-to-Complex Strategy

Scaffolding is a metaphor for the temporary support structures provided to learners to help them bridge the gap between their current ability and a more complex goal.[16, 17] In game-based learning, scaffolding can take many forms, from explicit hints to environmental cues. The simple-to-complex strategy involves presenting isolated elements first (low element interactivity) before gradually working up to the full complexity of the task.[3, 6]

A classic example of this is the tutorial design in the game Portal. The game introduces the concept of a portal in a safe, constrained environment where the player only interacts with one portal at a time.[4, 18] Once the basic mechanic is automated—meaning the player no longer has to think about how to place a portal—the game introduces variations such as using portals to carry momentum or move objects.[4] This reduces the total cognitive load because the foundational mechanics have moved from working memory into automated schemas in long-term memory.[3, 5]

Another technique is the "low-to-high fidelity" strategy. Learners first practice in a simplified environment with low "element interactivity" before graduating to high-fidelity environments.[3, 6] In 3D puzzles, this might involve starting with wireframe models or simplified shapes before introducing realistic textures, lighting, and physics, which add to the visual complexity and intrinsic load.

### Progressive Disclosure and Information Architecture

Progressive disclosure is a design pattern used to manage information complexity by showing only the information necessary at a specific point in time.[19, 20] This technique is particularly effective in complex 3D puzzles where the player might be overwhelmed by too many interactive elements.

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

[21, 22]

By applying progressive disclosure, designers ensure that first-time users are not confronted with the full suite of advanced options.[20] Instead, the interface "grows" with the user’s expertise. For example, a 3D modeling-based puzzle might hide complex rotation tools until the player has demonstrated mastery of basic movement and placement.[22] This alignment with working memory constraints ensures that the player’s attention is always focused on the most relevant information.[8, 23]

## Minimizing Extraneous Load: UI/UX for Spatial Reasoning

Extraneous cognitive load is often the result of poor communication between the game and the player. In 3D environments, this is frequently manifested as "spatial ambiguity"—confusion about where objects are in relation to one another or how to interact with the environment.[4] Reducing this load involves creating a clean, intuitive, and consistent interface.

### Visual Hierarchy and Interface Clutter

A cluttered user interface is directly proportional to high cognitive load.[24, 25] Designers should use visual hierarchy to direct the player’s attention to the most critical elements first. This is achieved through the strategic use of size, color, contrast, and typography.[8, 23] For instance, a "solve" button should be more prominent than secondary settings, and error messages should use contrasting colors like red to draw immediate attention.[23]

Consistency is also vital. When players encounter familiar design patterns—such as a specific icon for a "reset" function or a consistent "undo" button—they can rely on their existing mental models rather than expending effort to learn new interaction logic.[24, 25] Standardizing buttons and controls across a game reduces the "nondecision time"—the time required for stimulus encoding and motor execution—allowing the player to focus more on the "drift rate," or the time it takes to accumulate information for a decision.[24, 26]

### The Split-Attention and Redundancy Principles

The split-attention principle states that learning is hindered when related sources of information are separated in space or time, forcing the learner to mentally integrate them.[2, 3] In 3D puzzles, this occurs if a player must look at a instruction panel on one side of the screen while trying to manipulate a puzzle on the other. Effective design integrates these sources; for example, using contextual tooltips that appear directly above the object being manipulated.[4, 6]

The redundancy principle suggests that presenting the same information in multiple identical formats (e.g., on-screen text that exactly matches a voice-over) can actually increase cognitive load.[3, 6] This is because the visual channel becomes overloaded by having to process both the graphics and the text simultaneously. Instead, designers should use "multimodal" presentation: pairing visual graphics with auditory narration. This leverages the dual-channel assumption of human cognition, which proposes that verbal and visual information are processed through partially independent channels.[2, 27]

## Fostering Germane Load: Feedback and Insight

Germane load is the mental effort directed toward constructive learning. In puzzle design, this is the "sweet spot" where the player is actively forming a new understanding of the game’s mechanics. One of the best ways to foster germane load is through immediate, high-quality feedback.[7, 28]

### The Role of Failure and Feedback Loops

Immediate feedback loops are the "glue" that binds player intention to game reaction.[29] When a player makes a move in a 3D puzzle, the game should respond instantly with a visual, auditory, or haptic cue. This allows the player to see what went wrong or why a particular strategy was successful. Crucially, failure itself is a learning tool. If a mistake is made, the feedback should be clear enough that the player understands why it happened, encouraging them to revise their mental model.[4, 30]

"Undo" and "Reset" buttons are critical for reducing extraneous load associated with the fear of experimentation.[4, 30] By removing the penalty for mistakes, designers encourage players to engage in the "active problem-solving" that constitutes germane load. This mirrors the "Goal-free principle," where asking a player to "tell me some things you can do with this object" rather than "find the one specific way to solve this" leads to deeper exploration and schema acquisition.[3]

### Scaffolding for Motivation and Anxiety Reduction

Excessive challenge without adequate support leads to "spatial anxiety," which has been shown to impair mental rotation performance.[26, 31] Scaffolding—such as providing hints, "phone a friend" mechanics, or simplified sub-goals—helps maintain a balance between the player’s skills and the game’s challenges, a state often referred to as "flow".[28] This is particularly important for beginners who may not have yet developed the robust spatial schemas required for high-level 3D manipulation.[9, 16]

## Multimodal Learning: Integrating Vision, Audio, and Touch

Dual Coding Theory (DCT), proposed by Allan Paivio in 1971, is a cornerstone of cognitive psychology that explains how learning is enhanced when information is processed through two distinct systems: one verbal (dealing with language) and one non-verbal (dealing with visual and spatial information).[27, 32, 33] When these two systems are engaged simultaneously and in a coordinated manner, the resulting mental representation is much stronger and easier to retrieve.[32, 34]

### Dual Coding and the Modality Effect

The modality principle, derived from DCT, suggests that people learn better from graphics and narration than from graphics and on-screen text.[3, 6] This is because the visual channel is limited; by offloading the verbal information to the auditory channel, the visual channel is freed up to process the complex spatial relationships of the 3D puzzle.[6, 8]

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

[29, 32, 34]

### Spatial Audio and Haptic Offloading

Spatial audio and haptic feedback are advanced tools for managing cognitive load in 3D environments. Spatial audio (e.g., Dolby Atmos) exploits the brain's innate capacity to locate sound in three dimensions, allowing players to sense objects or dangers before they are visible.[29, 35] This "environmental speech" reduces the need for cluttered UI indicators and has been shown to improve reaction times by significant margins.[29]

Haptic feedback provides a direct, non-visual perceptual channel. Tactile cues, such as a subtle vibration when a 3D block is correctly aligned, take a "low-road" neural pathway from the thalamus to the amygdala, bypassing the higher-level cognitive processing required for visual or verbal information.[29, 36] This "haptic substitution for vision" is especially beneficial for older adults or those with visual decline, as it reduces eye strain and provides a clear, intuitive signal of successful interaction.[36]

## Measuring Cognitive Workload: Eye Tracking and Physiological Metrics

To optimize 3D puzzle design, researchers must be able to objectively measure the cognitive load experienced by players. Eye tracking technology provides a real-time, non-intrusive way to index mental effort and attention allocation.[37, 38]

### Eye Metrics and Task Difficulty

As task difficulty increases, specific ocular patterns emerge. In studies using the game Tetris, researchers found that higher workloads (increased fall speed) were consistently correlated with changes in blink, fixation, and saccade metrics.[39]

|  |  |  |

| --- | --- | --- |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

|  |  |  |

[38, 39]

### Visual Attention and Search Patterns

Other metrics, such as "Time to First Fixation" (TFF) and "Dwell Time" (DWT), help designers understand which parts of a puzzle are most demanding. A long DWT on a specific area of a 3D model suggests that the player is struggling to encode or rotate that section.[38, 40] Furthermore, gaze transitions between different Areas of Interest (AOIs) reveal whether the player is successfully integrating related information or if they are suffering from "split-attention" confusion.[38, 40]

## Individual Differences: Expertise, Aphantasia, and STEM Skills

Cognitive load is not a fixed property of a task; it is an interaction between the task and the individual's existing knowledge. The "expertise reversal effect" is a critical phenomenon where instructional techniques that are effective for beginners (like worked examples) can actually become redundant and increase extraneous load for experts.[3, 5]

### The Role of Prior Knowledge and Spatial Ability

Individuals with high spatial ability have more robust mental schemas for rotating and manipulating objects. This allows them to manage cognitive resources more effectively, leading to lower perceived difficulty and improved performance on complex 3D puzzles.[31] This is why spatial skills are such a strong predictor of success in STEM fields—high achievers in these domains are often those who can mentally manipulate complex information with minimal cognitive effort.[9, 15]

### Aphantasia and Alternative Cognitive Strategies

The study of aphantasia—the inability to form conscious mental images—has provided fascinating insights into the diversity of spatial cognition. While traditional models of mental rotation emphasize visualization, aphants often perform just as well as non-aphants.[12] This suggests that the brain can use "non-visual" pathways, such as logical reasoning about object properties or systematic analysis of angles, to achieve the same results.[12] For puzzle designers, this highlights the importance of providing multiple ways to solve a problem—one based on visual "intuition" and another based on logical, step-by-step reasoning.

## Future Outlook: Spatial Computing and Neuroergonomics

The next frontier of 3D puzzle design lies in spatial computing (e.g., visionOS and VR) and the integration of neurofeedback. Immersive virtual environments are already demonstrating their ability to reduce cognitive load by facilitating "natural" spatial visualization and providing 3D-congruent visual cues.[9, 41]

In spatial design, "depth" becomes a cognitive signal, telling the brain what to prioritize and what to keep in peripheral awareness.[41] The future of these experiences will likely involve adaptive systems that monitor a player's cognitive load in real-time (via eye tracking or EEG) and adjust the game's complexity, scaffolding, and feedback dynamically to keep the player in a state of optimal flow.[29, 36, 37]

By synthesizing the principles of Cognitive Load Theory, Dual Coding Theory, and spatial cognition, designers can create 3D puzzles that not only challenge the mind but also respect its biological limits. The goal is to move beyond "arranging screens" to "orchestrating environments" that foster deep, germane learning and provide the intellectual satisfaction of the "Aha!" moment.[4, 41]

## Conclusion: Synthesizing Cognitive Architecture for Expert Design

The exhaustive analysis of Cognitive Load Theory within the domain of 3D spatial puzzle design reveals a sophisticated interplay between human cognitive limits and the potential of digital interactive media. The primary mandate for the expert designer is the reduction of extraneous cognitive load through the elimination of UI clutter, the synchronization of multimodal stimuli, and the adherence to established UX patterns that leverage a user's existing mental models. By minimizing the effort required to simply interact with the game, designers free up the finite capacity of working memory for the more vital tasks of intrinsic processing and germane schema construction.

Intrinsic load, while inherent to the complexity of 3D mental rotation and spatial reasoning, is not a static barrier. Through the strategic application of scaffolding, simple-to-complex sequencing, and progressive disclosure, designers can effectively "lower the floor" for beginners while maintaining a "high ceiling" for experts. The research indicates that tools like Virtual Reality and multimodal feedback (haptic and spatial audio) are not merely aesthetic choices but are essential cognitive offloaders. They exploit the brain's innate, parallel processing channels, allowing for higher neural efficiency and a more intuitive grasp of three-dimensional space.

Furthermore, the objective measurement of cognitive workload through eye tracking metrics—such as pupil dilation, blink duration, and saccade velocity—provides a quantitative foundation for iterative design. These metrics allow for the identification of specific "cognitive bottlenecks" where task complexity exceeds the user's processing capacity. By tailoring the challenge to individual differences in spatial ability and expertise, and by recognizing the diverse cognitive pathways (such as those used by individuals with aphantasia), designers can create inclusive and deeply engaging learning environments. The future of the field lies in the refinement of spatial computing and the potential for real-time, neuro-adaptive systems that dynamically maintain the delicate balance between challenge and skill, ultimately fostering deep conceptual understanding and the rewarding experience of spatial mastery.


--------------------------------------------------------------------------------


Cognitive Load Theory - EdTech Books, [https://edtechbooks.org/encyclopedia/cognitive_load_theory](https://edtechbooks.org/encyclopedia/cognitive_load_theory)

Cognitive Load Theory: Principles, Learning Processes, and Implications for Instructional Design - Educational Technology, [https://educationaltechnology.net/cognitive-load-theory-principles-learning-processes-and-implications-for-instructional-design/](https://educationaltechnology.net/cognitive-load-theory-principles-learning-processes-and-implications-for-instructional-design/)

Cognitive load theory - LITFL, [https://litfl.com/cognitive-load-theory/](https://litfl.com/cognitive-load-theory/)

Game Tutorial Design: Reducing Cognitive Load in Your FTUE, [https://www.game-changr.com/post/game-tutorial-design-cognitive-load-ftue](https://www.game-changr.com/post/game-tutorial-design-cognitive-load-ftue)

Cognitive Load Theory and Instructional Design: Recent ..., [https://www.uky.edu/~gmswan3/544/Cognitive_Load_%26_ID.pdf](https://www.uky.edu/~gmswan3/544/Cognitive_Load_%26_ID.pdf)

Managing Cognitive Load is a Delicate Act of Balance - SHIFT eLearning, [https://www.shiftelearning.com/blog/design-elearning-to-protect-the-learner-from-overload](https://www.shiftelearning.com/blog/design-elearning-to-protect-the-learner-from-overload)

Cognitive Load - UI and UX Design - Codecademy, [https://www.codecademy.com/resources/docs/uiux/cognitive-load](https://www.codecademy.com/resources/docs/uiux/cognitive-load)

Cognitive Load In UX Design: Key Strategies for Management, [https://think.design/blog/cognitive-load-in-ux-design/](https://think.design/blog/cognitive-load-in-ux-design/)

Cognitive Effort during Visuospatial Problem Solving in Physical Real World, on Computer Screen, and in Virtual Reality - PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10857420/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10857420/)

Enhancing Spatial Ability Assessment: Integrating Problem-Solving ..., [https://www.mdpi.com/2079-3200/13/3/30](https://www.mdpi.com/2079-3200/13/3/30)

Mental Rotation - Millisecond, [https://www.millisecond.com/library/mentalrotation](https://www.millisecond.com/library/mentalrotation)

Mental Rotation Tasks: The Surprising Advantage of Aphantasia, [https://aphantasia.com/article/mental-rotation-tasks](https://aphantasia.com/article/mental-rotation-tasks)

Spatial Visualization Questions And Answers - CLaME, [https://clame.nyu.edu/index.jsp/E1G20D/316976/SpatialVisualizationQuestionsAndAnswers.pdf](https://clame.nyu.edu/index.jsp/E1G20D/316976/SpatialVisualizationQuestionsAndAnswers.pdf)

Mental rotation task - PsyToolkit, [https://www.psytoolkit.org/experiment-library/mentalrotation.html](https://www.psytoolkit.org/experiment-library/mentalrotation.html)

Exploring Neural Efficiency in Spatial Cognition: A Comparative Study of 3D Visual Stimuli in Virtual Reality across STEM and non-STEM fields | Request PDF - ResearchGate, [https://www.researchgate.net/publication/384860135_Exploring_Neural_Efficiency_in_Spatial_Cognition_A_Comparative_Study_of_3D_Visual_Stimuli_in_Virtual_Reality_across_STEM_and_non-STEM_fields](https://www.researchgate.net/publication/384860135_Exploring_Neural_Efficiency_in_Spatial_Cognition_A_Comparative_Study_of_3D_Visual_Stimuli_in_Virtual_Reality_across_STEM_and_non-STEM_fields)

(PDF) A Review of Scaffolding Approaches in Game-based Learning Environments, [https://www.researchgate.net/publication/259564364_A_Review_of_Scaffolding_Approaches_in_Game-based_Learning_Environments](https://www.researchgate.net/publication/259564364_A_Review_of_Scaffolding_Approaches_in_Game-based_Learning_Environments)

Teaching Board Games #3: Scaffolding – Agile Learning - Derek Bruff, [https://derekbruff.org/2019/03/01/teaching-board-games-3-scaffolding/](https://derekbruff.org/2019/03/01/teaching-board-games-3-scaffolding/)

Puzzle Design: a guide for game designers | by Bruna Delfino | Medium, [https://medium.com/@brdelfino.work/puzzle-design-a-guide-for-game-designers-72251d60a56a](https://medium.com/@brdelfino.work/puzzle-design-a-guide-for-game-designers-72251d60a56a)

Progressive disclosure - Mirakl Design, [https://design.mirakl.com/design/patterns/progressive-disclosure](https://design.mirakl.com/design/patterns/progressive-disclosure)

Design Patterns: Progressive Disclosure for Mobile Apps - Nick Babich, [https://babich.biz/blog/design-patterns-progressive-disclosure-for-mobile-apps/](https://babich.biz/blog/design-patterns-progressive-disclosure-for-mobile-apps/)

Progressive Disclosure design pattern, [https://ui-patterns.com/patterns/ProgressiveDisclosure](https://ui-patterns.com/patterns/ProgressiveDisclosure)

What is Progressive Disclosure? Show & Hide the Right Information - UXPin, [https://www.uxpin.com/studio/blog/what-is-progressive-disclosure/](https://www.uxpin.com/studio/blog/what-is-progressive-disclosure/)

Few Guesses, More Success: 4 Principles to Reduce Cognitive Load in Forms - NN/G, [https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/](https://www.nngroup.com/articles/4-principles-reduce-cognitive-load/)

How to Reduce Cognitive Load for a Better UI/UX Design? - GeeksforGeeks, [https://www.geeksforgeeks.org/techtips/how-to-reduce-cognitive-load-for-a-better-ui-ux-design/](https://www.geeksforgeeks.org/techtips/how-to-reduce-cognitive-load-for-a-better-ui-ux-design/)

How to Reduce Cognitive Load for a Better UI/UX Design - Deltacron, [https://www.deltacrontech.com/blog/how-to-reduce-cognitive-load-for-a-better-ui-ux-design](https://www.deltacrontech.com/blog/how-to-reduce-cognitive-load-for-a-better-ui-ux-design)

Mental Rotation Test | A Spatial Processing Task | Research - Labvanced, [https://www.labvanced.com/content/research/en/blog/2024-05-3d-and-2d-mental-rotation-task/](https://www.labvanced.com/content/research/en/blog/2024-05-3d-and-2d-mental-rotation-task/)

Dual-coding theory - Wikipedia, [https://en.wikipedia.org/wiki/Dual-coding_theory](https://en.wikipedia.org/wiki/Dual-coding_theory)

Evaluation of a mobile-based scaffolding board game developed by ..., [https://pmc.ncbi.nlm.nih.gov/articles/PMC9005909/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9005909/)

Sensory-Focused Game Design: How Haptics, Adaptive Sound, and Immersive Feedback Loops Drive Player Emotion, [https://assets.ctfassets.net/bjl3f17nyta4/7HP0DmAmSAheKXMJtpBhdj/4ac2def825644a6ed393ab7642ad445c/Sensory-Focused-Game-Design.pdf](https://assets.ctfassets.net/bjl3f17nyta4/7HP0DmAmSAheKXMJtpBhdj/4ac2def825644a6ed393ab7642ad445c/Sensory-Focused-Game-Design.pdf)

Puzzle Game Design (Principles, Levels, Template), [https://gamedesignskills.com/game-design/puzzle/](https://gamedesignskills.com/game-design/puzzle/)

Investigating the Interaction of Game Features and Spatial Skills with ..., [https://www.researchgate.net/publication/403763360_Investigating_the_Interaction_of_Game_Features_and_Spatial_Skills_with_Performance_and_Perceived_Difficulty_in_a_Block-Based_3D_Programming_Puzzle_Game](https://www.researchgate.net/publication/403763360_Investigating_the_Interaction_of_Game_Features_and_Spatial_Skills_with_Performance_and_Perceived_Difficulty_in_a_Block-Based_3D_Programming_Puzzle_Game)

Dual Coding Theory — Cognitive Psychology Reference, [https://www.cognitivepsychology.com/Dual_Coding_Theory](https://www.cognitivepsychology.com/Dual_Coding_Theory)

Leveraging Dual Coding Theory in Teaching to Maximize Learning - TrueLearn, [https://truelearn.com/resource-library/leveraging-dual-coding-theory-in-teaching-to-maximize-learning/](https://truelearn.com/resource-library/leveraging-dual-coding-theory-in-teaching-to-maximize-learning/)

Dual Coding Theory | BCL Learning Library, [https://bcltraining.com/learning-library/dual-coding-theory/](https://bcltraining.com/learning-library/dual-coding-theory/)

Spatial-audio driven game design: Giving the player something to look at when their 'eyes are closed' in-game? : r/gamedev - Reddit, [https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/](https://www.reddit.com/r/gamedev/comments/1ri5vyd/spatialaudio_driven_game_design_giving_the_player/)

A Haptic-Driven Serious Game for Cognitive Stimulation and Visual Impairment Mitigation in Older Adults Based on the Design-Play-Experience Framework: Cross-Sectional Mixed Methods Pilot Study - PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC12905563/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12905563/)

Understanding and measuring cognitive load through eye tracking - Tobii, [https://www.tobii.com/resource-center/reports-and-papers/understanding-and-measuring-cognitive-load-through-eye-tracking](https://www.tobii.com/resource-center/reports-and-papers/understanding-and-measuring-cognitive-load-through-eye-tracking)

Cognitive load and visual attention assessment using physiological eye tracking measures in multimedia learning | PLOS One - Research journals, [https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0337195](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0337195)

(PDF) The use of eye metrics to index cognitive workload in video ..., [https://www.researchgate.net/publication/313805604_The_use_of_eye_metrics_to_index_cognitive_workload_in_video_games](https://www.researchgate.net/publication/313805604_The_use_of_eye_metrics_to_index_cognitive_workload_in_video_games)

Measuring Cognition Load Using Eye-Tracking Parameters Based on Algorithm Description Tools - PMC, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8839951/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8839951/)

Spatial Design for Focus and Cognitive Load | by Federica Ziaco ..., [https://medium.com/@ziacofederica/spatial-design-for-focus-and-cognitive-load-101b31b5caf2](https://medium.com/@ziacofederica/spatial-design-for-focus-and-cognitive-load-101b31b5caf2)