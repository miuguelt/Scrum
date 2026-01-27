## Objetivo
Mejorar la sección **3.2 Contextualización (Teoría)** para que explique el “por qué” y el “para qué” de Scrum con un caso maestro, ejemplos aplicados, recursos multimedia y accesos directos a herramientas del laboratorio.

## Dónde se cambia
- Contenido principal 3.2: [guide-content.js](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/js/data/guide-content.js#L308-L457)
- Contenidos de “Ver detalle” (Roles/Eventos/Artefactos): [guide-content.js](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/js/data/guide-content.js#L556-L662)
- Estilos para multimedia (grid de videos y nuevos wrappers): [main.css](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/css/main.css#L485-L616)
- Render de diagramas Mermaid (ya soportado): [app.js](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/js/app.js#L140-L201) y [renderDiagrams](file:///c:/Users/Miguel/Desktop/Nueva%20carpeta/Scrum/js/app.js#L721-L730)

## Cambios propuestos en 3.2 (contenido)
1. **Bloque “Objetivos de aprendizaje”**
   - Lista corta (3–5 objetivos) para orientar al aprendiz.
   - “Qué sabrás hacer al final” + “tiempo estimado”.

2. **Caso maestro mejor explicado (Eco‑Bot)**
   - Expandir el panel actual con:
     - contexto del problema (centro SENA, reciclaje, sensores, clasificación),
     - stakeholders (coordinación SENA, aprendices, mantenimiento),
     - restricción y riesgos (hardware, seguridad, precisión).
   - Corregir la inconsistencia del placeholder final que hoy menciona **Smart City** para que sea coherente con **Eco‑Bot**.

3. **Imágenes/infografías (sin dependencias externas)**
   - Añadir 2–3 visuales dentro de 3.2:
     - “Mapa del Scrum” (roles–eventos–artefactos)
     - “Flujo de Sprint” (de Product Backlog → Sprint Backlog → Incremento)
     - “Contexto Eco‑Bot” (mini arquitectura: sensores → IA → clasificación → reporte)
   - Implementación recomendada:
     - Crear SVGs propios en `assets/` (evita licencias y fallos de enlaces externos) y referenciarlos con `<img src="assets/...">`.

4. **Video de YouTube (curado y alineado a la teoría)**
   - Agregar un bloque multimedia dentro de 3.2 con 2–3 videos:
     - “Scrum en 10 minutos” (ya usado en 3.1; opcional repetir si aporta)
     - “Roles / Scrum Team” (enfocado a PO–SM–Developers)
     - “Eventos de Scrum” (Sprint Planning, Daily, Review, Retro)
   - Usar un contenedor responsive (sin height fijo) para que se vea bien en móvil.
   - Referencias candidatas:
     - YouTube: https://www.youtube.com/watch?v=nd52fxodJsk
     - Artículo de apoyo (roles): https://mrtorras.es/blog/roles-scrum/

5. **“Herramientas para practicar” (CTA a lo que ya existe)**
   - Añadir una grilla de tarjetas/botones para:
     - abrir “Centro de Juegos” y lanzar un quiz (usa `app.loadGame(...)` ya existente)
     - abrir el “Estimador Pro” (usa `app.loadEstimator(...)`)
     - ir al “Simulador Sprint” (usa `app.startSimulator()`)
     - ir al “Glosario” (vía click programático al nav-item de glosario o método helper pequeño).

## Ajustes en los “Detalles” (Roles/Eventos/Artefactos)
- Actualizar ejemplos que hoy mencionan **Smart City** dentro de:
  - `teoria-roles`
  - `teoria-eventos`
  - `teoria-artefactos`
- Objetivo: que al abrir “Ver Detalle” desde 3.2, todo mantenga el mismo caso maestro **Eco‑Bot**.

## Estilos (CSS)
- Añadir (o reutilizar) clases para:
  - **embeds responsive** (wrapper con `aspect-ratio: 16/9` y fallback)
  - una “media-card” (imagen + caption) consistente con glassmorphism
- Hacerlo en `css/main.css` donde ya existe `.video-grid`/`.video-card`.

## Verificación (después de aplicar cambios)
- Navegar a **3.2 Contextualización** y validar:
  - imágenes cargan sin 404
  - videos se adaptan a desktop/móvil
  - Mermaid renderiza correctamente
  - “Ver detalle” abre modales con títulos correctos
  - CTAs abren juegos/estimador/simulador sin errores en consola

## Alcance (para mantenerlo controlado)
- El foco es 3.2 y sus modales asociados.
- No se reestructura el resto de secciones (3.3/Simulador), salvo ajustes mínimos de coherencia si es necesario.
