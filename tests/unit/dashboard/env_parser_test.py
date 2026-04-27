#!/usr/bin/env python3
"""parse_ccgs_env() 配置解析函数的单元测试

验证 dashboard.py 中的 ccgs.env 解析逻辑能正确处理
各种格式的配置文件，包括引号值、注释行、空行，
以及配置文件缺失时的回退行为。
"""
import sys
import os
import tempfile
import shutil
import unittest

# 将 dashboard 模块加入路径
_test_dir = os.path.dirname(os.path.abspath(__file__))
_dashboard_dir = os.path.normpath(os.path.join(_test_dir, '..', '..', '..', '.ccgs-core', 'scripts', 'dashboard'))
sys.path.insert(0, _dashboard_dir)
from dashboard import parse_ccgs_env


class TestParseCcgsEnv(unittest.TestCase):
    """测试 ccgs.env 配置文件解析"""

    def setUp(self):
        """创建临时目录模拟项目结构"""
        self.tmp_root = tempfile.mkdtemp(prefix='ccgs_test_')

    def tearDown(self):
        """清理临时目录"""
        shutil.rmtree(self.tmp_root, ignore_errors=True)

    # --- 回退行为 ---

    def test_no_env_file_returns_empty_dict(self):
        """无 ccgs.env 文件时返回空字典，调用方使用硬编码回退"""
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result, {})

    def test_fallback_data_dir(self):
        """调用方从空字典获取 DATA_DIR 时回退到默认值"""
        env = parse_ccgs_env(self.tmp_root)
        data_dir = env.get('DATA_DIR', 'CCGS-Data')
        self.assertEqual(data_dir, 'CCGS-Data')

    # --- 基础解析 ---

    def test_parse_simple_key_value(self):
        """解析简单的 KEY=VALUE 格式"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('DATA_DIR=GameData\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'GameData')

    def test_parse_quoted_value(self):
        """解析双引号包裹的值"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('DATA_DIR="CCGS-Data"\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'CCGS-Data')

    def test_parse_single_quoted_value(self):
        """解析单引号包裹的值"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write("DATA_DIR='MyData'\n")
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'MyData')

    def test_skip_comments(self):
        """# 开头的行应被忽略"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('# This is a comment\nDATA_DIR=Data\n# Another comment\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(len(result), 1)
        self.assertEqual(result['DATA_DIR'], 'Data')

    def test_skip_blank_lines(self):
        """空行应被忽略"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('\nDATA_DIR=Data\n\nSRC_DIR=src\n\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(len(result), 2)

    def test_multiple_keys(self):
        """解析多个 KEY=VALUE 对"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('DATA_DIR="CCGS-Data"\nCORE_DIR=".ccgs-core"\nSRC_DIR="src"\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'CCGS-Data')
        self.assertEqual(result['CORE_DIR'], '.ccgs-core')
        self.assertEqual(result['SRC_DIR'], 'src')

    # --- 优先级 ---

    def test_ccgs_core_priority_over_root(self):
        """`.ccgs-core/ccgs.env` 优先于根目录 `ccgs.env`"""
        # 创建两个 ccgs.env
        os.makedirs(os.path.join(self.tmp_root, '.ccgs-core'))
        with open(os.path.join(self.tmp_root, '.ccgs-core', 'ccgs.env'), 'w') as f:
            f.write('DATA_DIR=FromCore\n')
        with open(os.path.join(self.tmp_root, 'ccgs.env'), 'w') as f:
            f.write('DATA_DIR=FromRoot\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'FromCore')

    def test_root_fallback_when_no_core(self):
        """无 `.ccgs-core/ccgs.env` 时回退到根目录 `ccgs.env`"""
        with open(os.path.join(self.tmp_root, 'ccgs.env'), 'w') as f:
            f.write('DATA_DIR=FromRoot\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'FromRoot')

    # --- 边界 case ---

    def test_value_with_equals_sign(self):
        """值中包含 = 号时只按第一个 = 分割"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('SOME_KEY=value=with=equals\n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['SOME_KEY'], 'value=with=equals')

    def test_whitespace_around_key_value(self):
        """键值两侧的空格应被 strip"""
        env_path = os.path.join(self.tmp_root, 'ccgs.env')
        with open(env_path, 'w') as f:
            f.write('  DATA_DIR  =  "CCGS-Data"  \n')
        result = parse_ccgs_env(self.tmp_root)
        self.assertEqual(result['DATA_DIR'], 'CCGS-Data')


if __name__ == '__main__':
    unittest.main()
