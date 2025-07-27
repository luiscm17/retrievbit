---
title: Guía de Estándares para Mensajes de Commit en Git
description: Aprende sobre las convenciones de mensajes de commit en Git, sus tipos comunes, estructura y cómo usarlos para mantener un historial de proyecto claro y consistente, facilitando la colaboración y el mantenimiento.
date: 2024-07-26
image: "@assets/blog/git-commit-guide.png"
imageAlt: Ilustración de la estructura de un mensaje de commit de Git
categories: [Desarrollo de Software, Control de Versiones]
author: Luis Condori
tags: [Git, Commit, Estándares, Conventional Commits, Desarrollo]
---


## Introducción: ¿Por qué son Importantes los Mensajes de Commit Estándar?

En el desarrollo de software, Git es una herramienta indispensable para el control de versiones. Sin embargo, tener un historial de commits claro y coherente es tan crucial como usar Git en sí mismo. Los mensajes de commit estandarizados, a menudo siguiendo convenciones como **Conventional Commits**, transforman tu historial de Git en una narrativa legible y útil.

Un buen mensaje de commit no solo describe *qué* se cambió, sino *por qué* y *cuál* es el impacto de ese cambio. Esto facilita la colaboración en equipo, la depuración, la generación automática de changelogs y el versionado semántico de tus releases. Si alguna vez te has preguntado el propósito de un commit antiguo, entenderás el valor de estas convenciones.

## Estructura General de un Mensaje de Commit

Un mensaje de commit estándar suele seguir una estructura definida que mejora su legibilidad y utilidad:

```bash
\<tipo\>(\<ámbito opcional\>): \<descripción concisa\>

[línea en blanco]

[cuerpo opcional detallado]

[línea en blanco]

[pie de página opcional (ej. referencias a issues, BREAKING CHANGES)]
```

### Reglas Clave

* **Línea de Asunto (Header):**
  * **Tipo:** Obligatorio. Indica la naturaleza del cambio (ej. `feat`, `fix`).
  * **Ámbito (Scope - opcional):** Proporciona contexto sobre dónde se realizó el cambio (ej. `feat(auth)`, `fix(ui)`).
  * **Descripción concisa:** Un resumen breve del cambio. Debe escribirse en **modo imperativo** (como una orden: "añadir", "arreglar", no "añadido", "arregló"). No debe terminar con punto y su longitud ideal es de hasta 50 caracteres para una lectura rápida.

* **Cuerpo (Body - opcional):**
  * Separado del asunto por una línea en blanco.
  * Proporciona una explicación más detallada de *por qué* se hizo el cambio y *qué* hace, no necesariamente *cómo* (eso está en el código).
  * Se recomienda que las líneas no excedan los 72 caracteres para una mejor legibilidad en diferentes herramientas de Git.

* **Pie de página (Footer - opcional):**
  * Separado del cuerpo por una línea en blanco.
  * Se usa para metadatos, como referencias a problemas (ej. `Fixes #123`) o para indicar cambios importantes (`BREAKING CHANGE: ...`).

---

## Tipos de Commit Comunes y su Uso

Aquí tienes un listado de los tipos de commit más utilizados y su significado, cuándo usarlos y ejemplos concretos:

### `feat` (feature)

* **Descripción:** Introduce una **nueva funcionalidad** o característica en el código.
* **Cuándo usar:** Cuando añades algo nuevo que no existía antes, como una nueva página, una funcionalidad de usuario, una API, etc.
* **Ejemplo:** `feat: add user login functionality`

### `fix` (fix)

* **Descripción:** Corrige un **error (bug)** en el código.
* **Cuándo usar:** Cuando resuelves un problema que afectaba el comportamiento esperado de la aplicación o causaba un mal funcionamiento.
* **Ejemplo:** `fix: correct validation error on contact form`

### `refactor` (refactor)

* **Descripción:** Reestructuración o refactorización del código que **no cambia la funcionalidad externa** ni corrige un bug. Mejora la estructura interna, la legibilidad o el mantenimiento.
* **Cuándo usar:** Cuando reorganizas archivos, renombras variables, simplificas la lógica sin alterar el comportamiento visible.
* **Ejemplo:** `refactor: simplify nested loop for data processing`

### `docs` (documentation)

* **Descripción:** Cambios que afectan únicamente a la **documentación**.
* **Cuándo usar:** Cuando actualizas archivos `README`, comentarios en el código, guías de uso, etc.
* **Ejemplo:** `docs: update installation instructions in README`

### `chore` (chore)

* **Descripción:** Tareas de mantenimiento de rutina que **no modifican el código fuente o de prueba** de la aplicación, ni corrigen un bug o añaden una característica.
* **Cuándo usar:** Actualización de dependencias menores, limpieza de archivos temporales, cambios en la configuración de herramientas de desarrollo (ESLint, Prettier), cambios en `.gitignore`.
* **Ejemplo:** `chore(deps): update npm packages to latest versions`

### `style` (style)

* **Descripción:** Cambios que afectan el **estilo del código** (formato, espacios en blanco, punto y coma, sangría) sin alterar la lógica o el comportamiento.
* **Cuándo usar:** Cuando ejecutas un formateador de código, arreglas la sangría, quitas espacios en blanco innecesarios.
* **Ejemplo:** `style: format code according to linting rules`

### `test` (test)

* **Descripción:** Cambios relacionados con la **adición, modificación o eliminación de pruebas**.
* **Cuándo usar:** Cuando escribes nuevas pruebas unitarias, de integración, o corriges pruebas existentes.
* **Ejemplo:** `test: add unit tests for new authentication module`

### `perf` (performance)

* **Descripción:** Cambios que **mejoran el rendimiento** de la aplicación.
* **Cuándo usar:** Cuando optimizas algoritmos, reduces el tamaño del bundle, mejoras la velocidad de carga.
* **Ejemplo:** `perf: optimize image loading for faster rendering`

### `build` (build)

* **Descripción:** Cambios que afectan el **sistema de construcción** o las dependencias externas (ej. herramientas de construcción, librerías, versiones).
* **Cuándo usar:** Cuando actualizas configuraciones de Webpack, Babel, o añades/quitas dependencias que afectan el proceso de construcción.
* **Ejemplo:** `build: update webpack configuration`

### `ci` (continuous integration)

* **Descripción:** Cambios en la configuración o scripts de **integración continua**.
* **Cuándo usar:** Cuando modificas archivos de configuración de CI/CD (GitHub Actions, GitLab CI, Jenkins).
* **Ejemplo:** `ci: add new step to deploy pipeline`

---

## Beneficios de Adoptar Estándares

Adoptar estos estándares en tus mensajes de commit aporta múltiples beneficios a tu proyecto y a tu equipo:

* **Historial de Proyecto Legible:** Facilita la comprensión del historial del proyecto para cualquier desarrollador, incluso meses después.
* **Facilita la Colaboración:** Los miembros del equipo pueden entender rápidamente el propósito de cada cambio.
* **Generación Automatizada de Changelogs:** Herramientas pueden generar automáticamente listas de cambios para cada nueva versión del software.
* **Versionado Semántico (Semantic Versioning):** Los tipos de commit como `feat` y `fix` pueden usarse para determinar automáticamente los números de versión (ej. `patch`, `minor`, `major`).
* **Depuración Simplificada:** Es más fácil encontrar el commit que introdujo un error si los mensajes son claros y descriptivos.

Al integrar estas prácticas en tu flujo de trabajo de Git, estarás construyendo un historial de proyecto más robusto, organizado y fácil de mantener.
