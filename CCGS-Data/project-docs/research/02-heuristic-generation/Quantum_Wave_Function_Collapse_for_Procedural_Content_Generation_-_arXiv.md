# Quantum Wave Function Collapse for Procedural Content Generation - arXiv

Quantum Wave Function Collapse for Procedural Content Generation

[ Back to arXiv](https://arxiv.org/)  

[ Back to arXiv](https://arxiv.org/)

This is **experimental HTML** to improve accessibility. We invite you to report rendering errors. Use Alt+Y to toggle on accessible reporting links and Alt+Shift+Y to toggle off. Learn more [about this project](https://info.arxiv.org/about/accessible_HTML.html) and [help improve conversions](https://info.arxiv.org/help/submit_latex_best_practices.html).

[Why HTML?](https://info.arxiv.org/about/accessible_HTML.html) [Report Issue](#myForm) [Back to Abstract](https://arxiv.org/abs/2312.13853v2) [Download PDF](https://arxiv.org/pdf/2312.13853v2) 

## Table of Contents

[Abstract](https://arxiv.org/html/2312.13853v2#abstract)

[RELATED WORK](https://arxiv.org/html/2312.13853v2#Sx1)

[CLASSICAL METHODS](https://arxiv.org/html/2312.13853v2#Sx2)

[Probabilistic Iterative PCG (PIPCG)](https://arxiv.org/html/2312.13853v2#Sx2.SSx1)

[Iterative Process.](https://arxiv.org/html/2312.13853v2#Sx2.SSx1.SSSx1)

[Probabilistic Generation.](https://arxiv.org/html/2312.13853v2#Sx2.SSx1.SSSx2)

[Classical Wave Function Collapse (CWFC)](https://arxiv.org/html/2312.13853v2#Sx2.SSx2)

[Adjacency.](https://arxiv.org/html/2312.13853v2#Sx2.SSx2.SSSx1)

[Patterns.](https://arxiv.org/html/2312.13853v2#Sx2.SSx2.SSSx2)

[CWFC Example: Checkerboard](https://arxiv.org/html/2312.13853v2#Sx2.SSx3)

[QUANTUM METHODS](https://arxiv.org/html/2312.13853v2#Sx3)

[Quantum Wave Function Collapse (QWFC)](https://arxiv.org/html/2312.13853v2#Sx3.SSx1)

[Value Encoding.](https://arxiv.org/html/2312.13853v2#Sx3.SSx1.SSSx1)

[Probability Encoding.](https://arxiv.org/html/2312.13853v2#Sx3.SSx1.SSSx2)

[QWFC Example: Checkerboard](https://arxiv.org/html/2312.13853v2#Sx3.SSx2)

[Hybrid Quantum-Classical WFC (HWFC)](https://arxiv.org/html/2312.13853v2#Sx3.SSx3)

[DEMONSTRATION](https://arxiv.org/html/2312.13853v2#Sx4)

[Checkerboard Revisited](https://arxiv.org/html/2312.13853v2#Sx4.SSx1)

[Pipes](https://arxiv.org/html/2312.13853v2#Sx4.SSx2)

[Hexagon Map](https://arxiv.org/html/2312.13853v2#Sx4.SSx3)

[Platformer](https://arxiv.org/html/2312.13853v2#Sx4.SSx4)

[Voxel Skyline](https://arxiv.org/html/2312.13853v2#Sx4.SSx5)

[CONCLUSION](https://arxiv.org/html/2312.13853v2#Sx5)

[APPENDIX](https://arxiv.org/html/2312.13853v2#Sx6)

[Technical Details of PIPCG](https://arxiv.org/html/2312.13853v2#Sx6.SSx1)

[Technical Details of CWFC](https://arxiv.org/html/2312.13853v2#Sx6.SSx2)

[Technical Details of QWFC](https://arxiv.org/html/2312.13853v2#Sx6.SSx3)

[Technical Details of HWFC](https://arxiv.org/html/2312.13853v2#Sx6.SSx4)

[ACKNOWLEDGMENTS](https://arxiv.org/html/2312.13853v2#Sx7)

[References](https://arxiv.org/html/2312.13853v2#bib)

HTML conversions [sometimes display errors](https://info.dev.arxiv.org/about/accessibility_html_error_messages.html) due to content that did not convert correctly from the source. This paper uses the following packages that are not yet supported by the HTML conversion tool. Feedback on these issues are not necessary; they are known and are being worked on.

failed: background

failed: tikzpagenodes

Authors: achieve the best HTML results from your LaTeX submissions by following these [best practices](https://info.arxiv.org/help/submit_latex_best_practices.html).

[License: arXiv.org perpetual non-exclusive license](https://info.arxiv.org/help/license/index.html#licenses-available)

arXiv:2312.13853v2 [quant-ph] 09 Sep 2024

\backgroundsetup

angle=0, scale=1, contents= This article has been accepted for publication in IEEE Computer Graphics and Applications. This is the author's version which has not been fully edited and content may change prior to final publication. Citation information: DOI 10.1109/MCG.2024.3447775

© 2024 IEEE. Personal use is permitted, but republication/redistribution requires IEEE permission. See https://www.ieee.org/publications/rights/index.html for more information.

Report issue for preceding element \jvol \jnum \paper \jmonth August \jtitle

Report issue for preceding element

\sptitle

FEATURE ARTICLE

Report issue for preceding element

# Quantum Wave Function Collapse for Procedural Content Generation

Report issue for preceding element

Raoul Heese Fraunhofer ITWM, Fraunhofer-Platz 1, 67663 Kaiserslautern, Germany

Report issue for preceding element

(2024)

Abstract

Report issue for preceding element

Quantum computers exhibit an inherent randomness, so it seems natural to consider them for procedural content generation. In this work, a quantum version of the famous (classical) wave function collapse algorithm is proposed. This quantum wave function collapse algorithm is based on the idea that a quantum circuit can be prepared in such a way that it acts as a special-purpose random generator for content of a desired form. The proposed method is presented theoretically and investigated experimentally on simulators and IBM Quantum devices.

Report issue for preceding element

\chapteri

W ave function collapse (WFC) is a powerful tool for procedural content generation (PCG) that is for example used in video games, as it can save significant development time by automating the creation of diverse and complicated game elements. However, it is not limited to video games, but also has applications in various other fields, including art and design, where the need for algorithmically generated content is widespread. Content in this context can therefore have a broad range of meanings: Images, 3D models, game levels, text, sound or a combination of these, to name just a few examples.

Report issue for preceding element

The WFC algorithm [ [1](https://arxiv.org/html/2312.13853v2#bib.bib1)] is a a non-backtracking, greedy constraint solving method [ [2](https://arxiv.org/html/2312.13853v2#bib.bib2), [3](https://arxiv.org/html/2312.13853v2#bib.bib3)] that is able to generate complex patterns based on a set of input samples. It is known for its ability to create diverse and complex outputs that resemble the input samples while exhibiting novel combinations and variations. WFC employs two implementation strategies: the simple tiled model and the overlapping model, which share an identical algorithm core [ [4](https://arxiv.org/html/2312.13853v2#bib.bib4)] . In the simple tiled model, tilesets are manually prescribed with predefined adjacency constraints, whereas the overlapping model automatically generates this information from a sample input.

Report issue for preceding element

In both strategies, the output is compartmentalized into segments and the possibilities for each segment are iteratively constrained until a unique solution is determined. The term “wave function collapse” is borrowed from quantum physics because of the conceptual similarity. The “wave function” refers to the set of potential states of the segments, whereas the ”collapse“ occurs during the iterative process of narrowing down the possibilities.

Report issue for preceding element

Despite its name, WFC is a purely classical algorithm. But even if WFC has nothing to do with quantum physics beyond the terminology, the question arises as to whether quantum computers can still be used to execute a genuine quantum version of the algorithm. The motivation for leveraging quantum computers for PCG, which is called quantum procedural content generation (QPCG) in the following, lies in their potential to introduce new levels of complexity, creativity, and efficiency. Because quantum physics exhibits intrinsic randomness [ [5](https://arxiv.org/html/2312.13853v2#bib.bib5)] , quantum random number generators (QRNGs) can be viewed as sources of true randomness [ [6](https://arxiv.org/html/2312.13853v2#bib.bib6)] , making them a natural choice for generating randomized content. In addition, quantum superposition allows the random generation of complex patterns and variations that classical algorithms might find challenging to generate efficiently.

Report issue for preceding element

Currently available noisy intermediate-scale quantum (NISQ) hardware has very limited capabilities and is subject to significant noise and uncertainty [ [7](https://arxiv.org/html/2312.13853v2#bib.bib7)] . While these kind of disruptive effects are typically to be avoided, they can also lead to novel and unexpected results for the generated content, potentially fostering creativity. In this sense, despite the technological limitations, it seems promising to use quantum computers already today for simple PCG tasks and to study the results. For more complex tasks, hybrid quantum-classical algorithms are a promising strategy to overcome the limitations, for example by integrating quantum subroutines into classical PCG methods to increase variability and complexity.

Report issue for preceding element

QPCG is therefore a promising approach, currently mainly for research, but in the future possibly also for practical applications. However, a general discussion of QPCG is beyond the scope of this paper. Instead, the focus will specifically be on the WFC algorithm and how it can be modified to enable the use of gate-based quantum computers [ [8](https://arxiv.org/html/2312.13853v2#bib.bib8)] . This paper has four main contributions:

Report issue for preceding element

• A probabilistic formulation of the simple tiled model of WFC is presented as a foundation for a quantum version. We denote this formulation as classical wave function collapse (CWFC) to clearly distinguish between classical and non-classical approaches. Report issue for preceding element

• The quantum wave function collapse (QWFC) method is proposed, which founds on the encoding of a probability distribution in a quantum circuit. Report issue for preceding element

• The hybrid quantum-classical wave function collapse (HWFC) method is proposed to take into account the limitations of NISQ hardware. Report issue for preceding element

• The proposed methods are tested on simulators and IBM Quantum devices. Report issue for preceding element

The remainder of the manuscript is organized as follows. After a brief summary of related work, a formal description of CWFC is given in an appropriate probabilistic form, which subsequently allows the development of QWFC and HWFC. The proposed methods are then demonstrated in practice. Finally, the paper ends with a conclusion.

Report issue for preceding element

## RELATED WORK

Report issue for preceding element

There are many approaches to PCG, such as machine learning [ [9](https://arxiv.org/html/2312.13853v2#bib.bib9)] , evolutionary algorithms [ [10](https://arxiv.org/html/2312.13853v2#bib.bib10)] and search-based methods [ [11](https://arxiv.org/html/2312.13853v2#bib.bib11)] . WFC was originally proposed by Gumin [ [1](https://arxiv.org/html/2312.13853v2#bib.bib1)] as an example of the latter. Subsequent research has extended the basic WFC algorithm to address its limitations and expand its capabilities [ [2](https://arxiv.org/html/2312.13853v2#bib.bib2), [3](https://arxiv.org/html/2312.13853v2#bib.bib3)] . For example, by eliminating the need for two-dimensional grids [ [12](https://arxiv.org/html/2312.13853v2#bib.bib12)] , adding design constraints [ [13](https://arxiv.org/html/2312.13853v2#bib.bib13)] , or allowing interactive user control over the results [ [14](https://arxiv.org/html/2312.13853v2#bib.bib14), [15](https://arxiv.org/html/2312.13853v2#bib.bib15)] . Better scaling and runtime can be achieved by a hierarchical approach [ [16](https://arxiv.org/html/2312.13853v2#bib.bib16)] , a nested approach [ [4](https://arxiv.org/html/2312.13853v2#bib.bib4)] or by using bitwise operations [ [17](https://arxiv.org/html/2312.13853v2#bib.bib17)] .

Report issue for preceding element

In contrast to classical PCG, QPCG is much less common in the literature. Previous work on QPCG was mainly focusing on the quantum generalization of a blurring process [ [18](https://arxiv.org/html/2312.13853v2#bib.bib18), [19](https://arxiv.org/html/2312.13853v2#bib.bib19)] and map generation using a quantum-enhanced decision making process [ [20](https://arxiv.org/html/2312.13853v2#bib.bib20)] . Moreover, related projects have been carried out in connection with the development of quantum-inspired games [ [21](https://arxiv.org/html/2312.13853v2#bib.bib21)] .

Report issue for preceding element

## CLASSICAL METHODS

Report issue for preceding element

This section provides a formal framework for the following methods, referred to as probabilistic iterative PCG (PIPCG). Subsequently, it is shown how the common CWFC is a special case of PIPCG. Only the main features of PIPCG and CWFC are summarized, the technical details can be found in the appendix.

Report issue for preceding element

### Probabilistic Iterative PCG (PIPCG)

Report issue for preceding element

To begin with, it is first necessary to formally define the generated content at a sufficiently abstract level. For this purpose, it is presumed that any content instance C 𝐶 C italic_C can be described as an ordered sequence of N 𝑁 N italic_N segments

Report issue for preceding element

C := { ( 1 , v 1 ) , … , ( N , v N ) } ∈ 𝒞 , assign 𝐶 1 subscript 𝑣 1 … 𝑁 subscript 𝑣 𝑁 𝒞 C:={(1,v_{1}),\dots,(N,v_{N})}\in\mathcal{C}, italic_C := { ( 1 , italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT ) , … , ( italic_N , italic_v start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT ) } ∈ caligraphic_C ,

(1)

where each segment ( i , v i ) 𝑖 subscript 𝑣 𝑖 (i,v_{i}) ( italic_i , italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ) is defined by a unique identifier i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] and a value v i ∈ A subscript 𝑣 𝑖 𝐴 v_{i}\in A italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ italic_A from an alphabet A := [ 1 , W ] assign 𝐴 1 𝑊 A:=[1,W] italic_A := [ 1 , italic_W ] consisting of W 𝑊 W italic_W symbols with the notation [ i , j ] := { i , … , j } assign 𝑖 𝑗 𝑖 … 𝑗 [i,j]:={i,\dots,j} [ italic_i , italic_j ] := { italic_i , … , italic_j } . The set of all possible content instances 𝒞 𝒞 \mathcal{C} caligraphic_C contains W N superscript 𝑊 𝑁 W^{N} italic_W start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT elements. For example, if the content represents an image, its individual pixels can constitute the segments. Each pixel can attain one color from the available color space of the image (as its alphabet).

Report issue for preceding element

Iterative Process.

Report issue for preceding element

The procedural generation of content instance C ∈ 𝒞 𝐶 𝒞 C\in\mathcal{C} italic_C ∈ caligraphic_C is realized through an iterative process, where each iteration k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] consists of three steps:

Report issue for preceding element

Randomly select a new segment identifier s  ( k ) ∈ [ 1 , N ] 𝑠 𝑘 1 𝑁 s(k)\in[1,N] italic_s ( italic_k ) ∈ [ 1 , italic_N ] from a set of available identifiers with a user-defined probability distribution. Report issue for preceding element

Randomly select a corresponding value v s  ( k ) ∈ A subscript 𝑣 𝑠 𝑘 𝐴 v_{s(k)}\in A italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT ∈ italic_A from a set of available values with a user-defined probability distribution. Report issue for preceding element

Add the chosen segment ( s  ( k ) , v s  ( k ) ) 𝑠 𝑘 subscript 𝑣 𝑠 𝑘 (s(k),v_{s(k)}) ( italic_s ( italic_k ) , italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT ) to the content instance. Report issue for preceding element

By repeating these steps, the content instance is assembled in the sense of C  ( 0 )  → k = 1  C  ( 1 )  → k = 2  ⋯  → k = N  C  ( N ) ≡ C 𝐶 0 𝑘 1 → 𝐶 1 𝑘 2 → ⋯ 𝑘 𝑁 → 𝐶 𝑁 𝐶 C(0)\overset{k=1}{\rightarrow}C(1)\overset{k=2}{\rightarrow}\cdots\overset{k=N% }{\rightarrow}C(N)\equiv C italic_C ( 0 ) start_OVERACCENT italic_k = 1 end_OVERACCENT start_ARG → end_ARG italic_C ( 1 ) start_OVERACCENT italic_k = 2 end_OVERACCENT start_ARG → end_ARG ⋯ start_OVERACCENT italic_k = italic_N end_OVERACCENT start_ARG → end_ARG italic_C ( italic_N ) ≡ italic_C , where C  ( k ) := { ( s  ( 1 ) , v s  ( 1 ) ) , … , ( s  ( k ) , v s  ( k ) ) } assign 𝐶 𝑘 𝑠 1 subscript 𝑣 𝑠 1 … 𝑠 𝑘 subscript 𝑣 𝑠 𝑘 C(k):={(s(1),v_{s(1)}),\dots,(s(k),v_{s(k)})} italic_C ( italic_k ) := { ( italic_s ( 1 ) , italic_v start_POSTSUBSCRIPT italic_s ( 1 ) end_POSTSUBSCRIPT ) , … , ( italic_s ( italic_k ) , italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT ) } represents the generated partial content instance at the end of iteration k 𝑘 k italic_k . After N 𝑁 N italic_N iterations, the newly generated content instance is complete.

Report issue for preceding element

Probabilistic Generation.

Report issue for preceding element

An essential concept of PCG is that only a limited subset of all possible content instances C ∈ 𝒞 𝐶 𝒞 C\in\mathcal{C} italic_C ∈ caligraphic_C is generated according to the designer's aesthetic preferences, a given set of rules, or some other underlying logic; otherwise, the instances could be drawn directly from 𝒞 𝒞 \mathcal{C} caligraphic_C with much less effort. For PIPCG, the user-defined probability distributions for the segment identifiers and the corresponding values represent exactly this underlying logic.

Report issue for preceding element

Generating content with PIPCG effectively corresponds to drawing a sample from the random variable 𝑪 ∼ p  ( C ) similar-to 𝑪 𝑝 𝐶 \boldsymbol{C}\sim p(C) bold_italic_C ∼ italic_p ( italic_C ) , where

Report issue for preceding element

p  ( C ) = p  ( v 1 , … , v N ) 𝑝 𝐶 𝑝 subscript 𝑣 1 … subscript 𝑣 𝑁 p(C)=p(v_{1},\dots,v_{N}) italic_p ( italic_C ) = italic_p ( italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_v start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT )

(2)

denotes the probability to generate the content C 𝐶 C italic_C in the form of [Equation 1](https://arxiv.org/html/2312.13853v2#Sx2.E1) with values v 1 , … , v N subscript 𝑣 1 … subscript 𝑣 𝑁 v_{1},\dots,v_{N} italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_v start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT . Hence, 𝒞 ¯ := { C | C ∈ 𝒞 ∧ p  ( C ) > 0 } assign ¯ 𝒞 conditional-set 𝐶 𝐶 𝒞 𝑝 𝐶 0 \underline{\mathcal{C}}:={C,|,C\in\mathcal{C},\land,p(C)>0} under¯ start_ARG caligraphic_C end_ARG := { italic_C | italic_C ∈ caligraphic_C ∧ italic_p ( italic_C ) > 0 } represents the set of all content instances that can potentially be generated out of all possible content instances 𝒞 𝒞 \mathcal{C} caligraphic_C .

Report issue for preceding element

### Classical Wave Function Collapse (CWFC)

Report issue for preceding element

CWFC can be understood as a special case of PIPCG. In this manuscript, only a simplified form of the simple tiled model of CWFC is considered (with the minor extension of graph-based adjacency [ [12](https://arxiv.org/html/2312.13853v2#bib.bib12)] ), as it is sufficient to capture the key components of the approach. To realize CWFC, the two randomized selection steps of PIPCG are chosen as follows:

Report issue for preceding element

For the segment identifier selection, the segments with the smallest Shannon entropy with respect to the available value options are chosen. Report issue for preceding element

Value selection is determined by a pattern-based set of user-defined rules. Report issue for preceding element

Adjacency.

Report issue for preceding element

For the pattern-based value selection, the segments are organized in such a way that they have a predefined adjacency relationship to each other that does not change. For example, consider that the pixels of an image constitute the segments. Choosing adjacency between the nearest neighbors leads to an adjacency configuration with four directions (right, up, left, down) as shown in [Figure 1](https://arxiv.org/html/2312.13853v2#Sx2.F1).

Report issue for preceding element 

Figure 1: Exemplary nearest neighbor adjacency configuration for CWFC on a two-dimensional grid consisting of N = 9 𝑁 9 N=9 italic_N = 9 segments. The adjacency relationship for each of the four directions right ( d = 1 𝑑 1 d=1 italic_d = 1 ), up ( d = 2 𝑑 2 d=2 italic_d = 2 ), left ( d = 3 𝑑 3 d=3 italic_d = 3 ), and down ( d = 4 𝑑 4 d=4 italic_d = 4 ) can be represented as a directed graph with adjacency matrix α d superscript 𝛼 𝑑 \alpha^{d} italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT . Report issue for preceding element

Formally, each direction within a adjacency configuration is specified by an index d ∈ [ 1 , D ] 𝑑 1 𝐷 d\in[1,D] italic_d ∈ [ 1 , italic_D ] , where D 𝐷 D italic_D denotes the total number of directions. The direction-based adjacency relationship between different segments is then defined by the coefficients α i , j d ∈ { 0 , 1 } subscript superscript 𝛼 𝑑 𝑖 𝑗 0 1 \alpha^{d}{i,j}\in{0,1} italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_i , italic_j end_POSTSUBSCRIPT ∈ { 0 , 1 } for i , j ∈ [ 1 , N ] 𝑖 𝑗 1 𝑁 i,j\in[1,N] italic_i , italic_j ∈ [ 1 , italic_N ] and d ∈ [ 1 , D ] 𝑑 1 𝐷 d\in[1,D] italic_d ∈ [ 1 , italic_D ] . If α i , j d = 1 subscript superscript 𝛼 𝑑 𝑖 𝑗 1 \alpha^{d}{i,j}=1 italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_i , italic_j end_POSTSUBSCRIPT = 1 , segment i 𝑖 i italic_i is connected to segment j 𝑗 j italic_j in direction d 𝑑 d italic_d ; otherwise not. For each direction d 𝑑 d italic_d , these coefficients form an adjacency matrix α d ∈ { 0 , 1 } N × N superscript 𝛼 𝑑 superscript 0 1 𝑁 𝑁 \alpha^{d}\in{0,1}^{N\times N} italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT ∈ { 0 , 1 } start_POSTSUPERSCRIPT italic_N × italic_N end_POSTSUPERSCRIPT of a directed graph with N 𝑁 N italic_N vertices that represent the segments. Hence, the segment adjacency is in fact an abstract concept that is not necessarily related to the visual form of the content.

Report issue for preceding element

Patterns.

Report issue for preceding element

Patterns define how values are chosen based on the already generated content. A pattern

Report issue for preceding element

P := { ( d 1 , v 1 ) , … , ( d n , v n ) } assign 𝑃 subscript 𝑑 1 subscript 𝑣 1 … subscript 𝑑 𝑛 subscript 𝑣 𝑛 P:={(d_{1},v_{1}),\dots,(d_{n},v_{n})} italic_P := { ( italic_d start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT ) , … , ( italic_d start_POSTSUBSCRIPT italic_n end_POSTSUBSCRIPT , italic_v start_POSTSUBSCRIPT italic_n end_POSTSUBSCRIPT ) }

(3)

consists of a set of n ≤ D 𝑛 𝐷 n\leq D italic_n ≤ italic_D direction-value pairs with d i ∈ [ 1 , D ] subscript 𝑑 𝑖 1 𝐷 d_{i}\in[1,D] italic_d start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ [ 1 , italic_D ] and v i ∈ A subscript 𝑣 𝑖 𝐴 v_{i}\in A italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ italic_A for i ∈ [ 1 , n ] 𝑖 1 𝑛 i\in[1,n] italic_i ∈ [ 1 , italic_n ] , which represents a layout of segments. A pattern-based rule

Report issue for preceding element

r i P  ( v , P , u ) = ( v , u , P ) superscript subscript 𝑟 𝑖 P 𝑣 𝑃 𝑢 𝑣 𝑢 𝑃 r_{i}^{\mathrm{P}}(v,P,u)=(v,u,P) italic_r start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_v , italic_P , italic_u ) = ( italic_v , italic_u , italic_P )

(4)

is defined by a value v ∈ A 𝑣 𝐴 v\in A italic_v ∈ italic_A , a factor u ∈ ℝ > 0 𝑢 subscript ℝ absent 0 u\in\mathbb{R}_{>0} italic_u ∈ blackboard_R start_POSTSUBSCRIPT > 0 end_POSTSUBSCRIPT , and a pattern P 𝑃 P italic_P . It describes the weight u 𝑢 u italic_u of selecting a value v 𝑣 v italic_v for the target segment given the layout of adjacent segments P 𝑃 P italic_P . The higher the value u 𝑢 u italic_u , the more probable becomes the selection of the corresponding value. A selection mechanism with m 𝑚 m italic_m rules is then fully defined by a ruleset

Report issue for preceding element

R := { r 1 , … , r m } assign 𝑅 subscript 𝑟 1 … subscript 𝑟 𝑚 R:={r_{1},\dots,r_{m}} italic_R := { italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_r start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT }

(5)

comprised of rules from [Equation 4](https://arxiv.org/html/2312.13853v2#Sx2.E4) with i ∈ [ 1 , m ] 𝑖 1 𝑚 i\in[1,m] italic_i ∈ [ 1 , italic_m ] .

Report issue for preceding element

### CWFC Example: Checkerboard

Report issue for preceding element

As a simple example, consider the generation of images with black and white checkerboard patterns. The pixels of an image constitute the segments and the alphabet consists of only W = 2 𝑊 2 W=2 italic_W = 2 symbols standing for the two colors. As an adjacency configuration, the nearest-neighbor adjacency from [Figure 1](https://arxiv.org/html/2312.13853v2#Sx2.F1) is presumed.

Report issue for preceding element

A checkerboard image can be achieved with only two patterns of the form of [Equation 3](https://arxiv.org/html/2312.13853v2#Sx2.E3), namely P 1 := { ( 1 , 1 ) , ( 2 , 1 ) , ( 3 , 1 ) , ( 4 , 1 ) } assign subscript 𝑃 1 1 1 2 1 3 1 4 1 P_{1}:={(1,1),(2,1),(3,1),(4,1)} italic_P start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT := { ( 1 , 1 ) , ( 2 , 1 ) , ( 3 , 1 ) , ( 4 , 1 ) } and P 2 := { ( 1 , 2 ) , ( 2 , 2 ) , ( 3 , 2 ) , ( 4 , 2 ) } assign subscript 𝑃 2 1 2 2 2 3 2 4 2 P_{2}:={(1,2),(2,2),(3,2),(4,2)} italic_P start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT := { ( 1 , 2 ) , ( 2 , 2 ) , ( 3 , 2 ) , ( 4 , 2 ) } . The corresponding ruleset, [Equation 5](https://arxiv.org/html/2312.13853v2#Sx2.E5), reads R = { r 1 P , r 2 P } 𝑅 superscript subscript 𝑟 1 P superscript subscript 𝑟 2 P R={r_{1}^{\mathrm{P}},r_{2}^{\mathrm{P}}} italic_R = { italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT , italic_r start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT } and therefore contains the m = 2 𝑚 2 m=2 italic_m = 2 rules r 1 P  ( v = 2 , P = P 1 , u = 1 ) superscript subscript 𝑟 1 P formulae-sequence 𝑣 2 formulae-sequence 𝑃 subscript 𝑃 1 𝑢 1 r_{1}^{\mathrm{P}}(v=2,P=P_{1},u=1) italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_v = 2 , italic_P = italic_P start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_u = 1 ) and r 2 P  ( v = 1 , P = P 1 , u = 1 ) superscript subscript 𝑟 2 P formulae-sequence 𝑣 1 formulae-sequence 𝑃 subscript 𝑃 1 𝑢 1 r_{2}^{\mathrm{P}}(v=1,P=P_{1},u=1) italic_r start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_v = 1 , italic_P = italic_P start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_u = 1 ) , see [Figure 2](https://arxiv.org/html/2312.13853v2#Sx2.F2).

Report issue for preceding element 

Figure 2: Visualization of pattern-based rules. (a) Visualization scheme. The center tile corresponds to the target segment i 𝑖 i italic_i with a target value of v 𝑣 v italic_v , whereas the adjacent tiles represent the required values v 1 , … , v 4 ∈ { 1 , 2 } subscript 𝑣 1 … subscript 𝑣 4 1 2 v_{1},\dots,v_{4}\in{1,2} italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_v start_POSTSUBSCRIPT 4 end_POSTSUBSCRIPT ∈ { 1 , 2 } of the four adjacent segments in the respective directions d = 1 , … , d = 4 formulae-sequence 𝑑 1 … 𝑑 4 d=1,\dots,d=4 italic_d = 1 , … , italic_d = 4 . (b) Pattern-based rules r 1 P  ( v = 2 , P = P 1 , u = 1 ) superscript subscript 𝑟 1 P formulae-sequence 𝑣 2 formulae-sequence 𝑃 subscript 𝑃 1 𝑢 1 r_{1}^{\mathrm{P}}(v=2,P=P_{1},u=1) italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_v = 2 , italic_P = italic_P start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_u = 1 ) and r 2 P  ( v = 1 , P = P 2 , u = 1 ) superscript subscript 𝑟 2 P formulae-sequence 𝑣 1 formulae-sequence 𝑃 subscript 𝑃 2 𝑢 1 r_{2}^{\mathrm{P}}(v=1,P=P_{2},u=1) italic_r start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_v = 1 , italic_P = italic_P start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT , italic_u = 1 ) , [Equation 4](https://arxiv.org/html/2312.13853v2#Sx2.E4), that can be used for the generation of images with black and white checkerboard patterns. Report issue for preceding element

The iterative process of CWFC is sketched in [Figure 3](https://arxiv.org/html/2312.13853v2#Sx2.F3) for a 3 × 3 3 3 3\times 3 3 × 3 image (represented by N = 9 𝑁 9 N=9 italic_N = 9 segments). Only two content instances can be generated, C 1 := { ( 1 , 1 ) , … } assign subscript 𝐶 1 1 1 … C_{1}:={(1,1),\dots} italic_C start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT := { ( 1 , 1 ) , … } and C 2 := { ( 1 , 2 ) , … } assign subscript 𝐶 2 1 2 … C_{2}:={(1,2),\dots} italic_C start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT := { ( 1 , 2 ) , … } with equal probability p  ( C 1 ) = p  ( C 2 ) = 1 2 𝑝 subscript 𝐶 1 𝑝 subscript 𝐶 2 1 2 p(C_{1})=p(C_{2})=\frac{1}{2} italic_p ( italic_C start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT ) = italic_p ( italic_C start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT ) = divide start_ARG 1 end_ARG start_ARG 2 end_ARG , [Equation 2](https://arxiv.org/html/2312.13853v2#Sx2.E2). The choice of the first value v s  ( 1 ) subscript 𝑣 𝑠 1 v_{s(1)} italic_v start_POSTSUBSCRIPT italic_s ( 1 ) end_POSTSUBSCRIPT already determines the choices of all other values.

Report issue for preceding element 

Figure 3: CWFC for the generation of 3 × 3 3 3 3\times 3 3 × 3 images with checkerboard patterns defined by the rules from [Figure 2](https://arxiv.org/html/2312.13853v2#Sx2.F2). In each iteration k ∈ [ 1 , 9 ] 𝑘 1 9 k\in[1,9] italic_k ∈ [ 1 , 9 ] , three steps take place: (i) a segment identifier s  ( k ) 𝑠 𝑘 s(k) italic_s ( italic_k ) with the smallest entropy is drawn, (ii) a corresponding value v s  ( k ) subscript 𝑣 𝑠 𝑘 v_{s(k)} italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT is drawn according to the pattern-based ruleset, and (iii) the newly generated identifier-value pair is added as a segment to the content instance C  ( k ) 𝐶 𝑘 C(k) italic_C ( italic_k ) . For s  ( k ) 𝑠 𝑘 s(k) italic_s ( italic_k ) and v  ( k ) 𝑣 𝑘 v(k) italic_v ( italic_k ) , the uniformly distributed set of possible choices are listed. The choices for s  ( k ) 𝑠 𝑘 s(k) italic_s ( italic_k ) depend on the Shannon entropy H k subscript 𝐻 𝑘 H_{k} italic_H start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT of each undefined segment (see appendix), as shown on the right. The choices for v  ( k ) 𝑣 𝑘 v(k) italic_v ( italic_k ) depend on the fulfillment of the two rules r 1 P superscript subscript 𝑟 1 P r_{1}^{\mathrm{P}} italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT and r 2 P superscript subscript 𝑟 2 P r_{2}^{\mathrm{P}} italic_r start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT , as listed. Report issue for preceding element

## QUANTUM METHODS

Report issue for preceding element

In the previous section, only classical PCG was considered. This section is about QPCG. First, QWFC is proposed as a special case of PIPCG. For this purpose, the probability distribution of the content instances p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) , [Equation 2](https://arxiv.org/html/2312.13853v2#Sx2.E2), is realized with the help of a quantum circuit and the sampling is performed by exploiting the intrinsic randomness of quantum measurements. That is, the actual quantum mechanical wave function collapse is used to implement a quantum version of the Wave Function Collapse algorithm.

Report issue for preceding element

Subsequently, this section proposes HWFC as a quantum-classical hybrid algorithm based on content partitioning to overcome the limitations of NISQ devices. Only the main features of QWFC and HWFC are summarized, the technical details can be found in the appendix. A software implementation is available online [ [22](https://arxiv.org/html/2312.13853v2#bib.bib22)] .

Report issue for preceding element

### Quantum Wave Function Collapse (QWFC)

Report issue for preceding element

To realize QWFC, the two randomized selection steps of PIPCG are chosen as follows:

Report issue for preceding element

The segment identifier selection is performed with a predefined order given by the vector σ ∈ S N 𝜎 subscript 𝑆 𝑁 \sigma\in S_{N} italic_σ ∈ italic_S start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT , where S N subscript 𝑆 𝑁 S_{N} italic_S start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT is the set of all permutations of [ 1 , N ] 1 𝑁 [1,N] [ 1 , italic_N ] . Report issue for preceding element

The value selection is based on a pattern-based ruleset in the same way as for CWFC. Report issue for preceding element

Value Encoding.

Report issue for preceding element

The value for each segment is encoded by a set of qubits, which requires q := ⌈ log 2  W ⌉ assign 𝑞 subscript 2 𝑊 q:=\lceil\log_{2}W\rceil italic_q := ⌈ roman_log start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT italic_W ⌉ qubits for each segment i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] . The group of q 𝑞 q italic_q qubits that represent the value for segment i 𝑖 i italic_i is denoted by 𝒬 i := { q i 1 , … , q i q } assign subscript 𝒬 𝑖 superscript subscript 𝑞 𝑖 1 … superscript subscript 𝑞 𝑖 𝑞 \mathcal{Q}{i}:={q{i}^{1},\dots,q_{i}^{q}} caligraphic_Q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT := { italic_q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , … , italic_q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_q end_POSTSUPERSCRIPT } , where q i j superscript subscript 𝑞 𝑖 𝑗 q_{i}^{j} italic_q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_j end_POSTSUPERSCRIPT references the j 𝑗 j italic_j th qubit of this group for j ∈ [ 1 , q ] 𝑗 1 𝑞 j\in[1,q] italic_j ∈ [ 1 , italic_q ] . The state of these qubits encodes the value v i subscript 𝑣 𝑖 v_{i} italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT of the segment i 𝑖 i italic_i in binary as the tensor product sequence of qubit states ⨂ j = 1 q | b j ⟩ = | v i − 1 ⟩ i ∈ ℋ i superscript subscript tensor-product 𝑗 1 𝑞 ket subscript 𝑏 𝑗 subscript ket subscript 𝑣 𝑖 1 𝑖 subscript ℋ 𝑖 \bigotimes_{j=1}^{q}\ket{b_{j}}=\ket{v_{i}-1}{i}\in\mathcal{H}{i} ⨂ start_POSTSUBSCRIPT italic_j = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_q end_POSTSUPERSCRIPT | start_ARG italic_b start_POSTSUBSCRIPT italic_j end_POSTSUBSCRIPT end_ARG ⟩ = | start_ARG italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT - 1 end_ARG ⟩ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ caligraphic_H start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT via v i − 1 = ∑ j = 1 q b j  2 j − 1 subscript 𝑣 𝑖 1 superscript subscript 𝑗 1 𝑞 subscript 𝑏 𝑗 superscript 2 𝑗 1 v_{i}-1=\sum_{j=1}^{q}b_{j}2^{j-1} italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT - 1 = ∑ start_POSTSUBSCRIPT italic_j = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_q end_POSTSUPERSCRIPT italic_b start_POSTSUBSCRIPT italic_j end_POSTSUBSCRIPT 2 start_POSTSUPERSCRIPT italic_j - 1 end_POSTSUPERSCRIPT with b j ∈ { 0 , 1 } subscript 𝑏 𝑗 0 1 b_{j}\in{0,1} italic_b start_POSTSUBSCRIPT italic_j end_POSTSUBSCRIPT ∈ { 0 , 1 } . Here, ℋ i subscript ℋ 𝑖 \mathcal{H}{i} caligraphic_H start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT denotes the joint Hilbert space of all qubit from 𝒬 i subscript 𝒬 𝑖 \mathcal{Q}{i} caligraphic_Q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT with v i ∈ A subscript 𝑣 𝑖 𝐴 v_{i}\in A italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ italic_A for i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] .

Report issue for preceding element

In total, Q := N  q assign 𝑄 𝑁 𝑞 Q:=Nq italic_Q := italic_N italic_q qubits are required to represent the value of all N 𝑁 N italic_N segments. The joint Hilbert space of all qubits from ⋃ i = 1 N 𝒬 i superscript subscript 𝑖 1 𝑁 subscript 𝒬 𝑖 \bigcup_{i=1}^{N}\mathcal{Q}{i} ⋃ start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT caligraphic_Q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT is given by ℋ := ⨂ i = 1 N ℋ i assign ℋ superscript subscript tensor-product 𝑖 1 𝑁 subscript ℋ 𝑖 \mathcal{H}:=\bigotimes{i=1}^{N}\mathcal{H}_{i} caligraphic_H := ⨂ start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT caligraphic_H start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT .

Report issue for preceding element

Probability Encoding.

Report issue for preceding element

Presume a state | Ψ ⟩ ∈ ℋ ket Ψ ℋ \ket{\Psi}\in\mathcal{H} | start_ARG roman_Ψ end_ARG ⟩ ∈ caligraphic_H that can realize samples from p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) , [Equation 2](https://arxiv.org/html/2312.13853v2#Sx2.E2), with

Report issue for preceding element

p  ( C = { ( 1 , v 1 ) , … , ( N , v N ) } ) = | ⟨ Ψ |  ⨂ i = 1 N | v i − 1 ⟩ i | 2  . 𝑝 𝐶 1 subscript 𝑣 1 … 𝑁 subscript 𝑣 𝑁 superscript bra Ψ superscript subscript tensor-product 𝑖 1 𝑁 subscript ket subscript 𝑣 𝑖 1 𝑖 2 . p(C!=!{(1,v_{1}),\dots,(N,v_{N})})=\big{|}\bra{\Psi}\bigotimes_{i=1}^{N}% \ket{v_{i}-1}_{i}\big{|}^{2}. italic_p ( italic_C = { ( 1 , italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT ) , … , ( italic_N , italic_v start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT ) } ) = | ⟨ start_ARG roman_Ψ end_ARG | ⨂ start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT | start_ARG italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT - 1 end_ARG ⟩ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT | start_POSTSUPERSCRIPT 2 end_POSTSUPERSCRIPT .

(6)

To prepare | Ψ ⟩ ket Ψ \ket{\Psi} | start_ARG roman_Ψ end_ARG ⟩ from a ground state | 0 ⟩ := ⨂ i = 1 N | 0 ⟩ i assign ket 0 superscript subscript tensor-product 𝑖 1 𝑁 subscript ket 0 𝑖 \ket{0}:=\bigotimes_{i=1}^{N}\ket{0}{i} | start_ARG 0 end_ARG ⟩ := ⨂ start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT | start_ARG 0 end_ARG ⟩ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT based on a pattern-based ruleset R 𝑅 R italic_R , Equation 5, a series of operators is applied, one for each iteration k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] such that | Ψ ⟩ := U N  ⋯  U 1  | 0 ⟩ assign ket Ψ subscript 𝑈 𝑁 ⋯ subscript 𝑈 1 ket 0 \ket{\Psi}:=U{N}\cdots U_{1}\ket{0} | start_ARG roman_Ψ end_ARG ⟩ := italic_U start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT ⋯ italic_U start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT | start_ARG 0 end_ARG ⟩ represents the final state after k 𝑘 k italic_k iterations. In each iteration k 𝑘 k italic_k , the state of the qubits 𝒬 σ k subscript 𝒬 subscript 𝜎 𝑘 \mathcal{Q}{\sigma{k}} caligraphic_Q start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT (that represent the value for segment σ k subscript 𝜎 𝑘 \sigma_{k} italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ) is prepared conditioned on the state of (a subset of) the qubits 𝒬 σ 1 , … , 𝒬 σ k − 1 subscript 𝒬 subscript 𝜎 1 … subscript 𝒬 subscript 𝜎 𝑘 1 \mathcal{Q}{\sigma{1}},\dots,\mathcal{Q}{\sigma{k-1}} caligraphic_Q start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT end_POSTSUBSCRIPT , … , caligraphic_Q start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k - 1 end_POSTSUBSCRIPT end_POSTSUBSCRIPT (that represent the values of the already prepared segments σ 1 , … , σ k − 1 subscript 𝜎 1 … subscript 𝜎 𝑘 1 \sigma_{1},\dots,\sigma_{k-1} italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_σ start_POSTSUBSCRIPT italic_k - 1 end_POSTSUBSCRIPT ), which leads to an entangled joint state as sketched in [Figure 4](https://arxiv.org/html/2312.13853v2#Sx3.F4)(a).

Report issue for preceding element 

Figure 4: QWFC circuit with σ = ( 1 , … , N ) 𝜎 1 … 𝑁 \sigma=(1,\dots,N) italic_σ = ( 1 , … , italic_N ) . (a) Circuit layout with an exemplary alphabet A 𝐴 A italic_A with W = 16 𝑊 16 W=16 italic_W = 16 symbols, which requires a set 𝒬 i subscript 𝒬 𝑖 \mathcal{Q}{i} caligraphic_Q start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT of q = 4 𝑞 4 q=4 italic_q = 4 qubits for each segment with i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] . In each iteration k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] , the operator U k subscript 𝑈 𝑘 U{k} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT prepares the qubits from 𝒬 k subscript 𝒬 𝑘 \mathcal{Q}{k} caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT in a superposition state | C ′ ⟩ k subscript ket superscript 𝐶 ′ 𝑘 \ket{C^{\prime}}{k} | start_ARG italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT end_ARG ⟩ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT , entangled with (a subset of) the qubits from 𝒬 1 , … , 𝒬 k − 1 subscript 𝒬 1 … subscript 𝒬 𝑘 1 \mathcal{Q}{1},\dots,\mathcal{Q}{k-1} caligraphic_Q start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , caligraphic_Q start_POSTSUBSCRIPT italic_k - 1 end_POSTSUBSCRIPT . All qubits are measured to obtain p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) (see appendix). (b) Gate decomposition of U k subscript 𝑈 𝑘 U_{k} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT into the components of U k coin superscript subscript 𝑈 𝑘 coin U_{k}^{\mathrm{coin}} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_coin end_POSTSUPERSCRIPT , which consists of pairs U k ctrl  ( C ′ ) ⊗ U k init  ( C ′ ) tensor-product superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ superscript subscript 𝑈 𝑘 init superscript 𝐶 ′ U_{k}^{\mathrm{ctrl}}(C^{\prime})\otimes U_{k}^{\mathrm{init}}(C^{\prime}) italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ⊗ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_init end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) . Each of these pairs represent a conditional loading of a probability distribution. The combined control operators act on the qubits from 𝒬 k + superscript subscript 𝒬 𝑘 \mathcal{Q}{k}^{+} caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT , whereas the initialization operators act on the qubits from 𝒬 k subscript 𝒬 𝑘 \mathcal{Q}{k} caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT (see appendix). Report issue for preceding element

The required number of qubits for the proposed QWFC method increases linearly with the number of segments and logarithmically with the number of symbols in the alphabet. At the same time, the respective circuits may become exponentially deeper because of the costly conditional preparation of probability distributions [ [23](https://arxiv.org/html/2312.13853v2#bib.bib23)] .

Report issue for preceding element

### QWFC Example: Checkerboard

Report issue for preceding element

In the following, the above example for the generation of 3 × 3 3 3 3\times 3 3 × 3 checkerboard images is considered for QWFC, where the predefined segment order σ = ( 1 , 2 , 3 , 6 , 5 , 4 , 7 , 8 , 9 ) 𝜎 1 2 3 6 5 4 7 8 9 \sigma=(1,2,3,6,5,4,7,8,9) italic_σ = ( 1 , 2 , 3 , 6 , 5 , 4 , 7 , 8 , 9 ) is used as visualized in [Figure 5](https://arxiv.org/html/2312.13853v2#Sx3.F5)(a). The resulting CWFC circuit is shown in [Figure 5](https://arxiv.org/html/2312.13853v2#Sx3.F5)(b) and the resulting probability distribution of content instances p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) , [Equation 6](https://arxiv.org/html/2312.13853v2#Sx3.E6), in [Figure 5](https://arxiv.org/html/2312.13853v2#Sx3.F5)(c). A (noise-free) measurement of the circuit corresponds to drawing a sample from this distribution.

Report issue for preceding element 

Figure 5: QWFC for the generation of 3 × 3 3 3 3\times 3 3 × 3 images with black and white checkerboard patterns in analogy to [Figure 3](https://arxiv.org/html/2312.13853v2#Sx2.F3). (a) Predefined segment order σ = ( 1 , 2 , 3 , 6 , 5 , 4 , 7 , 8 , 9 ) 𝜎 1 2 3 6 5 4 7 8 9 \sigma=(1,2,3,6,5,4,7,8,9) italic_σ = ( 1 , 2 , 3 , 6 , 5 , 4 , 7 , 8 , 9 ) . (b) Circuit layout with the same symbols as in [Figure 4](https://arxiv.org/html/2312.13853v2#Sx3.F4). (c) Generated content instances C 1 subscript 𝐶 1 C_{1} italic_C start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT and C 2 subscript 𝐶 2 C_{2} italic_C start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT with p  ( C 1 ) = p  ( C 2 ) = 1 2 𝑝 subscript 𝐶 1 𝑝 subscript 𝐶 2 1 2 p(C_{1})=p(C_{2})=\frac{1}{2} italic_p ( italic_C start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT ) = italic_p ( italic_C start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT ) = divide start_ARG 1 end_ARG start_ARG 2 end_ARG . Report issue for preceding element

### Hybrid Quantum-Classical WFC (HWFC)

Report issue for preceding element

HWFC represents a resource-efficient alternative to QWFC that might be more suitable for NISQ devices. The key idea of this approach is to separate the content into H 𝐻 H italic_H partitions, each containing a subset of the segments as sketched in [Figure 6](https://arxiv.org/html/2312.13853v2#Sx3.F6). For each partition h ∈ [ 1 , H ] ℎ 1 𝐻 h\in[1,H] italic_h ∈ [ 1 , italic_H ] , a QWFC is performed, which yields the content instance partition C h superscript 𝐶 ℎ C^{h} italic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT as a sample of the random variable 𝑪 h ∼ p  ( C h ) := p h  ( C h | C 1 , … , C h − 1 ) similar-to superscript 𝑪 ℎ 𝑝 superscript 𝐶 ℎ assign superscript 𝑝 ℎ conditional superscript 𝐶 ℎ superscript 𝐶 1 … superscript 𝐶 ℎ 1 \boldsymbol{C}^{h}\sim p(C^{h}):=p^{h}(C^{h}|C^{1},\dots,C^{h-1}) bold_italic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT ∼ italic_p ( italic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT ) := italic_p start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT | italic_C start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , … , italic_C start_POSTSUPERSCRIPT italic_h - 1 end_POSTSUPERSCRIPT ) in analogy to [Equation 6](https://arxiv.org/html/2312.13853v2#Sx3.E6). To apply QWFC on the partition, two modifications are required. First, the iteration over all segment identifiers [ 1 , N ] 1 𝑁 [1,N] [ 1 , italic_N ] is replaced by the iteration over the segment identifiers from S h superscript 𝑆 ℎ S^{h} italic_S start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT . Second, the already sampled sub-contents C 1 , … , C h − 1 superscript 𝐶 1 … superscript 𝐶 ℎ 1 C^{1},\dots,C^{h-1} italic_C start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , … , italic_C start_POSTSUPERSCRIPT italic_h - 1 end_POSTSUPERSCRIPT from the partitions [ 1 , h − 1 ] 1 ℎ 1 [1,h-1] [ 1 , italic_h - 1 ] are used as an additional constraint for the pattern-based rules. This modification induces classical correlations from previously sampled content partitions into the circuit and therefore requires a conditional form of QWFC that respects these correlations as constraints. The resulting distribution of the joint content instances is then given by p  ( C = ⋃ h = 1 H C h ) = ∏ h = 1 H p h  ( C h | C 1 , … , C h − 1 ) 𝑝 𝐶 superscript subscript ℎ 1 𝐻 superscript 𝐶 ℎ superscript subscript product ℎ 1 𝐻 superscript 𝑝 ℎ conditional superscript 𝐶 ℎ superscript 𝐶 1 … superscript 𝐶 ℎ 1 p\left(C=\bigcup_{h=1}^{H}C^{h}\right)=\prod_{h=1}^{H}p^{h}(C^{h}|C^{1},\dots,% C^{h-1}) italic_p ( italic_C = ⋃ start_POSTSUBSCRIPT italic_h = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_H end_POSTSUPERSCRIPT italic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT ) = ∏ start_POSTSUBSCRIPT italic_h = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_H end_POSTSUPERSCRIPT italic_p start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT | italic_C start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , … , italic_C start_POSTSUPERSCRIPT italic_h - 1 end_POSTSUPERSCRIPT ) and requires less quantum resources than performing a single run of QWFC on all segments.

Report issue for preceding element 

Figure 6: HWFC with H = 3 𝐻 3 H=3 italic_H = 3 partitions of N = 9 𝑁 9 N=9 italic_N = 9 segments. For each partition, a conditional QWFC is performed and the resulting content instances are combined. Report issue for preceding element

## DEMONSTRATION

Report issue for preceding element

In the present section, five simple content creation use cases are presented to demonstrate the proposed methods. For QWFC and HWFC, both idealized (i.e., noise-free) simulators and IBM Quantum devices were used, the latter being accessed via the IBM Quantum Cloud Services [ [24](https://arxiv.org/html/2312.13853v2#bib.bib24)] during December 2023.

Report issue for preceding element

### Checkerboard Revisited

Report issue for preceding element

The first use case is the previously presented checkerboard example, cf. [Figures 2](https://arxiv.org/html/2312.13853v2#Sx2.F2) and [5](https://arxiv.org/html/2312.13853v2#Sx3.F5). Again, 3 × 3 3 3 3\times 3 3 × 3 instances are considered, for which a comparison between QWFC and HWFC is performed on the IBM Quantum device ibm_kyoto (Eagle r3 processor version 1.2.4, 127 qubits). For QWFC, 10 000 10000 10,000 10 000 shots are measured, each yielding a content instance. For HWFC, H = 3 𝐻 3 H=3 italic_H = 3 equal-sized partitions are used in analogy to [Figure 6](https://arxiv.org/html/2312.13853v2#Sx3.F6) and the method is repeated 131 131 131 131 times, each time yielding a content instance. The results are shown in [Figure 7](https://arxiv.org/html/2312.13853v2#Sx4.F7).

Report issue for preceding element 

Figure 7: Checkerboard generation. Plots show the generated content instances C 𝐶 C italic_C , [Equation 1](https://arxiv.org/html/2312.13853v2#Sx2.E1), (encoded as integers in [ 0 , 511 ] 0 511 [0,511] [ 0 , 511 ] from the measured bit strings) and their respective probabilities p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) , [Equation 6](https://arxiv.org/html/2312.13853v2#Sx3.E6). (a) QWFC on the IBM Quantum device ibm_kyoto. The dominating instances ( p  ( C ) > 1.4 × 10 − 2 𝑝 𝐶 1.4E-2 p(C)>$1.4\text{\times}{10}^{-2}$ italic_p ( italic_C ) > start_ARG 1.4 end_ARG start_ARG times end_ARG start_ARG power start_ARG 10 end_ARG start_ARG - 2 end_ARG end_ARG ) are highlighted. (b) HWFC with H = 3 𝐻 3 H=3 italic_H = 3 on the same device results in less invalid instances. Report issue for preceding element

In total, there are 2 9 = 512 superscript 2 9 512 2^{9}=512 2 start_POSTSUPERSCRIPT 9 end_POSTSUPERSCRIPT = 512 possible content instances C ∈ 𝒞 𝐶 𝒞 C\in\mathcal{C} italic_C ∈ caligraphic_C , but only two of them, C 1 subscript 𝐶 1 C_{1} italic_C start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT and C 2 subscript 𝐶 2 C_{2} italic_C start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT , are valid. The remaining 510 510 510 510 content instances are invalid because they violate the prescribed patterns. In [Figure 7](https://arxiv.org/html/2312.13853v2#Sx4.F7)(a), QWFC is able to generate the two valid instances, but at the same time also produces a lot of invalid instances due to hardware imperfections. From [Figure 7](https://arxiv.org/html/2312.13853v2#Sx4.F7)(b) it can be seen that the results from HWFC are much closer to the idealized solution that would contain only C 1 subscript 𝐶 1 C_{1} italic_C start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT and C 2 subscript 𝐶 2 C_{2} italic_C start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT with equal probability. It is a consequence of the reduced circuit size from this method that invalid solutions occur with much less frequency than for QWFC.

Report issue for preceding element

### Pipes

Report issue for preceding element

The second use case is to create an image from tiles of seven different pipe (or line) sections as well as one blank tile. That is, the alphabet consists of W = 8 𝑊 8 W=8 italic_W = 8 symbols and each tile in the image constitutes a segment. The alphabet is shown in [Figure 8](https://arxiv.org/html/2312.13853v2#Sx4.F8)(a). As adjacency configuration, the nearest-neighbor adjacency from [Figure 1](https://arxiv.org/html/2312.13853v2#Sx2.F1) is presumed with D = 4 𝐷 4 D=4 italic_D = 4 . The pattern-based ruleset is chosen in such a way that neighboring tiles have to form a connecting network of pipes. Three example rules for this purpose are shown in [Figure 8](https://arxiv.org/html/2312.13853v2#Sx4.F8)(b). In total, m = 2048 𝑚 2048 m=2048 italic_m = 2048 rules are required to achieve this goal.

Report issue for preceding element 

Figure 8: Pipe generation. The generated image is required to show a network of connected pipes. (a) Alphabet consisting of W = 8 𝑊 8 W=8 italic_W = 8 symbols, each of which represents a tile with a pipe section and an empty tile. (b) Example of three pattern-based rules r 1 p superscript subscript 𝑟 1 p r_{1}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT , r 2 p superscript subscript 𝑟 2 p r_{2}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT , and r 3 p superscript subscript 𝑟 3 p r_{3}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 3 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT , cf. [Figure 2](https://arxiv.org/html/2312.13853v2#Sx2.F2). (c) Example 10 × 4 10 4 10\times 4 10 × 4 tile images that were generated using HWFC with H = 10 𝐻 10 H=10 italic_H = 10 on the IBM Quantum device ibm_kolkata and a simulator; also shown are images from CWFC. Report issue for preceding element

Exemplarily, images consisting of 10 × 4 10 4 10\times 4 10 × 4 tiles ( N = 40 𝑁 40 N=40 italic_N = 40 ) are considered, for which a comparison between HWFC on the IBM Quantum device ibm_kolkata (Falcon r5.11 processor version 1.14.8, 27 qubits), HWFC on a simulator and CWFC is performed. For HWFC, H = 10 𝐻 10 H=10 italic_H = 10 equal-sized partitions are used, each corresponding to one column of the image. A few resulting instances are shown in [Figure 8](https://arxiv.org/html/2312.13853v2#Sx4.F8)(c).

Report issue for preceding element

Based on a visual comparison, both CWFC and HWFC on the simulator yield similar results, as expected. However, the results from ibm_kolkata clearly contain a lot of invalid patterns as a result of the imperfect hardware. This demonstrates the limitations of the proposed method on NISQ devices.

Report issue for preceding element

### Hexagon Map

Report issue for preceding element

The third use case addresses images based on hexagonal tiles that can be interpreted as a map consisting of different terrains. For this purpose, an alphabet of W = 4 𝑊 4 W=4 italic_W = 4 symbols is chosen, each corresponding to a unicolored tile (blue, yellow, green, and gray) and each tile constitutes a segment. As adjacency configuration, a nearest-neighbor adjacency is presumed ( D = 6 𝐷 6 D=6 italic_D = 6 ). The prescribed pattern-based ruleset only allows connections of the form blue-yellow-green-gray, which can be fulfilled with m = 1586 𝑚 1586 m=1586 italic_m = 1586 rules, see [Figure 9](https://arxiv.org/html/2312.13853v2#Sx4.F9)(a). To promote a higher occurrence of blue tiles, the factors in [Equation 4](https://arxiv.org/html/2312.13853v2#Sx2.E4) are chosen as u = 5 𝑢 5 u=5 italic_u = 5 for blue tiles and u = 1 𝑢 1 u=1 italic_u = 1 otherwise.

Report issue for preceding element 

Figure 9: Map generation. Only connections of the form blue-yellow-green-gray are allowed. (a) Example of three pattern-based rules r 1 p superscript subscript 𝑟 1 p r_{1}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT , r 2 p superscript subscript 𝑟 2 p r_{2}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 2 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT , and r 3 p superscript subscript 𝑟 3 p r_{3}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 3 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT . (b) Distribution of content instances p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) for N = 7 𝑁 7 N=7 italic_N = 7 hexagons using QWFC on a simulator (sorted by descending probability) and CWFC (with the same ordering). The inset plot shows the predefined segment order σ 𝜎 \sigma italic_σ and the five most probable instances for QWFC. The asymmetry is a consequence of the choice of σ 𝜎 \sigma italic_σ . (c) Example images that were generated from N = 127 𝑁 127 N=127 italic_N = 127 hexagons using HWFC with H = 20 𝐻 20 H=20 italic_H = 20 on a simulator. Report issue for preceding element

As a first example, images consisting of N = 7 𝑁 7 N=7 italic_N = 7 tiles are considered, for which QWFC on a simulator and CWFC are performed. The resulting distributions of content instances p  ( C ) 𝑝 𝐶 p(C) italic_p ( italic_C ) in [Figure 9](https://arxiv.org/html/2312.13853v2#Sx4.F9)(b) is exactly calculated for QWFC, [Equation 6](https://arxiv.org/html/2312.13853v2#Sx3.E6), and based on 10 000 10000 10,000 10 000 samples for CWFC, [Equation 2](https://arxiv.org/html/2312.13853v2#Sx2.E2). Both distributions are significantly different, which is no surprise since the two approaches use a different segment identifier selection. The second example considers images from N = 127 𝑁 127 N=127 italic_N = 127 tiles, for which HWFC with H = 20 𝐻 20 H=20 italic_H = 20 is performed on a simulator. Example instances are shown in [Figure 9](https://arxiv.org/html/2312.13853v2#Sx4.F9)(c).

Report issue for preceding element

### Platformer

Report issue for preceding element

The fourth use case is motivated by computer game level design. The goal is to create a platformer-type level from a set of eight tiles [ [25](https://arxiv.org/html/2312.13853v2#bib.bib25)] , each corresponding to a different game element (ground, grass, mushroom, block, air, and a tree that is composed of three tiles). Consequently, the alphabet consists of W = 8 𝑊 8 W=8 italic_W = 8 symbols, see [Figure 10](https://arxiv.org/html/2312.13853v2#Sx4.F10)(a). As adjacency configuration, the two tiles above and below are taken into account as neighbors ( D = 2 𝐷 2 D=2 italic_D = 2 ). A pattern-based ruleset is prescribed that meets five requirements: (i) The bottom row consists of ground tiles and ground tiles can only be placed on top of each other, (ii) only a grass tile or a mushroom tile can be placed above a ground tile, (iii) tree tiles must be placed in order with the lowest tile above a grass tile, (iv) air tiles can only be placed above grass, mushroom or other air tiles, (v) block tiles can only be placed between two air tiles. These requirements can be fulfilled with m = 15 𝑚 15 m=15 italic_m = 15 rules, see [Figure 10](https://arxiv.org/html/2312.13853v2#Sx4.F10)(b). The first requirement can be resolved with a functional factor u  ( i ) 𝑢 𝑖 u(i) italic_u ( italic_i ) in [Equation 4](https://arxiv.org/html/2312.13853v2#Sx2.E4) that vanishes for all non-ground tiles in the bottom row (see appendix). For all non-vanishing cases, u = 0.1 𝑢 0.1 u=$0.1$ italic_u = 0.1 for r 6 p superscript subscript 𝑟 6 p r_{6}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 6 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT and u = 1 𝑢 1 u=1 italic_u = 1 otherwise to reduce the occurrence of block tiles. The segment order σ 𝜎 \sigma italic_σ is chosen such that the levels are built up from bottom to top.

Report issue for preceding element 

Figure 10: Level generation. (a) Alphabet consisting of W = 8 𝑊 8 W=8 italic_W = 8 symbols, each of which represents a tile [ [25](https://arxiv.org/html/2312.13853v2#bib.bib25)] . (b) Pattern-based ruleset consisting of m = 15 𝑚 15 m=15 italic_m = 15 rules. (c) Example 10 × 10 10 10 10\times 10 10 × 10 tile images that were generated using HWFC with H = 20 𝐻 20 H=20 italic_H = 20 on a simulator. Report issue for preceding element

Exemplarily, levels with 10 × 10 10 10 10\times 10 10 × 10 tiles are considered, for which HWFC with H = 20 𝐻 20 H=20 italic_H = 20 equal-sized partitions (each corresponding to a half row of the level) is performed on a simulator. Four resulting instances are shown in [Figure 10](https://arxiv.org/html/2312.13853v2#Sx4.F10)(c).

Report issue for preceding element

### Voxel Skyline

Report issue for preceding element

The final use case considers the creation of a three-dimensional voxel graphic with a binary alphabet of W = 2 𝑊 2 W=2 italic_W = 2 symbols, which represent the presence or absence of a voxel. Each voxel constitutes a segment, as adjacency configuration the voxel above and below are taken into account ( D = 2 𝐷 2 D=2 italic_D = 2 ). The chosen pattern-based ruleset with m = 4 𝑚 4 m=4 italic_m = 4 ensures that voxels are built from the ground up, see [Figure 11](https://arxiv.org/html/2312.13853v2#Sx4.F11)(a). This leads to a skyline-like structure.

Report issue for preceding element 

Figure 11: Skyline generation. (a) Pattern-based ruleset consisting of m = 4 𝑚 4 m=4 italic_m = 4 rules in an analogous representation as in the previous figures. (b) Example images from a 4 × 4 × 4 4 4 4 4\times 4\times 4 4 × 4 × 4 voxel grid that were generated using QWFC on the IBM Quantum device ibm_osaka and a simulator. (c) Example images from a 10 × 10 × 5 10 10 5 10\times 10\times 5 10 × 10 × 5 voxel grid that were generated using QWFC on a simulator. Report issue for preceding element

Exemplarily, two cases are considered: First, images from a 4 × 4 × 4 4 4 4 4\times 4\times 4 4 × 4 × 4 voxel grid, for which QWFC is performed both on a the IBM Quantum device ibm_osaka (Eagle r3 processor version 1.0.3, 127 qubits) and a simulator, see [Figure 11](https://arxiv.org/html/2312.13853v2#Sx4.F11)(b). An error violating r 3 p superscript subscript 𝑟 3 p r_{3}^{\mathrm{p}} italic_r start_POSTSUBSCRIPT 3 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_p end_POSTSUPERSCRIPT can be seen in the bottom left image that results from hardware imperfections. Second, images from a 10 × 10 × 5 10 10 5 10\times 10\times 5 10 × 10 × 5 voxel grid, for which QWFC is performed on a simulator, see [Figure 11](https://arxiv.org/html/2312.13853v2#Sx4.F11)(c).

Report issue for preceding element

## CONCLUSION

Report issue for preceding element

In this work, QWFC was proposed as a method to realize WFC on a gate-based quantum computer as an example of QPCG. The idea is to construct a quantum circuit from which valid content instances (that fulfill the prescribed patterns) can be sampled via measurements. In other words, the quantum circuit acts as a special-purpose QRNG for content of a desired form that makes use of the intrinsic randomness of quantum physics. This means that the actual quantum mechanical collapse of the wave function is used for the implementation, from which the classical method derived its name.

Report issue for preceding element

The proposed method is not without its challenges. The generating quantum circuit becomes larger from both the content and alphabet size and at the same time deeper from correlations within the content instance distribution, which makes it difficult to evaluate practical use cases on current hardware. For this reason, HWFC was proposed as a hybrid method that partitions the generation into smaller tasks for QWFC.

Report issue for preceding element

The experimental results have shown the limitations of QWFC and HWFC, but have also proven that at least simple examples can already be implemented on today's quantum hardware. The biggest bottleneck of the circuit complexity is the conditional preparation of probability distributions. Investigating possible improvements in this area with regard to specific QPCG use cases could therefore be a potential direction for future research.

Report issue for preceding element

The conceptual advantage of QWFC is that a circuit, once designed, represents the distribution of content instances such that new instances can be generated by simple measurements without any additional algorithmic effort. A shortcoming of QWFC is that only a fixed order of segments is considered instead of a dynamic (e.g., entropy-based) order that depends on the previously selected segments, which is a chance for future improvements.

Report issue for preceding element

In conclusion, the paper aims to provide an initial approach to QPCG that demonstrates its feasibility but leaves room for improvement and raises the question of useful application areas given the limits of NISQ devices.

Report issue for preceding element

## APPENDIX

Report issue for preceding element

This appendix section contains the technical details of the presented PCG methods.

Report issue for preceding element

### Technical Details of PIPCG

Report issue for preceding element

Presume the generated partial content instance C  ( k ) ∈ 𝒞  ( k ) 𝐶 𝑘 𝒞 𝑘 C(k)\in\mathcal{C}(k) italic_C ( italic_k ) ∈ caligraphic_C ( italic_k ) for k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] , where 𝒞  ( k ) 𝒞 𝑘 \mathcal{C}(k) caligraphic_C ( italic_k ) denotes all possible partial content instances at the end of iteration k 𝑘 k italic_k with 𝒞  ( N ) ≡ 𝒞 𝒞 𝑁 𝒞 \mathcal{C}(N)\equiv\mathcal{C} caligraphic_C ( italic_N ) ≡ caligraphic_C . One has | C  ( k ) | = k 𝐶 𝑘 𝑘 |C(k)|=k | italic_C ( italic_k ) | = italic_k , C  ( k ) = C  ( k − 1 ) ∪ { ( s  ( k ) , v s  ( k ) ) } 𝐶 𝑘 𝐶 𝑘 1 𝑠 𝑘 subscript 𝑣 𝑠 𝑘 C(k)=C(k-1)\cup{(s(k),v_{s(k)})} italic_C ( italic_k ) = italic_C ( italic_k - 1 ) ∪ { ( italic_s ( italic_k ) , italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT ) } , s  ( i ) ≠ s  ( j )  ∀ i , j ∈ [ 1 , k ] ∧ i ≠ j formulae-sequence 𝑠 𝑖 𝑠 𝑗 for-all 𝑖 𝑗 1 𝑘 𝑖 𝑗 s(i)\neq s(j),\forall,i,j\in[1,k]\land i\neq j italic_s ( italic_i ) ≠ italic_s ( italic_j ) ∀ italic_i , italic_j ∈ [ 1 , italic_k ] ∧ italic_i ≠ italic_j , and | 𝒞  ( k ) | = ∑ I ∈ J  ( k ) W | I | 𝒞 𝑘 subscript 𝐼 𝐽 𝑘 superscript 𝑊 𝐼 |\mathcal{C}(k)|=\sum_{I\in J(k)}W^{|I|} | caligraphic_C ( italic_k ) | = ∑ start_POSTSUBSCRIPT italic_I ∈ italic_J ( italic_k ) end_POSTSUBSCRIPT italic_W start_POSTSUPERSCRIPT | italic_I | end_POSTSUPERSCRIPT , where J  ( k ) := { I | I ∈ [ 1 , N ] ∧ | I | = k } assign 𝐽 𝑘 conditional-set 𝐼 𝐼 1 𝑁 𝐼 𝑘 J(k):={I,|,I\in[1,N]\land|I|=k} italic_J ( italic_k ) := { italic_I | italic_I ∈ [ 1 , italic_N ] ∧ | italic_I | = italic_k } with | J  ( k ) | = ( N k ) 𝐽 𝑘 binomial 𝑁 𝑘 |J(k)|={N\choose k} | italic_J ( italic_k ) | = ( binomial start_ARG italic_N end_ARG start_ARG italic_k end_ARG ) . Let C  ( 0 ) := { } assign 𝐶 0 C(0):={} italic_C ( 0 ) := { } and 𝒞  ( 0 ) := { C  ( 0 ) } assign 𝒞 0 𝐶 0 \mathcal{C}(0):={C(0)} caligraphic_C ( 0 ) := { italic_C ( 0 ) } . Furthermore, S +  ( C  ( l ) ) := { s  ( 1 ) , … , s  ( l ) } assign superscript 𝑆 𝐶 𝑙 𝑠 1 … 𝑠 𝑙 S^{+}(C(l)):={s(1),\dots,s(l)} italic_S start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ( italic_C ( italic_l ) ) := { italic_s ( 1 ) , … , italic_s ( italic_l ) } with | S +  ( C  ( l ) ) | = l superscript 𝑆 𝐶 𝑙 𝑙 |S^{+}(C(l))|=l | italic_S start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ( italic_C ( italic_l ) ) | = italic_l and S −  ( C  ( l ) ) := [ 1 , N ] ∖ S +  ( C  ( l ) ) assign superscript 𝑆 𝐶 𝑙 1 𝑁 superscript 𝑆 𝐶 𝑙 S^{-}(C(l)):=[1,N]\setminus S^{+}(C(l)) italic_S start_POSTSUPERSCRIPT - end_POSTSUPERSCRIPT ( italic_C ( italic_l ) ) := [ 1 , italic_N ] ∖ italic_S start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ( italic_C ( italic_l ) ) with | S −  ( C  ( l ) ) | = N − l superscript 𝑆 𝐶 𝑙 𝑁 𝑙 |S^{-}(C(l))|=N-l | italic_S start_POSTSUPERSCRIPT - end_POSTSUPERSCRIPT ( italic_C ( italic_l ) ) | = italic_N - italic_l for all C  ( l ) ∈ 𝒞  ( l ) 𝐶 𝑙 𝒞 𝑙 C(l)\in\mathcal{C}(l) italic_C ( italic_l ) ∈ caligraphic_C ( italic_l ) and for all l ∈ [ 0 , N ] 𝑙 0 𝑁 l\in[0,N] italic_l ∈ [ 0 , italic_N ] .

Report issue for preceding element

In the following, the three steps within each iteration k 𝑘 k italic_k of PIPCG are explained. In the first step, an identifier is selected by drawing a sample s  ( k ) 𝑠 𝑘 s(k) italic_s ( italic_k ) from the random variable

Report issue for preceding element

𝒔  ( k ) ∼ p k s  ( i = s  ( k ) | C ′ = C  ( k − 1 ) )  . similar-to 𝒔 𝑘 subscript superscript 𝑝 s 𝑘 𝑖 conditional 𝑠 𝑘 superscript 𝐶 ′ 𝐶 𝑘 1 . \boldsymbol{s}(k)\sim p^{\mathrm{s}}_{k}(i=s(k)|C^{\prime}=C(k-1)). bold_italic_s ( italic_k ) ∼ italic_p start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i = italic_s ( italic_k ) | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_k - 1 ) ) .

(7)

The probability distribution p k s  ( i | C ′ ) superscript subscript 𝑝 𝑘 s conditional 𝑖 superscript 𝐶 ′ p_{k}^{\mathrm{s}}(i|C^{\prime}) italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) with support i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] and C ′ ∈ 𝒞  ( k − 1 ) superscript 𝐶 ′ 𝒞 𝑘 1 C^{\prime}\in\mathcal{C}(k-1) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C ( italic_k - 1 ) is a user-defined parameter of the procedure that determines how new segment indices k 𝑘 k italic_k are selected based on the partial content instance C ′ = C  ( k − 1 ) superscript 𝐶 ′ 𝐶 𝑘 1 C^{\prime}=C(k-1) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_k - 1 ) that has already been generated up to the previous iteration k − 1 𝑘 1 k-1 italic_k - 1 (making PIPCG non-Markovian). Two conditions must hold:

Report issue for preceding element

S1) No identifier can be chosen twice, i.e., p l s  ( i = s | C ′ = C  ( l − 1 ) ) = 0  ∀ s ∈ S +  ( C  ( l − 1 ) )  ∀ C  ( l − 1 ) ∈ 𝒞  ( l − 1 )  ∀ l ∈ [ 1 , N ] superscript subscript 𝑝 𝑙 s 𝑖 conditional 𝑠 superscript 𝐶 ′ 𝐶 𝑙 1 0 for-all 𝑠 superscript 𝑆 𝐶 𝑙 1 for-all 𝐶 𝑙 1 𝒞 𝑙 1 for-all 𝑙 1 𝑁 p_{l}^{\mathrm{s}}(i=s|C^{\prime}=C(l-1))=0,\forall,s\in S^{+}(C(l-1)),% \forall,C(l-1)\in\mathcal{C}(l-1),\forall,l\in[1,N] italic_p start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT ( italic_i = italic_s | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_l - 1 ) ) = 0 ∀ italic_s ∈ italic_S start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ( italic_C ( italic_l - 1 ) ) ∀ italic_C ( italic_l - 1 ) ∈ caligraphic_C ( italic_l - 1 ) ∀ italic_l ∈ [ 1 , italic_N ] . Report issue for preceding element

S2) At least one valid identifier has to be available, i.e., ∀ l ∈ [ 1 , N ]  ∀ C  ( l − 1 ) ∈ 𝒞  ( l − 1 )  ∃ s ∈ S −  ( C  ( l − 1 ) ) : p l s  ( i = s | C ′ = C  ( l − 1 ) ) > 0 : for-all 𝑙 1 𝑁 for-all 𝐶 𝑙 1 𝒞 𝑙 1 𝑠 superscript 𝑆 𝐶 𝑙 1 superscript subscript 𝑝 𝑙 s 𝑖 conditional 𝑠 superscript 𝐶 ′ 𝐶 𝑙 1 0 \forall,l\in[1,N],\forall,C(l-1)\in\mathcal{C}(l-1),\exists,s\in S^{-}(C(% l-1)):p_{l}^{\mathrm{s}}(i=s|C^{\prime}=C(l-1))>0 ∀ italic_l ∈ [ 1 , italic_N ] ∀ italic_C ( italic_l - 1 ) ∈ caligraphic_C ( italic_l - 1 ) ∃ italic_s ∈ italic_S start_POSTSUPERSCRIPT - end_POSTSUPERSCRIPT ( italic_C ( italic_l - 1 ) ) : italic_p start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT ( italic_i = italic_s | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_l - 1 ) ) > 0 . Report issue for preceding element

In the second step, a value v s  ( k ) subscript 𝑣 𝑠 𝑘 v_{s(k)} italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT is selected for the segment by drawing a sample v s  ( k ) subscript 𝑣 𝑠 𝑘 v_{s(k)} italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT from the random variable

Report issue for preceding element

𝒗 s  ( k ) ∼ p k v ( ν = v s  ( k ) | i = s ( k ) , C ′ = C ( k − 1 ) ) . \boldsymbol{v}{s(k)}\sim p^{\mathrm{v}}{k}(\nu=v_{s(k)}|i=s(k),C^{\prime}=C(% k-1)). bold_italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT ∼ italic_p start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_ν = italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT | italic_i = italic_s ( italic_k ) , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_k - 1 ) ) .

(8)

The probability distribution p k v  ( ν | i , C ′ ) subscript superscript 𝑝 v 𝑘 conditional 𝜈 𝑖 superscript 𝐶 ′ p^{\mathrm{v}}_{k}(\nu|i,C^{\prime}) italic_p start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) with support ν ∈ A 𝜈 𝐴 \nu\in A italic_ν ∈ italic_A , i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] and C ′ ∈ 𝒞  ( k − 1 ) superscript 𝐶 ′ 𝒞 𝑘 1 C^{\prime}\in\mathcal{C}(k-1) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C ( italic_k - 1 ) is a user-defined parameter of the procedure that determines how new values are selected based on the selected identifier i = s  ( k ) 𝑖 𝑠 𝑘 i=s(k) italic_i = italic_s ( italic_k ) of the current iteration and C ′ = C  ( k − 1 ) superscript 𝐶 ′ 𝐶 𝑘 1 C^{\prime}=C(k-1) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_k - 1 ) . Two conditions must hold:

Report issue for preceding element

V1) Only values from the alphabet are available, i.e., p l v ( ν = v | i = s , C ′ = C ( l ) ) = 0 ∀ v ∉ A ∀ s ∈ [ 1 , N ] ∀ C ( l ) ∈ 𝒞 ( l − 1 ) ∀ l ∈ [ 1 , N ] p^{\mathrm{v}}_{l}(\nu=v|i=s,C^{\prime}=C(l))=0,\forall,v\not\in A,\forall% ,s\in[1,N],\forall,C(l)\in\mathcal{C}(l-1),\forall,l\in[1,N] italic_p start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT ( italic_ν = italic_v | italic_i = italic_s , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_l ) ) = 0 ∀ italic_v ∉ italic_A ∀ italic_s ∈ [ 1 , italic_N ] ∀ italic_C ( italic_l ) ∈ caligraphic_C ( italic_l - 1 ) ∀ italic_l ∈ [ 1 , italic_N ] . Report issue for preceding element

V2) At least one value from the alphabet has to be available, i.e., ∀ l ∈ [ 1 , N ] ∀ C ( l − 1 ) ∈ 𝒞 ( l − 1 ) ∀ s ∈ S − ( C ( l − 1 ) ) ∃ v ∈ A : p l v ( ν = v | i = s , C ′ = C ( l ) ) > 0 \forall,l\in[1,N],\forall,C(l-1)\in\mathcal{C}(l-1)\forall s\in S^{-}(C(l-1% ))\exists v\in A:p_{l}^{\mathrm{v}}(\nu=v|i=s,C^{\prime}=C(l))>0 ∀ italic_l ∈ [ 1 , italic_N ] ∀ italic_C ( italic_l - 1 ) ∈ caligraphic_C ( italic_l - 1 ) ∀ italic_s ∈ italic_S start_POSTSUPERSCRIPT - end_POSTSUPERSCRIPT ( italic_C ( italic_l - 1 ) ) ∃ italic_v ∈ italic_A : italic_p start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT ( italic_ν = italic_v | italic_i = italic_s , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = italic_C ( italic_l ) ) > 0 . Report issue for preceding element

In the third step, C  ( k ) = C  ( k − 1 ) ∪ { ( s  ( k ) , v s  ( k ) ) } 𝐶 𝑘 𝐶 𝑘 1 𝑠 𝑘 subscript 𝑣 𝑠 𝑘 C(k)=C(k-1)\cup{(s(k),v_{s(k)})} italic_C ( italic_k ) = italic_C ( italic_k - 1 ) ∪ { ( italic_s ( italic_k ) , italic_v start_POSTSUBSCRIPT italic_s ( italic_k ) end_POSTSUBSCRIPT ) } . The process is repeated for k → k + 1 → 𝑘 𝑘 1 k\rightarrow k+1 italic_k → italic_k + 1 until k = N 𝑘 𝑁 k=N italic_k = italic_N .

Report issue for preceding element

The probability to generate C  ( k ) 𝐶 𝑘 C(k) italic_C ( italic_k ) is given by p  ( C  ( k ) ) := ∑ σ ∈ S k  ( C  ( k ) ) ∏ l = 1 k q l k  ( σ , C  ( k ) ) assign 𝑝 𝐶 𝑘 subscript 𝜎 subscript 𝑆 𝑘 𝐶 𝑘 superscript subscript product 𝑙 1 𝑘 superscript subscript 𝑞 𝑙 𝑘 𝜎 𝐶 𝑘 p(C(k)):=\sum_{\sigma\in S_{k}(C(k))}\prod_{l=1}^{k}q_{l}^{k}(\sigma,C(k)) italic_p ( italic_C ( italic_k ) ) := ∑ start_POSTSUBSCRIPT italic_σ ∈ italic_S start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C ( italic_k ) ) end_POSTSUBSCRIPT ∏ start_POSTSUBSCRIPT italic_l = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_k end_POSTSUPERSCRIPT italic_q start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_k end_POSTSUPERSCRIPT ( italic_σ , italic_C ( italic_k ) ) , where

Report issue for preceding element

q l k ( σ , C ( k ) ) := p l ( \displaystyle q_{l}^{k}(\sigma,C(k)):=p_{l}( italic_q start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_k end_POSTSUPERSCRIPT ( italic_σ , italic_C ( italic_k ) ) := italic_p start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT (

i = σ l , ν = v σ l | \displaystyle i=\sigma_{l},\nu=v_{\sigma_{l}}| italic_i = italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT , italic_ν = italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT |

C ′ = { ( σ 1 , v σ 1 ) , … , ( σ l − 1 , v σ l − 1 ) } ) . \displaystyle C^{\prime}!=!{(\sigma_{1},v_{\sigma_{1}}),!\dots,!(\sigma_{% l-1},v_{\sigma_{l-1}})}). italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = { ( italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT end_POSTSUBSCRIPT ) , … , ( italic_σ start_POSTSUBSCRIPT italic_l - 1 end_POSTSUBSCRIPT , italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l - 1 end_POSTSUBSCRIPT end_POSTSUBSCRIPT ) } ) .

(9)

with p l  ( i , ν | C ′ ) := p k s  ( i | C ′ )  p k v  ( ν | i , C ′ ) assign subscript 𝑝 𝑙 𝑖 conditional 𝜈 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 s conditional 𝑖 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 v conditional 𝜈 𝑖 superscript 𝐶 ′ p_{l}(i,\nu|C^{\prime}):=p_{k}^{\mathrm{s}}(i|C^{\prime})p_{k}^{\mathrm{v}}(% \nu|i,C^{\prime}) italic_p start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT ( italic_i , italic_ν | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) , S k  ( C  ( k ) ) subscript 𝑆 𝑘 𝐶 𝑘 S_{k}(C(k)) italic_S start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C ( italic_k ) ) as the set of all permutations of S +  ( C  ( k ) ) superscript 𝑆 𝐶 𝑘 S^{+}(C(k)) italic_S start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ( italic_C ( italic_k ) ) with | S k  ( C  ( k ) ) | = k ! subscript 𝑆 𝑘 𝐶 𝑘 𝑘 |S_{k}(C(k))|=k! | italic_S start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C ( italic_k ) ) | = italic_k ! , and the l 𝑙 l italic_l th value of a permutation σ ∈ S k  ( C  ( k ) ) 𝜎 subscript 𝑆 𝑘 𝐶 𝑘 \sigma\in S_{k}(C(k)) italic_σ ∈ italic_S start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C ( italic_k ) ) denoted by σ l subscript 𝜎 𝑙 \sigma_{l} italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT for l ∈ [ 1 , k ] 𝑙 1 𝑘 l\in[1,k] italic_l ∈ [ 1 , italic_k ] . In [Technical Details of PIPCG](https://arxiv.org/html/2312.13853v2#Sx6.Ex1), let C ′ = { } superscript 𝐶 ′ C^{\prime}={} italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT = { } for l = 1 𝑙 1 l=1 italic_l = 1 . v σ m subscript 𝑣 subscript 𝜎 𝑚 v_{\sigma_{m}} italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT end_POSTSUBSCRIPT represents the value of the segment with identifier σ m subscript 𝜎 𝑚 \sigma_{m} italic_σ start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT from the content instance C  ( k ) 𝐶 𝑘 C(k) italic_C ( italic_k ) for m ∈ [ 1 , l ] 𝑚 1 𝑙 m\in[1,l] italic_m ∈ [ 1 , italic_l ] . The support 𝒞 ¯  ( k ) := { C  ( k ) | C  ( k ) ∈ 𝒞  ( k ) ∧ p  ( C  ( k ) ) > 0 } assign ¯ 𝒞 𝑘 conditional-set 𝐶 𝑘 𝐶 𝑘 𝒞 𝑘 𝑝 𝐶 𝑘 0 \underline{\mathcal{C}}(k):={C(k),|,C(k)\in\mathcal{C}(k)\land p(C(k))>0} under¯ start_ARG caligraphic_C end_ARG ( italic_k ) := { italic_C ( italic_k ) | italic_C ( italic_k ) ∈ caligraphic_C ( italic_k ) ∧ italic_p ( italic_C ( italic_k ) ) > 0 } of p  ( C  ( k ) ) 𝑝 𝐶 𝑘 p(C(k)) italic_p ( italic_C ( italic_k ) ) contains all C  ( k ) 𝐶 𝑘 C(k) italic_C ( italic_k ) that can be generated for the given k 𝑘 k italic_k . For k = N 𝑘 𝑁 k=N italic_k = italic_N , [Equation 2](https://arxiv.org/html/2312.13853v2#Sx2.E2) emerges with p  ( v 1 , … , v N ) := ∑ σ ∈ S N ∏ l = 1 N q l N  ( σ , C ) assign 𝑝 subscript 𝑣 1 … subscript 𝑣 𝑁 subscript 𝜎 subscript 𝑆 𝑁 superscript subscript product 𝑙 1 𝑁 superscript subscript 𝑞 𝑙 𝑁 𝜎 𝐶 p(v_{1},\dots,v_{N}):=\sum_{\sigma\in S_{N}}\prod_{l=1}^{N}q_{l}^{N}(\sigma,C) italic_p ( italic_v start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_v start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT ) := ∑ start_POSTSUBSCRIPT italic_σ ∈ italic_S start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∏ start_POSTSUBSCRIPT italic_l = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT italic_q start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT ( italic_σ , italic_C ) and 𝒞 ¯  ( N ) = 𝒞 ¯ ¯ 𝒞 𝑁 ¯ 𝒞 \underline{\mathcal{C}}(N)=\underline{\mathcal{C}} under¯ start_ARG caligraphic_C end_ARG ( italic_N ) = under¯ start_ARG caligraphic_C end_ARG .

Report issue for preceding element

### Technical Details of CWFC

Report issue for preceding element

For the value selection, a general rule-based selection mechanism is introduced first and then the pattern-based selection is presented as a special case. Consider a set of m 𝑚 m italic_m rules R ∈ ℛ 𝑅 ℛ R\in\mathcal{R} italic_R ∈ caligraphic_R , [Equation 5](https://arxiv.org/html/2312.13853v2#Sx2.E5), with the set of of all possible rulesets ℛ ℛ \mathcal{R} caligraphic_R . Each rule r i := r i  ( v , w ) := ( v , w ) assign subscript 𝑟 𝑖 subscript 𝑟 𝑖 𝑣 𝑤 assign 𝑣 𝑤 r_{i}:=r_{i}(v,w):=(v,w) italic_r start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT := italic_r start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ( italic_v , italic_w ) := ( italic_v , italic_w ) for i ∈ [ 1 , m ] 𝑖 1 𝑚 i\in[1,m] italic_i ∈ [ 1 , italic_m ] consists of a value v ∈ A 𝑣 𝐴 v\in A italic_v ∈ italic_A and a weight function w := w  ( i , α d , C ′ ) ∈ ℝ ≥ 0 assign 𝑤 𝑤 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ subscript ℝ absent 0 w:=w(i,\alpha^{d},C^{\prime})\in\mathbb{R}{\geq 0} italic_w := italic_w ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ∈ blackboard_R start_POSTSUBSCRIPT ≥ 0 end_POSTSUBSCRIPT with w : [ 1 , N ] × ℬ × 𝒞 ¯ → ℝ ≥ 0 : 𝑤 → 1 𝑁 ℬ ¯ 𝒞 subscript ℝ absent 0 w:[1,N]\times\mathcal{B}\times\overline{\mathcal{C}}\rightarrow\mathbb{R}{% \geq 0} italic_w : [ 1 , italic_N ] × caligraphic_B × over¯ start_ARG caligraphic_C end_ARG → blackboard_R start_POSTSUBSCRIPT ≥ 0 end_POSTSUBSCRIPT , where 𝒞 ¯ := ∪ k = 0 N − 1 𝒞  ( k ) assign ¯ 𝒞 superscript subscript 𝑘 0 𝑁 1 𝒞 𝑘 \overline{\mathcal{C}}:=\cup_{k=0}^{N-1}\mathcal{C}(k) over¯ start_ARG caligraphic_C end_ARG := ∪ start_POSTSUBSCRIPT italic_k = 0 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N - 1 end_POSTSUPERSCRIPT caligraphic_C ( italic_k ) and ℬ := { 0 , 1 } N × N assign ℬ superscript 0 1 𝑁 𝑁 \mathcal{B}:={0,1}^{N\times N} caligraphic_B := { 0 , 1 } start_POSTSUPERSCRIPT italic_N × italic_N end_POSTSUPERSCRIPT . Given R ∈ ℛ 𝑅 ℛ R\in\mathcal{R} italic_R ∈ caligraphic_R , p k v  ( ν | i , C ′ ) = p k v , R  ( ν | i , C ′ ) := F k  ( ν , i , C ′ ) F ¯ k  ( i , C ′ ) superscript subscript 𝑝 𝑘 v conditional 𝜈 𝑖 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 v R conditional 𝜈 𝑖 superscript 𝐶 ′ assign subscript 𝐹 𝑘 𝜈 𝑖 superscript 𝐶 ′ subscript ¯ 𝐹 𝑘 𝑖 superscript 𝐶 ′ p_{k}^{\mathrm{v}}(\nu|i,C^{\prime})=p_{k}^{\mathrm{v,R}}(\nu|i,C^{\prime}):=% \frac{F_{k}(\nu,i,C^{\prime})}{\overline{F}{k}(i,C^{\prime})} italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) = italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_R end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := divide start_ARG italic_F start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_ν , italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_ARG start_ARG over¯ start_ARG italic_F end_ARG start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_ARG , Equation 8, with F k  ( ν , i , C ′ ) := ∑ ( v , w ) ∈ R v = ν w  ( i , α d , C ′ ) assign subscript 𝐹 𝑘 𝜈 𝑖 superscript 𝐶 ′ subscript 𝑣 𝑤 𝑅 𝑣 𝜈 𝑤 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ F{k}(\nu,i,C^{\prime}):=\sum_{\begin{subarray}{c}(v,w)\in R\ v=\nu\end{subarray}}w(i,\alpha^{d},C^{\prime}) italic_F start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_ν , italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := ∑ start_POSTSUBSCRIPT start_ARG start_ROW start_CELL ( italic_v , italic_w ) ∈ italic_R end_CELL end_ROW start_ROW start_CELL italic_v = italic_ν end_CELL end_ROW end_ARG end_POSTSUBSCRIPT italic_w ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) and F ¯ k  ( i , C ′ ) := ∑ ν ∈ A F k  ( ν , i , C ′ ) assign subscript ¯ 𝐹 𝑘 𝑖 superscript 𝐶 ′ subscript 𝜈 𝐴 subscript 𝐹 𝑘 𝜈 𝑖 superscript 𝐶 ′ \overline{F}{k}(i,C^{\prime}):=\sum{\nu\in A}F_{k}(\nu,i,C^{\prime}) over¯ start_ARG italic_F end_ARG start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := ∑ start_POSTSUBSCRIPT italic_ν ∈ italic_A end_POSTSUBSCRIPT italic_F start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_ν , italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) for ν ∈ A 𝜈 𝐴 \nu\in A italic_ν ∈ italic_A , i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] , C ′ ∈ 𝒞  ( k ) superscript 𝐶 ′ 𝒞 𝑘 C^{\prime}\in\mathcal{C}(k) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C ( italic_k ) for k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] , and α d ∈ ℬ superscript 𝛼 𝑑 ℬ \alpha^{d}\in\mathcal{B} italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT ∈ caligraphic_B for d ∈ [ 1 , D ] 𝑑 1 𝐷 d\in[1,D] italic_d ∈ [ 1 , italic_D ] . [Condition V1](https://arxiv.org/html/2312.13853v2#Sx6.I6.i1) is always satisfied, whereas in case of F ¯ k  ( i , C ′ )  = !  0 subscript ¯ 𝐹 𝑘 𝑖 superscript 𝐶 ′ 0 \overline{F}{k}(i,C^{\prime})\overset{!}{=}0 over¯ start_ARG italic_F end_ARG start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) over! start_ARG = end_ARG 0 for any C ′ ∈ 𝒞  ( k ) superscript 𝐶 ′ 𝒞 𝑘 C^{\prime}\in\mathcal{C}(k) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C ( italic_k ) with p k s , H  ( i | C ′ )  p  ( C ′ ) > 0 superscript subscript 𝑝 𝑘 s H conditional 𝑖 superscript 𝐶 ′ 𝑝 superscript 𝐶 ′ 0 p{k}^{\mathrm{s,H}}(i|C^{\prime})p(C^{\prime})>0 italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s , roman_H end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) italic_p ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) > 0 , [condition V2](https://arxiv.org/html/2312.13853v2#Sx6.I6.i2) is violated.

Report issue for preceding element

Pattern-based value selection is a special case of rule-based value selection, where w  ( i , α d , C ′ ) := w P  ( i , α d , C ′ , P , u ) := u  τ  ( i , α d , C ′ , P ) assign 𝑤 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ superscript 𝑤 P 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ 𝑃 𝑢 assign 𝑢 𝜏 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ 𝑃 w(i,\alpha^{d},C^{\prime})!:=!w^{\mathrm{P}}(i,\alpha^{d},C^{\prime},P,u)!:% =!u\tau(i,\alpha^{d},C^{\prime},P) italic_w ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := italic_w start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT , italic_P , italic_u ) := italic_u italic_τ ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT , italic_P ) of each rule r i := r i P  ( v , P , u ) := ( v , w P  ( i , α d , C ′ , P , u ) ) assign subscript 𝑟 𝑖 superscript subscript 𝑟 𝑖 P 𝑣 𝑃 𝑢 assign 𝑣 superscript 𝑤 P 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ 𝑃 𝑢 r_{i}:=r_{i}^{\mathrm{P}}(v,P,u):=(v,w^{\mathrm{P}}(i,\alpha^{d},C^{\prime},P,% u)) italic_r start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT := italic_r start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_v , italic_P , italic_u ) := ( italic_v , italic_w start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT , italic_P , italic_u ) ) for i ∈ [ 1 , m ] 𝑖 1 𝑚 i\in[1,m] italic_i ∈ [ 1 , italic_m ] is defined by u ∈ ℝ > 0 𝑢 subscript ℝ absent 0 u\in\mathbb{R}{>0} italic_u ∈ blackboard_R start_POSTSUBSCRIPT > 0 end_POSTSUBSCRIPT and P ∈ 𝒫 𝑃 𝒫 P\in\mathcal{P} italic_P ∈ caligraphic_P , Equation 3 with d i ∈ [ 1 , D ] subscript 𝑑 𝑖 1 𝐷 d{i}\in[1,D] italic_d start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ [ 1 , italic_D ] for i ∈ [ 1 , n ] 𝑖 1 𝑛 i\in[1,n] italic_i ∈ [ 1 , italic_n ] , d i ≠ d j  ∀ i , j ∈ [ 1 , n ] ∧ i ≠ j formulae-sequence subscript 𝑑 𝑖 subscript 𝑑 𝑗 for-all 𝑖 𝑗 1 𝑛 𝑖 𝑗 d_{i}\neq d_{j},\forall,i,j\in[1,n]\land i\neq j italic_d start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ≠ italic_d start_POSTSUBSCRIPT italic_j end_POSTSUBSCRIPT ∀ italic_i , italic_j ∈ [ 1 , italic_n ] ∧ italic_i ≠ italic_j , and v i ∈ A subscript 𝑣 𝑖 𝐴 v_{i}\in A italic_v start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ italic_A for i ∈ [ 1 , n ] 𝑖 1 𝑛 i\in[1,n] italic_i ∈ [ 1 , italic_n ] . The set of all possible patterns reads 𝒫 := { P | P ∈ ( [ 1 , D ] × A ) n  ∀ n ∈ [ 0 , D ] } assign 𝒫 conditional-set 𝑃 𝑃 superscript 1 𝐷 𝐴 𝑛 for-all 𝑛 0 𝐷 \mathcal{P}:={P,|,P\in([1,D]\times A)^{n},\forall,n\in[0,D]} caligraphic_P := { italic_P | italic_P ∈ ( [ 1 , italic_D ] × italic_A ) start_POSTSUPERSCRIPT italic_n end_POSTSUPERSCRIPT ∀ italic_n ∈ [ 0 , italic_D ] } . A pattern P 𝑃 P italic_P is fulfilled, if τ  ( i , α d , C ′ , P ) := ∏ ( d , v ) ∈ P ∏ ( s , v ′ ) ∈ C ′ ∧ α i , s d = 1 δ v  v ′ ∈ [ 0 , 1 ] assign 𝜏 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ 𝑃 subscript product 𝑑 𝑣 𝑃 subscript product 𝑠 superscript 𝑣 ′ superscript 𝐶 ′ subscript superscript 𝛼 𝑑 𝑖 𝑠 1 subscript 𝛿 𝑣 superscript 𝑣 ′ 0 1 \tau(i,\alpha^{d},C^{\prime},P):=\prod_{(d,v)\in P}\prod_{(s,v^{\prime})\in C^% {\prime}\land\alpha^{d}{i,s}=1}\delta{vv^{\prime}}\in[0,1] italic_τ ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT , italic_P ) := ∏ start_POSTSUBSCRIPT ( italic_d , italic_v ) ∈ italic_P end_POSTSUBSCRIPT ∏ start_POSTSUBSCRIPT ( italic_s , italic_v start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ∈ italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∧ italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_i , italic_s end_POSTSUBSCRIPT = 1 end_POSTSUBSCRIPT italic_δ start_POSTSUBSCRIPT italic_v italic_v start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT end_POSTSUBSCRIPT ∈ [ 0 , 1 ] evaluates to one. The set of all possible pattern-based rulesets is denoted by ℛ P ⊂ ℛ superscript ℛ P ℛ \mathcal{R}^{\mathrm{P}}\subset\mathcal{R} caligraphic_R start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT ⊂ caligraphic_R . Summarized, the weight function w  ( i , α d , C ′ ) 𝑤 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ w(i,\alpha^{d},C^{\prime}) italic_w ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) , yields u 𝑢 u italic_u if the pattern P 𝑃 P italic_P applies and zero otherwise. Only adjacent segments (i.e., α i , s d = 1 subscript superscript 𝛼 𝑑 𝑖 𝑠 1 \alpha^{d}{i,s}=1 italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_i , italic_s end_POSTSUBSCRIPT = 1 ) have an influence on p k v  ( ν | i , C ′ ) superscript subscript 𝑝 𝑘 v conditional 𝜈 𝑖 superscript 𝐶 ′ p{k}^{\mathrm{v}}(\nu|i,C^{\prime}) italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) .

Report issue for preceding element

The rules r i subscript 𝑟 𝑖 r_{i} italic_r start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT can be rewritten in form of [Equation 4](https://arxiv.org/html/2312.13853v2#Sx2.E4). One has p k v , R  ( ν | i , C ′ ) = p k v , P  ( ν | i , C ′ ) := ∑ ( v , u , P ) ∈ R v = ν γ  ( u , i , C ′ )  τ  ( i , α d , C ′ , P ) superscript subscript 𝑝 𝑘 v R conditional 𝜈 𝑖 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 v P conditional 𝜈 𝑖 superscript 𝐶 ′ assign subscript 𝑣 𝑢 𝑃 𝑅 𝑣 𝜈 𝛾 𝑢 𝑖 superscript 𝐶 ′ 𝜏 𝑖 superscript 𝛼 𝑑 superscript 𝐶 ′ 𝑃 p_{k}^{\mathrm{v,R}}(\nu|i,C^{\prime})=p_{k}^{\mathrm{v,P}}(\nu|i,C^{\prime}):% =\sum_{\begin{subarray}{c}(v,u,P)\in R\ v=\nu\end{subarray}}\gamma(u,i,C^{\prime})\tau(i,\alpha^{d},C^{\prime},P) italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_R end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) = italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_P end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := ∑ start_POSTSUBSCRIPT start_ARG start_ROW start_CELL ( italic_v , italic_u , italic_P ) ∈ italic_R end_CELL end_ROW start_ROW start_CELL italic_v = italic_ν end_CELL end_ROW end_ARG end_POSTSUBSCRIPT italic_γ ( italic_u , italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) italic_τ ( italic_i , italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT , italic_P ) with γ  ( u , i , C ′ ) := u F ¯ k  ( i , C ′ ) ∈ [ 0 , 1 ] assign 𝛾 𝑢 𝑖 superscript 𝐶 ′ 𝑢 subscript ¯ 𝐹 𝑘 𝑖 superscript 𝐶 ′ 0 1 \gamma(u,i,C^{\prime}):=\frac{u}{\overline{F}_{k}(i,C^{\prime})}\in[0,1] italic_γ ( italic_u , italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := divide start_ARG italic_u end_ARG start_ARG over¯ start_ARG italic_F end_ARG start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_ARG ∈ [ 0 , 1 ] . Optionally, a functional factor instead of a constant factor can be used, i.e., u := u  ( i , C ) : [ 1 , N ] × 𝒞 ¯ → ℝ : assign 𝑢 𝑢 𝑖 𝐶 → 1 𝑁 ¯ 𝒞 ℝ u:=u(i,C):[1,N]\times\overline{\mathcal{C}}\rightarrow\mathbb{R} italic_u := italic_u ( italic_i , italic_C ) : [ 1 , italic_N ] × over¯ start_ARG caligraphic_C end_ARG → blackboard_R .

Report issue for preceding element

For the entropic segment identifier selection, one has

Report issue for preceding element

p k s  ( i | C ′ ) = p k s , H  ( i | C ′ ) := { | I k  ( C ′ ) | − 1 if  i ∈ I k  ( C ′ ) 0 otherwise superscript subscript 𝑝 𝑘 s conditional 𝑖 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 s H conditional 𝑖 superscript 𝐶 ′ assign cases superscript subscript 𝐼 𝑘 superscript 𝐶 ′ 1 if 𝑖 subscript 𝐼 𝑘 superscript 𝐶 ′ 0 otherwise p_{k}^{\mathrm{s}}(i|C^{\prime})=p_{k}^{\mathrm{s,H}}(i|C^{\prime}):=\begin{% cases}|I_{k}(C^{\prime})|^{-1}&\text{if }i\in I_{k}(C^{\prime})\ 0&\text{otherwise}\end{cases} italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) = italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s , roman_H end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := { start_ROW start_CELL | italic_I start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) | start_POSTSUPERSCRIPT - 1 end_POSTSUPERSCRIPT end_CELL start_CELL if italic_i ∈ italic_I start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_CELL end_ROW start_ROW start_CELL 0 end_CELL start_CELL otherwise end_CELL end_ROW

(10)

in [Equation 7](https://arxiv.org/html/2312.13853v2#Sx6.E7) with I k  ( C ′ ) := { i | i ∈ S −  ( C ′ ) ∧ H k  ( i , C ′ ) = h k  ( C ′ ) } assign subscript 𝐼 𝑘 superscript 𝐶 ′ conditional-set 𝑖 𝑖 superscript 𝑆 superscript 𝐶 ′ subscript 𝐻 𝑘 𝑖 superscript 𝐶 ′ subscript ℎ 𝑘 superscript 𝐶 ′ I_{k}(C^{\prime}):={i,|,i\in S^{-}(C^{\prime})\land H_{k}(i,C^{\prime})=h_{% k}(C^{\prime})} italic_I start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := { italic_i | italic_i ∈ italic_S start_POSTSUPERSCRIPT - end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ∧ italic_H start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) = italic_h start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) } and h k  ( C ′ ) := arg  min j ∈ S −  ( C ′ )  H k  ( j , C ′ ) assign subscript ℎ 𝑘 superscript 𝐶 ′ subscript arg min 𝑗 superscript 𝑆 superscript 𝐶 ′ subscript 𝐻 𝑘 𝑗 superscript 𝐶 ′ h_{k}(C^{\prime}):=\operatorname*{arg,min}{j\in S^{-}(C^{\prime})}H{k}(j,C^% {\prime}) italic_h start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := start_OPERATOR roman_arg roman_min end_OPERATOR start_POSTSUBSCRIPT italic_j ∈ italic_S start_POSTSUPERSCRIPT - end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_POSTSUBSCRIPT italic_H start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_j , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) , where H k  ( i , C ′ ) := − ∑ v ∈ A p k v , P  ( ν = v | i , C ′ )  ln  p k v , P  ( ν = v | i , C ′ ) assign subscript 𝐻 𝑘 𝑖 superscript 𝐶 ′ subscript 𝑣 𝐴 superscript subscript 𝑝 𝑘 v P 𝜈 conditional 𝑣 𝑖 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 v P 𝜈 conditional 𝑣 𝑖 superscript 𝐶 ′ H_{k}(i,C^{\prime}):=-\sum_{v\in A}p_{k}^{\mathrm{v,P}}(\nu=v|i,C^{\prime})\ln p% _{k}^{\mathrm{v,P}}(\nu=v|i,C^{\prime}) italic_H start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := - ∑ start_POSTSUBSCRIPT italic_v ∈ italic_A end_POSTSUBSCRIPT italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_P end_POSTSUPERSCRIPT ( italic_ν = italic_v | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) roman_ln italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_P end_POSTSUPERSCRIPT ( italic_ν = italic_v | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) denotes the Shannon information entropy for C ′ ∈ 𝒞  ( k − 1 ) superscript 𝐶 ′ 𝒞 𝑘 1 C^{\prime}\in\mathcal{C}(k-1) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C ( italic_k - 1 ) , k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] .

Report issue for preceding element

### Technical Details of QWFC

Report issue for preceding element

Presume a predefined order of segment indices σ ∈ S N 𝜎 subscript 𝑆 𝑁 \sigma\in S_{N} italic_σ ∈ italic_S start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT . Hence, p k s  ( i | C ′ ) = p k s , o  ( i | C ′ ) := δ i  σ i superscript subscript 𝑝 𝑘 s conditional 𝑖 superscript 𝐶 ′ superscript subscript 𝑝 𝑘 s o conditional 𝑖 superscript 𝐶 ′ assign subscript 𝛿 𝑖 subscript 𝜎 𝑖 p_{k}^{\mathrm{s}}(i|C^{\prime})=p_{k}^{\mathrm{s,o}}(i|C^{\prime}):=\delta_{i% \sigma_{i}} italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) = italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_s , roman_o end_POSTSUPERSCRIPT ( italic_i | italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := italic_δ start_POSTSUBSCRIPT italic_i italic_σ start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT end_POSTSUBSCRIPT and 𝒞  ( k ) = 𝒞 σ  ( k ) := { C | C = { ( σ 1 , v σ 1 ) , … , ( σ k , v σ k ) }  ∀ v σ l ∈ A  ∀ l ∈ [ 1 , k ] } 𝒞 𝑘 subscript 𝒞 𝜎 𝑘 assign conditional-set 𝐶 𝐶 subscript 𝜎 1 subscript 𝑣 subscript 𝜎 1 … subscript 𝜎 𝑘 subscript 𝑣 subscript 𝜎 𝑘 for-all subscript 𝑣 subscript 𝜎 𝑙 𝐴 for-all 𝑙 1 𝑘 \mathcal{C}(k)=\mathcal{C}{\sigma}(k):={C,|,C={(\sigma{1},v_{\sigma_{1}}% ),\dots,(\sigma_{k},v_{\sigma_{k}})},\forall,v_{\sigma_{l}}\in A,\forall,% l\in[1,k]} caligraphic_C ( italic_k ) = caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) := { italic_C | italic_C = { ( italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT end_POSTSUBSCRIPT ) , … , ( italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT , italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT ) } ∀ italic_v start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∈ italic_A ∀ italic_l ∈ [ 1 , italic_k ] } for k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] and 𝒞 σ  ( 0 ) := { { } } assign subscript 𝒞 𝜎 0 \mathcal{C}_{\sigma}(0):={{}} caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( 0 ) := { { } } .

Report issue for preceding element

The value selection is pattern-based in analogy to CWFC, which together with the identifier selection leads to [Equation 6](https://arxiv.org/html/2312.13853v2#Sx3.E6). Given σ 𝜎 \sigma italic_σ and R ∈ ℛ P 𝑅 superscript ℛ P R\in\mathcal{R}^{\mathrm{P}} italic_R ∈ caligraphic_R start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT , the task is to prepare | Ψ ⟩ ket Ψ \ket{\Psi} | start_ARG roman_Ψ end_ARG ⟩ from [Equation 6](https://arxiv.org/html/2312.13853v2#Sx3.E6) constructively with quantum gates. Let | Ψ ⟩ := U N  ⋯  U 1  | 0 ⟩ assign ket Ψ subscript 𝑈 𝑁 ⋯ subscript 𝑈 1 ket 0 \ket{\Psi}:=U_{N}\cdots U_{1}\ket{0} | start_ARG roman_Ψ end_ARG ⟩ := italic_U start_POSTSUBSCRIPT italic_N end_POSTSUBSCRIPT ⋯ italic_U start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT | start_ARG 0 end_ARG ⟩ as in [Figure 4](https://arxiv.org/html/2312.13853v2#Sx3.F4)(a). Then,

Report issue for preceding element

U k := [ U k coin + U k 0 ] ⊗ ⨂ l = k + 1 N 𝟙 σ l ∈ ℋ assign subscript 𝑈 𝑘 tensor-product delimited-[] superscript subscript 𝑈 𝑘 coin superscript subscript 𝑈 𝑘 0 superscript subscript tensor-product 𝑙 𝑘 1 𝑁 subscript 1 subscript 𝜎 𝑙 ℋ U_{k}:=\left[U_{k}^{\mathrm{coin}}+U_{k}^{0}\right]\otimes\bigotimes_{l=k+1}^{% N}\mathbbm{1}{\sigma{l}}\in\mathcal{H} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT := [ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_coin end_POSTSUPERSCRIPT + italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT 0 end_POSTSUPERSCRIPT ] ⊗ ⨂ start_POSTSUBSCRIPT italic_l = italic_k + 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_N end_POSTSUPERSCRIPT blackboard_1 start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∈ caligraphic_H

(11)

for k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] , which contains 𝟙 i ∈ ℋ i subscript 1 𝑖 subscript ℋ 𝑖 \mathbbm{1}{i}\in\mathcal{H}{i} blackboard_1 start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ caligraphic_H start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT , the unit operator for i ∈ [ 1 , N ] 𝑖 1 𝑁 i\in[1,N] italic_i ∈ [ 1 , italic_N ] and two other operators.

Report issue for preceding element

First, the conditional initialization operator

Report issue for preceding element

U k coin = ∑ C ′ ∈ 𝒞 σ  ( k ) [ U k ctrl  ( C ′ ) ⊗ U k init  ( C ′ ) ] , superscript subscript 𝑈 𝑘 coin subscript superscript 𝐶 ′ subscript 𝒞 𝜎 𝑘 delimited-[] tensor-product superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ superscript subscript 𝑈 𝑘 init superscript 𝐶 ′ U_{k}^{\mathrm{coin}}=\sum_{C^{\prime}\in\mathcal{C}{\sigma}(k)}\left[U{k}^{% \mathrm{ctrl}}(C^{\prime})\otimes U_{k}^{\mathrm{init}}(C^{\prime})\right], italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_coin end_POSTSUPERSCRIPT = ∑ start_POSTSUBSCRIPT italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) end_POSTSUBSCRIPT [ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ⊗ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_init end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ] ,

(12)

where U k ctrl  ( C ′ ) := ⨂ ( s , v ) ∈ L k  ( C ′ ) | v − 1 ⟩  ⟨ v − 1 | s ∈ ⨂ l = 1 k − 1 ℋ σ l assign superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ subscript tensor-product 𝑠 𝑣 subscript 𝐿 𝑘 superscript 𝐶 ′ ket 𝑣 1 subscript bra 𝑣 1 𝑠 superscript subscript tensor-product 𝑙 1 𝑘 1 subscript ℋ subscript 𝜎 𝑙 U_{k}^{\mathrm{ctrl}}(C^{\prime}):=\bigotimes_{(s,v)\in L_{k}(C^{\prime})}\ket% {v-1}\bra{v-1}{s}\in\bigotimes{l=1}^{k-1}\mathcal{H}{\sigma{l}} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := ⨂ start_POSTSUBSCRIPT ( italic_s , italic_v ) ∈ italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_POSTSUBSCRIPT | start_ARG italic_v - 1 end_ARG ⟩ ⟨ start_ARG italic_v - 1 end_ARG | start_POSTSUBSCRIPT italic_s end_POSTSUBSCRIPT ∈ ⨂ start_POSTSUBSCRIPT italic_l = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_k - 1 end_POSTSUPERSCRIPT caligraphic_H start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT denotes the control operator, and U k init  ( C ′ ) := | C ′ ⟩  ⟨ 0 | σ k ∈ ℋ σ k assign superscript subscript 𝑈 𝑘 init superscript 𝐶 ′ ket superscript 𝐶 ′ subscript bra 0 subscript 𝜎 𝑘 subscript ℋ subscript 𝜎 𝑘 U_{k}^{\mathrm{init}}(C^{\prime}):=\ket{C^{\prime}}\bra{0}{\sigma{k}}\in% \mathcal{H}{\sigma{k}} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_init end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := | start_ARG italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT end_ARG ⟩ ⟨ start_ARG 0 end_ARG | start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∈ caligraphic_H start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT the initialization operator with | C ′ ⟩ σ k := ∑ ν ∈ A p k v , P  ( ν | σ k , C ′ )  | ν − 1 ⟩ σ k ∈ ℋ σ k assign subscript ket superscript 𝐶 ′ subscript 𝜎 𝑘 subscript 𝜈 𝐴 superscript subscript 𝑝 𝑘 v P conditional 𝜈 subscript 𝜎 𝑘 superscript 𝐶 ′ subscript ket 𝜈 1 subscript 𝜎 𝑘 subscript ℋ subscript 𝜎 𝑘 \ket{C^{\prime}}{\sigma{k}}:=\sum_{\nu\in A}\sqrt{p_{k}^{\mathrm{v,P}}(\nu|% \sigma_{k},C^{\prime})}\ket{\nu-1}{\sigma{k}}\in\mathcal{H}{\sigma{k}} | start_ARG italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT end_ARG ⟩ start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT := ∑ start_POSTSUBSCRIPT italic_ν ∈ italic_A end_POSTSUBSCRIPT square-root start_ARG italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_P end_POSTSUPERSCRIPT ( italic_ν | italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) end_ARG | start_ARG italic_ν - 1 end_ARG ⟩ start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∈ caligraphic_H start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT . The summation in U k ctrl  ( C ′ ) superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ U_{k}^{\mathrm{ctrl}}(C^{\prime}) italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) runs over all adjacent segments L k  ( C ′ ) := { ( s , v ) | ( s , v ) ∈ C ′ ∧ ∃ P ∈ R P  ∃ d ∈ P d : α σ k  s d = 1 } ⊆ C ′ assign subscript 𝐿 𝑘 superscript 𝐶 ′ conditional-set 𝑠 𝑣 : 𝑠 𝑣 superscript 𝐶 ′ 𝑃 subscript 𝑅 𝑃 𝑑 subscript 𝑃 𝑑 subscript superscript 𝛼 𝑑 subscript 𝜎 𝑘 𝑠 1 superscript 𝐶 ′ L_{k}(C^{\prime}):={(s,v),|,(s,v)\in C^{\prime},\land,\exists,P\in R_{P}% \exists,d\in P_{d}:\alpha^{d}{\sigma{k}s}=1}\subseteq C^{\prime} italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := { ( italic_s , italic_v ) | ( italic_s , italic_v ) ∈ italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∧ ∃ italic_P ∈ italic_R start_POSTSUBSCRIPT italic_P end_POSTSUBSCRIPT ∃ italic_d ∈ italic_P start_POSTSUBSCRIPT italic_d end_POSTSUBSCRIPT : italic_α start_POSTSUPERSCRIPT italic_d end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT italic_s end_POSTSUBSCRIPT = 1 } ⊆ italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT , where R P := { P 1 , … , P m } assign subscript 𝑅 𝑃 subscript 𝑃 1 … subscript 𝑃 𝑚 R_{P}:={P_{1},\dots,P_{m}} italic_R start_POSTSUBSCRIPT italic_P end_POSTSUBSCRIPT := { italic_P start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_P start_POSTSUBSCRIPT italic_m end_POSTSUBSCRIPT } stands for the set of patterns in R ∈ ℛ P 𝑅 superscript ℛ P R\in\mathcal{R}^{\mathrm{P}} italic_R ∈ caligraphic_R start_POSTSUPERSCRIPT roman_P end_POSTSUPERSCRIPT with P i ∈ 𝒫 subscript 𝑃 𝑖 𝒫 P_{i}\in\mathcal{P} italic_P start_POSTSUBSCRIPT italic_i end_POSTSUBSCRIPT ∈ caligraphic_P for i ∈ [ 1 , m ] 𝑖 1 𝑚 i\in[1,m] italic_i ∈ [ 1 , italic_m ] and P d := { d 1 , … , d n } assign subscript 𝑃 𝑑 subscript 𝑑 1 … subscript 𝑑 𝑛 P_{d}:={d_{1},\dots,d_{n}} italic_P start_POSTSUBSCRIPT italic_d end_POSTSUBSCRIPT := { italic_d start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_d start_POSTSUBSCRIPT italic_n end_POSTSUBSCRIPT } stands for the set of directions in the pattern P ∈ 𝒫 𝑃 𝒫 P\in\mathcal{P} italic_P ∈ caligraphic_P , [Equation 3](https://arxiv.org/html/2312.13853v2#Sx2.E3), with d j ∈ [ 1 , D ] subscript 𝑑 𝑗 1 𝐷 d_{j}\in[1,D] italic_d start_POSTSUBSCRIPT italic_j end_POSTSUBSCRIPT ∈ [ 1 , italic_D ] for j ∈ [ 1 , n ] 𝑗 1 𝑛 j\in[1,n] italic_j ∈ [ 1 , italic_n ] . Choosing C ′ superscript 𝐶 ′ C^{\prime} italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT instead of L k  ( C ′ ) subscript 𝐿 𝑘 superscript 𝐶 ′ L_{k}(C^{\prime}) italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) in the summation has no effect on p k v , P  ( ν | i , C ′ ) superscript subscript 𝑝 𝑘 v P conditional 𝜈 𝑖 superscript 𝐶 ′ p_{k}^{\mathrm{v,P}}(\nu|i,C^{\prime}) italic_p start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_v , roman_P end_POSTSUPERSCRIPT ( italic_ν | italic_i , italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) and thus | C ′ ⟩ σ k subscript ket superscript 𝐶 ′ subscript 𝜎 𝑘 \ket{C^{\prime}}{\sigma{k}} | start_ARG italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT end_ARG ⟩ start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT .

Report issue for preceding element

In iteration k 𝑘 k italic_k , only the qubits in 𝒬 k − 1 + superscript subscript 𝒬 𝑘 1 \mathcal{Q}{k-1}^{+} caligraphic_Q start_POSTSUBSCRIPT italic_k - 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT with 𝒬 k + := { q | q = q k i ∈ 𝒬 σ k  ∀ i ∈ [ 1 , q ] ∧ σ k ∈ L k + } assign superscript subscript 𝒬 𝑘 conditional-set 𝑞 𝑞 superscript subscript 𝑞 𝑘 𝑖 subscript 𝒬 subscript 𝜎 𝑘 for-all 𝑖 1 𝑞 subscript 𝜎 𝑘 superscript subscript 𝐿 𝑘 \mathcal{Q}{k}^{+}:={q,|,q=q_{k}^{i}\in\mathcal{Q}{\sigma{k}},\forall,% i\in[1,q],\land,\sigma_{k}\in L_{k}^{+}} caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT := { italic_q | italic_q = italic_q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_i end_POSTSUPERSCRIPT ∈ caligraphic_Q start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∀ italic_i ∈ [ 1 , italic_q ] ∧ italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ∈ italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT } are affected by U ctrl  ( C ′ ) superscript 𝑈 ctrl superscript 𝐶 ′ U^{\mathrm{ctrl}}(C^{\prime}) italic_U start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) for some C ′ ∈ 𝒞 σ  ( k ) superscript 𝐶 ′ subscript 𝒞 𝜎 𝑘 C^{\prime}\in\mathcal{C}{\sigma}(k) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) , where L k + := { s | ∃ C ′ ∈ 𝒞 σ  ( k ) : s ∈ S +  ( L k  ( C ′ ) ) } assign superscript subscript 𝐿 𝑘 conditional-set 𝑠 : superscript 𝐶 ′ subscript 𝒞 𝜎 𝑘 𝑠 superscript 𝑆 subscript 𝐿 𝑘 superscript 𝐶 ′ L{k}^{+}:={s,|,\exists,C^{\prime}\in\mathcal{C}{\sigma}(k),:,s\in S^{+% }(L{k}(C^{\prime}))} italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT := { italic_s | ∃ italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) : italic_s ∈ italic_S start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ( italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ) } denotes the affected segments for k = [ 1 , N ] 𝑘 1 𝑁 k=[1,N] italic_k = [ 1 , italic_N ] . Here, 𝒬 k + ⊆ { 𝒬 1 , … , 𝒬 k } superscript subscript 𝒬 𝑘 subscript 𝒬 1 … subscript 𝒬 𝑘 \mathcal{Q}{k}^{+}\subseteq{\mathcal{Q}{1},\dots,\mathcal{Q}{k}} caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ⊆ { caligraphic_Q start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT } and L k + ⊆ { σ 1 , … , σ k } superscript subscript 𝐿 𝑘 subscript 𝜎 1 … subscript 𝜎 𝑘 L{k}^{+}\subseteq{\sigma_{1},\dots,\sigma_{k}} italic_L start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT + end_POSTSUPERSCRIPT ⊆ { italic_σ start_POSTSUBSCRIPT 1 end_POSTSUBSCRIPT , … , italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT } , respectively.

Report issue for preceding element

The second operator in [Equation 11](https://arxiv.org/html/2312.13853v2#Sx6.E11) is the neutral operator

Report issue for preceding element

U k 0 = ∑ C ′ ∈ 𝒞 σ  ( k ) [ U k ctrl  ( C ′ ) ⊗ U k init , 0 + U k ctrl , 0  ( C ′ ) ]  . superscript subscript 𝑈 𝑘 0 subscript superscript 𝐶 ′ subscript 𝒞 𝜎 𝑘 delimited-[] tensor-product superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ superscript subscript 𝑈 𝑘 init 0 superscript subscript 𝑈 𝑘 ctrl 0 superscript 𝐶 ′ . U_{k}^{0}=\sum_{C^{\prime}\in\mathcal{C}{\sigma}(k)}\left[U{k}^{\mathrm{ctrl% }}(C^{\prime})\otimes U_{k}^{\mathrm{init},0}+U_{k}^{\mathrm{ctrl},0}(C^{% \prime})\right]. italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT 0 end_POSTSUPERSCRIPT = ∑ start_POSTSUBSCRIPT italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) end_POSTSUBSCRIPT [ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ⊗ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_init , 0 end_POSTSUPERSCRIPT + italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl , 0 end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ] .

(13)

Initially, all qubits 𝒬 k subscript 𝒬 𝑘 \mathcal{Q}{k} caligraphic_Q start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT are in the ground state. Therefore, U k init , 0 := ∑ v ∈ [ 2 , W ] | v − 1 ⟩  ⟨ v − 1 | σ k ∈ ℋ σ k assign superscript subscript 𝑈 𝑘 init 0 subscript 𝑣 2 𝑊 ket 𝑣 1 subscript bra 𝑣 1 subscript 𝜎 𝑘 subscript ℋ subscript 𝜎 𝑘 U{k}^{\mathrm{init},0}:=\sum_{v\in[2,W]}\ket{v-1}\bra{v-1}{\sigma{k}}\in% \mathcal{H}{\sigma{k}} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_init , 0 end_POSTSUPERSCRIPT := ∑ start_POSTSUBSCRIPT italic_v ∈ [ 2 , italic_W ] end_POSTSUBSCRIPT | start_ARG italic_v - 1 end_ARG ⟩ ⟨ start_ARG italic_v - 1 end_ARG | start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∈ caligraphic_H start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT vanishes. Furthermore, U k ctrl , 0  ( C ′ ) := [ ⨂ l = 1 k − 1 𝟙 σ l − U k ctrl  ( C ′ ) ] ⊗ 𝟙 σ k ∈ ⨂ l = 1 k ℋ σ l assign superscript subscript 𝑈 𝑘 ctrl 0 superscript 𝐶 ′ tensor-product delimited-[] superscript subscript tensor-product 𝑙 1 𝑘 1 subscript 1 subscript 𝜎 𝑙 superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ subscript 1 subscript 𝜎 𝑘 superscript subscript tensor-product 𝑙 1 𝑘 subscript ℋ subscript 𝜎 𝑙 U_{k}^{\mathrm{ctrl},0}(C^{\prime}):=\left[\bigotimes_{l=1}^{k-1}\mathbbm{1}{% \sigma{l}}-U_{k}^{\mathrm{ctrl}}(C^{\prime})\right]\otimes\mathbbm{1}{\sigma% {k}}\in\bigotimes{l=1}^{k}\mathcal{H}{\sigma_{l}} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl , 0 end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) := [ ⨂ start_POSTSUBSCRIPT italic_l = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_k - 1 end_POSTSUPERSCRIPT blackboard_1 start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT - italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ] ⊗ blackboard_1 start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT ∈ ⨂ start_POSTSUBSCRIPT italic_l = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_k end_POSTSUPERSCRIPT caligraphic_H start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_l end_POSTSUBSCRIPT end_POSTSUBSCRIPT does not change the state by construction.

Report issue for preceding element

To realize U k subscript 𝑈 𝑘 U_{k} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT with quantum gates for a given k ∈ [ 1 , N ] 𝑘 1 𝑁 k\in[1,N] italic_k ∈ [ 1 , italic_N ] , only U k coin superscript subscript 𝑈 𝑘 coin U_{k}^{\mathrm{coin}} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_coin end_POSTSUPERSCRIPT has to be considered (because all other parts of U k subscript 𝑈 𝑘 U_{k} italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT have no effect on the resulting state), which consists of a sequence of joint pairs U k ctrl  ( C ′ ) ⊗ U k init  ( C ′ ) tensor-product superscript subscript 𝑈 𝑘 ctrl superscript 𝐶 ′ superscript subscript 𝑈 𝑘 init superscript 𝐶 ′ U_{k}^{\mathrm{ctrl}}(C^{\prime})\otimes U_{k}^{\mathrm{init}}(C^{\prime}) italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_ctrl end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) ⊗ italic_U start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT start_POSTSUPERSCRIPT roman_init end_POSTSUPERSCRIPT ( italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ) , one for each C ′ ∈ 𝒞 σ  ( k ) superscript 𝐶 ′ subscript 𝒞 𝜎 𝑘 C^{\prime}\in\mathcal{C}{\sigma}(k) italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) . Each of these joint pairs represent a conditional loading of a probability distribution to realize | C ′ ⟩ σ k subscript ket superscript 𝐶 ′ subscript 𝜎 𝑘 \ket{C^{\prime}}{\sigma_{k}} | start_ARG italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT end_ARG ⟩ start_POSTSUBSCRIPT italic_σ start_POSTSUBSCRIPT italic_k end_POSTSUBSCRIPT end_POSTSUBSCRIPT , which is a well-known task that may, however, require an exponential number of gates [ [23](https://arxiv.org/html/2312.13853v2#bib.bib23)] .

Report issue for preceding element

In the original WFC, a pattern conflict leads to a restart of the algorithm. This can also be realized in QWFC by adding an additional “conflict detection qubit” that stores this information, making [S1](https://arxiv.org/html/2312.13853v2#Sx6.I5.i1), [S2](https://arxiv.org/html/2312.13853v2#Sx6.I5.i2), [V1](https://arxiv.org/html/2312.13853v2#Sx6.I6.i1), and [V2](https://arxiv.org/html/2312.13853v2#Sx6.I6.i2) obsolete. This optional extension is not further discussed.

Report issue for preceding element

### Technical Details of HWFC

Report issue for preceding element

Presume H 𝐻 H italic_H partitions such that partition h ∈ [ 1 , H ] ℎ 1 𝐻 h\in[1,H] italic_h ∈ [ 1 , italic_H ] contains all of the segment identifiers from the set S h ⊂ [ 1 , N ] superscript 𝑆 ℎ 1 𝑁 S^{h}\subset[1,N] italic_S start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT ⊂ [ 1 , italic_N ] with ⋃ h = 1 H S h = [ 1 , N ] superscript subscript ℎ 1 𝐻 superscript 𝑆 ℎ 1 𝑁 \bigcup_{h=1}^{H}S^{h}=[1,N] ⋃ start_POSTSUBSCRIPT italic_h = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_H end_POSTSUPERSCRIPT italic_S start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT = [ 1 , italic_N ] and ⋂ h = 1 H S h = { } superscript subscript ℎ 1 𝐻 superscript 𝑆 ℎ \bigcap_{h=1}^{H}S^{h}={} ⋂ start_POSTSUBSCRIPT italic_h = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_H end_POSTSUPERSCRIPT italic_S start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT = { } . The already sampled sub-contents C 1 , … , C h − 1 superscript 𝐶 1 … superscript 𝐶 ℎ 1 C^{1},\dots,C^{h-1} italic_C start_POSTSUPERSCRIPT 1 end_POSTSUPERSCRIPT , … , italic_C start_POSTSUPERSCRIPT italic_h - 1 end_POSTSUPERSCRIPT are used as an additional constraint, which has to be taken account in the quantum circuit by replacing 𝒞 σ  ( k ) subscript 𝒞 𝜎 𝑘 \mathcal{C}{\sigma}(k) caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) in Equations 12 and 13 with 𝒞 σ h  ( k ) := { C | C = ⋃ i = 1 h − 1 C i ∪ C ′  ∀ C ′ ∈ 𝒞 σ  ( k ) } assign subscript superscript 𝒞 ℎ 𝜎 𝑘 conditional-set 𝐶 𝐶 superscript subscript 𝑖 1 ℎ 1 superscript 𝐶 𝑖 superscript 𝐶 ′ for-all superscript 𝐶 ′ subscript 𝒞 𝜎 𝑘 \mathcal{C}^{h}{\sigma}(k):={C,|,C=\bigcup_{i=1}^{h-1}C^{i}\cup C^{\prime}% ,\forall,C^{\prime}\in\mathcal{C}_{\sigma}(k)} caligraphic_C start_POSTSUPERSCRIPT italic_h end_POSTSUPERSCRIPT start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) := { italic_C | italic_C = ⋃ start_POSTSUBSCRIPT italic_i = 1 end_POSTSUBSCRIPT start_POSTSUPERSCRIPT italic_h - 1 end_POSTSUPERSCRIPT italic_C start_POSTSUPERSCRIPT italic_i end_POSTSUPERSCRIPT ∪ italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∀ italic_C start_POSTSUPERSCRIPT ′ end_POSTSUPERSCRIPT ∈ caligraphic_C start_POSTSUBSCRIPT italic_σ end_POSTSUBSCRIPT ( italic_k ) } .

Report issue for preceding element

## ACKNOWLEDGMENTS

Report issue for preceding element

Parts of this research have been funded by the Ministry of Science and Health of the State of Rhineland-Palatinate (Germany) as part of the project AnQuC.

Report issue for preceding element

## REFERENCES

Report issue for preceding element

[1] ↑ Maxim Gumin. WaveFunctionCollapse. [https://github.com/mxgmn/WaveFunctionCollapse](https://github.com/mxgmn/WaveFunctionCollapse) [Online], 2016. Accessed on 29 July 2024.

[2] ↑ Isaac Karth and Adam M. Smith. Wave function collapse is constraint solving in the wild. In Proceedings of the 12th International Conference on the Foundations of Digital Games, FDG '17, New York, NY, USA, 2017. Association for Computing Machinery.

[3] ↑ Isaac Karth and Adam M. Smith. Wavefunctioncollapse: Content generation via constraint solving and machine learning. IEEE Transactions on Games, 14(3):364–376, 2022.

[4] ↑ Yuhe Nie, Shaoming Zheng, Zhan Zhuang, and Julian Togelius. Nested wave function collapse enables large-scale content generation. IEEE Transactions on Games, pages 1–11, 2024.

[5] ↑ Manabendra Nath Bera, Antonio Acín, Marek Kuś, Morgan W Mitchell, and Maciej Lewenstein. Randomness in quantum mechanics: philosophy, physics and technology. Reports on Progress in Physics, 80(12):124001, 11 2017.

[6] ↑ Vaisakh Mannalatha, Sandeep Mishra, and Anirban Pathak. A comprehensive review of quantum random number generators: concepts, classification and the origin of randomness. Quantum Information Processing, 22(12), 12 2023.

[7] ↑ John Preskill. Quantum Computing in the NISQ era and beyond. Quantum, 2:79, August 2018.

[8] ↑ Michael A. Nielsen and Isaac L. Chuang. Quantum Computation and Quantum Information: 10th Anniversary Edition. Cambridge University Press, 2010.

[9] ↑ Xinyu Mao, Wanli Yu, Kazunori D Yamada, and Michael R. Zielewski. Procedural content generation via generative artificial intelligence. arXiv:2407.09013 [cs.AI], 2024. Preprint.

[10] ↑ Michael Beukman, Christopher W Cleghorn, and Steven James. Procedural content generation using neuroevolution and novelty search for diverse video game levels. In Proceedings of the Genetic and Evolutionary Computation Conference, GECCO '22, pages 1028–1037, New York, NY, USA, 2022. Association for Computing Machinery.

[11] ↑ Mar Zamorano, Carlos Cetina, and Federica Sarro. The quest for content: A survey of search-based procedural content generation for video games. arXiv:2311.04710 [cs.SE], 2023. Preprint.

[12] ↑ Hwanhee Kim, Seongtaek Lee, Hyundong Lee, Teasung Hahn, and Shinjin Kang. Automatic generation of game content using a graph-based wave function collapse algorithm. In 2019 IEEE Conference on Games (CoG), pages 1–4, 2019.

[13] ↑ Arunpreet Sandhu, Zeyuan Chen, and Joshua McCoy. Enhancing wave function collapse with design-level constraints. In Proceedings of the 14th International Conference on the Foundations of Digital Games, FDG '19, New York, NY, USA, 2019. Association for Computing Machinery.

[14] ↑ Thijmen Stefanus Leendert Langendam and Rafael Bidarra. miwfc - designer empowerment through mixed-initiative wave function collapse. In Proceedings of the 17th International Conference on the Foundations of Digital Games, FDG '22, New York, NY, USA, 2022. Association for Computing Machinery.

[15] ↑ Shaad Alaka and Rafael Bidarra. Hierarchical semantic wave function collapse. In Proceedings of the 18th International Conference on the Foundations of Digital Games, FDG '23, New York, NY, USA, 2023. Association for Computing Machinery.

[16] ↑ Michael Beukman, Branden Ingram, Ireton Liu, and Benjamin Rosman. Hierarchical wave function collapse. Proceedings of the AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment, 19(1):23–33, 10 2023.

[17] ↑ Yash Punia, Priyanka, and T.P Sharma. Enhancing wave function collapse algorithm using bitwise operations. In 2023 International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3), pages 1–5, 2023.

[18] ↑ James R. Wootton. Procedural generation using quantum computation. In International Conference on the Foundations of Digital Games, FDG'20. ACM, September 2020.

[19] ↑ James Wootton and Marcel Pfaffhauser. Investigating the usefulness of quantum blur. arXiv:2112.01646 [cs.CV], 2023. Preprint.

[20] ↑ James R. Wootton. A quantum procedure for map generation. In 2020 IEEE Conference on Games (CoG). IEEE, 8 2020.

[21] ↑ Laura J. Piispanen. Designing quantum games and quantum art for exploring quantum physics. In 2023 IEEE Conference on Games (CoG), pages 1–8, 2023.

[22] ↑ Raoul Heese. Quantum Wave Function Collapse. [https://github.com/RaoulHeese/QWFC](https://github.com/RaoulHeese/QWFC) [Online], 2023. Accessed on 29 July 2024.

[23] ↑ Kalyan Dasgupta and Binoy Paine. Loading probability distributions in a quantum circuit. arXiv:2208.13372 [quant-ph], 2022. Preprint.

[24] ↑ IBM. IBM Quantum. [https://quantum.ibm.com](https://quantum.ibm.com/) [Online], 2021. Accessed on 29 July 2024.

[25] ↑ RottingPixels. 2D Four Seasons Platformer Tileset [16x16]. [https://opengameart.org/content/2d-four-seasons-platformer-tileset-16x16](https://opengameart.org/content/2d-four-seasons-platformer-tileset-16x16) [Online], 2019. Accessed on 29 July 2024.

Report Issue

Report GitHub Issue

Title:

Content selection saved. Describe the issue below:

Description:

Submit without GitHub Submit in GitHub

Report Issue for Selection

Generated by [L A T E xml](https://math.nist.gov/~BMiller/LaTeXML/)

## Instructions for reporting errors

We are continuing to improve HTML versions of papers, and your feedback helps enhance accessibility and mobile support. To report errors in the HTML that will help us improve conversion and rendering, choose any of the methods listed below:

Click the "Report Issue" button.

Open a report feedback form via keyboard, use " **Ctrl + ?**".

Make a text selection and click the "Report Issue for Selection" button near your cursor.

You can use Alt+Y to toggle on and Alt+Shift+Y to toggle off accessible reporting links at each section.

Our team has already identified [the following issues](https://github.com/arXiv/html_feedback/issues). We appreciate your time reviewing and reporting rendering errors we may not have found yet. Your efforts will help us improve the HTML versions for all readers, because disability should not be a barrier to accessing research. Thank you for your continued support in championing open access for all.

Have a free development cycle? Help support accessibility at arXiv! Our collaborators at LaTeXML maintain a [list of packages that need conversion](https://github.com/brucemiller/LaTeXML/wiki/Porting-LaTeX-packages-for-LaTeXML), and welcome [developer contributions](https://github.com/brucemiller/LaTeXML/issues).