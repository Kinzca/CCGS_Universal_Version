# Game Design Document: 开发阶段路线图

> **系统：** Development Roadmap & Milestone Tracking  
> **版本：** 1.0  
> **设计：** Game Designer

---

## 1. 已完成阶段

### 阶段 0：基线整理与输入耦合收口 ✅

| 任务 | 状态 |
| :--- | :--- |
| 输入决策器从全局单例解耦 → `IViewRotationContext` | ✅ |
| TowerCenterSys / GateCenterSys 各自维护 RotationStep | ✅ |
| 视角旋转只负责输入映射与表现，不进入求解状态 | ✅ |
| **P1-P6 输入架构重构**：IInputProvider + InputSchemeManager 解耦架构 | ✅ |
| P1：键盘2（经典 WASD）+ Rewired 迁移 | ✅ |
| P2：键盘1（Tab 切面 + 面高亮） | ✅ |
| P3：鼠标拖拽旋转（跟手预览 + Snap） | ✅ |
| P4：右键点击 BFS 寻路 | ✅ |
| P5：中键视角旋转 + Ctrl+Z 撤回 + IInputRemapService 接口预留 | ✅ |
| P6：手柄支持（摇杆移动 + 十字键旋转 + LB/RB/RT + A/B/X） | ✅ |

---

### 阶段 1：纯逻辑状态模拟层 ✅

| 任务 | 状态 |
| :--- | :--- |
| `TowerSimState` / `TowerPlayerSnapshot` 建立 | ✅ |
| `ITowerActionSimulator` 实现 | ✅ |
| 纯逻辑模拟不依赖 Unity Transform | ✅ |
| 状态哈希工具（供 BFS 去重） | ✅ |

---

### 阶段 2：可扩展地块规则层 ✅

| 任务 | 状态 |
| :--- | :--- |
| `CubeSurfaceNavigator` 改造为规则调度器 | ✅ |
| `ISurfaceTraversalResolver` 注册机制 | ✅ |
| `FlatTraversalResolver` / `StairTraversalResolver` 提供 | ✅ |

---

### 阶段 3.7：运行时基础规则收口 ✅

| 任务 | 子版本 | 状态 |
| :--- | :--- | :--- |
| 玩家站位口径统一 | 3.7.1 | ✅ |
| `ToHeight` 和净空底账修正 | 3.7.2 | ✅ |
| 楼梯路径首尾点统一 | 3.7.3 | ✅ |
| 控制器消费路径修正 | 3.7.4 | ✅ |
| 楼梯模式扩展（StepToStep / StepSideways） | 3.7.5 | ✅ |
| Legacy debug shift 边界收住 | 3.7.6 | ✅ |

---

### 阶段 4（至 4.5）：首窗接入 ✅

| 任务 | 子版本 | 状态 |
| :--- | :--- | :--- |
| 窗口结果类型和失败码正式化 | 4.1 | ✅ |
| 首窗 API 正式化（seed 驱动、y=-1 底层随机） | 4.2 | ✅ |
| Solved-seed 首窗生成主线建立 | 4.3 | ✅ |
| `TowerCenterSys.InitTower()` 正式消费 `TowerWindowGenerationResult` | 4.4 | ✅ |
| 首窗可玩性准入门 + 路径 replay 校验 | 4.5 | ✅ |

---

## 2. 当前阶段

### 阶段 C：第三阶段重启版 — 续关框架算法化 ✅

> **核心目标**：让 `NextWindow` 通过 `ContinuationSpec` 稳定生成，主路径来源唯一、可显式回放。

**五条基本原则**：
1. 先解决续关正确性，再解决多样性
2. 不用"后置整窗 probe"拦首窗
3. 不把语义 BFS 作为主线依赖
4. 底层主路径必须是"生成结果"，不能在验证阶段临时重建
5. 不处理高自由度多样性（留给阶段 D）

#### 检查点进度

