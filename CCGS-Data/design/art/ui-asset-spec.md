# 《交错空间》UI 资产切片与图标制作清单
# InterwovenSpace — UI Asset & Icon Production Spec

> **版本**：1.0
> **日期**：2026-04-23
> **作者**：Art Director (@art-director)
> **依据**：`14-ui-ux-design.md`、已确认概念图（极简几何 · 纯净悬浮流）
> **目标受众**：美术制作人员 / 外包美术 / Figma 自制

---

## 一、全局设计令牌 (Design Tokens)

### 1.1 色彩系统

| 令牌名 | 色值 (HEX) | 用途 |
|:---|:---|:---|
| `color-primary` | `#B8C4E0` | 主色调 · 淡蓝灰（面板边框、分割线） |
| `color-accent` | `#7B8DB8` | 强调色 · 蓝紫（当前选中页签、滑块填充） |
| `color-bg-panel` | `#FFFFFF` @ 12% 不透明度 | 玻璃拟态面板底色 |
| `color-bg-panel-hover` | `#FFFFFF` @ 18% 不透明度 | 面板悬停态 |
| `color-text-primary` | `#FFFFFF` | 主文字 |
| `color-text-secondary` | `#C0C8D8` | 副文字（描述、标签） |
| `color-text-disabled` | `#6A7080` | 禁用态文字 |
| `color-danger` | `#E85050` | 危险操作（清除存档按钮） |
| `color-slider-track` | `#FFFFFF` @ 20% 不透明度 | 滑条轨道底色 |
| `color-slider-fill` | `#7B8DB8` | 滑条已填充区域 |
| `color-slider-thumb` | `#FFFFFF` | 滑条拖拽圆点 |
| `color-toggle-on` | `#7B8DB8` | 开关开启态 |
| `color-toggle-off` | `#4A4F60` | 开关关闭态 |

### 1.2 字体规范

| 用途 | 字体 | 字号 | 字重 |
|:---|:---|:---|:---|
| 界面大标题（"设置"、"交错空间"） | Outfit / 思源黑体 | 48px | Bold (700) |
| 区块标题（"通用"、"画面"） | Outfit / 思源黑体 | 28px | SemiBold (600) |
| 页签文字 | Outfit / 思源黑体 | 22px | Medium (500) |
| 设置项名称 | Outfit / 思源黑体 | 22px | Regular (400) |
| 设置项描述/数值 | Outfit / 思源黑体 | 18px | Regular (400) |
| 版本号 | Outfit / 思源黑体 | 14px | Light (300) |

### 1.3 间距与圆角

| 令牌名 | 数值 | 备注 |
|:---|:---|:---|
| `radius-panel` | 16px | 大面板圆角 |
| `radius-button` | 24px（胶囊形） | 主界面按钮 |
| `radius-toggle` | 12px | 开关组件 |
| `radius-slider-thumb` | 50%（正圆） | 滑条拖拽点 |
| `radius-dropdown` | 8px | 下拉框 |
| `spacing-section` | 40px | 设置区块之间的纵向间距 |
| `spacing-item` | 24px | 同一区块内条目间距 |
| `padding-panel` | 32px | 面板内边距 |

---

## 二、通用切图规范 (9-Slice & Component States)

### 2.1 玻璃拟态面板底图 (Glassmorphism Panel)

**文件**：`bg_panel_glass.png`
- **尺寸**：240 × 240 px（9-slice 拉伸）
- **9-slice 切割线**：上 40 / 右 40 / 下 40 / 左 40
- **视觉要求**：
  - 填充：纯白 `#FFFFFF`，不透明度 12%
  - 边框：1px 实线，纯白 `#FFFFFF`，不透明度 20%
  - 圆角：16px
  - 无投影（悬浮流不使用阴影）
  - 底层需留透明，引擎中叠加模糊背景

### 2.2 主界面胶囊按钮 (Capsule Button)

三态切图，每态单独导出：

| 状态 | 文件名 | 填充 | 边框 | 备注 |
|:---|:---|:---|:---|:---|
| 常态 Normal | `btn_capsule_normal.png` | 白 @ 8% | 白 @ 30%, 1.5px | 默认展示 |
| 悬停 Hover | `btn_capsule_hover.png` | 白 @ 15% | 白 @ 50%, 2px | 鼠标悬停 |
| 按下 Pressed | `btn_capsule_pressed.png` | 白 @ 5% | 白 @ 40%, 1.5px | 按下瞬间微缩 |

