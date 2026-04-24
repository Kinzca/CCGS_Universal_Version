# 技术债务追踪表

> **用途**：集中记录代码层面的技术债务（临时方案、TODO、架构妥协、性能隐患）  
> **更新时机**：Phase 2 写入临时方案时同步登记；Phase 0 启动时扫描  
> **ID 规范**：`TD-XXX`，递增分配，不复用已关闭 ID

---

## 活跃债务

| ID | 登记日期 | 类型 | 描述 | 位置 | 严重度 | 计划偿还 |
|:---|:---|:---|:---|:---|:---|:---|
| TD-001 | 2026-04-22 | TODO | 登录错误码未做分类处理，所有错误走同一逻辑 | `LoginLogicSys.cs:104` | 💭 低 | 未定 |
| TD-002 | 2026-04-22 | TODO | 螺旋预览逻辑耦合在 TowerCenterSys 中，待迁移至独立的 SpiralPreviewSys | `TowerCenterSys.cs:1134` | 🟡 中 | 阶段 D |
| TD-003 | 2026-04-22 | TODO | 测试用界面打开代码残留 | `GameApp.cs:42` | 💭 低 | 未定 |
| TD-004 | 2026-04-22 | 架构妥协 | TowerForwardMatchingScrambler 作为可选前向搜索，算法完整性待验证 | `TowerForwardMatchingScrambler.cs` | 🟡 中 | 阶段 D（BUG-002 关联） |
| TD-005 | 2026-04-22 | 架构妥协 | Rewired Action 在键盘1/键盘2/手柄间未通过 Map Category 隔离，共享 Action 导致优先级截获问题 | `TowerCenterSys.SetupInputSchemes` | 🔴 高 | 待设计（BUG-003 关联） |

---

## 已偿还

| ID | 登记日期 | 偿还日期 | 描述 | 偿还方式 |
|:---|:---|:---|:---|:---|
| TD-006 | 2026-04-24 | 2026-04-24 | 硬编码 | 在 `hooks-config.yaml` 增加 `push_protection` 段，并重构 `validate-push.sh` 动态读取 |
| TD-007 | 2026-04-24 | 2026-04-24 | Bug | 重构 `validate-assets.sh`，使用 Here-String 取代管道子 Shell，解决变量作用域隔离问题 |
| TD-008 | 2026-04-24 | 2026-04-24 | 脆弱设计 | 引入 `yaml-parser.sh`，抛弃 `tail -1` 并使用健壮的 `yaml_get_value` 获取 assets pattern |
| TD-009 | 2026-04-24 | 2026-04-24 | 代码重复 | 创建共享 YAML 解析库，重构 `validate-commit.sh`, `distribute-rules.sh`, `workspace-status.sh` |
| TD-010 | 2026-04-24 | 2026-04-24 | 功能缺失 | 在 `install-hooks.sh` 增加 `--check` 干跑验证模式 |
| TD-011 | 2026-04-24 | 2026-04-24 | 文档质量 | 使用脚本修复了所有 workflows 目录中 `Structured Decision UI` 段落的中英混合不流畅句子 |
| TD-012 | 2026-04-24 | 2026-04-24 | 未完成 | 计算并验证了全局 Token 减少量（约可省 250 Tokens），需用户手动在 IDE 规则设定中删除"协议5"的表格 |

---

## ID 分配规则

- 新增债务：取当前最大 ID + 1
- 当前最大 ID：**TD-012**
- 偿还时：将条目从"活跃债务"移至"已偿还"，记录偿还日期和方式
- 与 Bug Tracker 关联：若债务与已知 Bug 相关，在描述中标注 `BUG-XXX`
