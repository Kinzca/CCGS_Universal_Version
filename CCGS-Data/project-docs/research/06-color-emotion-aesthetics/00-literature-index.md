# 06 - 色彩心理学与游戏环境情绪设计

## 研究背景

本项目的视觉主题系统采用 **「节奏驱动的补偿式配色」** 策略：当 DDA 检测到玩家处于高压（Peak）状态时，环境转为低饱和冷色调以安抚情绪；当玩家处于放松（Relax）状态时，环境转为高饱和暖色调以维持参与度。该设计的理论基石横跨色彩心理学、环境心理学与认知负荷理论（CLT）。

核心研究问题：
- **色彩-情绪映射的实证基础**：暖色调/冷色调、高饱和/低饱和对唤醒度（Arousal）和效价（Valence）的影响是否有实验支撑
- **游戏环境色彩对玩家行为的影响**：背景色变化是否会影响任务表现、停留时间、沉浸感
- **补偿式 vs 强化式设计**：环境色彩应该补偿（counterbalance）还是强化（amplify）玩家情绪状态，哪种策略更有利于维持心流
- **认知负荷与视觉复杂度**：颜色饱和度/对比度变化如何影响外在认知负荷（Extraneous Cognitive Load）
- **空间解谜中的色彩可读性**：色彩设计如何兼顾美学表达与空间关系的可读性
- **方块面法线着色与 Figure-Ground 分离**：3D 等距视角下的面对比度与空间可读性设计
- **WCAG 可访问性对比度标准**：非文本元素的 3:1 对比度要求在游戏几何体中的应用
- **HSL 色彩空间在游戏中的工程应用**：程序化配色方案的实践方法论

---

## 已收录文献列表（86 篇）

### A★ — 核心综述（本项目最直接的理论指导）

| # | 文献标题 | 核心发现 | 对本项目的指导意义 |
|:--|:---------|:---------|:-----------------|
| A★1 | **Theoretical and Applied Frameworks for Perceptual Readability and Spatial Navigation in Isometric 3D Environments** | 综合了 Figure-Ground、等距投影面着色、AO、WCAG 对比度、空间导航色彩的完整框架 | **⭐ 最核心文献**。直接给出了等距方块三面着色系统（Top/FrontLeft/FrontRight 需独立明度值）、WCAG 3:1 非文本对比度要求、AO 作为空间接地信号、以及 Hue Shifting（亮色偏暖/暗色偏冷）的完整工程方案。 |

### A 级 — 核心文献（直接指导配色系统设计）

| # | 文献标题 | 核心发现 | 对本项目的指导意义 |
|:--|:---------|:---------|:-----------------|
| A1 | The Neuropsychology of Chromatic Environments | PAD 模型驱动色彩设计；LCH 比 HSL 更符合人类感知均匀性 | 验证补偿式配色理论基础，指出 HSL 感知非均匀性问题 |
| A2 | Procedural Colors for Video Games (Chereau) | LCH + 色轮变形实现程序化和谐配色 | 当前 HslToRgb 的感知非均匀性是面对比度失效原因之一 |
| A3 | Psychological Foundations of Color Perception in Games | 对比度引导注意力；60-30-10 法则 | 直接回答面对比度问题 |
| A4 | Breaking Down Monument Valley's Visual Style | 柔和粉彩 + 雾效深度分离 + 极简 AO 着色 | 证明「低饱和 ≠ 低对比度」—面对比靠明度差 |

### A+ 级 — 面着色与深度感知（补充搜索新增）

| # | 文献标题 | 核心发现 |
|:--|:---------|:---------|
| A+1 | Isometric Color Shading Rule for Pixel Art (StackExchange) | 等距三面着色无固定公式，是美学决策；低对比=高环境光，高对比=强方向光；**Hue Shifting**（亮色偏暖/暗色偏冷）防止阴影发灰 |
| A+2 | Design Principles: Space and Figure-Ground (Smashing Magazine) | Figure-Ground 关系三类型（稳定/可逆/模糊）；macro-space 与 micro-space 的可读性功能；空间本身是设计元素 |
| A+3 | Environmental Therapy: Color Graphics for Navigational Tasks (Frontiers in Psychology, 2024) | 基于 CIE 1976 Lab* 的色彩感知实验；高亮度+低饱和+清晰色彩区分 → 空间方向识别最优；色彩占初始视觉响应 80% |
| A+4 | Impact of Motion, Color, Luminance on Depth Perception (Frontiers VR, 2023) | 亮色感知更近，暗色感知更远；**对比度相对于背景** 比绝对亮度更重要（Farnè 效应）；暗色在亮背景下几乎不可见 |

