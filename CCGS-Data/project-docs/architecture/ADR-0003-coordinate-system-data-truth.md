# ADR-0003: 逻辑坐标系与塔数据真源设计

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

《交错空间》的核心玩法是在 3×3×3 的立方体网格中进行面切片旋转解谜。
这要求一套严谨的**逻辑坐标系**来表达方块在空间中的位置，以及一套高效的
**面旋转矩阵重映射算法**来处理 90° 旋转后所有方块坐标的变换。

同时，"无尽滑窗"机制要求窗口数据拥有唯一的**真源管理者**，
防止多个系统同时修改同一份数据导致状态不一致。

### 核心决策议题

1. 逻辑坐标系的原点与范围？中心对称 vs 角落起始？
2. 数据容器选择？3D 数组 vs Dictionary？
3. 面旋转的坐标重映射算法？查找表 (LUT) vs 实时矩阵公式？
4. 谁拥有窗口数据的写权限？

---

## 决策 (Decision)

### 1. 中心对称的整数坐标系 (Center-Symmetric Integer Grid)

采用以立方体几何中心为原点的 `Vector3Int` 坐标系，各轴范围 `{-1, 0, 1}`。

```text
坐标空间示意（Y 轴为垂直方向，即攀爬方向）:

       Y (+1 = 顶层)
       │
       │    Z (+1 = 前方)
       │   /
       │  /
       │ /
       ├──────── X (+1 = 右侧)
      (0,0,0) = 中心方块

各层定义:
  Y = -1  →  底层 (Bottom)
  Y =  0  →  中层 (Middle)
  Y = +1  →  顶层 (Top)

每层 9 个格子 (3×3), 总计 27 个 Slot
```

**理由**:
- 中心对称使得旋转公式天然简洁：绕 Y 轴旋转时 `(x,y,z) → (z,y,-x)` 或 `(-z,y,x)`
- 避免了角落起始坐标系需要额外减去偏移量再旋转再加回来的开销
- `Vector3Int` 是 Unity 内置值类型，零 GC、支持 `Dictionary<Vector3Int, T>` 的高效哈希

### 2. Dictionary 稀疏容器 (`Dictionary<Vector3Int, SlotCell>`)

方块数据存储在 `CubeModel.Cells: Dictionary<Vector3Int, SlotCell>` 中。
Key 是逻辑坐标 `Vector3Int`，Value 是方块数据 `SlotCell`。

**理由**:
- 支持**空位 (Void Block)**: 空位不占用 Dictionary 条目（`BlockId=0, BlockModelInfo=null`），
  无需为 27 个格子全部分配内存
- 旋转时的坐标重映射只需"删旧键 + 插新键"，语义清晰
- 查询复杂度 O(1)：`Cells.ContainsKey(coord)` / `Cells.GetValueOrDefault(coord)`

**否决方案 — 3D 数组 `SlotCell[3,3,3]`**:
- 数组索引需要 `coord + Vector3Int.one` 偏移（从 {-1,0,1} 映射到 {0,1,2}）
- 无法天然表达空位（需要用 null 或哨兵值，语义不如 Dictionary 缺失键清晰）
- 旋转时需要分配新数组或复杂的 in-place swap

### 3. 实时矩阵公式旋转 (Runtime Matrix Formula)

面旋转的坐标重映射使用**硬编码的三轴旋转公式**（`CubeModel.RotateCoord`），
而非运行时查找表。

**旋转公式 (90° 正向旋转)**:

| 旋转轴 | 正向 (+90°) | 反向 (-90°) |
|:---|:---|:---|
| **X 轴** | `(x, -z, y)` | `(x, z, -y)` |
| **Y 轴** | `(z, y, -x)` | `(-z, y, x)` |
| **Z 轴** | `(-y, x, z)` | `(y, -x, z)` |

**旋转执行流程**:
```text
1. 收集受影响的 SlotCell 列表（通过 IsInLayer 判断）
2. 对每个 Cell 计算新坐标（RotateCoord）
3. 批量删除旧键，批量插入新键（snapshot-then-swap，避免迭代中修改 Dictionary）
4. 更新 Cell.Coord 为新坐标
```

**理由**:
- 3×3×3 仅 9 个 Cell 受单层旋转影响，计算量极小（< 1μs）
- 硬编码公式无分支预测失败风险，比查找表更快
- 公式已通过 TowerActionSimulator 的 Headless 验证和 BFS 求解器数万次调用验证

### 4. 数据真源所有权划分

| 数据 | 唯一写权限 Owner | 读权限 |
|:---|:---|:---|
| `CubeModel.Cells` (方块坐标与类型) | `TowerCenterSys` (运行时旋转/移动), `TowerGeneratorSys` (生成时填充) | 所有层均可读 |
| `TowerWindowGenerationResult` (窗口快照) | `TowerDataSys.SetCurrentWindowResult()` | Core 层、Feature 层 |
| `AbsoluteClimbHeight` (攀爬高度) | `TowerDataSys` | 全局 |
| `PlayerActor.StandCoord` (玩家逻辑坐标) | `TowerCenterSys.TickMove()` | Presentation 层 |

**关键约束**:
- `TowerDataSys` 是窗口级别的唯一真源（谁持有 `CurrentWindowResult`）
- `CubeModel` 内部的 `Cells` 在运行时由 `TowerCenterSys` 通过 `ApplyRotation()` 修改
- Presentation 层**只读** `CubeModel` 数据来同步 3D Transform，绝不直接修改 `Cells`

