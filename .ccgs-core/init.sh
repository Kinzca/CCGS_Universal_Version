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
            echo "✅ 已生成 CLAUDE.md"
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
            echo "✅ 已生成 GEMINI.md"
            ;;
        cursor)
            cp "$PROJECT_ROOT/$CORE_DIR/workflows/pipeline-core.md" "$PROJECT_ROOT/.cursorrules"
            echo "✅ 已生成 .cursorrules (pipeline-core 副本)"
            ;;
        all)
            cmd_gen_entry "claude"
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
