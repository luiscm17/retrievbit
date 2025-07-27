# Implementación de i18n en Perfobit

## Introducción

Este documento detalla la implementación de internacionalización (i18n) en el proyecto Perfobit, un fork de Astrogon. La implementación permite soportar múltiples idiomas en el sitio web, con un enfoque en la experiencia de usuario y el rendimiento.

## Configuración Básica

### 1. Configuración de Astro

La configuración principal de i18n se realiza en `astro.config.mjs`:

```javascript
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // ...otras configuraciones
});
```

### 2. Estructura de Archivos

```
src/
├── i18n/
│   ├── ui.ts         # Textos de la interfaz de usuario
│   └── utils.ts      # Utilidades para i18n
├── content/
│   ├── blog.en/
│   └── blog.es/      # Contenido en diferentes idiomas
└── pages/
    ├── en/
    │   └── [...].astro
    └── es/
        └── [...].astro
```

## Componentes Clave

### 1. Selector de Idioma

El componente `LanguageSwitcher` permite a los usuarios cambiar entre idiomas disponibles:

- Muestra el código del idioma actual
- Incluye una animación suave al desplegar las opciones
- Mantiene la ruta actual al cambiar de idioma

### 2. Header Internacionalizado

El componente `Header` ha sido mejorado para:

- Mostrar el menú de navegación en el idioma seleccionado
- Mantener el estado del menú móvil al cambiar de idioma
- Incluir transiciones suaves para una mejor experiencia de usuario

## Mejoras Implementadas

### 1. Persistencia de Estado

Se implementó `transition:persist-props` en el `Header` para mantener el estado del menú móvil durante la navegación, mejorando significativamente la experiencia de usuario en dispositivos móviles.

### 2. Optimización de Rutas

Las rutas se generan dinámicamente usando `getRelativeLocaleUrl`, asegurando que los enlaces siempre apunten a la versión correcta del idioma:

```typescript
{
  name: t("nav.about"),
  url: getRelativeLocaleUrl(lang, "/about"),
  key: "nav.about"
}
```

### 3. Mejoras de Rendimiento

- Carga perezosa de traducciones
- Generación estática de rutas para cada idioma
- Uso de `code-splitting` para cargar solo los textos necesarios

## Uso

### Agregar un nuevo idioma

1. Añadir el código del idioma en `astro.config.mjs`
2. Crear las traducciones en `src/i18n/ui.ts`
3. Añadir el contenido traducido en la carpeta correspondiente (ej: `content/blog.es/`)

### Traducir un componente

```typescript
import { useTranslations } from "@i18n/utils";

const t = useTranslations(Astro.url);

// En el JSX:
<h1>{t("welcome.title")}</h1>
```

## Consideraciones de Diseño

- Se mantuvo un espaciado consistente entre los elementos de navegación
- Se implementaron transiciones suaves para cambios de idioma
- El diseño es completamente responsivo y se adapta a diferentes tamaños de pantalla

## Solución de Problemas

### Las traducciones no se actualizan

1. Verificar que el idioma esté correctamente configurado en `astro.config.mjs`
2. Asegurarse de que las claves de traducción existan en `ui.ts`
3. Limpiar la caché del navegador

### Los enlaces no mantienen el idioma

Asegurarse de usar `getRelativeLocaleUrl` para generar las rutas:

```typescript
// Correcto
const url = getRelativeLocaleUrl(lang, "/about");

// Incorrecto
const url = `/${lang}/about`;
```

## Próximos Pasos

- [ ] Añadir más idiomas
- [ ] Implementar detección automática de idioma del navegador
- [ ] Añadir soporte para RTL (derecha a izquierda)

---

*Documentación actualizada el 26 de Julio de 2025*
