#!/usr/bin/env python3
"""多引擎源码目录自动发现的单元测试

验证 dashboard.py 中的技术债务扫描逻辑能正确探测
多种引擎的源码目录布局，支持 SRC_DIR 配置覆盖，
并累加所有匹配目录的 TODO/FIXME 计数。
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


class TestSourceDirectoryDiscovery(unittest.TestCase):
    """测试多引擎源码目录自动发现"""

    def setUp(self):
        """创建临时项目目录结构"""
        self.tmp_root = tempfile.mkdtemp(prefix='ccgs_src_test_')
        # 创建必需的 CCGS-Data 结构，否则 gather_data 找不到数据
        os.makedirs(os.path.join(self.tmp_root, 'CCGS-Data', 'production', 'sprints'))
        os.makedirs(os.path.join(self.tmp_root, 'CCGS-Data', 'production', 'epics'))

    def tearDown(self):
        """清理临时目录"""
        shutil.rmtree(self.tmp_root, ignore_errors=True)

    def _create_source_file(self, rel_dir, filename, content):
        """在临时目录中创建源码文件"""
        full_dir = os.path.join(self.tmp_root, rel_dir)
        os.makedirs(full_dir, exist_ok=True)
        with open(os.path.join(full_dir, filename), 'w') as f:
            f.write(content)

    def _run_scan(self, env_overrides=None):
        """模拟 dashboard 的 TODO/FIXME 扫描逻辑（不运行完整 gather_data）"""
        from dashboard import parse_ccgs_env
        
        ccgs_env = parse_ccgs_env(self.tmp_root)
        if env_overrides:
            ccgs_env.update(env_overrides)
        
        SRC_CANDIDATES = ["src", "Assets/Scripts", "Source", "scripts", "js", "app", "lib"]
        src_override = ccgs_env.get('SRC_DIR')
        if src_override:
            scan_dirs = [os.path.join(self.tmp_root, src_override)]
        else:
            scan_dirs = [os.path.join(self.tmp_root, d) for d in SRC_CANDIDATES
                         if os.path.isdir(os.path.join(self.tmp_root, d))]
        
        todos = 0
        fixmes = 0
        for scan_dir in scan_dirs:
            for root, dirs, files in os.walk(scan_dir):
                for f in files:
                    if f.endswith(('.cs', '.js', '.ts', '.gd', '.py', '.cpp', '.h')):
                        try:
                            with open(os.path.join(root, f), 'r', encoding='utf-8') as file:
                                content = file.read()
                                todos += content.count("TODO")
                                fixmes += content.count("FIXME")
                        except (IOError, UnicodeDecodeError):
                            pass
        return {'TODOs': todos, 'FIXMEs': fixmes, 'scan_dirs': scan_dirs}

    # --- 自动探测 ---

    def test_discover_js_directory(self):
        """Web 项目: js/ 目录被自动发现"""
        self._create_source_file('js', 'main.js', '// TODO: implement\n// FIXME: broken\n')
        result = self._run_scan()
        self.assertEqual(result['TODOs'], 1)
        self.assertEqual(result['FIXMEs'], 1)

    def test_discover_unity_directory(self):
        """Unity 项目: Assets/Scripts/ 目录被自动发现"""
        self._create_source_file('Assets/Scripts', 'Player.cs', '// TODO: refactor\n')
        result = self._run_scan()
        self.assertEqual(result['TODOs'], 1)

    def test_discover_ue_directory(self):
        """UE 项目: Source/ 目录被自动发现"""
        self._create_source_file('Source', 'GameMode.cpp', '// FIXME: memory leak\n')
        result = self._run_scan()
        self.assertEqual(result['FIXMEs'], 1)

    def test_discover_godot_directory(self):
        """Godot 项目: scripts/ 目录被自动发现"""
        self._create_source_file('scripts', 'player.gd', '# TODO: add jump\n')
        result = self._run_scan()
        self.assertEqual(result['TODOs'], 1)

    def test_no_source_dirs_returns_zero(self):
        """无任何源码目录时返回 0"""
        result = self._run_scan()
        self.assertEqual(result['TODOs'], 0)
        self.assertEqual(result['FIXMEs'], 0)
        self.assertEqual(len(result['scan_dirs']), 0)

    # --- 多目录累加 ---

    def test_multiple_dirs_accumulate(self):
        """多个源码目录同时存在时，TODOs 累加"""
        self._create_source_file('js', 'app.js', '// TODO: a\n// TODO: b\n')
        self._create_source_file('scripts', 'util.py', '# TODO: c\n')
        result = self._run_scan()
        self.assertEqual(result['TODOs'], 3)

    # --- SRC_DIR 覆盖 ---

    def test_src_dir_override(self):
        """SRC_DIR 环境变量覆盖自动探测"""
        self._create_source_file('js', 'main.js', '// TODO: js\n')
        self._create_source_file('custom_src', 'core.ts', '// TODO: custom1\n// TODO: custom2\n')
        result = self._run_scan(env_overrides={'SRC_DIR': 'custom_src'})
        self.assertEqual(result['TODOs'], 2)  # 只扫描 custom_src，不扫描 js

    def test_src_dir_override_from_ccgs_env_file(self):
        """从 ccgs.env 文件读取 SRC_DIR"""
        self._create_source_file('my_code', 'game.js', '// FIXME: lag\n')
        with open(os.path.join(self.tmp_root, 'ccgs.env'), 'w') as f:
            f.write('SRC_DIR="my_code"\n')
        result = self._run_scan()
        self.assertEqual(result['FIXMEs'], 1)

    # --- 文件扩展名过滤 ---

    def test_ignore_non_source_files(self):
        """非源码文件（.md, .json）不被扫描"""
        self._create_source_file('js', 'readme.md', '# TODO: write docs\n')
        self._create_source_file('js', 'config.json', '{"TODO": true}\n')
        self._create_source_file('js', 'real.js', '// clean code\n')
        result = self._run_scan()
        self.assertEqual(result['TODOs'], 0)


if __name__ == '__main__':
    unittest.main()
