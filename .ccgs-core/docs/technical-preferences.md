# 技术偏好 (Technical Preferences)

<!-- 由 /setup-engine 填充。所有 Agent 引用此文件获取项目特定标准和约定。 -->

## 引擎与语言

- **引擎**: 原生 Canvas 2D API（无框架，无 WebGL）
- **语言**: JavaScript (ES6+)，严格模式
- **渲染**: Canvas 2D Context，2.5D 投影（Bottom-Center 锚点）
- **物理**: 自研 AABB 碰撞检测 + 弹珠反弹物理
- **音频**: Web Audio API（AudioContext + 音频池复用）

## 输入与平台

- **目标平台**: Web (PC + Mobile)
- **输入方式**: 鼠标/键盘 (PC)、触屏 (Mobile)
- **主要输入**: 鼠标拖拽瞄准 + 点击发射
- **手柄支持**: None
- **触屏支持**: Full（策略模式自动切换）
- **平台约束**: 无安装，浏览器直接运行；需考虑标签页切换和可见性 API

## 命名约定

- **类名**: PascalCase（如 `BoonManager`, `SpatialGrid`）
- **变量**: camelCase（如 `moveSpeed`, `critChance`）
- **事件**: camelCase 动词短语（如 `onMarbleHit`, `onEnemyDeath`）
- **文件**: PascalCase.js（如 `Player.js`, `BoonManager.js`）
- **常量**: UPPER_SNAKE_CASE（如 `MAX_MARBLES`, `POOL_SIZE`）
- **资产**: 小写+下划线（如 `player_idle_01.png`）

## 性能预算

- **目标帧率**: 60 FPS
- **帧预算**: 16.6ms
- **最大活跃实体**: 200（含弹珠+敌人+物品）
- **对象池策略**: swap-and-pop，禁止 splice
- **序列帧预算**: 单个动画最大 16 帧
- **碰撞检测**: SpatialGrid 分区，位运算键
- **内存上限**: 无显式限制，但需控制纹理总量

## 测试

- **框架**: 待建立（Vitest 或原生测试）
- **最低覆盖率**: 核心数值公式 100%
- **必测项**: 伤害公式、暴击计算、五行共鸣、经济平衡

## 禁止模式

- 硬编码数值（必须走 Config.js 配置化）
- `Array.splice()` 在高频路径（用 swap-and-pop）
- `new` 在战斗循环中（必须走对象池）
- `setTimeout` / `setInterval`（用 requestAnimationFrame）
- 直接 DOM 操作（渲染统一走 Canvas）
- `eval()` 或 `Function()` 构造
- 同步 XHR 请求

## 允许的外部依赖

- 无第三方运行时依赖（纯原生）
- 开发工具: Python 脚本（资产处理）、Node.js（可选构建）

## 架构决策日志

- [尚无 ADR — 使用 /architecture-decision 创建]

## 引擎专家

<!-- 本项目无传统引擎，以下为等效配置 -->

- **主要专家**: `gameplay-programmer`（所有游戏逻辑）
- **渲染专家**: `technical-artist`（Canvas 2D 渲染管线）
- **UI 专家**: `ui-programmer`（Canvas 原生 UI 绘制）
- **音频专家**: `sound-designer`（Web Audio API）
- **路由说明**: 所有代码审查统一由 `gameplay-programmer` 处理

### 文件扩展名路由

| 文件类型 | 负责 Agent |
|---------|-----------|
| `js/` 游戏代码 | `gameplay-programmer` |
| `assets/img/` 图片资产 | `technical-artist` |
| `assets/audio/` 音频 | `sound-designer` |
| `*.json` 配置数据 | `gameplay-programmer` |
| `design/gdd/*.md` 设计文档 | `game-designer` |
| `design/ux/*.md` UX 规范 | `ux-designer` |
| 架构审查 | `lead-programmer` |
