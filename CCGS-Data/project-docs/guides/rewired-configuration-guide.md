# Rewired 键位配置完整操作指南

> **日期**：2026-04-22
> **目的**：为 P1-P6 输入系统代码配套，手把手指导 Rewired Editor 的完整配置
> **前提**：场景中已有 Rewired Input Manager（通过 Initializer 初始化均可）

---

## 〇、Initializer 方式的注意事项

你提到使用的是 **Rewired Input Manager Initializer**（而非直接拖入 `Rewired Input Manager` 预制件）。两种方式都可以正常工作，但有一个**关键区别**：

> **Initializer 会在运行时动态创建 Rewired Input Manager**，因此：
> 1. 配置数据仍然需要在 Rewired Editor 中完成（Initializer 引用的是同一份配置资产）
> 2. 确保 Initializer 的 `Rewired Input Manager` 引用字段指向了你配置好的 Input Manager 预制件
> 3. Initializer 必须在**所有调用 `ReInput.players.GetPlayer(0)` 的代码之前**执行

**验证方式**：运行游戏后，在 Hierarchy 中搜索 `Rewired Input Manager`，如果找到了说明 Initializer 工作正常。

---

## 一、打开 Rewired Editor

1. Unity 顶部菜单 → `Window` → `Rewired` → `Input Manager` → `Open Rewired Editor`
2. 或者在 Project 窗口中双击 Rewired Input Manager 预制件

---

## 二、配置 Actions（操作定义）

### 📍 位置：Rewired Editor → 左侧 `Actions` 面板

Actions 是"抽象操作"，不关联具体按键。按以下表格**逐个添加**：

### 步骤
1. 点击 `Actions` 面板下方的 `+` 按钮
2. 输入 `Name`（**必须完全匹配**下表，大小写敏感）
3. 设置 `Type`
4. 设置 `Category`（如果还没创建 Category，先去 Action Categories 添加）

### Action Categories（操作分类）

先在 `Action Categories` 中创建以下分类：

| Category 名称 | 说明 |
|:-------------|:-----|
| `FaceRotation` | 面旋转相关操作 |
| `Movement` | 角色移动相关操作 |
| `ViewSystem` | 视角旋转和系统键 |
| `SimplifiedKeyboard` | 简化键盘（键盘1）专用操作 |

### 完整 Action 清单（共 22 个）

#### 面旋转 (FaceRotation) — 5 个

| # | Action Name | Type | Category | 说明 |
|:--|:-----------|:-----|:---------|:-----|
| 1 | `RotateTop` | **Button** | FaceRotation | 旋转顶层面 |
| 2 | `RotateBottom` | **Button** | FaceRotation | 旋转底层面 |
| 3 | `RotateLeft` | **Button** | FaceRotation | 旋转左前侧面 |
| 4 | `RotateRight` | **Button** | FaceRotation | 旋转右后侧面 |
| 5 | `ReverseModifier` | **Button** | FaceRotation | 反向修饰键（按住取反） |

#### 角色移动 (Movement) — 6 个

| # | Action Name | Type | Category | 说明 |
|:--|:-----------|:-----|:---------|:-----|
| 6 | `MoveForward` | **Button** | Movement | 向前移动（↑ / 左摇杆 fallback） |
| 7 | `MoveBackward` | **Button** | Movement | 向后移动（↓） |
| 8 | `MoveLeft` | **Button** | Movement | 向左移动（←） |
| 9 | `MoveRight` | **Button** | Movement | 向右移动（→） |
| 10 | `MoveHorizontal` | **Axis** | Movement | 摇杆水平轴（-1~+1）⚠️ 手柄专用 |
| 11 | `MoveVertical` | **Axis** | Movement | 摇杆垂直轴（-1~+1）⚠️ 手柄专用 |

> ⚠️ **关键区别**：
> - `MoveForward/Backward/Left/Right` 是 **Button** 类型，用于键盘方向键（`GetButtonDown`）
> - `MoveHorizontal/MoveVertical` 是 **Axis** 类型，用于手柄摇杆（`GetAxis`，返回 -1.0 ~ +1.0）
> - 手柄 Provider 优先读 Axis，如果 Axis 无输入再 fallback 到 Button

#### 视角与系统 (ViewSystem) — 5 个

