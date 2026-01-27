Para mejorar el aprovechamiento del espacio en la pantalla, implementaré un **Menú Lateral Colapsable (Sidebar)**. Esto permitirá al usuario ocultar el texto del menú y dejar solo los iconos cuando necesite más espacio para el contenido principal (especialmente útil para el Simulador y los diagramas).

### Plan de Implementación:

1.  **Modificar `index.html`**:
    *   Agregar un botón de "hamburguesa" (`☰`) o flecha en el encabezado del menú para alternar el estado.
    *   Estandarizar los elementos del menú (`.nav-item`) agregando iconos (emojis para mantener el estilo actual) y separando el texto en un `span` para poder ocultarlo fácilmente.

2.  **Actualizar `css/main.css`**:
    *   Crear la clase `.sidebar.collapsed` que reducirá el ancho del menú (de 280px a ~80px).
    *   En modo colapsado:
        *   Ocultar los textos de navegación, subtítulos y títulos de grupo.
        *   Centrar los iconos y el logo.
        *   Ajustar el padding.
    *   Estilar el nuevo botón de alternar (toggle).

3.  **Actualizar `js/app.js`**:
    *   Agregar la lógica para manejar el clic en el botón de alternar.
    *   Añadir la funcionalidad de alternar la clase `collapsed` en la barra lateral.

### Resultado Esperado:
El usuario podrá hacer clic en un botón para contraer el menú, ganando aproximadamente 200px de ancho extra para el contenido principal, lo que mejorará significativamente la experiencia en pantallas medianas y durante el uso del simulador.
