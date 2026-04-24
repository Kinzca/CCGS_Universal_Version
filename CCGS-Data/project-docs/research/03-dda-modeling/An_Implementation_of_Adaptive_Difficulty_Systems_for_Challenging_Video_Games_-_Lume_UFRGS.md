# An Implementation of Adaptive Difficulty Systems for Challenging Video Games - Lume UFRGS

UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL INSTITUTO DE INFORMÁTICA 

CURSO DE CIÊNCIA DA COMPUTAÇÃO 

LEONARDO RAMOS GONZALEZ TAGLIARO 

An Implementation of Adaptive Difficulty Systems for Challenging Video Games 

Work presented in partial fulfillment of the requirements for the degree of Bachelor in Computer Science 

Advisor: Prof. Dr. Luciana Nedel 

Porto Alegre April 2022

UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL Reitor: Prof. Carlos André Bulhões Vice-Reitora: Profa. Patricia Helena Lucas Pranke Pró-Reitora de Graduação: Profa. Cíntia Inês Boll Diretora do Instituto de Informática: Profa. Carla Maria Dal Sasso Freitas Coordenador do Curso de Ciência de Computação: Prof. Rodrigo Machado Bibliotecária-chefe do Instituto de Informática: Beatriz Regina Bastos Haro

“My past is not a memory. It’s a force at my back. It pushes and steers. 

I may not always like where it leads me, but like any story, 

the past needs resolution. What’s past is prologue.” 

— SAMUS ARAN

ACKNOWLEDGMENTS 

The cover for the first edition of the book Compilers: Principles, Techniques, and 

Tools (1985) depicted a Knight and a Red Dragon. The Dragon was meant to represent 

one of the great challenges of engineers in that era: taming the Compiler. The field 

of Computer Science evolved throughout the decades, and the dragon changed its form 

many times. As any computer scientist chooses the dragon they battle against, I found my 

dragon to be manifested in the form of this work. With the help of my family, girlfriend 

and friends, here I tell the story of how I prevailed against my overwhelming self-disbelief. 

I thank my mother, Angela, for her unrelenting support throughout the countless 

months where I refused to believe that I would be able to complete this work. I thank 

my girlfriend, Jessica, for reminding me that I had surpassed many challenges before this, 

and that this would be a difficult, but definite step towards achieving my lifelong goals. I 

thank my brother, Giovanni, for lending me his pragmatic views on the processes which 

would help me achieve my goals in this work. I thank my therapist, Joana, for lending 

me her eyes to realize that this work was not an unbeatable enemy, but a dragon which 

I strengthened through fear. I thank my advisor, Prof. Luciana Nedel, for allowing me 

to pursue a dangerous but personal objective as my final academic work. And I thank 

my friends, especially Alexander, Monicque, Lucas, Carolina and Lorencetti for the com-

pany during this long journey, filled with defeat, anger, despair... but ultimately, blissful 

accomplishment.

ABSTRACT 

The Video Games Industry has learned through trial and error how to make digital games 

appeal to broad audiences. Qualities such as pleasing aesthetics, appealing story and con-

cise playability are requirements for player engagement. However, there is a tendency for 

making games easier to support entry-level players. While this is a respectful approach 

to embrace casual players, it might bore skillful players which dedicate more time to 

gaming. One interesting solution to this problem is the concept of "adaptive difficulty". 

Instead of reducing difficulty curves to finite menu options such as "Easy" and "Hard", 

difficulty is treated as a set of in-game continuous variables in multiple layers, each per-

taining to a specific set of the game’s rules. The game monitors player actions and their 

results to dynamically adjust in-game parameters and tailor the difficulty of game systems 

to the specific needs of a player. Therefore, the player does not have to manually input 

their desired difficulty level, and the game smoothly adapts to the player’s profile. We 

review multiple dynamic difficulty methods proposed in commercial games and in prior 

academic work, and present an implementation of player-centric adaptive technology in 

games. We evaluate the benefits of personalizing the game based on user preferences and 

performance, using the Dark Souls game series as an object of study. We implement a 

subset of the Dark Souls game mechanics with a simplified version the features presented 

in the original game. The customization methods include dynamic and subtle gameplay 

changes, a Dynamic Difficulty Adjustment system and a player model based approach for 

performance tracking. 

Keywords: Adaptive difficulty. dynamic content adaptation. player modeling. human-

computer interaction. video games.

Uma Implementação de Sistemas de Dificuldade Adaptativa para Jogos Desafiantes 

RESUMO 

A indústria de video games aprendeu, por tentativa e erro, como fazer jogos serem atra-

entes para um público grande. Estética agradável, uma história envolvente e jogabilidade 

concisa são características necessárias para engajar o jogador. No entanto, existe uma 

tendência em fazer com que jogos não sejam desafiantes para que sejam acessíveis a 

jogadores novatos. Enquanto que esta solução respeita a as necessidades de jogadores 

casuais, jogadores mais habilidosos que dedicam mais tempo a jogos podem se sentir 

entediados e desmotivados a jogar. Uma solução para este problema é o conceito de "di-

ficuldade adaptativa". Ao invés de tratar dificuldade como um número finito de opções 

de menu nomeadas "Fácil"e "Difícil", a dificuldade é tratada como um conjunto de va-

riáveis contínuas em múltiplas camadas, cada uma representando um conjunto de regras 

do jogo. O jogo monitora as ações do jogador e seus resultados, de forma a ajustar os 

parâmetros do jogo para se ajustar ao perfil de dificuldade do jogador. Portanto, neste tra-

balho apresentamos uma implementação para adaptação dinâmica de conteúdo em jogos 

centrada no jogador, e avaliamos os benefícios causados pela adaptatividade baseada em 

preferências e performance do usuário. O objeto de estudo é uma implementação de jogo 

inspirada no título Dark Souls, com um conjunto reduzido e simplificado de mecânicas 

do jogo original. Os métodos de personalização incluem mudanças sutis na jogabilidade 

baseadas em preferência, um sistema de Ajuste de Dificuldade Dinâmico e mudanças no 

ambiente baseadas em estado de jogo. 

Palavras-chave: Dificuldade adaptativa. adaptação dinâmica de conteúdo. criação de 

modelo de jogador. interação humano-computador..

LIST OF FIGURES 

Figure 1.1 A screen capture of Bright Souls, our implementation of a game based in Dark Souls game with a subset of the mechanics and systems pre-sented in the original game. .........................................................................19 

Figure 2.1 A visual representation of the concept of Flow Channel or Flow Zone discussed by Csikszentmihalyi (1991). ........................................................29 

Figure 2.2 Examples of the distribution of difficulty in games as a function of player progress. ............................................................................................30 

Figure 2.3 A representation of the dynamic player modelling framework discussed in Charles and Black (2004).........................................................................34 

Figure 2.4 A state-flow diagram representation of the performance-based and anxiety-based adaptation variants in Liu et al. (2009). .............................................39 

Figure 4.1 A selection of screenshots from pre-assembled scenes using the 3D assets from the Fantasy Dungeon asset pack. ..............................................91 

Figure 4.2 A mosaic portraying the 3D character models in Bright Souls....................93 Figure 4.3 Comparative screenshots showing the difference between the Orbital 

and Lock-On camera modes. .......................................................................99 Figure 4.4 A diagram showing the class relationship of our Camera System im-

plementation, along with the signals being sent and processed. ..................101 Figure 4.5 Class diagram representing the architecture of our Movement System.......106 Figure 4.6 Class diagram for the Attributes System, showing examples of signals 

being used by UI Elements. .........................................................................108 Figure 4.7 A class diagram containing an overview of the class relationships in 

our Combat System implementation............................................................109 Figure 4.8 A state machine used for our implementation of the Attack and Combo 

system...........................................................................................................110 Figure 4.9 A diagram showing the event flow and class relationship of the Attack 

and Combo related classes. ..........................................................................111 Figure 4.10 Class diagram showing an overview of the components and flow of 

events related to the Hit Detection System. ..................................................114 Figure 4.11 Class diagram representing the relationships for Combat Effects and 

affected components.....................................................................................115 Figure 4.12 An event flow diagram that shows an overview of each step in our 

implementation of attacking in the Combat System. ...................................116 Figure 4.13 An example of the State Machine that represents a Melee Enemy AI 

Agent. Each state holds its own behavior. ...................................................118 Figure 4.14 Class relationship for our State Machine implementation from the per-

spective of AI Systems.................................................................................120 Figure 4.15 Illustration of the "Arc Segments" algorithm for radial positioning of 

AI Agents around the player character.........................................................123 Figure 4.16 An example of melee enemy group positioning with five AI Agent 

enemies.........................................................................................................123 Figure 4.17 Diagram illustrating the execution flow of the dynamic adjustments 

system in our application. ............................................................................125 

Figure 5.1 Chart representing the size of each experiment group, separated by our user classification. ........................................................................................143

Figure 5.2 Diagram representing the steps performed by users in our experiment.......144 Figure 5.3 Perceptions on the Aesthetics of the game - All Players. ............................152 Figure 5.4 Perceptions on the ease of learning to play the game - All Players. ............152 Figure 5.5 Perceptions on issues when playing the game - All Players. .......................153 Figure 5.6 Perceptions on feelings when playing the game - All Players. ....................154 Figure 5.7 Avg. Adjustment Targets Average (Y) per Level (X) for Beginners. ..........155 Figure 5.8 Avg. Attack Avoidance Efficiency (Y) per Level (X) for Beginners. ..........155 Figure 5.9 Avg. Attack Window Efficiency (Y) per Level (X) for Beginners. .............156 Figure 5.10 Avg. Completion Time (Y) per Level (X) for Beginners.............................157 Figure 5.11 Avg. Damage Dealt per 10 seconds (Y) per Level (X) for Beginners. ........158 Figure 5.12 Avg. Deaths (Y) per Level (X) for Beginners..............................................159 Figure 5.13 Avg. Health Lost per Encounter (Y) per Level (X) for Beginners...............159 Figure 5.14 Perceptions on Difficulty - Beginner Players...............................................160 Figure 5.15 Perceptions on Learning - Beginner Players................................................161 Figure 5.16 Perceptions on Playthroughs - Beginner Players Group A. .........................161 Figure 5.17 Perceptions on Playthroughs - Beginner Players Group B. .........................162 Figure 5.18 Avg. Adjustment Targets Average (Y) per Level (X) for Intermediates......163 Figure 5.19 Avg. Attack Avoidance Efficiency (Y) per Level (X) for Intermediates. ....164 Figure 5.20 Avg. Attack Window Efficiency (Y) per Level (X) for Intermediates.........165 Figure 5.21 Avg. Completion Time (Y) per Level (X) for Intermediates. ......................166 Figure 5.22 Avg. Damage Dealt per 10 seconds (Y) per Level (X) for Intermediates. ..167 Figure 5.23 Avg. Deaths (Y) per Level (X) for Intermediates. .......................................167 Figure 5.24 Avg. Health Lost per Encounter (Y) per Level (X) for Intermediates. ........168 Figure 5.25 Perceptions on Difficulty - Intermediate Players. ........................................169 Figure 5.26 Perceptions on Learning - Intermediate Players. .........................................169 Figure 5.27 Perceptions on Playthroughs - Intermediate Players Group A. ...................170 Figure 5.28 Perceptions on Playthroughs - Intermediate Players Group B.....................171 Figure 5.29 Avg. Adjustment Targets Average (Y) per Level (X) for Veterans..............172 Figure 5.30 Avg. Attack Avoidance Efficiency (Y) per Level (X) for Veterans. ............172 Figure 5.31 Avg. Attack Window Efficiency (Y) per Level (X) for Veterans.................173 Figure 5.32 Avg. Completion Time (Y) per Level (X) for Veterans. ..............................173 Figure 5.33 Avg. Damage Dealt per 10 seconds (Y) per Level (X) for Veterans. ..........174 Figure 5.34 Avg. Deaths (Y) per Level (X) for Veterans. ...............................................174 Figure 5.35 Avg. Health Lost per Encounter (Y) per Level (X) for Veterans. ................175 Figure 5.36 Perceptions on Difficulty - Veteran Players. ................................................176 Figure 5.37 Perceptions on Learning - Veteran Players. .................................................176 Figure 5.38 Perceptions on Playthroughs - Veteran Players Group A. ...........................177 Figure 5.39 Perceptions on Playthroughs - Veteran Players Group B.............................177

LIST OF TABLES 

Table 2.1 Dynamic Difficulty Systems in Research. .....................................................64 Table 2.2 Adaptive System Implementations in Commercial Games. ..........................66 

Table 4.1 A consolidated list of the assets used in the implementation of this work. ...96 Table 4.2 A description of the values that can be assigned to the Faction Attribute 

of targets that are part of the Combat System in our implementation. ..........113 Table 4.3 A list of the behaviors in the States of the AI Agents in our implementation.119 Table 4.4 A description of the fields associated with an EVENTINSTANCE. ................126 Table 4.5 A list of the discrete events captured over a play session in our imple-

mentation. ......................................................................................................128 Table 4.6 A list of the timer-based events captured in our implementation. .................129 Table 4.7 A list of the composite events that are created by aggregating basic events. 130 Table 4.8 A list of the profile metrics implemented to monitor player habits and 

common responses to combat situations in our application. .........................131 Table 4.9 A list of the performance metrics implemented to perform adjustments 

related to the efficiency and results of player actions. ...................................132 Table 4.10 A list of the adjustments that were implemented in our application to 

define game difficulty as an N-dimensional set of parameters. .....................135 Table 4.11 A list of the thresholds and their associated values for each parametrized 

difficulty adjustment in our application. ........................................................136 

Table 5.1 Users for each user classification category in our experiment.......................142 Table 5.2 Descriptions of the Performance Metrics used to evaluate Players. ..............146 Table 5.3 Aggregate Perception Assessments in the Player Perception Survey. ...........148 Table 5.4 Group-based Perception Assessments in the Player Perception Survey........149 Table 5.5 Summarized observations on Performance Metrics for Beginner Players. ...189 Table 5.6 Summarized observations on Performance Metrics for Intermediate Players.190 Table 5.7 Summarized observations on Performance Metrics for Veteran Players.......191

LIST OF ABBREVIATIONS AND ACRONYMS 

2D Two-dimensional 

3D Three-dimensional 

ADC Adaptive Duo-Chromosome Controller 

AGT Adaptive Game Technologies 

AI Artificial Intelligence 

API Application Programming Interface 

AUC Adaptive Uni-Chromosome Controller 

CSV Comma-Separated Values 

DDA Dynamic Difficulty Adjustment 

ECG Electrocardiogram 

EMG Electromyography 

HCI Human-Computer Interaction 

HMD Head-Mounted Device 

MSRP Manufacturer-Suggested Retail Price 

NPC Non-Player Character 

RNG Random Number Generator 

RPG Role-Playing Game 

RT Regression Tree 

UX User Experience 

VR Virtual Reality

CONTENTS 

1 INTRODUCTION.......................................................................................................13 1.1 Adaptive Systems In Research..........................................................................15 1.2 Adaptive Systems In Industry...........................................................................17 1.3 Implementation and Scope................................................................................18 1.4 Structure of This Work......................................................................................20 

2 RELATED WORK......................................................................................................22 2.1 Overview.............................................................................................................22 2.2 Domain Context and Terminology ................................................................... 23 

2.2.1 Definition of Player Experience...................................................................23 2.2.2 Challenge and Flow in Games.....................................................................27 2.2.3 Learning Curve............................................................................................30 2.2.4 Player Modelling ......................................................................................... 32 2.2.5 Dynamic Adjustments ................................................................................. 35 

2.3 Adaptive Systems In Research..........................................................................35 2.3.1 Probability-based DDA Systems.................................................................35 

2.3.1.1 Methodology and Results....................................................................36 2.3.1.2 Analysis of Positive and Negative Aspects .........................................37 

2.3.2 Affect-based DDA Systems.........................................................................38 2.3.2.1 Methodology and Results....................................................................38 2.3.2.2 Analysis of Positive and Negative Aspects .........................................40 

2.3.3 Learning-based DDA Systems.....................................................................42 2.3.3.1 Methodology and Results....................................................................42 2.3.3.2 Analysis of Positive and Negative Aspects .........................................44 

2.4 Adaptive Systems In Commercial Games........................................................46 2.4.1 Rubber Banding in Racing Games .............................................................. 46 

2.4.1.1 Implementation and Design In Mario Kart .........................................47 2.4.1.2 Alternative Implementations...............................................................48 2.4.1.3 Analysis of Positive and Negative Aspects .........................................50 

2.4.2 Multiple Adaptivity Layers in Resident Evil 4............................................51 2.4.2.1 Dynamic Resource Distribution..........................................................51 2.4.2.2 Dynamic AI Behaviors........................................................................54 2.4.2.3 Dynamic Encounters ...........................................................................56 

2.4.3 Explicit Adaptivity in God Hand.................................................................58 2.5 Conclusions.........................................................................................................60 

2.5.1 Summary of Explored Concepts..................................................................61 2.5.2 Evaluation of DDA Systems in Research....................................................62 2.5.3 Evaluation of DDA Systems in Commercial Games...................................64 2.5.4 Guidelines for Adaptive Systems ................................................................ 65 2.5.5 Improvement and Exploration Opportunities..............................................67 

3 ANALYSIS OF OBJECT OF STUDY...................................................................... 69 3.1 Motivation of Choice..........................................................................................69 3.2 Overview of Game Mechanics .......................................................................... 70 3.3 Artificial Intelligence ......................................................................................... 73 3.4 Level Design........................................................................................................74 3.5 The Difficulty Factors of Dark Souls................................................................76 

3.5.1 Concept of Approachability.........................................................................76 3.5.2 Detrimental Factors to Approachability in Dark Souls ...............................77

3.6 Conclusions.........................................................................................................83 3.6.1 Relevance.....................................................................................................84 3.6.2 Core Design Aspects....................................................................................85 3.6.3 Difficulty Issues & Proposed Solutions.......................................................87 

4 IMPLEMENTATION AND DESIGN.......................................................................89 4.1 Tools and Frameworks ...................................................................................... 89 4.2 Game Assets and Aesthetics..............................................................................91 4.3 Gameplay Mechanics and Systems...................................................................96 

4.3.1 Camera System............................................................................................97 4.3.2 Movement mechanics and physics .............................................................. 102 

4.3.2.1 Camera-Based Movement...................................................................102 4.3.2.2 Grounded State Detection ................................................................... 103 4.3.2.3 Movement System Design...................................................................105 

4.3.3 Attributes System.........................................................................................106 4.3.4 Combat System............................................................................................107 

4.4 Artificial Intelligence and Enemy Design ........................................................ 117 4.4.1 State Machines.............................................................................................117 4.4.2 Implementation of Behaviors ...................................................................... 120 

4.5 Dynamic Adjustments System..........................................................................124 4.5.1 Event Tracking Objectives...........................................................................126 4.5.2 Captured Events...........................................................................................127 4.5.3 Player Metrics..............................................................................................129 4.5.4 Adjustment Policies.....................................................................................131 

5 METHODOLOGY AND RESULTS.........................................................................137 5.1 Overview.............................................................................................................137 5.2 Hypotheses and Objectives................................................................................137 5.3 User Selection Criteria ...................................................................................... 139 5.4 Classification of the User Base..........................................................................141 5.5 Experiment Methodology..................................................................................143 

5.5.1 User Groups.................................................................................................143 5.5.2 Experiment Flow..........................................................................................144 5.5.3 Metrics.........................................................................................................145 5.5.4 Player Perception Survey.............................................................................146 

5.6 Results.................................................................................................................147 5.6.1 Perceptions on Usability, Fidelity and Learning of All Players ..................151 5.6.2 Beginner Players..........................................................................................154 5.6.3 Intermediate Players ....................................................................................163 5.6.4 Veteran Players ............................................................................................171 

5.7 Conclusions.........................................................................................................178 5.7.1 Summary of Methodology...........................................................................178 5.7.2 Conclusions on Results................................................................................180 5.7.3 Problems and Limitations............................................................................185 

6 CONCLUSION............................................................................................................192 6.1 Overview and Contributions.............................................................................192 6.2 Limitations and Problems.................................................................................197 6.3 Future Work.......................................................................................................199 

References.......................................................................................................................200 APPENDIX A — Raw Collected Event Data Excerpt................................................203 APPENDIX B — Player Classification Survey............................................................204 APPENDIX C — Player Experiment Requirements Survey.....................................207 APPENDIX D — Player Perception Survey................................................................210

13 

1 INTRODUCTION 

Game Designers are often riddled by the trade off of either appealing to the largest 

audience possible or entertaining the preferences of a niche. When creating games for a 

broad audience, game designers lean towards the preferences of casual players, using pre-

defined and well-known features to take advantage of popular trends in a game genre. 

When creating niche games, designers often express more freedom, exploring new fea-

tures, mixing older ones and creating complex systems that are well received by the target 

audience. This can be seen in Path of Exile1, which uses mechanics previously explored 

by predecessor games such as Diablo2 and innovates by combining new features with 

what was already proven to be successful. 

Tailoring a game to a specific niche during the conceptual phase of development 

is a valid approach to solidifying its core vision, mechanics and aesthetics, as having 

well defined delimiters to design decisions simplifies the conception of new systems and 

promotes a focused and iterative improvement process. One of the most notable examples 

of successful games that were originally targeted for a niche audience is Dark Souls3, a 

challenging Hack and Slash4 RPG (Role-Playing Game) which is considered one of the 

most influential games of all time and the origin of the Souls-like game genre (MECHERI; 

ROMIEU, 2017). 

While incredibly successful and influential, Dark Souls has been the protagonist 

of multiple discussions regarding difficulty and accessibility in games through the last 

decade due to its challenging nature in terms of game design (BYCER, 2020). In Dark 

Souls, players are severely punished for committing even the smallest mistakes, and if de-

feated will repeatedly have to play through the same sections of the game due to sparsely 

positioned checkpoints5 (named "bonfires" in the game world). As a result, a percentage 

as low as 26% of the consumer base has completed the game after 10 years since its re-

lease (BYCER, 2021a), with multiple online resources such as video tutorials and guides 

1Path of Exile (Grinding Gear Games, 2013). Computer Game. Microsoft Windows. 2Diablo (Blizzard Entertainment, 1996). Computer Game. Microsoft Windows. 3Dark Souls (FromSoftware, 2011). Video Game. PlayStation 3, Xbox 360, Microsoft Windows, 

PlayStation 4, Xbox One, Nintendo Switch, PlayStation 5. 4Hack and Slash games are a sub-genre of action games which generally focuses on melee-based com-

bat, often enabling the player to attack, block, dodge and evade attacks of multiple enemies simulaneously in combat encounters. Hack and Slash games are most often presented in a third-person camera perspective, but some games which present a top-down camera are also considered to be a part of this genre. 

5Checkpoints are special locations in games where the player is respawned to after being defeated, failing to complete an objective or manually resetting the game state through an in-game menu. Upon passing through a specific in-world position, the game state is temporarily saved, to be restored when the player achives a condition of defeat.

14 

being published to assist new players. Many players report Dark Souls to be a frustrating, 

unenjoyable experience and decide to give up before being immersed and engaged in the 

game’s world and lore (MACDONALD, 2019). 

The controversy around Dark Souls served as a catalyst to push forward discus-

sions regarding the impact of game difficulty in player experience. For a game to suc-

cessfully bring enjoyment to the player, it has to cause the player to become involved 

and focused while playing (CHEN, 2007). Therefore, one of the critical factors of game 

design is the ability of a game to make the players immersed in its experience. 

The most established concept in academic literature pertaining player immersion 

and focus is the theory of Flow (CSIKSZENTMIHALYI, 1991). Flow is the state in 

which a player is completely immersed within the experience of a game. The ease to 

reach the state of Flow is determined by, among other properties, the challenge of a game 

in contrast to the skill of its player. According to the Theory of Flow, for a player to 

become completely immersed in the experience of a game, the difficulty of the game 

should match the skill level of the player. A game that is not challenging at all will bore 

the player, whereas a game that is too challenging might cause anxiety and result in the 

player giving up. 

A game with balanced challenge for all players would ideally be the best solution. 

In practice it is difficult to accomplish such experiential target, risking an unsatisfactory 

result for multiple segments of the playerbase. Beginner players might be frustrated by an 

unfair level of challenge, and veteran players might find a game too easy in comparison to 

their skills. One of the most common approaches to attempt to balance games to multiple 

audiences is to implement multiple and fixed presets of difficulty curves, such as Easy, 

Normal and Hard game modes that modify specific in-game parameters to provide an 

easier or more challenging experience that can be chosen by the player. 

However, the use of difficulty presets presents multiple issues related to a player’s 

own assessment of their skill levels and their interpretation of the inherent challenge 

within each predefined difficulty curve. If a player has no experience with the game be-

forehand or even with another game of the same genre, they might not be able to correctly 

assess their own skill level in comparison to the challenge levels proposed by the game 

designers. Therefore, they might incorrectly select a game mode that is too frustrating or 

boring and have difficulty being immersed by the experience. 

For this reason, some games provide the option of changing the difficulty mode 

over the course of a play session, which alleviates the issue but creates pauses and varia-

15 

tions in the game experience that might affect player immersion and cause negative effects 

on the experience. Even worse, the player might be tempted to modify the difficulty to 

overcome challenges that are designed to be above the overall game difficulty, such as 

boss fights6 – which further breaks the immersion and the purpose of such sections of a 

game in regards to player experience. 

Additionally, when a game employs the possibility of altering difficulty in the 

middle of a play session, the player might be motivated to continue to play in the same 

difficulty level due to their perception of their own skill level, which might not be in 

accordance with the target skill level intended by game designers. In that case, the player 

might be frustrated by the fact that their expectations of the challenge level of a specific 

mode might not meet the actual difficulty proposed by game designers. 

Furthermore, there is still the issue of defining player skill to appropriately create 

difficulty curves, which can be done through multiple perspectives since game systems 

might involve mechanics that require knowledge of different concepts or decision-making 

processes. For instance, a player might be able to take good strategical decisions in a 

combat situation, but be unable to execute such decisions due to a poor reaction time or 

motor coordination. Conversely, a player might have a good reaction time but not possess 

a sufficient understanding of the approach that should be taken to overcome a challenge. 

A player might also make better use of a specific game mechanic in relation to others and 

feel motivated to use it repeatedly due to their success when using it. This might cause 

the game to become repetitive, as the game does not appropriately provide the player with 

situations that incentivize the use of varied mechanics or strategies. 

1.1 Adaptive Systems In Research 

To directly deal with the issue of game difficulty without relying on player expec-

tations and choices, it is possible to automatically adapt a game over the course of a play 

session satisfy the specific needs of each player. Such a model can be achieved through 

Adaptive Game Systems (CHARLES et al., 2005), where the game monitors the actions 

performed by the player to define a player profile and provide customized responses, cal-

culates the efficiency of player decisions to analyze player performance and adjust diffi-

6Boss fights are encounters with special computer-controlled enemies where the player faces a signif-icantly higher level of challenge in comparison to regular encounters. Boss fights are employed by game designers for players to test their skills and their knowledge of game mechanics, while also being an oppor-tunity to present a climax point for the development of a game’s narrative.

16 

culty, and adapts its content based on player preferences to provide an experience tailored 

to the expectations of a player. 

Research conducted on AGS (Adaptive Game Systems) has tackled the issue of 

adapting game difficulty to players through multiple perspectives by using different meth-

ods for monitoring and classification of players, as well as different philosophies for the 

adjustments that should be performed to modify the difficulty curve. Methods that create 

a probabilistic model such as the work in (HUNICKE, 2005a) perform proactive adjust-

ments based on the probable outcomes from a specific in-game event faced by the player 

to avoid game state "loops", where the player would repeatedly play through the same 

game sections or perform the same set of actions. 

Alternatively, affect-based methods such as the work in (LIU et al., 2009) attempt 

to recognize the affective state of a player by monitoring physiological signals that can 

infer the anxiety level of players, and then adjust the difficulty level accordingly. This is 

a reactive approach to stimuli gathered from the player, and can be directly related to the 

concept of Flow where we attempt to avoid states in which a player might become too 

frustrated or bored with the game experience. 

Finally, learning-based methods such as the work in (TAN; TAN; TAY, 2011) at-

tempt to create a novelty approach to adjustments by adapting AI agent behaviors through 

learning-based algorithms such as reinforcement learning, where the game designer has 

a reduced responsibility in tailoring the values modified by the adjustment system. This 

type of approach requires the employment of offline learning techniques, where AI agents 

are rigorously trained by performing extensive play sessions against non-learning AI 

agents, or by gathering a sufficient amount of gameplay data from human players. 

While previous research on adaptive methods for game difficulty provided a va-

riety of novelty approaches that have yet to be explored by the video game industry, it 

is important to note that the implemented methods were experimented on simple games 

with limited interactivity or complexity. Therefore, research on AGS has yet to explore 

the results of adaptivity in the environment of commercial solutions, where games feature 

complex functionality and a variety of game mechanics and systems. 

Additionally, previous adaptive methods did not explore the possibility of provid-

ing automated accessibility and difficulty parameters in games that are purposed to be 

difficult by design, such as Dark Souls. By attempting to integrate dynamic difficulty 

to games in which overcoming difficult challenges is part of the proposed experience, it 

would be possible to measure the effectiveness of adaptation to increase their viability

17 

to beginner players. Simultaneously, it would also be possible to leverage the side ef-

fects of adaptive solutions to players which were the original audience targeted by game 

designers. 

Lastly, for Adaptive Game Systems to be viable in industry-based game develop-

ment, they should have the capacity to be integrated without introducing friction into the 

game development process. Instead, they should be an active part of the iterative method 

which is used by game design. The monitoring, classification and adjustment algorithms, 

as well as the parameters used for such adjustments, should be able to be iteratively mod-

ified as the design of the game changes or as play testing sessions indicate flaws in the 

balance of difficulty curves. 

Therefore, learning-based methods would be unable to satisfy the nature of the 

iterative design process, as they require agents to be extensively tested over fixed param-

eter values to properly reflect the balance of the game. In the same sense, affect-based 

methods would not be viable to implement in the vast majority of games, as the input 

devices used by gaming platforms are not commonly able to track physiological signals. 

1.2 Adaptive Systems In Industry 

As for approaches to dynamic difficulty implementation that were popularized in 

the video game industry, one of the most common employed approached is the dynamic 

resource distribution which is presented in Mario Kart7 and Half-Life8, where the game 

monitors player performance and distributes items based on the current necessity of the 

player at a given point. For instance, in Half-Life if a player is low on health and opens 

an item container such as a box, the game prioritizes the distribution of health recovery 

items by increasing the chance of such an item spawning. 

Another popular type of approach in the video game industry is the use of dynamic 

AI (Artificial Intelligence) agent behaviors, where the player monitors the frequency of 

player actions to modify the behavior of enemies in response, so that the player is unable 

to use the same strategy repeatedly over the course of the game. Such an approach can 

be seen in Resident Evil 49, where if players are accurately able to shoot enemy heads to 

deal more damage, enemy entities will start to be instantiated with protective helmets or 

7Super Mario Kart 8 Deluxe (Nintendo, 2017). Video Game. Nintendo Switch. 8Half-Life 2 (Valve Software, 2004). Computer Game. Microsoft Windows. 9Resident Evil 4 (Capcom, 2004). Video Game. PlayStation 2.

18 

perform defensive maneuvers to avoid shots. 

A less popular approach to dynamic difficulty that was briefly experimented in 

the industry was the use of explicit adaptivity, where the existence adaptive system is 

made apparent to the player through the user interface, and the increase or decrease of 

game difficulty is a gamified system in itself. This can be seen in the game God Hand10, 

where as players successfully defeat enemies while taking a minimal amount of damage, a 

"difficulty meter" is constantly increased, making enemy animations faster and increasing 

the amount damage dealt to the player. As a reward, the player receives an increased 

amount of points for defeating enemies in higher difficulty levels, which can be spent on 

unlocking multiple game features. 

The difficulty adjustment methods implemented in commercial games often prove 

to be effective when attempting to alleviate the difficulty for beginner players. However, 

as players become more experienced in a game and accustomed to the implemented sys-

tems, they start to recognize patterns which might give them advantages while playing. 

For instance, in Resident Evil 4 it is common for speedrunners11 to miss shots on purpose 

in order to restrict the behavioral patterns of enemies and make the game easier. 

As an adaptive system becomes apparent to the player, they will modify their play 

style to exploit the system in their advantage. This produces negative side effects to player 

immersion, as the player becomes preoccupied with a specific type of strategy in order 

to "beat the system", instead of performing the actions that are best suited to a specific 

situation. Therefore, it is important that adaptive systems are abstracted to the player 

to provide a more immersive experience, and thus there is an incentive to explore more 

ambiguous or complex adjustments that can not be easily perceived by players. 

1.3 Implementation and Scope 

This work attempts to use the knowledge acquired from previous research on AGS 

in the environment of a commercial game, where we attempt to adapt the metrics and ad-

justments to the iterative nature of the game design process in video games development. 

We attempt to apply such techniques to a game that is designed to be challenging as a 

10God Hand (Capcom, 2006). Video Game. PlayStation 2. 11Speedrunners are players which attempt to complete games in the least amount of time possible, and 

often compete in online leaderboards for ranking themselves among the fastest completion times. There are many online speedrunning communities which enforce a set of rules to ensure the validity of a run, including video proof and the absence of cheats.

19 

standard, trying to alleviate the difficulty curve so that beginner players experience less 

frustration in the process of becoming accustomed to game mechanics and systems. 

As an object of study, we implement a computer game that contains a subset of the 

mechanics, systems and aesthetic elements presented in Dark Souls. Our implementation 

was designed to replicate the core experience of Dark Souls, where the most relevant me-

chanics and features were leveraged into a simplified game with reduced scope. We also 

attempt to replicate the aesthetic elements of Dark Souls by using 3D (three-dimensional) 

models, visual effects and sound effects that can properly compose a Dark Fantasy set-

ting. Figure 1.1 illustrates a combat encounter in our game, where the player faces a 

challenging enemy type based on the enemies presented in the original Dark Souls game. 

Figure 1.1: A screen capture of Bright Souls, our implementation of a game based in Dark Souls game with a subset of the mechanics and systems presented in the original game. 

Source: Screen capture performed by the authors of the implementation presented in this work. 

To adapt the difficulty curve of Dark Souls to a broader audience with a variety 

of skill levels, we attempt to define game difficulty as an N-dimensional set of parametric 

difficulty adjustment values, which can be dynamically adjusted over the course of a game 

session to better satisfy the needs of specific player types. In sequence, we define a range 

of adjustment parameters that can be independently configured so that the player can 

focus on improving their performance when using specific mechanics and systems rather 

than the game as a whole. 

To provide a novelty approach to the implementation of Adaptive Game Systems

20 

which can be appropriately integrated into the game development process, we employ a 

statistical approach to the use of player metrics when performing adjustments, where we 

define a series of thresholds define conditions to the application of each adjustment value. 

While this approach is loosely related to the work developed in (HUNICKE, 2005a), the 

threshold-based conditions presented in our implementation simplify the iterative process 

of game development, where game designers are able to adjust threshold conditions and 

adjustment values after analyzing the results of single or multiple play sessions without 

causing negative effects on the adjustment algorithms. 

The adjustments in our implementation were elected based on analysis of the diffi-

culty factors in the original Dark Souls game, as well as on the abstraction level in relation 

to player perception of difficulty. Therefore, we argue that our adjustment parameters are 

harder to perceive by players in comparison to common approaches employed in com-

mercial games, while also providing interesting modifiers that game designers can work 

with to customize difficulty curves. 

To compare the effectiveness of implementing difficulty as an N-dimensional set 

of adjustable parameters in comparison to predefined difficulty configurations that are 

used commercial games, we perform an experiment where players of multiple skill levels 

are monitored while playing through two versions of our game: one with fixed values for 

difficulty parameters which are set by using a player classification survey to select one 

of multiple pre-configured difficulty presets; and another where the game dynamically 

adjusts difficulty parameters after each level based on player performance and their most 

common actions. 

1.4 Structure of This Work 

We begin in chapter 2 by reviewing research focused on player experience and 

game difficulty to understand which aspects should be considered the most relevant con-

tributors to the frustration experienced by players when the challenge proposed by design-

ers does not meet the skill level of the player. We explore the concept of learning curves, 

where game designers attempt to conceptualize and organize challenges for players to 

learn the mechanics of a game without being too frustrated by difficulty. 

We also review previous research on dynamic difficulty systems in games, where 

we classify the methods for monitoring player performance and execution of adjustments 

in probabilistic, affect-based and learning-based methods. We compare DDA (Dynamic

21 

Difficulty Adjustment) systems in research literature to the implementations in commer-

cial games, and identify issues and potential improvements that can be addressed in our 

implementation. 

We proceed in chapter 3 by performing an analysis of Dark Souls, which is our 

object of study and the base reference for the game implemented in the scope of this work. 

We analyze the core aspect of Dark Souls in terms of game mechanics, systems, design 

and aesthetics, and attempt to identify the elements that most relevantly contribute to the 

level of challenge proposed by game designers. 

In chapter 4, we specify the architecture, implementation and design of the sys-

tems in the application developed for this work. We justify the tools and frameworks 

used in our implementation, as well as the assets that were selected to best represent the 

aesthetics of Dark Souls. We provide a detailed explanation of the architecture for each 

subsystem, while also relating implementation decisions to the design of our object of 

study. We also specify the metrics and parameters used for the implementation of our 

difficulty adjustment system. 

In chapter 5, we specify the experimentation model used to compare the imple-

mentation of difficulty as N-dimensional parametric adjustments to the commonly used 

implementation of difficulty as a limited set of parameter configuration groups. We per-

form play sessions with users of multiple groups categorized by player skill levels, where 

each player experiences our game implementation with pre-defined difficulty configura-

tions and with N-dimensional parametric difficulty adjustments. We provide details on the 

characteristics of each user group used in our experiments, and compare the performance 

results of each group to a post session survey which attempts to document the perception 

of the difficulty in both variations of our application. 

Finally, in chapter 6 we conclude our analysis by reviewing the scope of our im-

plementation, identifying the core characteristics of our adaptive solution in comparison 

to previous research and commercial products. We specify possible points of improve-

ment in our own solution, along with how this work contributes to the overall landscape 

of adaptive solutions in video games. We review the limitations of our solutions and main 

problems encountered with our experiment methodology, and conclude by exploring the 

opportunities encountered for future work in adaptive systems.

22 

2 RELATED WORK 

2.1 Overview 

In this chapter, we perform a review of previous research and literature related 

to adaptive systems and dynamic difficulty. We begin by exploring literature regarding 

player experience and the concepts that define game difficulty, to understand the impact 

of difficulty in player experience. We attempt to understand how difficulty can be a detri-

mental factor or used as a support tool for players to learn, understand and improve upon 

the use of game mechanics and systems. We identify the problems with fixed difficulty 

curves, where the game provides a limited set of options for players to define their ex-

pected challenge level within the experience of a game. 

We proceed by studying the early models developed to address the issue of dynam-

ically adapting a game to different players, as well as the concepts and terminology for 

the implementation of such models. First, we understand the concept of player models, 

where player behavior is monitored to create data sets that can represent player profile, 

performance and preferences. We relate player models to the concepts of metrics and 

adjustments, where player models are used as input for dynamic adaptation game content 

to satisfy contextual player needs. 

We proceed by reviewing previous implementations for AGS (Adaptive Game 

Systems), which propose to enhance player experience based on player profile, perfor-

mance and preferences. We attempt to understand how AGS can be used to alleviate 

the steep learning curve of highly challenging games, accommodating the skill level of 

beginner players to the level of challenge proposed by game designers in difficult video 

games. 

We review multiple DDA (Dynamic Difficulty Adjustment) implementation meth-

ods, such as probability-based, affect-based and learning-based adjustments. We identify 

the positive and negative aspects with each method regarding their impact on player ex-

perience, as well as how they can be adapted to the development of commercial games. 

We also evaluate some of the efforts in adaptivity in commercial games, analyzing 

their positive and negative effects. We attempt to understand the impact of solutions im-

plemented in some of the most successful commercial games in the last decades. We ana-

lyze representative examples for the implementation of each dynamic adaptation method 

in detail, verifying the positive and negative aspects of each proposed solution.

23 

We conclude by summarizing the terminology and concepts that relate to adaptive 

systems, and relating such concepts to the analyzed examples in research and commercial 

solutions. We analyze the general positive and negative aspects that involve each type 

of dynamic adjustment, and synthesize general guidelines on what should be pursued or 

avoided in adaptive systems. 

2.2 Domain Context and Terminology 

The objective of this work is to create a reliable system that is able to improve 

experience for any player, regardless of their skill level and expected challenge towards 

a game. To understand how to improve player experience, we must first define what 

constitutes it. In this section, we identify the components that constitute player experience 

based on previous research in usability applied to the specific context of games. 

We attempt to extract concrete, functional features from the subjective term expe-

rience, and translate these features into tools to design a proper challenge for the player, 

as well as to avoid mistakes and misconceptions on level design. To perform such a task, 

we analyze the impact of difficulty in games and its boundaries by reviewing literature 

on the psychology of player enjoyment. We review why the correct level of challenge 

can contribute to increasing levels of immersion and the overall positive experience of a 

player. 

2.2.1 Definition of Player Experience 

Computer software is commonly developed with the objective of allowing an 

user to execute a set of tasks, determined by a clear objective and in a specific context 

(SANCHEZ; ZEA; VELA, 2009). One of the early endeavors in the field of HCI (Human-

Computer Interaction) was the efficiency of performing the task to ensure a product’s in-

strumental value (HASSENZAHL; TRACTINSKY, 2006). In this line of thought, users 

of an application should ideally perform tasks without thinking about the application. 

Research on the interaction between people and systems in the field of HCI led to 

the concept of usability (ISO/TC 159/SC 4 COMMITTEE, 1998): 

"The extent to which a system, product or service can be used by specified 

users to achieve specified goals with effectiveness, efficiency and satisfaction

24 

in a specified context of use." 

This definition specifies the three qualities of a usable product: effectiveness, ef-

ficiency and satisfaction. We argue that while effectiveness and efficiency can be related 

to productivity, satisfaction may not be fulfilled solely by productivity. For instance, an 

user might feel dissatisfied with the audiovisual components of an application such as its 

interface, even though the application perfectly satisfies the purpose of assisting in the 

completion of tasks efficiently. 

In the work of Hassenzahl and Tractinsky (2006), we learn that early research 

on usability expressed that productivity is not primary, but only a contributor to User 

Experience. The term "user experience" does not have a standard definition, but can 

be seen as how people interact with products and the resulting experience and emotions 

(FORLIZZI; BATTARBEE, 2004). The experience is therefore a consequence of: the 

user’s state, such as their emotions and needs; the characteristics of the product, such as 

usability and audiovisual aspects and the context of use, such as the environment and date. 

According to Sanchez, Zea and Vela (2009), the concept of usability is not suf-

ficient to fully describe UX (User Experience) in relation to Video Games. The authors 

argue that video games are a specific type of interactive system used for leisure purposes. 

Thus, when evaluating quality not only instrumental values should be considered, but also 

non-instrumental values such as storytelling, visuals and character design. The author also 

introduces the concept of Player Experience, a specialization of UX that emphasizes the 

specific properties of experience in games. 

The author explains that Player Experience is characterized by Playability, a con-

cept based on Usability but with different meanings in the video game context. The 

proposed definition of Playability by Sanchez, Zea and Vela (2009) resembles the origi-

nal Usability definition, but emphasizes the user-centric perspective and the satisfaction 

property: 

"Playability represents the degree to which specified users can achieve 

specified goals with effectiveness, efficiency and specially satisfaction and 

fun in a playable context of use." 

This definition is further explained when the author introduces a set of seven at-

tributes that compose Playability: Satisfaction, Learnability, Effectiveness, Immersion, 

Motivation, Emotion and Socialization. The concepts of effectiveness and satisfaction 

remain present in this definition, but are specialized or complemented. Efficiency is

25 

specified as learnability and immersion, and the satisfaction aspect is complemented 

byemotion, motivation and socialization to define a set of user-centred attributes. Since 

this work focuses on a single-player environment, we will discuss the first six attributes 

and evaluate which of them can be manipulated by a reliable system through AGT. 

Satisfaction is the degree of enjoyment derived from playing, characterized by fun, 

disappointment and attractiveness. Fun is classified as the ability of a game to entertain 

the player whether through challenge, curiosity or competition. Disappointment refers 

to the feeling of disappointment of the player in relation to a game. Attractiveness en-

compasses any functional or aesthetic features that increases the pleasure of play such as 

realistic visuals, exceptional character design or interesting systems. 

Learnability is defined as the player’s capacity to understand the game systems 

and improve their level of proficiency in relation to the game. It is categorized by Game 

Knowledge, Difficulty, Frustration, Speed and Discovery. In this context, Game Knowl-

edge refers to the player’s prior expertise to the game’s mechanics and environment, and 

influences how the player is affected by the learning curve [FN]. Skill can be identified 

in the player’s cognitive aspects such as strategic and analytic decision-making, or inter-

active aspects with efficient usage of game mechanics. 

Difficulty relates to the challenge perceived by a player in relation to their skill. 

The degree of difficulty can either encourage a player to improve by learning how to 

play or cause frustration. Frustration relates to the feeling of uneasiness when failing to 

complete a particular objective and is often part of the learning process. Speed refers to 

the pace in which new concepts are presented to players and affects the game’s learning 

curve. Discovery refers to the techniques employed by the game to help players assimilate 

game content such as interfaces or level design, and directly affects the learning curve. 

Effectiveness refers to the resources necessary to entertain players, determined by 

Completion and Structuring. Completion is related to the overall percentage of players 

that feel motivated to reach the game’s final goal. Structuring emphasizes the locality of 

content as when, where and how gameplay elements appear in the game. For instance, 

the placement of enemies and level geometry will contribute to how the player perceives 

and performs an objective, indirectly affecting the learning process. 

Immersion depicts the capacity of a game to be believable in a way that the player 

becomes involved, losing their awareness of surroundings and sense of time. The immer-

sion factor can be determined by Conscious Awareness, Absorption, Realism and Dex-

terity. Conscious Awareness is the degree to which a player is aware of the in-game

26 

outcomes of their actions, so that they can effectively plan and execute according to a 

situation. Absorption refers to the level of focus of a player has to a game in a given mo-

ment, and is inversely proportional to the level of focus to their real world surroundings. 

Realism depicts how the game’s presentation influences the ease of player absorption, re-

lying in game characteristics such as controls and game atmosphere. Dexterity relates to 

the ease of a player handling the game’s controls and systems, so that performing in-game 

actions is natural and effortless. 

Motivation is the group of attributes that compel the player to perform one or var-

ious in-game actions, defined by Encouragement, Curiosity and Self-Improvement. En-

couragement is the level of confidence felt by a player when facing unexplored challenges. 

Curiosity is the degree to which a player is interested in interacting with new elements. 

Self-Improvement is the process of ability development and happens any time a player 

must overcome a challenge that is more difficult than their skill level. 

Emotion refers to involuntary player responses to the cognitive stimulus of a video 

game, defined by Reaction, Conduct and Sensory Appeal. Reaction consists of the emo-

tional response of a player in relation to a series of in-game events. Conduct is the ability 

of a game to conduct a player through a proposed range of emotions caused by different 

stimuli. Sensory Appeal denotes how interesting a game is in the aesthetic perspective 

using different sensory channels. For instance, a game with realistic graphics and sound 

effects might appeal to the audiovisual sensory channel of players. 

The definition of Playability proposed by Sanchez, Zea and Vela (2009) defined 

several attributes that categorize the characteristics of a player, the resources employed by 

a game and how different game aspects are able to affect a player. We argue that one of the 

concepts that is most frequently discussed in this work is that of Challenge. If challenge is 

presented poorly, the player might feel frustrated and discouraged to self-improve. Thus, 

the level of challenge must not deviate exceedingly from the level of skill by a player. In 

another perspective, challenge by itself can be a motivating factor for self-improvement 

and contribute to the overall satisfaction. 

Challenge is defined by the difficulty of an objective, the overall learning curve 

and player skill level. Therefore, it is directly related to how well a player learns and 

adapts to the game’s systems. Therefore, it is imperative to comprehend how challenge 

fully affects players, and how learning tools such as Failure and Punishment are employed 

in game systems.

27 

2.2.2 Challenge and Flow in Games 

Failure can be described when a player is unsuccessful in the completion of an 

in-game task. In the event of failure, video games punish the player with some type 

of progression loss or setback. In the classic Arcade-style game Tetris, the player must 

replay the game from the beginning upon losing. While this approach might be acceptable 

in session-oriented games with no narrative progress, modern Game Design encourages 

the usage of less punishing setbacks such as restarting at checkpoints. 

The perceptible change in failure outcomes suggests that punishment could be 

detrimental on the enjoyment of a game, depending on its gravity. The controversy of 

player failure and punishment requires the clarification of its purpose in games. If the 

only possible outcome of losing was a negative experience, the very existence of this 

system would be questionable. 

According to Juul (2009), failure serves the function of making players readjust 

their perception of a game. When a player fails performing a task, they realize the strategy 

that was performed is not the correct or optimal solution to a problem. The player then 

reevaluates the situation, analyzes what caused the failure and attempts a new strategy. 

This cycle provides the player an opportunity to deepen their knowledge, and encourages 

the creativity of new solutions. 

We argue that punishment in games serves the purpose of establishing the contrast 

between consequences of player actions. In a simple perspective, punishment explains the 

rules of a game, and how a player is supposed to play it. In the game Super Mario Bros 

(1985), the player has a predetermined number of lives upon starting the game, which is 

decreased with each death. Upon dying, the player is punished by replaying the current 

level. If all lives are lost, the player replays the entire game from the beginning. 

The aversion to losing the progress made in a game serves as encouragement for 

the player to learn how to avoid defeat. In Super Mario Bros, the player quickly learns 

that enemies should be avoided or beaten, and lava or bottomless pits should be evaded. 

If punishment mechanics did not exist, the player would simply progress by running to 

the right until reaching the end of a level without taking part in the proposed gameplay 

mechanics. 

In the case of Dark Souls, punishment is used as a tool to create tension and 

increase player awareness. With each death, the player loses all their experience points1. 

1Experience Points are resources acquired by the player upon defeating enemies with the purpose of

28 

If a player wishes to recover them, they must retrieve them from the same position where 

they were defeated. Dying again means the experience points are lost permanently. In 

other words, the player is forced to beat the challenges they previously failed to avoid 

progression loss. Death in Dark Souls can be an extremely frustrating experience, and 

arguably be considered as overly punishing. 

Since the experience points are used to evolve the character and directly affect 

the outcome of future encounters, the player is encouraged to survive by any means after 

accumulating a reasonable amount. Upon reaching a checkpoint, the player can then 

spend their experience points to attain permanent attribute bonuses. Therefore, the fear of 

losing character progress before reaching a checkpoint reinforces the necessity of careful 

and strategical decision making. 

While the philosophy of punishment as a tool is powerful as means of encouraging 

learning and adaptation, it can also be the source of anxiety and demotivation. If the 

punishment mechanics do not provide possibility of player evolution, they aggravate the 

exhaustion of repeatedly trying without success. We argue that if a game is excessively 

challenging to the skill level of a player, overly punishing will be the catalyst to surrender. 

Thus, the game system should also take in account the levels of punishment required to 

encourage player evolution without hindering the learning process. 

In the context of video games, challenge is an abstract concept commonly referred 

as the player’s perception of difficulty (COX et al., 2012). If a game is considered chal-

lenging by the general public, the majority of players would agree that the game requires 

a high skill level to complete. Nonetheless, a game that is considered easy by the public 

can still be challenging to a smaller audience with less technique or experience. 

The difference between the level of challenge and skill directly affects the quality 

of player experience. If a game is too easy to the skill level of a player, they will not feel 

any sense of accomplishment upon completion and will experience boredom. If a game 

is too hard, the player might feel overwhelmed and experience anxiety. This is supported 

by the Theory of Flow, proposed by Csikszentmihalyi (1991). 

The Theory of Flow indicates the existence of a state of complete focus in an 

activity, with a high level of energy, enjoyment and fulfillment. In this state, people 

lose track of time and external problems. Flow is considered to be state where optimal 

serving as a currency for purchasing upgrades for the player character. Such upgrades can improve the efficiency of the player in combat, or enable the player to use better equipment. In the Dark Souls game series, the Experience Points, also known as "Souls", can also be used for trading with NPCs (Non-Player Characters) for purchasing various items which assist the player when progressing.

29 

Figure 2.1: A visual representation of the concept of Flow Channel or Flow Zone dis-cussed by Csikszentmihalyi (1991). 

Source: Diagram assembled by the authors based on the concepts defined by Csikszentmihalyi (1991). 

experience takes place. The level of focus achieved in being such a state maximizes the 

pleasure and performance of an activity. 

According to the Theory of Flow, the main components of Flow are a challenging 

activity, the merging of action and awareness, clear goals, immediate feedback, concen-

tration, a sense of control, loss of self-consciousness and an altered sense of time. How-

ever, not all of them are needed for an activity to provide the user the feeling of Flow. 

These descriptions of Flow can be observed in games when a player becomes immersed, 

temporarily engaging the perspective of a virtual reality. 

The Theory of Flow also states that to maintain the state of Flow, the challenge of 

an activity must be balanced to the abilities of the person performing it. This concept is 

known as Flow Channel or Flow Zone. This can be translated directly to the concepts of 

Difficulty and player Skill Level in gaming. Different players will present different Flow 

Channels. Hardcore players will prefer more aggressive challenge scaling in comparison 

to their skill, whereas Casual or Novice players will prefer a more subtle introduction to 

the game’s complexity (CHEN, 2007). Figure 2.1 exemplifies the Flow Channel, where a 

balance of difficulty and player skill denotes the optimal conditions for player immersion 

and focus. 

The balance between challenge and skill strongly contributes to the optimal expe-

rience of a player, and is referred to as a defining factor on the quality of a game (JUUL, 

2009). We argue that we can balance the level of challenge through AGT. By acquiring

30 

Figure 2.2: Examples of the distribution of difficulty in games as a function of player progress. 

Source: Diagram assembled by the authors. 

information on the profile and preferences of a player, we can either ramp up the difficulty 

or encourage the learning process. Therefore, we understand that the usage of AGT can 

directly contribute to a positive experience. 

2.2.3 Learning Curve 

Another interesting concept in games is the learning curve (LINEHAN et al., 

2014). The learning curve depicts how easy it is to become used to the game’s mechan-

ics and systems. Game Developers often consider the learning curve as a key reference 

when performing level design. The first few levels of a game should enable the player 

to learn each mechanic in an isolated and controlled environment, whereas the last levels 

of a game should be designed considering that the player has knowledge about all the 

mechanics proposed by the game designer, and thus should present challenges that re-

quire mastery of each mechanic to surpass. Figure 2.2 depicts multiple possibilities for 

difficulty curves as a function of player progress in a game. 

Perhaps the most notable example in teaching game mechanics through a concise

31 

learning curve is seen the famous game Super Mario Bros 2 in World 1-1, as addressed 

by Floyd and Portnow (2014). In the first thirty seconds of gameplay, the player is able 

to learn that they must progress going to the right, that enemies must be avoided or elim-

inated by jumping in their heads and that special blocks hide valuable rewards such as 

additional lives. All the mechanics are taught without a single line of text or on-screen 

dialog box. Instead, the game teaches them by simply using the player’s curiosity with an 

ingenious placement of game entities. 

Some genres of games with consolidated and well-known mechanics share mul-

tiple similarities. The mechanics in such genres are proven to be one of the core con-

stituents in their type of gameplay, and are expected by any non-novice player. One 

example would be the FPS (First Person Shooter) mechanics of Call of Duty: Modern 

Warfare3. The running, sprinting, strafing, vaulting, proning and iron-sighting mechanics 

were so exceptionally well done that they still remain in the most recent title of the series, 

Call of Duty: Black Ops 44. Other entries in the FPS genre such as Battlefield5 also em-

ploy the same set of mechanics, which has since then become almost a requirement for 

the non-tactical Arcade Shooter style. 

Arguably, games with the mechanics of a consolidated genre have a faster initial 

learning curve to any player that has played a similar game before. These games take 

advantage of that, and throw the player straight into the action. Within the first few min-

utes of playing a Call of Duty game, the player will have faced and beaten an impressive 

amount of enemies. They will also confirm their proficiency by choosing exactly the 

difficulty level that appeals to their skill. Therefore, the veteran player of such a genre 

knows what to expect of the game and its standard difficulty level. They tailor their game 

experience to the optimal experience in the act of leisure. 

We argue that Adaptive Game Technologies can also have an impact on the learn-

ing curve issue. Understanding the profile of a player before gameplay takes place can 

be a key factor on the decision to ramp up the initial challenge of a game, and remove or 

alter initial sections which only serve the purpose of teaching basic mechanics. 

Thus, the learning curve should not be static, but customized to the needs of each 

player. If the player has already mastered the base concepts of a game, they should be 

encouraged to using their knowledge to the fullest. Tailoring the learning experience to 

2Super Mario Bros (Nintendo, 1985). Video Game. Nintendo Entertainment System. 3Call of Duty: Modern Warfare (Infinity Ward, 2007). Computer Game. Microsoft Windows. 4Call of Duty: Black Ops 4 (Treyarch, 2018). Computer Game. Microsoft Windows. 5Battlefield 5 (DICE, 2018). Computer Game. Microsoft Windows.

32 

each player could balance the challenges faced by the player to a more appropriate, which 

could possibly increase the sense of enjoyment and immersion as seen in subsection 2.2.2. 

2.2.4 Player Modelling 

The concept of adaptivity in games relates to how a game is able to adapt its 

content based on the profile and preferences of a player, which constitute player models 

obtained from a multitude of Player Modelling techniques. Player Modelling allows the 

creation, collection and processing of player models, real-time collected data sets that 

can be classified into reality-based player types (CHARLES; BLACK, 2004). Knowl-

edge about player types allows dynamic adjustment in the sense of content customization, 

where a game designer might dynamically assign what should be presented to each type 

of player. 

In a DDA system, Player Models refer to collections of data gathered to be used as 

a metric for adjustment policies (MISSURA, 2015). Player Model data might be gathered 

during a play session as a trace of the player’s actions and events in a game, or as static 

data collected from surveys or through the use of a gaming platform such as Steam. 

One possible implementation of a Player Model consists of defining a collection 

of numerical attributes that describe the playing style of an individual player, as seen in 

the work of Houlette (2004). Each attribute defines an aspect of the player’s behavior, 

which is generally associated with their strategy or mechanical skill. A typical example 

of Player Model in a Shooter game can be seen in Listing 2.1. 

Listing 2.1 – Example of a Player Model for a shooter game. 

1 class PlayerModel { 

2 public: 

3 enum Attribute { 

4 bCanStrafe, 

5 bCanFlick, 

6 bDoesStationaryShooting, 

7 fPrecision, 

8 fEncounterDuration, 

9 fKillsPerRound, 

10 fDamagePerRound, 

11 fDistancePerRound

33 

12 } 

13 void Initialize(); 

14 void UpdateAttribute(Attribute att, float newValue); 

15 float GetAttribute(Attribute att); 

16 private: 

17 vector<float> attributeValues; 

18 }; 

The values for each attribute are unknown to the game preceding a session. There-

fore, it is necessary to sample and adjust the values during gameplay. Each time a sample 

is collected, the Player Model should reflect a player’s behavior with increasing precision. 

In the implementation proposed by Houlette (2004), the attribute update function uses the 

Least Mean Squares (LMS) training rule, commonly used in machine learning: 

Listing 2.2 – Implementation of attribute update using least mean squares. 

1 float UpdateAttribute(Attribute att, float value) { 

2 float currvalue = attributeValues[att]; N 

3 float delta = value - currvalue; 

4 float weightedDelta = LEARNING_RATE * delta; 

5 attributeValues[att] += weightedDelta; 

6 } 

Attributes in this implementation consist of values between 0 and 1, indicating 

the probability of a player performing an action. In Listing 2.1, this can be seen in the 

definitions of Boolean attributes (prefix ’b’). However, it is also possible to use the same 

approach to approximate statistical values, such as the damage a player inflicts per round. 

The value for each attribute represents the game’s current best guess. Each sample col-

lected contributes to the estimate weighted by LEARNING_RATE. Therefore, for lower 

LEARNING_RATE values more samples are required to sufficiently approximate an at-

tribute. In most cases, values between 0.1 and 0.3 are used (HOULETTE, 2004). 

The concept of player models is used as a basis for dynamic adjustments in the 

framework described in Charles and Black (2004). The authors describe a methodology 

for the conception of player models that considers the existence of concept drift, which 

is the possibility of players adapting or changing behaviors and play styles according to

34 

their evolution or progress in a game. The framework relies on two sources of data related 

to players: information of player preferences inputted by a player prior to application use 

and tracking player performance in-game. Figure 2.3 exemplifies the dynamic player 

model framework. 

Figure 2.3: A representation of the dynamic player modelling framework discussed in Charles and Black (2004). 

Source: Diagram assembled by the authors based on visual representations in Charles and Black (2004). 

The discussion in Charles and Black (2004) emphasizes the necessity of remod-

elling player types after measuring the effectiveness of adaptation. This means that a DDA 

system should be able to gather some type of player feedback regarding the effectiveness 

of the dynamic adjustments that were performed during play, and recreate the player pro-

file based on this feedback. Some methods for gathering such feedback include inferring 

the player’s affective state, such as with physiological sensors or from a camera or an 

analysis of statistical data retrieved from in-game attributes, such as player performance 

or their action history.

35 

2.2.5 Dynamic Adjustments 

Mechanisms for adaptive adjustments should describe what elements of the game 

are going to be monitored, and what variables should be adjusted accordingly. Therefore, 

the functionality of a DDA system can be summarized as a relation between observa-

tion and adjustment. Since video games are so diverse in design and functionality, the 

mapping between observation parameters and adjustment variables has yet not been ef-

ficiently described as an universal and generic approach (MISSURA, 2015). Rather, the 

game developer should decide what variables should be observed and adjusted in a per-

game basis. 

2.3 Adaptive Systems In Research 

Previous academic work regarding adaptive system implementations include nov-

elty approaches with innovative metrics and adjustment policies that affect a variety of 

systems or mechanics. In this section, we use the literary review in (ZOHAIB, 2018) as 

a reference to classify DDA algorithms implemented in previous academic work, as well 

as to select analyze the most relevant implementations for each of the proposed methods. 

2.3.1 Probability-based DDA Systems 

One of the pioneer implementations of adaptive systems in research is the proba-

bilistic model approach in the Hamlet system, as seen in Hunicke (2005b). Hamlet is a 

probability-based predictive system that is able to perform reactive and proactive adjust-

ments to the distribution of items throughout levels of customized Half-Life 6 map. The 

general methodology proposed by the system involves defining a finite set of possible 

gameplay states based on contextual information of player status, and performing adjust-

ments based on policies defined by such metrics. The objective of the system is to avoid 

"game state loops", where a player would perform the same set of actions repeatedly when 

failing through a specific segment of the game. 

6Half-Life (Valve Software, 1998). Computer Game. Microsoft Windows.

36 

2.3.1.1 Methodology and Results 

First, the system establishes the probabilistic distribution of damage done to the 

player by registering changes to the value of player health over time, as well as the source 

factor for each change. By relating change occurrences in the health attribute with each 

of the enemy classes, the probability of the player dying during an encounter can be 

estimated, given that the enemy types that will be presented in a future encounter are 

known. The probability of player death is the metric used as input for adjustment policies 

in the Hamlet system, and is calculated from statistical data regarding player performance 

during previous combat encounters. 

If the probability of death for an encounter is above 40%, the system intervenes 

by distributing healing items7 throughout the level before an encounter takes place. The 

distribution of healing items before combat encounters based on probabilistic metrics can 

be classified as a proactive adjustment, as it occurs before an undesired in-game event 

such as player death. 

The Hamlet System also implements reactive adjustment policies which occur 

during combat encounters, such as adjusting the maximum hit points for an enemy type 

or modifying the accuracy of shots fired by enemies. The objective of these adjustments is 

to decrease the amount of health lost by players during combat encounters, consequently 

reducing repeated death occurrences.The target value for the mean health percentage is 

60%, with a standard deviation of 15% at most segments of the game. 

Results of experimentation using the Hamlet system showed that most players 

were unable to recognize when the system was performing adjustments, or characteristics 

of the game were modified when adjustments were performed. Some players suggested 

that the system performed adjustments that were not there, and several players suggested 

that the system did not perform any adjustments based on their skill level. 

The authors argue that the cause for incorrect perceptions of users regarding the 

adaptive system is related to the fact that the effects of proactive adjustments are harder 

to measure in comparison to reactive adjustments. Variations in the performance of a 

player caused by an increase of the skill level might not be considered as an input to 

the adjustment policies. Therefore, this type of adjustment should be performed with 

predefined constraints determined by the game designer in order to properly reflect the 

7Healing items in games are consumable resources that restore a percentage of the maximum health points of a player. An example for this are the health stations in the Half-Life franchise, where the player heals up to 80% of their maximum health points upon interaction, but the resource is permanently depleted after use.

37 

intended level of challenge. 

During the post evaluation interviews, the authors noticed a slight correlation be-

tween the adjustment policies and player enjoyment when considering players with an 

expert skill level, where adjustment policies positively affected player performance with-

out the players being able to identify which aspects of the game were modified. However, 

novice players with a lower level of skill did not report any perceivable change. 

The study concluded that adjustment algorithms can improve the performance of 

a player while retaining the player’s sense of agency and control. When performed with 

accordance to the game’s core design adjustments can be nearly imperceptible, slightly 

increasing the sense of enjoyment of a player without diverging from the proposed expe-

rience. 

2.3.1.2 Analysis of Positive and Negative Aspects 

One of the positive aspects of probabilistic approaches that use player performance 

metrics as input is regarding to their feasibility of implementation in already existing 

games, as evidenced by the fact that the methodology implemented in Hunicke (2005b) 

was applied by modifying the original Half-Life game. Therefore, the necessity for such 

adjustment algorithms can be considered and evaluated during or after the process of the 

original design iterations, and can be discarded if considered unnecessary. 

Another positive characteristic relates to the nature of predictive adjustments, 

where undesired in-game events can be prevented before a first occurrence, which might 

have a positive result in reducing player frustration. Combined with reactive adjustments, 

this methodology can provide immediate and real-time solutions to the discrepancy be-

tween player skill and the proposed challenge level of a segment in the game before and 

during first traversal by the player. 

However, we argue that while probabilistic systems this might be interesting as a 

supportive DDA implementations that can alleviate the difficulty curve of a challenging 

game, they might prove to be hard to adjust and customize from the perspective of game 

designers. It becomes difficult for a game designer to predict or understand the results of 

the integration and modifications of such an approach when the adjustments are performed 

before or during the first traversal of the player through game segments. 

Additionally, probability estimations are generally ignorant to immediate varia-

tions in player performance caused by a change of strategy or even an increase in the 

quality of mechanical execution performed by the player. It can be argued that the system

38 

attempts to modify the outcomes of in-game events before the player has a chance to fail, 

and consequently attempt to improve their strategies and execution to succeed in a combat 

encounter. Therefore, while this approach may reduce frustration for cases where a player 

is unable to handle the level of challenge, it may also hinder or slow player progress in 

regards to their skill. 

2.3.2 Affect-based DDA Systems 

Most implementations of DDA systems analyzed in the scope of this work use 

metrics that represent player profile or performance as input to the adjustment policies. 

However, a different approach can be taken when using player emotional state as both 

an input and a feedback mechanism when modifying difficulty. This is the theme of the 

work presented by Liu et al. (2009), where physiological signals were tracked to infer the 

anxiety level of players, and then used as a metric to perform difficulty adjustments which 

cause a reduced or increased feeling of tension throughout the game. 

2.3.2.1 Methodology and Results 

The adaptive system implementation presented in the work of Liu et al. (2009) 

uses features of cardiovascular activity (inter-beat interval, relative pulse volume, pulse 

transit time and heart sound), electrodermal activity (tonic and phasic response to skin 

conductance) and EMG activity (from Corrugator Supercilii, Zygomaticus and upper 

Trapezius muscles) as input data to a Regression Tree (RT) technique, which classifies 

the physiological signals into affective states that categorize anxiety levels. 

A Pong-based game was implemented for the study, with two variations in diffi-

culty adjustment algorithm: one where the difficulty would be adapted based on player 

performance (a relationship between points scored against or in favor of the player), and 

another where the anxiety level of the player is used as input to alter difficulty. 

Three difficulty levels were implemented in total, which would be assigned de-

pending on performance or anxiety levels: if the player’s performance is classified as 

"Excellent", the player would progress into the next difficulty level. If the performance is 

classified as "Poor", the difficulty level would be decreased. The affect-based variant uti-

lizes an analogue solution, where the difficulty is increased if the anxiety level is classified 

as "Low", and the difficulty is decreased if the anxiety level is classified as "High". Fig-

39 

ure 2.4 displays state-flow diagrams representing the difficulty levels and their transition 

conditions. 

Figure 2.4: A state-flow diagram representation of the performance-based and anxiety-based adaptation variants in Liu et al. (2009). 

Source: Diagram assembled by the authors based on visual representations in Liu et al. (2009). 

Regarding the impact of affect-based adaptation on player performance, results of 

the experiment showed that the performance of most players showed significant improve-

ment in the adjustment method which used affect-based metrics as an input, in comparison 

to the method which used performance metrics. This could be justified by the fact that 

in a Pong-based game, the game becomes progressively more difficult over time with an 

increase of the speed of the ball, causing feelings of tension as either the player or an 

AI-controlled opponent are closer to scoring a point. 

The increase of tension causes variations in physiological signals that classify 

as increases in the anxiety level, and thus the difficulty adjustment might be performed 

before the player or an AI agent is able to score. This could be argued to classify as 

another example of proactive adjustment, which goes in contrast to performance-based 

adjustments which are reactive adjustments by definition as the only metric used as input 

are outcomes of in-game events. 

Players also perceived that the DDA implementation which used affect-based met-

rics for adjustments was more challenging than the performance-based DDA version. This

40 

could also be justified by the nature of the real-time adjustments that were implemented. 

Instead of being based on the outcomes of in-game events (which in this case involves 

player and AI opponent scores), the difficulty is directly mapped to the level of anxiety of 

the player. 

When the player is able to score and attain a lead over the AI opponent, they 

might feel a sense of relaxation which decreases the anxiety level. Consequently, the 

system detects the change in the affective state and increases the difficulty accordingly. 

However, the most crucial difference to the performance-based implementation could be 

attributed to the fact that the difference in anxiety level when the player achieves a small 

numeric lead might be much more significant than estimation of performance from the 

score difference in the performance-based solution, when considering the same scores for 

player and AI. This could cause the match to become much more competitive in the affect-

based version, as the AI opponent would present a much higher difficulty even when the 

player attains small leads. 

Additionally, players reported that the affective version was more satisfying. In 

the same sense that a real-time anxiety based metric can adjust the difficulty based on an 

increase of the tension level, it could also be able to identify moments where players feel 

more relaxed, an affective state which can cause boredom if maintained over a prolonged 

duration, as discussed in the earlier sections of this chapter. Combining this with the ear-

lier discussed fact that a match can become much more competitive due to the discrepancy 

between anxiety levels and performance statistics, the player might feel a higher sense of 

reward when achieving victory over an opponent which is perceived as more challenging. 

2.3.2.2 Analysis of Positive and Negative Aspects 

Considering the results of the affect-based DDA implementation in comparison 

to the traditional approach of performance-based metrics, we can begin to identify some 

of the advantages of using real-time tracking of physiological signals and affective state 

classification in regards to the restrictions that are inherent to event-based capturing of 

gameplay data. 

We can begin by arguing that affect-based metrics might not require the same 

amount of data or time to be used as input by adjustment policies in comparison to 

performance-based metrics, as they are not bound to the rules or domain of a specific 

game. The gathering of physiological signals and classification of affective state is agnos-

tic to the object of study in itself, as it simply involves the external use of sensors and a

41 

classification methodology to output an estimate of the player affective state. 

The use of the information on such affective state must then be considered by game 

designers to determine which systems it might affect. In the work described by Liu et al. 

(2009), the affective state was used as input to adjust the difficulty of an AI opponent, but 

affective metrics are not restricted to being employed on difficulty adjustment systems. 

In contrast to traditional DDA implementations which involve metrics that are 

limited to the events of a game, the input in affect-based DDA approaches can be directly 

mapped to the desired changes in the affective state of a player. As discussed earlier 

in this chapter, the affective state of a player is one of the main constituents of player 

experience, which makes this approach especially interesting considering the objective 

of maintaining a challenging difficulty level to the player but at the same time avoiding 

frustrating situations. 

The implementation in Liu et al. (2009) involved real-time classification and vali-

dation of adjustment policies, which meant that the adjustments might occur in anticipa-

tion of undesired in-game events that can cause frustration. Therefore, it can be argued 

that this implementation defines a proactive adjustment methodology which might provide 

an immediate or preventive solution to possible frustrating events, when being compared 

to traditional performance-based adjustments. 

While the research on affect-based DDA showed mostly positive results in com-

parison to performance-based metrics, it could be argued that employing this type of 

solution in a commercial video game is not feasible, as current hardware used in modern 

video-game consoles does not include or support sensors capable of tracking significant 

physiological signals that can be used to determine affective state. 

If improvements in hardware used in video-game consoles evolve in the direction 

of including sensors that are able to track relevant physiological signals that can deter-

mine affective state, there is still the problem of appropriately integrating affect-based 

adjustments in the game development process. During play-testing sessions, the affective 

state has to be monitored and compared to the values that are expected by game designers, 

which creates restrictions and possible slowdowns in the iterative process of game design 

balancing and refinement. 

Furthermore, the game implementation used for the experiment is a simplistic 

game with limited audiovisual feedback. As discussed earlier, audiovisual feedback is 

one of the factors that can contribute to player experience, and consequently to the af-

fective state of the player. Therefore, research with affect-based DDA systems should

42 

be continued as to perform similar experiments in modern games with high audiovisual 

fidelity. Modern games are often able to evoke a multitude affective reactions by immers-

ing the player with more recent technology, features or systems such as cutscenes 8 or 

visual and audio effects, and the integration of affect-based adjustments in modern games 

can prove to be a challenging task, as it might not involve simple adjustments in difficulty 

parameters. 

2.3.3 Learning-based DDA Systems 

Another approach to adaptive difficulty involves the adaptation of AI (Artificial 

Intelligence) agent behaviors through reinforcement learning. 

2.3.3.1 Methodology and Results 

The implementation of learning-based DDA by Tan, Tan and Tay (2011) adjusts 

the behavior of AI agents in a simple car simulation race game, where each player has 

the objective of passing through the maximum number of waypoints9 in a given amount 

of time. Multiple waypoints are displayed on the screen at all times, and a waypoint 

disappears when any of the players approaches close enough for interaction range. 

The AI agents implemented define two types of behavioral AI components. The 

first type is defined by components associated with driving functionality, with the objec-

tive of improving driving performance of the controller. The second type is associated 

with behavioral components that affect the tactical decisions of an AI agent, and have the 

purpose of performing actions that outplay their opponent. 

Driving behavior components ignore the existence of the opponent, instead focus-

ing on simply performing actions required to drive the car. Tactical behavior components 

help the AI controller decide which waypoint to head to, or if the controller should not 

8A cutscene is a special in-game event where the player is unable to input control into the game, and audiovisual feedback is a result of an automatic, predefined sequence of events determined by the game developers. Cutscenes can be seen as parts of a game that are similar to a movie, where the game is not interactive and instead focuses on telling a part of the story. 

9A waypoint is a special position in a game world where an in-game event is toggled when the player is within interaction range. Waypoints are commonly used in games when the player has to take a specific path to a goal, with the game assigning several intermediary positions the player has to pass through to validate that the correct path was taken. In the context used for the implementation presented in Tan, Tan and Tay (2011), waypoints are simply game world positions the cars must reach to score points. Each time one of these positions is occupied by a car, the waypoint is destroyed and a new random position is assigned elsewhere in the game world as the next waypoint.

43 

head to a waypoint at all. In a more general perspective, the Driving Behavior compo-

nents can be seen as the mechanical input of AI agents in the game, whereas the Tactical 

Behavior components influence the high-level decision making process of the AI agent. 

In total, 7 components were implemented, with 3 being driving behavior com-

ponents and 4 being tactical behavior components. Each component is restricted to ex-

ecuting a set of actions that does not conflict or override actions of other components, 

which means it is possible to define an AI agent that uses all the behavior components 

implemented for the application. 

To evaluate the performance of each component, two evolutionary computation al-

gorithms are implemented: the adaptive uni-chromosome controller (AUC) and the adap-

tive duo-chromosome controller (ADC). The advantage of using such algorithms is that 

the training and adaptation process can be performed online and in real time, over the 

course of a game session. 

Each chromosome in the AUC and ADC algorithms stores seven real numbers 

representing the probability of activating a behavioral component whenever a waypoint 

is passed. Two metrics are used as an input for the adaptation algorithm: first, a mini-

mization of the winning percentage difference (|W - L|, where W represents the wins and 

L represents the losses) and second, a minimization of the mean score difference (|s1-s2| 

where s1 and s2 represent the scores of player 1 and player 2). 

To evaluate the efficiency of the adaptation algorithms, the authors first compared 

the strongest AI agent that the adaptive system would possibly generate (which would be 

defined by enabling all behavioral components simultaneously and permanently) against 

five static AI controllers based on various traits that would simulate various styles of play, 

such as heuristic controllers, reverse-enabled controllers, predictive fast controllers, and 

neural network controllers. 

Sets of n = 5000 games were played for each opponent in each step of the experi-

ment. Through the first step of the experiment, the authors validated that a fully-enabled 

adaptive AI controller (having all the behavioral components activated at all times) was 

a competent opponent with positive median score differences against all static AI con-

trollers. 

In sequence, the authors conceptualized AI agents where behavioral components 

were activated randomly whenever a waypoint was crossed. The objective of this ap-

proach was to demonstrate that some sort of adjustment algorithm that considers opponent 

strategies is necessary for different types of opponents, as randomly assigned behaviors

44 

are not able to present consistent results against a fixed strategy. Results showed that the 

random behavior selection algorithm had negative median score differences against all 

five static controllers. 

In the third step of the experiment, the authors evaluated the use of the AUC algo-

rithm. The expected behavior set encoded by a chromosome as a result of the algorithm 

should represent a "winning" strategy. Effects of varying Learning Rate and Mutation 

Rate were documented for the experiment, showing that the general trend of increasing 

learning rate is a gentle increase in the mean score difference, since a large learning rate 

quickly saturates chromosome values. Higher mutation rates tend to produce larger dif-

ferences in mean score and winning percentage by producing large fluctuations in chro-

mosome values. In general, high mutation rates led to poorer results. 

In the final step of the experiment, the use of the ADC algorithm was evaluated, 

with the same idea of varying the Learning and Mutation Rates. For the ADC algorithm, 

no trends were perceived in association with varying Learning rates. This would likely 

have been caused by the reduction of the frequency of update opportunities for each chro-

mosome. In the ADC algorithm, only one of two chromosomes is updated each time 

a waypoint is passed. This means that on average each chromosome is updated half as 

frequently as chromosomes in the AUC variant. As for the Mutation rate, the results of 

the ADC controller improved greatly as mutation was introduced, possibly because the 

mutation operation offered more opportunities for the chromosome values to adapt. 

As a conclusion to the experiment, the authors expressed that while the AUC al-

gorithm had lower memory footprint, the ADC algorithm was able to better minimize 

the number of drawn games, which would possibly reduce player frustration. It was also 

noted that both the AUC and ADC algorithms were able to generate specific patterns of 

behavioral component distribution for each of the static controller stereotypes, meaning 

that the Reinforcement Learning technique would be able to adapt to different styles of 

play. The general intent of both algorithms was not to maximize the number of wins, but 

to maintain a fair and close challenge to the opponent by minimizing the score difference 

as well as the difference between number of wins and losses. 

2.3.3.2 Analysis of Positive and Negative Aspects 

The work presented by Tan, Tan and Tay (2011) introduces the novelty approach of 

online learning without predefined data sets to the scenario of DDA solutions. It could be 

argued that the adjustment policies are also part of the reinforcement learning approach,

45 

since the decision of a behavioral component being activated or not relies on the algorithm 

being applied. This is an especially interesting solution since it lessens the responsibility 

of a game designer tailoring the boundaries of the adjustment system in advance of play. 

One interesting application to methods which implement online learning without 

predefined data sets would be highly popular online multi-player games, where data from 

thousands of matches can be gathered each day, which provides a massive amount of input 

for training algorithms. This can be used to speed up the process of training AI agents to 

perform the most appropriate actions given a situation, which in turn will provide a more 

competitive challenge to players. 

However, we argue that this experiment has yet to be applied in the context of real 

players using an implementation that would better replicate a commercial video game 

product. Learning algorithms might require a long time to train agents to the point of 

providing a fair challenge to players, which might cause frustration and negative bias in 

player perception regarding the AI design. 

Additionally, the work implemented by Tan, Tan and Tay (2011) uses a simplistic 

game implementation as an object of study, where the objectives and available actions are 

restricted to few options which simplifies the implementation of behavioral components 

and in consequence reduces the amount of data, processing and time to train agents. 

In modern video games which present sophisticated AI solutions, the amount of 

information regarding game state and actions that a player or AI agent can perform can 

be dramatically higher in comparison, which means that the amount of behavioral com-

ponents would be much higher, and consequently result in an exponential increase in the 

amount of data, processing power and training time – to the point of becoming unfeasible 

to integrate in a project, as modern games commonly allocate most processing power of 

hardware to the execution of its rendering and gameplay systems. 

Another problem surfaces when considering balancing and adjustments of AI op-

ponents by game designers under the iterative nature of the game development process. In 

the specific case of the implementation by Tan, Tan and Tay (2011), as in-game parame-

ters such car speed and handling are modified, the data which defined the training sets for 

AI agents might have to be discarded, as actions that would previously define a winning 

strategy could become obsolete by the changes in car physics. 

Therefore, simple adjustments to the balancing of a game might cause the learning-

based AI to have to be re-trained. Since the balancing of a game is also dependant on the 

difficulty of AI opponents, which in this case is defined by data accumulated from multiple

46 

matches, integrating such a process in iterative game development becomes unfeasible, as 

small changes to the game would cause all AI opponents to become unbalanced. 

2.4 Adaptive Systems In Commercial Games 

Several commercial games have attempted to create Dynamic Difficulty systems 

which embrace varying degrees of player skill, such as Mario Kart10, Half-Life 211, Resi-

dent Evil 412 and God Hand13. In this section, we look at examples of Adaptive Systems 

in some of the most popular games developed by the video game industry in the last 

decades. We categorize the solutions based on the genre of games where they are gener-

ally implemented in and the game mechanics and systems they affect. Additionally, we 

discuss some of the positive and negative aspects of each system, relating them with their 

variations and less popular implementations. 

2.4.1 Rubber Banding in Racing Games 

One of the most popular approaches to Adaptive Difficulty is found in games 

which implement rubber banding. This technique is most commonly seen in racing games 

that have artificial intelligence agents as opponents to the player. Rubber banding creates 

opportunities for players that are behind their opponents, where through the game me-

chanics and systems, a player is always in a position where it is possible to surpass their 

opponents when considering their possibility of achieving the win condition. Simultane-

ously, mistakes committed by a player that is ahead are magnified, which greatly affects 

their chances of winning. 

The existence of the rubber banding system in a game along with the perception 

it causes in players results in an increase of tension and focus, as the system creates the 

impression that the outcomes of a race (or any other form of competition) are never clearly 

defined. The term rubber banding derives from the analogy that entities are held together 

by a rubber band, so that they are never too far apart from each other when considering 

their chances to win. 

10Super Mario Kart 8 Deluxe (Nintendo, 2017). Video Game. Nintendo Switch. 11Half-Life 2 (Valve Software, 2004). Computer Game. Microsoft Windows. 12Resident Evil 4 (Capcom, 2004). Video Game. PlayStation 2. 13God Hand (Capcom, 2006). Video Game. PlayStation 2.

47 

2.4.1.1 Implementation and Design In Mario Kart 

One of the most widely known examples of rubber banding can be seen in the 

Mario Kart series of racing games. Mario Kart implements rubber banding through two 

different methods, affecting both players and AI opponents (COUTURE-PICHE, 2016). 

The first method compares the performance of players to AI agents in relation to their 

completion stage of a race, and only modifies the speed of AI-controlled opponents. The 

second method attempts to attenuate the discrepancy of skill between players, providing 

opportunities for less skilled players to close their distance to players which are ahead. 

In the rubber banding implementation which involves the adaptation of AI agents, 

if the player performs exceptionally well in a race and is far ahead of every AI opponent, 

the AI receives a significant speed boost that often surpasses the standard speed limits 

of the game. Through the minimap element in the user interface, the player is able to 

assess their distance to opponents at any time during a race. By being able to evaluate 

their position relative to enemies, players are constantly aware that any mistake may cause 

them to be surpassed by opponents, which increases their focus and creates tensions when 

traversing through difficult segments of a race track. In case the player performs poorly 

the AI is slowed down below their base speed, which causes the player to always be 

maintained within a reasonable distance to their opponents. In this case, the minimap 

serves as an estimation of the speed at which the player reduces their distance to opponents 

– which can motivate them to perform better. 

The second type of rubber banding implementation in Mario Kart is presented 

through the power-up system, and attempts to attenuate the issue of skill discrepancy 

between players. Throughout the race, players are provided with multiple randomly-

generated power-ups which can be used to speed-up, attack or defend against opponents. 

Speed-up pickups are favored to players who are far behind others, attack power-ups are 

prioritized to players in the middle positions, and defense power-ups are favored to players 

who are closer to attaining the first position. Players in the first position are generally 

provided the pickups which are most difficult to use effectively, such as traps which can 

be thrown backwards. This approach provides better opportunities for players who are 

lower-skilled, as the access to the most relevant distance reducing power-ups is limited to 

the competitors who are far behind – which effectively serves as a catch-up mechanic. 

The adjustment of the minimum and maximum speed for AI opponents is a com-

monly used implementation of rubber banding, and are prevalent in arcade racing games 

which target casual audiences that are not preoccupied with realistic physics or even chal-

48 

lenging races. Rubber banding systems can be observed in installments of some of the 

most popular racing games series such as Need for Speed14, Forza Horizon15 or even 

recent releases such as Horizon Chase Turbo16. 

Additionally, the success of Mario Kart resulted in the popularization of power-up 

based rubber banding, becoming a widely replicated method for adaptivity in the genre of 

combat racing games, such as Wipeout17, Crash Team Racing18 and Sonic All Stars Rac-

ing Transformed19. This is caused by the necessity of implementing catch-up mechanics 

that provides opportunities to lower skilled players in multi-player games, and the natural 

integration of performance-oriented resource distribution with the RNG-based nature of 

power-up acquisition in combat racing games. 

2.4.1.2 Alternative Implementations 

An interesting variation of rubber banding in racing games can be seen in the 

Split/Second20 racing game, which provides players with the opportunity to destroy spe-

cific objects in environments that surround race tracks, which may affect the performance 

of opponents that are ahead. This approach is interesting in the sense that it promotes 

the strategic use of environmental elements to the detriment of opponents. If a player is 

performing poorly in terms of reaction times or motor coordination, they might still be 

able to surpass opponents through a strategic approach. 

Rubber banding is not limited to the racing games genre, and is not necessarily 

restricted to interactions between players and AI. The Arms Race game mode in Counter-

Strike: Global Offensive21, a free-for-all mode where the game provides equipment to 

players based on their number of kills. As players kill enemies, they progress by being 

supplied with different weapons. Weapons in the later stages are harder to kill enemies 

with, either because of a lower amount of damage or a general difficulty to be used. This 

14Need for Speed: Most Wanted (Criterion Software, 2012). Video Game. PlayStation 3, Xbox 360, PlayStation Vita, Wii U. 

15Forza Horizon 4 (Playground Games, 2018). Video Game. Xbox One, Xbox Series X and Series S, Microsoft Windows. 

16Horizon Chase Turbo (Aquiris Game Studio, 2018). Video Game. Nintendo Switch, PlayStation 4, Xbox One, Microsoft Windows, Linux, Macintosh. 

17Wipeout HD (Psygnosis, 2008). Video Game. PlayStation 3. 18Crash Team Racing Nitro-Fueled (Beenox, 2019). Video Game. PlayStation 4, Nintendo Switch, Xbox 

One. 19Sonic & All-Stars Racing Transformed (Sumo Digital, 2012). Video Game. Xbox One, Wii U, Xbox 

360, PlayStation Vita, PlayStation 3, Nintendo 3DS. 20Split/Second (Black Rock Studio, 2010). Video Game. Xbox 360, PlayStation 3. 21Counter-Strike: Global Offensive (Valve Software, 2012). Computer Game. Microsoft Windows, 

macOS, Linux.

49 

causes players in the beginning levels to be able to slowly catch-up with player that have 

progressed further. 

The first player to complete the final stage in Arms Race wins the match, which 

involves eliminating an enemy with a knife. This requires the player to reach melee range 

before being able to deal damage, which is hard to perform in a first-person shooter game 

as enemies are likely to perceive and eliminate the player before they are to close the 

distance. 

Rubber banding is also not restricted to strictly competitive systems, as it can 

also be used to reduce progression disparity between players or AI. In the MMORPG 

(Massively Multiplayer Online RPG) Final Fantasy XIV22, players below the maximum 

level are awarded bonuses in experience points received when defeating enemies, com-

pleting missions or finishing instanced content such as dungeons and raids. Additionally, 

the game promotes incentives for higher level players to join lower level players in the 

completion of instanced content by rewarding a lower but significant amount of bonus 

experience points and in-game currency. This causes the game to always provide a steady 

progression curve for players of all levels, while also keeping an active player base that is 

encouraged to provide assistance to beginner players. 

As can be evidenced by the examples presented in this section, the existence of 

rubber banding implies that the game has some sort of progression disparity between 

players or AI agents, even if the game is a single-player23 or cooperative24 experience. 

Rubber banding solutions can be considered the equivalent of catch-up mechanics25 from 

board (or "tabletop") games, which are commonly used to attenuate the runaway leader26 

problem. 

22Final Fantasy XIV: A Realm Reborn (Square Enix, 2013). Computer Game. Microsoft Windows, PlayStation 3, PlayStation 4, Xbox One, PlayStation 5. 

23A single player game is a video game where the input processed by the game is received from only one human user (player) during the course of a game session. All entities the player interacts within the game world are non-player entities. 

24Cooperative games are games in which the input is received from multiple human users (players), with each player controlling a different in-game entity. The players share a common objective, and must cooperate by combining their available commands and actions to achieve the winning condition. 

25Catch-up mechanics are game systems or rules designed to reduce the discrepancy in the closeness to the winning condition between the leader of a match (the player who is closest to achieving the winning condition) and the rest of the players. One example of a catch-up mechanic are speed-boosting items in racing games such as Mario Kart, given to players at the last positions to reduce the distance to other opponents. 

26The runaway leader problem is a common issue in multiplayer games where the leader of a match becomes uncontrollably faster in progressing towards the winning condition in comparison to other players. In this state of a match, unless an appropriate catch-up mechanic is put in place, players are unable to surpass the leader of a match as an outcome of their own decisions, and thus the game outcome is determined before the end.

50 

2.4.1.3 Analysis of Positive and Negative Aspects 

Rubber banding provides a possible solution to attenuate skill discrepancy be-

tween players in multi-player games, where beginner players which perform poorly are 

provided more opportunities to close the gap to higher skilled players. Therefore, it 

improves the competitivity of matches, inducing focus and tension to veteran players 

when competing with beginners as it enforces the reduction of mistakes and risks taken 

in decision-making. 

Implementations of rubber banding methods are not limited to racing games, as 

discussed in section 2.4.1.2. Instead, they attempt to solve or attenuate the runaway leader 

problem, where a player attains such a significant lead that the actions performed by their 

competitors would not change the outcomes of the match. In this situation, the opponents 

of a runaway leader would have no reason to continue playing, thus the game would not 

present an interesting experience. Therefore, it becomes evident that catch-up mechanics 

are essential when the achievement of the win condition for a game involves some type of 

incremental progression, such as traversing through a race track, accumulating resources 

or achieving a certain number of eliminations. 

The complexity of a rubber banding implementation depends on the complexity of 

the game mechanics and systems it affects. For instance, in racing games rubber banding 

will typically involve simple adjustments to individual in-game parameters such as mini-

mum or maximum speed. Because of the simplicity of the adjustments performed in such 

game genres, rubber banding implementations can be easily integrated into the iterative 

nature of the game development process, as game designers are quickly able to understand 

and adjust the values for parameters that are modified, and perform play-testing sessions 

to understand and correct possible issues. 

Adjustment methods that involve simple modifications to parametric values can 

be customized with ease, as individual values can be defined depending on the scope that 

game designers propose to affect: per-level, per-session, per-user or even per-agent. In 

another perspective, the same parameters can also be replicated throughout multiple levels 

without game designers performing additional manual adjustments, which is a positive 

aspect considering the scalability of the production of new game content. 

While rubber banding is an interesting and creative effort that increases the com-

petitivity in matches between players of varying skill levels, player knowledge about the 

existence of such an algorithm might induce the creation of meta-game strategies. In a 

combat racing game, players that become aware of a rubber banding system might pur-

51 

posefully avoid the first positions to retain the best power-ups until the last moments of 

a race, in order to have access to mechanisms which have a higher chance of changing 

the outcome of a race in their favor at a critical point. This situation elicits the problem 

of meta-gaming in adaptive systems: when the adaptive systems are well-known by the 

users, exploits become a part of player strategy. 

Because of the popularity of rubber banding implementations in racing games and 

the longevity of the existence of such methods, their existence is widely known throughout 

a significant portion of intermediate and veteran audiences. In consequence, the knowl-

edge of their existence might reduce the interest of competitive players in relation to ar-

cade racing titles, since rubber banding solutions might create a sense that a highly skilled 

player has their performance affected for the benefit of beginner players. 

2.4.2 Multiple Adaptivity Layers in Resident Evil 4 

Another interesting approach to adaptivity is seen in Resident Evil 4, where re-

source distribution, AI behavior and enemy encounters are affected by different sets of 

information regarding player context and performance. Each system is affected by a 

different set of contextual metrics, and may enable or disable certain gameplay aspects 

independently based on the values presented by such metrics. 

2.4.2.1 Dynamic Resource Distribution 

The Dynamic Resource Distribution System affects RNG (Random Number Gen-

eration) systems by modifying the chances of certain items being distributed when a 

player interacts with containers or defeats an enemy. The list of items which have their 

spawn chances modified depends on the current status and context of the player such as 

their health and the items in their inventory. 

For instance, if the player has a low amount of health and no health recovery 

items in their inventory, the Dynamic Resource Distribution system modifies the chances 

of health recovery items being distributed. If the player has a stabilized amount of health 

but lacks a specific ammunition type, the game prioritizes the distribution of such ammu-

nition type for the player. If the player is not in a dangerous situation and has surplus 

ammunition, the game prioritizes gold coins, which can be used to purchase powerful 

weapons and weapon upgrades.

52 

In the landscape of commercial games, Dynamic Resource Distribution Systems 

are one of the most prevalent adaptive systems types, due to: 

 Their ease of implementation, which involves monitoring of contextual values for 

player status and performance and simple modification of statistical values; 

 Their straightforward process of adjustment, in which the values can be easily un-

derstood and tailored by game designers between playtests; 

 The possibility to integrate them in the iterative nature of the game development 

process, where values can easily be adjusted between multiple play sessions; 

 The fact that the balancement of resource distribution can be replicated througout 

multiple sections of a game; 

 The fact that they are abstract in nature, meaning that players have difficulty recog-

nizing their existence or the complete extent of the modifications they perform. 

 Their relation with RNG item distribution chance tables, where the factors that 

influence the chances for each element are ambiguous even for veteran players. 

Examples of other successful games that also use Dynamic Resource Distribution 

Systems include Half-Life 2, where resources are spawned in containers such as destruc-

tible boxes based on player health and ammunition; Left 4 Dead, where the spawn points 

of weapons, ammunition and health kits are toggled in fixed spots based on how well the 

team is performing throughout a level; and Diablo, where the rarity of items dropped by 

defeated enemies depends on the level, modifiers and rarity of the enemy. 

In the specific case of Resident Evil 4, Dynamic Resource Distribution may ben-

efit beginner players by providing a steady supply of health and ammunition resources 

during sections of the game with intense combat encounters. The system always priori-

tizes the most important necessity for the player at a given moment, and as players are 

able to defeat enemies during a combat encounter, they are be supplied with ammunition 

and recovery items to be able to continue through a battle. For higher skilled players 

which are able to maintain a steady level of resources at their disposal, the game rewards 

performance with gold coins, which enables weapon upgrades that increase the efficiency 

at which the player is able to dispose of enemies. 

Some of the problems involving the implementation of Dynamic Resource Dis-

tribution in Resident Evil 4 can be analyzed through the perspective of beginner players 

when facing challenging sections of the game. In such sections, beginner players gener-

ally need to spend a higher amount of resources due to the large amount of enemies and

53 

their lack of knowledge on how to dispose of multiple enemies. As the player progresses 

through the combat encounter, they will likely lose significant amounts of health and am-

munition. Therefore, resources will be constantly depleted from the player inventory, 

which is an expected result from the perspective of the Dynamic Distribution System. 

However, the main problem with resource distribution becomes evident when con-

sidering the flow of events in challenging combat encounters. Generally, at an initial point 

of the encounter the easiest enemies are spawned, and will most likely drop less necessary 

resources such as gold coins when defeated. After multiple waves of enemies the player 

may start to run out of resources, and at the same time progresses closer to the critical 

points in the encounter, such as facing special enemies that are harder to dispose of. 

Since resource distribution is limited to the events of destroying containers and 

defeating enemies, beginner players that are unaware of the resource distribution system 

might destroy all containers at the beginning of an encounter, which causes the only re-

source distribution source to be the defeated enemies. At that point, tougher enemies 

which cause the player to generally lose more health and spend more ammunition might 

drain the player of all their resources before they are defeated. 

In such situations, a beginner player would benefit from the ability to perform 

item hoarding, where the player accumulates resources over easier sections of a game 

to be spent on the more challenging levels. Because of the way resource distribution is 

implemented in Resident Evil 4, item hoarding becomes harder to perform, since as the 

player accumulates health or ammunition resources the game will prioritize distributing 

low necessity items such as gold coins. 

Additionally, a player that is aware of an adaptive distribution system might ex-

ploit the game by choosing to not loot items purposefully. By maintaining their resources 

at a controlled level, veteran players can prioritize the use of their inventories for impor-

tant weapons and items, and force the system to distribute important resources at critical 

points in the game such as before an encounter with a large group of enemies. However, 

it can be argued that this characteristic can also be a benefit to highly skilled players, 

where good management of resources throughout the game can lead to rewards in terms 

of combat performance, as the player will possess better weapons and upgrades at their 

disposal.

54 

2.4.2.2 Dynamic AI Behaviors 

The Dynamic AI Behaviors system affects the actions performed by AI-controlled 

entities based on player performance and habits. In Resident Evil 4, players are able 

to increase their damage output and cause enemies to become staggered and unable to 

attack by shooting at their heads. When staggered, the player can also perform a kick 

attack, which causes enemies to fall into the ground for a significant amount of time. 

If a player is constantly able to defeat enemies easily by shooting their heads or 

without spending significant resources such as ammunition and health recovery items, 

enemies will start to perform new actions such as attempting to dodge or even using 

their hands to block bullets. Additionally, enemies in later stages of the game will also 

equip protective apparel such as helmets and shields depending on player accuracy, which 

hinders the ability of the player to deal damage and cause staggers. 

Although the new actions and equipment presented by enemies can become an 

obstacle for effectiveness, they are not overwhelmingly difficult to handle. An experi-

enced player can still be effective and shoot enemy heads with precision if they are able 

to predict enemy movement, react to character animations and use the proper weapons for 

each equipment. 

Therefore, instead of simply increasing the difficulty to an overwhelmingly high 

level of challenge, the implementation of Dynamic AI Behavior System in Resident Evil 

4 causes the game to increase its skill ceiling27 in an interesting way, enabling interesting 

situations in enemy encounters that can provide variety and challenge for experienced and 

highly skilled players. 

Additionally, the new actions performed by enemies after Dynamic Behavior ad-

justments are in-world elements that contribute to the believability of enemy behaviors, 

since they aesthetically portray the intent that enemies are trying to protect vulnerable 

body parts from player firearms. Therefore, instead of the player perceiving the new ac-

tions as part of a system, they are given the information that enemies are progressively 

becoming more intelligent to be able to deal with the player, which improves immersion. 

In regards to the adaptivity of armor pieces wielded by enemies, the equipment 

used in later sections of the game presents harmony with the thematic aspects of the 

environment in comparison to preceding sections. In the early sections of Resident Evil 

27The skill ceiling refers to the hardest level of difficulty the game presents to the player in any spe-cific level. In games which involve combat, the skill ceiling is tipically defined by boss fights or combat encounters in the later stages of the game.

55 

4, the player traverses through small villages in a rural environment where most enemies 

are farmers, and thus less likely to wield any type of armor. The second segment of 

the game is located within a castle, where enemies are more likely to wield specific armor 

pieces such as shields and helmets, which protects them from attacks targeted at their body 

and head, respectively. In the final segments of the game, the player faces enemies that 

represent rebel soldiers, which wield protection that is effective against heavy firearms. 

Therefore, the adaptivity in enemy equipment can easily be abstracted by the player given 

the thematic context of each game segment. 

To implement the Dynamic AI Behavior System, Resident Evil 4 uses a skill rating 

system called Game Rank, which is increased or decreased according to aim precision 

and level completion time (CAPCOM, 2006). The metrics that constitute Game Rank 

are exposed to the player after the completion of each level, and aggregated to a final 

rating score. The fact that the existence of such metrics is explicit to players can be a 

detrimental factor when combined with the gameplay aspect of new actions performed by 

enemies when players achieve a highly positive performance. 

While protective enemy animations can be considered in-world elements that con-

tribute to player immersion, it can be argued that since they purposefully communicate 

their intent to players, there is an increase in the chance of the player being able to recog-

nize and correlate the existence of new enemy actions with the metrics exposed after the 

completion of levels. Veteran players and speedrunners often exploit Game Rank by miss-

ing shots on purpose, artificially lowering their precision value. This causes the game to 

constrain enemy behavior to predictable movement patterns, where shooting enemy heads 

is easier than in a standard play through. 

This is another example of meta-game strategies in adaptive solutions, where play-

ers that are knowledgeable of the adaptive systems attempt to exploit it to constrain the 

behavioral patterns of AI agents. In comparison to the example discussed about the distri-

bution of power-ups in Mario Kart in section 2.4.1, exploitability in Dynamic AI Behavior 

Systems have a less relevant collateral effect since such systems are commonly restricted 

to single-player games, where the decisions of a player do not affect the outcomes of 

actions for another player. However, players that have knowledge of Dynamic AI Be-

haviors might still be able to modify their playing style to manually adjust the challenge 

level and make certain segments of the game easier, which goes in disagreement with the 

level of challenge proposed by game designers and causes the player to break their own 

immersion.

56 

2.4.2.3 Dynamic Encounters 

The Dynamic Encounters System modifies the placement of enemies in levels, af-

fecting the difficulty of encounters by enabling or disabling the instantiation of certain 

enemies in game sections where the player engages a combat situation. If the player re-

peatedly dies in a specific combat encounter certain enemies spawns are disabled, making 

the encounter much less frustrating. 

In general, long range enemies such as crossbow wielders which are hard to reach 

or take a longer amount of time and resources to eliminate are the first to be disabled 

since there is no direct or easy method for the player to avoid them. Additionally, the best 

weapon type to deal with enemies at a long distance would be the sniper rifles, which 

are bound to long aiming animations and slow crosshair movement. Since the player is 

unable to perform movement while aiming in Resident Evil 4, enemies wielding melee 

weapons are able to close their distance to the player during the time where the player 

attempts to aim at a long range target. 

The second type of adjustment performed by the Dynamic Encounters System 

involves the enabling or disabling of ambush-type enemies, which are only instantiated 

outside of the player field-of-view. If the player is performing well and accumulates a 

significant amount of health resources, ambush-type enemies are enabled to cause the 

perception that even though the player is skilled enough to deal with direct combat en-

counters, there are still traps and surprising situations that might cause the player to be 

defeated. Contrary to the removal of long range enemies when the player repeatedly dies, 

ambush-type enemies are designed to drain the player of resources and increase the ten-

sion throughout levels. Since these enemies are harder to perceive, they will often be 

harder to react to and cause the player to perform incorrect actions or input. 

Dynamic Encounters are one of the best solutions for situations where the player 

is unable to surpass a specific encounter or challenge even with alternative forms of adap-

tation, thus requiring some sort of assistance in the form of immediate adaptation. One 

example for such situations is when a player is fails a level multiple times, which is an 

especially frustrating defeat scenario since the player is repeatedly traversing through the 

same environments, and attempting to defeat the same enemies. Changes in the placement 

or number of enemies can greatly affect the level of challenge of a combat encounter, and 

the entities that cause the most impact can be directly removed, replaced or repositioned 

– which can significantly improve player performance under specific game sections. 

Dynamic Encounters also encourage replayability due to the fact that it can gen-

57 

erate different combat encounters in the same level or section. A player that becomes ac-

customed to mechanics and systems over the course of a game will likely perform better 

during a second playthrough. Since the metrics that generally affect dynamic encounters 

are related to player performs, in a second playthrough it is likely that the player faces 

new combat encounters, where the same sections that the player previously traversed will 

present more challenging enemies or even modifications in the environmental layout. 

Dynamic Encounters are one of the adaptive systems which are most sensitive to 

modifications, since small changes in the placement or number of enemies can greatly in-

crease or decrease the difficulty of an encounter. Additionally, they can also significantly 

magnify the difficulty levels from other adaptive systems such as Dynamic AI Behav-

iors or dynamically adjusted enemy damage. Because of this sensibility to modifications, 

Dynamic Encounters are one of the hardest adaptivity methods to balance, since they 

require per-encounter play testing and iteration through multiple player skill levels to ap-

propriately validate that the increase or decrease from altering an encounter appropriately 

reflects the proposed challenge level for a player. 

Dynamic encounters also present issues related to the difficulty of being abstracted 

to players.Modifications that involve disabling, replacing or repositioning entities are 

some of the easiest types of adaptivity to perceive, as when repeatedly playing through the 

same game section the player is able to memorize enemy positions, movement patterns 

and even plan strategies that consider the existence of specific enemies. Consequently, 

players might feel frustrated with the fact that the game forcefully lowers the difficulty by 

modifying encounters without their consent, with the implicit classification of the player 

as not skilled enough to overcome the challenge level. 

While Resident Evil 4 received mass critical praise for its outstanding game de-

sign and successful adaptive approach, it is noteworthy that a community of dedicated 

speedrunners has been able to accurately reverse engineer and exploit its DDA systems 28. It can be argued that given enough dedication, there is no DDA system which is 

completely unknown to players. However, since the reverse engineering process requires 

extensive experimentation on behalf of players, we can assume that the system will re-

main mostly obfuscated to novice players experiencing their first play through, which is 

critical to maintain immersion and player engagement. 

28Speedrun.com Resident Evil 4 (Console) Guides. Rank and Difficulty Adjustment Anaylsis (https://www.speedrun.com/re4console/guide/3sahj)

58 

2.4.3 Explicit Adaptivity in God Hand 

In God Hand, the developers approached the difficulty issue explicitly by making 

the player constantly aware of the current challenge level (BYCER, 2012). A difficulty 

meter is presented to the players as an User Interface element containing 3 difficulty lev-

els. Whenever the player hits an enemy, the meter slightly increases. When the meter is 

full, the difficulty level is incremented and enemies become faster, introduce new behav-

iors and deal more damage. When the player takes damage, the difficulty meter is quickly 

decreased and will often reduce the current difficulty level. 

When the difficulty level is maxed out, enemies perform their attacks faster than 

the player character is able to dodge. Thus, to beat the highest level of difficulty the player 

must devise a strategy that does not rely entirely on their own reflexes or motor skills, and 

must execute such strategy accordingly. Whenever the player beats an enemy, they are 

rewarded with an amount of points and coins based on the current difficulty level, which 

can be used to purchase new attacks, special moves or upgrades to their attributes. 

Instead of attempting to abstract the adaptive system, the developers explicit it as 

a system that players should engage with, and encourage players to reach the highest diffi-

culty level to achieve better rewards. It can be argued that the Dynamic Difficulty System 

is a game in itself, where players attempt to maintain long streaks of combat encounters 

in the highest difficulty levels possible to maximize their rewards. Therefore, the system 

creates incentives for players to increase their own skill level through unlockable features. 

This is a particularly effective solution for the issue of players attempting to ex-

ploit adaptive systems. Instead of simply trying to finish gameplay sections through the 

easiest method possible, players will push their skills to the limit to maintain the highest 

difficulty possible for as long as possible to achieve maximum rewards. In addition, it 

also tackles the issue of the difficulty curve for a specific difficulty mode diverging from 

player expectations. By being aware of the adaptive difficulty system, players know that 

if the game becomes too easy it is a product of their own skill level and decision-making 

process, which reduces the frustration with an inappropriate difficulty level. 

However, this approach presents collateral issues when considering the resources 

that are distributed to the player and the relation of the adaptive system with the difficulty 

of non-adaptive elements in the game such as the level layouts. First, because of how 

beat ’em up29 games are generally designed, the main resource that the player possesses 

29Beat ’em up games is a subgenre of action video games which traditionally involves melee-range com-

59 

for dealing with enemies is their Health attribute, since the depletion of such resource 

characterizes the loss condition. During combat encounters with enemies, the player may 

have a higher or lower amount of this resource depleted depending on the difficulty of the 

encounter and the performance of the player with such an enemy. 

There are certain items distributed throughout levels in God Hand that are able 

to recover a percentage of player Health. These items can be found by destroying static 

objects such as barrels and boxes, interacting with objects such as doors and chests, or by 

defeating enemies. The distribution of items is dynamically adjusted based on the neces-

sity of a player for such resources. When the player is low on health, the game prioritizes 

distributing health recovery items, whereas when with a high amount of health the game 

will prioritize the distribution of items that can increase their in-game currency. The dif-

ficulty level does not influence which items are distributed to the players, which means 

the amount of the Health resource which is distributed to the player does not depend on 

the difficulty level of combat encounters, instead depending only on the current value the 

player possesses for the attribute. 

Therefore, a conflict occurs due to the nature of the adaptive difficulty system 

and the adaptive resource distribution system: in higher difficulties, a player will most 

likely spend a higher amount of the Health resource. Since the higher difficulties do not 

modify the distribution of health recovery items, a player that is doing well and achieves 

the higher difficulty levels is likely to require a higher amount of recovery items, which 

can be harder to attain at combat situations where enemies are faster, smarter an deal 

more damage. In such combat situations, it is likely that the player is unable to gather 

health recovery items before an enemy successfully deals a lethal attack. In a sense, it can 

be considered that skilled players might be punished for a highly positive performance, 

whereas an average player that is unable to achieve the higher levels of difficulty has a less 

frustrating experience during combat encounters, as enemies are less likely to successfully 

land lethal attacks to the player before they are able to find health recovery items. 

Another problem surfaces when considering the non-adaptive difficulty of God 

Hand, which is defined by level design. In game development, it is common for game 

designers to design levels that ramp up in challenge over the course of their duration, as 

discussed in section 2.2.3. This is done so that the newer challenges (such as a new en-

emy type) that are introduced at each level can be analyzed by the player in constrained 

bat between the player and multiple groups of oponents, which are spread out in level sections. Traditional beat ’em up games involve two-dimensional movement in horizontally scrolling levels, often with a two-player cooperative multiplayer mode.

60 

environments, where the player can isolate their concerns to focus on learning the char-

acteristics of the new challenge that is presented. As the player progresses in a level, 

the newly introduced challenges are slowly integrated with the elements that the player 

succeeded to overcome in previous levels. Thus, the dynamics of player interactions with 

enemies starts to become more complex over the course of a level, which causes the dif-

ficulty of the game to increase. 

During the last sections of a level, it is common for game designers to employ 

some sort of final challenge which has a difficulty level significantly higher than the earlier 

stages. This increases the tension experienced by the player, but also increases the sense of 

being rewarded upon completion as the player feels like they overcame a major obstacle. 

In God Hand, this characteristic of level design creates friction with the adaptive difficulty 

system. As the level begins, the players starts in the lowest adaptive difficulty level, where 

enemies present the slowest and simplest behaviors, and deal less damage. 

However, if the player performs exceedingly well as the level progresses, they may 

find themselves in a situation where the natural increase of challenge caused by common 

level design practices is magnified by the increase from the adaptive difficulty system, and 

thus a section of a level with significantly higher difficulty than its earlier sections may 

become an insurmountable challenge for a highly skilled player. Therefore, a positive 

performance from the player in earlier sections may hinder their progress in later sections 

of a level, which may cause the player to purposefully perform worse in earlier sections 

to adjust the difficulty of later sections of a level. 

2.5 Conclusions 

In this section, we summarize the concepts relating to adaptive systems which 

were explored in previous research. We evaluate the general aspects of adaptive system 

implementations in research and commercial games, and provide a comparison of the 

general characteristics of each solution. We synthesize a set of guidelines for the concep-

tion and implementation of DDA systems, and conclude by analyzing the possibilities for 

improvement or exploration of new solutions on DDA.

61 

2.5.1 Summary of Explored Concepts 

We explored the definition of player experience using analogies to the concept 

of User Experience. We discovered the recently explored concept of Playability, where 

player experience can be affected by several factors such as emotion, motivation, im-

mersion, difficulty, learnability and satisfaction. We specifically analyzed the impact of 

difficulty on player experience by understanding that failure has consequences in player 

emotion, as punishment mechanics can be the source of anxiety and demotivation, which 

is added to the frustration of repeatedly trying and failing. We also analyzed the case 

where the player skill level is above the challenge presented by a game, which causes 

boredom. 

We related these observations to the widely studied concept of Flow, where the 

existence of a state of intense focus is described, which causes enjoyment and fulfillment. 

We learned that for a player to achieve the State of Flow, the challenge level proposed by 

a game has to be in general accordance with the skill level of the player. 

As a consequence of the desire to induce player into the State of Flow, we learned 

about the concept of learning curve, where the challenge level of a game is tailored for 

game designers to provide players with the opportunity to incrementally learn and im-

prove upon the use of game mechanics and systems, thus attempting to maintain the level 

of challenge of the game bound to the knowledge of the player. 

We evidenced the fact that the balancing the difficulty and learning curves for a 

game is a complex problem which is generally solved by targeting player stereotypes, but 

this solution often does not accommodate specific characteristics of players. We argued 

that specific player needs can be addressed through the use of Adaptive Game Systems. 

The work described by Charles et al. (2005) conceptualized a standard design for 

the development of adaptive systems, by defining the concept of dynamic player models 

which consist of data regarding the characteristics of a player. The model can be generated 

through data that is acquired outside of the execution of an application, or through the 

monitoring of player actions and in-game events. Over the course of play sessions, models 

are updated to represent the current characteristics of a player. 

In the work of Missura (2015) adaptive systems are further explored with the con-

cepts of metrics and adjustment policies. The data that consists a player model can gen-

erate metrics in the domains of player profile, performance or preferences. Such metrics 

can be used as input to adjustment policies, which serve as thresholds or quantifiers to the

62 

adjustment of in-game parameters that adapt the contents of a game to the necessities of 

a player. 

It is argued that the general methodologies used in Adaptive Systems can be ap-

plied in the form of Dynamic Difficulty Adjustments, which can be used to accommodate 

the skill level of a player to the challenge level proposed by game designers, alleviate 

steep learning curves, reduce frustration and anxiety and even provide a competitive level 

of challenge to veteran or highly skilled players. 

2.5.2 Evaluation of DDA Systems in Research 

Through the analysis of the results and the positive and negative aspects of com-

mercial solutions for DDA systems, we can observe general positive and negative trends 

that can be leveraged or avoided when performing the conception of a new difficulty-

based adaptive systems. 

The analyzed research work presented experimental approaches which targeted a 

more innovative use of the capture of metrics or classification of player types, as well as 

more impactful adjustments to the challenge level presented by a game when compared 

to commercial solutions. 

This can be justified by the fact that negative results in research are useful for 

verification of incorrect approaches, and thus also present value to the overall landscape 

of adaptivity. However, commercial games in which adaptive solutions present nega-

tive results have significant financial impact to development studios, and might specifi-

cally affect game designers and developers that embraced a certain methodology. This 

causes commercial solutions concept less innovative approaches, instead relying on al-

ready proven methodologies or less impactful modifications. 

In the case of Affect-based DDA approaches, it was proven that metrics can be 

agnostic to the specific characteristics of a game genre. However, with the use of external 

metrics such as affective state game designers have to understand the conditions and con-

sequences of each affective state, and correctly define adjustment policies which present 

harmony with the desired affective state at each game segment. 

Additionally, the use affective state as an adjustment metric can be considered an 

unfeasible approach in the current state of the industry, as the technology of the hardware 

and input devices which are currently used is unable to provide significant physiological 

data that could be used to accurately assess the affective state.

63 

One of the most positive aspects of DDA system implementations in research is 

related to the abstraction of adjustment targets and policies to players. In the experimen-

tation results of all of the reviewed methodologies, players either were unable to perceive 

the existence of adjustment methods, or were unable to identify the adjustment targets 

and policies involved with the adaptive systems. However, this could be due to the fact 

that the experiments performed involved sessions with limited time, which could be con-

sidered not enough for players to recognize patterns and perform reverse engineering of 

adjustment systems. 

Most of the adjustment systems observed in the scope of this work employed 

complex algorithms for the capture of metrics, classification of player types or for the 

definition of adjustment policies. A particular trend seems to be the interest in learning-

based methods, which impose constraints on long processing times or large amounts of 

input data to be effective in most cases. 

We argue that the application of online or supervised learning-based methods is of 

improbable application to the context of commercial games, as these approaches present 

issues when considering the iterative process of balancing and play-testing in game devel-

opment, and the fact that games are often modified after release to encourage replayability, 

since changes in game attributes create the possibility of new meta-game strategies. In the 

case of offline based approaches, some applications such as learning-based AI agents can 

still be considered, as the processing and data load involved with the training of such 

agents can be constrained to the domain of game providers. 

The complex implementations of DDA observed in research can also create fric-

tion when considering the necessity of customization or configuration by game designers. 

Adjustments to such approaches often require significant knowledge of the concepts or 

theoretical basis of the domain they operate in, which might be a detrimental factor when 

game designers simply desire to change a specific adjustment policy or target value. 

To classify the implementations of DDA systems in the research work analyzed 

for our evaluation, we attempted to identify the domain of the metrics that were used as 

input for the adjustment policies implemented, as well as the adjustment targets used for 

each implementation. We observed that in general, research in adaptive systems did not 

provide a justification to the adjustment policies implemented, or a proper validation to 

the use of specific parametric values when modifying adjustment targets. 

We also observed a general interest in the implementation of learning-based ap-

proaches, as such methodologies would represent an automation in the definition of ad-

64 

justment policies and parametric difficulty values, which would lessen the responsibility 

and necessity of balancing from game designers. Table 2.1 provides a consolidated list 

which classifies and compares the most relevant methodologies implemented in the re-

search works explored. 

Table 2.1: Dynamic Difficulty Systems in Research. 

Name Year Authors Metrics Domain Adjustments 

Hamlet System 2005a HUNICKE Player Performance Resource Distribution 

AI Attributes 

Affect-Based DDA 2009 LIU et al. Player Affective State Game Speed 

Player Attributes Reinforcement Learning DDA 

2011 TAN; TAN; TAY Player Profile 

Player Performance AI Behaviors 

2.5.3 Evaluation of DDA Systems in Commercial Games 

Through the reception and popularity of the most successful commercial games 

that employed DDA systems, we can infer that the solutions implemented proved to be 

mostly beneficent contributors to the overall player experience. To justify this claim and 

identify the contributing factors we can verify the previously discussed positive aspects, 

where adaptive systems in commercial solutions generally caused performance improve-

ments for beginner players – such as in Mario Kart where lower skilled players were 

provided opportunities to close the distance to runaway leaders. 

As observed in Resident Evil 4 and God Hand, adaptive systems could also be 

used to maintain a competitive challenge or even increase the difficulty for highly skilled 

players, by employing new enemy behaviors and combat encounters, or by modifying the 

attributes of AI opponents. Additionally, most players did not perceive the existence of 

such systems in a first playthrough, with most of the reverse engineering of such systems 

being performed in online communities of dedicated players such as speedrunners. 

Implementations of DDA systems in commercial games also focused on perform-

ing minor adjustments due to: their ease of implementation, where a limited set of met-

rics and adjustment policies are involved in the modification of difficulty parameters; and 

the possibility of integration with the game development process, where changes in ad-

justments could be tested in iterative deployments of game versions, which satisfies the 

necessities of the iterative play-testing and balancing process in game design.

65 

However, most approaches in commercial solutions showed a difficulty of being 

abstracted to veteran players, due to the possibility of recognition of patterns over multiple 

playthroughs and the advent of online communities which are dedicated to identifying and 

describing the use of game exploits. The solutions that presented the highest resilience 

in terms of players acknowledgment were the approaches which involved ambiguous sys-

tems that players are not able to easily assess or interact with, such as RNG-based resource 

distribution. 

Upon discovery and understanding of such systems, players were able to easily 

exploit the adaptivity in favor of their own performance – which could cause detrimental 

effects regarding player immersion as players are not focused in executing the actions in 

the game world, but rather in the way that the system evaluates the actions they perform. 

In the context of multiplayer games this became an especially significant issue, as veteran 

players are able to exploit adaptivity in detriment of beginner players that might not have 

knowledge about the existence of such a system. 

We also identified a few prevalent solutions which became widespread in imple-

mentations of DDA in commercial games, such as rubber banding, dynamic resource dis-

tribution, dynamic AI behaviors, dynamic encounters and the less pervasive approach of 

explicit adaptivity. The metrics used as input for adjustment policies in most implemen-

tations were restricted to the domain of player performance, which could be considered a 

possible exploration point in the future. Table 2.2 provides a consolidated list of the DDA 

approaches in commercial games evaluated in the scope of this work, as well as a classi-

fication of the metric domains, adjustment methods and a specification of the adjustment 

targets used. 

2.5.4 Guidelines for Adaptive Systems 

Based on the observations of analyzed adaptive system implementations in re-

search and commercial games, we can infer guidelines regarding the desired aspects to 

pursue and avoid when implementing commercial games with dynamic difficulty adjust-

ment systems. Regarding the capture or calculation of metrics that are used as input to 

adjustment policies, we define the following guidelines: 

 The information gathered by metrics should be bound to the domain concepts and 

design aspects of a specific game genre;

66 

Table 2.2: Adaptive System Implementations in Commercial Games. 

Title Year Metrics Domain Adjustment Method Adjustment Targets 

Half-Life 2 2004 Player Performance RNG-based Resource Distribution 

Resident Evil 4 2004 Player Performance 

Player Profile Multiple Layers 

Resource Distribution AI Behavior 

Combat Encounters 

God Hand 2005 Player Performance Explicit AI Behavior 

Enemy Speed Enemy Damage 

Left 4 Dead 2008 Player Performance RNG-based Resource Distribution Counter-Strike Global Offensive 

2012 Player Performance Rubber Banding Arms Race 

Weapon Distribution Diablo 3 2012 Player Performance RNG-based Item Distribution Final Fantasy XIV 

2013 Player Performance Rubber Banding Experience Points 

Mario Kart™ 8 Deluxe 

2014 Player Performance Rubber Banding AI Speed Power-ups 

Undertale 2015 Player Preferences Explicit Combat Encounters Horizon Chase Turbo 

2018 Player Performance Rubber Banding AI Speed 

 The metrics being captured should appropriately reflect the level of skill, habits or 

preferences of a player towards a specific game; 

 The data used for the calculation of metrics is required to be captured in real-time 

under the hardware restrictions of target platforms. 

Regarding the definition of adjustment policies that are used as thresholds, quan-

tifiers and delimiters to adjustments, we define the following guidelines: 

 The thresholds or quantization factors being used should reflect the classification 

and categorization of player models; 

 The set of thresholds used should not create ambiguity or overlap, as thresholds 

should clearly define the performance, profile or preferences of each target adjust-

ment group; 

 The metrics used as input for adjustment policies should encompass all significant 

factors target adjustment. 

Regarding the objectives behind the choices of adjustment targets in the specific 

context of DDA implementations, we define the following guidelines: 

 The choices of adjustment targets should focus on prioritizing the increase of im-

mersion through challenge to induce the State of Flow;

67 

 Changes in adjustment targets should solve or attenuate inherent problems of the 

domain of the game genre, such as runaway leaders; 

 The set of parametric values that are applied to adjustment values should be de-

signed considering the possibility to create challenge and variations in gameplay 

for veterans and highly skilled players. 

Regarding on providing solutions or attenuating the inherent issue of exploitability 

in the design of adaptive systems, we define following guidelines: 

 The adaptive system should prioritize being abstracted to beginner players by be-

ing integrated in systems that are ambiguous or not directly understandable upon 

interaction; 

 The adaptive system should incentivize performance improvement rather than ma-

nipulation, where players should not feel punished by performing better than their 

competitors. 

Regarding the feasibility of the implementation of a DDA system and its ease 

of integration into the iterative nature of the game development process, we define the 

following guidelines: 

 The system should be easy to perform adjustments on, so that game designers can 

customize and iterate over different values; 

 The system should avoid exposing concepts which require technical knowledge of 

specific algorithms to configure; 

 Balancing and adjustments on parametric values of the adaptive system should be 

fast to perform, so that the system is able to be thoroughly tested throught play-

testing iterations. 

2.5.5 Improvement and Exploration Opportunities 

Based on the guidelines that were defined and the characteristics of previous re-

search and commercial solutions, we can begin to identify improvement opportunities on 

how novelty and sophisticated approaches developed in research can be integrated in the 

industry, while also eliciting the unexplored domains of adaptivity in research. 

First, we identify that there is a lack of research approaches which apply adapta-

tion methods to the design of sophisticated modern games. Most of the research in DDA

68 

systems included implementations of simplistic games, which is natural since the focus of 

such works is validating the efficiency of metrics or adjustment policies and the percep-

tion of players over the changes that were applied. Therefore, we define the first objective 

of the implementation proposed in this work: the experimentation of methodologies based 

on previous research in the context of a commercial game. 

We also identify that the design of the games used as objects of study in research, 

as well as most of the observed examples of commercial games that implement adaptive 

systems, is not purposed to be difficult by nature. Therefore, there is an unexplored 

opportunity regarding the use of DDA systems to alleviate the steep learning curve of 

challenging video games, which defines the second objective of our implementation in 

this work: to evaluate the use of adaptive systems as a tool to alleviate the steep learning 

curve of challenging games. The motivation of choice for our object of study, as well as 

the game design aspects that contribute to its challenge are further explained in chapter 3. 

Another opportunity of improvement can be noticed regarding the understanding 

of research about the characteristics of the objects of study. Previous research on DDA 

systems focused on the validation of metrics and classification of players, but provided 

no justification regarding the motivation of choice for the object of study, the correlation 

between metrics, adjustments and the aspects of game design or the game systems in-

volved in the capture of each metric. Therefore, we establish the third objective of our 

implementation in this work: to provide a consolidated analysis of the object of study that 

can justify the motivation of its use, the choice of metrics and adjustment policies and the 

correlation between such metrics and the systems the involve. 

It can also be noticed through the evaluation of results and discussions promoted 

by authors in previous adaptivity research that there is a tendency to focus on the vali-

dation of the capture of metrics and classification of players, as opposed to a validation 

of the adjustment policies and the adjustment values in relation to the classification of 

player types. Therefore, we define the fourth and final objective of our implementation: 

to focus on the validation of the adjustment policies rather than the capture of metrics or 

classification of player types.

69 

3 ANALYSIS OF OBJECT OF STUDY 

In this section, we justify the motivation behind the choice of Dark Souls as our 

object of study. We perform an overview of the most relevant combat mechanics to iden-

tify the subset of features that should be implemented in our simplified version. We 

identify the core aspects of the implementation of AI agents in Dark Souls, defining a 

set of guidelines to aim for when attempting to replicate the behavior of enemies in our 

implementation. 

We perform a generalized analysis of the philosophy applied in level design, to 

understand which methodologies were applied and which of its aspects are difficulty fac-

tors to players. We identify the difficulty factors in Dark Souls, attempting to understand 

the inherent issues with its design decisions and systems. We conclude by summariz-

ing the observations and analysis performed in this section to define the aspects that our 

simplified implementation should attempt to replicate, as well as pointing out the issues 

regarding difficulty and approachability that can be addressed through an adaptive solu-

tion. 

3.1 Motivation of Choice 

Dark Souls has successfully pushed the extents of challenge in Action RPGs to 

their limit, providing combat with a simple yet carefully designed set of core mechanics. 

However, the greatest capability of the Dark Souls series, the design of its difficulty, is for 

some an unwelcome trait. While the game presents enemies with simple pattern-based 

AI, players will be firmly punished for their mistakes. For this reason, Dark Souls is often 

used as a reference in discussions regarding difficulty in games (BOYD, 2012). 

In Dark Souls the player does not fail by dying, but by giving up on playing the 

game altogether. The game design creates a cycle of experimentation, learning, adaptation 

and, after multiple iterations, progression through the levels. Death is not considered 

failure, but simply a means to attain knowledge and training. Because of this type of 

punishing yet rewarding design which teaches the player through death, the special edition 

of the first title in the Dark Souls series yields the subtitle "Prepare to Die Edition". 

While the average action game might reward the player for beating entire armies 

of enemies on his own, Dark Souls can be a rewarding experience for the player even 

when seemingly basic encounters are surpassed, such as surviving a battle with a single

70 

enemy. When adventuring through the tight corridors of a dungeon or dark underground 

caves, the player faces unknown dangers and must fight their way out. Even the weakest 

enemies can surprise and kill an unsuspecting player. When facing the strong opponents, 

dealing the finishing blow in an intense fight means the player overcame a challenge. 

Understanding the design of Dark Souls is, therefore, a key component to understanding 

the relationship of challenge and reward. 

3.2 Overview of Game Mechanics 

Dark Souls is for the most part presented in a Third Person Camera perspective, 

with the player character positioned close to the center of the screen. The Third Per-

son perspective is distinguished from a First-Person perspective by the visibility of the 

player character’s model and their surroundings. Third person perspectives are optimal 

for action games with close-quarters combat because they provide a broad view of the the 

environment, enemies and their distance to the player. 

In Orbital Third Person Cameras such as the implementation in Dark Souls, char-

acter movement is based on camera orientation (HAIGH-HUTCHINSON, 2009). If the 

player moves forward, their controlled character moves towards the direction the camera 

is facing. The camera is also constrained to rotating around the player in a fixed distance, 

making their movement resemble an orbit. 

However, there are cases in which maintaining a fixed distance to the player is im-

possible, such as when the target position is outside the playable space. In such situations, 

the camera repositions inside the playable space whenever its target position would be out 

of boundaries. In Dark Souls the target position is calculated by simply pulling the cam-

era closer to the player character. The relative size of the player in screen is then greatly 

increased and might disrupt the visualization of important gameplay elements such as 

enemies or level geometry. 

Environment elements such as columns, rocks or even non-playable characters 

might also impair the visualization of the player character and non-player characters, thus 

hindering the ability for the player to visualize and assess the situation in a combat en-

counter. In response to these difficulties, Third Person games with close-quarters combat 

often implement a secondary "Lock-On" camera as an alternative to the default. 

Lock-On Cameras override the positioning and framing of Third Person Cameras 

by locking the orientation of the view to a "lock target". Instead of centering on the

71 

player character, the Lock-On Camera focuses on another object or position such as an 

enemy character, while still offsetting its position to frame the player character in view. 

This allows for optimal visualization of essential elements in a combat encounter. In this 

mode, player movement changes to a circular strafe method that is relative to the lock 

target’s position. Moving sideways results in an arc-shaped motion around the target. 

Forward and backwards movement transposes the player character closer to or away from 

the target. 

The Lock-On Camera is ideal for single-target combat situations, as the player 

can avoid frontal enemy attacks by moving sideways, while still being able to manipulate 

their distance for counterattacks. In the case of enemies using Area of Effect attacks 

which target circular area around them, the player can easily move away from the enemy. 

Additionally, player orientation is updated to constantly face the target, which simplifies 

the process of angling attacks towards enemies. Since the player character is constantly 

facing the direction of the target, successfully registering an attack simply requires the 

player to adjust their distance to the target. 

Dark Souls is an Action RPG with heavy focus on close-quarters combat. In 

contrast to other games in the genre, is not fast-paced or dynamic. Instead, the game 

focuses on encouraging the player to perform precise and strategic movements. Thus, 

Dark Souls leverages the characteristics of predecessors such as King’s Field by creating 

a sense of weight and impact on attacks, emphasizing the necessity of players to protect 

by dodging or blocking (MECHERI; ROMIEU, 2017). 

The controls of games in the Souls series operate in similar fashion: each of the 

character’s arms are controlled by separate buttons, represented by the left and right shoul-

der pad in a Joystick. The player can wield different one-handed equipments in each arm, 

or a two-handed equipment in both arms. The character will perform actions for an arm 

based on which equipment is equipped, such as slashing with a sword or defending with 

a shield. If a two-handed weapon is equipped, using the right shoulder pad button will 

attack and the left will defend. The most common configuration is to have a shield in the 

left hand, and a weapon in the right. 

During play-through, the player will come across a wide variety of weapons with 

multiple unique attacks. Each attack requires a certain amount of Stamina, deals a certain 

amount of Damage when hitting an enemy, and has a Recover Time. Certain attacks also 

have the chance of Staggering an enemy. Heavy Attacks are slower and cost the most 

Stamina, but have a higher chance of Staggering an enemy. Light attacks are faster and

72 

can be linked for a quick succession of attacks, dealing significant damage but have a 

low chance of causing Stagger. These core mechanics create opportunities for strategic 

decisions that the player must take before and during combat. We list these mechanics, 

along with a detailed description of their in-game function: 

 Damage: the amount of health a character loses upon getting struck by an attack. 

This amount can be reduced or fully negated by blocking or dodging incoming 

attacks. 

 Health: an attribute representing the overall physical state of a character. Numer-

ically, it determines how much Damage a character can sustain before being de-

stroyed. 

 Stamina: an attribute that represents the character tiredness. Numerically, it de-

termines the ability to perform actions in combat. Attacking, dodging and even 

shielding oneself against enemy attacks all have a Stamina cost. Although Stamina 

is a finite resource, it replenishes passively after the player stops performing combat 

actions. 

 Recover Time: the amount of frames the player is unable to do any actions and is 

vulnerable to attacks after their own attack has taken place. This attribute is used to 

create a feeling of weight in attacks, and can be used by the player to punish slow 

enemies after missing an attack. 

 Stagger: the condition where a character is unable to perform any actions and is 

vulnerable to attacks after getting struck by a powerful attack or a quick succession 

of attacks. In Dark Souls, this condition is especially cruel to the player, since after 

losing a significant amount of health the player is still susceptible to a follow-up 

attacks, without the ability to defend their self. 

To avoid getting struck by enemy attacks the player can Block, Dodge, Parry or 

simply move away from the attack. Out of the available defensive actions, Blocking 

is the safest and least skill dependent. A block reduces or completely eliminates the 

incoming damage of an enemy attack. While blocking, the player will replenish Stamina 

at a reduced rate. Each blocked attack has a Stamina cost based on its power and player 

attributes. If an enemy attack is too powerful and the player does not have the necessary 

Stamina or attributes to block, the player will be Staggered. 

Dodging can be performed by performing the "roll" action in an user-defined di-

rection when an enemy is about to land an attack. While it costs Stamina, succeeding

73 

in this action completely negates the damage of an attack, regardless of how powerful 

the attack is. Upon failing, the player will take full damage. Thus, to avoid the negative 

effects of failure, dodging should be performed with care as it heavily depends on timing 

and accuracy. 

Parrying can be performed with precise timing to deflect an enemy attack and 

destabilize the enemy. The player can then perform a riposte attack, a powerful move that 

adds a considerable amount of damage in comparison to normal attack. The time window 

to successfully perform a parry is considerably smaller than that of dodging. Failing a 

Parry will cause the player to take full damage of the attack and be Staggered. Thus, 

Parrying is a high-risk high-reward action, and can also be considered an offensive move. 

Blocking, Parrying and Dodging require the use of Stamina, an important resource 

which is also necessary to perform offensive moves. If a player decides to block all in-

coming attacks, their Stamina will not replenish quickly enough to sustain their defense 

indefinitely, which will eventually cause their character to be Staggered. When against 

multiple enemies, blocking can quickly deplete player Stamina. Dodging and Parrying are 

timing dependent, and consequently prone to mistakes and heavy punishment. If players 

repeatedly try to perform the same defensive action, they will often find themselves cor-

nered, without Stamina and vulnerable to fatal blows. Experienced players should have 

the knowledge of when to performe each of these actions, or even when to perform none 

and simply move away to avoid attacks. 

3.3 Artificial Intelligence 

During the literature review process conducted in this work, no official informa-

tion regarding the implementation of AI in Dark Souls was discovered. According to 

Thompson (2017), some sources indicate a Hierarchical Task Planning Network System, 

but an analysis of the in-game enemy actions provides no support to this claim. How-

ever, by performing multiple tests and playthroughs it is possible to reverse engineer the 

behavior of enemies and suggest a replication methodology that could satisfy the same 

properties of the original game. 

NPCs (Non-Player Characters) often share similar behavioral patterns in Dark 

Souls. While the specific actions of a humanoid NPC might differ from a quadruped, 

their overall behavior upon detecting player presence is the same. NPCs will stand idle 

until receiving information from their sensors, such as the player stepping into their line

74 

of sight. At that point, the enemy will either attack at range, if using a bow or spell, or 

move towards the player and attack in close-quarters. 

Enemy actions might slightly vary depending on their equipment or status. En-

emies wearing a shield will commonly attempt to defend themselves when the player 

repeatedly attacks. The defense stance can be punished by the player by performing a 

kick or an attack from behind. A low health enemy might evade attacks or even heal 

itself. Most enemy actions are predictable, even when there is a certain variability in the 

patterns used. 

Ultimately, the AI of enemies in Dark Souls is simplistic but still sufficient to 

achieve the objectives proposed by the developer. The predictability of AI agents can be 

considered a favorable factor for the player when learning how to overcome an enemy. 

Still, this simplicity might not be perceivable by the player in their first playthrough, 

since they will simultaneously struggle with the inherent challenges of level design, such 

as level layout and 3D environment geometry. In addition, Dark Souls surprises new 

players by presenting overtly strong enemies in comparison to the player. A slight mistake 

might cause the player to endure punishing amounts of damage, which exacerbates the 

perception of how difficult an opponent is. 

The perception of strength in Dark Souls’s enemies carries similarities to what was 

reported during development of the original Halo game by Bungie. Players perception of 

enemy smartness was skewed by how an enemy could sustain player damage and how 

much damage they dealt to the player Griesemer (2002). Increasing Health points for 

an enemy type enhanced the perception of enemy intelligence for first-time playtesters. 

Thus, a perception of "toughness" could shadow the lack of intelligence of an enemy in a 

first playthrough. However, as the player repeatedly faces the same enemy upon countless 

deaths, the illusion gradually fades. 

3.4 Level Design 

Level Design can be defined as the interpretation of Game Design and its appli-

cation to the design of the challenges and situations that a player face over the course 

of a playthrough (KREMERS, 2009). The Level Designer should understand the rules 

of a game and determine how the player is confronted by them. It can be argued that 

Game Design represents the theoretical definition of a game, whereas Level Design is the 

concrete implementation of Game Design.

75 

Level Design determines the layout of a playable environment, the placement of 

enemies, gameplay objects and the environmental hazards. In a sense, Level Design can 

be seen as a means of expressing Game Design through the creation of situations involving 

game entities and the playable environment. Therefore, a game developer must consider 

what experiences they intend for the player to engage in for a specific playable space. 

In the case of Dark Souls, the world takes place in an open, interconnected and 

vertically stacked map layout. When projecting this layout on a two-dimensional chart, it 

resembles the format of a spiral. This type of map layout is radically different than other 

games in the genre such as The Elder Scrolls V: Skyrim 1, which presents dungeon maps 

as horizontally spaced and linear paths. 

Spiral level designs can feature a myriad of alternate routes and shortcuts. Since 

the player is constantly facing the danger of losing Experience Points upon dying, the 

Spiral layout creates opportunities for the player, with shorter paths that provide less 

risk when returning to safe zones. In the same philosophy, the game will often contain 

shortcuts from safe zones to later attained areas. These shortcuts must be unlocked by 

reaching a certain location and performing an action, such as finding the key to a locked 

gate. This Level Design technique is commonly known as gating (ROGERS, 2014). 

By journeying through the world, the player will come across castles, dungeons, 

caves, and fortresses. It is more frequent to find oneself in small passageways than open 

areas, the latter being used more often in boss fight areas. The need of constantly turning 

left and right, ascending stairs and descending through dark passages gives the developers 

numerous places to hide enemies and traps in. Thus, the player often faces threats such 

as being assaulted by an unseen enemy, getting hit by a trap or even falling to their death. 

The careful placement of enemies, traps and pitfalls in creative fashion constitutes the 

core of Dark Souls Level Design. 

Each and every enemy the player faces has the potential to generate a difficult 

encounter, given their placement, the environment geometry and the others entities in an 

encounter. An enemy that is considered weak can still take away a considerable amount 

of Health from the player under some circumstances. However, most enemies are become 

vulnerable after performing an attack, which rewards player for being patient and attack-

ing at optimal opportunities. Therefore, the player has the possibility of optimizing their 

play style by spotting enemies ahead of time, planning on how to exploit weaknesses and 

only then performing an action. 

1The Elder Scrolls V: Skyrim (Bethesda Game Studios, 2011). Computer Game. Microsoft Windows.

76 

This characteristic makes seemingly unfair encounters beatable. Groups can be 

separated into smaller sizes by luring enemies one by one. Traps can be used against the 

enemies, if the player lures the target to the area of effect. Enemies can be pulled from 

their territory into a safer and player-controlled position. 

However, the strength of a Souls-like game isn’t just its combat. The threaten-

ing aspect of in-game environments encourages the player to explore carefully, allowing 

more time to slowly experience the atmosphere and world lore.. The constant feeling of 

danger increases the tension and maintains the player aware of their situation to survive. 

According to Weidman (2016), the Level Design in Dark Souls is the main contributor to 

the player immersion in the game’s narrative. 

3.5 The Difficulty Factors of Dark Souls 

We can begin to understand the difficulty factors of the game design in Dark Souls 

by analyzing game aspects through two different perspectives: that of beginner players, 

which are not accustomed to or skillful at playing action games; and that of veteran or 

highly skilled players, which are able to get acquainted with game mechanics and systems 

in a faster speed with less friction caused by repeatedly playing through the same game 

segments. 

3.5.1 Concept of Approachability 

To analyze the perspective of beginner players when getting accustomed game 

mechanics and systems in difficult games, we explore the concept of approachability, 

which is detailed in (BYCER, 2021b). Approachability defines the ease at which a be-

ginner or unskilled player is able to incrementally get accustomed to and improve upon 

the use of game mechanics and systems, and is focused on enabling an analysis of games 

that identifies changes in gameplay and design that might allow more people enjoy the 

process of learning and improvement. 

Approachability is directly tied to the earlier discussed concept of learning curve, 

where the difficulty of a game must be balanced as to allow players to understand me-

chanics and systems in isolated environments, and in sequence improve their skills by 

playing through situations which integrate the use of such systems with the previously

77 

learned aspects of a game. Therefore, the approachability of a game is negatively affected 

by the areas, features and systems that might present an overwhelmingly difficult level 

of challenge in comparison to the skill of beginner players, which might cause beginner 

players to give up on playing a game. 

Approachability in games can be improved by identifying the aspects of game 

design that are a detrimental factor on the balancing of the learning curves and challenge 

level of a game, and providing optional or automatic adjustments to the attributes that 

configure such aspects. The adjustments can be performed with to create an easier or 

more acceptable experience to new players, or to provide a more interesting challenge to 

veteran players or highly skilled players that could be experiencing another playthrough. 

Dark Souls is an especially interesting example of a difficult game for the analysis 

of approachability issues, as the skill ceiling required for players to handle the difficulty 

curve is not greatly superior to the skill floor required from beginner players. This means 

that, when a player is able to achieve a certain level of competence in combat encounters, 

the contrast between challenge level and player skill is stabilized. 

Therefore, the main focus in the proposed challenges of Dark Souls is the devel-

opment of player abilities and skill set, where players should learn how to best deal with 

each specific situation to overcome the proposed challenges, instead of the game provid-

ing challenges with a significant variation in difficulty level. The analysis performed in 

(BYCER, 2021a) elicits some of the aspects of game design in Dark Souls that affect 

its approachability, relating each system to the set of skills required from the player and 

providing suggestions on possible fixes or features that can attenuate each issue. 

3.5.2 Detrimental Factors to Approachability in Dark Souls 

The first problem that was identified is regarding the speed of combat in Dark 

Souls, which affects the speed of attack animations and the frequency of actions per-

formed by AI opponents. An accelerated combat speed can be one of the major stum-

bling points for players not accustomed to action games or that react slowly to in-game 

events, as it requires the player to respond wth accurate reaction timing, quick recognition 

of attack patterns and appropriate decision making. To attenuate the issues caused by the 

accelerated nature of combat speed in Dark Souls, the author proposes an accessibility 

option where players are able to parametrically slow down combat speed. 

Another problem was identified involving the existence of the parrying mechanic,

78 

where parrying efficiency is heavily tied to accurate and timing-based execution. A suc-

cessful parry is able to completely negate the damage and effects caused to the player 

while also leaving enemies vulnerable, which is highly desirable. However, it can also 

bring significant prejudice to players if performed incorrectly. The author argues that the 

parrying mechanic is an useful feature to make combat easier in some action games, but 

it depends on the flexibility of its timing window. 

In Dark Souls, parrying becomes a required mechanic to execute against some 

enemy types, as some of the attacks performed by enemies can not be dodged or defended 

against. Because of the brief timing window where the player is able to effectively parry 

an attack, the requirement of the parry mechanic in Dark Souls results in an increase 

of the difficulty level in some combat encounters, especially in the case of boss fights 

or when handling multiple enemies. The author suggests that the problems raised by 

the parrying mechanic in Dark Souls can be attenuated through accessibility options or 

alternate difficulty curves, where beginner players are able to increase parry windows 

to get comfortable with the parrying mechanic before partaking into the default level of 

challenge proposed by game designers. 

The third problem identified was related to the nonexistence of visible indicators 

regarding the timing of enemy attacks, as well as a visual ambiguity in attack animations. 

In action games which involve combat, information regarding how players should respond 

to attacks should be communicated in a deterministic manner. Games such as Dark Souls 

employ multiple attack types, which can affect the player differently depending on their 

response. For instance, larger enemies will generally perform slower attacks that are 

easier to dodge, but if the player attempts to block such an attack a large amount of 

stamina will be spent and possibly cause the player to be staggered. 

Therefore, when an enemy is performing an attack the player should be able to 

identify and use the information communicated by game systems to decide which action 

to respond with and when to respond. For instance, it is a common trend in action games to 

provide a visual indicator when enemies are performing an unblockable attack, commonly 

in the form of a visual effect which highlights the enemy character. 

While veteran and highly skilled players can attune themselves to the nuances en-

emy animations in Dark Souls without the need of visible indicators, a beginner player 

tipically requires much more time and repeated attempts, which increase the initial fric-

tion. As a possible solution to this issue, and to provide more opportunities for beginner 

players to recognize such patterns, the authors suggest the option to include optional vi-

79 

sual indicators when enemies are about to perform an attack, as well as specific visual 

effects depending on the type of attack being performed. 

Another difficulty factor was identified regarding resource sustaining through the 

correct use of healing items (which are named Eastus Flasks in Dark Souls). The ability 

to heal affects the number of opportunities a player can experience to learn about enemies 

and combat situations. One of the key components of level design in souls-likes is the 

"exploration of the unknown", where players are constantly unaware of the challenges that 

will be faced at each point in a game – which might render them unable to devise proper 

strategies to handle specific combat encounters. Therefore, one of the core aspects that 

affect player progression is their ability to sustain themselves while committing mistakes 

in unexplored combat encounters or environments. 

In general, the larger the amount of health points a player is able to heal before 

reaching or re-spawning at a bonfire, the longer the player is able to explore game seg-

ments, which reduces the frustration inherent to repeated playthroughs of a level. Addi-

tionally, the faster players are able to heal during a combat encounter, a lesser amount of 

mistakes will be committed when deciding if there is an appropriate timing window for 

the player to consume such an item without being vulnerable to enemy attacks. Therefore, 

the use of healing items in Dark Souls also requires the ability to predict enemy patterns 

and accurate decision making regarding appropriate timing windows. 

While veteran players may be able to accurately recognize enemy behavioral pat-

terns and attack animations and thus commit less mistakes regarding the usage timing of 

healing items, beginner players are often unable to perform such decisions at the critical 

point of combat encounters. This results in the frustration of being unable to properly 

sustain through combat encounters, which affects the learning curve. As a result, the au-

thors suggest two approaches to alleviate the sustainment of player resources through the 

exploration of game segments, as well as the strategic use of healing items during combat 

encounters: first, an option to increase the number of Eastus Flasks that can be use per 

each interaction with a bonfire; and second, have an optional automatic system for the use 

of Eastus Flasks when the amount of player health points drops below a certain threshold. 

The final difficulty factor identified in Bycer (2021a) is relative to the punishment 

mechanics involved when a player dies. As previously discussed, punishment mechanics 

in video games are employed with the objective of increasing the sense of tension attached 

to the loss condition, which creates incentives for the player to perform actions which 

achieve success. Most punishment systems involve the loss of some type of progress by

80 

the player, which in consequence increases the time a player requires to complete the 

game. 

If the losses in progression caused by failure are too significant and the chances 

of failing are too high, withdrawal is incentivized as the player might feel demotivated 

by the lack of confidence in their skills after considering the undesired effects of failure. 

Therefore, it is important to balance the loss progression from punishment mechanics 

with the expected frequency of failure by players at a given game segment. 

In Dark Souls, two types of punishment occur on player defeat: the loss of all 

carried experience points (named "souls"); and the loss of progression over the explored 

environment before the player is able to reach the next checkpoint. Experience points 

are gathered by defeating enemies, and each time the player interacts with a bonfire (ei-

ther by death or upon reaching a new bonfire) all previously eliminated enemies are re-

instantiated – which creates an opportunity for infinite gathering of experience points. 

Therefore, it can be argued that the aversion from loss of experience points is 

mitigated by the fact that the player has access to an unlimited supply of experience 

points, if so desired. Additionally, lost experience points can be recovered at the location 

of player death until the player is defeated again, which creates incentive for players 

to repeatedly attempt to traverse through the same game sections to avoid the loss of 

experience points, while also accumulating previous experience points with the amount 

gathered during the traversal of the same, already known path. 

However, this system might still cause frustration upon repeated deaths after the 

player defeats boss enemies. In these difficult combat encounters, players are rewarded 

a significantly higher amount of experience points in comparison to defeating normal 

enemies. After defeating a boss enemy, the player has to reach a bonfire before they 

can spend their experience points on improved attributes. After a boss fights, the player 

will commonly have spent most of their sustainment resources, which means that traps or 

slight mistakes are likely cause their death. Consequently, players will repeat the traversal 

of the path until where the boss fight occurred to recover their lost experience points, and 

might die again. 

Therefore, the mechanics and systems that are supposed to mitigate the frustration 

from loss of experience points might also be contributing factors to the same loss of 

progression. To mitigate this issue, the author proposes an accessibility option for the 

removal of the loss of experience points upon death, which greatly reduces frustration for 

beginner players.

81 

Regarding the loss of exploration progression, where players are required to suc-

cessfully repeat long game segments until reaching the next checkpoint (or "bonfire"), 

players might become more accustomed to combat encounters which occur closer to their 

spawn point. Because of the incremental loss of sustainment resources over the traver-

sal of environments, chances of player death are increased after each combat encounter, 

which means that encounters that are closer to the player spawn point will likely be re-

peated with a higher frequency in comparison to the encounters that are located closer to 

the next bonfire. 

Therefore, the player has less chances to devise strategies and adapt to the char-

acteristics of these later encounters. To mitigate this characteristic, the author proposes 

the creation of intermediary checkpoints, where players are able to re-spawn closer to 

the combat encounters where they were defeated – which means that players have more 

opportunities to test out different strategies for a specific combat encounter, and conse-

quently spend much less time to improve their execution. 

We also explore some of the observations, perceptions and opinions of the Dark 

Souls player base to understand the general consensus of players regarding the difficulty 

for beginner players. To this objective, we perform an analysis of online videos created 

by members of the Dark Souls player base which promote the discussion of aspects of the 

level design, game mechanics and systems that contribute to the public consensus of Dark 

Souls as a difficult and challenging game. 

In the discussion promoted in neptunusEQUESTER (2017), we observe that one 

of the main aspects that can contribute to the impression of difficulty is related to the 

fact that the game does not provide in-game interface elements or systems which explic-

itly inform the player of which path should be traversed at any given point in the game. 

Therefore, beginner players will often be required to infer their objectives through an ex-

perimentation process where they explore multiple possible paths, and assess which paths 

can be successfully traversed given their current equipment, level and attributes. 

This can result in beginner players continuously attempting to traverse paths with 

difficult or impossible progression given their current attributes, which causes frustration 

and demotivation. One of the most prevalent examples for this can be observed when 

players reach the bonfire for a game location named "Firelink Shrine", where players 

can either achieve progress by traversing the "Undead Burg" or incorrectly attempt to 

progress through the "Catacombs", which presents stronger enemies and will not provide 

progression of game story elements.

82 

While some commercial games attempt to mitigate this issue by providing visual 

indicators as to the current objectives of a player and the path they should take given a 

game world state, we argue that part of the core appeal of Dark Souls is the process of 

exploration, experimentation and discovery. Therefore, the use of visual indicators could 

negatively influence the core experience and immersion. A crucial factor for the heavy 

atmosphere in Dark Souls is the feeling of loneliness. Considering this, we argue that a 

better solution would be to create level layouts that restricts player decisions or induces 

the player to traverse through the correct path in regards to story progression. 

The discussion presented in Thompson (2017) relates previous research on game 

difficulty to the overall perceptions of the Dark Souls player base, and elicits that the 

overall lack of guidance and instruction to players can affect the perceptual impression of 

AI opponents. Because of the design characteristic of failure used as a tool for learning 

and improvement, players often present a more cautious approach upon first interaction 

with a new enemy, as they recognize that one of the most important factors to guarantee 

survivability against an enemy is to understand and recognize their behavioral patterns. 

A trend regarding the attributes and parameters of AI opponents presented in Dark 

Souls is the overt strength of enemies in comparison to the attributes and equipment used 

by the player. Players often engage in combat encounters with enemies where any attack 

that is not properly defended, dodged or parried against might cause a significant loss of 

health points or even death. Additionally, it is common for the amount of health points for 

such enemies to be much higher than that of the player or enemies from previous game 

segments. 

Another characteristic is observed relating to the ease of execution of mechanics 

by beginner players, where Dark Souls presents unwieldy mechanics that can be hard to 

become accustomed to, and thus severely affect the difficulty and learning curve depend-

ing on player choices. 

This can be observed when considering the attack animations of the multiple 

weapon types, where smaller weapons such as daggers, short swords and long swords 

present shorter attack animations and cost a lesser amount of Stamina. This reduces the 

time where the player is vulnerable by animation locking, which renders the player unable 

to perform the dodge and block defensive actions after an attack. 

Heavier weapons such as two-handed swords, large axes and mauls have longer 

animation times and stamina costs, making players animation-locked for a significantly 

higher duration, and thus vulnerable to attacks. The effect of equipment in the execu-

83 

tion of game mechanics can also be observed with the parry mechanic, where different 

types of shields can affect the timing window where attacks can be effectively parried. 

Additionally, the same effect can be observed when players equip different sets of armor, 

which modify the weight attribute and affect the speed of dodging animations. 

The difficulty of combat mechanics can also be observed through the collision 

of attacks with environment geometry, where if a player engages in a combat encounter 

in constricted spaces, it is likely that their attacks might collide with walls. This event 

causes multiple consequences, including animation locking in a brief stagger animation, 

cancelling of attack animations that causes enemies to not be hit, and degradation of 

weapon durability. 

In conclusion, the work presented in Thompson (2017) also analyzes level design, 

with specific focus on the placement of enemies and traps as to punish players which 

do not prioritize a careful approach. We can relate this to the previously discussed ob-

servations in section 3.4, where we performed our analysis of level layouts and enemy 

placement. We observe that game designers often position enemies outside the player’s 

field of view, as well as in strategic places that might cause instantaneous death such as 

the edges of a cliff. Designers also employ the use of certain enemies as a distraction that, 

when the player engages combat with, obfuscate the presence of another enemy that can 

perform a back-stab. 

Therefore, the level design in Dark Souls creates an incentive for players to care-

fully analyze, evaluate, plan and execute while minimizing the risks and memorizing the 

characteristics of paths taken, in order to avoid significant losses of resources or even 

instantaneous death. We argue that at least in the case of beginner players, we can allevi-

ate the learning curve by eliminating the use of constricted spaces, traps and distractions 

based on their performance, causing beginner players to focus on learning basic combat 

mechanics and recognizing enemy patterns. 

3.6 Conclusions 

We conclude our analysis of Dark Souls by synthesizing a summary of the im-

portance of its choice as an object of study, the game design characteristics which can be 

used as a reference for the implementation of a simplified version of the game, and the 

inherent issues with difficulty caused by design choices. We also propose solutions to the 

inherent problems of game design in Dark Souls, which are used as a basis to the choice

84 

of our adjustment policies and targets in section 4.5.4. 

3.6.1 Relevance 

As discussed earlier in this chapter, Dark Souls has been one of the most influential 

games when considering the discussion regarding difficulty, challenge and accessibility 

in games, as seen in (BYCER, 2020). Dark Souls was the source of many controversial 

innovations and design approaches involving level design, combat systems, and punish-

ment of failure (MACDONALD, 2019). Over the last decade, Dark Souls was also the 

protagonist in the discussion of the newly popularized concept of approachability to be-

ginner players, as seen in (BYCER, 2021a). Therefore, we argue that the use of Dark 

Souls as an object of study can be used as a platform to improve our understanding of the 

impact of difficulty in player experience. 

Dark Souls was also one of the first games which addressed the use of failure as 

a part of the learning process by players, where the cycle of exploration, experimentation 

and adaptation created a methodology of iterative improvements to the player learning 

process. However, this methodology also proved to be a controversial approach, as many 

players report feeling frustrated and decide to give up on the game, resulting in a comple-

tion rate of approximately 26% of the player base (BYCER, 2021a). Therefore, the use 

of Dark Souls as an object of study also provides us with opportunities to validate the use 

of adaptive systems to alleviate the learning process of beginner players, which in turn 

would reduce frustration and possibly reduce churn rates. 

As evidenced by our analysis of its difficulty factors, Dark Souls presents many 

issues regarding its approachability, which are a consequence of the inherent issues of its 

design decisions and a biased perception of players regarding its challenge level. There-

fore, Dark Souls also provides us with many possibilities regarding adjustments of sys-

tems which have inherent approachability issues. In consequence, it is possible to use 

Dark Souls as a platform to N-dimensional dynamic difficulty approaches, where the 

difficulty of specific game elements can be adjusted considering isolated metrics of the 

player model.

85 

3.6.2 Core Design Aspects 

In this section, we provide a brief summary of the core game design aspects that 

were discussed earlier in this chapter, with the objective of identifying the minimum set 

of features and systems from the original game which can characterize a simplified ver-

sion. The simplified version can then be used as a target object to the implementation 

of adaptive systems, with metrics and adjustments that consider the difficulty factors and 

inherent game design issues of Dark Souls to beginner players. 

Regarding the aspects involving camera implementations, we identified that Dark 

Souls employs the use of Third-Person perspective cameras through Orbital and Lock-

On cameras. Orbital cameras perform rotational movement using the player character 

as a pivot, and are restricted to a fixed distance radius. Lock-On cameras are used to 

automatically frame the player and a target enemy, and to simplify the movement of the 

player character in relation to their enemy. Upon collision with the environment geometry, 

both camera types are brought closer to the player character. 

Dark Souls implements three core resource attributes regarding the statuses of 

entities in combat: Health, Stamina and Poise. Health is tied to the condition of failure, 

which is the death of the player character. Stamina is the resource used as a limiter to 

performing combat actions repeatedly such as attacking, dodging, blocking and parrying. 

Stamina is automatically regenerated, and the regeneration is briefly halted when any 

action results in a change of its value. Poise determines the resistance of the player to the 

Stagger status, where the player might become briefly animation-locked after getting hit 

by one or multiple attacks. 

During combat, the player can perform a looping sequence of attacks which is 

only limited by their amount of stamina. Each attack has an attached stamina cost, and 

if the player has no stamina they are unable to attack. Attack animations also have a 

specific timing window where they are able to register a hit, and each attack has a specific 

hitbox collider which is used for the detection of hits. At end of an attack sequence, 

attack animations force the player character into the recovery time state, where the player 

is animation-locked to the end of the attack animation and unable to perform any actions. 

Attack animations are defined by the weapons being used, where lighter weapons use 

faster animations and heavier weapons use slower and longer animations. 

The player can also hold their weapon or shield to block attacks, which reduces 

the rate of stamina regeneration by half. Blocking an attack has a stamina cost, and if the

86 

player has no stamina when performing a block they are automatically staggered. Each 

attack has a different stamina cost to block, with some enemies performing special attacks 

that dramatically reduce player stamina. Additionally, players might also attempt to parry 

an attack, which completely negates the effects of player attacks and also staggers the tar-

get enemy if accurately executed. To correctly execute a parry, players must perform the 

action at a moment in which the parry timing window matches the hit registering window 

of enemy attacks. If the player incorrectly performs the parry, they are left vulnerable and 

will suffer the full effects of the attack. Parry also has an attached stamina cost, and can 

not be performed if the player has no stamina left. 

Players can also attempt to dodge attacks, which serves as both an attack avoid-

ance and a repositioning mechanic. To be able to dodge, the player is required to use a 

significant amount of stamina. If the player has no stamina, they are unable to perform a 

dodge. During a brief timing window at the beginning of the dodge animation the player 

is considered invincible to attacks, meaning that the effects of attacks from enemies that 

would register a hit are completely negated. The game presents different dodging anima-

tions depending on the armor type being used by the player, and each animation has a 

specific invincibility window. 

Regarding the implementation of AI agents in Dark Souls, most enemies present 

simplistic behaviors that perform a limited set of actions without considering many con-

textual aspects of combat. By default, most of the enemies will stand idle at a specific 

position or walk through a small set of waypoints until their sensors detect the presence 

of the player, at which point enemies will chase the player until close enough to attack. 

The exception is with the "archer" type of enemies, which simply attack the player from a 

distance while standing idle after detecting their presence. Enemies perform a limited set 

of attack sequences that encourage memorization and pattern recognition by the player 

to appropriately avoid. Most of the enemies present a fair challenge when considering 

the strength of their attributes in comparison to that of the player character, but some en-

emy types can present much higher health points or damage dealt to the player, which 

increases the level of challenge and encourages players to take less risks in combat. 

Regarding the level design in Dark Souls, a variety of environments are presented 

with different characteristics. Open environments are more prevalent in areas where boss 

fights take place, while most of the game occurs in constricted environments where player 

movement is limited. The game also performs heavy employment of enemies and traps 

in strategical positions that can be outside of the player field of view, which might catch

87 

an unsuspecting player off-guard and result in their death. Therefore, the game encour-

ages memorization of the environments and the minimization of risks through a careful 

approach. In combat encounters, the game often positions ranged enemies in strategical 

advantage points which are difficult to reach, so the player has to traverse through long 

sections of the environment to be able to eliminate such enemies. 

Regarding the aesthetics of Dark Souls, the game presents an environment in a 

Dark Fantasy setting, where most enemies are undead or supernatural entities. The visual 

elements and audio design cause a general feeling of unease, which goes in accordance 

with the narrative aspects and the overlying theme of loneliness of a lost soul traversing 

through a ruined world. The animations for the player character and most humanoid 

entities are slow and heavy, providing a sense of weight and realism in combat. 

3.6.3 Difficulty Issues & Proposed Solutions 

Based on the detrimental factors to approachability analyzed in section 3.5.2, we 

can synthesize a summary of the difficulty factors that are related to the design aspects of 

Dark Souls: 

 Lack of guidance and instructions, where the game provides no visual indicators as 

which environment paths the player should prioritize to progress in the game; 

 Level design that punishes risky approaches, where the game employs several traps, 

strategically positioned enemies or thin platforms that might cause player death if 

not addressed carefully; 

 Ambiguous enemy behavioral patterns, where movement and attacks performed by 

enemies might not be properly assessed by players, thus causing a player to perform 

an incorrect defensive action; 

 Unwieldy mechanics, where the execution of actions is affected by equipment, at-

tributes and environment, such as attack animations tied to weapon types, attacks 

being obstructed by walls, shields having different parry timing windows and ar-

mors modifying the dodge animation speed; 

 Punishment mechanics, where the game punishes failure with progression loss such 

as the loss of experience points or explored environment due to sparse checkpoints; 

 Limited sustainment resources, where player progress is slowed by a limited amount 

of healing items that can be used before reaching the next checkpoint;

88 

 Animation locking, where the player becomes vulnerable when performing actions 

such as consuming an healing item or performing an attack with a heavy weapon; 

 Overt enemy strength, where enemies will deal much more damage and present 

much more health in comparison to player attributes; 

 Combat Speed, where a player might be unable to appropriately assess the type of 

attack being performed by enemies or execute the appropriate response in time to 

avoid being hit; 

 Perceptual difficulty, where the visual appearance or attributes of an enemy might 

create an incorrect perception of an AI opponent presenting more challenging be-

havior than the realistic nature of their algorithms. 

In the scope of this work, and because of restrictions in development assets and 

time for the creation of the proposed implementation, we choose to perform the following 

difficulty adjustments that address the some of the issues with design aspects that cause 

inherent difficulty factors to the design of Dark Souls: 

 Dynamic level layouts, which can alleviate the difficulty inherent in the lack of 

guidance, or the difficulty of combat when engaging multiple enemies in constricted 

environments; 

 Dynamic enemies placement, which can alleviate the difficulty of specific combat 

encounters when the player faces a combination of enemy types; 

 Dynamic enemy attack animations and visual indicators, which alleviate the issues 

inherent with ambiguous attack animations performed by enemies; 

 Dynamic enemy and group behaviors, which can alleviate the requirements of quick 

pattern recognition and player decision-making with ambiguous behavioral pat-

terns; 

 Dynamic positioning of checkpoints, which can alleviate the loss of exploration 

progression performed by a player that is unable to overcome a combat encounter 

before reaching the next checkpoint; 

 Dynamic Game Speed, which alleviates the issues with players being unable to 

execute the appropriate defensive response in time to avoid enemy attacks.

89 

4 IMPLEMENTATION AND DESIGN 

In this chapter, we specify each of the major decisions taken to implement a min-

imalistic "Souls-like" game based on the original Dark Souls, with an additional adaptive 

system that dynamically adjusts game difficulty to the profile of players. We provide a 

detailed list of the requirements of our implementation, along with the motivation for the 

choice of each technology. 

We formulate our criteria for the use of third-party dependencies, including visual 

and audio assets which greatly improved the development speed of our application. We 

also specify the technical design and implementation of all major gameplay systems in 

our implementation, and explain the inherent limitations of the scope of this work, along 

with the consequential differences to the original game. 

We detail our implementation for an event tracking system which monitors actions 

performed by in-game entities, and address how it is used as infrastructure for our DDA 

system. We specify the in-game events which are captured by the event tracking system, 

and how such events are converted to metrics that serve as input for our adjustment poli-

cies. We elicit the in-game modifications that each adjustment performs, and how such 

modifications can affect a gameplay session. 

4.1 Tools and Frameworks 

To implement a subset of Dark Souls that satisfies our purposes of evaluating DDA 

systems, we decided to use a framework able to render 3D environments with high visual 

fidelity. We also included utilities that would help implement the player interface aspects 

of the original game, such as an Input System that can deal with multiple input devices, a 

set functions to manipulate 3D Camera behavior and a physics engine that can detect and 

handle collisions for at least basic geometry. For these reasons we chose Unity1 as our 

development platform, as it contains most of the essential functionality we require and the 

possibility of extending and adapting the purpose of its editor to satisfy any development 

purpose. 

Unity offers a concise, integrated project editor that offers functionality such as 

1Unity is a cross-platform game engine which provides reusable functionality for rendering, input han-dling, audio and gameplay systems. Unity is widely used in the games industry due to its simplicity for beginner developers, being a popular choice for independent game development.

90 

level editing, game data serialization, visual animation state machines, configuration op-

tions for deploying platforms and architectures, a debug console and tools for generating 

offline light mapping data for scene rendering. 

Unity also defines a streamlined API where developers can implement their cus-

tom game code in C#, providing access to reusable functionality libraries and systems 

such as the component-based MONOBEHAVIOUR API, the SCRIPTABLEOBJECT API 

for serialized game data, the Input and UI systems and even the Editor package, which 

permits the developer to extend the built-in functionality of the Unity Editor to develop 

Quality of Life tools for improved creation workflows. It is also possible to deploy Unity 

projects to multiple platforms such as Windows, Linux, macOS, PlayStation, Nintendo 

Switch and Xbox with minimal changes in code, as Unity’s standardized API and builtin 

IL2CPP compiler translates Intermediate Language code into native C++ tailored for 

each platform. 

Another key factor for the choice of Unity was the possibility to import assets from 

the Unity Asset Store2. Without this, it would be impossible for the authors of this work 

to develop a game that would resemble the qualities of a AAA game such as Dark Souls, 

or even perform a similar project in a feasible time window. By acquiring and importing 

high-quality and ready to use game assets into the project, it was possible to focus on 

the design and development of game systems and our DDA implementation, while also 

having AAA quality assets as a resource to work with. 

The final deciding factor for the choice of Unity as a development platform was the 

previous experience of the authors with the engine, having implemented a wide variety 

of 2D and 3D Games, VR Serious Games and data visualization tools under the Unity 

engine. The familiarity with the provided APIs, along with the knowledge of how to 

achieve a steady and concise workflow permitted the authors to plan a moderately robust 

architecture and select the appropriate tools to implement the core features of Dark Souls 

with an acceptable quality. 

2Unity Asset Store is a digital platform for the distribution and acquisition of game assets such as 3D Models, Animations, Sounds, 2D UI Elements, Shaders, Post-Processing Effects and Visual Effects. Usage of the assets purchased in the platform is restricted to Unity projects, and have individual licensing and usage policies.

91 

Figure 4.1: A selection of screenshots from pre-assembled scenes using the 3D assets from the Fantasy Dungeon asset pack. 

Source: Collation of screenshots performed by the authors from images captured from the original Unity Asset Store website pages for the Fantasy Dungeon Unity asset. 

4.2 Game Assets and Aesthetics 

The assets used in our implementation were elected to serve as resources as an 

attempt to replicate the unique aesthetics of Dark Souls. Therefore, as a basis criteria for 

the selection of used assets, we use the brief analysis in section 3 as a reference to explore 

options in the Unity Asset Store within the ’Dark Fantasy’ thematic subcategory. 

First, we require a set of 3D models to assemble a playable 3D environment that 

satisfies the aesthetics of the ’Dark Fantasy’ genre. For this purpose, we chose Fantasy 

Dungeon as our main environment assets source – a collection of 3D models with a ’Ru-

ined Castle’ theme. The aesthetical aspect of this asset pack appropriately resembles the 

sense of decay and abandonment in the original game. When considering functionality 

aspects, this pack contains modular 3D objects and pieces that can be easily assembled 

into a playable environment. Furthermore, the asset pack also contains pre-assembled 

scenes with appropriate lighting and optimized meshes, which were adapted to fit the 

requirements of our implementation. 

In sequence, we require 3D models to represent the player and any non-playable 

entities the player would be able to interact with. Regarding non-playable entities, we at-

tempt to implement enemy agents comparable to the enemies presented in the early levels

92 

of Dark Souls. Most of the enemies in these early sections of the original game are Un-

dead3 beings named ’The Hollow’, which are represented by creatures with decomposed 

skin and a dehydrated body that resemble Zombies. In the original game, The Hollow 

can be seen wearing a variety of attire, including ragged clothes, armored pieces such as 

cuirasses, pauldrons and helmets, bare skin or even without flesh in their bodies in the 

form of Skeletons. 

In addition to the requirement of being in harmony with the aesthetics of the orig-

inal game, we also used as selection criteria of enemy models their specific purposes in 

enemy behavior design. Each enemy agent in our game has a specific set of actions which 

can complement the actions of other enemies during a combat encounter. Therefore, we 

define enemy role archetypes based on the enemies seen in the initial levels of Dark Souls: 

the Ghoul, the Archer, the Swordsman and the Assassin. 

For the representation of enemy characters that satisfy our aesthetic and design 

requirements, we selected Skeleton Zombies, Longsword Animset Pro, Modular Skele-

ton Archer, Modular Skeleton Rogue and Skeleton Humanoid as our enemy assets, all 

of which contain 3D models representing stereotypes of Zombies and Skeletons that re-

semble the enemies seen in the early stages of Dark Souls, while satisfying the roles we 

defined for the design of enemy agents in our implementation. 

Another motivation for the selection of these assets was their compatibility with 

the MECANIM4 system, which standardizes skeletal rig5 definitions for animations in 

humanoid characters in the UNITY engine. When compatible with this system, character 

models can be used in combination with most animations that can be found in the UNITY 

ASSET STORE, which provides the possibility of choosing from a wide collection of 

animation sets, which also assists our enemy behavior design. 

When considering the options for the player model, we require a character that 

would equip the appropriate attire or armor pieces, and should be able to wield common 

Fantasy-genre weapons such as swords and shields. The second criteria considers the 

3Undead beings are fictional characters represented by entities that were reanimated from death through supernatural means. Common representations of Undead beings in popular media include Zombies, Skele-tons and Vampires. 

4Mecanim is Unity’s animation system, which defines rules for the hierarchy of humanoid Skeletal Rigs and a relationship between Animation States through Finite State Machines. Mecanim provides a visual editor to configure animation rigging and animation state relationships, and an API which can be accessed by MonoBehaviours to update animation-related parameters. 

5Skeleton-based rigging is a technique used in computer graphics to manipulate groups of vertices of a 3D model as an hierarchical set of interconnected parts. Rotations performed in parent nodes of the hierarchy will result in rotations in child nodes. This technique is commonly used to animate organic figures, and the animation process is intuitively simpler than manually manipulating vertices.

93 

Figure 4.2: A mosaic portraying the 3D character models in Bright Souls. 

Source: Collation of screenshots performed by the authors from images captured from the original Unity Asset Store website pages for each of the assets used in this work. 

gameplay aspects of our implementation, where we require animations that represent a 

subset of combat and movement animations from the original game. In our case, we re-

stricted combat equipment to using the most popular player setup – the "Sword & Shield" 

combination. 

We filtered our search to a 3D model for a humanoid character that satisfies the 

Warrior character archetype wielding a sword and shield, and that was compatible with 

the skeletal rig for an animation set that contains sword and shield animations. For this 

purpose, we selected the Challenger character model from the Blacksmith: Characters 

asset pack, which portrays a middle-aged warrior wielding a sword and shield and using 

leather body armor pieces. As with the 3D models selected for non-playable entities, the 

Challenger character is compatible with the MECANIM skeletal rig system from Unity, 

which provided compatibility with most animation asset packs from the UNITY ASSET 

STORE. 

To properly integrate the characters into the game world, and to provide visual 

feedback as to what actions characters are performing, we required animations for hu-

manoid characters to be compatible with the MECANIM system and congruent with the 

purpose of each target entity. The animation set for each playable or non-playable char-

acter should appropriately reflect the equipment that each character possesses, the char-

acter’s body proportions and the weight of the attire being used. 

An example of animations being congruent with the purpose of a character would 

be an archer enemy that has animations for wielding a bow, drawing arrows from a quiver 

and shooting arrows. Since the armor pieces for an archer enemy should be lighter in com-

94 

parison to a heavy-armored warrior archetype enemy, the movement animations should 

include faster steps and less restricted joint rotations to reflect the weight of the light attire. 

Considering these requirements, we selected the asset packs ZOMBIE Starter An-

imation Set, Sword and Shield Animset Pro, Longsword Animset Pro, Archer Animset Pro 

and Rogue Animset Pro. Each of the animation sets selected satisfied the functional re-

quirements of a specific role for both playable and non-playable characters, while also 

being compatible with the skeletal rig standard defined by the MECANIM system. 

We also required sound effects to provide a clear feedback of actions and conse-

quences in the game world, such as a character moving, attacking, blocking an attack, 

getting hit by an attack or dying. The sound effects for our implementation were selected 

mainly because of their similarity to the sound effects of the equivalent effects in the orig-

inal game. For instance, a sound effect for when a character is hit in the original game 

conveys both the weapon that is being used by the attacker and the scale of damage that is 

being applied to the target. A frontal attack presents less of a deep, impactful sound effect 

than a back-stab attack, which does a significantly higher amount of damage. For these 

reasons, we chose the asset packs Axe Swing & Damage Sounds, Medieval Fantasy 2 Au-

dio and Universal Sound FX which contain a wide variety of sound effects representing 

medieval melee weapons such as swords, axes, shields and bows, while also providing a 

variety of impact levels for successful attacks. 

The immersion of players was also considered, and thus we chose to add ambient 

background noises and music that could be looped for the duration of a session. For 

the selection of these noises, it was decided that they should provide a sense of depth 

to the scenery, with quieter sound effects for events that are closer to the player such as 

crumbling stone and crackling wood, and somewhat louder sound effects for events that 

are far away from the player, such as running water, fire and falling chunks of stone. 

As for the music, it should provide an overall sense of horror and mystery that goes in 

accordance with exploration in a Dark Fantasy world. Therefore, we selected the asset 

packs Medieval Fantasy 2 Audio and Dark Fantasy Audio for ambient sound effects and 

music, which can appropriately convey the sense of an abandoned, crumbling castle while 

also containing music for an eerie environment. 

In sequence, we required a collection of particle-based6 visual effects to provide 

a proper visual feedback when characters are able to successfully attack their enemies, as 

6Particle systems in video games are systems which manipulate 2D sprites or simple 3D models to simulate natural phenomena, such as fluids or chemical reactions. They are often used in real-time 3D rendering applications as a cheap alternative to simulating fluid physics.

95 

well as visual effects that complement the aesthetics of the 3D environment. For convey-

ing successful attacks, we chose to add pseudo-volumetric particles for splatters of blood 

that originate from the body of an attacked entity, with the asset pack Pseudo-Volume 

Blood Effects being the most appropriate for this purpose. To increase the detail and 

depth of our 3D environment, we used fire particle effects for candle and small torches 

from Smoke & Ember FX and Unity Particle Pack. In additional to fire particles, these 

asset packs also provided smoke particle effects, which were used to both complement 

the fire from light sources and to help occlude certain parts of our levels until the player 

moved to a closer position. 

We also needed a collection of 2D UI Elements that would be able to convey the 

basic player resources such as Health and Stamina. The standardized solution of Health 

Bars suffices for both attributes, as they are commonly used for representing attributes that 

have a variable maximum value and a minimum value of zero. We required the design and 

layout of these elements to resemble the original game, avoiding overly saturated color 

pallettes and exaggerated visual complexity. 

We also required a variety of UI elements to assemble the menus that will be 

used by the player to initiate sessions, pages for the configuration of game settings, small 

tooltips that provide a brief description of the functionality of UI elements, and button 

captions that can be displayed during a game session to provide the player with a reference 

of the actions that can be performed at any given time. 

To represent most of the UI elements in our implementation we selected the RPG 

& MMO UI 5 asset pack, which contains the most common UI elements used in the video 

games such as menus, buttons, tooltips, health bars, loading screens and portraits, and 

has an overall design tailored for Fantasy-themed games. This asset pack also contains 

an under-saturated color palette with greyed out colors, which goes in accordance with 

our Dark Fantasy aesthetic. For button captions we selected the PC & Consoles Buttons 

Icons asset pack, which contains button icons for a multitude of input devices such as 

Xbox Controllers, PlayStation Controllers, Mouse & Keyboard and even joysticks for 

Head-Mounted devices. 

We also included Odin Inspector as a complementary asset editor tool that al-

lowed for a more concise workflow when serializing game data such as character at-

tributes, physics properties and gameplay values into binary game asset files. With Odin 

Inspector, it was possible to create reusable serializable interfaces that could be assigned 

to components directly from the UNITY engine editor, which was used as a base for the

96 

creation of our Attributes, State Machines and Performance Tracking systems. 

In conclusion, we specify our chosen assets, plugins and frameworks in table 4.1 

to provide a consolidated list of the elements discussed in this section, along with the 

appropriate extraction paths for the assets to work with our source code. 

Table 4.1: A consolidated list of the assets used in the implementation of this work. 

Name Type MSRP Path in Project 

Fantasy Dungeon 3D Models $90.00 Assets/AssetStore/3D/FantasyDungeon/ 

Skeleton Zombies 3D Models $16.00 Assets/AssetStore/3D/StudioNewPunch/ 

Modular Skeleton Archer 3D Models $34.99 Assets/AssetStore/3D/SkeletonArcher/ 

Modular Skeleton Rogue 3D Models $34.99 Assets/AssetStore/3D/SkeletonRogue/ 

Skeleton Humanoid 3D Models $19.99 Assets/AssetStore/3D/SkeletonHumanoid/ 

The Blacksmith: Characters 3D Models FREE Assets/AssetStore/3D/ChallengerCharacter/ 

ZOMBIE Starter Animation Animation $4.99 Assets/AssetStore/3D/ZombieAnimset/ 

Sword and Shield Animset Pro Animation $65.00 Assets/AssetStore/3D/SwordShieldAnimset/ 

Longsword Animset Pro Animation $50.00 Assets/AssetStore/3D/LongswordAnimset/ 

Archer Animset Pro Animation $55.00 Assets/AssetStore/3D/ArcherAnimset/ 

Rogue Animset Pro Animation $50.00 Assets/AssetStore/3D/RogueAnimset/ 

Axe Swing & Damage Sounds SFX $5.00 Assets/AssetStore/Audio/AxeSwingSounds/ 

Medieval Fantasy 2 Audio SFX $50.00 Assets/AssetStore/Audio/MedievalFantasy2/ 

Universal Sound FX SFX $40.00 Assets/AssetStore/Audio/UniversalSoundFX/ 

Dark Fantasy Audio Music $22.99 Assets/AssetStore/Audio/DarkFantasyAudio/ 

Pseudo-Volume Blood Effects VFX $15.00 Assets/AssetStore/VFX/KriptoFX/BloodFX/ 

Smoke & Ember FX VFX $10.00 Assets/AssetStore/VFX/SmokeEmberFX/ 

Unity Particle Pack VFX FREE Assets/AssetStore/VFX/UnityParticlePack/ 

PC & Consoles Buttons Icons UI $14.99 Assets/AssetStore/UI/PCConsolesIcons/ 

RPG & MMO UI 5 UI $35.00 Assets/AssetStore/UI/RPGMMOUI5/ 

Odin Inspector Plugin $55.00 Assets/Plugins/Sirenix/ 

4.3 Gameplay Mechanics and Systems 

In this section, we detail our implementation regarding the subsystems that involve 

player input and its resulting actions on the player-controlled character and camera. We 

also specify how such actions might interact with the environment, interactable objects 

and AI agents in our simulation.

97 

4.3.1 Camera System 

In our implementation, we use our analysis of Dark Souls in section 3 to design 

two separate camera modes with complementary functionality be used by the player for 

exploration and combat. First we implement an Orbital Camera, which is commonly used 

in third person Hack and Slash and Platforming games. Orbital Cameras can be used by 

the player to evaluate the properties of the environment, quickly assess dangers and devise 

a plan of action. 

The Orbital mode is the default camera state in our implementation, and is mainly 

designed for traversal around the three-dimensional environment. Control over the posi-

tioning and framing of the camera which is independent to character movement enables 

the player to scout the environment for dangerous entities before performing movement. 

Additionally, the distance from the player character enables the possibility to view ene-

mies behind wall corners, with the player out the sight. Thus, orbital cameras are optimal 

in out-of-combat situations, as players can gather information safely and devise a plan-

of-action. 

An Orbital Third Person Camera is always positioned in the perimeter of a three 

dimensional ellipsoid centered on the player. Input from the player generates movement 

along such perimeter. The camera attempts to frame both the player and the environment 

at the same time, targeting a pivot slightly above the player character’s head as a rotation 

center. Rotations around such pivot result in an orbital movement. 

The second camera mode in our implementation is the Lock-On state, which is 

commonly seen in Hack and Slash with melee combat. This type of camera positions 

itself behind the player character, and attempts to frame both the player and a target – 

most commonly an enemy character. Whenever the target character moves, the camera 

adjusts its position and framing to maintain a fixed relative position between the player 

and their target. 

A Lock-On Camera creates fixed axes of movement between the player and their 

target. If the player’s movement input is horizontal, their character moves in a circle 

around the target. Moving forward and backwards adjusts the distance between the player 

and their target. The purpose of this mechanism is for the player to have better control 

of spacing during combat, easing avoidance of attacks and optimization of distance to 

succesfully strike opponents. 

In the Lock-On Camera State, players do not specify an input direction for attacks.

98 

Instead, simply pressing the attack button guarantees a correct attack direction, as the 

player character constantly faces the enemy. Such simplicity helps the player to focus 

on enemy actions, to perceive when an enemy is attacking and to identify which kind of 

attack is being executed. 

In gaming culture, Lock-On cameras are commonly known for poor framing in 

specific situations. When the player is too close to their target, camera orientation is often 

angled towards an unsatisfactory direction. This causes the player to have limited infor-

mation about their surroundings, hindering the ability to efficiently dodge enemy attacks, 

or even to navigate the environment. Furthermore, if a player is moving horizontally when 

overtly close to their target, the perimeter of the circle of movement has a reduced radius 

in comparison to higher distances. This causes the camera rotate at high speeds and might 

cause motion sickness7 in some players. 

In constrained spaces, it is common for the default offset of a Lock-On camera 

to target a position outside the playable space 8. Thus, a position resolution algorithm is 

required to guarantee that the camera always has a valid placement. The most common 

approach is the pull-forward algorithm, where the target position is recalculated to bring 

the camera closer to the player until inside the playable space. 

While the pull-forward algorithm provides resolution to most cases, there are still 

caveats. If the player is overtly close to a wall, it might be impossible for the camera 

to frame both the player and their target. In such situation, either the player character 

occludes view of the target; or the camera focuses solely on the target by being positioned 

above the player. 

Figure 4.3 shows a comparative diagram of both camera types implemented in 

this work, where four screen captures are used for the Orbital Third Person Camera to 

illustrate multiple framing angles that can be achieved from player controlled rotations. 

Regarding the implementation of the Orbital Camera, we chose to use the Cinema-

chine Unity Package due to its comprehensive API and rich functionality. Cinemachine 

contains pre-defined implementations for multiple types of cameras, including specific 

algorithms to manipulate Orbital Cameras. Another useful trait is that the APIs provided 

by Cinemachine enable defining parametric curves for camera positioning, which reduced 

development iteration time. 

7Motion sickness is a sick feeling which occurs due to a difference between real and expected movement. In video games, motion sickness is a common issue inherent to camera movement algorithms in first-person games. 

8An example of position outside the playable space would be inside walls, or below the ground geometry.

99 

Figure 4.3: Comparative screenshots showing the difference between the Orbital and Lock-On camera modes. 

Source: Screen capture of application developed by authors. 

Cinemachine can also manage, compose and blend between camera shots. We 

configured camera transitions which were triggered by a signal system, resembling the 

commonly used Observer design pattern9. Cinemachine also includes algorithms for 

procedural motion generation, which were used to generate screen shake effects when the 

player is attacked by an enemy, and to properly adjust framing when the camera needs to 

track movement of high velocity targets. 

To configure Cinemachine for use in our application, we created a PREFAB10 with 

a CINEMACHINEBRAIN11 component at the root GAMEOBJECT12, and multiple VIRTU-

ALCAMERAS as child objects. The CINEMACHINEBRAIN brain component referenced a 

Main Camera13, which was added the MainCamera object as a child of the root. 

We also included a set of VIRTUALCAMERAS14 as child GameObjects of the Pre-

fab root. Each VirtualCamera in the hierarchy represents one of the camera modes in our 

9The Observer pattern is a behavioral software design pattern which defines a publish-subscribe rela-tionship between an object (the Subject) and its dependents (the Observers). It is mainly used to decouple systems and create a flexible layer for one-to-many dependencies. 

10Prefabs in Unity are pre-configured hierarchies of reusable GameObjects which can be instanced in multiple game levels. Examples of Prefabs in our implementation include the Player character, the applica-tion’s UI and modular 3D environment pieces which are assembled into levels. 

11The CINEMACHINEBRAIN component is responsible for defining the current active camera, camera transitions and the signals that trigger each transition. 

12GameObjects in Unity represent every entity which can be instanced in a game level, and which might contain rendering, audio, systems or behavior-related components. 

13The Main Camera is a special GAMEOBJECT with a CAMERA component which is responsible for rendering the final output of our camera management system. 

14VirtualCameras are Cinemachine abstractions that define the physical properties of a camera along with transposing and composing strategies

100 

implementation. To implement the position and framing of the Orbital Camera, we set 

the Transposing Strategy property value to Orbital, and we assigned a a pivot point above 

the player as a LookAt target. For the Lock-On camera, we used the Follow transposing 

strategy and the Group Composition strategy to frame both the player character and their 

target enemy. 

We also added a GAMEOBJECT containing a PLAYERCAMERADIRECTOR com-

ponent, which is responsible for receiving signals from the Player component and trans-

lating them into signals for the CINEMACHINEBRAIN. The signals are then used to switch 

and transition between shots. The PLAYERCAMERADIRECTOR is also responsible for 

enabling and disabling PLAYERCAMERABEHAVIOUR components, which receive player 

input, manage camera framing targets and initialize camera states. 

The VIRTUALCAMERA components receive player input and process such input 

into positional or state change actions. For instance, the ORBITALCAMERA receives a 

two-dimensional vector as input, which is translated into rotations and translations over 

the X and Y axes. In the Lock-On camera, the horizontal axis of the vector input is used 

to switch Lock-On targets. Figure 4.4 shows an overview of the class relationship in our 

camera system implementation, as well as the signals that are being sent and listened to. 

To constrain cameras inside the playable space, we used invisible collider ob-

jects which define positional boundaries for cameras. Such colliders represent a simpli-

fied version of the environmental geometry, using mostly Axis-Aligned Bounding Boxes 

as intersection validation targets. We use such method to improve the performance of 

intersection-checking raycasts and to avoid jittery movement when using pull-forward 

camera collision resolution on thin objects. The invisible colliders are limited to interact 

with camera algorithms, and do not interact with player movement or any physics entities. 

To detect entities which are eligible to be targets for the Lock-On camera, we use 

a spheric collider in a radius around the player and check for intersections inside its area. 

Detected entities inside the spheric collider are intersected with the group of entities which 

can be seen in the camera’s viewport, to constrain Lock-On selection to entities which can 

be seen by the player. Eligible targets are collected into a list ordered by distance to the 

player character, which is updated every second. This is done because targets that are 

closer to the player are considered a higher threat, as they are more likely to hit the player 

when attacking. 

Horizontal player input is used to switch between targets in the Lock-On camera. 

Moving the input axis to the left switches to the closest target at the left of the current

101 

Figure 4.4: A diagram showing the class relationship of our Camera System implementa-tion, along with the signals being sent and processed. 

Source: Diagram assembled by the authors. 

Locked-On target, using coordinates relative to the camera’s viewport space. Similarly, 

moving the input axis to the right will select an entity to the right of the current target. 

Therefore, the position of the next target is selected by comparing the X axis of entities 

when converting their coordinates to a camera’s viewport space.

102 

4.3.2 Movement mechanics and physics 

Traditionally, the movement for player-controlled characters in games is not de-

signed to be physically realistic. Characters will often move at abnormally high speeds, 

are able to stop almost immediately and can turn their movement direction with ease. 

This is done so that character movement is highly responsive to raw player input and be-

comes easier to manipulate in comparison to physics-based controls. If player characters 

in video games were to be physically accurate, they would take significant time to accel-

erate to their maximum movement speed and decelerate until stopped, while also having 

difficulty turning sharp angles at high speeds. 

When considering gameplay aspects, characters implemented with physical ac-

curacy feel heavy and difficult to control, forcing the player to calculate the physical 

properties of their characters and virtual environment. This causes a significant amount 

of overhead for players desiring to achieve proficiency with motion controls. Therefore, 

character movement should be a streamlined and trivial mechanic that can be quickly 

mastered, unless movement itself is a purposefully designed game challenge, such as in 

Death Stranding15. 

Considering the need for responsive movement that can be easily mastered, we 

use the CharacterController16 component that is natively built-in as part of UNITY’s base 

functionality. CharacterControllers are not affected by native physics systems, and im-

plement common gameplay-related functionality such as the ability to slide along walls 

when moving in a non-orthogonal angle, detecting and stepping over small vertical off-

sets in ground geometry such as steps and ledges and handling movement constraints in 

ramps. 

4.3.2.1 Camera-Based Movement 

In our implementation, movement input generates different motion types depend-

ing on camera state. In the Orbital Camera, input causes the player to rotate and move 

towards a direction which is relative to the camera’s orientation. To animate the player’s 

character model in such state, the movement system signalizes a continuous frontal move-

15Death Stranding (Kojima Productions, 2019). Video Game. PlayStation 4, PlayStation 5, Microsoft Windows. 

16CharacterControllers are system components which contain functionality to move a player-controlled character in a two-dimensional or three-dimensional environment. In Unity3D, the CharacterController component contains reusable functionality for handling collision with the ground and walls, moving over slopes and climbing over steps.

103 

ment to the Animation System. Positional transforms are handled by the Animation Sys-

tem, with the objective of matching movement speed with animation keyframes – which 

circumvents movement drifting17 issues. 

A character with minimal physics fidelity should be unable to immediately turn 

to the opposing movement direction after fully accelerating. However, player controls 

should still provide some level of responsiveness regarding character rotation changes. 

Therefore, handling body rotation through player input requires imposing constraints, as 

it is necessary to create a minimal sense of weight to a character while maintaining an 

acceptable input response. Thus, the maximum rotation speed attribute is implemented to 

constrain the speed at which a player is able to turn. 

In the Lock-On18 camera, player input causes their character to move without 

changing body rotation. In this state, the player character always faces their target. As 

for the movement direction, the Animation System uses player input to blend movement 

between three states: forward movement, side steps and back steps. Since the viewport 

is automatically defined by the positions of the player and their target without consider-

ing player input, the player always performs circular movements around their target in 

the Lock-On state. Camera positioning for Locked-On Cameras is further explained in 

subsection 4.3.1. 

4.3.2.2 Grounded State Detection 

Another state that was considered in our movement implementation is when the 

player is not touching the ground, such as when falling from a ledge. In this state, the 

Capsule-shaped collider19 defined by the player’s CharacterController does not overlap20 

with ground geometry. In such situation, the player character should be considered "On-

Air", and movement input should have less influence in motion. Should the player’s char-

acter be able to accelerate, decelerate or turn while airborne, players might experience 

17Movement drifting occurs when the position translation of a game entity does not reflect the visual representations of their movement. It is a common issue in game animation, where a player’s speed does not accurately reflect the animation performed by the character model. 

18Lock-On is a common mechanic in games with considerable freedom of movement to lock the player character’s aim to a target. The mechanic facilitates landing successful strikes at enemies, and in third person games allows circular strafing around the target. 

19Colliders are simplified and invisible meshes used to perform collision intersection checks in physics-based simulations. Colliders are widely used in games due to their low computational cost, as well as their native support in game engines. 

20Collider overlapping, also known as Collision detection or Collision intersection checking, is the act of detecting an intersection between two geometry shapes. In 3D video games, collision checking often uses simplified geometry shapes such as cuboids and spheres for more efficient resolution algorithms which can attend to the performance requirements of the application.

104 

a break in the immersion. In our implementation, we constantly accelerate our Charac-

terController velocity by a gravity vector on fixed time steps when the player is not on 

ground. 

To detect if the player is airborne, we perform a collider intersection check be-

tween the player and ground geometry. We make use of Unity’s built-in SphereCast op-

eration, which performs multiple sequential intersection checks of a sphere envelope (a 

spheric collider with a radius slightly higher than the player’s character model radius) 

with ground colliders. The intersection checks are performed along a Ray21, which origi-

nates from the center of the player’s character model and extends along the gravity vector. 

We use a length of three quarters of the player’s collider size as a distance limit to detect 

the ground. 

With the use of rays for collision detection, vertical collisions can be detected 

ahead of time when the player is falling at high speeds. This circumvents the common 

problem in video game physics where when the player’s vertical speed is too high, they 

could become stuck inside ground geometry if the collision detection algorithm does not 

take into account the game’s update rate. Another advantage of using Raycast-type22 

operations is precisely detecting the points where a collider intersects with a ray. This 

enables precise definition of which parts of a collider interact with ground geometry. 

Listing 4.1 shows our implementation for detecting ground collision. 

Listing 4.1 – Implementation of grounded state detection. 

1 var ray = new Ray(transform.position, Vector3.down); 

2 grounded = Physics.SphereCast(ray, charController.radius + 

0.1f, charController.height / 2f + 0.5f, physicsData. 

GroundDetectionLayers.value); 

3 // Animator also applies gravity, so when not grounded 

disable animator physics 

4 player.Anim.applyRootMotion = grounded; 

21Rays are commonly used in video games to represent three-dimensional non-volumetric vectors with an origin position, a length and a direction. Such vectors can be used to perform collision intersection checks for specific game systems which do not involve renderable game entities. For instance, in first-person shooter games, rays are commonly used to check whether a player succesfully shoots a target centered at their Crosshair. 

22Ray Casting is a collision intersection resolution algorithm where a ray is projected and tested against colliders in a 3D environment. In the context of our implementation, Raycasting is used to detect collision of entities which move at high speeds, such as the player being affected by gravity.

105 

In contrast to Ray Intersections, the SphereCast operation used in our algorithm 

is able to detect overlaps in a volume, which means that complex collider setups which 

intersect in the borders of a Capsule are detected. A common situation in games where 

platforms and gravity can affect the player is that players might find themselves above 

multiple close but separated ledges. Raycast operations are unable to handle this situation, 

as the rays might not intersect with any of the ledges. 

If grounded-state detection is not handled appropriately, components which han-

dle entity acceleration might accumulate vertical velocity indefinitely. If the player is col-

liding with ground geometry but the logical systems consider the player On-Air, player 

velocity constantly accumulates the gravity force. In such cases, after player steps away 

from a ledge, their character instantly falls to the ground in abnormal speed. If the game 

is programmed to apply fall damage, this often results in instant death, even though the 

player did not fall from a considerable height. 

In the frame where a character that is On-Air detects ground collision, we in-

voke the ONHITGROUND event, and proceed to perform fall damage calculation. In 

our implementation, fall damage is calculated by considering fall speed multiplied by a 

parametrized speed-to-health-point conversion factor, named ’FallDamageMultiplier’. 

4.3.2.3 Movement System Design 

Figure 4.5 shows an overview of the class architecture for our implementation of 

the movement system. We implement top-level PLAYER class which contains the com-

ponents for all gameplay-related subsystems. The PLAYERMOTOR component is an im-

plementation of the ICHARACTERMOTOR interface, and is responsible for implementing 

the movement and physics logic of our motion controls. 

When input is received from the user, the PLAYERMOTOR component filters the 

input, calculates a target movement direction based on viewport orientation, and dele-

gates position changing to the PLAYER.MOVE() method. The PLAYER class calls the 

CHARACTERCONTROLLER.MOVE() method from Unity’s API, which considers colli-

sions and other physics-related constraints. The Player.Move() method also broadcasts 

animation-related signals that are consumed by the PLAYERBODY class, which in turn 

communicates with Unity’s ANIMATOR.

106 

Figure 4.5: Class diagram representing the architecture of our Movement System. 

Source: Diagram assembled by authors. 

4.3.3 Attributes System 

In our implementation, we define an abstraction layer for runtime variables that 

represent the state of game entities, and can be serialized through saving and loading. 

Attributes are used to represent status for the Player and enemies – with variables repre-

senting health, stamina, poise, damage, speed and others. We also use attributes to define 

the state of interactable objects such as doors and levers – with boolean variables such as 

ISOPEN or ISTOGGLED. Attributes can be initialized, serialized and monitored by exter-

nal systems, such as the native dependency injection in Unity’s INSPECTOR and our data 

persistence system which serializes runtime data through scenes. 

Attributes are based on C# Generics, and can be generated for any value type 

such as integers, floating point variables, strings and enumerations. This limitation is 

imposed in our architecture so that attributes can be easily serialized into binary data files

107 

that can be used to define the default and maximum values for each attribute holder. This 

constraint also facilitates Attribute initialization, which is useful to support persistent data 

such as maintaining attributes between levels or loading the state of an entity from a file 

in a savegame system. 

Attribute specializations implement the IATTRIBUTE interface, which exposes 

acessors for data manipulation and events for value changes. Events facilitate the use 

of attributes by external components, decoupling independent systems in our architec-

ture. An example can be observed in our UI (User Interface) elements, which subscribe 

to value change events in player status attributes such as Health, and update Health bars23 

whenever the health attribute publishes a change. 

Another advantage of using event systems is the flexibility to add and remove sub-

scribers as required. As an example, when implementing the UI for the player character 

we can initially propose a single health bar to monitor player health. If requirements for 

our application change, we can iteratively add new elements such as floating text, combat 

messages and visual effects without prior knowledge of which systems will be required 

in the final release. 

To decouple attributes from their owners and the systems which modify them, 

we created a standardized interface for containerizing and accessing them under differ-

ent entities. We implement Attribute Containers, which provide a public interface for 

instantiation, access and manipulation of statically typed attributes for an entity. Attribute 

Containers can be queried by external systems for type-based compatibility. By using 

this access layer, we can provide polymorphic attribute mutability based on compatibility. 

Figure 4.6 shows an overview of the class relationships in the Attributes System, along 

with examples of how attributes signalize changes to external components such as UI 

Elements. 

4.3.4 Combat System 

To implement the combat mechanics in our Souls-like implementation, we defined 

a list of requirements for combat-related components: 

 Manage attack animations and logical states for the player character; 

23Health bars show the current player health and also provide a good estimation of health lost when getting attacked by an enemy using a secondary, trailing health bar.

108 

Figure 4.6: Class diagram for the Attributes System, showing examples of signals being used by UI Elements. 

Source: Diagram assembled by the authors. 

 A Hit Detection System which is able to detect when the weapon of the attacker 

overlaps with the Hitbox of a target to validate a Succesful Hit; 

 Verify if attacks are blocked or dodged, and apply modifiers to Combat Effects; 

 Apply Combat Effects when a target is hit, such as a Health Damage effect; 

 Modify character state according to the effects that are applied. 

By invoking the aforementioned functionality with player input and AI agent actions, we 

created a satisfactory combat system that provides appropriate feedback to player actions 

and decisions. In Figure 4.7, we provide an overview of the subsystems and classes 

regarding to our implementation of a Combat System. 

The entry point for our combat system is invoking, either through player input 

or AI issued commands, of combat-related Commands24. We defined a dictionary-based 

24Command is a commonly used code design pattern to encapsulate data and actions related to an event into an object. In games, the Command pattern is commonly used as a layer of separation between the Input system and the response triggered by input in in-game entities.

109 

Figure 4.7: A class diagram containing an overview of the class relationships in our Com-bat System implementation. 

Source: Diagram assembled by authors. 

data structure to map input button codes to player character commands. The keys to our 

dictionary are queried for at every frame, and if a key press is detected we execute the 

command which represents its respective value. For instance, if the button mapped to 

the Attack Command is pressed, we proceed to verify the current state25 of the player to 

determine if an attack can be performed. 

For each Command, we define a set of restrictions which block the player from 

executing such command if their validation condition returns false. For instance, in our 

implementation the player is unable to attack if they are executing an action which would 

render their character unable to use their sword. Therefore, if the player is in the Dead, 

Staggered, AttackEnding, On-Air, Landing, Dodging or Blocking states, they are consid-

ered unable to perform an attack, and thus the validation for the ISNOTBLOCKEDBYAN-

25The current state of the player is defined by a composition of boolean variables that reflect by the Animation being played on their character model.

110 

IMATION restriction fails. This is commonly referred to as Animation Locking in games, 

and is considered a crucial feature used to balance game difficulty. Attack Commands 

also have a resource cost for the player, where each attack depletes an amount of Stamina. 

If the player Stamina resource has a value of zero, the player is unable to perform an 

attack. Therefore, we also define the HASSTAMINA restriction, requiring the value of the 

player’s Stamina attribute to be higher than zero. 

After an Attack Command is successfully validated, the player’s state is set to At-

tacking. An Attack State Machine is initiated, where Attack Commands are preemptively 

checked for during attack animations. If an Attack Command is successfully executed 

before an attack animation ends, an Attack Chain is toggled, causing the next attack an-

imation to be queued and triggered when the current animation ends. This behavior is 

commonly referred to as a Combo in video games. If no Attack Command is successfully 

executed within the Attack Chain time frame, the player exits the Attack State Machine 

and is locked to a short AttackEnding animation state. Figure 4.8 shows the state machine 

used to implement the aforementioned behavior. 

Figure 4.8: A state machine used for our implementation of the Attack and Combo sys-tem. 

Source: Diagram assembled by authors. 

During combat-related animations, the Animation System broadcasts event sig-

nals that toggle the activation or deactivation of the Hit Detection System, which has the 

purpose of validating whether an attack successfully hit an enemy. At a certain point

111 

during the attack animation, we broadcast the ATTACKCOLLISIONSTARTEVENT, which 

signalizes that attack collisions must be checked on each frame until the ATTACKCOL-

LISIONENDEVENT is published. The ATTACKCOLLISIONSTART and ATTACKCOLLI-

SIONEND26 events are triggered in the short time frame where a character swings their 

weapon. Figure 4.9 shows the relationships between components involved in issuing At-

tack commands and handling hit detection. 

Figure 4.9: A diagram showing the event flow and class relationship of the Attack and Combo related classes. 

Source: Diagram assembled by the authors. 

To implement hit detection, we perform collision intersection checks in fixed time 

intervals of 16 milliseconds. Objects involved in combat-related collision checking are 

restricted to a special layer called HitDetection, where every Collider is either the weapon 

of an attacker or the body of a target. Restricting the elements involved in a hit detection 26The ATTACKCOLLISIONENDEVENT is required to be signalized after the ATTACKCOLLISION-

STARTEVENT and before the attack animation ends so that attacks appropriately reflect what the attacking character performs.

112 

system is a required optimization for collisions to be detected consistently. If the Hit 

Detection system is unable to meet the 16 milliseconds time constraint, there is a small 

chance that an attack might not be detected, where an attacker weapon "passes-by" the 

body of the attacker without triggering the collision event. 

We estimate that in our implementation attack collision detection occurs for ap-

proximately 20 frames from the point where it is first activated. Thus, if a computer 

system is able perform at least 4 updates per second, attack collision is guaranteed to be 

correctly detected. It is important to note that updates to the collision detection system are 

independent to the rendering performed by the graphics pipeline, and as a consequence 

are unaffected by graphics-related stuttering. 

We also employed several safety measures to ensure that attack collision detection 

does not trigger a Hit event twice for a same attack input. Therefore, we store a refer-

ence to an AttackCollision instance in the Hitbox component of the target entity for each 

attack command. The Hitbox component listens for the AttackCollisionEndEvent, which 

determinesn when the reference can be deleted. At this point, the attacker’s hit detection 

system does not perform any collision checks for the same attack. 

For each occurrence of an attack collision, two colliders are involved: one for the 

weapon of the attacker, and one for the body of the target. The colliders are instanced 

as bounding boxes27 that fully or partially enclose the 3D models of their relative entity 

(an attacker’s weapon or a target’s body). To perform collision checks with a reason-

ably optimized numbers of collision checks, we simplify collision by introducing a single 

bounding box that encloses the torso, the head and a central position of the target’s legs. 

Using this method, we minimize the amount of collision checks per frame, while also 

having appropriate precision for our gameplay purposes. 

After the collision detection step is performed, we validate that the target is not 

part of the attacker’s Combat Group by comparing the FACTIONATTRIBUTE value of the 

involved entities. We perform such distinction to avoid a situation where player enemies 

would damage themselves when attempting to hit the player when too close to each other. 

The values that the faction attribute can be assigned are described in Table 4.2. In addition, 

Figure 4.10 shows the execution flow and class relationship of components used during 

the Hit Detection step. 

After validating an attack as a Succesful Hit to a target, we apply Combat Effects 

27Bounding boxes are cuboid volumes which completely envelop an object in a two-dimensional or three-dimensional space. In games, bounding boxes are tipically used for simplified collision intersection check-ing, as they are sufficiently precise and less expensive than calculating the collision for complex meshes.

113 

Table 4.2: A description of the values that can be assigned to the Faction Attribute of targets that are part of the Combat System in our implementation. 

Name Id Description 

Player 0 Player character. The player is a single entity and the sole par-ticipant of this faction group. 

Enemy 1 AI Agents that represent Enemies, which are hostile to the player character. 

NPC 2 

Non-Playable Characters. AI Agents which are not hostile to the player character, but are hittable by and potentially hostile to Enemies. An example of a Non-Playable Character would be a companion which follows the player character and aids them in combat encounters, being hostile to characters belonging to the Enemy faction. 

Interactable 3 

Static objects that can be attacked by the Player, Enemies or Non-Player Characters and provide some type of feedback when attacked. An example of an interactable entity would be a barrel that can be attacked and destroyed. 

contained by the Attack onto the target. Combat Effects are containers to a set of attribute 

changes, status changes and any behaviors that might occur when a character is struck 

by an attack. Examples of Combat Effects include the Damage dealt to the Health of a 

target, a StatusEffect such as a Stagger28 and physics effects such as a Knockback29. To 

be affected by a combat effect, the target entity must possess a compatible component 

or attribute which is able to handle the change proposed by the effect. Therefore, if the 

player hits an entity and applies the DamageHealth effect to a target, the target has to 

possess the HealthAttribute component for the effect to be applied. Figure 4.11 shows an 

overview of the relationship between classes and components regarding the application of 

COMBATEFFECTS to ICOMBATTARGET entities. 

We differentiate between Instant Combat Effects and Over-time Combat Effects. 

Instant Effects are applied to a target when a discrete event such as an attack takes place, 

and simply modify the value of an attribute or apply a temporary Status. Examples of 

Instant Effects include the Health damage caused by an attack, which is applied to the 

target; And the Stamina cost of performing the attack, which is applied to the attacker. 

A status change effect can be seen when the player performs the Dodge action, which 

28A Stagger effect renders a character unable to perform any actions for a short amount of time. In most video games, functionality for a Stagger is the same as a Stun effect, but the effect occurs throughout a much shorter length, while also displaying a different and unique animation to the player. 

29A Knockback effect physically pushes a character away from a source of impact. In our implementation, the target of the effect is unable to perform any actions while being pushed.

114 

Figure 4.10: Class diagram showing an overview of the components and flow of events related to the Hit Detection System. 

Source: Diagram assembled by authors. 

temporarily applies the Invincible status effect to their character. 

In contrast, Over-time Effects occur in fixed time intervals over the course of a 

duration (or can have an unlimited duration, being bound to the lifetime of an entity). 

An example of Over-time effect would be STAMINAREGENERATION, an effect which 

is permanently applied to the player when not performing any combat-related actions. 

During the course of a level, the player recovers a fixed amount of Stamina over fixed time 

intervals. The regeneration is blocked temporarily by the STAMINAREGENBLOCK effect 

after the player performs any combat-related action which makes use of Stamina, such as

115 

Figure 4.11: Class diagram representing the relationships for Combat Effects and affected components. 

Source: Diagram assembled by authors. 

attacking, dodging or being struck by an attack. After a certain amount of time without 

issuing combat-related commands, the StaminaRegeneration effect is re-enabled. We also 

apply modifiers to the amount of recovered stamina under certain circumstances. For 

instance, entering the Blocking state halves the amount of stamina recovered by applying 

the BLOCKINGSTAMINAREGENMODIFIER effect. 

Combat Effects are restricted to performing modifications on a limited set of At-

tributes and Components exposed through the ICOMBATTARGET interface, which is im-

plemented by any entity which can be attacked. Before effectively applying an effect to a 

target, we first check if the target contains any Combat Effect Modifiers, such as a damage 

modifier caused by the target Blocking or Dodging an attack. If the target has compatible 

effect modifiers, the ATTACK class uses such modifiers to reconstruct its Combat Effects 

with updated values. For instance, if the target successfully blocks an attack, the BLOCK-

DAMAGE modifier is applied to any DAMAGEHEALTH effects by halving the damage 

amount. After the reconstruction of Combat Effects using any applicable modifiers, we 

apply the final effect to the target entity. 

In Figure 4.12, we show an overview of all the steps involved with handling at-

116 

tacks, starting from the player issuing Attack commands through the Input System, pro-

ceeding to the management of animation states associated with weapons, validating Hit-

box collision and combat groups with a Hit Detection System, and finally applying combat 

effects to modify target attributes and execute behaviors. 

Figure 4.12: An event flow diagram that shows an overview of each step in our imple-mentation of attacking in the Combat System. 

Source: Diagram assembled by authors. 

To perform a Block, the player is required to hold an input button which con-

tinuously issues the BLOCKCOMMAND. When the player character is hit by an attack 

while performing a Block, we calculate the vector dot product between the attacker and 

player directions to determine if an attack was succesfully blocked. If the result of the 

dot product has a negative value, the player is considered to be correctly pointing their 

shield towards the target, which results in a successful block. If the result has a positive 

value, we consider that the target attacked the player from their flank or back, and thus 

the player was unable to block the attack. 

Contrary to blocking, the DODGECOMMAND is issued at the discrete press of a

117 

button. When the dodge command is issued, the Dodge action is signalized to the anima-

tion system, which in turn responds by moving the player character accordingly. If the 

dodge command is issued towards a specific direction (by using a movement command), 

the Animation System translates the character towards such direction. If the player is 

stationary when issuing the dodge command, the ANIMATOR simply uses the current di-

rection being faced by the player character as a translation direction. Over the duration 

of the dodge animation, we issue the DODGEIFRAMESBEGIN and the DODGEIFRAME-

SEND events, which toggle the INVINCIBILITY status to the player. Combat invincibility 

effect nullifies any combat effects towards the player. 

4.4 Artificial Intelligence and Enemy Design 

As discussed in 3, enemies in Dark Souls are implemented with simplistic and 

predictable behavior. When spawned, enemies either remain stationary or move through 

predefined paths until interaction with the player. When detecting player presence, ene-

mies switch to a combat stance where a limited and small set of attacks can be performed. 

Attacks are only performed if the player is in sufficient range to be hit. After performing 

an attack, enemies switch to a defensive stance for a predetermined Cooldown30 duration. 

4.4.1 State Machines 

While we were unable to gather specific information pertaining how AI Agents are 

implemented in the original game, we argue that State Machines can be used to implement 

identical behaviors due to their simplicity. Using State Machines, we represented enemy 

objectives and actions as States and Behaviors. At any given point in time, each enemy 

is in a specific State, and each State contains a set of behaviors which define the actions 

it can perform. Such actions can be restricted or chosen upon based on environmental 

properties and player state. 

When an enemy is stationary, we consider it to be in the Idle state, which contains 

no particular Behaviors attached to it. When an enemy is moving along predefined paths 

and scouting for targets, it is considered in the Patrolling state, which contains the Scan 

30A Cooldown timer represents the fixed amount of time where a specific action is blocked to an entity after performing it. In the case of AI agents in our implementation, enemies are unable to attack for a fixed time interval after a previous attack took place.

118 

Behavior. The Scan behavior checks for player presence in an area near the owner entity, 

and upon detection causes the AI agent to enter the Chase state. The Patrolling state also 

contains the WaypointMovement Behavior, which handles the entity’s pathfinding along 

a predefined route. Figure 4.13 shows the state machine used by Melee enemies in our 

implementation, such as Ghouls and Warrior Skeletons. 

Figure 4.13: An example of the State Machine that represents a Melee Enemy AI Agent. Each state holds its own behavior. 

Source: Diagram assembled by authors. 

We implemented modular and generic State Machines which can be used outside 

the scope of AI Agents. The reason for this approach was to facilitate the management 

of player state, helping to constrain the actions which the player can perform given the 

current game state. We defined a reusable STATEMACHINECONTROLLER component 

which can be assigned to a MonoBehaviour. In the context of AI Agents, the StateMa-

chineController is attached to an AICHARACTER, which represents any AI-controlled 

agents. The STATEMACHINECONTROLLER contains a reference to the STATEMACHINE 

and its owner, and is tasked with performing frame-bound updates to states and validating 

transition conditions that toggle state changes. 

The definitions of State Machine, including their States, Transitions and Behaviors

119 

are constrained to serializable space, being bound to asset files that are referenced by the 

STATEMACHINECONTROLLER. The STATEMACHINE class contains serialization data 

used by STATES. Each State contains a variable set of Transitions and Behaviors. 

Transitions reference an origin and a target state, and contain a set of boolean 

validation functions that define when such transition occurs. Behaviors determine the 

actions can be performed by the State Machine owner. In Table 4.3, we define all AI 

Agent behaviors in our implementation, specifying the States in which they are used and 

a brief description of the actions performed by the AI Agent when executing the Behavior. 

Table 4.3: A list of the behaviors in the States of the AI Agents in our implementation. 

Name Related States Description 

WaypointMove Patrolling Uses a set of waypoints (which can be empty) to move a character in fixed points on the NavMesh of the environment. 

Scan Idle, Patrolling 

Uses a set of collision triggers to detect ene-mies of the AI agent in an area around or in front of its position, and assigns a target upon detection. 

Seek Seeking Follows a target, constantly moving to its posi-tion until the target is out of range. 

AdjustDistance CombatMovement Adjusts the distance of the AI Agent to be close enough to perform an attack, without being too close to the target. 

PlanAttack CombatMovement Chooses the next attack based on the actions being performed by the target, or by using ran-dom number generation. 

Attack CombatMovement Performs the chosen attack on the target using the Attack System pipeline. 

RotateAttack CombatMovement Performs body rotation to adjust the attack to a moving target. The rotation has limited speed to permit the target to dodge. 

Shoot Shooting Used by ranged enemies. Continuously shoot arrows at a target until the target is out of range. 

Death Dead Deactivates all components, triggers the death animation and de-spawns the AI agent. 

States are serialized and independent of instanced objects, which creates the re-

striction that Behaviors are unable to store runtime data representing entity state. There-

fore, we are required to maintain the data used by each behavior in a container for the 

STATEMACHINECONTROLLER. For this reason, we create the ISTATEMACHINEOWNER 

interface, which provides a public accessor to a HASHMAP structure which contains the 

runtime and referenced data for an instanced entity, using an identifier for the current state

120 

as the Key. Figure 4.14 shows the class and data structure relationships for our implemen-

tation of state machines. 

Figure 4.14: Class relationship for our State Machine implementation from the perspec-tive of AI Systems. 

Source: Diagram assembled by authors. 

4.4.2 Implementation of Behaviors 

To implement AI Agent pathfinding when executing the WAYPOINTMOVE or 

SEEK behaviors, we use Unity’s NavMesh system, which uses the topology of 3D ob-

jects and predefined movement costs to generate a planar mesh representing traversable 

surfaces. The resulting mesh also contains weights for each vertex, which causes the

121 

AI Agent to prioritize certain paths which are considered optimal. Using data generated 

from NavMeshes, we define the movement path as a set of positions calculated by the A* 

algorithm, using the Manhattan Distance31 function as an estimation heuristic. 

To scan for targets in the environment and initiate combat, AI Agents contain a 

spheric collider representing a radius where targets can be detected. We constrain such 

targets to those within a frontal view cone defined by the agent’s orientation. We validate 

whether an entity is inside an agent’s view cone using the Target’s Relative Direction, 

which can be calculated by subtracting the agent’s position from the target’s position, 

normalizing the result and projecting it onto the ground plane. We then use Unity’s VEC-

TOR3.ANGLE operation to compare agent orientation and the target’s relative direction, 

and clamp results to a cone of 90 degrees. 

When an entity of the type ICOMBATCHARACTER enters the resulting area, such 

entity is marked as an Elligible target. Elligible targets are then further restricted by the 

value of their FACTIONATTRIBUTE, where a valid target must belong to a different faction 

to the agent. The agent will then mark the first detected elligible entity as their target, and 

proceed to chase them. 

Therefore, when an enemy AI agent is able to defeat their target, they are reset 

to the Idle state. A similar event happens when the AI agent is in the Seeking state and 

the target can not be reached. If the target is in an unreachable position where there is 

no traversable ground geometry from the agent to their target, the AI loses interest in the 

target and returns to its default state. 

To differentiate the behaviors of different enemies, we created state machine def-

initions based on Enemy Types. Each enemy type has their own state machine definition, 

with different behaviors for each state. For melee-ranged agents, we defined the unique 

COMBATMOVEMENT state. In such state, AI agents adjust their position and execute at-

tacks based on target state and environment properties. The COMBATMOVEMENT func-

tions as a sub-state machine, where we switch between three stages to give the impression 

of different states: POSITIONADJUSTMENT, ATTACKPLANNING and ATTACKEXECU-

TION. 

In the POSITIONADJUSTMENT stage, we perform several steps to calculate the 

position to which an agent should move towards. First, we define a distance relationship 

between the agent and their target; Then, we define a radial distribution position, which 

constrains the agent to a directional range in a circular perimeter around the target. 

31Manhattan distance is a simplified distance estimation between two points in a vector space. It is commonly used in realtime pathfinding algorithms due to its low computational cost.

122 

To define the distance relationship between the agent and their target, we query the 

GROUPAIBRAIN32 component to check if the player is dealing with too many enemies. 

In that case, the agent takes an idle stance and remains in the backline, avoiding direct 

conflict with their target. Similarly, we determine if the AI agent attacks are on cooldown, 

which also positions the agent throughout the backline. We then calculate the average 

Hitbox Central Point33 distance for all attacks that the AI Agent can perform. We use this 

average to create a target position that maximizes the chances of hitting the target. The 

agent adjusts their distance towards or away from their target, and executes the attack. 

To define the radial-distribution position for an entity, the AI Agent is assigned a 

numeric priority index upon entering the Combat Encounter34. The value of the priority 

index is used to evenly arrange AI Agents in an arc of a circular perimeter around the 

player. The aperture of the arc is defined by environmental geometry around the player 

and dynamic adjustment metrics. If the arc boundaries are not restricted by environmental 

geometry, the aperture is defined by an adjustable radian supplied by the GROUPAIBRAIN 

component. 

The arc is divided in equal size segments that distribute agents uniformly around 

the player. At the beginning of a combat encounter, a single agent becomes part of the 

AI group. This initial agent is defined as the pivot for the group. The arc is divided in 

two segments centered at the pivot. The following two agents are placed at the outer 

boundaries of the arc, each at the limits of their respective segments. Every subsequent 

agent subdivides the largest segment that is closest to the pivot, using the center position 

of the segment and creating two new segments. 

When the pivot agent is defeated, a new pivot is selected based on its distance from 

the original pivot, and the segments are recalculated. We iteratively add each subsequent 

agent which is closest to the pivot through the same algorithm. When non-pivot agents are 

defeated the group is also recalculated, but we retain the same pivot when recalculating 

segments. This algorithm is exemplified by Figure 4.15, and the resulting behavior is 

exemplified by Figure 4.16. 

In the PLANATTACK behavior, we use information regarding player state and con-

straints imposed by the GROUPAIBRAIN component to define if an attack can be exe-

32The GROUPAIBRAIN component is a manager to all AI agents engaged in a Combat Encounter against the player. 

33The Hitbox central point refers to a hypothetic central point between the limits of a bounding box that envelops all Hitboxes of a game entity. 

34AI Agents are considered to be in a combat encounter when the player is within their effective combat range. For melee-ranged enemies, this is determined by being in the COMBATMOVEMENT state.

123 

Figure 4.15: Illustration of the "Arc Segments" algorithm for radial positioning of AI Agents around the player character. 

Source: Diagram assembled by authors. 

Figure 4.16: An example of melee enemy group positioning with five AI Agent enemies. 

Source: Diagram assembled by authors. 

cuted, and which attack an AI Agent should perform. Each attack has a different purpose 

designed to guide the player towards a specific response. 

First, we query the GROUPAIBRAIN component to check whether the agent has 

permission to attack. Enemy AI Groups have shared Enemy Group Cooldown timers 

that reset when an agent performs an attack. Agents that are part of a group will be 

unable to attack unless at least one cooldown timers is available for use. The numbers of 

timers available and the cooldown time are determined by adaptive parameters from the 

GROUPAIBRAIN component, and are further discussed in section 4.5.4. 

Second, the PlanAttack behavior uses information on attack types available to the

124 

entity to query which information is necessary to decide the attack. We communicate 

with the GROUPAIBRAIN component to determine if the entity is able to perform Special 

Attacks. Given a small interval of time, a limited number of non-basic attacks can be 

performed by an agent. If the agent is unable to perform a Special Attack after querying 

availability from the GROUPAIBRAIN component, it simply chooses one of multiple basic 

attacks to perform. 

Special attacks have the purpose of creating incentive for the player to vary their 

reactions. For instance, the Overhead and Pierce attacks are designed to punish the player 

if attempted to be blocked, and drain a significant amount of the Stamina resource. If the 

player does attempt to block one of such attacks, they will quickly find themselves out of 

Stamina and trigger a Poise Break35 status. 

Then, we check if the player is still out of attack range after adjusting its position 

during the PositionAdjustment behavior. In such case, we use a parametrized threshold 

as a probability for the agent to perform a Charge attack, if it is one the available special 

movements. The threshold is combined with a metric from our DDA system regard-

ing the frequency of player back-steps, which affects RNG (random number generation) 

probabilities for the Charge attack. The parametrized thresholds for each attack type are 

explained further in section 4.5.4. If the agent is not able to perform the Charge attack, it 

is reverted back to the PositionAdjustment behavior. 

Similarly, we check if the player is blocking and use a threshold for a Anti-Block 

attacks, such as the Overhead or Pierce attacks. We combine the threshold with the 

frequency of player Blocks, and use the resulting value as an input probability for the 

Anti-Block attack. Anti-dodge attacks also use the same approach, with the exception that 

we disregard current player state. Since the dodging action is discrete and occurs in a 

fraction of a second, the agent attempts to predict when a player would perform a dodge 

solely through statistical data. 

4.5 Dynamic Adjustments System 

To implement a DDA system which modifies game difficulty to be in harmony 

with player skill, we need to capture gameplay data which can be translated into skill 

evaluation metrics. We satisfy this requirement by recording gameplay events in a tabular 

35A Poise Break occurs when a character’s poise attributes temporarily reaches a value of zero. In such situtation, the character is briefly Staggered, and becomes vulnerable for enemy attacks.

125 

format, which can be reconstructed after completion of game levels to generate metrics. 

We calculate such metrics to represent the frequency and efficiency of actions performed 

by the player during a level. Then, we use such metrics as an input to a comparison with 

predefined thresholds, which serve as discrete delimiters to predefined parametrized ad-

justments to difficulty. Figure 4.17 provides an overview of our implementation of a DDA 

system, showing the execution flow and interactions between the defined components. 

Figure 4.17: Diagram illustrating the execution flow of the dynamic adjustments system in our application. 

Source: Diagram assembled by authors.

126 

Table 4.4: A description of the fields associated with an EVENTINSTANCE. 

Name Type Description 

Timestamp double The time since application start when an event was raised. Measured in seconds. 

Name String The Name Identifier for an event. Category String The System from which the event is raised from. 

Source ObjectId The source in-game entity which caused the event to be raised. 

Params Array of Tuples 

A set of data parameters, given in string format, that are used to represent any contextual related with the event. 

4.5.1 Event Tracking Objectives 

We begin the pipeline of our adjustments system through data acquisition, by log-

ging gameplay-related Events which are raised during a game level. To do this, we im-

plement a set of components that observe the actions performed by in-game entities and 

define parametrized events that can gather variable elements of contextual data as input. 

Events are packaged into a standardized data structure called EVENTINSTANCE, 

where we store: 

 A Timestamp, which represents the time since application start where an event was 

raised; 

 A Name, which is used as an identifier and brief descriptor for the contents of the 

event; 

 A Type, which is used to determine the superset of systems where the event is raised; 

 A Source, which is used to determine which in-game entity the event is related to; 

 And a set of variable Parameters which are valued types that contain relevant con-

textual data for the event. 

Table 4.4 shows a description of the fields in the EVENTINSTANCE data structure, 

along with the associated types for each field. 

Events are written to a circular buffer and outputted to a file in batches to minimize 

performance costs over extended gameplay sessions. By doing this, frame rendering "hic-

cups" are minimized to few particular moments where events exceed a specific threshold 

of allocated memory for batches. In most instances throughout our tests, such issues did 

not occur over the duration of a singular game level. We restrict our use of the IO (In-

127 

put/Output) system and the processing of gameplay data to level transitions. Since players 

do not have control over the application during loading screens, this solution abstracts data 

processing from the player, maintaining a fluid gameplay experience. 

For each Play Session36, we store a unique CSV (Comma-Separated Values) file 

that serves as a simplified database to store in-game events. Before the end of a play 

session and after all levels are completed by the player, our database files are uploaded to 

a Google Sheets folder using the Sheets API. 

4.5.2 Captured Events 

In our implementation, we differentiate between discrete events and timer-based 

events, which are both part of the basic events category; and the aggregation of such 

instances into composite events. Such division is used to facilitate the algorithm for cal-

culating specific player metrics, and to provide a layer of abstraction for users of the event 

tracking API. 

Discrete events can be raised at any given moment in a session, and originate from 

signals emitted by entity components. An example of a discrete event would be the player 

character performing an attack, where the occurrence of the event depends entirely on 

input provided by the player and can not be bound to any specific timed measure. Discrete 

events are used to represent system-based state changes, entity actions and the results of 

such actions. In Table 4.5, we specify the discrete events defined in our implementation. 

In contrast, timer-based events are raised repeatedly at fixed time intervals over 

the course of a level. They are used to track values and actions that change over the 

course of time, such as the position of an entity, the movement performed by the player 

and the proximity of the player to walls and obstacles. Timer-based events use a polling 

approach to determine the value of its parameters, instead of the signal-based system 

used by discrete events. In Table 4.6, we specify the timer-based events used in our 

implementation. An example of the raw data captured from basic events in our application 

can be seen in Appendix A. 

Lastly, we define composite events by aggregating discrete and timer-based events 

into a single consolidated package. Composite events are used to simplify the algorithm 

to calculate specific player metrics. Composite events are not raised or stored during play 

36A Play Session is delimited by the moment where a user starts the game application and the moment where the user exits the application, returning to the operating system.

128 

Table 4.5: A list of the discrete events captured over a play session in our implementation. 

Name Category Params Types Description 

Session Start Game sessionId GUID User started and loaded the application. Session End Game sessionId GUID User quit the application. 

Level Start Game number layout 

int GUID 

Player started a level. 

Level End Game number layout 

int GUID 

Player finished level. 

Encounter Start Combat encounterId GUID Player started a combat encounter. Encounter End Combat encounterId GUID Player ended a combat encounter. Entity Enter Encounter 

Combat encounterId GUID A character entered a combat encounter. 

Attack Start Action actionId attack 

GUID GUID 

Character performed an attack. 

Attack End Action actionId GUID Character finished an attack. Block Start Action actionId GUID Character started blocking. Block End Action actionId GUID Character stopped blocking. 

Dodge Start Action actionId position direction 

GUID Vector3 Vector3 

Character performed a dodge. 

Dodge End Action actionId position 

GUID Vector3 

Character stopped blocking. 

Hit Entity Result target 

attackId GUID float 

Character hit another character with an attack. 

Hit By Entity Result attackId GUID Character was hit by another character with an attack. 

Blocked Attack Result attackId GUID Character successfully blocked an attack. 

Defense Break Result attacker GUID Character defense got broken by an at-tack. 

Dodged Attack Result attacker attackId 

GUID GUID 

Character successfully dodged an attack. 

Attribute Changed 

State 

name type 

oldValue newValue 

string string object object 

An attribute of a character, such as Health, Stamina or Poise has changed its value. 

Staggered State attackId GUID Character got staggered by an attack. Death State – – Character died. 

sessions. Instead, Composite events are generated at runtime between game levels before 

metric calculation and dynamic adjustments occur. 

The aggregation of basic events into composite events uses the Timestamp, Source 

and Parameters fields to establish the correlation between basic events. We use such fields 

to guarantee that events of different scopes are not being used to calculate the same metric.

129 

Table 4.6: A list of the timer-based events captured in our implementation. 

Name Category Params Types Description 

Position Entity position Vector3 The position of an entity at a given time. 

Movement Player distance direction 

float Vector3 

The movement performed by the player in a small time frame. 

Health Player value float The Health of the Player at a given time. Stamina Player value float The Stamina of the Player at a given time. 

Available Dodge Area 

Player value float The percentage of the area where the player is able to dodge that is not occu-pied by walls or other obstacles. 

For instance, the Successful Block event uses the parameter AttackId from AttackStart 

events to check if the attack being blocked is the same attack that initiated before or 

after the player started blocking. Table 4.7 specifies the composite events used in our 

implementation. 

4.5.3 Player Metrics 

After the player successfully completes a level and we perform aggregation of 

basic events into composite events, we calculate the metrics which are used as input to 

perform difficulty adjustments. Reading and performing data transformations over events 

in our application requires a high processing and Input/Output load. Therefore, we chose 

to postpone calculation of player metrics to non-interactive segments of our application. 

This imposes a limitation to our application where we are unable to perform difficulty 

adjustments in real time. Instead, adjustments are performed on a per-level basis, with 

metrics being calculated before each level is started. 

During our analysis of the object of study, we defined adjustment targets that could 

affect the player’s experience and learning curve. We use such adjustments as a basis to 

define which metrics are required to be gathered. Metrics are meant to evaluate the ef-

ficiency and tendencies of a player. Each difficulty adjustment relates to one or several 

aspects of the player’s skill. Thus, metrics are used to provide an estimation of the ef-

ficiency of player decisions or their ability to execute the appropriate actions for each 

situation. 

We categorize metrics into profile and performance metrics. Profile metrics iden-

tify player habits and common responses to the environment or combat encounters. In

130 

Table 4.7: A list of the composite events that are created by aggregating basic events. 

Name Category Base Events Description 

Encounter Completed 

Game EncounterStart EncounterEnd 

Player successfully eliminated all enemies in an encounter. 

Level Completed 

Game LevelStart LevelEnd 

Player successfully completed a level. 

Session Completed 

Game SessionStart SessionEnd 

Player finished a play session. 

Successful Dodge 

Combat AttackStart,DodgeStart !HitByEntity,AttackEnd 

Player successfully dodged an at-tack. 

Failed Dodge 

Combat AttackStart,DodgeStart HitByEntity,AttackEnd 

Player failed to dodge an attack. 

Successful Block 

Combat AttackStart,BlockStart 

BlockedAttack,AttackEnd Player successfully blocked an attack. 

Failed Block 

Combat AttackStart,BlockStart 

HitByEntity,DefenseBreak AttackEnd 

Player failed to block an attack. 

Successful Avoid 

Combat AttackStart,!HitByAttack !BlockStart,!DodgeStart 

AttackEnd 

Player successfully avoided an attack without performing a Dodge or Block. 

Failed Avoid 

Combat AttackStart,HitByAttack !BlockStart,!DodgeStart 

AttackEnd 

Player got hit by an attack without performing a Dodge or Block. 

Offensive Action 

Combat AttackStart Player performed an offensive action. 

Defensive Action 

Combat DodgeStart,BlockStart 

SuccessfulAvoid Player performed a defensive ac-tion. 

Entity Eliminated 

Entity EncounterStart 

EntityJoinEncounter EntityDeath 

Player eliminates an entity after it joins an encounter 

contrast to metrics discussed in Charles and Black (2004), the profile metrics in our im-

plementation are used to create interesting interactions between the player, enemies and 

the environment. We increase the variety of enemy actions and behaviors based on player 

success, and adapt level layout complexity depending on the player’s use of environment 

geometry. 

We use profile metrics to detect the frequency of defensive actions and target pri-

oritization tendencies. Information regarding player actions is used to modify the chance 

of enemies performing specific actions, as well as changing their placement in levels. Ta-

ble 4.8 provides a list of the profile metrics implemented in our application, along with 

the events that are used to calculate each metric with a brief description of its purpose. 

In contrast, performance metrics focus on the results of player actions. We mea-

131 

Table 4.8: A list of the profile metrics implemented to monitor player habits and common responses to combat situations in our application. 

Name Related Events Description 

Block Frequency 

SuccessfulBlock FailedBlock 

DefensiveAction 

The frequency [0,1] in which the player per-forms the Block action in comparison to other defensive methods. 

Dodge Frequency 

SuccessfulDodge FailedDodge 

DefensiveAction 

The frequency [0,1] in which the player per-forms the Dodge action in comparison to other defensive methods. 

Avoid Frequency 

SuccessfulAvoid DefensiveAction 

The frequency [0,1] in which the player avoids an attack without blocking or dodging in comparison to other defensive methods. 

Avg. Enemy Lifetime 

EncounterStart EntityJoinEncounter 

EntityDeath 

The average time it takes for an enemy to die from the moment it joins an encounter. This metric has one instance per enemy type. 

sure success, failure and the efficiency of execution of game mechanics or strategies. We 

attempt to use performance metrics to smooth out the learning curve for beginner play-

ers, easing the learning process of basic game mechanics. Some examples of adjustments 

based on performance metrics include the number of enemies that can simultaneously at-

tack the player, visual cues for enemy attacks, the frequency of checkpoints in levels and 

the overall game speed. Table 4.9 provides a list of the performance metrics implemented 

in our application, specifying the events used to calculate them and a brief description of 

their purpose. 

4.5.4 Adjustment Policies 

In our implementation, we define difficulty as an N-dimensional set of parameters 

that are adjusted according to profile and performance metrics. Each difficulty parameter 

is adjusted based on a subset of the metrics we defined previously. Therefore, each metric 

can be mapped to one or more adjustments, and conversely each adjustment is influenced 

by one or multiple metrics. 

The purpose of our experiment is to compare N-dimensional dynamic difficulty 

to fixed configurations. Therefore, we concluded that representing adjustments through 

a probabilistic model, as explored in section 2.3.1, would be the best suited approach to 

our purposes. Additionally, probability-based approaches would better integrate with the 

industry standards of game development processes.

132 

Table 4.9: A list of the performance metrics implemented to perform adjustments related to the efficiency and results of player actions. 

Name Related Events Description 

Level Duration LevelStart,LevelEnd The time it takes for the player to clear a level. Encounter Duration 

EncounterStart EncounterEnd 

The time it takes for the player to eliminate all enemies in an encounter. 

Session Duration SessionStart,SessionEnd The time it takes for the player to complete all levels in a game session. 

Dodge Efficiency 

SuccessfulDodge FailedDodge 

The rate of successful dodges in relation to the total number of performed dodges. 

Block Efficiency 

SuccessfulBlock FailedBlock 

The rate of successfully performed blocks in relation to the total number of blocks. 

Avoid Efficiency 

SuccessfulAvoid FailedAvoid 

The rate of attacks successfully avoided with-out blocking or dodging. 

Attack Avoidance Efficiency 

Successful & Failed Blocks, Dodges,Avoids 

The rate of attacks that are successfully blocked, dodged or avoided in comparison to attacks that hit the player. 

Obstacle Avoidance AvailableDodgeArea The avg. percentage of the dodge area occu-pied by walls and obstacles over a Level. 

Avg. Health Level 

Health AttributeChanged 

The average Health level of the player over the course of an Encounter or Level. 

Avg. Stamina Level 

Stamina AttributeChanged 

The average Stamina level of the player over the course of an Encounter or Level. 

Avg. Health Lost Per Encounter 

EncounterStart AttributeChanged 

EncounterEnd 

The average Health lost by the player over the course of an Encounter. 

Number of Deaths 

EncounterStart LevelStart,Death 

The number of times the player died over the curse of an Encounter or a Level. 

Average Deaths LevelStart,Death Avg. number of times player died over a Ses-sion. 

Avg. Time To Kill AttackStart, Death The average time for the player to kill an en-emy type since the first attack hits. 

Atk. Window Efficiency 

CooldownStart HitEntity,CooldownEnd 

The average damage dealt by the player dur-ing an attack window opportunity where an enemy is in cooldown. 

During the game development process, game designers perform iterative play-

testing sessions, where users are monitored to identify flaws in game design or adjustable 

properties that might better represent the desired outcome of in-game systems. Through 

the same philosophy, we can incorporate the probabilistic model in the game design pro-

cess, where values and thresholds for difficulty adjustments can be tested and adjusted 

through the iterative play-testing sessions to better represent the desired learning and chal-

lenge curve adjustment for the game.

133 

We define discrete values to each parameter, which are switched between based 

on thresholds applied over player metrics. The thresholds were gathered by performing 

iterative play sessions with players from multiple skill levels and analyzing the data for 

the metrics over different types of players and different difficulty levels. We attempted 

to cluster the values gathered from metrics manually, where we separated users by their 

reported previous experience with games, and specifically with Souls-like entries. Details 

on how thresholds for adjustments were gathered are further specified in section 5.5. 

The adjustments in our implementation are scoped within multiple game subsys-

tems, and were elected based in the considerations discussed in section 3.5. Each param-

eter is adjusted within a progressive set of values, where at least one of the values would 

be best suited to an inexperienced player and another would be designed for a veteran 

of the Souls-like genre. Table 4.10 lists the adjustments included in our implementation, 

including their name, the metrics that are related to them and a brief description of their 

purpose. 

As a base guideline to define the discrete values for parametrized adjustments, 

and to define the thresholds that are compared to metrics to perform such adjustments, 

we attempt to define three base difficulty presets which contain value definitions for all 

adjustments parameters based on classification of player profile and skill levels. The base 

presets for adjustment values are assigned at the beginning of a session, and the preset 

is initially assigned to a player based on a Player Classification Survey, which is further 

detailed at section 5.5. 

Through the base presets, we are initially defining game difficulty as a one di-

mensional configuration of multiple parameters. However, as a session progresses and 

we capture in-game events and calculate performance and profile metrics, we can begin 

to compare such metrics to a set of thresholds that were previously defined, and certain 

parameters will begin to be adjusted independently and diverge, effectively transforming 

game difficulty into an N-dimensional set of parameters. 

It is important to note that used each parameter value does not represent a continu-

ous group of validation conditions, where causing the next attack animation to be queued 

and triggered when the current animation ends against any of the threshold conditions for 

a parameter. This is done by design so that if the conditions for all thresholds of a param-

eter are used adjustment parameter is kept the same. Therefore, the transition conditions 

for a lower parameter value to be adjusted into a higher value can not be symmetrically 

inverted as to adjust the higher value into the lower value, which generates a tendency

134 

for the player to be kept in the same difficulty level unless their performance or profile 

metrics relevantly deviate from the intended user group. 

In Table 4.11 we attempt to organize and specify the values that parametrized 

adjustments can be assigned to and their associated metrics, along with the threshold 

values for each metric. Some of the adjustment parameters have restricted value ranges 

with the purpose of making the game more difficult or easier than the proposed core 

experience of our game, and will present a default value as a minimum or maximum limit 

which represents the standard experience for an average skilled player. For this purpose, 

we attempt to visually separate adjustments in regions that describe their target player 

profile stereotype.

135 

Table 4.10: A list of the adjustments that were implemented in our application to define game difficulty as an N-dimensional set of parameters. 

Name Related Metrics Description 

Pierce Attack Chance Mod. 

Block Efficiency Block Frequency 

The modifier for the chance of an enemy performing a Pierce attack. 

Sweep Attack Chance Mod. 

Dodge Efficiency Dodge Frequency 

The modifier for the chance of an enemy performing a Sweep attack. 

Charge Attack Chance Mod. 

Avoid Efficiency Avoid Frequency 

The modifier for the chance of an enemy performing a Charge attack when the player is out of attack range. 

Near Target Max. Number 

Attack Avoidance Efficiency 

Avg. Stamina Level 

The number of enemies that can be in close quarters (near the player) in an encounter. 

Simultaneous Max. Attacks 

Attack Window Efficiency 

Avg. Health Lost Per Encounter 

The number of enemies that can simultaneously attack the player in an encounter. 

Global Atk. Cooldown 

Attack Window Efficiency 

The global cool-down timer for all enemy agents af-ter an attack is performed by any agent. The number of simultaneous attacks defines the number of separate timers. 

Global Special Atk. Cooldown 

Attack Avoidance Efficiency 

The global cool-down timer for all enemy agents after a Special Attack is performed by any agent. 

Game Speed Attack Avoidance 

Efficiency 

The global Timescale at which the game runs, which is increased or decreased according to the effectiveness of player reactions to combat situations. 

Attack Visual Cues 

Attack Avoidance Efficiency 

The presence or absence of easily recognizable Attack Startup Animations indicating which attack an enemy is performing. 

Archer Enemy Placement 

Avg. Archer Lifetime 

The general positional placement of archer enemies in levels so that they are easier or harder to eliminate dur-ing combat encounters. 

Basic Enemies Occurrence 

Avg. Enemy Lifetime 

The chance of a Basic Enemy using one of the avail-able slots for enemy placement in the level layout to be placed in an encounter. 

Warrior Enemies Occurrence 

Avg. Non-Warrior Lifetime 

The chance of a Warrior Enemy using one of the avail-able slots for enemy placement in the level layout to be placed in an encounter. 

Knight Enemies Occurrence 

Avg. Health Lost Per Encounter 

Attack Window Efficiency 

The chance of a Knight Enemy using one of the avail-able slots for enemy placement in the level layout to be placed in an encounter. 

Combat Area Openness 

Obstacle Avoidance The size and placement of obstacles in areas where combat encounters are designed to occur. 

Checkpoint Placement 

Level Duration Avg. Deaths/Level 

The presence or absence of checkpoints in specific ar-eas of levels, such as at a central point of level layouts or right before combat encounters.

136 

Table 4.11: A list of the thresholds and their associated values for each parametrized difficulty adjustment in our application. 

Name Parameters Symbol Thresholds Values 

Pierce Attack Chance Mod. 

BlockEff BlockFreq 

BE BF 

BE < 0.3, BF < 0.5 BE > 0.3, BF > 0.2 BE > 0.6, BF > 0.5 

0.5x 1.0x 

1.35x 

Sweep Attack Chance Mod. 

DodgeEff DodgeFreq 

DE DF 

DE < 0.3, DF < 0.5 DE > 0.3, DF > 0.2 DE > 0.6, DF > 0.5 

0.5x 1.0x 1.35x 

Charge Attack Chance Mod. 

AvoidEff AvoidFreq 

AE AF 

AE < 0.3, AF < 0.5 AE > 0.3, AF > 0.2 AE > 0.6, AF > 0.5 

0.5x 1.0x 

1.35x 

Near Target Max. Number 

AtkAvoidanceEff AvgStaminaLevel 

AAE ASL 

AAE < 0.4 AAE > 0.4, ASL < 0.6 AAE > 0.6, ASL > 0.4 

1 Agent 2 Agents 3 Agents 

Simultaneous Max. Attacks 

AtkWindowEff AvgHealthLostEnc 

AWE AHLE 

AWE < 0.1 AWE > 0.15, AHLE < 50 

1 Attack 2 Attacks 

Global Atk. Cooldown 

AtkWindowEff AWE AWE < 0.1 

AWE > 0.15, AWE < 0.18 AWE > 0.225 

6 seconds 4.5 seconds 3.5 seconds 

Global Special Atk. Cooldown 

AtkAvoidanceEff AAE AAE < 0.3 

AAE > 0.3, AAE < 0.45 AAE > 0.6 

11 seconds 9 seconds 

7.5 seconds 

Game Speed AtkAvoidanceEff AAE AAE < 0.15 AAE < 0.25 AAE > 0.25 

0.85x 0.925x 1.0x 

Attack Visual Cues 

AtkAvoidanceEff AAE AAE < 0.2 

AAE > 0.2, AAE < 0.6 AAE > 0.6 

Red Highlight Simple 

Ambiguous 

Archer Enemy Placement 

AvgArcherLife AAL AAL > 40s AAL > 25s AAL < 10s 

Frontline Rearguard 

Long-Range Basic Enemies Occurrence 

AvgEnemyLife AEL AEL > 30s AEL < 25s 

Normal Additional 

Warrior Enemies Occurrence 

AvgNonWarriorLife ANWL ANWL > 30s ANWL < 25s 

Normal Additional 

Knight Enemies Occurrence 

AvgHealthLostEnc AtkWindowEff 

AHLE AWE 

AHLE > 40, AWE < 0.15 AHLE < 40, AWE > 0.15 

Normal Additional 

Combat Area Openness 

ObstacleAvoidance OA OA < 0.7 

OA > 0.7, OA < 0.8 OA > 0.8 

Wide Open Mid-Sized Constricted 

Checkpoint Placement 

AvgLevelDur AvgDeathsLevel 

ALD ADPL 

ALD > 5min, ADPL > 7 ALD > 4min, ADPL > 5 ALD < 4min, ADPL < 5 

Per Encounter Mid Level 

Single

137 

5 METHODOLOGY AND RESULTS 

5.1 Overview 

In this chapter, we briefly revisit the objectives of this work to formulate the hy-

potheses and methodology for our experiment. We establish the selection criteria for the 

users in our experiment, which enforce restrictions to provide a more controllable envi-

ronment given societal restrictions inherent to the time at which this work was developed. 

We specify the classification method used in this experiment, which was employed 

to compare the effects of our DDA system to different types of users, in comparison to the 

traditional fixed difficulty presets commonly seen in commercial games. In sequence, we 

explain the methodology used in our experiment, specifying the division of user groups, 

describing the metrics used to compare such groups, providing a brief description of the 

steps performed by users in the experiment, and providing details on a survey used to 

assess user perceptions after performing the experiment. 

Finally, we report and analyze the results of our experiment, performing a compar-

ison of the performance of user groups when using DDA systems or fixed difficulty. We 

perform a more granular comparison by separating the data for each group based on our 

initial user classification, and assess the effects of DDA systems on each player profile: 

beginners, intermediates and veterans. We also compare the performance of players to 

their own assessment of the difficulty of our game, and correlate their perception with our 

performance analysis. 

5.2 Hypotheses and Objectives 

As a first objective when performing this experiment, we wish to verify if dy-

namic adjustments can create a relevant increase in player performance in the first or 

second playthrough for players that are inexperienced with Souls-like games. We attempt 

to understand if players that experience dynamic difficulty at their first playthrough can 

achieve a better understanding of game mechanics on their second playthrough. 

We also wish to understand if dynamic difficulty can maintain a fair level of chal-

lenge to veterans or experienced players on a second playthrough. To do this, we wish 

to evaluate the difference in performance between fixed and dynamic difficulty on a sec-

ond playthrough where players have likely increased their performance when using game

138 

mechanics. Based on these objectives, we formulate the following hypotheses: 

 Hypothesis 1: Dynamic difficulty can alleviate the steep learning curve of challeng-

ing games for inexperienced players; 

 Hypothesis 2: Dynamic difficulty can provide a better suited level of challenge on 

the second or subsequent playthroughs. 

The hypotheses defined have the intent of comparing DDA systems to fixed diffi-

culty on two different aspects: the ability for players to learn and become used to Souls-

like game mechanics in a first playthrough, and the ability for the game to provide a 

sufficient level of challenge to players which have become accustomed to and proficient 

at the game at a second or subsequent playthrough. 

As discussed in chapter 3, the most prevalent causes of failure in first playthroughs 

of Souls-like games include becoming used to the game’s input and its resulting actions, 

understanding the principles of the most relevant game mechanics, and memorizing pat-

terns of enemies or level layouts. In a second playthrough, players will generally have 

achieved a consolidated understanding of which elements provide the most significant 

challenge, and how to use the game’s mechanics in a way that maximizes their chances 

of success. 

Therefore, failure is often part of the process of learning in a first playthrough. 

Presenting the player with a slight difficulty spike at a specific point in the game could 

be a tool to accelerate the process of learning a specific game mechanic, given that the 

level of challenge is not overtly contrasted to the player’s skill. Thus, we wish to validate 

our hypothesis that the performance of players which experience Dynamic Difficulty first 

is higher than those which experience fixed difficulty first, as they become used to the 

game’s mechanics and challenges. 

To perform the validation of Hypothesis 1, we divide the users in our experiment 

in two groups: users which experience Fixed Difficulty first (Group A), and users which 

experience Dynamic Difficulty systems first (Group B). After performing such division, 

we must evaluate the performance of each group according to level progression in their 

first playthrough, by gathering multiple performance statistics for each level. To validate 

the hypothesis, we must validate that the average performance of Group B is higher than 

the performance of Group A. Therefore, the null hypothesis of Hypothesis 1 is that the 

average performance of Group A is the same or higher than the performance of Group B. 

In a second playthrough, players will have experienced and become used to most

139 

or all relevant game mechanics or difficulty factors. In consequence, most players will be 

able to devise one or multiple plans of action against challenging elements ahead of time, 

and attempt to execute such plans. 

Therefore, the most prevalent cause of failure in a second playthrough with fixed 

difficulty is a failure of execution, where the player either performs their input incorrectly, 

or their plan of action does not optimally address the issues inherent to a specific chal-

lenge. As a consequence, players will generally present a much better performance in a 

second playthrough in fixed difficulty systems. 

However, when the advent of dynamic difficulty is employed, the game is able to 

present new challenges and situations, and even increase the complexity at which a game 

mechanic needs to be executed by the player. Therefore, even though players are used to 

most or all game mechanics in a second playthrough, their performance can stay at the 

same or a lower level than that of the first playthrough. Therefore, we wish to evaluate 

the performance of players in a second playthrough, which occurs in the second part of 

the experiment. 

To validate Hypothesis 2, we wish to verify that the average performance of Group 

A (which starts with fixed difficulty) is the same or lower than the average performance 

of Group B (which starts with dynamic difficulty). Therefore, the null hypothesis of 

Hypothesis 2 is that the average performance of Group B is significantly higher than that 

of Group A in a second playthrough. 

5.3 User Selection Criteria 

The methodology used for our experiment involves the deployment and use of 

our application in environments where the users are comfortable playing, without in-

person monitoring by the experiment observers. For the analysis of user performance 

and results, we remotely collect data through telemetry, and compare data sets based on 

user classification and use the results of our player perception surveys as a reference. We 

employed restricted selection criteria for our user base to ensure similar characteristics on 

how the application is used. 

The selection of users for our experiment was guided by a small set of profile 

characteristics and hardware requirements. This was required to mitigate the impact of 

external and unmanageable factors such as preferences, age, platform or input devices 

to the performance of users. Users were invited for the experiment through multiple

140 

Brazilian online gaming communities using the Discord application. The targeted groups 

included communities with players of all skill levels, with the shared common interest of 

discussing Souls-like games, such as Dark Souls, Bloodborne1 and Sekiro2. We define in 

the list below the profile-based criteria for user selection performed in our experiment: 

 Age: between 18 and 23 years old; 

 Preffered gaming platforms: Video Game Consoles or Desktop PC; 

 Preffered input methods: dual-analog joysticks; 

 Additional requirements: has a Steam3 account. 

We also require users to possess hardware that satisfies the proper execution of 

our application under a target framerate of 60 frames per second, to ensure that player 

performance is not affected by low graphical performance, stuttering or input lag. In the 

list below we specify the hardware requirements to properly execute our application under 

our specified hardware performance targets: 

 System Architecture: 64 bit processor and Operating System; 

 Processor: Intel Core i5-2300 2.8GHz+ or AMD FX-6300 3.5GHz+; 

 Graphics: NVIDIA GeForce GTX 460 or AMD Radeon 5000 series+; 

 DirectX: Version 11+; 

 Operating System: Windows 7 64bit, Service Pack 1+ 

 Memory: 6GB+ RAM 

 Available Storage: 4GB+ available on HDD or SSD 

 Display: 16:9 or 16:10 monitor sized between 19" and 32" and at least 1280x720 

native resolution. 

We also require that players use similar input interface methods, to ensure that the 

accuracy of performed actions such as character movement, camera movement, dodging 

or blocking are not affected by restrictions on input devices, such as a computer keyboard 

not being able to represent directional movement with the same level of freedom as a 

dual-analog joystick. In the following list we specify the characteristics used to define the 

input interfaces required to be used by players in our experiment: 

1Bloodborne (FromSoftware, 2015). Video Game. Available on PlayStation 4. 2Sekiro: Shadows Die Twice (FromSoftware, 2019). Video Game. Available on PlayStation 4, Xbox 

One, Microsoft Windows, Google Stadia. 3Steam is an online storefront and a digital service for video game distribution, developed by Valve. 

Features provided by Steam include digital rights management, social networking, cloud-based game saving systems, automatic game updating and streaming.

141 

 Xbox Controllers: Xbox 360, Xbox One, Xbox Series X; 

 PlayStation Controllers: DualShock 3, DualShock 4, Dual Sense; 

 Equivalent Joystick Controller Models with at least: 

 Dual Analog axes, one at each side; 

 A clickable Trigger Button at each analog axis; 

 4 Face Buttons in the right side; 

 4 Digital Directional Buttons in the left side; 

 Right and Left Triggers and Bumpers at the top. 

We apply some of the aforementioned criteria through a Player Classification Sur-

vey, which is further detailed in section 5.4. The Player Classification survey is also used 

to categorize our users in skill-based classification groups, such as Beginner, Interme-

diate and Veteran users. Information on the specific questions and metrics used in the 

classification survey can be seen in appendix B. Regarding the topics not covered in the 

classification survey, we applied a secondary Player Experiment Requirements Survey, 

which can be seen in C 

5.4 Classification of the User Base 

We define user classification groups which are used to divide our data sets based 

on expected levels of player skill. Such classification is necessary to evaluate the impact 

of difficulty and dynamic difficulty adjustments based on player expertise. Additionally, 

we also use such classification to evaluate the opinions of different players on the validity 

of our application as a sufficient representative of the core aspects of our object of study, 

Dark Souls. The classification is performed based on a Player Classification Survey, 

which was performed during the User Selection step of our experiment. 

We separate the player base in our experiment in the following groups: beginners, 

intermediate and veterans. We define general descriptions for each group to serve as a 

guide when defining functional and data-based metrics which can be applied to our Player 

Classification Survey: 

 Beginners: casual players which are unused to playing action games, or players 

which are initiating their first playthrough on a Souls-like game; 

 Intermediate: recurrent players which are used to action games, and have finished

142 

or relevantly progressed through a single Souls-like game; 

 Veterans: dedicated players which are used to the Souls-like genre, and have fin-

ished multiple games of FromSoftware’s Souls franchise. 

With such descriptions, we can begin to specify each categorization in functional 

or data-based terminology. We use the definitions of casual and hardcore players from the 

work of Bicalho, Baffa and Feijó (2019) as a reference, where casual players are defined 

as individuals which perform the act of play casually – who dedicate a smaller portion of 

their time to play games, and usually on a more restricted set of genres. 

Therefore, we define beginner players as players with a weekly playtime between 

0 and 3 hours, which are comfortable with at most three different game genres which do 

not include action games, and have not achieved 50% completion on a Souls-like game. 

Intermediate players have a weekly playtime between 4 and 10 hours, are comfortable 

with at least three game genres which include action games, and have achieved at least 

50% completion on a single Souls-like game. Veteran players have a weekly playtime 

above 10 hours, have at least four comfortable game genres which include action games, 

and have completed two or more Souls-like games. 

The total number of users which participated in the experiment and sufficiently 

satisfied our selection criteria was 23, where 10 users were classified as beginners, 7 were 

classified as intermediates, and 6 were classified as veterans. Unfortunately, we were 

unable to acquire an even number of intermediate candidates for a symmetrical division. 

As will be explained in section 5.5, we divided our total user base in two groups. Table 

5.1 specifies the definition used in our experiment for each user category, as well as the 

amount of users in each category which participated in our experiment. 

Table 5.1: Users for each user classification category in our experiment. 

Group Users Definition 

Beginners 10 Weekly playtime between 0 and 3 hours; Comfortable with at most 3 different genres different than action games; Have not achieved 50% completion on a Souls-like game. 

Intermediate 7 Weekly playtime between 4 and 10 hours; Comfortable with at least 3 game genres which include action games; Have achieved at least 50% completion on a single Souls-like game. 

Veterans 6 Weekly playtime above 10 hours; Have at least 4 comfortable game genres which include action games; Have completed two or more Souls-like games. 

Total 23 All players in our experiment.

143 

5.5 Experiment Methodology 

5.5.1 User Groups 

As specified in the earlier sections of this chapter, we divide our user base in two 

similarly sized groups to evaluate the effects of DDA systems in the learning curve for 

beginners and in the challenge level for proficient players: 

 Group A: Fixed Difficulty in the first playthrough (Part 1), and Dynamic Difficulty 

in the second playthrough (Part 2); 

 Group B: Dynamic Difficulty in the first playthrough (Part 1), and Fixed Difficulty 

in the second playthrough (Part 2). 

We attempted to divide our user base symmetrically based on each category, as a 

means to attempt to compare the statistics of each group with the same sample size. Each 

group contains the same or a similar amount of users for each classification described in 

section 5.4. As a result, Group A consisted of a total amount of 12 users, with 5 begin-

ners, 4 intermediates and 3 veterans. Group B consisted of 11 users, with 5 beginners, 4 

intermediates and 3 veterans. Figure 5.1 illustrates the division and sample size of each 

user group, separating each group in the classifications defined in section 5.4. 

Figure 5.1: Chart representing the size of each experiment group, separated by our user classification. 

Source: Chart assembled by authors.

144 

5.5.2 Experiment Flow 

Regarding the execution of our experiment, we defined a series of steps to be 

performed by users for the authors to be able to classify and divide users, and in sequence 

collect the performance and perception data of users: 

1. User performs the Player Classification Survey; 

2. User is classified as a Beginner, Intermediate or Veteran; 

3. User is assigned to Group A or Group B; 

4. User plays through Part 1 of the Experiment (First Playthrough); 

5. User plays through Part 2 of the Experiment (Second Playthrough); 

6. User performs the Player Perception Survey. 

Figure 5.2: Diagram representing the steps performed by users in our experiment. 

Source: Diagram assembled by authors.

145 

Figure 5.2 illustrates the aforementioned process in the form of a diagram. There 

are additional steps which were occluded due to being unrelated to the process of acquir-

ing and evaluating data for the purpose of our experiment. For instance, between a user 

performing the Player Classification Survey and being classified, users also performed 

the Experiment Requirement Survey, as it was a necessary step to evaluate if the user 

hardware was performant enough to run our application. 

Additionally, it is important to note that there was no automated method assign 

users to a classification or a group. Instead, the authors of this work manually analyzed the 

data and classified users based on observable clusters of data. For the definition of which 

users would be assigned to each group, a simple symmetrical division was performed 

without considering any classification-based metrics. 

5.5.3 Metrics 

To verify the validity of our hypotheses in each group, we gathered a subset of 

the metrics which are originally calculated by our application to serve as input for adjust-

ment policies. Such metrics are selected based on their relevance in assessing the overall 

performance of a player, which will be evaluated in the context of the first and second 

playthroughs. 

Furthermore, we specifically wish to evaluate performance regarding the effec-

tiveness of players to complete game levels – which includes traversing through environ-

ments, defeating enemies and avoiding defeat. Therefore, the metrics selected to define 

player performance in this experiment attempt to satisfy the efficiency and effectiveness of 

players when performing game mechanics which help them complete levels faster, defeat 

enemies faster and avoiding taking damage. 

Thus, we selected the following metrics as our objects of analysis: Average Com-

pletion Time per Level, Average Number of Deaths per Level, Avg. Health Lost per 

Encounter per Level, Average Attack Avoidance Efficiency, Average Attack Window Ef-

ficiency, Average Damage Dealt per 10s in Encounters and Average Stamina Level in 

Encounters. Table 5.2 attempts to provide a brief description of the purpose and unit of 

measure of each selected metric.

146 

Table 5.2: Descriptions of the Performance Metrics used to evaluate Players. 

Metric Description 

Adjustment Targets Average 

Consolidated average x of all adjustment target values vn ∈ {1, 2, 3} of a player at a given level. A value of 1 in this metric would mean that all adjustment values would map to the beginner-level fixed difficulty, while a value of 3 would mean that all adjust-ment values would map to the veteran-level fixed difficulty. 

Attack Avoidance Efficiency 

The percent of attacks, with value v ∈ R(0, 1), that the player suc-cessfully avoids at a given level by dodging, blocking or simply moving away from the attack’s area of effect. 

Attack Window 

Efficiency 

The percent of time, with value v ∈ R(0, 1), in which an enemy character is vulnerable and the player is performing an attack. A vulnerable enemy is in one of the following conditions: staggered, in an animation lock or in cooldown. 

Completion Time 

The amount of time, with value v ∈ R and represented in min-utes, which elapses between when the player is given control of their character after a given level starts, and when the player successfully reaches the end of such level. 

Damage Dealt per 10 seconds 

The average amount of damage dealt by a player for every 10 sec-onds of combat, with value v ∈ R and measured in health points, during the combat encounters at a given level. 

Deaths per Level The number of deaths, with value v ∈ N, of a player at a given level. 

Health Lost per Encounter 

The average amount of health lost by players, with value v ∈ R, for all combat encounters at a given level. 

5.5.4 Player Perception Survey 

After collecting data about user performance during the experiment, we wish to 

verify if the application presents any issues that could affect the observation of the results, 

and if the results observed in our metrics can correlate with the perceptions of difficulty 

and challenge of players. Therefore, we presented a set of propositions that attempts to 

determine if: 

 Players experienced any issues regarding defects in our implementation; 

 Players experienced any issues regarding their experiment environment, including 

hardware, input devices or presentation; 

 Players were interested to our application; 

 Players felt like the game presented a sufficient level of challenge in comparison to 

their skill, but was not overtly difficult;

147 

 Players felt like they could sufficiently learn and execute all relevant game mechan-

ics; 

 Players felt like the game was still challenging in a second playthrough; 

The propositions are presented in the survey can be mapped to a Likert Psycho-

metric Scale. Users can rate their perception on each proposition by selecting one of the 

following options: Strongly Disagree, Partially Disagree, Indifferent, I do not Know, Par-

tially Agree and Strongly Agree. By performing this assessment, we wish to be able to 

validate that: 

 Our implementation does not present any aesthetics or usability related issues which 

could affect user performance and invalidate the collected metrics; 

 The metrics selected for the player performance evaluation can sufficiently deter-

mine the level of challenge experienced by players in contrast to their skill; 

 The perception of difficulty by players is congruent with their actual performance. 

Additionally, we wish to use the results of this assessment to reinforce our data-

based player performance analysis. We wish to verify the efficiency of adjustments per-

formed in a first playthrough, to determine if players which experience Dynamic Diffi-

culty first are able to learn game mechanics and perform better. Similarly, this is also 

performed in regards to the second playthrough, where we wish to determine if players 

were sufficiently challenged after learning and becoming used to most game mechanics. 

Tables 5.3 and 5.4 provide consolidated lists of the propositions presented in the 

Player Perception Survey, along with a briefly described purpose for the existence of 

each proposition. Table 5.3 shows the propositions which are analyzed in aggregate, 

consolidating the results of all user groups to assess user opinions on the quality of our 

implementation. In contrast, Table 5.4 shows the propositions which are analyzed per 

user group, in order to verify performance alterations in each user profile. Further details 

on how the survey is presented to users can be seen in Appendix D. 

5.6 Results 

In this section, we describe and analyze the results of the data collected from 

players when performing the experiment. First, we evaluate the results of a subset of the 

propositions in the Player Perception Survey in aggregate for all players, with the objec-

148 

Table 5.3: Aggregate Perception Assessments in the Player Perception Survey. 

Assessment Objective 

I think the gameplay was satisfying 

Evaluate if the gameplay is sufficiently satisfac-tory to players. 

I think the graphics were visually appealing 

Evaluate if the visuals are sufficiently appealing to players. 

I think the sounds provided proper 

feedback to actions 

Evaluate if the audio harmonizes with the visuals and actions performed by players. 

I felt interested to the game 

Evaluate if users were motivated to play the game during the experiment. 

I think the game was hard to understand 

Evaluate if users had issues understanding basic game elements. 

I think the game was easy to play 

Evaluate if users had ease with executing basic game mechanics. 

I think the game was easy to learn 

Evaluate if users had ease with learning basic game mechanics. 

I had trouble with the game controls 

Evaluate if players had issues caused by button mapping, basic mechanics or input device compat-ibility issues. 

I had trouble hitting enemies 

Evaluate if players had issues caused by failures in the hit detection system. 

I had trouble defending against enemies 

Evaluate if players had issues with executing the blocking mechanic. 

I had trouble dodging enemy attacks 

Evaluate if players had issues with executing the dodging mechanic. 

I had trouble with a specific enemy 

Evaluate if players had issues with a specific en-emy type, which would mean the behavior design for such enemy would be inconsistent with the challenge level presented by other entities. 

I had trouble finding out where to go 

Evaluate if players had issues with level design, where the layout and presentation of environments does not present a clear destination. 

I had a hard time playing 

Evaluate if players had more general issues when playing which could not be encompassed by pre-vious propositions. 

I felt frustrated while playing 

Evaluate if players were frustrated with some as-pect of the game, such as the difficulty or usability. 

I felt anxious while playing 

Evaluate if players felt anxious while playing due to difficulty. 

I felt bored while playing 

Evaluate if players were uninterested in the game due to poor aesthetics or level of challenge. 

I felt comfortable while playing 

Evaluate if players were generally comfortable with experience-related aspects of the game, such as difficulty, controls and aesthetics.

149 

Table 5.4: Group-based Perception Assessments in the Player Perception Survey. 

Assessment Objective 

I think the game was difficult 

Evaluate if a user group perceived the game as generally difficult to complete. 

I think the difficulty was unfair 

Evaluate if a user group perceived the game as having a significantly higher level of challenge in comparison to their skill level. 

I think the enemies were challenging 

Evaluate if a user group perceived enemy agents as minimally challenging in comparison to their skill level. 

I think the enemies were too challenging for me 

Evaluate if a user group perceived enemy agents as overtly challenging in comparison to their skill level. 

I think the enemies were too easy for me 

Evaluate if a user group perceived enemy agents as insufficiently challenging to their skill level. 

I learned how to defend against enemy attacks 

Evaluate if a user group was able to learn how to block enemy attacks 

I learned how to dodge enemy attacks 

Evaluate if a user group was able to learn how to avoid enemy attacks. 

I found myself constantly outnumbered 

Evaluate if a user group was able to learn how to isolate targets before engaging combat. 

I think the enemies in later levels were harder 

Evaluate if a user group perceived the enemies in the final levels of a first or second playthrough to be harder. 

I think the second version was easier than the first 

Evaluate if a user group perceived their second playthrough to be easier. Divided by classifica-tion. 

I think the second version was harder than the first 

Evaluate if a user group perceived their second playthrough to be harder. Divided by classifica-tion. 

I think the enemies in the second version 

were smarter 

Evaluate if a user group perceived the enemy agents in a second playthrough to be harder to deal with. Divided by classification. 

I think the enemies in the second version 

were dumber 

Evaluate if a user group perceived the enemy agents in a second playthrough to be easier to deal with. Divided by classification. 

I felt confident in my first time playing 

Evaluate if a user group was comfortable with their skill improvement in the first playthrough. Divided by classification. 

I think I did better in my second time playing 

Evaluate if a user group perceived improvements in their second playthrough when comparing to their first playthrough. Divided by classification. 

I felt more confident in the second time playing 

Evaluate if a user group perceived their skill in the second playthrough to be sufficient to the level of challenge. Divided by classification.

150 

tive of verifying whether the application presents issues regarding usability, aesthetical 

fidelity, ease of learning or any technical issues that could affect our evaluation of player 

performance in comparison to player skill. 

Second, we explore the performance and perception results for each user classi-

fication, starting with beginner players, proceeding intermediate players, and concluding 

with veteran players. For the performance results, we isolate and compare the data for 

each user group and part of the experiment, to attempt to validate our hypotheses on the 

learning curve of the first playthrough and level of challenge of the second playthrough. 

For the perception results of each user classification, we first evaluate a subset of 

the propositions aggregating the answers for both experiment groups, in order to evaluate 

perceptions on difficulty and the learning curve for each player skill level. Finally, we 

evaluate the perceptions of each user classification, separated by experiment group, of the 

comparison of their performance between the first and second playthroughs, in order to 

evaluate if the second playthrough presented a sufficient level o challenge to players. 

The performance charts presented in this section reflect the average values of the 

user performance metrics selected for the experiment. An example of performance charts 

for the Deaths per Level metric can be seen in Figure 5.12. The metric being represented, 

along with the target classification of users of the chart, are displayed on a brief title 

above the charts. We provided four charts for each metric, for each user classification. 

Each chart represents a comparison, either between experiment parts (first playthrough 

versus second playthrough) or between experiment groups (Group A vs Group B). The 

nature of each comparison is described in a caption below each chart. 

The comparisons performed by the charts are represented in the following order: 

(a) Group A - Part 1 vs Part 2; (b) Group B - Part 1 vs Part 2; (c) Group A vs B - Part 1; (d) 

Group A vs B - Part 2. Charts (a) and (b) are used to assess the difference in performance 

between the first and second playthroughs for each user group, which has the objective of 

comparing general player performance improvements on dynamic versus fixed difficulty. 

The objective of chart (c) is to assess the difference in performance in a first 

playthrough, comparing fixed to dynamic difficulty. Such comparison has the potential to 

lead us to conclusions regarding the effectiveness of dynamic adjustments in facilitating 

the learning curve for a game. Finally, the objective of chart (d) is to assess the difference 

in performance of fixed versus dynamic difficulty in a second playthrough, which has the 

potential to lead us to conclusions regarding the challenge level presented by dynamic 

difficulty in the context where a player has learned and become used to the most relevant

151 

game mechanics and enemy patterns. 

The perception charts presented in this section reflect the results of a perception 

assessment which uses a Likert Psychometric Scale as a user rating scale. An example 

of perception chart can be seen in Figure 5.3. Each entry in the vertical axis represents a 

proposition in our assessments, while the horizontal axis displays the user agreement or 

disagreement with such proposition. The scope of users portrayed in the chart is specified 

in the title for each chart. For instance, in Figure 5.3 the data displays results for all users 

in our experiment, disregarding player classifications or experiment groups. 

To the rightmost portion of the chart, the percentage of users is shown in blue 

to represent positive agreement of the user base to a proposition, either by partially or 

strongly agreeing with such proposition. To the leftmost part, results are shown in red to 

represent disagreement, either by partially or strongly disagreeing with a proposition. In 

the central portion of the chart, results are shown in gray to represent indifference or an 

undefined level of agreement. 

5.6.1 Perceptions on Usability, Fidelity and Learning of All Players 

In this section, we describe the results of our Player Perception Survey in the 

scope of evaluating the usability, aesthetical fidelity, ease of learning and general issues 

regarding the use of the application. Using the results of player usability perceptions, 

we wish to verify if the application presents any technical issues that would affect the 

evaluation of player performance in comparison to their skill level, such as hard to use 

controls or presentation which is incompatible with the user’s hardware. 

Regarding player perceptions on the ease of learning of basic game controls and 

the use of their related mechanics, we wish to verify if the application was overtly com-

plex to learn at a first user interaction, which could significantly affect the evaluation of 

player performance in comparison to their skill levels during the early levels of a first 

playthrough, or even for the entire duration of a first playthrough. The data described in 

this section is evaluated in aggregate for all user classifications and experiment groups, 

with the objective of evaluating the overall design of the application by evaluating its 

general impact for all players. 

Regarding player perceptions on their interest on the game and the game’s aesthet-

ics represented in Figure 5.3, about 90% of the user base agreed that they were interested 

in the game. A similar percentage agreed that the game was satisfying to play, and that

152 

Figure 5.3: Perceptions on the Aesthetics of the game - All Players. 

Source: Chart assembled by authors. 

the in-game audio (sound effects) harmonized with in-game occurrences. About 80% of 

players agreed that the game was visually appealing (regarding the quality of the graph-

ics). Therefore, it can be reasonable to assume that there is no lack of interest or specific 

issues on the aesthetical elements of our implementation, and such elements should not 

affect the results of our user performance evaluation. 

Figure 5.4: Perceptions on the ease of learning to play the game - All Players. 

Source: Chart assembled by authors. 

Regarding player perceptions on the ease of learning how to play the game (by 

executing basic game mechanics) shown in Figure 5.4, about 60% of the player base 

strongly disagreed that the game was hard to understand, while the remaining 40% had 

mixed opinions, by partially agreeing, partially disagreeing or being indifferent to the 

proposition. About 80% of the player base agreed that the game was easy to playing 

regarding basic game mechanics. 

The proposition regarding the game being easy to learn had mixed opinions, with 

a similar amount of strong agreement and disagreement. Therefore, there is an indication 

that there could be an issue with the game’s learning curve regarding the use of basic 

mechanics, which would be an issue of level design where the order where challenges are 

presented to the player are suboptimal, and could affect their improvement process. This 

could affect player performance in the early levels of a first playthrough, where players 

are still not used to the game’s mechanics and have to identify enemy patterns in parallel

153 

to learning basic game elements. 

Figure 5.5: Perceptions on issues when playing the game - All Players. 

Source: Chart assembled by authors. 

Regarding player perceptions on issues identified when playing the game pre-

sented in figure 5.5, almost all players disagreed to have issues with the game’s controls, 

with only about 30% partially disagreeing. Propositions regarding the ability to hit en-

emies, defend against enemies and dodging enemy attacks had mixed opinions, with a 

slightly favorable perception on difficulty of performing defensive actions. About 90% of 

players disagreed that they had issues finding out the path to level objectives. 

Therefore, it is reasonable to assume that the design of input controls did not affect 

the ability of players to execute basic game mechanics, and that the level layouts provided 

a clear presentation of the path which should be taken by players. However, we identify an 

issue with the propositions regarding the ability to hit enemies, defending against enemies 

and dodging enemy attacks. Such propositions were formulated in a generalist phrasing 

that could be interpreted as being related to the player’s perception of difficulty, instead 

of the ability to execute each mechanic. Therefore, we could not consolidate a definite 

conclusion about the results of such propositions. 

Regarding player perceptions on affect-based propositions presented in figure 5.6, 

about 90% of users disagreed to have felt frustrated when playing the game, with about 

40% only partially disagreeing with such proposition. About 80% of players disagreed 

to have felt anxious while playing, and about 95% of users disagreed to have felt bored 

whiel playing. Regarding feeling comfortable while playing, players had mixed opinions, 

with a slight tendency towards disagreeing with feeling comfortable.

154 

Figure 5.6: Perceptions on feelings when playing the game - All Players. 

Source: Chart assembled by authors. 

We identify an issue with capturing affect-based metrics regarding the short dura-

tion of the experiment, which was devised to last in average 30 minutes of duration. In 

this short time frame, players might not be able to have sufficient information to assess 

whether they were affected positively or negatively by the game. However, with the cur-

rent data we could still assume that boredom did not affect the performance players in the 

second playthrough, and that players were significantly receptive to being defeated and 

repeating the later levels on a playthrough. 

5.6.2 Beginner Players 

In this section, we describe and analyze the observed results for each performance 

metric in the scope of beginner players. We attempt to verify the global increase and 

decrease of performance by analyzing charts (A) and (B) for each metric. We attempt to 

assess the effects of dynamic difficulty on the learning curve through chart (C) for each 

metric. We compare the level of challenge presented in the 2nd playthrough through chart 

(D). Finally, we attempt to estimate the validity of the data through the general standard 

deviation of samples for each metric. A summarized version of the observations used as 

input for the analysis can be seen in Table 5.5. 

Regarding the Adjustment Targets Average, which can be analyzed in Figure 5.7, 

we noticed a significant increase in the average adjustment level in the second playthrough 

for players in Group A, which played the Fixed Difficulty version first and the Dynamic 

Difficulty version second. As this metric represents the average target difficulty for each 

of the adjustments, we can compare the results to the fixed presets for the intermediate 

difficulty. Through this comparison, we can infer that beginner players were able to suf-

ficiently learn the game mechanics and enemy behavioral patterns, and would be able to 

complete the game at the presets for the intermediate difficulty.

155 

Figure 5.7: Avg. Adjustment Targets Average (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

We also noticed a steady increase in adjustment targets during the first playthrough 

for players in Group B, which played the Dynamic Difficulty version first. This could re-

inforce the idea that players steadily learned and improved upon their execution of game 

mechanics, as the DDA system inferred that the performance of players was generally 

above the thresholds for presets for the beginner difficulty. All results showed an accept-

able standard deviation, to which we can conclude that the results appropriately represent 

the beginner players group. 

Figure 5.8: Avg. Attack Avoidance Efficiency (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

Regarding the efficiency of avoiding enemy attacks, which can be analyzed in 

Figure 5.8, we noticed a significantly higher efficiency for both groups in the second 

playthrough. In general, players seem to be better at defending themselves in the second 

playthrough, where they would have learned all basic game mechanics and general enemy 

behaviors. We also noticed a slightly higher efficiency in the first playthrough after the 

second level for players in Group B, which played the Dynamic Difficulty version first. 

This could be related to a more efficient learning curve, where players which are presented

156 

to tougher challenges first might be able to defend themselves better in the later levels. 

We noticed a reduced efficiency in the second playthrough for Group A, which 

played the Dynamic Difficulty version second. By relating this metric with the Adjustment 

Targets Average, we can infer that a higher degree of challenge had a negative impact on 

the ease at which a player was able to dodge attacks. This can be related with the fact 

that in higher difficulties the player will often engage combat against a larger amount 

of enemies simultaneously, which could make dodging attacks harder. We identified a 

significant standard deviation in some of the samples, and particularly in the first part of 

the experiment. 

Figure 5.9: Avg. Attack Window Efficiency (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

Regarding the efficiency of dealing damage to enemies when they are vulnerable 

through the Attack Window Efficiency metric, which can be analyzed in Figure 5.9, we no-

ticed a higher efficiency in the second playthrough for both groups. Players seemed to be 

better at taking advantage of enemy vulnerabilities, such as staggers or attack cooldowns. 

This could be related to the players understanding that after an enemy performs an at-

tack, they have a cooldown time before performing another. However, we also noticed a 

lower efficiency for both groups in level 3, which correlates with the introduction of the 

Armored Knight enemy, which is designed to be the hardest enemy in the game. 

We also noticed a slightly higher efficiency in the first playthrough for Group B, 

which plays the Dynamic Difficulty version of the application first, and particularly in 

levels 4 and 5. This reinforces our previous idea that Dynamic Difficulty presents a more 

efficient learning curve for understanding strategies. In the second playthrough, players 

from Group A, which played the Fixed Difficulty version first, had a significantly lesser 

efficiency in taking advantage of attack windows. This could be related to an increase 

level of challenge, where the player has to tackle larger enemy groups simultaneously.

157 

We noticed a significant standard deviation in some of the samples. 

Figure 5.10: Avg. Completion Time (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

Regarding the average time beginner players took to complete which level, which 

can be analyzed in Figure 5.10, we noticed slight but continuous increase of completion 

time for both groups with each level, which correlates with our intended level design and 

experiment duration. However, we noticed a spike in the completion time for both groups 

in the last level, which took significantly longer to complete. During the design stage, 

we devised the last level to take about the same duration as the fourth level. This could 

signify either an unexpected increase in the difficulty, or an issue with the level layout. 

We also noticed slightly lower level completion times for both groups during the 

second playthrough, which aligns with the previously observed efficiency when dealing 

with enemies. Additionally, since the level layout might be the same depending on the 

adjustment target, this could also be related to the player being used to such level lay-

out. In Group B, which plays the Dynamic Difficulty version first, we noticed slightly 

lower completion times during the first playthrough, with the exception of a significant 

decrease in the fourth level. This could also reinforce differences in the learning curve 

and efficiency of players which learn to play in a DDA system. 

Group A had slightly higher completion times during the second playthrough, in 

which they would play the DDA version of the application. This could be caused by a gen-

erally higher level of challenge caused by the adjustment targets, where a higher amount 

of enemies, higher enemy difficulty and a different level layout could significantly affect 

the performance of players. Additionally, there was a significant difference in comple-

tion times for the fourth level during the second playthrough when comparing Group A 

to Group B, where group B was had considerably lower completion times. This could be 

explained by the fact that Group B experienced the Fixed Difficulty version second, which

158 

had beginner-level adjustment targets – and thus players which were already accustomed 

to game mechanics would find the level of challenge to be low. We found there was a low 

standard deviation in almost all samples for this metric. 

Figure 5.11: Avg. Damage Dealt per 10 seconds (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

Regarding the average damage dealt by players during combat, which is repre-

sented by the Damage Dealt per 10 seconds metric and can be analyzed in Figure 5.11, 

we noticed that both groups dealt a significantly higher amount of damage during the sec-

ond playthrough. In general, it could be inferred that players were much more efficient 

offensively, and our findings harmonize with the results for the Attack Window Efficiency 

metric. However, we noticed a lower amount of damage dealt during the third level for 

both groups. This could be related to a difficulty spike, which could be caused by the 

introduction of the Armored Knight enemy. 

We also noticed a slightly higher amount of damage dealt in the first playthrough 

by Group B in comparison to Group A, with a higher contrast during the third level. 

This reinforces the hypothesis of a more efficient learning curve during first playthroughs 

on DDA systems. However, we had mixed results on the damage dealt during the second 

playthrough for both groups, which leads to no conclusion regarding the level of challenge 

presented by DDA systems on a second playthrough. A few isolated samples of this metric 

had a large standard deviation. 

Regarding the average number of deaths at each level, which can be analyzed 

in Figure 5.12, we noticed a significant decrease in the number of deaths for both groups 

during the second playthrough. However, the decrease for Group B (which plays the Fixed 

Difficulty version second) is much more significant than Group A, which reinforces the 

fact that the Dynamic Difficulty version presented a much more adequate challenge level 

for players on a second playthrough. Additionally, we could infer that the learning curve

159 

Figure 5.12: Avg. Deaths (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

for players which played the DDA version first was more effective. 

During the first playthrough, we noticed a similar number of deaths for both 

groups, with a slight decrease in the number of deaths at the fourth and fifth level for 

players who played the DDA version first. We also observed a significantly higher num-

ber of deaths in the second playthrough for Group A, which played the Dynamic Difficulty 

version second. This could be a representative of the increased level of challenge of Dy-

namic Difficulty at a second playthrough. We also noticed a high standard deviation in the 

samples for later levels, which could show issues with level design or the learning curve. 

Figure 5.13: Avg. Health Lost per Encounter (Y) per Level (X) for Beginners. 

Source: Assembled by authors. 

Regarding the amount of health lost during combat, which is represented by the 

Health Lost per Encounter metric and can be analyzed through Figure 5.13, we noticed 

a significant decrease of damage taken for both groups in a second playthrough, which 

reinforces our previous observation that players are more defensively efficient during a 

second playthrough, where they would have learned all basic game mechanics and enemy 

behavioral patterns.

160 

During the second playthrough, we noticed a significantly lower damage taken 

by Group B in comparison to Group A, which could correlate with the learning curve 

by starting with a Dynamic Difficulty version first, and playing an easier version of the 

game second. We noticed a similar amount of damage taken by both groups in the first 

playthrough, which correlates with the observed results for the number of deaths. We 

also noticed a significantly higher amount of damage taken in group A in the second 

playthrough when comparing to Group B, which correlates with the level of challenge 

presented in a DDA system at a second playthrough. We noticed a high standard deviation 

in the samples for the first playthrough of Group B. 

Figure 5.14: Perceptions on Difficulty - Beginner Players. 

Source: Chart assembled by authors. 

Regarding the perceptions of beginner players on game difficulty, which can be 

analyzed in Figure 5.14, most users perceived the game as being difficult, with about 

50% strongly agreeing and 30% partially agreeing. About 70% of players did not per-

ceive the difficulty as being unfair, but 40% only partially disagreed with the proposition. 

Therefore, we can assume that a more granular analysis on each specific group could have 

exposed issues regarding the level of challenge presented to players. 

About 90% of players perceived the enemies to be challenging, with 50% strongly 

agreeing to such proposition. Most players found that the enemies were not overtly chal-

lenging regarding their skill level, but about 20% disagreed. About 90% of players dis-

agreed that the enemies were too easy in comparison to their skill level, and 80% of 

players felt that the enemies in the later levels were harder. Since enemy encounters in 

later levels were in fact designed to be more difficult, it is reasonable to infer that there 

are no relevant issues regarding the balancing of enemies for beginner players. 

Regarding the perceptions of beginner players on learn basic mechanics of the

161 

Figure 5.15: Perceptions on Learning - Beginner Players. 

Source: Chart assembled by authors. 

game, which can be analyzed in Figure 5.15, most users felt like they learned how to 

defend (block) against enemy attacks, with about 50% only partially agreeing to such 

proposition. Mixed opinions were observed regarding the dodging mechanic, where 30% 

of beginners strongly felt that they did not learn how to dodge. Additionally, 90% of 

players felt like they were constantly outnumbered, with about 60% strongly agreeing 

with such proposition. These results could show that beginner players were unable to 

properly learn the dodge mechanic. Additionally, we had strong indications that beginner 

players did not properly learn how to isolate their targets when engaging in combat. 

Figure 5.16: Perceptions on Playthroughs - Beginner Players Group A. 

Source: Chart assembled by authors. 

Regarding the perceptions of beginner players from Group A when comparing 

the first to the second playthrough, which can be analyzed in Figure 5.16, about 80% of 

players disagreed that the second version was easier than the first, and 80% of players 

agreed that the second version was harder than the first. These results align with the fact 

that players in Group A experienced a higher challenge level in the second version caused 

by the adjustments performed by the dynamic difficulty.

162 

About half of the beginner players were unable to tell whether the enemies in 

the second version were smarter, with an additional 30% of players being agreeable to 

such proposition. Most players disagreed with the enemies in the second version being 

less intelligent, with about 40% not being able to tell the difference. These results can 

be interpreted as some of the beginner players in Group A being able to perceive that 

the enemies in the Dynamic Difficulty version did in fact present a more sophisticated 

behaviors, with different attack patterns and decision algorithms. 

About 80% of players disagreed with feeling confident in their first playthrough, 

and 80% of players felt like they performed better during their second playthrough. Ad-

ditionally, 80% of players also felt more confident during their second playthrough. Such 

perceptions align with the results seen in our performance metrics, where even though the 

level of challenge presented to players was higher, players were able to tackle enemies 

and execute game mechanics more efficiently. 

Figure 5.17: Perceptions on Playthroughs - Beginner Players Group B. 

Source: Chart assembled by authors. 

Regarding the perceptions of beginner players from Group B when comparing 

the first to the second playthrough, which can be analyzed in Figure5.17, about 70% of 

players did not agree with the proposition that the second version of the game (Dynamic 

difficulty) was easier than the first. The other 30% of players had partially agreeable or 

indifferent opinions. Most players were indifferent or did not know whether the second 

version was harder than the first, with the other 20% either strongly agreeing or disagree-

ing. These results could be interpreted as players not being able to recognize the differ-

ence in difficulty between the two versions, even though players in Group B experienced 

a significantly easier level of challenge, as previously observed.

163 

About 60% of players felt like enemies in the second version were smarter than the 

first, with 40% being unable to tell the difference. Most players disagreed that enemies in 

the second version were less intelligent, with 40% being unable to assess the validity of 

the proposition. These results go in disagreement with the performance results regarding 

adjustment target values, where the overall game difficulty was observed to be lower in 

the second playthrough for players in Group B. 

About 60% of players disagreed with feeling confident in their first playthrough, 

with 40% presenting indifferent or partially agreeable opinions. Similarly, 60% of players 

perceived their performance on the second playthrough to be better, with 40% partially 

agreeing to feeling more confident on a second playthrough. These results align with the 

previously seen performance results for group B, which were observed to be significantly 

higher than the first part of the experiment. 

5.6.3 Intermediate Players 

In this section, we describe and analyze the results for performance and perception 

metrics obtained during our experiment in the scope of Intermediate-level players. We 

compare such results to the previous obtained results from beginner players, to assess the 

differences in the learning curve and level of challenge for each group. Table 5.6 presents 

a summarized version of our observations on the results. 

Figure 5.18: Avg. Adjustment Targets Average (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

Regarding the average of adjustment target values for intermediate players, which 

can be analyzed in Figure 5.18, we noticed a significant increase in adjustment targets 

for Group A during the second part of the experiment, where such group plays the Fixed 

difficulty version. The results show that intermediate players on a second playthrough

164 

would be able to play at a slightly higher difficulty than the default fixed difficulty for 

their skill level. 

However, we also noticed an overall decrease in the adjustment targets for Group 

B during the first part of the experiment, which uses a DDA system. Therefore, it is rea-

sonable to assume that the initial difficulty (Fixed preset) for intermediate players could 

be unbalanced for a first playthrough. Therefore, the default fixed difficulty presets could 

negatively impact the learning curve. 

We also noticed significantly higher adjustment targets for Group A during the 

second part of the experiment, where the Dynamic Difficulty version of the application is 

played. These results generally mean that the overall challenge level presented to play-

ers in Dynamic Difficulty during a second playthrough would be higher, in comparison 

to fixed difficulty. We noticed a low standard deviation in all observed samples, which 

reinforces the validity of the results. 

Figure 5.19: Avg. Attack Avoidance Efficiency (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

Regarding the efficiency in avoiding enemy attacks, which can be analyzed in Fig-

ure 5.19, we identified a higher efficiency for both groups during the second playthrough, 

with a higher contrast in the first and fourth levels. However, we also noticed a lower effi-

ciency in the second level for both groups during both versions of the application, which 

could be related to the introduction of ranged enemies. These results resemble what was 

observed in the analysis for beginner players. 

We noticed an overall higher efficiency for Group A during the second part of 

the experiment, in which the Dynamic Difficulty version was played. An exception was 

observed in the fourth and fifth levels, which could be caused by a high contrast in the 

difficulty in comparison to earlier levels. For Group B, we noticed a significantly higher 

efficiency in the second playthrough, where the fixed difficulty version was played. These

165 

results go in accordance with the fact that Group A experienced a higher overall difficulty 

than Group B in the second version due to the adjustment target values. However, we 

noticed that level 3 was an exception, which could indicate a difficulty spike in such level. 

We noticed a slightly higher avoidance efficiency in Group B in comparison to 

Group A during the first playthrough, in which the Dynamic difficulty version was played. 

This could be explained by two possibilities: a more efficient learning curve, or simply an 

easier level of challenge provided by the adjustment targets. Regarding the second part 

of the experiment, we noticed mixed results between both groups during the first three 

levels. However, we noticed a significantly higher efficiency for Group B on the fourth 

and fifth levels, where the Fixed Difficulty version was played. This could be explained 

by the lower level of challenge presented by the fixed adjustment targets. However, we 

also noticed a high standard deviation in samples for the fourth and fifth level. 

Figure 5.20: Avg. Attack Window Efficiency (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

Regarding the efficiency of attacking vulnerable enemies, which can be analyzed 

in Figure 5.20, we observed a higher efficiency during the second playthrough for both 

groups, with an exception for the last level. Results show that intermediate players are also 

more offensively efficient on a second playthrough. We also noticed a similar efficiency 

on the second level for both groups during both parts of the experiment. For the second 

level, the introduction of Ranged enemies could have had an effect on offensive efficiency. 

We also noticed a steady increase in efficiency during the second playthrough for 

Group A, which played the Dynamic Difficulty version second. The increase occurred 

regardless of the increase in average difficulty, with an exception for the last level. These 

results show that even in a higher difficulty, players are able to play the game more effi-

ciently than in an easier version. Regarding the last level, the decrease of efficiency could 

be related to a difficulty spike.

166 

We also observed a better performance for Group B in comparison to Group A 

during the first part of the experiment, which could have been caused by a combination of 

lower difficulty with a more efficient learning curve. In the second part of the experiment, 

Group B also presented a significantly higher efficiency in all levels, which could be 

explained by the lower average difficulty from adjustment targets. We noticed a significant 

standard deviation in samples for the second part for Group A and the first part for Group 

B. 

Figure 5.21: Avg. Completion Time (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

Regarding the level completion times for intermediate players, which can be an-

alyzed in Figure 5.21, we observed a globally lower completion time during the second 

playthrough for both groups, with an exception for the last level – which reinforces our 

previous observations of such level being a possible difficulty spike. We also noticed that 

the difference in completion times for the second part of Group B in comparison to the 

first part was significantly higher than the same difference in Group A, which could be 

explained by the lower average difficulty from adjustment targets. 

We noticed lower completion times on the first playthrough for Group B (which 

started in Dynamic Difficulty) in comparison to Group A, which could be justified by the 

lower average difficulty and a more efficient learning curve. We also observed lower com-

pletion times on Group B when comparing the second part, which uses Fixed Difficulty. 

This could be explained by an also lower challenge level. We observed low standard 

deviation in all but a few isolated samples. 

Regarding the average damage dealt to enemies during combat encounters, which 

can be observed in Figure 5.22, we noticed a lower amount of damage dealt by Group A 

in the second playthrough, where the dynamic difficulty version was played. This could 

be explained by the higher difficulty level, but contradicts our observations regarding the

167 

Figure 5.22: Avg. Damage Dealt per 10 seconds (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

attack window efficiency. 

We also noticed a lower amount of damage dealt in the first playthrough for Group 

B in comparison to Group A, which uses Dynamic Difficulty. These results could be con-

sidered inconsistent with the lower average difficulty from the adjustment targets during 

this part of the experiment for Group B. However, we noticed a higher amount of damage 

dealt in the second playthrough by Group B, which presents the fixed difficulty version. 

Such results are consistent with the lower average difficulty previously discussed. We 

noticed a high standard deviation in a significant amount of the samples, which could 

explain the inconsistencies found in the observations. 

Figure 5.23: Avg. Deaths (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

Regarding the number of deaths per level from intermediate players, which can be 

analyzed in Figure 5.23, we observed a globally lower amount of deaths during the second 

part of the experiment, which is consistent with our previous observation that players are 

more defensively efficient in the second playthrough. We also noticed a slightly lower 

amount of deaths in Group B during the first part of the experiment, when comparing to

168 

Group A. 

Since Group B uses Dynamic Difficulty during the first playthrough, such results 

could be caused by lower adjustment targets. We also noticed an abnormally high contrast 

in the amount of deaths for Group B during the second part of the experiment, which uses 

Fixed Difficulty. Such results are most likely caused by the lower difficulty, in compar-

ison to Group A. However, we noticed a high standard deviation in almost all observed 

samples. 

Figure 5.24: Avg. Health Lost per Encounter (Y) per Level (X) for Intermediates. 

Source: Assembled by authors. 

Regarding the average health lost by intermediate players during combat encoun-

ters, which can be analyzed in Figure 5.24, we noticed a globally lower average on the 

second playthrough for both groups, which shows similar results to beginner players. 

When comparing the first playthrough between both groups, we had mixed results where 

each group would have a lower average on different levels. 

However, a correlated trend between the two was that as levels progressed, players 

seemed to be more efficient in taking less damage. Such results go in accordance with 

what was previously seen regarding the defensive efficiency of players. We noticed a 

slightly lower amount of health lost by Group B during the second playthrough, which 

uses Fixed Difficulty. This could possibly be explained by the lower average difficulty in 

comparison to Group A. We observed a low standard deviation in almost all samples. 

Regarding the perceptions of intermediate players on the difficulty of the game, 

which can be seen in Figure 5.25, about 90% of players found the game to be difficult, 

and 90% disagreed that the difficulty was unfair, with 50% only partially disagreeing to 

such proposition. This could show a slight issue with difficulty balancing in one of the 

target groups. 

About 90% of players agreed that the enemies were challenging, with 80% strongly

169 

Figure 5.25: Perceptions on Difficulty - Intermediate Players. 

Source: Chart assembled by authors. 

agreeing. However, all intermediate players disagreed thatenemies were too chalenging 

for them. Additionally, 90% also though the enemies were not too easy for them. Such re-

sults show strong indicators that the perceptual difficulty for enemies is balanced towards 

the correct skill level. Most players agreed that the enemies in later levels were harder, 

with about 30% not being able to determine. 

Figure 5.26: Perceptions on Learning - Intermediate Players. 

Source: Chart assembled by authors. 

Regarding perceptions on learning how to play the game, which can be observed 

in Figure 5.26, about 85% of players agreed to have learned to defend (block) themselves 

against enemy attacks. Regarding dodging we observed mixed results, with a slightly 

higher amount of players disagreeing to have learned how to dodge enemies. Such results 

can also be observed in the beginner players classification, and might show issues with the 

learning curve for the dodging mechanic. Additionally, most players agreed to have been 

constantly outnumber by enemies, which also shows issues with learning how to isolate 

targets properly. This was also observed with beginner players. 

Regarding intermediate player perceptions on each playthrough for Group A, 

which can be analyzed through Figure 5.27, about 80% of players disagreed that the 

second version of the game (with Dynamic Difficulty) was easier than the first. Addi-

170 

Figure 5.27: Perceptions on Playthroughs - Intermediate Players Group A. 

Source: Chart assembled by authors. 

tionally, 80% thought that the second version was harder than the first. These results go 

in accordance with the performance metrics, which show adjustment target levels to be 

higher than the fixed difficulty preset for intermediate players, which would result in a 

more challenging game. 

About 70% of players perceived the enemies in the second version to be smarter. 

A similar amount disagreed that the enemies in the second version to be less intelligent 

than the first. Therefore, results show that most players in Group A did perceive that 

the second version (Dynamic Difficulty) was harder, which goes in accordance with the 

previously seen results for performance metrics. 

About 80% of the players disagreed to feeling confident in their first playthrough. 

About 80% thought that they did better in the second playthrough, with 50% strongly 

agreeing to such proposition. Additionally, all intermediate players felt more confident 

in their second playthrough. The results harmonize which was previously seen regarding 

performance metrics, where offensive and defensive efficiency was much higher in the 

second playthrough. 

Regarding intermediate player perceptions on each playthrough for Group B, which 

can be analyzed through Figure 5.28, about 60% of players found the second version to 

be easier than the first. All players on Group B disagreed that the second version was 

harder than the first. These results are slightly inconsistent with what was seen in the per-

formance metrics, where the adjustment targets for Group B were slightly lower than the 

preset for fixed difficulty. Therefore, players were not able to perceive that their perfor-

mance improvement was caused by properly learning game mechanics during their first

171 

Figure 5.28: Perceptions on Playthroughs - Intermediate Players Group B. 

Source: Chart assembled by authors. 

playthrough. 

About 70% of players disagreed that the enemies in the second version (Fixed 

Difficulty) were smarter, and 60% felt that the enemies in the second version were less 

sophisticated. Such results are similar to the inconsistent perceptions regarding diffi-

culty, as the average adjustment target for the Fixed Difficulty was higher than the first 

playthrough for Group B. 

All players disagreed to have felt confident in their first time playing, with 30% 

only partially agreeing. Additionally all players felt that they performed better in the 

second version, and agreed to have felt more confident in their second playthrough. These 

results go in accordance with the previously analyzed performance metrics, where players 

in Group B performed much more efficiently in the fixed difficulty version. 

5.6.4 Veteran Players 

In this section, we analyze the results for performance and perception metrics ob-

tained during our experiment for Veteran-level players. We compare such results to the 

previous obtained results from beginner and intermediate players, to assess the differ-

ences in the learning curve and level of challenge for each group. Table 5.7 presents a 

summarized version of our observations on the results. 

Regarding the average of adjustment targets for veteran players, which can be 

observed in Figure 5.29, we noticed globally lower adjustment targets for both groups in 

the Dynamic Difficulty version in both parts of the experiment. These results could show

172 

Figure 5.29: Avg. Adjustment Targets Average (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

issues with the balancing for the fixed difficulty presets for Veteran players, where the 

base difficulty is above the skill level of players. 

We noticed lower adjustment targets for Group B on the first playthrough, where 

the Dynamic difficulty version was played. These results could be used as a reference for 

a more appropriate fixed difficulty preset for Veteran players. We noticed a low standard 

deviation in all observed samples. 

Figure 5.30: Avg. Attack Avoidance Efficiency (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

Regarding the efficiency of avoiding enemy attacks, which can be analyzed in 

Figure 5.30, we noticed mixed results in both playthroughs and between both groups. This 

could show that, up to a certain level, adjustment targets do not have a significant effect 

on player performance. We noticed an overall lower efficiency in Group A during both 

playthroughs, when comparing to Group B, which could evince individual differences 

in players skill – and issues with sampling. We noticed a high standard deviation in a 

considerable amount of samples. 

Regarding the efficiency to take advantage of enemy vulnerabilities, which can

173 

Figure 5.31: Avg. Attack Window Efficiency (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

be observed in Figure 5.31, we observed a higher offensive efficiency in the second 

playthrough during the first levels (1 to 3) for both groups. However, we noticed mixed 

results in the later levels (4 and 5), which could show a difficulty spike. 

We also noticed a slightly higher efficiency in the first playthrough for Group B, 

which uses Dynamic Difficulty. Such results harmonize with the average lower adjust-

ment targets for Group B. Mixed results were found between groups in the second part, 

which reinforces the previous notion that player skill levels reached a plateau in contrast 

to adjustment targets. A high standard deviation was found in a considerable amount of 

samples for the second playthrough. 

Figure 5.32: Avg. Completion Time (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

Regarding the average time taken to complete levels by veteran players, which 

can be analyzed in Figure 5.32, we found globally lower completion times in the second 

playthrough, with a steady increase in completion times at each level. When comparing 

between groups, Group B had the lowest completion times in the first part of the exper-

iment, with Dynamic Difficulty – which could possibly caused by the lower adjustment

174 

targets. We noticed abnormally high standard deviation in samples for the last level. 

Figure 5.33: Avg. Damage Dealt per 10 seconds (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

Regarding the average damage dealt by veteran players during combat encounters, 

which can be analyzed in Figure 5.33, we observed mixed results between playthroughs 

for both groups, which further reinforces the previously observed plateau for skill levels 

in contrast to adjustment targets. We noticed a slightly higher amount of damage dealt by 

Group B during the first playthrough, where the Dynamic Difficulty version was played. 

Such results harmonizes with the lower average difficulty from adjustment targets. We 

noticed a high standard deviation in a considerable amount of samples. 

Figure 5.34: Avg. Deaths (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

Regarding the average number of deaths per level for veteran players, which can be 

analyzed in Figure 5.34, we noticed a globally lower amount of deaths during the second 

playthrough. We also noticed that both groups had a total of zero deaths in the first level. 

However, a high amount of deaths in the last level was observed for both groups, which 

evinces a possible difficulty spike. 

A slightly lower amount of deaths was observed in the first playthrough for Group

175 

B, in comparison to Group A. Such result aligns with the previously noted lower adjust-

ment targets from Dynamic Difficulty. We noticed mixed results when comparing be-

tween groups in the second playthrough, and a high standard deviation in a considerable 

amount of samples. 

Figure 5.35: Avg. Health Lost per Encounter (Y) per Level (X) for Veterans. 

Source: Assembled by authors. 

Regarding the average health lost per encounter for veteran players, which can 

be observed in Figure 5.35, we noticed a globally lower amount of health lost during 

the second playthrough for both groups, which is aligned with the previous results for 

defensive metrics. However, we noticed a slightly lower amount of health lost for Group 

B in the first playthrough, when comparing to Group A. 

Such result harmonizes with the lower adjustment targets previously noted in the 

Dynamic Difficulty version. We also noticed mixed results when comparing between 

groups for the second playthrough, which could show issues with balancing the fixed 

difficulty presets for veteran players. We noticed a high standard deviation in some of the 

samples. 

Regarding perceptions on game difficulty from veteran players, which can be an-

alyzed in Figure 5.36, about 80% of player disagreed that the game was difficult, with no 

players finding the difficulty to be unfair. Such results can be referenced to the adjustment 

target metrics, which showed veteran players to be below the fixed adjustment targets for 

the veteran difficulty. This could show an issue with the thresholds for the adjustment 

targets. 

About 70% of veteran players perceived enemies to be challenging, with none 

finding enemies to be too challenging for them. Mixed results were found regarding ene-

mies being too challenging for players, with most players disagreeing with such proposi-

tion. All players perceived the enemies in later levels to be harder.

176 

Figure 5.36: Perceptions on Difficulty - Veteran Players. 

Source: Chart assembled by authors. 

Figure 5.37: Perceptions on Learning - Veteran Players. 

Source: Chart assembled by authors. 

Regarding the perceptions on learning game mechanics, which can be observed 

in Figure 5.37, about 90% of veteran players felt like they learned how to defend (block) 

against enemy attacks, and 80% agreed to have learned how to dodge. This provides 

contrast with the results seen for beginner and intermediate players, where the aforemen-

tioned groups did not perceive to have properly learned the dodge mechanic. All players 

found themselves to be constantly outnumber, which was also reported by beginner and 

intermediate players. Such results could show issues with the placement of enemies in 

levels, where players are unable to isolate targets to facilitate combat. 

Regarding the perceptions of Group A on each playthrough, about most players 

disagreed that the second version was easier than the first. All players found the second 

version to be harder than the first. An inconsistency was found with the answers, where 

part of the players did not know whether the second version was easier, but most felt that 

the second version was harder. 

Most players were unable to tell if the enemies in the second version were more 

or less intelligent than enemies in the first. Such results go in accordance with the mixed 

performance results and adjustment targets for veteran players, and further reinforces

177 

Figure 5.38: Perceptions on Playthroughs - Veteran Players Group A. 

Source: Chart assembled by authors. 

issues with adjustment thresholds. 

All players felt confident in their first time playing, which shows a difference 

between veteran players and beginners or intermediates. All players also felt like they 

performed better in the second time playing, and agreed to have felt more confident in the 

second time playing. 

Figure 5.39: Perceptions on Playthroughs - Veteran Players Group B. 

Source: Chart assembled by authors. 

Regarding perceptions on each playthrough for Group B of the veteran players, 

which can be analyzed in Figure 5.39, we observed mixed results in the perception of 

whether the second version of the game was easier or harder. Similar results were seen 

regarding the perception of enemies, with most disagreeing that the enemies in the second 

version were less intelligent than the first.

178 

The mixed results shown here could be explained by the low sample amount and 

further reinforce an unbalanced approach on the dynamic difficulty for veteran players. 

Most players felt confident in their first playthrough, and about 60% felt like they did 

better in their second playthrough. Additionally, all players agreed to have felt more 

confident in their first playthrough. These results harmonize with what was seen in Group 

A. 

5.7 Conclusions 

In this section, we provide a summarized description of the methodology of our 

experiment, determining the objectives, user acquisition methodology, user classification, 

performance metrics and perception evaluation. We describe the results gathered through 

this methodology to assess if our implementation is able to validate our initial hypothe-

ses. Finally, we list and describe the difficulties and limitations encountered during the 

employment of our methodology. 

5.7.1 Summary of Methodology 

We defined our methodology with the intent of evaluating the efficiency of DDA 

systems to address issues regarding the learning curve and challenge level of games. First, 

we tried to determine if a game with difficulty settings based on a DDA system can pro-

vide a learning curve which is more appropriate to the necessities of specific players. 

Therefore, we attempted to measure if players which experienced Dynamic Difficulty 

systems in a first playthrough could better understand and execute basic game mechanics 

and identify enemy patterns. 

As a second objective, we wished to understand if DDA systems could provide a 

more appropriate level of challenge for players which understood and were accustomed to 

basic game mechanics and enemy patterns. Therefore, we attempted to measure if players 

which experienced Dynamic Difficulty systems on a second playthrough experienced a 

more appropriate level of challenge to their skill level than a fixed difficulty system could 

provide. 

To acquire users for the experiment to come to fruition, we invited users across 

online communities through the Discord app. We specifically targeted users from com-

179 

munities which served as a platform to discuss Souls-like games, where we evaluated that 

there would be more interest regarding our experiment. We attempted to acquire users 

throughout multiple player profiles, but which satisfied a common set of selection crite-

ria. 

To mitigate the impact of highly contrastable player preferences affecting the mea-

surement and analysis of performance-based and perception-based results, we defined a 

set of selection criteria based on user age, preferred platforms, preferred input devices, 

and the use of Steam as a common storefront for games. 

Since the experiment was performed remotely and the authors were unable to 

provide a constrained environment for users to participate in, we also defined criteria 

regarding the hardware of users. With the objective of running our application with a rea-

sonably standardized environment, we defined a set of restrictions regarding PC/Desktop 

hardware requirements, dual-analog joystick input devices and computer displays which 

adhered to restricted size and resolution limits. 

To evaluate the impact of dynamic adjustments in each target player profile, and 

to evaluate the difficulty balancing of the game for each skill level, we classified users 

in beginners, intermediate players and veterans based on their affinity to action games, 

weekly amount of time dedicated to playing video games, and their previous completion 

of Souls-like games. 

To evaluate the impact of Dynamic Difficulty Systems in comparison to Fixed 

Difficulty systems, and with the objective of evaluating the efficiency of DDA systems 

on the learning curve and as a difficulty regulator for experienced players, we separated 

our user base in two user groups: Group A and B. Each user group played two versions 

of the application in different orders, with Group A playing the Fixed Difficulty version 

first, and Dynamic Difficulty version second, and Group B playing the Dynamic Difficulty 

version first and Fixed Difficulty version second. 

With such division of user groups, we were able to compare the effects of Dy-

namic Difficulty on a first and second playthrough, and compare the learning curve and 

level of challenge of Dynamic Difficulty in comparison to Fixed Difficulty. The groups 

symmetrically divided our user base by classification, with each user skill level containing 

the same or a similar amount of players. 

To evaluate player performance for each user group and for each player skill level 

classification, with the objective of assessing the effects of the learning curve and chal-

lenge level on each player profile, we selected a subset of the performance metrics which

180 

were originally gathered by our application to perform dynamic difficulty adjustments. In 

the context of our experiment, the metrics were used with the intent of evaluating player 

performance. 

We also defined and employed a Player Perception Survey to assess the player 

perception, with the following objectives: 

 To validate the quality of the game developed during our implementation; 

 To detect issues which could affect the evaluation of performance metrics; 

 To reinforce our analysis difficulty balancing of the game for each player classifi-

cation; 

 To reinforce our analysis of the learning curve for each group; 

 Assess the validity of performance metrics in comparison to player perceptions. 

The survey was employed through a set of propositions in which users were able to convey 

their opinions through multiple choices, defined through a Likert Psychometric Scale. 

Finally, we used the data acquired throughout the playthroughs and surveys during 

our experiment for each user classification and experiment group, with the objective of 

assessing the validity of our originally defined hypotheses. We assessed whether Dynamic 

Difficulty was able to provide a more appropriate learning curve for beginner players, and 

a more appropriate level of challenge for experienced players when compared to Fixed 

Difficulty presets. 

5.7.2 Conclusions on Results 

We begin by describing the results of our Player Perception Survey for all users in 

our experiment, in regards to the Aesthetics, Ease of Learning, Issues and Affect caused 

by our application. Regarding the Aesthetics of our implementation, the overwhelming 

majority of players in our experiment were interested in playing the game, and found 

the game to be visually appealing. Players also found the game to be satisfying to play, 

and most also felt that the audio feedback to in-game events was sufficiently responsive. 

Therefore, we can reasonably conclude that the aesthetics of the implemented game made 

players feel generally interested and motivated to play. 

Regarding the ease of learning basic game controls, the majority of players found 

the game to be simple to understand and play. Divisive results were observed on the ease 

of learning to play, with a slightly trend to positive opinions. We conclude that there were

181 

possible issues with the learning curve of specific game mechanics. 

Regarding issues that were found by players, there were no significant issues re-

garding basic game controls, such as movement, attacking and camera controls. However, 

we identified an issue in our methodology with the formulation of questions on specific 

mechanics, such as attacking, blocking and dodging. In our evaluation survey, players 

may have interpreted the propositions to be related to game difficulty, rather than usabil-

ity issues. However, no relevant issues were found regarding the role of level design on 

communicating player objectives. 

Regarding player opinions on affective reactions when playing, players did not 

feel generally frustrated, anxious or bored while playing. Mixed results were found re-

garding being comfortable when playing the game, which could be caused by game dif-

ficulty or the experiment methodology. Additionally, we identified another issue with the 

design of our methodology, where a short experiment duration would not be sufficient for 

players to correctly evaluate their perceptions on feelings. 

In sequence, we proceeded to analyze the performance and perceptions of begin-

ner players. Regarding the level of challenge experienced by beginner players, which de-

rived from the average adjustment targets, beginner players experienced a slightly higher 

difficulty on the DDA version on a first playthrough. Additionally, DDA systems provided 

a significantly harder version of the game on a second playthrough. 

Such results provided strong indications that the difficulty presented by a DDA 

system in a second playthrough was much better suited to the improvements in player 

skill after a first playthrough. Additionally, the steady increase in difficulty observed in 

the DDA system on a first playthrough also provided indications that the learning curve 

in a DDA system was accelerated for beginner players. 

Regarding offensive and defensive efficiency, an increasing and slightly higher 

efficiency was observed throughout levels for players which experienced Dynamic Diffi-

culty first. In general, players learned to be more efficient in a DDA system. In a second 

playthrough a higher contrast was observed, where players which experienced fixed diffi-

culty had a much higher efficiency – which could have been caused by the lower average 

difficulty. 

We conclude that the difference in performance on a second playthrough was 

caused by players in dynamic difficulty experienced a significantly increased level of 

challenge. Completion times followed the same trend as combat efficiency, where players 

which experienced dynamic difficulty in a first playthrough were more time efficient, and

182 

in a second playthrough experienced a higher level of challenge. 

Overall, when analyzing the performance metrics for beginner players, we ob-

served slight indications that Dynamic Difficulty provided a better learning curve for be-

ginners, as players were able to achieve higher difficulty and more efficiency when playing 

Dynamic Difficulty as the first version. We also noticed strong indications that Dynamic 

Difficulty provided a more appropriate level of challenge on a second playthrough, as 

players were able to reach much higher average adjustment targets. 

Regarding the perceptions of beginner players on game difficulty, most perceived 

the game to be difficult without being unfair, with enemies being perceived as the ap-

propriate level of challenge. Overall, we observed indications that players experienced 

the correct level of challenge, but a more granular analysis could expose issues with the 

balancing. 

Regarding perceptions on learning how to play, most beginner players agreed to 

have learned how to block, but a similar amount disagreed to have learned how to dodge. 

Additionally, almost all players felt that they were constantly outnumbered. The results 

show issues with beginner players learning the dodging and target isolation mechanics. 

Regarding beginner player perceptions on each playthrough, Group A correctly 

perceived the difficulty of the second playthrough (Dynamic) to be harder, but also felt 

more confident in such playthrough. Group B incorrectly assessed the second version to 

be harder, even though their performance in such version was much higher than Group A. 

We conclude that either beginner players had issues when assessing the difficulty, or the 

application contains balancing issues for beginner players. 

Regarding the level of challenge experienced by intermediate players, we noticed 

a significant increase in adjustment targets when playing the Dynamic Difficulty version 

of the game in the second playthrough. However, when playing the DDA version in the 

first playthrough, we noticed a general decrease in the average adjustment targets until the 

later levels. Such results show inconsistencies in the balancing of the base Fixed Difficulty 

presets for intermediate players, which creates an issue with the learning curve. However, 

we found that the DDA version was still appropriate during the second playthrough. 

Regarding the defensive and offensive efficiency for intermediate players, we no-

ticed an overall higher efficiency when playing the Dynamic Difficulty version in the first 

playthrough, which indicated a more efficient learning curve. In the second playthrough, 

we noticed a slightly lower efficiency for Dynamic Difficulty – which could be explained 

by the higher level of challenge derived from adjustment targets. Additionally, we noticed

183 

that the intermediate difficulty presented several difficulty spikes at specific levels, which 

affected the combat performance metrics. 

We found that the learning curve on the Dynamic Difficulty version made inter-

mediate players more efficient, which is a similar result to what was seen with beginner 

players. We also found that the level of challenge presented in a second playthrough 

by DDA systems was higher, and generally more appropriate for intermediate players. 

However, we noticed a significant amount of samples which presented standard deviation 

issues, which could be related to the low sample amount. 

As with beginner players, completion times followed the same trend as offensive 

and defensive efficiency, with lower completion times for the DDA version in the first 

playthrough, and higher completion times for the DDA version in the second playthrough. 

Both results further reinforce our initial hypotheses. 

Overall, the results for intermediate players follow the same trend as what was ob-

served with beginner players, with players having a better efficiency on DDA systems on 

a first playthrough (even with a higher average difficulty), and having worse performance 

than Fixed Difficulty on a second playthrough (because of the even higher adjustment 

targets). 

However, we generally noticed a lower adjustment targets average during the first 

playthrough, which indicates an unbalanced base level of challenge for intermediate play-

ers in the Fixed Difficulty version. We also noticed a high standard deviation in a consid-

erable amount of samples. 

Regarding the perceptions of intermediate players on game difficulty, almost all 

players found the game to be difficult but no unfair. Most players strongly agreed that 

enemies were challenging, but not overtly challenging for their skill level. As what was 

observed with beginner players, the results for intermediate players indicate that the gen-

eral difficulty level is appropriately balanced towards intermediate players. 

Regarding learning basic game mechanics, most players agreed to have learned 

how to block, but the proposition regarding the dodging mechanic presented mixed re-

sults. Additionally, almost all players felt that they were constantly outnumbered. We 

conclude that results showed some improvements on the dodging mechanic when com-

pared to beginner players, but were still suboptimal. Such results reinforce previous evi-

dence regarding the base learning curve for each skill level. 

Regarding the perceptions of players between playthroughs, Group A incorrectly 

assessed the second playthrough to be harder than the first. Additionally, Group B also

184 

incorrectly assessed that the second playthrough was easier than the first. We further 

reinforce our previous evidence on issues on the balancing of base adjustment targets for 

each skill level. Additionally, we reinforce our previous evidence regarding the ability of 

players to compare difficulty between versions. 

Regarding the level of challenged experienced by veteran players, lower adjust-

ment targets were observed in the Dynamic Difficulty version during both parts of the 

experiment. Even in the second playthrough adjustment targets were significantly lower 

than the fixed presets for veteran players. Such results show issues with the balancing of 

adjustment targets for veterans, where even when performing sufficiently well, the game 

lowers the average difficulty. 

Additionally, such results also provide strong indications that a higher difficulty 

preset would be necessary, where players which performed significantly well would ex-

perience higher adjustment targets for a subset of the in-game adjustments. 

Regarding the offensive and defensive efficiency of veteran players, we noticed 

mixed results for the Dynamic Difficulty version in both playthroughs. Such results indi-

cate that, after a certain level of difficulty and player skill level, adjustment targets would 

not have a significant effect on player performance. 

Additionally, we conclude that the player classification methodology used for vet-

eran players does not take into account individual player differences. When such issue is 

combined with a low sample amount, a high standard deviation is observed. Regarding 

completion times, we observed that players in the Dynamic Difficulty version of the ap-

plication had lower completion times on both playthroughs, which could be explained by 

the lower average difficulty. 

Overall, we observed mixed results on the performance metrics for veterans. We 

conclude that a failure in methodology was found, where we did not consider individual 

player skill differences after a certain level of mastery, which could cause a considerable 

standard deviation even in higher sample amounts. Additionally, we perceived strong 

indications on issues with Fixed Difficulty presets for veteran players, and their relative 

adjustment targets. 

Regarding the perceptions of difficulty by veteran players, almost all players dis-

agreed that the game was difficult, but most thought that the enemies were challenging. 

A small amount of players found enemies to be too easy for their skill level. Such results 

further indicate issues with adjustment targets, where even when player perform well, the 

game lowers the average difficulty from adjustment targets.

185 

Veteran players were not able to determine which of the versions of the game was 

more difficult. Such results align with what was observed with adjustment targets, where 

the Dynamic Difficulty version provided similar average difficulty on both playthroughs. 

Regarding veteran player opinions on learning, most players reported to have 

learned how to defend and dodge against enemy attacks. The results for the dodging me-

chanic go in contrast with what was seen with beginner and intermediate players, which 

could be related to the previous experience of veteran players with Souls-like games. 

However, all veteran players felt like they were constantly outnumbered. Therefore, we 

identify a global issue with target isolation, which could be explained by a failure in the 

overall level design of the application. 

5.7.3 Problems and Limitations 

In this section, we describe the problems and limitations observed with the design 

of our experiment methodology and the analysis of results. We provide no structured 

or ordered approach to the description of issues encountered. Instead, we attempt to list 

such issues as they were encountered during the process of analyzing results from the 

experiment. 

Perhaps the most relevant issue regarding the results collected in the scope of 

this experiment relates to the low amount of samples collected, which originates from 

an insufficiently sized user base. As such, many of the results presented a high standard 

deviation, which affected the credibility and significance of our analysis. 

Due to limitations on the environment and scope of work addressed by the authors, 

we were also unable to perform a consolidated analysis on the statistical significance of 

the results. Therefore, the results presented in the scope of this work provide indica-

tions on trends regarding the use of Dynamic Difficulty, but we were unable to reach any 

significant conclusions. 

Additionally, we further amplified the issue of low sample sizes by classifying 

users based on skill level, and in sequence dividing the sample size for each classification 

in half through experiment groups. The overt division of the user base significantly af-

fected the credibility of our analysis, where we reached a sample size as low as 3 users on 

the veteran players classification. 

We also identified a considerable amount of issues regarding adjustment thresh-

olds for each adjustment target. First, we refer to what was observed during our analysis

186 

of the results of veteran players, where the game would be balanced towards a signif-

icantly lower difficulty than the fixed difficulty presets even when players were able to 

achieve an acceptable performance. 

Therefore, the Fixed Difficulty preset for Veteran players presented unbalanced 

thresholds, where veteran players would be unable to maintain a sufficient performance 

for the difficulty presets even on a second playthrough, where they would be better accus-

tomed to game mechanics and enemy patterns. 

To properly assess the validity of the balancing of adjustments and their respective 

thresholds, our methodology should have included a pre-experiment game balancing step, 

where adjustments would be tested in isolation and in groups. With such approach, we 

would also be able to provide a more granular analysis of the impact of each adjustments 

in player performance, level of challenge and the learning curve, and possibly assess the 

relevance of the performance adjustments in validating our hypotheses. 

Another issue with adjustments was identified regarding the latency between ad-

justments being performed after a player repeatedly failed at a specific difficulty spike, 

which was noticed in the later levels of the game (4 and 5). In such occasions, a player 

repeatedly failing at a specific level would not cause the difficulty to be changed between 

each attempt. 

After being able to complete the level, the player would have achieved a signif-

icant improvement on their skill, but the metric regarding player deaths would surpass 

the thresholds for lowering game difficulty. This creates an issue where the player has in-

creased in their skill and understanding of the game, but the performance metrics collected 

during the process of learning would trigger a delayed and incorrect difficulty change. 

Additionally, we failed to consider the case where veteran players or beginner 

players would extrapolate the lower and higher limits of adjustment thresholds for their 

relative fixed difficulty presets. It is evident that veteran players would only be able to 

achieve the same or lower difficulty than their fixed difficulty preset, as even if their 

performance surpassed the originally designed targets, the game presented no higher ad-

justment targets than the fixed presets. 

Conversely, beginner players which performed below the designer-intended ad-

justment targets for a specific metric would not be presented to a lower difficulty adjust-

ment related to such metric. Therefore, the lack of flexibility in the upper and lower 

presets for beginner and veteran players could have affected our evaluation of the level of 

challenge and efficiency of the learning curve achieved.

187 

We also failed to consider a significant difference in skill between veteran players, 

since we defined a lower boundary constraint for players to be classified as veterans, but 

no inner group classification methodologies for players which were much more experi-

enced with Souls-like games. The overlooking of such issue, along with a low sample 

amount, could contribute to the previously observed high standard deviations, and conse-

quently invalidate our analysis of the performance group. 

Regarding issues with the balancing, layout and presentation of game levels in our 

application, we identified several difficulty spikes for different user classifications. For 

instance, beginners and intermediate players were mostly affected by the introduction of 

the Armored Knight enemy in the third level, whereas veteran players had a decrease in 

efficiency and significant increase in completion times and number of deaths in the fifth 

level. Therefore, we identified several issues with consistency in the difficulty involving 

level design aspects in our application, when considering the necessities of different user 

groups. 

We also identified an underlying issue with the manner at which we evaluate the 

increase in player skill throughout a second playthrough in our application. In a typ-

ical environment, players which complete a game at a specific fixed difficulty would 

have an improved understanding of game mechanics and challenges af the end of their 

playthrough. 

In a second attempt at finishing the game, they would generally consider their own 

skill improvement and attempt to finish the game at a higher difficulty. Our experiment 

does not take into account such possibility, and instead compares the performance of 

players in a DDA system on a second playthrough to the performance of players on a 

fixed difficulty relative to their initial skill level classification. 

We argue that such skill classification would be outdated information after the 

completion of a first playthrough. Therefore, the performance of players on fixed diffi-

culty during a second playthrough would be much better evaluated by increasing the level 

of fixed difficulty presets after the first playthrough. For instance, beginner players would 

play at the Intermediate difficulty preset on a second playthrough. 

We also identified issues with the formulation of some of the propositions in the 

Player Perception Survey, where some of the questions regarding issues with executing 

basic player mechanics, such as attacking, blocking or dodging were ambiguous. Such 

questions could be interpreted as being related to the perception of difficulty, instead of 

usability issues. Therefore, we were unable to compile any significative conclusions on

188 

some of the propositions, due to the inherent ambiguity of the devised questions. 

We also identified issues regarding a short duration of the experiment, where a full 

playthrough of the application could be performed in an average time of fifteen minutes. 

The short duration could further contribute to the low sample amount when considering 

performance metrics and specific difficulty spikes, where some of the levels would signif-

icantly affect the measurement of posterior levels. The short duration of the experiment 

exposed a limitation in the development of our application, where the authors were unable 

to develop more content for application due to resources and time constraints.

189 

Table 5.5: Summarized observations on Performance Metrics for Beginner Players. 

Metric Observations 

Adjustment Targets Average 

 Significant increase in average target level for 2nd part in group A. Could show increased challenge level for 2nd playthrough; 

 Steady increase towards intermediate fixed difficulty in 1st part for group B (Dy-namic Difficulty). Shows satisfactory learning curve; 

 Low standard deviation in all observed results. 

Attack Avoidance Efficiency 

 Globally higher efficiency in 2nd playthrough. Players seem to be more defen-sively efficient in a 2nd playthrough. 

 Slightly higher efficiency in 1st playthrough for players in Group B (Dynamic). Could show signs of a more efficient learning curve. 

 Slightly less efficiency in the 2nd playthrough for Group A (Dynamic). Could be explained by a higher average difficulty on dynamic difficulty. 

 Significant standard deviation in some of the samples. 

Attack Window 

Efficiency 

 Globally higher efficiency in 2nd playthrough. Players seems to be more offen-sively efficient in a 2nd playthrough. 

 Globally lower efficiency in level 3. Could be caused by the new enemy type introduced. 

 Slightly higher efficiency in 1st playthrough for Group B (Dynamic). Could rep-resent a more efficient learning curve. 

 Significantly lesser efficiency in 2nd playthrough for Group A (Dynamic). Could be caused by a more significative level of challenge. 

 Significant standard deviation in some of the samples. 

Completion Time 

 Steady global increase of completion time after each level. 

 Spike in global completion time (higher) in last level. 

 Slightly lower global completion times in 2nd playthrough. 

 Slightly lower Group B (Dynamic) completion times in 1st playthrough. Signifi-cant decrease in 4th level. 

 Slightly higher Group A (Dynamic) completion times in 2nd playthrough. Higher level of challenge from adjustments. 

 Significant difference in completion times in 4th level between Groups A and B. 

 Low standard deviation in most samples. 

Damage Dealt per 10 seconds 

 Globally higher damage dealt in 2nd playthrough. 

 Globally lower damage dealt in 3rd level. Could be mapped to a difficulty spike. 

 Slightly higher damage dealt in 1st playthrough by Group B (Dynamic). Higher contrast in 3rd level. Could show the effects of learning curve. 

 Mixed results on damage dealt in 2nd playthrough between both groups. 

 A few isolated samples present a significant standard deviation. 

Deaths per Level 

 Global decrease in deaths in 2nd playthrough. 

 Decrease in 2nd playthrough for Group B (Fixed) is much more significant than group A. Could be an effect of a more efficient learning curve. 

 Similar number of deaths in 1st playthrough for both groups. 

 Significantly higher average of deaths in Group A (Dynamic) 2nd playthrough. Could be an effect of increased level of challenge. 

 High standard deviation in samples for later levels. Could show issues with learn-ing curve. 

Health Lost per Encounter 

 Significantly lower global damage taken in 2nd playthrough. Players are more defensively efficient. 

 Significantly lower decrease of damage taken in Group B 2nd playthrough. Could correlate with learning curve. 

 Similar amount of damage taken between groups in 1st playthrough. 

 Significantly higher amount of damage taken in Group A (Dynamic) in 2nd 

playthrough. Correlates with level of challenge. 

 High standard deviation in Group B 1st playthrough.

190 

Table 5.6: Summarized observations on Performance Metrics for Intermediate Players. 

Metric Observations 

Adjustment Targets Average 

 Significant increase in adjustment targets for Group A 2nd part. Intermediate players would be above the intermediate fixed difficulty on a 2nd Part. 

 Decrease in adjustment targets for Group B 1st Part. Fixed difficulty for Intermediate players could be unbalanced for a 1st playthrough. 

 Significantly higher adjustment targets for Group A part 2. Dynamic difficulty offers higher level of challenge for intermediates on 2nd playthrough. 

 Low standard deviation in all observed samples. 

Attack Avoidance Efficiency 

 Globally higher efficiency in 2nd Part. Higher contrast observed in 1st and 4th levels. 

 Globally lower efficiency on level 2 in both playthroughs. This could be caused by the introduction of Ranged enemies. 

 Slightly higher efficiency in Group B 1st playthrough (Dynamic). Could be caused by the lower average adjustment targets. 

 Mixed results on Part 2 for the first three levels. Significantly higher efficiency for Group B (Fixed) on later levels. Harmonizes with higher difficulty in Dynamic Part 2. 

 High standard deviation in the samples for later levels (4 and 5). 

Attack Window 

Efficiency 

 Globally higher efficiency on 2nd playthrough, with an exception on the last level. 

 Globally congruent efficiency on 2nd level for both playthroughs. Introduction of Ranged enemies could have affected the efficiency metric. 

 Similar results in both parts in Group B for levels 2 and 3. Slight increase in 2nd 

playthrough for later levels (4 and 5). 

 Better performance in Group B Part 1 (Dynamic). Could be caused by a combination of lower difficulty with a better learning curve. 

 Significantly higher efficiency in all levels (except the 2nd) for Group B on 2nd 

playthrough. Could be caused by lower average difficulty. 

 Significant standard deviation in samples for Group A Part 2 and Group B Part 1. 

Completion Time 

 Globally lower completion time for 2nd playthrough, with an exception for Group B (Dynamic). Could be caused by higher difficulty. 

 Significantly lower times on Group B Part 2 (Fixed). Difference to part 1 is higher than Group A. Could be caused by lower difficulty or better efficiency. 

 Lower completion times on Group B Part 1 (Dynamic), with an exception for last level. Last level shows a difficulty spike. 

 Lower completion times on Group B Part 2 (Fixed). Would be explained by a lower average difficulty when comparing to Group A. 

 Low standard deviation in all but a few isolated samples. 

Damage Dealt per 10 seconds 

 Generally lower amount of damage dealt in Group A Part 2 (Dynamic). Can be related to a higher difficulty level. 

 Lower amount of damage dealt in Group B Part 1 (Dynamic). Incongruent with lower difficulty. 

 Higher amount of damage dealt in Group B Part 2 (Fixed) in comparison to Group A. 

 High standard deviation was observed in a significant amount of samples. 

Deaths per Level 

 Globally lower amount of deaths on 2nd playthrough. 

 Slightly lower amount of deaths in Group B Part 1 comparing to Group A. Could be causer by lower adjustment targets. 

 Much lower deaths in Group B Part 2 (Fixed). Could be caused by lower difficulty. 

 High standard deviation in almost all observed samples. 

Health Lost per Encounter 

 Globally lower health lost on 2nd playthrough. Similar results to beginners. 

 Mixed results on health lost during 1st playthrough for between groups. Shows similar learning curve in Part 1. 

 Slightly lower amount of health lost on 2nd playthrough for Group B (Fixed). Could be caused by a lower difficulty. 

 Low standard deviation in almost all observed results.

191 

Table 5.7: Summarized observations on Performance Metrics for Veteran Players. 

Metric Observations 

Adjustment Targets Average 

 Globally lower adjustment targets in the Dynamic difficulty version for both Groups. Might show issue with balancing and target thresholds. 

 Significantly lower target for Group B Part 1 (Dynamic). Shows issue with bal-ancing base difficulty for veterans. 

 Low standard deviation in all observed samples. 

Attack Avoidance Efficiency 

 Mixed results between parts of experiment for both groups. 

 Overall lower efficiency in Group A in both parts, comparing to Group B. Could be related to individual differences in player skill. Shows issues with sampling. 

 High standard deviation in a considerable amount of samples. 

Attack Window 

Efficiency 

 Higher efficiency in 2nd part during first levels for both groups. Mixed results in later levels (4 and 5). Shows difficulty spike. 

 Slightly higher efficiency in Group B Part 1 (Dynamic), comparing to Group A. Results harmonize with adjustment targets. 

 Mixed results between groups in the 2nd part. 

 High standard deviation in a considerable amount of samples for part 2. 

Completion Time 

 Globally lower completion times in 2nd playthrough. 

 Steady increase in completion times at each level. 

 Overall lower completion times in Group B Part 1 (Dynamic) in comparison to Group A. Possibly caused by lower average difficulty. 

 Abnormally low completion times and standard deviation in some of the samples. Veteran players possibly ignored enemies. 

 Abnormally high standard deviation in last level. 

Damage Dealt per 10 seconds 

 Mixed results in damage dealt between playthroughs for both groups. Reinforces issues with balancing for Veteran players. 

 Slightly higher damage dealt in Group B 1st part (Dynamic). Harmonizes with lower difficulty. 

 Mixed results between groups for 2nd part. 

 High standard deviation in a considerable amount of samples. 

Deaths per Level 

 Globally lower amount of deaths in 2nd playthrough. 

 Zero deaths in second part for both groups. 

 High amount of deaths in last level for both groups. Possible difficulty spike. 

 Slightly lower amount of deaths in Group B Part 1 (Dynamic), which aligns with lower adjustment targets. 

 Mixed results between groups in the second playthrough. 

 High standard deviation in a considerable amount of samples. 

Health Lost per Encounter 

 Globally lower average health lost in 2nd playthrough. 

 Slightly lower amount of health lost in Group B in 1st playthrough (Dynamic). Harmonizes with lower adjustment targets. 

 Mixed results between groups in 2nd playthrough. Shows issues with balancing and fixed presets. 

 High standard deviation in some of the samples.

192 

6 CONCLUSION 

6.1 Overview and Contributions 

We started by performing a research exploration of previous work regarding DDA 

systems. First, we defined the importance of difficulty in the User Experience on games, 

explaining the impact of difficulty on the learning curve and in helping players achieve the 

State of Flow. In sequence, we motivated the use of adaptive systems to provide a more 

appropriate level of challenge to specific player profiles, with the objective of creating a 

more efficient learning curve and a better level of challenge for experienced players. 

We identified a basic adaptivity model, which defines a methodology for user 

data acquisition, metrics for evaluating player performance and preferences, adjustment 

policies and adjustment targets, which provide dynamic modifications to game difficulty 

which can better attend to the specific needs of different players. 

We identified three relevant types of Dynamic Difficulty systems in previous re-

search: Affect-based, Probability-based and Learning-based. We argued that the prob-

abilistic model would be best aligned with the games industry development process, 

which requires fast iteration times to appease the cycle of play-testing and frequent design 

changes. 

We defined an extensive set of guidelines to follow when creating adaptive sys-

tems, including the use and scope of metrics, the role of thresholds, the objective of dy-

namic adjustments, and specific restrictions on DDA systems which would satisfy devel-

opment process needs. Regarding guidelines for the capturing and evaluation of metrics 

in adaptive systems, we concluded that the selection of metrics should be bound to the 

domain of the specific game genre being developed, should have the purpose of evalu-

ating player skill or preferences, and should be efficiently captured in real time without 

significant performance implications. 

Regarding adjustment policies and targets on adaptive systems, we concluded that 

the thresholds used in the policies for adjustment targets should reflect the classification 

of the identified player models. If users are classified based on their skill level, each 

adjustment target should present values targeted at each skill level. 

We also concluded the adjustments should create challenge and variation for expe-

rienced or highly skilled players, while providing opportunities for beginners to improve 

without manipulating in-game systems to their advantage. Additionally, we concluded

193 

that changes in adjustment thresholds should be trivial to provide fast iteration times for 

designers to repeatedly test and assess the results. 

We identified several exploration opportunities on the field of adaptive systems for 

games in research, including applying adaptive algorithms to sophisticated games with 

modern game design, using DDA systems to alleviate the learning curve of inherently 

difficult games, providing an in-depth analysis and justification for the choice of games 

used to perform research on adaptive systems, and performing an analysis of the validity 

and efficiency of adjustment policies and targets. 

We proceeded by performing an analysis of our object of study, the successful and 

influential game Dark Souls, to justify the motivation of its choice, define game aesthet-

ics, design characteristics and gameplay functionality, identify its difficulty factors, and 

propose possible solutions to its issues with approachability for beginner players. 

Regarding the motivations of the choice of Dark Souls as an object of study for 

Dynamic Difficulty systems, we identified the prevalent and controversial discussions in 

media throughout the last decade around the difficulty of the game. Dark Souls employs 

the use of failure as a mechanic for players to learn how to play the game and adapt to 

its difficulty. However, such design choices caused frustration to a significant portion of 

players, with the game presenting significant issues with churn rates and a low completion 

rate. 

We also analyzed and described the aesthetics of the artistic and sound direction 

of the original game, which presents to players a Dark Fantasy setting, with undead ene-

mies, monsters and abominations, and causes in players a general feeling of unease. The 

animations of in-game entities are for the most part slow and heavy, which creates a sense 

of weight and realism in enemy attacks. With such description, we were able to follow a 

vision during the definition of in-game assets and the overall design. 

We also defined the design characteristics of the original game and general game-

play functionality, including a Third-Person camera view with Orbital and Lock-On Cam-

era modes, free directional movement for the player character with basic physics, Health, 

Stamina and Poise as the base resources for players during combat, and Attacking, Dodg-

ing, Blocking and Parrying as the basic combat mechanics the player can execute. 

We also identified the use of the Stamina resource as a balance factor for the pace 

of fights, where it defines a cost for combat actions and a time-limited constraint through 

constant stamina recovery. We identified modifications in entity states during combat 

which can leave enemies or the player vulnerable, such as Staggers, Recovery Times and

194 

Animation Locking. 

We also determined that the Artificial Intelligence of enemies in Dark Souls pre-

sented simplistic behaviors with limited actions, with most enemies following a similar 

set of rules and patterns, and variation derives from different attacks, movement and tim-

ings. The game mostly takes place in constricted environments, with enemies and traps 

being placed in strategic positions that incentivize the player to play carefully. 

We identified the difficulty factors of Dark Souls, and proposed plausible solutions 

to the issue of its approachability for beginner players. We identified that Dark Souls 

presented a lack of guidance or instructions regarding player objectives or the use of 

game mechanics, employed a level design methodology that punishes risky approaches, 

and used ambiguous enemy animations to hinder the player’s ability to recognize and 

defend against enemy attacks. 

We also identified the use of punishment mechanics through progression loss upon 

the condition of defeat, to amplify the player’s aversion to loss. The game also employ 

limited sustainment resources through the use of Estus Flasks, punishes player attack de-

cisions through Animation Locking, presents enemies with overt strength in comparison 

to the player, employs and accelerated pace of combat speed in comparison to other action 

games, and finally presents a perceptually high difficulty level due to the aesthetics, visual 

design and animations of enemies. 

We proposed several in-game adjustments that could be applied during gameplay 

sessions to mitigate the effect of difficulty factors to the approachability of beginner play-

ers. Therefore, we proposed the use of dynamic level layouts, dynamic placement of 

enemies, changes in enemy attacks and the display of visual effects which serve as indi-

cations for enemy attacks, dynamic changes to enemy behaviors, the employment of more 

frequent checkpoints, and the use of adjustable game speed in combat encounters. 

We proceeded by implementing a game based on our object of study, through 

which we would be able to convey the ideas and guidelines formulated through the ex-

ploration of previous research in DDA systems. We implemented a minimized version of 

Dark Souls, with two different approaches for defining game difficulty: a Fixed Difficulty 

version, which contains presets for all game difficulty parameters, and a Dynamic Diffi-

culty version, where we define difficulty as an N-dimensional set of difficulty parameters 

which can be adjusted separately and dynamically during a play session. 

We implemented an event tracking system, which was able to store an history 

of in-game events along with contextual information on each event, such as the actions

195 

performed by the player and game entities, and the status of the game environment. We 

calculated a multitude of metrics based on the information collected from events, which 

could be used to evaluate player performance and preferences. We defined adjustment 

policies based on such metrics, which were used to performed dynamic adjustments on 

multiple difficulty parameters for the implemented game. 

Regarding the aesthetic elements of our implementation, we referenced our previ-

ous analysis of the aesthetics of Dark Souls to assemble a Medieval Dark Fantasy game 

environment, using 3D assets of a ruined and abandoned castle to produce such a setting. 

We also used undead monsters as the 3D models for enemies in the game, and selected 

audio tracks which produced a heavy and uneasy atmosphere as accompanying sound 

effects. 

Based on the original game, we implemented two camera modes for a Third-

Person visual perspective – the Orbital and Lock-On cameras. We also implemented 

camera-based movement with basic physics, such as acceleration, turn speed, climbing 

stairs and ledges and grounded state detection. We implemented an attributes system to 

define a layer of abstraction between entities and their state, to handle changes on player 

resources and simplify the implementation of User Interface elements. 

We created a Combat System with a sophisticated Hit Detection algorithm, in-

cluding the ability to block and dodge enemy attacks. We implemented a multitude of 

Combat Effects which were able to modify character state, and created animation-based 

character states as a constraint for gameplay actions. 

We implemented a Dynamic Difficulty Adjustments system, which included com-

ponents for tracking in-game events, calculating metrics based on the information re-

trieved from captured events, definition of adjustment policies based on player metrics, 

and performing difficulty adjustments on several difficulty parameters. 

We proceeded by defining a methodology for the validation of the goals of this re-

search, including the evaluation of the use of DDA systems in the context of sophisticated 

modern games, validating if Dynamic Difficulty can be used to alleviate and create a more 

efficient learning curve for difficult video games, and validating if Dynamic Difficulty can 

provide a better level of challenge for players which are experienced at a game. 

We defined a set of user selection criteria based on player profiles and hardware 

requirements to participate in the experiment. We defined an user classification based 

on definitions for beginner, intermediate and veteran players to evaluate the impact of 

Dynamic Difficulty Systems on multiple player skill levels.

196 

We performed a division of the user base in different experiment groups, in order 

to test the differences between Fixed and Dynamic Difficulty in different playthroughs. 

We selected several performance metrics to evaluate the learning curve and challenge level 

experienced by players based on their performance. We employed a Player Perception 

Survey to correlate performance metrics and the presented learning curve and level of 

challenge to player perceptions. 

Regarding the results of this work, we performed an analysis of the performance 

and perception of players, evaluating a subset of the results in aggregate, and separating 

results based on user classifications and experiment groups. While we were unable to 

achieve definitive conclusions regarding the achievement of some of the originally defined 

objectives, we were able to observe strong indications towards positive results. 

Regarding the perceptions of all players on the application, which were used to 

validate the application as a sufficient example of a sophisticated modern game, we con-

cluded that the aesthetics of the game made players feel generally interested and motivated 

to play the game, that there were possible issues with the learning curve of specific game 

mechanics, and that there were no significant issues with basic game controls. 

Additionally, no relevant issues were found regarding level design in the context 

of communicating player objectives. We conclude that our application served the purpose 

of representing a minimized version of Dark Souls, and of applying the DDA systems 

methodology to an example of modern and complex game design. 

Regarding the general results observed for beginner players, we observed slight 

indications that Dynamic Difficulty provided a more efficient learning curve for beginner 

players, and strong indications that Dynamic Difficulty provided a better challenge level 

for beginner players during a second playthrough. 

In the context of intermediate players, we similar trends to beginner players re-

garding their improvements in combat efficiency, where players which experienced Dy-

namic Difficulty in a first playthrough presented higher improvements, but players which 

played on DDA systems in a second playthrough experienced a higher level of challenge. 

Regarding the results for veteran players, we observed mixed results on the per-

formance metrics for veteran players, where during the formulation of the experiment 

methodology we did not consider individual player skill differences at an expert level of 

mastery, which could have contributed to the high standard deviation of samples. Addi-

tionally, we noticed issues with the fixed difficulty presets for veteran players, and their 

respective adjustment thresholds on the Dynamic Difficulty version. Therefore, we syn-

197 

thesized no conclusions regarding the results of veteran players. 

Overall, we validated our implementation as a sufficient representation of sophis-

ticated and modern game design with an inherently steep difficulty curve. We noticed 

slight positive indications regarding our validation of Dynamic Difficulty as a provider 

of a more efficient learning curve in comparison to Fixed Difficulty. We also noticed 

strong indications of Dynamic Difficulty being a provider of a more appropriate level of 

challenge during a second or subsequent playthrough of a game, in comparison to Fixed 

Difficulty. 

However, because of issues with the formulation of the experiment methodology, 

with the low amount of samples which originated from a limited user base, and issues with 

the balancing of difficulty presets for intermediate and veteran players, we were unable to 

synthesize definitive conclusions that would validate our hypotheses. 

6.2 Limitations and Problems 

Regarding the limitations and problems encountered during the scope of the de-

velopment of this work, the most relevant issues were encountered during the formulation 

and execution of our experiment. We performed the validation of our goals under a limited 

user base, with a total of 23 users participating in the experiment. 

We amplified such issue by classifying the total user base in three categories, and 

further diving such categories in two user groups each. The overt subdivision of our 

user base resulted in metrics being represented by a low amount of samples, with high 

standard deviation and no statistical significance. Therefore, we were unable to present 

any confidence during the analysis of our results. 

Additionally, we performed a limited comparison of the impact of Dynamic Dif-

ficulty in contrast to Fixed Difficulty. We attempted to evaluate the first and second 

playthroughs by directly comparing the Dynamic and Fixed Difficulty versions, but did 

not consider the possible impact of persisting with any of the approaches throughout a 

second playthrough. Therefore, a more consolidated analysis would have included user 

groups which played the Fixed and Dynamic Difficulty versions during both playthroughs. 

Regarding the analysis of the impact of adjustments, we performed our analysis 

with an overt amount of simultaneous adjustments and metrics, which were performed 

with the objective of performing a cross-referenced evaluation of results as to reinforce 

the validation of our hypotheses.

198 

However, we failed to evaluate the impact of each adjustment and the efficiency 

of measuring each metric separately. As such, the adjustments and metrics should have 

been validated in isolation and in separate groups. Such type of analysis would create a 

better sense of certainty in the analysis of results. 

We also identified issues with the formulation of our Player Perception Survey, 

where some of the propositions could have been interpreted by users as being related 

to a different subject as their original intent. As such, we were unable to synthesize 

conclusions regarding a subset of the propositions on player perception. Additionally, 

we did not employ a perception survey between playthroughs, which could have exposed 

issues with a specific version of the game for an user classification. 

Regarding limitations with our implementation, the calculation and execution of 

adjustments was limited to occur between levels because of performance restrictions. As 

a result, a delay occurred between the player successfully improving to overcome a chal-

lenge and the game being able to adjust difficulty based on such improvement. 

If the player was constantly during a specific level which introduced a difficulty 

spike, the game would incorrectly assess a lower difficulty level after the player pro-

gressed to the next level. Such issue caused a desynchronization between player skill and 

the level of challenge presented by the game, and negatively affects the significance of 

our performance evaluation. 

We also identified a limitation with the possible adjustment targets for beginner 

and veteran players. Veteran players which performed significantly above the efficiency 

for a specific adjustment target would not be able to experience an adequate difficulty 

level for a specific parameter. 

Therefore, it would only be possible for Veteran players to achieve a lower aver-

age difficulty in the DDA version of the application, in comparison to the Fixed Difficulty 

version. Similarly, beginner players which performed under their skill level classification 

would not be able to experience an easier version of the game. We argue that our imple-

mentation should have included two additional adjustment target levels, which would be 

targeted below and above the lower and upper limits of the skill levels in the scope of our 

classification. 

Additionally, we identified that the the adjustment targets for veteran players in-

dicated unbalanced thresholds, where even if the performance of players indicated high 

combat efficiency and satisfactory completion times, players would still experience a con-

siderably lower average difficulty than the Fixed presets for veteran players.

199 

We also identified that the experiment presented an overtly short duration, with 

an average of 15 minutes for a full playthrough by intermediate players. Such a short 

experiment duration could have further degraded the significance of performance metrics 

in our application, where a low amount of samples for each player would not properly 

represent the challenges faced by players in commercial solutions. 

Regarding limitations with our exploration of previous research regarding DDA 

systems, we performed a limited analysis of previous work, which only identified three 

types of Adaptive Systems commonly used in research. We argue that a more specific 

and granular categorization with a wider scope could have exposed more improvement 

opportunities, which could have been explored in the scope of this work. 

6.3 Future Work 

Regarding future subjects that could be explored in research of Adaptive Sys-

tems for video games, one of the first examples would be the evaluation of the impact 

of N-dimensional difficulty in isolation, without the use of performance-based Dynamic 

Adjustments. Such approach can already be seen in recent commercial titles, but we 

identified a lack of research regarding the positive and negative aspects of such approach. 

We also argue that an analysis of adjustment targets at an individual level should 

be performed, where each difficulty adjustment for a specific game should be evaluated 

and properly validated. A significant amount of previous research, including this work, 

assessed the effectiveness of the use of DDA systems as a whole, but failed to address if 

the selected adjustment policies and metrics properly represented player performance and 

the difficulty factors of the target game. 

We also argue that the experiment performed in the scope of this work should 

be performed with significantly higher sample sizes for each classification and group. 

Additionally, the increase of the user base should also be combined with the addition of 

two user groups, each of which persist in a specific version of the game throughout both 

playthroughs (Fixed or Dynamic). Such improvements would create a much more reliable 

representation of the comparisons required to validate the goals of this study.

200 

REFERENCES 

BICALHO, L. F.; BAFFA, A.; FEIJó, B. A game analytics model to identify player profiles in singleplayer games. In: 2019 18th Brazilian Symposium on Computer Games and Digital Entertainment (SBGames). [S.l.: s.n.], 2019. p. 11–20. 

BOYD, R. Deep Dungeon: Exploring the Design of Dark Souls. 2012. 3 p. Available on: <https://www.gamasutra.com/view/feature/178262/deep_dungeon_exploring_the_ design_.php>. Online; Apr. 8, 2021. 

BYCER, J. Examining subjective difficulty: How plumbers can fight demons. 2012. <https://www.gamasutra.com/view/feature/6583/examining_subjective_difficulty_ .php>. Online. Accessed: Apr. 8, 2021. 

BYCER, J. What You’re Getting Wrong About Soulslikes. SUPERJUMP, 2020. Online. Accessed: Aug. 10, 2021. Available from Internet: <https://superjumpmagazine. com/what-youre-getting-wrong-about-soulslikes-e80cbb1c28bd>. 

BYCER, J. Can Approachability "Fix" Dark Souls? SUPERJUMP, 2021. Online. Accessed: Oct. 5, 2021. Available from Internet: <https://superjumpmagazine.com/ can-approachability-fix-dark-souls-29268917fc3>. 

BYCER, J. What accessibility means in game design. SUPERJUMP, 2021. Online. Accessed: Sep. 16, 2021. Available from Internet: <https://superjumpmagazine.com/ what-accessibility-means-in-game-design-5870ff8a5be6>. 

CAPCOM. Description of the Game Rank System in Resident Evil 4. [S.l.]: Kapukon, 2006. 23–26 p. ISBN 9784757726383. 

CHARLES, D.; BLACK, M. Dynamic player modelling: A framework for player-centred digital games. Proceedings of the International Conference on Computer Games: Artificial Intelligence, Design and Education, 01 2004. 

CHARLES, D. et al. Player-centred game design: Player modelling and adaptive digital games. Proceedings of DiGRA 2005 Conference: Changing Views - Worlds in Play, 01 2005. 

CHEN, J. Flow in games (and everything else). Communications of the ACM, ACM, v. 50, n. 4, p. 31–34, 2007. 

COUTURE-PICHE, G. Rubber banding in Super Mario Kart. 2016. <https: //guiguilegui.wordpress.com/2016/11/16/rubber-banding-in-super-mario-kart/>. Online. Accessed: Apr. 8, 2021. 

COX, A. et al. Not Doing But Thinking: The Role of Challenge in the Gaming Experience. In: ACM. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems. [S.l.], 2012. p. 79–88. 

CSIKSZENTMIHALYI, M. Flow: The Psychology of Optimal Experience. New York, NY: Harper Perennial, 1991. Paperback. ISBN 9780060920432. 

FLOYD, D.; PORTNOW, J. Design club - Super Mario Bros: Level 1-1 - how super Mario mastered level design. [S.l.]: Youtube, 2014.

201 

FORLIZZI, J.; BATTARBEE, K. Understanding experience in interactive systems. In: Proceedings of the 5th Conference on Designing Interactive Systems: Processes, Practices, Methods, and Techniques. New York, NY, USA: ACM, 2004. (DIS ’04), p. 261–268. ISBN 1-58113-787-7. Available from Internet: <http://doi.acm.org/10.1145/1013115.1013152>. 

GRIESEMER, J. Creating the Illusion of Intelligence: Where AI and Level Design Overlap in Halo’s AI. 2002. Conference speech in audio file. Online; Accessed Apr. 8, 2021. Available from Internet: <https://www.gdcvault.com/play/1022590/ Creating-the-Illusion-of-Intelligence>. 

HAIGH-HUTCHINSON, M. Real Time Cameras: A Guide for Game Designers and Developers. San Francisco, CA, USA: Morgan Kaufmann Elsevier Science distributor, 2009. ISBN 9780080918518, 9780123116345. 

HASSENZAHL, M.; TRACTINSKY, N. User experience - a research agenda. Behaviour & Information Technology, Taylor & Francis, v. 25, n. 2, p. 91–97, 2006. Available from Internet: <https://doi.org/10.1080/01449290500330331>. 

HOULETTE, R. AI Game Programming Wisdom 2. 1. ed. Hingham, MA: Charles River Media, 2004. 557-566 p. 

HUNICKE, R. The case for dynamic difficulty adjustment in games. In: Proceedings of the 2005 ACM SIGCHI International Conference on Advances in computer entertainment technology - ACE ’05. New York, New York, USA: ACM Press, 2005. 

HUNICKE, R. The case for dynamic difficulty adjustment in games. In: Proceedings of the 2005 ACM SIGCHI International Conference on Advances in computer entertainment technology - ACE ’05. New York, New York, USA: ACM Press, 2005. 

ISO/TC 159/SC 4 COMMITTEE. ISO, Ergonomic requirements for office work with visual display terminals (VDTs) — Part 11: Guidance on usability. 1998. 

JUUL, J. Fear of Failing? The Many Meanings of Difficulty in Video Games. The Video Game Theory Reader, v. 2, n. 237-252, 2009. 

KREMERS, R. Level design: Concept, Theory, and Practice. Wellesley, MA: A.K. Peters, 2009. ISBN 9781568813387. 

LINEHAN, C. et al. Learning curves: Analysing pace and challenge in four successful puzzle games. In: Proceedings of the first ACM SIGCHI annual symposium on Computer-human interaction in play. New York, NY, USA: ACM, 2014. 

LIU, C. et al. Dynamic difficulty adjustment in computer games through real-time anxiety-based affective feedback. Int. J. Hum. Comput. Interact., v. 25, n. 6, p. 506–529, 2009. 

MACDONALD, K. Tough Love: On Dark Souls’ Difficulty. Eurogamer.net, 2019. Online. Accessed: Aug. 21, 2021. Available from Internet: <https://www.eurogamer.net/ articles/2019-12-07-tough-love-on-dark-souls-difficulty>. 

MECHERI, D.; ROMIEU, S. Dark Souls: Beyond the Grave - Volume 1. [S.l.]: Third Editions, 2017. ISBN 9791094723579, 9791094723579.

202 

MISSURA, O. Dynamic Difficulty Adjustment. Thesis (PhD), 10 2015. 

NEPTUNUSEQUESTER. How challenging is Dark Souls and what makes it difficult? 2017. YouTube video. Online; Accessed Apr. 26, 2021. Available from Internet: <https://www.youtube.com/watch?v=TwtxE-VbM4s>. 

ROGERS, S. Level Up! The Guide to Great Video Game Design. 2nd. ed. [S.l.]: Wiley Publishing, 2014. ISBN 1118877160, 9781118877166. 

SANCHEZ, J. G.; ZEA, N. P.; VELA, F. L. From usability to playability: Introduction to player-centred video game development process. In: . [S.l.: s.n.], 2009. v. 5619, p. 65–74. 

TAN, C. H.; TAN, K. C.; TAY, A. Dynamic game difficulty scaling using adaptive behavior-based AI. IEEE Trans. Comput. Intell. AI Games, v. 3, n. 4, p. 289–301, 2011. 

THOMPSON, T. Prepare to Die by Simple AI - Dark Souls and Difficulty. 2017. YouTube video. Online; Accessed Apr. 8, 2021. Available from Internet: <https://www.youtube.com/watch?&v=s2S8o3fmJyc>. 

WEIDMAN, G. The Evolution of Dark Souls Level Design. 2016. YouTube video. Online; Accessed Apr. 8, 2021. Available from Internet: <https://www.youtube.com/ watch?v=ZZ9_RJ2EPo0>. 

ZOHAIB, M. Dynamic difficulty adjustment (DDA) in computer games: A review. Adv. hum.-comput. interact., v. 2018, p. 1–12, 2018.

203 

APPENDIX A — RAW COLLECTED EVENT DATA EXCERPT

204 

APPENDIX B — PLAYER CLASSIFICATION SURVEY

205

206

207 

APPENDIX C — PLAYER EXPERIMENT REQUIREMENTS SURVEY

208

209

210 

APPENDIX D — PLAYER PERCEPTION SURVEY

211

212

213