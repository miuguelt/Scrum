export const StoryPointEstimator = {
    init(container) {
        container.innerHTML = `
            <div class="estimator-tool glass-panel">
                <header class="estimator-header">
                    <h3>📏 Estimador de Story Points</h3>
                    <button class="btn-small-help" onclick="app.estimator.toggleGuide()">📘 Guía de Puntos</button>
                </header>
                <p>La estimación en Scrum no es sobre "tiempo exacto", sino sobre <b>Esfuerzo + Complejidad + Incertidumbre</b>.</p>
                
                <div id="estimator-guide" class="guide-panel hidden">
                    <h4>¿Por qué usamos Fibonacci (1, 2, 3, 5, 8...)?</h4>
                    <p>Porque cuanto más grande es la tarea, más difícil es estimar con precisión. La escala exponencial refleja esta incertidumbre (Cono de Incertidumbre).</p>
                    <ul class="points-legend">
                        <li><b>1 SP:</b> Trivial. Cambio de texto, color. (1 hora o menos)</li>
                        <li><b>3 SP:</b> Tarea estándar. Lógica simple, sin riesgos. (Media jornada)</li>
                        <li><b>5 SP:</b> Complejidad media. Lógica + Base de datos o API. (1 día aprox)</li>
                        <li><b>8 SP:</b> Complejo. Involucra varios sistemas o algo nuevo. (2-3 días)</li>
                        <li><b>13 SP:</b> Muy complejo/Riesgoso. ¡Debería dividirse! (Mitad del Sprint)</li>
                    </ul>
                </div>

                <div class="estimator-setup">
                    <label class="setup-label">Selecciona una Historia de Usuario para estimar:</label>
                    <div class="custom-select-wrapper">
                        <select id="task-select" class="glass-select" onchange="app.estimator.updateTask()">
                            <option value="">-- Selecciona un desafío --</option>
                            <option value="api">Desarrollar una API de Login (Lógica + DB)</option>
                            <option value="css">Ajustar colores de un botón (Solo CSS)</option>
                            <option value="bot">Entrenar IA para detectar 5 tipos de basura</option>
                            <option value="docs">Escribir manual de usuario de 50 páginas</option>
                            <option value="refactor">Refactorizar módulo legacy sin tests</option>
                        </select>
                        <span class="custom-arrow">▼</span>
                    </div>
                </div>

                <div id="estimator-playground" class="hidden">
                    <div class="task-description glass-panel" id="task-desc"></div>
                    <p class="instruction-text">Selecciona tu carta de Poker:</p>
                    <div class="fibonacci-grid">
                        ${[1, 2, 3, 5, 8, 13, 21].map(n => `
                            <button class="poker-card" onclick="app.estimator.estimate(${n})">
                                <span class="card-val-top">${n}</span>
                                <span class="card-val-center">${n}</span>
                                <span class="card-val-bottom">${n}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div id="estimator-feedback" class="hidden-view"></div>
            </div>
        `;
        this.container = container;
        window.app.estimator = this;
    },

    toggleGuide() {
        const guide = document.getElementById('estimator-guide');
        guide.classList.toggle('hidden');
    },

    tasks: {
        api: {
            desc: "Historia: Como usuario, quiero loguearme para ver mis datos. \n\nDetalles: Requiere crear endpoints, validar tokens JWT, hashear passwords y guardar en Base de Datos PostgreSQL.",
            ideal: 5,
            reason: "EDUCATIVO: Es una tarea de complejidad media (5). Aunque es 'estándar', toca todas las capas (Front, Back, DB) y seguridad. No es un 3 porque la seguridad requiere cuidado, pero no es un 8 porque es un problema conocido."
        },
        css: {
            desc: "Historia: Como diseñador, quiero que el botón 'Comprar' sea verde para mejorar la conversión. \n\nDetalles: Cambiar valores hexadecimales y padding en el archivo CSS global.",
            ideal: 1,
            reason: "EDUCATIVO: Es la unidad mínima (1). Riesgo casi nulo, esfuerzo mínimo y complejidad baja. Perfecto para juniors o 'quick wins'."
        },
        bot: {
            desc: "Historia: Como ciudadano, quiero que el bot reconozca plásticos automáticamente. \n\nDetalles: Recolectar dataset, entrenar modelo TensorFlow, validar precisión > 90% e integrar con cámara.",
            ideal: 13,
            reason: "EDUCATIVO: ¡Alerta de riesgo! (13). Hay mucha incertidumbre: ¿Funcionará el modelo? ¿La cámara tiene buena luz? En Scrum, un 13 suele ser señal de que DEBE DIVIDIRSE en historias más pequeñas (SPIKE de investigación + Implementación)."
        },
        docs: {
            desc: "Historia: Como soporte, quiero un manual PDF para enviar a clientes. \n\nDetalles: Redactar 50 páginas, tomar capturas de pantalla, maquetar y revisar ortografía.",
            ideal: 8,
            reason: "EDUCATIVO: Complejidad técnica baja, pero ESFUERZO alto (8). Los Story Points miden ESFUERZO también. Escribir 50 páginas toma tiempo, aunque sea 'fácil'. No subestimes el trabajo manual."
        },
        refactor: {
            desc: "Historia: Como desarrollador, quiero limpiar el código de facturación para añadir nuevas funciones. \n\nDetalles: El código actual es 'spaghetti', no tiene documentación y NO tiene tests automáticos.",
            ideal: 21,
            reason: "EDUCATIVO: (21) ¡Peligro extremo! Refactorizar sin tests es suicida. La incertidumbre es total. Esta tarea no debería entrar al Sprint así. Primero crea tests (Investigación) y luego refactoriza por partes."
        }
    },

    updateTask() {
        const select = document.getElementById('task-select');
        const taskId = select.value;
        const playground = document.getElementById('estimator-playground');
        const desc = document.getElementById('task-desc');

        if (taskId && this.tasks[taskId]) {
            playground.classList.remove('hidden');
            desc.innerText = this.tasks[taskId].desc;
            document.getElementById('estimator-feedback').classList.add('hidden-view');
        } else {
            playground.classList.add('hidden');
        }
    },

    estimate(val) {
        const select = document.getElementById('task-select');
        const task = this.tasks[select.value];
        const feedback = document.getElementById('estimator-feedback');

        feedback.classList.remove('hidden-view');
        feedback.classList.add('active-view');

        if (val === task.ideal) {
            feedback.innerHTML = `
                <div class="feedback-msg success">
                    <h4>🎯 ¡Puntería Ágil Exacta!</h4>
                    <p>${task.reason}</p>
                    <small>+50 XP para tu perfil</small>
                </div>
            `;
        } else if (Math.abs(val - task.ideal) <= 3) {
            feedback.innerHTML = `
                <div class="feedback-msg warning">
                    <h4>⚖️ Cerca del Consenso</h4>
                    <p>Estimaste ${val}, pero el equipo sugiere ${task.ideal}. ${task.reason}</p>
                </div>
            `;
        } else {
            feedback.innerHTML = `
                <div class="feedback-msg danger">
                    <h4>🔎 Revisión Necesaria</h4>
                    <p>Hay una gran diferencia. Recuerda considerar: Complejidad + Esfuerzo + Incertidumbre. La sugerencia es ${task.ideal}.</p>
                </div>
            `;
        }
    }
};
