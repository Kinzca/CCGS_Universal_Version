        // i18n Dictionary
        const i18n = {
            'en': {
                'nav_dashboard': 'Dashboard', 'nav_sprints': 'Sprints', 'nav_bugs': 'Active Bugs', 'nav_settings': 'Settings',
                'title_workspace': 'Workspace Overview', 'role_td': 'Technical Director',
                'side_project': 'Project Details', 'side_active': 'Active Sprint', 'side_completed': 'Completed Pts', 'side_total': 'Total Pts',
                'chart_title': 'Sprint Progress', 'bugs_title': 'Active Bugs', 'health_title': 'Code Debt Indicators',
                'health_todo': 'Technical Debt (TODOs)', 'health_todo_desc': 'Pending architecture or code tasks.',
                'health_fixme': 'Critical Issues (FIXMEs)', 'health_fixme_desc': 'Code that requires immediate attention.',
                'qh_title': 'Quality Health', 'qh_total': 'Total Bugs', 'qh_crit': 'Critical', 'qh_med': 'Medium', 'qh_low': 'Low',
                'triage_title': 'ACTIVE BUGS TRIAGE',
                'set_lang_desc': 'Switch between English and Chinese interface. (Auto-saved)', 'set_app': 'Appearance Mode', 'set_app_desc': 'Toggle between Light and Dark visual modes. (Auto-saved)',

                'flex': 'Flexible', 'std': 'Standard', 'strict': 'Strict',
                'set_theme': 'Theme Accents', 'set_theme_desc': 'Select the global primary color accent for your project workspace. (Auto-saved)',
                'status_connected': 'Connected', 'status_disconnected': 'Offline', 'warn_disconnected': 'Disconnected from server. Retrying...',

                'no_data': 'No Active Sprint Data', 'empty_bugs': 'All clear! No active bugs.', 'empty_kanban': 'Empty Column',
                'clean_bugs': '✅ All clear! No active bugs.'
            },
            'zh': {
                'nav_dashboard': '大盘概览', 'nav_sprints': '敏捷冲刺', 'nav_bugs': '缺陷分诊', 'nav_settings': '系统设置',
                'title_workspace': '工作空间概览', 'role_td': '技术总监',
                'side_project': '项目详情', 'side_active': '当前冲刺', 'side_completed': '已完成点数', 'side_total': '总点数',
                'chart_title': '冲刺进度', 'bugs_title': '活跃缺陷', 'health_title': '代码债务指标',
                'health_todo': '技术债务 (TODOs)', 'health_todo_desc': '待处理的架构或普通代码逻辑。',
                'health_fixme': '致命问题 (FIXMEs)', 'health_fixme_desc': '可能导致崩溃，需要立刻修复。',
                'qh_title': '质量监控中心', 'qh_total': '缺陷总数', 'qh_crit': '致命缺陷', 'qh_med': '一般缺陷', 'qh_low': '低级缺陷',
                'triage_title': '活跃缺陷分诊台',
                'set_lang_desc': '在英文和中文面板之间切换。（已自动保存）', 'set_app': '外观模式', 'set_app_desc': '在极客暗黑和通透白昼模式间切换。（已自动保存）',

                'flex': '宽松', 'std': '标准', 'strict': '严格',
                'set_theme': '强调色配置', 'set_theme_desc': '为当前的工作空间选择一个专属的霓虹强调色。（已自动保存）',
                'status_connected': '已连接', 'status_disconnected': '已断开', 'warn_disconnected': '已与服务器断开连接，正在尝试重连...',

                'no_data': '当前无冲刺数据', 'empty_bugs': '完美！无任何待处理缺陷。', 'empty_kanban': '该列暂无任务',
                'clean_bugs': '✅ 完美！当前无任何活跃缺陷。'
            }
        };

        // ----------------- LOCAL STORAGE INIT -----------------
        let currentLang = localStorage.getItem('ccgs_lang') || 'en';
        let currentMode = localStorage.getItem('ccgs_mode') || 'dark';
        let currentColor = localStorage.getItem('ccgs_color') || '#06B6D4';

        if (currentMode === 'light') {
            document.body.classList.add('light-mode');
        }
        document.documentElement.style.setProperty('--cyan', currentColor);
        document.documentElement.style.setProperty('--cyan-glow', currentColor + '66');
        
        // Setup initial active states in Settings UI when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('#lang-toggle span').forEach(s => {
                s.classList.remove('active');
                if(s.dataset.lang === currentLang) s.classList.add('active');
            });
            document.querySelectorAll('#theme-toggle span').forEach(s => {
                s.classList.remove('active');
                if(s.dataset.mode === currentMode) s.classList.add('active');
            });
            document.querySelectorAll('.swatch').forEach(s => {
                s.classList.remove('active');
                if(s.dataset.color === currentColor) s.classList.add('active');
            });
            
            // Set initial language strings
            setLang(currentLang);
        });
        // ------------------------------------------------------

        function setLang(lang) {
            currentLang = lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const text = i18n[lang][el.dataset.i18n];
                if(text) {
                    // Check if we need to preserve innerHTML structure (icons etc)
                    if(el.childNodes.length > 1) {
                        for(let i=0; i<el.childNodes.length; i++) {
                            if(el.childNodes[i].nodeType === 3 && el.childNodes[i].textContent.trim().length > 0) {
                                el.childNodes[i].textContent = text;
                                break;
                            }
                        }
                    } else {
                        el.textContent = text;
                    }
                }
            });
            // Update Page Title to match Nav
            const activeNav = document.querySelector('.nav-item.active');
            if(activeNav) {
                document.getElementById('page-title').textContent = i18n[lang][activeNav.dataset.i18n];
            }
        }

        // Language Toggle Logic
        const langToggle = document.getElementById('lang-toggle');
        const langBtns = langToggle.querySelectorAll('span');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                localStorage.setItem('ccgs_lang', btn.dataset.lang);
                setLang(btn.dataset.lang);
            });
        });

        // SPA Navigation Logic
        const navItems = document.querySelectorAll('.nav-item');
        const views = document.querySelectorAll('.view-section');
        const pageTitle = document.getElementById('page-title');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if(!item.dataset.target) return;
                
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                pageTitle.textContent = i18n[currentLang][item.dataset.i18n] || item.textContent.trim();

                views.forEach(v => v.classList.remove('active'));
                document.getElementById(item.dataset.target).classList.add('active');
            });
        });

        // Theme Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const themeBtns = themeToggle.querySelectorAll('span');
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                themeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                localStorage.setItem('ccgs_mode', btn.dataset.mode);
                if(btn.dataset.mode === 'light') {
                    document.body.classList.add('light-mode');
                } else {
                    document.body.classList.remove('light-mode');
                }
            });
        });

        // Accent Color Toggle
        const swatches = document.querySelectorAll('.swatch');
        swatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                const color = swatch.dataset.color;
                localStorage.setItem('ccgs_color', color);
                document.documentElement.style.setProperty('--cyan', color);
                document.documentElement.style.setProperty('--cyan-glow', color + '66');
            });
        });

        let failCount = 0;
        const connWarning = document.getElementById('connection-warning');
        const connDot = document.getElementById('conn-dot');
        const connText = document.getElementById('conn-text');

        function updateConnectionState(isOnline) {
            if (isOnline) {
                failCount = 0;
                if(connWarning) connWarning.style.display = 'none';
                if(connDot) {
                    connDot.style.backgroundColor = '#10b981';
                    connDot.style.boxShadow = '0 0 8px #10b981';
                }
                if(connText) connText.textContent = i18n[currentLang]['status_connected'] || 'Connected';
            } else {
                failCount++;
                if(connDot) {
                    connDot.style.backgroundColor = '#ef4444';
                    connDot.style.boxShadow = '0 0 8px #ef4444';
                }
                if(connText) connText.textContent = i18n[currentLang]['status_disconnected'] || 'Offline';
                
                if (failCount >= 2 && connWarning) {
                    connWarning.style.display = 'block';
                }
            }
        }

        // Fetch Dashboard Data (prevent cache to ensure fresh state)
        function fetchData() {
            fetch('/api/data', { cache: 'no-store' })
                .then(res => {
                    if (!res.ok) throw new Error('Network response was not ok');
                    return res.json();
                })
                .then(data => {
                    updateConnectionState(true);
                    
                    // Populate Sidebar
                    document.getElementById('sprint-name').textContent = data.sprint.name || 'N/A';
                    document.getElementById('sprint-pts').textContent = data.sprint.completed_points;
                    document.getElementById('sprint-total').textContent = data.sprint.total_points;
                    
                    const percent = data.sprint.total_points > 0 ? (data.sprint.completed_points / data.sprint.total_points) * 100 : 0;
                    setTimeout(() => { document.getElementById('progress-bar').style.width = percent + '%'; }, 100);
                    
                    // Sprint Progress Ring — 诚实的完成百分比
                    const progressPercent = data.sprint.progress_percent || 0;
                    const circumference = 2 * Math.PI * 85; // r=85
                    const ring = document.getElementById('progress-ring');
                    const ringVal = document.getElementById('progress-ring-val');
                    const ringMeta = document.getElementById('progress-ring-meta');
                    if (ring) {
                        const offset = circumference - (progressPercent / 100) * circumference;
                        setTimeout(() => {
                            ring.style.strokeDashoffset = offset;
                            ringVal.textContent = progressPercent + '%';
                        }, 200);
                        ringMeta.innerHTML = `<strong>${data.sprint.completed_points}</strong> / ${data.sprint.total_points} pts`;
                    }

                    // Bugs List (Dashboard)
                    const list = document.getElementById('bug-list');
                    if (!data.bugs || data.bugs.length === 0 || data.bugs[0].id === 'CLEAN') {
                        list.innerHTML = `<div class="empty-state" data-i18n="empty_bugs">${i18n[currentLang]['empty_bugs']}</div>`;
                    } else {
                        list.innerHTML = ''; // clear before append
                        data.bugs.forEach(bug => {
                            const li = document.createElement('div');
                            li.className = 'bug-item';
                            const p = bug.priority.toLowerCase();
                            const prioClass = (p === 'critical' || p === 'high') ? 'priority-high' : 'priority-low';
                            li.innerHTML = `
                                <div style="display:flex; flex-direction:column; gap:4px; max-width:70%;">
                                    <strong style="color: var(--text-main); font-size: 1rem;">${bug.id}</strong>
                                    <span style="font-size: 0.85rem; color: var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${bug.title}</span>
                                </div>
                                <span class="bug-priority ${prioClass}">${bug.priority}</span>
                            `;
                            list.appendChild(li);
                        });
                    }

                    // Health
                    document.getElementById('todo-val').textContent = data.health.TODOs;
                    document.getElementById('fixme-val').textContent = data.health.FIXMEs;

                    // Sprints Kanban
                    const colTodo = document.getElementById('col-todo');
                    const colInProg = document.getElementById('col-inprogress');
                    const colDone = document.getElementById('col-done');
                    
                    if (data.stories && data.stories.length > 0) {
                        colTodo.innerHTML = ''; colInProg.innerHTML = ''; colDone.innerHTML = '';
                        data.stories.forEach(story => {
                            const card = document.createElement('div');
                            card.className = 'kanban-card';
                            const prioClass = (story.priority.toLowerCase() === 'high' || story.priority.toLowerCase() === 'critical') ? 'priority-high' : 'priority-low';
                            card.innerHTML = `
                                <div class="kb-id">${story.id}</div>
                                <div class="kb-title">${story.title}</div>
                                <div class="kb-footer">
                                    <span class="bug-priority ${prioClass}">${story.priority}</span>
                                    <span class="kb-pts">${story.points} SP</span>
                                </div>
                            `;
                            
                            const status = story.status;
                            if (['done', 'completed', 'closed', 'verified'].includes(status)) {
                                colDone.appendChild(card);
                            } else if (['in progress', 'doing', 'wip', 'review'].includes(status)) {
                                colInProg.appendChild(card);
                            } else {
                                colTodo.appendChild(card);
                            }
                        });
                    } else {
                        colTodo.innerHTML = `<div class="empty-state" style="position:relative; transform:none; left:0; top:0; margin-top:1rem; font-size:0.9rem;" data-i18n="empty_kanban">${i18n[currentLang]['empty_kanban']}</div>`;
                        colInProg.innerHTML = `<div class="empty-state" style="position:relative; transform:none; left:0; top:0; margin-top:1rem; font-size:0.9rem;" data-i18n="empty_kanban">${i18n[currentLang]['empty_kanban']}</div>`;
                        colDone.innerHTML = `<div class="empty-state" style="position:relative; transform:none; left:0; top:0; margin-top:1rem; font-size:0.9rem;" data-i18n="empty_kanban">${i18n[currentLang]['empty_kanban']}</div>`;
                    }
                    
                    // Active Bugs Triage
                    const triageRows = document.getElementById('triage-rows');
                    let countCrit = 0, countMed = 0, countLow = 0;
                    
                    if (!data.bugs || data.bugs.length === 0 || data.bugs[0].id === 'CLEAN') {
                        document.getElementById('qh-total').textContent = 0;
                        triageRows.innerHTML = `<div class="empty-state" style="position:relative; transform:none; left:0; top:0; margin-top:2rem; font-size:1.5rem; color: #10B981;" data-i18n="clean_bugs">${i18n[currentLang]['clean_bugs']}</div>`;
                    } else {
                        document.getElementById('qh-total').textContent = data.bugs.length;
                        triageRows.innerHTML = '';
                        
                        data.bugs.forEach(bug => {
                            let borderClass = 'border-purple';
                            let prioClass = 'priority-low';
                            const p = bug.priority.toLowerCase();
                            
                            if (p === 'critical' || p === 'high') {
                                borderClass = 'border-red';
                                prioClass = 'priority-high';
                                countCrit++;
                            } else if (p === 'medium') {
                                borderClass = 'border-yellow';
                                prioClass = 'priority-low';
                                countMed++;
                            } else {
                                countLow++;
                            }

                            const row = document.createElement('div');
                            row.className = `triage-row ${borderClass}`;
                            row.innerHTML = `
                                <div class="tr-id">${bug.id}</div>
                                <div><span class="bug-priority ${prioClass}">${bug.priority}</span></div>
                                <div class="tr-title">${bug.title}</div>
                                <div class="tr-status">${bug.status}</div>
                                <div class="avatar" style="width:30px;height:30px;font-size:0.7rem;">TD</div>
                            `;
                            triageRows.appendChild(row);
                        });
                    }
                    document.getElementById('qh-critical').textContent = countCrit;
                    document.getElementById('qh-medium').textContent = countMed;
                    document.getElementById('qh-low').textContent = countLow;

                }).catch(e => {
                    console.log('Data fetching failed.', e);
                    updateConnectionState(false);
                });
        }
        
        // Initial fetch and start polling
        fetchData();
        setInterval(fetchData, 30000);
