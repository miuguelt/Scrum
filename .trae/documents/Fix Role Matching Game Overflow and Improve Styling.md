I will improve the layout and styling of the "Role Matching" game to fix the overflow issue and enhance the user experience.

1.  **Modify `css/main.css`**:
    *   Refactor `.role-game-container` to use CSS Grid for better responsiveness.
    *   Change `.role-column.responsibilities` to a grid layout (multicolumn) to reduce vertical height and prevent "cutting off" at the bottom.
    *   Enhance `.draggable-item` styling with better colors, shadows, and touch targets.
    *   Improve `.role-drop-zone` styling for better visibility and interaction feedback.
    *   Add media queries to adjust padding of `.main-content` and stack the game layout on smaller screens.
    *   Ensure proper scrolling behavior for the game container.

This will ensure all cards are visible, the game fits within the screen better, and the visual style is modernized.