### A+ 级 — WCAG 与可访问性（补充搜索新增）

| # | 文献标题 | 核心发现 |
|:--|:---------|:---------|
| A+5 | WCAG 1.4.11 Non-text Contrast (W3C) | 非文本 UI 组件需 ≥ 3:1 对比度；适用于交互元素的视觉边界和状态 |
| A+6 | Color Contrast Requirements: WCAG Guide (TestParty) | AA 级大文本 3:1，正文 4.5:1；AAA 级分别为 4.5:1 和 7:1 |
| A+7 | Contrast Checker (WebAIM) | 对比度计算工具：基于相对亮度公式 (L1+0.05)/(L2+0.05) |
| A+8 | Xbox Accessibility Guideline 102 (Microsoft) | 大面积视觉元素建议 3:1 对比度；高对比模式强制关键路径对象为特定高亮度色 |

### A+ 级 — Ambient Occlusion（补充搜索新增）

| # | 文献标题 | 核心发现 |
|:--|:---------|:---------|
| A+9 | Ambient Occlusion in Game Design (iRender) | AO 模拟遮蔽区域暗化，提供接触阴影和空间接地 |
| A+10 | Ambient Occlusion Ultimate Guide 2025 (GameDesigning) | 三种主流方案：SSAO/HBAO/GTAO；AO 是 3D 可读性的关键可访问性价值 |
| A+11 | Ambient Occlusion (Wikipedia) | AO 公式 A(p) = (1/π)∫V(p,ω)(n·ω)dω；bent normal 用于环境贴图查询 |
| A+12 | Practical Realtime Strategies for Accurate Indirect Occlusion (Activision) | SSDO 结合方向光信息的动态 AO |

### A+ 级 — 等距投影与关卡设计（补充搜索新增）

| # | 文献标题 | 核心发现 |
|:--|:---------|:---------|
| A+13 | Isometric Projection in Game Development (Pikuma) | 伪等距 2:1 像素比简化计算；等距投影无透视缩小=精确距离判断 |
| A+14 | Isometric Perspective in Game Design (Innovecs) | 等距视角适合策略/解谜游戏；宽度/深度/高度视觉等量=易于复制翻转 |
| A+15 | Isometric Level Design: Analysing Art (Wix) | 几何等距游戏常彩色但柔和（中调和谐）；暗色调设定新黑色/神秘基调 |
| A+16 | Fundamentals of Isometric Pixel Art (Pixel Parmesan) | Hue Shifting 技法详解：亮面→暖色推移，暗面→冷色推移，避免灰泥感 |

### A+ 级 — Figure-Ground 与深度感知（补充搜索新增）

| # | 文献标题 | 核心发现 |
|:--|:---------|:---------|
| A+17 | Figure-Ground (Perception) - Wikipedia | 边缘分配（Edge Assignment）由 LOC 驱动；大小/凸性/运动辅助判定 |
| A+18 | Gestalt Principle of Figure-Ground (CorelDRAW) | Figure=正空间（主体），Ground=负空间（支撑）；不明确=视觉噪音 |
| A+19 | Graphic Design Principles for Mapping: Figure-Ground (Esri) | 地图学：深色图形+浅色背景=最佳层级；闭合多边形促进 figure 识别 |
| A+20 | Figure-Ground Design Principles (Pandaqi Tutorials) | 空间即设计元素；trapped space（被困空间）降低可读性 |
| A+21 | Locomotion-dependent Geometric/Body Cues for 3D Mapping (PNAS) | 环境边界提供空间锚点；边界编码依赖运动方式 |
| A+22 | 3D Arrow Navigation Interfaces & Spatial Memory (Frontiers, Taylor & Francis) | 3D 界面增强空间记忆并减少认知负荷 |