- **尺寸**：320 × 64 px（9-slice 拉伸）
- **9-slice 切割线**：上 32 / 右 32 / 下 32 / 左 32
- **圆角**：32px（完美胶囊形）

### 2.3 模式切换器 (Mode Selector)

| 状态 | 文件名 | 备注 |
|:---|:---|:---|
| 常态 | `btn_mode_selector_normal.png` | 圆角矩形底框，含左右箭头占位 |
| 悬停 | `btn_mode_selector_hover.png` | 边框加亮 |

- **尺寸**：400 × 56 px（9-slice）
- **9-slice 切割线**：上 28 / 右 28 / 下 28 / 左 28

### 2.4 设置界面页签 (Tab Anchor)

| 状态 | 文件名 | 视觉 |
|:---|:---|:---|
| 未选中 | `btn_tab_inactive.png` | 纯文字，无底色 |
| 选中 | `btn_tab_active.png` | 文字下方 2px 横线，色值 `color-accent` |

- **尺寸**：文字驱动，底部横线作为独立装饰图
- **底部横线切图**：`dec_tab_underline.png`，尺寸 80 × 4 px，可横向拉伸

### 2.5 滑动条 (Slider)

| 部件 | 文件名 | 尺寸 | 备注 |
|:---|:---|:---|:---|
| 轨道底 | `slider_track.png` | 300 × 6 px | 9-slice 水平拉伸，圆角 3px |
| 填充条 | `slider_fill.png` | 300 × 6 px | 同上，色值 `color-slider-fill` |
| 拖拽点 | `slider_thumb.png` | 24 × 24 px | 纯白正圆，带 1px `color-accent` 描边 |

### 2.6 开关 (Toggle Switch)

| 状态 | 文件名 | 尺寸 | 备注 |
|:---|:---|:---|:---|
| 关闭 | `toggle_off.png` | 52 × 28 px | 底色 `color-toggle-off`，圆角 14px |
| 开启 | `toggle_on.png` | 52 × 28 px | 底色 `color-toggle-on` |
| 拖拽圆 | `toggle_knob.png` | 22 × 22 px | 纯白正圆 |

### 2.7 下拉框 (Dropdown)

| 部件 | 文件名 | 尺寸 | 备注 |
|:---|:---|:---|:---|
| 收起态底框 | `dropdown_closed.png` | 200 × 40 px | 9-slice，圆角 8px |
| 展开态底框 | `dropdown_open.png` | 200 × 160 px | 9-slice，圆角 8px |
| 选项悬停条 | `dropdown_item_hover.png` | 200 × 36 px | 白 @ 10% 填充 |

### 2.8 键位绑定框 (Keybind Button)

| 状态 | 文件名 | 尺寸 | 备注 |
|:---|:---|:---|:---|
| 常态 | `btn_keybind_normal.png` | 64 × 40 px | 白描边 1px，圆角 4px，中间放键名文字 |
| 监听态 | `btn_keybind_listening.png` | 64 × 40 px | 描边改为 `color-accent`，微闪烁动效 |

### 2.9 危险按钮 (Danger Button)

| 状态 | 文件名 | 尺寸 | 备注 |
|:---|:---|:---|:---|
| 常态 | `btn_danger_normal.png` | 240 × 48 px | 描边 `color-danger`，填充透明 |
| 悬停 | `btn_danger_hover.png` | 240 × 48 px | 填充 `color-danger` @ 20% |

### 2.10 模式指示点 (Mode Indicator Dots)

| 状态 | 文件名 | 尺寸 |
|:---|:---|:---|
| 未选中 | `dot_inactive.png` | 10 × 10 px |
| 选中 | `dot_active.png` | 10 × 10 px |

---

## 三、图标清单 (Icon List)

所有图标统一规格：
- **画布尺寸**：48 × 48 px（含 4px 安全边距，可视区域 40 × 40 px）
- **描边粗细**：2px（极简线条风，与 Monument Valley 风格一致）
- **颜色**：纯白 `#FFFFFF`（运行时由程序着色）
- **格式**：优先 SVG（矢量无损），备选 PNG @2x（96 × 96 px）
- **风格**：圆角线条图标（Rounded Outline），禁止使用填充实心风格

