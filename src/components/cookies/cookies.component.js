import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./cookies.component.scss";

@translate("translations")
export class CookiesComponent extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
        this.STORAGE_NAME = "COOKIES_AGREED";
        this.acceptCookies = this.acceptCookies.bind(this);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            show: !this.cookiesAreAccepted()
        });
    }

    cookiesAreAccepted() {
        const stored = JSON.parse(localStorage.getItem(this.STORAGE_NAME));
        return stored !== null ? stored : false;
    }

    acceptCookies() {
        localStorage.setItem(this.STORAGE_NAME, JSON.stringify(true));
        this.setState({
            show: false
        })
    }

    render() {
        const {t} = this.props;
        const clazz = this.state.show ? "sun-cookies-component" : "accepted-cookies sun-cookies-component";
        return (
            <div className={clazz}>
                <div className="content">
                    <div>{t("site.cookie-warning")}</div>
                    <button className="btn btn-primary" onClick={this.acceptCookies}>{t("site.cookie-consent")}</button>
                </div>
            </div>
        );
    }
}
