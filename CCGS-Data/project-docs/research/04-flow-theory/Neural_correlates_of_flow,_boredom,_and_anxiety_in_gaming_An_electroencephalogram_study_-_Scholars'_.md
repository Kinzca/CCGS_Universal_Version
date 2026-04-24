# Neural correlates of flow, boredom, and anxiety in gaming: An electroencephalogram study - Scholars' Mine

### Scholars' Mine 

Masters Theses Student Theses and Dissertations 

Summer 2018 

### Neural correlates of flow, boredom, and anxiety in gaming: An 

### electroencephalogram study 

Tejaswini Yelamanchili 

Follow this and additional works at: https://scholarsmine.mst.edu/masters_theses 

 Part of the Technology and Innovation Commons 

Department: Business and Information Technology 

If you have a disability and have trouble accessing this content, please submit an accessibility 

request form. 

Recommended Citation Yelamanchili, Tejaswini, "Neural correlates of flow, boredom, and anxiety in gaming: An electroencephalogram study" (2018). Masters Theses. 7812. https://scholarsmine.mst.edu/masters_theses/7812 

This thesis is brought to you by Scholars' Mine, a service of the Missouri S&T Library and Learning Resources. This work is protected by U. S. Copyright Law. Unauthorized use including reproduction for redistribution requires the permission of the copyright holder. For more information, please contact scholarsmine@mst.edu. 

NEURAL CORRELATES OF FLOW, BOREDOM, AND ANXIETY IN GAMING: AN 

ELECTROENCEPHALOGRAM STUDY 

by 

TEJASWINI YELAMANCHILI 

A THESIS 

Presented to the Faculty of the Graduate School of the  

MISSOURI UNIVERSITY OF SCIENCE AND TECHNOLOGY 

In Partial Fulfillment of the Requirements for the Degree 

MASTER OF SCIENCE IN INFORMATION SCIENCE & TECHNOLOGY 

2018 

Approved by 

Dr. Fiona Fui-Hoon Nah, Advisor 

Dr. Keng Siau 

Dr. Richard Hall 

iii 

ABSTRACT 

Games are engaging and captivating from a human-computer interaction (HCI) 

perspective as they can facilitate a highly immersive experience. This research examines 

the neural correlates of flow, boredom, and anxiety during video gaming. A within-

subject experimental study (N = 44) was carried out with the use of 

electroencephalogram (EEG) to assess the brain activity associated with three states of 

user experience – flow, boredom, and anxiety – in a controlled gaming environment. A 

video game, Tetris, was used to induce flow, boredom, and anxiety. A 64 channel EEG 

headset was used to track changes in activation patterns in the frontal, temporal, parietal, 

and occipital lobes of the players’ brains during the experiment. EEG signals were pre-

processed and Fast Fourier Transformation values were extracted and analyzed. The 

results suggest that the EEG potential in the left frontal lobe is lower in the flow state 

than in the resting and boredom states. The occipital alpha is lower in the flow state than 

in the resting state. Similarly, the EEG theta in the left parietal lobe is lower during the 

flow state than the resting state. However, the EEG theta in the frontal-temporal region of 

the brain is higher in the flow state than in the anxiety state. The flow state is associated 

with low cognitive load, presence of attention levels, and loss of self-consciousness when 

compared to resting and boredom states. 

Keywords: Electroencephalogram, Fast Fourier Transformation, Flow, Frontal, Parietal, 

Occipital, Frontal-Temporal, Human-Computer Interaction, Mid-Beta, Theta, Alpha, 

Neural Correlates 

iv 

ACKNOWLEDGMENTS 

I would like to take this opportunity to thank my thesis advisor, Dr. Fiona Fui-

Hoon Nah, from the bottom of my heart for her constant guidance and continuous support 

throughout the process of this research. She has been a true inspiration to me – a 

conversation with her always reminded me of the fact that there is a lot to learn and 

achieve in my life and has forever motivated me to strive harder for excellence. Her 

energy and enthusiasm have had a positive influence on my personality and have made 

me a better person both professionally and personally. Working with Dr. Nah has always 

been a pleasure; I have the freedom to express my thoughts and ideas; also, the 

constructive discussions and the systematic approach have brought the best out of me. I 

was fortunate enough to get all those wonderful opportunities, which include presenting 

my research at the 2017 MWAIS conference, attending the prestigious 2017 CHI 

conference, and having my work presented at the 2017 HCI international conference. I 

have no doubt in my mind in saying that Dr. Nah has been the major reason for my 

success at Missouri S&T and I will miss her and Missouri S&T for sure after my 

graduation. 

I would also like to thank my thesis committee members, Dr. Keng Siau and Dr. 

Richard Hall, for taking time off their hectic schedule to attend my thesis defense. 

I acknowledge my fellow research student, Chandana Mallapragada, for assisting 

me in conducting the experiment. LITE lab manager, Samuel Smith, has been very 

supportive as well; the training program he conducted bettered my understanding of 

nuances of the LITE lab experiments.  

v 

TABLE OF CONTENTS 

Page 

ABSTRACT ....................................................................................................................... iii 

ACKNOWLEDGMENTS ................................................................................................. iv 

LIST OF ILLUSTRATIONS ........................................................................................... viii 

LIST OF TABLES .............................................................................................................. x 

SECTION 

1. INTRODUCTION ...................................................................................................... 1 

2. LITERATURE REVIEW ........................................................................................... 5 

2.1. FLOW STATE AS OPTIMAL EXPERIENCE ................................................. 5 

2.2. DEFINITION AND CORRELATES OF BOREDOM STATE ....................... 15 

2.3. STATE OF ANXIETY AND COGNITIVE PERFORMANCE ...................... 18 

2.4. BRAIN COMPUTER INTERFACE - EEG FOR NEURO-IS ......................... 20 

2.5. EEG FOR HCI AND GAMES ......................................................................... 23 

2.6. NEURAL CORRELATES OF USER EXPERIENCE STATES ..................... 26 

2.6.1. Neural Correlates of Flow-Related User Experience ............................. 26 

2.6.2. Neural Correlates of Boredom-Related User Experience ...................... 31 

2.6.3. Neural Correlates of Anxiety-Related User Experience ........................ 33 

3. THEORETICAL FOUNDATION AND HYPOTHESIS DEVELOPMENT .......... 38 

3.1. THEORETICAL FOUNDATION .................................................................... 38 

3.1.1. Frontal Lobe ........................................................................................... 40 

3.1.2. Parietal Lobe ........................................................................................... 41 

3.1.3. Temporal Lobe ....................................................................................... 42 

vi 

3.2. HYPOTHESIS DEVELOPMENT.................................................................... 43 

3.2.1. Flow vs Resting: EEG Theta over Frontal Lobe .................................... 43 

3.2.2. Flow vs Resting: EEG Theta over Parietal Lobe ................................... 44 

3.2.3. Flow vs Boredom: EEG Theta over Frontal Lobe ................................. 45 

3.2.4. Flow vs Anxiety: EEG Theta over Frontal-Temporal Network ............. 46 

3.2.5. Flow vs Resting: EEG Alpha over Frontal Lobe ................................... 46 

3.2.6. Flow vs Boredom: EEG Alpha over Frontal Lobe ................................. 47 

3.2.7. Flow vs Resting: EEG Mid-Beta over Frontal Lobe .............................. 48 

3.2.8. Flow vs Boredom: EEG Mid-Beta over Frontal Lobe ........................... 49 

3.2.9. Flow vs Resting: EEG Alpha over Occipital Lobe ................................ 50 

4. RESEARCH METHODOLOGY ............................................................................. 53 

4.1. EXPERIMENTAL DESIGN ............................................................................ 53 

4.2. RESEARCH PROCEDURE ............................................................................. 54 

4.3. MEASUREMENT ............................................................................................ 56 

4.4. PILOT TESTS .................................................................................................. 58 

5. DATA ANALYSIS AND RESULTS ...................................................................... 63 

5.1. DATA PROCESSING STEPS ......................................................................... 64 

5.2. DATA ANALYSIS STEPS .............................................................................. 65 

5.3. RESULTS ......................................................................................................... 74 

6. DISCUSSIONS OF RESULTS ................................................................................ 80 

7. LIMITATIONS AND FUTURE RESEARCH ........................................................ 84 

8. THEORETICAL AND PRACTICAL IMPLICATIONS ........................................ 86 

8.1. THEORETICAL IMPLICATIONS .................................................................. 86 

vii 

8.2. PRACTICAL IMPLICATIONS ....................................................................... 87 

9. CONCLUSION ........................................................................................................ 88 

APPENDIX ....................................................................................................................... 89 

BIBLIOGRAPHY ............................................................................................................. 90 

VITA  .............................................................................................................................. 112 

viii 

LIST OF ILLUSTRATIONS 

Figure               Page 

1.1. Experience Fluctuation Model Related to Challenges and Abilities ........................... 3 

2.1. The Challenge/Skill Balance Model ............................................................................ 8 

3.1. Effort vs. Demands in Effective Action in the Flow State ........................................ 39 

3.2. Functions of Four Lobes of the Human Brain ........................................................... 42 

4.1. Tetris Game at Different Levels to Evoke User Experience States ........................... 56 

4.2. Retrospective Process Tracing to Extract a Best 30-Second Segment ...................... 57 

4.3. A Subject Wearing 64-Channel EEG Device During the Experiment ...................... 58 

4.4. EEG Headset 10/20 Positioning System .................................................................... 60 

5.1. Calculating Sample Size Using G*Power Statistical Power Analysis ....................... 63 

5.2. Changing Sampling Rate - Downsampling................................................................ 65 

5.3. Optimizing Channel Selection ................................................................................... 66 

5.4. Raw Data Inspection: Inspection Mode ..................................................................... 67 

5.5. Raw Data Inspection: Maximum Voltage Criteria_1 ................................................ 68 

5.6. Raw Data Inspection: Minimum Voltage Criteria_2 ................................................. 68 

5.7. EEG Signal After Raw Data Inspection ................................................................... 68 

5.8. Ocular Correction ICA: Mode Selection ................................................................... 70 

5.9. Ocular Correction ICA: Reference Channel Selection .............................................. 70 

5.10. Ocular Correction ICA: Identifying and Accepting Eye-Blinks ............................ 70 

5.11. Applying Infinite Impulse Response Filters ........................................................... 71 

ix 

5.12. EEG Signal Segmentation: Manual Division ......................................................... 72 

5.13. EEG Signal Segmentation: Time Frames of User’s States .................................... 73 

5.14. Exporting FFT Values for Theta Spectral Band ...................................................... 74 

x 

LIST OF TABLES 

Table               Page 

2.1. Components of the Flow State ..................................................................................... 6 

2.2. Components of Flow in the HCI Context .................................................................... 9 

2.3. Summary of Research on Neural Correlates of the Flow State ................................. 27 

2.4. Research on Neural Correlates of the Boredom State ............................................... 32 

2.5. Research on Neural Correlates of the Anxiety State ................................................. 34 

3.1. Functions of the Lobes of the Human Brain .............................................................. 40 

3.2. Study Hypotheses....................................................................................................... 52 

5.1. Results of Paired t-tests for Neural Correlates ........................................................... 75 

5.2. Secondary Analysis Results of Paired t-test for Neural Correlates ........................... 77 

1. INTRODUCTION 

Computer games, being interactive in nature, have been actively adopted and 

enjoyed by people irrespective of their age group and background. From the Human-

Computer Interaction (HCI) perspective, games are captivating and engaging as they 

form an ideal ground for interactivity and communication (Hartmann & Klimmt, 2006). 

There has been a growing interest in HCI to understand user states of experience and the 

design of applications with dynamic user experience (UX) as its core (McCarthy & 

Wright, 2004; Jacko, 2012). Video games, with their ability to draw people in, can 

generate different user experiences while gaming. In a gaming context, cognitive and 

emotional states generated by dynamic gaming conditions can lead players to be happy, 

cognitively efficient, intrinsically motivated, fully focused, and in control of the total 

gaming environment (Cowley et al., 2008; Moneta & Csikszentmihalyi, 1999).  

Games with incremental difficulty levels and an immersive nature provide the 

opportunity to decide, take actions, and influence the gameplay. According to the flow 

and emotion theories, if the skills of a person meet the challenge of a task, then strong 

involvement in a task can be observed (Cowie et al., 2001). The challenge level in the 

gameplay is related to sensorimotor abilities and cognitive challenges (Ermi & Mäyrä, 

2005). Csikszentmihalyi (1975, 1990, 1997) identified three main states of user 

experience based on challenge and skill: boredom, flow, and anxiety. Boredom is a state 

when the challenge is much lower than skill. A state of flow or optimal experience 

emerges when the difficulty of a task at hand and the skills of a player are balanced 

(Jackson, 1992; Millan et al., 2004; Moneta & Csikszentmihalyi, 1999; Okada, 1993).  

2 

Anxiety occurs when the challenge is much greater than the skill (Moneta & 

Csikszentmihalyi, 1999).  

As illustrated in Figure 1.1, a player can be engaged in gaming, and potentially 

experience various states of user experiences such as boredom, apathy, absorption, flow, 

frustration, and anxiety, based on the challenge of the game and the player’s ability 

(Massimini & Massimo, 1988). Sometimes, people find games so deeply captivating that 

time flies during gaming and they do not even notice their surroundings (Agarwal & 

Karahanna, 2000). During that period of engagement and absorption, most or all of their 

attention is on the game. Such a state has been called “in the game” (Jennett et al., 2008) 

or “in the zone” (Marr, 2001). Assessing such user states of experience (i.e., those 

presented in Figure 1.1) is important because it provides designers, developers, and 

usability specialists with opportunities to improve the user experience. Such assessments 

have been widely used in the field of HCI, an evolving research field that studies user 

experience with a product, system, or an application (Tondello, 2016). More information 

on assessing various user states of experience based on the challenge and abilities has 

been presented in Figure 1.1 will be discussed in Section 2 which covers the literature 

review. The most common and traditional approaches to assess user experience are self-

reported measures (e.g., questionnaires and interviews) that are typically retrospective in 

nature and are subjected to biases, such as social desirability and recall biases 

(Bhattacherjee, 2012). With advancements in technology, alternative approaches are 

available that can assess user experience in real-time. One such approach is 

electroencephalogram (EEG). Unlike traditional approaches, EEG can provide 

continuous and concurrent assessments of user experience without having to interrupt the 

3 

user. EEG can be used to capture spontaneous brain activity associated with constructs 

related to or in the context of information systems (IS), such as cognitive workload, 

emotion, and user states of experience, that can be used to develop neuro-adaptive IS 

(Müller et al., 2015). EEG technology is still relatively new and underexplored in the 

context of HCI, and more research is needed to relate EEG activities to specific states of 

user experience. This research is a step in this direction - it aims to identify EEG 

correlates for user experience: flow, boredom, and anxiety. 

Figure 1.1. Experience Fluctuation Model Related to Challenges and Abilities, adopted 

from Massimini & Massimo (1988) 

Given the need to understand the importance of optimal experience in HCI in the 

gaming context, and the potential of EEG to provide a better and more reliable way of 

assessing user experience, our research question is: 

4 

Research Question: What are the neural correlates of flow, boredom, and anxiety 

in the gaming context?  

Although EEG has been used in the medical area for decades, its applications in 

HCI are emerging and very promising (Van Erp et al., 2012). EEG can be used to assess 

the real-time experience of users and can provide continuous assessments of user states in 

HCI. It has the potential to provide more reliable and objective (i.e., less subjective) 

assessments than self-reported assessments of user experience (Berka et al., 2007).  

The rest of the paper is organized as follows: Section 2 provides a review of the 

related literature. Section 3 provides the theoretical foundation for the research 

hypotheses. Section 4 describes the research methodology, and Section 5 presents the 

data analysis procedure and the results. Section 6 discusses the results. Section 7 provides 

the limitations of the research as well as future research directions. Section 8 highlights 

the theoretical and practical implications, and Section 9 concludes the paper. 

5 

2. LITERATURE REVIEW 

In this section, the background work related to flow, boredom, and anxiety is 

reviewed. Research studies that have utilized a variety of qualitative and quantitative 

techniques to capture and understand the above-mentioned user states are reviewed as 

well. The importance of Brain-Computer Interface (BCI) and EEG research in NeuroIS 

and HCI fields is also discussed. In addition, this chapter discusses and summarizes 

previous studies’ findings related to neural and physiological correlates of the above three 

user states. 

2.1. FLOW STATE AS OPTIMAL EXPERIENCE 

Csikszentmihalyi (1990) conceptualizes the state of flow as an optimal 

experience. He also theorizes nine components for flow: balance of challenge and skill, 

clear goals, immediate feedback, perceived total control, loss of self-consciousness, 

focused concentration, time distortion, merging of action and awareness, and autotelic 

experience. These nine components of the flow state are summarized in Table 2.1. 

Flow, which is the optimal state of experience, is defined as a “holistic sensation 

that people feel when they act with total involvement” (Csikszentmihalyi, 1975, p. 36). 

Flow occurs when an individual is completely engaged and involved in a task or a 

system, giving an immersive experience of being ‘in the zone’ (Fang et al., 2013). A 

person in the flow state experiences focused attention, time distortion, intrinsic 

motivation, perceived control, merging of action and awareness, and loss of self-

consciousness (Csikszentmihalyi, 1990; Csikszentmihalyi & LeFevre 1989).  

6 

                Table 2.1. Components of the Flow State (Csikszentmihalyi, 1990) 

Dimension Description 

Balance of challenge 

and skill 

A key aspect of the state of flow is that the skill of the 

individual and the challenge of the activity need to be in balance 

with each other.  

Clear goals The goals/objectives of the task or activity must be clear and 

unambiguous.  

Immediate feedback The performance feedback on the task or activity should be 

clear, immediate, and unambiguous.  

Control The individual perceives control of his/her actions and the 

environment. 

Loss of self-

consciousness 

Because of the pre-occupied activity, the individual “loses” 

oneself and experiences a sense of separation from the world 

around him/her. 

Concentration on the 

task at hand 

The individual pays complete attention to the task or activity, 

such that all other distractions are blocked out from his/her 

awareness. 

Transformation of 

time 

Time no longer seems to pass the way it normally does. The 

individual loses track of time and the perception of time is 

distorted. 

Merging of action 

and awareness 

The individual is so involved in the activity that his/her actions 

become spontaneous or automatic responses. 

Autotelic nature The activity that consumes the individual is intrinsically 

rewarding and motivating to him/her.  

For one to get into the flow state, not only should there be a balance of challenge 

and skill, but it is also necessary to have clear goals as well as immediate and 

unambiguous feedback. A deep level of involvement in gameplay can arise when the skill 

level of a player matches the challenge level of the game, and the goals and feedback are 

clear (Csikszentmihalyi 1990; Lee et al., 2015; Nah et al., 2011). The flow state is 

characterized by total control over the task, loss of consciousness of oneself and the 

7 

physical environment, focused attention and concentration on the task at hand, distortion 

or transformation of time, merging actions with awareness (i.e., actions become 

automatic and effortless), and autotelic (i.e., intrinsically rewarding) experience. Thus, 

balance of challenge and skill, clear goals, and immediate feedback are regarded as 

necessary conditions for flow, and the remaining components describe the flow 

experience. 

According to the flow theory, the relationship between skill and challenge lays the 

foundation for the psychological state of flow (Csikszentmihalyi, 1990, Guo et al., 2016; 

Nah et al., 2010). Challenge is considered as an opportunity to perform an action, and 

skill is the capability to perform that action. When the goals are clear, and the feedback is 

immediate and unambiguous, the congruence between challenge and skill can give rise to 

the necessary conditions for the flow state. As presented in Figure 2.1, the flow channel 

can be explained as a function on a plane with skills and challenges as axes 

(Csikszentmihalyi, 1975) and is considered as the challenge/skill balance model. An 

increase in the user’s skill can arise from learning, and an increase in the challenge of 

performing an activity could be due to novelty or increased difficulty; flow experience 

can be attained by maintaining a balance between the skill and the challenge (Cowley et 

al., 2008; Csikszentmihalyi, 1975; Goleman, 1995). A person who is in the flow state is 

completely immersed and absorbed in the activity to the point where nothing else seems 

to matter Csikszentmihalyi, 1975). In other words, ‘‘people [who are in flow] are willing 

to perform an activity for their own sake, with little concern for what they get out of it’’ 

(Csikszentmihalyi, 1990, p. 71). 

8 

Figure 2.1. The Challenge/Skill Balance Model adopted from Csikszentmihalyi & 

Csikszentmihalyi (1992) 

Table 2.2 summarizes the key components of flow, and its related construct, 

cognitive absorption, in the IS literature (HCI context). Agarwal and Karahanna proposed 

the construct, cognitive absorption, based on the concepts of flow, absorption, and 

cognitive engagement (Agarwal & Karahanna, 2000). They defined cognitive absorption 

as a state of deep involvement with software and conceptualized it using five dimensions: 

curiosity, control, temporal dissociation, focused immersion, and heightened enjoyment. 

Several other terms, such as immersion and presence, have also been used by researchers 

in other disciplines to capture the flow phenomenon (Csikszentmihalyi, 1990; Lombard 

& Ditton, 1997, Qin et al., 2009). For example, Qin et al. (2009) described immersion as 

an intense experience where a user is involved both mentally and physically in a given 

task. They identified seven components for immersion, which are curiosity, 

concentration, challenge and skill, control, comprehension, empathy, and familiarity. 

Lombard and Ditton (1997) provided six conceptualizations for presence as social 

9 

richness, realism, transportation, immersion, social actor within a medium, and medium 

as a social actor. Presence has also been represented as “the perceptual illusion of non-

mediation” (Lombard & Ditton, 1997, p. 755). Hence, presence (or telepresence) is also 

closely related to and an important aspect of the flow construct (Chen, 2006; Lee & 

Chen, 2010; Nah et al., 2011; Skadberg & Kimmel, 2004). 

Table 2.2 highlights components of the flow and cognitive absorption constructs, 

which are terms that have been commonly used by the IS research community. As shown 

in Table 2.2, there have been variations across researchers’ conceptualizations and 

operationalizations of the flow and cognitive absorption constructs. 

Table 2.2. Components of Flow in the HCI Context 

Reference Flow Components Research 

Method 

Research 

Setting 

Agarwal & 

Karahanna 

(2000) 

Curiosity, control, temporal 

dissociation, focused immersion, 

heightened enjoyment 

Survey 

questionnaire 

IT usage 

Chen (2006) Telepresence, time distortion, 

concentration, loss of self-

consciousness, a clear goal, control, 

immediate feedback, merging of 

action and awareness, positivity of 

affect, enjoyable feelings 

Survey 

questionnaire 

Web 

navigation 

Chen, Wigand, 

& Nilan (1999) 

Merging of action and awareness, 

concentration, control 

Survey 

questionnaire 

Web 

navigation 

Chen, Wigand, 

& Nilan (2000) 

Merging of action and awareness, 

concentration, loss of self-

consciousness, time distortion, 

control, telepresence, enjoyment, 

challenge 

Survey 

questionnaire 

Web 

navigation 

10 

                         Table 2.2. Components of Flow in the HCI Context (cont.) 

Cowley, 

Charles, Black, 

& Hickey 

(2008) 

Challenge, immersion, control, 

concentration, clear unambiguous 

goals, immediate feedback, lose 

consciousness of passage of time, 

lose sense of identity 

Conceptual 

and literature 

review 

Video game 

Fang, Zhang, 

& Chan (2013) 

