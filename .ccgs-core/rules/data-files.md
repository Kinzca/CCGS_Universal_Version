# 数据文件规则 (Data File Rules)

> **适用路径**: Luban 配置表源文件、JSON/Excel 数据文件
> **原 CCGS 对应**: `.claude/rules/data-files.md`

- 所有配置变更必须通过 **Luban 配置表**，禁止在代码中内联数值
- Luban 配置修改后必须**同步更新版本号**，避免缓存问题
- 配置表字段必须有**中文注释**说明含义和取值范围
- 数值必须有对应的 GDD 公式或设计理由文档
- 禁止孤立数据条目——每条数据必须被代码或其他配置引用
- Schema 变更时需**版本化管理**并提供迁移说明
- 所有可选字段必须有**合理默认值**

## Luban 配置规范

```
# 字段命名：PascalCase
# 文件命名：[系统]_[功能].xlsx 或 [系统]_[功能].json
# 示例：Tower_BlockConfig.xlsx, DDA_FlowParams.xlsx

# 每个配置字段必须包含：
# - 类型声明
# - 中文注释
# - 取值范围（如适用）
# - 关联 GDD 章节（如适用）
```
