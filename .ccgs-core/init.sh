#!/bin/bash
# ============================================================================
# init.sh — CCGS 框架一键初始化与维护工具
# ============================================================================
# 功能:
#   1. 校验/修复 CCGS-Data 目录骨架完整性
#   2. 重命名数据层目录（批量替换所有引用）
#   3. 生成 AI 工具入口配置文件（CLAUDE.md / GEMINI.md / .cursorrules）
#
# 用法:
#   bash .ccgs-core/init.sh                          # 校验目录骨架
#   bash .ccgs-core/init.sh --rename-data <新名称>   # 重命名数据层目录
#   bash .ccgs-core/init.sh --gen-entry <工具名>     # 生成入口文件
#   bash .ccgs-core/init.sh --all                    # 全量初始化
#
# 兼容性: macOS / Linux，纯 Bash
# ============================================================================

set -euo pipefail

# --- 定位项目根目录 ---
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
ENV_FILE="$SCRIPT_DIR/ccgs.env"

# --- 加载全局配置 ---
if [ -f "$ENV_FILE" ]; then
    source "$ENV_FILE"
else
    DATA_DIR="CCGS-Data"
    CORE_DIR=".ccgs-core"
fi

# ============================================================================
# 子命令: 校验并修复目录骨架
# ============================================================================
cmd_verify() {
    echo "🔍 校验 $DATA_DIR 目录骨架..."

    # 框架要求的完整目录清单
    REQUIRED_DIRS=(
        "$DATA_DIR/design/art"
        "$DATA_DIR/design/balance"
        "$DATA_DIR/design/gdd"
        "$DATA_DIR/design/levels"
        "$DATA_DIR/design/narrative/characters"
        "$DATA_DIR/design/quick-specs"
        "$DATA_DIR/design/registry"
        "$DATA_DIR/design/ux"
        "$DATA_DIR/production/changelogs"
        "$DATA_DIR/production/epics"
        "$DATA_DIR/production/milestones"
        "$DATA_DIR/production/playtests"
        "$DATA_DIR/production/proposals"
        "$DATA_DIR/production/qa/archive"
        "$DATA_DIR/production/qa/bugs"
        "$DATA_DIR/production/qa/evidence"
        "$DATA_DIR/production/qa/playtests"
        "$DATA_DIR/production/qa/smoke-tests"
        "$DATA_DIR/production/releases"
        "$DATA_DIR/production/retrospectives"
        "$DATA_DIR/production/session-logs"
        "$DATA_DIR/production/session-state"
        "$DATA_DIR/production/sprints"
        "$DATA_DIR/production/tracking"
        "$DATA_DIR/project-docs/architecture"
        "$DATA_DIR/project-docs/engine-reference"
        "$DATA_DIR/project-docs/research"
    )

    MISSING=0
    CREATED=0

    for dir in "${REQUIRED_DIRS[@]}"; do
        FULL_PATH="$PROJECT_ROOT/$dir"
        if [ ! -d "$FULL_PATH" ]; then
            mkdir -p "$FULL_PATH"
            touch "$FULL_PATH/.gitkeep"
            echo "  ✅ 创建: $dir"
            ((CREATED++))
        fi
    done

    if [ $CREATED -eq 0 ]; then
        echo "  ✅ 所有 ${#REQUIRED_DIRS[@]} 个目录均已就位"
    else
        echo "  📦 修复完成: 创建了 $CREATED 个缺失目录"
    fi
}

