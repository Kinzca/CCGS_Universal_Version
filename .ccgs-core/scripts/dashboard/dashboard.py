#!/usr/bin/env python3
import os
import json
import glob
import re
import http.server
import socketserver
import webbrowser
from threading import Timer
import time

PORT = 8080
CACHE_TTL = 5
_last_data_update = 0
_cached_data = None
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
CWD = os.getcwd()
if os.path.exists(os.path.join(CWD, "CCGS-Data")):
    PROJECT_ROOT = CWD
else:
    PROJECT_ROOT = os.path.abspath(os.path.join(DIRECTORY, "../../../"))

def parse_ccgs_env(project_root):
    """解析 ccgs.env 文件，返回 {key: value} 字典
    
    按优先级依次查找:
    1. {project_root}/.ccgs-core/ccgs.env
    2. {project_root}/ccgs.env
    找到第一个即停止。支持 # 注释行和引号值。
    """
    env = {}
    for candidate in [
        os.path.join(project_root, '.ccgs-core', 'ccgs.env'),
        os.path.join(project_root, 'ccgs.env'),
    ]:
        if os.path.exists(candidate):
            try:
                with open(candidate, 'r', encoding='utf-8') as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith('#') and '=' in line:
                            k, v = line.split('=', 1)
                            env[k.strip()] = v.strip().strip('"').strip("'")
            except (IOError, UnicodeDecodeError) as e:
                print(f"Warning: 无法读取 {candidate}: {e}")
            break
    return env

# 从 ccgs.env 读取 DATA_DIR，回退到硬编码 "CCGS-Data"
_ccgs_env = parse_ccgs_env(PROJECT_ROOT)
DATA_DIR = os.path.join(PROJECT_ROOT, _ccgs_env.get('DATA_DIR', 'CCGS-Data'))

def extract_markdown_fields(filepath):
    """从 Markdown 文件中提取结构化字段
    
    支持的标题格式（按优先级）:
    1. '# Story XXX: Title' — CCGS Story 标准格式
    2. '# Bug Report: Title' — CCGS Bug 标准格式
    3. '# 任意前缀: Title' — 冒号分割兜底
    4. '# Title' — 纯标题兜底（仅在无冒号时触发）
    支持的字段格式: '**Key**: Value' 或 '> **Key**: Value'
    """
    result = {}
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            for line in lines:
                # 标题解析: 多级兜底
                if line.startswith('# ') and 'title' not in result:
                    heading = line[2:].strip()
                    if ':' in heading:
                        # '# Story XXX: Title' / '# Bug Report: Title' / '# 任意: Title'
                        result['title'] = heading.split(':', 1)[1].strip()
                    else:
                        # 纯 '# Title'（无冒号）
                        result['title'] = heading
                # 解析 '**Key**: Value' 或 '> **Key**: Value'
                match = re.search(r'\*\*(.*?)\*\*\s*:\s*(.*)', line)
                if match:
                    key = match.group(1).strip().lower()
                    val = match.group(2).strip().strip('"\'')
                    result[key] = val
    except (IOError, UnicodeDecodeError) as e:
        print(f"Warning: 无法解析 {filepath}: {e}")
    return result

def normalize_status(raw):
    """将任意 Markdown status 格式归一化为三态: todo / in_progress / done
    
    覆盖的格式方言：
    - 大小写变体: complete / Complete / COMPLETE
    - Emoji 前缀: ✅ complete / ✅ Complete  
    - Checkbox 格式: [x] passed / [ ] not yet created
    - 常见同义词: closed / verified / wip / doing / blocked
    """
    if not raw:
        return 'todo'
    # 未勾选的 checkbox 直接判定为 todo（优先于关键词匹配）
    raw_str = str(raw).strip()
    if raw_str.startswith('[ ]'):
        return 'todo'
    # 清除 emoji 和 checkbox 标记
    cleaned = re.sub(r'[\u2705\u274c\u26a0\ufe0f\U0001f534\U0001f7e1\U0001f7e2]', '', raw_str)
    cleaned = re.sub(r'\[.\]\s*', '', cleaned)
    cleaned = cleaned.strip().lower()
    
    done_keywords = ['done', 'complete', 'completed', 'closed', 'verified', 'passed', 'resolved', 'created']
    wip_keywords = ['in progress', 'in_progress', 'doing', 'wip', 'review', 'in review']
    
    if any(kw in cleaned for kw in done_keywords):
        return 'done'
    elif any(kw in cleaned for kw in wip_keywords):
        return 'in_progress'
    else:
        return 'todo'

