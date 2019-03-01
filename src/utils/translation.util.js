import {getTranslations} from "../i18n/get-translations";
import {IntlProvider} from "react-intl";

const messages = getTranslations();

export class TranslationUtil {

    static __createContext(locale) {
        if (!TranslationUtil.intl) {
            TranslationUtil.intl = {}
        }
        if (!TranslationUtil.intl[locale]) {
            const intlProvider = new IntlProvider({
                locale: locale,
                messages: messages[locale]
            });
            const { intl } = intlProvider.getChildContext();
            TranslationUtil.intl[locale] = intl;
        }
        return TranslationUtil.intl[locale];
    }

    static translate(locale, translateId, namespace) {
        if (!locale) {
            return translateId;
        }
        const intl = TranslationUtil.__createContext(locale);
        if (namespace) {
            translateId = namespace + "." + translateId;
        }
        return intl.formatMessage({id: translateId});
    }

}
