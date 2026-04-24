# Game Design Document: 数值配置与数据驱动

> **系统：** Numerical Design, Luban Config & Data-Driven Architecture  
> **版本：** 1.1  
> **设计：** Game Designer

---

## 1. 配置系统

### 1.1 配置工具

使用 **Luban** 作为配置系统。

> **核心原则：所有数值、关卡、地块规则必须配置化，严禁硬编码。**

### 1.2 配置工具链

| 组件 | 路径 | 说明 |
| :--- | :--- | :--- |
| 配置表定义 | `Luban/Config/` | 表结构定义 |
| 客户端生成 | `Luban/gen_client_bin.sh` | 生成客户端可读的二进制数据 |
| 服务端生成 | `Luban/gen_server_bin.sh` | 生成服务端数据（当前未启用） |
| 协议生成 | `Luban/ProtoGen/` | 通信协议代码生成 |

---

## 2. 核心配置表

### 2.1 塔段落规则 (TowerSegmentRule)

段落入口主表，引用生成规则和 DDA 规则：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `Id` | int | 段落ID（关联 ChapterId） |
| `Order` | int | 魔方阶数 |
| `GenerationRuleId` | int | 关联生成规则表 |
| `DDARuleId` | int | 关联 DDA 规则表 |
| `PromotionElo` | int | 晋级时的 ELO |
| `DemotionElo` | int | 降级时的 ELO |
| `NextSegmentId` | int | 下一段落 ID |
| `PrevSegmentId` | int | 上一段落 ID |

> **v1.1 变更**：`PlayerId`、`BGMId`、`SkyBoxId` 已移除，`PlayerId` 迁移至 `GameGlobalConfig.DefaultPlayerId`。

### 2.1.1 生成规则表 (TowerGenerationRule)

控制 solved-seed 的空间结构生成：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `Id` | int | 生成规则ID |
| `MainPathBlockPoolId` | int | 主路径方块池 |
| `OuterBlockPoolId` | int | 外围方块池 |
| `GoalHeightDelta` | int | 终点高度差 |
| `PathLengthRange` | int[] | 路径长度范围 |
| `TurnCountRange` | int[] | 转角次数范围 |
| `DeadEndFillRate` | int | 死胡同概率 |
| `OuterNoiseDensity` | int | 外围噪声密度 |
| `GenerationRetryLimit` | int | 生成失败的重试次数 |

### 2.1.2 DDA 规则表 (TowerDDARule)

控制打乱深度、求解预算和 DDA 边界：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `Id` | int | DDA规则ID |
| `ScrambleStepCount` | int | 打乱步数默认值 |
| `ScrambleStepCountRange` | int[] | DDA 允许的打乱步数范围 [min, max] |
| `ScrambleRetryLimit` | int | 打乱重试上限 |
| `ScrambleAxis` | int[] | 允许的打乱轴 (0=Y, 1=X, 2=Z) |
| `ScrambleMoveEnabled` | bool | 是否启用移动打乱 |
| `ScrambleMoveWeight` | int | 移动操作权重 (0-100) |
| `TargetRotateDepthRange` | int[] | 目标旋转深度范围 |
| `MaxTotalActions` | int | 总动作预算上限 |
| `MaxMoveActions` | int | 移动动作预算 |
| `SolverNodeCap` | int | 求解器节点上限 |

### 2.2 方块池 (TowerBlockPool)

定义可用方块模型及其出现权重：

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `PoolId` | int | 池ID |
| `ModelIds` | int[] | 可用方块模型ID列表 |
| `SpawnWeights` | float[] | 对应每个模型的出现权重 |

### 2.3 方块模型 (TbBlockModel)

定义单个方块模型的属性和行为：

| 字段 | 说明 |
| :--- | :--- |
| 模型ID | 唯一标识 |
| 面信息 | 各面的几何类型和通行类型 |
| 可站立性 | 是否支持玩家站立 |
| 楼梯能力 | 是否具备 step 通行能力 |

### 2.4 游戏全局配置 (GameGlobalConfig)

全局单例配置，管理默认玩家、全局开关等：

| 字段 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| `GameVersion` | string | `"0.1.0"` | 语义化版本号 |
| `DefaultPlayerId` | int | 2 | 默认玩家 ID（引用 TbCharacterModel） |
| `DefaultSegmentId` | int | 1 | 默认起始段落 ID |
| `CubeOrder` | int | 3 | 默认魔方阶数 |
| `EnableDDA` | bool | true | 是否启用 DDA |
| `EnableBGM` | bool | true | 是否启用 BGM |
| `EnableSFX` | bool | true | 是否启用音效 |
| `EnableHaptic` | bool | true | 是否启用震动 |
| `DebugMode` | bool | false | 调试面板开关 |
| `ShowFPS` | bool | false | 帧率显示开关 |

