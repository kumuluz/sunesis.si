import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import anime from 'animejs';

import './language-selector.scss';
import languageIcon from './language-select.svg';
import languageIconDark from './language-select-dark.svg';
import dropdownIcon from './dropdown-icon.svg';

@translate('language')
export class LanguageSelector extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
    compact: PropTypes.bool,
    dark: PropTypes.bool
  };

  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = {
      language: i18n.language,
      showDropdown: false
    };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, language: nextProps.i18n.language });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.showDropdown && this.state.showDropdown) {
      anime({
        targets: '.dropdown-selector',
        opacity: [0, 1],
        translateY: ['-50px', '0px']
      });
    }
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props;

    i18n.changeLanguage(lng);
    setTimeout(() => this.toggleDropdown(false), 0);
  }

  toggleDropdown(val) {
    if (typeof window === 'undefined') return;

    const newVal = val != null ? val : !this.state.showDropdown;

    const setNewState = () =>
      this.setState(state => {
        return {
          ...state,
          showDropdown: newVal
        };
      });

    if (newVal) {
      setNewState();
    } else {
      setTimeout(() => setNewState(), 250);
    }

    if (newVal) {
      anime({
        targets: '.dropdown-icon',
        rotate: '180deg'
      });
    } else {
      anime({
        targets: '.dropdown-icon',
        rotate: '0deg'
      });
      anime({
        targets: '.dropdown-selector',
        opacity: [1, 0],
        translateY: ['0px', '-50px']
      });
    }
  }

  render() {
    const { t, compact, dark } = this.props;
    const { language, showDropdown } = this.state;
    const languages = ['en', 'sl'];

    let lang = language;
    if (!languages.includes(language)) {
      lang = 'en';
      setTimeout(() => this.handleChangeLanguage(lang), 0);
    }

    return (
      <div className={`lang  ${compact && 'compact'}`} onClick={() => this.toggleDropdown()}>
        <img src={dark ? languageIconDark : languageIcon} /> {!compact && t('lang') + ' '}
        <div className="dropdown">
          {(!compact && <b>{t('langs.' + lang)}</b>) || lang}
          <img src={dropdownIcon} alt="" className="dropdown-icon" />
          {showDropdown && (
            <div className="dropdown-selector">
              {languages.map((lng, k) => (
                <div
                  key={k}
                  onClick={e => {
                    e.stopPropagation();
                    this.handleChangeLanguage(lng);
                  }}
                >
                  {t('langs.' + lng)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
