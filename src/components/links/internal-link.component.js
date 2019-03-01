import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {injectIntl, intlShape} from "react-intl";
import languages from "../../i18n/languages";
import {Link} from "gatsby";

class InternalLink extends Component {

    static propTypes = {
        to: PropTypes.string.isRequired,
        intl: intlShape.isRequired,
        children: PropTypes.PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    };

    render() {
        const {to, intl: {locale}, children, ...otherProps} = this.props;
        const path = languages[locale].default ? to : `/${locale}${to}`;
        return (
            <Link to={path} {...otherProps}>
                {children}
            </Link>
        );
    }
}

export default injectIntl(InternalLink);
