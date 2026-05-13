import sys
import unittest
from pathlib import Path


CCGS_ROOT = Path(__file__).resolve().parents[2]
DASHBOARD_DIR = CCGS_ROOT / "scripts" / "dashboard"
sys.path.insert(0, str(DASHBOARD_DIR))

from dashboard_data import build_production_snapshot
from dashboard_data.rules import select_next_action
from dashboard_data.schema import snapshot_to_legacy_payload


FIXTURES_DIR = DASHBOARD_DIR / "dashboard_data" / "fixtures"


class TestNextActionRules(unittest.TestCase):
    def test_unique_ready_for_dev_story_returns_dev_story_command(self):
        items = [
            {
                "id": "S1",
                "name": "Implement snapshot",
                "file": "CCGS-Data/production/epics/demo/story-001.md",
                "status": "ready-for-dev",
                "blocker": "",
            },
            {
                "id": "S2",
                "name": "Later work",
                "file": "CCGS-Data/production/epics/demo/story-002.md",
                "status": "backlog",
                "blocker": "",
            },
        ]

        action = select_next_action(items)

        self.assertEqual(action["state"], "ready")
        self.assertEqual(action["story_path"], "CCGS-Data/production/epics/demo/story-001.md")
        self.assertEqual(action["command"], "/dev-story CCGS-Data/production/epics/demo/story-001.md")
        self.assertEqual([candidate["id"] for candidate in action["candidates"]], ["S1"])

    def test_unique_ready_for_dev_story_without_path_is_blocked(self):
        action = select_next_action(
            [
                {
                    "id": "S1",
                    "name": "Pathless ready story",
                    "status": "ready-for-dev",
                    "blocker": "",
                }
            ]
        )

        self.assertEqual(action["state"], "blocked")
        self.assertEqual(action["command"], "/help")
        self.assertIsNone(action["story_path"])
        self.assertIn("缺少可复制的 Story 路径", action["reason"])
        self.assertEqual(action["candidates"][0]["id"], "S1")

    def test_rule_reads_only_active_sprint_items_from_snapshot(self):
        snapshot = {
            "active_sprint": {
                "items": [
                    {
                        "id": "S3",
                        "name": "Current sprint story",
                        "file": "CCGS-Data/production/epics/current/story-003.md",
                        "status": "ready-for-dev",
                        "blocker": "",
                    }
                ]
            },
            "stories": [
                {
                    "id": "OLD",
                    "name": "Old global ready story",
                    "file": "CCGS-Data/production/epics/old/story-old.md",
                    "status": "ready-for-dev",
                    "blocker": "",
                }
            ],
        }

        action = select_next_action(snapshot)

        self.assertEqual(action["state"], "ready")
        self.assertEqual(action["story_path"], "CCGS-Data/production/epics/current/story-003.md")

    def test_no_ready_for_dev_story_returns_none_with_reason(self):
        action = select_next_action(
            [
                {"id": "S1", "name": "Done", "status": "done", "file": "done.md"},
                {"id": "S2", "name": "Backlog", "status": "backlog", "file": "backlog.md"},
            ]
        )

        self.assertEqual(action["state"], "none")
        self.assertEqual(action["command"], "/help")
        self.assertIn("没有未阻塞 ready-for-dev", action["reason"])

    def test_multiple_ready_for_dev_stories_return_ambiguous(self):
        action = select_next_action(
            [
                {"id": "S1", "name": "First", "status": "ready-for-dev", "file": "first.md"},
                {"id": "S2", "name": "Second", "status": "ready-for-dev", "file": "second.md"},
            ]
        )

        self.assertEqual(action["state"], "ambiguous")
        self.assertEqual(action["command"], "/help")
        self.assertEqual([candidate["id"] for candidate in action["candidates"]], ["S1", "S2"])

    def test_blocked_ready_for_dev_story_returns_blocked(self):
        action = select_next_action(
            [
                {
                    "id": "S1",
                    "name": "Blocked ready story",
                    "status": "ready-for-dev",
                    "file": "blocked.md",
                    "blocker": "S0",
                }
            ]
        )

        self.assertEqual(action["state"], "blocked")
        self.assertEqual(action["command"], "/help")
        self.assertIn("S1", action["reason"])
        self.assertEqual(action["candidates"][0]["blocker"], "S0")

    def test_snapshot_integration_selects_fixture_ready_story(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")

        self.assertEqual(snapshot["next_action"]["state"], "ready")
        self.assertEqual(snapshot["next_action"]["candidates"][0]["id"], "S11-03")
        self.assertEqual(
            snapshot["next_action"]["command"],
            "/dev-story CCGS-Data/production/epics/demo/story-001-runtime-layer-binding.md",
        )

    def test_legacy_suggested_action_comes_from_snapshot_next_action(self):
        snapshot = build_production_snapshot(FIXTURES_DIR / "sprint11_conflict_project")
        payload = snapshot_to_legacy_payload(
            snapshot,
            {"suggested_action": {"command": "/dev-story old.md", "desc": "old"}},
        )

        self.assertEqual(payload["next_action"]["state"], "ready")
        self.assertEqual(
            payload["suggested_action"]["command"],
            "/dev-story CCGS-Data/production/epics/demo/story-001-runtime-layer-binding.md",
        )


if __name__ == "__main__":
    unittest.main()
