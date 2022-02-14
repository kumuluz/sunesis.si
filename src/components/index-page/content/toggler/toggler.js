import React from "react";
import * as PropTypes from "prop-types";

import "./toggler.scss";
import {useI18next} from "gatsby-plugin-react-i18next";

export function Toggler({activeTab, clicked}) {
    const {t} = useI18next("index");
    
    function openTab(newTab) {
        clicked(newTab);
    }
    
    function getTogglerStyle(index) {
        if (index === activeTab) {
            return "selected underline"
        } else {
            return "underline"
        }
    }
    
    
    return (
        <div className="content-toggler-component">
            <div className="toggler-item">
                <div className="toggle-title" onClick={() => openTab(0)}>
                    {t("content.toggler.digitalization")}
                </div>
                <div className={getTogglerStyle(0)}/>
            </div>
            <div className="toggler-item">
                <div className="toggle-title" onClick={() => openTab(1)}>
                    {t("content.toggler.development")}
                </div>
                <div className={getTogglerStyle(1)}/>
            </div>
            <div className="toggler-item">
                <div className="toggle-title" onClick={() => openTab(2)}>
                    {t("content.toggler.knowledge-transfer")}
                </div>
                <div className={getTogglerStyle(2)}/>
            </div>
        </div>
    );
}

Toggler.propTypes = {
    activeTab: PropTypes.number,
    clicked: PropTypes.func
};