def gather_data():
    data = {
        "sprint": {
            "name": "N/A",
            "progress": 0,
            "total_points": 0,
            "completed_points": 0,
            "burn_data": []
        },
        "bugs": [],
        "health": {
            "TODOs": 0,
            "FIXMEs": 0
        }
    }
    
    print("Gathering data...")
    print("CWD:", CWD)
    print("DATA_DIR:", DATA_DIR)
    
    # 1. Parse Sprint Name — 排除 retrospective/review 等衍生文档
    SPRINT_SUFFIX_BLACKLIST = ['-retrospective', '-review', '-retro', '-summary']
    sprint_files = glob.glob(os.path.join(DATA_DIR, "production/sprints/sprint-*.md"))
    sprint_files = [
        f for f in sprint_files
        if not any(os.path.basename(f).replace('.md', '').endswith(suffix) for suffix in SPRINT_SUFFIX_BLACKLIST)
    ]
    if sprint_files:
        latest = sorted(sprint_files)[-1]
        data["sprint"]["name"] = os.path.basename(latest).replace('.md', '')
    
    # 2. Parse Stories for Real Velocity and Kanban
    story_files = glob.glob(os.path.join(DATA_DIR, "production", "epics", "**", "story-*.md"), recursive=True)
    data["stories"] = []
    total_pts = 0
    completed_pts = 0
    for sf in story_files:
        fm = extract_markdown_fields(sf)
        pts_str = str(fm.get('points', '1'))
        pts = int(pts_str) if pts_str.isdigit() else 1
        status = normalize_status(fm.get('status', 'todo'))
        
        # Append story data for Kanban board
        data["stories"].append({
            "id": os.path.basename(sf).replace('.md', ''),
            "title": fm.get('title', 'Untitled Story'),
            "points": pts,
            "priority": fm.get('priority', 'Medium').capitalize(),
            "status": status
        })
        
        total_pts += pts
        if status == 'done':
            completed_pts += pts
            
    data["sprint"]["total_points"] = total_pts
    data["sprint"]["completed_points"] = completed_pts
    
    # Sprint Progress — 诚实的完成百分比（方案 A: 替代伪燃尽图）
    # 不再生成伪历史趋势线，仅输出真实的当前完成率
    if total_pts > 0:
        data["sprint"]["progress_percent"] = round((completed_pts / total_pts) * 100)
    else:
        data["sprint"]["progress_percent"] = 0
    data["sprint"]["burn_data"] = []  # 保留字段，向后兼容
        
    # 3. Parse Real Bug Data
    bug_files = glob.glob(os.path.join(DATA_DIR, "**", "BUG-*.md"), recursive=True)
    for bf in bug_files:
        if 'triage' in bf.lower(): continue # skip bug-triage
        name = os.path.basename(bf).replace('.md', '')
        fm = extract_markdown_fields(bf)
        title = fm.get('title', 'Untitled Bug Report')
        priority = fm.get('priority', 'Medium').capitalize()
        status = fm.get('status', 'Open')
        normalized_bug_status = normalize_status(status)
        
        if normalized_bug_status != 'done':
            data["bugs"].append({
                "id": name, 
                "title": title, 
                "priority": priority, 
                "status": status
            })
            
    # Sort bugs by priority: Critical > High > Medium > Low
    priority_map = {"critical": 0, "high": 1, "medium": 2, "low": 3}
    data["bugs"].sort(key=lambda x: priority_map.get(x["priority"].lower(), 4))
        
    if not data["bugs"]:
        data["bugs"] = [
            {"id": "CLEAN", "title": "Zero active bugs detected!", "priority": "Low", "status": "Clean"}
        ]
        
    # 4. Count Technical Debt (TODO/FIXME) — 多引擎源码目录自动发现
    # 候选列表覆盖主流引擎: Web(src/js/app), Unity(Assets/Scripts), UE(Source), Godot(scripts/src), Python(lib)
    SRC_CANDIDATES = ["src", "Assets/Scripts", "Source", "scripts", "js", "app", "lib"]
    
    # 优先使用 ccgs.env 中的 SRC_DIR 配置
    src_override = _ccgs_env.get('SRC_DIR')
    if src_override:
        scan_dirs = [os.path.join(PROJECT_ROOT, src_override)]
    else:
        scan_dirs = [os.path.join(PROJECT_ROOT, d) for d in SRC_CANDIDATES
                     if os.path.isdir(os.path.join(PROJECT_ROOT, d))]
    
    for scan_dir in scan_dirs:
        for root, dirs, files in os.walk(scan_dir):
            for f in files:
                if f.endswith(('.cs', '.js', '.ts', '.gd', '.py', '.cpp', '.h')):
                    try:
                        with open(os.path.join(root, f), 'r', encoding='utf-8') as file:
                            content = file.read()
                            data["health"]["TODOs"] += content.count("TODO")
                            data["health"]["FIXMEs"] += content.count("FIXME")
                    except (IOError, UnicodeDecodeError) as e:
                        print(f"Warning: 无法读取 {os.path.join(root, f)}: {e}")
                        
    # 5. Parse current Stage
    stage_path = os.path.join(DATA_DIR, "production", "tracking", "stage.txt")
    if not os.path.exists(stage_path):
        stage_path = os.path.join(DATA_DIR, "production", "stage.txt")
        
    current_stage = "unknown"
    if os.path.exists(stage_path):
        try:
            with open(stage_path, 'r', encoding='utf-8') as f:
                current_stage = f.read().strip().lower()
        except Exception:
            pass
            
    data["stage"] = current_stage
    
    # 6. Parse latest gate-check report
    gate_reports_dirs = [
        os.path.join(DATA_DIR, "production", "qa", "reports"),
        os.path.join(DATA_DIR, "production", "gate-checks")
    ]
    
    gate_files = []
    for d in gate_reports_dirs:
        if os.path.exists(d):
            gate_files.extend([os.path.join(d, f) for f in os.listdir(d) if f.endswith('.md') and 'gate' in f.lower() or 'report' in f.lower()])
            
    gate_files.sort(key=lambda x: os.path.getmtime(x), reverse=True)
    
    gate_data = {
        "status": "unknown",
        "passing": [],
        "failing": []
    }
    
    if gate_files:
        latest_gate = gate_files[0]
        try:
            with open(latest_gate, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Find verdict
            verdict_match = re.search(r'### Verdict:\s*\[?(PASS|CONCERNS|FAIL)\]?', content, re.IGNORECASE)
            if verdict_match:
                gate_data["status"] = verdict_match.group(1).upper()
                
            # Find passing/failing items based on checkbox syntax
            for line in content.split('\n'):
                line = line.strip()
                if line.startswith('- [x]') or line.startswith('- [X]'):
                    item = line[5:].strip()
                    if item:
                        gate_data["passing"].append(item)
                elif line.startswith('- [ ]'):
                    item = line[5:].strip()
                    if item:
                        gate_data["failing"].append(item)
        except Exception as e:
            print(f"Warning: 无法解析 {latest_gate}: {e}")
            
    data["gate_check"] = gate_data
                    
    global _last_data_update, _cached_data
    with open(os.path.join(DIRECTORY, "data.json"), "w") as f:
        json.dump(data, f)
    _cached_data = json.dumps(data)
    _last_data_update = time.time()

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
        
    def do_GET(self):
        if self.path == '/api/data':
            if time.time() - _last_data_update > CACHE_TTL or _cached_data is None:
                gather_data()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(_cached_data.encode('utf-8'))
        else:
            super().do_GET()
        
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

def open_browser():
    webbrowser.open_new(f"http://localhost:{PORT}/")

def repair_metadata():
    print(f"Repairing metadata in {DATA_DIR}...")
    import re
    
    # 1. repair stage.txt
    stage_path = os.path.join(DATA_DIR, "production", "tracking", "stage.txt")
    os.makedirs(os.path.dirname(stage_path), exist_ok=True)
    if not os.path.exists(stage_path):
        with open(stage_path, "w", encoding="utf-8") as f:
            f.write("production")
        print(f"Created {stage_path}")

    # 2. repair systems-index.md
    index_path = os.path.join(DATA_DIR, "design", "systems-index.md")
    os.makedirs(os.path.dirname(index_path), exist_ok=True)
    if not os.path.exists(index_path):
        with open(index_path, "w", encoding="utf-8") as f:
            f.write("# Systems Index\n\n| System | Layer | Priority | Status | Design Doc |\n|---|---|---|---|---|\n")
        print(f"Created {index_path}")

    def inject_frontmatter(filepath, default_yaml):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            if content.startswith('---'):
                return # Already has frontmatter
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(default_yaml + "\n" + content)
            print(f"Repaired: {filepath}")
        except Exception as e:
            print(f"Failed to repair {filepath}: {e}")

    # 3. GDDs
    for f in glob.glob(os.path.join(DATA_DIR, "design", "gdd", "*.md")):
        if "index" in f.lower() or "concept" in f.lower() or "pillars" in f.lower(): continue
        name = os.path.basename(f).replace('.md', '')
        yaml = f"---\nid: \"{name}\"\nsystem: \"{name.replace('-', ' ').title()}\"\nlayer: \"Core\"\nversion: \"0.1.0\"\nstatus: \"Draft\"\n---"
        inject_frontmatter(f, yaml)

    # 4. Epics
    for f in glob.glob(os.path.join(DATA_DIR, "production", "epics", "*", "EPIC.md")):
        epic = os.path.basename(os.path.dirname(f))
        yaml = f"---\nepic: \"{epic}\"\ntitle: \"{epic}\"\nstatus: \"Todo\"\nlayer: \"Core\"\n---"
        inject_frontmatter(f, yaml)

    # 5. Stories
    for f in glob.glob(os.path.join(DATA_DIR, "production", "epics", "*", "story-*.md")):
        epic = os.path.basename(os.path.dirname(f))
        deps = []
        try:
            with open(f, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                for line in lines:
                    if "Dependencies" in line or "Depends on" in line:
                        matches = re.findall(r'([D]-\d{3})', line)
                        deps.extend(matches)
        except:
            pass
        deps_str = "[" + ", ".join(f'"{d}"' for d in set(deps)) + "]"
        yaml = f"---\nepic: \"{epic}\"\nstatus: \"Todo\"\ntype: \"Logic\"\nestimate: \"1天\"\ndependencies: {deps_str}\ngroup: \"{epic}\"\n---"
        inject_frontmatter(f, yaml)

    # 6. Bugs
    for f in glob.glob(os.path.join(DATA_DIR, "production", "qa", "bugs", "*.md")):
        bug_id = os.path.basename(f).replace('.md', '')
        yaml = f"---\nid: \"{bug_id}\"\ntitle: \"{bug_id}\"\nseverity: \"Medium\"\npriority: \"P2\"\nstatus: \"Open\"\n---"
        inject_frontmatter(f, yaml)

    # 7. Sprints
    for f in glob.glob(os.path.join(DATA_DIR, "production", "sprints", "sprint-*.md")):
        sprint_id = os.path.basename(f).replace('.md', '')
        yaml = f"---\nid: \"{sprint_id}\"\nname: \"{sprint_id}\"\nstart_date: \"\"\nend_date: \"\"\nstories: []\n---"
        inject_frontmatter(f, yaml)

    print("Metadata repair completed.")

if __name__ == "__main__":
    import sys
    if "--repair" in sys.argv:
        repair_metadata()
        sys.exit(0)
        
    print("Gathering project data for Dashboard...")
    gather_data()
    print("Starting Glassmorphism Dashboard...")
    
    for current_port in range(8080, 8090):
        try:
            with socketserver.TCPServer(("", current_port), Handler) as httpd:
                print(f"Serving at http://localhost:{current_port}")
                Timer(1, lambda p=current_port: webbrowser.open_new(f"http://localhost:{p}/")).start()
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\nDashboard shut down.")
                break
        except OSError:
            continue