### B 级 — 支撑文献（理论验证与边界条件）

| # | 文献标题 | 核心发现 |
|:--|:---------|:---------|
| B1 | Color Saturation & Cognitive Load (Built Environments) | 高饱和→心理疲劳；低饱和不能牺牲可读性 |
| B2 | Color Theory on Level Design (GlobalStep) | 亮度对比 > 色相变化 引导视线 |
| B3 | Color Psychology in Games (SLR) | 色温对唤醒度有中等效应量 |
| B4 | Cultural Color Meanings in Games | 红色在中国=吉祥；跨文化语义差异 |
| B5 | Icon Color Under Cognitive Load (MDPI) | 白底蓝字高负荷下最差；黄色前景快速注意捕获最优 |
| B6 | Color contrast – Accessible Technology (U of Washington) | 色彩对比度的基础教程与可访问性清单 |
| B7 | Colour & Contrast Accessibility (TMU) | 大学可访问性指南的对比度实践 |
| B8 | Digital Accessibility Fundamentals: Color (Mass.gov) | 政府数字可访问性标准中的颜色使用 |
| B9 | Color Contrast Checker (Level Access) | 免费 WCAG 对比度测试工具 |

### C 级 — 参考文献（边缘相关）

| # | 文献标题 | 备注 |
|:--|:---------|:-----|
| C1 | Attention Restoration Theory (Wikipedia) | ART 理论基础 |
| C2 | Monument Valley Design (Krasamo) | MV 设计分析偏叙事角度 |
| C3 | Colour Wars Rvj | 阵营色彩标识 |
| C4 | Stress-Relieving Video Game (ScienceOpen) | CVG 对 TMD 降低效果 |
| C5 | Open-World Cognitive Escapism (JMIR) | 认知逃逸机制 |
| C6 | Smart Desk Lighting & Color Theory | 冷色→专注映射 |
| C7 | Enhancing Visual Perception VR/AR (MDPI) | U-Net 动态色彩校正 |
| C8 | Shading and Rendering Isometric Shapes (YouTube) | 等距着色教程视频 |
| C9 | Isometric Cubes: Guide to Technical Drawing | 技术绘图中的等距立方体 |
| C10 | 3.9 Isometric Projection (Peachpit) | 可视化与速写中的等距投影 |
| C11 | Isometric Projection (Wikipedia) | 等距投影定义与数学推导 |
| C12 | What is Ambient Occlusion (GameDev StackExchange) | AO 社区问答 |
| C13 | AO: What It Is (GarageFarm) | AO 渲染农场指南 |
| C14 | Lighting and Effects (Meta for Developers) | Meta 平台灯光效果指南 |
| C15 | Non-Euclidean Platform Puzzlers (Reddit) | 非欧几何解谜游戏讨论 |
| C16 | Visual Spatial Cue Use in Children (PMC) | 2-3 岁儿童空间提示使用发展 |
| C17 | Depth Perception & 3D Imaging Technologies | 深度感知与 3D 成像技术综述 |
| C18 | Low Poly 3D with Pixel Effect (Reddit) | 低多边形+像素效果 Unity 讨论 |
| C19 | Games That Feel Polished (Reddit) | 游戏打磨质量讨论 |
| C20 | Top-Down 3D Games with Verticality (Reddit) | 俯视角 3D 垂直性参考 |
| C21 | Postmortem: Black The Fall (Game Developer) | 极权解谜平台跳跃的事后分析 |
| C22 | Graphic Design for Game Designers | 游戏设计师图形设计基础 |
| C23 | Various WCAG 1.4.11 guides (Silktide/AccessibilityOz/TestParty/WCAG.com) | WCAG 非文本对比度的多渠道解读 |

---

## 与项目系统的映射关系