### 3.1 主界面图标

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 01 | 开始 | `ic_play.svg` | 三角形播放箭头 |
| 02 | 设置 | `ic_settings.svg` | 齿轮 |
| 03 | 关于 | `ic_info.svg` | 圆形内字母 i |
| 04 | 左箭头 | `ic_arrow_left.svg` | 尖括号 `<` 形 |
| 05 | 右箭头 | `ic_arrow_right.svg` | 尖括号 `>` 形 |
| 06 | 返回 | `ic_back.svg` | 左箭头 + 短横线 `← 返回` |

### 3.2 设置界面 — 通用区图标

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 07 | 语言/地球 | `ic_language.svg` | 地球仪线条 |
| 08 | 震动 | `ic_vibration.svg` | 手机震动波纹 |
| 09 | 计时器 | `ic_timer.svg` | 秒表 |
| 10 | 删除/垃圾桶 | `ic_delete.svg` | 垃圾桶轮廓 |

### 3.3 设置界面 — 画面区图标

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 11 | 全屏 | `ic_fullscreen.svg` | 四角扩展箭头 |
| 12 | 画质 | `ic_quality.svg` | 显示器 / 分辨率方格 |
| 13 | 抗锯齿 | `ic_antialiasing.svg` | 对角线 + 平滑曲线 |
| 14 | 泛光 | `ic_bloom.svg` | 太阳/光芒放射 |

### 3.4 设置界面 — 控制区图标

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 15 | 鼠标 | `ic_mouse.svg` | 鼠标轮廓 |
| 16 | 灵敏度 | `ic_sensitivity.svg` | 十字准星 |
| 17 | 反转轴 | `ic_invert_axis.svg` | 上下双向箭头 |
| 18 | 键盘 | `ic_keyboard.svg` | 键盘轮廓 |
| 19 | 手柄 | `ic_gamepad.svg` | 游戏手柄轮廓 |

### 3.5 设置界面 — 音频区图标

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 20 | 主音量 | `ic_volume_master.svg` | 喇叭 + 三级声波 |
| 21 | 音乐 | `ic_music.svg` | 音符 ♪ |
| 22 | 音效 | `ic_sfx.svg` | 声波 / 波形 |
| 23 | UI 音效 | `ic_volume_ui.svg` | 喇叭 + 点击提示 |

### 3.6 关于界面图标

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 24 | 开发 | `ic_code.svg` | 代码括号 `</>` |
| 25 | 设计 | `ic_design.svg` | 铅笔 / 画笔 |
| 26 | 美术 | `ic_art.svg` | 调色盘 |
| 27 | 音乐制作 | `ic_headphones.svg` | 耳机 |
| 28 | 测试 | `ic_bug.svg` | 虫子 / 放大镜 |
| 29 | 发行 | `ic_publish.svg` | 火箭 |
| 30 | 感谢/爱心 | `ic_heart.svg` | 心形 |
| 31 | 版本号 | `ic_version.svg` | 标签 / Tag |

### 3.7 手柄按键图标（热插拔专用）

| # | 图标名 | 文件名 | 描述 |
|:---|:---|:---|:---|
| 32 | Xbox A | `ic_xbox_a.svg` | 绿色 A 按键 |
| 33 | Xbox B | `ic_xbox_b.svg` | 红色 B 按键 |
| 34 | Xbox X | `ic_xbox_x.svg` | 蓝色 X 按键 |
| 35 | Xbox Y | `ic_xbox_y.svg` | 黄色 Y 按键 |
| 36 | PS ○ | `ic_ps_circle.svg` | 圆形按键 |
| 37 | PS × | `ic_ps_cross.svg` | 叉形按键 |
| 38 | PS □ | `ic_ps_square.svg` | 方形按键 |
| 39 | PS △ | `ic_ps_triangle.svg` | 三角按键 |
| 40 | 左摇杆 | `ic_stick_left.svg` | 左摇杆示意 |
| 41 | 右摇杆 | `ic_stick_right.svg` | 右摇杆示意 |

> **注**：手柄图标为 **Phase 2** 资产，优先级低于键鼠图标。首版可暂不制作。

---

## 四、资源命名规范 (Naming Convention)

### 4.1 前缀分类

