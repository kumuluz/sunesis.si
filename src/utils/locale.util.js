import languages from "../i18n/languages";

export class LocaleUtil {

    static getLocalizedUrl(locale, url) {
        const localeKey = Object.keys(languages).find(key => key === locale);
        if (localeKey === null) {
            return url;
        }
        const lang = languages[localeKey];
        return lang.default ? url : `/${lang.path}${url}`;
    }

    static getCurrentLocale() {
        const foundLocale = LocaleUtil.__getLocale();
        if (foundLocale) {
            return foundLocale;
        }
        return Object.keys(languages).find(lang => languages[lang].default);
    }

    static resolveNewUrl(newLocale) {
        const paths = LocaleUtil.__getPaths();
        const foundLocale = LocaleUtil.__getLocale();
        if (foundLocale) {
            paths.shift();
        }
        return `/${languages[newLocale].default ? "" : newLocale + "/"}${paths.join("/")}`;
    }

    static __getLocale() {
        if (typeof window !== "undefined") {
            const paths = LocaleUtil.__getPaths();
            return Object.keys(languages).find(lang => languages[lang].locale === paths[0]);
        }
        return null;
    }

    static __getPaths() {
        if (typeof window !== "undefined") {
            let url = window.location.pathname;
            if (url.startsWith("/")) {
                url = url.substring(1);
            }
            if (url.endsWith("/")) {
                url = url.substring(0, url.length - 1);
            }
            return url.split("/");
        }
        return null;
    }
}