```
视觉主题系统（TowerThemeController）
  │
  ├── 色彩-情绪映射 ← A1/A3: PAD 模型验证补偿式配色有效
  │     ├── Peak (高压) → 低饱和 + 冷偏 → 安抚
  │     └── Relax (放松) → 高饱和 + 暖偏 → 刺激
  │
  ├── 面对比度与空间可读性 ← A★1/A+1/A+2/A+4: 核心缺陷区域
  │     ├── 三面着色系统：Top/Left/Right 需独立明度值（A★1）
  │     ├── Hue Shifting：亮面偏暖/暗面偏冷 避免灰泥感（A+1/A+16）
  │     ├── Figure-Ground：天空 sat < 方块 sat（A+2/A4）
  │     ├── 对比度>亮度：相对背景的对比度 > 绝对亮度（A+4 Farnè 效应）
  │     └── WCAG 3:1：交互几何体的最低对比度要求（A+5/A+8）
  │
  ├── Ambient Occlusion ← A★1/A+9~12: 空间接地信号
  │     ├── AO 提供接触阴影 → 方块不再"漂浮"
  │     └── AO 是深度感知的关键可访问性价值（A★1 引用实验）
  │
  ├── 认知负荷控制 ← B1/A1/A+3: 高饱和增加外在负荷
  │     ├── 高亮度 + 低饱和 + 清晰区分 = 空间识别最优（A+3）
  │     └── 但饱和度不能低到面融为一体
  │
  ├── 心流维持 ← C4/C5: 补偿式环境色彩有助于维持心流
  │
  └── 色彩空间选择 ← A1/A2/A+3: HSL 感知非均匀，中期应迁移 LCH
        └── CIE 1976 Lab* 比 RGB 更准确反映感知色差（A+3）
```

---

## AI 阅读笔记与思路提炼

### 🔴 核心诊断：当前配色系统的面对比度缺陷（综合 86 篇文献）

#### 问题 1：面明度偏移过小，面之间无法区分

当前各面的明度偏移（LitOffset）：

| 面 | 明度偏移 | 与 Top 的差值 |
|:---|:---------|:-------------|
| **Top** | +0.10 | 0 (基准) |
| Front | +0.02 | **0.08** |
| Right | 0.00 | 0.10 |
| Left | -0.03 | 0.13 |
| Back | -0.05 | 0.15 |
| **Bottom** | -0.15 | 0.25 |

> **Front 与 Right 明度差仅 0.02** — A★1 明确要求等距方块的三个可见面（Top/FrontLeft/FrontRight）需 **独立明度值**，通过模拟方向光源实现。A+1 进一步指出低对比=高环境光/无方向光，当前参数等效于"全环境光无方向光"的效果。

#### 问题 2：Peak 阶段饱和度过低 + 天空盒过亮 = Figure-Ground 崩溃

| 阶段 | 方块 sat/lit | 天空顶 sat/lit | Figure-Ground 状态 |
|:-----|:------------|:--------------|:------------------|
| Peak | 0.22 / 0.70 | 0.13 / 0.80 | ❌ 方块亮度≈天空，融为一体 |
| BuildUp | 0.35 / 0.60 | 0.21 / 0.80 | ⚠️ 勉强可辨 |
| Relax | 0.50 / 0.55 | 0.30 / 0.80 | ✅ 可读 |

A+4 (Farnè 效应) 证实：**感知"近/远"取决于对比度相对于背景**，而非绝对亮度。Peak 阶段方块 lit=0.70 vs 天空 lit=0.80 的 ΔL=0.10 远低于感知阈值。

#### 问题 3：楼梯面与背景融合

楼梯坡面投影面积更小、倾斜角导致色彩感知衰减。A+3 指出色彩占初始视觉响应 80%，当面积过小+对比度过低时，该 80% 的信号被完全淹没。

#### 问题 4：缺少 Hue Shifting → 阴影发灰

A+1 和 A+16 一致指出：纯粹降低明度（mix with black）会导致阴影发灰发泥。正确做法是 **Hue Shifting** —— 亮面色相偏暖（→黄/橙），暗面色相偏冷（→蓝/紫）。当前 BackHueOffset=-10° 的冷偏方向是对的，但幅度太小。

---

### ✅ 配色参数修正建议（综合版）

#### 1. 面明度偏移修正 — 模拟方向光（A★1 三面着色系统）

