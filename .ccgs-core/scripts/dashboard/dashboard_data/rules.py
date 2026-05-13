"""Production decision rules for the CCGS dashboard."""

from __future__ import annotations

import ast
from pathlib import Path
from typing import Any, Dict, List


READY_STATUSES = {"ready-for-dev", "ready_for_dev", "ready for dev"}
DONE_STATUSES = {"done", "complete", "completed", "verified", "closed"}
BACKLOG_STATUSES = {"backlog", "todo", "not-started", "not_started", "not started"}


def _normalize_status(status: Any) -> str:
    return str(status or "").strip().lower()


def _is_done_status(status: Any) -> bool:
    return _normalize_status(status) in DONE_STATUSES


def _items_from_snapshot_or_queue(snapshot_or_sprint_queue: Any) -> List[Dict[str, Any]]:
    if isinstance(snapshot_or_sprint_queue, list):
        return [item for item in snapshot_or_sprint_queue if isinstance(item, dict)]
    if not isinstance(snapshot_or_sprint_queue, dict):
        return []
    if isinstance(snapshot_or_sprint_queue.get("active_sprint"), dict):
        items = snapshot_or_sprint_queue["active_sprint"].get("items", [])
        return [item for item in items if isinstance(item, dict)]
    if isinstance(snapshot_or_sprint_queue.get("items"), list):
        return [item for item in snapshot_or_sprint_queue["items"] if isinstance(item, dict)]
    return []


def _blocked_reason(item: Dict[str, Any]) -> str:
    blocker = str(item.get("blocker") or "").strip()
    if blocker:
        return blocker
    status = _normalize_status(item.get("status"))
    if "blocked" in status or "paused" in status:
        return status
    return ""


def _story_path(item: Dict[str, Any]) -> str:
    for key in ("file", "story_path", "path"):
        story_path = str(item.get(key) or "").strip()
        if story_path:
            return story_path
    return ""


def _candidate_summary(item: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "id": item.get("id"),
        "name": item.get("name", ""),
        "story_path": _story_path(item),
        "status": item.get("status", ""),
        "blocker": item.get("blocker", ""),
    }


def _story_label(item: Dict[str, Any]) -> str:
    story_id = item.get("id") or "Story"
    story_name = item.get("name") or _story_path(item) or "Untitled"
    return f"{story_id}: {story_name}"


def _project_root(snapshot_or_sprint_queue: Any) -> Path | None:
    if not isinstance(snapshot_or_sprint_queue, dict):
        return None
    root = snapshot_or_sprint_queue.get("project_root")
    return Path(root) if root else None


def _resolve_story_file(project_root: Path | None, story_path: str) -> Path | None:
    if not story_path or project_root is None:
        return None
    path = Path(story_path)
    return path if path.is_absolute() else project_root / path


def _parse_frontmatter_value(value: str) -> Any:
    stripped = value.strip().strip("\"'")
    if stripped.startswith("[") and stripped.endswith("]"):
        try:
            return ast.literal_eval(stripped)
        except (SyntaxError, ValueError):
            return []
    return stripped


def _read_story_metadata(project_root: Path | None, story_path: str) -> tuple[Dict[str, Any], str | None]:
    story_file = _resolve_story_file(project_root, story_path)
    if story_file is None:
        return {}, "Story path is missing"
    if not story_file.exists():
        return {}, f"Story file not found: {story_path}"
    try:
        lines = story_file.read_text(encoding="utf-8").splitlines()
    except OSError as exc:
        return {}, f"Could not read Story file {story_path}: {exc}"
    if not lines or lines[0].strip() != "---":
        return {}, None

    metadata: Dict[str, Any] = {}
    active_list_key: str | None = None
    for line in lines[1:]:
        stripped = line.strip()
        if stripped == "---":
            break
        if not stripped:
            continue
        if active_list_key and stripped.startswith("- "):
            metadata.setdefault(active_list_key, []).append(_parse_frontmatter_value(stripped[2:]))
            continue
        active_list_key = None
        if ":" not in stripped:
            continue
        key, value = stripped.split(":", 1)
        key = key.strip()
        value = value.strip()
        if value == "":
            metadata[key] = []
            active_list_key = key
        else:
            metadata[key] = _parse_frontmatter_value(value)
    return metadata, None


