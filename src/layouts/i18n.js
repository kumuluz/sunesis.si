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

import slTranslations from '../../static/locales/sl/translations.json';
import slLanguage from '../../static/locales/sl/language.json';
import slProducts from '../../static/locales/sl/products.json';
import slServices from '../../static/locales/sl/services.json';
import slCustomers from '../../static/locales/sl/customers.json';
import slAbout from '../../static/locales/sl/about.json';


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

    debug: false,

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

i18n.addResourceBundle('sl', 'translations', slTranslations);
i18n.addResourceBundle('sl', 'language', slLanguage);
i18n.addResourceBundle('sl', 'products', slProducts);
i18n.addResourceBundle('sl', 'services', slServices);
i18n.addResourceBundle('sl', 'customers', slCustomers);
i18n.addResourceBundle('sl', 'about', slAbout);

export default i18n;
