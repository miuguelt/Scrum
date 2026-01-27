import { store } from './store.js';
import { ToastSystem } from './ui/toast-system.js';

export class SprintSimulator {
    constructor() {
        this.init();
    }

    init() {
        // 1. Definir Tareas del Proyecto "Eco-Bot"
        const projectTasks = [
            { id: 't1', title: 'HU-01: IA Detección Plásticos', points: 8, status: 'todo' },
            { id: 't2', title: 'HU-02: Mecánica Brazo', points: 5, status: 'todo' },
            { id: 't3', title: 'HU-03: Control Base Móvil', points: 3, status: 'todo' },
            { id: 't4', title: 'HU-04: Energía Solar', points: 5, status: 'todo' },
            { id: 't5', title: 'HU-05: UX Pantalla Gestos', points: 3, status: 'todo' },
            { id: 't6', title: 'HU-06: Sensor Humedad', points: 2, status: 'todo' },
            { id: 't7', title: 'HU-07: Cifrado Datos', points: 8, status: 'todo' },
            { id: 't8', title: 'HU-08: Sincro Cloud', points: 13, status: 'todo' },
            { id: 't9', title: 'HU-09: Estabilidad', points: 5, status: 'todo' },
            { id: 't10', title: 'HU-10: PCB Propia', points: 8, status: 'todo' },
            { id: 't11', title: 'HU-11: Comando Voz', points: 13, status: 'todo' },
            { id: 't12', title: 'HU-12: Cubierta Bio', points: 5, status: 'todo' },
            { id: 't13', title: 'HU-13: Auto-Tests', points: 8, status: 'todo' },
        ];

        // Inicializar si el tablero está vacío
        store.initTasks(projectTasks);

        this.setupBoard();
        this.setupControls();

        // 2. Suscribirse a cambios
        store.subscribe((state) => {
            this.renderBoard(state.tasks);
            this.updateDashboard(state);
            this.checkOnboarding(state.onboarding);
        });

        // 3. Forzar render inicial inmediato
        this.renderBoard(store.state.tasks);
        this.updateDashboard(store.state);
        this.checkOnboarding(store.state.onboarding);
    }

    updateDashboard(state) {
        const dayEl = document.getElementById('sim-day');
        const moraleEl = document.getElementById('sim-morale');
        const velocityEl = document.getElementById('sim-velocity');

        if (dayEl) dayEl.innerText = state.sprint.day;
        if (moraleEl) moraleEl.innerText = state.sprint.morale + '%';
        if (velocityEl) velocityEl.innerText = state.sprint.velocity;
    }

    checkOnboarding(onboarding) {
        if (!onboarding.tutorialCompleted) {
            this.showTutorial();
        }
    }

    showTutorial() {
        const modal = document.getElementById('decision-modal');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const opts = document.getElementById('modal-options');

        title.innerText = "� Tutorial: Tu Primer Sprint";
        desc.innerHTML = `
            <div style="text-align: left; font-size: 0.95rem;">
                <p>Bienvenido al rol de <strong>Scrum Master / Equipo</strong>. Tu objetivo es completar el <strong>Eco-Bot</strong> gestionando el flujo de trabajo.</p>
                
                <div class="onboarding-steps" style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p><strong>🧠 Conceptos Clave que aprenderás:</strong></p>
                    <ul style="padding-left: 20px; margin-bottom: 10px;">
                        <li><strong>Sprint Backlog:</strong> Las tareas seleccionadas para estas 2 semanas.</li>
                        <li><strong>WIP (Work In Progress):</strong> No empieces todo a la vez. ¡Termina lo que empiezas!</li>
                        <li><strong>Definition of Done (DoD):</strong> Una tarea no está terminada hasta que cumple todos los criterios.</li>
                    </ul>

                    <p><strong>🎮 Cómo Jugar:</strong></p>
                    <ol style="padding-left: 20px; line-height: 1.6;">
                        <li><strong>Daily Standup:</strong> Cada día, revisa el tablero.</li>
                        <li><strong>Flujo:</strong> Arrastra de <b>Todo</b> &rarr; <b>In Progress</b> &rarr; <b>Done</b>.</li>
                        <li><strong>Bloqueos:</strong> Si surgen eventos, decide priorizando valor vs calidad.</li>
                        <li><strong>Review & Retro:</strong> Al final, inspecciona el producto y mejora el proceso.</li>
                    </ol>
                </div>
                <p>⚠️ <strong>Regla de Oro:</strong> Es mejor terminar 3 tareas bien que tener 10 a medias. ¡Cuida la moral del equipo!</p>
            </div>
        `;

        opts.innerHTML = '';
        const btn = document.createElement('button');
        btn.className = 'option-btn primary';
        btn.innerText = "¡Entendido, iniciar Sprint!";
        btn.onclick = () => {
            store.setTutorialCompleted(true);
            if (window.app?.closeModalEl) window.app.closeModalEl(modal);
            else modal.classList.add('hidden');
            ToastSystem.show("🚀 Sprint 1 Iniciado. Mueve la primera tarea a 'En Progreso'", "info");
        };
        opts.appendChild(btn);

        if (window.app?.openModal) window.app.openModal(modal);
        else modal.classList.remove('hidden');
    }

