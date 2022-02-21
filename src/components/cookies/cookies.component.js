import React from "react";

import "./cookies.component.scss";
import {useCookieStorage} from "./cookies.storage";
import {useI18next} from "gatsby-plugin-react-i18next";


export function CookiesComponent() {
    const {t} = useI18next();
    
    const {displayCookies, agreeToCookies} = useCookieStorage();
    
    const clazz = displayCookies ? "sun-cookies-component" : "accepted-cookies sun-cookies-component";
    return (
        <div className={clazz}>
            <div className="content">
                <div>{t("site.cookie-warning")}</div>
                <button className="btn btn-info" onClick={() => agreeToCookies()}>{t("site.cookie-consent")}</button>
            </div>
        </div>
    );
}
