# ADR-0008: Luban 配置表的全局注入与访问模式

## 状态: Accepted
## 日期: 2026-04-24
## 决策者: Technical Director + Developer

---

## 上下文 (Context)

游戏拥有极高的数值与配置复杂度，包括方块模型（BlockModel）、塔段规则（SegmentRule）、DDA 难度曲线（DDARule）、视觉表现（VisualConfig）等数十张配置表。
这些配表数据同时被以下三层代码高频读取：
1. **Presentation 层**: 根据配置加载对应 Asset 路径（如 `CubeViewFactorySys`）。
2. **Feature/Core 层**: 游戏生成与难度算法严格依赖配表约束（如 `TowerGeneratorSys`、`AdaptiveTowerDdaProvider`）。
3. **Foundation 层**: 数据存储和流转可能需要主键校验。

如何管理和传递这些配置数据，使得核心逻辑既不用写满繁杂的依赖注入参数，又能在后续方便地做单元测试？

### 核心决策议题

1. Core 层是否可以直接依赖配置表？
2. 配置表实例应该通过依赖注入 (DI) 层层传递，还是使用全局单例 (Singleton/Static) 访问？

---

## 决策 (Decision)

### 1. 采用全局静态访问点 (`Cfg.Tables`)
全面采用 `Cfg.Tables.TbXxx.Get(id)` 这种全局静态属性的方式来读取 Luban 配置表。抛弃通过构造函数或方法参数层层传递 `Tables` 实例的强依赖注入（DI）做法。

**优势**:
- **极简的 API 设计**: 核心层算法（如 `AdaptiveTowerDdaProvider`）中不需要到处传递 `Tables`，这极大简化了状态机、PCG 算法和 DDA 控制器的构造函数。
- **无GC开销**: `Cfg.Tables` 在内存常驻，读取是纯引用传递。

### 2. Core 层的表强依赖
允许 Core 层的核心逻辑直接依赖 `cfg.xxx` 命名空间下的配置结构。即：逻辑层不是通过抽象接口定义数据源，而是直接与 Luban 生成的数据结构绑定。

**理由**:
- Luban 本身就已经是一个强类型的数据提供者，没必要在 Core 层再手写一层 Wrapper 接口，那样会带来过度的样板代码 (Boilerplate) 负担。
- 如果需要 Headless 的单元测试，可以在测试入口中直接初始化一个 Mock 版的 `Cfg.Tables`。

---

## 已知的技术债务与改进方向

### TD-014: 静态引用的生命周期管理
目前的 `Cfg.Tables` 是静态单例。如果在未来的热更新场景下需要“动态重载配置表”（Reload），目前的静态绑定可能导致旧引用未被回收。由于本项目目前无长连接热更配置需求（关卡都是切场景时加载），暂可接受。

---

## GDD 需求覆盖 (GDD Requirements Addressed)

| Req ID | 需求 | 覆盖方式 |
|:---|:---|:---|
| TR-09-001 | Luban 配表注入 | ✅ 通过静态单例模式 `Cfg.Tables` 注入全项目，提供各层同步读取能力。 |

---

## 引擎兼容性 (Engine Compatibility)

- 兼容 Luban 官方的 JSON/ByteBuf 生成器结构。
- 纯 C# 实现，没有任何 Unity 依赖。

---

## ADR 依赖 (ADR Dependencies)

- **Depends On**: 无
- **Depended By**: ADR-0005 (PCG 算法依赖其读取生成规则), ADR-0007 (DDA 依赖其读取分数阈值)
