import React, {Component} from "react";
import Helmet from "react-helmet";
import * as PropTypes from "prop-types";
import {injectIntl, intlShape} from "react-intl";
import languages from "../../i18n/languages";


class SEO extends Component {

    static propTypes = {
        siteTitleId: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
        locale: PropTypes.string,
        canonical: PropTypes.string,
        intl: intlShape.isRequired
    };

    constructor(props) {
        super(props);
    }

    buildSiteTitle() {
        const {siteTitleId, intl} = this.props;
        if (typeof siteTitleId === "string") {
            return intl.formatMessage({id: siteTitleId});
        } else {
            return siteTitleId.map(id => {
                return intl.formatMessage({id: id});
            }).join(" - ");
        }
    }

    buildCanonicalLink() {
        const {canonical, locale} = this.props;
        const path = languages[locale].default ? canonical : `/${locale}${canonical}`;
        return `https://sunesis.si${path}`;
    }

    render() {
        const {locale, canonical} = this.props;
        const siteTitle = this.buildSiteTitle();
        return (
            <Helmet title={siteTitle} htmlAttributes={{lang: locale}}>
                {canonical && (
                    <link rel="canonical" href={this.buildCanonicalLink()}/>
                )}
            </Helmet>
        );
    }
}

export default injectIntl(SEO);