Balance of challenge and skill, 

clear goals and feedback, 

concentration, control, immersion 

(loss of self-consciousness, 

merging of action and awareness, 

time transformation), autotelic 

experience 

Survey 

questionnaire 

Computer 

game 

Fu, Su, & Yu 

(2009) 

Concentration, goal clarity, 

feedback, challenge, autonomy, 

immersion, social interaction, 

knowledge improvement 

Survey 

questionnaire 

E-learning 

games 

Ghani & 

Deshpande 

(1994) 

Enjoyment, concentration Survey 

questionnaire 

Computer 

use 

Guo & Poole 

(2009) 

Perceived web complexity, balance 

of challenge and skill, goal clarity, 

feedback, concentration, control, 

merging of action and awareness, 

transformation of time, 

transcendence of self, autotelic 

experience 

Experiment 

and 

questionnaire 

Online 

shopping 

Guo, Xiao, 

Van Toorn, 

Lai, & Seo 

(2016) 

Balance of challenge and skill, 

clear goals, immediate feedback, 

telepresence, concentration, loss of 

self-consciousness, control, time 

distortion 

Survey 

questionnaire 

Online 

learning 

Hoffman & 

Novak (1998) 

Challenge, skill, balance of 

challenge and skill, interactivity, 

vividness, telepresence, focused 

attention, involvement 

Conceptual 

and literature 

review 

Web 

navigation 

11 

                       Table 2.2. Components of Flow in the HCI context (cont.) 

Hoffman & 

Novak (2009) 

Challenge, skill, interactivity, 

vividness, telepresence, usage, 

involvement, motivation, attention, 

ease of use, positive subjective 

experience, control, exploratory 

behavior, curiosity, discovery, 

attractiveness, novelty, playfulness, 

personal innovativeness, content 

Conceptual 

and literature 

review 

Online 

marketing 

Jiang & 

Benbasat 

(2004) 

Control, attention focus, cognitive 

enjoyment 

Experiment 

and 

questionnaire 

Online 

shopping 

Lee & Chen 

(2010) 

Concentration, enjoyment, time 

distortion, telepresence 

Survey 

questionnaire 

Online 

shopping 

Li & Browne 

(2006) 

Focused attention, control, 

curiosity, temporal dissociation 

Survey 

questionnaire 

Web 

navigation 

Nah, 

Eschenbrenner, 

& DeWester 

(2011) 

Telepresence, enjoyment Experiment 

and 

questionnaire 

Virtual 

world 

Nah, 

Eschenbrenner, 

Zeng, and, 

Telaprolu, & 

Sepehr (2014) 

Balance of challenge and skill, 

clear goals, immediate and 

unambiguous feedback, 

concentration, sense of control, loss 

of self-consciousness, merging of 

action and awareness, time 

distortion, immersion, telepresence, 

exploratory behavior, playfulness, 

sense of identity, social interaction, 

intrinsic motivation, autotelic 

experience, enjoyment, curiosity, 

heightened state of ability, feeling 

of pressure 

Conceptual 

and literature 

review 

Video game 

Nel, Van 

Niekerk, 

Berthon, & 

Davies (1999) 

Control, attention focus, curiosity, 

intrinsic interest 

Experiment 

and 

questionnaire 

Web 

navigation 

12 

                        Table 2.2. Components of Flow in the HCI context (cont.) 

Pace (2004) Joy of discovery and learning, 

reduced awareness of physical 

surroundings, time distortion, 

merging of action and awareness, 

control, mental alertness, 

telepresence 

Interview Web 

navigation 

Saade & Bahli 

(2005) 

Temporal dissociation, focused 

immersion, heightened enjoyment 

Survey 

questionnaire 

Online 

learning 

Seger & Pottts 

(2012) 

Concentration, merging of action 

and awareness, little/no self-

consciousness, skills meet 

challenges, time passes quickly, 

intrinsically rewarding, unique 

sensations, sense of invincibility, 

increased physical strength, time 

passes slowly, calm relaxation, 

attention 

Survey 

questionnaire 

Video game 

Siekpe (2005) Challenge, concentration, curiosity, 

control 

Survey 

questionnaire 

Online 

shopping 

Skadberg & 

Kimmel (2004) 

Time distortion, enjoyment, 

telepresence 

Survey 

questionnaire 

Web 

navigation 

Sweetser & 

Wyeth (2005) 

Concentration, challenge, skill, 

control, clear goals, feedback, 

immersion, social interaction 

Expert review Computer 

game 

Trevino & 

Webster 

(1992) 

Control, attention focus, curiosity, 

intrinsic interest 

Survey 

questionnaire 

Email, 

Voice mail 

Wang, Liu, & 

Khoo (2009) 

Balance of challenge and skill, 

merging of action and awareness, 

clear goals, immediate feedback, 

concentration, control, loss of self-

consciousness, time distortion, 

autotelic experience 

Survey 

questionnaire 

Internet 

gaming 

Webster, 

Trevino, & 

Ryan (1993) 

Control, attention focus, curiosity, 

intrinsic interest 

Survey 

questionnaire 

Online 

learning and 

email 

13 

   Table 2.2. Components of Flow in the HCI context (cont.) 

Zaman, 

Anandarajan, 

& Dai (2010) 

Intrinsic enjoyment, concentration Survey 

questionnaire 

Instant 

messaging 

Outside the IS context, Jackson and Marsh (1996) developed a scale, known as 

the flow state scale (FSS), that is based on all nine components of flow proposed by 

Csikszentmihalyi (1990).  This scale has been used to capture the flow experience of 

athletes as a state, i.e., for a particular event. Among the nine components of flow, it was 

found that control, balance of challenge and skill, concentration, and autotelic nature of 

experience contributed more to the flow experience of athletes when compared to 

transformation of time and loss of self-consciousness (Jackson & Marsh, 1996). In 

contrast to the FSS that assesses flow as a state, a dispositional flow scale (DFS) was 

later developed by Jackson et al. (1996) to assess the flow experience of athletes as a 

trait, i.e., based on the frequency of flow experiences. Jackson and Eklund (2002) also 

developed an improved version of the FSS and DFS (i.e., with regard to measurement of 

some of the flow components) and named them the flow state scale-2 (FSS-2) and 

dispositional flow state-2 (DFS-2) respectively.  

Two published papers in the IS domain have operationalized Csikszentmihalyi’s 

(1990) nine components of flow and assessed them in the IS context. Fang et al. (2013) 

conceptualized clear goals and feedback as one component and developed an instrument 

that took into account all the flow components proposed by Csikszentmihalyi (1990) to 

capture users’ flow experience in a computer gaming context. Using responses from 260 

14 

participants to carry out a factor analysis, six components emerged: clear goals and 

feedback, focused immersion (i.e., loss of self-consciousness, merging of action and 

awareness, transformation of time), balance of challenge and skill, autotelic experience, 

concentration, and control. Another study by Wang et al. (2009) utilized the DFS-2 to 

capture users’ flow experience in Internet gaming. One thousand five hundred and 

seventy-eight participants completed the questionnaire. The results suggest that the DFS-

2 has acceptable reliability estimates and convergent validity. Research that has assessed 

and validated the FSS-2 or a scale comprising the nine components proposed by 

Csikszentmihalyi (1990) in an IS context is still lacking. Fang et al. (2013) found the 

flow construct to load onto six instead of nine components. Given the importance of 

triangulating assessments or measurements of the flow construct in IS research, we 

examine an alternative measurement approach that uses EEG to capture users’ flow 

experience in this research. 

Bruya (2010) conceptualized the flow state using a new perspective in the 

cognitive science of attention and action, and suggested that the flow state results in 

effortless attention. In other words, when a person is in the flow state, he or she maintains 

a sustained level of efficiency such that increased task demands can be carried out with 

no increase in felt effort because of the high level of focus, control, and automaticity 

achieved in the flow state (Bruya, 2010). When one’s attention and action are merged in 

the flow state, the action becomes automatic and seemingly effortless. Hence, the flow 

state has been associated with effortless attention and action, which are key aspects of 

autotelic experience (Bruya, 2010). 

15 

2.2. DEFINITION AND CORRELATES OF BOREDOM STATE 

The boredom state can occur due to a mismatch between the challenge and skill 

levels (Csikszentmihalyi, 1975, 1990). Boredom has been termed as a state of disinterest 

(Fahlman et al., 2013). Task-unrelated thoughts tend to develop during boredom which 

ultimately lead to attentional failures (Danckert & Merrifield, 2016). Researchers 

conceptualized the state of boredom based on four major theories: arousal, attention, 

psychodynamic, and existential theories. According to Leswinsky (1943), a 

psychodynamic psychologist named Theodor Lipps considered boredom as a feeling of 

unpleasantness generated due to a need that is unfulfilled for psychic stimulation. 

Fenichel (1951) explained that the unfulfillment can occur not only due to a lack of 

stimulation, but it can also occur if the state of mind prevents an individual from 

engaging in a simulated activity. According to existential theories, “emptiness following 

feelings of meaninglessness” can also lead to boredom (Frankl, 1992, p. 104). In the view 

of arousal theorists, boredom occurs due to a mismatch between the required arousal 

level and the arousal level triggered by the simulated environment (O’Hanlon, 1981); for 

example, cognitivists consider boredom as a less inspiring environment that leads to a 

decreased ability to concentrate. (Fisherl, 1993). According to the attentional theories, 

boredom is caused by failure of the attentional processes, resulting in an inability to 

achieve focused attention or engagement (Fisherl, 1993; Schur, 1969).  

Mikulas and Vodanovich (1993) provided the following definition for the 

boredom state: “a state of relatively low arousal and dissatisfaction, which is attributed to 

an inadequately stimulating situation” (p. 3). However, the definition of boredom defined 

by Eastwood and colleagues, which is most commonly used, is as follows: “an aversive 

16 

state of wanting, but being unable, to engage in satisfying activity” (Eastwood et al., 

2012, p. 482). When one is bored in performing a task, the aversive state (not able to 

engage oneself in a satisfying activity) arises, resulting in a need to pursue a different 

goal (look for something different); in such cases, boredom is seen as an emotional cue. 

More specifically, Bench & Lench (2013) indicated that boredom “might arise during 

times when goals are blocked”. Fisher (1993) defines boredom as “a transient affective 

state in which the individual feels a pervasive lack of interest in the current activity” (p. 

3); Csíkszentmihályi views boredom as a state in which the skills of a player are greater 

than the simulated challenge (see Figure 2.1) (Balducci et al., 2017; Csíkszentmihályi, 

1992).  

Various researchers focused mainly on low/under stimulation tasks to understand 

the boredom state. For example, although inspection and continuous control (i.e., driving, 

tracking, piloting, etc.) tasks are repetitive and less stimulative in nature, they demand 

attention. It has been concluded that a task with prolonged exposure not only induces 

boredom but also reduces physiological arousal. All the above-mentioned theories 

suggest that the central feature of boredom is the apathetic experience of wanting but 

being unable to engage in stimulating and satisfying activities (Berlyne, 1960; Mikulas & 

Vodanovich, 1993; Sundberg et al., 1991). Boredom is often conceptualized as an 

aversive state of under arousal that occurs when “information” or environmental 

“stimulation” is redundant, monotonous, of low intensity, or meaningless (Geiwitz, 1966, 

Hebb & Donderi, 2013). While playing video games, the cognitive actions that are less 

differentiating and more homogenous in nature give rise to boredom (Perkins & Hill, 

1985). Therefore, a combination of low goal-directed task followed by a decline of 

17 

interest can cause boredom. Slow perception of time is also considered as a consistent 

correlate of boredom (Bench & Lench, 2013). In addition, individuals who have high 

boredom proneness are more likely to overestimate the amount of time spent on the task 

whereas individuals with low boredom proneness are more likely to underestimate the 

elapsed time (Danckert & Allman, 2005). Boredom is a common state/phenomenon 

experienced by the majority in daily routines. Despite its importance and significant 

potential social and psychological consequences, it is still poorly understood (Eastwood 

et al., 2012). Based on previous research studies, the correlates of boredom are low 

attention, low arousal, slowed time perception, and task-unrelated thoughts. 

An attempt that has been made to find a way to maintain optimal challenge 

revealed that physiological correlates can be used to classify affective states (Rani et al., 

2005). Galvanic Skin Response (GSR), a measure of skin resistance (physiological 

signal), decreases with an increase in the task difficulty (Chanel et al., 2008). A research 

study using EEG conducted by Plotnikov et al. (2012) confirmed that EEG oscillations 

can classify different user states. Fahlman et al. (2013) developed and validated a full-

scale measurement of the boredom state - Multidimensional State Boredom Scale 

(MSBS) (Fahlman et al., 2013). The scale consists of mentioned factors: perception of 

time, high and low arousal, inattention, and disengagement. The MSBS scores correlate 

higher with the following boredom measures: impulsivity, inattention (i.e., low arousal), 

and disengagement. Physiological and EEG signals have been captured in the literature to 

test and classify the user states –flow, boredom, and anxiety – but their correlates over 

specific regions of the brain were least explained.  A few studies have attempted to 

understand the neural correlates of the boredom state using fMRI and they found that the 

18 

frontal and parietal lobes were active during boredom (Ulrich et al., 2014; Mathiak et al., 

2013; Andrews-Hanna, 2012; Buckner et al., 2008; refer to Section 2.6.2 for more 

information). When the neural dynamics of boredom were investigated using fMRI, 

activation over Dorsolateral Pre-Frontal Cortex (DLPFC) was recorded (Tabatabaie et al., 

2014).  To the best of our knowledge, no study to date has specifically investigated the 

neural correlates of boredom over the frontal lobes in the gaming context.  

2.3. STATE OF ANXIETY AND COGNITIVE PERFORMANCE 

Anxiety is considered as an unpleasant motivational and emotional state occurring 

under threatening circumstances.  The state of anxiety can be described as a situational 

stress aroused by the environment (Eysenck, 1992). It has been conceptualized as “a state 

in which an individual is unable to instigate a clear pattern of behavior to remove or alter 

the event/object/interpretation that is threatening an existing goal” (Dalgleish & Power, 

1999, pp. 206–207). Clinical anxiety (i.e., anxiety as a personality dimension or trait) has 

been researched with high priority and importance compared to the state of anxiety 

experienced by the normal population. In earlier research studies, anxiety was assessed 

by trait anxiety measures such as Spielberger’s State–Trait Anxiety Inventory 

(Spielberger et al., 1983). Later studies identified anxiety as a state that can be 

experimentally induced to assess differences among individuals. During the state of 

anxiety, individuals worry about the current goal and try to develop effective strategies to 

reduce anxiety in order to achieve their goal.  

Processing Efficiency and Attentional Control theories, which will be explained 

later, have been used to explain the state of anxiety (Eysenck et al., 2007). It is crucial to 

19 

understand the state of anxiety with respect to performance and cognition due to its 

adverse effects on the performance of cognitive tasks (Eysenck, 1992). To identify the 

cognitive processes associated with the state of anxiety, researchers have used short-

lasting cognitive tasks to study cognitive processes under controlled conditions. 

Csikszentmihalyi (1990) stated that the state of anxiety occurs when the challenge of a 

given task is greater than the skill of an individual (see Figure 2.1.1) (Csikszentmihalyi, 

1990). 

Processing efficiency theory focuses on differentiating efficiency and 

effectiveness, and states that the negative effects of anxiety are greater on efficiency than 

effectiveness (Eysenck, 1992). Two main effects of anxiety are that: (1) it can consume 

most of the working resources for attention and limit concurrent processing of tasks; (2) it 

can enhance motivation in order to minimize the anxiety level (Borkovec, 1994; Sarason, 

1988; Eysenck, 1992). Researchers assume that anxiety can affect primarily those regions 

of the brain that are involved in central executive processes (Rapee, 1993). Although the 

processing efficiency theory attempted to explain the effects of anxiety on central 

executive processes, it did not identify the processes that are affected by the anxiety state. 

For example, the central executive regions fulfill certain functions like focusing attention 

on relevant tasks, inhibiting attention on irrelevant tasks, planning sub-tasks to achieve a 

goal, and switching attention between tasks (Smith & Jonides, 1999). Interestingly, a few 

studies have shown no difference in performance between participants of high- and low-

anxiety levels (e.g., Blankstein et al., 1990; Blankstein et al., 1989; Calvo et al., 1990; 

Calvo & Ramos, 1989).  

20 

Attentional Control Theory focuses on cognitive performance and anxiety 

(Yantis, 1998). According to attentional control theory, anxiety destroys the balance 

between stimulus-driven attentional system and goal-directed attentional system (Fox et 

al., 2005). This theory also supports the notion that anxiety impairs attentional control 

which is a key function in performing a cognitive task. In other words, an anxious 

individual preferentially allocates attentional resources to threat related stimuli either 

internally or externally (Sarason, 1988). However, the theoretical explanations provided 

by processing efficiency and attention control theories were considered oversimplified. 

Researchers believed it is difficult to operationalize high levels of executive functions 

and goal-directed planning process. According to previous studies, the relationship 

between the anxiety state and cognitive task performance can be better understood with 

brain imaging techniques when compared to self-reported measures, incentive 

manipulations, and physiological measures (Spielberger et al., 1983; Dornic, 1977, 1980; 

Ansari & Derakshan, 2011). Brain Imaging studies that are focused on attention shifting 

and inhibition processes revealed that prefrontal areas of the brain are involved in central 

executive functions (Collette & Van der Linden, 2002). The affects and correlates of the 

anxiety state will also be discussed in Section 2.6.3. 

2.4. BRAIN COMPUTER INTERFACE – EEG FOR NEURO-IS 

The potential of cognitive neuroscience gains visibility in the social sciences 

because of its ability to link human behavior to brain activity (Glimcher & Rustichini, 

2004).  Advances in cognitive neuroscience help in creating an understanding of the brain 

activity involved in mental processes. Brain Computer Interface (BCI) devices provide 

21 

direct communication between the brain and external electrical devices to capture rich 

information about the user states of experience while interacting with a system or playing 

games (Lee & Tan 2006; Tan & Nijholt, 2010). They are often used for researching, 

mapping, assisting, and repairing sensory-motor or human cognitive functions (Krucoff et 

al., 2016).  

Compared to self-reported measures, BCI - EEG offers more objective (less 

subjective) and impartial measurement of social, cognitive, emotional, and decision-

making processes. BCI interfaces are becoming more affordable and accessible; IS 

researchers can benefit by triangulating their existing data sources with brain data. Brain 

data can also be used specifically for recording and gauging processes related to mental 

ability that people are not able to self-report accurately (Pavlou et al., 2007). IS 

researchers can overcome the susceptibility of biases in self-reported data by 

supplementing the data with those collected through brain imaging techniques.  

In NeuroIS, research attempts have been made to use theories and tools in 

cognitive neuroscience. Moor et al. (2005) and Randolph et al. (2006) used EEG to 

understand the interaction patterns of the brains of handicapped patients. Differences in 

the brain activity among men and women during their interaction with recommendation 

agents were found by Dimoka et al. (2009). Finally, Dimoka (2010) used fMRI and found 

that trust and distrust cover different areas of the brain. Microsoft utilizes EEG for 

classifying tasks and recognizing distinctive activities (blogs.zdnet.com/BTL/?p =6609). 

Applications of NeuroIS in the field of HCI and Design Sciences include: localizing 

neural correlates associated with usability, capturing hidden processes, complementing 

22 

existing data sources, and enhancing theories related to design science and HCI (Pavlou 

et al., 2007).  

EEG is considered as BCI’s non-invasive neuro imaging technology and measures 

the postsynaptic electrical potentials on the surface of the scalp (Asadi‐Pooya et al., 

2017). The activation of neurons leads to synaptic excitations which generate current 

between dendrites; EEG signals are generated due to such current flows in the cerebral 

cortex (Sanei & Chambers, 2007). This current generates both electric and magnetic 

fields; the electric field is measured by EEG and the magnetic field is measured by 

electromyogram (EMG) (Asadi‐Pooya et al., 2017; Salinas & Sejnowski, 2001). 

Electrodes are positioned at specified locations of the scalp to collect the aggregated 

synchronized activity from the respective neurons present near the cortex surface. EEG 

signals are recorded for a short time i.e., typically 20-40 minutes (Taywade & Raut, 

2014); these signals are sensitive to noise and they need to be amplified and processed by 

applying filters and differential amplifiers (Atwood & MacKay, 1989). According to the 

Nyquist criteria, 200 samples per second (minimum) are required with an effective 

bandwidth of 100 Hz for the signal amplification. The conventional arrangement of 

electrodes recommended by the International Federation of Society for 

Electroencephalography and Clinical Neurophysiology is called 10-20 or 10-10 (Jasper, 

1958). 

 EEG signals can be visually inspected to identify the neurological disorders using 

brain rhythm patterns. The amplitude and frequency values of these signals vary with 

human sleep or awaken states, age, health, gender, etc. The five major brain rhythms and 

their frequency ranges are: delta: 1-4 Hz, theta: 4-8 Hz, alpha: 8-12 Hz, beta 12-30 Hz, 

23 

and gamma: >30 Hz (Klimesch, 1999). Delta and theta waves are considered low 

frequency bands; delta oscillations are active during the sleep state (Merica & Gaillard, 

1992) and theta oscillations represent cognitive or memory load (Berta et al., 2013; 

Müller-Putz et al., 2015). Changes in theta activity are related to memory processes, 

emotional arousal, and impulsivity (Knyazev, 2007). Alpha oscillations are considered 

medium frequency bands and are active during the awaken state; these oscillations can 

also be observed when a person closes his/her eyes (Knyazev, 2007). Beta oscillations 

occur mainly in the frontal and central regions; it is usually associated with focused 

attention (Berta et al., 2013; Taywade & Raut, 2014). Gamma waves are considered as 

fast beta waves and have a frequency of above 30 Hz. Detection of these rhythms can be 

used to identify specific neurological diseases (Pfurtscheller et al., 1994; Taywade & 

Raut, 2014). 

2.5. EEG FOR HCI AND GAMES 

An upswing in the brain imaging technologies and cognitive neuroscience 

increased human ability to interface directly with brain activity (Hjelm and Browall, 

2000). In the medical domain, researchers applied BCI to benefit disabled users; 

examples of applications include bio-feedback therapy for treating neurological disorders 

and prosthesis control (Coyle et al., 2003). Presently, application of EEG in HCI assumes 

that instruments to gauge the brain activity patterns for normal users are non-invasive. 

BCI-EEG applications aim to control game (system) environment in addition to 

measurement of physical and mental abilities (Nijholt, 2008). Having access to the user’s 

24 

state is valuable to HCI researchers as it opens several other areas of application as 

discussed below. 

Attention Monitoring and Adaptation: It is critical for truck drivers, flight 

controllers and security personnel to stay awake and alert for longer periods of time; 

detecting visual alertness becomes a significant prerequisite to monitor user performance 

(Nijholt et al., 2007). EEG experiments have shown that alpha oscillations are detectors 

of ongoing brain activity related to awareness and visual alertness (Ergenoglu et al., 

2004). These findings provide support in creating BCI applications to determine a user’s 

visual alertness; for example, if a user is not alert, it is possible to adjust the visual load in 

the interface or advise the user to take a break (Treder et al., 2011). Such systems can be 

installed at security inspection units, airport traffic control stations etc. to enhance system 

functionality. The usage of brain activity in combination with other physiological 

measures is considered as an important multi-dimensional challenge in HCI (Nijholt et 

al., 2008). 

