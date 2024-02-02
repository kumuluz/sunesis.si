import React from "react";
import {Helmet, useI18next} from "gatsby-plugin-react-i18next";
import languages from "../../i18n/languages";

export function SEO({siteTitleId, canonical, translateSiteTitle = true}) {
    const {t, i18n} = useI18next();
    const locale = i18n.language;
    
    function conditionalTr(id) {
        if (translateSiteTitle) {
            return t(id);
        }
        return id;
    }
    
    function buildSiteTitle() {
        if (typeof siteTitleId === "string") {
            return conditionalTr(siteTitleId);
        } else {
            return siteTitleId.map(id => {
                return conditionalTr(id);
            }).join(" - ");
        }
    }
    
    function buildCanonicalLink() {
        const path = languages[locale].default ? canonical : `/${locale}${canonical}`;
        return `https://sunesis.si${path}`;
    }
    
    return (
        <Helmet title={buildSiteTitle()} htmlAttributes={{lang: locale}}>
            {canonical && (
                <link rel="canonical" href={buildCanonicalLink()}/>
            )}
        </Helmet>
    );
}
