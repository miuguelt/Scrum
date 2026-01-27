/**
 * Tutorial Overlay Component
 * Provides a step-by-step introduction to the Scrum Guide.
 */
export const TutorialOverlay = {
    steps: [
        {
            target: '.sidebar',
            title: 'Navegación Principal',
            content: 'Aquí puedes moverte por las diferentes secciones de la guía: desde la teoría hasta los simuladores avanzados.'
        },
        {
            target: '.user-status',
            title: 'Tu Progreso',
            content: 'A medida que completes lecturas y retos, ganarás XP y subirás de nivel. ¡Demuestra que eres un Scrum Master de élite!'
        },
        {
            target: '.nav-group:last-child',
            title: 'Laboratorio Práctico',
            content: 'Aquí encontrarás el Centro de Juegos y el Simulador de Sprint. Es donde aplicarás lo aprendido en situaciones reales.'
        },
        {
            target: '.premium-item',
            title: 'Scrum Vision',
            content: 'Nuestro simulador más avanzado. Construye una Ciudad Inteligente gestionando sprints complejos.'
        }
    ],
    currentStep: 0,
    overlayEl: null,
    cardEl: null,
    highlightEl: null,
    rafReposition: 0,
    boundOnKeydown: null,
    boundScheduleReposition: null,

    init() {
        if (localStorage.getItem('tutorial_completed')) return;
        this.ensureOverlay();
        this.renderStep();
    },

    ensureOverlay() {
        const existing = document.getElementById('tutorial-overlay');
        if (existing) {
            this.overlayEl = existing;
            this.cardEl = existing.querySelector('.tutorial-card');
            this.highlightEl = existing.querySelector('.tutorial-highlight');
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'tutorial-overlay';
        overlay.className = 'tutorial-overlay-wrapper';
        overlay.setAttribute('role', 'presentation');

        overlay.innerHTML = `
            <div class="tutorial-card tutorial-cloud animate-fadeIn" role="dialog" aria-modal="true" aria-label="Tutorial de bienvenida">
                <div class="tutorial-header">
                    <div class="tutorial-title">
                        <h3 id="tutorial-title"></h3>
                        <p class="tutorial-subtitle" id="tutorial-subtitle"></p>
                    </div>
                    <span class="step-counter" id="tutorial-step"></span>
                </div>
                <div class="tutorial-body">
                    <p id="tutorial-content"></p>
                </div>
                <div class="tutorial-footer">
                    <button class="tutorial-btn ghost" id="skip-tutorial" type="button">Saltar</button>
                    <div class="tutorial-controls">
                        <button class="tutorial-btn secondary" id="prev-tutorial" type="button">Atrás</button>
                        <button class="tutorial-btn primary" id="next-tutorial" type="button"></button>
                    </div>
                </div>
            </div>
            <div class="tutorial-highlight" aria-hidden="true"></div>
        `;

        document.body.appendChild(overlay);
        this.overlayEl = overlay;
        this.cardEl = overlay.querySelector('.tutorial-card');
        this.highlightEl = overlay.querySelector('.tutorial-highlight');

        this.attachListeners();

        this.boundScheduleReposition = () => this.scheduleReposition();
        window.addEventListener('resize', this.boundScheduleReposition, { passive: true });
        document.addEventListener('scroll', this.boundScheduleReposition, { passive: true, capture: true });
    },

    renderStep() {
        const step = this.steps[this.currentStep];
        if (!step) return;

        const titleEl = this.overlayEl.querySelector('#tutorial-title');
        const subtitleEl = this.overlayEl.querySelector('#tutorial-subtitle');
        const stepEl = this.overlayEl.querySelector('#tutorial-step');
        const contentEl = this.overlayEl.querySelector('#tutorial-content');
        const nextBtn = this.overlayEl.querySelector('#next-tutorial');
        const prevBtn = this.overlayEl.querySelector('#prev-tutorial');

        titleEl.textContent = step.title;
        subtitleEl.textContent = 'Recorrido rápido para ubicarte';
        stepEl.textContent = `${this.currentStep + 1}/${this.steps.length}`;
        contentEl.textContent = step.content;

        prevBtn.disabled = this.currentStep === 0;
        prevBtn.style.visibility = this.currentStep === 0 ? 'hidden' : 'visible';

        nextBtn.textContent = this.currentStep === this.steps.length - 1 ? '¡Empezar!' : 'Siguiente';

        this.scheduleReposition(true);

        // Focus primary action for keyboard users
        setTimeout(() => nextBtn.focus(), 0);
    },

    scheduleReposition(alsoScroll = false) {
        if (this.rafReposition) cancelAnimationFrame(this.rafReposition);
        this.rafReposition = requestAnimationFrame(() => this.reposition(alsoScroll));
    },

    reposition(alsoScroll = false) {
        const step = this.steps[this.currentStep];
        if (!step) return;

        const target = document.querySelector(step.target);
        if (!target || !this.highlightEl || !this.cardEl) {
            this.centerCard();
            return;
        }

        if (alsoScroll) target.scrollIntoView({ behavior: 'smooth', block: 'center' });

        const rect = target.getBoundingClientRect();
        this.positionHighlight(rect);
        this.positionCard(rect);
    },

    positionHighlight(rect) {
        const pad = 8;
        this.highlightEl.style.top = `${Math.max(0, rect.top - pad)}px`;
        this.highlightEl.style.left = `${Math.max(0, rect.left - pad)}px`;
        this.highlightEl.style.width = `${Math.min(window.innerWidth, rect.width + pad * 2)}px`;
        this.highlightEl.style.height = `${Math.min(window.innerHeight, rect.height + pad * 2)}px`;
        this.highlightEl.style.borderRadius = `${Math.min(20, Math.max(12, rect.height * 0.12))}px`;
    },

    positionCard(targetRect) {
        // Measure after layout
        const padding = 14;
        const cardRect = this.cardEl.getBoundingClientRect();
        const cardW = cardRect.width || 360;
        const cardH = cardRect.height || 200;

        // Reset any previous centering transform
        this.cardEl.style.transform = 'none';

        const spaceRight = window.innerWidth - targetRect.right;
        const spaceLeft = targetRect.left;
        const spaceBottom = window.innerHeight - targetRect.bottom;
        const spaceTop = targetRect.top;

        let placement = 'bottom';
        if (spaceRight >= cardW + padding + 16) placement = 'right';
        else if (spaceLeft >= cardW + padding + 16) placement = 'left';
        else if (spaceBottom >= cardH + padding + 16) placement = 'bottom';
        else placement = 'top';

        const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
        let x = padding;
        let y = padding;

        if (placement === 'right') {
            x = targetRect.right + padding;
            y = clamp(targetRect.top + targetRect.height / 2 - cardH / 2, padding, window.innerHeight - cardH - padding);
            const arrowOffset = clamp(targetRect.top + targetRect.height / 2 - y, 26, cardH - 26);
            this.cardEl.style.setProperty('--arrow-offset', `${arrowOffset}px`);
        } else if (placement === 'left') {
            x = targetRect.left - padding - cardW;
            y = clamp(targetRect.top + targetRect.height / 2 - cardH / 2, padding, window.innerHeight - cardH - padding);
            const arrowOffset = clamp(targetRect.top + targetRect.height / 2 - y, 26, cardH - 26);
            this.cardEl.style.setProperty('--arrow-offset', `${arrowOffset}px`);
        } else if (placement === 'top') {
            x = clamp(targetRect.left + targetRect.width / 2 - cardW / 2, padding, window.innerWidth - cardW - padding);
            y = targetRect.top - padding - cardH;
            const arrowOffset = clamp(targetRect.left + targetRect.width / 2 - x, 26, cardW - 26);
            this.cardEl.style.setProperty('--arrow-offset', `${arrowOffset}px`);
        } else {
            x = clamp(targetRect.left + targetRect.width / 2 - cardW / 2, padding, window.innerWidth - cardW - padding);
            y = targetRect.bottom + padding;
            const arrowOffset = clamp(targetRect.left + targetRect.width / 2 - x, 26, cardW - 26);
            this.cardEl.style.setProperty('--arrow-offset', `${arrowOffset}px`);
        }

        // Keep inside viewport
        x = clamp(x, padding, window.innerWidth - cardW - padding);
        y = clamp(y, padding, window.innerHeight - cardH - padding);

        this.cardEl.dataset.placement = placement;
        this.cardEl.style.left = `${x}px`;
        this.cardEl.style.top = `${y}px`;
    },

    centerCard() {
        if (!this.cardEl) return;
        this.cardEl.dataset.placement = 'center';
        this.cardEl.style.left = '50%';
        this.cardEl.style.top = '50%';
        this.cardEl.style.transform = 'translate(-50%, -50%)';
    },

    attachListeners() {
        const skipBtn = this.overlayEl.querySelector('#skip-tutorial');
        const nextBtn = this.overlayEl.querySelector('#next-tutorial');
        const prevBtn = this.overlayEl.querySelector('#prev-tutorial');

        this.overlayEl.addEventListener('mousedown', (e) => {
            if (e.target !== this.overlayEl) return;
            if (!this.highlightEl) return this.close();

            const rect = this.highlightEl.getBoundingClientRect();
            const insideHighlight =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (!insideHighlight) this.close();
        });

        skipBtn.onclick = () => this.close();
        prevBtn.onclick = () => {
            if (this.currentStep > 0) {
                this.currentStep--;
                this.renderStep();
            }
        };
        nextBtn.onclick = () => {
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
                this.renderStep();
            } else {
                this.close();
            }
        };

        this.boundOnKeydown = (e) => {
            if (!this.overlayEl) return;
            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowRight' || e.key === 'Enter') nextBtn.click();
            if (e.key === 'ArrowLeft') prevBtn.click();
        };
        document.addEventListener('keydown', this.boundOnKeydown);
    },

    close() {
        if (this.rafReposition) cancelAnimationFrame(this.rafReposition);
        this.rafReposition = 0;

        if (this.boundOnKeydown) document.removeEventListener('keydown', this.boundOnKeydown);
        this.boundOnKeydown = null;

        if (this.boundScheduleReposition) {
            window.removeEventListener('resize', this.boundScheduleReposition);
            document.removeEventListener('scroll', this.boundScheduleReposition, true);
        }
        this.boundScheduleReposition = null;

        const overlay = document.getElementById('tutorial-overlay');
        if (overlay) overlay.remove();
        this.overlayEl = null;
        this.cardEl = null;
        this.highlightEl = null;

        localStorage.setItem('tutorial_completed', 'true');
    }
};