def _dependency_refs(metadata: Dict[str, Any]) -> list[str]:
    refs: list[str] = []
    for key in ("dependencies", "depends_on", "depends-on"):
        raw = metadata.get(key)
        if isinstance(raw, list):
            refs.extend(str(ref).strip() for ref in raw if str(ref).strip())
        elif raw:
            refs.append(str(raw).strip())
    return refs


def _diagnostic(
    diagnostic_id: str,
    severity: str,
    title: str,
    source: str,
    item: Dict[str, Any],
    recommended_action: str,
    details: Dict[str, Any] | None = None,
) -> Dict[str, Any]:
    return {
        "id": diagnostic_id,
        "severity": severity,
        "title": title,
        "source": source,
        "affected_story": _candidate_summary(item),
        "recommended_action": recommended_action,
        "details": details or {},
    }


def _dependency_lookup(items: list[Dict[str, Any]]) -> Dict[str, Dict[str, Any]]:
    lookup: Dict[str, Dict[str, Any]] = {}
    for item in items:
        story_id = item.get("id")
        story_path = _story_path(item)
        for key in (story_id, story_path, Path(story_path).name if story_path else ""):
            if key:
                lookup[str(key)] = item
    return lookup


def _story_blocking_keys(diagnostic: Dict[str, Any]) -> set[str]:
    story = diagnostic.get("affected_story", {})
    keys: set[str] = set()
    for key in (story.get("id"), story.get("story_path")):
        if key:
            keys.add(str(key))
    return keys


def _diagnostic_blockers(snapshot_or_sprint_queue: Any) -> Dict[str, list[Dict[str, Any]]]:
    if not isinstance(snapshot_or_sprint_queue, dict):
        return {}
    diagnostics = snapshot_or_sprint_queue.get("diagnostics", [])
    blockers: Dict[str, list[Dict[str, Any]]] = {}
    diagnostic_items = diagnostics if isinstance(diagnostics, list) else []
    for diagnostic in diagnostic_items:
        if not isinstance(diagnostic, dict) or diagnostic.get("severity") != "blocking":
            continue
        for key in _story_blocking_keys(diagnostic):
            blockers.setdefault(key, []).append(diagnostic)
    return blockers


def collect_diagnostics(snapshot_or_sprint_queue: Any) -> list[Dict[str, Any]]:
    """Collect production blockers and consistency diagnostics for the active sprint."""
    items = _items_from_snapshot_or_queue(snapshot_or_sprint_queue)
    project_root = _project_root(snapshot_or_sprint_queue)
    dependency_lookup = _dependency_lookup(items)
    diagnostics: list[Dict[str, Any]] = []

    for item in items:
        story_path = _story_path(item)
        sprint_status = _normalize_status(item.get("status"))
        source = str(item.get("source") or "production/sprint-status.yaml")
        blocker = str(item.get("blocker") or "").strip()

        if blocker and (sprint_status in BACKLOG_STATUSES or "blocked" in sprint_status or "paused" in sprint_status):
            diagnostics.append(
                _diagnostic(
                    "explicit-blocker",
                    "blocking",
                    "Sprint queue item has an active blocker",
                    source,
                    item,
                    f"先处理或解除 blocker: {blocker}",
                    {"blocker": blocker, "sprint_status": sprint_status},
                )
            )

        metadata, warning = _read_story_metadata(project_root, story_path)
        frontmatter_status = _normalize_status(metadata.get("status"))
        if warning:
            diagnostics.append(
                _diagnostic(
                    "story-file-unreadable",
                    "warning",
                    "Story file could not be read for diagnostics",
                    story_path or source,
                    item,
                    "修复 sprint-status.yaml 中的 Story 路径，或补齐缺失的 Story 文件。",
                    {"warning": warning},
                )
            )
            continue

        if frontmatter_status and sprint_status and frontmatter_status != sprint_status:
            diagnostics.append(
                _diagnostic(
                    "frontmatter-status-mismatch",
                    "warning",
                    "Story frontmatter status differs from sprint-status",
                    f"{source} vs {story_path}",
                    item,
                    "对齐 Story frontmatter 与 sprint-status.yaml，或在 DCC 工作流中明确哪一方需要修正。",
                    {
                        "sprint_status": sprint_status,
                        "frontmatter_status": frontmatter_status,
                    },
                )
            )

        if sprint_status in READY_STATUSES:
            for dep_ref in _dependency_refs(metadata):
                dependency = dependency_lookup.get(dep_ref)
                if dependency is None:
                    diagnostics.append(
                        _diagnostic(
                            "dependency-unresolved",
                            "warning",
                            "Ready Story references an unresolved dependency",
                            story_path or source,
                            item,
                            f"确认依赖 `{dep_ref}` 是否存在于当前 Sprint 队列或使用文件路径引用。",
                            {"dependency": dep_ref},
                        )
                    )
                    continue
                dep_metadata, _ = _read_story_metadata(project_root, _story_path(dependency))
                dep_sprint_status = dependency.get("status")
                dep_frontmatter_status = dep_metadata.get("status")
                if not (_is_done_status(dep_sprint_status) or _is_done_status(dep_frontmatter_status)):
                    diagnostics.append(
                        _diagnostic(
                            "dependency-incomplete",
                            "blocking",
                            "Ready Story depends on incomplete Story",
                            story_path or source,
                            item,
                            f"先完成依赖 `{dep_ref}`，再把当前 Story 作为 ready-for-dev 执行。",
                            {
                                "dependency": dep_ref,
                                "dependency_status": dep_sprint_status,
                                "dependency_frontmatter_status": dep_frontmatter_status,
                            },
                        )
                    )

    return diagnostics


