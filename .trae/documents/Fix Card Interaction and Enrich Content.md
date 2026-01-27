I will proceed with the following changes to fix the functionality of the "Ver más/menos" buttons and enrich the content as requested:

1. **Fix CSS for Card Details**:

   * In `css/components.css`, I will add a rule to hide `.card-details` by default within `.theory-card` elements. This ensures the "Ver más" button works correctly (toggling visibility) instead of the content being always visible or broken.

   * I will verify this doesn't conflict with `.steam-card` styles.

2. **Enrich Content in** **`guide-content.js`**:

   * I will update the **Explorar**, **Practicar**, and **Aplicar** sections in `js/data/guide-content.js` with more detailed and educational information about Scrum.

   * **Explorar**: Add specific mentions of Roles (PO, SM, Devs), Events (Planning, Daily, etc.), and Artifacts.

   * **Practicar**: Mention specific activities like "Poker Planning", "Role Matching", and "Quiz".

   * **Aplicar**: Elaborate on the simulation scenarios like handling impediments, team morale, and technical debt.

3. **Verification**:

   * The changes are purely frontend (HTML/CSS/JS data). I will verify the code structure ensures the `active` class toggling logic in `app.js` aligns with the new CSS rules.

