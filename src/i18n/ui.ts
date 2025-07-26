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
        'nav.recipes': 'Recipes',
        'nav.poetry': 'Poetry',
        'nav.index-cards': 'Index Cards',
        'nav.authors': 'Authors',
        'nav.portfolio': 'Portfolio',
        'button.search': 'Search',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.docs': 'Documentación',
        'nav.blog': 'Blog',
        'nav.recipes': 'Recetas',
        'nav.poetry': 'Poesía',
        'nav.index-cards': 'Fichas',
        'nav.authors': 'Autores',
        'nav.portfolio': 'Portafolio',
        'button.search': 'Buscar',
    },
} as const;

export type UIKeys = keyof typeof ui.en;