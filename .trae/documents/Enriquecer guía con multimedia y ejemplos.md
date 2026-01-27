## Objetivo
- Enriquecer la guía (especialmente la sección 3.3 Apropiación) con más explicación, ejemplos aplicados, recursos multimedia (YouTube), gráficos/diagramas y apoyo visual (imágenes), manteniendo el estilo actual.

## Alcance de Contenido
- Ampliar **3.3. Actividades de Apropiación (Smart City)** con:
  - Objetivos de aprendizaje (qué se espera lograr en 10–15 min).
  - Contexto del caso (stakeholders, restricciones, supuestos técnicos y métricas de éxito).
  - Actividad guiada paso a paso (de Backlog → Refinamiento → Estimación → DoR/DoD → propuesta técnica).
  - Plantillas y ejemplos: historia de usuario “Como/Quiero/Para”, criterios DADO/CUANDO/ENTONCES, y ejemplo de cómo “partir” una historia grande.
  - “Mini-entregables” para portafolio (qué evidencias escribir o capturar).

## Multimedia (YouTube)
- Insertar una sección “Videos recomendados” dentro de 3.3 (en grid), con embeds y descripciones por tema:
  - Refinamiento de Product Backlog: Ms6ZsOGeQH0, Z6cB4iJUDr8
  - Story Points / Planning Poker: O-D22kLYi2M, UZkm7_7nPac
  - DoR / DoD: t4vO65GRzR8, Utw8Ik8Y1BU
- Mantener consistencia visual con el resto de la guía (tarjetas, glass-panel, captions).

## Gráficos y Diagramas
- Agregar 2–4 diagramas adicionales (Mermaid) en 3.3, por ejemplo:
  - Mapa simple de stakeholders y flujo de valor.
  - Matriz Valor vs Esfuerzo (visual tipo cuadrante).
  - Arquitectura a alto nivel (extensión de la figura existente) y dependencias.
- Agregar 1–2 “mini-gráficos” ligeros en HTML/CSS (sin librerías) para KPIs del caso (cobertura, latencia objetivo, ahorro de agua, etc.).

## Imágenes y Recursos Visuales
- Incorporar imágenes de apoyo en 3.3:
  - Reutilizar [assets/city-blueprint.png] como cabecera/infografía del caso.
  - Crear 1–2 SVG locales simples (p. ej., “story-map” o “matriz valor-esfuerzo”) para evitar depender de URLs externas.

## Integración con Práctica (Laboratorio)
- Añadir botones/atajos desde 3.3 hacia retos ya existentes:
  - Refinement Ready, Estimación Fibonacci, DoD checklist y reto de planificación.
- Incluir una “ruta sugerida” (orden recomendado: leer → ver video → practicar → registrar evidencia).

## Ajustes de Estilos (CSS)
- Implementar estilos faltantes/estándar para embeds responsivos (clase `.responsive-embed`) y mejorar consistencia de `.video-grid`/`.video-card`.
- Añadir clases reutilizables para callouts, checklist y mini-gráficos sin romper el diseño actual.

## Archivos a Modificar/Crear
- Modificar:
  - c:\Users\Miguel\Desktop\Nueva carpeta\Scrum\js\data\guide-content.js (contenido 3.3)
  - c:\Users\Miguel\Desktop\Nueva carpeta\Scrum\css\main.css (embeds responsivos y utilidades visuales)
- Crear (si aplica):
  - c:\Users\Miguel\Desktop\Nueva carpeta\Scrum\assets\smart-city-story-map.svg
  - c:\Users\Miguel\Desktop\Nueva carpeta\Scrum\assets\smart-city-kpis.svg

## Validación
- Revisar visualmente la sección 3.3 en escritorio y móvil:
  - que no haya desbordes, que los iframes sean responsivos, que Mermaid renderice, y que las imágenes carguen.
- Confirmar que los modales de “Solución Técnica” siguen funcionando y que el backlog grid se renderiza igual.