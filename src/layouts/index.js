import React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useI18next} from "gatsby-plugin-react-i18next";

import {CookiesComponent, Navbar} from '../components';

import favicon from './favicon.ico';
import './index.scss';

export function Layout({children}) {
    const {t} = useI18next();
    
    return (
        <div>
            <Helmet
                title={t('site.title')}
                meta={[{name: 'description', content: t('site.description')}, {
                    name: 'keywords',
                    content: t('site.keywords')
                }]}
            >
                <link rel="icon" href={favicon} type="image/x-icon"/>
            </Helmet>
            <Navbar/>
            <div>{children}</div>
            <CookiesComponent/>
        </div>
    );
    
}

Layout.propTypes = {
    children: PropTypes.object,
};