Examples of BCI - EEG applications are as follows: 

Controlling systems by affective states: EEG research helps to measure the 

cognitive activity during specific task scenarios and can analyze and inform users’ 

cognitive states (Ayaz et al., 2011). EEG headsets can be used to segregate the brain 

activity and these segregations can be used to control the game environment (Chanel et 

al., 2008). For example, brain activity related to imagining the left foot movement or 

index finger movement has led to discernible brain activity patterns (Gilleade et al., 2005; 

Afergan et al., 2014), particularly in the motor cortex regions. A natural mapping of the 

brain is recorded while users think about carrying out these movements, and this mapping 

25 

can be used as commands in a game environment, or to operate a prosthetic device or 

robot. EEG research facilitates the development of applications that derive information 

from brain activity and control a movement execution. 

Evaluating Interfaces and Systems: BCI technologies help to provide optimal and 

a pleasant user experience by evaluating current systems and interfaces (Coyle et al., 

2003). EEG is one of such BCI technologies that can determine specific user states and 

help to evaluate interfaces or workload systems (Bersak et al., 2001). EEG can be 

configured to detect errors that the user makes, and to grade and better user performance; 

for example, based on users’ cognitive states, interfaces can be designed more flexibly to 

manage interruptions (Nijholt et al., 2008). A system can detect deep thoughts or no 

thought based on the cognitive activity and external cues; if a user is in deep thoughts, 

then the system manages (delays) interruptions like emails and phone calls. Sensing 

higher level cognitive states like apathy, boredom, sadness, confusion, flow, anxiety or 

frustration, happiness, satisfaction and realization (the “aha” moment) helps researchers 

to build tailored interfaces; such interfaces not only provide feedback but also enhance 

task focus and strategy usage (Nijholt & Tan, 2007). Finally, developing interfaces based 

on EEG technology could lead to a remarkable increase in information understanding and 

retention (Nijholt et al., 2008). 

Build adaptive interfaces: EEG systems can equip researchers with information 

related to users’ cognitive and attentional states using brain imaging (Nijholt et al., 2008). 

Such information allows games to be designed in such a way that they not only adapt 

dynamically to the user’s skill level, but also can decrease or increase the task load based 

on the user’s cognitive state or activity (Hirshfield et al., 2009). In a game environment, 

26 

apart from brain activity, behavioral responses can also be gauged through facial 

expressions, eye gaze, body movements and physiological responses through skin 

conductivity, heart rate, and blood pressure. Moreover, measuring brain activity helps to 

dynamically tailor the games to the affective state of the user, allowing the application to 

adjust the flow of information and to provide effective and pleasant feedback, thus keeping 

the user in the flow state while gaming (Gilleade et al., 2005; Afergan et al., 2014). EEG 

can be used to design interfaces that adapt automatically depending on the cognitive state 

of the user. 

2.6. NEURAL CORRELATES OF USER EXPERIENCE STATES 

Neural correlates can be defined as the brain activity or mapping that corresponds 

to specific states or desired user experience in the context of this research. According to 

previous studies, cortical activations vary, and these variations can be attributed to 

changes in task difficulty and attentional demand levels; neural correlates can be used to 

determine the variations and also to classify the user states of experience (Ewing et al., 

2016; Berta et al., 2013). In this section, underlying brain activation patterns for user 

states such as flow, boredom, and anxiety, are reviewed.  

2.6.1. Neural Correlates of Flow-Related User Experience. As reviewed in the 

previous sections, researchers have modeled and assessed flow somewhat differently in 

the IS literature. There has been continuing effort by researchers to develop a generalized 

and robust measurement scale for flow. Recent studies have utilized psychophysiological 

techniques such as EEG and Magnetic Resonance Imaging (MRI)/Functional Magnetic 

27 

Resonance Imaging (fMRI) to analyze neural correlates of user experience, such as flow, 

by examining the brain activation patterns while performing a cognitive task.  

Table 2.3 summarizes empirical research that has investigated the neural 

correlates of flow state of user experience using EEG or MRI/fMRI. Although the 

literature has examined the use of EEG for modeling related constructs such as task 

engagement and workload, there are only a handful of studies that have examined EEG 

for modeling flow as an optimal state of user experience (Berta et al., 2013; Léger et al., 

2014; Wang & Hsu, 2014). 

Table 2.3. Summary of Research on Neural Correlates of the Flow State 

Reference Research Setting Summary of Findings 

Bavelier, 

Achtman, 

Mani, & 

Föcker 

(2012) 

Use fMRI to study neural 

bases of selective attention 

in video game players 

This study used brain imaging to 

compare attentional network 

recruitment and distractor processing 

in action gamers versus non-gamers.  

A fronto-parietal network of areas 

showed greater recruitment as 

attentional demands increased in non-

gamers. 

Berka, 

Levendowski, 

Lumicao, 

Yau, Davis, 

Zivkovic, & 

Craven 

(2007) 

EEG correlates of task 

engagement and mental 

workload during 

performance of cognitive 

tests 

EEG measures are correlated with 

both subjective and objective scores of 

task difficulty levels. 

28 

Table 2.3. Summary of Research on Neural Correlates of the Flow State (cont.) 

Berta, 

Bellotti, De 

Gloria, 

Pranantha, & 

Schatten 

(2013) 

Use of a 4-electrode EEG 

to assess flow in games 

The most informative bands for 

discriminating between boredom, 

flow, and anxiety user states are 

around low beta, while simple signals 

from the peripheral nervous system 

add marginal information. 

De Manzano, 

Theorell, 

Harmat, & 

Ullén (2010)  

Used EDA and EMG to 

understand the physiology 

of flow experience 

High flow values associated with 

activation of zygomati-cus major (ZM, 

smiling muscle) and sympathetic 

activation.  

Flow is also associated with deep 

breathing.  

Found no relation between corrugators 

supercilli (CS, frowning muscle) and 

flow.  

Dietrich 

(2004)  

Neurophysiological theory 

of flow experience; Theory 

of hypofrontality  

Flow results from down-regulation of 

prefrontal activity in the brain.  

During flow state, the activities are 

performed without interference of 

conscious control system, making the 

process efficient and fast.  

Goldberg, 

Harel, & 

Malach 

(2006)  

Used fMRI to understand 

the brain activity during 

flow state 

Activity decreases in Medial 

Prefrontal Cortex (mPFC) during flow 

state.  

mPFC contributes to self-referential 

mental activity.  

Since flow is a highly focused state of 

task engagement leading to shut down 

of self-referential activities, it causes a 

decrease in mPFC.  

Gusnard, 

Akbudak, 

Shulman, & 

Raichle 

(2001) 

Used fMRI to assess 

neural correlates of the 

flow state 

In the state of flow, the Dorsomedial 

Prefrontal Cortex (DPC) is expected to 

have very minimal or no activity.  

DPC deals with self-related emotions 

and in the flow state, self-related 

emotions are eliminated.  

29 

Table 2.3. Summary of Research on Neural Correlates of the Flow State (cont.) 

Hamilton, 

Haier, & 

Buchsbaum 

(1984) 

Used EEG and IES 

(Intrinsic Enjoyment 

Scale) to assess the 

physiological correlates of 

flow experience 

Flow as a personality trait in daily 

activities.  

Subjects scored high on IES: the 

increased attention led to decreased 

effort measured using EEG, EP 

(Evoked Potentials).  

Keller, Bless, 

Blomann, & 

Kleinböhl 

(2011)  

Used ECG/EKG 

(Electrocardiogram) and 

Kubios HRV analysis to 

understand the flow state 

physiology 

Flow experience is associated with 

elevated cortisol levels, reduced heart 

rate variability, a stressful state of 

increased workload.  

All of the above lead to questioning 

the current, exclusively positive, 

picture of the flow phenomenon.  

Kivikangas 

(2006) 

Used EEG and EMG 

(Electromyogram), and 

Flow State Scale (36 

items) to assess physiology 

of flow experience 

Flow is associated with in-creased 

positive valence and decreased 

negative valence.  

Flow is negatively associated with 

corrugators supercilli (CS, frowning 

muscle) and found no effect on 

zygomaticus major (ZM, smiling 

muscle) and orbicularis oculi (OO, 

“eyelid muscles”).  

Increased electrodermal activity (high 

arousal indication) with an 

experimental flow condition.  

Klasen, 

Weber, 

Kircher, 

Mathiak, & 

Mathiak 

(2011) 

fMRI correlates of flow 

experience during video 

game playing 

Flow can be characterized by specific 

neural activation patterns and 

functional brain imaging can be used 

to validate factors of flow. 

Léger, Davis, 

Cronan, & 

Perret (2014) 

Use EEG to analyze neural 

correlates of cognitive 

absorption in IT end-user 

training 

Five neurophysiological measures 

including alpha, beta, electrodermal 

activity (EDA), heart rate, and heart 

rate explain a significant portion of 

variation in cognitive absorption. 

30 

Table 2.3. Summary of Research on Neural Correlates of the Flow State (cont.) 

Li, Jiang, 

Tan, & Wei 

(2014) 

Use EEG to quantify the 

cognitive activities of user-

game engagement 

Different levels of EEG theta 

oscillations were observed when 

individuals played games of different 

levels of familiarity 

and complexity.  

Mandryk & 

Atkins (2007) 

Used EDA (Electrodermal 

Activity) to assess the skin 

conductance during flow 

state 

EDA can be used to assess flow, 

which is associated with emotional 

arousal.  

Nacke & 

Lindsey 

(2009)  

Used EDA and EMG to 

understand the physiology 

of flow experience  

Increased activity of zygo-maticus 

major (ZM, smiling muscle) and 

orbicularis oculi (OO, “eyelid 

muscles”) and an increase in 

electrodermal activity (EDA) is 

associated with the experimentally 

induced flow condition.  

Peifer (2012)  

Used Questionnaire and  

Electrocardiography 

(ECG/EKG) to understand 

the physiological 

correlates of flow 

experience  

Flow has an inverted u-shaped relation 

with hypo-thalamic-pituitary-adrenal 

(HPA) axis activation and sympathetic 

arousal.  

Pope, Bogart, 

& Bartolome 

(1995) 

Select indices of operator 

engagement in automated 

task based on EEG signals 

The index that is made up of the 

formula: beta power/(alpha power + 

theta power) reflects operator 

engagement.  

Sanchez-

Vives & 

Slater (2005)  

Used fMRI to assess 

neural correlates of flow 

state in virtual reality 

Modern video games evoke strong 

feelings. The sensory motor network is 

activated during the flow state.  

Flow influences midbrain reward 

structures.  

Wang & Hsu 

(2014) 

Understand flow 

experience in a computer-

based instruction 

environment using EEG 

Learners with high flow experience 

show high-ranking learning 

performance.  

Attention percentages are high during 

the flow state. 

31 

So, what happens in the human brain during the flow state? Using an 

experimental study, Berta et al. (2013) found that the most informative frequency bands 

for differentiating between flow, boredom, and anxiety include those around the low beta 

band. Léger et al. (2014) found cognitive absorption to be positively related to EEG alpha 

and negatively related to EEG beta. On the other hand, Pope et al. (1995) devised an 

index for task engagement as beta power divided by the addition of alpha and theta 

power. Given that task engagement and cognitive absorption are closely related 

constructs, the findings by Léger et al. (2014) and Pope et al. (1995) are seemingly 

inconsistent and in the opposite direction. In this research, we hope to further investigate 

the relationships between the frequency bands and the flow state to help in resolving this 

inconsistency. Li et al. (2014) found that the density of theta oscillations from the left 

side of the dorsolateral prefrontal cortex can explain user engagement. Berka et al. (2007) 

found that task engagement, which is a concept closely related to flow, correlates with 

EEG activity in the theta, alpha, and beta bands.  

2.6.2. Neural Correlates of Boredom-Related User Experience. Research 

studies have utilized neuroimaging technique (fMRI) to measure the neural correlates of 

the boredom state. These studies reported that, during boredom, the frontal, and temporal 

lobes were consistently active whereas the other regions of the brain were less active 

(Ulrich et al., 2014; Mathiak et al., 2013; Andrews-Hanna, 2012; Buckner et al., 2008); 

during active task engagement, the activity in the frontal and temporal regions was seen 

to be reduced (Gusnard & Raichle, 2001).  

Indeed, it has been found that when a person is actively engaged in a cognitively 

demanding task, activity in the frontal and temporal regions is low when compared to the 

32 

central executive network (Mason et al., 2007; Danckert & Merrifield, 2016). Table 2.4 

summarizes empirical research that has investigated the neural correlates of boredom 

state using EEG or MRI/fMRI. 

Both EEG and fMRI studies reported a link between the boredom experience and 

neuronal oscillations. Oswald (1962) was the first researcher to suggest the possibility of 

the existence of neurophysiological markers for the state of boredom. He also 

hypothesized that an increase in the alpha band activity may be linked to both boredom 

and visual inattention (Oswald, 1962). This hypothesis turned out to be consistent with 

later studies conducted on the alpha waves by Gevins and Schaffer’s (1979) who found 

that cortical activation related to a task is inversely proportional to the magnitude of alpha 

waves, and by Klimesch (1999) who found that alpha oscillations are active during 

mental inactivity and wakeful relaxation.  

                    Table 2.4. Research on Neural Correlates of the Boredom State 

Reference Research Setting Summary of Findings 

Danckert & 

Merrifield 

(2016) 

Used fMRI to study the 

boredom, sustained attention, 

and DMN (Default Mode 

Network) 

DMN is active during boredom.  

Activated regions of DMN included 

lateral temporal cortex, medial 

Prefrontal cortex (mPFC), posterior 

cingulate cortex, and precuneus.  

Kramer 

(2007) 

Used EEG and GSR to 

predict performance 

A negative correlation between 

theta and mid-beta activity with 

performance.  

Decrease in alpha over temporal 

region leads to better performance. 

33 

Table 2.4. Research on Neural Correlates of the Boredom State (cont.) 

Mathiak, 

Klasen, 

Zvyagintsev, 

Weber, & 

Mathiak 

(2013)  

Used fMRI to understand user 

experience states while 

playing a video game 

Boredom has been operationalized 

as a passive state with a negative 

effect. 

Boredom was associated with 

activation of the ventromedial Pre-

Frontal Cortex (vmPFC) and insula.  

In addition, right precuneus and 

hippocampus were deactivated 

during boredom. 

Ulrich, 

Keller, 

Hoenig, 

Waller, & 

Grön (2014) 

Used fMRI to study neural 

bases of flow with boredom 

and anxiety as comparison 

conditions while performing 

an arithmetic task  

Medial prefrontal and temporal 

cortex are highly active during 

boredom in comparison with flow. 

Left amygdala, hippocampus, and 

parahippocampus gyrus were also 

highly active during boredom when 

compared to flow. 

According to the findings related to fMRI and EEG neuronal oscillations, EEG’s 

theta, alpha, and beta (mid-beta) activity over the frontal and temporal regions of the 

brain can be used for analyzing the neural correlates of the boredom state. 

2.6.3. Neural Correlates of Anxiety-Related User Experience. Dornic (1977) 

conducted a self-reported study and asked participants about their invested efforts to 

complete the task. The results show that highly anxious individuals spent more effort 

when compared to less anxious individuals. This result is in line with Dronic’s next 

study, where it was found that anxiety can increase mental load, causing no harm to 

performance (Dornic, 1977, 1980). Another way to measure the expended effort during 

the state of anxiety is through physiological measures. A group of highly anxious people 

showed more cardio vascular activity when compared to less anxious people 

(Schwerdtfeger & Kohlmann, 2004).  

34 

However, no significant difference was found between highly anxious and less 

anxious groups in the cardiovascular indices that signify effort during task performance 

(Calvo et al., 1996; Di Bartolo et al., 1997; Scho¨npflug, 1992). Physiological studies 

suggest that highly anxious people do not put in more effort in cognitive task 

performance when compared to the less anxious group. As a further step, researchers 

adopted brain imaging techniques like fMRI and EEG to understand the neural correlates 

of anxiety in healthy adults rather than focusing on analyzing clinical anxiety. Table 2.5 

summarizes the neural correlates of the anxiety state based on the fMRI and EEG studies 

in the literature. 

                 Table 2.5. Research on Neural Correlates of the Anxiety State 

Reference Research Setting Summary of Findings 

Aftanas & 

Golosheikin 

(2003) 

Used EEG to identify the 

cortical activity changes 

in the alerted states 

The Frontal Midline Theta (FMθ) 

activity correlates negatively with the 

intensity of the anxiety experienced.  

Ansari & 

Derakshan 

(2011) 

Used fMRI techniques to 

analyze the neural 

correlates of inhibited 

anxiety 

Fronto-central regions of the brain are 

inhibited during high anxiety levels and 

highly anxious individuals showed 

lower ERP (Event Related Potentials) 

activity. 

Anxiety is associated with reduced 

recruitment of prefrontal attentional 

mechanisms. 

Berta, Bellotti, 

de Gloria, 

Pranantha, & 

Schatten (2013) 

Used EEG to assess the 

physiological correlates 

of flow with anxiety as a 

comparison condition 

EEG theta activity is low during the 

state of anxiety or frustration when 

compared to boredom and flow states 

35 

Table 2.5. Research on Neural Correlates of the Anxiety State (cont.) 

Birbaumer 

(1977)  

Used EEG to monitor 

theta changes during 

anxiety and after 

meditation 

EEG theta activity is low during state 

of anxiety and increased after 

meditation 

Dolcos, Iordan , 

& Dolcos 

(2011) 

Used fMRI to 

investigate the neural 

correlates of emotion – 

cognition 

Dorsolateral Pre-Frontal Cortex 

(DLPFC) and Dorsomedial Pre-Frontal 

Cortex (DMPFC) are negatively 

associated with anxiety scores. 

Gillath, Dolcos, 

Shaver, 

Wendelken, & 

Mikulincer 

(2005) 

Used fMRI to explore 

the neural correlates of 

ability to suppress 

negative thoughts 

Anxiety negatively correlates with 

orbitofrontal cortex and is positively 

associated with hippocampus. 

Gruzelier 

(2009) 

Used EEG to understand 

the theta/alpha neuro 

feedback 

Increase in the theta-alpha ratio reduces 

the depression and anxiety levels in an 

individual. 

Isotani, Tanaka, 

Lehmann, 

Pascual-Marqui, 

Kochi, Saito, & 

Sasada (2001) 

Used EEG for recording 

brain activity during 

anxiety and relaxation 

EEG sources were located more 

towards the right region during anxiety 

than during relaxation 

Mid-beta band showed more activation 

in the frontal lobe during anxiety 

compared to relaxation. 

Knyazev, 

Savostyanov, & 

Levin (2004) 

Used EEG to understand 

the alpha oscillations 

during anxiety 

Alpha power increased during low-

anxiety level but not during high 

anxiety.   

Liotti, Levin, 

Brannan, 

McGinnis, 

McGinnis, and, 

Fox (2000) 

Used fMRI to assess the 

cortical correlates of 

sadness and anxiety 

Anxiety is associated with 

deactivations in the right temporal 

cortex. 

The deactivation in the dorsal 

prefrontal cortex is specific to sadness.  

Messina, 

Sambin, 

Sambin, & 

Viviani (2013) 

Used fMRI to evaluate 

the neural correlates of 

anxiety and depression 

Activation in temporal cortex during 

resting stage and deactivation during 

the state of anxiety. 

An increased activation in the Medial 

Temporal Lobe (MTL) is observed 

during depression or anxiety 

36 

 Table 2.5. Research on Neural Correlates of the Anxiety State (cont.) 

Mizuki, 

Kajimura, 

Kajimura, 

Suetsugi, 

Ushijima, & 

Yamada (1992) 

Used EEG to assess 

frontal midline theta 

The Frontal Midline theta (FMθ) was 

low in a group with high anxiety levels 

when compared to a group with low 

anxiety levels.  

Putman (2011) Used EEG delta – beta 

coherence in relation to 

anxiety 

EEG beta activation is negatively 

associated with experimentally induced 

anxiety levels. 

Sehlmeyer, 

Knyazev, 

Schöning, 

Kugel, Pyka, 

Pyka, & Konrad 

(2011) 

Used fMRI to 

understand the neural 

correlates of anxiety 

Increased activation of amygdala and 

decreased activation in Pre-Frontal 

Cortex (PFC) during high levels of trait 

anxiety have been observed. 

Spampinato, 

Wood, De 

Simone, & 

Grafman (2009)      

Used fMRI to 

investigate the neural 

correlates of anxiety in 

healthy volunteers 

Medial Pre-Frontal Cortex (mPFC) and 

Dorsolateral Pre-Frontal Cortex 

(DLPFC) have shown inverse 

volumetric correlation with anxiety. 

Based on the above summarized studies, the literature suggests that the anxiety 

state can have significant impact on the distributed neural networks of the brain. fMRI 

studies have shown that a distributed neural network consisting of amygdala, posterior 

cingulate cortex, and dorsolateral and medial prefrontal cortex have an inverse volumetric 

relationship with anxiety levels in the healthy group (Spampinato et al., 2009). Further 

examinations revealed that participants with low grey matter in the temporal lobe tend to 

have higher levels of anxiety when compared to participants with high gray matter in 

similar regions (Spampinato et al., 2009). According to fMRI studies, a deactivation in 

the fronto-parietal network can be observed during intense/high anxiety states. The 

37 

results of the EEG research studies are in line with the fMRI results. If a task is consistent 

in nature, the EEG theta decreases even under high load or overload conditions 

(Axmacher et al., 2008). Although fMRI and EEG results indicate that the brain activity 

decreases during the anxiety state, a gap in the literature exists (Spampinato et al., 2009). 

The gap can be explained as follows: least attempts in the literature were made to find the 

relationship between EEG spectral band activities and the regions of distributed neural 

network activated/deactivated during the anxiety state.  

In summary, our review of the literature suggests that the neural mapping of the 

flow, boredom, and anxiety states in gaming is unclear and inconsistent in the literature 

and hence, further research is needed. Among all psychophysiological technologies, EEG 

is particularly suitable and feasible to analyze brain activity associated with the flow, 

boredom, and anxiety states in the HCI context because it provides continuous 

assessments of user states during a user’s interaction with computers or technology.  

38 

3. THEORETICAL FOUNDATION AND HYPOTHESIS DEVELOPMENT 

In Section 3.1, we review theories that were used to justify the research 

hypotheses; they include motivational theory, effortless action and attention theory, and 

theories related to flow. Section 3.2 reviews the spectral bands and their nature of 

correlations towards user states as reflected in the frontal, parietal, temporal, and occipital 

regions of the brain by comparing flow with resting, boredom, and anxiety.  

3.1. THEORETICAL FOUNDATION 

Based on the theories of flow and effortless attention (Bruya, 2010; 

Csikszentmihalyi, 1975), a user who is in the flow state exhibits a high degree of focused 

attention and concentration, but does so in an effortless, automatic and spontaneous 

manner. Under normal circumstances, as the demands for a task increase, a higher level 

of effort is required to maintain the same level of task efficacy (Kahneman, 1973). 

However, as illustrated in Figure 3.1, when a user achieves and sustains the flow state, 

the perceived or felt effort does not increase, and may even decrease, when task demands 

increase (Bruya, 2010). The subjective effort decreases or remains the same with 

increased task demands due to a very high level of automaticity, focused immersion, and 

autotelic experience achieved in the flow state. As long as the user maintains the flow 

state, the felt effort will decrease or remain low.  

In addition to the theories of flow and attention, the Transient Hypofrontality 

