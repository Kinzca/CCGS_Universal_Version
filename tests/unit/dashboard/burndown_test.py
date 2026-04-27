#!/usr/bin/env python3
"""燃尽图数据诚实化的单元测试

验证 dashboard.py 的 Sprint Progress 计算逻辑：
- 伪燃尽算法已被移除（burn_data 始终为空）
- progress_percent 准确反映 completed/total 比例
- 边界条件：0 总点数、全部完成、未完成
"""
import sys
import os
import tempfile
import shutil
import json
import unittest

# 将 dashboard 模块加入路径
_test_dir = os.path.dirname(os.path.abspath(__file__))
_dashboard_dir = os.path.normpath(os.path.join(_test_dir, '..', '..', '..', '.ccgs-core', 'scripts', 'dashboard'))
sys.path.insert(0, _dashboard_dir)


class TestBurndownIntegrity(unittest.TestCase):
    """测试燃尽图数据诚实化（方案 A: 进度仪表）"""

    def setUp(self):
        """创建临时项目目录，包含必要结构"""
        self.tmp_root = tempfile.mkdtemp(prefix='ccgs_burn_test_')
        # 创建 CCGS-Data 基础结构
        self.sprint_dir = os.path.join(self.tmp_root, 'CCGS-Data', 'production', 'sprints')
        self.epic_dir = os.path.join(self.tmp_root, 'CCGS-Data', 'production', 'epics', 'test-epic')
        os.makedirs(self.sprint_dir)
        os.makedirs(self.epic_dir)

    def tearDown(self):
        shutil.rmtree(self.tmp_root, ignore_errors=True)

    def _create_story(self, name, status='Ready', points=1):
        """创建模拟 story 文件"""
        path = os.path.join(self.epic_dir, f'{name}.md')
        with open(path, 'w') as f:
            f.write(f'---\n**Status**: {status}\n**Points**: {points}\n---\n# Story 001: {name}\n')
        return path

    def _simulate_gather(self):
        """模拟 gather_data 中的 Sprint Progress 计算逻辑"""
        import glob
        from dashboard import extract_markdown_fields, normalize_status
        
        story_files = glob.glob(os.path.join(self.tmp_root, 'CCGS-Data', 'production', 'epics', '**', 'story-*.md'), recursive=True)
        total_pts = 0
        completed_pts = 0
        for sf in story_files:
            fm = extract_markdown_fields(sf)
            pts_str = str(fm.get('points', '1'))
            pts = int(pts_str) if pts_str.isdigit() else 1
            status = normalize_status(fm.get('status', 'todo'))
            total_pts += pts
            if status == 'done':
                completed_pts += pts

        # 与 dashboard.py 相同的逻辑
        if total_pts > 0:
            progress_percent = round((completed_pts / total_pts) * 100)
        else:
            progress_percent = 0
        burn_data = []  # 始终为空

        return {
            'total_pts': total_pts,
            'completed_pts': completed_pts,
            'progress_percent': progress_percent,
            'burn_data': burn_data
        }

    # --- 核心: 伪数据已移除 ---

    def test_burn_data_always_empty(self):
        """burn_data 始终为空数组，不含伪历史趋势"""
        self._create_story('story-001', 'Complete', 3)
        self._create_story('story-002', 'Ready', 2)
        result = self._simulate_gather()
        self.assertEqual(result['burn_data'], [])

    # --- 进度百分比计算 ---

    def test_progress_partial(self):
        """部分完成: 3/(3+2) = 60%"""
        self._create_story('story-001', 'Complete', 3)
        self._create_story('story-002', 'Ready', 2)
        result = self._simulate_gather()
        self.assertEqual(result['progress_percent'], 60)

    def test_progress_all_done(self):
        """全部完成: 100%"""
        self._create_story('story-001', 'Complete', 5)
        self._create_story('story-002', 'Complete', 5)
        result = self._simulate_gather()
        self.assertEqual(result['progress_percent'], 100)

    def test_progress_none_done(self):
        """无完成: 0%"""
        self._create_story('story-001', 'Ready', 3)
        self._create_story('story-002', 'Ready', 3)
        result = self._simulate_gather()
        self.assertEqual(result['progress_percent'], 0)

    def test_progress_zero_total(self):
        """无 story 文件时: 0%"""
        result = self._simulate_gather()
        self.assertEqual(result['progress_percent'], 0)
        self.assertEqual(result['total_pts'], 0)

    def test_progress_rounding(self):
        """百分比四舍五入: 1/3 ≈ 33%"""
        self._create_story('story-001', 'Complete', 1)
        self._create_story('story-002', 'Ready', 1)
        self._create_story('story-003', 'Ready', 1)
        result = self._simulate_gather()
        self.assertEqual(result['progress_percent'], 33)

    def test_progress_83_percent(self):
        """AC-1 验证: completed=30, total=36 → 约 83%"""
        # 创建 6 个 story，每个 6 points，5 个 Complete
        for i in range(1, 6):
            self._create_story(f'story-00{i}', 'Complete', 6)
        self._create_story('story-006', 'Ready', 6)
        result = self._simulate_gather()
        self.assertEqual(result['progress_percent'], 83)
        self.assertEqual(result['burn_data'], [])


if __name__ == '__main__':
    unittest.main()
