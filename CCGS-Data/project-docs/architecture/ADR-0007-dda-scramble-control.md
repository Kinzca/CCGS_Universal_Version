# ADR-0007: DDA 自适应打乱步数控制

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

为了保证游戏的心流体验，塔的难度不能是一成不变的，也不能是线性递增的（那会很快导致玩家碰壁退坑）。由于我们的关卡是由 PCG 系统通过“反向打乱（Backward Scramble）”生成的，决定关卡难度的最直接自变量就是 **打乱步数 (M)**。

然而，如何根据玩家的当前水平来动态决定下一个窗口的 M 值？

### 核心决策议题

1. 如何评估玩家的真实解谜能力？
2. 如何将玩家的能力映射为打乱步数？
3. 如何避免难度始终处于高压状态，导致玩家认知疲劳？

---

## 决策 (Decision)

### 1. 采用 PvE Elo 评估模型

玩家通过每一个窗口的表现（消耗的时间、额外的无效移动）将被转化为实际解题步数，并通过指数加权移动平均 (EWMA) 模型计算玩家的实时 Elo 分数（$R_{player}$）。
这部分已经在 `EloTowerSkillEstimator` 中实现并由 `GameSaveManager` 持久化（见 ADR-0004）。

### 2. 挑战-技能比 (CSR) 驱动的反解方程

为了计算 M 值，我们引入了“挑战-技能比”（Challenge-Skill Ratio, CSR）的概念，目标是使 $R_{window} \approx CSR_{target} \times R_{player}$，其中 $CSR_{target}$ 是通过配表给定的心流目标值。

窗口难度的核心方程（在 `AdaptiveTowerDdaProvider` 中实现）：
$R_{window} = R_{base} + W_{scramble} \times M + W_{axes} \times AxesPenalty + W_{block} \times BlockComplexity$

由此反解出**最优打乱步数 M***：
$M^* = \frac{CSR_{target} \times R_{player} - R_{base} - AxesPenalty - BlockComplexity}{W_{scramble}}$

**理由**: 
这种基于数学期望的反解模型，使得难度控制变成了纯数值调优问题。如果引入了新的轴（AxesPenalty 变大）或遇到了具有极高认知负荷的方块（BlockComplexity 变大），模型会自动降低 M 值来进行难度补偿，保持总难度不变。

### 3. 宏观节奏修正 (Rhythm Controller)

如果每次都按照最优 $M^*$ 给玩家生成窗口，玩家会一直处于高负荷的紧张状态。
我们在 `M*` 计算之后，增加了 `TowerRhythmController` 模块来进行宏观节奏的干预：

**心流节奏周期（Phase）**:
- **BuildUp (积累期)**: 正常使用 $M^*$，让难度逐渐跟上玩家水平。
- **Peak (巅峰期)**: 将 $M^*$ 强制推向允许范围的上限（甚至略微超出），给予玩家高压挑战。
- **Relax (放松期)**: 巅峰过后，大幅度下调 $M^*$，让玩家大脑休息，体验割草快感。

最终的 $M_{final}$ 将经过节奏乘数修正，并钳位到 `TowerDDARule` 配置表限制的 `[Min, Max]` 范围内，输出给 `TowerGeneratorSys`（详见 ADR-0005）。

---

## 已知的技术债务与改进方向

### TD-013: 隐性章节切换与表现层脱节
当前 `AdaptiveTowerDdaProvider` 内部包含了一个根据 Elo 自动进行“隐性章节晋级/降级”的机制。这会改变下一次读取的配表 ID。然而，由于它是隐性发生的，表现层（如 UI 和音乐）并没有收到章节切换的事件通知，可能导致背景环境与实际难度段落脱节。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-06-002 | 动态打乱步数控制 | ✅ 使用 AdaptiveTowerDdaProvider 计算最优打乱步数，并应用节奏修正。 |

---

## 引擎兼容性 (Engine Compatibility)

- 完全解耦，纯逻辑计算，不依赖 Unity API（除了使用 Mathf.Clamp 进行钳位）。
- 所有系数（如 $W_{scramble}$ 和 $CSR_{target}$）均通过 Luban 数据表 `TowerGlobalConfig` 注入。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0004（依赖存档保存当前的 Elo 和节奏阶段数据）
- **Depended By**: ADR-0005（生成的 M 步数最终交给反向打乱器执行）
