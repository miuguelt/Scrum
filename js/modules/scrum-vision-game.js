import { store } from './store.js';

/**
 * Scrum Vision Game
 * An interactive simulation of building a Smart City using Scrum.
 */
export const ScrumVisionGame = {
    state: {
        currentSprint: 0,
        totalSprints: 4,
        capacityPerSprint: 20,
        backlog: [],
        sprintBacklog: [],
        completedThisSprint: [],
        deliveredItems: [],
        initialBacklogValue: 0,
        projectProgress: 0,
        phase: 'onboarding', // onboarding, planning, execution, review, retro, complete
        tutorialStep: 0, // 0: Intro, 1: Backlog, 2: Sprint, 3: Goal
        showHelp: false,
        cityElements: [],
        feedbackNotes: [],
        alert: null
    },

    init(container) {
        this.container = container;
        this.loadMockData();
        this.render();
    },

    loadMockData() {
        this.state.backlog = [
            { id: 'v1', title: 'Infraestructura Base', points: 5, value: 20, description: 'Cimentación y redes eléctricas básicas.' },
            { id: 'v2', title: 'Red 5G Municipal', points: 8, value: 40, description: 'Conectividad de alta velocidad para ciudadanos.' },
            { id: 'v3', title: 'Centro de Comando AI', points: 13, value: 70, description: 'Gestión inteligente del tráfico y servicios.' },
            { id: 'v4', title: 'Parques Eco-Sustentables', points: 3, value: 15, description: 'Zonas verdes con sensores de humedad.' },
            { id: 'v5', title: 'Transporte Autónomo', points: 20, value: 100, description: 'Flota de buses eléctricos sin conductor.' }
        ];
        this.state.initialBacklogValue = this.state.backlog.reduce((sum, item) => sum + item.value, 0);
    },

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="vision-game-wrapper">
                ${this.renderHeader()}
                <div class="vision-main-stage">
                    ${this.renderCanvas()}
                    ${this.renderSidebar()}
                </div>
                ${this.renderPhaseOverlay()}
                ${this.renderHelpModal()}
            </div>
        `;

        this.attachListeners();
    },

    renderHeader() {
        const { currentSprint, totalSprints, projectProgress, phase } = this.state;
        const sprintLabel = currentSprint === 0 ? '-' : currentSprint;
        return `
            <header class="vision-header">
                <div class="vision-title">
                    <h2 style="margin:0; display:flex; align-items:center; gap:0.5rem;">
                        <span class="icon">🌆</span> Scrum Vision: Smart City
                    </h2>
                    <small style="color:var(--vision-primary)">Construyendo el futuro paso a paso</small>
                </div>
                <div class="vision-stats">
                    <div class="stat-box">
                        <span class="icon">📅</span> Sprint: <b>${sprintLabel}/${totalSprints}</b>
                    </div>
                    <div class="stat-box">
                        <span class="icon">🏗️</span> Avance: <b>${projectProgress}%</b>
                    </div>
                    <div class="stat-box">
                        <span class="icon">🧭</span> Fase: <b>${this.getPhaseLabel(phase)}</b>
                    </div>
                    <button class="vision-btn ghost small" data-action="toggle-help" title="Ver Instrucciones">
                        ❓ Ayuda
                    </button>
                </div>
            </header>
        `;
    },

    renderCanvas() {
        const totalValue = this.getTotalValue();
        const deliveredValue = this.getDeliveredValue();
        return `
            <div class="vision-canvas-area">
                <div class="vision-progress">
                    <div class="progress-labels">
                        <span>Valor entregado: ${deliveredValue}/${totalValue}</span>
                        <span>${this.state.projectProgress}% completado</span>
                    </div>
                    <div class="progress-track">
                        <div class="progress-fill" style="width:${this.state.projectProgress}%"></div>
                    </div>
                </div>
                <div class="city-preview" id="city-preview">
                    ${this.state.projectProgress === 0 ?
                '<div class="empty-state-city">🏙️<br>La ciudad está vacía.<br>Completa historias para construir.</div>' : ''}
                    ${this.renderCityElements()}
                </div>
                ${this.renderAlert()}
                <div class="vision-hint">
                    Visualización del Proyecto: Smart City v1.0
                </div>
            </div>
        `;
    },

    renderCityElements() {
        // Simple visual representation of progress
        // In a real app this would be canvas or sophisticated DOM
        return this.state.deliveredItems.map(item => `
            <div class="city-element animate-pop" title="${item.title}">
                <span>Building: ${item.title}</span>
            </div>
        `).join('');
    },

    renderAlert() {
        if (!this.state.alert) return '';
        const { type, text } = this.state.alert;
        return `<div class="vision-alert ${type}">${text}</div>`;
    },

    renderSidebar() {
        if (this.state.phase === 'execution') {
            return `
                <aside class="vision-sidebar">
                    <h3>🏃 Sprint en Curso</h3>
                    ${this.renderPhaseInfo('execution')}
                    ${this.renderPhaseHelp()}
                    <div class="vision-list">
                        ${this.state.sprintBacklog.map(item => `
                            <div class="vision-card" data-action="toggle-done" data-id="${item.id}">
                                <strong>${item.title}</strong>
                                <div class="vision-meta">Puntos: ${item.points} SP</div>
                                <button class="vision-btn ghost" data-action="toggle-done" data-id="${item.id}">
                                    ${this.state.completedThisSprint.some(done => done.id === item.id) ? '✅ Completado' : 'Marcar hecho'}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="vision-actions">
                        <button class="vision-btn" data-action="end-sprint">Terminar Sprint</button>
                        <button class="vision-btn secondary" data-action="daily">Daily Scrum</button>
                    </div>
                </aside>
            `;
        }

        if (this.state.phase === 'planning') {
            const usedPoints = this.getUsedPoints();
            const capacity = this.state.capacityPerSprint;
            return `
                <aside class="vision-sidebar">
                    <h3>📅 Sprint Planning</h3>
                    <div class="capacity-box">
                        <span>Capacidad del Equipo</span>
                        <strong>${usedPoints}/${capacity} SP</strong>
                    </div>
                    ${this.renderPhaseInfo('planning')}
                    ${this.renderPhaseHelp()}
                    <div class="vision-list">
                        ${this.state.backlog.map(item => `
                            <div class="vision-card" data-action="add-item" data-id="${item.id}">
                                <strong>${item.title}</strong>
                                <div class="vision-meta">${item.description}</div>
                                <div class="vision-meta">Puntos: ${item.points} SP · Valor: ${item.value}</div>
                                <button class="vision-btn ghost" data-action="add-item" data-id="${item.id}">
                                    ${this.state.sprintBacklog.some(selected => selected.id === item.id) ? 'Quitar' : 'Agregar'}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="vision-actions">
                        <button class="vision-btn" data-action="start-sprint">Iniciar Sprint</button>
                        <button class="vision-btn secondary" data-action="clear-sprint">Limpiar selección</button>
                    </div>
                </aside>
            `;
        }

        if (this.state.phase === 'review') {
            return `
                <aside class="vision-sidebar">
                    <h3>🔎 Sprint Review</h3>
                    ${this.renderPhaseInfo('review')}
                    ${this.renderPhaseHelp()}
                    <div class="vision-summary">
                        <p>Incremento entregado al cliente:</p>
                        <div class="vision-list">
                            ${this.state.completedThisSprint.length === 0
                    ? '<span class="vision-muted">No se completaron entregas. El cliente está decepcionado.</span>'
                    : this.state.completedThisSprint.map(item => `
                                    <div class="vision-card compact">
                                        <strong>${item.title}</strong>
                                        <div class="vision-meta">Valor: ${item.value}</div>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                    <div class="vision-actions">
                        <button class="vision-btn" data-action="go-retro">Ir a Retrospectiva</button>
                    </div>
                </aside>
            `;
        }

        if (this.state.phase === 'retro') {
            return `
                <aside class="vision-sidebar">
                    <h3>🔄 Retrospectiva</h3>
                    ${this.renderPhaseInfo('retro')}
                    ${this.renderPhaseHelp()}
                    <div class="vision-summary">
                        <p>Reflexiona con el equipo:</p>
                        <ul class="vision-checklist">
                            <li>¿Qué salió bien? (Procesos, Herramientas)</li>
                            <li>¿Qué debe mejorar? (Comunicación, Calidad)</li>
                            <li>¿Qué acción concreta haremos en el Sprint ${this.state.currentSprint + 1}?</li>
                        </ul>
                    </div>
                    <div class="vision-actions">
                        <button class="vision-btn" data-action="next-sprint">Siguiente Sprint</button>
                    </div>
                </aside>
            `;
        }

        // Default or Onboarding Sidebar
        return `
            <aside class="vision-sidebar">
                <h3>Guía Rápida</h3>
                ${this.renderPhaseHelp()}
                <div class="vision-summary">
                    <p>Tu misión es entregar valor en 4 sprints.</p>
                </div>
            </aside>
        `;
    },

    renderPhaseInfo(phase) {
        const info = {
            planning: "<b>Objetivo:</b> Seleccionar qué historias del Product Backlog entran en este Sprint. <br><b>Tip:</b> Prioriza las historias con más <i>Valor</i> que quepan en tu <i>Capacidad</i>.",
            execution: "<b>Objetivo:</b> Convertir el Sprint Backlog en un Incremento terminado. <br><b>Tip:</b> Usa la <i>Daily Scrum</i> para desbloquear tareas aleatorias.",
            review: "<b>Objetivo:</b> Inspeccionar el Incremento con los stakeholders. <br><b>Tip:</b> Solo cuenta lo que está 'Terminado' (Done). Lo a medio hacer vale 0.",
            retro: "<b>Objetivo:</b> Inspeccionar al equipo y crear un plan de mejoras. <br><b>Tip:</b> Sin Retro, no hay mejora. Es el corazón de Agile."
        };
        return `<div class="phase-info-box glass-panel small" style="margin-bottom:1rem; font-size:0.85rem; line-height:1.4;">${info[phase] || ''}</div>`;
    },

    renderPhaseHelp() {
        const hint = this.getPhaseHint();
        return `
            <div class="vision-callout">
                <strong>Siguiente paso:</strong>
                <span>${hint}</span>
            </div>
        `;
    },

    renderPhaseOverlay() {
        if (this.state.phase === 'onboarding') {
            return this.renderTutorialCarousel();
        }
        if (this.state.phase === 'complete') {
            return `
                <div class="ceremony-overlay">
                    <div class="glass-panel vision-onboarding">
                        <h2>🎉 ¡Misión Completada! 🎉</h2>
                        
                        <div class="vision-results-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; text-align: left;">
                            <div class="stat-box" style="flex-direction: column; align-items: flex-start;">
                                <small style="color: var(--vision-primary);">Valor Entregado</small>
                                <div style="font-size: 1.5rem; font-weight: bold; color: #fff;">
                                    ${this.getDeliveredValue()} / ${this.getTotalValue()}
                                </div>
                            </div>
                            <div class="stat-box" style="flex-direction: column; align-items: flex-start;">
                                <small style="color: var(--vision-secondary);">Progreso Final</small>
                                <div style="font-size: 1.5rem; font-weight: bold; color: #fff;">
                                    ${this.state.projectProgress}%
                                </div>
                            </div>
                        </div>

                        <div class="vision-recommendations" style="text-align: left; background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid var(--vision-border);">
                            <h4 style="margin: 0 0 0.5rem 0; color: var(--vision-accent);">💡 Feedback del Agile Coach</h4>
                            <p style="font-size: 0.95rem; line-height: 1.5; margin: 0; color: #cbd5e1;">${this.getRecommendations()}</p>
                        </div>

                        <button class="vision-btn" id="restart-game-btn" style="width: 100%; font-size: 1.1rem;">
                            🔄 Iniciar Nueva Simulación
                        </button>
                    </div>
                </div>
            `;
        }
        return '';
    },

    renderTutorialCarousel() {
        const steps = [
            {
                icon: "👋",
                title: "Bienvenido a Scrum Vision",
                text: "Eres el <b>Product Owner</b>. Tu responsabilidad es maximizar el valor del producto. Construirás una Smart City en 4 Sprints."
            },
            {
                icon: "📋",
                title: "1. El Product Backlog",
                text: "Es tu lista de deseos ordenada. Cada historia tiene <b>Valor</b> (Dinero/Impacto) y <b>Esfuerzo</b> (Puntos). ¡Prioriza Valor sobre Esfuerzo!"
            },
            {
                icon: "🏃",
                title: "2. El Sprint (Planning & Execution)",
                text: "El equipo tiene capacidad limitada (20 pts). En la Planning, negocia qué entra. En la Execution, apoya al equipo en las Dailies."
            },
            {
                icon: "✅",
                title: "3. Review & Retro",
                text: "Al final, muestra lo que TERMINASTE (Review) y mejora el proceso (Retro). <br><b>Nota:</b> El trabajo a medias no entrega valor."
            }
        ];

        const step = steps[this.state.tutorialStep];

        return `
            <div class="ceremony-overlay">
                <div class="glass-panel tutorial-modal">
                    <div class="tutorial-icon">${step.icon}</div>
                    <h2>${step.title}</h2>
                    <p>${step.text}</p>
                    
                    <div class="tutorial-dots">
                        ${steps.map((_, i) => `
                            <span class="dot ${i === this.state.tutorialStep ? 'active' : ''}"></span>
                        `).join('')}
                    </div>

                    <div class="tutorial-actions">
                        ${this.state.tutorialStep > 0 ?
                `<button class="vision-btn secondary" data-action="prev-tutorial">Atrás</button>` : '<div></div>'}
                        
                        ${this.state.tutorialStep < steps.length - 1 ?
                `<button class="vision-btn primary" data-action="next-tutorial">Siguiente</button>` :
                `<button class="vision-btn success" id="start-game-btn">¡Asumir el Rol!</button>`}
                    </div>
                </div>
            </div>
        `;
    },

    renderHelpModal() {
        if (!this.state.showHelp) return '';

        return `
             <div class="ceremony-overlay" style="z-index: 9999;">
                <div class="glass-panel tutorial-modal">
                    <h2>❓ Instrucciones del Juego</h2>
                    <ul style="text-align: left; margin: 1rem 0; padding-left: 1.5rem; line-height: 1.6;">
                        <li><b>Objetivo:</b> Completar el 100% de la ciudad en 4 Sprints.</li>
                        <li><b>Planificación:</b> Mueve items del Product Backlog al Sprint Backlog sin pasarte de 20 puntos.</li>
                        <li><b>Ejecución:</b> Toca "Marcar hecho" o "Daily Scrum" para completar tareas.</li>
                        <li><b>Review:</b> Verifica el valor entregado.</li>
                    </ul>
                    <button class="vision-btn primary" data-action="close-help">Volver al Juego</button>
                </div>
            </div>
        `;
    },

    attachListeners() {
        // Global clicks in container
        const startBtn = this.container.querySelector('#start-game-btn');
        if (startBtn) {
            startBtn.onclick = () => {
                this.state.currentSprint = 1;
                this.state.phase = 'planning';
                this.render();
            };
        }

        const restartBtn = this.container.querySelector('#restart-game-btn');
        if (restartBtn) {
            restartBtn.onclick = () => {
                this.resetGame();
                this.render();
            };
        }

        this.container.querySelectorAll('[data-action]').forEach(button => {
            button.onclick = (e) => {
                e.stopPropagation();
                const action = button.getAttribute('data-action');
                const id = button.getAttribute('data-id');
                this.handleAction(action, id);
            };
        });
    },

    handleAction(action, id) {
        switch (action) {
            case 'next-tutorial':
                this.state.tutorialStep = Math.min(3, this.state.tutorialStep + 1);
                break;
            case 'prev-tutorial':
                this.state.tutorialStep = Math.max(0, this.state.tutorialStep - 1);
                break;
            case 'toggle-help':
                this.state.showHelp = true;
                break;
            case 'close-help':
                this.state.showHelp = false;
                break;
            case 'add-item':
                this.addToSprint(id);
                break;
            case 'clear-sprint':
                this.state.sprintBacklog = [];
                break;
            case 'start-sprint':
                if (this.state.sprintBacklog.length === 0) {
                    this.setAlert('Selecciona al menos una historia para iniciar el Sprint.', 'warning');
                    break;
                }
                this.state.phase = 'execution';
                break;
            case 'toggle-done':
                this.toggleDone(id);
                break;
            case 'daily':
                this.simulateDaily();
                break;
            case 'end-sprint':
                this.state.phase = 'review';
                break;
            case 'go-retro':
                this.state.phase = 'retro';
                break;
            case 'next-sprint':
                this.advanceSprint();
                break;
            default:
                break;
        }
        this.updateProgress();
        this.render();
    },

    addToSprint(id) {
        const item = this.state.backlog.find(entry => entry.id === id);
        if (!item) return;
        const alreadySelected = this.state.sprintBacklog.some(entry => entry.id === id);
        if (alreadySelected) {
            this.state.sprintBacklog = this.state.sprintBacklog.filter(entry => entry.id !== id);
            return;
        }
        const usedPoints = this.getUsedPoints();
        if (usedPoints + item.points > this.state.capacityPerSprint) {
            this.setAlert('Capacidad superada. Quita una historia o aumenta la capacidad.', 'danger');
            return;
        }
        this.state.sprintBacklog.push(item);
    },

    toggleDone(id) {
        const item = this.state.sprintBacklog.find(entry => entry.id === id);
        if (!item) return;
        const alreadyDone = this.state.completedThisSprint.some(entry => entry.id === id);
        if (alreadyDone) {
            this.state.completedThisSprint = this.state.completedThisSprint.filter(entry => entry.id !== id);
            this.state.deliveredItems = this.state.deliveredItems.filter(entry => entry.id !== id);
        } else {
            this.state.completedThisSprint.push(item);
            if (!this.state.deliveredItems.some(entry => entry.id === id)) {
                this.state.deliveredItems.push(item);
            }
        }
    },

    simulateDaily() {
        if (this.state.sprintBacklog.length === 0) {
            this.setAlert('No hay historias en el Sprint Backlog todavía.', 'warning');
            return;
        }
        const pending = this.state.sprintBacklog.filter(item => !this.state.completedThisSprint.some(done => done.id === item.id));
        if (pending.length === 0) {
            this.setAlert('Ya completaste todo. Puedes terminar el Sprint.', 'info');
            return;
        }
        const randomItem = pending[Math.floor(Math.random() * pending.length)];
        this.state.completedThisSprint.push(randomItem);
        if (!this.state.deliveredItems.some(entry => entry.id === randomItem.id)) {
            this.state.deliveredItems.push(randomItem);
        }
    },

    advanceSprint() {
        const completedIds = new Set(this.state.completedThisSprint.map(item => item.id));
        if (completedIds.size > 0) {
            this.state.backlog = this.state.backlog.filter(item => !completedIds.has(item.id));
        }
        if (this.state.currentSprint >= this.state.totalSprints) {
            this.state.phase = 'complete';
            return;
        }
        this.state.currentSprint += 1;
        this.state.sprintBacklog = [];
        this.state.completedThisSprint = [];
        this.state.phase = 'planning';
    },

    resetGame() {
        this.state.currentSprint = 0;
        this.state.projectProgress = 0;
        this.state.sprintBacklog = [];
        this.state.completedThisSprint = [];
        this.state.deliveredItems = [];
        this.state.phase = 'onboarding';
        this.state.tutorialStep = 0;
        this.state.alert = null;
    },

    getUsedPoints() {
        return this.state.sprintBacklog.reduce((sum, item) => sum + item.points, 0);
    },

    getTotalValue() {
        return this.state.initialBacklogValue;
    },

    getDeliveredValue() {
        return this.state.deliveredItems.reduce((sum, item) => sum + item.value, 0);
    },

    updateProgress() {
        const delivered = this.state.deliveredItems.reduce((sum, item) => sum + item.value, 0);
        const total = this.getTotalValue();
        this.state.projectProgress = total === 0 ? 0 : Math.min(100, Math.round((delivered / total) * 100));
    },

    getRecommendations() {
        const progress = this.state.projectProgress;
        if (progress === 100) {
            return "¡Excelente trabajo! Has maximizado el valor entregado. Has entendido perfectamente que priorizar valor es la clave del Product Owner. Tu ciudad es un ejemplo de eficiencia y visión.";
        } else if (progress >= 80) {
            return "Muy buen trabajo. La ciudad es funcional y has entregado gran parte del valor. Para alcanzar la perfección, revisa si priorizaste las historias de mayor valor (ROI) al inicio del proyecto.";
        } else if (progress >= 50) {
            return "Buen esfuerzo, pero hay margen de mejora. Recuerda que como Product Owner debes decir 'NO' a tareas de bajo valor para enfocarte en lo que realmente impacta a los ciudadanos.";
        } else {
            return "Parece que hubo dificultades. Recuerda: 1) Prioriza por VALOR, no por tamaño. 2) Asegúrate de llenar la capacidad del Sprint. 3) ¡No dejes de intentar! La práctica hace al maestro.";
        }
    },

    getPhaseLabel(phase) {
        const labels = {
            onboarding: 'Tutorial',
            planning: 'Planificación',
            execution: 'Ejecución',
            review: 'Review',
            retro: 'Retro',
            complete: 'Finalizado'
        };
        return labels[phase] || phase;
    },

    getPhaseHint() {
        const hints = {
            onboarding: 'Completa el tutorial para aprender a jugar.',
            planning: 'Agrega tarjetas al Sprint hasta completar los 20 Puntos.',
            execution: 'Realiza el trabajo del Sprint y marca las tareas como hechas.',
            review: 'Revisa el valor entregado al cliente.',
            retro: 'Aprende de los errores y prepárate para el siguiente Sprint.',
            complete: '¡Juego terminado! Reinicia para mejorar tu puntaje.'
        };
        return hints[this.state.phase] || 'Sigue las instrucciones.';
    },

    setAlert(text, type = 'info') {
        this.state.alert = { text, type };
        if (this.alertTimeout) {
            clearTimeout(this.alertTimeout);
        }
        this.alertTimeout = setTimeout(() => {
            this.state.alert = null;
            this.render();
        }, 2500);
    }
};