| # | Action Name | Type | Category | 说明 |
|:--|:-----------|:-----|:---------|:-----|
| 12 | `ViewRotateLeft` | **Button** | ViewSystem | 场景视角左旋（Q / LB） |
| 13 | `ViewRotateRight` | **Button** | ViewSystem | 场景视角右旋（E / RB） |
| 14 | `Undo` | **Button** | ViewSystem | 撤回操作（B / B键） |
| 15 | `Confirm` | **Button** | ViewSystem | 确认（Enter / A键） |
| 16 | `Cancel` | **Button** | ViewSystem | 取消（Backspace / X键） |

#### 简化键盘专用 (SimplifiedKeyboard) — 6 个

| # | Action Name | Type | Category | 说明 |
|:--|:-----------|:-----|:---------|:-----|
| 17 | `CycleFaceNext` | **Button** | SimplifiedKeyboard | 切换到下一个面（Tab） |
| 18 | `CycleFacePrev` | **Button** | SimplifiedKeyboard | 切换到上一个面（Shift+Tab） |
| 19 | `RotateSelectedCW` | **Button** | SimplifiedKeyboard | 旋转选中面 — 顺时针（D） |
| 20 | `RotateSelectedCCW` | **Button** | SimplifiedKeyboard | 旋转选中面 — 逆时针（A） |
| 21 | `SelectFace1` ~ `SelectFace6` | **Button** | SimplifiedKeyboard | 数字键直选面 1~6 |

> `SelectFace1` 到 `SelectFace6` 是 6 个独立的 Action，共 6 个。
> 所以总计 = 5 + 6 + 5 + 6 + 6(SelectFace) = **28 个 Action**。

---

## 三、配置 Map Categories（映射分类）

### 📍 位置：Rewired Editor → 左侧 `Map Categories`

| Category 名称 | 说明 | 对应代码 |
|:-------------|:-----|:---------|
| `Gameplay` | 核心游戏操作 | `InputCategories.Gameplay` |
| `Menu` | UI 菜单导航（暂未使用） | `InputCategories.Menu` |
| `Debug` | 调试功能（暂未使用） | `InputCategories.Debug` |

**操作**：
1. 点击 `Map Categories` 下方的 `+` 按钮
2. 输入名称（⚠️ 名称必须完全匹配）
3. Rewired 默认有一个 `Default` Category，可以重命名为 `Gameplay`

---

## 四、配置 Keyboard Map（键盘映射）

### 📍 位置：Rewired Editor → `Players` → `Player 0` → `Controller Maps` → `Keyboard Maps`

### 步骤
1. 在左侧选择 `Players` → 点击 `Player 0`（或你的默认玩家）
2. 展开 `Controller Maps`
3. 点击 `Keyboard Maps` 旁的 `+`
4. Category 选择 `Gameplay`
5. Layout 选择 `Default`
6. 点击新建的 Keyboard Map，进入映射编辑

### 键盘2（经典键盘）映射表

在 Keyboard Map 中逐条添加以下按键绑定：

| Action | 按键 | 说明 |
|:-------|:-----|:-----|
| `RotateTop` | **W** | 旋转顶层面 |
| `RotateBottom` | **S** | 旋转底层面 |
| `RotateLeft` | **A** | 旋转左前侧面 |
| `RotateRight` | **D** | 旋转右后侧面 |
| `ReverseModifier` | **Space** | 按住反向旋转 |
| `MoveForward` | **↑ (Up Arrow)** | 向前移动 |
| `MoveBackward` | **↓ (Down Arrow)** | 向后移动 |
| `MoveLeft` | **← (Left Arrow)** | 向左移动 |
| `MoveRight` | **→ (Right Arrow)** | 向右移动 |
| `ViewRotateLeft` | **Q** | 场景视角左旋 |
| `ViewRotateRight` | **E** | 场景视角右旋 |
| `Undo` | **B** | 撤回操作 |
| `Confirm` | **Return (Enter)** | 确认 |
| `Cancel` | **Backspace** | 取消 |
| `CycleFaceNext` | **Tab** | 切换下一个面（键盘1） |
| `CycleFacePrev` | **Left Shift + Tab** | 切换上一个面（键盘1） |
| `RotateSelectedCW` | *无需额外绑定* | 键盘1 复用 D 键（与 RotateRight 共用） |
| `RotateSelectedCCW` | *无需额外绑定* | 键盘1 复用 A 键（与 RotateLeft 共用） |
| `SelectFace1` | **Alpha1 (数字键1)** | 直选面 1 |
| `SelectFace2` | **Alpha2 (数字键2)** | 直选面 2 |
| `SelectFace3` | **Alpha3 (数字键3)** | 直选面 3 |
| `SelectFace4` | **Alpha4 (数字键4)** | 直选面 4 |
| `SelectFace5` | **Alpha5 (数字键5)** | 直选面 5 |
| `SelectFace6` | **Alpha6 (数字键6)** | 直选面 6 |

