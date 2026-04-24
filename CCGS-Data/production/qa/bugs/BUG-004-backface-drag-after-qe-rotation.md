# Bug Report

- **ID**: BUG-004
- **Title**: Q/E 旋转视角后，鼠标可拖拽塔背面和非可见侧面进行旋转
- **Severity**: S1 - Critical（破坏操控核心体验，导致误操作）
- **Frequency**: Always（100% 复现）
- **Build**: commit 7990773 (feat: 输入重构 Task 1-4)
- **Platform**: Unity Editor / Windows

---

## Steps to Reproduce

1. 进入 Tower 场景，正常加载一个 3 阶塔
2. 确认默认视角下，鼠标可正常拖拽**正面**和**左右两个侧面**旋转（预期行为）
3. 按 **Q 或 E** 旋转摄像机视角（环绕塔身）
4. 旋转视角后，尝试用鼠标点击并拖拽以下区域：
   - a) 塔身**背面**（从当前视角看应该被遮挡的面）
   - b) 除左右侧面以外的**另外两个侧面**（旋转后变为"前后"方向的面）

## Expected Behavior

- Q/E 旋转视角后，**仅面向摄像机的面**（最多 3 个可见面）应响应鼠标拖拽
- 背面（法线背离摄像机的面）应被**背面过滤**机制拦截，不响应拖拽
- 不可见的侧面不应被 Raycast 命中

## Actual Behavior

- 旋转视角后，玩家可以拖拽到**塔的背面**进行旋转操作
- 周围四个侧面中，**除左侧面和右侧面以外的两个面**也可以被拖拽旋转
- 这导致玩家在旋转视角后容易误触不可见面，产生非预期的旋转

---

## Technical Analysis (供 `@[/gameplay-programmer]` 修复参考)

### 当前背面过滤逻辑

```csharp
// MouseDragRotationSys.cs:111
if (Vector3.Dot(hit.normal, camera.transform.forward) > 0f)
    return;
```

### 可能的根因

1. **BoxCollider 穿透问题**：Unity 的 `Physics.Raycast` 在命中 BoxCollider 时，如果射线从外部射入，它只返回**首个命中面**。但如果每个 Cell 都有独立的 BoxCollider，射线可能穿过前面 Cell 的 Collider 间隙，直接命中背面 Cell 的 Collider。

2. **Collider 间隙**：如果相邻 Cell 的 Collider 之间存在微小间隙（浮点精度问题），Raycast 可以穿过间隙命中背面。

3. **Q/E 旋转后法线判定**：Q/E 旋转的是摄像机围绕塔的环绕角度。旋转后 `camera.transform.forward` 改变，但 `hit.normal` 的世界空间方向不变。如果 Raycast 的物理命中绕过了前面的遮挡（原因 1/2），背面过滤的 dot product 检查虽然数学上正确，但因为 Raycast 本身就不应该命中那些面。

### 建议修复方向

- **方案 A**：在 Raycast 命中后，增加**视线遮挡检查**——从摄像机到命中点之间是否存在其他 Collider 遮挡
- **方案 B**：使用 `RaycastAll` + 排序，只取距离最近的命中面，且该面必须通过背面过滤
- **方案 C**：检查 Cell 的 Collider 配置，确保无间隙（增大 Collider 尺寸或使用统一的 MeshCollider）

---

## Additional Context

- 此问题在默认视角（未旋转）下**不复现**，仅在 Q/E 旋转后出现
- 关联文件：`MouseDragRotationSys.cs` L104-L112
- 关联 GDD：`02-player-controls.md` §1.4 背面剔除规范