| 检查点 | 目标 | 验收标准 | 状态 |
| :--- | :--- | :--- | :--- |
| **CP0** | 冻结边界并建立 B 基线 | 首窗 100 samples 稳定成功 | ✅ |
| **CP1** | 共享续关入口投影 | 真实运行链和验证链共享同一投影入口 | ✅ |
| **CP2** | ContinuationSpec 成为唯一续关真源 | NextWindow 不依赖旧 hints 主导 | ✅ |
| **CP3** | 底层主路径改成显式生成结果 | 路径来源唯一可追踪 | ✅ |
| **CP4** | 验证器收敛为回放器 | RouteReplayFailed 对应显式路径回放失败 | ✅ |
| **CP5** | continuation safety 前移到出口筛选 | 不再出现首窗被后置 probe 砍死 | ✅ |
| **CP6** | 运行时接入与最终批量验收 | 续窗 100 samples = Success:100, Failure:0 | ✅ |

#### 最终验收标准

- `续窗 / 100 samples = Success 100`
- 不再出现：`RouteReplayFailed:*` / `NoViableTopPattern` / `Failed to build solved-seed after 12 attempts`
- 连续滑窗 20 次：不空场景、不卡死、不续关失败
- QE 旋转后输入映射正确，切窗后不落空、不穿模、不丢坐标

#### 已知缺陷（待修复）

| 缺陷 | 说明 | 状态 |
| ~~FormalAdvance cell missing~~ | ~~打乱后 EntrySpec.Coord 未同步~~ | ✅ 已修复 (5.10) |
| ~~续窗打乱后 Y=-1 层与旧顶层视觉重叠~~ | ~~打乱操作跨层移动方块，导致 Transform 过户失败时新旧方块重叠~~ | ✅ 已由滑窗过渡动画系统 (5.12) 消解：旧方块掉落退场 + 新方块掉落入场，永不重叠 |
| 正向匹配打乱算法 | 搜索打乱后 Y=-1 匹配旧顶层的状态，实现底层 Transform 无缝过户 | 💭 降级为可选优化（文献调研可继续，不再阻塞开发） |
| 旋转动画偶尔卡顿 | 已有问题，与求解器无关 | 🟡 待排查 |

#### 已完成里程碑

| 日期 | 里程碑 | 说明 |
| :--- | :--- | :--- |
| 2026-04-17 | **5.5 续窗旋转稳定性修复** | 三轮迭代修复 SetParent 坐标漂移 + QE 旋转继承，全部 10 项 QA 通过 |
| 2026-04-18 | **5.6 GoalCheckMode 出口检测** | 可切换出口检测模式（ExactCoord/TopLayerAny），含楼梯误触发修复，全部 7 项 QA 通过 |
| 2026-04-18 | **5.7 配置表三表拆分迁移** | TowerSegmentRule → 主表 + GenerationRule + DDARule，三表查询改造完成 |
| 2026-04-18 | **5.8 反向打乱系统 (Backward Scrambler)** | TowerBackwardScrambler 核心实现，支持旋转+移动混合、轴过滤、状态去重，首窗/续窗接入 |
| 2026-04-18 | **5.9 BFS 最短解验证器** | TowerBfsSolver 实现，观测模式接入首窗/续窗，DDA 约束检查，配置表调整后 7/9 项 QA 通过 |
| 2026-04-18 | **5.10 EntrySpec 打乱同步修复** | 打乱后同步 EntrySpec.Coord，修复 FormalAdvance cell missing 崩溃 |
| 2026-04-18 | **5.11 续窗打乱问题定位与算法设计** | 确认根因为打乱改变 Y=-1 层。提出正向匹配打乱算法，阻塞于文献调研 |
| 2026-04-18 | **5.12 滑窗过渡动画系统** | 独立动画控制器 `TowerTransitionAnimator`，实现新方块错落入场与旧废墟错落退场动画 |
| 2026-04-18 | **5.13 操作失败反馈动画** | `ActionFailFeedbackSys` 旋转失败微旋转弹回 + 移动失败角色前倾弹回，强化操作有回声原则 |
| 2026-04-18 | **5.14 音频设计 GDD** | 新增 `12-audio-design.md`，定义操作/系统/环境/音乐四层音效体系 |

