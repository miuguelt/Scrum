import { store } from './modules/store.js';
import { guideContent } from './data/guide-content.js';
import { SprintSimulator } from './modules/sprint-simulator.js';
import { ScrumVisionGame } from './modules/scrum-vision-game.js';
import { TutorialOverlay } from './modules/tutorial-overlay.js';

class ScrumApp {
    constructor() {
        this.currentSection = 'identificacion';
        this.simulator = null; // Lazy load
        this.visionGame = ScrumVisionGame;
        this.activeModal = null;
        this._lastFocusedEl = null;
        this._modalCloseTimer = null;

        this.init();
        TutorialOverlay.init();
    }

    init() {
        // 1. Remove Loader with smooth transition
        const loader = document.getElementById('app-loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('fade-out');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 600);
            }, 1000);
        }

        // 2. Setup Navigation
        this.setupNavigation();

        // 3. Load Initial Content
        this.loadSection('presentacion');

        // 4. Global Sub-section loader (for contextualization)
        window.app = this; // Expose for inline onclicks in HTML strings
        this.setupModals();
        this.registerImageListeners();

        console.log("Scrum Learner Guide V2 Loaded 🚀");

        // 5. Setup Story Data (Smart City Project)
        this.storyData = {
            'HU-01': {
                title: "Infraestructura: Cimentación",
                desc: "Como ingeniero, quiero establecer las bases sólidas y redes eléctricas para soportar los edificios inteligentes.",
                criteria: ["Resistencia a sismos > 7.0.", "Conexión a red eléctrica municipal.", "Planos de tuberías verificados."],
                points: 5,
                priority: 'Alta',
                value: 'Crítico',
                status: 'Ready',
                image: 'assets/stories/hu01.png',
                solution: {
                    tasks: ["Excavación profunda", "Vaciado de concreto reforzado", "Instalación de ductos"],
                    integration: "Ingeniería + Matemáticas (Estabilidad estructural)",
                    dod: ["Estudio de suelos aprobado", "Inspección de obra civil", "Planos actualizados"]
                }
            },
            'HU-02': {
                title: "Conectividad: Red 5G",
                desc: "Como ciudadano, quiero tener acceso a internet de alta velocidad en toda la ciudad para usar servicios inteligentes.",
                criteria: ["Cobertura en el 95% del área.", "Latencia < 10ms.", "Seguridad WPA3."],
                points: 8,
                priority: 'Muy Alta',
                value: 'Vital',
                status: 'Ready',
                image: 'assets/stories/hu02.png',
                solution: {
                    tasks: ["Instalación de antenas", "Configuración de núcleos de red", "Pruebas de estrés de ancho de banda"],
                    integration: "Tecnología aplicada (Telecomunicaciones)",
                    dod: ["Prueba de velocidad exitosa", "Certificado de seguridad", "Mapa de calor de cobertura"]
                }
            },
            'HU-03': {
                title: "IA: Centro de Comando",
                desc: "Como alcalde, quiero un centro que gestione el tráfico y servicios mediante IA para optimizar la ciudad.",
                criteria: ["Control de semáforos en tiempo real.", "Detección de incidentes automáticos.", "Dashboard de visualización."],
                points: 13,
                priority: 'Alta',
                value: 'Estratégico',
                status: 'Ready',
                image: 'assets/stories/hu03.png',
                solution: {
                    tasks: ["Entrenar modelos de visión de tráfico", "Integrar APIs de servicios", "Desarrollar UI de monitoreo"],
                    integration: "Ciencia + Tecnología (Inteligencia Artificial)",
                    dod: ["Precisión de detección > 90%", "Respuesta a incidentes < 2 min", "Doc de API"]
                }
            },
            'HU-04': {
                title: "Ecología: Parques Inteligentes",
                desc: "Como ciudadano, quiero zonas verdes con riego automatizado para ahorrar agua y mejorar el ambiente.",
                criteria: ["Sensores de humedad instalados.", "Riego solo en noches o baja humedad.", "Reporte de ahorro de agua."],
                points: 3,
                priority: 'Media',
                value: 'Sostenible',
                status: 'Refined',
                image: 'assets/stories/hu04.png',
                solution: {
                    tasks: ["Instalar red de sensores", "Programar lógica de riego", "Diseño de paisaje"],
                    integration: "Ciencia + Diseño (Biología + Paisajismo)",
                    dod: ["Ahorro de agua verificado", "Sensores calibrados"]
                }
            },
            'HU-05': {
                title: "Movilidad: Buses Autónomos",
                desc: "Como usuario, quiero transporte que funcione sin conductor para reducir errores humanos y congestión.",
                criteria: ["Rutas predefinidas seguras.", "Frenado de emergencia automático.", "Capacidad para 20 pasajeros."],
                points: 21,
                priority: 'Media (Complejo)',
                value: 'Innovación',
                status: 'In Refinement',
                image: 'assets/stories/hu05.png',
                solution: {
                    tasks: ["Algoritmos de navegación autónoma", "Lidar e integración de sensores", "Chasis y propulsión eléctrica"],
                    integration: "Tecnología + Ingeniería (Robótica Industrial)",
                    dod: ["100km sin intervenciones", "Certificación de seguridad vial"]
                }
            },
            'HU-06': {
                title: "Energía: Red Eléctrica Solar",
                desc: "Como gestor de energía, quiero integrar paneles solares en edificios para una ciudad autosustentable.",
                criteria: ["Eficiencia de paneles > 20%.", "Almacenamiento en baterías inteligentes.", "Venta de excedente a la red."],
                points: 5,
                priority: 'Alta',
                value: 'Ecoeficiencia',
                status: 'Ready',
                image: 'assets/stories/hu06.png',
                solution: {
                    tasks: ["Instalación de celdas fotovoltaicas", "Configuración de micro-grids", "Sistema de monitoreo de carga"],
                    integration: "Ciencia aplicada (Energías Limpias)",
                    dod: ["Balance energético positivo", "Instalación certificada"]
                }
            }
        };
    }

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Update Active State
                navItems.forEach(n => n.classList.remove('active'));
                btn.classList.add('active');

                // Get Target
                const target = btn.dataset.target;
                this.loadSection(target);
            });
        });

        // Sidebar Toggle Logic
        const toggleBtn = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('main-sidebar');

        if (toggleBtn && sidebar) {
            toggleBtn.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');
            });
        }
    }

    loadSection(sectionId) {
        // Scroll suave al inicio
        document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });

        this.currentSection = sectionId;
        const guideContainer = document.getElementById('guide-container');
        const simulatorContainer = document.getElementById('simulator-container');

        // Reset Views
        guideContainer.classList.add('hidden-view');
        guideContainer.classList.remove('active-view');
        simulatorContainer.classList.add('hidden-view');
        simulatorContainer.classList.remove('active-view');

        const visionContainer = document.getElementById('vision-game-container');
        visionContainer.classList.add('hidden-view');
        visionContainer.classList.remove('active-view');

        // Special Case: Simulator
        if (sectionId === 'transferencia') {
            simulatorContainer.classList.remove('hidden-view');
            setTimeout(() => {
                simulatorContainer.classList.add('active-view');
            }, 50);
            this.initSimulatorIfNeeded();
            return;
        }

        // Special Case: Scrum Vision Game
        if (sectionId === 'vision-game') {
            visionContainer.classList.remove('hidden-view');
            setTimeout(() => {
                visionContainer.classList.add('active-view');
            }, 50);
            this.visionGame.init(visionContainer);
            return;
        }

        // Standard Guide Content
        guideContainer.classList.remove('hidden-view');

        // Inject Content First
        if (guideContent[sectionId]) {
            guideContainer.innerHTML = guideContent[sectionId];

            // If it's the 'apropiacion' section, render the backlog grid
            if (sectionId === 'apropiacion') {
                this.renderBacklogGrid();
            }

            // Trigger Animation and Render Diagrams (must be visible for Mermaid)
            setTimeout(() => {
                guideContainer.classList.add('active-view');
                this.renderDiagrams();
            }, 50);

            // If it's the games hub, make sure the container starts hidden or empty
            if (sectionId === 'juegos') {
                const gc = document.getElementById('game-container');
                if (gc) gc.classList.add('hidden-view');
            }
        } else {
            console.error(`Section ${sectionId} not found in guideContent.`);
        }
    }

    loadSubSection(subId) {
        const raw = guideContent[subId];
        if (!raw) return;

        const { title, bodyHtml } = this.extractModalTitleAndBody(raw);
        this.openContentModal(title || 'Detalle', bodyHtml);
    }

    filterGlossary() {
        const input = document.getElementById('glossary-search');
        if (!input) return;
        const filter = input.value.toLowerCase();
        const items = document.querySelectorAll('.glossary-item');

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "";
                item.classList.add('animate-fadeIn');
            } else {
                item.style.display = "none";
            }
        });
    }

    async loadEstimator(btn) {
        const container = this.openGameModal('🧮 Estimador Pro');
        if (!container) return;

        const { StoryPointEstimator } = await import('./modules/story-point-estimator.js');
        StoryPointEstimator.init(container);
    }

    loadGame(gameId) {
        const gameTitles = {
            'role-matching': '🧩 Role Matching',
            'scrum-quiz': '💡 Scrum Quiz',
            'estimation-game': 'mn Estimación Fibonacci',
            'planning-challenge': '🎯 Reto de Planificación',
            'daily-reto': '💬 Situaciones Daily',
            'sprint-goal': '🎯 Foco del Sprint',
            'dod-check': '✅ Definition of Done',
            'artifact-match': '📦 Artefactos Clave',
            'review-detective': '🕵️ Review Detective',
            'refinement-ready': '🧠 Refinement Ready'
        };

        const container = this.openGameModal(gameTitles[gameId] || 'Reto Scrum');
        if (!container) return;

        // Lazy load or import game logic
        import('./modules/games-logic.js').then(module => {
            const GameEngine = module.default;
            switch (gameId) {
                case 'role-matching': GameEngine.initRoleMatching(container); break;
                case 'scrum-quiz': GameEngine.initQuiz(container); break;
                case 'estimation-game': GameEngine.initEstimationGame(container); break;
                case 'planning-challenge': GameEngine.initPlanningChallenge(container); break;
                case 'daily-reto': GameEngine.initDailyScrumReto(container); break;
                case 'sprint-goal': GameEngine.initSprintGoalFocus(container); break;
                case 'dod-check': GameEngine.initDoDChecklist(container); break;
                case 'artifact-match': GameEngine.initArtifactMatch(container); break;
                case 'review-detective': GameEngine.initReviewDetective(container); break;
                case 'refinement-ready': GameEngine.initRefinementReady(container); break;
            }
        });
    }

    showStoryDetail(storyId) {
        const story = this.storyData[storyId];
        if (!story) return;

        const modal = document.getElementById('decision-modal');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const options = document.getElementById('modal-options');

        title.innerText = story.title;
        desc.innerHTML = `
            <div id="story-content-view">
                <div class="story-detail-modal">
                    <p><strong>Descripción:</strong> ${story.desc}</p>
                    <div class="criteria-list">
                        <strong>Criterios de Aceptación:</strong>
                        <ul>${Array.isArray(story.criteria)
                ? story.criteria.map(c => `<li>${c}</li>`).join('')
                : `<li>${story.criteria}</li>`}
                        </ul>
                    </div>
                    <div class="story-footer">
                        <span class="badge">Esfuerzo: ${story.points} Story Points</span>
                    </div>
                </div>
            </div>
            
            <div id="solution-content-view" class="hidden">
                <div class="solution-detail-modal">
                    <h4 class="solution-title">🚀 Solución Propuesta (Cómo se Logra)</h4>
                    <div class="tasks-section">
                        <strong>Tareas Técnicas:</strong>
                        <ul>${story.solution.tasks.map(t => `<li>${t}</li>`).join('')}</ul>
                    </div>
                    
                    <div class="steam-box">
                        <div class="steam-header">🎯 Áreas integradas</div>
                        <p>${story.solution.integration || story.solution.steam}</p>
                    </div>

                    <div class="dod-section">
                        <strong>Definition of Done (DoD):</strong>
                        <div class="dod-badges">
                            ${story.solution.dod.map(d => `<span class="dod-tag">✅ ${d}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        options.innerHTML = `
            <button class="option-btn secondary" id="btn-toggle-view" onclick="app.toggleStoryView()">Ver Historia Solucionada</button>
            <button class="option-btn primary" onclick="app.closeModal()">Entendido</button>
        `;

        this.openModal(modal);
    }

    toggleStoryView() {
        const storyView = document.getElementById('story-content-view');
        const solutionView = document.getElementById('solution-content-view');
        const toggleBtn = document.getElementById('btn-toggle-view');

        if (solutionView.classList.contains('hidden')) {
            storyView.classList.add('hidden');
            solutionView.classList.remove('hidden');
            toggleBtn.innerText = "Volver a Requerimientos";
            toggleBtn.classList.replace('secondary', 'accent-btn');
        } else {
            storyView.classList.remove('hidden');
            solutionView.classList.add('hidden');
            toggleBtn.innerText = "Ver Historia Solucionada";
            toggleBtn.classList.replace('accent-btn', 'secondary');
        }
    }

    showArtifactExample(type) {
        const artifacts = {
            'product-backlog': {
                title: "📜 Product Backlog: Eco-Bot",
                content: `
                    <div class="artifact-preview">
                        <p class="artifact-intro">Lista priorizada por el Product Owner con TODO lo que el Eco-Bot podría tener.</p>
                        <table class="sena-table">
                            <thead>
                                <tr><th>ID</th><th>Historia de Usuario</th><th>Prioridad</th></tr>
                            </thead>
                            <tbody>
                                <tr class="high"><td>HU-01</td><td>Detectar botellas plásticas PET</td><td>Alta</td></tr>
                                <tr class="high"><td>HU-02</td><td>Brazo robótico con agarre firme</td><td>Alta</td></tr>
                                <tr class="medium"><td>HU-03</td><td>Base con ruedas todoterreno</td><td>Media</td></tr>
                                <tr class="low"><td>HU-04</td><td>Pintura biodegradable verde</td><td>Baja</td></tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            'sprint-backlog': {
                title: "📋 Sprint Backlog: Sprint 1",
                content: `
                    <div class="artifact-preview">
                        <p class="artifact-intro">Compromiso del equipo para este Sprint de 2 semanas.</p>
                        <div class="sprint-goal"><strong>Objetivo:</strong> Lograr que el Eco-Bot identifique y sujete plástico.</div>
                        <ul class="task-list">
                            <li><strong>HU-01:</strong> Detectar botellas (8 SP)
                                <ul><li>Subtarea: Entrenar modelo IA</li><li>Subtarea: Pruebas de sensor</li></ul>
                            </li>
                            <li><strong>HU-02:</strong> Brazo robótico (5 SP)
                                <ul><li>Subtarea: Ensamblar servomotores</li></ul>
                            </li>
                        </ul>
                    </div>
                `
            },
            'incremento': {
                title: "📦 Incremento: Eco-Bot MVP",
                content: `
                    <div class="artifact-preview">
                        <p class="artifact-intro">Software y Hardware funcionando al final del Sprint.</p>
                        <div class="increment-status success">
                            <strong>Estado: ¡DONE!</strong>
                            <p>El Eco-Bot ahora puede ver una botella frente a él, cerrar su pinza y levantarla 10cm sin soltarla.</p>
                        </div>
                        <p><small>* Cumple con la Definition of Done: Código verificado, Pruebas de hardware superadas.</small></p>
                    </div>
                `
            }
        };

        const data = artifacts[type];
        if (!data) return;

        const modal = document.getElementById('decision-modal');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const options = document.getElementById('modal-options');

        title.innerText = data.title;
        desc.innerHTML = data.content;
        options.innerHTML = `<button class="option-btn primary" onclick="app.closeModal()">Cerrar Previsualización</button>`;

        this.openModal(modal);
    }

    closeModal() {
        const modal = document.getElementById('decision-modal');
        if (modal) this.closeModalEl(modal);
    }

    openContentModal(titleText, bodyHtml) {
        const modal = document.getElementById('content-modal');
        const title = document.getElementById('content-modal-title');
        const body = document.getElementById('content-modal-body');
        if (!modal || !title || !body) return;

        title.textContent = titleText || 'Detalle';
        body.innerHTML = bodyHtml || '';
        this.renderDiagrams();
        this.openModal(modal);
    }

    openGameModal(titleText) {
        const modal = document.getElementById('content-modal');
        const content = modal.querySelector('.modal-content');
        const title = document.getElementById('content-modal-title');
        const body = document.getElementById('content-modal-body');

        if (!modal || !content || !title || !body) return;

        // Setup Game Mode
        content.classList.add('modal-content--game');
        title.textContent = titleText || 'Reto Scrum';
        body.innerHTML = '<div class="loader-content"><p>Iniciando reto...</p></div>';

        this.openModal(modal);
        return body; // Return container for game to render into
    }

    closeContentModal() {
        const modal = document.getElementById('content-modal');
        if (modal) {
            this.closeModalEl(modal);
            // Cleanup game mode after animation
            setTimeout(() => {
                const content = modal.querySelector('.modal-content');
                if (content) content.classList.remove('modal-content--game');
                // Clear game content to stop any running intervals/loops
                const body = document.getElementById('content-modal-body');
                if (body) body.innerHTML = '';
            }, 200);
        }
    }

    setupModals() {
        const closeSelectors = '[data-modal-close]';

        // Click outside to close (both modals)
        document.addEventListener('click', (e) => {
            const openModal = document.querySelector('.modal.open');
            if (!openModal) return;

            if (e.target instanceof Element && e.target.matches(closeSelectors)) {
                if (openModal.id === 'content-modal') this.closeContentModal();
                else if (openModal.id === 'decision-modal') this.closeModal();
                return;
            }

            if (e.target === openModal) {
                if (openModal.id === 'content-modal') this.closeContentModal();
                else if (openModal.id === 'decision-modal') this.closeModal();
            }
        });

        // ESC + focus trap
        document.addEventListener('keydown', (e) => {
            const openModal = document.querySelector('.modal.open');
            if (!openModal) return;

            if (e.key === 'Escape') {
                e.preventDefault();
                if (openModal.id === 'content-modal') this.closeContentModal();
                else if (openModal.id === 'decision-modal') this.closeModal();
                return;
            }

            if (e.key === 'Tab') {
                const focusables = this.getFocusableElements(openModal);
                if (focusables.length === 0) return;

                const first = focusables[0];
                const last = focusables[focusables.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
    }

    showConceptDetail(key) {
        const concepts = {
            'velocidad': {
                title: '📈 Velocidad',
                content: `
                    <div class="concept-detail">
                        <p class="concept-intro">La velocidad es una métrica fundamental para la planificación empírica en Scrum.</p>
                        <div class="concept-body">
                            <ul>
                                <li><strong>Medición:</strong> Se calcula como el promedio de Story Points completados totalmente (Done) en los últimos 3 sprints.</li>
                                <li><strong>Propósito:</strong> Ayuda al equipo a predecir cuánto trabajo puede comprometerse a realizar en futuros Sprints sin sobrecargarse.</li>
                                <li><strong>Advertencia:</strong> No es una métrica de rendimiento individual ni para comparar equipos. Es una herramienta de planificación interna.</li>
                            </ul>
                            <div class="pro-tip">
                                <strong>💡 Pro Tip:</strong> Si la velocidad fluctúa mucho, revisa si las historias están bien refinadas o si hay bloqueos externos frecuentes.
                            </div>
                        </div>
                    </div>
                `
            },
            'objetivo-sprint': {
                title: '🧭 Objetivo de Sprint',
                content: `
                    <div class="concept-detail">
                        <p class="concept-intro">El Sprint Goal es el "por qué" estamos construyendo este incremento.</p>
                        <div class="concept-body">
                            <ul>
                                <li><strong>Compromiso:</strong> Es la única meta fija que NO se negocia durante el Sprint. El alcance (las tareas) puede ajustarse, pero el objetivo permanece.</li>
                                <li><strong>Foco:</strong> Sirve como brújula. Si una tarea no aporta al objetivo, el equipo debe cuestionar si realmente es necesaria ahora.</li>
                                <li><strong>Cohesión:</strong> Fomenta el trabajo en equipo en lugar de que cada uno trabaje en iniciativas aisladas.</li>
                            </ul>
                            <div class="pro-tip">
                                <strong>💡 Pro Tip:</strong> Un buen Sprint Goal une al equipo. Ejemplo: "Lograr que el usuario pueda pagar" vs "Hacer la historia 5, 8 y 10".
                            </div>
                        </div>
                    </div>
                `
            },
            'calidad': {
                title: '✅ Calidad (Definition of Done)',
                content: `
                    <div class="concept-detail">
                        <p class="concept-intro">La calidad no es negociable y se define explícitamente a través de la Definition of Done (DoD).</p>
                        <div class="concept-body">
                            <ul>
                                <li><strong>Transparencia:</strong> Crea un entendimiento compartido de lo que significa que el trabajo está "terminado".</li>
                                <li><strong>Estándar:</strong> Usualmente incluye: código revisado, pruebas unitarias pasadas, criterios de aceptación cumplidos y documentación técnica.</li>
                                <li><strong>Incremento Utilizable:</strong> Solo el trabajo que cumple la DoD puede ser considerado parte del Incremento y presentado en la Sprint Review.</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'empirismo': {
                title: '🏠 Empirismo',
                content: `
                    <div class="concept-detail">
                        <p class="concept-intro">Scrum se basa en la teoría de control de procesos empírica: el conocimiento proviene de la experiencia y la toma de decisiones se basa en lo observado.</p>
                        <div class="concept-body">
                            <div class="pillars-grid-modal" style="display: grid; gap: 1rem;">
                                <div class="pillar-item">
                                    <strong>1. Transparencia:</strong> Los aspectos significativos del proceso deben ser visibles para aquellos responsables del resultado. (Ej. Tablero Kanban visible).
                                </div>
                                <div class="pillar-item">
                                    <strong>2. Inspección:</strong> Los usuarios de Scrum deben inspeccionar frecuentemente los artefactos y el progreso para detectar variaciones indeseadas.
                                </div>
                                <div class="pillar-item">
                                    <strong>3. Adaptación:</strong> Si se determina que uno o más aspectos del proceso se desvían de los límites aceptables, el proceso o el material debe ajustarse cuanto antes.
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            'lean-thinking': {
                title: '♻️ Lean Thinking',
                content: `
                    <div class="concept-detail">
                        <p class="concept-intro">El pensamiento Lean reduce el desperdicio y se enfoca en lo esencial.</p>
                        <div class="concept-body">
                            <ul>
                                <li><strong>Eliminar Desperdicio:</strong> Todo lo que no aporta valor al cliente es desperdicio (ej. burocracia excesiva, funcionalidades que nadie usa, esperas).</li>
                                <li><strong>Calidad en la Fuente:</strong> Hacer las cosas bien desde el principio para evitar retrabajos.</li>
                                <li><strong>Respeto por las Personas:</strong> Quienes hacen el trabajo son quienes mejor saben cómo mejorarlo.</li>
                                <li><strong>Mejora Continua:</strong> Buscar siempre la perfección a través de cambios incrementales.</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        };

        const data = concepts[key];
        if (data) {
            this.openContentModal(data.title, data.content);
        }
    }

    openModal(modalEl) {
        if (!modalEl) return;
        if (this._modalCloseTimer) {
            clearTimeout(this._modalCloseTimer);
            this._modalCloseTimer = null;
        }

        this._lastFocusedEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;

        modalEl.classList.remove('hidden');
        // Trigger transition
        requestAnimationFrame(() => modalEl.classList.add('open'));

        document.body.classList.add('modal-open');
        this.activeModal = modalEl;

        const focusables = this.getFocusableElements(modalEl);
        if (focusables.length > 0) focusables[0].focus();
        else {
            const docEl = modalEl.querySelector('[role="document"]');
            if (docEl instanceof HTMLElement) docEl.focus();
        }
    }

    closeModalEl(modalEl) {
        if (!modalEl) return;

        modalEl.classList.remove('open');

        // Allow animation to play before display:none
        this._modalCloseTimer = setTimeout(() => {
            modalEl.classList.add('hidden');
            this._modalCloseTimer = null;

            if (!document.querySelector('.modal.open')) {
                document.body.classList.remove('modal-open');
                this.activeModal = null;
            }

            if (this._lastFocusedEl && document.contains(this._lastFocusedEl)) {
                this._lastFocusedEl.focus();
            }
            this._lastFocusedEl = null;
        }, 190);
    }

    getFocusableElements(root) {
        if (!root) return [];
        const selector = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ].join(',');

        return Array.from(root.querySelectorAll(selector))
            .filter((el) => el instanceof HTMLElement && !el.hasAttribute('disabled') && el.getClientRects().length > 0);
    }

    extractModalTitleAndBody(rawHtml) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = (rawHtml || '').trim();

        const heading = wrapper.querySelector('h1, h2, h3');
        const title = heading ? heading.textContent.trim() : '';
        if (heading) heading.remove();

        return { title, bodyHtml: wrapper.innerHTML };
    }

    toggleFlip(card) {
        card.classList.toggle('flipped');
    }

    toggleCardDetails(btn) {
        // Encontrar el contenedor de la tarjeta (puede ser theory-card o cualquier padre relativo)
        const card = btn.closest('.theory-card') || btn.closest('.glass-panel') || btn.parentElement;
        const details = card.querySelector('.card-details');

        if (!details) return;

        const isActive = details.classList.contains('active');

        if (isActive) {
            details.classList.remove('active');
            btn.innerHTML = 'Ver más <span style="font-size: 1.2em; vertical-align: middle;">+</span>';
            btn.style.borderColor = 'var(--glass-border)';
            btn.style.background = 'transparent';
        } else {
            details.classList.add('active');
            btn.innerHTML = 'Ver menos <span style="font-size: 1.2em; vertical-align: middle;">-</span>';
            btn.style.borderColor = 'var(--primary)';
            btn.style.background = 'rgba(99, 102, 241, 0.1)';
        }
    }

    startSimulator() {
        // Helper to jump to simulator from existing button inside text
        document.querySelector('.nav-item[data-target="transferencia"]').click();
    }

    openImageModal(src, alt) {
        const modal = document.getElementById('image-modal');
        const img = document.getElementById('modal-image-enlarged');
        const caption = document.getElementById('modal-image-caption');

        if (!modal || !img) return;

        img.src = src;
        img.alt = alt || 'Imagen ampliada';
        if (caption) caption.textContent = alt || '';

        this.openModal(modal);
    }

    closeImageModal() {
        const modal = document.getElementById('image-modal');
        if (modal) {
            this.closeModalEl(modal);
        }
    }

    registerImageListeners() {
        // Use event delegation for images that might be injected dynamically
        document.addEventListener('click', (e) => {
            if (e.target instanceof HTMLImageElement &&
                (e.target.closest('.guide-section') || e.target.closest('.media-card') || e.target.closest('.theory-card'))) {

                // Avoid opening modal for images inside other modals or loaders
                if (e.target.closest('.modal') || e.target.closest('#app-loader')) return;

                this.openImageModal(e.target.src, e.target.alt);
            }
        });
    }

    initSimulatorIfNeeded() {
        if (!this.simulator) {
            this.simulator = new SprintSimulator();
        }
    }

    async renderDiagrams() {
        // Re-render mermaid diagrams if any are present
        if (typeof mermaid !== 'undefined') {
            try {
                const nodes = document.querySelectorAll('.mermaid');
                if (nodes.length > 0) {
                    await mermaid.run({ nodes: nodes });
                }
            } catch (e) {
                console.warn("Mermaid run error:", e);
            }
        }
    }

    renderBacklogGrid() {
        const grid = document.getElementById('guide-backlog-grid');
        if (!grid) return;

        const stories = Object.entries(this.storyData).map(([id, data]) => ({
            id,
            ...data,
            color: data.points > 10 ? 'priority-high' : data.points > 5 ? 'priority-medium' : 'priority-low'
        }));

        // Render Dashboard View
        grid.innerHTML = `
            <div class="backlog-dashboard">
                <div class="dashboard-stats glass-panel">
                    <div class="stat-item">
                        <span class="label">Total Historias</span>
                        <span class="value">${stories.length}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Total Story Points</span>
                        <span class="value">${stories.reduce((acc, s) => acc + s.points, 0)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="label">Esfuerzo Promedio</span>
                        <span class="value">${(stories.reduce((acc, s) => acc + s.points, 0) / stories.length).toFixed(1)} SP</span>
                    </div>
                </div>

                <div class="dashboard-main-grid">
                    <div class="backlog-table-container glass-panel">
                        <h4>📋 Registro del Product Backlog</h4>
                        <table class="premium-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Título</th>
                                    <th>Valor Negocio</th>
                                    <th>Esfuerzo</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${stories.map(s => `
                                    <tr onclick="app.showStoryDetail('${s.id}')">
                                        <td><strong>${s.id}</strong></td>
                                        <td>${s.title}</td>
                                        <td><span class="badge value-badge">${s.value}</span></td>
                                        <td><span class="badge effort-badge">${s.points} SP</span></td>
                                        <td><span class="status-indicator ${s.status.toLowerCase().replace(' ', '-')}">${s.status}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="prioritization-matrix glass-panel">
                        <h4>⚖️ Matriz de Priorización</h4>
                        <div class="matrix-grid">
                            <div class="matrix-cell high-value-low-effort">
                                <span class="matrix-label">Ganes Rápidos</span>
                                <div class="cell-content">
                                    ${stories.filter(s => s.points <= 8 && (s.value === 'Vital' || s.value === 'Crítico')).map(s => `<span class="mini-tag" onclick="app.showStoryDetail('${s.id}')">${s.id}</span>`).join('')}
                                </div>
                            </div>
                            <div class="matrix-cell high-value-high-effort">
                                <span class="matrix-label">Proyectos Estratégicos</span>
                                <div class="cell-content">
                                    ${stories.filter(s => s.points > 8 && (s.value === 'Vital' || s.value === 'Crítico' || s.value === 'Estratégico')).map(s => `<span class="mini-tag" onclick="app.showStoryDetail('${s.id}')">${s.id}</span>`).join('')}
                                </div>
                            </div>
                            <div class="matrix-cell low-value-low-effort">
                                <span class="matrix-label">Tareas Menores</span>
                                <div class="cell-content">
                                    ${stories.filter(s => s.points <= 8 && (s.value === 'Sostenible' || s.value === 'Ecoeficiencia')).map(s => `<span class="mini-tag" onclick="app.showStoryDetail('${s.id}')">${s.id}</span>`).join('')}
                                </div>
                            </div>
                            <div class="matrix-cell low-value-high-effort">
                                <span class="matrix-label">Posponer</span>
                                <div class="cell-content">
                                    ${stories.filter(s => s.points > 8 && (s.value === 'Innovación' || s.value === 'Sostenible')).map(s => `<span class="mini-tag" onclick="app.showStoryDetail('${s.id}')">${s.id}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="backlog-visual-grid">
                    ${stories.map(s => `
                        <div class="story-premium-card" onclick="app.showStoryDetail('${s.id}')">
                            <div class="card-img-container">
                                <img src="${s.image}" alt="${s.title}" loading="lazy">
                                <span class="id-overlay">${s.id}</span>
                            </div>
                            <div class="card-info">
                                <h3>${s.title}</h3>
                                <div class="card-meta">
                                    <span class="pts"><i class="icon">⚡</i> ${s.points} SP</span>
                                    <span class="priority ${s.priority.toLowerCase().split(' ')[0]}">${s.priority}</span>
                                </div>
                            </div>
                            <div class="card-hover-overlay">
                                <span>Ver Detalle Técnico →</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    new ScrumApp();
});
