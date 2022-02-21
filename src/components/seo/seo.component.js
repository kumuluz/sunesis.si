import React from "react";
import {Helmet, useI18next} from "gatsby-plugin-react-i18next";
import languages from "../../i18n/languages";

export function SEO({siteTitleId, canonical}) {
    const {t, i18n} = useI18next();
    const locale = i18n.language;
    
    function buildSiteTitle() {
        if (typeof siteTitleId === "string") {
            return t(siteTitleId);
        } else {
            return siteTitleId.map(id => {
                return t(id);
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
