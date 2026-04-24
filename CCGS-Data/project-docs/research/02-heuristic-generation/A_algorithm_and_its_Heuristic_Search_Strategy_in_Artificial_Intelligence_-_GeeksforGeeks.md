# A* algorithm and its Heuristic Search Strategy in Artificial Intelligence - GeeksforGeeks

A* algorithm and its Heuristic Search Strategy in Artificial Intelligence - GeeksforGeeks

Sign In

[Courses](https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-heuristic-search-strategy-in-artificial-intelligence/)

[Tutorials](https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-heuristic-search-strategy-in-artificial-intelligence/)

[Interview Prep](https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-heuristic-search-strategy-in-artificial-intelligence/)

[Artificial Intelligence](https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligence/)

[Interview Questions](https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligenceai-interview-questions-and-answers/)

[Project Ideas](https://www.geeksforgeeks.org/artificial-intelligence/best-artificial-intelligence-project-ideas/)

[Search Algorithms](https://www.geeksforgeeks.org/machine-learning/search-algorithms-in-ai/)

[Local Search Algorithm](https://www.geeksforgeeks.org/artificial-intelligence/local-search-algorithm-in-artificial-intelligence/)

[Generative AI](https://www.geeksforgeeks.org/artificial-intelligence/what-is-generative-ai/)

[Data Science](https://www.geeksforgeeks.org/data-science/data-science-for-beginners/)

[Machine Learning](https://www.geeksforgeeks.org/machine-learning/machine-learning/)

[Deep Learning](https://www.geeksforgeeks.org/deep-learning/deep-learning-tutorial/)

[ML-Projects](https://www.geeksforgeeks.org/machine-learning/machine-learning-projects/)

# A* algorithm and its Heuristic Search Strategy in Artificial Intelligence

Last Updated : 22 Jul, 2025

The A* algorithm is highly effective and well-known search technique utilized for finding the most efficient path between two points in a graph. It is applied in scenarios such as pathfinding in video games, network routing and various artificial intelligence (AI) applications. It was developed in 1968 by Peter Hart, Nils Nilsson and Bertram Raphael as an improvement on [Dijkstra's algorithm](https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/).

While Dijkstra's algorithm explores all possible directions around the starting node uniformly

A* combines actual travel cost with an estimated future cost(heuristics)

This optimizes the search process, reduces computational load and ensures the most efficient path is found with minimal unnecessary exploration.

## Key Components of A* Algorithm

A* uses two important parameters to find the cost of a path:

g ( n ) g(n) g( n) **:** Actual cost of reaching node n n n from the start node. This is the accumulated cost of the path from the start node to node n n n .

h ( n ) h(n) h( n) **:** The heuristic finds of the cost to reach the goal from node n n n . This is a weighted guess about how much further it will take to reach the goal.

The function, f ( n ) = g ( n ) + h ( n ) f(n)=g(n)+h(n) f( n)= g( n)+ h( n) is the total estimated cost of the cheapest solution through node n n n . This function combines the path cost so far and the heuristic cost to estimate the total cost guiding the search more efficiently.

## How A* Algorithm Works?

A* is an informed search algorithm, means it uses the f ( n ) f(n) f( n) function to prioritize which nodes to explore next. The process can be broken down into the following steps:

**Initialization:** The initial node is added to the open set, a collection of nodes that are yet to be explored. The f ( n ) f(n) f( n) value for the start node is calculated using the heuristic.

**Loop**: A* selects the node with the lowest f ( n ) f(n) f( n) value from the open set. This node is expanded and its neighbors are examined.

**Goal Check**: If the node being processed is the goal node, the search terminates and the algorithm returns the path to the goal.

**Node Expansion**: Each neighbor of the current node is evaluated based on the g ( n ) g(n) g( n) , h ( n ) h(n) h( n) and f ( n ) f(n) f( n) values. If a better path to a neighbor is found i.e a lower f ( n ) f(n) f( n) then the neighbor is added to the open set or its values are updated.

**Repeat**: This process continues until the goal is found or the open set is empty which means there is no solution.

## Heuristic Function in A* Algorithm

The efficiency of the A* algorithm heavily depends on the [heuristic function](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/). The choice of heuristic can affect the performance and efficiency of the algorithm. A good heuristic is one that helps the algorithm find the shortest path by exploring the least number of nodes possible.

### **Properties of a Good Heuristic:**

A good heuristic function can improve A*'s performance. Some important characteristics include:

**Admissibility:** It means a heuristic never guesses a cost higher than the actual cost to the goal. This helps A* always find the shortest path. For example, using straight-line distance on a map is an admissible heuristic.

**Consistency (Monotonicity)**: It means a heuristic gives estimates that don't jump around too much. For any node and its next step, the cost to the goal should not be more than going to the next step and then to the goal. This helps A* avoid rechecking the same nodes and makes it faster.

### **Common Heuristics:**

[Manhattan Distance](https://www.geeksforgeeks.org/r-language/how-to-calculate-manhattan-distance-in-r/)**:** It is used for grid-based environments where movement is restricted to horizontal and vertical directions. It calculates the sum of the absolute differences in the x x x and y y y coordinates between two points.

[Euclidean Distance](https://www.geeksforgeeks.org/maths/euclidean-distance/)**:** The straight-line distance between two points often used when movement is allowed in any direction.

[Chebyshev Distance](https://www.geeksforgeeks.org/machine-learning/chebyshev-distance/)**:** It is used when diagonal movement is allowed.

## Implementation of Pathfinding Example using A* Algorithm

Let's implement the A* algorithm in Python and visualize the process.

### Step 1: Importing Required Libraries

Here we will be importing [Heapq](https://www.geeksforgeeks.org/python/heap-queue-or-heapq-in-python/), [Networkx](https://www.geeksforgeeks.org/python/python-visualize-graphs-generated-in-networkx-using-matplotlib/) and [Matplotlib](https://www.geeksforgeeks.org/data-visualization/data-visualization-using-matplotlib/) libraries.

Python

Loading Playground... `

`

### Step 2: Defining Heuristic Function

We will be using a [Manhattan distance](https://www.geeksforgeeks.org/dsa/maximum-manhattan-distance-between-a-distinct-pair-from-n-coordinates/) as a heuristic function to estimate the cost from the current node to the goal. This heuristic is suitable for grid-based pathfinding problems where movement is restricted to horizontal and vertical directions.

Python

Loading Playground... `

`

### Step 3: Implementing A* Algorithm

Here, we define the A* algorithm which uses a [priority queue](https://www.geeksforgeeks.org/dsa/priority-queue-set-1-introduction/) to explore nodes based on the total estimated cost f ( n ) = g ( n ) + h ( n ) f(n) = g(n) + h(n) f( n)= g( n)+ h( n) , where:

g ( n ) g(n) g( n) is the cost from the start node to the current node.

h ( n ) h(n) h( n) is the heuristic estimated cost from the current node to the goal.

**The algorithm maintains three key structures:**

**open_set:** A priority queue containing nodes to be explored ordered by f ( n ) f(n) f( n) .

**came_from:** A dictionary that helps to reconstruct the path once the goal is reached.

**g_score and f_score:** Dictionaries that store the actual cost to each node ( g ( n ) ) (g(n)) ( g( n)) and the estimated cost to the goal ( f ( n ) ) (f(n)) ( f( n)) respectively.

In each iteration, we expand the node with the lowest f ( n ) f(n) f( n) value. For each neighbor of the current node, the algorithm calculates the g g g and f f f values and updates them if a better path is found.

Python

Loading Playground... `

`

### Step 4: Defining Path Reconstruction Function

Once the goal node is reached, we need to reconstruct the path from the start node to the goal. This is done by backtracking from the goal to the start using the **came_from** dictionary which stores the predecessor of each node along the path. After collecting the nodes in reverse order, we reverse the path to get the final sequence from start to goal.

Python

Loading Playground... `

`

### Step 5: Setup Graph and Visualizing the Path

Here we define a simple grid-based graph where each node is connected to its neighbors. The graph is represented as a dictionary of nodes where the keys are coordinates and the values are dictionaries of neighbors with their associated edge weights (cost).

We then use the NetworkX library to visualize the graph and highlight the path found by the A* algorithm. The path is visualized by coloring the edges of the graph in red.

Python

Loading Playground... `

`

**Output:** 

Path Solution derived using A* Algorithm

**Output represents:**

**Nodes** are represented by circles, labeled with their coordinates. For example, (0, 0) is the starting point and (2, 2) is the goal.

**Edges** are lines connecting the nodes. The **gray** edges represent all possible paths while the **red** edges highlight the path selected by the A* algorithm.

The **highlighted path** in red shows the optimal route determined by the A* algorithm. This path progresses from (0, 0) to (0, 1), moves to (1, 1), continues to (2, 1) and finally reaches the goal at (2, 2).

This visualization helps to understand the decisions made by the A* algorithm as it navigates the graph and finds the most efficient path.

## Applications of A* Algorithm

The A* algorithm's ability to find the most efficient path with a given heuristic makes it suitable for various practical applications:

**Pathfinding in Games and Robotics:** A* is used in the gaming industry to control characters in dynamic environments as well as in robotics for navigating between points.

**Network Routing:** In telecommunications, it helps in finding the shortest routing path that data packets should take to reach the destination.

**AI and Machine Learning:** It can be used in planning and decision-making algorithms where multiple stages of decisions and movements need to be evaluated.

**Map and Navigation Systems:** GPS navigation systems use A* to find optimal driving or walking routes in real time.

**Logistics and Supply Chain:** A* helps in optimizing routes for delivery vehicles and warehouse robots to minimize travel time and costs.

## Advantages of A* Algorithm

**Optimality:** When equipped with an admissible heuristic, it is guaranteed to find the shortest path to the goal.

**Completeness:** It will always find a solution if one exists.

**Flexibility:** By adjusting heuristics, it can be adapted to a wide range of problem settings and constraints.

**Efficiency:** With a good heuristic, it explores fewer nodes than uninformed algorithms like Dijkstra's, making it faster in many cases.

**Wide Applicability:** It works on both weighted and unweighted graphs, grids and other search spaces making it versatile for different domains.

## Limitations and Considerations

**High Memory Usage:** It stores all open and closed nodes which can become impractical for very large graphs.

**Heuristic Sensitivity:** The efficiency and optimality depend heavily on the quality of the chosen heuristic.

**Computational Overhead:** In complex or dense graphs, it can still take considerable time to find the path.

**Not Always Suitable:** For real-time or memory-constrained systems, simpler algorithms like greedy search may be preferred.

By mastering the A* algorithm, we can solve pathfinding problems more efficiently and apply it to a range of real-world scenarios like games, robotics and networks.

Comment

[D](https://www.geeksforgeeks.org/user/divyanshuraj8228/)

[divyanshuraj8228](https://www.geeksforgeeks.org/user/divyanshuraj8228/)

9

Article Tags:

Article Tags:

[Blogathon](https://www.geeksforgeeks.org/category/blogathon/)

[Artificial Intelligence](https://www.geeksforgeeks.org/category/ai-ml-ds/artificial-intelligence/)

[AI-ML-DS](https://www.geeksforgeeks.org/category/ai-ml-ds/)

[AI-ML-DS With Python](https://www.geeksforgeeks.org/tag/ai-ml-ds-python/)

[Data Science Blogathon 2024](https://www.geeksforgeeks.org/tag/data-science-blogathon-2024/)

[+1 More](https://www.geeksforgeeks.org/artificial-intelligence/a-algorithm-and-its-heuristic-search-strategy-in-artificial-intelligence/)

### Explore

Introduction to AI

[What is Artificial Intelligence (AI) 8 min read](https://www.geeksforgeeks.org/artificial-intelligence/what-is-artificial-intelligence-ai/)

[Types of Artificial Intelligence (AI) 4 min read](https://www.geeksforgeeks.org/artificial-intelligence/types-of-artificial-intelligence/)

[Types of AI Based on Functionalities 4 min read](https://www.geeksforgeeks.org/artificial-intelligence/types-of-ai-based-on-functionalities/)

[Agents in AI 7 min read](https://www.geeksforgeeks.org/artificial-intelligence/agents-artificial-intelligence/)

[Artificial intelligence vs Machine Learning vs Deep Learning 3 min read](https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligence-vs-machine-learning-vs-deep-learning/)

[Problem Solving in Artificial Intelligence 6 min read](https://www.geeksforgeeks.org/artificial-intelligence/problem-solving-in-artificial-intelligence/)

[Top 20 Applications of Artificial Intelligence (AI) in 2025 13 min read](https://www.geeksforgeeks.org/blogs/applications-of-ai/)

AI Concepts

[Search Algorithms in AI 6 min read](https://www.geeksforgeeks.org/machine-learning/search-algorithms-in-ai/)

[Local Search Algorithm in Artificial Intelligence 7 min read](https://www.geeksforgeeks.org/artificial-intelligence/local-search-algorithm-in-artificial-intelligence/)

[Adversarial Search Algorithms in Artificial Intelligence (AI) 15+ min read](https://www.geeksforgeeks.org/artificial-intelligence/adversarial-search-algorithms/)

[Constraint Satisfaction Problems (CSP) in Artificial Intelligence 10 min read](https://www.geeksforgeeks.org/artificial-intelligence/constraint-satisfaction-problems-csp-in-artificial-intelligence/)

[Knowledge Representation in AI 5 min read](https://www.geeksforgeeks.org/artificial-intelligence/knowledge-representation-in-ai/)

[First-Order Logic in Artificial Intelligence 4 min read](https://www.geeksforgeeks.org/artificial-intelligence/first-order-logic-in-artificial-intelligence/)

[Reasoning Mechanisms in AI 9 min read](https://www.geeksforgeeks.org/artificial-intelligence/reasoning-mechanisms-in-ai/)

Machine Learning in AI

[Machine Learning Tutorial 5 min read](https://www.geeksforgeeks.org/machine-learning/machine-learning/)

[Deep Learning Tutorial 2 min read](https://www.geeksforgeeks.org/deep-learning/deep-learning-tutorial/)

[Natural Language Processing (NLP) Tutorial 2 min read](https://www.geeksforgeeks.org/nlp/natural-language-processing-nlp-tutorial/)

[Computer Vision Tutorial 3 min read](https://www.geeksforgeeks.org/computer-vision/computer-vision/)

Robotics and AI

[Artificial Intelligence in Robotics 5 min read](https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligence-in-robotics/)

[What is Robotics Process Automation 8 min read](https://www.geeksforgeeks.org/blogs/robotics-process-automation-an-introduction/)

[Automated Planning in AI 8 min read](https://www.geeksforgeeks.org/artificial-intelligence/automated-planning-in-ai/)

[AI in Transportation 8 min read](https://www.geeksforgeeks.org/artificial-intelligence/ai-in-transportation/)

[AI in Manufacturing : Revolutionizing the Industry 6 min read](https://www.geeksforgeeks.org/artificial-intelligence/ai-in-manufacturing-revolutionizing-the-industry/)

Generative AI

[What is Generative AI 7 min read](https://www.geeksforgeeks.org/artificial-intelligence/what-is-generative-ai/)

[Generative Adversarial Network (GAN) 10 min read](https://www.geeksforgeeks.org/deep-learning/generative-adversarial-network-gan/)

[Cycle Generative Adversarial Network (CycleGAN) 7 min read](https://www.geeksforgeeks.org/machine-learning/cycle-generative-adversarial-network-cyclegan-2/)

[StyleGAN - Style Generative Adversarial Networks 5 min read](https://www.geeksforgeeks.org/machine-learning/stylegan-style-generative-adversarial-networks/)

[Introduction to Generative Pre-trained Transformer (GPT) 4 min read](https://www.geeksforgeeks.org/artificial-intelligence/introduction-to-generative-pre-trained-transformer-gpt/)

[BERT Model - NLP 7 min read](https://www.geeksforgeeks.org/nlp/explanation-of-bert-model-nlp/)

[Generative AI Applications 7 min read](https://www.geeksforgeeks.org/artificial-intelligence/generative-ai-applications/)

AI Practice

[Top Artificial Intelligence(AI) Interview Questions and Answers 15+ min read](https://www.geeksforgeeks.org/artificial-intelligence/artificial-intelligenceai-interview-questions-and-answers/)

[Top Generative AI and LLM Interview Question with Answer 15+ min read](https://www.geeksforgeeks.org/artificial-intelligence/generative-ai-interview-question-with-answer/)

[30+ Best Artificial Intelligence Project Ideas with Source Code [2026 Updated] 15+ min read](https://www.geeksforgeeks.org/artificial-intelligence/best-artificial-intelligence-project-ideas/)

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