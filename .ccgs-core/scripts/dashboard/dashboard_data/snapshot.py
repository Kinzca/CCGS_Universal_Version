"""ProductionSnapshot assembly for the CCGS dashboard."""

from __future__ import annotations

from pathlib import Path
from typing import Any, Dict, Optional

from .rules import collect_diagnostics, select_next_action
from .schema import make_empty_snapshot
from .sources import load_active_sprint, load_goals, resolve_data_dir


def build_production_snapshot(
    project_root: str | Path,
    generated_at: Optional[str] = None,
) -> Dict[str, Any]:
    """Build a read-only dashboard ProductionSnapshot.

    DCC-001 establishes the schema and compatibility layer. DCC-004 adds
    blocker and consistency diagnostics before next-action selection so severe
    production issues can affect the recommendation reason.
    """
    root = Path(project_root)
    data_dir = resolve_data_dir(root)
    warnings: list[str] = []
    snapshot = make_empty_snapshot(root, data_dir, generated_at=generated_at)

    if not data_dir.exists():
        snapshot["warnings"].append(f"DATA_DIR not found: {data_dir}")
        return snapshot

    active_sprint, sprint_warnings = load_active_sprint(data_dir)
    warnings.extend(sprint_warnings)
    snapshot["active_sprint"] = active_sprint
    snapshot["diagnostics"] = collect_diagnostics(snapshot)
    snapshot["blockers"] = [
        diagnostic
        for diagnostic in snapshot["diagnostics"]
        if diagnostic.get("severity") == "blocking"
    ]
    snapshot["next_action"] = select_next_action(snapshot)

    goals, goal_warnings, goals_source = load_goals(data_dir)
    warnings.extend(goal_warnings)
    goals_active = goals.get("active_sprint")
    if goals_active and active_sprint["name"] != goals_active:
        warnings.append(
            f"goals.json active_sprint ({goals_active}) is ignored by ProductionSnapshot; "
            f"active sprint source is {active_sprint.get('source') or 'unavailable'}"
        )

    snapshot["warnings"] = warnings
    snapshot["legacy"] = {
        "goals": goals,
        "goals_source": str(goals_source) if goals else None,
    }
    return snapshot