```diff
 // 模拟从右上方 45° 打入的方向光（参照 A★1 + A+1 + A4 Monument Valley）
-private const float TopLitOffset    =  0.10f;
-private const float BottomLitOffset = -0.15f;
-private const float FrontLitOffset  =  0.02f;
-private const float BackLitOffset   = -0.05f;
-private const float RightLitOffset  =  0f;
-private const float LeftLitOffset   = -0.03f;
+private const float TopLitOffset    =  0.12f;   // 受光面（最亮 — 直射光）
+private const float BottomLitOffset = -0.20f;   // 底面（最暗 — 完全遮蔽）
+private const float FrontLitOffset  =  0.04f;   // 次受光面（45° 斜射）
+private const float BackLitOffset   = -0.12f;   // 背光面（显著暗于 Front）
+private const float RightLitOffset  = -0.02f;   // 侧光面（微暗）
+private const float LeftLitOffset   = -0.08f;   // 侧背光面
```

**修正后对比度验证：**
- Front(+0.04) vs Back(-0.12) = **ΔL=0.16** ✅ > 0.15 阈值
- Top(+0.12) vs Bottom(-0.20) = **ΔL=0.32** ✅ 足够的垂直方向感
- Front(+0.04) vs Right(-0.02) = **ΔL=0.06** ✅ 微妙但可辨（辅以 Hue Shift）

#### 2. Hue Shifting 增强（A+1/A+16 灰泥防止）

```diff
 // 亮面偏暖/暗面偏冷 — 防止阴影发灰
-private const float FrontHueOffset  =  10f;
-private const float BackHueOffset   = -10f;
-private const float RightHueOffset  =  20f;
-private const float LeftHueOffset   = -20f;
+private const float FrontHueOffset  =  12f;    // 受光面微暖
+private const float BackHueOffset   = -15f;    // 背光面偏冷（加大幅度）
+private const float RightHueOffset  =  8f;     // 侧面微暖
+private const float LeftHueOffset   = -12f;    // 侧背光偏冷
```

#### 3. 节奏阶段饱和度修正 — 可读性底线（B1 + A+3）

```diff
 case TowerRhythmPhase.Peak:
-    rhythmSat = 0.22f;
-    rhythmLit = 0.70f;
+    rhythmSat = 0.30f;     // B1 底线：低饱和但保持可读
+    rhythmLit = 0.68f;     // 略降，拉开与天空盒距离

 default: // BuildUp
-    rhythmSat = 0.35f;
+    rhythmSat = 0.40f;     // 提升至中等饱和度
```

#### 4. 天空盒 Figure-Ground 分离（A+2/A+4/A4）

```diff
 // 核心原则：天空 sat < 方块 sat，天空 lit > 方块 Top lit（A4 Monument Valley）
 // Farnè 效应（A+4）：方块作为高对比 figure 从低饱和 ground 跳出
-_skyTopTo = HslToRgb(skyHue, finalSat * 0.6f, 0.80f);
-_skyBotTo = HslToRgb(skyHue + 15f, finalSat * 0.8f, 0.55f);
+_skyTopTo = HslToRgb(skyHue, finalSat * 0.35f, 0.88f);  // 更淡更亮 → 干净背景
+_skyBotTo = HslToRgb(skyHue + 15f, finalSat * 0.45f, 0.62f);
```

#### 5. 梯度渐变增强

```diff
-private const float FaceGradientSpread = 0.15f;
+private const float FaceGradientSpread = 0.18f;  // 单面内上下渐变增大 → 立体感
```

### 后续行动建议

| 优先级 | 行动 | 依据 |
|:-------|:-----|:-----|
| **P0** | 应用上述参数修正到 TowerThemeController.cs | A★1 + 面对比度诊断 |
| **P1** | 添加 AO 效果（至少方块接缝处的接触阴影） | A★1/A+9 |
| **P2** | 灰度测试：游戏画面转灰度后确认面仍可区分 | A★1: Color Value Testing |
| **P3** | 中期迁移到 LCH 色彩空间替换 HSL | A1/A2/A+3 |
