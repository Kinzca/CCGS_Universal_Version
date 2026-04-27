#!/usr/bin/env python3
"""Markdown 解析器加固的单元测试

验证 extract_markdown_fields() 的标题多级兜底解析，
以及 Sprint glob 对 retrospective/review 文件的过滤。
"""
import sys
import os
import tempfile
import shutil
import glob
import unittest

# 将 dashboard 模块加入路径
_test_dir = os.path.dirname(os.path.abspath(__file__))
_dashboard_dir = os.path.normpath(os.path.join(_test_dir, '..', '..', '..', '.ccgs-core', 'scripts', 'dashboard'))
sys.path.insert(0, _dashboard_dir)
from dashboard import extract_markdown_fields


class TestExtractMarkdownFieldsTitle(unittest.TestCase):
    """测试标题解析的多级兜底逻辑"""

    def setUp(self):
        """创建临时目录"""
        self.tmp_dir = tempfile.mkdtemp(prefix='ccgs_parser_test_')

    def tearDown(self):
        """清理临时目录"""
        shutil.rmtree(self.tmp_dir, ignore_errors=True)

    def _write_md(self, filename, content):
        """写入临时 Markdown 文件，返回路径"""
        path = os.path.join(self.tmp_dir, filename)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return path

    # --- 标题解析 ---

    def test_story_standard_format(self):
        """'# Story 001: Title' 标准格式"""
        path = self._write_md('story.md', '# Story 001: 伤害管线重构\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], '伤害管线重构')

    def test_bug_report_format(self):
        """'# Bug Report: Title' 格式"""
        path = self._write_md('bug.md', '# Bug Report: 暴击伤害未取整\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], '暴击伤害未取整')

    def test_generic_colon_format(self):
        """'# 任意前缀: Title' 冒号分割兜底"""
        path = self._write_md('epic.md', '# Epic: Dashboard 生产化加固\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], 'Dashboard 生产化加固')

    def test_pure_heading_no_colon(self):
        """'# Title' 纯标题（无冒号）兜底"""
        path = self._write_md('doc.md', '# My Document Title\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], 'My Document Title')

    def test_first_heading_wins(self):
        """多个 # 标题时，第一个被采用"""
        path = self._write_md('multi.md', '# First Title\n\n# Second Title\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], 'First Title')

    def test_no_heading_returns_no_title(self):
        """没有 # 标题时，result 中无 title 键"""
        path = self._write_md('empty.md', '**Status**: Ready\n')
        result = extract_markdown_fields(path)
        self.assertNotIn('title', result)

    # --- 字段解析 ---

    def test_bold_key_value(self):
        """'**Key**: Value' 格式"""
        path = self._write_md('fields.md', '**Status**: Complete\n**Priority**: High\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['status'], 'Complete')
        self.assertEqual(result['priority'], 'High')

    def test_quoted_value_stripped(self):
        """引号包裹的值应被 strip"""
        path = self._write_md('quoted.md', '**Status**: "Ready"\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['status'], 'Ready')

    def test_blockquote_prefix(self):
        """'> **Key**: Value' 格式"""
        path = self._write_md('quote.md', '> **Title**: 测试标题\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], '测试标题')

    # --- 边界 case ---

    def test_missing_file_returns_empty(self):
        """不存在的文件返回空字典"""
        result = extract_markdown_fields('/nonexistent/path.md')
        self.assertEqual(result, {})

    def test_chinese_title_with_colon(self):
        """中文标题含中英文冒号"""
        path = self._write_md('cn.md', '# Story 006: ccgs.env 配置集成 — DATA_DIR 动态读取\n')
        result = extract_markdown_fields(path)
        self.assertEqual(result['title'], 'ccgs.env 配置集成 — DATA_DIR 动态读取')


class TestSprintGlobFilter(unittest.TestCase):
    """测试 Sprint 文件过滤逻辑"""

    def setUp(self):
        """创建临时 sprint 目录"""
        self.tmp_dir = tempfile.mkdtemp(prefix='ccgs_sprint_test_')
        self.sprint_dir = os.path.join(self.tmp_dir, 'production', 'sprints')
        os.makedirs(self.sprint_dir)

    def tearDown(self):
        shutil.rmtree(self.tmp_dir, ignore_errors=True)

    def _create_sprint_file(self, name):
        """创建 sprint 文件"""
        path = os.path.join(self.sprint_dir, name)
        with open(path, 'w') as f:
            f.write(f'# {name}\n')
        return path

    def _get_filtered_sprints(self):
        """模拟 dashboard 的 Sprint 过滤逻辑"""
        SPRINT_SUFFIX_BLACKLIST = ['-retrospective', '-review', '-retro', '-summary']
        sprint_files = glob.glob(os.path.join(self.sprint_dir, 'sprint-*.md'))
        return [
            f for f in sprint_files
            if not any(os.path.basename(f).replace('.md', '').endswith(suffix)
                       for suffix in SPRINT_SUFFIX_BLACKLIST)
        ]

    def test_filter_retrospective(self):
        """sprint-1-retrospective.md 被排除"""
        self._create_sprint_file('sprint-1.md')
        self._create_sprint_file('sprint-1-retrospective.md')
        result = self._get_filtered_sprints()
        names = [os.path.basename(f) for f in result]
        self.assertIn('sprint-1.md', names)
        self.assertNotIn('sprint-1-retrospective.md', names)

    def test_filter_review(self):
        """sprint-1-review.md 被排除"""
        self._create_sprint_file('sprint-1.md')
        self._create_sprint_file('sprint-1-review.md')
        result = self._get_filtered_sprints()
        names = [os.path.basename(f) for f in result]
        self.assertNotIn('sprint-1-review.md', names)

    def test_filter_summary(self):
        """sprint-1-summary.md 被排除"""
        self._create_sprint_file('sprint-1.md')
        self._create_sprint_file('sprint-1-summary.md')
        result = self._get_filtered_sprints()
        self.assertEqual(len(result), 1)

    def test_latest_sprint_selected(self):
        """多个合法 sprint 文件时选择最新的"""
        self._create_sprint_file('sprint-1.md')
        self._create_sprint_file('sprint-2.md')
        self._create_sprint_file('sprint-2-retrospective.md')
        result = self._get_filtered_sprints()
        latest = sorted(result)[-1]
        self.assertTrue(os.path.basename(latest) == 'sprint-2.md')

    def test_no_sprint_files(self):
        """无 sprint 文件时返回空列表"""
        result = self._get_filtered_sprints()
        self.assertEqual(result, [])


if __name__ == '__main__':
    unittest.main()
