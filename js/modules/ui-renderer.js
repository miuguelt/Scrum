import { scrumTheory } from '../data/scrum-theory.js';
import { projectScenarios } from '../data/project-scenarios.js';
import { store } from './store.js';

export class UIRenderer {
    constructor() {
        this.theoryContainer = document.getElementById('theory-container');
        this.backlogContainer = document.getElementById('backlog-container');

        // Elementos de Dashboard
        this.dayDisplay = document.getElementById('sim-day');
        this.moraleDisplay = document.getElementById('sim-morale');
        this.velocityDisplay = document.getElementById('sim-velocity');
        this.xpDisplay = document.getElementById('xp-display');
        this.levelDisplay = document.getElementById('level-display');

        // Navigation
        this.navButtons = document.querySelectorAll('.nav-btn');
    }

    init() {
        this.renderTheory();
        this.renderBacklog();
        this.setupNavigation();
    }

    renderTheory() {
        if (!this.theoryContainer) return;
        this.theoryContainer.innerHTML = '';

        const createCard = (item, type) => `
            <article class="theory-card">
                <span class="theory-badge ${type}">${type}</span>
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">${item.icon}</div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;

        // Render sections including new VALUES
        scrumTheory.roles.forEach(i => this.theoryContainer.innerHTML += createCard(i, 'role'));
        scrumTheory.events.forEach(i => this.theoryContainer.innerHTML += createCard(i, 'event'));
        scrumTheory.artifacts.forEach(i => this.theoryContainer.innerHTML += createCard(i, 'artifact'));
        scrumTheory.values.forEach(i => this.theoryContainer.innerHTML += createCard(i, 'value'));
    }

    renderBacklog() {
        if (!this.backlogContainer) return;
        this.backlogContainer.innerHTML = '<h3>Product Backlog (Priorizado)</h3>';

        projectScenarios.backlog.forEach(item => {
            const html = `
                <div class="backlog-item">
                    <div>
                        <strong>#${item.id}</strong> ${item.userStory}
                    </div>
                    <div>
                        <span class="priority-${item.priority}">Prioridad: ${item.priority.toUpperCase()}</span>
                        <span> | Puntos: ${item.points}</span>
                    </div>
                </div>
            `;
            this.backlogContainer.innerHTML += html;
        });
    }

    setupNavigation() {
        this.navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const target = e.target.dataset.target;
                this.switchView(target);
            });
        });
    }

    switchView(targetId) {
        document.querySelectorAll('.view').forEach(el => {
            el.classList.add('hidden-view');
            el.classList.remove('active-view');
        });
        this.navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.target === targetId) btn.classList.add('active');
        });

        const activeSection = document.getElementById(targetId);
        if (activeSection) {
            activeSection.classList.remove('hidden-view');
            activeSection.classList.add('active-view');
        }
    }

    /**
     * REACTIVE UPDATES: Called by Store subscription
     */
    updateDashboard(state) {
        if (this.dayDisplay) this.dayDisplay.textContent = state.sprint.day;
        if (this.moraleDisplay) this.moraleDisplay.textContent = state.sprint.morale + '%';
        if (this.velocityDisplay) this.velocityDisplay.textContent = state.sprint.velocity;
    }

    updateUserProgress(userState) {
        if (this.xpDisplay) this.xpDisplay.textContent = userState.xp;
        if (this.levelDisplay) this.levelDisplay.textContent = userState.level;
    }
}