### 添加按键绑定的具体操作

1. 在 Keyboard Map 编辑界面，点击底部 `+ Add` 按钮
2. `Action` 下拉选择目标 Action（如 `RotateTop`）
3. `Type` 选择 `Button`
4. 点击 `Key` 字段 → 按下对应按键（如 W）
5. 确认保存

> **注意**：`CycleFacePrev` 的 Shift+Tab 组合键在 Rewired 中的配置方式：
> 1. 添加 `CycleFacePrev` → 绑定到 `Tab`
> 2. 在该绑定的 `Modifier` 设置中，添加 `Left Shift` 作为修饰键

---

## 五、配置 Joystick Map（手柄映射）

### 📍 位置：Rewired Editor → `Players` → `Player 0` → `Controller Maps` → `Joystick Maps`

### 步骤
1. 在 `Controller Maps` 下找到 `Joystick Maps`
2. 点击 `+` 添加新的 Joystick Map
3. Category 选择 `Gameplay`
4. Layout 选择 `Default`
5. Controller 选择 `Any`（表示适用于所有手柄）或选择特定手柄模板
6. 进入映射编辑

### 手柄映射表

| Action | 手柄元素 | Element Type | 说明 |
|:-------|:---------|:-------------|:-----|
| `MoveHorizontal` | **Left Stick X** | Axis | 左摇杆水平（-1 = 左，+1 = 右） |
| `MoveVertical` | **Left Stick Y** | Axis | 左摇杆垂直（-1 = 下，+1 = 上） |
| `RotateTop` | **D-Pad Up** | Button | 十字键上 |
| `RotateBottom` | **D-Pad Down** | Button | 十字键下 |
| `RotateLeft` | **D-Pad Left** | Button | 十字键左 |
| `RotateRight` | **D-Pad Right** | Button | 十字键右 |
| `ViewRotateLeft` | **Left Bumper (LB/L1)** | Button | 视角左旋 |
| `ViewRotateRight` | **Right Bumper (RB/R1)** | Button | 视角右旋 |
| `ReverseModifier` | **Right Trigger (RT/R2)** | Button | 按住反向旋转 |
| `Confirm` | **Action South (A/Cross/✕)** | Button | 确认 |
| `Undo` | **Action East (B/Circle/○)** | Button | 撤回 |
| `Cancel` | **Action West (X/Square/□)** | Button | 取消 |

### 添加手柄绑定的具体操作

#### Axis 类型绑定（MoveHorizontal / MoveVertical）

1. 点击 `+ Add`
2. Action 选择 `MoveHorizontal`
3. **Element Type** 选择 `Axis`（⚠️ 不是 Button！）
4. Element Assignment 选择 `Left Stick X`
5. `Invert` 保持 **未勾选**
6. 确认

重复以上步骤为 `MoveVertical` 绑定 `Left Stick Y`。

#### Button 类型绑定（其他所有）

1. 点击 `+ Add`
2. Action 选择目标（如 `RotateTop`）
3. Element Type 选择 `Button`
4. Element Assignment 选择对应按键（如 `D-Pad Up`）
5. 确认

> **Right Trigger 作为 Button 的配置**：
> RT 本身是一个 Axis（0~1），但 Rewired 支持将 Axis 转为 Button。
> 1. 添加 `ReverseModifier`
> 2. Element Type 选择 `Button`
> 3. Element Assignment 选择 `Right Trigger`
> 4. Rewired 会自动在 Trigger 超过阈值时视为按下

---

## 六、配置 Players（玩家）

### 📍 位置：Rewired Editor → 左侧 `Players`

### 验证项

1. 确认存在 `Player 0`（或 ID 为 0 的玩家）
2. 点击 Player 0，检查以下设置：
   - ✅ `Assign Keyboard on Start` = **True**（自动获取键盘控制权）
   - ✅ `Assign Mouse on Start` = **True**（自动获取鼠标控制权）
   - ✅ `Assign Joystick on Start` = **True**（自动获取手柄控制权）
3. 在 `Controller Maps` 中确认已分配：
   - ✅ Keyboard Map (Gameplay/Default)
   - ✅ Joystick Map (Gameplay/Default)