def select_next_action(snapshot_or_sprint_queue: Any) -> Dict[str, Any]:
    """Select the next executable Story from the current sprint queue only."""
    items = _items_from_snapshot_or_queue(snapshot_or_sprint_queue)
    diagnostic_blockers = _diagnostic_blockers(snapshot_or_sprint_queue)
    diagnostic_count = 0
    if isinstance(snapshot_or_sprint_queue, dict) and isinstance(snapshot_or_sprint_queue.get("diagnostics"), list):
        diagnostic_count = len(snapshot_or_sprint_queue.get("diagnostics", []))
    ready_items: list[Dict[str, Any]] = []
    blocked_ready_items: list[Dict[str, Any]] = []

    for item in items:
        if _normalize_status(item.get("status")) not in READY_STATUSES:
            continue
        story_keys = {str(item.get("id") or ""), _story_path(item)}
        if any(key and key in diagnostic_blockers for key in story_keys):
            blocked_ready_items.append(item)
            continue
        if _blocked_reason(item):
            blocked_ready_items.append(item)
        else:
            ready_items.append(item)

    source = "production/sprint-status.yaml"
    if len(ready_items) == 1:
        item = ready_items[0]
        story_path = _story_path(item)
        if not story_path:
            return {
                "state": "blocked",
                "label": "Ready story is missing path",
                "command": "/help",
                "story_path": None,
                "reason": "当前 Sprint 的唯一 ready-for-dev Story 缺少可复制的 Story 路径，无法安全生成 /dev-story 命令。",
                "source": source,
                "candidates": [_candidate_summary(item)],
            }
        return {
            "state": "ready",
            "label": _story_label(item),
            "command": f"/dev-story {story_path}",
            "story_path": story_path,
            "reason": (
                "当前 Sprint 中存在唯一未阻塞 ready-for-dev Story。"
                + (f" 同时存在 {diagnostic_count} 项生产诊断，请查看 diagnostics。" if diagnostic_count else "")
            ),
            "source": source,
            "candidates": [_candidate_summary(item)],
        }

    if len(ready_items) > 1:
        return {
            "state": "ambiguous",
            "label": "Multiple ready-for-dev stories",
            "command": "/help",
            "story_path": None,
            "reason": "当前 Sprint 中存在多个未阻塞 ready-for-dev Story，需要 Producer 明确选择。",
            "source": source,
            "candidates": [_candidate_summary(item) for item in ready_items],
        }

    if blocked_ready_items:
        blocked_labels = ", ".join(_story_label(item) for item in blocked_ready_items)
        return {
            "state": "blocked",
            "label": "Ready story is blocked",
            "command": "/help",
            "story_path": None,
            "reason": f"当前 Sprint 的 ready-for-dev Story 被阻塞或存在生产诊断: {blocked_labels}",
            "source": source,
            "candidates": [_candidate_summary(item) for item in blocked_ready_items],
        }

    return {
        "state": "none",
        "label": "No ready-for-dev story",
        "command": "/help",
        "story_path": None,
        "reason": "当前 Sprint 没有未阻塞 ready-for-dev Story。",
        "source": source,
        "candidates": [],
    }
