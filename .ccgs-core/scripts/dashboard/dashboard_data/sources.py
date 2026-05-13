"""File source readers for the CCGS dashboard production snapshot."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, List, Tuple


def parse_ccgs_env(project_root: str | Path) -> Dict[str, str]:
    """Parse ccgs.env without importing dashboard.py and triggering server globals."""
    root = Path(project_root)
    env: Dict[str, str] = {}
    for candidate in (root / ".ccgs-core" / "ccgs.env", root / "ccgs.env"):
        if not candidate.exists():
            continue
        for raw_line in candidate.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            env[key.strip()] = value.strip().strip("\"'")
        break
    return env


def resolve_data_dir(project_root: str | Path) -> Path:
    """Resolve DATA_DIR from ccgs.env, falling back to CCGS-Data."""
    root = Path(project_root)
    data_dir_name = parse_ccgs_env(root).get("DATA_DIR", "CCGS-Data")
    return root / data_dir_name


def load_json(path: str | Path) -> Tuple[Dict[str, Any], List[str]]:
    """Load a JSON object, returning warnings instead of raising."""
    json_path = Path(path)
    if not json_path.exists():
        return {}, [f"JSON file not found: {json_path}"]
    try:
        data = json.loads(json_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        return {}, [f"Could not read JSON file {json_path}: {exc}"]
    if not isinstance(data, dict):
        return {}, [f"JSON file did not contain an object: {json_path}"]
    return data, []


def _parse_scalar(raw_value: str) -> Any:
    value = raw_value.strip()
    if value == "":
        return ""
    if value[0:1] in {"'", '"'} and value[-1:] == value[0]:
        return value[1:-1]
    lowered = value.lower()
    if lowered in {"true", "false"}:
        return lowered == "true"
    try:
        if "." in value:
            return float(value)
        return int(value)
    except ValueError:
        return value


def parse_sprint_status_yaml(text: str) -> Dict[str, Any]:
    """Parse the limited sprint-status.yaml subset used by CCGS.

    This intentionally supports only top-level scalar keys and the `stories:`
    list needed by the dashboard snapshot. It avoids a PyYAML dependency for
    the framework dashboard.
    """
    result: Dict[str, Any] = {}
    current_section: str | None = None
    current_item: Dict[str, Any] | None = None

    for raw_line in text.splitlines():
        if not raw_line.strip() or raw_line.lstrip().startswith("#"):
            continue
        indent = len(raw_line) - len(raw_line.lstrip(" "))
        line = raw_line.strip()

        if indent == 0:
            current_item = None
            if line.endswith(":"):
                current_section = line[:-1]
                if current_section == "stories":
                    result[current_section] = []
                continue
            if ":" in line:
                key, value = line.split(":", 1)
                result[key.strip()] = _parse_scalar(value)
                current_section = None
            continue

        if current_section == "stories":
            if line.startswith("- "):
                current_item = {}
                result.setdefault("stories", []).append(current_item)
                remainder = line[2:].strip()
                if ":" in remainder:
                    key, value = remainder.split(":", 1)
                    current_item[key.strip()] = _parse_scalar(value)
                continue
            if current_item is not None and ":" in line:
                key, value = line.split(":", 1)
                current_item[key.strip()] = _parse_scalar(value)

    return result


def load_sprint_status(data_dir: str | Path) -> Tuple[Dict[str, Any], List[str], Path]:
    """Load production/sprint-status.yaml with safe warnings."""
    path = Path(data_dir) / "production" / "sprint-status.yaml"
    if not path.exists():
        return {}, [f"sprint-status.yaml not found: {path}"], path
    try:
        return parse_sprint_status_yaml(path.read_text(encoding="utf-8")), [], path
    except OSError as exc:
        return {}, [f"Could not read sprint-status.yaml {path}: {exc}"], path


def _sprint_display_name(sprint_id: Any) -> str:
    if sprint_id in (None, ""):
        return "Unknown"
    sprint_text = str(sprint_id)
    if sprint_text.lower().startswith("sprint"):
        return sprint_text
    return f"Sprint {sprint_text}"


def _active_sprint_item(raw: Dict[str, Any], source: Path) -> Dict[str, Any]:
    return {
        "id": raw.get("id"),
        "name": raw.get("name", ""),
        "file": raw.get("file", ""),
        "priority": raw.get("priority", ""),
        "status": raw.get("status", ""),
        "owner": raw.get("owner", ""),
        "estimate_days": raw.get("estimate_days"),
        "blocker": raw.get("blocker", ""),
        "completed": raw.get("completed", ""),
        "source": str(source),
    }


def load_active_sprint(data_dir: str | Path) -> Tuple[Dict[str, Any], List[str]]:
    """Load the authoritative active sprint from production/sprint-status.yaml."""
    sprint_status, warnings, source = load_sprint_status(data_dir)
    if not sprint_status:
        return {
            "id": None,
            "name": "Unknown",
            "goal": "",
            "start": None,
            "end": None,
            "source": None,
            "items": [],
        }, warnings

    sprint_id = sprint_status.get("sprint")
    items = sprint_status.get("stories", [])
    return {
        "id": str(sprint_id) if sprint_id not in (None, "") else None,
        "name": _sprint_display_name(sprint_id),
        "goal": sprint_status.get("goal", ""),
        "start": sprint_status.get("start"),
        "end": sprint_status.get("end"),
        "source": str(source),
        "items": [
            _active_sprint_item(item, source)
            for item in items
            if isinstance(item, dict)
        ],
    }, warnings


def load_goals(data_dir: str | Path) -> Tuple[Dict[str, Any], List[str], Path]:
    """Load production tracking goals without assigning production meaning."""
    path = Path(data_dir) / "production" / "tracking" / "goals.json"
    data, warnings = load_json(path)
    if warnings and not path.exists():
        return {}, [], path
    return data, warnings, path
