# 交错空间 — 系统索引 (Systems Index)

> **用途**：所有 GDD 系统的快速索引，供 Agent 在 Phase 0 上下文加载时扫描。
> **维护规则**：每次新增 GDD 章节后，同步更新本文件。
> **版本**：1.0

---

## 系统列表

| # | 系统名称 | GDD 文件 | 层级 | 状态 |
|:---|:---|:---|:---|:---|
| 01 | 游戏总览 | `01-game-overview.md` | Foundation | ✅ 已完成 |
| 02 | 玩家操控与交互 | `02-player-controls.md` | Core | ✅ 已完成 |
| 03 | 塔系统与窗口语义 | `03-tower-system.md` | Core | ✅ 已完成 |
| 04 | 关卡生成 (PCG) | `04-level-generation.md` | Core | ✅ 已完成 |
| 05 | 方块类型与地块规则 | `05-block-traversal.md` | Core | ✅ 已完成 |
| 06 | DDA 与心流系统 | `06-dda-flow-theory.md` | Feature | ✅ 已完成 |
| 07 | 视觉表现与认知负荷 | `07-rendering-visual.md` | Presentation | ✅ 已完成 |
| 08 | AR 实体交互 | `08-ar-interaction.md` | Feature | ✅ 已完成 |
| 09 | 数值配置与数据驱动 | `09-numerical-config.md` | Foundation | ✅ 已完成 |
| 10 | 开发阶段路线图 | `10-development-roadmap.md` | Foundation | ✅ 已完成 |
| 11 | 学术理论支撑 | `11-academic-foundation.md` | Foundation | ✅ 已完成 |
| 12 | 音频设计 | `12-audio-design.md` | Presentation | ✅ 已完成 |
| 13 | 本地化设计 | `13-localization.md` | Polish | ✅ 已完成 |
| 14 | UI与UX交互设计 | `14-ui-ux-design.md` | Presentation | 📝 草案 |
| — | 交叉引用图 | `cross-references.md` | Meta | ✅ 已完成 |

---

## 设计顺序 (Design Order)

```
Foundation (01, 09, 10, 11)
    ↓
Core (02, 03, 04, 05)
    ↓
Feature (06, 08)
    ↓
Presentation (07, 12, 14)
    ↓
Polish (13)
```

---

## 核心耦合关系

```
03 塔系统 ←→ 04 关卡生成 ←→ 05 方块规则   (核心三角)
04 关卡生成 ←→ 06 DDA ←→ 09 配置表         (数值闭环)
02 操控 → 03 塔系统 → 12 音频              (输入链)
11 学术 → 06 DDA → 04 关卡生成             (学术链)
```

详细依赖矩阵见 `cross-references.md`。