# ============================================================================
# 子命令: 重命名数据层目录
# ============================================================================
cmd_rename_data() {
    local NEW_NAME="$1"
    local OLD_NAME="$DATA_DIR"

    if [ "$OLD_NAME" = "$NEW_NAME" ]; then
        echo "⚠️  新名称与当前名称相同: $OLD_NAME"
        exit 1
    fi

    if [ ! -d "$PROJECT_ROOT/$OLD_NAME" ]; then
        echo "❌ 当前数据目录不存在: $OLD_NAME"
        exit 1
    fi

    if [ -d "$PROJECT_ROOT/$NEW_NAME" ]; then
        echo "❌ 目标目录已存在: $NEW_NAME"
        exit 1
    fi

    echo "🔄 重命名数据层: $OLD_NAME → $NEW_NAME"

    # Step 1: 物理重命名目录
    mv "$PROJECT_ROOT/$OLD_NAME" "$PROJECT_ROOT/$NEW_NAME"
    echo "  ✅ 目录已移动"

    # Step 2: 批量替换 .ccgs-core 中所有引用
    echo "  🔍 替换 $CORE_DIR 中的路径引用..."
    local COUNT=0

    # 使用 find + sed 批量替换（兼容 macOS 和 Linux）
    if [[ "$(uname)" == "Darwin" ]]; then
        # macOS sed 需要 -i '' 语法
        find "$PROJECT_ROOT/$CORE_DIR" -type f \( -name "*.md" -o -name "*.yaml" -o -name "*.yml" -o -name "*.sh" \) \
            -exec grep -l "$OLD_NAME/" {} \; | while read -r file; do
            sed -i '' "s|$OLD_NAME/|$NEW_NAME/|g" "$file"
            ((COUNT++)) || true
        done
    else
        # Linux sed
        find "$PROJECT_ROOT/$CORE_DIR" -type f \( -name "*.md" -o -name "*.yaml" -o -name "*.yml" -o -name "*.sh" \) \
            -exec grep -l "$OLD_NAME/" {} \; | while read -r file; do
            sed -i "s|$OLD_NAME/|$NEW_NAME/|g" "$file"
            ((COUNT++)) || true
        done
    fi

    # Step 3: 更新 ccgs.env 中的 DATA_DIR
    if [[ "$(uname)" == "Darwin" ]]; then
        sed -i '' "s|^DATA_DIR=\"$OLD_NAME\"|DATA_DIR=\"$NEW_NAME\"|" "$ENV_FILE"
    else
        sed -i "s|^DATA_DIR=\"$OLD_NAME\"|DATA_DIR=\"$NEW_NAME\"|" "$ENV_FILE"
    fi

    echo "  ✅ ccgs.env 已更新: DATA_DIR=\"$NEW_NAME\""

    # 验证
    local REMAINING
    REMAINING=$(grep -rl "$OLD_NAME/" "$PROJECT_ROOT/$CORE_DIR" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$REMAINING" -eq 0 ]; then
        echo "  ✅ 零残留引用，替换完成"
    else
        echo "  ⚠️  仍有 $REMAINING 个文件包含旧路径，请手动检查"
    fi
}

# ============================================================================
# 子命令: 生成 AI 工具入口配置文件
# ============================================================================
cmd_gen_entry() {
    local TOOL="$1"

    case "$TOOL" in
        claude)
            # --- 生成 CLAUDE.md 入口文件 ---
            cat > "$PROJECT_ROOT/CLAUDE.md" << 'ENTRY_EOF'
# CCGS Framework — Claude Code Configuration

> Auto-generated by `init.sh`. Do not edit manually.

## Pipeline Core
@.ccgs-core/workflows/pipeline-core.md

## Technical Preferences
@.ccgs-core/docs/technical-preferences.md

## Coding Standards
@.ccgs-core/docs/coding-standards.md

## Coordination Rules
@.ccgs-core/docs/coordination-rules.md

## Context Management
@.ccgs-core/docs/context-management.md
ENTRY_EOF
            echo "  ✅ 已生成 CLAUDE.md"

            # --- 生成 .claude/ 符号链接桥接层 ---
            echo "  🔗 构建 .claude/ 符号链接桥接层..."

            # 清理旧的桥接层（如果存在）
            rm -rf "$PROJECT_ROOT/.claude"
            mkdir -p "$PROJECT_ROOT/.claude"

            # agents/ → 合并 Tier1 + Tier2 + Tier3（Claude Code 需要平铺）
            mkdir -p "$PROJECT_ROOT/.claude/agents"
            for tier_dir in Tier1-Directors Tier2-Leads Tier3-Specialists; do
                if [ -d "$PROJECT_ROOT/$CORE_DIR/workflows/$tier_dir" ]; then
                    for agent_file in "$PROJECT_ROOT/$CORE_DIR/workflows/$tier_dir"/*.md; do
                        if [ -f "$agent_file" ]; then
                            local basename=$(basename "$agent_file")
                            ln -sf "../../$CORE_DIR/workflows/$tier_dir/$basename" "$PROJECT_ROOT/.claude/agents/$basename"
                        fi
                    done
                fi
            done
            local AGENT_COUNT=$(ls "$PROJECT_ROOT/.claude/agents/" 2>/dev/null | wc -l | tr -d ' ')
            echo "    → agents/: $AGENT_COUNT 个 Agent 已链接"

            # skills/ → 符号链接整个 skills 目录下的每个 Skill
            mkdir -p "$PROJECT_ROOT/.claude/skills"
            if [ -d "$PROJECT_ROOT/$CORE_DIR/workflows/skills" ]; then
                for skill_dir in "$PROJECT_ROOT/$CORE_DIR/workflows/skills"/*/; do
                    if [ -d "$skill_dir" ]; then
                        local skill_name=$(basename "$skill_dir")
                        ln -sf "../../$CORE_DIR/workflows/skills/$skill_name" "$PROJECT_ROOT/.claude/skills/$skill_name"
                    fi
                done
            fi
            local SKILL_COUNT=$(ls -d "$PROJECT_ROOT/.claude/skills"/*/ 2>/dev/null | wc -l | tr -d ' ')
            echo "    → skills/: $SKILL_COUNT 个 Skill 已链接"

            # rules/ → 符号链接规则文件
            mkdir -p "$PROJECT_ROOT/.claude/rules"
            for rule_file in "$PROJECT_ROOT/$CORE_DIR/rules"/*.md; do
                if [ -f "$rule_file" ]; then
                    local basename=$(basename "$rule_file")
                    if [ "$basename" != "README.md" ]; then
                        ln -sf "../../$CORE_DIR/rules/$basename" "$PROJECT_ROOT/.claude/rules/$basename"
                    fi
                fi
            done
            local RULE_COUNT=$(ls "$PROJECT_ROOT/.claude/rules/" 2>/dev/null | wc -l | tr -d ' ')
            echo "    → rules/: $RULE_COUNT 个规则已链接"

            # hooks/ → 符号链接钩子脚本
            mkdir -p "$PROJECT_ROOT/.claude/hooks"
            for hook_file in "$PROJECT_ROOT/$CORE_DIR/hooks"/*.sh; do
                if [ -f "$hook_file" ]; then
                    local basename=$(basename "$hook_file")
                    ln -sf "../../$CORE_DIR/hooks/$basename" "$PROJECT_ROOT/.claude/hooks/$basename"
                fi
            done
            local HOOK_COUNT=$(ls "$PROJECT_ROOT/.claude/hooks/" 2>/dev/null | wc -l | tr -d ' ')
            echo "    → hooks/: $HOOK_COUNT 个钩子已链接"

            # docs/ → 符号链接文档目录
            ln -sf "../$CORE_DIR/docs" "$PROJECT_ROOT/.claude/docs"
            echo "    → docs/: 已链接"

            echo "  ✅ .claude/ 桥接层构建完成 — Claude Code 现在可以发现所有 Agent/Skill/Rule/Hook"
            ;;
        gemini)
            cat > "$PROJECT_ROOT/GEMINI.md" << 'ENTRY_EOF'
# CCGS Framework — Gemini Configuration

> Auto-generated by `init.sh`. Do not edit manually.

## Pipeline Core
Read and follow: `.ccgs-core/workflows/pipeline-core.md`

## Technical Preferences
Read: `.ccgs-core/docs/technical-preferences.md`

## Coding Standards
Read: `.ccgs-core/docs/coding-standards.md`
ENTRY_EOF
            echo "  ✅ 已生成 GEMINI.md"
            ;;
        cursor)
            cp "$PROJECT_ROOT/$CORE_DIR/workflows/pipeline-core.md" "$PROJECT_ROOT/.cursorrules"
            echo "  ✅ 已生成 .cursorrules (pipeline-core 副本)"
            ;;
        all)
            cmd_gen_entry "claude"
            echo ""
            cmd_gen_entry "gemini"
            cmd_gen_entry "cursor"
            ;;
        *)
            echo "❌ 未知工具: $TOOL (可选: claude / gemini / cursor / all)"
            exit 1
            ;;
    esac
}

# ============================================================================
# 主入口
# ============================================================================
case "${1:-}" in
    --rename-data)
        if [ -z "${2:-}" ]; then
            echo "用法: bash .ccgs-core/init.sh --rename-data <新目录名>"
            exit 1
        fi
        cmd_rename_data "$2"
        ;;
    --gen-entry)
        if [ -z "${2:-}" ]; then
            echo "用法: bash .ccgs-core/init.sh --gen-entry <claude|gemini|cursor|all>"
            exit 1
        fi
        cmd_gen_entry "$2"
        ;;
    --all)
        cmd_verify
        echo ""
        cmd_gen_entry "all"
        ;;
    --help|-h)
        echo "CCGS 框架初始化工具"
        echo ""
        echo "用法:"
        echo "  bash .ccgs-core/init.sh                          校验目录骨架完整性"
        echo "  bash .ccgs-core/init.sh --rename-data <新名称>   重命名数据层目录"
        echo "  bash .ccgs-core/init.sh --gen-entry <工具名>     生成 AI 入口文件"
        echo "  bash .ccgs-core/init.sh --all                    全量初始化"
        echo "  bash .ccgs-core/init.sh --help                   显示此帮助"
        ;;
    *)
        cmd_verify
        ;;
esac
