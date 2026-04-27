#!/usr/bin/env python3
"""normalize_status() 归一化函数的单元测试

验证 dashboard.py 中的 status 归一化逻辑能正确处理
所有已知的 CCGS Markdown status 方言，包括 emoji 前缀、
checkbox 格式、大小写变体等。
"""
import sys
import os
import unittest

# 将 dashboard 模块加入路径
_test_dir = os.path.dirname(os.path.abspath(__file__))
_dashboard_dir = os.path.normpath(os.path.join(_test_dir, '..', '..', '..', '.ccgs-core', 'scripts', 'dashboard'))
sys.path.insert(0, _dashboard_dir)
from dashboard import normalize_status


class TestNormalizeStatus(unittest.TestCase):
    """测试 status 归一化的三态映射: todo / in_progress / done"""

    # --- done 态 ---

    def test_plain_done_keywords(self):
        """验证基础 done 关键词（小写）"""
        for kw in ['done', 'complete', 'completed', 'closed', 'verified', 'passed', 'resolved', 'created']:
            with self.subTest(keyword=kw):
                self.assertEqual(normalize_status(kw), 'done')

    def test_done_case_insensitive(self):
        """验证大小写变体"""
        self.assertEqual(normalize_status('Complete'), 'done')
        self.assertEqual(normalize_status('COMPLETE'), 'done')
        self.assertEqual(normalize_status('Done'), 'done')
        self.assertEqual(normalize_status('CLOSED'), 'done')

    def test_done_with_emoji_prefix(self):
        """验证 emoji ✅ 前缀不干扰归一化"""
        self.assertEqual(normalize_status('✅ complete'), 'done')
        self.assertEqual(normalize_status('✅ Complete'), 'done')
        self.assertEqual(normalize_status('✅ done'), 'done')

    def test_done_with_checkbox(self):
        """验证 [x] checkbox 格式归一化为 done"""
        self.assertEqual(normalize_status('[x] passed'), 'done')
        self.assertEqual(normalize_status('[x] created'), 'done')
        self.assertEqual(normalize_status('[X] complete'), 'done')

    # --- in_progress 态 ---

    def test_in_progress_keywords(self):
        """验证 in_progress 关键词"""
        for kw in ['in progress', 'In Progress', 'doing', 'wip', 'review', 'in review']:
            with self.subTest(keyword=kw):
                self.assertEqual(normalize_status(kw), 'in_progress')

    def test_in_progress_underscore_variant(self):
        """验证下划线格式"""
        self.assertEqual(normalize_status('in_progress'), 'in_progress')

    # --- todo 态 ---

    def test_todo_keywords(self):
        """验证 todo 关键词（含 ready / blocked 归入 todo）"""
        for kw in ['todo', 'Todo', 'ready', 'Ready', 'blocked', 'Blocked']:
            with self.subTest(keyword=kw):
                self.assertEqual(normalize_status(kw), 'todo')

    def test_unchecked_checkbox_is_todo(self):
        """验证 [ ] 未勾选 checkbox 直接判定为 todo，无论后续文本"""
        self.assertEqual(normalize_status('[ ] not yet created'), 'todo')
        self.assertEqual(normalize_status('[ ] pending'), 'todo')
        self.assertEqual(normalize_status('[ ] blocked by something'), 'todo')

    # --- 边界 case ---

    def test_empty_string_is_todo(self):
        """空字符串应返回 todo"""
        self.assertEqual(normalize_status(''), 'todo')

    def test_none_is_todo(self):
        """None 应返回 todo"""
        self.assertEqual(normalize_status(None), 'todo')

    def test_unknown_status_is_todo(self):
        """未识别的状态字符串应回退到 todo"""
        self.assertEqual(normalize_status('some random text'), 'todo')
        self.assertEqual(normalize_status('🔮 mystical'), 'todo')

    def test_pure_emoji_is_todo(self):
        """纯 emoji（无文本）应回退到 todo"""
        self.assertEqual(normalize_status('✅'), 'todo')
        self.assertEqual(normalize_status('❌'), 'todo')


if __name__ == '__main__':
    unittest.main()
