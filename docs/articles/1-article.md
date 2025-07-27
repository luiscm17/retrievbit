# Estructura General de un Mensaje de Commit

Para ayudarte a entender los estándares de los mensajes de commit en Git, aquí tienes un listado de los tipos más comunes, sus descripciones y cuándo utilizarlos, basados en las convenciones populares como Conventional Commits.

Un mensaje de commit estándar suele tener la siguiente estructura:

```
<tipo>(<ámbito opcional>): <descripción concisa>

[línea en blanco]

[cuerpo opcional detallado]

[línea en blanco]

[pie de página opcional (ej. referencias a issues, BREAKING CHANGES)]
```

**Reglas clave:**

* **Línea de Asunto (Header):**
  * **Tipo:** Obligatorio, indica la naturaleza del cambio (ej. `feat`, `fix`).
  * **Ámbito (Scope - opcional):** Proporciona contexto sobre dónde se realizó el cambio (ej. `feat(auth)`, `fix(ui)`).
  * **Descripción concisa:** Un resumen breve del cambio, escrito en **modo imperativo** (como una orden: "añadir", "arreglar", no "añadido", "arregló"). No termina con punto y su longitud ideal es de hasta 50 caracteres.
* **Cuerpo (Body - opcional):**
  * Separado del asunto por una línea en blanco.
  * Proporciona una explicación más detallada de *por qué* se hizo el cambio y *qué* hace, no necesariamente *cómo* (eso está en el código).
  * Se recomienda que las líneas no excedan los 72 caracteres para una mejor legibilidad en diferentes herramientas de Git.
* **Pie de página (Footer - opcional):**
  * Separado del cuerpo por una línea en blanco.
  * Se usa para metadatos, como referencias a problemas (ej. `Fixes #123`) o para indicar cambios importantes (`BREAKING CHANGE: ...`).

### Tipos de Commit Comunes y su Uso

Aquí tienes los tipos de commit más utilizados y su significado:

* **`feat` (feature)**

  * **Descripción:** Introduce una **nueva funcionalidad** o característica en el código.
  * **Cuándo usar:** Cuando añades algo nuevo que no existía antes, como una nueva página, una funcionalidad de usuario, una API, etc.
  * **Ejemplo:** `feat: add user login functionality`

* **`fix` (fix)**

  * **Descripción:** Corrige un **error (bug)** en el código.
  * **Cuándo usar:** Cuando resuelves un problema que afectaba el comportamiento esperado de la aplicación o causaba un mal funcionamiento.
  * **Ejemplo:** `fix: correct validation error on contact form`

* **`refactor` (refactor)**

  * **Descripción:** Reestructuración o refactorización del código que **no cambia la funcionalidad externa** ni corrige un bug. Mejora la estructura interna, la legibilidad o el mantenimiento.
  * **Cuándo usar:** Cuando reorganizas archivos, renombras variables, simplificas la lógica sin alterar el comportamiento visible.
  * **Ejemplo:** `refactor: simplify nested loop for data processing`

* **`docs` (documentation)**

  * **Descripción:** Cambios que afectan únicamente a la **documentación**.
  * **Cuándo usar:** Cuando actualizas archivos `README`, comentarios en el código, guías de uso, etc.
  * **Ejemplo:** `docs: update installation instructions in README`

* **`chore` (chore)**

  * **Descripción:** Tareas de mantenimiento de rutina que **no modifican el código fuente o de prueba** de la aplicación, ni corrigen un bug o añaden una característica.
  * **Cuándo usar:** Actualización de dependencias menores, limpieza de archivos temporales, cambios en la configuración de herramientas de desarrollo (ESLint, Prettier), cambios en `.gitignore`.
  * **Ejemplo:** `chore(deps): update npm packages to latest versions`

* **`style` (style)**

  * **Descripción:** Cambios que afectan el **estilo del código** (formato, espacios en blanco, punto y coma, sangría) sin alterar la lógica o el comportamiento.
  * **Cuándo usar:** Cuando ejecutas un formateador de código, arreglas la sangría, quitas espacios en blanco innecesarios.
  * **Ejemplo:** `style: format code according to linting rules`

* **`test` (test)**

  * **Descripción:** Cambios relacionados con la **adición, modificación o eliminación de pruebas**.
  * **Cuándo usar:** Cuando escribes nuevas pruebas unitarias, de integración, o corriges pruebas existentes.
  * **Ejemplo:** `test: add unit tests for new authentication module`

* **`perf` (performance)**

  * **Descripción:** Cambios que **mejoran el rendimiento** de la aplicación.
  * **Cuándo usar:** Cuando optimizas algoritmos, reduces el tamaño del bundle, mejoras la velocidad de carga.
  * **Ejemplo:** `perf: optimize image loading for faster rendering`

* **`build` (build)**

  * **Descripción:** Cambios que afectan el **sistema de construcción** o las dependencias externas (ej. herramientas de construcción, librerías, versiones).
  * **Cuándo usar:** Cuando actualizas configuraciones de Webpack, Babel, o añades/quitas dependencias que afectan el proceso de construcción.
  * **Ejemplo:** `build: update webpack configuration`

* **`ci` (continuous integration)**

  * **Descripción:** Cambios en la configuración o scripts de **integración continua**.
  * **Cuándo usar:** Cuando modificas archivos de configuración de CI/CD (GitHub Actions, GitLab CI, Jenkins).
  * **Ejemplo:** `ci: add new step to deploy pipeline`

Adoptar estos estándares mejora la legibilidad del historial de tu proyecto, facilita la colaboración en equipo y puede incluso automatizar la generación de registros de cambios (changelogs) o el versionado semántico de tus releases.
