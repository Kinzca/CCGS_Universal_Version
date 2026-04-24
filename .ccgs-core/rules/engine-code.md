# 引擎代码规则 (Engine Code Rules)

> **适用路径**: `Client/Assets/GameMain/Scripts/` 中的底层框架与引擎适配代码
> **原 CCGS 对应**: `.claude/rules/engine-code.md`

- 热路径（Update/FixedUpdate/LateUpdate）中**零 GC 分配**——预分配、对象池、复用
- 所有引擎 API 必须线程安全，或明确标注为**仅主线程**
- 优化前后必须记录**实测 Profile 数据**——禁止凭感觉优化
- 引擎代码**绝对不依赖**玩法代码（严格依赖方向：Engine ← Gameplay）
- 所有公共 API 必须在 `<summary>` 中包含**用法示例**
- 公共接口变更需要**弃用周期和迁移指南**
- 所有引擎系统必须支持**优雅降级**（功能不可用时不崩溃）
- 使用引擎 API 前，查阅 `CCGS-Data/project-docs/engine-reference/` 确认当前版本兼容性

## 热路径禁忌清单

```csharp
// ❌ 以下操作在 Update 类方法中严禁使用：
var list = new List<T>();           // 每帧 GC 分配
var result = enemies.Where(x => ...); // LINQ 产生 GC
string msg = "HP: " + hp;           // string 拼接 GC
GameObject.Find("Player");          // 运行时全局查找
FindObjectOfType<T>();              // 运行时全局查找
foreach (var item in boxedCollection) // 值类型装箱

// ✅ 正确做法：
_cachedList.Clear();                 // 复用预分配集合
_spatialHash.Query(pos, radius, _cachedList); // 空间哈希
_stringBuilder.Clear().Append("HP: ").Append(hp); // StringBuilder
```