Theory (THT) proposes a mechanism of the neural substrates for altered states of 

consciousness; this theory is also based on the neuroanatomy of the consciousness and is 

39 

also composed of self-referential processing which is an attribute of the consciousness. 

The changes in the levels of consciousness have been localized in the prefrontal cortex. 

Because prefrontal cortex exists as one of the topmost layers of the cerebrum, any 

changes to the conscious experience should affect first and foremost in this structure of 

the brain (Ashby & Casale, 2002; Dienes & Perner, 1999).  

Figure 3.1. Effort vs. Demands in Effective Action in the Flow State, adapted from Bruya 

(2010) 

The neural mechanisms related to the downregulation of the mental activity is 

directly associated with the altered levels of the referential processing. The progressive 

shut down of the prefrontal hypoactivity contribute to the decrease in the self-reflection 

or self-referential processing. During the flow state, the mental functions computed at the 

level of the prefrontal cortex tend to decrease followed by a gradual decrease in the 

40 

consciousness (self-reflection) (Dietrich & Stoll, 2010).  The ability to process oneself 

from the surroundings decreases with a decrease in the mental load during high task 

attentional demands. 

To relate theories of flow, effortless attention, and transient hypofrontality to the 

functions at different regions of the human brain, we first review the functions that are 

specific to the four lobes of the human brain (see Figure 3.2): frontal, parietal, temporal, 

and occipital. The frontal, parietal, and temporal lobes are discussed because of their 

crucial role in cognitive processes. Their functions are provided in Table 3.1.  

Table 3.1. Functions of the Lobes of the Human Brain 

Human Brain Lobe Functions 

Frontal Lobe Planning, Motor/Physical movement, Emotion, Problem-

solving, Executive process 

Parietal Lobe Perception of stimuli associated with movement and 

recognition, Selective attentional processes 

Temporal Lobe Memory, Speech, Perception of stimuli, recognition of 

auditory stimuli 

Occipital Lobe Visual processes 

3.1.1. Frontal Lobe. The frontal lobe is functionally related to central executive 

processes (Sanei & Chambers, 2013). Frontal EEG activities are associated with 

information processing and stimuli generation for tasks involving cognitive execution 

process activation (Harmon‐Jones, 2003; Jenkins & Brown, 2014); they are also related 

to automatic processing and rewarding behavior (Stuss & Alexander, 2000; Fuster, 2000). 

41 

Thus, the frontal region plays an important role in the flow state because of automatic 

processing (i.e., arising from merging of awareness and action) of the task and the 

intrinsically rewarding or autotelic experience.  

A large number of studies have shown that the frontal cortex is involved in 

working memory processing of goal-directed tasks, irrespective of whether the task is 

related to reasoning, speech, or behavior (Fuster, 2000). The left frontal region of the 

brain is also related to positive emotional valence and motivation, while the right frontal 

region of the brain is related to negative emotion and withdrawal motivation (Afergan et 

al., 2014; Harmon‐Jones, 2003; Kalbfleisch & Gillmarten, 2013; Stuss, 2011). Hence, the 

left frontal lobe corresponds to the most significant region of the brain that relates to 

autotelic or intrinsically rewarding experience in the flow state. 

3.1.2. Parietal Lobe. The parietal cortex functionally supports the memory 

processes, visual attention and working memory (WM – short term memory) through 

selective attention-based mechanism (suppresses irrelevant and enhances relevant 

activities) (Brancucci, 2012; Hill & Schneider, 2006). WM refers to “short-term 

maintenance and manipulation of items” (Baddeley & Hitch, 1974, p. 45). Interactions 

between the frontal, temporal, and parietal lobes are considered crucial for various 

cognitive tasks (Jensen & Lisman, 2005). A growing evidence exists that frontal cortical 

activation is distributed on the frontal and parietal networks (Kondo et al., 2004; Osaka et 

al., 2004). In addition, using EEG, researchers found that the fronto-parietal network is 

involved in the visuospatial working memory (Sauseng et al., 2004).  A substantial 

decrease in the posterior parts of the brain (parietal cortex) occurs once the required skill 

has been acquired to perform the given cognitive task (Brancucci, 2012; Hill & 

42 

Schneider, 2006). Parietal lobes are expected to be less active or inactive during the flow 

state because of the inhibition of the self-related emotional processing (Gusnard et al., 

2001). 

Figure 3.2. Functions of Four Lobes of the Human Brain 

3.1.3. Temporal Lobe. The temporal region of the brain is involved in detecting 

visual and auditory stimuli, processing tactile, and memory storage, suggesting a critical 

role in the multimodal perceptual analysis (Olson et al., 2007; Hill & Schneider, 2006). 

Medial Temporal Lobe (MTL) is involved with working memory and can also be 

considered to measure cognitive load (Kumar & Kumar, 2016). Increase in the task load 

tends to decrease WM, which in turn leads to a decrease of activity in the frontal and 

temporal lobes (Axmacher et al., 2008). 

43 

Research studies found that with continuous practice of working memory tasks, 

activity decreases in the frontal, temporal, parietal, and occipital lobes (Axmacher et al., 

2008). An increased activity in the temporal region during the first-person shooter game 

co-related with high planning (highly sensitive to greater complexities). The game moves 

during temporal activation revealed active processing of information related to the game 

environment (Montag et al., 2012). Temporal lobes are specialized to perform object 

processing; these lobes are also activated during scrambling objects (puzzles), scenes, 

viewing objects, pictures, etc. (temporal lobe is involved in object learning). 

Previous studies have found that EEG signal frequencies (such as alpha, beta, and 

theta bands) correlate with different cognitive states (e.g., Berta et al., 2013; Chanel et al., 

2011; Ivanitsky et al., 2009). To better understand the neural correlates of flow, boredom, 

and anxiety experiences, EEG activities in different regions of the brain need to be 

converted into spectral band frequencies (see Section 2.4) and examined with respect to 

individual lobe functions (Brann et al., 2007). 

3.2. HYPOTHESIS DEVELOPMENT 

With an increase in the game/task difficulty, a change in the cognitive load can be 

observed. Theta, alpha and mid-beta over frontal, temporal, parietal, and occipital lobes 

are specifically sensitive to such changes (Ewing et al., 2016). Among all the spectral 

bands, theta, alpha, and beta (low-beta and mid-beta) are the bands that need to be 

analyzed for flow, boredom, and anxiety states (Plotnikov et al., 2012).  

3.2.1. Flow vs Resting: EEG Theta over Left Frontal Lobe. Theta (4-8 Hz) 

oscillations are characterized as low-frequency activity and are associated with central 

44 

executive processes (Berta et al., 2013; Müller-Putz et al., 2015). In specific, changes in 

the theta activity are related to working memory, memory load, emotional arousal, and 

impulsivity (Knyazev, 2007; Klimesch & Doppelmayr, 1996). The potential of EEG theta 

and alpha bands in the in the fronto-parietal network also reflect central executive 

processes (Sauseng et al., 2005). An increase in theta activity is associated with an 

increase in cognitive operations (Cunillera et al., 2012; Jenkins and Brown, 2014). A 

decrease in theta activity can be observed when the performance of a learned task 

improves, which results in increased familiarity with the task and effortlessness in 

execution (Knyazev, 2007). As one’s engagement with a game increases, there is a 

decrease in the density of theta oscillations over the frontal lobes (Li et al., 2014). So, we 

hypothesize that EEG theta activity in the left frontal region of the brain is lower in the 

flow state when compared to the resting state. 

H1: EEG theta activity in the left frontal region of the brain is lower in the flow 

state than in the resting state. 

3.2.2. Flow vs Resting: EEG Theta over Parietal Lobe. The flow state elicits 

reduced activity in the theta band, which is generally associated with a decrease in the 

mental workload (Léger et al., 2014). Reduction in the density of theta oscillations from 

the left side of the fronto-parietal region is associated with flow (de Manzano et al., 2010; 

Gusnard et al., 2001). Hence, we expect the theta activity in the frontal and parietal lobes 

to decrease when an individual is experiencing the flow state because automaticity arising 

from the merging of action and awareness results in felt effortlessness and reduced 

working memory load. Given that flow is associated with the left frontal-parietal region 

of the brain and theta activity is associated with cognitive load and working memory, we 

45 

hypothesize that based on the theories on flow and effortless attention, EEG theta activity 

in the left frontal and parietal lobes of the brain is lower in the flow state than in a resting 

state.  

H2: EEG theta activity in the left parietal region of the brain is lower in the flow 

state than in the resting state.  

3.2.3. Flow vs Boredom: EEG Theta over Frontal Lobe. Frontal and parietal 

lobes are expected to be active in the boredom state based on the literature (see section 

2.6.2). fMRI studies that focused on understanding the neural bases of the boredom state 

reveal the occurrence of brain activation over the frontal electrodes (Jiang et al., 2009; 

Mathiak et al., 2013). EEG theta activity acts as a “generic” index for mental load/effort 

due to its sensitivity, reliability, and specificity (Ewing et al., 2016). Theta increases with 

task difficulty and memory load and is low during the boredom state (McMahan et al., 

2014). Nacke et al (2011) demonstrated that EEG theta activity is high in the boredom 

state when compared to other user states of high cognitive load (Nacke et al., 2011). 

Further, theta activity has been examined over the frontal regions of the brain and found 

that boredom has higher cortical activation when compared to resting (D'angiulli et al., 

2012). In contrast, theta activity is high in boredom when compared to flow and anxiety 

(Berta et al., 2013). Amplitude of the theta and alpha bands are significantly higher 

during the boredom state when compared to the flow state. This can be due to the 

effortless theory of action and attention that has been explained above (see section 3.1). 

Based on theories of flow and effortlessness, the theta activity in the left frontal region of 

the brain is lower in the flow state when compared to the boredom state. 

46 

H3: EEG theta activity in the left frontal region of the brain is lower in the flow 

state than in the boredom state. 

3.2.4. Flow vs Anxiety: EEG Theta over Frontal-Temporal Network. The 

interactions between temporal lobes and prefrontal cortex are considered crucial for 

various cognitive and memory tasks. A decreased activity in the temporal lobes of the 

brain resembles a decrease in planned executions (Montag et al., 2012). Such a decrease 

related to EEG theta activity in the temporal region is related to automated response 

generation. EEG theta activity in the frontal and temporal regions is correlated negatively 

with high anxiety levels (Mizuki et al., 1992; Nakashima & Sato, 1992). Previous 

research found that if the task is consistent in nature, then even under high load 

conditions, the frontal and temporal activities decrease (Axmacher et al., 2008). A 

significant decrease was found in fronto-temporal regions during a state of anxiety. 

(Sachs et al., 2004). The activity in the temporal region of the brain decreases further in 

frustration or anxiety state when compared to resting, boredom, and flow states (Berta et 

al., 2013). Based on these findings, we hypothesize that the theta activity in the frontal-

temporal region of the brain is lower in the anxiety state when compared to the flow state. 

H4:  EEG theta activity in the frontal-temporal region of the brain is greater in the 

flow state than in the anxiety state. 

3.2.5. Flow vs Resting: EEG Alpha over Frontal Lobe.  Alpha (8-12 Hz) 

oscillations are characterized as medium-frequency activity (Berta et al., 2013); Müller-

Putz et al., 2015). These oscillations are associated with arousal, attention, and 

performance in memory tasks (Klimesch, 1999). The power of the alpha frequency band 

decreases with increasing task or executive demands that is termed as idling activity; this 

47 

decrease has been correlated with perceptual success (Sauseng et al., 2005; Kerr et al., 

2011; Fink et al., 2005; Ivanitsky et al., 2009); Pfurtscheller and Da Silva, 1999). The 

alpha activity correlates with relaxation and has an inverse correlation with arousal and 

attention (Knyazev, 2007). Alpha oscillations support the gating function and are active 

during the resting state in which people have their eyes closed, and they tend to become 

inactive when people open their eyes or hear familiar sounds (da Silva, 1991; Horne, 

1988; Toscani et al., 2010).  

A reduction in alpha activity represents increased attentional activity (Knyazev, 

2007; Schier, 2000; Treder et al., 2011). Salinas and Sejnowski (2001) showed that 

attention can not only lead to a decrease but also can lead to an increase in the firing of 

neurons. In addition, an increase in the player’s focus and concentration is supposed to be 

reflected in higher attentional demands (Klasen et al., 2011). Alpha synchronized activity 

can be interpreted as a neurophysiological correlate of decreased cortical activity 

(Ergenoglu et al., 2004), whereas alpha desynchronization is related to increased cortical 

activity. Individuals are able to sustain high attention and focused concentration in a 

spontaneous and effortless manner to achieve an autotelic experience during the flow 

state. When high attentional focus is sustained in the flow state, alpha desynchronization 

takes place to produce low theta. Hence, EEG alpha activity in the left frontal region of 

the brain will be lower in the flow state than in the resting state. 

H5: EEG alpha activity in the left frontal region of the brain is lower in the flow 

state than in the resting state. 

3.2.6. Flow vs Boredom: EEG Alpha over Frontal Lobe. Boredom occurs due 

to a mismatch between skill level and attentional capacity to carry out task requirements 

48 

(Berlyne, 1960; Csikszentmihalyi, 1975, 1992). According to the arousal and attentional 

theories, boredom is related to attentional failure with low level of arousal (Gerritsen et 

al., 2014; Pattyn et al., 2008; Eastwood et al., 2012). Task-unrelated thoughts are 

considered to correlate with boredom leading to attentional failure (Danckert & 

Merrifield, 2016). Boredom is also characterized as a “low arousal affective state” 

(Mikulas & Vodanovich, 1993). Geiwitz (1966) induced experimental boredom and 

found its association with low levels of arousal and attention (Geiwitz, 1966). Alpha 

increases during the state of boredom, meaning that attention is decreased (Tabatabaie et 

al., 2014). Alpha is high in the boredom state when compared to the flow state in the 

frontal region of the brain (Labonté-LeMoyne et al., 2016)]. Frontal alpha is high when 

