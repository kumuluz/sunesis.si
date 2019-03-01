import slTranslations from "../../static/locales/sl/translations.json";
import slServices from "../../static/locales/sl/services.json";
import slProducts from "../../static/locales/sl/products.json";
import slLanguage from "../../static/locales/sl/language.json";
import slCustomers from "../../static/locales/sl/customers.json";
import slAbout from "../../static/locales/sl/about.json";

import enTranslations from "../../static/locales/en/translations.json";
import enServices from "../../static/locales/en/services.json";
import enProducts from "../../static/locales/en/products.json";
import enLanguage from "../../static/locales/en/language.json";
import enCustomers from "../../static/locales/en/customers.json";
import enAbout from "../../static/locales/en/about.json";

function flatten(data) {
    let result = {};

    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (let i = 0, l = cur.length; i < l; i++)
                recurse(cur[i], prop + "[" + i + "]");
            if (l === 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (let p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }

    recurse(data, "");
    return result;
}

export function getTranslations() {
    return {
        en: flatten({
            ...enTranslations,
            "services-page": {
                ...enServices
            },
            "products-page": {
                ...enProducts
            },
            languages: {
                ...enLanguage
            },
            "customers-page": {
                ...enCustomers
            },
            "about-page": {
                ...enAbout
            }
        }),
        sl: flatten({
            ...slTranslations,
            "services-page": {
                ...slServices
            },
            "products-page": {
                ...slProducts
            },
            languages: {
                ...slLanguage
            },
            "customers-page": {
                ...slCustomers
            },
            "about-page": {
                ...slAbout
            }
        })
    }
}
