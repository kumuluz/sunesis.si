import React, {Component} from "react";
import PropType from "prop-types";

import "./checkbox-list.component.scss";
import checkMark from "../../assets/images/check-mark.svg";

export class CheckboxListComponent extends Component {

    static propTypes = {
        items: PropType.array,
        checkboxColor: PropType.string,
        title: PropType.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {items, checkboxColor, title} = this.props;

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
                                <img src={checkMark}/>
                            </span>
                            <span className="content">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
