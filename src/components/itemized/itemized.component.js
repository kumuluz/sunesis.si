import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {FormattedMessage} from "react-intl";

import "./itemized.component.scss";

export class Itemized extends Component {
    static propTypes = {
        trKey: PropTypes.string,
        label: PropTypes.string,
        small: PropTypes.bool
    }
    static defaultProps = {
        small: false
    }
    
    constructor(props) {
        super(props);
    }
    
    renderContent() {
        const {trKey, label} = this.props;
        if (trKey) {
            return (<FormattedMessage id={trKey} />);
        }
        return (<span>{label}</span>);
    }
    
    render() {
        const {small} = this.props;
        
        return (
            <div className="itemized-component">
                <div className={small ? "box-container box-container-small" : "box-container"}>
                    <span className="box"/>
                </div>
                <div className={small ? "content content-small" : "content"}>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}
