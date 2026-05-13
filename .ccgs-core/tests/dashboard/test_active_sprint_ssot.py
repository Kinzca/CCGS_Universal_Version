import sys
import unittest
from pathlib import Path


CCGS_ROOT = Path(__file__).resolve().parents[2]
DASHBOARD_DIR = CCGS_ROOT / "scripts" / "dashboard"
sys.path.insert(0, str(DASHBOARD_DIR))

from dashboard_data import build_production_snapshot
from dashboard_data.schema import snapshot_to_legacy_payload
from dashboard_data.sources import load_active_sprint


FIXTURES_DIR = DASHBOARD_DIR / "dashboard_data" / "fixtures"


class TestActiveSprintSSOT(unittest.TestCase):
    def test_load_active_sprint_uses_sprint_status_yaml(self):
        data_dir = FIXTURES_DIR / "sprint11_conflict_project" / "CCGS-Data"

        active_sprint, warnings = load_active_sprint(data_dir)

        self.assertEqual(warnings, [])
        self.assertEqual(active_sprint["id"], "11")
        self.assertEqual(active_sprint["name"], "Sprint 11")
        self.assertEqual(active_sprint["goal"], "Fixture sprint for ProductionSnapshot")
        self.assertEqual(active_sprint["start"], "2026-05-12")
        self.assertEqual(active_sprint["end"], "2026-05-17")
        self.assertTrue(active_sprint["source"].endswith("production/sprint-status.yaml"))
        self.assertEqual([item["id"] for item in active_sprint["items"]], ["S11-03", "S11-04"])

    def test_goals_active_sprint_cannot_override_snapshot_active_sprint(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")

        self.assertEqual(snapshot["active_sprint"]["name"], "Sprint 11")
        self.assertEqual(snapshot["legacy"]["goals"]["active_sprint"], "sprint-7")
        self.assertTrue(
            any("goals.json active_sprint (sprint-7) is ignored" in warning for warning in snapshot["warnings"]),
            snapshot["warnings"],
        )

    def test_legacy_api_sprint_name_is_overridden_by_production_snapshot(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")
        legacy_data = {
            "sprint": {"name": "sprint-7", "total_points": 0, "completed_points": 0},
            "suggested_action": {"command": "/dev-story old.md", "desc": "legacy recommendation"},
        }

        payload = snapshot_to_legacy_payload(snapshot, legacy_data)

        self.assertEqual(payload["sprint"]["name"], "Sprint 11")
        self.assertEqual(payload["sprint"]["goal"], "Fixture sprint for ProductionSnapshot")
        self.assertEqual(payload["sprint"]["start"], "2026-05-12")
        self.assertEqual(payload["sprint"]["end"], "2026-05-17")
        self.assertEqual(payload["sprint"]["total_points"], 0)
        self.assertEqual(payload["sprint"]["completed_points"], 0)
        self.assertEqual(payload["sprint"]["metrics_source"], "unavailable-pending-sprint-status-metrics")
        self.assertEqual([item["id"] for item in payload["production_queue"]], ["S11-03", "S11-04"])
        self.assertEqual(
            payload["suggested_action"]["command"],
            "/dev-story CCGS-Data/production/epics/demo/story-001-runtime-layer-binding.md",
        )

    def test_legacy_sprint_progress_metrics_cannot_survive_as_active_sprint_truth(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")
        payload = snapshot_to_legacy_payload(
            snapshot,
            {
                "sprint": {
                    "name": "sprint-7",
                    "total_points": 99,
                    "completed_points": 88,
                    "progress_percent": 77,
                    "burn_data": [1, 2, 3],
                },
            },
        )

        self.assertEqual(payload["sprint"]["name"], "Sprint 11")
        self.assertEqual(payload["sprint"]["total_points"], 0)
        self.assertEqual(payload["sprint"]["completed_points"], 0)
        self.assertEqual(payload["sprint"]["progress_percent"], 0)
        self.assertEqual(payload["sprint"]["burn_data"], [])
        self.assertEqual(payload["sprint"]["metrics_source"], "unavailable-pending-sprint-status-metrics")

    def test_missing_sprint_status_does_not_fallback_to_goals_active_sprint(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "goals_only_project")
        payload = snapshot_to_legacy_payload(snapshot, {"sprint": {"name": "sprint-7"}})

        self.assertEqual(snapshot["active_sprint"]["name"], "Unknown")
        self.assertEqual(payload["sprint"]["name"], "Unknown")
        self.assertEqual(snapshot["legacy"]["goals"]["active_sprint"], "sprint-7")
        self.assertTrue(
            any("sprint-status.yaml not found" in warning for warning in snapshot["warnings"]),
            snapshot["warnings"],
        )
        self.assertTrue(
            any("goals.json active_sprint (sprint-7) is ignored" in warning for warning in snapshot["warnings"]),
            snapshot["warnings"],
        )


if __name__ == "__main__":
    unittest.main()
