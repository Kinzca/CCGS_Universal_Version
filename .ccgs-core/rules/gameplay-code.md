# 玩法代码规则 (Gameplay Code Rules)

> **适用路径**: `Client/Assets/GameMain/Scripts/HotFix/GameLogic/` 及所有玩法逻辑脚本
> **原 CCGS 对应**: `.claude/rules/gameplay-code.md`

- 所有玩法数值**必须来自外部配置**（Luban 配置表），严禁硬编码
- 时间相关计算必须使用 `Time.deltaTime` / `Time.fixedDeltaTime`，确保帧率无关
- **禁止直接引用 UI 代码**——通过 GameFramework 事件/消息系统跨系统通信
- 每个玩法系统必须实现清晰的**公共接口**
- 状态机必须有**显式状态转换表**和**文档化的状态枚举**
- 所有玩法逻辑必须可单元测试——逻辑与表现分离
- 代码注释中标注实现了哪份 GDD 的哪个需求
- 禁止使用静态单例管理游戏状态——通过 GameFramework 依赖注入

## 正确示例 (C#)

```csharp
// ✅ 数据驱动：从 Luban 配置读取
var config = GameEntry.DataTable.GetDataTable<DRTowerConfig>();
float baseDifficulty = config.GetDataRow(levelId).BaseDifficulty;
float moveSpeed = _playerStats.MoveSpeed * Time.deltaTime;
```

## 错误示例 (C#)

```csharp
// ❌ 硬编码玩法数值
float baseDifficulty = 1.5f;  // 违规：硬编码
float moveSpeed = 5.0f;        // 违规：未从配置读取，未使用 deltaTime
```