demands are low but low when demands are high and excessive (Ewing et al., (2016). 

Alpha activity is high in boredom when compared to flow and anxiety (Berta et al., 

2013). The manipulation of game demands is also sensitive over temporal and frontal 

regions of the brain (Ewing et al., 2016). So, we hypothesize that alpha activity in the left 

frontal region of the brain is lower in the flow state when compared to the boredom state. 

H6: EEG alpha activity in the left frontal region of the brain is lower in the flow 

state than in the boredom state. 

3.2.7. Flow vs Resting: EEG Mid-Beta over Frontal Lobe. Beta (12-30 Hz) 

oscillations are characterized as high-frequency activity (Bekisz and Wróbel, 1999; 

Jenkins and Brown, 2014). Beta refers to the active attention state, often referred as 

alertness, and it increases with processing demands (Dietrich and Stoll, 2010; Horne, 

1988; Marr, 2001). Researchers found that dorsomedial prefrontal cortex (DLPFC) is 

associated with emotional processing related to oneself (own) and beta oscillations 

49 

represent such self-referential processes (cognitive processes associated with 

relating/processing information to oneself) (Gusnard et al., 2001; Ergenoglu et al., 2004). 

The beta band is usually considered the longest band due to its frequency range, i.e., 12-

30 Hz. Berta et al (2013) divided beta band into three sub-bands: low-beta (12-15 Hz), 

mid-beta (15-20 Hz), and high-beta (20-30 Hz) to perform more refined analysis on user 

states of experience (Berta el al., 2013). 

Mid-Beta desynchronization reflects a change in event-related information 

processing and performance (Klasen et al., 2011; Kramer, 2007), while synchronization 

is related with an altered existing cortical network (Klimesch, 1999). Mid-Beta activity 

decreases during sensory and information processing and this decreased activity supports 

the loss of alertness (Ergenoglu et al., 2004; Kramer, 2007). An increase in the beta 

activity is associated with a high level of vigilance in the task (Hartmann and Klimmt, 

2006) and cortical activation is accompanied by an increase in beta frequency activity 

(Barry et al., 2007; Bavelier et al., 2012; Dietrich & Stoll, 2010). In addition, mid-beta 

has been linked to the state of alertness and self-awareness. Mid-Beta occurrence in the 

left hemisphere has been found to correlate negatively with performance (Kramer, 2007; 

Berta et al., 2013). Hence, we hypothesize that EEG mid-beta activity in the left frontal 

region will be lower in the flow state than in the resting state. 

H7: EEG mid-beta activity in the left frontal region of the brain is lower in the 

flow state than in the resting state. 

3.2.8. Flow vs Boredom: EEG Mid-Beta over Frontal Lobe. Beta waves are 

consistently associated with attention and alertness (Tinguely et al., 2006) and increase 

with a feeling of spatial presence (Nacke, 2010). Mid-Beta in the left hemisphere was 

50 

found to correlate negatively with performance (Kramer, 2007). A high mid-beta power 

is expected to be low during the flow state given that it is linked to attentional focus 

based on the transient theory of the hypofrontality explained under the theoretical 

foundation (downregulation of self-referential processes during flow state) (Dietrich & 

Stoll, 2010). A research study conducted by Tabatabaie et al. (2014) found low beta 

power over the dorsolateral prefrontal cortex (DLPFC) when subjects listened to self-

reported boring music (Tabatabaie et al., 2014). Mid-Beta activity is low in the flow state 

when boredom over the frontal regions (Berta et al., 2013; Dietrich & Stoll, 2010). The 

states of alertness and self-awareness have also been linked to the mid-beta range 

(Kramer, 2007) whereas reduced self-awareness is a part of the flow state 

(Csikszentmihalyi, 1999). An inconsistency exists in understanding the mid-beta activity; 

we base our discussions and findings on mid-beta’s relation to alertness and attentional 

levels of the game research. So, based on the transient theory of the hypofrontality above 

findings related to the video games we hypothesize that mid-beta activity in the left 

frontal region of the brain is lower in the flow state when compared to the boredom state. 

H8: EEG mid-beta activity in the left frontal region of the brain is lower in the 

flow state than in the boredom state. 

3.2.9. Flow vs Resting: EEG Alpha over Occipital Lobe. Visual information 

processing represents a crucial aspect in cognitive performance (Klimesch, 1999). The 

occipital regions of the human brain record dominant activity of visual attention during 

application of rigorous visual strategies on a given task (Goldman et al., 2002). The alpha 

band activity is the most prominent EEG signal recorded in the occipital portion of the 

brain, representing visual attentional processes (Teplan, 2002). The occipital region has 

51 

been considered as an index for visual attention and general arousal (Sadato et al., 1998).   

Alpha desynchronization reflects an activated neuronal population resulting from focused 

attention (Ergenoglu et al., 2004). Given that the occipital region is associated with visual 

attention, alpha desynchronization that results from enhanced visual information 

processing during the flow state produces low theta in the frontal region (Cahn & Polich, 

2013; Gerě & Jaušcvec, 1999). Todd and Marois (2004) found that an increase in the 

player’s focus is accompanied by deactivation in the frontal cortex and activation in 

visual areas (occipital lobe). Hence, we hypothesize that EEG alpha activity in the 

occipital region will be lower in the flow state than in the resting state. 

H9: EEG alpha activity in the occipital region of the brain is lower in the flow 

state than in the resting state. 

In summary, we hypothesize that alpha activity in the left frontal and occipital 

lobes decreases during the state of flow when compared to the resting and boredom 

states. This phenomenon arises because of focused attention and concentration during the 

flow state, where alpha desynchronization in the left frontal region is associated with a 

high level of sustained attentional focus, and alpha desynchronization in the occipital 

region is associated with the automatic processing of the visual stimuli of the task.  The 

theta activity in the left frontal and parietal lobes also decreases during the flow state 

when compared to the resting and boredom states because of reduced working memory 

load or decreased felt effort to process the task when one is in the flow state. The theta 

activity decreases further over the frontal-temporal region in the anxiety state when 

compared to the flow state. The mid-beta activity also decreases in the left frontal lobes 

during the flow state because of deactivation of the self-referential processes. The 

52 

hypotheses for this research focus on understanding the relationship between theta, alpha, 

and mid-beta activity over the frontal, temporal, parietal, and occipital regions of the 

brain. Table 3.2 summarizes the hypotheses. 

Table 3.2. Study Hypotheses 

EEG Band 

Activity 

Human Brain 

Lobe 

Hypothesis 

Theta 

Left Frontal H1: EEG theta activity in the left frontal region of 

the brain is lower in the flow state than in the 

resting state. 

Left Parietal H2: EEG theta activity in the left parietal region 

of the brain is lower in the flow state than in the 

resting state. 

Left Frontal H3: EEG theta activity in the left frontal region of 

the brain is lower in the flow state than in the 

boredom state. 

Frontal-

Temporal 

H4: EEG theta activity in the frontal-temporal 

region of the brain is greater in the flow state than 

in the anxiety state. 

Alpha 

Left Frontal 

H5: EEG alpha activity in the left frontal region 

of the brain is lower in the flow state than in the 

resting state. 

H6: EEG alpha activity in the left frontal region 

of the brain is lower in the flow state than in the 

boredom state. 

Mid-Beta 

H7: EEG mid-beta activity in the left frontal 

region of the brain is lower in the flow state than 

in the resting state. 

H8: EEG mid-beta activity in the left frontal 

region of the brain is lower in the flow state than 

in the boredom state. 

Alpha Occipital H9: EEG alpha activity in the occipital region of 

the brain is lower in the flow state than in the 

resting state. 

53 

4. RESEARCH METHODOLOGY 

 In this section, details regarding the experimental design, research procedures, 

measurement, and pilot tests conducted will be provided. 

4.1. EXPERIMENTAL DESIGN  

A within-subject experimental design was used to induce specific states of user 

experience. A within-subject factor is one where the same group of subjects experience 

all the evoked user states. Since the goal of this study is to assess the flow state of an 

individual versus the resting, boredom, and anxiety states, it is more appropriate to use 

within-subject experimental design, so subjects serve as their own control. However, we 

did not counterbalance the order of the levels of the gameplay, which were used to induce 

different states of user experience. A study has shown that players are more likely to 

build their skills, and over time achieve a state of flow. In other words, it is harder to 

achieve the intended states of user experience by randomizing the task difficulty rather 

than increasing the difficulty linearly (Nacke & Lindley, 2008). If players are faced with 

an initial difficulty that surpasses their skill level, the anxiety of the player could make it 

very unlikely or difficult to achieve a state of flow later (Nacke & Lindley, 2008).  

A laboratory experiment was used to induce user experience states by building on 

the experimental design by Berta et al. (2013) and using EEG technology to capture the 

brain activity during these states. Berta et al. used a 4-electrode EEG system and a simple 

battle plane video game for their study, whereas a 64-electrode Cognionics EEG system 

(http://www.cognionics.com/) was used for the current study. We adapted their design to 

54 

the context of our study and used the video game, Tetris1. After a comprehensive review 

involving many video games and piloting them, we chose the Tetris game because (1) it 

has the flexibility to enable us to induce different states of user experience, (2) the 

gaming environment can be controlled, i.e., the researcher has the flexibility to limit the 

duration of gameplay, (3) it allows us to select or specify the difficulty level, and (4) it 

has the ability to induce the flow state. In addition, it is a simple game that most people 

are familiar with, which helps to reduce the amount of time spent on training in the 

experiment. We recruited 44 students to participate in this experiment. The study is 

comprised of three phases: pre-experiment, experiment, and post-experiment. 

4.2. RESEARCH PROCEDURE 

Pre-Experimental Phase: During the pre-experimental phase, we provided the 

subjects with training to ensure they have a clear understanding of the rules and controls 

of the game. We explained the game as well as the various keyboard and mouse 

operations to them (refer to the Appendix) during the training session. The subjects were 

then provided with the opportunity to practice playing the game by starting from level 1. 

Subjects completed one gameplay (i.e., until all blocks in Tetris stacked up fully) before 

starting the experimental phase. 

Experimental Phase: This research study was conducted in a university computer 

lab. The research procedures are as follows: The subjects were asked to fill out a pre-

study questionnaire to capture their orientation towards gaming. We operationalized the 

1  For an introduction of the Tetris game, refer to https://en.wikipedia.org/wiki/Tetris [Accessed on Feb 5, 2018] 

55 

resting state as a baseline by having the subject look at a small cross on a blank screen of 

the same color as the background of the game used in the experiment; subjects were 

asked to stay calm and relaxed during the resting state, which lasted for 60 seconds. To 

induce the boredom state (with the least challenge level), subjects were asked to play the 

first level (Level 1) of the Tetris game with the mouse clicks disabled so that the subject 

cannot shorten (or shortcut) the wait time for the falling block to reach the base. A three-

minute interval of subject’s EEG activity was recorded. A self-reported assessment of 

user experience was carried out using a questionnaire to validate whether the subjects 

experienced boredom during the three-minute gameplay. To induce the flow state, 

subjects were asked to play the Tetris game at level 5 without giving them any time limit. 

From our pilot study, it was found that starting at level 5 is a good way to elicit flow in 

the game. The game level continued to increase as subjects improved their skills in 

playing the game. An assessment of user experience was carried out using a self-reported 

questionnaire to verify whether the subjects experienced flow during the gameplay. To 

induce the state of anxiety, subjects were asked to play the Tetris game two times at level 

15 and two times at level 20 where the challenge level is substantially higher than the 

subject’s skill level. An assessment of user experience was carried out using a self-

reported questionnaire to verify whether the subjects experienced anxiety during the 

gameplay. Figure 4.1 displays the different levels of Tetris to evoke the required states of 

user experience. At the end of the study, subjects were asked to fill a background 

questionnaire that included participant demographics (e.g., age, gender, education), and 

gaming habits (e.g., how often participants play games and the number of hours per week 

spent playing games). 

56 

Figure 4.1. Tetris Game at Different Levels to Evoke User Experience States 

Post-Experimental Phase: After completing the gameplay, the subjects proceeded 

to the post-experimental phase to complete a retrospective process tracing that helped 

researchers to identify the time segments in which subjects were experiencing boredom, 

flow, and anxiety during the experimental stage. As shown in figure 4.2, during 

retrospective process tracing, the subjects talked out loud to articulate and verbalize their 

user experience while viewing a video recording of their gameplay session. The best 30-

second segments of boredom, flow, and anxiety experiences were identified and 

compared with the most stable 30-second segment of the resting condition, which served 

as a baseline for the data analysis.  

4.3. MEASUREMENT  

In this study, we used a Cognionics 64- channel dry EEG headset to collect the 

neurophysiological data while gaming (as shown in Figure 4.3). The recorded EEG has 

64 Ag–AgCl pin-type active electrodes mounted in a BioSemi stretch-lycra head cap. 

57 

Figure 4.2. Retrospective Process Tracing to Extract a Best 30-Second Segment 

Electrodes were positioned using the 10–20 system and recorded activity from the 

following sites: frontal pole (FPz, FP1 and FP2), anterior-frontal (AFz, AF3, AF4, AF7 

and AF8), frontal (Fz, F1, F2, F3, F4, F5, F6, F7 and F8), fronto-central (FCz, FC1, FC2, 

FC3, FC4, FC5 and FC6), central (Cz, C1, C2, C3, C4, C5 and C6), temporal (FT7, FT8, 

T7, T8, TP7 and TP8), parieto-central (CPz, CP1, CP2, CP3, CP4, CP5 and CP6), 

parietal (Pz, P1, P2, P3, P4, P5, P6, P7, P8, P9 and P10), occipito-parietal (POz, PO3, 

PO4, PO7 and PO8) and occipital (Oz, O1, O2 ad Iz). The data were visually inspected 

for artifacts (Fairclough et al., 2013). EEG oscillations are recorded as waveforms and are 

manifestations of the activity of neuronal population of the brain; these oscillations are 

recorded using flex sensors embedded in the EEG headset (Pizzagalli, 2007). These 

oscillations represent a subset of the brain’s electrical activity at a particular point of 

time. 

58 

Figure 4.3. A Subject Wearing 64-Channel EEG Device During the Experiment 

As shown in Figure 4.4, the device was placed on the subject’s scalp during the 

experiment, following a 10-20 positioning system (Luu & Ferree, 2005). The “10” and 

“20” refer to the fact that the actual distances between adjacent electrodes are either 10% 

or 20% respectively of the total front-back or right-left length of the surface of the skull 

(Hondrou & Caridakis, 2012). A sampling rate of 512 Hz was used to capture the data for 

brain activities. 

4.4. PILOT TESTS 

We conducted five pilot studies to test the following: Browser compatibility with 

Tetris game website (ad-free), order of stimuli using Tobii Studio, EEG markers using 

Cognionics software, evoked user states of experience (boredom, flow, and anxiety), 

survey questionnaire items, randomization of tasks, and experimental procedures. 

59 

The first pilot study was used to test and fine-tune the desired game level for 

evoking boredom, flow, and anxiety user experience states. Results confirmed the 

generation of boredom state during level 1 and flow state during level 5 but not all 

subjects experience the anxiety state during level 15 of the gameplay. Among 8 pilot 

subjects, few claimed to experience flow, and a few of them claimed to experience apathy 

(disengagement) at level 15. Subjects experienced the flow state because of their 

proficiency and interest to play Tetris since childhood. Subjects who experienced apathy 

or disengagement expressed that it is due to a sudden and un-notified change in the 

challenge level. In order to induce anxiety and control external affecting factors, anxiety 

level has been redesigned with a combination of level 15 (2 times) and level 20 (2 times). 

Participants also reported discomfort while reading instructions to navigate from one step 

to other while performing the study; they felt that navigation instructions were wordy. 

The second pilot study was conducted to test the modified design with 8 pilot 

subjects and the results showed that participants experienced boredom during level 1, 

flow during level 5, and anxiety during level 15 or 20 or both. Instructions given to 

participants to move to the next step in the study have been shortened and simplified. It 

has been identified that participants were willing to receive verbal instructions rather than 

reading instructions in text form. We had two designs for capturing baseline (resting 

state): baseline 1 - blank screen with a white background and a black crosshair (size 10) 

at center, and baseline 2 - blank screen with a black background (matching to Tetris 

background) and a white crosshair (size 12) at center. Baseline 1 has been tested during 

the first pilot study and baseline 2 has been tested during the second pilot study. 

Comparing pilot 1 and pilot 2, results showed that majority of the subjects were more 

60 

comfortable staring at the white crosshair on a black screen (baseline 2) and claimed to 

be more relaxed. Browser configurations and compatibility with Tobii studio and an ad-

free Tetris game website have also been tested. We found that Internet Explorer does not 

always succeed in portraying an ad-free Tetris website. So with help of Tobii tech 

support team, Mozilla Firefox plug-ins were downloaded and configured, and Tetris 

game website was made completely ad-free and functioned without any flaw. 

Figure 4.4. EEG Headset 10/20 Positioning System 

61 

The third pilot study with 5 subjects was used to test stimuli generation, system 

configurations, practice EEG markers, and step-by-step process for fixing the EEG 

headset onto participants’ head following the 10-20 international system. In addition, 

instructions provided during the training stage were bettered and additional information 

was provided to participants to prevent unexpected pause/resume during the study. 

Since participants were all male and had experience in gaming, a pre-study 

questionnaire was added to capture their perception towards gaming. We enhanced 

the flow related items in the survey questionnaire and added 4 items for validation. Task 

randomization or counter-balancing was also piloted. Majority of the participants faced 

discomfort with counter-balancing and were not able to experience a smooth transition 

from one level to another. Due to these reasons, half of the pilot subjects struggled to 

build their skills and did not achieve a flow state. For example, a participant who played 

Tetris at level 15 and 20 experienced anxiety and frustration and claimed that he did not 

experience boredom and flow during level 1 and 5 due to the intense anxiety that has 

been experienced at beginning of the study. 

The fourth pilot study with 5 participants was used to test the experimental 

procedures and conditions. When a participant was in the middle of the study, there was a 

knock on the laboratory door and a participant got deviated from the study and we were 

forced to pause and redo the study; Warning labels saying “Quiet Zone” to avoid noise 

and “Experiment in Progress – Please do not Knock” to avoid unexpected 

visitors/disturbances were designed and put in place. During this pilot test, we also tested 

the necessity of randomization of the tasks/stimuli. The tasks were not counterbalanced 

during this pilot study and it was found that all participants experienced their desired 

62 

states of user experience due to the linear progression of difficulty because players were 

more likely to build their skills over time and achieved a flow state. 

Finally, a fifth pilot study had been conducted to test the stability of all modified 

and implemented changes related to the software involved, EEG headset, experimental 

procedures, user experience states, no counterbalancing, and laboratory conditions. 

Results suggested that all conditions related to the experiment have been standardized, 

desired user states of experiences were achieved, and no issues with browser and gaming 

website were found. 

63 

5. DATA ANALYSIS AND RESULTS 

The sample size for the study is 44 and the duration of the study is approximately 

90 minutes. Subjects were both undergraduate and graduate students from Missouri 

University of Science & Technology. The sample size is calculated using G*Power 

statistical power analysis (http://www.gpower.hhu.de/). Among the t-tests family, Means 

statistical test was considered: Difference between two dependent means (matched pairs) 

and the type of power analysis used is A priori: Compute required sample size – given 

alpha, power, and effect size. As shown in Figure 5.1, sample size is calculated 

considering input parameters: tails as one, effect size, f as 0.5, alpha (α) error probability 

as 0.05, power (1- β (beta) error probability) as 0.90. Thus, our total sample size is 

calculated as 45. We limited this study to only male subjects in order to control for 

gender. Participants were recruited through class announcements and email contact. 

Figure 5.1. Calculating Sample Size Using G*Power Statistical Power Analysis 

64 

Paired sample t-test was adopted in this study. Paired sample t-test is a statistical 

procedure used to determine whether the mean difference between two sets of 

observations is zero. Each subject or entity is measured twice resulting in pairs of 

observations. Paired sample t-test is the appropriate technique in this research because 

this study is within-subject (i.e., comparison of means of brain activity between the flow 

state and the resting, boredom and anxiety states). All 44 participants were male and were 

aged between 18 and 30. Pair t-test analysis and validity checks on the user’s state of 

experience were conducted. We used IBM SPSS Statistics 24.0 software to analyze the 

data collected.  

5.1. DATA PROCESSING STEPS 

EEG being one of the least invasive BCI technologies holds promise as a 

neuroimaging technology with excellent neural activity resolution in time domain. 

(Hairston et al., 2014). It is not possible to record EEG data without any contamination 

and hence researchers must be careful while considering artifacts in EEG studies. Some 

limitations of EEG are: (i) lacking spatial resolution, and (ii) cortical electrical activity is 

extremely small in magnitude when compared to muscle movements across the head. 

Therefore, participant movements introduce artifacts of high-frequency and magnitude 

into the EEG data (Minas et al., 2014). Generally, EEG artifacts are classified as 

biological and non-biological artifacts; major sources of biological artifacts are 

participants’ muscle activities, eye blinks and eye movements, and heartbeat; major 

sources for non-biological artifacts are primarily external electrical noise, electric lights, 

computer interference, poor subject grounding, and poor electrode contacts (Harmon-

65 

Jones and Peterson, 2009; Pizzagalli, 2007). As mentioned above, one cannot obtain data 

that is completely free of artifacts. Thus, measures need to be taken to control 

experimental environment and detect the artifacts in EEG signals. 

5.2. DATA ANALYSIS STEPS 

The detailed steps implemented for processing the EEG data are explained below 

in a stepwise manner. The EEG data obtained from the experimental results have been 

analyzed using Brain Vision Analyzer (version 2.1). 

Changing Sampling Rate: The initial sampling rate while setting up the 

Cognionics system in experimental stage is 500 Hz. An even frequency resolution can be 

achieved by having a sampling frequency that is a power of 2, i.e., 512 or 256 Hz instead 

500 Hz (Lin et al., 2007). So, to obtain more fine-grained resolution, downsampling 

(number of samples per second have been decreased) to 256 HZ has been performed 

applying spline interpolation (see Figure 5.2).  

Figure 5.2. Changing Sampling Rate - Downsampling 

66 

Optimizing EEG Channel Selection: Generally, multichannel EEG is used in BCI; 

performing the channel selection enhances the signal processing accuracy by discarding 

irrelevant channels and promoting relevant channels (Arvaneh et al., 2011). In this study, 

we have 5 channels which do not contribute to neural activity analysis and these channels 

are eliminated. Figure 5.3. depicts the channel optimization process. Such customized 

approach can lead to best signal processing and classification accuracy. 

Figure 5.3. Optimizing Channel Selection 

Raw Data Inspection/Artifact Rejection: Raw Data Inspection is used for marking 

artifacts like body movements, environmental noise, eye blinks, and eye movements; it is 

also sensitive to large offset voltages. These marked data portions are considered as “bad 

67 

intervals” and are rejected by ocular correction ICA (Independent Component Analysis) 

based on the rejection criteria (Plank, 2013). As an initial step, an automatic raw data 

inspection was applied using a built-in algorithm of the Brain Vision Analyzer in a semi-

automatic mode at the individual channel level. This algorithm excludes intervals of 200 

ms if the voltage of an activity exceeds 50 μV/ms or if it is less than 0.5 μV for a time 

frame of 100 ms (Figure 5.4 – 5.7) (Ulrich & Hewig, 2014). Implementing this technique 

in a semi-automatic mode not only helps to discard artifacts but also aids to inspect the 

data manually (Beste et al., 2015). Figure 5.4 explains the inspection mode as semi-

automatic for raw data inspection process. Figure 5.5 and 5.6 provides information 

related to maximum and minimum voltage criteria. Figure 5.7 is the EEG signal 

obtained after performing raw data inspection. 

Figure 5.4. Raw Data Inspection: Inspection Mode 

68 

Figure 5.5. Raw Data Inspection: Maximum Voltage Criteria_1 

Figure 5.6. Raw Data Inspection: Minimum Voltage Criteria_2 

Figure 5.7. EEG Signal After Raw Data Inspection 

69 

Ocular Correction ICA: Among the EEG artifacts, ocular or eye movements and 

eye blinks are considered the most common and notorious artifacts (Minas et al., 2014). 

These ocular artifacts pose serious problems for interpretation and analysis of EEG 

signals and can be removed using Ocular Correction ICA.  

The regression-based method is the most popular among all Ocular Artifact 

(OA) removal approaches in the time-frequency domain (Croft & Barry, 2000a; Croft & 

Barry, 2000b). Regression-based methods can reduce ocular artifacts very effectively if 

they employ ocular EOG (Electrooculography measuring eye movement) channels (Li 

et al., 2006).  Ocular Correction ICA is not completely dependent on ocular channels (as 

is, in turn, the regression-based Ocular Correction); the ICA algorithm is not fully reliant 

on ocular channels and delivers robust components for vertical and horizontal eye 

movements with scalp channels as well (Plank, 2013). Therefore, in absence of dedicated 

ocular channels, Brain Vision Analyzer recommends using scalp channels that report 

respective artifacts adequately. For detecting and rejecting vertical movement (VEOG), 

AFF5h has been considered as a common reference (see Figure 5.9). Generally, it is 

recommended to perform Ocular Correction ICA in semi-automatic mode and assess 

carefully and confirm the selected components as ocular artifacts. Figure 5.8 represents 

the mode selection for the ocular correction ICA. Figure 5.9 represents the reference 

channel selection for the and Figure 5.10 represents process of identifying and removing 

eye-blinks while performing ocular correction ICA. 

70 

Figure 5.8. Ocular Correction ICA: Mode Selection 

Figure 5.9. Ocular Correction ICA: Reference Channel Selection 

Figure 5.10. Ocular Correction ICA: Identifying and Accepting Eye-Blinks 

71 

Filtering: Applying digital filters is considered a common approach to reject 

EEG epochs containing artifacts with certain pre-selected voltage threshold. However, 

the amount of data may become unacceptable when muscle movements and blinks 

occur too frequently in some subjects (Small, 1971; Li and Principe, 2006). To filter the 

selected voltage, Infinite Impulse Response (IIR) filters are applied (Sanei & 

Chambers, 2007; Wang et al., 2011) (see Figure 5.11). IIR filters are digital filters used 

in digital signal processing applications. As shown in Figure 5.11, the recorded EEG 

signals were analog bandpass filters between 0.1 Hz (Low Pass Filter) and 100 Hz 

(High Pass Filter); additionally, notch filter was applied at 60 Hz to substantially 

remove external noise related to line power frequencies. 

Figure 5.11. Applying Infinite Impulse Response Filters 

72 

Segmentation: EEG data can be divided into interval-based epochs to perform 

further analysis (Bender et al., 2004; Nickel et al., 2006). The processed data is 

segmented into four divisions based on retrospective process tracing in the experiment 

stage representing the time frames of experienced user states. As, shown in Figures 

5.12 and 5.13, the corrected data has been used to set the newly segmented data 

manually with respective start and end timestamps (resting, boredom, flow, anxiety); 

each of the 30 second EEG epochs have been further divided into 100 equal segments 

and were averaged to obtain enhanced accuracy in results. Figure 5.12 represents the 

manual division options for segmentation and Figure 5.13 represents the specific 

timeframes of each user’s state. 

Figure 5.12. EEG Signal Segmentation: Manual Division 

73 

Figure 5.13. EEG Signal Segmentation: Time Frames of User’s States 

Fast Fourier Transformation (FFT): The segmented EEG signals are in time-

domain (i.e., time on the x-axis); to perform spectral band analysis, these EEG signals 

need to be converted into frequency-domain (i.e., frequency on x-axis) (Wang et al., 

2011). FFT decomposes the time domain signals into frequency domain. By using a 

built-in algorithm in Brain Vision Analyzer, FFT has been applied to transform the 

time-domain EEG epochs into equivalent frequency-domain epochs. As shown in figure 

5.14, the FFT values of theta, alpha, and mid-beta for resting, boredom, flow, and 

anxiety were extracted using FFT band export option provided by Brain Vision 

Analyzer. The mean values of EEG power in different frequency bands (theta, alpha, and 

mid-beta) and at different brain regions (frontal, temporal, parietal, and occipital) were 

calculated to identify the neural correlates of the flow state (Kubota et al., 2001). 

Electrodes in the left frontal region (i.e., AFF1 (F1), AFF3 (F3), and AFF5 (F5)), left 

parietal region (i.e., CPP1h(P1), CPP3h(P3), CPP5h(P5), CPP7h(P7)), and occipital 

74 

region (i.e.., O1h(O1), Oz(Oz), O2h(O2)) were pooled to form a cluster. Finally, paired t-

tests were performed to assess the hypotheses. 

Figure 5.14. Exporting FFT Values for Theta Spectral Band 

5.3. RESULTS 

Table 5.1 shows the paired t-test results that compare the flow, resting (baseline), 

boredom and anxiety states. The results suggest that EEG power for theta, alpha, and 

mid-beta in the left frontal region is significantly lower in the flow state when compared 

to the resting and boredom states (p<0.05 for theta, alpha, and mid-beta bands). EEG 

theta power in the left parietal region is significantly lower in the flow state when 

compared to the resting state. EEG theta activity in the frontal-temporal region is lower in 

the anxiety state when compared with flow state. EEG alpha activity in the occipital 

75 

region is significantly lower in the flow state when compared to the resting state 

(p<0.05). Hence all hypotheses are supported. 

Table 5.1. Results of Paired t-tests for Neural Correlates 

Hypothesis Band and Lobe Experience 

State Mean S.D. t-value 

p-value 

(1-tail sig.) 

H1 

Theta - Left 

Frontal 

Flow 8.753 2.627 -2.026 0.02 

Resting 11.95 10.644 

H2 Theta - Left 

Parietal 

Flow 8.456 3.742 -2.217 0.02 

Resting 13.68 15.179 

H3 Theta - Left 

Frontal 

Flow 8.573 2.627 -1.666 0.05 

Boredom 12.482 15.361 

H4 

Theta - 

Frontal-

Temporal 

Flow 10.338 6.514 

1.703 0.05 Anxiety 

8.467 10.185 

H5 Alpha - Left 

Frontal 

Flow 6.31 2.035 -2.181 0.02 

Resting 9.102 8.646 

H6 Alpha - Left 

Frontal 

Flow 6.31 2.035 -2.164 0.02 

Boredom 7.779 5.108 

H7 Mid-Beta - 

Left Frontal 

Flow 4.117 1.217 -1.643 0.05 

Resting 5.858 7.048 

H8 Flow 4.117 1.217 

-2.136 0.02 Boredom 4.7028 2.074 

H9 Alpha – 

Occipital 

Flow  6.212 3.849 -1.743 0.04 

Resting 8.212 7.175 

76 

A secondary analysis has been performed comparing EEG theta, alpha and mid-

beta bands potential during boredom and anxiety states with resting state over the left 

frontal region of the brain. Table 5.2 shows the secondary analysis paired t-test results 

that compare the boredom and anxiety states with the resting (baseline) state. The 

variation between the boredom and the resting state is not statistically significant during 

theta, alpha, and mid-beta bands. Anxiety when compared to the resting/baseline is 

statistically significant in the theta and alpha bands but not during mid-beta band. The 

change in the levels of the cognitive load and attention can be differentiated between 

anxiety and resting states when compared to the boredom and resting states.  

When a user is in the flow state, there is a decrease in the theta band activity that 

is associated with a reduction in cognitive load because the theta frequency is associated 

with working memory and mental load (Knyazev, 2007). As the performance of a learned 

task improves during the flow state, the theta activity in the left frontal-parietal network 

decreases, which corresponds to a decrease in the mental workload to carry out the task 

(De Manzano et al., 2010). A decrease in the theta frequency activity during high task 

demands is associated with effortless attention (De Manzano et al., 2010). When a user is 

in the flow state, a decrease in the alpha band activity represents an increase in the task 

demand (Fink et al., 2005; Ivanitsky et al., 2009). The activity of alpha is inversely 

correlated with the underlying cortical processes that are associated with arousal and 

attention (Knyazev, 2007). The observed desynchronization of alpha indicates that users 

experience effortlessly high attention and high arousal during the flow state to meet high 

task demands (Knyazev, 2007). Frontal alpha has commonly been associated with 

77 

mindfulness (Pfurtscheller et al., (2005) and frontal alpha asymmetry has been found to 

be linked to arousal in gameplay (Davidson et al., 2003). 

          Table 5.2. Secondary Analysis Results of Paired t-test for Neural Correlates 

EEG Band Human Brain 

Lobe 

Experience 

State 

Mean S.D. t-value p-value 

(2-tail sig.) 

Theta 

Left Frontal 

Lobe 

Boredom 12.482 15.361 0.305 0.76 

Resting 11.95 10.644 

Anxiety  8.495 3.385 -2.157 0.04 

Resting 11.95 10.644 

Alpha 

Boredom 7.779 5.108 -1.237 0.22 

Resting 9.102 8.646 

Anxiety  6.349 2.443 -2.109 0.04 

Resting 9.102 8.646 

Mid-Beta 

Boredom 4.702 2.074 -1.151 0.24 

Resting 5.858 7.048 

Anxiety  4.236 1.463 -1.511 0.12 

Resting 5.858 7.048 

The occipital region of the brain is highly active when performing a cognitive task 

that requires the implementation of visual strategies (Gerě & Jaušcvec, 1999). Alpha 

78 

activity and visual attention processes in the occipital region correspond negatively with 

each other (Ahn et al., 2013; Ergenoglu et al., 2004). Teplan explained that alpha activity 

heightens in the eyes-closed condition and reduces in the eyes-open condition (Teplan, 

2002). A decrement in alpha activity during active states is known as alpha 

desynchronization. During eyes-closed condition, the visual processing is minimal or 

absent, whereas eyes-open condition involves a high-level visual processing of the 

surroundings and tasks, leading to an increase in visual attention and a decrease in alpha 

activity (Knyazev, 2007; Schier, 2000). When a task involves the application of visual 

strategies, a decrease in alpha activity in the occipital region of the brain is observed due 

to visual processes (Gerě & Jaušcvec, 1999). Similarly, alpha activity is decreased in the 

flow state (as compared to resting and boredom states), because it demands a high level 

of focus and visual attention for a given task (Barry et al., 2007). According to the theory 

of effortless attention, during the flow state, a decrease in the alpha frequency of the 

occipital region and a decrease in the theta frequency of the frontal theta occur without 

any reduction in user performance (Bruya, 2010). 

When a user is in the flow state, a decrease in the mid-beta band activity 

represents a decrease in active attention with an increase in the task demand (Jenkins and 

Brown, 2014). The activity of mid-beta is related to alertness or self-consciousness levels 

(Kramer, 2007) and positively correlates with the underlying cortical activity and 

negatively with performance (Dietrich & Stoll, 2010). This desynchronization of mid-

beta together with alpha desynchronization means participant experiences effortless 

focused attention, and relaxation without feeling one-self during the flow state to meet 

high task demands (Jung et al., 2000; Guo et al., 2016; Ergenoglu et al., 2004). Frontal 

79 

mid-beta has commonly been associated with vigilance levels involved in a task; and has 

been found to be linked to self-consciousness in gameplay (Hartmann & Klimmt, 2006; 

Kramer, 2007).  

The results obtained for mid-beta activity were significant for brain activity 

decrease in the flow state when compared to resting and boredom states. Berta et al 

(2013) while performing the spectral characterization of video-gaming experience 

(specifically flow, a key element in gaming experience) found that mid-beta discriminates 

gaming from other tasks (Berta et al., 2013). Results obtained are in line with previous 

research studies. 

80 

6. DISCUSSIONS OF RESULTS 

The theory of effortless attention is in line with the theory of flow; these theories 

emphasize that users need to have the capability or skill to carry out a task in order to 

perceive effortless attention and autotelic experience (Csikszentmihalyi, 1975; 

Csikszentmihalyi & LeFevre, 1989). When a user is in the flow state, their alpha activity 

in the left frontal and occipital regions of the brain is low because of the high level of 

attention that is focused on the task at hand. Some researchers have found moderators for 

the effect of challenge-skill balance on flow. For example, if the perceived importance of 

the task is not low (i.e., moderate or high), flow can occur when the skill is higher than 

the challenge (Engeser & Rheinberg, 2008). Having a skill level that is higher than the 

level of challenge facilitates the emergence of effortless attention in the flow state where 

a user experiences a state of high attention that is effortless and autotelic in nature 

(Bruya, 2010; Dehaene et al., 1998; Nakamura & Csikszentmihalyi, 2014).  

Effortless attention in the flow state gives rise to low theta activity in the left 

frontal region of the brain because the working memory load is decreased when one is 

experiencing flow. In other words, there is a decrease in theta activity in the left frontal 

region due to effortless or reduced action and attention, along with automaticity and 

spontaneity, even during high task demands. Flow and automaticity share several 

commonalities: transcended negative aspects of self, reduced felt effort, and positive 

experience (Bargh & Ferguson, 2000). Bruya (2010) has conceptualized effortlessness as 

spontaneity. Hence, the increase in performance during the flow state suggests a close 

link between expert performance and effortlessness. Although it involves intense mental 

81 

activities to learn a highly refined skill over an extended period of time, task execution 

becomes effortless during the flow state (Davidson et al., 2003). Flow also contributes to 

exploratory behavior, creativity, and positive subjective behavior (Chen, 2006; Zaman et 

al., 2010). The optimal performance during the flow state is the result of high (but 

effortless) attention, decreased cognitive load, and a shutdown of external distractions by 

the user (Dietrich & Stoll, 2010). From the above explanations, it can be deduced that a 

person in the flow state experiences effortlessness, immersion, concentration, intrinsic 

rewards, expert performance (increased level of learning), arousal, spontaneity, and 

automaticity.  

The correlates of the boredom state derived from the arousal and attentional 

theories are in line with the neural correlates that was obtained through this EEG study. 

Firstly, when a user is in the boredom state, their alpha activity in the left frontal region 

of the brain is high, representing a low attentional level or failure of attention (Fisher, 

1993). The alpha activity is negatively correlated with attention. This failure of attention 

in the boredom state arises from a mismatch between challenge and skill (challenge < 

skill). In our study, participants were disinterested due to the low challenge level (i.e., 

Tetris at Level 1) and were not able to engage with the simulated environment. In such 

cases, participants tend to exhibit withdrawal tendency with a low-goal directed behavior 

and task-unrelated thoughts (Danckert & Merrifield, 2016).  

Secondly, when a user is in the boredom state, their mid-beta activity in the left 

frontal region of the brain is high, representing active alertness and low performance. 

Mid-beta in the frontal network of the brain directly correlates with self-awareness and 

82 

alertness levels and negatively correlates with the performance of a cognitive task 

(Kramer, 2007). 

 Thirdly, according to studies discussed in the literature and the Transient 

Hypofrontality Theory (THT), an individual in the boredom state has low theta activity 

over the frontal regions of the brain representing a low cognitive load. But in our study, 

we compared the boredom state with the flow state, and during the flow state, the 

memory load is expected to drop out or nullify based on the theory of effortless action 

and attention that is also associated with the concept of automatization (Bruya, 2010). 

Although the cognitive load on the frontal areas of the brain is high during boredom 

when compared to the flow state, it can be considered as least engaging and low frontal 

activity.  

The results obtained in our study for the state of anxiety are in line with fMRI and 

EEG study results in the literature. When an individual is experiencing the state of 

anxiety, the EEG theta activity in the frontal-temporal network is less in the anxiety state 

when compared to the flow state. This result is in line with the anxiety components’ 

effects explained by the Proficiency Efficiency Theory (PET) (Borkovec, 1994; Messina 

et al., 2013). As expected, the results obtained from this study for the anxiety state is in 

line with the effect of the anxiety explained by the processing efficiency theory. The 

effect is that anxiety can increase motivation levels which in turn minimizes the anxiety 

of individuals (Eysenck, 1992). Since frontal and temporal regions of the brain are 

involved in working memory tasks, the temporal lobe is associated with object 

processing. According to the Attentional Focus Theory (AFT), an individual with high 

anxiety levels can encounter stress and aggressively develop strategies to resolve the 

83 

challenges posed and reduce stress/anxiety levels (Eysenck et al., 2007). Under such 

conditions, performance can be high with a decrease in the felt effort but negative effects 

like anger, frustration, worry, depression, and decreased motivation can follow (Messina 

et al., 2013).  

This study provides encouraging and promising findings on the brain activity 

during the flow, boredom, and anxiety states. Utilizing interdisciplinary approaches in 

neuroscience and IS, this research provides an enhanced understanding of user experience 

in gaming from the neuroscience perspective. In addition, the findings are useful to HCI 

designers who can utilize EEG to assess user experience in real-time and understand the 

effects of different game design elements and interface (e.g., gamification features) on 

the flow state of users.  

Although research has identified factors that contribute to flow, cognitive 

engagement, cognitive absorption, and immersion, the neural correlates for the flow state 

during HCI have only been approximated. The current literature does not offer strong or 

consistent empirical evidence on neural correlates of flow, boredom, and anxiety over the 

frontal, parietal, temporal, and occipital regions of the brain which are important for 

building systems that better user engagement. This research contributes to the collective 

effort by the research community to resolve the inconsistencies in the literature and to 

develop a stronger theoretical foundation to understand the flow phenomenon from the 

neuropsychophysiological perspective.  

84 

7. LIMITATIONS AND FUTURE RESEARCH 

The present study investigated neural contributions to understand flow experience 

based on the more objective data recording measures than self-reported measures. A 

limitation of this research study was recruiting only male university students who are 

within the age range of 18-30 as participants. These demographic factors can be 

considered as pre-requisite elements for a person to experience the state of flow. This 

limitation not only reduces generalizability, but also motivates us to conduct a similar 

study with female participants to investigate gender related differences and 

commonalities in the neural correlates of specific user experience states.  For example, 

Poels et al. (2012) identified the differences between motivation levels of male and 

female participants during gaming (Poels et al., 2013).  

Future research can focus on extending the analysis of EEG spectral band 

activities for flow, boredom, and anxiety states over the right hemisphere of the brain and 

then comparing these results with the left hemisphere counterparts. Doing so can help to 

explain the brain activation patterns for user experience states and help researchers to 

identify which side of the brain depicts flow better during gaming. Further EEG flow 

research studies need to be conducted across various other domains beyond gaming to 

attain common neural correlates for the flow state. After obtaining the neural correlates of 

each dimension of the flow state, researchers can try to implement predictive analytics 

techniques to identify and classify user states based on the recorded neurophysiological 

signals. 

85 

Another stream of research that may help to understand the neural and 

physiological correlates of flow in the brain is related to meditation. Meditation practice 

has often been linked to the flow experience (Csikszentmihalyi, 1990; Goldberg et al., 

2006) because its target has always been to attain full attentional control. Both the flow 

and meditation phenomena are characterized by a deep concentration on a certain focus. 

Once entered in a meditative state, practitioners report feelings of effortless attention 

which could be related to flow. However, meditation is usually practiced in the resting 

position whereas flow arises during an activity that might require more physiological 

activation. But existing studies have shown inconsistencies in the results. In some studies, 

increased activity in frontal lobes was found during meditation (Newberg et al., 2001; 

Herzog et al., 1990), which would speak against a state of hypofrontality during effortless 

attention. Common attributes of flow and meditation are loss of sense of time, space and 

self-awareness. Future research with an explicit focus on the flow experience during task 

performance needs to be conducted to clarify this issue.  

This study provides encouraging and promising results on the brain activity in the 

left frontal, left parietal, occipital and frontal-temporal regions for specific bands (theta, 

alpha, and mid-beta) during boredom, flow, and anxiety states. It adds value to the work 

related to neurophysiological correlates of neuroscience. 

86 

8. THEORETICAL AND PRACTICAL IMPLICATIONS 

The theoretical and practical implications of this study are discussed in this 

chapter. Section 8.1 briefly discusses the contribution of results to existing theory and 

emphasizes supporting theories and findings. Section 8.2 provides the practical 

implications of the research and the practices that can be implemented to better the use of 

this technology. 

8.1. THEORETICAL IMPLICATIONS 

From a theoretical standpoint, this study revealed the relationship between theta, 

alpha, and mid-beta bands in the left frontal, temporal, parietal, and occipital regions of 

the brain during resting, boredom, flow, and anxiety states of user experience. This 

research supports a finding that flow is associated with a positive state and corresponds 

with left hemisphere activity. This study also made an effort to emphasize that flow is 

associated with attentional levels and leads to an increase in performance. The presence 

of the attentional levels resembles focused attention and concentration during the flow 

state. The findings of this research also validate effortless theory of action and attention, 

processing efficiency theory, and transient hypofrontality theory. This study has 

furnished significant neural correlates of the flow, boredom, and anxiety states using 

EEG by providing theoretical support. This study fills the gap between fMRI and EEG 

findings over the frontal, temporal, parietal, and occipital cortices for the above-

mentioned user states in gaming. 

87 

8.2. PRACTICAL IMPLICATIONS 

The study results can help organizations to understand gaming experience from a 

user’s perspective. This study primarily benefits stakeholders within the game 

development industry. Game designers and the management of game development 

companies can utilize findings from this research to obtain a deeper understanding of the 

user experience from their customers’ perspective. This knowledge can be induced into 

future game design and development practices, to produce more attractive games and 

increase retention, which can lead to enhanced cost-efficient business strategies.  

These results can be used to understand users’ state of mind and experience 

during gaming. For example, if a user is anxious or frustrated, the system may be 

prompted to offer help or present the help screen. These results can also contribute to 

building adaptive/dynamic systems and evaluating IS. Similarly, if a player is bored by a 

digital/computer game, the system can trigger a change (increase) in the game difficulty 

level. In addition, an application that can continuously monitor a user’s state of attention 

can be designed. Such applications can also be used to monitor the wakefulness of the 

personnel involved in handling tasks that are repetitive in nature and require tremendous 

level of consistency. EEG can be used by employees at work and can help to evaluate an 

employee’s level of interest in the task assigned. Ultimately, this will help to sort out the 

staffing issues in the corporate world (assigning the right job/task to the right person).  

88 

9. CONCLUSION 

Neural correlates of the flow, boredom, and anxiety states during gaming have 

been investigated using brain imaging techniques. The boredom state has been 

conceptualized as the presence of self-consciousness (high mid-beta) and attentional 

failure (high alpha - low attention), and it portrays high cognitive load (high theta) when 

compared to the flow state. The influence of the flow state on the Default Mode Network 

(DMN) deactivation has been demonstrated as well. Functionally, the flow condition is 

associated with decreasing EEG theta activity in the fronto-parietal network and 

showcases an increased activity in the visual attention in the occipital region of the brain. 

The decreased alpha value indicates the presence of attention during the flow state, also 

reflecting the existence of concentration but in an effortless way. The flow state is 

associated with positive experience in which the user is deemed to experience attention, 

focused immersion, arousal, decreased mental effort, and loss of self-consciousness in an 

effortless way. Remarkably, the brain activity is greater over the frontal-temporal 

network during the flow state when compared to the anxiety state. Overall, the results 

obtained from the study are consistent with our study proposal that resource allocation 

process can be automatized though enhanced attentional skills; this automatization leads 

to a decrease in the left hemisphere activity, especially in the frontal-parietal and frontal-

temporal regions of the brain. 

89 

APPENDIX 

Welcome to this session where you will be playing a computer game. Have you 

played Tetris before? In this study you will be playing Tetris using mouse; keyboard 

should not be used under any circumstances. I will be giving a brief demo of Tetris 

mouse controls shortly. 

These are the empty spaces in the matrix and they need to be filled with bricks 

which would be falling in different shapes and colors. For a change in shape, you need to 

hover over the mouse from either left to right or right to left; and depending upon the 

availability of empty spaces, the shape of the bricks changes automatically. If you don’t 

need any specific block shape, you can perform a right click operation on the mouse and 

this will move the current block onto the hold frame and will let you access the next 

block. You can see the forthcoming blocks on the left side pane. You can see your score, 

number of lines cleared, and game level on the right-side pane.  A mouse left click on the 

Tetris matrix would make blocks/bricks fall faster and hence make the gameplay faster 

NOTE: You should not click outside the game frame; if you do so, the game goes 

into a pause state and this will hinder the study and affect the setup. 

This is a training session; please start playing from level 1 until the game is over. 

Your game scores will be recorded.  

Thank You! 

90 

BIBLIOGRAPHY 

Afergan, D., Peck, E. M., Solovey, E. T., Jenkins, A., Hincks, S. W., Brown, E. T., ... & 

Jacob, R. J. (2014). Dynamic difficulty using brain metrics of workload. 

In Proceedings of the 32nd Annual ACM Conference on Human Factors in 

Computing Systems (pp. 3797-3806). ACM. 

Aftanas, L. I., & Golosheikin, S. A. (2003). Changes in cortical activity in altered states 

of consciousness: the study of meditation by high-resolution EEG. Human 

Physiology, 29(2), 143-151. 

Agarwal, R., & Karahanna, E. (2000). Time flies when you're having fun: Cognitive     

absorption and beliefs about information technology usage. MIS Quarterly, 665-

694. 

Ahn, M., Cho, H., Ahn, S., & Jun, S. C. (2013). High theta and low alpha powers may be 

indicative of BCI-illiteracy in motor imagery. PloS one, 8(11), e80886. 

Andrews-Hanna, J. R. (2012). The brain’s default network and its adaptive role in 

internal mentation. The Neuroscientist, 18(3), 251-270. 

Ansari, T. L., & Derakshan, N. (2011). The neural correlates of impaired inhibitory 

control in anxiety. Neuropsychologia, 49(5), 1146-1153. 

Arvaneh, M., Guan, C., Ang, K. K., & Quek, C. (2011). Optimizing the channel selection 

and classification accuracy in EEG-based BCI. IEEE Transactions on Biomedical 

Engineering, 58(6), 1865-1873. 

Asadi‐Pooya, A. A., Dlugos, D., Skidmore, C., & Sperling, M. R. (2017). Atlas of 

electroencephalography, 3rd edition. Epileptic Disorders, 19(3), 384-384. 

doi:10.1684/epd.2017.0934 

Ashby, F. G., & Casale, M. B. (2003). The cognitive neuroscience of implicit category 

learning. Advances in consciousness research, 48, 109-142. 

Atwood, H. L., & MacKay, W. A. (1989). Essentials of Neurophysiology. BC Decker. 

Axmacher, N., Schmitz, D. P., Wagner, T., Elger, C. E., & Fell, J. (2008). Interactions 

between medial temporal lobe, prefrontal cortex, and inferior temporal regions 

during visual working memory: a combined intracranial EEG and functional 

magnetic resonance imaging study. Journal of Neuroscience, 28(29), 7304-7312. 

91 

Ayaz, H., Shewokis, P. A., Bunce, S., & Onaral, B. (2011). An optical brain computer 

interface for environmental control. In Engineering in Medicine and Biology 

Society, EMBC, 2011 Annual International Conference of the IEEE (pp. 6327-

6330). IEEE. 

Baddeley, A. D., & Hitch, G. (1974). Working memory. In Psychology of Learning and 

Motivation (Vol. 8, pp. 47-89). Academic press. 

Balducci, F., Grana, C., & Cucchiara, R. (2017). Affective level design for a role-playing 

videogame evaluated by a brain–computer interface and machine learning 

methods. The Visual Computer, 33(4), 413-427. 

Bargh, J. A., & Ferguson, M. J. (2000). Beyond behaviorism: on the automaticity of 

higher mental processes. Psychological Bulletin, 126(6), 925. 

Barry, R. J., Clarke, A. R., Johnstone, S. J., Magee, C. A., & Rushby, J. A. (2007). EEG 

differences between eyes-closed and eyes-open resting conditions. Clinical 

Neurophysiology, 118(12), 2765-2773. 

Bavelier, D., Achtman, R. L., Mani, M., & Föcker, J. (2012). Neural bases of selective 

attention in action video game players. Vision Research, 61, 132-143. 

Bekisz, M., & Wróbel, A. (1999). Coupling of beta and gamma activity in 

corticothalamic system of cats attending to visual stimuli. Neuroreport, 10(17), 

3589-3594. 

Bench, S. W., & Lench, H. C. (2013). On the function of boredom. Behavioral Sciences, 

3, 459-472. 

Bender, S., Resch, F., Weisbrod, M., & Oelkers-Ax, R. (2004). Specific task anticipation 

versus unspecific orienting reaction during early contingent negative 

variation. Clinical Neurophysiology, 115(8), 1836-1845. 

Berka, C., Levendowski, D. J., Lumicao, M. N., Yau, A., Davis, G., Zivkovic, V. T., ... & 

Craven, P. L. (2007). EEG correlates of task engagement and mental workload in 

vigilance, learning, and memory tasks. Aviation, Space, and Environmental 

Medicine, 78(5), B231-B244. 

Berlyne, D. E. (1960). Conflict, arousal, and curiosity. New York: McGraw-Hill. 

Bersak, D., McDarby, G., Augenblick, N., McDarby, P., McDonnell, D., McDonald, B., 

& Karkun, R. (2001). Intelligent biofeedback using an immersive competitive 

environment. Paper at the Designing Ubiquitous Computing Games Workshop at 

UbiComp, 1-6. 

92 

Berta, R., Bellotti, F., De Gloria, A., Pranantha, D., & Schatten, C. (2013). 

Electroencephalogram and physiological signal analysis for assessing flow in 

games. IEEE Transactions on Computational Intelligence and AI in Games, 5(2), 

164-175.  

Beste, C., Mückschel, M., Elben, S., Hartmann, C. J., McIntyre, C. C., Saft, C., ... & 

Wojtecki, L. (2015). Behavioral and neurophysiological evidence for the 

enhancement of cognitive control under dorsal pallidal deep brain stimulation in 

Huntington’s disease. Brain Structure and Function, 220(4), 2441-2448. 

Bhattacherjee, A. (2012). Social science research: Principles, methods, and practices. 

Textbooks Collection. 3. 

Birbaumer, N. (1977). Operant enhancement of EEG-theta activity. In Biofeedback and 

Behavior (pp. 135-146). Springer, Boston, MA. 

Blankstein, K. R., Flett, G. L., Boase, P., & Toner, B. B. (1990). Thought listing and 

endorsement measures of self-referential thinking in test anxiety. Anxiety 

Research, 2(2), 103-112. 

Blankstein, K. R., Toner, B. B., & Flett, G. L. (1989). Test anxiety and the contents of 

consciousness: Thought-listing and endorsement measures. Journal of Research 

in Personality, 23(3), 269-286. 

Borkovec, T. (1994). The nature, functions and origins of worry. In G. Davey & F. Tallis 

(Eds.), Worrying: Perspectives on Theory, Assessment and Treatment (pp. 5–34). 

Chichester, England: Wiley. 

Brancucci, A. (2012). Neural correlates of cognitive ability. Journal of Neuroscience 

Research, 90(7), 1299-1309. 

Brann, D. W., Dhandapani, K., Wakade, C., Mahesh, V. B., & Khan, M. M. (2007). 

Neurotrophic and neuroprotective actions of estrogen: basic mechanisms and 

clinical implications. Steroids, 72(5), 381-405. 

Bruya, B. (2010). Introduction: Toward a theory of attention that includes effortless 

attention. pp. 1-28. 

Buckner, R. L., Andrews‐Hanna, J. R., & Schacter, D. L. (2008). The brain's default 

network. Annals of the New York Academy of Sciences, 1124(1), 1-38. 

Cahn, B. R., & Polich, J. (2013). Meditation states and traits: EEG, ERP, and 

neuroimaging studies. Vol. 132, No. 2, 180 –211 

93 

Calvo, M. G., Alamo, L., & Ramos, P. M. (1990). Test anxiety, motor performance and 

learning: Attentional and somatic interference. Personality and Individual 

Differences, 11(1), 29-38. 

Calvo, M. G., & Ramos, P. M. (1989). Effects of test anxiety on motor learning: The 

processing efficiency hypothesis. Anxiety Research, 2(1), 45-55. 

Calvo, M. G., Szabo, A., & Capafons, J. (1996). Anxiety and heart rate under 

psychological stress: The effects of exercise training. Anxiety, Stress, and Coping, 

9, 321–337. 

Chanel, G., Rebetez, C., Bétrancourt, M., & Pun, T. (2008). Boredom, engagement and 

anxiety as indicators for adaptation to difficulty in games. In Proceedings of the 

12th International Conference on Entertainment and Media in the Ubiquitous 

Era (pp. 13-17). ACM. 

Chanel, G., Rebetez, C., Bétrancourt, M., & Pun, T. (2011). Emotion assessment from 

physiological signals for adaptation of game difficulty. IEEE Transactions on 

Systems, Man, and Cybernetics-Part A: Systems and Humans, 41(6), 1052-1063. 

Chen, H. (2006). Flow on the net–detecting Web users’ positive affects and their flow 

states. Computers in Human Behavior, 22(2), 221-233. 

Chen, H., Wigand, R. T., & Nilan, M. S. (1999). Optimal experience of web 

activities. Computers in Human Behavior, 15(5), 585-608. 

Chen, H., Wigand, R. T., & Nilan, M. (2000). Exploring web users’ optimal flow 

experiences. Information Technology & People, 13(4), 263-281. 

Collette, F., & Van der Linden, M. (2002). Brain imaging of the central executive 

component of working memory. Neuroscience & Biobehavioral Reviews, 26(2), 

105-125. 

Cowie, R., Douglas-Cowie, E., Tsapatsoulis, N., Votsis, G., Kollias, S., Fellenz, W., & 

Taylor, J. G. (2001). Emotion recognition in human-computer interaction. IEEE 

Signal processing magazine, 18(1), 32-80. 

Cowley, B., Charles, D., Black, M., & Hickey, R. (2008). Toward an understanding of 

flow in video games. Computers in Entertainment (CIE), 6(2), 20. 

Coyle, S., Ward, T., & Markham, C. (2003). Brain–computer interfaces: a 

review. Interdisciplinary Science Reviews, 28(2), 112-118. 

Croft, R. J., & Barry, R. J. (2000a). EOG correction: Which regression should we 

use?. Psychophysiology, 37(1), 123-125. 

94 

Croft, R. J., & Barry, R. J. (2000b). Removal of ocular artifact from the EEG: a 

review. Neurophysiologie Clinique/Clinical Neurophysiology, 30(1), 5-19. 

Csikszentmihalyi, M. (1975). Beyond boredom and anxiety. San Francisco: 

JosseyBass. Well-being: The foundations of hedonic psychology, 134-154. 

Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience, Harper & 

Row. 

Csikszentmihalyi, M., & Csikszentmihalyi, I. S. (Eds.). (1992). Optimal Experience: 

Psychological Studies of Flow in Consciousness. Cambridge university press. 

Csikszentmihalyi, M., & LeFevre, J. (1989). Optimal Experience in Work and Leisure. 

Cunillera, T., Fuentemilla, L., Periañez, J., Marco-Pallarès, J., Krämer, U. M., Càmara, 

E., ... & Rodríguez-Fornells, A. (2012). Brain oscillatory activity associated with 

task switching and feedback processing. Cognitive, Affective, & Behavioral 

Neuroscience, 12(1), 16-33. 

Da Silva, F. L. (1991). Neural mechanisms underlying brain waves: from neural 

membranes to networks. Clinical Neurophysiology, 79(2), 81-93. 

Dalgleish, T., & Power, M. J. (1999). Handbook of cognition and emotion. Chichester, 

England; New York; Wiley, 213-272. 

Danckert, J., & Merrifield, C. (2016). Boredom, sustained attention and the default mode 

network. Experimental Brain Research, 1-12. 

Danckert, J. A., & Allman, A. A. A. (2005). Time flies when you’re having fun: 

Temporal estimation and the experience of boredom. Brain and Cognition, 59(3), 

236-245. 

D'angiulli, A., Van Roon, P. M., Weinberg, J., Oberlander, T., Grunau, R., Hertzman, C., 

& Maggi, S. (2012). Frontal EEG/ERP correlates of attentional processes, cortisol 

and motivational states in adolescents from lower and higher socioeconomic 

status. Frontiers in Human Neuroscience, 6, 306. 

Davidson, R. J., Kabat-Zinn, J., Schumacher, J., Rosenkranz, M., Muller, D., Santorelli, 

S. F., ... & Sheridan, J. F. (2003). Alterations in brain and immune function 

produced by mindfulness meditation. Psychosomatic Medicine, 65(4), 564-570. 

de Manzano, Ö., Theorell, T., Harmat, L., & Ullén, F. (2010). The psychophysiology of 

flow during piano playing. Emotion, 10(3), 301-311. 

95 

Dehaene, S., Kerszberg, M., & Changeux, J. P. (1998). A neuronal model of a global 

workspace in effortful cognitive tasks. Proceedings of the National Academy of 

Sciences, 95(24), 14529-14534. 

Di Bartolo, P. M., Brown, T. A., & Barlow, D. H. (1997). Effects of anxiety on 

attentional allocation and task performance: An information processing analysis. 

Behaviour Research and Therapy, 35, 1101–1111. 

Dietrich, A. (2004). Neurocognitive mechanisms underlying the experience of flow. Con-

sciousness and Cognition, 13(4), 746-761.  

Dietrich, A., and Stoll, O. (2010). Effortless attention, hypofrontality, and perfectionism. 

In Bruya, B. (ed.), Effortless Attention: A New Perspective in the Cognitive 

Science of Attention and Action. MIT Press. pp. 159-178. 

Dienes, Z., & Perner, J. (1999). A theory of implicit and explicit knowledge. Behavioral 

and brain sciences, 22(5), 735-808. 

Dimoka, A. (2010). What does the brain tell us about trust and distrust? Evidence from a 

functional neuroimaging study. MIS Quarterly, 373-396. 

Dimoka, A., & Davis, F. D. (2008). Where does TAM reside in the brain? The neural 

mechanisms underlying technology adoption. ICIS 2008 Proceedings, 169. 

Dimoka, A., Pavlou, P. A., Benbasat, I., & Qiu, L. (2009). The role of gender and 

ethnicity in the design of online recommendation agents: Insights from an fMRI 

study. Proceedings of, University of British Columbia, Vancouver, Canada. 

Dolcos, F., Iordan, A. D., & Dolcos, S. (2011). Neural correlates of emotion–cognition 

interactions: A review of evidence from brain imaging investigations. Journal of 

Cognitive Psychology, 23(6), 669-694. 

Dornič, S. (1977). Mental load, effort, and individual differences. University of 

Stockholm, the Psychological Laboratory. 

Dornič, S. (1980). Efficiency vs. effectiveness in mental work: The differential effect of 

stress. Department of Psychology, University of Stockholm. 

Drachen, A., Nacke, L. E., Yannakakis, G., & Pedersen, A. L. (2010, July). Correlation 

between heart rate, electrodermal activity and player experience in first-person 

shooter games. In Proceedings of the 5th ACM SIGGRAPH Symposium on Video 

Games (pp. 49-54). ACM. 

96 

Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: 

Defining boredom in terms of attention. Perspectives on Psychological 

Science, 7(5), 482-495. 

Engeser, S., & Rheinberg, F. (2008). Flow, performance and moderators of challenge-

skill balance. Motivation and Emotion, 32(3), 158-172. 

Ergenoglu, T., Demiralp, T., Bayraktaroglu, Z., Ergen, M., Beydagi, H., & Uresin, Y. 

(2004). Alpha rhythm of the EEG modulates visual detection performance in 

humans. Cognitive Brain Research, 20(3), 376-383. 

Ermi, L., & Mäyrä, F. (2005). Fundamental components of the gameplay experience: 

Analysing immersion. Worlds in play: International Perspectives on Digital 

Games Research, 37(2), 37-53. 

Ewing, K. C., Fairclough, S. H., & Gilleade, K. (2016). Evaluation of an adaptive game 

that uses EEG measures validated during the design process as inputs to a 

biocybernetic loop. Frontiers in Human Neuroscience, 10, 223. 

Eysenck, M. W. (1992). Anxiety: The cognitive perspective. Hove, England: Erlbaum. 

Eysenck, M. W., Derakshan, N., Santos, R., & Calvo, M. G. (2007). Anxiety and 

cognitive performance: attentional control theory. Emotion, 7(2), 336. 

Fahlman, S. A., Mercer-Lynn, K. B., Flora, D. B., & Eastwood, J. D. (2013). 

Development and validation of the multidimensional state boredom 

scale. Assessment, 20(1), 68-85. 

Fang, X., Zhang, J., Chan, S.S. (2013). Development of an Instrument for Studying Flow 

in Computer Game Play. Intl. Journal of Human-Computer Interaction, 29: 456-

47, 2013. 

Fenichel, O. (1951). On the psychology of boredom. Organization and Pathology of 

Thought, 349-361. 

Fink, A., Grabner, R. H., Neuper, C., & Neubauer, A. C. (2005). EEG alpha band 

dissociation with increasing task demands. Cognitive brain research, 24(2), 252-

259. 

Fisherl, C. D. (1993). Boredom at work: A neglected concept. Human Relations, 46(3), 

395-417. 

Fox, E., Russo, R., & Georgiou, G. A. (2005). Anxiety modulates the degree of attentive 

resources required to process emotional faces. Cognitive, Affective, & Behavioral 

Neuroscience, 5(4), 396-404. 

97 

Frankl, VE. (1992). Man’s search for meaning: an introduction to logotherapy, 4th edn. 

Beacon Press, Boston. 

Fu, F. L., Su, R. C., & Yu, S. C. (2009). EGameFlow: A scale to measure learners’ 

enjoyment of e-learning games. Computers & Education, 52(1), 101-112. 

Fullagar, C. J., Knight, P. A., & Sovern, H. S. (2013). Challenge/skill balance, flow, and 

performance anxiety. Applied Psychology, 62(2), 236-259. 

Fuster, J. M. (2000). Executive frontal functions. Experimental Brain Research, 133(1), 

66-70. 

Geiwitz, P. J. (1966). Structure of boredom. Journal of Personality and Social 

Psychology, 3(5), 592. 

Gerě, I., & Jaušcvec, N. (1999). Multimedia: Differences in cognitive processes observed 

with EEG. Educational Technology Research and Development, 47(3), 5-14. 

Gerritsen, C. J., Toplak, M. E., Sciaraffa, J., & Eastwood, J. (2014). I can’t get no 

satisfaction: Potential causes of boredom. Consciousness and Cognition, 27, 27-

41. 

Gevins, A. S., & Schaffer, R. E. (1980). A critical review of electroencephalographic 

(EEG) correlates of higher cortical functions. Critical Reviews in 

Bioengineering, 4(2), 113-164. 

Ghani, J. A., & Deshpande, S. P. (1994). Task characteristics and the experience of 

optimal flow in human-computer interaction. The Journal of Psychology, 128(4), 

381-391. 

Gillath, O., Bunge, S. A., Shaver, P. R., Wendelken, C., & Mikulincer, M. (2005). 

Attachment-style differences in the ability to suppress negative thoughts: 

exploring the neural correlates. Neuroimage, 28(4), 835-847. 

Gilleade, K., Dix, A., & Allanson, J. (2005). Affective videogames and modes of 

affective gaming: assist me, challenge me, emote me. DiGRA 2005: Changing 

Views–Worlds in Play. 

Glimcher, P. W., & Rustichini, A. (2004). Neuroeconomics: the consilience of brain and 

decision. Science, 306(5695), 447-452. 

Goldberg, I. I., Harel, M., & Malach, R. (2006). When the brain loses its self: prefrontal 

inactivation during sensorimotor processing. Neuron, 50(2), 329-339.  

98 

Goldman, R. I., Stern, J. M., Engel Jr, J., & Cohen, M. S. (2002). Simultaneous EEG and 

fMRI of the alpha rhythm. Neuroreport, 13(18), 2487. 

Goleman, D. (1995). Emotional Intelligence. New York (Bantam) 1995. 

Greicius, M. D., Krasnow, B., Reiss, A. L., & Menon, V. (2003). Functional connectivity 

in the resting brain: a network analysis of the default mode 

hypothesis. Proceedings of the National Academy of Sciences, 100(1), 253-258. 

Gruzelier, J. (2009). A theory of alpha/theta neurofeedback, creative performance 

enhancement, long distance functional connectivity and psychological 

integration. Cognitive Processing, 10(1), 101-109. 

Guo, Y. M., & Poole, M. S. (2009). Antecedents of flow in online shopping: a test of 

alternative models. Information Systems Journal, 19(4), 369-390. 

Guo, Z., Xiao, L., Van Toorn, C., Lai, Y., & Seo, C. (2016). Promoting online learners’ 

continuance intention: An integrated flow framework. Information & 

Management, 53(2), 279-295. 

Gusnard, D. A., Akbudak, E., Shulman, G. L., & Raichle, M. E. (2001). Medial 

prefrontal cortex and self-referential mental activity: relation to a default mode of 

brain function. Proceedings of the National Academy of Sciences, 98(7), 4259-

4264. 

Gusnard, D. A., & Raichle, M. E. (2001). Searching for a baseline: functional imaging 

and the resting human brain. Nature Reviews Neuroscience, 2(10), 685. 

Hairston, W. D., Whitaker, K. W., Ries, A. J., Vettel, J. M., Bradford, J. C., Kerick, S. E., 

& McDowell, K. (2014). Usability of four commercially-oriented EEG 

systems. Journal of Neural Engineering, 11(4), 046018. 

Hamilton JA, Haier RJ, Buchsbaum MS (1984) Intrinsic enjoyment and boredom coping 

scales: validation with personality, evoked potential and attention measures. 

Personality and Individual Differences 5(2): 183-193. 

Harmon‐Jones, E. (2003). Clarifying the emotive functions of asymmetrical frontal 

cortical activity. Psychophysiology, 40(6), 838-848. 

Harmon-Jones, E., & Peterson, C. K. (2009). Electroencephalographic methods in social 

and personality psychology. Methods in Social Neuroscience, 170-197. 

Hartmann, T., & Klimmt, C. (2006). Gender and computer games: Exploring females’ 

dislikes. Journal of Computer-Mediated Communication, 11(4), 910-931. 

99 

Hebb, D. O., & Donderi, D. C. (2013). Textbook of Psychology (Psychology Revivals). 

Psychology Press, 4th edition, 1-91. 

Herzog, H., Lele, V. R., Kuwert, T., Langen, K. J., Kops, E. R., & Feinendegen, L. E. 

(1990). Changed pattern of regional glucose metabolism during yoga meditative 

relaxation. Neuropsychobiology, 23(4), 182-187.  

Hill, N. M., & Schneider, W. (2006). Brain changes in the development of expertise: 

Neuroanatomical and neurophysiological evidence about skill-based 

adaptations. The Cambridge Handbook of Expertise and Expert Performance, 

653-682. 

Hirshfield, L. M., Solovey, E. T., Girouard, A., Kebinger, J., Jacob, R. J., Sassaroli, A., & 

Fantini, S. (2009, April). Brain measurement for usability testing and adaptive 

interfaces: an example of uncovering syntactic workload with functional near 

infrared spectroscopy. In Proceedings of the SIGCHI Conference on Human 

Factors in Computing Systems (pp. 2185-2194). ACM. 

Hjelm, S. I., & Browall, C. (2000, October). Brainball-using brain activity for cool 

competition. In Proceedings of NordiCHI(Vol. 7, No. 9). 

Hoffman, D. L., & Novak, T. P. (1996). Marketing in hypermedia computer-mediated 

environments: Conceptual foundations. The Journal of Marketing, 50-68. 

Hoffman, D. L., & Novak, T. P. (2009). Flow online: lessons learned and future 

prospects. Journal of Interactive Marketing, 23(1), 23-34. 

Hondrou, C., & Caridakis, G. (2012, May). Affective, natural interaction using EEG: 

sensors, application and future directions. In Hellenic Conference on Artificial 

Intelligence (pp. 331-338). Springer, Berlin, Heidelberg. 

Horne, J. (1988). Why we sleep: the functions of sleep in humans and other mammals. 

Oxford University Press. 

Isotani, T., Tanaka, H., Lehmann, D., Pascual-Marqui, R. D., Kochi, K., Saito, N., ... & 

Sasada, K. (2001). Source localization of EEG activity during hypnotically 

induced anxiety and relaxation. International Journal of Psychophysiology, 41(2), 

143-153. 

Ivanitsky, A. M., Ivanitsky, G. A., & Sysoeva, O. V. (2009). Brain science: On the way 

to solving the problem of consciousness. International Journal of 

Psychophysiology, 73(2), 101-108. 

Jacko, J. A. (Ed.). (2012). Human computer interaction handbook: Fundamentals, 

evolving technologies, and emerging applications. CRC press, 965-984. 

100 

Jackson, S.A. (1992). Athletes in Flow. A qualitative study of low states in skaters and 

athletes, 4, 2 (1992), 161-180. 

Jackson, S. A., & Eklund, R. C. (2002). Assessing flow in physical activity: The flow 

state scale–2 and dispositional flow scale–2. Journal of Sport and Exercise 

Psychology, 24(2), 133-150. 

Jackson, S. A., & Marsh, H. W. (1996). Development and validation of a scale to 

measure optimal experience: The Flow State Scale. Journal of Sport and Exercise 

Psychology, 18(1), 17-35. 

Jasper, H. (1958). Report of the committee on methods of clinical examination in 

electroencephalography. Electroencephalogr Clin Neurophysiol, 10, 370-375. 

Jenkins, S. D., & Brown, R. D. H. (2014). A correlational analysis of human cognitive 

activity using Infrared Thermography of the supraorbital region, frontal EEG and 

self-report of core affective state. In QIRT, 1-10. 

Jennett, C., Cox, A. L., Cairns, P., Dhoparee, S., Epps, A., Tijs, T., & Walton, A. (2008). 

Measuring and defining the experience of immersion in games. International 

Journal of Human-Computer Studies, 66(9), 641-661. 

Jensen, O., & Lisman, J. E. (2005). Hippocampal sequence-encoding driven by a cortical 

multi-item working memory buffer. Trends in Neurosciences, 28(2), 67-72. 

Jiang, Z., & Benbasat, I. (2004). Virtual product experience: Effects of visual and 

functional control of products on perceived diagnosticity and flow in electronic 

shopping. Journal of Management Information Systems, 21(3), 111-147. 

Jiang, Y., Lianekhammy, J., Lawson, A., Guo, C., Lynam, D., Joseph, J. E., ... & Kelly, 

T. H. (2009). Brain responses to repeated visual experience among low and high 

sensation seekers: Role of boredom susceptibility. Psychiatry Research: 

Neuroimaging, 173(2), 100-106. 

Jung, T. P., Makeig, S., Humphries, C., Lee, T. W., Mckeown, M. J., Iragui, V., & 

Sejnowski, T. J. (2000). Removing electroencephalographic artifacts by blind 

source separation. Psychophysiology, 37(2), 163-178. 

Kahneman, D. (1973). Attention and effort (Vol. 1063). Englewood Cliffs, NJ: Prentice-

Hall. 

Kalbfleisch, M. L., & Gillmarten, C. (2013). Left brain vs. right brain: Findings on visual 

spatial capacities and the functional neurology of giftedness. Roeper 

Review, 35(4), 265-275. 

101 

Keller J, Bless H, Blomann F, Kleinböhl, D. (2011). Physiological aspects of flow experi-

ences: skills-demand-compatibility effects on heart rate variability and salivary 

corti-sol. Journal of Experimental Social Psychology, 47(4): 849-852.  

Kerr, C. E., Jones, S. R., Wan, Q., Pritchett, D. L., Wasserman, R. H., Wexler, A., ... & 

Littenberg, R. (2011). Effects of mindfulness meditation training on anticipatory 

alpha modulation in primary somatosensory cortex. Brain Research 

Bulletin, 85(3-4), 96-103. 

Kivikangas, JM. (2006). Psychophysiology of flow experience: an explorative study, 

Master’s thesis, University of Helsinki, 6-25.  

Klasen, M., Weber, R., Kircher, T. T., Mathiak, K. A., & Mathiak, K. (2011). Neural 

contributions to flow experience during video game playing. Social Cognitive and 

Affective Neuroscience, 7(4), 485-495. 

Klimesch, W. (1999). EEG alpha and theta oscillations reflect cognitive and memory 

performance: a review and analysis. Brain Research Reviews, 29(2-3), 169-195. 

Klimesch, W., & Doppelmayr, M. (1996). encoding of new. Neuroreport, 7, 1235-1240. 

Knyazev, G. G. (2007). Motivation, emotion, and their inhibitory control mirrored in 

brain oscillations. Neuroscience & Biobehavioral Reviews, 31(3), 377-395. 

Knyazev, G. G., Savostyanov, A. N., & Levin, E. A. (2004). Alpha oscillations as a 

correlate of trait anxiety. International Journal of Psychophysiology, 53(2), 147-

160. 

Kondo, H., Morishita, M., Osaka, N., Osaka, M., Fukuyama, H., & Shibasaki, H. (2004). 

Functional roles of the cingulo-frontal network in performance on working 

memory. Neuroimage, 21(1), 2-14. 

Kramer, D. (2007). Predictions of performance by EEG and skin conductance. Indiana 

Undergraduate Journal of Cognitive Science, 2, 3-13. 

Krucoff, M. O., Rahimpour, S., Slutzky, M. W., Edgerton, V. R., & Turner, D. A. (2016). 

Enhancing nervous system recovery through neurobiologics, neural interface 

training, and neurorehabilitation. Frontiers in Neuroscience, 10, 584. 

Kubota, Y., Sato, W., Toichi, M., Murai, T., Okada, T., Hayashi, A., & Sengoku, A. 

(2001). Frontal midline theta rhythm is correlated with cardiac autonomic 

activities during the performance of an attention demanding meditation 

procedure. Cognitive Brain Research, 11(2), 281-287. 

102 

Labonté-LeMoyne, É., Léger, P. M., Resseguier, B., Bastarache-Roberge, M. C., 

Fredette, M., Sénécal, S., & Courtemanche, F. (2016, May). Are We in Flow 

Neurophysiological Correlates of Flow States in a Collaborative Game. 

In Proceedings of the 2016 CHI Conference Extended Abstracts on Human 

Factors in Computing Systems (pp. 1980-1988). ACM. 

Lee, C., Wyeth, P., Johnson, D., & Hall, J. (2015, October). Flow during individual and 

co-operative gameplay. In Proceedings of the 2015 Annual Symposium on 

Computer-Human Interaction in Play (pp. 103-107). ACM. 

Lee, J. C., & Tan, D. S. (2006, October). Using a low-cost electroencephalograph for task 

classification in HCI research. In Proceedings of the 19th annual ACM 

symposium on User Interface Software and Technology (pp. 81-90). ACM. 

Lee, S. M., & Chen, L. (2010). The impact of flow on online consumer behavior. Journal 

of Computer Information Systems, 50(4), 1-10. 

Léger, P. M., Davis, F. D., Cronan, T. P., & Perret, J. (2014). Neurophysiological 

correlates of cognitive absorption in an enactive training context. Computers in 

Human Behavior, 34, 273-283. 

Lewinsky, H. (1943). BOREDOM. British Journal of Educational Psychology, 13(3), 

147-152. 

Li, D., & Browne, G. J. (2006). The role of need for cognition and mood in online flow 

experience. Journal of Computer Information Systems, 46(3), 11-17. 

Li, M., Jiang, Q., Tan, C. H., & Wei, K. K. (2014). Enhancing user-game engagement 

through software gaming elements. Journal of Management Information 

Systems, 30(4), 115-150. 

Li, R., & Principe, J. C. (2006, August). Blinking artifact removal in cognitive EEG data 

using ICA. In Engineering in Medicine and Biology Society, 2006. EMBS'06. 28th 

Annual International Conference of the IEEE (pp. 5273-5276). IEEE. 

Li, Y., Ma, Z., Lu, W., & Li, Y. (2006). Automatic removal of the eye blink artifact from 

EEG using an ICA-based template matching approach. Physiological 

Measurement, 27(4), 425. 

Lin, Z., Zhang, C., Wu, W., & Gao, X. (2007). Frequency recognition based on canonical 

correlation analysis for SSVEP-based BCIs. IEEE Transactions on Biomedical 

Engineering, 54(6), 1172-1176. 

103 

Liotti, M., Mayberg, H. S., Brannan, S. K., McGinnis, S., Jerabek, P., & Fox, P. T. 

(2000). Differential limbic–cortical correlates of sadness and anxiety in healthy 

subjects: implications for affective disorders. Biological Psychiatry, 48(1), 30-42. 

Lombard, M., & Ditton, T. (1997). At the heart of it all: The concept of presence. Journal 

of Computer‐Mediated Communication, 3(2), 0-0. 

Luu, P., & Ferree, T. (2005). Determination of the HydroCel Geodesic Sensor Nets’ 

Average Electrode Positions and Their 10–10 International Equivalents. Inc, 

Technical Note. 

Mandryk, R.L., Atkins, M.S. (2007). A fuzzy physiological approach for continuously 

modeling emotion during interaction with play technologies. International 

Journal of Human-Computer Studies, 65(4): 329-347.  

Manzano, O., Theorell, T., Harmat, L., Ullen, F. (2014). The Psychophysiology of Flow 

during Piano Playing, Vol. 10, No. 3, 301–311. 

Marr, A. J. (2001). In the zone: A biobehavioral theory of the flow experience. Athletic 

Insight: Online Journal of Sport Psychology, 3(1). 

Mason, M.F., Norton, M.I., Van Horn, J.D., Wegner, D.M., Grafton, S.T, & Macrae, C. 

N. (2007). Wandering minds: the default network and stimulus-independent 

thought. Science, 315, 393–395. 

Massimini, F., & Massimo, C. (1988). The systematic assessment of flow in daily 

experience. In M. Csikszentmihalyi and I. Csikszentmihalyi (Eds.), Optimal 

experience: Psychological studies of flow in consciousness (pp. 288 - 306). 

Mathiak, K. A., Klasen, M., Zvyagintsev, M., Weber, R., & Mathiak, K. (2013). Neural 

networks underlying affective states in a multimodal virtual environment: 

contributions to boredom. Frontiers in Human Neuroscience, 7, 820. 

McCarthy, J., & Wright, P. (2004). Technology as experience. Interactions, 11(5), 42-43. 

McGonigal, J. (2011). Reality is broken: Why games make us better and how they can 

change the world. Penguin, 20-27. 

McMahan, T., Parsons, T. D., & Parberry, I. (2014). Modality Specific Assessment of 

Video Game Player’s Cognitive Workload Using Off-the-Shelf 

Electroencephalographic Technologies (pp. 2-8). 

Merica, H., & Gaillard, J. M. (1992). The EEG of the sleep onset period in insomnia: a 

discriminant analysis. Physiology & Behavior, 52(2), 199-204. 

104 

Messina, I., Sambin, M., Palmieri, A., & Viviani, R. (2013). Neural correlates of 

psychotherapy in anxiety and depression: a meta-analysis. PloS one, 8(9), e74657. 

Mikulas, W. L., & Vodanovich, S. J. (1993). The essence of boredom. The Psychological 

Record, 43(1), 3. 

Millan, J. R., Renkens, F., Mourino, J. and Gerstner, W. (2004). Noninvasive brain-

actuated control of a mobile robot by human EEG, IEEE Transactions on 

Biomedical Engineering, 51, 6, 1026-1033. 

Miller, B. L., & Cummings, J. L. (Eds.). (2017). The human frontal lobes: Functions and 

disorders. Guilford Publications. 

Minas, R. K., Potter, R. F., Dennis, A. R., Bartelt, V., & Bae, S. (2014). Putting on the 

thinking cap: using NeuroIS to understand information processing biases in 

virtual teams. Journal of Management Information Systems, 30(4), 49-82. 

Mizuki, Y., Kajimura, N., Kai, S., Suetsugi, M., Ushijima, I., & Yamada, M. (1992). 

Differential responses to mental stress in high and low anxious normal humans 

assessed by frontal midline theta activity. International Journal of 

Psychophysiology, 12(2), 169-178. 

Moneta, G. B., & Csikszentmihalyi, M. (1999). Models of concentration in natural 

environments: A comparative approach based on streams of experiential 

data. Social Behavior and Personality: An International Journal, 27(6), 603-637. 

Moore, M., Storey, V., & Randolph, A. (2005). User profiles for facilitating 

conversations with locked-in users. ICIS 2005 Proceedings, 73. 

Müller-Putz, G. R., Riedl, R., & Wriessnegger, S. C. (2015). Electroencephalography 

(EEG) as a Research Tool in the Information Systems Discipline: Foundations, 

Measurement, and Applications. CAIS, 37, 46. 

Nacke, L., & Lindley, C. A. (2008, November). Flow and immersion in first-person 

shooters: measuring the player's gameplay experience. In Proceedings of the 2008 

Conference on Future Play: Research, Play, Share (pp. 81-88). ACM. 

Nacke L, Lindley CA (2009) Affective ludology, flow and immersion in a first-person 

shooter: measurement of player experience. The Journal of the Canadian Game 

Studies Association 3(5): 1-22.  

Nacke, L. E. (2010, May). Wiimote vs. controller: electroencephalographic measurement 

of affective gameplay interaction. In Proceedings of the International Academic 

Conference on the Future of Game Design and Technology (pp. 159-166). ACM. 

105 

Nacke, L. E., Stellmach, S., & Lindley, C. A. (2011). Electroencephalographic 

assessment of player experience: A pilot study in affective ludology. Simulation 

& Gaming, 42(5), 632-655. 

Nah, F. F. H., Eschenbrenner, B., & DeWester, D. (2011). Enhancing brand equity 

through flow and telepresence: A comparison of 2D and 3D virtual worlds. MIs 

Quarterly, 731-747. 

Nah, F. F. H., Eschenbrenner, B., DeWester, D., & Park, S. R. (2010). Impact of flow and 

brand equity in 3D virtual worlds. Cross-Disciplinary Models and Applications of 

Database Management: Advancing Approaches: Advancing Approaches, 21, 3, 

69-89. 

Nah, F. F. H., Eschenbrenner, B., Zeng, Q., Telaprolu, V. R., & Sepehr, S. (2014). Flow 

in gaming: literature synthesis and framework development. International Journal 

of Information Systems and Management, 1(1-2), 83-124. 

Nakamura, J., & Csikszentmihalyi, M. (2014). The concept of flow. In Flow and the 

Foundations of Positive Psychology (pp. 239-263). Springer Netherlands. 

Nakashima, K., & Sato, H. (1992). The effects of various mental tasks on appearance of 

frontal midline theta activity in EEG. Journal of Human Ergology, 21(2), 201-

206. 

Nel, D., Van Niekerk, R., Berthon, J. P., & Davies, T. (1999). Going with the flow: Web 

sites and customer involvement. Internet Research, 9(2), 109-116. 

Newberg, A., Alavi, A., Baime, M., Pourdehnad, M., Santanna, J., & d'Aquili, E. (2001). 

The measurement of regional cerebral blood flow during the complex cognitive 

task of meditation: a preliminary SPECT study. Psychiatry Research: 

Neuroimaging, 106(2), 113-122.  

Nickel, P., Hockey, G. R. J., Roberts, A. C., & Roberts, M. H. (2006). Markers of high 

risk operator functional state in adaptive control of process automation. 

In Proceedings of IEA (pp. 304-312). 

Nijholt, A. (2008, September). BCI for games: A ‘state of the art’survey. In International 

Conference on Entertainment Computing (pp. 225-228). Springer, Berlin, 

Heidelberg. 

Nijholt, A., Reidsma, D., Ruttkay, Z., van Welbergen, H., & Bos, P. (2007). Nonverbal 

and Bodily Interaction in Ambient Entertainment. NATO SECURITY THROUGH 

SCIENCE SERIES E HUMAN AND SOCIETAL DYNAMICS, 18, 343. 

106 

Nijholt, A., & Tan, D. (2007). Playing with your brain: brain-computer interfaces and 

games. In Proceedings of the International Conference on Advances in Computer 

Entertainment Technology (pp. 305-306). ACM. 

Nijholt, A., Tan, D., Allison, B., del R Milan, J., & Graimann, B. (2008). Brain-computer 

interfaces for HCI and games. In CHI'08 Extended Abstracts on Human Factors 

in Computing Systems (pp. 3925-3928). ACM. 

Nijholt, A., van Erp, J. B. F., & Heylen, D. K. J. (2008). BrainGain: BCI for HCI and 

Games. In S. J. Nasuto, & F. Hwang (Eds.), Symposium Brain Computer 

Interfaces and Human Computer Interaction: A Convergence of Ideas at the AISB 

2008 Convention "Communication, Interaction and Social Intelligence" (pp. 32-

35). Brighton, UK: The Society for the Study of Artificial Intelligence and 

Simulation of Behaviour (AISB). 

O'hanlon, J. F. (1981). Boredom: Practical consequences and a theory. Acta 

Psychologica, 49(1), 53-82. 

Okada, Y. (1993) Empirical bases for constraints in current-imaging algorithms, Brain 

Topography, 5, 4, 373-377. 

Osaka, N., Osaka, M., Kondo, H., Morishita, M., Fukuyama, H., & Shibasaki, H. (2004). 

The neural basis of executive function in working memory: an fMRI study based 

on individual differences. Neuroimage, 21(2), 623-631. 

Oswald, I. (1962). Sleeping and waking: Physiology and psychology. Amsterdam, 

Netherlands: Elsevier, 7(5), 387-388. http://dx.doi.org/10.1037/11541-000 

Pace, S. (2004). A grounded theory of the flow experiences of Web users. International 

Journal of Human-Computer Studies, 60(3), 327-363. 

Pattyn, N., Neyt, X., Henderickx, D., & Soetens, E. (2008). Psychophysiological 

investigation of vigilance decrement: boredom or cognitive fatigue?. Physiology 

& Behavior, 93(1-2), 369-378. 

Pavlou, P., Davis, F., & Dimoka, A. (2007). Neuro IS: the potential of cognitive 

neuroscience for information systems research. ICIS 2007 Proceedings, 122. 

Peifer, C. (2012). Psychophysiological correlates of flow-experience. In Advances in 

Flow Research (pp. 139-164). Springer, New York, NY. 

Perkins, R. E., & Hill, A. B. (1985). Cognitive and affective aspects of boredom. British 

Journal of Psychology, 76(2), 221-234. 

107 

Pfurtscheller, G., & Da Silva, F. L. (1999). Event-related EEG/MEG synchronization and 

desynchronization: basic principles. Clinical Neurophysiology, 110(11), 1842-

1857. 

Pfurtscheller, G., Flotzinger, D., & Neuper, C. (1994). Differentiation between finger, toe 

and tongue movement in man based on 40 Hz EEG. Electroencephalography and 

Clinical Neurophysiology, 90(6), 456-460. 

Pfurtscheller, G., Müller-Putz, G. R., Pfurtscheller, J., & Rupp, R. (2005). EEG-based 

asynchronous BCI controls functional electrical stimulation in a tetraplegic 

patient. EURASIP Journal on Applied Signal Processing, 2005, 3152-3155. 

Pizzagalli, D. A. (2007). Electroencephalography and high-density electrophysiological 

source localization. Handbook of psychophysiology, 3, 56-84. 

Plank, M. (2013). Downloads & support ocular correction ICA. Brain, 49(9), 1-4. 

Plotnikov, A., Stakheika, N., Schatten, C., Belotti, F., Pranantha, D., Berta, R., & De 

Gloria, A. (2012, October). Measuring enjoyment in games through 

electroencephalogram (EEG) signal analysis. In Proceedings of the 6th European 

Conference on Games-Based Learning (ECGBL 2012) (pp. 393-400). 

Poels, Y., Annema, J. H., Verstraete, M., Zaman, B., & De Grooff, D. (2012). Are you a 

gamer? A qualititive study on the parameters for categorizing casual and hardcore 

gamers. Iadis International Journal on www/internet, 10(1), 1-16. 

Pope, A. T., Bogart, E. H., & Bartolome, D. S. (1995). Biocybernetic system evaluates 

indices of operator engagement in automated task. Biological Psychology, 40(1-

2), 187-195. 

Posner, M. I., Rothbart, M. K., Rueda, M. R., & Tang, Y. (2010). 16 Training Effortless 

Attention. Effortless Attention, 409. 

Putman, P. (2011). Resting state EEG delta–beta coherence in relation to anxiety, 

behavioral inhibition, and selective attentional processing of threatening 

stimuli. International Journal of Psychophysiology, 80(1), 63-68. 

Qin, H., Patrick Rau, P. L., & Salvendy, G. (2009). Measuring player immersion in the 

computer game narrative. Intl. Journal of Human–Computer Interaction, 25(2), 

107-133. 

Randolph, A., Karmakar, S., & Jackson, M. (2006). Towards predicting control of a 

brain-computer interface. ICIS 2006 Proceedings, 53. 

108 

Rani, P., Sarkar, N., & Liu, C. (2005, July). Maintaining optimal challenge in computer 

games through real-time physiological feedback. In Proceedings of the 11th 

International Conference on Human Computer Interaction (Vol. 58, pp. 22-27). 

Rapee, R. M. (1993). The utilisation of working memory by worry. Behaviour Research 

and Therapy, 31(6), 617-620. 

Saadé, R., & Bahli, B. (2005). The impact of cognitive absorption on perceived 

usefulness and perceived ease of use in on-line learning: an extension of the 

technology acceptance model. Information & Management, 42(2), 317-327. 

Sachs, G., Anderer, P., Dantendorfer, K., & Saletu, B. (2004). EEG mapping in patients 

with social phobia. Psychiatry Research: Neuroimaging, 131(3), 237-247. 

Sadato, N., Nakamura, S., Oohashi, T., Nishina, E., Fuwamoto, Y., Waki, A., & 

Yonekura, Y. (1998). Neural networks for generation and suppression of alpha 

rhythm: a PET study. Neuroreport, 9(5), 893-897. 

Salinas, E., & Sejnowski, T. J. (2001). Correlated neuronal activity and the flow of neural 

information. Nature Reviews Neuroscience, 2(8), 539. 

Sanei, S., & Chambers, J. (2007). EEG signal processing. Chichester, England;Hoboken, 

NJ;: John Wiley & Sons. 

Sanei, S., & Chambers, J. A. (2013). EEG signal processing. John Wiley & Sons. 

Sarason, I. G. (1988). Anxiety, self-preoccupation and attention. Anxiety research, 1(1), 

3-7. 

Sauseng, P., Klimesch, W., Doppelmayr, M., Hanslmayr, S., Schabus, M., & Gruber, W. 

R. (2004). Theta coupling in the human electroencephalogram during a working 

memory task. Neuroscience Letters, 354(2), 123-126. 

Sauseng, P., Klimesch, W., Schabus, M., & Doppelmayr, M. (2005). Fronto-parietal EEG 

coherence in theta and upper alpha reflect central executive functions of working 

memory. International Journal of Psychophysiology, 57(2), 97-103. 

Sanchez-Vives, M.V., Slater, M. (2005). From presence to consciousness through virtual 

real-ity. Nature Reviews Neuroscience 6(4): 332-339.  

Schier, M. A. (2000). Changes in EEG alpha power during simulated driving: a 

demonstration. International Journal of Psychophysiology, 37(2), 155-162. 

109 

Scho¨npflug, W. (1992). Anxiety and effort. In D. G. Forgas, T. Sosnowski, & K. 

Wrzesniewski (Eds.), Anxiety: Recent developments in health research (pp. 51– 

62). Washington, DC: Hemisphere. 

Schur, M. (1969). Affects and cognition. The International Journal of Psycho-

Analysis, 50, 647. Schwerdtfeger, A., & Kohlmann, C.-W. (2004). Repressive 

coping style and the significance of verbal-autonomic response dissociations. In 

U.Hentschel, G. Smith, J. G. Draguns, & W. Ehlers (Eds.), Defense Mechanisms: 

Theoretical, Research, and Clinical Perspectives (pp. 239–278). Amsterdam: 

Elsevier. 

Seger, J., & Potts, R. (2012). Personality correlates of psychological flow states in 

videogame play. Current Psychology, 31(2), 103-121. 

Sehlmeyer, C., Dannlowski, U., Schöning, S., Kugel, H., Pyka, M., Pfleiderer, B., ... & 

Konrad, C. (2011). Neural correlates of trait anxiety in fear 

extinction. Psychological Medicine, 41(4), 789-798. 

Siekpe, J. S. (2005). An examination of the multidimensionality of flow construct in a 

computer-mediated environment. Journal of Electronic Commerce 

Research, 6(1), 31. 

Skadberg, Y. X., & Kimmel, J. R. (2004). Visitors’ flow experience while browsing a 

Web site: its measurement, contributing factors and consequences. Computers in 

Human Behavior, 20(3), 403-422. 

Small, J. G. (1971). Sensory evoked responses of autistic children. Infantile Autism, 224-

39. 

Smith, E. E., & Jonides, J. (1999). Storage and executive processes in the frontal 

lobes. Science, 283(5408), 1657-1661. 

Spampinato, M. V., Wood, J. N., De Simone, V., & Grafman, J. (2009). Neural correlates 

of anxiety in healthy volunteers: a voxel-based morphometry study. The Journal 

of Neuropsychiatry and Clinical Neurosciences, 21(2), 199-205. 

Spielberger, C. D., Gorsuch, R. L., Lushene, R., Vagg, P., & Jacobs, G. (1983). Manual 

for the state-trait anxiety inventory (Palo Alto, CA, Consulting Psychologists 

Press). Inc. 

Stuss, D. T. (2011). Functions of the frontal lobes: relation to executive 

functions. Journal of the International Neuropsychological Society, 17(5), 759-

765. 

110 

Stuss, D. T., & Alexander, M. P. (2000). Executive functions and the frontal lobes: a 

conceptual view. Psychological Research, 63(3-4), 289-298. 

Sundberg, N. D., Latkin, C. A., Farmer, R. F., & Saoud, J. (1991). Boredom in young 

adults: Gender and cultural comparisons. Journal of Cross-Cultural 

Psychology, 22(2), 209-223. 

Sweetser, P., & Wyeth, P. (2005). GameFlow: a model for evaluating player enjoyment 

in games. Computers in Entertainment (CIE), 3(3), 3-3. 

Tabatabaie, A. F., Azadehfar, M. R., Mirian, N., Noroozian, M., Yoonessi, A., Saebipour, 

M. R., & Yoonessi, A. (2014). Neural correlates of boredom in music 

perception. Basic and Clinical Neuroscience, 5(4), 259. 

Tan, D., & Nijholt, A. (2010). Brain-computer interfaces and human-computer 

interaction. In Brain-Computer Interfaces (pp. 3-19). Springer London. 

Taywade, S. A., & Raut, R. D. (2014). A review: EEG signal analysis with different 

methodologies. In Proceedings of the National Conference on Innovative 

Paradigms in Engineering and Technology (NCIPET’12) (pp. 29-31). 

Teplan, M. (2002). Fundamentals of EEG measurement. Measurement Science 

Review, 2(2), 1-11. 

Thompson, H., & Vedantam, S. (2012). A lively mind: Your brain on Jane Austen. NPR 

Health Blog. Retrieved from http://www. npr. 

org/blogs/health/2012/10/09/162401053/alively-mind-your-brain-on-jane-austen. 

html. 

Tinguely, G., Finelli, L. A., Landolt, H. P., Borbély, A. A., & Achermann, P. (2006). 

Functional EEG topography in sleep and waking: state-dependent and state-

independent features. Neuroimage, 32(1), 283-292. 

Todd, J. J., & Marois, R. (2004). Capacity limit of visual short-term memory in human 

posterior parietal cortex. Nature, 428(6984), 751. 

Tondello, G. F. (2016). An introduction to gamification in human-computer 

interaction. XRDS: Crossroads, The ACM Magazine for Students, 23(1), 15-17. 

Toscani, M., Marzi, T., Righi, S., Viggiano, M. P., & Baldassi, S. (2010). Alpha waves: a 

neural signature of visual suppression. Experimental Brain Research, 207(3-4), 

213-219. 

111 

Treder, M. S., Bahramisharif, A., Schmidt, N. M., Van Gerven, M. A., & Blankertz, B. 

(2011). Brain-computer interfacing using modulations of alpha activity induced 

by covert shifts of attention. Journal of Neuroengineering and 

Rehabilitation, 8(1), 24. 

Trevino, L. K., & Webster, J. (1992). Flow in computer-mediated communication: 

Electronic mail and voice mail evaluation and impacts. Communication 

Research, 19(5), 539-573. 

Ulrich, M., Keller, J., Hoenig, K., Waller, C., & Grön, G. (2014). Neural correlates of 

experimentally induced flow experiences. Neuroimage, 86, 194-202. 

Ulrich, N., & Hewig, J. (2014). A miss is as good as a mile? Processing of near and full 

outcomes in a gambling paradigm. Psychophysiology, 51(9), 819-823. 

van Erp, J., Lotte, F., & Tangermann, M. (2012). Brain-computer interfaces: beyond 

medical applications. Computer, 45(4), 26-34. 

Wang, C. C., & Hsu, M. C. (2014). An exploratory study using inexpensive 

electroencephalography (EEG) to understand flow experience in computer-based 

instruction. Information & Management, 51(7), 912-923. 

Wang, C. J., Liu, W. C., & Khoo, A. (2009). The psychometric properties of dispositional 

flow scale-2 in internet gaming. Current Psychology, 28(3), 194-201. 

Wang, S. F., Lee, Y. H., Shiah, Y. J., & Young, M. S. (2011, November). Time-

frequency analysis of eegs recorded during meditation. In Robot, Vision and 

Signal Processing (RVSP), 2011 First International Conference on (pp. 73-76). 

IEEE. 

Webster, J., Trevino, L. K., & Ryan, L. (1993). The dimensionality and correlates of flow 

in human-computer interactions. Computers in Human Behavior, 9(4), 411-426. 

Weissman, D. H., Roberts, K. C., Visscher, K. M., & Woldorff, M. G. (2006). The neural 

bases of momentary lapses in attention. Nature Neuroscience, 9(7), 971. 

Zaman, M., Anandarajan, M., & Dai, Q. (2010). Experiencing flow with instant 

messaging and its facilitating role on creative behaviors. Computers in Human 

Behavior, 26(5), 1009-1018. 

112 

VITA 

Tejaswini Yelamanchili was born in Andhra Pradesh, India. In May 2013, she 

received her Bachelor’s degree in Electronics and Communication Engineering from 

Jawaharlal Nehru Technological University, India. She then joined Missouri University 

of Science & Technology in Fall 2016. She earned a Graduate Certificate in Business 

Analytics and Data Science in May 2017 and received her Master’s degree in Information 

Science and Technology from Missouri S&T in July 2018. During her course she pursued 

internship with Williams-Sonoma in 2017. 