---

## 2.5 当前活跃阶段

### 阶段 F：界面逻辑 UX/UI 🔄

> **核心目标**：完成游戏的完整界面系统——主菜单、设置界面、HUD、过渡动画。
> **GDD 参照**：`14-ui-ux-design.md`
> **美术规范**：`.agents/design/art/ui-asset-spec.md`

| 任务 | 说明 | 状态 |
| :--- | :--- | :--- |
| 主菜单界面实现 | 左右分栏构图、3D 渲染区 + Glassmorphism UI 区 | 🔄 |
| 设置界面 | 锚点平滑滚动长列表、四区块（通用/画面/控制/音频） | 🔄 |
| UI 资产管线 | 图标资源规范、开源图标整合 | 🔄 |
| 输入设备热插拔 | 键鼠/手柄 UI 动态切换 | ⬜ |
| HUD 游玩界面 | 层数显示、计时器、操作提示 | ⬜ |

> **前置完成**：阶段 C 续关框架、阶段 4 首窗接入、存档系统均已稳定。
> **遗留修复**：BUG-001（旋转卡顿）、BUG-003/TD-005（输入隔离）待本阶段内或阶段后修复。

---

## 3. 后续规划

### 阶段 D：多样性与中度算法化 📋

| 任务 | 说明 |
| :--- | :--- |
| 模板池扩展 | `SpineClimb` 从单模板扩展为小模板池 |
| Richer patterns | 引入 richer middle/top pattern |
| 分布控制 | 模板池权重与 collapse 监控 |
| 多 family | 扩展为多 family 支持 |
| Continuation-safe diversity | 在不破坏 ContinuationSpec 的前提下做多样性选择 |
| 多样性门槛 | `MiddlePattern >= 2`、`GoalPattern` 分布丰富 |

---

### 阶段 E：高阶算法化与难度系统 📋

| 任务 | 说明 | 状态 |
| :--- | :--- | :--- |
| 配置表三表拆分 | `TowerSegmentRule` → 主表 + `TowerGenerationRule` + `TowerDdaRule` | ✅ 已完成 (5.7) |
| 反向打乱正式接入 | BackwardScrambler 完整实现，含移动打乱（ScrambleMoveWeight） | ✅ 已完成 (5.8) |
| 最短解验证 | TowerBfsSolver (BFS) 核心实现，观测模式接入首窗/续窗 | ✅ 已完成 (5.9) |
| 难度 profile | 目标旋转深度、动作预算、打乱步数配置化 | ✅ 已配置化 (5.7) |
| DDA provider | 正式实现 `AdaptiveTowerDdaProvider` 动态难度闭环 | ✅ 框架已就位 |
| Solver 工具链 | 完整 solver/BFS/IDA* 工具链 | ⬜ |
| 方案 B 续关切换 | 正向匹配打乱——已由 5.12 过渡动画消解重叠，降级为可选优化 | 💭 Nice-to-Have |
| 批量调优 | 分析工具与参数调优 | ⬜ |

---

## 4. 阶段间教训总结

### 4.1 第三阶段核心教训

> **不要在"续关入口框架还没彻底打通"时，同时追 continuation probe、多样性、蓝图路径补丁、语义 BFS 和整窗验解。**

### 4.2 已识别的反模式

| 反模式 | 为什么有害 | 正确做法 |
| :--- | :--- | :--- |
| 后置整窗 continuation probe | 会把可玩的首窗砍死 | 前移到出口模块筛选 |
| `ReservedWalkable` 反推主路径 | 蓝图层 ≠ 真实模拟器语义 | 显式生成结果 |
| 语义 BFS 作为主线依赖 | 复杂度暴增，绑死续关框架 | 仅作为调试/验证工具 |
| 同时追多样性和正确性 | 互相冲突，导致塌缩 | 先正确性，后多样性 |
| `strict flat set` 作为最终真源 | 蓝图层 flat ≠ 真实可横移 | 统一到同一套真源 |
