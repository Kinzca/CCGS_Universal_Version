# 01 - 置换群谜题的局部状态匹配与搜索

## 研究背景

本项目（交错空间）的续窗生成面临一个典型的**带约束的置换群打乱问题**：

在 3×3×3 的空间旋转解谜中，生成一个目标逻辑模型，并通过一系列合法的旋转操作（包含跨层移动方块的 X/Z 轴旋转），搜索到一个打乱状态，使得该状态的**局部子结构（底层 Y=-1）精确匹配给定的约束快照（上一窗口的顶层）**。

关键难点：目标模型的底层可以包含与约束快照**完全不同种类的方块**，这意味着需要通过 X/Z 轴旋转将正确的方块从其他层"搬运"到底层，搜索空间呈指数级增长。

## 推荐搜索关键词

### 浓缩检索词（供 NoteBookLM 一键复制）
> 可以直接复制以下核心词串汇编让 NoteBookLM 一次性进行广度及精确搜索，避免逐个搜索：
```text
Permutation puzzle partial configuration search, State space search partial goal states, Pattern database heuristics partial puzzle solving, Subgoal graph search permutation, Procedural generation constraint satisfaction, Inverse scrambling algorithms permutation groups, Bidirectional BFS partial matching Rubik's cube, IDA* partial pattern database sliding puzzle, Constrained combinatorial puzzle generation, 置换群谜题 局部状态匹配, 状态空间搜索 局部目标约束, 魔方局部还原启发式算法, 反向打乱算法 过程化关卡生成
```

### 英文关键词（优先使用，学术成果更丰富）
- `Permutation puzzle partial configuration search`
- `State space search with partial goal states`
- `Pattern database heuristics for partial puzzle solving`
- `Subgoal graph search in permutation puzzles`
- `Procedural generation of sequential movement puzzles constraint satisfaction`
- `Inverse scrambling algorithms permutation groups`
- `Bidirectional BFS partial matching Rubik's cube`
- `IDA* partial pattern database sliding puzzle`
- `Constrained combinatorial puzzle generation`

### 中文关键词
- `置换群谜题 局部状态匹配`
- `状态空间搜索 局部目标约束`
- `魔方 局部还原 启发式算法`
- `模式数据库 启发式搜索 局部约束`
- `反向打乱算法 过程化关卡生成`
- `序列移动解谜 状态图剪枝`
## 已收录文献列表

| 编号 | 文献标题 | 作者/年份 | 核心思路简述 | 应用潜力 | 路径 |
|:-----|:---------|:---------|:------------|:---------|:-----|
| — | *暂无* | — | — | — | — |

## AI 阅读笔记与思路提炼

*(暂无新增文献，等待后续搜索补充)*
