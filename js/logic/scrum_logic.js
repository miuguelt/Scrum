/**
 * Módulo de Lógica (Business Logic) - COMPATIBLE NO-SERVER
 * Usa window.ScrumData y define window.ScrumBoardLogic
 */

(function () {
    // Dependencias seguras
    const GUIDE_PHASES = window.ScrumData.GUIDE_PHASES;

    class ScrumBoardLogic {
        constructor(initialTasks) {
            this.tasks = JSON.parse(JSON.stringify(initialTasks));
            this.currentPhase = GUIDE_PHASES.SETUP; // Fase inicial
            this.sprintCapacity = 15; // Capacidad máxima del equipo para el ejercicio
        }

        setPhase(phase) {
            this.currentPhase = phase;
        }

        getPhase() {
            return this.currentPhase;
        }

        getTasks() {
            return this.tasks;
        }

        // Calcular puntos actuales en el Sprint (To Do + Doing + Done)
        getSprintLoad() {
            return this.tasks
                .filter(t => t.status !== 'backlog')
                .reduce((acc, t) => acc + t.points, 0);
        }

        /**
         * Intenta mover una tarea validando reglas de la FASE ACTUAL
         */
        moveTask(taskId, newStatus) {
            const task = this.tasks.find(t => t.id === taskId);
            if (!task) return { success: false, message: "Tarea no existe" };

            const oldStatus = task.status;

            // --- VALIDACIONES POR FASE ---

            // 1. Fase SETUP: No se mueve nada
            if (this.currentPhase === GUIDE_PHASES.SETUP) {
                return { success: false, message: "Lee la teoría antes de empezar a mover tareas." };
            }

            // 2. Fase PLANNING: Solo Backlog <-> To Do
            if (this.currentPhase === GUIDE_PHASES.PLANNING) {

                // Bloquear movimientos a Doing o Done
                if (newStatus === 'doing' || newStatus === 'done') {
                    return { success: false, message: "PLANNING_ERROR_COL" };
                }

                // Validar CAPACIDAD si movemos de Backlog -> To Do
                if (oldStatus === 'backlog' && newStatus === 'todo') {
                    const currentLoad = this.getSprintLoad();
                    if (currentLoad + task.points > this.sprintCapacity) {
                        return { success: false, message: "PLANNING_ERROR_LIMIT" };
                    }
                }
            }

            // 3. Fase EXECUTION: Solo To Do -> Doing -> Done
            if (this.currentPhase === GUIDE_PHASES.EXECUTION) {
                // No se pueden meter tareas nuevas del Backlog en medio del Sprint
                if (oldStatus === 'backlog') {
                    return { success: false, message: "No se agregan tareas nuevas en medio del Sprint." };
                }
                // No se pueden devolver tareas al Backlog
                if (newStatus === 'backlog') {
                    return { success: false, message: "El trabajo comprometido no debe volver al Backlog." };
                }
            }

            // 4. Fase REVIEW: Todo congelado
            if (this.currentPhase === GUIDE_PHASES.REVIEW) {
                return { success: false, message: "El Sprint terminó. Estamos en Review." };
            }

            // Si pasa validaciones, ejecutamos cambio
            task.status = newStatus;

            return {
                success: true,
                task: task,
                from: oldStatus,
                to: newStatus
            };
        }

        getProgress() {
            const totalInSprint = this.tasks.filter(t => t.status !== 'backlog').reduce((acc, t) => acc + t.points, 0);
            const donePoints = this.tasks.filter(t => t.status === 'done').reduce((acc, t) => acc + t.points, 0);

            return {
                total: totalInSprint,
                done: donePoints,
                percentage: totalInSprint === 0 ? 0 : Math.round((donePoints / totalInSprint) * 100)
            };
        }
    }

    // Exponer globalmente
    window.ScrumBoardLogic = ScrumBoardLogic;

})();
