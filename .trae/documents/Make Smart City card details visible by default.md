I will make the information in the "Smart City" cards (Engineering, Design, etc.) visible by default so that no clicks are required to view the details.

1.  **Modify `css/components.css`**:
    *   Update the `.steam-card .card-details` class to make the content always visible (`display: block`, `opacity: 1`) instead of hidden by default.
    *   This ensures the details (like "Soportes antivandálicos", "Alimentación solar", etc.) are shown immediately.

2.  **Modify `js/data/guide-content.js`**:
    *   Remove the instruction `(Clic en las tarjetas para ver detalle)` since it will no longer be necessary.
    *   Remove the `onclick="this.classList.toggle('active')"` attribute from the `.steam-card` elements to disable the expansion/collapse behavior, as the content will already be visible.
    *   This applies to all 5 cards: IA, IoT, MEC, UX, and DATA.

This change will allow all information to be visible at a glance as soon as the section is loaded.