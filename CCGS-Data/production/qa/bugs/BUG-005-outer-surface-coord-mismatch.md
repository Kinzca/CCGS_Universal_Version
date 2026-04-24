# Bug Report

- **ID**: BUG-005
- **Title**: Q/E 旋转后仅初始两个侧面可拖拽旋转，其余侧面始终不响应
- **Severity**: S1 - Critical（BUG-004 修复回归，阻塞核心拖拽操控）
- **Frequency**: Always（100% 复现）
- **Build**: commit a0ff2db (fix: BUG-004)
- **Platform**: Unity Editor / Windows
- **Regression From**: BUG-004 修复（IsHitOnOuterSurface）

---

## Steps to Reproduce

1. 进入 Tower 场景，加载一个 3 阶塔
2. 确认默认视角下，4 个侧面中有 2 个面可正常拖拽旋转（**左侧面、右侧面**）
3. 注意另外 2 个侧面（前面、后面）在初始视角下可能也能拖拽（取决于摄像机角度）
4. 按 **Q 或 E** 旋转摄像机 90°
5. 尝试拖拽现在面向摄像机的新侧面（旋转前的前面/后面）
6. 观察结果：新面向的侧面**无法拖拽**

## Expected Behavior

- Q/E 旋转摄像机后，面向摄像机的侧面应可正常拖拽旋转
- 所有 4 个侧面在面向摄像机时都应该可交互，与初始视角无关

## Actual Behavior

- **始终只有初始化时的 2 个侧面**（固定为模型空间的 X 边界面）可拖拽
- Q/E 旋转后，即使这 2 个面被转到背面，部分情况下仍可拖拽
- 其余 2 个侧面（模型空间的 Z 边界面）在任何视角下都无法拖拽

---

## Root Cause Analysis

**直接原因：** `IsHitOnOuterSurface` 方法的坐标系不匹配。

```csharp
// MouseDragRotationSys.cs L471
private bool IsHitOnOuterSurface(Vector3Int hitCoord, Vector3 hitNormal, CubeModel model)
{
    // hitNormal 是世界空间的法线（受 Root Transform 旋转影响）
    // hitCoord 是模型逻辑坐标（不受 Root Transform 影响）
    // Q/E 旋转 Root Transform 后，两个坐标系不再对齐！
}
```

**具体过程：**

1. 初始化时，Root Transform 无旋转，世界空间 X 轴 = 模型 X 轴 → 法线 X 分量与 hitCoord.x 对齐 ✓
2. Q/E 旋转 Root 90° 后，模型 X 轴面的世界法线变为 Z 方向
3. `IsHitOnOuterSurface` 检测到法线主分量在 Z 轴，去检查 `hitCoord.z == maxZ/minZ`
4. 但该 Cell 实际在模型 X 轴边界（`hitCoord.x == maxX`），不在 Z 边界 → **返回 false → 误拦截**

**修复方向：** 在 `IsHitOnOuterSurface` 中，将 `hitNormal` 通过 Root Transform 的逆旋转转换到模型本地空间后再做边界判断。

---

## Additional Context

- 此 Bug 是 BUG-004 修复（commit a0ff2db）的直接回归
- 仅影响鼠标拖拽，键盘 WASD 不受影响
- 顶面拖拽不受影响（因为 Q/E 仅绕 Y 轴旋转，Y 法线在旋转前后不变）
- 建议 `@[/gameplay-programmer]` 领取，修复方案明确：添加 `InverseTransformDirection` 转换
