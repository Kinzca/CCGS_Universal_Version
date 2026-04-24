# Learning efficient constraints in answer set programming

Learning efficient constraints in answer set programming – Association for Logic Programming

Search for: Search

[Association for Logic Programming](https://logicprogramming.org/) 

### Main menu

[Skip to content](https://logicprogramming.org/learning-efficient-constraints-in-answer-set-programming-2/#primary)

[ALP](https://logicprogramming.org/the-association-for-logic-programming/)

[Mission and Vision](https://logicprogramming.org/the-association-for-logic-programming/basics-on-alp/)

[ALP History](https://logicprogramming.org/the-association-for-logic-programming/alp-history/)

[ALP Board](https://logicprogramming.org/the-association-for-logic-programming/board/)

[ALP Newsletter](https://logicprogramming.org/the-association-for-logic-programming/alp-newsletters/)

[ALP Awards](https://logicprogramming.org/the-association-for-logic-programming/alp-awards/)

[ALP by laws](https://logicprogramming.org/the-association-for-logic-programming/policies-2/alp-by-laws/)

[ALP Policies](https://logicprogramming.org/the-association-for-logic-programming/policies-2/)

[ALP EC Elections](https://logicprogramming.org/the-association-for-logic-programming/policies-2/executive-committee-elections/)

[Diversity and Inclusion Policy](https://logicprogramming.org/diversion-and-inclusion-policy/)

[ALP Sponsorship Guidelines](https://logicprogramming.org/the-association-for-logic-programming/alp-sponsorship-guidelines/)

[Conference Policy](https://logicprogramming.org/the-association-for-logic-programming/policies-2/conference-policy-2/)

[For referees](https://logicprogramming.org/the-association-for-logic-programming/policies-2/policies/)

[ICLP](https://logicprogramming.org/conferences/)

[TPLP](https://logicprogramming.org/tplp/)

[Scope and submission](https://logicprogramming.org/tplp/scope-and-submission/)

[Content](https://logicprogramming.org/tplp/content/)

[Accepted papers](https://logicprogramming.org/tplp/tplp-accepted-papers/)

[Book Reviews](https://logicprogramming.org/tplp/book-reviews/)

[Alain Colmerauer Prize](https://logicprogramming.org/alain-colmerauer-prize/)

[Theses and Dissertations](https://logicprogramming.org/phd-theses/)

[PhD Theses](https://logicprogramming.org/phd-theses/phdtheses/)

[Master's theses](https://logicprogramming.org/phd-theses/masters-theses/)

[Systems and Links](https://logicprogramming.org/systems/)

[Prolog Community](https://prolog-lang.org/)

# Learning efficient constraints in answer set programming

By Alice Tarzariol

Alpen Adria Universitat Klagenfurt (Austria)

April 2023

**Abstract**

Answer Set Programming (ASP) is a declarative programming paradigm based on non-monotonic reasoning and stable model semantics. Its versatile language can be used to encode many combinatorial search and optimization problems as compact and elegant logic programs, which answer sets correspond to problem solutions. Powerful algorithms of modern ASP solvers ensure efficient computation of answer sets even for large instances of practical problems.Nevertheless, the applicability of ASP is subordinated to the quality of the problem encoding, which often requires a programmer to have a clear understanding of the considered problem in combination with vast experience in using the ASP modeling language.In this regard, the computation of symmetric answer sets, i.e., syntactically different candidates that entail the same characteristics, is a factor that can significantly affect the performance of a solver. Finding symmetric answer sets does not bring any additional value and, therefore, programmers use constraints in their encoding to prune them from the search space. However, the identification of symmetries and the definition of constraints can be tedious and time-consuming. In the literature, we can find various tools that aim to avoid the computation of symmetric answer sets. A popular approach consists of automatically detecting and introducing a set of Symmetry Breaking Constraints (SBCs) for each given problem instance using properties of permutation groups. The system sbass implements this type of approach for ground ASP programs. Unfortunately, the computational advantages derived from sbass or, more generally, from any instance-specific symmetry breaking approach, do not carry forward to large-scale instances or advanced encodings. Moreover, the computed SBCs are propositional and, therefore, can neither be meaningfully interpreted nor transferred to other instances. As a result, a time-consuming recomputation of SBCs must be done before every invocation of a solver. In contrast, model-oriented approaches aim to find general SBCs that depend less on a particular instance. This thesis presents a novel model-oriented approach that lifts ground symmetries identified by instance-specific approaches by applying Inductive Logic Programming—a symbolic machine-learning technique.The results show how the devised learning framework manages to find constraints that generalize for a given distribution of instances and overcome the limitations of the online application of instance-specific approaches like sbass. Its applicability is first studied on a limited set of simple combinatorial decision problems and then extended to industrial problems such as the Partner Units Problem. Experiments demonstrate that the efficiency of the learned constraints not only overcomes the propositional SBCs introduced by sbass but also outperforms advanced encodings written by ASP experts, thanks to the exploitation of the characteristics of the instances under consideration. Finally, we further generalize the application domain to combinatorial optimization problems, obtaining similar improvements in solver performance.

[Full](https://netlibrary.aau.at/obvuklhs/content/titleinfo/9173612) [Text](https://netlibrary.aau.at/obvuklhs/content/titleinfo/9173612)

### Search in our archives

Search for: Search

### Categories

[ALP ISSUE](https://logicprogramming.org/category/issue/) (274)

[Accepted Papers](https://logicprogramming.org/category/issue/accepted-papers/) (15)

[Conference reports](https://logicprogramming.org/category/issue/reports/) (43)

[Editorial](https://logicprogramming.org/category/issue/editorial/) (37)

[Feature Articles](https://logicprogramming.org/category/issue/articles/) (82)

[In Memoriam](https://logicprogramming.org/category/issue/in-memoriam/) (19)

[Left Field](https://logicprogramming.org/category/issue/left-field/) (3)

[LP Systems](https://logicprogramming.org/category/issue/systems/) (14)

[Personal perspectives on LP](https://logicprogramming.org/category/issue/perspectives/) (4)

[Positions in LP](https://logicprogramming.org/category/issue/positions/) (8)

[Programming Contest](https://logicprogramming.org/category/issue/prolog-programming-contest/) (5)

[Regular columns](https://logicprogramming.org/category/issue/columns/) (39)

[Book Announcement](https://logicprogramming.org/category/issue/columns/book-announcement/) (11)

[Community news](https://logicprogramming.org/category/issue/columns/news/) (13)

[Doctoral dissertations](https://logicprogramming.org/category/issue/columns/phd/) (6)

[Games and Puzzles](https://logicprogramming.org/category/issue/columns/games-and-puzzles/) (7)

[Research Groups](https://logicprogramming.org/category/issue/groups/) (1)

[Asyncronous News](https://logicprogramming.org/category/asyncronous-news/) (192)

[Call for papers](https://logicprogramming.org/category/asyncronous-news/callforpapers/) (119)

[Call for Participation](https://logicprogramming.org/category/asyncronous-news/call-for-participation/) (14)

[Community News](https://logicprogramming.org/category/asyncronous-news/annunci/) (19)

[Conferences News](https://logicprogramming.org/category/asyncronous-news/conferences-news/) (2)

[PhD positions](https://logicprogramming.org/category/asyncronous-news/phd-positions/) (10)

[Positions in LP](https://logicprogramming.org/category/asyncronous-news/positions-in-lp/) (12)

[Schools](https://logicprogramming.org/category/asyncronous-news/schools/) (12)

[Uncategorized](https://logicprogramming.org/category/uncategorized/) (4)

### Archives per month

Archives per month

Select Month

March 2026 (2)

January 2026 (1)

November 2025 (1)

September 2025 (1)

July 2025 (1)

March 2025 (1)

September 2024 (1)

August 2024 (1)

March 2024 (1)

January 2024 (2)

October 2023 (1)

September 2023 (3)

June 2023 (3)

May 2023 (1)

April 2023 (1)

February 2023 (2)

January 2023 (2)

November 2022 (1)

August 2022 (5)

May 2022 (1)

March 2022 (2)

February 2022 (1)

January 2022 (1)

October 2021 (1)

September 2021 (2)

August 2021 (3)

May 2021 (1)

April 2021 (1)

February 2021 (1)

January 2021 (1)

December 2020 (5)

October 2020 (1)

September 2020 (3)

August 2020 (1)

July 2020 (1)

June 2020 (1)

April 2020 (2)

February 2020 (1)

November 2019 (1)

October 2019 (2)

September 2019 (2)

August 2019 (1)

July 2019 (2)

June 2019 (3)

May 2019 (1)

April 2019 (5)

March 2019 (1)

February 2019 (3)

December 2018 (2)

October 2018 (1)

August 2018 (6)

July 2018 (5)

May 2018 (2)

April 2018 (5)

March 2018 (2)

February 2018 (1)

January 2018 (1)

December 2017 (1)

November 2017 (4)

October 2017 (3)

September 2017 (1)

August 2017 (3)

July 2017 (6)

June 2017 (1)

May 2017 (3)

April 2017 (4)

February 2017 (2)

January 2017 (2)

December 2016 (4)

November 2016 (1)

October 2016 (2)

September 2016 (4)

August 2016 (3)

July 2016 (3)

June 2016 (4)

May 2016 (1)

April 2016 (1)

March 2016 (3)

February 2016 (2)

January 2016 (3)

December 2015 (7)

October 2015 (1)

September 2015 (6)

August 2015 (3)

July 2015 (3)

June 2015 (2)

April 2015 (4)

March 2015 (3)

February 2015 (2)

January 2015 (1)

December 2014 (6)

November 2014 (1)

October 2014 (2)

September 2014 (6)

July 2014 (3)

June 2014 (3)

May 2014 (1)

April 2014 (1)

March 2014 (5)

February 2014 (4)

January 2014 (2)

December 2013 (5)

November 2013 (1)

October 2013 (8)

September 2013 (3)

July 2013 (3)

June 2013 (6)

May 2013 (2)

April 2013 (3)

March 2013 (7)

January 2013 (2)

December 2012 (10)

November 2012 (2)

September 2012 (11)

August 2012 (1)

July 2012 (1)

June 2012 (9)

May 2012 (1)

April 2012 (3)

March 2012 (6)

February 2012 (4)

January 2012 (3)

December 2011 (5)

November 2011 (7)

October 2011 (3)

September 2011 (9)

August 2011 (2)

July 2011 (6)

June 2011 (10)

May 2011 (1)

April 2011 (4)

March 2011 (7)

February 2011 (4)

January 2011 (3)

December 2010 (7)

November 2010 (3)

October 2010 (4)

September 2010 (10)

August 2010 (4)

July 2010 (5)

June 2010 (12)

May 2010 (1)

April 2010 (1)

March 2010 (22)

December 2009 (1)

### The association for Logic Programming

[Diversity and Inclusion Policy](https://logicprogramming.org/diversion-and-inclusion-policy/)

[ICLP 1993](https://logicprogramming.org/iclp93/)

[ICLP 1994](https://logicprogramming.org/iclp94/)

[ICLP 1995](https://logicprogramming.org/iclp95/)

[ICLP 2010](https://logicprogramming.org/iclp10/)

[ICLP 99 16th International Conference on Logic Programming](https://logicprogramming.org/iclp99/)

[ILPS 1993](https://logicprogramming.org/ilps-1993/)

[JICSLP 1996](https://logicprogramming.org/jicslp-1996/)

[JICSLP'92](https://logicprogramming.org/jicslp92/)

[Learning efficient constraints in answer set programming](https://logicprogramming.org/learning-efficient-constraints-in-answer-set-programming-2/)

[Learning efficient constraints in answer set programming](https://logicprogramming.org/learning-efficient-constraints-in-answer-set-programming/)

[The 2023 ALP Alain Colmerauer Prize](https://logicprogramming.org/the-2023-alp-alain-colmerauer-prize/)

[The 2024 Alain Colmerauer Prize](https://logicprogramming.org/the-2024-alain-colmerauer-prize/)

[The 2025 Alain Colmerauer Prize](https://logicprogramming.org/the-2025-alain-colmerauer-prize/)

[The ALP Alain Colmerauer Prize](https://logicprogramming.org/alain-colmerauer-prize/)

[The 2024 Alain Colmerauer Prize](https://logicprogramming.org/alain-colmerauer-prize/the-2024-alain-colmerauer-prize/)

[TPLP Volume 22](https://logicprogramming.org/tplp-volume-22/)

[TPLP Volume 23, 2023](https://logicprogramming.org/tplp-volume-23/)

[TPLP Volume 24, 2024](https://logicprogramming.org/tplp-volume-24-2024/)

[tplp-volume-25-2025](https://logicprogramming.org/tplp-volume-25-2025/)

[tplp-volume-26-2026](https://logicprogramming.org/tplp-volume-26-2026/)

[The Association for Logic Programming](https://logicprogramming.org/the-association-for-logic-programming/)

[ALP: Mission and Vision](https://logicprogramming.org/the-association-for-logic-programming/basics-on-alp/)

[ALP History](https://logicprogramming.org/the-association-for-logic-programming/alp-history/)

[ALP Board](https://logicprogramming.org/the-association-for-logic-programming/board/)

[ALP Newsletter](https://logicprogramming.org/the-association-for-logic-programming/alp-newsletters/)

[ALP Awards](https://logicprogramming.org/the-association-for-logic-programming/alp-awards/)

[ALP Policies](https://logicprogramming.org/the-association-for-logic-programming/policies-2/)

[ALP Sponsorship Guidelines](https://logicprogramming.org/the-association-for-logic-programming/alp-sponsorship-guidelines/)

[ICLP Conferences](https://logicprogramming.org/conferences/)

[ICLP 1997](https://logicprogramming.org/conferences/iclp-1997/)

[ICLP 2003](https://logicprogramming.org/conferences/iclp03/)

[ICLP 2005](https://logicprogramming.org/conferences/iclp-2005/)

[ICLP 2006](https://logicprogramming.org/conferences/iclp-2006/)

[ICLP 2008](https://logicprogramming.org/conferences/iclp08/)

[ICLP 2009](https://logicprogramming.org/conferences/iclp09/)

[ICLP 2010](https://logicprogramming.org/conferences/iclp2010-proceedings/)

[ICLP 2011](https://logicprogramming.org/conferences/iclp-2011-proceedings/)

[ICLP 2012](https://logicprogramming.org/conferences/iclp-2012-proceedings/)

[ICLP 2012](https://logicprogramming.org/conferences/iclp12/)

[ICLP 2013](https://logicprogramming.org/conferences/iclp-2013-proceedings/)

[ICLP 2014](https://logicprogramming.org/conferences/iclp-2014-proceedings/)

[ICLP 2015](https://logicprogramming.org/conferences/iclp-2015-proceedings/)

[ICLP 2015](https://logicprogramming.org/conferences/iclp15/)

[ICLP 2016](https://logicprogramming.org/conferences/iclp-2016/)

[ICLP 2017](https://logicprogramming.org/conferences/iclp-2017/)

[ICLP 2018](https://logicprogramming.org/conferences/iclp-2018/)

[Theory and Practice of Logic Programming](https://logicprogramming.org/tplp/)

[Scope and submission](https://logicprogramming.org/tplp/scope-and-submission/)

[TPLP Volume 20, 2020](https://logicprogramming.org/tplp/tplp-volume-20-2020/)

[TPLP Volume 21](https://logicprogramming.org/tplp/tplp-volume-21/)

[Content](https://logicprogramming.org/tplp/content/)

[TPLP Volume 18, 2018](https://logicprogramming.org/tplp/content/tplp-volume-18-2018/)

[Volume 19](https://logicprogramming.org/tplp/content/volume-19/)

[TPLP Volume 17, 2017](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/)

[2015-03](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2015-03/)

[2015-09](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2015-09/)

[2016-07](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-07/)

[2016-08](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-08/)

[2016-09](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-09/)

[2016-10](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-10/)

[2016-11](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-11/)

[2016-12](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-12/)

[2016-13](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2016-13/)

[2017-01](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-01/)

[2017-02](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-02/)

[2017-03](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-03/)

[2017-04](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-04/)

[2017-05](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-05/)

[2017-07](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-07/)

[2017-08](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-08/)

[2017-09](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-09/)

[2017-10](https://logicprogramming.org/tplp/content/tplp-volume-17-2017/2017-10/)

[TPLP Volume 16, 2016](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/)

[2014-08](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2014-08/)

[2014-10](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2014-10/)

[2015-01](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-01/)

[2015-02](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-02/)

[2015-04](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-04/)

[2015-05](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-05/)

[2015-06](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-06/)

[2015-07](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-07/)

[2015-08](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2015-08/)

[2016-01](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2016-01/)

[2016-02](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2016-02/)

[2016-03](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2016-03/)

[2016-04](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2016-04/)

[2016-05](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2016-05/)

[2016-06](https://logicprogramming.org/tplp/content/tplp-volume-16-2016/2016-06/)

[TPLP Volume 15, 2015](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/)

[15(1)1](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-11/)

[15(1)2](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-03/)

[15(1)3](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-08/)

[15(1)4](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-09/)

[15(1)5](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-01/)

[15(2)1](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/tplp-accepted-paperstplp-2013-12/)

[15(2)2](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-13/)

[15(2)3](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-14/)

[15(2)4](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-15/)

[15(2)5](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-16/)

[15(3)1](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-06/)

[15(3)2](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-10/)

[15(3)3](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2013-01-2/)

[15(3)4](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-09-2/)

[2014-04](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-04/)

[2014-05](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-05/)

[2014-06](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-06/)

[2014-07](https://logicprogramming.org/tplp/content/tplp-volume-15-2015/2014-07/)

[TPLP Volume 14, 2014](https://logicprogramming.org/tplp/content/tplp-volume-14-2014/)

[14(3)5](https://logicprogramming.org/tplp/content/tplp-volume-14-2014/2013-03/)

[14(6)1](https://logicprogramming.org/tplp/content/tplp-volume-14-2014/2013-02/)

[14(6)2](https://logicprogramming.org/tplp/content/tplp-volume-14-2014/2013-04/)

[14(6)3](https://logicprogramming.org/tplp/content/tplp-volume-14-2014/2013-05/)

[14(6)4](https://logicprogramming.org/tplp/content/tplp-volume-14-2014/2013-07/)

[TPLP Volume 13, 2013](https://logicprogramming.org/tplp/content/tplp-volume-13-2013/)

[13 (01) 1](https://logicprogramming.org/tplp/content/tplp-volume-13-2013/13-01-1/)

[13 (01) 2](https://logicprogramming.org/tplp/content/tplp-volume-13-2013/13-01-2/)

[13 (01) 3](https://logicprogramming.org/tplp/content/tplp-volume-13-2013/13-01-3/)

[13 (01) 4](https://logicprogramming.org/tplp/content/tplp-volume-13-2013/13-01-4/)

[Accepted papers](https://logicprogramming.org/tplp/tplp-accepted-papers/)

[2017-06](https://logicprogramming.org/tplp/tplp-accepted-papers/2017-06/)

[2017-11](https://logicprogramming.org/tplp/tplp-accepted-papers/2017-11/)

[2017-12](https://logicprogramming.org/tplp/tplp-accepted-papers/2017-12/)

[Book Reviews](https://logicprogramming.org/tplp/book-reviews/)

[Book Review 2013-1](https://logicprogramming.org/tplp/book-reviews/book-review-2013-1/)

[Book Review 2014-1](https://logicprogramming.org/tplp/book-reviews/book-review-2014-1/)

[Book Review 2014-2](https://logicprogramming.org/tplp/book-reviews/book-review-2014-2/)

[Theses and Dissertations](https://logicprogramming.org/phd-theses/)

[PhD Theses](https://logicprogramming.org/phd-theses/phdtheses/)

[A Formal Framework for Modelling and Analysing Safety-Critical Human Multitasking](https://logicprogramming.org/phd-theses/phdtheses/a-formal-framework-for-modelling-and-analysing-safety-critical-human-multitasking/)

[A Portable Approach for Bidirectional Integration between a Logic and a Statically-Typed Object-Oriented Programming Language](https://logicprogramming.org/phd-theses/phdtheses/a-portable-approach-for-bidirectional-integration-between-a-logic-and-a-statically-typed-object-oriented-programming-language/)

[Abstraction for Reasoning about Agent Behavior with Answer Set Programming](https://logicprogramming.org/phd-theses/phdtheses/abstraction-for-reasoning-about-agent-behavior-with-answer-set-programming/)

[Algebraic Approach to Causal Logic Programs](https://logicprogramming.org/phd-theses/phdtheses/algebraic-approach-to-causal-logic-programs/)

[Automated Reasoning via a Multi-sorted Fragment of Computable Set Theory with Applications to Semantic Web](https://logicprogramming.org/phd-theses/phdtheses/automated-reasoning-via-a-multi-sorted-fragment-of-computable-set-theory-with-applications-to-semantic-web/)

[Automatic Parallelisation for Mercury](https://logicprogramming.org/phd-theses/phdtheses/automatic-parallelisation-for-mercury/)

[Bisimulation Techniques and Algorithms for Concurrent Constraint Programming](https://logicprogramming.org/phd-theses/phdtheses/bisimulation-techniques-and-algorithms-for-concurrent-constraint-programming/)

[Computable Set Theory and Logic Programming](https://logicprogramming.org/phd-theses/phdtheses/computable-set-theory-and-logic-programming/)

[Computational tasks in answer set programming: algoritms and implementations](https://logicprogramming.org/phd-theses/phdtheses/computational-tasks-in-answer-set-programming-algoritms-and-implementations/)

[Design and Implementation of a Modern ASP Grounder](https://logicprogramming.org/phd-theses/phdtheses/design-and-implementation-of-a-modern-asp-grounder/)

[Dynamic Magic Sets](https://logicprogramming.org/phd-theses/phdtheses/dynamic-magic-sets/)

[Enhancing and Applying Answer Set Programming: Lazy Constraints, Partial Compilation and Question Answering](https://logicprogramming.org/phd-theses/phdtheses/enhancing-and-applying-answer-set-programming-lazy-constraints-partial-compilation-and-question-answering/)

[Extending IDP with second order logic](https://logicprogramming.org/phd-theses/phdtheses/extending-idp-with-second-order-logic/)

[Extension and Efficient Evaluation of Disjunctive Logic Programs](https://logicprogramming.org/phd-theses/phdtheses/extension-and-efficient-evaluation-of-disjunctive-logic-programs/)

[Extensions and Applications of Probabilistic Logic Programming](https://logicprogramming.org/phd-theses/phdtheses/extensions-and-applications-of-probabilistic-logic-programming/)

[Foundations of Communication-Centred Programming: Calculi, Logic & Types](https://logicprogramming.org/phd-theses/phdtheses/foundations-of-communication-centred-programming-calculi-logic-types/)

[Freeness and related analyses of constraint logic programs using abstract interpretation](https://logicprogramming.org/phd-theses/phdtheses/freeness-and-related-analyses-of-constraint-logic-programs-using-abstract-interpretation/)

[From Logic Programming to Human Reasoning: How to be Artificially Human](https://logicprogramming.org/phd-theses/phdtheses/from-logic-programming-to-human-reasoning-how-to-be-artificially-human/)

[Inference and Learning Systems for Uncertain Relational Data](https://logicprogramming.org/phd-theses/phdtheses/inference-and-learning-systems-for-uncertain-relational-data/)

[Integrated HEX-Algorithms and Applications in Machine Learning](https://logicprogramming.org/phd-theses/phdtheses/integrated-hex-algorithms-and-applications-in-machine-learning/)

[Knowledge representation and reasoning in incomplete logic programming](https://logicprogramming.org/phd-theses/phdtheses/knowledge-representation-and-reasoning-in-incomplete-logic-programming/)

[Logic Engineering. The Case of Description and Hybrid Logics](https://logicprogramming.org/phd-theses/phdtheses/logic-engineering-the-case-of-description-and-hybrid-logics/)

[Logic Programming in non-conventional environments](https://logicprogramming.org/phd-theses/phdtheses/logic-programming-in-non-conventional-environments/)

[Logic Programming with Preferences on Rules](https://logicprogramming.org/phd-theses/phdtheses/logic-programming-with-preferences-on-rules/)

[Logical Agents: Memory Management, Advanced Architectures and Applications](https://logicprogramming.org/phd-theses/phdtheses/logical-agents-memory-management-advanced-architectures-and-applications/)

[Micro-Intelligence for the IoT: LP models and technologies](https://logicprogramming.org/phd-theses/phdtheses/micro-intelligence-for-the-iot-lp-models-and-technologies/)

[Model Checking: the Interval Way](https://logicprogramming.org/phd-theses/phdtheses/model-checking-the-interval-way/)

[Modeling and Verification of real-time and cyber-physical systems](https://logicprogramming.org/phd-theses/phdtheses/modeling-and-verification-of-real-time-and-cyber-physical-systems/)

[Ontology-driven Information Extraction](https://logicprogramming.org/phd-theses/phdtheses/ontology-driven-information-extraction/)

[Paracoherent Answer Set Programming](https://logicprogramming.org/phd-theses/phdtheses/paracoherent-answer-set-programming/)

[Portfolio Approaches in Constraint Programming](https://logicprogramming.org/phd-theses/phdtheses/portfolio-approaches-in-constraint-programming/)

[Probabilistic Reasoning and Learning for the Semantic Web](https://logicprogramming.org/phd-theses/phdtheses/probabilistic-reasoning-and-learning-for-the-semantic-web/)

[Promoting Modular Nonmonotonic Logic Programs](https://logicprogramming.org/phd-theses/phdtheses/promoting-modular-nonmonotonic-logic-programs/)

[Proof Methods for Conditional and Preferential Logics](https://logicprogramming.org/phd-theses/phdtheses/proof-methods-for-conditional-and-preferential-logics/)

[Reasoning about coroutines](https://logicprogramming.org/phd-theses/phdtheses/reasoning-about-coroutines-2/)

[Reasoning over Complex Temporal Specifications and Noisy Data Streams](https://logicprogramming.org/phd-theses/phdtheses/reasoning-over-complex-temporal-specifications-and-noisy-data-streams/)

[Sequent Calculi with Context Restrictions and Applications to Conditional Logic](https://logicprogramming.org/phd-theses/phdtheses/sequent-calculi-with-context-restrictions-and-applications-to-conditional-logic/)

[Specification and Verification of Declarative Open Interaction Models – A Logic-based framework](https://logicprogramming.org/phd-theses/phdtheses/specification-and-verification-of-declarative-open-interaction-models-a-logic-based-framework/)

[Structured interactive scores: From a structural description of a multimedia scenario to a real-time capable implementation with formal semantics](https://logicprogramming.org/phd-theses/phdtheses/structured-interactive-scores-from-a-structural-description-of-a-multimedia-scenario-to-a-real-time-capable-implementation-with-formal-semantics/)

[Timeline-based planning: Expressiveness and Complexity](https://logicprogramming.org/phd-theses/phdtheses/timeline-based-planning-expressiveness-and-complexity-2/)

[Towards Ethical Chatbots: Monitoring and Evaluation of the Ethical Behavior of Employees in Online Customer Service Chat](https://logicprogramming.org/phd-theses/phdtheses/towards-ethical-chatbots-monitoring-and-evaluation-of-the-ethical-behavior-of-employees-in-online-customer-service-chat/)

[Towards Ethical Chatbots: Monitoring and Evaluation of the Ethical Behavior of Employees in Online Customer Service Chat](https://logicprogramming.org/phd-theses/phdtheses/towards-ethical-chatbots-monitoring-and-evaluation-of-the-ethical-behavior-of-employees-in-online-customer-service-chat-2/)

[Translators for interoperating and porting object-relational knowledge](https://logicprogramming.org/phd-theses/phdtheses/translators-for-interoperating-and-porting-object-relational-knowledge/)

[Master's theses](https://logicprogramming.org/phd-theses/masters-theses/)

[Deduzione automatica per logiche condizionali: analisi e sviluppo di un theorem prover](https://logicprogramming.org/phd-theses/masters-theses/deduzione-automatica-per-logiche-condizionali-analisi-e-sviluppo-di-un-theorem-prover/)

[Processing Narratives by Means of Action Languages](https://logicprogramming.org/phd-theses/masters-theses/processing-narratives-by-means-of-action-languages/)

[Diversity and Inclusion Policy](https://logicprogramming.org/the-association-for-logic-programming/policies-2/alp-by-laws/diversity-and-inclusion-policy/)

### ALP Newsletter

[ALP ISSUE](https://logicprogramming.org/category/issue/)

[Accepted Papers](https://logicprogramming.org/category/issue/accepted-papers/)

[Conference reports](https://logicprogramming.org/category/issue/reports/)

[Editorial](https://logicprogramming.org/category/issue/editorial/)

[Feature Articles](https://logicprogramming.org/category/issue/articles/)

[In Memoriam](https://logicprogramming.org/category/issue/in-memoriam/)

[Left Field](https://logicprogramming.org/category/issue/left-field/)

[LP Systems](https://logicprogramming.org/category/issue/systems/)

[Personal perspectives on LP](https://logicprogramming.org/category/issue/perspectives/)

[Positions in LP](https://logicprogramming.org/category/issue/positions/)

[Programming Contest](https://logicprogramming.org/category/issue/prolog-programming-contest/)

[Regular columns](https://logicprogramming.org/category/issue/columns/)

[Book Announcement](https://logicprogramming.org/category/issue/columns/book-announcement/)

[Community news](https://logicprogramming.org/category/issue/columns/news/)

[Doctoral dissertations](https://logicprogramming.org/category/issue/columns/phd/)

[Games and Puzzles](https://logicprogramming.org/category/issue/columns/games-and-puzzles/)

[Research Groups](https://logicprogramming.org/category/issue/groups/)

[Asyncronous News](https://logicprogramming.org/category/asyncronous-news/)

[Call for papers](https://logicprogramming.org/category/asyncronous-news/callforpapers/)

[Call for Participation](https://logicprogramming.org/category/asyncronous-news/call-for-participation/)

[Community News](https://logicprogramming.org/category/asyncronous-news/annunci/)

[Conferences News](https://logicprogramming.org/category/asyncronous-news/conferences-news/)

[PhD positions](https://logicprogramming.org/category/asyncronous-news/phd-positions/)

[Positions in LP](https://logicprogramming.org/category/asyncronous-news/positions-in-lp/)

[Schools](https://logicprogramming.org/category/asyncronous-news/schools/)

[Uncategorized](https://logicprogramming.org/category/uncategorized/)

Copyright © 2026 [Association for Logic Programming](https://logicprogramming.org/). All Rights Reserved. The Magazine Basic Theme by [bavotasan.com](https://themes.bavotasan.com/).