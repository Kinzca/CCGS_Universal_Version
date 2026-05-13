import sys
import unittest
from pathlib import Path


CCGS_ROOT = Path(__file__).resolve().parents[2]
DASHBOARD_DIR = CCGS_ROOT / "scripts" / "dashboard"
sys.path.insert(0, str(DASHBOARD_DIR))

from dashboard_data import SNAPSHOT_SCHEMA_VERSION, build_production_snapshot
from dashboard_data.schema import snapshot_to_legacy_payload


FIXTURES_DIR = DASHBOARD_DIR / "dashboard_data" / "fixtures"


class TestProductionSnapshotSchema(unittest.TestCase):
    def test_fixture_project_returns_required_top_level_fields(self):
        snapshot = build_production_snapshot(
            FIXTURES_DIR / "sprint11_conflict_project",
            generated_at="2026-05-12T00:00:00+00:00",
        )

        self.assertEqual(snapshot["schema_version"], SNAPSHOT_SCHEMA_VERSION)
        self.assertEqual(snapshot["generated_at"], "2026-05-12T00:00:00+00:00")
        for key in [
            "data_dir",
            "active_sprint",
            "next_action",
            "blockers",
            "evidence_gaps",
            "recent_changes",
            "legacy",
            "warnings",
        ]:
            self.assertIn(key, snapshot)

        self.assertEqual(snapshot["active_sprint"]["id"], "11")
        self.assertEqual(snapshot["active_sprint"]["name"], "Sprint 11")
        self.assertEqual(len(snapshot["active_sprint"]["items"]), 2)

    def test_goals_active_sprint_conflict_is_a_warning_not_the_snapshot_source(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")

        self.assertEqual(snapshot["active_sprint"]["name"], "Sprint 11")
        self.assertTrue(
            any("goals.json active_sprint" in warning for warning in snapshot["warnings"]),
            snapshot["warnings"],
        )

    def test_empty_project_returns_safe_defaults_without_crashing(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "empty_project")

        self.assertEqual(snapshot["active_sprint"]["name"], "Unknown")
        self.assertEqual(snapshot["active_sprint"]["items"], [])
        self.assertEqual(snapshot["blockers"], [])
        self.assertEqual(snapshot["evidence_gaps"], [])
        self.assertEqual(snapshot["recent_changes"], [])
        self.assertTrue(snapshot["warnings"])

    def test_legacy_payload_contains_existing_dashboard_fields(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")
        payload = snapshot_to_legacy_payload(snapshot)

        for key in ["sprint", "stories", "bugs", "suggested_action", "activity_timeline"]:
            self.assertIn(key, payload)
        self.assertIn("production_snapshot", payload)
        self.assertEqual(payload["production_snapshot"]["schema_version"], SNAPSHOT_SCHEMA_VERSION)

    def test_active_sprint_overrides_legacy_sprint_fields(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")
        payload = snapshot_to_legacy_payload(
            snapshot,
            {
                "sprint": {"name": "legacy-sprint", "total_points": 4},
                "custom_legacy_field": "kept",
            },
        )

        self.assertEqual(payload["sprint"]["name"], "Sprint 11")
        self.assertEqual(payload["sprint"]["total_points"], 0)
        self.assertEqual(payload["custom_legacy_field"], "kept")
        self.assertEqual(payload["production_snapshot"]["active_sprint"]["name"], "Sprint 11")


if __name__ == "__main__":
    unittest.main()
