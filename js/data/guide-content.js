export const guideContent = {
    "identificacion": `
        <article class="guide-section">
            <div class="glass-panel profile-card">
                <div class="sena-header">
                    <div class="sena-logo-placeholder">ADSO 2026</div>
                    <div class="guide-badge">Guía de Aprendizaje #02</div>
                </div>
                <h2>Identificación de la Guía</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Programa:</label>
                        <span>Análisis y Desarrollo de Software</span>
                    </div>
                    <div class="info-item">
                        <label>Código:</label>
                        <span>228118</span>
                    </div>
                    <div class="info-item">
                        <label>Fase:</label>
                        <span>Planeación (Propuesta Técnica)</span>
                    </div>
                    <div class="info-item">
                        <label>Duración:</label>
                        <span>40 Horas</span>
                    </div>
                </div>
                <div class="competence-box">
                    <strong>Competencia:</strong>
                    <p>Elaboración de la propuesta técnica del software.</p>
                </div>
                <div class="learning-outcomes">
                    <strong>Perfil del Egresado ADSO:</strong>
                    <p style="margin-bottom: 1rem; font-size: 0.9em; line-height: 1.4;">Como futuro desarrollador, deberás no solo codificar, sino estructurar propuestas viables. Usarás <b>Scrum</b> como metodología para construir, validar y presentar propuestas técnicas incrementales que generen valor desde el primer momento.</p>
                    <strong>Resultados de Aprendizaje:</strong>
                    <ul>
                        <li><span class="dot"></span> Definir especificaciones técnicas del software de acuerdo con las características del software a construir.</li>
                        <li><span class="dot"></span> Elaborar propuesta técnica del software de acuerdo con las especificaciones técnicas definidas.</li>
                        <li><span class="dot"></span> Validar las condiciones de la propuesta técnica del software de acuerdo con los intereses de las partes.</li>
                    </ul>
                </div>
            </div>
        </article>
    `,
    "presentacion": `
        <article class="guide-section">
            <div class="hero-premium">
                <div class="hero-content">
                    <span class="hero-badge">ADSO 2026 • Innovación Ágil</span>
                    <h1 class="text-glow">ScrumMastery <span class="text-gradient">ADSO</span></h1>
                    <p class="hero-subtitle">Misión: Propuesta Técnica para la Smart City del Futuro</p>
                    <div class="hero-actions">
                        <button class="action-btn primary-btn" onclick="document.querySelector('.nav-item[data-target=\\'reflexion\\']').click()">Empezar Ruta →</button>
                        <button class="action-btn secondary-btn" onclick="app.showConceptDetail('empirismo')">Ver Manifiesto</button>
                    </div>
                </div>
            </div>

            <div class="intro-grid">
                <div class="glass-panel info-card">
                    <div class="card-icon">🚀</div>
                    <h3>El Reto</h3>
                    <p>En el mercado actual, una propuesta técnica es un artefacto vivo. Usarás <strong>Scrum</strong> para construir la propuesta de la <strong>Smart City</strong> de manera iterativa y basada en valor real.</p>
                </div>
                <div class="glass-panel info-card">
                    <div class="card-icon">🏗️</div>
                    <h3>Los Pilares</h3>
                    <div class="pillar-mini-list">
                        <span><b style="color:var(--primary)">🔍 Transparencia:</b> Todo visible.</span>
                        <span><b style="color:var(--secondary)">👀 Inspección:</b> Revisión continua.</span>
                        <span><b style="color:var(--accent)">🔧 Adaptación:</b> Ajuste al cambio.</span>
                    </div>
                </div>
            </div>
            
            <div class="steam-integration">
                <h3>Ecosistema de Habilidades (STEAM)</h3>
                <p class="section-lead">Integramos ciencia, tecnología e ingenieria para una solución urbana integral.</p>
                <div class="steam-cards-container">
                    <div class="steam-card-new s">
                        <div class="steam-header"><b>S</b>cience</div>
                        <p>Investigación de suelos y climatología para cimentación inteligente.</p>
                    </div>
                    <div class="steam-card-new t">
                        <div class="steam-header"><b>T</b>echnology</div>
                        <p>Redes 5G, sensores IoT y conectividad cifrada de extremo a extremo.</p>
                    </div>
                    <div class="steam-card-new e">
                        <div class="steam-header"><b>E</b>ngineering</div>
                        <p>Infraestructura urbana resiliente y redes eléctricas solares.</p>
                    </div>
                    <div class="steam-card-new a">
                        <div class="steam-header"><b>A</b>rchitecture</div>
                        <p>Diseño de interfaces urbanas accesibles e inclusivas.</p>
                    </div>
                    <div class="steam-card-new m">
                        <div class="steam-header"><b>M</b>ath</div>
                        <p>Métricas de tráfico, balance hídrico y dashboards de KPIs.</p>
                    </div>
                </div>
            </div>

            <div class="learning-path-section">
                <h3>Tu Ruta de Aprendizaje</h3>
                <div class="path-grid">
                    <div class="path-card" onclick="document.querySelector('.nav-item[data-target=\\'contextualizacion\\']').click()">
                        <div class="path-index">01</div>
                        <h4>Explorar Fundamentos</h4>
                        <p>Roles, eventos y artefactos en el mundo real.</p>
                    </div>
                    <div class="path-card" onclick="document.querySelector('.nav-item[data-target=\\'juegos\\']').click()">
                        <div class="path-index">02</div>
                        <h4>Entrenar Habilidades</h4>
                        <p>Mini-retos, quices y simulaciones rápidas.</p>
                    </div>
                    <div class="path-card" onclick="document.querySelector('.nav-item[data-target=\\'transferencia\\']').click()">
                        <div class="path-index">03</div>
                        <h4>Dominar el Sprint</h4>
                        <p>Simulador profesional de toma de decisiones.</p>
                    </div>
                </div>
            </div>

            <div class="diagram-section-premium glass-panel">
                <h4>Visualizando el Valor Continuo</h4>
                <div class="mermaid">
                    flowchart LR
                        A((Backlog)) --> B{Sprint}
                        B --> C[Incremento]
                        C --> D(Mejora)
                        D --> A
                        style B fill:#2dd4bf,stroke:#fff,color:#0b1020;
                        style A fill:#ffffff0d,stroke:#2dd4bf,color:#fff;
                        style C fill:#ffffff0d,stroke:#fb923c,color:#fff;
                        style D fill:#ffffff0d,stroke:#a3e635,color:#fff;
                </div>
                <p class="caption">Cada ciclo es una oportunidad para aprender, adaptar y entregar algo mejor.</p>
            </div>
        </article>
    `,
    "reflexion": `
        <article class="guide-section">
            <h2>3. Formulación de las Actividades de Aprendizaje</h2>
            <h3>3.1. Actividades de Reflexión Inicial</h3>
            
            <div class="hero-intro glass-panel" style="border-left: 4px solid var(--accent);">
                <p class="lead">Antes de aprender <em>cómo</em> hacer Scrum, debemos entender <em>por qué</em> lo necesitamos. Reflexiona sobre estas situaciones críticas:</p>
            </div>

            <div class="reflection-deep-dive">
                <!-- SECCIÓN 1: TELÉFONO ROTO -->
                <div class="theory-card full-width" style="margin-top: 2rem;">
                    <div class="card-header-visual">
                        <img src="assets/broken_telephone_scrum.png" alt="Efecto Teléfono Roto">
                    </div>
                    <div class="card-content" style="padding: 1.5rem;">
                        <h3 style="color: var(--warning);">1. El "Efecto Teléfono Roto"</h3>
                        <p><strong>El Problema:</strong> En proyectos tradicionales, la información viaja por etapas (Ventas → Gerente → Analista → Desarrollador). En cada paso, el mensaje original se distorsiona.</p>
                        
                        <div class="analogy-box glass-panel" style="background: rgba(255,255,255,0.05); margin: 1rem 0;">
                            <strong>💡 Analogía: La Cena a Ciegas</strong>
                            <p>Imagina organizar una boda. Le dices al planificador "quiero comida elegante". Él le dice al chef "haz algo sofisticado". El chef cocina caracoles. El día de la boda, descubres que tus invitados son alérgicos. Si hubieras hablado directamente con el chef, habrían servido pollo.</p>
                        </div>
                        
                        <p><strong>Reflexión:</strong> ¿Alguna vez construiste algo exactamente como decía el documento, pero el cliente te dijo "esto no es lo que quería"?</p>
                    </div>
                </div>

                <!-- SECCIÓN 2: ENTREGA MONOLÍTICA -->
                <div class="theory-card full-width" style="margin-top: 2rem;">
                    <div class="card-header-visual">
                        <img src="assets/cannon_vs_missile_agile.png" alt="Riesgo Cascada vs Agile">
                    </div>
                    <div class="card-content" style="padding: 1.5rem;">
                        <h3 style="color: var(--danger);">2. La "Entrega Monolítica" (Big Bang)</h3>
                        <p><strong>El Problema:</strong> Planificar todo al inicio y entregar todo al final (después de 6 meses). El riesgo se acumula hasta el último día.</p>
                        
                        <div class="analogy-box glass-panel" style="background: rgba(255,255,255,0.05); margin: 1rem 0;">
                            <strong>💡 Analogía: El Cañón vs. El Misil Guiado</strong>
                            <ul style="list-style: none; padding-left: 0;">
                                <li>💣 <strong>Cascada (Cañón):</strong> Disparas calculando todo al inicio. Si el viento cambia a mitad de camino, fallas.</li>
                                <li>🚀 <strong>Scrum (Misil Guiado):</strong> Ajustas la trayectoria constantemente. Si el objetivo se mueve, tú te mueves con él.</li>
                            </ul>
                        </div>

                        <p><strong>Reflexión:</strong> ¿Qué pasa si descubres un error grave en la arquitectura el día antes del lanzamiento?</p>
                    </div>
                </div>
            </div>

            <div class="trivia-box glass-panel" style="margin-top: 2rem; border-left: 4px solid var(--primary); background: rgba(99, 102, 241, 0.1);">
                <h4>🧐 ¿Sabías qué?</h4>
                <p>El término <strong>"Scrum"</strong> proviene del Rugby, donde el equipo se une en una formación cerrada para recuperar el balón. Jeff Sutherland y Ken Schwaber eligieron este nombre para enfatizar que el desarrollo de software es un <strong>deporte de equipo</strong>, no una carrera de relevos.</p>
            </div>

            <!-- SECCIÓN MULTIMEDIA -->
            <div class="video-section glass-panel" style="margin-top: 2rem;">
                <h3>📺 Aprende de los Expertos</h3>
                <p>Selección curada para entender la mentalidad Ágil.</p>
                
                <div class="video-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-top: 1rem;">
                    <div class="video-card">
                        <iframe width="100%" height="200" src="https://www.youtube.com/embed/9RnvI7sF9NI" title="Scrum en 10 minutos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px;"></iframe>
                        <p style="margin-top: 0.5rem; font-size: 0.9em;"><strong>Scrum en 10 minutos:</strong> Una explicación visual y rápida de las diferencias clave.</p>
                    </div>
                    <div class="video-card">
                        <iframe width="100%" height="200" src="https://www.youtube.com/embed/4GK1NDTWbkY" title="Spotify Engineering Culture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 8px;"></iframe>
                        <p style="margin-top: 0.5rem; font-size: 0.9em;"><strong>Cultura Spotify (Parte 1):</strong> (Activa subtítulos) Cómo la autonomía vence al control.</p>
                    </div>
                </div>
            </div>

            <!-- ACTIVIDAD FINAL -->
            <div class="action-box glass-panel" style="margin-top: 2rem; border: 1px solid var(--accent); background: rgba(16, 185, 129, 0.1);">
                <h3 style="color: var(--accent);">📝 Tu Misión en el Portafolio</h3>
                <p>Basado en los videos y las analogías, responde en tu bitácora:</p>
                <blockquote style="border-left: 3px solid var(--text-muted); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
                    "¿Cómo el dividir un proyecto en ciclos cortos (Sprints) reduce el riesgo de que el cliente reciba algo que no pidió?"
                </blockquote>
                <p><strong>Tip:</strong> Usa la analogía del "Misil Guiado" en tu respuesta.</p>
            </div>
        </article>
    `,
    "contextualizacion": `
        <article class="guide-section">
            <h2>3.2. Actividades de Contextualización (Teoría)</h2>
            <p>Scrum no es una lista de ceremonias: es una forma de <strong>organizar trabajo complejo</strong> con ciclos cortos, feedback frecuente y foco en entregar valor. En esta sección usarás un caso maestro para conectar la teoría con decisiones reales.</p>

            <div class="hero-intro glass-panel" style="margin-top: 1.5rem; border-left: 4px solid var(--accent);">
                <p class="lead"><strong>🎯 Objetivos de aprendizaje (10–15 min)</strong></p>
                <ul style="margin-top: 0.75rem;">
                    <li>Identificar <strong>Roles</strong>, <strong>Eventos</strong> y <strong>Artefactos</strong> y cómo se relacionan.</li>
                    <li>Traducir una idea del mundo real en <strong>Product Backlog</strong> con historias y criterios.</li>
                    <li>Diferenciar <strong>Product Goal</strong>, <strong>Sprint Goal</strong> y <strong>Definition of Done</strong> con ejemplos.</li>
                    <li>Usar recursos (videos, juegos y simulador) para fijar conceptos con práctica.</li>
                </ul>
            </div>

            <div class="theory-card full-width" style="margin-top: 2rem;">
                <div class="card-header-visual">
                    <img src="assets/eco-bot-context.svg" alt="Mascota Eco-Bot" style="width: 100%; border-radius: 8px; max-height: 400px; object-fit: contain;">
                </div>
                <div class="card-content" style="padding: 1.5rem;">
                    <h3 style="color: var(--accent);">🤖 El Caso Maestro: Eco-Bot</h3>
                    <p><strong>Reto:</strong> construir un robot reciclador inteligente para el centro SENA que ayude a separar residuos y reporte resultados.</p>
                    <div class="analogy-box glass-panel" style="background: rgba(255,255,255,0.03); margin: 1rem 0;">
                        <strong>🧩 ¿Por qué este caso sirve para Scrum?</strong>
                        <ul style="list-style: none; padding-left: 0; margin-top: 0.75rem;">
                            <li>⚙️ <strong>Complejidad:</strong> hardware, software, sensores, validación en campo.</li>
                            <li>🎯 <strong>Incertidumbre:</strong> precisión del clasificador, robustez, fallos inesperados.</li>
                            <li>👥 <strong>Interesados:</strong> instructores, aprendices, mantenimiento, dirección.</li>
                            <li>🔁 <strong>Feedback:</strong> pruebas por Sprint para ajustar lo que sí funciona.</li>
                        </ul>
                    </div>

                    <div class="steam-box" style="margin-top: 1rem; border-left: 4px solid var(--primary);">
                        <strong>Ejemplo rápido de historia:</strong>
                        <p style="margin-top: 0.5rem;">Como <strong>coordinación</strong>, quiero ver un <strong>reporte semanal</strong> de kilos reciclados por tipo de material para medir el impacto del Eco‑Bot.</p>
                        <p style="margin-top: 0.5rem; color: var(--text-muted);"><strong>Criterios:</strong> incluye fecha, tipo de material, total por semana; exportable; datos visibles en pantalla.</p>
                    </div>
                </div>
            </div>

            <div class="theory-nav-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                <div class="flip-card" onclick="app.toggleFlip(this)">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <span class="icon">👥</span>
                            <h4>Los Roles</h4>
                            <small>¿Quién hace qué?</small>
                        </div>
                        <div class="flip-card-back" onclick="event.stopPropagation(); app.loadSubSection('teoria-roles')">
                            <p>Product Owner, Scrum Master y Developers en Eco-Bot.</p>
                            <button class="nav-item active" style="margin-top: 1rem;" onclick="event.stopPropagation(); app.loadSubSection('teoria-roles')">Ver Detalle</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card" onclick="app.toggleFlip(this)">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <span class="icon">📅</span>
                            <h4>Los Eventos</h4>
                            <small>¿Cómo nos organizamos?</small>
                        </div>
                        <div class="flip-card-back" onclick="event.stopPropagation(); app.loadSubSection('teoria-eventos')">
                            <p>De la planeación a la mejora continua.</p>
                            <button class="nav-item active" style="margin-top: 1rem;" onclick="event.stopPropagation(); app.loadSubSection('teoria-eventos')">Ver Detalle</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card" onclick="app.toggleFlip(this)">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <span class="icon">📜</span>
                            <h4>Los Artefactos</h4>
                            <small>¿Qué entregamos?</small>
                        </div>
                        <div class="flip-card-back" onclick="event.stopPropagation(); app.loadSubSection('teoria-artefactos')">
                            <p>Backlog e Incrementos tangibles.</p>
                            <button class="nav-item active" style="margin-top: 1rem;" onclick="event.stopPropagation(); app.loadSubSection('teoria-artefactos')">Ver Detalle</button>
                        </div>
                    </div>
                </div>

                <div class="flip-card" onclick="app.toggleFlip(this)">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <span class="icon">📂</span>
                            <h4>Plantillas</h4>
                            <small>Artefactos listos</small>
                        </div>
                        <div class="flip-card-back" onclick="event.stopPropagation(); app.loadSubSection('teoria-plantillas')">
                            <p>Copia y usa estas plantillas para tu proyecto.</p>
                            <button class="nav-item active" style="margin-top: 1rem;" onclick="event.stopPropagation(); app.loadSubSection('teoria-plantillas')">Ver Detalle</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mermaid-container glass-panel" style="margin-top: 2rem;">
                <div class="mermaid">
                    flowchart LR
                        A[Product Backlog] --> B[Sprint Planning]
                        B --> C[Sprint Backlog]
                        C --> D[Daily Scrum]
                        D --> E[Incremento]
                        E --> F[Sprint Review]
                        F --> G[Sprint Retrospective]
                        G --> B
                        style A fill:#0ea5e9,stroke:#fff,stroke-width:1px,color:#fff;
                        style C fill:#6366f1,stroke:#fff,stroke-width:1px,color:#fff;
                        style E fill:#22c55e,stroke:#fff,stroke-width:1px,color:#fff;
                </div>
                <p class="caption">Mapa del ciclo Scrum: inspección y adaptación en cada Sprint.</p>
            </div>

            <div class="media-grid" style="margin-top: 1.5rem;">
                <figure class="media-card">
                    <img src="assets/scrum-map.svg" alt="Mapa visual de Scrum: roles, eventos y artefactos">
                    <figcaption class="caption">Figura: Scrum resumido en roles (quién), eventos (cómo) y artefactos (qué).</figcaption>
                </figure>
                <figure class="media-card">
                    <img src="assets/sprint-flow.svg" alt="Flujo de un Sprint: planning, daily, review y retrospectiva">
                    <figcaption class="caption">Figura: Flujo de Sprint para organizar trabajo, feedback y mejora continua.</figcaption>
                </figure>
            </div>

            <div class="diagram-section" style="margin-top: 2rem;">
                <h4>Checklist rápido de un Sprint sólido</h4>
                <div class="theory-nav-grid" style="margin-top: 1.5rem;">
                    <div class="theory-card">
                        <span class="icon">🎯</span>
                        <h4>Objetivo claro</h4>
                        <p>Una meta simple que alinee al equipo en una sola dirección.</p>
                        <button class="toggle-details-btn" onclick="app.toggleCardDetails(this)">Ver más <span style="font-size: 1.2em; vertical-align: middle;">+</span></button>
                        <div class="card-details">
                            <ul>
                                <li><strong>Ejemplo:</strong> "Lograr que Eco‑Bot clasifique plástico y vidrio con un reporte diario."</li>
                                <li><strong>Beneficio:</strong> Evita que el equipo se disperse en tareas irrelevantes.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="theory-card">
                        <span class="icon">📋</span>
                        <h4>Backlog refinado</h4>
                        <p>Historias entendidas, estimadas y listas para ejecutar.</p>
                        <button class="toggle-details-btn" onclick="app.toggleCardDetails(this)">Ver más <span style="font-size: 1.2em; vertical-align: middle;">+</span></button>
                        <div class="card-details">
                            <ul>
                                <li><strong>INVEST:</strong> Historias independientes, negociables y valorables.</li>
                                <li><strong>Criterios:</strong> Cada historia tiene condiciones verificables (prueba de campo incluida).</li>
                            </ul>
                        </div>
                    </div>
                    <div class="theory-card">
                        <span class="icon">✅</span>
                        <h4>DoD (Definición de Terminado) visible</h4>
                        <p>Criterios compartidos para entregar calidad sin dudas.</p>
                        <button class="toggle-details-btn" onclick="app.toggleCardDetails(this)">Ver más <span style="font-size: 1.2em; vertical-align: middle;">+</span></button>
                        <div class="card-details">
                            <ul>
                                <li><strong>Checklist:</strong> pruebas pasadas, medición en campo, guía de operación actualizada.</li>
                                <li><strong>Acuerdo:</strong> Todo el equipo debe respetarlo sin excepción.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="diagram-section" style="margin-top: 2rem;">
                <h4>Atajos de teoría esencial</h4>
                <p class="caption">Explora temas clave con un clic.</p>
                <div class="theory-nav-grid" style="margin-top: 1.5rem;">
                    <div class="theory-card" onclick="app.loadSubSection('teoria-pilares')">
                        <span class="icon">🔍</span>
                        <h4>Pilares</h4>
                        <p>Transparencia, inspección y adaptación en acción. (Empirismo)</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-estimacion')">
                        <span class="icon">📏</span>
                        <h4>Estimación</h4>
                        <p>Series y criterios para puntuar historias.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-planificacion')">
                        <span class="icon">🧮</span>
                        <h4>Planificación</h4>
                        <p>Capacidad, velocidad y foco del Sprint.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-historias')">
                        <span class="icon">📝</span>
                        <h4>Historias</h4>
                        <p>INVEST y Criterios de Aceptación.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-deuda')">
                        <span class="icon">🧮</span>
                        <h4>Deuda y Spikes</h4>
                        <p>Calidad técnica y retos de investigación.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-valores')">
                        <span class="icon">💎</span>
                        <h4>Valores</h4>
                        <p>Compromiso, foco, apertura, respeto y coraje.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-guia2020')">
                        <span class="icon">✨</span>
                        <h4>Guía 2020</h4>
                        <p>Qué cambió y por qué es más simple y potente.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadSubSection('teoria-antipatrones')">
                        <span class="icon">⚠️</span>
                        <h4>Antipatrones</h4>
                        <p>Errores comunes que debes evitar.</p>
                    </div>
                </div>
            </div>

            <div class="video-section glass-panel" style="margin-top: 2rem;">
                <h3>📺 Videos recomendados</h3>
                <p style="color: var(--text-muted);">Úsalos como refuerzo: mira un video, vuelve y aplica el concepto en las tarjetas.</p>
                <div class="video-grid" style="margin-top: 1rem;">
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/9RnvI7sF9NI" title="Scrum en 10 minutos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Scrum en 10 minutos:</strong> visión general para ubicar el marco completo.</p>
                    </div>
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/nd52fxodJsk" title="Relación Scrum Master y Product Owner" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Roles en acción:</strong> cómo se coordinan PO y SM sin “jefaturas”.</p>
                    </div>
                </div>
            </div>

            <div class="diagram-section" style="margin-top: 2rem;">
                <h4>Herramientas para practicar (1 clic)</h4>
                <p class="caption">Refuerza la teoría con práctica guiada en el laboratorio.</p>
                <div class="theory-nav-grid" style="margin-top: 1.5rem;">
                    <div class="theory-card" onclick="app.loadGame('scrum-quiz')">
                        <span class="icon">💡</span>
                        <h4>Scrum Quiz</h4>
                        <p>Preguntas rápidas para fijar conceptos clave.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadGame('role-matching')">
                        <span class="icon">🧩</span>
                        <h4>Role Matching</h4>
                        <p>Relaciona responsabilidades con el rol correcto.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadEstimator(this)">
                        <span class="icon">🧮</span>
                        <h4>Estimador Pro</h4>
                        <p>Practica estimación relativa con criterios.</p>
                    </div>
                    <div class="theory-card" onclick="app.startSimulator()">
                        <span class="icon">🏃</span>
                        <h4>Simulador Sprint</h4>
                        <p>Toma decisiones como Scrum Master en un Sprint.</p>
                    </div>
                    <div class="theory-card" onclick="document.querySelector('.nav-item[data-target=\\'glosario\\']').click()">
                        <span class="icon">📚</span>
                        <h4>Glosario</h4>
                        <p>Revisa definiciones y términos esenciales.</p>
                    </div>
                </div>
            </div>

            <div id="dynamic-theory-content" class="glass-panel" style="min-height: 200px;">
                <div style="text-align: center; color: var(--text-muted); padding: 2rem;">
                    <p>✨ Usa las tarjetas de arriba para profundizar en el conocimiento aplicado a <strong>Eco‑Bot</strong>.</p>
                    <p style="margin-top: 0.75rem;">Tip: abre un “Ver Detalle”, mira un video y luego prueba el Quiz.</p>
                </div>
            </div>
        </article>
    `,
    "apropiacion": `
        <article class="guide-section">
             <div class="header-with-icon">
                <span class="section-icon">🎯</span>
                <h2>3.3. Actividades de Apropiación (Caso de Estudio)</h2>
             </div>
             
             <p>Vamos a dar vida al proyecto <strong>"Smart City"</strong>. Como Scrum Master, debes entender qué construir, por qué aporta valor y cómo se traduce en una propuesta técnica viable.</p>

             <div class="theory-card full-width" style="margin-top: 1.5rem;">
                <div class="card-header-visual">
                    <img src="assets/smart_city_scrum_blueprint.png" alt="Blueprint Conceptual Smart City" style="width: 100%; border-radius: 8px; max-height: 450px; object-fit: cover;">
                </div>
                <div class="card-content" style="padding: 1.5rem;">
                    <h3 style="color: var(--accent);">🌆 Contexto del caso: Smart City</h3>
                    <p><strong>Escenario:</strong> una ciudad quiere implementar conectividad, movilidad y sostenibilidad con tecnología (IoT, 5G, analítica e IA).</p>
                    
                    <div class="blueprint-explanation" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                        <div class="glass-panel" style="background: rgba(45, 212, 191, 0.05); border-left: 3px solid var(--primary);">
                            <strong>🌐 Conectividad (IoT/5G)</strong>
                            <p style="font-size: 0.85rem; margin: 0.5rem 0 0;">Nervio central: antenas 5G y sensores LoRaWAN para capturar datos en tiempo real de toda la infraestructura urbana.</p>
                        </div>
                        <div class="glass-panel" style="background: rgba(251, 146, 60, 0.05); border-left: 3px solid var(--secondary);">
                            <strong>🚗 Movilidad (IA/Analítica)</strong>
                            <p style="font-size: 0.85rem; margin: 0.5rem 0 0;">Cerebro urbano: algoritmos que optimizan semáforos, coordinan buses autónomos y reducen tiempos de viaje.</p>
                        </div>
                        <div class="glass-panel" style="background: rgba(163, 230, 53, 0.05); border-left: 3px solid var(--accent);">
                            <strong>🍃 Sostenibilidad (Eco)</strong>
                            <p style="font-size: 0.85rem; margin: 0.5rem 0 0;">Corazón verde: redes eléctricas solares inteligentes y sistemas de riego automatizado que minimizan el desperdicio.</p>
                        </div>
                    </div>

                    <div class="mermaid-container glass-panel" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); margin-top: 1rem;">
                        <div class="mermaid">
                            flowchart TD
                                A["Conectividad 5G/IoT"] -->|"Datos en tiempo real"| B["IA y Analítica"]
                                B -->|"Optimización"| C["Movilidad Inteligente"]
                                B -->|"Eficiencia"| D["Sostenibilidad Ambiental"]
                                C -->|"Calidad de Vida"| E["Ciudadano del Futuro"]
                                D -->|"Calidad de Vida"| E
                                style A fill:#2dd4bf,stroke:#fff,color:#0b1020;
                                style B fill:#fb923c,stroke:#fff,color:#0b1020;
                                style C fill:#a3e635,stroke:#fff,color:#0b1020;
                                style D fill:#2dd4bf,stroke:#fff,color:#0b1020;
                                style E fill:#fff,stroke:#fff,color:#0b1020;
                        </div>
                        <p class="caption">Integración tecnológica para una ciudad más eficiente.</p>
                    </div>

                    <div class="analogy-box">
                        <strong>📌 Tu rol aquí</strong>
                        <ul>
                            <li>🧭 Facilitar claridad: convertir ideas en <strong>Historias de Usuario</strong> entendibles y priorizables.</li>
                            <li>📏 Asegurar calidad: acordar <strong>criterios de aceptación</strong> y una DoD realista.</li>
                            <li>🧩 Reducir riesgo: identificar incertidumbre y proponer <strong>spikes</strong> cuando haga falta.</li>
                        </ul>
                    </div>

                    <div class="hero-intro glass-panel" style="border-left: 4px solid var(--primary);">
                        <h4>🎯 Objetivos de aprendizaje (10–15 min)</h4>
                        <ul>
                            <li>Interpretar un Product Backlog y entender la relación <strong>valor → prioridad</strong>.</li>
                            <li>Redactar una historia de usuario con <strong>INVEST</strong> y criterios claros.</li>
                            <li>Aplicar DoR/DoD para detectar historias “listas” vs “a refinar”.</li>
                            <li>Relacionar cada historia con una <strong>solución técnica</strong> (tareas + verificación).</li>
                        </ul>
                    </div>

                    <div class="theory-nav-grid" style="margin-top: 1.25rem;">
                        <div class="theory-card">
                            <span class="icon">🏛️</span>
                            <h4>Stakeholders</h4>
                            <p>Alcaldía, ciudadanía, operadores de red, movilidad, ambiente.</p>
                        </div>
                        <div class="theory-card">
                            <span class="icon">🔒</span>
                            <h4>Restricciones</h4>
                            <p>Seguridad, privacidad, interoperabilidad, costos y tiempos.</p>
                        </div>
                        <div class="theory-card">
                            <span class="icon">📈</span>
                            <h4>Métricas</h4>
                            <p>Latencia, cobertura, ahorro de agua/energía, incidentes reducidos.</p>
                        </div>
                    </div>

                     <div class="glass-panel" style="margin-top: 1.5rem;">
                        <h4>📊 KPIs objetivo (ejemplo para validar valor)</h4>
                        <p class="caption">No son promesas: son “hipótesis” que te ayudan a escribir criterios y a medir si el incremento sirve.</p>
                        <div class="kpi-grid">
                            <div class="kpi-card">
                                <div class="kpi-top">
                                    <strong>Cobertura 5G</strong>
                                    <span class="badge">≥ 95%</span>
                                </div>
                                <div class="kpi-bar" style="--value: 95;"><span></span></div>
                                <small class="kpi-note">Métrica: mapa de calor + barrido de medición.</small>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-top">
                                    <strong>Latencia promedio</strong>
                                    <span class="badge">≤ 10ms</span>
                                </div>
                                <div class="kpi-bar danger" style="--value: 80;"><span></span></div>
                                <small class="kpi-note">Métrica: pruebas en horario pico.</small>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-top">
                                    <strong>Ahorro de agua</strong>
                                    <span class="badge">15–25%</span>
                                </div>
                                <div class="kpi-bar accent" style="--value: 25;"><span></span></div>
                                <small class="kpi-note">Métrica: comparación antes/después.</small>
                            </div>
                            <div class="kpi-card">
                                <div class="kpi-top">
                                    <strong>Tiempo de respuesta</strong>
                                    <span class="badge">≤ 2 min</span>
                                </div>
                                <div class="kpi-bar" style="--value: 70;"><span></span></div>
                                <small class="kpi-note">Métrica: incidentes detectados → acción.</small>
                            </div>
                        </div>
                    </div>

                    <div class="theory-nav-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin-top: 1.25rem;">
                        <div class="theory-card full-width" style="text-align: left;">
                            <div class="card-header-visual">
                                <img src="assets/smart-city-story-map.svg" alt="Story map simplificado de Smart City" style="width: 100%; border-radius: 8px; max-height: 220px; object-fit: cover;">
                            </div>
                            <div style="padding: 0.25rem 0.75rem 0.75rem;">
                                <strong>Mapa de historias (vista rápida)</strong>
                                <p style="margin-top: 0.35rem; color: var(--text-muted);">Ayuda a ver el “viaje” del valor y dónde partir épicas.</p>
                            </div>
                        </div>
                        <div class="theory-card full-width" style="text-align: left;">
                            <div class="card-header-visual">
                                <img src="assets/smart-city-kpis.svg" alt="KPIs y verificación" style="width: 100%; border-radius: 8px; max-height: 220px; object-fit: cover;">
                            </div>
                            <div style="padding: 0.25rem 0.75rem 0.75rem;">
                                <strong>KPIs → pruebas → evidencia</strong>
                                <p style="margin-top: 0.35rem; color: var(--text-muted);">Convierte métricas en criterios verificables y entregables.</p>
                            </div>
                        </div>
                    </div>

                    <div class="action-box glass-panel" style="margin-top: 1.25rem; border: 1px solid var(--primary); background: rgba(45, 212, 191, 0.08);">
                        <h4 style="color: var(--primary);">✅ Actividad guiada (hazlo en orden)</h4>
                        <ol style="margin-top: 0.75rem;">
                            <li>Abre cada historia del backlog y entiende <strong>quién</strong> se beneficia y <strong>para qué</strong>.</li>
                            <li>Reescribe la historia (si aplica) con la plantilla “Como/Quiero/Para”.</li>
                            <li>Define criterios de aceptación (idealmente DADO/CUANDO/ENTONCES).</li>
                            <li>Verifica si está “Ready” y si la DoD propuesta es suficiente.</li>
                            <li>Resume la solución técnica: 3–6 tareas + cómo comprobar que funciona.</li>
                        </ol>
                    </div>

                    <div class="glass-panel" style="margin-top: 1.25rem;">
                        <h4>🧰 Plantillas rápidas (copia y pega)</h4>
                        <div style="display: grid; gap: 0.75rem; margin-top: 0.75rem;">
                            <div class="glass-panel" style="background: rgba(0,0,0,0.15);">
                                <strong>Historia de usuario</strong>
                                <span class="code-snippet">Como &lt;rol/persona&gt;, quiero &lt;necesidad&gt; para &lt;beneficio&gt;.</span>
                            </div>
                            <div class="glass-panel" style="background: rgba(0,0,0,0.15);">
                                <strong>Criterio de aceptación (GWT)</strong>
                                <span class="code-snippet">DADO &lt;contexto&gt;\nCUANDO &lt;acción&gt;\nENTONCES &lt;resultado verificable&gt;</span>
                            </div>
                            <div class="glass-panel" style="background: rgba(0,0,0,0.15);">
                                <strong>Checklist INVEST (rápido)</strong>
                                <span class="code-snippet">¿Independiente? ¿Negociable? ¿Valiosa? ¿Estimable? ¿Pequeña? ¿Testeable?</span>
                            </div>
                        </div>
                    </div>

                    <div class="glass-panel" style="margin-top: 1.25rem;">
                        <h4>🧪 Ejemplo trabajado (HU-02: Red 5G)</h4>
                        <p style="margin-top: 0.5rem; color: var(--text-muted);">Ejemplo de mejora para hacer la historia más testeable y menos ambigua.</p>
                        <div class="glass-panel" style="background: rgba(255,255,255,0.03); margin-top: 0.75rem;">
                            <strong>Historia (mejorada)</strong>
                            <p style="margin-top: 0.5rem;">Como <strong>ciudadano</strong>, quiero <strong>conectividad 5G estable</strong> en puntos críticos (hospitales, transporte, trámites) para <strong>usar servicios digitales sin interrupciones</strong>.</p>
                        </div>
                        <div class="glass-panel" style="background: rgba(255,255,255,0.03); margin-top: 0.75rem;">
                            <strong>Criterios (GWT)</strong>
                            <ul style="margin-top: 0.5rem;">
                                <li><strong>DADO</strong> un punto crítico marcado en el mapa de cobertura, <strong>CUANDO</strong> un usuario realiza una prueba de conexión, <strong>ENTONCES</strong> la latencia promedio es &lt; 10ms en horario laboral.</li>
                                <li><strong>DADO</strong> un área urbana completa, <strong>CUANDO</strong> se ejecuta el barrido de medición, <strong>ENTONCES</strong> existe cobertura ≥ 95% según reporte.</li>
                                <li><strong>DADO</strong> una conexión activa, <strong>CUANDO</strong> el usuario accede a un servicio de la ciudad, <strong>ENTONCES</strong> los datos viajan cifrados y se registra auditoría básica.</li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
             
             <div class="backlog-container">
                <div class="header-with-badge">
                    <span class="badge premium-badge">Agile Dashboard</span>
                    <h3>💼 Centro de Gestión: Product Backlog (Smart City)</h3>
                </div>
                <p class="subtitle">Como <b>Scrum Master</b>, tu labor es asegurar que el equipo tenga claridad absoluta sobre el trabajo pendiente. Explora el Dashboard técnico para analizar la viabilidad de la ciudad.</p>
                
                <div id="guide-backlog-grid">
                    <!-- El Dashboard se inyectará dinámicamente desde app.js -->
                </div>
             </div>

             <div class="video-section glass-panel" style="margin-top: 2rem;">
                <h3>📺 Videos recomendados (aplicación directa)</h3>
                <p style="color: var(--text-muted);">Sugerencia: mira un video (3–8 min), vuelve al backlog y mejora 1 historia con criterios y DoD.</p>
                <div class="video-grid" style="margin-top: 1rem;">
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/Ms6ZsOGeQH0" title="Refinamiento del Backlog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Refinamiento:</strong> cómo preparar historias para que sean trabajables.</p>
                    </div>
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/Z6cB4iJUDr8" title="Refinamiento del Product Backlog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Backlog:</strong> orden, detalle y qué significa “emergente”.</p>
                    </div>
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/O-D22kLYi2M" title="Estimación con Story Points" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Story Points:</strong> estimación relativa sin caer en horas.</p>
                    </div>
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/UZkm7_7nPac" title="Cómo estimar con Story Points" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Planning Poker:</strong> votación y conversaciones para alinear supuestos.</p>
                    </div>
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/t4vO65GRzR8" title="Definition of Ready" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Definition of Ready:</strong> qué mirar antes de comprometer una historia.</p>
                    </div>
                    <div class="video-card">
                        <div class="responsive-embed">
                            <iframe src="https://www.youtube.com/embed/Utw8Ik8Y1BU" title="Definition of Done" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <p style="margin-top: 0.75rem; font-size: 0.9em;"><strong>Definition of Done:</strong> calidad mínima para decir “terminado”.</p>
                    </div>
                </div>
             </div>

             <div class="mermaid-container glass-panel" style="margin-top: 2rem;">
                <div class="mermaid">
                    flowchart LR
                        A["Idea / necesidad"] --> B["Historia de usuario"]
                        B --> C["Criterios de aceptación"]
                        C --> D["Tareas técnicas"]
                        D --> E["DoD / calidad mínima"]
                        E --> F["Incremento demostrable"]
                        F --> G["Métricas de impacto"]
                        style A fill:#0b1222,stroke:#2dd4bf,stroke-width:2px;
                        style B fill:#0b1222,stroke:#a3e635,stroke-width:2px;
                        style C fill:#0b1222,stroke:#fbbf24,stroke-width:2px;
                        style D fill:#0b1222,stroke:#fb923c,stroke-width:2px;
                        style E fill:#0b1222,stroke:#2dd4bf,stroke-width:2px;
                        style F fill:#0b1222,stroke:#a3e635,stroke-width:2px;
                        style G fill:#0b1222,stroke:#fbbf24,stroke-width:2px;
                </div>
                <p class="caption">Figura 2. De “idea” a “incremento”: cómo se hace verificable el valor.</p>
             </div>

             <div class="mermaid-container glass-panel" style="margin-top: 1.5rem;">
                <div class="mermaid">
                    flowchart TD
                        HU01[HU-01 Infraestructura] --> HU02[HU-02 Red 5G]
                        HU02 --> HU03[HU-03 Centro IA]
                        HU01 --> HU04[HU-04 Parques Eco]
                        HU03 --> HU05[HU-05 Buses Autónomos]
                        HU06[HU-06 Red Solar] --> HU04
                        HU06 --> HU03
                        style HU01 fill:#0b1222,stroke:#f87171,stroke-width:2px;
                        style HU02 fill:#0b1222,stroke:#fbbf24,stroke-width:2px;
                        style HU03 fill:#0b1222,stroke:#a3e635,stroke-width:2px;
                        style HU04 fill:#0b1222,stroke:#2dd4bf,stroke-width:2px;
                        style HU05 fill:#0b1222,stroke:#fb923c,stroke-width:2px;
                        style HU06 fill:#0b1222,stroke:#94a3b8,stroke-width:2px;
                </div>
                <p class="caption">Figura 3. Dependencias de alto nivel (ejemplo): útil para identificar riesgos y orden.</p>
             </div>

             <div class="diagram-section glass-panel" style="margin-top: 2rem;">
                <h4>🧪 Practica en 1 clic (Laboratorio)</h4>
                <p class="caption">Ruta sugerida: Refinamiento → Estimación → DoD. Luego vuelve al backlog y mejora una historia.</p>
                <div class="theory-nav-grid" style="margin-top: 1.25rem;">
                    <div class="theory-card" onclick="app.loadGame('refinement-ready')">
                        <span class="icon">🧠</span>
                        <h4>Refinement Ready</h4>
                        <p>Detecta si una historia está lista o falta claridad.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadGame('estimation-game')">
                        <span class="icon">🎲</span>
                        <h4>Estimación Fibonacci</h4>
                        <p>Practica Story Points con criterio y consenso.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadGame('dod-check')">
                        <span class="icon">✅</span>
                        <h4>DoD Checklist</h4>
                        <p>Decide qué significa “Done” con calidad mínima.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadGame('planning-challenge')">
                        <span class="icon">🎯</span>
                        <h4>Reto de Planificación</h4>
                        <p>Selecciona trabajo sin sobrecargar el Sprint.</p>
                    </div>
                    <div class="theory-card" onclick="app.loadEstimator(this)">
                        <span class="icon">🧮</span>
                        <h4>Estimador Pro</h4>
                        <p>Comparación rápida de historias y complejidad.</p>
                    </div>
                </div>
             </div>

             <div class="diagram-section glass-panel" style="margin-top: 2.5rem;">
                <h4>Definition of Ready (Definición de Preparado) sugerida</h4>
                <div class="theory-nav-grid" style="margin-top: 1.5rem;">
                    <div class="theory-card">
                        <span class="icon">🧠</span>
                        <h4>Entendible</h4>
                        <p>La historia tiene contexto y objetivo claros.</p>
                    </div>
                    <div class="theory-card">
                        <span class="icon">📏</span>
                        <h4>Estimable</h4>
                        <p>El equipo puede asignar Story Points con confianza.</p>
                    </div>
                    <div class="theory-card">
                        <span class="icon">🧩</span>
                        <h4>Pequeña</h4>
                        <p>Se puede completar dentro del Sprint.</p>
                    </div>
                </div>
             </div>

             <div class="mermaid-container glass-panel">
                <div class="mermaid">
                    flowchart LR
                        U["Centro de Control"] --- S1["Red 5G"]
                        U --- S2["Sensores IoT"]
                        U --- M1["Semáforos Inteligentes"]
                        U --- M2["Buses Autónomos"]
                        style U fill:#6366f1,stroke:#fff,stroke-width:2px;
                </div>
                <p class="caption">Figura 4. Arquitectura de la Infraestructura Smart City.</p>
             </div>
        </article>
    `,
    "transferencia": `
        <article class="guide-section">
            <h2>3.4. Actividades de Transferencia (Simulador)</h2>
            <p><strong>¡Es hora de la acción!</strong> Asume el rol de Scrum Master.</p>
            <p>Tu misión es guiar al equipo a través de un Sprint de 10 días virtuales. Deberás:</p>
            <ol>
                <li>Mover las tareas en el tablero Kanban.</li>
                <li>Resolver impedimentos inesperados.</li>
                <li>Mantener la moral del equipo alta.</li>
            </ol>
            <button class="cta-btn pulse" onclick="app.startSimulator()">INICIAR SIMULACIÓN</button>
        </article>
    `,
    "evaluacion": `
        <article class="guide-section">
            <h2>4. Actividades de Evaluación</h2>
            <p>Demuestra lo que has aprendido.</p>
            <table class="evaluation-table">
                <thead>
                    <tr>
                        <th>Evidencias de Aprendizaje</th>
                        <th>Criterios de Evaluación</th>
                        <th>Técnicas e Instrumentos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>De Conocimiento:</strong><br>Respuestas sobre roles y eventos.</td>
                        <td>Identifica correctamente los roles de Scrum.</td>
                        <td>Cuestionario Interactivo.</td>
                    </tr>
                    <tr>
                        <td><strong>De Desempeño:</strong><br>Gestión del tablero Kanban.</td>
                        <td>Ubica las historias en la columna correcta según su estado.</td>
                        <td>Lista de Chequeo (Observación en Simulador).</td>
                    </tr>
                    <tr>
                        <td><strong>De Producto:</strong><br>Incremento funcional simulado.</td>
                        <td>Entrega el Sprint con historias en "Done".</td>
                        <td>Valoración del Proyecto.</td>
                    </tr>
                </tbody>
            </table>
        </article>
    `,
    // Sub-contenidos de teoría para carga dinámica
    "teoria-roles": `
        <h3>El Scrum Team Unificado</h3>
        <p>En Scrum 2020, no hay jerarquías ni sub-equipos. Es una unidad cohesionada de profesionales enfocada en un Objetivo del Producto.</p>
        <div class="role-detail">
            <div class="example-box glass-panel">
                <h4>👑 Product Owner</h4>
                <p>Responsable de maximizar el valor del producto y de la gestión efectiva del Product Backlog (Lista de Producto).</p>
                <div class="steam-example">
                    <strong>Eco‑Bot:</strong> Define el <b>Product Goal</b> (Objetivo del Producto): "Reducir la mala separación de residuos en el centro SENA con un robot que clasifique y reporte resultados".
                </div>
            </div>
            
            <div class="example-box glass-panel">
                <h4>🛡️ Scrum Master</h4>
                <p>Responsable de establecer Scrum y de la efectividad del equipo. Líder que sirve al equipo y a la organización.</p>
                <div class="steam-example">
                    <strong>Eco‑Bot:</strong> Elimina bloqueos como acceso al área de pruebas, permisos de seguridad y disponibilidad de sensores para integrar el prototipo.
                </div>
            </div>
            
            <div class="example-box glass-panel">
                <h4>💻 Developers</h4>
                <p>Personas comprometidas a crear cualquier aspecto de un Incremento útil en cada Sprint. Son autogestionados.</p>
                <div class="steam-example">
                    <strong>Eco‑Bot:</strong> El equipo que decide <b>cómo</b> implementar el clasificador (sensores/visión), la lógica de separación y el reporte para cumplir el Sprint Goal.
                </div>
            </div>
        </div>
        <div class="pro-tip glass-panel">
            <strong>💡 Pro-Tip del Scrum Master:</strong> Un equipo ágil no espera órdenes. Si Eco‑Bot falla en pruebas por un cable suelto, no esperas al PO; te autogestionas, lo reportas y lo solucionas con el equipo.
        </div>
    `,
    "teoria-eventos": `
        <h3>Eventos: Ciclos de Inspección y Adaptación</h3>
        <div class="event-timeline">
            <div class="event-item">
                <div class="event-header"><strong>Sprint Planning:</strong></div>
                <p>Se inicia el Sprint definiendo por qué es valioso (Sprint Goal), qué se puede hacer y cómo se hará el trabajo.</p>
            </div>
            <div class="event-item">
                <div class="event-header"><strong>Daily Scrum:</strong></div>
                <p>Evento de 15 min para los Developers para inspeccionar el progreso hacia el <b>Sprint Goal</b> (Objetivo del Sprint) y adaptar el Sprint Backlog.</p>
            </div>
            <div class="event-item">
                <div class="event-header"><strong>Sprint Review (Revisión del Sprint):</strong></div>
                <p>Se inspecciona el resultado del Sprint y se determinan adaptaciones futuras. El equipo y los interesados revisan lo logrado.</p>
            </div>
            <div class="event-item">
                <div class="event-header"><strong>Sprint Retrospective (Retrospectiva del Sprint):</strong></div>
                <p>El propósito es planificar formas de aumentar la calidad y la efectividad del equipo para el próximo Sprint.</p>
            </div>
        </div>
        <div class="pro-tip glass-panel warning">
            <strong>🚀 Pro-Tip:</strong> No conviertas la Retrospectiva en una sesión de quejas. El objetivo es salir con al menos un <b>item de mejora concreto</b> para el próximo Sprint.
        </div>
    `,
    "teoria-artefactos": `
        <h3>Artefactos y sus Compromisos</h3>
        <p>Los artefactos representan trabajo o valor. Cada uno incluye un compromiso para reforzar el empirismo.</p>
        <div class="artefact-grid">
            <div class="artefact-card glass-panel">
                <h4>📜 Product Backlog (Lista de Producto)</h4>
                <p><small>Compromiso: <b>Product Goal</b> (Objetivo del Producto)</small></p>
                <div class="mini-preview">
                    <ul>
                        <li>Clasificación plástico/vidrio</li>
                        <li>Reporte semanal de reciclaje</li>
                    </ul>
                </div>
                <div class="card-details">
                    <p><strong>Product Goal (Objetivo del Producto):</strong> El estado futuro del producto que sirve como objetivo para que el Scrum Team lo planifique. Es un compromiso a largo plazo.</p>
                </div>
                <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                    <button class="toggle-details-btn small" onclick="app.toggleCardDetails(this)">¿Qué es? <span style="font-size: 1.2em; vertical-align: middle;">+</span></button>
                    <button class="cta-btn small" onclick="app.showArtifactExample('product-backlog')">Ver Detalle</button>
                </div>
            </div>
            <div class="artefact-card glass-panel">
                <h4>📋 Sprint Backlog (Lista de Pendientes del Sprint)</h4>
                <p><small>Compromiso: <b>Sprint Goal</b> (Objetivo del Sprint)</small></p>
                <div class="mini-preview">
                    <p>Meta: clasificación básica y reporte diario.</p>
                </div>
                <div class="card-details">
                    <p><strong>Sprint Goal:</strong> El único objetivo del Sprint. Proporciona flexibilidad sobre el trabajo necesario para lograrlo.</p>
                </div>
                <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                    <button class="toggle-details-btn small" onclick="app.toggleCardDetails(this)">¿Qué es? <span style="font-size: 1.2em; vertical-align: middle;">+</span></button>
                    <button class="cta-btn small" onclick="app.showArtifactExample('sprint-backlog')">Ver Detalle</button>
                </div>
            </div>
            <div class="artefact-card glass-panel">
                <h4>📦 Incremento</h4>
                <p><small>Compromiso: <b>Definition of Done</b> (Definición de Terminado)</small></p>
                <div class="mini-preview">
                    <div class="status-chip">Útil y Utilizable</div>
                </div>
                <div class="card-details">
                    <p><strong>Definition of Done (Definición de Terminado):</strong> Descripción formal del estado del Incremento cuando cumple con las medidas de calidad requeridas para el producto.</p>
                </div>
                <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                    <button class="toggle-details-btn small" onclick="app.toggleCardDetails(this)">¿Qué es? <span style="font-size: 1.2em; vertical-align: middle;">+</span></button>
                    <button class="cta-btn small" onclick="app.showArtifactExample('incremento')">Ver Detalle</button>
                </div>
            </div>
        </div>
    `,
    "teoria-pilares": `
        <h3>Los Pilares de Scrum</h3>
        <p>El empirismo se basa en tres pilares que sostienen todo el marco de trabajo:</p>
        <div class="role-detail">
            <h4>🔍 Transparencia</h4>
            <p>Los aspectos significativos del proceso deben ser visibles y comunes para todos los interesados. No hay lugar para "información oculta".</p>
            
            <h4>🕵️ Inspección</h4>
            <p>Los artefactos y el progreso deben inspeccionarse con frecuencia para detectar variaciones indeseadas sin que esto interfiera excesivamente en el trabajo.</p>
            
            <h4>🔧 Adaptación</h4>
            <p>Si un proceso o producto se desvía de los límites aceptables, debe ajustarse lo más pronto posible para minimizar desviaciones futuras.</p>
        </div>
    `,
    "teoria-antipatrones": `
        <h3>Anti-patrones (Lo que NO es Scrum)</h3>
        <div class="event-timeline">
            <div class="event-item" style="border-left-color: var(--danger);">
                <strong>Scrum-But:</strong> "Hacemos Scrum, PERO no hacemos dailies porque tomamos mucho tiempo".
            </div>
            <div class="event-item" style="border-left-color: var(--danger);">
                <strong>El Jefe de Proyecto SM:</strong> Un Scrum Master que actúa como jefe, asignando tareas y pidiendo reportes, rompiendo la autogestión.
            </div>
            <div class="event-item" style="border-left-color: var(--danger);">
                <strong>Waterfall-Sprint:</strong> Tratar el Sprint como un mini-cascada (Diseño -> Dev -> Test) en lugar de trabajar de forma colaborativa.
            </div>
        </div>
    `,
    "teoria-estimacion": `
        <h3>Estimación Relativa y Fibonacci</h3>
        <p>En Scrum, no estimamos en horas, sino en <strong>esfuerzo</strong>. Usamos la serie Fibonacci (1, 2, 3, 5, 8, 13, 21) para reflejar la incertidumbre.</p>
        <div class="role-detail">
            <div class="example-box glass-panel">
                <h4>🎯 ¿Por qué Fibonacci?</h4>
                <p>A mayor tamaño de la tarea, mayor es la incertidumbre. Es fácil ver la diferencia entre 1 y 2, pero difícil entre 15 y 16. Por eso saltamos de 13 a 21.</p>
            </div>
            <div class="example-box glass-panel">
                <h4>🧪 Factores de Estimación</h4>
                <ul>
                    <li><strong>Complejidad:</strong> Cuánta lógica requiere.</li>
                    <li><strong>Esfuerzo:</strong> Cuánto tiempo físico toma.</li>
                    <li><strong>Riesgo:</strong> Qué tan desconocido es el terreno.</li>
                </ul>
            </div>
        </div>
    `,
    "teoria-planificacion": `
        <h3>Velocidad y Capacidad</h3>
        <p>¿Cómo sabemos cuánto trabajo cabe en un Sprint?</p>
        <div class="artefact-grid">
            <div class="artefact-card glass-panel">
                <h4>🚀 Velocidad</h4>
                <p>Promedio de Story Points que el equipo completa por Sprint.</p>
            </div>
            <div class="artefact-card glass-panel">
                <h4>🔋 Capacidad</h4>
                <p>Disponibilidad real del equipo para el Sprint actual (restando festivos o reuniones).</p>
            </div>
        </div>
        <div class="steam-box" style="margin-top: 2rem;">
            <strong>Fórmula Ágil:</strong> Valor de Negocio / Esfuerzo = Prioridad. ¡Maximizar este ratio es el arte del Product Owner!
        </div>
    `,
    "juegos": `
        <article class="guide-section">
            <h2>Centro de Entrenamiento Scrum</h2>
            <p>Pon a prueba tus conocimientos antes de entrar al simulador final. ¡Cada acierto te da XP!</p>
            <div class="theory-nav-grid">
                <div class="theory-card" onclick="app.loadGame('role-matching')">
                    <span class="icon">🧩</span>
                    <h4>Role Matching</h4>
                    <p>Une cada responsabilidad con su rol correspondiente.</p>
                </div>
                <div class="theory-card" onclick="app.loadGame('scrum-quiz')">
                    <span class="icon">💡</span>
                    <h4>Scrum Quiz</h4>
                    <p>Respuesta rápida sobre teoría y situaciones ágiles.</p>
                </div>
                <div class="theory-card" onclick="app.loadGame('estimation-game')">
                    <span class="icon">📏</span>
                    <h4>Estimación Fibonacci</h4>
                    <p>Aprende a puntuar tareas por su complejidad técnica.</p>
                </div>
                <div class="theory-card featured-game" onclick="app.loadEstimator(this)">
                    <span class="icon">🧮</span>
                    <h4>Estimador Pro</h4>
                    <p>Practica con retos reales del proyecto Smart City.</p>
                    <span class="game-badge">Interactivo</span>
                </div>
                <div class="theory-card" onclick="app.loadGame('planning-challenge')">
                    <span class="icon">🎯</span>
                    <h4>Reto de Planificación</h4>
                    <p>Gestiona la capacidad del equipo y maximiza el valor.</p>
                </div>
                <div class="theory-card" onclick="app.loadGame('daily-reto')">
                    <span class="icon">💬</span>
                    <h4>Situaciones Daily</h4>
                    <p>Toma decisiones rápidas ante impedimentos reales.</p>
                </div>
                <div class="theory-card featured-game" onclick="app.loadGame('sprint-goal')">
                    <span class="icon">🎯</span>
                    <h4>Foco del Sprint</h4>
                    <p>Selecciona las historias que sí cumplen el objetivo.</p>
                    <span class="game-badge">Nuevo</span>
                </div>
                <div class="theory-card featured-game" onclick="app.loadGame('dod-check')">
                    <span class="icon">✅</span>
                    <h4>Definition of Done (Definición de Terminado)</h4>
                    <p>Valida qué criterios dejan un incremento listo.</p>
                    <span class="game-badge">Nuevo</span>
                </div>
                <div class="theory-card featured-game" onclick="app.loadGame('artifact-match')">
                    <span class="icon">📦</span>
                    <h4>Artefactos Clave</h4>
                    <p>Asocia situaciones reales al artefacto correcto.</p>
                    <span class="game-badge">Nuevo</span>
                </div>
                <div class="theory-card featured-game" onclick="app.loadGame('review-detective')">
                    <span class="icon">🕵️</span>
                    <h4>Review Detective</h4>
                    <p>Detecta qué evidencia demuestra valor real al cliente.</p>
                    <span class="game-badge">Nuevo</span>
                </div>
                <div class="theory-card featured-game" onclick="app.loadGame('refinement-ready')">
                    <span class="icon">🧠</span>
                    <h4>Refinement Ready</h4>
                    <p>Elige historias que están listas para entrar al Sprint.</p>
                    <span class="game-badge">Nuevo</span>
                </div>
            </div>
            
            <div id="game-container" class="glass-panel hidden-view" style="margin-top: 2rem; min-height: 400px;">
                <!-- Dinámico -->
            </div>
        </article>
    `,
    "teoria-historias": `
        <h3>Historias de Usuario y el Modelo INVEST</h3>
        <p>Una Historia de Usuario no es un requisito tradicional; es un recordatorio para una conversación.</p>
        <div class="role-detail">
            <div class="example-box glass-panel">
                <h4>🎯 Estructura Básica</h4>
                <p><strong>Como</strong> [Rol], <strong>quiero</strong> [Acción], <strong>para</strong> [Beneficio].</p>
                <div class="steam-example">
                    <strong>Ejemplo Smart City:</strong> Como Ciudadano, quiero ver el mapa de buses en tiempo real para no perder tiempo esperando en la parada.
                </div>
            </div>
            
            <div class="example-box glass-panel">
                <h4>💎 Principio INVEST</h4>
                <ul>
                    <li><strong>I</strong>ndependiente: Se puede desarrollar por separado.</li>
                    <li><strong>N</strong>egociable: Los detalles se acuerdan entre el PO y Developers.</li>
                    <li><strong>V</strong>aliosa: Aporta valor real al usuario o negocio.</li>
                    <li><strong>E</strong>stimable: El equipo puede calcular su esfuerzo.</li>
                    <li><strong>S</strong>mall (Pequeña): Se termina dentro de un Sprint.</li>
                    <li><strong>T</strong>estable (Verificable): Tiene criterios de aceptación claros.</li>
                </ul>
            </div>
            
            <div class="example-box glass-panel">
                <h4>✅ Criterios de Aceptación</h4>
                <p>Condiciones específicas que debe cumplir la historia para ser aceptada por el PO.</p>
                <div class="steam-example">
                    <strong>Para el Mapa 5G:</strong> 1. Muestra buses con < 5s de retraso. 2. Funciona en modo oscuro. 3. Carga en < 2s.
                </div>
            </div>
        </div>
    `,
    "teoria-valores": `
        <h3>Los 5 Valores de Scrum</h3>
        <p>Los valores son el alma de Scrum. Sin ellos, los eventos y artefactos son solo "teatro ágil".</p>
        <div class="role-detail">
            <div class="example-box glass-panel" style="border-left-color: #6366f1;">
                <h4>🤝 Compromiso (Commitment)</h4>
                <p>El equipo se compromete a alcanzar sus metas y a apoyarse mutuamente.</p>
                <div class="steam-example"><strong>Smart City:</strong> Comprometerse a que la Red 5G sea segura, no solo funcional.</div>
            </div>
            <div class="example-box glass-panel" style="border-left-color: #a855f7;">
                <h4>🎯 Foco (Focus)</h4>
                <p>Toda la atención se centra en el trabajo del Sprint y en los objetivos del Scrum Team.</p>
                <div class="steam-example"><strong>Smart City:</strong> Ignorar distracciones de otros proyectos para terminar el Centro de Comando.</div>
            </div>
            <div class="example-box glass-panel" style="border-left-color: #10b981;">
                <h4>📖 Apertura (Openness)</h4>
                <p>El equipo y los interesados acuerdan ser abiertos sobre el trabajo y los desafíos.</p>
                <div class="steam-example"><strong>Smart City:</strong> Admitir que un sensor IoT está fallando antes de la Review.</div>
            </div>
            <div class="example-box glass-panel" style="border-left-color: #f59e0b;">
                <h4>✊ Respeto (Respect)</h4>
                <p>Respeto a las capacidades, independencia y profesionalismo de cada miembro.</p>
                <div class="steam-example"><strong>Smart City:</strong> Valorar la opinión del experto en ecopsicología tanto como la del ingeniero.</div>
            </div>
            <div class="example-box glass-panel" style="border-left-color: #ef4444;">
                <h4>🦁 Coraje (Courage)</h4>
                <p>Valor para hacer lo correcto y trabajar en problemas difíciles.</p>
                <div class="steam-example"><strong>Smart City:</strong> Decirle al Alcalde (PO) que una funcionalidad no está lista para producción.</div>
            </div>
        </div>
    `,
    "teoria-guia2020": `
        <h3>Scrum Guide 2020: El Renacimiento</h3>
        <p>La versión 2020 simplificó el lenguaje y fortaleció el enfoque en el compromiso.</p>
        <div class="event-timeline">
            <div class="event-item">
                <div class="event-header">
                    <span class="icon-wrapper">🍃</span>
                    <strong>Menos Prescriptiva</strong>
                </div>
                <p>Se eliminaron frases como "las tres preguntas de la Daily" para dar más libertad al equipo y enfocarse en el progreso hacia el Sprint Goal.</p>
            </div>
            <div class="event-item">
                <div class="event-header">
                    <span class="icon-wrapper">🤝</span>
                    <strong>Un Solo Equipo</strong>
                </div>
                <p>Desaparece el "Development Team". Ahora solo hay un <b>Scrum Team</b> unificado enfocado en un producto, eliminando silos internos.</p>
            </div>
            <div class="event-item">
                <div class="event-header">
                    <span class="icon-wrapper">🎯</span>
                    <strong>El Product Goal</strong>
                </div>
                <p>Se introduce como un nuevo compromiso para el Product Backlog. Proporciona un foco y dirección a largo plazo para el equipo.</p>
            </div>
            <div class="event-item">
                <div class="event-header">
                    <span class="icon-wrapper">⚡</span>
                    <strong>Autogestión</strong>
                </div>
                <p>Pasamos de autoorganización a <b>autogestión</b>: los equipos ahora deciden quién, cómo y en qué nivel de detalle trabajar.</p>
            </div>
        </div>
    `,
    "teoria-deuda": `
        <h3>Deuda Técnica y Spikes</h3>
        <p>No todo el trabajo es funcional. A veces debemos pagar deudas o investigar antes de construir.</p>
        <div class="role-detail">
            <div class="example-box glass-panel">
                <h4>💳 Deuda Técnica</h4>
                <p>Es el costo de priorizar la velocidad sobre la calidad. Si no se paga, cada vez es más lento y difícil añadir funciones.</p>
                <div class="steam-example">
                    <strong>Smart City:</strong> Instalar sensores baratos que fallan a los 3 meses. Pagamos la deuda reemplazándolos por unos de larga vida.
                </div>
            </div>
            <div class="example-box glass-panel">
                <h4>🚀 Spikes (Investigación)</h4>
                <p>Es una historia de usuario técnica cuyo objetivo es investigar o prototipar una solución antes de estimar el trabajo real.</p>
                <div class="steam-example">
                    <strong>Smart City:</strong> Spike de 3 días para ver si la Red 5G interfiere con las señales de radio de los hospitales.
                </div>
            </div>
        </div>
`,
    "glosario": `
        <article class="guide-section">
            <h2>📚 Glosario de Términos Scrum</h2>
            <div class="glossary-search-container">
                <input type="text" id="glossary-search" placeholder="Buscar término..." onkeyup="app.filterGlossary()">
            </div>
            <div class="glossary-grid" id="glossary-items">
                <div class="glossary-item glass-panel">
                    <h4>Adaptación</h4>
                    <p>Pilar del empirismo que consiste en ajustar un proceso o material lo antes posible si se determina que se desvía de los límites aceptables.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Autogestión</h4>
                    <p>Característica del Scrum Team donde sus miembros deciden internamente quién hace qué, cuándo y cómo.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Burn-down Chart</h4>
                    <p>Gráfica que muestra el trabajo restante en un Sprint frente al tiempo disponible, útil para predecir la finalización.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Capacidad</h4>
                    <p>La cantidad total de trabajo que un Scrum Team puede realizar en un Sprint, considerando la disponibilidad de sus miembros.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Compromiso</h4>
                    <p>Uno de los 5 valores de Scrum; referirse a la dedicación del equipo para alcanzar sus metas y apoyarse mutuamente.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Coraje</h4>
                    <p>Uno de los 5 valores de Scrum; tener la valentía para hacer lo correcto y trabajar en problemas difíciles.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Daily Scrum</h4>
                    <p>Evento de 15 minutos para que los Developers inspeccionen el progreso hacia el Sprint Goal y adapten el Sprint Backlog.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Definition of Done (DoD)</h4>
                    <p>Descripción formal del estado del Incremento cuando cumple con las medidas de calidad requeridas para el producto.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Definition of Ready (DoR)</h4>
                    <p>Criterios informales que indican que una Historia de Usuario está suficientemente clara para ser incluida en un Sprint.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Developers</h4>
                    <p>Personas en el Scrum Team que se comprometen a crear cualquier aspecto de un Incremento utilizable en cada Sprint.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Empirismo</h4>
                    <p>Filosofía basada en que el conocimiento proviene de la experiencia y la toma de decisiones se basa en lo que se observa.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Foco</h4>
                    <p>Uno de los 5 valores de Scrum; concentrar la atención en el trabajo del Sprint y en los objetivos del equipo.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Incremento</h4>
                    <p>Un peldaño concreto hacia el Objetivo del Producto. Es la suma de todos los elementos del Backlog completados en un Sprint.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Inspección</h4>
                    <p>Pilar del empirismo que consiste en examinar con frecuencia los artefactos de Scrum y el progreso hacia una meta.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Lean Thinking</h4>
                    <p>Mentalidad que busca reducir el desperdicio y enfocarse en lo esencial para maximizar el valor entregado.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Product Backlog</h4>
                    <p>Lista emergente y ordenada de lo que se necesita para mejorar el producto. Es la única fuente de trabajo para el Scrum Team.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Product Goal</h4>
                    <p>Objetivo a largo plazo para el Scrum Team; describe un estado futuro del producto.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Product Owner</h4>
                    <p>Responsable de maximizar el valor del producto y de gestionar eficazmente el Product Backlog.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Refinamiento</h4>
                    <p>Acto de desglosar y definir más detalladamente los elementos del Product Backlog en unidades más pequeñas y precisas.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Retroalimentación</h4>
                    <p>Información devuelta sobre un incremento o proceso, crucial para la inspección y adaptación.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Scrum Master</h4>
                    <p>Responsable de establecer Scrum según la Guía de Scrum y de la efectividad del Scrum Team.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Sprint</h4>
                    <p>Evento de tiempo fijo de un mes o menos para crear consistencia, en el que se crea un Incremento útil y utilizable.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Sprint Backlog</h4>
                    <p>El plan por y para los Developers; compuesto por el Sprint Goal, elementos seleccionados y un plan de entrega.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Sprint Goal</h4>
                    <p>Compromiso del Sprint Backlog; describe el propósito único del Sprint.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Sprint Planning</h4>
                    <p>Evento que inicia el Sprint al establecer el trabajo a realizar para el mismo.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Sprint Retrospective</h4>
                    <p>Evento para planificar formas de aumentar la calidad y la efectividad en el próximo Sprint.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Sprint Review</h4>
                    <p>Evento para inspeccionar el resultado del Sprint y determinar adaptaciones futuras con los interesados.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Stakeholders</h4>
                    <p>Personas externas al Scrum Team que tienen un interés o se ven afectadas por el producto.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Time-box</h4>
                    <p>Periodo de tiempo máximo para un evento. Una vez alcanzado, el evento termina independientemente de si se cumplió el objetivo.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Transparencia</h4>
                    <p>Pilar del empirismo que asegura que los procesos y el trabajo sean visibles para quienes lo realizan y quienes lo reciben.</p>
                </div>
                <div class="glossary-item glass-panel">
                    <h4>Velocidad</h4>
                    <p>Métrica que indica la cantidad de trabajo (usualmente en Story Points) que un equipo completa en un Sprint.</p>
                </div>
            </div>
        </article >
    `
};