    setupBoard() {
        const board = document.getElementById('kanban-board');
        if (!board) return;

        board.addEventListener('dragover', (e) => e.preventDefault());

        board.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskId = e.dataTransfer.getData('text/plain');
            const droppable = e.target.closest('.column');

            if (droppable && taskId) {
                const newStatus = droppable.dataset.status;
                const task = store.state.tasks.todo.find(t => t.id === taskId) ||
                    store.state.tasks.inprogress.find(t => t.id === taskId) ||
                    store.state.tasks.done.find(t => t.id === taskId);

                // Evitar movimientos innecesarios
                if (task) {
                    if (task.status === newStatus) return;

                    store.moveTask(taskId, newStatus);

                    // Feedback visual
                    const statusNames = { 'todo': 'Por Hacer', 'inprogress': 'En Progreso', 'done': 'Terminado' };
                    ToastSystem.show(`Tarea movida a: ${statusNames[newStatus]}`, "success", 1500);
                }
            }
        });
    }

    renderBoard(tasksState) {
        const columnMap = {
            'todo': 'col-todo',
            'inprogress': 'col-progress',
            'done': 'col-done'
        };

        Object.keys(columnMap).forEach(status => {
            const colId = columnMap[status];
            const container = document.querySelector(`#${colId} .droppable-area`);
            if (container) container.innerHTML = '';
        });

        const renderTask = (task, status) => {
            const card = document.createElement('div');
            card.className = `kanban-card ${status}-task animate-fadeIn`;
            card.draggable = true;
            card.id = task.id;
            card.innerHTML = `
                <div class="card-title">${task.title}</div>
                <div class="card-meta">
                    <span class="pts">${task.points} SP</span>
                </div>
            `;

            card.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', task.id);
                card.classList.add('dragging');
            });
            card.addEventListener('dragend', () => card.classList.remove('dragging'));

            const colId = columnMap[status];
            const container = document.querySelector(`#${colId} .droppable-area`);
            if (container) container.appendChild(card);
        };

        tasksState.todo.forEach(t => renderTask(t, 'todo'));
        tasksState.inprogress.forEach(t => renderTask(t, 'inprogress'));
        tasksState.done.forEach(t => renderTask(t, 'done'));
    }

    setupControls() {
        const nextDayBtn = document.getElementById('btn-next-day');
        if (nextDayBtn) {
            nextDayBtn.onclick = () => {
                // SALVAGUARDA: Verificar si se está progresando
                const state = store.state;
                const inProgressCount = state.tasks.inprogress.length;
                const doneCount = state.tasks.done.length;
                const day = state.sprint.day;

                // Si es el día 1 y no han movido nada
                if (day === 1 && inProgressCount === 0 && doneCount === 0) {
                    ToastSystem.show("⚠️ Mueve tareas a 'En Progreso' antes de finalizar el día.", "warning", 4000);
                    return;
                }

                // Si tienen demasiadas cosas en progreso (WIP limit teórico)
                if (inProgressCount > 5) {
                    if (!confirm("⚠️ Hay demasiadas tareas en progreso. Limita el WIP para mejorar el flujo. ¿Continuar?")) {
                        return;
                    }
                }

                const continued = store.nextDay();
                if (!continued) {
                    this.showSprintSummary();
                } else {
                    ToastSystem.show(`¡Día ${state.sprint.day} finalizado! Progreso guardado.`, "info", 2000);
                    this.triggerRandomEvent();
                }
            };
        }

        const resetBtn = document.getElementById('btn-reset');
        if (resetBtn) {
            resetBtn.onclick = () => {
                if (confirm("¿Seguro que quieres reiniciar todo el progreso?")) {
                    localStorage.clear();
                    location.reload();
                }
            };
        }
    }

    showSprintSummary() {
        const modal = document.getElementById('decision-modal');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const opts = document.getElementById('modal-options');

        const state = store.state;
        title.innerText = "🏁 Sprint Finalizado (Review)";
        desc.innerHTML = `
                <div class="sprint-review-summary">
                <p>Has terminado los 10 días del Sprint. Es hora de inspeccionar el incremento.</p>
                <div class="summary-stats glass-panel">
                    <div class="stat-row"><span>Velocidad Alcanzada:</span> <b>${state.sprint.velocity} SP</b></div>
                    <div class="stat-row"><span>Moral del Equipo:</span> <b>${state.sprint.morale}%</b></div>
                    <div class="stat-row"><span>Historias en 'Done':</span> <b>${state.tasks.done.length}</b></div>
                </div>
                <p class="summary-msg">El Product Owner está revisando el trabajo...</p>
            </div>
                `;

        opts.innerHTML = '';
        const btn = document.createElement('button');
        btn.className = 'option-btn primary';
        btn.innerText = "Ir a Retrospectiva";
        btn.onclick = () => this.showSprintRetrospective();
        opts.appendChild(btn);

        if (window.app?.openModal) window.app.openModal(modal);
        else modal.classList.remove('hidden');
    }

    showSprintRetrospective() {
        const modal = document.getElementById('decision-modal');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const opts = document.getElementById('modal-options');

        title.innerText = "🔄 Retrospectiva del Sprint";
        desc.innerHTML = `
                <p>El Sprint ha terminado. La Retrospectiva es el evento más importante para la <strong>Mejora Continua</strong> (Kaizen).</p>
                <p>Como Scrum Master, ¿en qué quieres enfocar al equipo hoy?</p>
            <div class="retro-options">
                <div class="retro-card glass-panel" onclick="this.classList.add('selected'); app.simulator.applyRetro('good')">
                    <span class="icon">✅</span>
                    <b>Reconocimiento</b>
                    <small>Reforzar lo positivo sube la moral.</small>
                </div>
                <div class="retro-card glass-panel" onclick="this.classList.add('selected'); app.simulator.applyRetro('bad')">
                    <span class="icon">🔍</span>
                    <b>Análisis de Problemas</b>
                    <small>Detectar cuellos de botella.</small>
                </div>
                <div class="retro-card glass-panel" onclick="this.classList.add('selected'); app.simulator.applyRetro('improve')">
                    <span class="icon">🚀</span>
                    <b>Plan de Acción</b>
                    <small>Implementar una mejora concreta.</small>
                </div>
            </div>
            <div id="retro-feedback" class="hidden-view" style="margin-top: 1.5rem;"></div>
            `;

        opts.innerHTML = '';
        const btn = document.createElement('button');
        btn.id = 'btn-finish-retro';
        btn.className = 'option-btn primary hidden';
        btn.innerText = "Cerrar Sprint y Archivar";
        btn.onclick = () => {
            if (window.app?.closeModalEl) window.app.closeModalEl(modal);
            else modal.classList.add('hidden');
            ToastSystem.show("🏆 ¡Ciclo Completado! +50 XP. ¡Preparando el siguiente Sprint!", "success", 4000);
            store.addXP(50);
        };
        opts.appendChild(btn);

        window.app.simulator = this;
    }

    applyRetro(type) {
        const feedback = document.getElementById('retro-feedback');
        const finishBtn = document.getElementById('btn-finish-retro');

        feedback.classList.remove('hidden-view');
        feedback.classList.add('active-view');
        finishBtn.classList.remove('hidden');

        const responses = {
            'good': { 
                text: "El equipo celebra haber entregado valor. ¡El ambiente mejora!", 
                lesson: "Lección: Celebrar pequeños éxitos libera dopamina y cohesiona al equipo.",
                xp: 20, 
                morale: 15 
            },
            'bad': { 
                text: "Analizaron el cuello de botella en QA. Fue doloroso pero necesario.", 
                lesson: "Lección: La transparencia radical es necesaria para inspeccionar y adaptar, aunque baje la moral temporalmente.",
                xp: 40, 
                morale: -5 
            },
            'improve': { 
                text: "Decidieron automatizar el despliegue para el próximo Sprint.", 
                lesson: "Lección: Las acciones de mejora deben ser concretas y ejecutables en el siguiente Sprint.",
                xp: 30, 
                morale: 5 
            }
        };

        const res = responses[type];
        feedback.innerHTML = `
            <div class="feedback-msg success">
                <p><strong>${res.text}</strong></p>
                <hr style="border-color: rgba(255,255,255,0.1); margin: 8px 0;">
                <p style="font-size: 0.9em; font-style: italic;">${res.lesson}</p>
                <small>+${res.xp} XP ganados | Moral ${res.morale > 0 ? '+' : ''}${res.morale}</small>
            </div>
        `;
        store.addXP(res.xp);
        if (res.morale) store.updateMorale(res.morale);
    }

    triggerRandomEvent() {
        // Reducir probabilidad un poco para que no sea tan abrumador
        if (Math.random() > 0.75) {
            const events = [
                {
                    title: "🚀 Cambio de Prioridad (Scope Creep)",
                    desc: "El Product Owner te pide que el Carrito sea prioridad ahora mismo. El equipo se confunde un poco.",
                    options: [
                        { 
                            text: "Aceptar (Moral -5, XP +20)", 
                            morale: -5, 
                            xp: 20, 
                            analysis: "Adaptabilidad Agile: Aceptaste el cambio para maximizar valor, pero el cambio de contexto tiene un coste en moral." 
                        },
                        { 
                            text: "Negociar para el siguiente Sprint (Moral +5, XP +10)", 
                            morale: 5, 
                            xp: 10,
                            analysis: "Protección del Sprint: Mantuviste el foco del equipo. Es seguro, pero quizás perdiste una oportunidad de mercado."
                        }
                    ]
                },
                {
                    title: "🐛 Bug Crítico en Producción",
                    desc: "Se ha encontrado un error en el Login que bloquea a los usuarios actuales.",
                    options: [
                        { 
                            text: "Arreglar ya (Stop the Line) (XP +30)", 
                            morale: 0, 
                            xp: 30,
                            analysis: "Calidad ante todo: Parar para arreglar bugs críticos (Stop the Line) evita deuda técnica acumulada."
                        },
                        { 
                            text: "Posponer al Backlog (Moral -15)", 
                            morale: -15, 
                            xp: 0,
                            analysis: "Deuda Técnica: Posponer un bug crítico suele aumentar el coste de reparación y baja la confianza (moral)."
                        }
                    ]
                }
            ];

            const event = events[Math.floor(Math.random() * events.length)];
            const modal = document.getElementById('decision-modal');
            const title = document.getElementById('modal-title');
            const desc = document.getElementById('modal-desc');
            const opts = document.getElementById('modal-options');

            title.innerText = event.title;
            // Usar innerHTML para formateo si se requiere
            desc.innerHTML = `<p>${event.desc}</p><p class="text-sm text-muted">¿Qué haría un buen Scrum Master?</p>`;
            opts.innerHTML = '';

            event.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn primary';
                btn.innerText = opt.text;
                btn.onclick = () => {
                    if (opt.morale) store.updateMorale(opt.morale);
                    if (opt.xp) store.addXP(opt.xp);
                    if (window.app?.closeModalEl) window.app.closeModalEl(modal);
                    else modal.classList.add('hidden');
                    ToastSystem.show(opt.analysis, "info", 5000);
                };
                opts.appendChild(btn);
            });

            if (window.app?.openModal) window.app.openModal(modal);
            else modal.classList.remove('hidden');
            ToastSystem.show("¡Evento Inesperado!", "warning");
        }
    }
}
