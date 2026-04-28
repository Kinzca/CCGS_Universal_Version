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
                            card.dataset.epic = story.epic || 'N/A';
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
                            
                            // 依赖检查 (Story D-032 / UX Fix)
                            const incompleteDeps = [];
                            const isSelfDone = ['done', 'completed', 'closed', 'verified'].includes(story.status.toLowerCase());
                            if (!isSelfDone && story.dependencies && story.dependencies.length > 0) {
                                story.dependencies.forEach(depId => {
                                    const depStory = data.stories.find(s => s.id === depId);
                                    if (depStory && !['done', 'completed', 'closed', 'verified'].includes(depStory.status.toLowerCase())) {
                                        incompleteDeps.push({ id: depId, status: depStory.status, title: depStory.title });
                                    }
                                });
                            }
                            const isLocked = incompleteDeps.length > 0;
                            
                            if (isLocked) {
                                card.classList.add('kb-locked');
                                card.draggable = false;
                                card.dataset.locked = 'true';
                                card.dataset.incompleteDeps = JSON.stringify(incompleteDeps);
                            }
                            card.dataset.allDeps = JSON.stringify(story.dependencies || []);

                            let lockHtml = '';
                            if (isLocked) {
                                lockHtml = `
                                    <div class="kb-lock-icon-container" title="存在未完成的依赖">
                                        <svg class="kb-lock-icon" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    </div>
                                `;
                            }
                            
                            card.innerHTML = `
                                <div class="kb-header">
                                    <span class="kb-id-group">
                                        ${lockHtml}
                                        <span class="kb-id">${story.id}</span>
                                    </span>
                                    <span class="kb-epic-tag">${epicShort}</span>
                                </div>
                                <div class="kb-title">${story.title}</div>
                                <div class="kb-footer">
                                    <span class="bug-priority ${prioClass}">${story.priority}</span>
                                    <span class="kb-pts">${story.points} SP</span>
                                    <button class="kb-copy-btn" title="复制 Skill 指令">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                                    </button>
                                </div>
                            `;
                            
                            // 📋 复制按钮：点击复制该卡片对应的 Skill 指令
                            const copyBtn = card.querySelector('.kb-copy-btn');
                            copyBtn.addEventListener('click', function(e) {
                                e.stopPropagation();
                                // 根据卡片当前所在列决定指令
                                const parent = card.parentElement;
                                let col = 'todo';
                                if (parent && parent.id === 'col-inprogress') col = 'inprogress';
                                else if (parent && parent.id === 'col-done') col = 'done';
                                const cmd = _getSkillCommand(story.id, col);
                                navigator.clipboard.writeText(cmd).then(() => {
                                    window.showToast('📋 ' + cmd, 'success');
                                    // 按钮微动效：短暂变为 ✅
                                    copyBtn.innerHTML = '<svg width="14" height="14" fill="none" stroke="#10B981" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                                    setTimeout(() => {
                                        copyBtn.innerHTML = '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>';
                                    }, 1500);
                                }).catch(() => {
                                    window.showToast('剪贴板写入失败', 'info');
                                });
                            });

                            // Story D-032: Hovering the ID group highlights connected dependencies
                            const idGroup = card.querySelector('.kb-id-group');
                            if (idGroup) {
                                idGroup.addEventListener('mouseenter', () => {
                                    const myDeps = story.dependencies || [];
                                    const dependingOnMe = [];
                                    if (data && data.stories) {
                                        data.stories.forEach(s => {
                                            if (s.dependencies && s.dependencies.includes(story.id)) {
                                                dependingOnMe.push(s.id);
                                            }
                                        });
                                    }
                                    const allConnected = [...myDeps, ...dependingOnMe];
                                    if (allConnected.length > 0) {
                                        window._activeHoverSource = card;
                                        window._activeHoverDeps = myDeps; 
                                        window._activeHoverDependents = dependingOnMe;
                                        
                                        allConnected.forEach(depId => {
                                            const depCard = document.querySelector(`.kanban-card[data-story-id="${depId}"]`);
                                            if (depCard) {
                                                depCard.classList.add('kb-dep-highlight');
                                            }
                                        });
                                        _drawDependencyLines(card, myDeps, dependingOnMe);
                                    }
                                });
                                idGroup.addEventListener('mouseleave', () => {
                                    window._activeHoverSource = null;
                                    window._activeHoverDeps = null;
                                    window._activeHoverDependents = null;
                                    document.querySelectorAll('.kb-dep-highlight').forEach(el => el.classList.remove('kb-dep-highlight'));
                                    const svgLayer = document.getElementById('dependency-svg-layer');
                                    if (svgLayer) svgLayer.innerHTML = '';
                                });
                            }
                            
                            const lockContainer = card.querySelector('.kb-lock-icon-container');
                            if (lockContainer) {
                                lockContainer.addEventListener('click', (e) => {
                                    e.stopPropagation();
                                    _showDependencyPopover(lockContainer, story.id, incompleteDeps, data);
                                });
                            }

                            // 点击卡片主体滑出详情侧边栏 (防误触)
                            let startX = 0, startY = 0;
                            card.addEventListener('mousedown', (e) => {
                                startX = e.clientX;
                                startY = e.clientY;
                            });
                            card.addEventListener('mouseup', (e) => {
                                const dx = e.clientX - startX;
                                const dy = e.clientY - startY;
                                const dist = Math.sqrt(dx*dx + dy*dy);
                                // 如果移动距离小于 5 像素且未点到复制按钮，视为点击 (非拖拽)
                                if (dist < 5 && !e.target.closest('.kb-copy-btn')) {
                                    if (typeof window.showStoryPanel === 'function') {
                                        window.showStoryPanel(story);
                                    }
                                }
                            });

                            // 拖拽开始：记录来源卡片 ID
                            card.addEventListener('dragstart', function(e) {
                                if (card.dataset.locked === 'true') {
                                    e.preventDefault();
                                    return;
                                }
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
                            let effectiveCol = null; // 如果有 pending 则覆盖真实分列
                            
                            if (pendingInfo) {
                                const pending = JSON.parse(pendingInfo);
                                const realCol = _getColumnForStatus(story.status);
                                const age = Date.now() - pending.timestamp;
                                const PENDING_TTL = 5 * 60 * 1000; // 5 分钟超时
                                
                                if (realCol === pending.targetCol) {
                                    // 真实状态已匹配目标列 → 固化（清除伪状态）
                                    sessionStorage.removeItem(pendingKey);
                                } else if (age > PENDING_TTL) {
                                    // 超时 → 弹回原列，清除伪状态
                                    sessionStorage.removeItem(pendingKey);
                                } else {
                                    // 仍在等待确认 → 保持在目标列 + 保持 pending 样式
                                    effectiveCol = pending.targetCol;
                                    card.classList.add('kb-pending');
                                }
                            }
                            
                            // 按 effectiveCol（若有 pending）或真实 status 分列
                            const targetCol = effectiveCol || _getColumnForStatus(status);
                            if (targetCol === 'done') {
                                colDone.appendChild(card);
                            } else if (targetCol === 'inprogress') {
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
                    
                    if (data.sprint_history && typeof window._renderHistoryDrawer === 'function') {
                        window._renderHistoryDrawer(data.sprint_history, data.sprint);
                    }
                    if (data.stories && typeof window._renderEpicSummary === 'function') {
                        window._renderEpicSummary(data.stories);
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
                
                // 判断卡片是否已在当前列（含 pending 状态的情况）
                const alreadyInColumn = card.parentElement === colBody;
                
                // 如果卡片的真实状态就属于此列且无 pending → 纯原地放回，忽略
                const realCol = _getColumnForStatus(card.dataset.realStatus);
                if (realCol === colName && !card.classList.contains('kb-pending')) return;
                
                if (alreadyInColumn) {
                    // 同列重放：仅复制指令，单条 Toast，不改变状态
                    const command = _getSkillCommand(storyId, colName);
                    if (window._dragToastTimer) clearTimeout(window._dragToastTimer);
                    window._dragToastTimer = null;
                    navigator.clipboard.writeText(command).then(() => {
                        window.showToast('📋 ' + command, 'success');
                    }).catch(() => {
                        window.showToast('剪贴板写入失败', 'info');
                    });
                } else {
                    // 跨列拖拽：移动卡片 + 设置 pending + 复制指令 + 二段式 Toast
                    colBody.appendChild(card);
                    card.classList.add('kb-pending');
                    
                    // UX Fix: 即时更新状态颜色，消除格式滞后感
                    let targetColor = 'var(--cyan)';
                    if (colName === 'done') targetColor = '#10b981';
                    else if (colName === 'inprogress') targetColor = 'var(--purple)';
                    card.style.borderLeft = `4px solid ${targetColor}`;
                    
                    // UX Fix: 拖拽进入后立即移除该列的“无 Story”提示
                    const emptyMsg = colBody.querySelector('.kanban-col-empty-msg');
                    if (emptyMsg) emptyMsg.remove();
                    
                    sessionStorage.setItem('kb_pending_' + storyId, JSON.stringify({
                        targetCol: colName,
                        timestamp: Date.now()
                    }));
                    
                    const command = _getSkillCommand(storyId, colName);
                    if (window._dragToastTimer) clearTimeout(window._dragToastTimer);
                    navigator.clipboard.writeText(command).then(() => {
                        window.showToast('指令已复制: ' + command, 'success');
                        window._dragToastTimer = setTimeout(() => {
                            window.showToast('请在 Agent 终端粘贴执行', 'info');
                            window._dragToastTimer = null;
                        }, 1500);
                    }).catch(() => {
                        window.showToast('剪贴板写入失败', 'info');
                    });
                }
            });
        }

        // Toast Feedback System（限制最多同时显示 3 条，超出时移除最旧的）
        window.showToast = function(message, type = "info") {
            const container = document.getElementById('toast-container');
            if (!container) return;
            
            // 限流：超过 3 条时移除最早的 Toast
            const MAX_TOASTS = 3;
            while (container.children.length >= MAX_TOASTS) {
                container.children[0].remove();
            }
            
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

        // Story Side Panel Logic
        window.showStoryPanel = function(story) {
            document.getElementById('sp-id').innerText = story.id;
            document.getElementById('sp-epic').innerText = story.epic;
            document.getElementById('sp-status').innerText = story.status.toUpperCase();
            document.getElementById('sp-title').innerText = story.title;
            
            // Set up copy handlers
            const btnReady = document.getElementById('sp-btn-ready');
            const btnDev = document.getElementById('sp-btn-dev');
            const btnReview = document.getElementById('sp-btn-review');
            const btnBranch = document.getElementById('sp-btn-branch');
            const btnPath = document.getElementById('sp-btn-path');
            
            // Helper for copy
            const setupCopyBtn = (btn, text, toastPrefix) => {
                // Clear old listeners by cloning
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
                newBtn.addEventListener('click', () => {
                    navigator.clipboard.writeText(text).then(() => {
                        window.showToast(toastPrefix + text, 'success');
                        closeStoryPanel();
                    }).catch(() => {
                        window.showToast('剪贴板写入失败', 'info');
                    });
                });
                return newBtn;
            };
            
            const path = `CCGS-Data/production/epics/**/${story.id}.md`;
            setupCopyBtn(btnReady, `/story-readiness ${path}`, '🔍 ');
            setupCopyBtn(btnDev, `/dev-story ${path}`, '▶️ ');
            setupCopyBtn(btnReview, `/story-done ${path}`, '✅ ');
            setupCopyBtn(btnBranch, `feature/${story.id}`, '🌿 ');
            setupCopyBtn(btnPath, path, '🔗 ');
            
            // Show panel
            document.getElementById('story-panel-overlay').style.display = 'block';
            document.getElementById('story-side-panel').style.display = 'flex';
            // Trigger reflow
            void document.getElementById('story-panel-overlay').offsetWidth;
            document.getElementById('story-panel-overlay').classList.add('show');
            document.getElementById('story-side-panel').classList.add('show');
        };

        const closeStoryPanel = function() {
            const overlay = document.getElementById('story-panel-overlay');
            const panel = document.getElementById('story-side-panel');
            overlay.classList.remove('show');
            panel.classList.remove('show');
            setTimeout(() => {
                overlay.style.display = 'none';
                panel.style.display = 'none';
            }, 300); // Wait for transition
        };

        // Attach close events
        const overlay = document.getElementById('story-panel-overlay');
        if(overlay) overlay.addEventListener('click', closeStoryPanel);
        const closeBtn = document.getElementById('sp-close-btn');
        if(closeBtn) closeBtn.addEventListener('click', closeStoryPanel);

        // History Drawer Implementation (Story D-013)
        window._renderHistoryDrawer = function(historyData, currentSprintData) {
            const container = document.getElementById('history-drawer-content');
            if (!container) return;
            
            // Fallback: Big Metric for insufficient historical data
            if (!historyData || historyData.length < 2) {
                const pct = currentSprintData.total_points > 0 
                    ? Math.round((currentSprintData.completed_points / currentSprintData.total_points) * 100)
                    : 0;
                container.innerHTML = `
                    <div class="big-metric-card">
                        <div class="bm-title" data-i18n="bm_completion">当期冲刺完成率</div>
                        <div class="bm-value">${pct}%</div>
                        <div class="bm-sub">${currentSprintData.completed_points} / ${currentSprintData.total_points} SP</div>
                        <div class="bm-sub" style="margin-top: 10px; font-size: 0.8rem; opacity: 0.5;">
                            需要至少 2 个历史冲刺数据才能生成速率趋势图。
                        </div>
                    </div>
                `;
                return;
            }
            
            // Render SVG Velocity Chart
            const pad = 40;
            const w = 600;
            const h = 240;
            const maxPts = Math.max(...historyData.map(d => Math.max(d.total_points, d.completed_points, 1))) * 1.2;
            const barW = Math.min(40, (w - pad * 2) / historyData.length * 0.6);
            const gap = ((w - pad * 2) - barW * historyData.length) / (historyData.length + 1);
            
            let svgStr = `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" style="overflow:visible; font-family: inherit;">`;
            
            // Background lines & Y-axis labels
            [0, 0.5, 1].forEach(tick => {
                const y = h - pad - tick * (h - pad * 2);
                svgStr += `<line x1="${pad}" y1="${y}" x2="${w-pad}" y2="${y}" stroke="currentColor" stroke-dasharray="4" opacity="0.15"/>`;
                svgStr += `<text x="${pad-10}" y="${y+4}" fill="var(--text-color)" font-size="12" text-anchor="end" opacity="0.7">${Math.round(maxPts * tick)}</text>`;
            });
            
            // Bars & X-axis labels
            historyData.forEach((d, i) => {
                const x = pad + gap * (i + 1) + barW * i;
                const totH = (d.total_points / maxPts) * (h - pad * 2);
                const compH = (d.completed_points / maxPts) * (h - pad * 2);
                
                // Background bar (Total)
                svgStr += `<rect class="svg-bar" data-name="${d.name}" data-total="${d.total_points}" data-comp="${d.completed_points}" 
                    x="${x}" y="${h - pad - totH}" width="${barW}" height="${totH}" 
                    fill="var(--border-color)" rx="4" opacity="0.3"></rect>`;
                    
                // Foreground bar (Completed)
                svgStr += `<rect class="svg-bar" data-name="${d.name}" data-total="${d.total_points}" data-comp="${d.completed_points}" 
                    x="${x}" y="${h - pad - compH}" width="${barW}" height="${compH}" 
                    fill="var(--cyan)" rx="4"></rect>`;
                    
                // Label (Sprint Name)
                svgStr += `<text x="${x + barW/2}" y="${h - pad + 20}" fill="var(--text-color)" font-size="12" text-anchor="middle" opacity="0.8">${d.name}</text>`;
            });
            
            svgStr += `</svg>`;
            container.innerHTML = svgStr;
            
            // Tooltip setup
            let tooltip = document.getElementById('svg-tooltip');
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.id = 'svg-tooltip';
                document.body.appendChild(tooltip);
            }
            
            const bars = container.querySelectorAll('.svg-bar');
            bars.forEach(b => {
                b.addEventListener('mouseenter', () => {
                    const name = b.getAttribute('data-name');
                    const comp = b.getAttribute('data-comp');
                    const tot = b.getAttribute('data-total');
                    tooltip.innerHTML = `<strong>${name}</strong><br/>已完成: <span style="color:var(--cyan)">${comp}</span> / ${tot} SP`;
                    tooltip.style.opacity = '1';
                });
                b.addEventListener('mousemove', (e) => {
                    tooltip.style.left = (e.pageX + 15) + 'px';
                    tooltip.style.top = (e.pageY - 20) + 'px';
                });
                b.addEventListener('mouseleave', () => {
                    tooltip.style.opacity = '0';
                });
            });
        };
        
        // Story D-031: Epic Progress Summary
        let _currentEpicFilter = null;

        window._renderEpicSummary = function(stories) {
            const container = document.getElementById('epic-summary-container');
            const body = document.getElementById('epic-summary-body');
            if (!container || !body) return;

            if (!stories || stories.length === 0) {
                container.style.display = 'none';
                return;
            }
            container.style.display = 'block';

            // Group by Epic
            const epics = {};
            stories.forEach(s => {
                const eName = s.epic || 'N/A';
                if (!epics[eName]) epics[eName] = { total: 0, done: 0, wip: 0 };
                epics[eName].total += s.points;
                const st = s.status;
                if (['done', 'completed', 'closed', 'verified'].includes(st)) {
                    epics[eName].done += s.points;
                } else if (['in progress', 'doing', 'wip', 'review'].includes(st)) {
                    epics[eName].wip += s.points;
                }
            });

            // Generate HTML
            let html = '';
            const epicKeys = Object.keys(epics).sort();
            epicKeys.forEach(eName => {
                const stats = epics[eName];
                const pctDone = stats.total > 0 ? (stats.done / stats.total) * 100 : 0;
                const pctWip = stats.total > 0 ? (stats.wip / stats.total) * 100 : 0;
                const isActive = _currentEpicFilter === eName ? 'active' : '';

                html += `
                    <div class="epic-row ${isActive}" data-epic="${eName}">
                        <div class="epic-name">
                            <svg class="epic-filter-icon" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                            ${eName}
                        </div>
                        <div class="epic-bar-wrapper">
                            <div class="epic-bar-done" style="width: ${pctDone}%"></div>
                            <div class="epic-bar-wip" style="width: ${pctWip}%"></div>
                        </div>
                        <div class="epic-stats">
                            ${stats.done} / ${stats.total}
                        </div>
                    </div>
                `;
            });
            body.innerHTML = html;

            // Bind click events
            body.querySelectorAll('.epic-row').forEach(row => {
                row.addEventListener('click', () => {
                    const eName = row.getAttribute('data-epic');
                    if (_currentEpicFilter === eName) {
                        _currentEpicFilter = null; // Toggle off
                    } else {
                        _currentEpicFilter = eName;
                    }
                    _applyEpicFilter();
                    window._renderEpicSummary(stories); // Re-render to update active classes
                });
            });

            _applyEpicFilter();
        };

        function _applyEpicFilter() {
            const cards = document.querySelectorAll('.kanban-card');
            const banner = document.getElementById('epic-filter-banner');
            const filterName = document.getElementById('epic-filter-name');

            if (_currentEpicFilter) {
                if (banner) banner.style.display = 'flex';
                if (filterName) filterName.textContent = _currentEpicFilter;
            } else {
                if (banner) banner.style.display = 'none';
            }

            // Show/Hide cards
            cards.forEach(card => {
                if (!_currentEpicFilter) {
                    card.style.display = 'block';
                } else {
                    const eName = card.dataset.epic || '';
                    if (eName === _currentEpicFilter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });

            // Update columns empty state
            ['todo', 'inprogress', 'done'].forEach(colId => {
                const colBody = document.getElementById('col-' + colId);
                if (colBody) {
                    // Remove existing empty message if any
                    const existingMsg = colBody.querySelector('.kanban-col-empty-msg');
                    if (existingMsg) existingMsg.remove();

                    // Check visible cards
                    const visibleCards = Array.from(colBody.querySelectorAll('.kanban-card')).filter(c => c.style.display !== 'none');
                    if (visibleCards.length === 0 && _currentEpicFilter) {
                        const msg = document.createElement('div');
                        msg.className = 'kanban-col-empty-msg';
                        msg.textContent = '该 Epic 在此列暂无 Story';
                        colBody.appendChild(msg);
                    }
                }
            });
        }

        // Setup toggle button event
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('toggle-history-btn');
            const drawer = document.getElementById('history-drawer');
            if (btn && drawer) {
                if (sessionStorage.getItem('ccgs_history_open') === 'true') {
                    drawer.classList.add('open');
                }
                btn.addEventListener('click', () => {
                    drawer.classList.toggle('open');
                    sessionStorage.setItem('ccgs_history_open', drawer.classList.contains('open'));
                });
            }

            // D-031 UI Bindings
            const toggleEpicBtn = document.getElementById('toggle-epic-btn');
            const epicContainer = document.getElementById('epic-summary-container');
            if (toggleEpicBtn && epicContainer) {
                toggleEpicBtn.addEventListener('click', () => {
                    epicContainer.classList.toggle('collapsed');
                });
            }

            const clearFilterBtn = document.getElementById('epic-filter-clear');
            if (clearFilterBtn) {
                clearFilterBtn.addEventListener('click', () => {
                    _currentEpicFilter = null;
                    _applyEpicFilter();
                    document.querySelectorAll('.epic-row').forEach(r => r.classList.remove('active'));
                });
            }
        });

        // ---------------------------------------------------------
        // Story D-032: Dependency Interaction Functions
        // ---------------------------------------------------------
        
        window.addEventListener('scroll', () => {
            if (window._activeHoverSource && (window._activeHoverDeps || window._activeHoverDependents)) {
                _drawDependencyLines(window._activeHoverSource, window._activeHoverDeps, window._activeHoverDependents);
            }
        }, true); // Use capture to catch scroll events on any internal div

        function _drawDependencyLines(sourceCard, myDeps, dependingOnMe) {
            let svgLayer = document.getElementById('dependency-svg-layer');
            if (!svgLayer) {
                svgLayer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgLayer.id = 'dependency-svg-layer';
                document.body.appendChild(svgLayer);
            }
            svgLayer.innerHTML = `<defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#F59E0B" /></marker></defs>`;
            
            const board = document.querySelector('.kanban-board');
            if (!board) return;
            const boardRect = board.getBoundingClientRect();
            
            // Limit to board dimensions
            svgLayer.style.left = boardRect.left + 'px';
            svgLayer.style.top = boardRect.top + 'px';
            svgLayer.style.width = boardRect.width + 'px';
            svgLayer.style.height = boardRect.height + 'px';

            const sourceRect = sourceCard.getBoundingClientRect();
            const sourceMidY = sourceRect.top + sourceRect.height / 2 - boardRect.top;
            
            // Draw lines TO things I depend on (myDeps)
            if (myDeps) {
                const startX = sourceRect.left - boardRect.left;
                myDeps.forEach(depId => {
                    const depCard = document.querySelector(`.kanban-card[data-story-id="${depId}"]`);
                    if (depCard) {
                        const depRect = depCard.getBoundingClientRect();
                        const endX = depRect.right - boardRect.left;
                        const endY = depRect.top + depRect.height / 2 - boardRect.top;
                        const controlX1 = startX - 50;
                        const controlX2 = endX + 50;
                        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        path.setAttribute('d', `M ${startX} ${sourceMidY} C ${controlX1} ${sourceMidY}, ${controlX2} ${endY}, ${endX} ${endY}`);
                        path.setAttribute('class', 'dep-arrow-line');
                        svgLayer.appendChild(path);
                    }
                });
            }
            
            // Draw lines FROM things depending on me (dependingOnMe)
            if (dependingOnMe) {
                const endXForThem = sourceRect.right - boardRect.left;
                dependingOnMe.forEach(depId => {
                    const depCard = document.querySelector(`.kanban-card[data-story-id="${depId}"]`);
                    if (depCard) {
                        const depRect = depCard.getBoundingClientRect();
                        const startXForThem = depRect.left - boardRect.left;
                        const startYForThem = depRect.top + depRect.height / 2 - boardRect.top;
                        const controlX1 = startXForThem - 50;
                        const controlX2 = endXForThem + 50;
                        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        path.setAttribute('d', `M ${startXForThem} ${startYForThem} C ${controlX1} ${startYForThem}, ${controlX2} ${sourceMidY}, ${endXForThem} ${sourceMidY}`);
                        path.setAttribute('class', 'dep-arrow-line');
                        svgLayer.appendChild(path);
                    }
                });
            }
        }

        function _showDependencyPopover(iconEl, storyId, incompleteDeps, data) {
            let popover = document.getElementById('dep-popover');
            if (popover) popover.remove();
            if (!incompleteDeps || incompleteDeps.length === 0) return;

            popover = document.createElement('div');
            popover.id = 'dep-popover';
            popover.className = 'dep-popover';
            
            let html = `<div class="dep-popover-header">未完成的依赖 (${incompleteDeps.length})</div>`;
            
            incompleteDeps.forEach(dep => {
                let statusIcon = '⏳';
                if (['in progress', 'doing', 'review'].includes(dep.status.toLowerCase())) statusIcon = '🔄';
                html += `
                    <div class="dep-item">
                        <span class="dep-status-icon">${statusIcon}</span>
                        <span><strong>${dep.id}</strong>: ${dep.title}</span>
                    </div>
                `;
            });
            
            html += `
                <button class="dep-copy-btn">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                    复制 /dev-story 指令
                </button>
            `;
            popover.innerHTML = html;
            document.body.appendChild(popover);
            
            const rect = iconEl.getBoundingClientRect();
            popover.style.top = (rect.bottom + 8) + 'px';
            popover.style.left = (rect.right - 280) + 'px';
            
            const copyBtn = popover.querySelector('.dep-copy-btn');
            copyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const firstDepId = incompleteDeps[0].id;
                let path = firstDepId;
                if (data && data.stories) {
                    const firstDepObj = data.stories.find(s => s.id === firstDepId);
                    if (firstDepObj && firstDepObj.path) {
                        path = firstDepObj.path;
                    }
                }
                const finalCmd = `/dev-story ${path}`;
                navigator.clipboard.writeText(finalCmd).then(() => {
                    window.showToast('📋 ' + finalCmd, 'success');
                    popover.remove();
                });
            });
            
            const closePopover = (e) => {
                if (!popover.contains(e.target) && !iconEl.contains(e.target)) {
                    popover.remove();
                    document.removeEventListener('click', closePopover);
                    document.removeEventListener('keydown', keyClose);
                }
            };
            const keyClose = (e) => {
                if (e.key === 'Escape') {
                    popover.remove();
                    document.removeEventListener('click', closePopover);
                    document.removeEventListener('keydown', keyClose);
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', closePopover);
                document.addEventListener('keydown', keyClose);
            }, 10);
        }

