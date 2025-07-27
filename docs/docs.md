# 📚 Documentación del Proyecto Perfobit

## 📋 Tabla de Contenidos

- [Estructura del Proyecto](#estructura)
- [Configuración](#configuracion)
- [Componentes](#componentes)
- [Internacionalización](#internacionalizacion)
- [Estructura de Contenido](#contenido)
- [Características y Herramientas](#caracteristicas)
- [Despliegue](#despliegue)

## Estructura del Proyecto {#estructura}

```bash
perfobit/
├── .astro/               # Archivos de caché de Astro
├── .github/              # Configuración de GitHub (CI/CD, workflows)
├── docs/                 # Documentación del proyecto
├── node_modules/         # Dependencias de Node.js
├── public/               # Archivos estáticos (imágenes, fuentes, etc.)
├── src/
│   ├── assets/           # Recursos estáticos (SVG, imágenes)
│   ├── components/       # Componentes reutilizables
│   │   ├── about/       # Componentes específicos de la sección 'Acerca de'
│   │   ├── authors/     # Componentes para mostrar información de autores
│   │   ├── base/        # Componentes base (Header, Footer, etc.)
│   │   ├── blog/        # Componentes para el blog
│   │   ├── common/      # Componentes comunes reutilizables
│   │   ├── docs/        # Componentes para la documentación
│   │   ├── home/        # Componentes de la página de inicio
│   │   ├── index-cards/ # Componentes para tarjetas de índice
│   │   ├── poetry/      # Componentes para la sección de poesía
│   │   ├── portfolio/   # Componentes del portafolio
│   │   ├── recipes/     # Componentes para recetas
│   │   ├── search/      # Componentes de búsqueda
│   │   └── terms/       # Componentes para términos y condiciones
│   ├── config/          # Archivos de configuración
│   ├── content/         # Contenido del sitio (Markdown/MDX)
│   │   ├── en/         # Contenido en inglés
│   │   │   ├── about/    # Página "Acerca de" con información del autor/proyecto
│   │   │   ├── authors/  # Perfiles de autores con biografía y enlaces a sus publicaciones
│   │   │   ├── blog/     # Entradas de blog con soporte para categorías y etiquetas
│   │   │   ├── docs/     # Documentación técnica con estructura jerárquica
│   │   │   │   ├── characters/  # Documentación de personajes (razas, clases, trasfondos)
│   │   │   │   │   ├── races.md       # Razas jugables
│   │   │   │   │   ├── classes.md     # Clases de personaje
│   │   │   │   │   └── backgrounds.md # Trasfondos y orígenes
│   │   │   │   ├── the-arcane/  # Guías sobre magia y lo arcano
│   │   │   │   └── tutorials/   # Tutoriales paso a paso
│   │   │   ├── home/     # Contenido de la página de inicio
│   │   │   ├── index-cards/  # Contenido para tarjetas de índice (versión resumida)
│   │   │   ├── poetry/   # Colección de poemas con formato especializado
│   │   │   │   ├── love/      # Poemas de amor
│   │   │   │   ├── nature/    # Poemas sobre naturaleza
│   │   │   │   └── fantasy/   # Poesía fantástica
│   │   │   ├── portfolio/ # Proyectos y trabajos destacados
│   │   │   ├── tutorials/  # Tutoriales paso a paso
│   │   │   │   ├── appetizers/  # Entradas y aperitivos
│   │   │   │   ├── main-dishes/ # Platos principales
│   │   │   │   ├── desserts/    # Postres
│   │   │   │   └── special/     # Recetas especiales (sin gluten, veganas, etc.)
│   │   │   └── terms/    # Documentación legal
│   │   │       ├── privacy.md    # Política de privacidad
│   │   │       ├── cookies.md    # Uso de cookies
│   │   │       └── conditions.md # Términos y condiciones
│   │   └── es/         # Contenido completo en español
│   │       ├── about/    # Página "Acerca de" traducida
│   │       ├── authors/  # Perfiles de autores en español
│   │       ├── blog/     # Entradas de blog en español con categorías y etiquetas
│   │       ├── docs/     # Documentación técnica en español
│   │       │   ├── personajes/  # Documentación de personajes
│   │       │   ├── arcano/      # Guías sobre magia
│   │       │   └── tutoriales/  # Tutoriales en español
│   │       ├── home/     # Contenido de la página de inicio en español
│   │       ├── poesia/   # Colección de poemas en español
│   │       │   ├── amor/       # Poemas de amor
│   │       │   ├── naturaleza/ # Poemas sobre naturaleza
│   │       │   └── fantasia/   # Poesía fantástica
│   │       ├── portafolio/ # Proyectos en español
│   │       ├── tutorials/   # Tutoriales en español organizados por categorías
│   │       │   ├── entrantes/    # Entradas y aperitivos
│   │       │   ├── platos-fuertes/ # Platos principales
│   │       │   ├── postres/      # Postres
│   │       │   └── especiales/   # Recetas especiales
│   │       └── terminos/  # Documentación legal en español
│   │           ├── privacidad.md    # Política de privacidad
│   │           ├── cookies.md       # Uso de cookies
│   │           └── condiciones.md   # Términos y condiciones
│   ├── i18n/           # Archivos de internacionalización
│   │   ├── ui.ts       # Textos de la interfaz de usuario
│   │   └── utils.ts    # Utilidades para i18n
│   ├── lib/            # Utilidades y código compartido
│   ├── pages/          # Sistema de enrutamiento de la aplicación
│   │   ├── en/        # Rutas en inglés
│   │   │   ├── about.astro      # Página "Acerca de"
│   │   │   ├── authors/        # Páginas de autores
│   │   │   │   ├── [author].astro  # Perfil de autor individual
│   │   │   │   └── index.astro     # Listado de autores
│   │   │   ├── blog/           # Blog
│   │   │   │   ├── [entry].astro  # Entrada individual de blog
│   │   │   │   ├── categories/    # Categorías de blog
│   │   │   │   ├── tags/          # Etiquetas de blog
│   │   │   │   └── index.astro    # Listado de entradas
│   │   │   ├── docs/           # Documentación
│   │   │   │   └── [...path].astro # Rutas dinámicas para documentación
│   │   │   ├── poetry/         # Sección de poesía
│   │   │   │   ├── [entry].astro  # Poema individual
│   │   │   │   └── index.astro    # Listado de poemas
│   │   │   ├── tutorials/        # Tutoriales
│   │   │   │   ├── [entry].astro  # Tutorial individual
│   │   │   │   └── index.astro    # Listado de tutoriales
│   │   │   ├── index.astro     # Página de inicio
│   │   │   ├── index-cards.astro # Vista de tarjetas
│   │   │   ├── portfolio.astro # Portafolio
│   │   │   ├── search.astro    # Búsqueda
│   │   │   └── terms.astro     # Términos y condiciones
│   │   └── es/        # Rutas en español (misma estructura que /en/)
│   │       ├── acerca-de.astro    # Página "Acerca de"
│   │       ├── autores/          # Páginas de autores
│   │       ├── blog/             # Blog en español
│   │       ├── documentacion/    # Documentación
│   │       ├── poesia/           # Sección de poesía
│   │       ├── tutoriales/       # Tutoriales en español
│   │       ├── index.astro       # Página de inicio
│   │       ├── portafolio.astro  # Portafolio
│   │       └── terminos.astro    # Términos y condiciones
│   ├── styles/         # Estilos globales
│   └── types/          # Definiciones de TypeScript
├── .editorconfig       # Configuración del editor
├── .gitignore         # Archivos ignorados por Git
├── .markdownlint.json # Reglas de linting para Markdown
├── .prettierrc        # Configuración de Prettier
├── astro.config.mjs   # Configuración de Astro
├── package.json       # Dependencias y scripts
├── postcss.config.js  # Configuración de PostCSS
├── README.md         # Documentación principal
├── tailwind.config.js # Configuración de Tailwind CSS
└── tsconfig.json     # Configuración de TypeScript
```

## Configuración {#configuracion}

### `astro.config.mjs`

Configuración principal de Astro que incluye:

- 🌍 **Internacionalización (i18n)**
  - Soporte para múltiples idiomas (inglés/español)
  - Prefijos de ruta para cada idioma
  - Detección automática de idioma

- 🛠️ **Integraciones**
  - React para componentes interactivos
  - MDX para contenido enriquecido
  - Tailwind CSS para estilos
  - Sitemap para SEO

- 📝 **Procesamiento de Markdown**
  - Soporte para tablas de contenido
  - Fórmulas matemáticas con KaTeX
  - Resaltado de sintaxis
  - Enlaces de anclaje automáticos

### `src/content/config.ts`

Define las colecciones de contenido y sus esquemas de validación usando Zod.

### `tailwind.config.js`

Configuración de Tailwind CSS que incluye:

- Temas personalizados
- Colores personalizados
- Fuentes personalizadas
- Plugins de Tailwind

## Componentes {#componentes}

### Componentes Base (`src/components/base/`)

Componentes fundamentales utilizados en todo el sitio:

- **`Header.astro`**
  - Barra de navegación principal
  - Selector de idioma
  - Botón de búsqueda
  - Conmutador de tema

- **`Footer.astro`**
  - Enlaces de navegación secundarios
  - Información de derechos de autor
  - Enlaces a redes sociales
  - Selector de idioma

- **`ThemeSwitcher.astro`**
  - Alterna entre tema claro/oscuro
  - Persistencia de preferencias
  - Indicador visual del tema actual

- **`LanguageSwitcher.astro`**
  - Cambio de idioma
  - Indicador visual del idioma actual
  - Navegación conservando la página actual

### `src/components/search/`

Componentes para la funcionalidad de búsqueda:

- `Search.astro`: Componente principal de búsqueda
- `EntryLayout.astro`: Diseño para los resultados de búsqueda

## Internacionalización {#internacionalizacion}

### `src/i18n/`

- **`ui.ts`**
  - Textos traducidos de la interfaz
  - Mensajes del sistema
  - Etiquetas de formularios
  - Mensajes de error

- **`utils.ts`**
  - Funciones auxiliares para i18n
  - Formateo de fechas y números
  - Manejo de pluralización
  - Interpolación de variables

## 📂 Estructura de Contenido {#contenido}

### Organización de Archivos

El contenido se organiza en carpetas por idioma (`en/`, `es/`) y tipo de contenido. Cada tipo de contenido tiene su propia estructura de directorios y características específicas.

## Características y Herramientas {#caracteristicas}

### `src/content/`

Cada tipo de contenido soporta diferentes herramientas y características:

#### 📚 Documentación Técnica (`/docs/`)

- **Herramientas disponibles**:
  - ✍️ **Formato Markdown/MDX** completo
  - 📝 **Fórmulas matemáticas** con soporte LaTeX
  - 🎥 **Videos embebidos** (YouTube, Vimeo, etc.)
  - 📊 **Diagramas** con Mermaid
  - 💻 **Bloques de código** con resaltado de sintaxis
  - 📑 **Tablas de contenido** automáticas
  - 🔍 **Búsqueda** en el contenido
  - 📱 **Diseño responsive**
  - 🔗 **Enlaces internos** inteligentes

#### ✍️ Blog (`/blog/`)

- **Herramientas disponibles**:
  - 🏷️ **Categorías y etiquetas**
  - 📅 **Fechas de publicación**
  - 👥 **Autores múltiples**
  - 💬 **Sección de comentarios**
  - 📱 **Compartir en redes sociales**
  - 🖼️ **Imágenes optimizadas**
  - 📊 **Estadísticas de lectura**

#### 🍳 Tutoriales (`/tutorials/`)

- **Herramientas disponibles**:
  - ⏱️ **Tiempo de preparación y cocción**
  - 🍽️ **Porciones**
  - 📋 **Lista de ingredientes** interactiva
  - 👨‍🍳 **Instrucciones paso a paso**
  - 📸 **Galería de fotos**
  - 📱 **Modo de cocina** (pantalla siempre encendida)
  - 🖨️ **Versión para imprimir**

#### 📜 Poesía (`/poetry/`)

- **Herramientas disponibles**:
  - ✨ **Formato poético especializado**
  - 📖 **Modo lectura**
  - 🎧 **Audio de los poemas**
  - 📱 **Diseño tipográfico sensible**
  - 🔖 **Marcadores y favoritos**

#### 👥 Autores (`/authors/`)

- **Herramientas disponibles**:
  - 👤 **Perfiles personales**
  - 📚 **Bibliografía**
  - 🔗 **Redes sociales**
  - 📧 **Formulario de contacto**
  - 📊 **Estadísticas de publicaciones**

#### 🖼️ Portafolio (`/portfolio/`)

- **Herramientas disponibles**:
  - 🖼️ **Galería de proyectos**
  - 🎞️ **Vista previa en vivo**
  - 📊 **Habilidades técnicas**
  - 📱 **Filtros por categoría**
  - 🔗 **Enlaces a proyectos**

### Características Comunes a Todas las Páginas

- 🌍 **Soporte multilingüe** (inglés/español)
- 🎨 **Temas claros/oscuros**
- 🔍 **Búsqueda global**
- 📱 **Diseño responsive**
- ⚡ **Carga ultrarrápida**
- 🔒 **Seguridad mejorada**
- 🌐 **SEO optimizado**
- ♿ **Accesibilidad WCAG**

### Uso de Componentes Personalizados

```markdown
<Componente>
  Contenido personalizado
</Componente>
```

- **Nota**: Los componentes disponibles pueden variar según el tipo de contenido.
- **Soporte**: La mayoría de los componentes son personalizables mediante props.
- **Extensibilidad**: Se pueden crear nuevos componentes según sea necesario.

## Estilos {#estilos}

### `src/styles/`

- `global.css`: Estilos globales
- `theme.css`: Variables de tema
- `prism-*.css`: Estilos para el resaltado de sintaxis

## Scripts de NPM

Los scripts principales definidos en `package.json` incluyen:

- `dev`: Inicia el servidor de desarrollo
- `build`: Construye el proyecto para producción
- `preview`: Previsualiza la compilación de producción
- `format`: Formatea el código
- `lint`: Ejecuta el linter

## Características y Funcionalidades para el Usuario

### Publicación de Contenido

#### Artículos y Publicaciones

- **Blog**: Publica artículos con soporte para categorías y etiquetas
- **Documentación**: Crea documentación técnica con estructura jerárquica
- **Recetas**: Compila guías paso a paso con formato especializado
- **Poesía**: Muestra contenido literario con un diseño limpio y minimalista

### Herramientas de Formato

#### Soporte para Contenido Enriquecido

- **Fórmulas Matemáticas**: Soporte para LaTeX con KaTeX
  - Fórmulas en línea: `$E = mc^2$`
  - Bloques de ecuaciones:

    ```latex
    $$
    \begin{align}
      \nabla \times \mathbf{B} -\, \frac1c\, \frac{\partial\mathbf{E}}{\partial t} & = \frac{4\pi}{c}\mathbf{j} \\
      \nabla \cdot \mathbf{E} & = 4 \pi \rho \\
      \nabla \times \mathbf{E}\, +\, \frac1c\, \frac{\partial\mathbf{B}}{\partial t} & = \mathbf{0} \\
      \nabla \cdot \mathbf{B} & = 0
    \end{align}
    $$
    ```

#### Multimedia

- **Videos Incrustados**: Soporte para YouTube y otros proveedores

  ```markdown
  <Youtube id="dQw4w9WgXcQ" title="Video de ejemplo" />
  ```

- **Galerías de Imágenes**: Muestra imágenes en formato de galería
- **Código Fuente**: Resaltado de sintaxis para múltiples lenguajes

  ```javascript
  function helloWorld() {
    console.log("¡Hola, mundo!");
  }
  ```

### Componentes Interactivos

#### Elementos de Interfaz

- **Acordeones**: Secciones plegables para contenido extenso

  ```markdown
  <Accordion title="Ver más">
    Contenido adicional aquí...
  </Accordion>
  ```

- **Pestañas**: Organiza contenido en secciones accesibles por pestañas

  ```markdown
  <Tabs>
    <Tab title="Primero">Contenido 1</Tab>
    <Tab title="Segundo">Contenido 2</Tab>
  </Tabs>
  ```

- **Notas y Alertas**: Destaca información importante

  ```markdown
  <Notice type="info">
    Esta es una nota informativa
  </Notice>
  ```

### Organización y Navegación

#### Estructura de Contenido {#contenido}

- **Navegación Jerárquica**: Menús organizados por categorías
- **Breadcrumbs**: Muestra la ruta de navegación actual
- **Búsqueda**: Búsqueda en tiempo real en todo el contenido
- **Etiquetas y Categorías**: Clasificación avanzada de contenido
- **Contenido Relacionado**: Sugerencias automáticas de contenido similar

### Personalización

#### Temas y Estilos

- **Modo Claro/Oscuro**: Cambio automático según preferencias del sistema
- **Efecto Vidrio Esmerilado**: Opción para un diseño moderno con transparencias
- **Tipografía Personalizable**: Soporte para fuentes personalizadas
- **Esquema de Colores**: Fácil personalización de la paleta de colores

### Funcionalidades Avanzadas

#### Optimización

- **Rendimiento**: Carga rápida gracias a la generación estática
- **SEO Mejorado**: Metadatos optimizados para motores de búsqueda
- **Accesibilidad**: Compatible con estándares WCAG
- **Multilingüe**: Soporte completo para múltiples idiomas

#### Compartición Social

- **Botones de Compartir**: Integración con redes sociales
- **Tarjetas de Enlace Enriquecidas**: Vista previa optimizada al compartir enlaces

## Despliegue {#despliegue}

### Configuración de Cloudflare Pages

El proyecto está optimizado para desplegarse en Cloudflare Pages con la siguiente configuración:

- **Generación de Sitemap**
  - Actualización automática en cada despliegue
  - Soporte para múltiples idiomas
  - Priorización de páginas

- **Rendimiento**
  - Pre-renderizado de rutas estáticas
  - Caché inteligente
  - Compresión de activos

- **Características Avanzadas**
  - Server-Side Rendering (SSR) bajo demanda
  - Redirecciones configurables
  - Manejo de errores personalizado
  - Variables de entorno seguras

### Pasos para el Despliegue

1. Conecta tu repositorio a Cloudflare Pages
2. Configura las variables de entorno necesarias
3. Establece el comando de construcción: `npm run build`
4. Define el directorio de salida: `dist`
5. Configura el dominio personalizado si es necesario

### Variables de Entorno Requeridas

```env
SITE_URL=https://tudominio.com
NODE_VERSION=18
```

### Configuración Recomendada

- **Plan**: Pro (para SSR y mayores límites)
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Root Directory**: `/` (raíz del proyecto)
- **Environment Variables**: Configurar según necesidad

### Monitoreo y Analíticas

- Integración con Google Analytics
- Errores en tiempo real
- Métricas de rendimiento
- Alertas personalizables

---
