**Objetivo**
- Eliminar recortes y desbordes, usando todo el ancho útil en desktop/tablet/móvil, especialmente en el juego Role Matching y vistas modales.

**Causas detectadas**
- body con height: 100vh y overflow: hidden bloquea scroll y oculta desbordes [main.css](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/css/main.css#L90-L97).
- main-content con padding lateral grande y sin min-width: 0 dentro de un flex [main.css](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/css/main.css#L351-L359).
- Sidebar fija a 280px reduce ancho útil en medianas [main.css](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/css/main.css#L117-L126).
- Layout del Role Matching: columnas sin minmax(0, …) y textos largos en tarjetas [main.css](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/css/main.css#L892-L900) y [main.css](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/css/main.css#L923-L939).

**Cambios propuestos (CSS)**
- Layout base:
  - body: reemplazar por overflow-x: hidden; overflow-y: auto; y usar min-height: 100vh en lugar de height: 100vh.
  - .app-layout: height → min-height: 100vh para permitir crecer verticalmente.
  - .main-content: añadir min-width: 0; y padding fluido: padding-inline: clamp(1rem, 4vw, 5rem); padding-block: clamp(2rem, 3vw, 3rem).
  - Sidebar: en <=768px aplicar width: clamp(72px, 22vw, 280px) o modo overlay si se desea máximo ancho de contenido.
- Role Matching:
  - .role-game-container: grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); para que ambas columnas se encojan sin desbordar.
  - .role-column.responsibilities/.roles: min-width: 0; para evitar overflow dentro del grid.
  - .draggable-item: reforzar corte de líneas con overflow-wrap: anywhere; y mantener hyphens: auto.
  - Breakpoints: mantener 1 columna en <=900px; subir el mínimo de card a 280px sólo en pantallas amplias.
- Modales de juego:
  - .modal-content--game: asegurar ancho útil con width: 98vw; max-width: 1200px; padding: clamp(1rem, 2vw, 1.5rem).
  - .modal-body: overflow-wrap: anywhere; para textos extensos.

**Ejemplos de reglas a aplicar**

```css
/* Base */
body { min-height: 100vh; overflow-x: hidden; overflow-y: auto; }
.app-layout { min-height: 100vh; }
.main-content { min-width: 0; padding-inline: clamp(1rem, 4vw, 5rem); padding-block: clamp(2rem, 3vw, 3rem); }

/* Sidebar móvil */
@media (max-width: 768px) { .sidebar { width: clamp(72px, 22vw, 280px); } }

/* Role Matching */
.role-game-container { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); }
.role-column.responsibilities, .role-column.roles { min-width: 0; }
.draggable-item { overflow-wrap: anywhere; }

/* Modal juego */
.modal-content--game { width: 98vw; max-width: 1200px; padding: clamp(1rem, 2vw, 1.5rem); }
.modal-body { overflow-wrap: anywhere; }
```

**Impacto esperado**
- El contenido se adapta al ancho disponible sin generar scroll horizontal.
- Los textos largos se parten y permanecen visibles en tarjetas/modales.
- Mejor aprovechamiento de ancho en el juego Role Matching y en vistas centrales.

**Verificación**
- Probar a 1280px, 1024px, 768px y 480px.
- Abrir Role Matching desde juegos y comprobar que:
  - No hay scroll horizontal;
  - Las responsabilidades se muestran completas;
  - Los roles no “aplastan” el contenido.
- Revisar secciones con tutorial-card y kanban para confirmar que no se recorta.

**Entrega**
- Actualización en css/main.css y css/components.css con las reglas anteriores.
- Validación visual en el servidor local ya abierto.

¿Apruebas que aplique estos cambios?