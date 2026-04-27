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

def gather_data():
    data = {
        "sprint": {
            "name": "N/A",
            "progress": 0,
            "total_points": 100,
            "completed_points": 0,
            "burn_data": []
        },
        "bugs": [],
        "health": {
            "TODOs": 0,
            "FIXMEs": 0
        }
    }
    
    # Basic parsing of CCGS-Data
    sprint_files = glob.glob(os.path.join(DATA_DIR, "production/sprints/sprint-*.md"))
    if sprint_files:
        latest = sorted(sprint_files)[-1]
        data["sprint"]["name"] = os.path.basename(latest).replace('.md', '')
        # Simulated burn down data
        data["sprint"]["burn_data"] = [100, 90, 85, 70, 55, 40, 25]
        data["sprint"]["total_points"] = 100
        data["sprint"]["completed_points"] = 75
        
    # Find Bugs
    bug_files = glob.glob(os.path.join(DATA_DIR, "**", "BUG-*.md"), recursive=True)
    for bf in bug_files:
        name = os.path.basename(bf).replace('.md', '')
        data["bugs"].append({"id": name, "title": "Auto-detected Bug", "priority": "High", "status": "Open"})
        
    if not bug_files:
        data["bugs"] = [
            {"id": "BUG-001", "title": "Placeholder Bug (No bugs found)", "priority": "Low", "status": "Open"}
        ]
        
    # Count TODO/FIXME
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
