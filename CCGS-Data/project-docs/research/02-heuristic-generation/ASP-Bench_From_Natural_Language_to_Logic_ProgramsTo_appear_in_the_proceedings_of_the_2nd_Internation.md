# ASP-Bench: From Natural Language to Logic ProgramsTo appear in the proceedings of the 2nd International Workshop on Neuro-Symbolic Software Engineering (NSE@ICSE 2026). Supported by the Austrian Science Fund (FWF) projects 10.55776/P36688 and 10.55776/COE12. - arXiv

ASP-Bench: From Natural Language to Logic ProgramsTo appear in the proceedings of the 2nd International Workshop on Neuro-Symbolic Software Engineering (NSE@ICSE 2026). Supported by the Austrian Science Fund (FWF) projects 10.55776/P36688 and 10.55776/COE12.

[ Back to arXiv](https://arxiv.org/)  

[ Back to arXiv](https://arxiv.org/)

This is **experimental HTML** to improve accessibility. We invite you to report rendering errors. Use Alt+Y to toggle on accessible reporting links and Alt+Shift+Y to toggle off. Learn more [about this project](https://info.arxiv.org/about/accessible_HTML.html) and [help improve conversions](https://info.arxiv.org/help/submit_latex_best_practices.html).

[Why HTML?](https://info.arxiv.org/about/accessible_HTML.html) [Report Issue](#myForm) [Back to Abstract](https://arxiv.org/abs/2602.01171v1) [Download PDF](https://arxiv.org/pdf/2602.01171v1) 

## Table of Contents

[Abstract](https://arxiv.org/html/2602.01171v1#abstract)

[1 Introduction](https://arxiv.org/html/2602.01171v1#S1)

[2 Example: Knights and Knaves](https://arxiv.org/html/2602.01171v1#S2)

[3 The ASP-Bench Benchmark](https://arxiv.org/html/2602.01171v1#S3)

[3.1 Problem Construction Process](https://arxiv.org/html/2602.01171v1#S3.SS1)

[3.2 Semantic Verification](https://arxiv.org/html/2602.01171v1#S3.SS2)

[3.3 Problem Characterization](https://arxiv.org/html/2602.01171v1#S3.SS3)

[4 ASP Agent](https://arxiv.org/html/2602.01171v1#S4)

[5 Experimental Evaluation](https://arxiv.org/html/2602.01171v1#S5)

[5.1 Experimental Setup](https://arxiv.org/html/2602.01171v1#S5.SS1)

[5.2 Saturation on Easy and Hard Problems](https://arxiv.org/html/2602.01171v1#S5.SS2)

[5.3 Problem Hardness and Reasoning Aspects](https://arxiv.org/html/2602.01171v1#S5.SS3)

[5.4 Agent Activity Patterns](https://arxiv.org/html/2602.01171v1#S5.SS4)

[6 Anatomy of Agentic Modeling](https://arxiv.org/html/2602.01171v1#S6)

[6.1 Problem Complexity: The Pilgrim's Journey](https://arxiv.org/html/2602.01171v1#S6.SS1)

[6.2 The Expert Strategy (6 Calls)](https://arxiv.org/html/2602.01171v1#S6.SS2)

[6.3 The Debugging Strategy (20 Calls)](https://arxiv.org/html/2602.01171v1#S6.SS3)

[6.4 Contrasting Strategies](https://arxiv.org/html/2602.01171v1#S6.SS4)

[7 MCP Integration](https://arxiv.org/html/2602.01171v1#S7)

[Experiment](https://arxiv.org/html/2602.01171v1#S7.SS0.SSS0.Px1)

[Discussion](https://arxiv.org/html/2602.01171v1#S7.SS0.SSS0.Px2)

[8 Conclusion](https://arxiv.org/html/2602.01171v1#S8)

[References](https://arxiv.org/html/2602.01171v1#bib)

[License: arXiv.org perpetual non-exclusive license](https://info.arxiv.org/help/license/index.html#licenses-available)

arXiv:2602.01171v1 [cs.AI] 01 Feb 2026

# ASP-Bench: From Natural Language to Logic Programs † † thanks: To appear in the proceedings of the 2nd International Workshop on Neuro-Symbolic Software Engineering (NSE@ICSE 2026). Supported by the Austrian Science Fund (FWF) projects 10.55776/P36688 and 10.55776/COE12.

Report issue for preceding element

Stefan Szeider

Algorithms and Complexity Group

TU Wien, Vienna, Austria

[www.ac.tuwien.ac.at/people/szeider/](https://www.ac.tuwien.ac.at/people/szeider/)

Report issue for preceding element

Abstract

Report issue for preceding element

Automating the translation of natural-language specifications into logic programs is a challenging task that affects neurosymbolic engineering. We present ASP-Bench, a benchmark comprising 128 natural language problem instances, 64 base problems with easy and hard variants. It evaluates systems that translate natural-language problems into Answer Set Programs (ASPs), a prominent form of logic programming. It provides systematic coverage of ASP features, including choice rules, aggregates, and optimization. Each problem includes reference validators that check whether solutions satisfy the problem specification.

Report issue for preceding element

We characterize problems along seven largely independent reasoning aspects (optimization, temporal reasoning, default logic, resource allocation, recursion, spatial reasoning, and quantitative complexity), providing a multidimensional view of modeling difficulty.

Report issue for preceding element

We test the benchmark using an agentic approach based on the ReAct (Reason and Act) framework, which achieves full saturation, demonstrating that feedback-driven iterative refinement with solver feedback provides a reliable and robust approach for modeling natural language in ASP. Our analysis across multiple agent runs enables us to gain insights into what determines a problem's modeling hardness.

Report issue for preceding element

## 1 Introduction

Report issue for preceding element

Answer Set Programming (ASP) is a declarative programming approach that captures many problems in knowledge representation and reasoning [ [8](https://arxiv.org/html/2602.01171v1#bib.bib8)] . Problems are encoded as logic programs whose answer sets correspond to solutions. In particular, ASP's declarative nature supports modular development, compact problem representation, and provably correct system design. The paradigm benefits from efficient general-purpose solvers such as clasp [ [6](https://arxiv.org/html/2602.01171v1#bib.bib6)] , clingo [ [7](https://arxiv.org/html/2602.01171v1#bib.bib7)] , and DLV [ [13](https://arxiv.org/html/2602.01171v1#bib.bib13)] , which separate problem modeling from the solving process.

Report issue for preceding element

Within ASP, problems are formulated as rules and constraints rather than step-by-step algorithms. Given a logic program, the solver automatically computes solutions. This is similar to writing SQL queries rather than writing procedural code: you describe what the solution must satisfy, not how to find it.

Report issue for preceding element

Translating natural language (NL) specifications into a logic program remains a significant barrier to the broader adoption of ASP, motivating research into automating this task. Early approaches relied on Controlled Natural Languages (CNLs), which ensure reliable translation by restricting input to a formally defined grammar [ [3](https://arxiv.org/html/2602.01171v1#bib.bib3)] . More recently, the advent of large language models (LLMs) has enabled more flexible methods. Prominent examples include multi-stage pipelines that translate NL to a CNL representation [ [15](https://arxiv.org/html/2602.01171v1#bib.bib15)] , direct one-shot generation with general-purpose LLMs [ [11](https://arxiv.org/html/2602.01171v1#bib.bib11)] , and fine-tuned domain-specific models like LLASP [ [4](https://arxiv.org/html/2602.01171v1#bib.bib4)] . However, experimental evaluations reveal that one-shot generation is often inadequate; Borroto et al. [ [15](https://arxiv.org/html/2602.01171v1#bib.bib15)] found that ChatGPT-3.5 produced flawed programs for 17 of 21 graph problems. This suggests that a more robust, agentic creation process is needed, in which agents use solver feedback to refine and debug programs through multiple reasoning-action cycles.

Report issue for preceding element

Other neurosymbolic systems, such as NeurASP [ [20](https://arxiv.org/html/2602.01171v1#bib.bib20)] , assume a human expert has already written a correct logic program. Hence, neural networks provide only perceptual input (e.g., recognizing digits in images) that feeds into pre-existing rules. Differentiable solvers cast ASP computation as graph neural networks for GPU parallelism [ [16](https://arxiv.org/html/2602.01171v1#bib.bib16)] but require the program itself to be manually encoded.

Report issue for preceding element

Recent work in NL2ASP translation has resulted in the NL-ASP-200 benchmark [ [11](https://arxiv.org/html/2602.01171v1#bib.bib11)] , comprising 200 problems with the best reported accuracy of 58.5% [ [15](https://arxiv.org/html/2602.01171v1#bib.bib15)] . However, these benchmarks share critical limitations. First, they evaluate using exact string matching. Ishay et al. acknowledge that this approach rejects three out of four semantically correct programs that differ only syntactically from the reference solution. Second, the problems are sampled opportunistically from online forums and textbooks, with limited systematic coverage of ASP language constructs.

Report issue for preceding element

Benchmarks for related formalisms—first-order logic [ [9](https://arxiv.org/html/2602.01171v1#bib.bib9)] , temporal logic [ [5](https://arxiv.org/html/2602.01171v1#bib.bib5)] , propositional logic [ [2](https://arxiv.org/html/2602.01171v1#bib.bib2)] , and constraint programming [ [14](https://arxiv.org/html/2602.01171v1#bib.bib14)] —demonstrate that semantic verification using automated solvers is essential for reliable evaluation.

Report issue for preceding element

We present ASP-Bench, a benchmark designed to address these limitations. ASP-Bench comprises 128 problem instances (64 base problems, each with easy and hard versions), providing systematic coverage of core ASP constructs, ranging from basic rules to choice rules, aggregates, and optimization. Each problem is equipped with reference validators (“ground truth”) that enable semantic verification by checking whether solutions satisfy the problem specification, rather than requiring exact string matches.

Report issue for preceding element

To characterize the benchmark's diversity, we analyzed the 64 hard problem variants to identify recurring reasoning aspects that contribute to modeling difficulty. Each problem incorporates 1 to 6 of these aspects, enabling analysis of which combinations of aspects make problems harder to model in ASP.

Report issue for preceding element

To demonstrate the benchmark and establish a baseline for future comparisons, we apply an agentic approach based on the ReAct (Reason and Act) framework [ [21](https://arxiv.org/html/2602.01171v1#bib.bib21)] , which uses iterative refinement with solver feedback. Our system entails a single-prompt autonomous LLM agent that performs all development and testing tasks without following a fixed workflow or predefined pipeline. Thus, in contrast to one-shot generation methods [ [11](https://arxiv.org/html/2602.01171v1#bib.bib11)] or static composition pipelines [ [15](https://arxiv.org/html/2602.01171v1#bib.bib15)] , the agent dynamically decides its actions based on solver feedback, using clingo error messages and failed test cases to iteratively repair and improve ASP programs across multiple reasoning-action cycles. This approach achieves full saturation on both easy and hard problems from ASP-Bench, demonstrating the effectiveness of feedback-driven iterative refinement for ASP program synthesis. We also compare two MCP-based approaches (one that shares the solver integration with our agent) for interactive ASP modeling and find that general-purpose Python execution outperforms specialized declarative interfaces.

Report issue for preceding element

## 2 Example: Knights and Knaves

Report issue for preceding element

We provide an example of an NL problem and its translation into a logic program. The example is based on Problem 03 (Knights and Knaves), one of the easy problem variants of ASP-Bench. If a person is a knight, they always tell the truth; if they are a knave, they always lie. Given that Alice says “Bob is a knave”, Bob says “Alice and Charlie are of the same type”, and Charlie says “Alice is a knight”, the task is to determine each person's type.

Report issue for preceding element

The modeling is defined via first generating Python code using the clingo library:

Report issue for preceding element

[⬇](data:text/plain;base64,ZnJvbSBjbGluZ28gaW1wb3J0IENvbnRyb2wKY3RsID0gQ29udHJvbCgpCmN0bC5hZGQoImJhc2UiLCBbXSwgIiIiCnBlcnNvbihhbGljZTsgYm9iOyBjaGFybGllKS4KeyBrbmlnaHQoWCkgOiBwZXJzb24oWCkgfS4Ka25hdmUoWCkgOi0gcGVyc29uKFgpLCBub3Qga25pZ2h0KFgpLgouLi4KIiIiKQpjdGwuZ3JvdW5kKFsoImJhc2UiLCBbXSldKQpjdGwuc29sdmUob25fbW9kZWw9ZXh0cmFjdF9zb2x1dGlvbik=)

from clingo import Control

ctl = Control()

ctl. add("base", [], """

person(alice; ␣ bob; ␣ charlie).

{ ␣ knight(X) ␣: ␣ person(X) ␣}.

knave(X) ␣:- ␣ person(X), ␣ not ␣ knight(X).

...

""")

ctl. ground([("base", [])])

ctl. solve( on_model= extract_solution)

This Python program gives rise to the following logic program.

Report issue for preceding element

[⬇](data:text/plain;base64,cGVyc29uKGFsaWNlOyBib2I7IGNoYXJsaWUpLgp7IGtuaWdodChYKSA6IHBlcnNvbihYKSB9LgprbmF2ZShYKSA6LSBwZXJzb24oWCksIG5vdCBrbmlnaHQoWCkuCgo6LSBrbmlnaHQoYWxpY2UpLCBrbmlnaHQoYm9iKS4gICAgJQo6LSBrbmF2ZShhbGljZSksIGtuYXZlKGJvYikuCgo6LSBrbmlnaHQoYm9iKSwga25pZ2h0KGFsaWNlKSwga25hdmUoY2hhcmxpZSkuCjotIGtuaWdodChib2IpLCBrbmF2ZShhbGljZSksIGtuaWdodChjaGFybGllKS4KOi0ga25hdmUoYm9iKSwga25pZ2h0KGFsaWNlKSwga25pZ2h0KGNoYXJsaWUpLgo6LSBrbmF2ZShib2IpLCBrbmF2ZShhbGljZSksIGtuYXZlKGNoYXJsaWUpLiAgJQoKOi0ga25pZ2h0KGNoYXJsaWUpLCBrbmF2ZShhbGljZSkuICUKOi0ga25hdmUoY2hhcmxpZSksIGtuaWdodChhbGljZSku)

person( alice; bob; charlie).

{ knight( X) : person( X) }.

knave( X) :- person( X), not knight( X).

:- knight( alice), knight( bob). %

:- knave( alice), knave( bob).

:- knight( bob), knight( alice), knave( charlie).

:- knight( bob), knave( alice), knight( charlie).

:- knave( bob), knight( alice), knight( charlie).

:- knave( bob), knave( alice), knave( charlie). %

:- knight( charlie), knave( alice). %

:- knave( charlie), knight( alice).

Key elements of this encoding are choice rules that generate candidates, completion axioms that define complementary predicates, and integrity constraints that enforce consistency. Each statement gives rise to two constraints (truth if spoken by a knight, falsehood if by a knave).

Report issue for preceding element

## 3 The ASP-Bench Benchmark

Report issue for preceding element

### 3.1 Problem Construction Process

Report issue for preceding element

We generated the 64 base problems in ASP-Bench with the help of a coding agent. We proceeded through the following phases: brainstorming problem ideas, drafting natural language problem descriptions, creating ASP encodings, and testing solutions. This process involved iterative collaboration between the coding agent and human oversight. This back-and-forth process produced 64 easy problem variants that encompass diverse reasoning patterns, including logic puzzles, graph problems, scheduling, optimization, and constraint satisfaction. These include both completely new problems and variations of known problems. We used Claude Sonnet 4.5 as the primary LLM for the coding agent Claude Code, with consultation support from Gemini Pro 2.5 (reasoning mode) via our consult7 tool 1 1 1 [https://pypi.org/project/consult7/](https://pypi.org/project/consult7/), which offers structured code analysis and reasoning capabilities by querying several frontier models in parallel through the Model Context Protocol (MCP) 2 2 2 [https://modelcontextprotocol.io/](https://modelcontextprotocol.io/). This provided valuable input for complex design decisions.

Report issue for preceding element

After establishing the 64 easy problems and their validators, we constructed hard variants by systematically increasing problem complexity. The enhancement includes both quantitative (larger instances, more constraints) and qualitative (additional constraint types, multi-objective optimization, more intricate reasoning patterns) aspects.

Report issue for preceding element

For many hard problems, we used planted solutions: generating a known feasible solution first, then constructing constraints around it. This approach proved more reliable than unconstrained problem generation because verifying that constraints admit solutions is computationally easier than finding solutions to arbitrary constraint systems. Consequently, we can guarantee that hard problems are well-posed and have solutions, a critical feature for benchmark reliability and reproducibility. We used multiple iterations of agent-human interaction to ensure that problems remained solvable within reasonable time bounds ( ≤ \leq 20 seconds for solver runtime).

Report issue for preceding element

### 3.2 Semantic Verification

Report issue for preceding element

ASP-Bench uses semantic verification rather than syntactic string matching. Each problem has a ground truth in the form of a reference validator: a Python script that checks whether a proposed solution satisfies the problem's specification. The validator loads the JSON solution from standard input, verifies that all problem constraints are satisfied, and outputs a validation result in the format

Report issue for preceding element

Each problem description explicitly specifies the required JSON fields and their semantics, ensuring the solution format requirement is unambiguous, and the probability of a correct solution in the wrong format is very low.

Report issue for preceding element

The reference validator accepts any solution that correctly satisfies the constraints. This is essential, as problems often have many valid solutions, so simply comparing against a single fixed solution is not sufficient.

Report issue for preceding element

For optimization problems, we are also interested in the optimality of the solution. The reference validator checks that the agent's solution matches the known optimum while satisfying all constraints.

Report issue for preceding element

We note that the validation is performed after the NL-to-ASP construction is completed. Hence, any approach tested on the ASP-Bench must resort to its own testing and verification mechanisms, as it has no access to the ground truth.

Report issue for preceding element

### 3.3 Problem Characterization

Report issue for preceding element

We analyze ASP-Bench problems along seven aspects representing recurring reasoning patterns:

Report issue for preceding element

OPT: optimization problems using minimize/ maximize statements; Report issue for preceding element

TEMP: temporal or sequential reasoning requiring ordering constraints; Report issue for preceding element

DEFAULT: problems with soft constraints or preferences; Report issue for preceding element

RESOURCE: resource allocation with capacity limits; Report issue for preceding element

RECURSIVE: reasoning requiring cycle detection or fixed-point computation; Report issue for preceding element

SPATIAL: grid-based or neighborhood logic; Report issue for preceding element

QUANT: high quantitative complexity (seven or more distinct constraints). Report issue for preceding element

These aspects are largely independent, allowing problems to incorporate multiple aspects simultaneously.

Report issue for preceding element

The aspect taxonomy emerged from post-hoc analysis of the completed problem set, identifying common patterns that contribute to modeling difficulty in ASP. Figure [1](https://arxiv.org/html/2602.01171v1#S3.F1) shows the distribution of the seven aspects over the 64 hard problem variants (ordered by “hardness” as will be described below).

Report issue for preceding element 

Figure 1: Top: Average python_exec calls per problem (hardness measure). Bottom: Reasoning aspects per problem. Problems are ordered by hardness (ascending). Report issue for preceding element

## 4 ASP Agent

Report issue for preceding element

The ASP-Agent is an adaptation of the general-purpose coding agent architecture that we introduced in the context of constraint modeling [ [19](https://arxiv.org/html/2602.01171v1#bib.bib19)] . The implementation is available as open-source software 3 3 3 [https://github.com/szeider/agentic-python-coder](https://github.com/szeider/agentic-python-coder). The agent builds on the ReAct (Reason and Act) framework [ [21](https://arxiv.org/html/2602.01171v1#bib.bib21)] , which facilitates an LLM to operate in an iterative cycle of reasoning, tool execution, and observation. An important component of this architecture is a persistent IPython kernel that maintains state across multiple code executions, enabling the agent to build, test, and debug solutions incrementally. This design cleanly separates domain-agnostic agent capabilities for code creation and execution from task-specific expertise, which is injected entirely via a project prompt rather than hard-coded into the agent's logic.

Report issue for preceding element

The agent uses two tools: python_exec and save_code. Repeated python_exec calls drive the bulk of the iterative development. The number of python_exec calls provides a proxy for problem hardness, reflecting the number of reasoning-action cycles the agent required to reach its solution. The save_code tool is used just once at the end to signal that the necoding is complete, and the final code is written to disk. Running the code produces the solution in JSON format that the reference validator checks.

Report issue for preceding element

The only two components of the agent that are specific for Answer Set programming are (1) a comprehensive project prompt clingo.md 4 4 4 The prompt is available at [https://github.com/szeider/agentic-python-coder/blob/main/examples/clingo/clingo.md](https://github.com/szeider/agentic-python-coder/blob/main/examples/clingo/clingo.md). and (2) a parameter that loads the clingo Python library [ [7](https://arxiv.org/html/2602.01171v1#bib.bib7)] , which provides the necessary API for modeling ASP problems and interacting with the clingo ASP solver.

Report issue for preceding element

The project prompt instructs the agent how to use the library. It further provides a detailed guide covering mandatory ASP syntax rules (e.g., variable safety, aggregate placement), a proposed workflow, common modeling patterns for scheduling and graph problems, and a catalog of critical anti-patterns (e.g., incorrect cardinality in choice rules, inefficient generate-and-filter logic).

Report issue for preceding element

The project prompt is organized into five main sections:

Report issue for preceding element

(1) Mission Briefing & Core Requirements: establishing the overall goal and non-negotiable constraints,

Report issue for preceding element

(2) Critical Rules of Engagement: detailing mandatory ASP syntax, logical principles including the Closed World Assumption, and the required 5-step workflow (plan, analyze & model, implement, solve & extract, format & verify),

Report issue for preceding element

(3) Clingo API and Implementation Guide: providing Python-specific implementation guidance and the three-step action modeling pattern for temporal problems,

Report issue for preceding element

(4) Problem-Solving Pattern Library: presenting reusable ASP patterns for common problem types, including assignment, graph, scheduling, and temporal reasoning problems, and

Report issue for preceding element

(5) Debugging and Advanced Techniques: covering performance optimization strategies such as constraining choices early and avoiding grounding explosions. This structured design provides the agent with both foundational knowledge and practical guidance for incrementally building and debugging ASP models.

Report issue for preceding element

We developed the ASP project prompt through an iterative refinement process. We tested an initial prompt containing basic API instructions on a few easy problems from ASP-Bench. We systematically analyzed failures from the agent's execution logs, such as syntax errors, unsafe variable declarations, and incorrect use of aggregates. We updated the accordingly, adding explicit rules, best practices, and concrete examples to address these pitfalls. However, we avoided overfitting to individual problems to enable generalization to unseen problems. We repeated this process over several iterations. The resulting prompt was then evaluated on the full set of easy and hard problem variants. We observed a surprisingly fast learning rate and stopped the process after five iterations.

Report issue for preceding element

## 5 Experimental Evaluation

Report issue for preceding element

### 5.1 Experimental Setup

Report issue for preceding element

We ran our ASP-Agent on each problem with Claude Sonnet 4.5 (September 29, 2025, version), accessed via OpenRouter, as the underlying language model, configured with temperature 0.0, max tokens 16384, and streaming enabled. The hard problems were run with a 1200-second timeout for the agent-encoding process, while the easy problems were run with a 600-second timeout. Each solver call was limited to 20 seconds. All runs completed well within the timeout. We tested each hard problem on three independent runs to assess consistency; we tested easy problems in two runs.

Report issue for preceding element

The ASP-Bench benchmark set and all 128 problem descriptions, ground truth validators, and example solutions are available at Zenodo [ [17](https://arxiv.org/html/2602.01171v1#bib.bib17)] . We provide the data as an encrypted archive (password: qB5xjsoFtdSZWTm) to prevent contamination of the training set in future experiments.

Report issue for preceding element

### 5.2 Saturation on Easy and Hard Problems

Report issue for preceding element

The ASP-Agent solved all instances correctly, including both runs on easy variants and all three runs on hard variants.

Report issue for preceding element

We report the python_exec calls averaged across three runs on each hard problem: 7.7 on average. We observe a substantial variation in difficulty. The easiest problem takes 3.7 python_exec calls on average, the hardest 26.0. The hardest problems were problem 47 (DNA sequence assembly; 26.0), problem 46 (metroidvania generation; 21.0), problem 01 (who is the killer; 20.0), problem 09 (nonogram solver; 17.2), and problem 61 (historical counterfactual; 13.7). The easiest were problem 27 (queens domination; 3.7), problem 12 (zebra puzzle; 3.7), problem 31 (network flow; 4.0), and problem 58 (exam scheduling; 4.0).

Report issue for preceding element

The complete list of results is provided in Table [1](https://arxiv.org/html/2602.01171v1#S5.T1), with execution counts and token usage averaged across multiple runs.

Report issue for preceding element

Table 1: ASP-Bench results: execution calls, and token usage ( × 1000 \times 1000 , I=in, O=out) averaged across runs (2 for easy, 3 for hard).

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

Report issue for preceding element

### 5.3 Problem Hardness and Reasoning Aspects

Report issue for preceding element

To characterize what makes problems difficult for the agent, we investigated the reasoning aspects of each problem as defined in Section [3.3](https://arxiv.org/html/2602.01171v1#S3.SS3). The results are shown in Figure [1](https://arxiv.org/html/2602.01171v1#S3.F1).

Report issue for preceding element

Surprisingly, problem hardness (measured by the number of python_exec calls) shows no significant correlation with the number of reasoning aspects. The execution counts range between 5.9 for two-aspect problems (the easiest group) to 10.8 for four-aspect problems (the hardest group on average), with single-aspect problems averaging 9.3 executions. This suggests that some problem domains are considerably harder for our agent than others, independent of the number of reasoning aspects; difficulty arises from the depth and complexity of reasoning within specific domains, rather than the breadth across multiple reasoning aspects alone.

Report issue for preceding element

Let us look at an example to illustrate this pattern. Problem 9 (nonogram solver) involves only the SPATIAL aspect. It is one of the hardest problems, with an average of 17.2 executions, due to complex grid-constraint reasoning. On the other hand, Problem 27 (queens domination) combines SPATIAL and OPT aspects but is among the easiest, with 3.7 executions, as the constraint structure admits straightforward modeling. Problem 47 (DNA sequence assembly), which combines four aspects (OPT, TEMP, DEFAULT, and RESOURCE), is the hardest, with 26.0 executions. We believe its difficulty is due to intricate overlap constraints rather than aspect breadth.

Report issue for preceding element

### 5.4 Agent Activity Patterns

Report issue for preceding element

To understand how the agent allocates effort as problems become harder, we performed a bottom-up analysis of agent transcripts from all 3 × 64 3\times 64 runs on the hard problems, categorizing each execution attempt into eight distinct activity types:

Report issue for preceding element

Data Setup: problem scoping and data initialization; Initial Model: first ASP model construction; Rule Addition: incremental constraint addition; Logic Verification: targeted testing of specific rules and constraints; Error Correction: debugging and fixing errors; Full Solve: complete solution attempts; Logic Refinement: modifying existing ASP rules to correct errors; Solution Formatting: finalizing output format and presentation.

Report issue for preceding element

We split runs into four difficulty ranges based on total execution count: ≤ 10 \leq 10 executions (easier problems), 11–20 executions (moderate difficulty), 21–30 executions (challenging problems), and ≥ 31 \geq 31 executions (hardest problems). Figure [2](https://arxiv.org/html/2602.01171v1#S5.F2) shows the analysis of activity distribution across these ranges. It reveals how the agent's behavior adapts to the problem's complexity. For easier problems (1–10 executions), we observe relatively even effort allocation across activities, with quick progression from initial model through verification to solution. As problems become harder (11–20 and 21–30 execution calls), logic verification accounts for a larger share of the activity distribution. This activity consumes an increasing proportion of total execution calls. This highlights that the harder problems require a careful incremental approach. The agent tests individual constraints and rules before attempting complete solutions. For the hardest problems (31+ executions, represented by only two runs: DNA sequence assembly and nonogram solver), the number of full solve attempts is much higher as the agent iteratively refines complete models through multiple cycles. Error correction is below 10% of activities, even for the hardest problems. This suggests that the iterative refinement approach provides feedback that prevents errors rather than requiring extensive post-hoc debugging.

Report issue for preceding element

The right panel of Figure [2](https://arxiv.org/html/2602.01171v1#S5.F2) shows two additional patterns: time per execution decreases from 22 seconds for easy problems to 15 seconds for the hardest, while the input/output token ratio increases from 24:1 to 45:1. Harder problems involve shorter, more focused execution cycles where the agent reads proportionally more context before generating each response.

Report issue for preceding element  

Figure 2: Left: Distribution of agent activity types across difficulty ranges (1–10, 11–20, 21–30, 31+ executions). Right: Agent behavior metrics showing time per execution (blue, left axis) and input/output token ratio (orange, right axis). Report issue for preceding element

## 6 Anatomy of Agentic Modeling

Report issue for preceding element

To understand how the ASP-Agent applies the project prompt in practice, let us examine Problem 26 (Tower of Hanoi) in detail. This problem demonstrates the agent's flexibility in problem-solving strategies, showing dramatically different execution patterns across runs: the shortest run completed in 6 python_exec calls, while the longest required 20 calls, a more than 3-fold variance that reveals fundamentally different approaches to the same problem.

Report issue for preceding element

### 6.1 Problem Complexity: The Pilgrim's Journey

Report issue for preceding element

The problem is a variant of the classic 4-disk, 4-peg Tower of Hanoi Problem, with the additional requirement that every disk must visit both intermediate pegs B and C during its journey from source peg A to destination peg D. This “Pilgrim's Journey” constraint rules out standard Tower of Hanoi algorithms. This transforms the problem from algorithmic execution into a complex state-space search. The expected optimal solution requires 19 moves, providing a challenging search depth bound for temporal planning. The formulation operates with the following parameters: state representation (disk positions across 4 pegs at each time step), actions (valid move operations respecting standard Hanoi rules), temporal constraints (disk trajectories must include mandatory visits to pegs B and C), and optimization (minimize total moves while satisfying all constraints).

Report issue for preceding element

### 6.2 The Expert Strategy (6 Calls)

Report issue for preceding element

In the shortest run, our agent demonstrated expert-like behavior: it immediately recognized the problem structure as a temporal planning problem. It formulated a complete, accurate ASP model with minimal iteration.

Report issue for preceding element

Calls 1–2: Problem analysis and data setup. The agent read the problem description, extracted problem parameters (4 disks, 4 pegs, 19 move limit), and defined state predicates and action schema.

Report issue for preceding element

Calls 3–4: Core ASP model construction. The agent built a comprehensive model holistically, defining: (1) state fluent on(Disk, Peg, Time) representing disk positions, (2) action move(Disk, FromPeg, ToPeg, Time) with preconditions and effects, (3) frame axioms for persistence of disk positions between moves, and (4) standard Hanoi constraints ensuring no disk sits above a smaller disk.

Report issue for preceding element

Call 5: Pilgrim's Journey constraints. It further added temporal trajectory constraints to ensure that each disk visits both intermediate pegs, using a visited/2 predicate to track which pegs each disk has visited during the sequence.

Report issue for preceding element

Call 6: Verification and output. The agent executed the clingo solver (found a solution in less than 1 second), verified that the move sequence satisfies all constraints, and formatted JSON output with the complete move sequence.

Report issue for preceding element

This shows that the linear progression (analyze, model, constrain, solve) emerges when the agent is operating at peak efficiency. Further debugging was not necessary because the model was correct on the first attempt. Here is the agent's output.

Report issue for preceding element

[⬇](data:text/plain;base64,dG9wKEQsUCxUKSA6LSBvbl9wZWcoRCxQLFQpLCBub3QgaGFzX3NtYWxsZXIoRCxQLFQpLgpoYXNfc21hbGxlcihELFAsVCkgOi0gb25fcGVnKEQsUCxUKSwgb25fcGVnKEQyLFAsVCksCiAgICBEMiA8IEQuCjEgeyBtb3ZlKEQsUDEsUDIsVCkgOiB0b3AoRCxQMSxUKSwgcGVnKFAyKSwKICAgICAgICAgICAgICAgICAgICAgIFAxIT1QMiB9IDEgOi0gdGltZShUKS4Kb25fcGVnKEQsUDIsVCsxKSA6LSBtb3ZlKEQsXyxQMixUKS4Kb25fcGVnKEQsUCxUKzEpIDotIG9uX3BlZyhELFAsVCksIG5vdCBtb3ZlKEQsUCxfLFQpLgp2aXNpdGVkKEQsUCkgOi0gbW92ZShELF8sUCxfKS4KOi0gZGlzayhEKSwgbm90IHZpc2l0ZWQoRCxiKS4KOi0gZGlzayhEKSwgbm90IHZpc2l0ZWQoRCxjKS4=)

top( D, P, T) :- on_peg( D, P, T), not has_smaller( D, P, T).

has_smaller( D, P, T) :- on_peg( D, P, T), on_peg( D2, P, T),

D2 < D.

1 { move( D, P1, P2, T) : top( D, P1, T), peg( P2),

P1!= P2 } 1 :- time( T).

on_peg( D, P2, T+1) :- move( D,_, P2, T).

on_peg( D, P, T+1) :- on_peg( D, P, T), not move( D, P,_, T).

visited( D, P) :- move( D,, P,).

:- disk( D), not visited( D, b).

:- disk( D), not visited( D, c).

### 6.3 The Debugging Strategy (20 Calls)

Report issue for preceding element

The longest run reveals a remarkably different approach, demonstrating sophisticated debugging methodology when initial attempts failed. The agent's own summary explicitly notes: “Initial attempts with 19 steps failed due to the solver struggling with the large search space. Testing with smaller instances (1–3 disks) helped verify the model correctness.”

Report issue for preceding element

Calls 1–8: Initial model attempts and challenges in the search space. The agent built an initial ASP model, but the solver failed to find solutions within a reasonable time. The model was either overly complex or contained inefficiencies that prevented practical solving. Instead of simply tweaking the same model repeatedly, the agent pivoted to a diagnostic strategy.

Report issue for preceding element

Calls 9–14: Simplification for verification. Recognizing the performance issues, the agent implemented a clever meta-cognitive strategy: simplifying the problem from 4 disks to 1–3 disks, reducing the time horizon to match the smaller problem scale, testing core ASP logic on these tractable instances, and verifying that the rules correctly encoded Hanoi constraints and state transitions. This teach-yourself-on-an-easier-version approach is a sophisticated strategy: the agent generated a hypothesis (the logic is correct; scaling is the issue) and systematically tested it. The smaller instances solved successfully in less than 0.2 seconds, confirming the core modeling approach was sound.

Report issue for preceding element

Calls 15–18: Scaling and optimization. With confidence in its logic, the agent scaled back to 4 disks and refined the model by tightening bounds on intermediate variables, adding symmetry-breaking constraints, reformulating some rules for more efficient grounding, and re-testing with incremental time horizons (12, 15, 19 moves).

Report issue for preceding element

Calls 19–20: Final solution and verification. The optimized model was then solved within time limits. The agent verified the solution trajectory, confirming all 4 disks visited both B and C, and formatted the output.

Report issue for preceding element

This run demonstrates the agent's resilience and strategic flexibility. Instead of simply retrying when faced with failure, the agent diagnosed, simplified, verified, and scaled. This result is in line with the findings on activity patterns we presented in Figure [2](https://arxiv.org/html/2602.01171v1#S5.F2): longer runs result in more verification cycles, incremental testing, and strategic refinement before reaching the solution. The following listing shows the final ASP encoding with the refined approach using explicit preconditions.

Report issue for preceding element

[⬇](data:text/plain;base64,dG9wKEQsUCxTKSA6LSBvbihELFAsUyksIG5vdCBibG9ja2VkKEQsUCxTKS4KYmxvY2tlZChELFAsUykgOi0gb24oRCxQLFMpLCBvbihEMixQLFMpLCBEMiA8IEQuCjEgeyBtb3ZlKEQsUDEsUDIsUykgOiBkaXNrKEQpLCBwZWcoUDEpLCBwZWcoUDIpLAogICAgICAgICAgICAgICAgICAgICAgUDEhPVAyIH0gMSA6LSBzdGVwKFMpLgo6LSBtb3ZlKEQsUDEsXyxTKSwgbm90IHRvcChELFAxLFMtMSkuCjotIG1vdmUoRCxfLFAyLFMpLCB0b3AoRDIsUDIsUy0xKSwgRCA+IEQyLgpvbihELFAyLFMpIDotIG1vdmUoRCxfLFAyLFMpLgpvbihELFAsUykgOi0gb24oRCxQLFMtMSksIG5vdCBtb3ZlKEQsUCxfLFMpLgp2aXNpdGVkKEQsUCkgOi0gbW92ZShELF8sUCxfKS4KOi0gZGlzayhEKSwgbm90IHZpc2l0ZWQoRCxiKS4KOi0gZGlzayhEKSwgbm90IHZpc2l0ZWQoRCxjKS4=)

top( D, P, S) :- on( D, P, S), not blocked( D, P, S).

blocked( D, P, S) :- on( D, P, S), on( D2, P, S), D2 < D.

1 { move( D, P1, P2, S) : disk( D), peg( P1), peg( P2),

P1!= P2 } 1 :- step( S).

:- move( D, P1,_, S), not top( D, P1, S-1).

:- move( D,_, P2, S), top( D2, P2, S-1), D > D2.

on( D, P2, S) :- move( D,_, P2, S).

on( D, P, S) :- on( D, P, S-1), not move( D, P,_, S).

visited( D, P) :- move( D,, P,).

:- disk( D), not visited( D, b).

:- disk( D), not visited( D, c).

### 6.4 Contrasting Strategies

Report issue for preceding element

The high variance in execution calls translates to dramatic differences in resource consumption. The expert run required 101 seconds using 140k input tokens and 4.8k output tokens, while the debugging run required 574 seconds with 690k input tokens and 19.7k output tokens—approximately 5 times more resources. Evidently, both runs have the same optimal solution with 19 moves.

Report issue for preceding element

## 7 MCP Integration

Report issue for preceding element

Our autonomous modeling system can also be run by swapping our custom ReAct agent for another agentic system, such as a coding agent or a chatbot application, and connecting to our solver interface via the Model Context Protocol (MCP). This protocol provides a standardized open-source interface for connecting language models with external tools and data sources [ [1](https://arxiv.org/html/2602.01171v1#bib.bib1), [10](https://arxiv.org/html/2602.01171v1#bib.bib10)] . Introduced by Anthropic in late 2024 and now hosted by the Linux Foundation, MCP has become a de facto standard for agent-tool interaction, with adoption by major AI platforms and integration into development environments.

Report issue for preceding element

We compare two MCP-based approaches for ASP modeling.

Report issue for preceding element

The first, ipython-mcp, is what we get when we replace the ReAct agent in our system with an external agentic system. This MCP server exposes a persistent IPython kernel with MCP tools for code execution ( python_exec), state management ( python_reset), and session control. Domain adaptation is achieved through the project prompt ( clingo.md), which mirrors our standalone agent architecture with full Python control flow.

Report issue for preceding element

The second, mcp-solver-asp [ [18](https://arxiv.org/html/2602.01171v1#bib.bib18)] , provides specialized declarative model editing through item-based tools ( add_item, replace_item, delete_item, get_model, solve_model), guided by an instructions prompt included in the MCP-Solver distribution. This enforces a purely declarative workflow where the agent manipulates individual ASP rules rather than procedural code.

Report issue for preceding element

Table 2: MCP approach comparison on 10 hardest ASP-Bench problems (3 runs each). Column p shows successful runs out of 3; tool calls and time are averaged.

|  |  |  |  |  |  |  |

| --- | --- | --- | --- | --- | --- | --- |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

|  |  |  |  |  |  |  |

Report issue for preceding element

Experiment

Report issue for preceding element

We selected the 10 hardest problems from ASP-Bench based on the average execution counts in Table [1](https://arxiv.org/html/2602.01171v1#S5.T1). We ran each of the two MCP systems three times per problem, for a total of 60 runs. For this comparison, we used Claude Sonnet 4.5 for both MCP systems with identical timeout settings (1200 seconds). Table [2](https://arxiv.org/html/2602.01171v1#S7.T2) shows the results: ipython-mcp achieved 100% accuracy (30/30 runs), while mcp-solver-asp achieved 90% (27/30), with failures on blocks world, resource allocation, and quantum circuit. We also observe that ipython-mcp uses significantly fewer tool calls (16.0 vs. 47.2 on average) and less time (216 seconds vs. 297 seconds) than mcp-solver-asp.

Report issue for preceding element

Discussion

Report issue for preceding element

This performance difference can be explained by architectural trade-offs. The ipython-mcp approach readily supports full Python expressiveness, as the agent can construct ASP programs as strings, use loops for repetitive constraints, implement custom parsing and solution extraction, and leverage Python's debugging capabilities. The mcp-solver-asp approach enforces item-by-item model construction, requiring more tool calls and limiting procedural abstractions. However, mcp-solver-asp's specialized interface offers potential advantages not captured in this comparison: item-based editing provides finer-grained undo/redo capabilities, makes model state explicitly inspectable, and prevents certain error classes, such as string-quoting issues in embedded ASP. It also includes code analysis that prevents possibly harmful code from operating, whereas ipython-mcp has no fixed guardrails. In educational contexts or for interactive exploration, the declarative interface may be more intuitive.

Report issue for preceding element

## 8 Conclusion

Report issue for preceding element

We have presented ASP-Bench, a benchmark for evaluating automated translation from natural language to Answer Set Programming, comprising 128 problem instances (64 base problems with easy and hard variants). The benchmark provides systematic coverage of core ASP constructs and supports semantic verification that checks whether solutions satisfy the problem specifications.

Report issue for preceding element

With an agentic approach based on the ReAct framework, we achieved full saturation on both easy and hard problem sets across multiple runs. This highlights the effectiveness of iterative refinement with solver feedback. This approach is not restricted to fixed pipelines.

Report issue for preceding element

Although full saturation was achieved, we believe that the benchmark provides a valuable basis for neurosymbolic AI research. It provides researchers with a rigorous testbed featuring diverse reasoning patterns, semantic validation, and diagnostic capabilities for identifying system failures on specific ASP features. In particular, the benchmark can be used to compare approaches across various efficiency metrics, including token consumption, execution cycles, and wall-clock time.

Report issue for preceding element

The next generation of NL-to-ASP systems should aim to reduce the number of reasoning-action cycles and token consumption while maintaining correctness and accuracy. Such improvements could be achieved through automated prompt optimization with systems like DSPy [ [12](https://arxiv.org/html/2602.01171v1#bib.bib12)] , which could also enable ablation studies to identify which sections of the project prompt contribute most to agent performance. The monolithic project prompt could also benefit from progressive disclosure, where the agent selectively loads relevant sections based on problem characteristics, reducing token consumption while maintaining access to specialized guidance.

Report issue for preceding element

Additionally, ASP-Bench can be used to evaluate smaller open-weight models, prompt optimization systems, and alternative agent architectures where correctness may not reach saturation. Another direction would be to achieve comparable coverage with locally deployable, open-weight LLMs. This makes automated ASP programming accessible without dependence on commercial API services.

Report issue for preceding element

The design of hard benchmark problems, together with reference validators, is a nontrivial task, a fact we learned when designing the hard problems of ASP-bench. A challenging objective for future work is the design of a new category of “very hard” problems to be included in an updated ASP-Bench.

Report issue for preceding element

Beyond generating correct ASP encodings, neurosymbolic approaches can optimize encodings for solver performance by exploring alternative constraint formulations and identifying more efficient problem representations; we hope that, also in this direction, ASP-Bench provides a solid basis.

Report issue for preceding element

## References

Report issue for preceding element

[1] ↑ Anthropic. Model Context Protocol, 2024. Protocol specification for connecting language models to external systems. URL: [https://modelcontextprotocol.io](https://modelcontextprotocol.io/).

[2] ↑ Shaun Lee Baek, Shaun Esua-Mensah, Cyrus Tsui, Sejan Vigneswaralingam, Abdullah Alali, Michael Lu, Vasu Sharma, and Kevin Zhu. Rosetta-PL: Propositional logic as a benchmark for large language model reasoning. In Abteen Ebrahimi, Samar Haider, Emmy Liu, Sammar Haider, Maria Leonor Pacheco, and Shira Wein, editors, Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies, NAACL 2025 - Volume 4: Student Research Workshop, Albuquerque, NM, USA, April 30 - May 1, 2025, pages 551–562. Association for Computational Linguistics, 2025. URL: [https://doi.org/10.18653/v1/2025.naacl-srw.53](https://doi.org/10.18653/v1/2025.naacl-srw.53), [doi:10.18653/V1/2025.NAACL-SRW.53](https://doi.org/10.18653/V1/2025.NAACL-SRW.53).

[3] ↑ Simone Caruso, Carmine Dodaro, Marco Maratea, Marco Mochi, and Francesco Riccio. CNL2ASP: converting controlled natural language sentences into ASP. Theory Pract. Log. Program., 24(2):196–226, 2024. URL: [https://doi.org/10.1017/s1471068423000388](https://doi.org/10.1017/s1471068423000388), [doi:10.1017/S1471068423000388](https://doi.org/10.1017/S1471068423000388).

[4] ↑ Erica Coppolillo, Francesco Calimeri, Giuseppe Manco, Simona Perri, and Francesco Ricca. LLASP: fine-tuning large language models for answer set programming. In Pierre Marquis, Magdalena Ortiz, and Maurice Pagnucco, editors, Proceedings of the 21st International Conference on Principles of Knowledge Representation and Reasoning, KR 2024, Hanoi, Vietnam. November 2-8, 2024, 2024. URL: [https://doi.org/10.24963/kr.2024/78](https://doi.org/10.24963/kr.2024/78), [doi:10.24963/KR.2024/78](https://doi.org/10.24963/KR.2024/78).

[5] ↑ William English, Chase Walker, Dominic Simon, Sumit Kumar Jha, and Rickard Ewetz. Verifiable natural language to linear temporal logic translation: A benchmark dataset and evaluation suite. CoRR, abs/2507.00877, 2025. URL: [https://doi.org/10.48550/arXiv.2507.00877](https://doi.org/10.48550/arXiv.2507.00877), [arXiv:2507.00877](https://arxiv.org/abs/2507.00877), [doi:10.48550/ARXIV.2507.00877](https://doi.org/10.48550/ARXIV.2507.00877).

[6] ↑ Martin Gebser, Roland Kaminski, Benjamin Kaufmann, and Torsten Schaub. Answer Set Solving in Practice. Synthesis Lectures on Artificial Intelligence and Machine Learning. Morgan & Claypool Publishers, 2012. [doi:10.2200/S00457ED1V01Y201211AIM019](https://doi.org/10.2200/S00457ED1V01Y201211AIM019).

[7] ↑ Martin Gebser, Roland Kaminski, Benjamin Kaufmann, and Torsten Schaub. Multi-shot ASP solving with clingo. Theory Pract. Log. Program., 19(1):27–82, 2019. [doi:10.1017/S1471068418000054](https://doi.org/10.1017/S1471068418000054).

[8] ↑ Michael Gelfond and Vladimir Lifschitz. The stable model semantics for logic programming. In Robert A. Kowalski and Kenneth A. Bowen, editors, Logic Programming, Proceedings of the Fifth International Conference and Symposium, Seattle, Washington, USA, August 15-19, 1988 (2 Volumes), pages 1070–1080. MIT Press, 1988.

[9] ↑ Simeng Han, Hailey Schoelkopf, Yilun Zhao, Zhenting Qi, Martin Riddell, Wenfei Zhou, James Coady, David Peng, Yujie Qiao, Luke Benson, Lucy Sun, Alexander Wardle-Solano, Hannah Szabó, Ekaterina Zubova, Matthew Burtell, Jonathan Fan, Yixin Liu, Brian Wong, Malcolm Sailor, Ansong Ni, Linyong Nan, Jungo Kasai, Tao Yu, Rui Zhang, Alexander R. Fabbri, Wojciech Kryscinski, Semih Yavuz, Ye Liu, Xi Victoria Lin, Shafiq Joty, Yingbo Zhou, Caiming Xiong, Rex Ying, Arman Cohan, and Dragomir Radev. FOLIO: natural language reasoning with first-order logic. In Yaser Al-Onaizan, Mohit Bansal, and Yun-Nung Chen, editors, Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, EMNLP 2024, Miami, FL, USA, November 12-16, 2024, pages 22017–22031. Association for Computational Linguistics, 2024. URL: [https://doi.org/10.18653/v1/2024.emnlp-main.1229](https://doi.org/10.18653/v1/2024.emnlp-main.1229), [doi:10.18653/V1/2024.EMNLP-MAIN.1229](https://doi.org/10.18653/V1/2024.EMNLP-MAIN.1229).

[10] ↑ Xinyi Hou, Yanjie Zhao, Shenao Wang, and Haoyu Wang. Model context protocol (MCP): Landscape, security threats, and future research directions. CoRR, abs/2503.23278, 2025. [arXiv:2503.23278](https://arxiv.org/abs/2503.23278), [doi:10.48550/arXiv.2503.23278](https://doi.org/10.48550/arXiv.2503.23278).

[11] ↑ Adam Ishay, Zhun Yang, and Joohyung Lee. Leveraging large language models to generate answer set programs. In Pierre Marquis, Tran Cao Son, and Gabriele Kern-Isberner, editors, Proceedings of the 20th International Conference on Principles of Knowledge Representation and Reasoning, KR 2023, Rhodes, Greece, September 2-8, 2023, pages 374–383, 2023. URL: [https://doi.org/10.24963/kr.2023/37](https://doi.org/10.24963/kr.2023/37), [doi:10.24963/KR.2023/37](https://doi.org/10.24963/KR.2023/37).

[12] ↑ Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia, and Christopher Potts. DSPy: compiling declarative language model calls into state-of-the-art pipelines. In The Twelfth International Conference on Learning Representations, ICLR 2024, Vienna, Austria, May 7-11, 2024. OpenReview.net, 2024. URL: [https://openreview.net/forum?id=sY5N0zY5Od](https://openreview.net/forum?id=sY5N0zY5Od).

[13] ↑ Nicola Leone, Gerald Pfeifer, Wolfgang Faber, Thomas Eiter, Georg Gottlob, Simona Perri, and Francesco Scarcello. The DLV system for knowledge representation and reasoning. ACM Trans. Comput. Log., 7(3):499–562, 2006. [doi:10.1145/1149114.1149117](https://doi.org/10.1145/1149114.1149117).

[14] ↑ Kostis Michailidis, Dimos Tsouros, and Tias Guns. CP-Bench: evaluating large language models for constraint modelling. CoRR, abs/2506.06052, 2025. URL: [https://doi.org/10.48550/arXiv.2506.06052](https://doi.org/10.48550/arXiv.2506.06052), [arXiv:2506.06052](https://arxiv.org/abs/2506.06052), [doi:10.48550/ARXIV.2506.06052](https://doi.org/10.48550/ARXIV.2506.06052).

[15] ↑ Manuel A. Borroto Santana, Irfan Kareem, and Francesco Ricca. Towards automatic composition of ASP programs from natural language specifications. In Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence, IJCAI 2024, Jeju, South Korea, August 3-9, 2024, pages 6198–6206. ijcai.org, 2024. URL: [https://www.ijcai.org/proceedings/2024/685](https://www.ijcai.org/proceedings/2024/685).

[16] ↑ Arseny Skryagin, Daniel Ochs, Phillip Deibert, Simon Kohaut, Devendra Singh Dhami, and Kristian Kersting. Answer set networks: Casting answer set programming into deep learning. CoRR, abs/2412.14814, 2024. URL: [https://doi.org/10.48550/arXiv.2412.14814](https://doi.org/10.48550/arXiv.2412.14814), [arXiv:2412.14814](https://arxiv.org/abs/2412.14814), [doi:10.48550/ARXIV.2412.14814](https://doi.org/10.48550/ARXIV.2412.14814).

[17] ↑ Stefan Szeider. ASP-Bench: Problems, ground truths, and solutions, 2025. [doi:10.5281/zenodo.18062939](https://doi.org/10.5281/zenodo.18062939).

[18] ↑ Stefan Szeider. Bridging language models and symbolic solvers via the model context protocol. In Jeremias Berg and Jakob Nordström, editors, 28th International Conference on Theory and Applications of Satisfiability Testing, SAT 2025, August 12-15, 2025, Glasgow, Scotland, volume 341 of LIPIcs, pages 30:1–30:12. Schloss Dagstuhl - Leibniz-Zentrum für Informatik, 2025. URL: [https://doi.org/10.4230/LIPIcs.SAT.2025.30](https://doi.org/10.4230/LIPIcs.SAT.2025.30), [doi:10.4230/LIPICS.SAT.2025.30](https://doi.org/10.4230/LIPICS.SAT.2025.30).

[19] ↑ Stefan Szeider. CP-Agent: agentic constraint programming. In International Workshop on Large Language Models for Code (LLM4Code), Rio de Janeiro, Brazil, April 2026. arXiv preprint arXiv:2508.07468.

[20] ↑ Zhun Yang, Adam Ishay, and Joohyung Lee. NeurASP: embracing neural networks into answer set programming. In Christian Bessiere, editor, Proceedings of the Twenty-Ninth International Joint Conference on Artificial Intelligence, IJCAI 2020, pages 1755–1762. ijcai.org, 2020. URL: [https://doi.org/10.24963/ijcai.2020/243](https://doi.org/10.24963/ijcai.2020/243), [doi:10.24963/IJCAI.2020/243](https://doi.org/10.24963/IJCAI.2020/243).

[21] ↑ Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik R. Narasimhan, and Yuan Cao. ReAct: synergizing reasoning and acting in language models. In The Eleventh International Conference on Learning Representations, ICLR 2023, Kigali, Rwanda, May 1-5, 2023. OpenReview.net, 2023. URL: [https://openreview.net/forum?id=WE_vluYUL-X](https://openreview.net/forum?id=WE_vluYUL-X).

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