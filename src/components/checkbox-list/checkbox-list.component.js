import React from "react";
import PropType from "prop-types";

import "./checkbox-list.component.scss";
import checkMark from "../../assets/images/check-mark.svg";

export function CheckboxListComponent({items, checkboxColor, title}) {
    const colorStyle = {backgroundColor: checkboxColor ? checkboxColor : "#367dbf"};
    return (
        <div className="checkbox-list-component">
            {title && (
                <div className="title">
                    {title}
                </div>
            )}
            <div className="list">
                {items.map((item, index) => (
                    <div className="checkbox-list-item" key={index}>
                            <span className="checkbox" style={colorStyle}>
                                <img src={checkMark} alt={title}/>
                            </span>
                        <span className="content">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

CheckboxListComponent.propTypes = {
    items: PropType.array,
    checkboxColor: PropType.string,
    title: PropType.string
};
