# ADR-0004: 存档序列化与确定性状态重建

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

游戏在运行过程中会动态生成（PCG） 3×3×3 的塔身模型，并记录玩家的攀爬进度与动态难度（DDA）评估参数。
当玩家退出游戏并再次进入时，必须无缝恢复到退出前所在楼层的精确状态。

然而，如果将整个 `TowerWindowGenerationResult` 或 `CubeModel`（包含 27 个单元格的详细配置、表面映射、邻接关系等）进行完整序列化，会面临以下问题：
1. **数据体积膨胀**：完整序列化会导致存档文件过大，且包含冗余的推导数据。
2. **结构脆弱性**：若后续修改了方块生成规则，直接反序列化旧的方块缓存可能会与新规则冲突。
3. **Unity 引用**：运行时的一些缓存结构包含了无法跨会话序列化的 Unity 类型（如 Transform 的引用或协程）。

### 核心决策议题

1. 使用哪种序列化后端？
2. 对于复杂的塔身网格（Grid），是采取“全量快照（Snapshot）”还是“确定性重建（Deterministic Rebuild）”？
3. 需要跨会话持久化哪些核心数据？

---

## 决策 (Decision)

### 1. 使用 GameFramework 的 `SettingComponent` 作为存储后端

存档管理器 `GameSaveManager` 依赖底层的 `GameModule.Setting`。这在大部分平台上默认映射为 Unity 的 `PlayerPrefs`，但框架提供了基于 JSON 序列化的对象级存取接口（`SetObject / GetObject`）。

**理由**:
- 框架原生支持，无需引入第三方序列化库（如 Newtonsoft.Json）。
- 对于当前的数据量级（几个 int 和 float 字段），`PlayerPrefs` 的性能和存储上限绰绰有余。
- 提供现成的反序列化异常处理机制。

### 2. 采取“确定性重建”策略代替全量快照

**核心规则**：绝对禁止序列化 `CubeModel` 实例。

存档数据中仅保存**元数据参数**（Metadata）：`SegmentId`（当前段落 ID）和 `Seed`（随机种子）。

**恢复流程**:
1. 加载存档时，读取 `SegmentId` 和 `Seed`。
2. 游戏流转到 `TowerState` 时，将其作为参数传递给 PCG 生成器（`TowerGeneratorSys`）。
3. 由于 PCG 生成器严格受 Seed 控制，使用相同的 `SegmentId` 和 `Seed` 必定能生成完全一致的 3×3×3 塔身模型和初始状态。

**理由**:
- **极小化存档体积**：只需要保存 2 个整数。
- **高鲁棒性**：随时修改生成算法的实现细节，只要保证生成器仍遵循相同的种子约束，存档就不会损坏。

### 3. 持久化核心数据契约 (`TowerSaveData`)

所有需要落盘的数据必须平铺在 `TowerSaveData` 类中，分为三块核心数据：

| 类别 | 字段 | 说明 |
|:---|:---|:---|
| **元数据** | `SaveVersion`, `SaveTimestamp` | 用于存档升级迁移（向后兼容）和时间校验。 |
| **塔进度** | `AbsoluteClimbHeight`, `CurrentSegmentId`, `CurrentWindowSeed`, `WindowsCleared` | 确定玩家所在的物理高度、难度段落，并提供重建窗口所需的种子。 |
| **DDA 热启动** | `PlayerElo`, `RhythmPhase`, `PhaseWindowCount` 等 | 保存玩家水平（EWMA 模型评估结果）和心流节奏状态，避免每次冷启动时 DDA 都要重新度量玩家水平（这会导致前几个窗口体验波动剧烈）。 |

---

## 数据流向图示 (Save & Load Flow)

```text
[保存流 (Save)]
TowerDataSys / AdaptiveTowerDdaProvider 
      │ 采集状态
      ▼
GameSaveManager.SaveWithDda()
      │ 序列化对象
      ▼
TowerSaveData (JSON)
      │
      ▼
GameModule.Setting (PlayerPrefs 落盘)


[恢复流 (Load)]
GameModule.Setting 
      │
      ▼
GameSaveManager.Load() ──► 内存缓存 (CurrentSave)
      │
      ▼
MenuState / TowerState (读取缓存)
      │
      ├──► 将 Height, Elo 注入 DDA 系统
      └──► 将 SegmentId, Seed 交给 TowerGeneratorSys 进行【确定性生成】
```

---

## 已知的技术债务与改进方向

### TD-008: 玩家精确位置未保存
当前仅重建了原始窗口模型，玩家会被放置在窗口的默认出生点（SpawnCoord）。如果玩家在塔内移动了几步但尚未过关就退出，再次进入时会回到该窗口起点。目前作为 Roguelike 机制尚可接受，如果未来要求“精确断点续玩”，需要在存档中增加保存当前的玩家相对逻辑坐标及已执行的旋转操作序列，并在重建后回放这些操作。

### TD-009: 存档防篡改
目前存档保存在本地 PlayerPrefs 的明文中，玩家可以轻易修改 JSON 修改自己的 Elo 分数或关卡进度。虽然是单机游戏，但若有联机排行榜需求，后续需要引入 AES 加密。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-06-001 | EWMA 玩家水平评估 | (支撑项) ✅ 在会话之间持久化 Elo 评估结果，支撑热启动 |

---

## 引擎兼容性 (Engine Compatibility)

- **引擎版本**: Unity 6000.2.10.f1
- **框架依赖**: UnityGameFramework (`SettingComponent`)
- **JSON 序列化要求**: `TowerSaveData` 必须被标记为 `[System.Serializable]`，且避免使用字典（Dictionary）或二维数组等 Unity 默认 JSONUtility 不支持的结构。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0003（利用逻辑坐标系真源和生成器实现确定性重建）
- **Depended By**: ADR-0005（PCG 生成器需要消耗 Seed 进行生成）

---

## 替代方案 (Alternatives Considered)

### 方案 B: 完整快照序列化 (Full Snapshot)
遍历 `CubeModel`，将其所有的 27 个 Cell 状态映射为一个自定义结构体数组并序列化保存。
**否决原因**: 在《交错空间》中，塔的结构完全由随机数生成器产生。既然可以根据 Seed 低成本重构（耗时 < 1ms），就没有必要浪费存储空间去持久化网格状态。确定性生成天然更优。
