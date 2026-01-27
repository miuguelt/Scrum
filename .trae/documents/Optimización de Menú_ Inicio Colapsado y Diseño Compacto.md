Voy a realizar las siguientes mejoras para optimizar el menú lateral:

1.  **Inicio Colapsado**: Modificaré el `index.html` para que el menú inicie cerrado por defecto, maximizando el espacio para el contenido desde el principio.

2.  **Optimización Vertical (Modo Expandido)**: Ajustaré los estilos CSS (`css/main.css`) para compactar el menú verticalmente cuando está abierto, reduciendo la necesidad de hacer scroll. Los cambios específicos incluyen:
    *   Reducir el margen inferior del encabezado (`sidebar-header`) de `2.5rem` a `1.5rem`.
    *   Reducir el espacio entre grupos de navegación (`nav-group`) de `2rem` a `1.2rem`.
    *   Hacer los botones (`nav-item`) más compactos, reduciendo su relleno vertical y el espacio entre ellos.
    *   Ajustar los títulos de las secciones para que ocupen menos altura.

Estos cambios harán que el menú sea más denso y eficiente, permitiendo ver más opciones sin perder claridad.