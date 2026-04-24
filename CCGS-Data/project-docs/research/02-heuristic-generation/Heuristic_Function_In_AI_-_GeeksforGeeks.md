# Heuristic Function In AI - GeeksforGeeks

Heuristic Function In AI - GeeksforGeeks

Sign In

[Courses](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/)

[Tutorials](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/)

[Interview Prep](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/)

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

# Heuristic Function In AI

Last Updated : 26 Jul, 2025

Heuristic functions are essential in AI search algorithms, helping estimate the cost from a current state to the goal. Instead of exhaustively exploring all possibilities, heuristics guide the search by narrowing down the most promising paths. This makes problem-solving more efficient, especially in complex scenarios where exact solutions are too costly.

By providing informed estimates, heuristic functions break down large problems into manageable subproblems which is widely used in AI planning and decision-making.

## Heuristic Search Algorithms in AI

Heuristic search algorithms uses heuristic functions to make more intelligent decisions during the search process. Some common heuristic search algorithms include:

### 1. A Algorithm*

The [A* algorithm](https://www.geeksforgeeks.org/dsa/a-search-algorithm/) is one of the most widely used heuristic search algorithms. It uses both the actual cost from the start node to the current node (g(n)) and the estimated cost from the current node to the goal (h(n)). The total estimated cost (f(n)) is the sum of these two values:

f ( n ) = g ( n ) + h ( n ) f(n) = g(n) +h(n) f( n)= g( n)+ h( n)

Where:

f(n) is total estimated cost of the cheapest solution through n.

g(n) is actual cost from the start node to the node n.

h(n) is estimated cost from node n to goal.

**Note:** This guarantees optimal path if h(n) never overestimates.

### **2. Greedy Best-First Search**

The [Greedy Best-First Search](https://www.geeksforgeeks.org/dsa/greedy-best-first-search-algorithm/) algorithm selects the path that appears to be the most promising based on the heuristic function alone. It prioritizes nodes with the lowest heuristic cost (h(n)) but it does not necessarily guarantee the shortest path to the goal.

f ( n ) = h ( n ) f(n) = h(n) f( n)= h( n)

This only considers the heuristic estimate to the goal.

Ignores the actual cost already traveled (g(n)).

Fast but may take suboptimal paths.

### **3. Hill-Climbing Algorithm**

The [Hill-Climbing algorithm](https://www.geeksforgeeks.org/artificial-intelligence/introduction-hill-climbing-artificial-intelligence/) is a local search algorithm that continuously moves towards the neighbor with the lowest heuristic cost. It resembles climbing uphill towards the goal but can get stuck in local optima.

Goal is to optimize h(n).

Works by comparing neighboring states and selectin the one with lowest heuristic cost.

## Role of Heuristic Functions in AI

Heuristic functions are essential in AI for several reasons:

**Efficiency:** They reduce the search space, leading to faster solution times.

**Guidance:** They provide a sense of direction in large problem spaces, avoiding unnecessary exploration.

**Practicality:** They offer practical solutions in situations where exact methods are computationally prohibitive.

## Path Finding with Heuristic Functions

### Step 1: Import Libraries.

[heapq](https://www.geeksforgeeks.org/python/heap-queue-or-heapq-in-python/)**:** For priority queue (used to pick lowest-cost path).

[matplotlib.pyplot](https://www.geeksforgeeks.org/python/pyplot-in-matplotlib/): To visualize the grid and path.

[numpy](https://www.geeksforgeeks.org/numpy/python-numpy/)**:** Helps manipulate grid data during visualization.

Python

Loading Playground... `

`

### Step 2: Creating A* Algorithm and Initialization

**a_star():** Main function for A* pathfinding.

**heuristic():** We will use Manhattan distance that estimates distance to the goal.

Here we have 4-direction movement (up, down, left, right).

**open_list:** Min-heap priority queue storing nodes to explore.

**g_score:** Cost from start to current node.

**f_score**: Estimated total cost (start to goal).

**came_from**: Tracks best path back from goal.

Python

Loading Playground... `

`

### Step 3: Main Loop and Goal reaching

Keep exploring until all possible paths are checked or the goal is found.

If goal is reached, trace back to start using came_from.

Python

Loading Playground... `

`

### Step 4: Process Neighbors and Update Scores

Only update if we found a better path to the neighbor.

Push to open_list with updated f_score.

If all nodes are explored and no path found.

Python

Loading Playground... `

`

### Step 5: Define Visualization Function

Prepares grid and draws result using matplotlib.

Mark path = 2, start = 3, goal = 4 for color mapping.

Python

Loading Playground... `

`

### Step 6: Setup Grid

Python

Loading Playground... `

`

### Step 7: Result

Python

Loading Playground... `

`

### **Output:**

Path found: [(0, 0), (1, 0), (1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 2), (3, 1), (4, 1), (5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7), (6, 7), (7, 7), (7, 8), (7, 9), (8, 9), (9, 9)] 

Output

## **Applications**

Heuristic functions help AI make intelligent decisions efficiently across a wide range of domains:

**Game AI**: Evaluate game states like chess, tic-tac-toe, etc to select optimal moves and anticipate opponents strategies.

**Robotics**: Guide path planning by estimating efficient routes, avoiding obstacles and reaching targets.

**Natural Language Processing (NLP)**: Helps in parsing, context interpretation and generating coherent text responses.

**Navigation Systems**: Used in GPS and mapping tools to suggest shortest or fastest routes using distance/time estimates.

**Scheduling & Planning**: Optimize tasks in project management, resource allocation or automated timetabling by estimating best task sequences.

## Common Problem Types for Heuristic Functions

Heuristic functions are particularly useful in various problem types including:

**Pathfinding Problems:** Pathfinding problems such as navigating a maze or finding the shortest route on a map, benefit greatly from heuristic functions that estimate the distance to the goal.

**Constraint Satisfaction Problems:** In constraint satisfaction problems such as scheduling and puzzle-solving, heuristics help in selecting the most promising variables and values to explore.

**Optimization Problems:** Optimization problems like the traveling salesman problem, use heuristics to find near-optimal solutions within a reasonable time frame.

Heuristic functions are useful in AI by enhancing the efficiency and effectiveness of search algorithms. By providing estimates that guide the search process, heuristics enable practical solutions to complex problems across various domains.

Comment

[K](https://www.geeksforgeeks.org/user/kusumsinghq5p5/)

[kusumsinghq5p5](https://www.geeksforgeeks.org/user/kusumsinghq5p5/)

3

Article Tags:

Article Tags:

[Blogathon](https://www.geeksforgeeks.org/category/blogathon/)

[Artificial Intelligence](https://www.geeksforgeeks.org/category/ai-ml-ds/artificial-intelligence/)

[AI-ML-DS](https://www.geeksforgeeks.org/category/ai-ml-ds/)

[Artificial Intelligence](https://www.geeksforgeeks.org/tag/artificial-intelligence/)

[AI-ML-DS With Python](https://www.geeksforgeeks.org/tag/ai-ml-ds-python/)

[Data Science Blogathon 2024](https://www.geeksforgeeks.org/tag/data-science-blogathon-2024/)

[+2 More](https://www.geeksforgeeks.org/artificial-intelligence/heuristic-function-in-ai/)

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