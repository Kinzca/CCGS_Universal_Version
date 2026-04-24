# Elo Rating Algorithm - GeeksforGeeks

Elo Rating Algorithm - GeeksforGeeks

Sign In

[Courses](https://www.geeksforgeeks.org/dsa/elo-rating-algorithm/)

[Tutorials](https://www.geeksforgeeks.org/dsa/elo-rating-algorithm/)

[Interview Prep](https://www.geeksforgeeks.org/dsa/elo-rating-algorithm/)

[DSA Tutorial](https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/)

[Interview Questions](https://www.geeksforgeeks.org/dsa/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/)

[Quizzes](https://www.geeksforgeeks.org/dsa/data-structures-and-algorithms-online-quiz/)

[Must Do](https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/)

[Advanced DSA](https://www.geeksforgeeks.org/dsa/advanced-data-structures/)

[System Design](https://www.geeksforgeeks.org/system-design/system-design-tutorial/)

[Aptitude](https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/)

[Puzzles](https://www.geeksforgeeks.org/aptitude/puzzles/)

[Interview Corner](https://www.geeksforgeeks.org/interview-prep/interview-corner/)

[DSA Python](https://www.geeksforgeeks.org/dsa/python-data-structures-and-algorithms/)

# Elo Rating Algorithm

Last Updated : 25 Jul, 2024

The **Elo Rating Algorithm** is a widely used rating algorithm used to rank players in many competitive games.

Players with higher ELO ratings have a higher probability of winning a game than players with lower ELO ratings.

After each game, the ELO rating of players is updated.

If a player with a higher ELO rating wins, only a few points are transferred from the lower-rated player.

However if the lower-rated player wins, then the transferred points from a higher-rated player are far greater.

**Approach:** To Solve the problem follow the below idea:

P1: Probability of winning of the player with rating2, P2: Probability of winning of the player with rating1.

P1 = (1.0 / (1.0 + pow(10, ((rating1 - rating2) / 400))));

P2 = (1.0 / (1.0 + pow(10, ((rating2 - rating1) / 400))));

Obviously, P1 + P2 = 1. The rating of the player is updated using the formula given below:-

rating1 = rating1 + K*(Actual Score - Expected score);

In most of the games, "Actual Score" is either 0 or 1 means the player either wins or loose. K is a constant. If K is of a lower value, then the rating is changed by a small fraction but if K is of a higher value, then the changes in the rating are significant. Different organizations set a different value of K.

**Example:**

Suppose there is a live match on chess.com between two players

rating1 = 1200, rating2 = 1000;

P1 = (1.0 / (1.0 + pow(10, ((1000-1200) / 400)))) = 0.76

P2 = (1.0 / (1.0 + pow(10, ((1200-1000) / 400)))) = 0.24

And Assume constant K=30;

**CASE-1:**

Suppose Player 1 wins: rating1 = rating1 + k*(actual - expected) = 1200+30(1 - 0.76) = 1207.2;

rating2 = rating2 + k*(actual - expected) = 1000+30(0 - 0.24) = 992.8;

**Case-2:**

Suppose Player 2 wins: rating1 = rating1 + k*(actual - expected) = 1200+30(0 - 0.76) = 1177.2;

rating2 = rating2 + k*(actual - expected) = 1000+30(1 - 0.24) = 1022.8;

Follow the below steps to solve the problem:

Calculate the probability of winning of players A and B using the formula given above

If player A wins or player B wins then the ratings are updated accordingly using the formulas:

rating1 = rating1 + K*(Actual Score - Expected score)

rating2 = rating2 + K*(Actual Score - Expected score)

Where the Actual score is 0 or 1

Print the updated ratings

Below is the implementation of the above approach:

CPP Java Python C# JavaScript

Loading Playground... `

`

`

`

`

`

`

`

`

`

**Output**

**Time Complexity:** The time complexity of the algorithm depends mostly on the complexity of the pow function whose complexity is dependent on Computer Architecture. On x86, this is constant time operation:-O(1)

**Auxiliary Space:** O(1)

Comment

[G](https://www.geeksforgeeks.org/user/gaurav _purohit/)

[gaurav _purohit](https://www.geeksforgeeks.org/user/gaurav _purohit/)

10

Article Tags:

Article Tags:

[Mathematical](https://www.geeksforgeeks.org/category/dsa/algorithm/mathematical/)

[DSA](https://www.geeksforgeeks.org/category/dsa/)

### Explore

DSA Fundamentals

[Logic Building Problems 2 min read](https://www.geeksforgeeks.org/dsa/logic-building-problems/)

[Analysis of Algorithms 1 min read](https://www.geeksforgeeks.org/dsa/analysis-of-algorithms/)

Data Structures

[Array 3 min read](https://www.geeksforgeeks.org/dsa/array-data-structure-guide/)

[String 2 min read](https://www.geeksforgeeks.org/dsa/string-data-structure/)

[Hashing 2 min read](https://www.geeksforgeeks.org/dsa/hashing-data-structure/)

[Linked List 3 min read](https://www.geeksforgeeks.org/dsa/linked-list-data-structure/)

[Stack 2 min read](https://www.geeksforgeeks.org/dsa/stack-data-structure/)

[Queue 2 min read](https://www.geeksforgeeks.org/dsa/queue-data-structure/)

[Tree 2 min read](https://www.geeksforgeeks.org/dsa/tree-data-structure/)

[Graph 3 min read](https://www.geeksforgeeks.org/dsa/graph-data-structure/)

Algorithms

[Searching Algorithms 2 min read](https://www.geeksforgeeks.org/dsa/searching-algorithms/)

[Sorting Algorithms 3 min read](https://www.geeksforgeeks.org/dsa/sorting-algorithms/)

[Introduction to Recursion 15 min read](https://www.geeksforgeeks.org/introduction-to-recursion-2/)

[Greedy Algorithms 3 min read](https://www.geeksforgeeks.org/dsa/greedy-algorithms/)

[Graph Algorithms 3 min read](https://www.geeksforgeeks.org/dsa/graph-data-structure-and-algorithms/)

[Dynamic Programming 2 min read](https://www.geeksforgeeks.org/dsa/dynamic-programming/)

[Bitwise Algorithms 4 min read](https://www.geeksforgeeks.org/dsa/bitwise-algorithms/)

Advanced

[Segment Tree 2 min read](https://www.geeksforgeeks.org/dsa/segment-tree-data-structure/)

[Binary Indexed Tree 14 min read](https://www.geeksforgeeks.org/dsa/binary-indexed-tree-or-fenwick-tree-2/)

[Trie Data Structure 15+ min read](https://www.geeksforgeeks.org/dsa/trie-insert-and-search/)

[Square Root (Sqrt) Decomposition Algorithm 15+ min read](https://www.geeksforgeeks.org/dsa/square-root-sqrt-decomposition-algorithm/)

Interview Preparation

[Interview Corner 2 min read](https://www.geeksforgeeks.org/interview-corner/)

[GFG 160 2 min read](https://www.geeksforgeeks.org/courses/gfg-160-series)

[Coding Practice 1 min read](https://www.geeksforgeeks.org/dsa/geeksforgeeks-practice-best-online-coding-platform/)

[POTD 2 min read](https://www.geeksforgeeks.org/problem-of-the-day)

Corporate & Communications Address:

A-143, 7th Floor, Sovereign Corporate Tower, Sector- 136, Noida, Uttar Pradesh (201305) 

Registered Address:

K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida, Gautam Buddh Nagar, Uttar Pradesh, 201305     

Company

[About Us](https://www.geeksforgeeks.org/about/)

[Legal](https://www.geeksforgeeks.org/legal/)

[Privacy Policy](https://www.geeksforgeeks.org/legal/privacy-policy/)

[Contact Us](https://www.geeksforgeeks.org/about/contact-us/)

[Advertise with us](https://www.geeksforgeeks.org/advertise-with-us/)

[GFG Corporate Solution](https://www.geeksforgeeks.org/gfg-corporate-solution/)

[Campus Training Program](https://www.geeksforgeeks.org/campus-training-program/)

Explore

[POTD](https://www.geeksforgeeks.org/problem-of-the-day)

[Job-A-Thon](https://practice.geeksforgeeks.org/events/rec/job-a-thon/)

[Blogs](https://www.geeksforgeeks.org/category/blogs/?type=recent)

[Nation Skill Up](https://www.geeksforgeeks.org/nation-skill-up/)

Tutorials

[Programming Languages](https://www.geeksforgeeks.org/computer-science-fundamentals/programming-language-tutorials/)

[DSA](https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/)

[Web Technology](https://www.geeksforgeeks.org/web-tech/web-technology/)

[AI, ML & Data Science](https://www.geeksforgeeks.org/machine-learning/ai-ml-and-data-science-tutorial-learn-ai-ml-and-data-science/)

[DevOps](https://www.geeksforgeeks.org/devops/devops-tutorial/)

[CS Core Subjects](https://www.geeksforgeeks.org/gate/gate-exam-tutorial/)

[Interview Preparation](https://www.geeksforgeeks.org/aptitude/interview-corner/)

[Software and Tools](https://www.geeksforgeeks.org/websites-apps/software-and-tools-a-to-z-list/)

Courses

[ML and Data Science](https://www.geeksforgeeks.org/courses/category/machine-learning-data-science)

[DSA and Placements](https://www.geeksforgeeks.org/courses/category/dsa-placements)

[Web Development](https://www.geeksforgeeks.org/courses/category/development-testing)

[Programming Languages](https://www.geeksforgeeks.org/courses/category/programming-languages)

[DevOps & Cloud](https://www.geeksforgeeks.org/courses/category/cloud-devops)

[GATE](https://www.geeksforgeeks.org/courses/category/gate)

[Trending Technologies](https://www.geeksforgeeks.org/courses/category/trending-technologies/)

Videos

[DSA](https://www.geeksforgeeks.org/videos/category/sde-sheet/)

[Python](https://www.geeksforgeeks.org/videos/category/python/)

[Java](https://www.geeksforgeeks.org/videos/category/java-w6y5f4/)

[C++](https://www.geeksforgeeks.org/videos/category/c/)

[Web Development](https://www.geeksforgeeks.org/videos/category/web-development/)

[Data Science](https://www.geeksforgeeks.org/videos/category/data-science/)

[CS Subjects](https://www.geeksforgeeks.org/videos/category/cs-subjects/)

Preparation Corner

[Interview Corner](https://www.geeksforgeeks.org/interview-prep/interview-corner/)

[Aptitude](https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/)

[Puzzles](https://www.geeksforgeeks.org/aptitude/puzzles/)

[GfG 160](https://www.geeksforgeeks.org/courses/gfg-160-series)

[System Design](https://www.geeksforgeeks.org/system-design/system-design-tutorial/)

[@GeeksforGeeks, Sanchhaya Education Private Limited](https://www.geeksforgeeks.org/), [All rights reserved](https://www.geeksforgeeks.org/copyright-information/) 