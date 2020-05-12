import React, {Component} from "react";
import * as PropTypes from "prop-types";

import "./toggler.scss";
import {FormattedMessage} from "react-intl";

export class Toggler extends Component {
    static propTypes = {
        activeTab: PropTypes.number,
        clicked: PropTypes.func
    }
    
    
    constructor(props) {
        super(props);
        this.openTab = this.openTab.bind(this);
    }
    
    openTab(newTab) {
        this.props.clicked(newTab);
    }
    
    getTogglerStyle(index) {
        if (index === this.props.activeTab) {
            return "selected underline"
        } else {
            return "underline"
        }
    }
    
    render() {
        return (
            <div className="content-toggler-component">
                <div className="toggler-item">
                    <div className="toggle-title" onClick={() => this.openTab(0)}>
                        <FormattedMessage id="index-page.content.toggler.digitalization"/>
                    </div>
                    <div className={this.getTogglerStyle(0)}/>
                </div>
                <div className="toggler-item">
                    <div className="toggle-title" onClick={() => this.openTab(1)}>
                        <FormattedMessage id="index-page.content.toggler.development"/>
                    </div>
                    <div className={this.getTogglerStyle(1)}/>
                </div>
                <div className="toggler-item">
                    <div className="toggle-title" onClick={() => this.openTab(2)}>
                        <FormattedMessage id="index-page.content.toggler.knowledge-transfer"/>
                    </div>
                    <div className={this.getTogglerStyle(2)}/>
                </div>
            </div>
        );
    }
    
}
