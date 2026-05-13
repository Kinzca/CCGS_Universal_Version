"""Schema defaults and compatibility helpers for dashboard production snapshots."""

from __future__ import annotations

from copy import deepcopy
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Optional


SNAPSHOT_SCHEMA_VERSION = "1.0.0"


def utc_timestamp() -> str:
    """Return an ISO-8601 UTC timestamp for snapshot metadata."""
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def make_empty_snapshot(
    project_root: str | Path,
    data_dir: str | Path,
    warnings: Optional[list[str]] = None,
    generated_at: Optional[str] = None,
) -> Dict[str, Any]:
    """Create a fully-populated snapshot skeleton safe for frontend rendering."""
    project_root_path = Path(project_root)
    data_dir_path = Path(data_dir)
    return {
        "schema_version": SNAPSHOT_SCHEMA_VERSION,
        "generated_at": generated_at or utc_timestamp(),
        "project_root": str(project_root_path),
        "data_dir": str(data_dir_path),
        "data_dir_name": data_dir_path.name,
        "active_sprint": {
            "id": None,
            "name": "Unknown",
            "goal": "",
            "start": None,
            "end": None,
            "source": None,
            "items": [],
        },
        "next_action": {
            "state": "none",
            "label": "No action available",
            "command": "/help",
            "story_path": None,
            "reason": "Production rules are not available yet.",
            "source": "ProductionSnapshot defaults",
        },
        "blockers": [],
        "diagnostics": [],
        "evidence_gaps": [],
        "recent_changes": [],
        "warnings": list(warnings or []),
        "legacy": {},
    }


def legacy_defaults(snapshot: Dict[str, Any]) -> Dict[str, Any]:
    """Map the snapshot shape to the legacy /api/data fields expected by old UI code."""
    active_sprint = snapshot.get("active_sprint", {})
    next_action = snapshot.get("next_action", {})
    return {
        "project_root": snapshot.get("project_root"),
        "sprint": {
            "name": active_sprint.get("name", "Unknown"),
            "progress": 0,
            "progress_percent": 0,
            "total_points": 0,
            "completed_points": 0,
            "burn_data": [],
        },
        "stories": [],
        "bugs": [],
        "test_coverage": {"percent": 0},
        "gdd_coverage": {"percent": 0, "total": 0, "covered": 0, "files": []},
        "health": {"TODOs": 0, "FIXMEs": 0},
        "suggested_action": {
            "command": next_action.get("command", "/help"),
            "desc": next_action.get("reason", "Production rules are not available yet."),
        },
        "activity_timeline": [],
        "production_snapshot_schema_version": snapshot.get("schema_version", SNAPSHOT_SCHEMA_VERSION),
    }


def snapshot_to_legacy_payload(
    snapshot: Dict[str, Any],
    legacy_data: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """Return a legacy-compatible payload with the new snapshot embedded.

    Legacy fields are preserved where possible, but active sprint fields are
    authoritative from ProductionSnapshot so goals.json cannot override them.
    """
    payload = deepcopy(legacy_defaults(snapshot))
    if legacy_data:
        payload.update(deepcopy(legacy_data))
        for key, value in legacy_defaults(snapshot).items():
            payload.setdefault(key, value)
    active_sprint = deepcopy(snapshot.get("active_sprint", {}))
    legacy_sprint = payload.get("sprint") if isinstance(payload.get("sprint"), dict) else {}
    payload["sprint"] = {
        **legacy_sprint,
        "name": active_sprint.get("name", "Unknown"),
        "goal": active_sprint.get("goal", ""),
        "start": active_sprint.get("start"),
        "end": active_sprint.get("end"),
        "source": active_sprint.get("source"),
        "items": active_sprint.get("items", []),
        "progress": 0,
        "progress_percent": 0,
        "total_points": 0,
        "completed_points": 0,
        "burn_data": [],
        "metrics_source": "unavailable-pending-sprint-status-metrics",
    }
    payload["active_sprint"] = active_sprint
    payload["production_queue"] = active_sprint.get("items", [])
    next_action = deepcopy(snapshot.get("next_action", {}))
    payload["next_action"] = next_action
    payload["blockers"] = deepcopy(snapshot.get("blockers", []))
    payload["production_diagnostics"] = deepcopy(snapshot.get("diagnostics", []))
    payload["suggested_action"] = {
        "command": next_action.get("command") or "/help",
        "desc": next_action.get("reason") or next_action.get("label") or "",
    }
    payload["production_snapshot"] = deepcopy(snapshot)
    payload["production_snapshot_schema_version"] = snapshot.get(
        "schema_version", SNAPSHOT_SCHEMA_VERSION
    )
    return payload
