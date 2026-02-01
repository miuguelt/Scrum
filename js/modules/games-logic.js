import { store } from './store.js';
import { ScrumData } from '../data/scrum_data.js';

const GamesLogic = {
    initRoleMatching(container) {
        const data = ScrumData.GAME_DATA.roleMatching;
        const roles = ["Product Owner", "Scrum Master", "Developers"];
        let selectedItem = null;

        container.innerHTML = `
            <p>Arrastra la responsabilidad o <strong>toca para seleccionarla</strong> y luego toca el rol correcto.</p>
            
            <div class="role-game-container">
                <div id="responsibilities" class="role-column responsibilities"></div>
                <div id="roles" class="role-column roles"></div>
            </div>
            
            <div id="game-feedback" style="margin-top: 2rem; font-weight: bold; text-align: center; min-height: 1.5em;"></div>
            
            <div style="text-align: center; margin-top: 2rem;">
                 <button id="btn-reset-game" class="action-btn secondary-btn">Reiniciar Juego</button>
            </div>
        `;

        const respCol = container.querySelector('#responsibilities');
        const roleCol = container.querySelector('#roles');
        const feedback = container.querySelector('#game-feedback');

        // Reset Function
        container.querySelector('#btn-reset-game').onclick = () => {
            this.initRoleMatching(container);
        };

        // Render Responsibilities
        data.sort(() => Math.random() - 0.5).forEach(item => {
            const el = document.createElement('div');
            el.className = 'draggable-item';
            el.draggable = true;
            el.innerText = item.text;
            el.dataset.role = item.role;
            el.dataset.id = item.id;
            el.id = `resp-${item.id}`;

            el.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', item.id);
                el.classList.add('dragging');
                if (selectedItem) {
                    selectedItem.classList.remove('selected');
                    selectedItem = null;
                }
            });
            el.addEventListener('dragend', () => el.classList.remove('dragging'));

            // Click to Select
            el.addEventListener('click', (e) => {
                if (el.classList.contains('matched')) return;

                // Toggle selection
                if (selectedItem === el) {
                    selectedItem.classList.remove('selected');
                    selectedItem = null;
                    feedback.innerText = "";
                } else {
                    if (selectedItem) selectedItem.classList.remove('selected');
                    selectedItem = el;
                    el.classList.add('selected');
                    feedback.innerText = "Seleccionado. Ahora toca el Rol correcto.";
                    feedback.style.color = 'var(--primary)';
                }
            });

            respCol.appendChild(el);
        });

        // Render Roles
        roles.forEach(roleName => {
            const el = document.createElement('div');
            el.className = 'role-drop-zone glass-panel';
            el.innerHTML = `<h4>${roleName}</h4><div class="drop-area"></div>`;
            el.dataset.role = roleName;

            el.addEventListener('dragover', e => {
                e.preventDefault();
                el.classList.add('highlight');
            });

            el.addEventListener('dragleave', () => {
                el.classList.remove('highlight');
            });

            const handleMatch = (itemId) => {
                const itemData = data.find(d => d.id == itemId);
                if (!itemData) return;

                if (itemData.role === roleName) {
                    const itemEl = document.getElementById(`resp-${itemId}`);
                    el.querySelector('.drop-area').appendChild(itemEl);

                    itemEl.draggable = false;
                    itemEl.classList.remove('selected');
                    itemEl.classList.add('matched');

                    el.classList.remove('highlight');
                    el.classList.add('correct-match');
                    setTimeout(() => el.classList.remove('correct-match'), 1000);

                    store.addXP(10);
                    feedback.innerText = "✅ ¡Correcto!";
                    feedback.style.color = 'var(--accent)';

                    if (selectedItem === itemEl) selectedItem = null;
                    this.checkWinRoleMatching(container);
                } else {
                    el.classList.remove('highlight');
                    el.classList.add('incorrect-match');
                    setTimeout(() => el.classList.remove('incorrect-match'), 500);

                    feedback.innerText = "❌ No pertenece a este rol.";
                    feedback.style.color = 'var(--danger)';
                }
            };

            el.addEventListener('drop', e => {
                e.preventDefault();
                const itemId = e.dataTransfer.getData('text/plain');
                handleMatch(itemId);
            });

            // Click to Drop
            el.addEventListener('click', () => {
                if (selectedItem) {
                    handleMatch(selectedItem.dataset.id);
                }
            });

            roleCol.appendChild(el);
        });
    },

    checkWinRoleMatching(container) {
        const remaining = container.querySelector('#responsibilities').children.length;
        if (remaining === 0) {
            container.querySelector('#game-feedback').innerHTML = "🎉 ¡Excelente! Has dominado los roles de Scrum. +50 XP bonus.";
            container.querySelector('#game-feedback').style.color = 'var(--accent)';
            store.addXP(50);
        }
    },

    initQuiz(container) {
        const questions = ScrumData.GAME_DATA.quiz;
        let currentQ = 0;
        let score = 0;

        const showQuestion = () => {
            const q = questions[currentQ];
            container.innerHTML = `
                <h3>💡 Scrum Quiz (${currentQ + 1}/${questions.length})</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.2rem; margin-bottom: 2rem;">${q.q}</p>
                    <div id="quiz-options" style="display: flex; flex-direction: column; gap: 1rem;"></div>
                </div>
            `;

            const optContainer = container.querySelector('#quiz-options');
            q.a.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'nav-item';
                btn.style.width = '100%';
                btn.innerText = opt;
                btn.onclick = () => {
                    if (idx === q.correct) {
                        score++;
                        btn.style.background = 'var(--accent)';
                        store.addXP(20);
                    } else {
                        btn.style.background = 'var(--danger)';
                    }

                    setTimeout(() => {
                        currentQ++;
                        if (currentQ < questions.length) {
                            showQuestion();
                        } else {
                            this.showQuizResult(container, score, questions.length);
                        }
                    }, 1000);
                };
                optContainer.appendChild(btn);
            });
        };

        showQuestion();
    },

    showQuizResult(container, score, total) {
        container.innerHTML = `
            <h3>🏁 Quiz Finalizado</h3>
            <div class="glass-panel" style="text-align: center;">
                <p style="font-size: 2rem;">Puntuación: ${score}/${total}</p>
                <p>${score === total ? "¡Eres un experto en Scrum!" : "Buen intento. Sigue repasando la guía."}</p>
                <button class="action-btn primary-btn" style="margin-top: 2rem;" onclick="app.closeContentModal(); app.loadSection('juegos')">Volver al Centro de Juegos</button>
            </div>
        `;
    },

    // --- NEW GAMES ---

    initEstimationGame(container) {
        const data = ScrumData.GAME_DATA.estimation;
        let currentItem = 0;
        let score = 0;
        const fib = [1, 2, 3, 5, 8, 13, 21];

        const render = () => {
            const item = data[currentItem];
            container.innerHTML = `
                <h3>📏 Estimación Fibonacci (${currentItem + 1}/${data.length})</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.2rem; margin-bottom: 1rem;"><strong>Tarea:</strong> ${item.task}</p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin: 1rem 0;">
                        <span class="tag">Esfuerzo: ${item.effort}</span>
                        <span class="tag">Complejidad: ${item.complexity}</span>
                        <span class="tag">Riesgo: ${item.risk}</span>
                    </div>
                    <p>Selecciona los Story Points:</p>
                    <div id="fib-options" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;"></div>
                </div>
                <div id="game-feedback" style="margin-top: 1rem; text-align: center; font-weight: bold;"></div>
            `;

            const optContainer = container.querySelector('#fib-options');
            fib.forEach(val => {
                const btn = document.createElement('button');
                btn.className = 'nav-item';
                btn.innerText = val;
                btn.onclick = () => {
                    if (val === item.correct) {
                        score++;
                        store.addXP(25);
                        document.getElementById('game-feedback').innerHTML = "✅ ¡Exacto! Esa es la estimación adecuada.";
                        document.getElementById('game-feedback').style.color = "var(--accent)";
                    } else {
                        document.getElementById('game-feedback').innerHTML = `❌ Incorrecto. Lo ideal era ${item.correct} SP.`;
                        document.getElementById('game-feedback').style.color = "var(--danger)";
                    }

                    setTimeout(() => {
                        currentItem++;
                        if (currentItem < data.length) render();
                        else this.showGameResult(container, "Estimación Fibonacci", score, data.length);
                    }, 1500);
                };
                optContainer.appendChild(btn);
            });
        };
        render();
    },

    initPlanningChallenge(container) {
        const data = ScrumData.GAME_DATA.planning;
        const capacity = 20;
        let selectedPoints = 0;
        let selectedValue = 0;
        const selectedIds = new Set();

        const render = () => {
            container.innerHTML = `
                <h3>🎯 Reto de Planificación</h3>
                <p>Selecciona historias para el Sprint. Capacidad Máxima: <strong>${capacity} SP</strong></p>
                <div style="display: flex; justify-content: space-between; margin: 1rem 0;">
                    <div class="glass-panel" style="padding: 1rem; flex: 1; margin-right: 0.5rem;">
                        <small>Carga Actual:</small> 
                        <div style="font-size: 1.5rem; color: ${selectedPoints > capacity ? 'var(--danger)' : 'var(--accent)'}">${selectedPoints} / ${capacity} SP</div>
                    </div>
                    <div class="glass-panel" style="padding: 1rem; flex: 1; margin-left: 0.5rem;">
                        <small>Valor Entregado:</small>
                        <div style="font-size: 1.5rem; color: var(--primary)">${selectedValue} pts</div>
                    </div>
                </div>
                <div id="planning-list" style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 300px; overflow-y: auto; padding: 0.5rem;"></div>
                <button id="btn-finish-planning" class="action-btn primary-btn" style="width: 100%; margin-top: 1rem;" 
                    ${selectedPoints > capacity || selectedPoints === 0 ? 'disabled' : ''}>Finalizar Planificación</button>
            `;

            const list = container.querySelector('#planning-list');
            data.forEach(item => {
                const isSelected = selectedIds.has(item.id);
                const el = document.createElement('div');
                el.className = `glass-panel ${isSelected ? 'selected' : ''}`;
                el.style.display = 'flex';
                el.style.justifyContent = 'space-between';
                el.style.alignItems = 'center';
                el.style.cursor = 'pointer';
                el.style.border = isSelected ? '2px solid var(--primary)' : '1px solid var(--glass-border)';
                el.innerHTML = `
                    <div>
                        <strong>${item.title}</strong><br>
                        <small>${item.points} SP | Valor: ${item.value}</small>
                    </div>
                    <div class="checkbox">${isSelected ? '✅' : '➕'}</div>
                `;
                el.onclick = () => {
                    if (isSelected) {
                        selectedIds.delete(item.id);
                        selectedPoints -= item.points;
                        selectedValue -= item.value;
                    } else {
                        selectedIds.add(item.id);
                        selectedPoints += item.points;
                        selectedValue += item.value;
                    }
                    render();
                };
                list.appendChild(el);
            });

            container.querySelector('#btn-finish-planning').onclick = () => {
                const maxPossibleValue = data.filter(i => i.points <= capacity).reduce((a, b) => a + b.value, 0); // Simplified check
                // For a 20 capacity, the optimal value is p2(8,10) + p3(5,7) + p4(3,6) + p1(2,5) = 18SP, 28 value
                const score = Math.round((selectedValue / 28) * 100);
                store.addXP(selectedValue * 5);
                this.showGameResult(container, "Reto de Planificación", score, 100, "porcentaje");
            };
        };
        render();
    },

    initDailyScrumReto(container) {
        const data = ScrumData.GAME_DATA.daily;
        let current = 0;
        let totalImpact = 0;

        const render = () => {
            const item = data[current];
            container.innerHTML = `
                <h3>💬 Situaciones Daily Scrum</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.1rem; font-style: italic; margin-bottom: 2rem;">"${item.scenario}"</p>
                    <div id="daily-options" style="display: flex; flex-direction: column; gap: 1rem;"></div>
                </div>
                <div id="daily-feedback" style="margin-top: 2rem; padding: 1rem; border-radius: 8px;" class="hidden"></div>
            `;

            const optContainer = container.querySelector('#daily-options');
            item.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'nav-item';
                btn.innerText = opt.text;
                btn.onclick = () => {
                    const fb = container.querySelector('#daily-feedback');
                    fb.innerHTML = opt.feedback;
                    fb.style.background = opt.impact > 0 ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)";
                    fb.classList.remove('hidden');
                    totalImpact += opt.impact;
                    store.addXP(opt.impact > 0 ? 30 : 5);

                    setTimeout(() => {
                        current++;
                        if (current < data.length) render();
                        else this.showGameResult(container, "Daily Scrum Reto", totalImpact, 40);
                    }, 2000);
                };
                optContainer.appendChild(btn);
            });
        };
        render();
    },

    initSprintGoalFocus(container) {
        const data = ScrumData.GAME_DATA.sprintGoal;
        const selected = new Set();

        const render = () => {
            container.innerHTML = `
                <h3>🎯 Foco del Sprint</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.1rem;"><strong>Objetivo:</strong> ${data.goal}</p>
                    <p class="game-callout">Selecciona las historias que realmente ayudan a cumplir el objetivo. Evita el trabajo que no aporta valor directo.</p>
                    <div id="sprint-goal-list" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;"></div>
                    <button id="btn-eval-sprint-goal" class="action-btn primary-btn" style="margin-top: 1.5rem;">Evaluar Selección</button>
                </div>
                <div id="sprint-goal-feedback" style="margin-top: 1.5rem;"></div>
            `;

            const list = container.querySelector('#sprint-goal-list');
            data.items.forEach(item => {
                const isSelected = selected.has(item.id);
                const el = document.createElement('div');
                el.className = `selectable-card ${isSelected ? 'selected' : ''}`;
                el.innerHTML = `
                    <div>
                        <strong>${item.title}</strong><br>
                        <small>${item.points} SP • ${item.tag}</small>
                    </div>
                    <div>${isSelected ? '✅' : '➕'}</div>
                `;
                el.onclick = () => {
                    if (isSelected) selected.delete(item.id);
                    else selected.add(item.id);
                    render();
                };
                list.appendChild(el);
            });

            container.querySelector('#btn-eval-sprint-goal').onclick = () => {
                const correctIds = data.items.filter(i => i.fit).map(i => i.id);
                const incorrectIds = data.items.filter(i => !i.fit).map(i => i.id);
                let score = 0;

                correctIds.forEach(id => {
                    if (selected.has(id)) score += 10;
                });
                incorrectIds.forEach(id => {
                    if (selected.has(id)) score -= 5;
                });

                const maxScore = correctIds.length * 10;
                store.addXP(Math.max(0, score));
                this.showGameResult(container, "Foco del Sprint", Math.max(0, score), maxScore);
            };
        };

        render();
    },

    initDoDChecklist(container) {
        const data = ScrumData.GAME_DATA.dodCheck;
        const selected = new Set();

        const render = () => {
            container.innerHTML = `
                <h3>✅ Definition of Done</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.05rem;">Marca todo lo que debe cumplirse para considerar un incremento <strong>terminado</strong>.</p>
                    <div id="dod-list" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;"></div>
                    <button id="btn-eval-dod" class="action-btn primary-btn" style="margin-top: 1.5rem;">Validar DoD</button>
                </div>
                <div id="dod-feedback" style="margin-top: 1.5rem;"></div>
            `;

            const list = container.querySelector('#dod-list');
            data.items.forEach(item => {
                const isSelected = selected.has(item.id);
                const el = document.createElement('div');
                el.className = `selectable-card ${isSelected ? 'selected' : ''}`;
                el.innerHTML = `
                    <div>${item.text}</div>
                    <div>${isSelected ? '✅' : '⬜'}</div>
                `;
                el.onclick = () => {
                    if (isSelected) selected.delete(item.id);
                    else selected.add(item.id);
                    render();
                };
                list.appendChild(el);
            });

            container.querySelector('#btn-eval-dod').onclick = () => {
                let correct = 0;
                let total = data.items.filter(i => i.valid).length;

                data.items.forEach(item => {
                    if (item.valid && selected.has(item.id)) correct++;
                    if (!item.valid && selected.has(item.id)) correct--;
                });

                const score = Math.max(0, correct);
                store.addXP(score * 10);
                this.showGameResult(container, "Definition of Done", score, total);
            };
        };

        render();
    },

    initArtifactMatch(container) {
        const data = ScrumData.GAME_DATA.artifactMatch;
        let current = 0;
        let score = 0;

        const render = () => {
            const item = data[current];
            container.innerHTML = `
                <h3>📦 Artefactos Clave (${current + 1}/${data.length})</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${item.question}</p>
                    <div id="artifact-options" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
                </div>
                <div id="artifact-feedback" style="margin-top: 1rem; font-weight: bold;"></div>
            `;

            const optContainer = container.querySelector('#artifact-options');
            item.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'nav-item';
                btn.style.width = '100%';
                btn.innerText = opt;
                btn.onclick = () => {
                    if (idx === item.correct) {
                        score++;
                        store.addXP(15);
                        container.querySelector('#artifact-feedback').innerText = "✅ Correcto.";
                        container.querySelector('#artifact-feedback').style.color = 'var(--accent)';
                    } else {
                        container.querySelector('#artifact-feedback').innerText = "❌ Revisa la definición del artefacto.";
                        container.querySelector('#artifact-feedback').style.color = 'var(--danger)';
                    }
                    setTimeout(() => {
                        current++;
                        if (current < data.length) render();
                        else this.showGameResult(container, "Artefactos Clave", score, data.length);
                    }, 1200);
                };
                optContainer.appendChild(btn);
            });
        };

        render();
    },

    initReviewDetective(container) {
        const data = ScrumData.GAME_DATA.reviewDetective;
        let current = 0;
        let score = 0;

        const render = () => {
            const item = data[current];
            container.innerHTML = `
                <h3>🕵️ Review Detective (${current + 1}/${data.length})</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${item.prompt}</p>
                    <div id="review-options" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
                </div>
                <div id="review-feedback" style="margin-top: 1rem; font-weight: bold;"></div>
            `;

            const optContainer = container.querySelector('#review-options');
            item.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'nav-item';
                btn.style.width = '100%';
                btn.innerText = opt;
                btn.onclick = () => {
                    if (idx === item.correct) {
                        score++;
                        store.addXP(20);
                        container.querySelector('#review-feedback').innerText = "✅ Esa evidencia demuestra valor real.";
                        container.querySelector('#review-feedback').style.color = 'var(--accent)';
                    } else {
                        container.querySelector('#review-feedback').innerText = "❌ Eso no valida el incremento con stakeholders.";
                        container.querySelector('#review-feedback').style.color = 'var(--danger)';
                    }
                    setTimeout(() => {
                        current++;
                        if (current < data.length) render();
                        else this.showGameResult(container, "Review Detective", score, data.length);
                    }, 1200);
                };
                optContainer.appendChild(btn);
            });
        };

        render();
    },

    initRefinementReady(container) {
        const data = ScrumData.GAME_DATA.refinementReady;
        const selected = new Set();

        const render = () => {
            container.innerHTML = `
                <h3>🧠 Refinement Ready</h3>
                <div class="glass-panel" style="margin-top: 1rem;">
                    <p style="font-size: 1.05rem;">Marca las historias que están listas para entrar al Sprint (DoR).</p>
                    <div id="refinement-list" style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;"></div>
                    <button id="btn-eval-refinement" class="action-btn primary-btn" style="margin-top: 1.5rem;">Evaluar Ready</button>
                </div>
                <div id="refinement-feedback" style="margin-top: 1.5rem;"></div>
            `;

            const list = container.querySelector('#refinement-list');
            data.items.forEach(item => {
                const isSelected = selected.has(item.id);
                const el = document.createElement('div');
                el.className = `selectable-card ${isSelected ? 'selected' : ''}`;
                el.innerHTML = `
                    <div>
                        <strong>${item.title}</strong><br>
                        <small>${item.detail}</small>
                    </div>
                    <div>${isSelected ? '✅' : '⬜'}</div>
                `;
                el.onclick = () => {
                    if (isSelected) selected.delete(item.id);
                    else selected.add(item.id);
                    render();
                };
                list.appendChild(el);
            });

            container.querySelector('#btn-eval-refinement').onclick = () => {
                let correct = 0;
                const total = data.items.filter(i => i.ready).length;

                data.items.forEach(item => {
                    if (item.ready && selected.has(item.id)) correct++;
                    if (!item.ready && selected.has(item.id)) correct--;
                });

                const score = Math.max(0, correct);
                store.addXP(score * 10);
                this.showGameResult(container, "Refinement Ready", score, total);
            };
        };

        render();
    },

    showGameResult(container, title, score, total, type = "puntos") {
        store.updateGameScore(title, { score, total, date: new Date().toISOString() });

        let message = "";
        if (type === "porcentaje") {
            message = score >= 90 ? "🚀 ¡Eficiencia máxima! Eres un estratega nato." : "📈 Buen intento, pero podrías optimizar mejor el valor.";
        } else {
            const ratio = score / total;
            message = ratio >= 0.8 ? "🌟 ¡Excelente desempeño!" : "📚 Sigue practicando para dominar estos conceptos.";
        }

        container.innerHTML = `
            <h3>🏁 ${title} Finalizado</h3>
            <div class="glass-panel" style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">${type === "porcentaje" ? score + '%' : score + '/' + total}</div>
                <p style="font-size: 1.2rem;">${message}</p>
                <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                    <button class="action-btn primary-btn" onclick="app.closeContentModal(); app.loadSection('juegos')">Centro de Juegos</button>
                    <button class="action-btn secondary-btn" onclick="location.reload()">Reiniciar App</button>
                </div>
            </div>
        `;
    }
};

export default GamesLogic;
