/**
 * SERVICIO DE GESTIÓN DE ESTADO (STORE)
 * Implementa el patrón Observer para centralizar la lógica de negocio.
 * Esto evita "spaghetti code" y hace que la app sea robusta y testeable.
 */
class Store {
    constructor() {
        // ESTADO INICIAL
        this.state = {
            user: {
                xp: 0,
                level: "Novato",
                achievements: []
            },
            sprint: {
                day: 1,
                maxDays: 10,
                morale: 100,
                velocity: 0 // Story Points completados
            },
            tasks: { // Estado del tablero Kanban
                todo: [],
                inprogress: [],
                done: []
            },
            onboarding: {
                tutorialCompleted: false
            },
            gameScores: {} // Track scores for each game
        };

        this.listeners = []; // Suscriptores (Componentes de UI)
        this.loadState();    // Persistencia
    }

    /**
     * Permite a los componentes suscribirse a cambios de estado.
     * @param {Function} callback - Función a ejecutar cuando cambia el estado.
     */
    subscribe(callback) {
        this.listeners.push(callback);
    }

    /**
     * Notifica a todos los suscriptores que hubo un cambio.
     */
    notify() {
        this.listeners.forEach(callback => callback(this.state));
        this.saveState();
    }

    // --- ACCIONES (ACTIONS) ---

    // --- GAMIFICACIÓN ---
    playSound(type) {
        // Sound effects removed.
    }

    addXP(amount) {
        this.state.user.xp += amount;
        this.playSound('xp');
        this.checkLevelUp();
        this.notify();
    }

    checkLevelUp() {
        const xp = this.state.user.xp;
        let newLevel = "Novato";
        if (xp >= 1000) newLevel = "Legendario";
        else if (xp >= 500) newLevel = "Agile Coach";
        else if (xp >= 200) newLevel = "Scrum Master";

        if (newLevel !== this.state.user.level) {
            this.state.user.level = newLevel;
            this.playSound('level-up');
        }
    }

    // 2. SIMULADOR SPRINT
    nextDay() {
        if (this.state.sprint.day < this.state.sprint.maxDays) {
            this.state.sprint.day++;
            this.notify();
            return true; // Día avanzado con éxito
        }
        return false; // Sprint terminado
    }

    updateMorale(amount) {
        this.state.sprint.morale = Math.max(0, Math.min(100, this.state.sprint.morale + amount));
        this.notify();
    }

    // 3. GESTIÓN DE TAREAS (KANBAN)
    initTasks(initialTasks) {
        // Solo inicializa si está vacío (evita sobrescribir persistencia)
        if (this.state.tasks.todo.length === 0 &&
            this.state.tasks.inprogress.length === 0 &&
            this.state.tasks.done.length === 0) {

            this.state.tasks.todo = initialTasks;
            this.notify();
            return true;
        }
        return false;
    }

    setTutorialCompleted(value) {
        this.state.onboarding.tutorialCompleted = value;
        this.notify();
    }

    moveTask(taskId, newStatus) {
        // Validar que el destino sea uno de los estados permitidos
        const validStatuses = ['todo', 'inprogress', 'done'];
        if (!validStatuses.includes(newStatus)) return false;

        // Buscar tarea en todas las columnas
        let task = null;
        let oldStatus = '';

        validStatuses.forEach(status => {
            const index = this.state.tasks[status].findIndex(t => t.id === taskId);
            if (index !== -1) {
                // Solo sacamos la tarea si realmente vamos a moverla a un estado diferente
                if (status !== newStatus) {
                    task = this.state.tasks[status].splice(index, 1)[0];
                    oldStatus = status;
                }
            }
        });

        if (task) {
            this.state.tasks[newStatus].push(task);

            // Reglas de negocio (Recompensas)
            if (newStatus === 'done') {
                const totalPoints = task.points;
                this.addXP(totalPoints * 10); // Más XP por terminar
                this.state.sprint.velocity += totalPoints;
                this.playSound('task-done');
            } else if (newStatus === 'inprogress' && oldStatus === 'todo') {
                this.addXP(10); // Recompensa por empezar
            }

            this.notify();
            return true;
        }
        return false;
    }

    updateGameScore(gameId, scoreData) {
        this.state.gameScores[gameId] = scoreData;
        this.notify();
    }

    // --- PERSISTENCIA ---
    saveState() {
        localStorage.setItem('scrum_v2_state', JSON.stringify(this.state));
    }

    loadState() {
        const saved = localStorage.getItem('scrum_v2_state');
        if (saved) {
            this.state = JSON.parse(saved);
        }
    }
}

// Singleton: Exportamos una única instancia
export const store = new Store();