| 前缀 | 类别 | 示例 |
|:---|:---|:---|
| `ic_` | Icon 图标 | `ic_settings.svg` |
| `bg_` | Background 背景底图 | `bg_panel_glass.png` |
| `btn_` | Button 按钮切图 | `btn_capsule_normal.png` |
| `slider_` | Slider 滑条组件 | `slider_thumb.png` |
| `toggle_` | Toggle 开关组件 | `toggle_on.png` |
| `dropdown_` | Dropdown 下拉框 | `dropdown_closed.png` |
| `dot_` | Indicator 指示器 | `dot_active.png` |
| `dec_` | Decoration 装饰元素 | `dec_tab_underline.png` |
| `font_` | Font 字体文件 | `font_outfit_regular.ttf` |

### 4.2 状态后缀

| 后缀 | 含义 |
|:---|:---|
| `_normal` | 常态 |
| `_hover` | 鼠标悬停 |
| `_pressed` | 按下 |
| `_disabled` | 禁用 |
| `_active` | 激活/选中 |
| `_inactive` | 未激活 |
| `_listening` | 等待输入（键位监听） |

### 4.3 完整命名规则

```
[前缀]_[功能名]_[状态后缀].[扩展名]
```

示例：
- `btn_capsule_hover.png`
- `ic_volume_master.svg`
- `toggle_on.png`
- `slider_fill.png`
- `btn_keybind_listening.png`

### 4.4 FairyGUI 包结构建议

```
FairyGUI Project
└── InterwovenUI (Package)
    ├── Atlas/
    │   ├── atlas_common.png      ← 通用图标打包图集
    │   └── atlas_settings.png    ← 设置界面专用图集
    ├── Components/
    │   ├── MainMenu.xml          ← 主界面根组件
    │   ├── SettingsPanel.xml     ← 设置面板（长列表）
    │   ├── AboutPanel.xml        ← 关于界面
    │   ├── CapsuleButton.xml     ← 胶囊按钮（可复用）
    │   ├── SliderItem.xml        ← 滑条行（可复用）
    │   ├── ToggleItem.xml        ← 开关行（可复用）
    │   ├── DropdownItem.xml      ← 下拉行（可复用）
    │   ├── KeybindItem.xml       ← 键位绑定行（可复用）
    │   └── ModeSelector.xml      ← 模式切换器
    └── Fonts/
        └── font_outfit.ttf
```

---

## 五、导出清单总览 (Export Checklist)

| 优先级 | 类别 | 数量 | 备注 |
|:---|:---|:---|:---|
| P0 必需 | 面板底图 (9-slice) | 1 张 | `bg_panel_glass.png` |
| P0 必需 | 胶囊按钮 (3 态) | 3 张 | Normal / Hover / Pressed |
| P0 必需 | 滑条组件 | 3 张 | Track / Fill / Thumb |
| P0 必需 | 开关组件 | 3 张 | On / Off / Knob |
| P0 必需 | 主界面图标 | 6 个 | ic_play ~ ic_back |
| P0 必需 | 设置图标（通用+画面+控制+音频） | 17 个 | ic_language ~ ic_volume_ui |
| P1 重要 | 模式切换器 | 2 张 | Normal / Hover |
| P1 重要 | 页签下划线 | 1 张 | `dec_tab_underline.png` |
| P1 重要 | 下拉框组件 | 3 张 | Closed / Open / Item Hover |
| P1 重要 | 键位绑定框 | 2 张 | Normal / Listening |
| P1 重要 | 危险按钮 | 2 张 | Normal / Hover |
| P1 重要 | 指示点 | 2 张 | Active / Inactive |
| P1 重要 | 关于界面图标 | 8 个 | ic_code ~ ic_version |
| P2 延后 | 手柄按键图标 | 10 个 | Xbox + PS 系列 |
| **合计** | | **≈ 61 项资产** | |

---

## 六、制作工具建议

| 工具 | 用途 | 备注 |
|:---|:---|:---|
| **Figma** | 矢量图标 + 切图导出 | 推荐主力，支持 SVG 导出 |
| **Iconify / Lucide** | 开源线条图标库 | 可作为底稿，修改后符合项目风格 |
| **TinyPNG** | PNG 压缩 | 导出后统一压缩 |
| **SVGO** | SVG 优化 | 清理冗余路径数据 |

> **美术总监提示**：如果时间紧张，图标部分可以直接从 [Lucide Icons](https://lucide.dev) 或 [Tabler Icons](https://tabler.io/icons) 中挑选风格最接近的线条图标，统一调整描边为 2px，导出白色 SVG 即可。不需要从零手绘。
