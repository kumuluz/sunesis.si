import {useI18next} from "gatsby-plugin-react-i18next";
import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {MEDIA_PHONE, returnScreenSize} from "../../../layouts/common";
import chevron from "../../../assets/images/services/chevron.svg";

function rotateChevron(opened) {
    if (opened) {
        return {transform: "rotate(90deg)"};
    }
    return {};
}

function getGridStyle(service) {
    const rightBorderShouldBeShown = returnScreenSize() > MEDIA_PHONE && service.meta.endsWith("left");
    
    return {
        padding: "20px",
        borderBottom: "1px solid #dadada",
        borderTop: "1px solid #dadada",
        borderLeft: "1px solid #dadada",
        borderRight: ( rightBorderShouldBeShown ? "0" : "1px solid #dadada")
    };
}

export function ServiceFullListMultilevelItem({item}) {
    const {t} = useI18next("services");
    const [opened, toggleOpened] = useState(false);
    
    function changeState() {
        toggleOpened(prevState => !prevState);
    }
    
    return (
        <li>
            <div className="flc-title" onClick={changeState}>
                <div className="caret">
                    <img src={chevron} alt="chevron" style={rotateChevron(opened)}/>
                </div>
                <div className="title">
                    {t(item.title)}
                </div>
            </div>
            <div
                className={opened ? 'flc-desc changeable-content' : 'flc-desc skrito changeable-content'}>
                {t(item.description)}
            </div>
            <div className={opened ? 'flc-multilist' : 'flc-multilist skrito'}>
                {item.services && item.services.map((service, j) => (
                    <div key={j} className="table-elem" style={getGridStyle(service)}>
                        <h4>
                            {t(service.title)}
                        </h4>
                        <ul>
                            {service.items.map((level1Item, k) => (
                                <li key={k} className="level-1-item">
                                    <div className="title">
                                        <div className="blue-box">
                                        </div>
                                        <div className="text">
                                            {t(level1Item.text)}
                                        </div>
                                    </div>
                                
                                    <ul>
                                        {level1Item.children.length > 0 && level1Item.children.map((level2Item, l) => (
                                            <li key={l} className="level-2-item">
                                                <div>
                                                    <div className="dark-blue-box"/>
                                                </div>
                                                <div className="level-2-text">
                                                    {t(level2Item)}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </li>
    );
}

ServiceFullListMultilevelItem.propTypes = {
    item: PropTypes.object,
};
