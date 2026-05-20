import React from "react";
import * as PropTypes from "prop-types";

import "./itemized.component.scss";
import {useI18next} from "gatsby-plugin-react-i18next";

export function Itemized(props) {
    const {trKey, label, small = false, boxColor} = props;
    const {t} = useI18next();
    
    const renderContent = () => {
        if (trKey) {
            return (<span>{t(trKey)}</span>);
        }
        return (<span>{label}</span>);
    };
    
    return (
        <div className="itemized-component">
            <div className={small ? "box-container box-container-small" : "box-container"}>
                <span className="box" style={boxColor ? { backgroundColor: boxColor } : {}} />
            </div>
            <div className={small ? "content content-small" : "content"}>
                {renderContent()}
            </div>
        </div>
    );
}

Itemized.propTypes = {
    trKey: PropTypes.string,
    label: PropTypes.string,
    small: PropTypes.bool,
    boxColor: PropTypes.string
}