---

## 核心数据结构关系图

```text
TowerDataSys (Foundation 层 — 窗口级真源)
  │
  ├── CurrentWindowResult: TowerWindowGenerationResult
  │     ├── Model: CubeModel ← 核心数据容器
  │     │     ├── Order: int (= 3)
  │     │     ├── Cells: Dictionary<Vector3Int, SlotCell>
  │     │     │     └── SlotCell
  │     │     │           ├── Coord: Vector3Int      ← 逻辑坐标 (旋转时会变)
  │     │     │           ├── SlotId: int             ← 原始槽位编号 (不变)
  │     │     │           ├── BlockId: int            ← 方块类型 ID
  │     │     │           ├── BlockModelInfo          ← 方块模型与面信息
  │     │     │           │     ├── ModelId, BlockType
  │     │     │           │     ├── LocalUp, LocalForward  ← 法线基准
  │     │     │           │     ├── OriginalFaceMap         ← 出厂面信息
  │     │     │           │     ├── RuntimeFaceMap          ← 运行时面信息(旋转后更新)
  │     │     │           │     └── CurrentRotation: Quaternion
  │     │     │           └── WorldTransform: Transform  ← 仅 Presentation 层使用
  │     │     └── ApplyRotation(affected, rule) ← 面旋转入口
  │     │
  │     ├── SpawnCoord / GoalCoord: Vector3Int
  │     ├── EntrySpec / ExitSpec / ContinuationSpec
  │     ├── ScrambleResult / SolveResult
  │     └── BlockComplexityScore: float
  │
  ├── AbsoluteClimbHeight: int
  └── UnlockedLevels: List<LevelGenerateData>
```

---

## 逻辑坐标到世界坐标的映射

逻辑坐标 (Grid) 到世界坐标 (World) 的映射由 Presentation 层的 View 系统处理：

```text
World Position = Grid Coord × BlockWorldSize + TowerBaseOffset
```

其中：
- `BlockWorldSize` = 单个方块的世界尺寸（由配表定义）
- `TowerBaseOffset` = 塔底部在世界空间中的位置（由 `AbsoluteClimbHeight` 驱动）

**关键原则**: Core 层只操作 `Vector3Int` 逻辑坐标，绝不引用 `Transform` 或世界坐标。
Grid→World 的转换是 Presentation 层的专属职责。

---

## 已知的技术债务与改进方向

### TD-006: SlotCell 混合了逻辑与视图数据
`SlotCell` 同时持有 `Coord`（逻辑数据）和 `WorldTransform`（Unity 视图引用）。
理想情况下应拆分为 `LogicalSlot`（纯数据，可在 Headless 环境使用）和 `SlotView`
（持有 Transform，仅在 Presentation 层存在）。
当前不阻塞功能，但在提取 Core 层为独立 Assembly 时必须处理。

### TD-007: BlockModelInfo 中的 ViewEntityId
`BlockModelInfo.ViewEntityId` 和 `BlockModelInfo.ViewReadyTcs` 属于视图层关注点，
不应出现在 Core 层的数据结构中。同 TD-006，需要在架构净化阶段拆分。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-01-001 | 3×3×3 滑动窗口架构 | ✅ `CubeModel` + `Dictionary<Vector3Int, SlotCell>` + `TowerDataSys` 窗口管理 |
| TR-05-001 | 逻辑坐标系与世界坐标系解耦双向映射 | ✅ Core 层纯 `Vector3Int`，Grid→World 转换在 Presentation 层 |
| TR-01-002 | 固定 90° 面切片旋转 | ✅ `CubeModel.ApplyRotation()` + 三轴旋转公式 |

---

## 引擎兼容性 (Engine Compatibility)

- **引擎版本**: Unity 6000.2.10.f1
- **关键类型**: `UnityEngine.Vector3Int`（值类型，实现了 `IEquatable<>` 和 `GetHashCode()`，
  可安全用作 Dictionary Key）
- **Post-Cutoff API 风险**: 无
- **已废弃 API**: 无

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: ADR-0002（数据变更后通过事件通知 Presentation 层同步视图）
- **Depended By**: ADR-0004（存档序列化需要读取 CubeModel 数据）、
  ADR-0005（PCG 生成器填充 CubeModel）、ADR-0006（导航器读取 CubeModel 进行寻路）

---

## 替代方案 (Alternatives Considered)

### 方案 B: 3D 数组 `SlotCell[3,3,3]`
**否决原因**: 无法天然表达空位；旋转需要额外的坐标偏移计算；扩展到 N×N×N 时需要重新分配数组。

### 方案 C: 查找表 (LUT) 旋转
预计算所有 27 个坐标在 6 种旋转（3 轴 × 2 方向）下的结果，存储为静态数组。
**否决原因**: 3 阶时公式和 LUT 性能差异可忽略（均 < 1μs），但公式更易理解和维护。
如果未来扩展到更高阶（5×5×5），可以考虑 LUT 优化。

### 方案 D: 四元数旋转坐标
使用 `Quaternion.Euler(0, 90, 0) * coord` 进行坐标旋转。
**否决原因**: 四元数运算返回 `Vector3`（浮点数），需要 `Mathf.RoundToInt` 取整，
引入浮点精度误差风险。硬编码整数公式保证精确无误。
