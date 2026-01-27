Voy a realizar las siguientes mejoras visuales y funcionales en el código CSS:

1.  **Modales Centrados y Estables:**
    *   Modificaré `css/styles.css` para ajustar la clase `.modal-content`, aumentando su ancho máximo a `650px` (actualmente 500px) para darle más aire al contenido.
    *   Añadiré la regla `body.modal-open { overflow: hidden; }` para evitar que el fondo se desplace cuando el modal está abierto.
    *   Aplicaré `scrollbar-gutter: stable;` en el `html` para reservar el espacio de la barra de desplazamiento y evitar el "salto" visual (ese movimiento molesto de la pantalla) al abrir/cerrar modales.

2.  **Mejora de Cards (Tarjetas):**
    *   Editaré `css/main.css` en la clase `.theory-nav-grid`. Cambiaré la configuración de la cuadrícula a `minmax(280px, 1fr)` (antes 200px) para que las tarjetas sean más anchas y legibles.
    *   Aumentaré el `gap` (espacio entre tarjetas) a `2rem` para separarlas mejor.
    *   En la clase `.theory-card`, aumentaré el `padding` a `2rem` y estableceré una `min-height` de `220px` para uniformizar su tamaño y hacerlas más elegantes.

3.  **Espaciado General (Layout):**
    *   Ajustaré los márgenes en `.guide-section` y el padding en `.glass-panel` dentro de `css/main.css` para dar una sensación de mayor amplitud y elegancia a toda la interfaz.

Estas acciones abordarán directamente tus peticiones sobre los modales, el tamaño de las cards y el espaciado general.