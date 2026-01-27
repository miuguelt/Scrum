/**
 * Módulo de Datos (Data Layer) - ENRIQUECIDO (Notion + Deep Theory)
 * Asigna variables al scope global para funcionar sin módulos ES6.
 */

export const ScrumData = (function () {

    const GUIDE_PHASES = {
        SETUP: 'setup',
        PLANNING: 'planning',
        EXECUTION: 'execution',
        REVIEW: 'review'
    };

    const SCRUM_CONTENT = {
        values: [
            {
                id: 'commitment',
                title: "Compromiso",
                icon: "🤝",
                definition: "Dedicarnos al éxito del equipo, no solo a mi tarea.",
                analogy: "Estudiantes: Si un compañero no entiende, le explico. Si mi parte afecta al otro, lo coordino. No es 'mi nota', es 'nuestro proyecto'.",
                key_responsibility: "Todos somos responsables del resultado final."
            },
            {
                id: 'focus',
                title: "Foco",
                icon: "🎯",
                definition: "Hacemos una cosa a la vez. Terminamos antes de empezar algo nuevo.",
                analogy: "En clase: No estamos en TikTok y haciendo el proyecto. Estamos 100% en el Sprint. 'Stop Starting, Start Finishing'.",
                key_responsibility: "Evitar distracciones durante el Sprint."
            },
            {
                id: 'openness',
                title: "Franqueza (Openness)",
                icon: "📖",
                definition: "Transparencia sobre el trabajo y los obstáculos.",
                analogy: "Si voy atrasado, lo digo en el Daily. No escondo problemas bajo la alfombra esperando que desaparezcan.",
                key_responsibility: "Pedir ayuda a tiempo."
            },
            {
                id: 'respect',
                title: "Respeto",
                icon: "🙏",
                definition: "Respetamos las habilidades y opiniones de cada miembro.",
                analogy: "No hay 'preguntas tontas'. Valoramos que el diseñador sepa de colores y el programador de código, y aprendemos mutuamente.",
                key_responsibility: "Crear un ambiente seguro."
            },
            {
                id: 'courage',
                title: "Coraje",
                icon: "🦁",
                definition: "Valentía para hacer lo correcto y trabajar en problemas difíciles.",
                analogy: "Decirle al profesor (PO) que 'No alcanzamos' en lugar de entregar algo a medias o mal hecho. Admitir errores.",
                key_responsibility: "Aceptar retos y ser honestos."
            }
        ],
        definition_of_done: [
            {
                id: 'code',
                title: "Funcionalidad",
                icon: "⚙️",
                definition: "El código o arte hace lo que dice la historia.",
                analogy: "Si es un dibujo, está entintado (no boceto). Si es código, corre sin errores.",
                key_responsibility: "Cumple Criterios de Aceptación."
            },
            {
                id: 'review',
                title: "Revisión de Pares",
                icon: "👀",
                definition: "Alguien más del equipo le dio el 'Visto Bueno'.",
                analogy: "Antes de entregar la tarea, un compañero revisó que no faltaran tildes o bugs obvios.",
                key_responsibility: "Calidad asegurada."
            },
            {
                id: 'testing',
                title: "Pruebas",
                icon: "🧪",
                definition: "Se verificó que funciona en el entorno final.",
                analogy: "Probamos que el sensor de humedad realmente active la bomba con agua real, no solo en simulación.",
                key_responsibility: "Sin sorpresas en la Demo."
            }
        ],
        pillars: [
            {
                id: 'transparency',
                title: "Transparencia",
                icon: "🔍",
                definition: "Todo el trabajo es visible para quienes son responsables del resultado.",
                analogy: "Notion: Un tablero Kanban compartido donde todos ven el estado real de las tareas.",
                key_responsibility: "Sin secretos. Si hay un problema, se muestra en el Daily."
            },
            {
                id: 'inspection',
                title: "Inspección",
                icon: "🕵️",
                definition: "Verificar frecuentemente los artefactos para detectar variaciones indeseadas.",
                analogy: "Notion: Revisar el 'Burn-down chart' o el estado de las tareas antes del Daily.",
                key_responsibility: "Mirar si vamos bien o nos desviamos del objetivo."
            },
            {
                id: 'adaptation',
                title: "Adaptación",
                icon: "🔧",
                definition: "Si algo va mal, ajustamos el proceso o el material inmediatamente.",
                analogy: "Notion: Mover una tarea bloqueada a 'Impedimentos' y reasignar recursos.",
                key_responsibility: "Corregir el rumbo antes de chocar."
            }
        ],
        roles: [
            {
                id: 'po',
                title: "Product Owner",
                icon: "👑",
                definition: "Responsable de maximizar el valor del producto. Es una sola persona.",
                analogy: "En Notion: Es quien tiene permisos para ordenar y editar la base de datos 'Product Backlog'. Nadie más debería cambiar el orden sin su permiso.",
                key_responsibility: "Gestionar el Product Backlog y definir el Product Goal."
            },
            {
                id: 'sm',
                title: "Scrum Master",
                icon: "🛡️",
                definition: "Responsable de la efectividad del equipo Scrum. Líder que sirve al equipo.",
                analogy: "En Notion: Configura las plantillas, automatizaciones y asegura que el equipo actualice sus estados.",
                key_responsibility: "Eliminar impedimentos y liderar la efectividad del equipo."
            },
            {
                id: 'dev',
                title: "Developers",
                icon: "👷",
                definition: "Personas comprometidas a crear cualquier aspecto de un Incremento útil en cada Sprint.",
                analogy: "En Notion: Son quienes mueven las tarjetas de 'To Do' a 'Done' y adjuntan evidencias.",
                key_responsibility: "Auto-gestionarse para crear el incremento cumpliendo el DoD."
            }
        ],
        tools: [
            {
                id: 'notion_backlog',
                title: "Notion: Product Backlog",
                icon: "📋",
                definition: "Base de datos maestra con todas las ideas y requerimientos.",
                analogy: "Crea una Tabla en Notion con columnas: 'Nombre', 'Prioridad (Alta/Media)', 'Estado' y 'Sprint Asignado'.",
                key_responsibility: "Tip: Usa filtros para ver solo lo del Sprint actual."
            },
            {
                id: 'notion_board',
                title: "Notion: Sprint Board",
                icon: "📊",
                definition: "Vista de tablero (Kanban) para gestionar el flujo diario.",
                analogy: "Vista 'Board' en Notion agrupada por 'Status'. Es tu radiografía diaria del proyecto.",
                key_responsibility: "¡Muévelo solo si es verdad! La transparencia es clave."
            },
            {
                id: 'notion_docs',
                title: "Notion: Wiki del Proyecto",
                icon: "📚",
                definition: "Centralización de documentación técnica y funcional.",
                analogy: "Páginas dentro de Notion con bocetos, actas de reuniones y guías técnicas.",
                key_responsibility: "Evita perder información en chats dispersos."
            }
        ],
        artifacts: [
            {
                id: 'pb',
                title: "Product Backlog",
                icon: "📜",
                definition: "Lista ordenada de lo que se necesita para mejorar el producto. Es la única fuente de trabajo.",
                analogy: "Menú del restaurante. El PO decide qué platos (features) se cocinan primero.",
                commitment: "Product Goal (Objetivo del Producto)",
                key_responsibility: "Responsabilidad única del Product Owner."
            },
            {
                id: 'sb',
                title: "Sprint Backlog",
                icon: "📌",
                definition: "Compuesto por el Sprint Goal, el conjunto de elementos elegidos y un plan para entregarlos.",
                analogy: "Bandeja del mesero con lo que se servirá HOY.",
                commitment: "Sprint Goal (Objetivo del Sprint)",
                key_responsibility: "Pertenece a los Developers."
            },
            {
                id: 'inc',
                title: "Increment",
                icon: "🎁",
                definition: "Peldaño concreto hacia el Objetivo del Producto. Cada incremento se suma a los anteriores.",
                analogy: "Plato terminado y servido. Debe estar listo para comer (usar).",
                commitment: "Definition of Done (Definición de Terminado)",
                key_responsibility: "Debe ser útil y utilizable."
            }
        ],
        events: [
            {
                id: 'plan',
                title: "Sprint Planning",
                icon: "📅",
                definition: "Definir qué se hará y cómo.",
                analogy: "Reunión de estrategia antes del partido. Se define la alineación.",
                duration: "Máx 8 horas."
            },
            {
                id: 'daily',
                title: "Daily Scrum",
                icon: "⏱️",
                definition: "Sincronización diaria de 15 min.",
                analogy: "Huddle deportivo: '¿Vamos ganando? ¿Qué nos frena?'.",
                duration: "15 minutos diarios."
            },
            {
                id: 'review',
                title: "Sprint Review",
                icon: "🎪",
                definition: "Inspección del incremento con stakeholders.",
                analogy: "Feria de ciencias o Demo. Se muestra el producto real, no PowerPoints.",
                duration: "Máx 4 horas."
            }
        ]
    };

    const INSTRUCTOR_TIPS = {
        intro: "¡Hola Aprendiz! Hemos añadido una sección nueva sobre **Notion**. Scrum necesita herramientas para ser transparente. ¡Explora la teoría antes de jugar!",
        planning_start: "Fase 1: PLANNING. Recuerda, en Notion crearías un 'Sprint Property' para filtrar estas tareas. Aquí, solo arrástralas al To Do. Límite: 15 pts.",
        planning_error_limit: "⚠️ Capacity Excedido. En Notion esto se vería como una columna de 'Suma de Puntos' en rojo.",
        planning_error_col: "⚠️ ¡Orden! Primero planificamos. No muevas a Doing todavía.",
        execution_start: "Fase 2: EJECUCIÓN. Imagina que este tablero es tu vista de Notion. ¡Actualiza el estado en tiempo real!",
        execution_dailies: "💡 Tip: En tu Daily, abre este tablero en pantalla compartida (o en Notion) para que todos vean lo mismo.",
        review_success: "¡Sprint Completado! En la Review, mostrarías este resultado a los stakeholders (probablemente en una página de Notion llamada 'Release Notes').",
        review_incomplete: "Sprint Incompleto. No te preocupes. En la Retrospectiva analizaremos por qué. ¿Quizás estimamos mal los puntos?"
    };

    const BACKLOG_ITEMS = [
        {
            id: "t1",
            title: "HU-01: IA Detección Plásticos",
            desc: "Como robot, quiero identificar botellas PET mediante visión artificial.",
            criteria: ["Identificación >90%", "Color-based filtering"],
            points: 8,
            type: "eng",
            status: "backlog"
        },
        {
            id: "t2",
            title: "HU-02: Mecánica Brazo",
            desc: "Como robot, quiero sujetar botellas con una pinza mecánica.",
            criteria: ["Carga 500g", "3 DOF"],
            points: 5,
            type: "eng",
            status: "backlog"
        },
        {
            id: "t3",
            title: "HU-03: Control Base Móvil",
            desc: "Como robot, quiero desplazarme por superficie plana sin chocar.",
            criteria: ["Giro 360", "Ultrasonido"],
            points: 3,
            type: "eng",
            status: "backlog"
        },
        {
            id: "t4",
            title: "HU-04: Dashboard de Impacto",
            desc: "Como coordinación, quiero ver un reporte semanal de residuos.",
            criteria: ["Gráficas tiempo real", "Filtro por material"],
            points: 5,
            type: "data",
            status: "backlog"
        },
        {
            id: "t5",
            title: "HU-05: Red 5G Urbana",
            desc: "Como ciudadano, quiero conectividad estable en puntos críticos.",
            criteria: ["Latencia < 10ms", "Cobertura > 95%"],
            points: 13,
            type: "infra",
            status: "backlog"
        }
    ];

    const GAME_DATA = {
        roleMatching: [
            { id: 1, text: "Prioriza el Backlog y define el Product Goal", role: "Product Owner" },
            { id: 2, text: "Elimina impedimentos y lidera la efectividad", role: "Scrum Master" },
            { id: 3, text: "Crea el incremento útil y se autogestiona", role: "Developers" },
            { id: 4, text: "Responsable de maximizar el valor", role: "Product Owner" },
            { id: 5, text: "Establece Scrum como se define en la Guía", role: "Scrum Master" },
            { id: 6, text: "Son multifuncionales y autogestionados", role: "Developers" }
        ],
        quiz: [
            {
                q: "¿Cuánto dura un Sprint normalmente?",
                a: ["1 a 4 semanas", "6 meses", "Indefinidamente"],
                correct: 0
            },
            {
                q: "¿Quién decide cómo realizar el trabajo en un equipo autogestionado?",
                a: ["El Scrum Master", "Los Developers", "El Product Owner"],
                correct: 1
            },
            {
                q: "¿Qué es el Product Goal en Scrum 2020?",
                a: ["Un reporte de ventas", "Un compromiso para el Product Backlog que describe un estado futuro", "Una lista de tareas diarias"],
                correct: 1
            },
            {
                q: "¿Qué se hace en el Daily Scrum?",
                a: ["Reportar horas al jefe", "Inspeccionar progreso hacia el objetivo del sprint", "Planificar el siguiente sprint"],
                correct: 1
            }
        ],
        estimation: [
            { id: "e1", task: "Diseño de Base de Datos", effort: "Mucho", complexity: "Media", risk: "Bajo", correct: 8 },
            { id: "e2", task: "Cambiar color de un botón", effort: "Mínimo", complexity: "Baja", risk: "Nulo", correct: 1 },
            { id: "e3", task: "Integrar API de pagos externa", effort: "Medio", complexity: "Alta", risk: "Alto", correct: 13 },
            { id: "e4", task: "Crear formulario de contacto", effort: "Bajo", complexity: "Baja", risk: "Bajo", correct: 3 },
            { id: "e5", task: "Optimizar algoritmos de IA", effort: "Mucho", complexity: "Muy Alta", risk: "Alto", correct: 21 }
        ],
        planning: [
            { id: "p1", title: "Validación de Correo", points: 2, value: 5 },
            { id: "p2", title: "Dashboard de Usuario", points: 8, value: 10 },
            { id: "p3", title: "Recuperar Contraseña", points: 5, value: 7 },
            { id: "p4", title: "Filtros de Búsqueda", points: 3, value: 6 },
            { id: "p5", title: "Exportar Reportes PDF", points: 13, value: 8 },
            { id: "p6", title: "Chat de Soporte", points: 5, value: 4 }
        ],
        daily: [
            {
                id: "d1",
                scenario: "Un desarrollador está bloqueado porque el servidor de pruebas no funciona.",
                options: [
                    { text: "Esperar a que se arregle solo", impact: -10, feedback: "El SM debe actuar proactivamente." },
                    { text: "El SM escala el problema con Infraestructura", impact: 20, feedback: "Correcto! Eliminar impedimentos es clave." },
                    { text: "Pedir al dev que trabaje en otra cosa mientras tanto", impact: 10, feedback: "Buena solución temporal, pero el bloqueo persiste." }
                ]
            },
            {
                id: "d2",
                scenario: "El Product Owner quiere meter una tarea nueva 'URGENTE' a mitad del Sprint.",
                options: [
                    { text: "Aceptarla inmediatamente", impact: -20, feedback: "Esto rompe el foco del Sprint." },
                    { text: "El SM explica que debe esperar al siguiente Planning", impact: 20, feedback: "Correcto! Proteger al equipo es vital." },
                    { text: "Hacerla en horas extra", impact: -15, feedback: "El Burnout no es Agile." }
                ]
            }
        ],
        sprintGoal: {
            goal: "Reducir el tiempo de registro a menos de 1 minuto en la app.",
            items: [
                { id: "sg1", title: "Optimizar validaciones del formulario", points: 5, tag: "Rendimiento", fit: true },
                { id: "sg2", title: "Agregar tour guiado de bienvenida", points: 3, tag: "UX", fit: false },
                { id: "sg3", title: "Reducir pasos del registro de 5 a 3", points: 8, tag: "Flujo", fit: true },
                { id: "sg4", title: "Cachear catálogo en segundo plano", points: 5, tag: "Velocidad", fit: false },
                { id: "sg5", title: "Auto-completar campos con perfil", points: 5, tag: "Datos", fit: true },
                { id: "sg6", title: "Eliminar doble confirmación de email", points: 2, tag: "Conversión", fit: true }
            ]
        },
        dodCheck: {
            items: [
                { id: "dod1", text: "Criterios de aceptación completados", valid: true },
                { id: "dod2", text: "Código revisado por pares", valid: true },
                { id: "dod3", text: "Pruebas automatizadas ejecutadas", valid: true },
                { id: "dod4", text: "Reporte de horas enviado al jefe", valid: false },
                { id: "dod5", text: "Documentación mínima actualizada", valid: true },
                { id: "dod6", text: "Trabajo en progreso en otra rama", valid: false }
            ]
        },
        artifactMatch: [
            {
                question: "Lista priorizada de todo lo que podría tener el producto.",
                options: ["Product Backlog", "Sprint Backlog", "Incremento"],
                correct: 0
            },
            {
                question: "Conjunto de ítems seleccionados para el Sprint y su plan de entrega.",
                options: ["Incremento", "Sprint Backlog", "Product Backlog"],
                correct: 1
            },
            {
                question: "Resultado utilizable que cumple la Definition of Done.",
                options: ["Sprint Backlog", "Incremento", "Product Backlog"],
                correct: 1
            },
            {
                question: "Evidencia acumulada del valor entregado hasta hoy.",
                options: ["Incremento", "Product Backlog", "Sprint Backlog"],
                correct: 0
            }
        ],
        reviewDetective: [
            {
                prompt: "¿Qué evidencia demuestra mejor el valor entregado al finalizar el Sprint?",
                options: ["Un PowerPoint con capturas", "Demo funcional con usuarios probando", "Un correo del SM con el resumen"],
                correct: 1
            },
            {
                prompt: "Stakeholders dudan del incremento. ¿Qué ayuda más en la Review?",
                options: ["Métricas de uso y tiempos reales", "Promesa de mejoras futuras", "Lista de tareas pendientes"],
                correct: 0
            },
            {
                prompt: "El equipo dice que terminó. ¿Qué valida realmente la historia?",
                options: ["Criterios de aceptación cumplidos", "Horas invertidas reportadas", "Reunión extra"],
                correct: 0
            }
        ],
        refinementReady: {
            items: [
                { id: "r1", title: "HU: Login social", detail: "Criterios claros + mockups aprobados + estimada", ready: true },
                { id: "r2", title: "HU: Reportes avanzados", detail: "Falta contexto de negocio y datos de entrada", ready: false },
                { id: "r3", title: "HU: Notificaciones push", detail: "Dependencia con API confirmada + DoD definida", ready: true },
                { id: "r4", title: "HU: Mejorar rendimiento", detail: "Sin métricas de referencia ni alcance", ready: false },
                { id: "r5", title: "HU: Recuperar contraseña", detail: "Criterios completos + tamaño pequeño", ready: true }
            ]
        }
    };

    // Exponer públicamente
    return {
        GUIDE_PHASES,
        SCRUM_CONTENT,
        INSTRUCTOR_TIPS,
        BACKLOG_ITEMS,
        GAME_DATA,
        NOTION_GUIDE: {
            intro: "Notion es tu Sistema Operativo de Trabajo. Para Scrum, nos permite pasar de la teoría a la práctica visual. ¡Olvídate de los excels desactualizados!",
            steps: [
                {
                    title: "Paso 1: El Dashboard (Tu Centro de Mando)",
                    desc: "Crea una página nueva '🏠 Scrum Team Home'. Añade un bloque de 'Callout' (o Destacado) arriba con el OBJETIVO DEL SPRINT para que nunca se olvide.",
                    tip: "Usa íconos grandes y una portada inspiradora del proyecto."
                },
                {
                    title: "Paso 2: Bases de Datos Relacionales",
                    desc: "Necesitas 3 bases de datos (comando /database full): \n1. **Historias de Usuario** (Tareas).\n2. **Sprints** (Tiempos).\n3. **Wiki/Docs** (Conocimiento).",
                    tip: "Relaciona 'Historias' con 'Sprints' usando una propiedad 'Relation'. Así sabrás qué tarea va en qué Sprint."
                },
                {
                    title: "Paso 3: Propiedades Clave en 'Historias'",
                    desc: "- **Status** (Select: ToDo, Doing, Done).\n- **Puntos** (Number).\n- **Asignado** (Person).\n- **Tipo** (Select: Arte, Código, Diseño).",
                    formula: "Propiedad de Fórmula sugerida: if(prop('Status') == 'Done', '✅', '🏗️')"
                },
                {
                    title: "Paso 4: Vistas Kanban",
                    desc: "Dentro de la página del Sprint actual, crea una 'Linked View' de la base de tareas. Elige layout 'Board'. Agrupa por 'Status'.",
                    formula: "Filtro Clave: Sprint Contains [Sprint Actual]"
                },
                {
                    title: "Paso 5: Documentación Viva e Imágenes",
                    desc: "En cada tarjeta de tarea, escribe los criterios de aceptación y añade imágenes o mockups generados para que el equipo visualice el resultado esperado.",
                    tip: "La documentación vive JUNTO al trabajo. Usa el comando /image para insertar bocetos."
                }
            ]
        },
        PRACTICAL_EXAMPLE: {
            title: "Proyecto: Eco-Parque Sustentable Escolar",
            context: "La institución quiere transformar un terreno baldío en un aula ambiental. El equipo de desarrollo son estudiantes de grado 11.",
            persona: {
                name: "Directora Marta",
                role: "Product Owner",
                quote: "Quiero que los estudiantes aprendan biología cuidando plantas reales, no solo en libros."
            },
            backlog_sample: [
                {
                    story: "Como estudiante, quiero un sistema de riego automático...",
                    criteria: ["Funciona con energía solar", "Se activa a las 6am", "Tiene sensor de humedad"],
                    points: 8
                },
                {
                    story: "Como profesor, quiero códigos QR en cada árbol...",
                    criteria: ["Redirigen a ficha técnica", "Resistentes a la lluvia", "Altura accesible para niños"],
                    points: 3
                },
                {
                    story: "Como visitante, quiero un mapa interactivo del parque...",
                    criteria: ["Muestra ubicación actual", "Indica puntos de interés", "Funciona offline"],
                    points: 5
                },
                {
                    story: "Como administrador, quiero monitorear el nivel de agua de los tanques...",
                    criteria: ["Gráfica en tiempo real", "Alerta si baja del 20%", "Histórico de consumo"],
                    points: 8
                }
            ]
        }
    };

})();

// Exponer globalmente para compatibilidad con scripts no-módulo
window.ScrumData = ScrumData;
