// src/i18n/ui.ts

export const languages = {
    en: "English",
    es: "Español",
};

export const defaultLang = "en";

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.docs': 'Docs',
        'nav.blog': 'Blog',
        'nav.tutorials': 'Tutorials',
        'nav.concepts': 'Concepts',
        'nav.index-cards': 'Index Cards',
        'nav.authors': 'Authors',
        'nav.portfolio': 'Portfolio',
        'toc.title': 'Contents',
        'button.search': 'Search',
        'search.placeholder': 'Looking for something?',
        'search.noResults': 'We couldn`t find what you searched for. Try searching again.',
        'search.inputPlaceholder': 'search posts',
        'youtube.videoLoading': 'Video loading...',
        'youtube.suspenseLoading': 'Loading video...',
        '404.title': 'Page Not Found',
        '404.heading': 'Page not found',
        '404.message': 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        '404.backToHome': 'Back to Home',
        'header.menu.open': 'Menu Open',
        'header.menu.close': 'Menu Close',
        'blog.relatedPosts': 'Related Posts',
        'blog.categories': 'Categories',
        'blog.tags': 'Tags',
        'blog.page': 'Page',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.docs': 'Documentación',
        'nav.blog': 'Blog',
        'nav.tutorials': 'Tutoriales',
        'nav.concepts': 'Conceptos',
        'nav.index-cards': 'Fichas',
        'nav.authors': 'Autores',
        'nav.portfolio': 'Portafolio',
        'toc.title': 'Contenido',
        'button.search': 'Buscar',
        'search.placeholder': '¿Buscando algo?',
        'search.noResults': 'No pudimos encontrar lo que buscaste. Intenta de nuevo.',
        'search.inputPlaceholder': 'buscar publicaciones',
        'youtube.videoLoading': 'Cargando video...',
        'youtube.suspenseLoading': 'Cargando el video...',
        '404.title': 'Página No Encontrada',
        '404.heading': 'Página no encontrada',
        '404.message': 'La página que buscas podría haber sido eliminada, haber cambiado de nombre o no estar disponible temporalmente.',
        '404.backToHome': 'Volver al Inicio',
        'header.menu.open': 'Abrir Menú',
        'header.menu.close': 'Cerrar Menú',
        'blog.relatedPosts': 'Publicaciones Relacionadas',
        'blog.categories': 'Categorías',
        'blog.tags': 'Etiquetas',
        'blog.page': 'Página',
    },
} as const;

export const showDefaultLang = false;

export type UIKeys = keyof typeof ui.en;