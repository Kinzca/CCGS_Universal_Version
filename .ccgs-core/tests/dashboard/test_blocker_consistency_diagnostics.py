import sys
import unittest
from pathlib import Path


CCGS_ROOT = Path(__file__).resolve().parents[2]
DASHBOARD_DIR = CCGS_ROOT / "scripts" / "dashboard"
sys.path.insert(0, str(DASHBOARD_DIR))

from dashboard_data import build_production_snapshot
from dashboard_data.rules import collect_diagnostics, select_next_action
from dashboard_data.schema import snapshot_to_legacy_payload


FIXTURES_DIR = DASHBOARD_DIR / "dashboard_data" / "fixtures"


class TestBlockerConsistencyDiagnostics(unittest.TestCase):
    def test_snapshot_exposes_blocked_backlog_item_as_blocker(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")

        blockers = [item for item in snapshot["blockers"] if item["id"] == "explicit-blocker"]

        self.assertEqual(len(blockers), 1)
        self.assertEqual(blockers[0]["severity"], "blocking")
        self.assertEqual(blockers[0]["affected_story"]["id"], "S11-04")
        self.assertEqual(blockers[0]["details"]["blocker"], "S11-03")
        self.assertIn("blocker", blockers[0]["recommended_action"])

    def test_fixture_catches_sprint_status_frontmatter_mismatch(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")

        mismatches = [
            item
            for item in snapshot["diagnostics"]
            if item["id"] == "frontmatter-status-mismatch"
        ]

        self.assertEqual(len(mismatches), 2)
        by_story = {item["affected_story"]["id"]: item for item in mismatches}
        self.assertEqual(by_story["S11-03"]["details"]["sprint_status"], "ready-for-dev")
        self.assertEqual(by_story["S11-03"]["details"]["frontmatter_status"], "complete")
        self.assertEqual(by_story["S11-04"]["details"]["sprint_status"], "backlog")
        self.assertEqual(by_story["S11-04"]["details"]["frontmatter_status"], "todo")

    def test_ready_story_with_incomplete_dependency_blocks_next_action(self):
        snapshot = {
            "project_root": str(FIXTURES_DIR / "sprint11_conflict_project"),
            "active_sprint": {
                "items": [
                    {
                        "id": "DCC-001",
                        "name": "Snapshot schema",
                        "file": "CCGS-Data/production/epics/demo/story-002-blocked-evidence.md",
                        "status": "In Progress",
                        "blocker": "",
                    },
                    {
                        "id": "DCC-004",
                        "name": "Diagnostics",
                        "file": "CCGS-Data/production/epics/demo/story-003-ready-with-incomplete-dep.md",
                        "status": "ready-for-dev",
                        "blocker": "",
                    },
                ]
            },
        }

        diagnostics = collect_diagnostics(snapshot)
        snapshot["diagnostics"] = diagnostics

        dependency_blockers = [
            item for item in diagnostics if item["id"] == "dependency-incomplete"
        ]
        action = select_next_action(snapshot)

        self.assertEqual(len(dependency_blockers), 1)
        self.assertEqual(dependency_blockers[0]["severity"], "blocking")
        self.assertEqual(dependency_blockers[0]["affected_story"]["id"], "DCC-004")
        self.assertEqual(dependency_blockers[0]["details"]["dependency"], "DCC-001")
        self.assertEqual(action["state"], "blocked")
        self.assertIn("生产诊断", action["reason"])

    def test_unresolved_dependency_is_warning_not_crash(self):
        snapshot = {
            "project_root": str(FIXTURES_DIR / "sprint11_conflict_project"),
            "active_sprint": {
                "items": [
                    {
                        "id": "S1",
                        "name": "Ready with missing dependency",
                        "file": "CCGS-Data/production/epics/demo/story-004-ready-with-missing-dep.md",
                        "status": "ready-for-dev",
                        "blocker": "",
                    }
                ]
            },
        }

        diagnostics = collect_diagnostics(snapshot)

        unresolved = [item for item in diagnostics if item["id"] == "dependency-unresolved"]
        self.assertEqual(len(unresolved), 1)
        self.assertEqual(unresolved[0]["severity"], "warning")

    def test_legacy_payload_preserves_diagnostics_for_dashboard_ui(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")
        payload = snapshot_to_legacy_payload(snapshot)

        self.assertEqual(payload["blockers"], snapshot["blockers"])
        self.assertEqual(payload["production_diagnostics"], snapshot["diagnostics"])
        self.assertEqual(
            payload["production_snapshot"]["diagnostics"],
            snapshot["diagnostics"],
        )


if __name__ == "__main__":
    unittest.main()
