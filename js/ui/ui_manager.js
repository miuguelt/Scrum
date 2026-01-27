/**
 * Módulo de Interfaz (UI Manager) - COMPATIBLE NO-SERVER
 * Usa Globales window.ScrumData y manupula DOM.
 */

(function () {
    // Accesos rápidos
    const GUIDE_PHASES = window.ScrumData.GUIDE_PHASES;
    const SCRUM_CONTENT = window.ScrumData.SCRUM_CONTENT;
    const INSTRUCTOR_TIPS = window.ScrumData.INSTRUCTOR_TIPS;

    class UIManager {
        constructor(logicEngine) {
            this.logic = logicEngine;
            this.draggedCardId = null;

            // Elementos DOM Clave
            this.dom = {
                columns: {
                    backlog: document.getElementById('col-backlog'),
                    todo: document.getElementById('col-todo'),
                    doing: document.getElementById('col-doing'),
                    done: document.getElementById('col-done')
                },
                columnWrappers: {
                    backlog: document.querySelector('.backlog-col'),
                    todo: document.querySelector('.todo-col'),
                    doing: document.querySelector('.doing-col'),
                    done: document.querySelector('.done-col')
                },
                theoryContainer: document.getElementById('theory-accordion'),
                phaseBadge: document.getElementById('current-phase-badge'),
                btnNextPhase: document.getElementById('btn-next-phase'),
                instructionText: document.getElementById('instruction-text'),
                modal: document.getElementById('instructor-modal'),
                modalText: document.getElementById('modal-body-text'),
                btnCloseModal: document.getElementById('btn-close-modal'),
                closeModalIcon: document.querySelector('.close-modal'),
                feedbackArea: document.getElementById('feedback-area')
            };
        }

        init() {
            this.renderTheoryAccordion();
            this.renderNotionGuide();   // Nuevo Render
            this.renderPracticalExample(); // Nuevo Render
            this.setupInteractions();
            this.setupNavigation();     // Nueva Naw
            this.updatePhaseUI(GUIDE_PHASES.SETUP); // Estado Inicial
            this.showModal("¡Curso Actualizado: Scrum + Notion!", INSTRUCTOR_TIPS.intro);
        }

        // --- 0. NAVEGACIÓN ---
        setupNavigation() {
            const navBtns = document.querySelectorAll('.nav-btn');
            const views = document.querySelectorAll('.view-section');

            navBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update Buttons
                    navBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Switch Views
                    const targetId = btn.dataset.view;
                    views.forEach(view => {
                        if (view.id === targetId) {
                            view.classList.remove('hidden');
                            view.classList.add('active');
                        } else {
                            view.classList.add('hidden');
                            view.classList.remove('active');
                        }
                    });
                });
            });
        }

        // --- RENDER EXTRAS ---
        renderNotionGuide() {
            const container = document.querySelector('.notion-guide-container');
            const data = window.ScrumData.NOTION_GUIDE;

            if (!container || !data) return;

            let html = `<p class="intro-text">${data.intro}</p><div class="steps-grid">`;

            data.steps.forEach(step => {
                html += `
                    <div class="step-card">
                        <h3>${step.title}</h3>
                        <p>${step.desc}</p>
                        ${step.tip ? `<div class="tip-box">💡 ${step.tip}</div>` : ''}
                        ${step.formula ? `<code class="code-snippet">${step.formula}</code>` : ''}
                    </div>
                `;
            });

            html += `</div>`;
            container.innerHTML = html;
        }

        renderPracticalExample() {
            const container = document.querySelector('.example-container');
            const data = window.ScrumData.PRACTICAL_EXAMPLE;

            if (!container || !data) return;

            let html = `
                <div class="example-header">
                    <h3>${data.title}</h3>
                    <p>${data.context}</p>
                </div>
                
                <div class="persona-card">
                    <h4>👤 User Persona: ${data.persona.name} (${data.persona.role})</h4>
                    <blockquote>"${data.persona.quote}"</blockquote>
                </div>

                <div class="backlog-sample-table">
                    <h4>Ejemplo de User Stories Reales</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Historia de Usuario</th>
                                <th>Criterios de Aceptación</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            data.backlog_sample.forEach(item => {
                html += `
                    <tr>
                        <td>${item.story}</td>
                        <td><ul>${item.criteria.map(c => `<li>${c}</li>`).join('')}</ul></td>
                        <td class="pts-cell">${item.points}</td>
                    </tr>
                `;
            });

            html += `</tbody></table></div>`;
            container.innerHTML = html;
        }

        // --- 1. RENDERIZADO DE TEORÍA ---
        renderTheoryAccordion() {
            const sections = [
                { id: 'values', title: '⭐ Valores de Scrum (Fundamental)', data: SCRUM_CONTENT.values },
                { id: 'pillars', title: '0. Pilares de Scrum (Teoría)', data: SCRUM_CONTENT.pillars },
                { id: 'roles', title: '1. Roles de Scrum', data: SCRUM_CONTENT.roles },
                { id: 'tools', title: '🚀 Herramientas: Usando Notion', data: SCRUM_CONTENT.tools },
                { id: 'artifacts', title: '2. Artefactos (Entregables)', data: SCRUM_CONTENT.artifacts },
                { id: 'dod', title: '✅ Definition of Done (DoD)', data: SCRUM_CONTENT.definition_of_done },
                { id: 'events', title: '3. Eventos (Reuniones)', data: SCRUM_CONTENT.events }
            ];

            this.dom.theoryContainer.innerHTML = sections.map(sec => `
                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        ${sec.title} <span>▼</span>
                    </div>
                    <div class="accordion-content">
                        <div class="concept-grid">
                            ${sec.data.map(item => `
                                <div class="concept-card">
                                    <span class="concept-icon">${item.icon}</span>
                                    <h4>${item.title}</h4>
                                    <p>${item.definition}</p>
                                    <div class="analogy-box">
                                        <strong>💡 ${sec.id === 'tools' ? 'Best Practice' : 'Contexto'}:</strong> ${item.analogy}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');

            // Helper global
            window.toggleAccordion = (element) => {
                element.parentElement.classList.toggle('active');
            };
        }

        // --- 2. CONTROL DE FASES ---
        updatePhaseUI(phase) {
            this.logic.setPhase(phase);
            const { columnWrappers, btnNextPhase, phaseBadge, instructionText } = this.dom;

            // Reset visual columns
            Object.values(columnWrappers).forEach(c => c.classList.add('disabled'));

            switch (phase) {
                case GUIDE_PHASES.SETUP:
                    phaseBadge.textContent = "Fase: PREPARACIÓN";
                    btnNextPhase.textContent = "Iniciar Planning ▶";
                    btnNextPhase.onclick = () => this.updatePhaseUI(GUIDE_PHASES.PLANNING);
                    instructionText.textContent = "Lee los Pilares y la sección de Notion antes de comenzar.";
                    break;

                case GUIDE_PHASES.PLANNING:
                    phaseBadge.textContent = "Fase: SPRINT PLANNING";
                    phaseBadge.style.backgroundColor = "#ff671f";

                    columnWrappers.backlog.classList.remove('disabled');
                    columnWrappers.todo.classList.remove('disabled');

                    btnNextPhase.textContent = "Iniciar Sprint (Ejecución) ▶";
                    btnNextPhase.onclick = () => this.startExecutionPhase();

                    instructionText.textContent = "PLANNING: Selecciona tareas (Máx 15 pts). Piensa: ¿Cómo organizaría esto en Notion?";
                    this.showModal("Sprint Planning", INSTRUCTOR_TIPS.planning_start);
                    break;

                case GUIDE_PHASES.EXECUTION:
                    phaseBadge.textContent = "Fase: SPRINT EN CURSO";
                    phaseBadge.style.backgroundColor = "#39a900";

                    columnWrappers.todo.classList.remove('disabled');
                    columnWrappers.doing.classList.remove('disabled');
                    columnWrappers.done.classList.remove('disabled');
                    columnWrappers.backlog.classList.add('disabled');

                    btnNextPhase.textContent = "Terminar Sprint";
                    btnNextPhase.onclick = () => this.finishSprint();

                    instructionText.textContent = "EJECUCIÓN: Mueve las tareas. ¡Mantén la transparencia!";
                    this.showModal("Start Execution", INSTRUCTOR_TIPS.execution_start);

                    // Disparar evento
                    document.dispatchEvent(new Event('start-timer'));
                    break;

                case GUIDE_PHASES.REVIEW:
                    phaseBadge.textContent = "Fase: SPRINT TERMINADO";
                    btnNextPhase.style.display = 'none';
                    instructionText.textContent = "¡Sprint finalizado! Revisa tus resultados.";
                    break;
            }

            this.renderBoard();
        }

        startExecutionPhase() {
            const load = this.logic.getSprintLoad();
            if (load === 0) {
                this.showModal("Error de Planificación", "No has seleccionado ninguna tarea. Mueve algo al 'To Do' primero.");
                return;
            }
            if (load > this.logic.sprintCapacity) {
                this.showModal("Capacity Excedido", INSTRUCTOR_TIPS.planning_error_limit);
                return;
            }
            this.updatePhaseUI(GUIDE_PHASES.EXECUTION);
        }

        finishSprint() {
            const progress = this.logic.getProgress();
            this.updatePhaseUI(GUIDE_PHASES.REVIEW);

            if (progress.percentage === 100) {
                this.showModal("Sprint Review: ÉXITO", INSTRUCTOR_TIPS.review_success);
            } else {
                this.showModal("Sprint Review: INCOMPLETO", INSTRUCTOR_TIPS.review_incomplete);
            }
        }

        // --- 3. RENDER TABLERO ---
        renderBoard() {
            Object.values(this.dom.columns).forEach(col => col.innerHTML = '');

            const tasks = this.logic.getTasks();
            tasks.forEach(task => {
                const card = this.createTaskCard(task);
                if (this.dom.columns[task.status]) {
                    this.dom.columns[task.status].appendChild(card);
                }
            });
        }

        createTaskCard(task) {
            const div = document.createElement('div');
            div.className = `story-card type-${task.type}`;
            div.setAttribute('draggable', 'true');
            div.dataset.id = task.id;
            div.title = `Criterios: ${task.criteria}`;

            div.innerHTML = `
                <span class="tag">${task.type.toUpperCase()}</span>
                <span class="story-name">${task.title}</span>
                <span class="story-points">${task.points} pts</span>
            `;

            div.addEventListener('dragstart', (e) => {
                this.draggedCardId = task.id;
                div.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });

            div.addEventListener('dragend', () => {
                this.draggedCardId = null;
                div.classList.remove('dragging');
                this.clearHighlights();
            });

            return div;
        }

        // --- 4. DRAG & DROP & MODALS ---
        setupInteractions() {
            document.querySelectorAll('.kanban-column').forEach(col => {
                col.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    if (!col.classList.contains('disabled')) {
                        col.classList.add('drag-over');
                    }
                });

                col.addEventListener('dragleave', () => col.classList.remove('drag-over'));

                col.addEventListener('drop', (e) => {
                    e.preventDefault();
                    col.classList.remove('drag-over');
                    if (col.classList.contains('disabled')) return;

                    const newStatus = col.dataset.status;
                    if (this.draggedCardId) {
                        this.handleCardDrop(this.draggedCardId, newStatus);
                    }
                });
            });

            this.dom.btnCloseModal.addEventListener('click', () => this.hideModal());
            this.dom.closeModalIcon.addEventListener('click', () => this.hideModal());
        }

        handleCardDrop(taskId, newStatus) {
            const result = this.logic.moveTask(taskId, newStatus);

            if (result.success) {
                this.renderBoard();
                if (newStatus === 'done' && result.from !== 'done') {
                    this.dom.feedbackArea.textContent = "¡Tarea Completada! 🎉";
                    this.dom.feedbackArea.classList.remove('hidden');
                    setTimeout(() => this.dom.feedbackArea.classList.add('hidden'), 2000);
                }
            } else {
                let msg = result.message;
                if (msg === "PLANNING_ERROR_LIMIT") msg = INSTRUCTOR_TIPS.planning_error_limit;
                if (msg === "PLANNING_ERROR_COL") msg = INSTRUCTOR_TIPS.planning_error_col;
                this.showModal("Movimiento No Permitido", msg);
            }
        }

        clearHighlights() {
            document.querySelectorAll('.kanban-column').forEach(c => c.classList.remove('drag-over'));
        }

        showModal(title, text) {
            document.querySelector('.modal-header h3').textContent = title;
            this.dom.modalText.innerHTML = text;
            this.dom.modal.classList.remove('hidden');
        }

        hideModal() {
            this.dom.modal.classList.add('hidden');
        }
    }

    // Exponer Globalmente
    window.UIManager = UIManager;

})();
