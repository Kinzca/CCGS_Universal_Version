# 设计文档规则 (Design Document Rules)

> **适用路径**: `CCGS-Data/design/gdd/`, `CCGS-Data/design/quick-specs/`
> **原 CCGS 对应**: `.claude/rules/design-docs.md`

- 所有设计文档使用 Markdown 格式
- 每个 GDD 必须包含 **8 个必要章节**（见 coding-standards.md）
- 公式必须定义所有变量、取值范围和边界条件
- 平衡数值必须链接其来源公式或设计理由
- 跨系统引用时使用**注册表条目名称**（entities.yaml），不要复制粘贴数值
- 文件命名：`[编号]-[系统名].md`（如 `06-dda-flow-theory.md`）
- GDD 修改后必须运行 `/design-review` 验证
- 完成一组相关 GDD 后运行 `/review-all-gdds` 交叉校验

## 交错空间 GDD 编号约定

| 编号 | 内容 |
|:---|:---|
| 01 | 游戏总览 |
| 02 | 玩家操作 |
| 03 | 塔系统 |
| 04 | 关卡生成 |
| 05 | 方块遍历 |
| 06 | DDA 心流理论 |
| 07 | 渲染视觉 |
| 08 | AR 交互 |
| 09 | 数值配置 |
| 10 | 开发路线图 |
| 11 | 学术基础 |
| 12 | 音频设计 |
| 13 | 本地化 |
