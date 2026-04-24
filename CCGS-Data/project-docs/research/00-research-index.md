# 交错空间 — 学术研究资料库

> 本目录收录与项目核心系统相关的学术论文、技术文献及阅读笔记。
> 每个子目录对应一个研究方向，内含 `00-literature-index.md` 作为该方向的文献总览。

## 目录结构

| 编号 | 子目录 | 研究方向 | 对应项目系统 |
|:-----|:------|:---------|:------------|
| 01 | [partial-state-matching](./01-partial-state-matching/) | 置换群谜题的局部状态匹配与搜索 | 续窗生成算法（阶段 C/D） |
| 02 | [heuristic-generation](./02-heuristic-generation/) | 启发式过程化内容生成 | 初始场景生成 / 路径采样优化 |
| 03 | [dda-modeling](./03-dda-modeling/) | 解谜游戏中的动态难度调整建模 | DDA 系统（阶段 E） |
| 04 | [flow-theory](./04-flow-theory/) | 心流理论量化与实时检测 | 论文核心主题 / CSR 指标体系 |
| 05 | [cognitive-load-spatial](./05-cognitive-load-spatial/) | 认知负荷理论与空间解谜设计 | 谜题可读性 / 难度梯度设计 |
| 06 | [color-emotion-aesthetics](./06-color-emotion-aesthetics/) | 色彩心理学与游戏环境情绪设计 | 视觉主题系统 / 补偿式配色 |

## 使用约定

- 论文文献以 Markdown 格式存放在对应子目录下，文件名格式：`作者-年份-简称.md`
- 每篇文献收录后，需在对应子目录的 `00-literature-index.md` 更新文献列表
- AI 阅读笔记统一写在各子目录的 `00-literature-index.md` 的"AI 阅读笔记"章节

## 论文与项目阶段映射

```
论文核心主题（毕业设计）
  └── 心流理论驱动的动态难度调整
        │
        ├── 04-flow-theory/        ← 心流的定义、量化、实时检测方法
        ├── 03-dda-modeling/       ← DDA 算法、自适应难度模型
        ├── 05-cognitive-load-spatial/ ← 认知负荷理论，指导谜题设计
        └── 06-color-emotion-aesthetics/ ← 色彩心理学，指导补偿式环境配色

项目工程实现
  ├── 01-partial-state-matching/   ← 续窗生成的状态搜索算法（当前阻塞项）
  └── 02-heuristic-generation/    ← 初始场景的启发式生成优化
```
