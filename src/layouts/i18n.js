import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from '../../static/locales/en/translations.json';
import enLanguage from '../../static/locales/en/language.json';
import enProducts from '../../static/locales/en/products.json';
import enServices from '../../static/locales/en/services.json';
import enCustomers from '../../static/locales/en/customers.json';
import enAbout from '../../static/locales/en/about.json';


import { reactI18nextModule } from 'react-i18next';

i18n
  .use(Backend)
  .use(Cache)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    load: 'languageOnly',
    preload: ['en'],
    fallbackLng: 'en',

    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded'
    }
  });

i18n.addResourceBundle('en', 'translations', enTranslations);
i18n.addResourceBundle('en', 'language', enLanguage);
i18n.addResourceBundle('en', 'products', enProducts);
i18n.addResourceBundle('en', 'services', enServices);
i18n.addResourceBundle('en', 'customers', enCustomers);
i18n.addResourceBundle('en', 'about', enAbout);

export default i18n;
