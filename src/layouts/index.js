import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import {CookiesComponent, NavbarComponent} from '../components';

import i18n from './i18n';

import './index.scss';

import favicon from './favicon.ico';

@translate()
export default class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func,
    t: PropTypes.func
  };

  constructor(props) {
    super(props);
    translate.setI18n(i18n);
  }

  render() {
    const { children, t } = this.props;

    return (
      <div>
        <Helmet
          title={t('site.title')}
          meta={[{ name: 'description', content: t("site.description") }, { name: 'keywords', content: t("site.keywords") }]}
        >
          <link rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <NavbarComponent />
        <div>{children()}</div>
        <CookiesComponent/>
      </div>
    );
  }
}