### 2.5 视觉渲染配置 (TowerVisualConfig)

控制 `TowerThemeController` 的全部运行时视觉参数（33 字段），涵盖：

| 参数分组 | 字段数 | 说明 |
| :--- | :--- | :--- |
| 品牌色与漫游 | 7 | HueStart, HueStep, SkyHueOffset, 波动幅度/频率 |
| 面色相偏移 | 4 | Front/Back/Right/Left HueOffset |
| 面明度偏移 | 7 | Top/Bottom/Front/Back/Right/Left LitOffset + FaceGradientSpread |
| 节奏阶段参数 | 9 | Peak/BuildUp/Relax 的 Sat/Lit/HueBias |
| 天空盒 | 4 | SkyTop/Bot 的 SatFactor/Lit |
| 过渡动画 | 2 | Sky/Block TransitionDuration |

> 所有默认值取自当前已验证通过的视觉效果。详见提案 `2026-04-20-luban-config-audit-proposal.md`。

---

## 3. 双池模型

### 3.1 池结构

| 池 | 配置键 | 用途 |
| :--- | :--- | :--- |
| 主路径池 | `MainPathBlockPoolId` | 主路径上使用的方块模型 |
| 外围池 | `OuterBlockPoolId` | 非主路径区域的填充方块 |

### 3.2 DifficultyWeights 定位

> 当前正式实现以"双池模型 + SpawnWeights"为准。

- `DifficultyWeights` 如果未来存在，应是"修饰当前池权重"
- 不是取代或并列于 `SpawnWeights` 的另一套核心分配机制

---

## 4. 难度配置

### 4.1 TowerDifficultyProfile

```csharp
public readonly record struct TowerDifficultyProfile(
    int TargetRotateDepthMin,     // 目标旋转深度下限
    int TargetRotateDepthMax,     // 目标旋转深度上限
    int MaxTotalActions,          // 总动作预算上限
    int MaxMoveActions,           // 移动动作预算上限
    int RetryLimit,               // 生成重试上限
    int SolverNodeCap);           // 求解器节点上限
```

### 4.2 参考难度区间

| 难度等级 | 操作深度 (M) | 旋转轴数量 | 适用场景 |
| :--- | :--- | :--- | :--- |
| **Simple** | M = 1 | 仅1个轴 | 新手教学、放松期 |
| **Normal** | M = 2~3 | 跨面关联 | 标准流程 |
| **Expert** | M ≥ 5 | 顺序强关联 | 高手挑战 |

---

## 5. 数据驱动原则

### 5.1 强制要求

| 原则 | 说明 |
| :--- | :--- |
| **配置化** | 所有数值、关卡、方块、掉落必须通过 Luban 配置 |
| **严禁硬编码** | 不允许在代码中写死数值 |
| **统一入口** | 优先扩展现有 `TowerSegmentRule` / `TowerBlockPool`，不额外新建独立大表 |
| **可观测** | 所有核心数值必须可在运行时观测（日志/面板） |

### 5.2 配置解析链

```
GameGlobalConfig (全局) ← 单例
    └─→ DefaultPlayerId → TbCharacterModel

TowerSegmentRule (段落ID)
    ├─→ TowerGenerationRule (生成规则ID)
    │       ├─→ TowerBlockPool (主路径池ID)
    │       │       └─→ TbBlockModel (模型ID) → FaceInfo
    │       └─→ TowerBlockPool (外围池ID)
    └─→ TowerDdaRule (DDA规则ID)
            └─→ 打乱/求解参数

TowerVisualConfig (视觉渲染参数) ← 单例
TowerGlobalConfig (Elo/CSR) ← 单例
```

---

## 6. 续窗输入的数据来源

### 6.1 正式采用：规范化生成结果

> **续窗生成的正式输入 = 上一窗口的规范化生成结果（`TowerWindowGenerationResult` / `ContinuationSpec`）**

**不允许**：直接消费 runtime live state（太脏、耦合太重、不可复现、不可测试）

### 6.2 Runtime Live State 的唯一职责

| 允许 | 禁止 |
| :--- | :--- |
| 告诉系统"现在到了该切窗的时候" | 作为生成器的真源 |
| 驱动表现衔接 | 提供生成输入数据 |

---


