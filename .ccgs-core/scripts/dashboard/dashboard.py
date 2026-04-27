#!/usr/bin/env python3
import os
import json
import glob
import re
import http.server
import socketserver
import webbrowser
from threading import Timer

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(DIRECTORY, "../../../"))
DATA_DIR = os.path.join(PROJECT_ROOT, "CCGS-Data")

def extract_yaml_frontmatter(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
            if match:
                yaml_content = match.group(1)
                result = {}
                for line in yaml_content.split('\n'):
                    if ':' in line:
                        key, val = line.split(':', 1)
                        result[key.strip()] = val.strip().strip('"\'')
                return result
    except:
        pass
    return {}

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
    
    # 1. Parse Sprint Name
    sprint_files = glob.glob(os.path.join(DATA_DIR, "production/sprints/sprint-*.md"))
    if sprint_files:
        latest = sorted(sprint_files)[-1]
        data["sprint"]["name"] = os.path.basename(latest).replace('.md', '')
    
    # 2. Parse Stories for Real Velocity
    story_files = glob.glob(os.path.join(DATA_DIR, "production/stories/*.md"))
    total_pts = 0
    completed_pts = 0
    for sf in story_files:
        fm = extract_yaml_frontmatter(sf)
        pts_str = str(fm.get('points', '0'))
        pts = int(pts_str) if pts_str.isdigit() else 0
        status = fm.get('status', '').lower()
        
        total_pts += pts
        if status in ['done', 'completed', 'closed', 'verified']:
            completed_pts += pts
            
    data["sprint"]["total_points"] = total_pts if total_pts > 0 else 100
    data["sprint"]["completed_points"] = completed_pts
    
    # Generate an adaptive Burn-down curve based on real remaining points
    total = data["sprint"]["total_points"]
    remaining = total - completed_pts
    step = completed_pts / 6 if completed_pts > 0 else (total * 0.1)
    burn = []
    current = total
    for i in range(7):
        burn.append(max(remaining, int(current)))
        current -= step
    # Ensure the last element matches exactly the remaining points
    burn[-1] = remaining
    
    # Convert points to percentages for the CSS height render
    data["sprint"]["burn_data"] = [int((b / total) * 100) if total > 0 else 0 for b in burn]
        
    # 3. Parse Real Bug Data
    bug_files = glob.glob(os.path.join(DATA_DIR, "**", "BUG-*.md"), recursive=True)
    for bf in bug_files:
        name = os.path.basename(bf).replace('.md', '')
        fm = extract_yaml_frontmatter(bf)
        title = fm.get('title', 'Untitled Bug Report')
        priority = fm.get('priority', 'Medium').capitalize()
        status = fm.get('status', 'Open')
        
        if status.lower() not in ['done', 'closed', 'resolved']:
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
        
    # 4. Count Technical Debt (TODO/FIXME)
    src_dir = os.path.join(PROJECT_ROOT, "src")
    if os.path.exists(src_dir):
        for root, dirs, files in os.walk(src_dir):
            for f in files:
                if f.endswith(('.cs', '.js', '.ts', '.gd', '.py', '.cpp', '.h')):
                    try:
                        with open(os.path.join(root, f), 'r', encoding='utf-8') as file:
                            content = file.read()
                            data["health"]["TODOs"] += content.count("TODO")
                            data["health"]["FIXMEs"] += content.count("FIXME")
                    except:
                        pass
                    
    with open(os.path.join(DIRECTORY, "data.json"), "w") as f:
        json.dump(data, f)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def open_browser():
    webbrowser.open_new(f"http://localhost:{PORT}/")

if __name__ == "__main__":
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
