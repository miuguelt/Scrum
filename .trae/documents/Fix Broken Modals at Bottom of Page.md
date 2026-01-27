I will fix the visibility issue of the "Evento del Sprint" and "Detalle" elements, which are currently appearing at the bottom of the page instead of functioning as hidden modals.

**Analysis:**
- The elements correspond to `<div id="decision-modal">` and `<div id="content-modal">` in `index.html`.
- These elements rely on CSS classes `.modal` and `.hidden` to be hidden by default and appear as overlays.
- These classes are missing from the active stylesheets (`css/main.css` and `css/components.css`), causing the elements to be rendered as normal blocks at the bottom of the page.

**Plan:**
1.  **Edit `css/main.css`**: Add the missing CSS definitions for `.modal`, `.hidden`, and `.modal.open`.
    - This will ensure the elements are hidden by default (`display: none`).
    - It will also style them correctly as fixed overlays (popups) when they are activated by the application logic.

**Proposed CSS to Add:**
```css
/* MODAL SYSTEM FIX */
.modal {
    position: fixed;
    inset: 0; /* top:0, left:0, right:0, bottom:0 */
    z-index: 2000;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.modal.open {
    opacity: 1;
    pointer-events: auto;
}

.modal.hidden {
    display: none !important;
}

/* Modal Header Layout */
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--glass-border);
}

.modal-close {
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-size: 1.2rem;
    cursor: pointer;
}
.modal-close:hover { color: var(--text-bright); }
```

This will solve the issue of them "occupying space" while preserving their functionality for the app.