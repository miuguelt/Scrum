/**
 * Main Entry Point - COMPATIBLE NO-SERVER
 * Inicializa usando las clases globales window.ScrumBoardLogic, etc.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando Modo No-Server (File Protocol)...");

    // Verificar que los scripts cargaron
    if (!window.ScrumData || !window.ScrumBoardLogic || !window.UIManager) {
        console.error("Error crítico: Scripts no cargados correctamente.");
        alert("Error de carga: Asegúrate de que todos los archivos .js estén en su carpeta.");
        return;
    }

    // 1. Inicializar Lógica
    // Usamos window.ScrumData.BACKLOG_ITEMS
    const logicEngine = new window.ScrumBoardLogic(window.ScrumData.BACKLOG_ITEMS);

    // 2. Inicializar UI
    const uiManager = new window.UIManager(logicEngine);
    uiManager.init();

    // 3. Manejo del Cronómetro
    const timerElement = document.getElementById('sprint-timer');

    document.addEventListener('start-timer', () => {
        let days = 10;
        timerElement.textContent = `Días restantes: ${days}`;
        timerElement.style.color = '#00cec9';

        const intervalId = setInterval(() => {
            if (days > 0) {
                days--;
                timerElement.textContent = `Días restantes: ${days}`;
                if (days < 3) timerElement.style.color = '#ff6b6b';
            } else {
                clearInterval(intervalId);
                timerElement.textContent = "¡Sprint Finalizado!";
            }
        }, 15000);
    });
});
