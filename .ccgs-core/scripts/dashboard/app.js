        // i18n Dictionary
        const i18n = {
            'en': {
                'nav_dashboard': 'Dashboard', 'nav_design': 'Design', 'nav_sprints': 'Sprints', 'nav_quality': 'Quality', 'nav_settings': 'Settings',
                'title_workspace': 'Workspace Overview', 'role_td': 'Technical Director',
                'side_project': 'Project Details', 'side_active': 'Active Sprint', 'side_completed': 'Completed Pts', 'side_total': 'Total Pts',
                'empty_design_title': 'Design Repository Empty', 'empty_design_desc': 'There are no Game Design Documents (GDD) or Technical Architecture diagrams found in the current workspace.',
                'empty_sprints_title': 'No Active Sprint', 'empty_sprints_desc': 'There are no active sprints running. Please create a sprint plan to track stories and velocity.',
                'empty_quality_title': 'Zero Active Bugs', 'empty_quality_desc': 'Excellent work! There are currently no active bug reports in the tracker.',
                'stage_title': 'Project Stage', 'stage_concept': 'Concept', 'stage_systems': 'Systems Design', 'stage_setup': 'Technical Setup',
                'stage_preprod': 'Pre-Production', 'stage_prod': 'Production', 'stage_polish': 'Polish', 'stage_release': 'Release',
                'gate_modal_title': 'Gate Check Details', 'gate_pass': 'Gate: PASS', 'gate_fail': 'Gate: FAIL', 'gate_concerns': 'Gate: CONCERNS',
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
                'nav_dashboard': '大盘概览', 'nav_design': '设计中枢', 'nav_sprints': '敏捷冲刺', 'nav_quality': '质量中心', 'nav_settings': '系统设置',
                'title_workspace': '工作空间概览', 'role_td': '技术总监',
                'side_project': '项目详情', 'side_active': '当前冲刺', 'side_completed': '已完成点数', 'side_total': '总点数',
                'empty_design_title': '设计存储库为空', 'empty_design_desc': '当前工作空间中未找到任何游戏设计文档（GDD）或技术架构蓝图。',
                'empty_sprints_title': '暂无进行中的冲刺', 'empty_sprints_desc': '当前没有任何活跃的敏捷冲刺。请创建一个冲刺计划以追踪故事点与开发速率。',
                'empty_quality_title': '完美状态', 'empty_quality_desc': '干得漂亮！当前追踪系统中没有任何待处理的活跃缺陷报告。',
                'stage_title': '项目阶段', 'stage_concept': '概念孵化', 'stage_systems': '系统设计', 'stage_setup': '技术基建',
                'stage_preprod': '前期量产', 'stage_prod': '全力量产', 'stage_polish': '打磨抛光', 'stage_release': '正式发布',
                'gate_modal_title': '阶段验收明细', 'gate_pass': '验收: 通过', 'gate_fail': '验收: 失败', 'gate_concerns': '验收: 存在隐患',
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

        // Global function for dashboard cards to switch views
        window.switchView = function(viewId) {
            const navItems = document.querySelectorAll('.nav-item');
            const targetNav = Array.from(navItems).find(nav => nav.dataset.target === viewId);
            if (targetNav) {
                targetNav.click();
            }
        };

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
                    
                    document.getElementById('sprint-name').textContent = data.sprint.name || 'N/A';
                    document.getElementById('sprint-pts').textContent = data.sprint.completed_points;
                    document.getElementById('sprint-total').textContent = data.sprint.total_points;
                    
                    // Gate Check Status Light
                    const gateLight = document.getElementById('gate-status-light');
                    if (data.gate_check && data.gate_check.status !== 'unknown') {
                        if (gateLight) {
                            gateLight.style.display = 'flex';
                            const gateDot = document.getElementById('gate-dot');
                            const gateText = document.getElementById('gate-text');
                            
                            gateDot.className = 'gate-dot';
                            if (data.gate_check.status === 'PASS') {
                                gateDot.classList.add('pass');
                                gateText.textContent = i18n[currentLang]['gate_pass'];
                            } else if (data.gate_check.status === 'FAIL') {
                                gateDot.classList.add('fail');
                                gateText.textContent = i18n[currentLang]['gate_fail'];
                            } else if (data.gate_check.status === 'CONCERNS') {
                                gateDot.classList.add('concerns');
                                gateText.textContent = i18n[currentLang]['gate_concerns'];
                            }
                            
                            // Render Modal Body
                            const modalBody = document.getElementById('gate-modal-body');
                            if (modalBody) {
                                modalBody.innerHTML = '';
                                if (data.gate_check.failing.length > 0) {
                                    const section = document.createElement('div');
                                    section.className = 'gate-section gate-section-fail';
                                    
                                    const failTitle = document.createElement('h3');
                                    failTitle.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> ` + (currentLang === 'zh' ? '阻碍项 / 未通过' : 'Blockers / Failing');
                                    section.appendChild(failTitle);
                                    
                                    data.gate_check.failing.forEach(item => {
                                        const div = document.createElement('div');
                                        div.className = 'gate-item';
                                        div.innerHTML = `<span style="color: #ef4444; flex-shrink:0;">✕</span><span>${item}</span>`;
                                        section.appendChild(div);
                                    });
                                    modalBody.appendChild(section);
                                }
                                
                                if (data.gate_check.passing.length > 0) {
                                    const section = document.createElement('div');
                                    section.className = 'gate-section gate-section-pass';
                                    
                                    const passTitle = document.createElement('h3');
                                    passTitle.innerHTML = `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ` + (currentLang === 'zh' ? '已通过项' : 'Passing Items');
                                    section.appendChild(passTitle);
                                    
                                    data.gate_check.passing.forEach(item => {
                                        const div = document.createElement('div');
                                        div.className = 'gate-item';
                                        div.innerHTML = `<span style="color: #10b981; flex-shrink:0;">✓</span><span>${item}</span>`;
                                        section.appendChild(div);
                                    });
                                    modalBody.appendChild(section);
                                }
                            }
                        }
                    } else {
                        if (gateLight) gateLight.style.display = 'none';
                    }
                    
                    // Smart Action Banner
                    if (data.suggested_action) {
                        const banner = document.getElementById('smart-banner');
                        if(banner) {
                            banner.style.display = 'flex';
                            document.getElementById('smart-action-desc').textContent = data.suggested_action.desc;
                            document.getElementById('smart-action-cmd').textContent = data.suggested_action.command;
                            window._currentSmartCommand = data.suggested_action.command;
                        }
                    }
                    
                    const percent = data.sprint.total_points > 0 ? (data.sprint.completed_points / data.sprint.total_points) * 100 : 0;
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
                    
                    if(data.gdd_coverage) {
                        const gddOffset = circumference - (data.gdd_coverage.percent / 100) * circumference;
                        const gddRing = document.getElementById('gdd-ring');
                        const gddVal = document.getElementById('gdd-ring-val');
                        const gddMeta = document.getElementById('gdd-ring-meta');
                        if (gddRing) {
                            setTimeout(() => { 
                                gddRing.style.strokeDashoffset = gddOffset; 
                                if(gddVal) gddVal.textContent = data.gdd_coverage.percent + '%';
                            }, 300);
                        }
                        if(gddMeta) gddMeta.innerHTML = `<strong>${data.gdd_coverage.covered}</strong> / ${data.gdd_coverage.total} TRs`;
                    }
                    
                    if(data.test_coverage) {
                        const testOffset = circumference - (data.test_coverage.percent / 100) * circumference;
                        const testRing = document.getElementById('test-ring');
                        const testVal = document.getElementById('test-ring-val');
                        if (testRing) {
                            setTimeout(() => { 
                                testRing.style.strokeDashoffset = testOffset; 
                                if(testVal) testVal.textContent = data.test_coverage.percent + '%';
                            }, 400);
                        }
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

                    // Health metrics UI has been replaced by GDD/Test coverage
                    // Stage Tracker
                    const stageTracker = document.getElementById('stage-tracker');
                    const stageContainer = document.getElementById('stage-container');
                    if (data.stage && data.stage !== 'unknown') {
                        if(stageTracker) stageTracker.style.display = 'block';
                        
                        const stages = [
                            {id: 'concept', key: 'stage_concept'},
                            {id: 'systems design', key: 'stage_systems'},
                            {id: 'technical setup', key: 'stage_setup'},
                            {id: 'pre-production', key: 'stage_preprod'},
                            {id: 'production', key: 'stage_prod'},
                            {id: 'polish', key: 'stage_polish'},
                            {id: 'release', key: 'stage_release'}
                        ];
                        
                        let fetchedStage = data.stage.toLowerCase().replace('_', ' ');
                        let currentIndex = stages.findIndex(s => s.id === fetchedStage);
                        
                        if(currentIndex === -1) {
                            if (fetchedStage.includes('pre') || fetchedStage.includes('preprod')) currentIndex = 3;
                            else if (fetchedStage.includes('prod')) currentIndex = 4;
                            else if (fetchedStage.includes('sys')) currentIndex = 1;
                            else if (fetchedStage.includes('tech')) currentIndex = 2;
                            else currentIndex = 0; // fallback
                        }
                        
                        if(stageContainer) {
                            stageContainer.innerHTML = '';
                            stages.forEach((st, idx) => {
                                const isCompleted = idx < currentIndex;
                                const isCurrent = idx === currentIndex;
                                
                                const stepDiv = document.createElement('div');
                                stepDiv.className = `stage-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`;
                                
                                const iconContent = isCompleted 
                                    ? `<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`
                                    : (idx + 1);
                                    
                                stepDiv.innerHTML = `
                                    <div class="stage-icon">${iconContent}</div>
                                    <div class="stage-label" data-i18n="${st.key}">${i18n[currentLang][st.key]}</div>
                                `;
                                stageContainer.appendChild(stepDiv);
                            });
                        }
                    } else {
                        if(stageTracker) stageTracker.style.display = 'none';
                    }

                    // Sprints Kanban
                    const colTodo = document.getElementById('col-todo');
                    const colInProg = document.getElementById('col-inprogress');
                    const colDone = document.getElementById('col-done');
                    const kanbanBoard = document.getElementById('kanban-board');
                    const sprintsEmpty = document.getElementById('sprints-empty');
                    
                    if (data.stories && data.stories.length > 0) {
                        if(kanbanBoard) kanbanBoard.style.display = 'grid';
                        if(sprintsEmpty) sprintsEmpty.style.display = 'none';
                        colTodo.innerHTML = ''; colInProg.innerHTML = ''; colDone.innerHTML = '';
                        data.stories.forEach(story => {
                            const card = document.createElement('div');
                            card.className = 'kanban-card';
                            card.draggable = true;
                            card.dataset.storyId = story.id;
                            card.dataset.realStatus = story.status;
                            const prioClass = (story.priority.toLowerCase() === 'high' || story.priority.toLowerCase() === 'critical') ? 'priority-high' : 'priority-low';
                            
                            // 状态色：根据分列状态设置左边框颜色
                            const status = story.status;
                            let statusColor = 'var(--cyan)';  // 默认 TODO
                            if (['done', 'completed', 'closed', 'verified'].includes(status)) {
                                statusColor = '#10b981';
                            } else if (['in progress', 'doing', 'wip', 'review'].includes(status)) {
                                statusColor = 'var(--purple)';
                            }
                            card.style.borderLeft = `4px solid ${statusColor}`;
                            
                            // Epic 标签：截取简短名称
                            const epicShort = (story.epic || '').length > 20 
                                ? (story.epic || '').substring(0, 18) + '…' 
                                : (story.epic || 'N/A');
                            
                            card.innerHTML = `
                                <div class="kb-header">
                                    <span class="kb-id">${story.id}</span>
                                    <span class="kb-epic-tag">${epicShort}</span>
                                </div>
                                <div class="kb-title">${story.title}</div>
                                <div class="kb-footer">
                                    <span class="bug-priority ${prioClass}">${story.priority}</span>
                                    <span class="kb-pts">${story.points} SP</span>
                                </div>
                            `;
                            
                            // 拖拽开始：记录来源卡片 ID
                            card.addEventListener('dragstart', function(e) {
                                e.dataTransfer.setData('text/plain', story.id);
                                e.dataTransfer.effectAllowed = 'move';
                                card.classList.add('kb-dragging');
                            });
                            card.addEventListener('dragend', function() {
                                card.classList.remove('kb-dragging');
                            });
                            
                            // 检查是否处于待确认伪状态（上一次拖拽产生的）
                            const pendingKey = 'kb_pending_' + story.id;
                            const pendingInfo = sessionStorage.getItem(pendingKey);
                            if (pendingInfo) {
                                const pending = JSON.parse(pendingInfo);
                                // 如果真实状态已匹配目标列 → 固化（清除伪状态）
                                const realCol = _getColumnForStatus(story.status);
                                if (realCol === pending.targetCol) {
                                    sessionStorage.removeItem(pendingKey);
                                } else {
                                    // 真实状态未匹配 → 弹回原列，清除伪状态
                                    sessionStorage.removeItem(pendingKey);
                                }
                            }
                            
                            if (['done', 'completed', 'closed', 'verified'].includes(status)) {
                                colDone.appendChild(card);
                            } else if (['in progress', 'doing', 'wip', 'review'].includes(status)) {
                                colInProg.appendChild(card);
                            } else {
                                colTodo.appendChild(card);
                            }
                        });
                        
                        // 为三列容器绑定 dragover/dragleave/drop 事件
                        _setupDropZone(colTodo, 'todo');
                        _setupDropZone(colInProg, 'inprogress');
                        _setupDropZone(colDone, 'done');
                        
                    } else {
                        if(kanbanBoard) kanbanBoard.style.display = 'none';
                        if(sprintsEmpty) sprintsEmpty.style.display = 'flex';
                    }
                    
                    // Active Bugs Triage
                    const triageRows = document.getElementById('triage-rows');
                    const qualityContent = document.getElementById('quality-content');
                    const qualityEmpty = document.getElementById('quality-empty');
                    let countCrit = 0, countMed = 0, countLow = 0;
                    
                    if (!data.bugs || data.bugs.length === 0 || data.bugs[0].id === 'CLEAN') {
                        document.getElementById('qh-total').textContent = 0;
                        if(qualityContent) qualityContent.style.display = 'none';
                        if(qualityEmpty) qualityEmpty.style.display = 'flex';
                    } else {
                        document.getElementById('qh-total').textContent = data.bugs.length;
                        if(qualityContent) qualityContent.style.display = 'contents';
                        if(qualityEmpty) qualityEmpty.style.display = 'none';
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

                    // Activity Timeline 渲染
                    const timelineCard = document.getElementById('activity-timeline-card');
                    const timelineList = document.getElementById('timeline-list');
                    if (data.activity_timeline && data.activity_timeline.length > 0) {
                        if(timelineCard) timelineCard.style.display = 'block';
                        if(timelineList) {
                            timelineList.innerHTML = '';
                            data.activity_timeline.forEach(evt => {
                                const item = document.createElement('div');
                                item.className = 'timeline-item';
                                // 点击时间线条目 → 根据类型跳转到对应视图
                                item.onclick = function() {
                                    if (evt.type === 'gdd') {
                                        window.switchView('design-view');
                                    } else if (evt.type === 'story') {
                                        window.switchView('sprints-view');
                                    } else if (evt.type === 'bug') {
                                        window.switchView('quality-view');
                                    } else {
                                        // 普通 commit → 复制 SHA 到剪贴板
                                        navigator.clipboard.writeText(evt.sha).then(() => {
                                            window.showToast('SHA ' + evt.sha + ' 已复制', 'success');
                                        });
                                    }
                                };
                                item.innerHTML = `
                                    <div class="timeline-dot ${evt.type}"></div>
                                    <div class="timeline-body">
                                        <div class="timeline-msg">${evt.msg}</div>
                                        <div class="timeline-meta">
                                            <span class="timeline-sha">${evt.sha}</span>
                                            <span>${evt.date} ${evt.time}</span>
                                            <span class="timeline-type-tag ${evt.type}">${evt.type}</span>
                                        </div>
                                    </div>
                                `;
                                timelineList.appendChild(item);
                            });
                        }
                    } else {
                        if(timelineCard) timelineCard.style.display = 'none';
                    }

                }).catch(e => {
                    console.log('Data fetching failed.', e);
                    updateConnectionState(false);
                });
        }
        
        // Initial fetch and start polling
        fetchData();
        setInterval(fetchData, 30000);

        // 拖拽辅助：根据 story.status 判断卡片应归属的列
        function _getColumnForStatus(status) {
            if (['done', 'completed', 'closed', 'verified'].includes(status)) return 'done';
            if (['in progress', 'doing', 'wip', 'review'].includes(status)) return 'inprogress';
            return 'todo';
        }

        // 拖拽辅助：根据目标列生成对应的 Skill 指令
        function _getSkillCommand(storyId, targetCol) {
            const path = 'CCGS-Data/production/epics/**/' + storyId + '.md';
            if (targetCol === 'inprogress') return '/dev-story ' + path;
            if (targetCol === 'done') return '/story-done ' + path;
            return '/story-readiness ' + path;
        }

        // 拖拽辅助：为列容器绑定 drop zone 事件
        function _setupDropZone(colBody, colName) {
            if (!colBody) return;
            
            colBody.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                colBody.classList.add('kb-drop-active');
            });
            
            colBody.addEventListener('dragleave', function(e) {
                // 仅当离开列容器本身时才移除高亮
                if (!colBody.contains(e.relatedTarget)) {
                    colBody.classList.remove('kb-drop-active');
                }
            });
            
            colBody.addEventListener('drop', function(e) {
                e.preventDefault();
                colBody.classList.remove('kb-drop-active');
                const storyId = e.dataTransfer.getData('text/plain');
                if (!storyId) return;
                
                // 找到被拖拽的卡片
                const card = document.querySelector(`[data-story-id="${storyId}"]`);
                if (!card) return;
                
                // 如果放回原列则忽略
                const realCol = _getColumnForStatus(card.dataset.realStatus);
                if (realCol === colName) return;
                
                // 移动卡片到目标列并设为待确认伪状态
                colBody.appendChild(card);
                card.classList.add('kb-pending');
                
                // 记录伪状态到 sessionStorage（30s 刷新时校准）
                sessionStorage.setItem('kb_pending_' + storyId, JSON.stringify({
                    targetCol: colName,
                    timestamp: Date.now()
                }));
                
                // 复制对应 Skill 指令到剪贴板
                const command = _getSkillCommand(storyId, colName);
                navigator.clipboard.writeText(command).then(() => {
                    window.showToast('指令已复制: ' + command, 'success');
                    setTimeout(() => {
                        window.showToast('请在 Agent 终端粘贴执行', 'info');
                    }, 1500);
                }).catch(() => {
                    window.showToast('剪贴板写入失败', 'info');
                });
            });
        }

        // Toast Feedback System
        window.showToast = function(message, type = "info") {
            const container = document.getElementById('toast-container');
            if (!container) return;
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            const icon = type === 'success' 
                ? `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
                : `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            toast.innerHTML = `${icon}<span>${message}</span>`;
            container.appendChild(toast);
            
            // Trigger animation
            requestAnimationFrame(() => {
                toast.classList.add('show');
            });
            
            // Remove after delay
            setTimeout(() => {
                toast.classList.remove('show');
                toast.classList.add('hiding');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        };

        // Smart Action Copy Interaction
        window.copySmartAction = function() {
            if (!window._currentSmartCommand) return;
            navigator.clipboard.writeText(window._currentSmartCommand).then(() => {
                // Micro-animation U2: 📋 -> ✅
                const icon = document.getElementById('smart-copy-icon');
                const btn = document.getElementById('smart-copy-btn');
                
                // Switch to checkmark
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
                icon.style.stroke = "#10B981";
                btn.style.borderColor = "#10B981";
                
                // Toast Feedback U1: 2 stages
                window.showToast("指令已复制", "success");
                setTimeout(() => {
                    window.showToast("请在终端粘贴执行", "info");
                }, 1500);
                
                // Revert after 2 seconds
                setTimeout(() => {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>';
                    icon.style.stroke = "currentColor";
                    btn.style.borderColor = "var(--glass-border)";
                }, 2000);
            }).catch(err => {
                window.showToast("复制失败", "info");
            });
        };