> **代码中 `ReInput.players.GetPlayer(0)` 对应的就是这个 Player 0。**

---

## 七、配置验证清单

完成以上配置后，按以下清单逐项验证：

### 配置检查

- [ ] **Actions 面板**：共 28 个 Action，名称完全匹配（大小写敏感）
- [ ] **Action Categories**：创建了 FaceRotation / Movement / ViewSystem / SimplifiedKeyboard
- [ ] **Map Categories**：创建了 Gameplay（可重命名默认的 Default）
- [ ] **Keyboard Map**：创建了 Gameplay/Default 的 Keyboard Map
- [ ] **Keyboard Map 绑定**：24 条键盘绑定全部添加
- [ ] **Joystick Map**：创建了 Gameplay/Default 的 Joystick Map（可选，无手柄可跳过）
- [ ] **Joystick Map 绑定**：12 条手柄绑定全部添加
- [ ] **MoveHorizontal/MoveVertical** 的绑定类型是 **Axis**（不是 Button）
- [ ] **Player 0**：键盘/鼠标/手柄自动分配均已启用
- [ ] **Player 0 Controller Maps**：Keyboard Map 和 Joystick Map 均已分配

### 运行时验证

- [ ] 运行游戏后 Hierarchy 中出现 `Rewired Input Manager`
- [ ] Console 中**没有** `ReInput.players.GetPlayer(0) 返回 null` 的错误日志
- [ ] 按 W 键 → 控制台输出旋转相关日志
- [ ] 按方向键 → 角色移动
- [ ] 按 Q/E → 视角旋转

---

## 八、常见问题排查

### Q1: 运行后报 `ReInput has not been initialized`

**原因**：Rewired Input Manager 未在场景中创建。
**解决**：
1. 确认 Initializer 脚本的 `Script Execution Order` 早于你的游戏逻辑脚本
2. 或者在 Initializer 的 Inspector 中勾选 `Run in Edit Mode`
3. 最稳妥方案：在 Unity → Edit → Project Settings → Script Execution Order 中，将 Rewired Initializer 的 Order 设为 `-100`（早于默认的 0）

### Q2: 按键无反应

**排查**：
1. 打开 Rewired → `Debug Information`（运行时在 Hierarchy 中选择 Rewired Input Manager）
2. 检查 Player 0 是否获取了 Keyboard 控制器
3. 检查 Action 名称是否与代码中的完全一致（大小写！）
4. 检查 Keyboard Map 是否分配给了 Player 0

### Q3: 手柄无反应

**排查**：
1. 确认手柄已被 Unity 识别（Edit → Project Settings → Input Manager 中应能看到）
2. Rewired 是否自动分配了 Joystick（Player 0 → Assign Joystick on Start = True）
3. Joystick Map 的 Controller 设置是否为 `Any`

### Q4: 摇杆输入抖动 / 漂移

**解决**：
1. 代码中已内置 0.3 死区（`StickDeadzone = 0.3f`）
2. 也可在 Rewired Editor 的 Axis 绑定中设置 `Dead Zone` 参数
3. 两者取最大值生效

### Q5: `MoveHorizontal` 的 GetAxis 返回始终为 0

**原因**：最可能是 Action 的 Type 设置错误。
**检查**：
1. 在 Actions 面板中选中 `MoveHorizontal`
2. 确认 Type = **Axis**（不是 Button）
3. 在 Joystick Map 中确认绑定的 Element Type = **Axis**

---

## 九、目录结构对照

```
代码文件                              ←→  Rewired 配置项
──────────────────────────────────────────────────────────
InputActions.cs                       ←→  Actions 面板（28 个 Action）
InputCategories.cs                    ←→  Map Categories 面板
RewiredClassicKeyboardProvider.cs     ←→  Keyboard Map (Gameplay/Default)
RewiredSimplifiedKeyboardProvider.cs  ←→  同上（共享同一个 Keyboard Map）
RewiredGamepadProvider.cs             ←→  Joystick Map (Gameplay/Default)
RewiredMouseDragProvider.cs           ←→  无需 Rewired 配置（使用 UnityEngine.Input）
```

> **鼠标方案说明**：`RewiredMouseDragProvider` 使用的是 `UnityEngine.Input`（`GetMouseButton`、`GetKey`），**不依赖 Rewired 的 Mouse Map**。这是因为鼠标拖拽需要像素级坐标（`Input.mousePosition`），而 Rewired 的 Mouse Map 主要处理按钮和滚轮。
