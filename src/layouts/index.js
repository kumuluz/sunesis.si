import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import {CookiesComponent, NavbarComponent} from '../components';

import slData from "react-intl/locale-data/sl";
import enData from "react-intl/locale-data/en";

import favicon from './favicon.ico';
import './index.scss';
import {IntlProvider, addLocaleData} from "react-intl";
import {getTranslations} from "../i18n/get-translations";
import {TranslationUtil} from "../utils/translation.util";

addLocaleData([...enData, ...slData]);

const messages = getTranslations();

export class Layout extends Component {

    static propTypes = {
        children: PropTypes.object,
        locale: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {children, locale} = this.props;

        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <div>
                    <Helmet
                        title={TranslationUtil.translate(locale, 'site.title')}
                        meta={[{name: 'description', content: TranslationUtil.translate(locale, 'site.description')}, {
                            name: 'keywords',
                            content: TranslationUtil.translate(locale, 'site.keywords')
                        }]}
                    >
                        <link rel="icon" href={favicon} type="image/x-icon"/>
                    </Helmet>
                    <NavbarComponent locale={locale}/>
                    <div>{children}</div>
                    <CookiesComponent locale={locale}/>
                </div>
            </IntlProvider>
        );
    }
}
