import { ui, defaultLang, type UIKeys } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui | undefined) {
    const langSafe = lang && lang in ui ? lang : defaultLang;

    return function t(key: UIKeys) {
        return ui[langSafe][key] || ui[defaultLang][key];
    }
}