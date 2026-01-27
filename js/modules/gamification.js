/**
 * Módulo de Gamificación.
 * Aplica principios de 'Serious Games' para motivar al estudiante.
 */
export class GamificationSystem {
    constructor() {
        this.xp = 0;
        this.level = "Novato";
        this.loadProgress();
    }

    /**
     * Carga el progreso desde localStorage para persistencia básica.
     */
    loadProgress() {
        const saved = localStorage.getItem('scrumMastery-progress');
        if (saved) {
            const data = JSON.parse(saved);
            this.xp = data.xp;
            this.level = this.calculateLevel(this.xp);
            this.updateUI();
        }
    }

    /**
     * Añade experiencia y verifica subida de nivel.
     * @param {number} amount - Cantidad de XP a sumar.
     */
    addXP(amount) {
        this.xp += amount;
        this.level = this.calculateLevel(this.xp);
        this.saveProgress();
        this.updateUI();
        this.showEffect(amount); // Feedback visual
    }

    calculateLevel(xp) {
        if (xp >= 1000) return "Scrum Master Legendario";
        if (xp >= 500) return "Agile Coach";
        if (xp >= 200) return "Practicante Scrum";
        return "Novato";
    }

    saveProgress() {
        localStorage.setItem('scrumMastery-progress', JSON.stringify({
            xp: this.xp
        }));
    }

    updateUI() {
        const xpDisplay = document.getElementById('xp-display');
        const levelDisplay = document.getElementById('level-display');
        if (xpDisplay) xpDisplay.textContent = this.xp;
        if (levelDisplay) levelDisplay.textContent = this.level;
    }

    /**
     * Pequeño efecto visual en la consola o UI (Feedback inmediato).
     */
    showEffect(amount) {
        console.log(`✨ ¡Ganaste +${amount} XP!`);
        // Aquí se podría implementar una animación CSS
        const progressEl = document.getElementById('user-progress');
        progressEl.classList.add('highlight');
        setTimeout(() => progressEl.classList.remove('highlight'), 500);
    }
}
