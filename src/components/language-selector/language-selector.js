import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import anime from 'animejs';
import {navigate} from "gatsby";
import languages from "../../i18n/languages";

import './language-selector.scss';
import languageIcon from './language-select.svg';
import languageIconDark from './language-select-dark.svg';
import dropdownIcon from './dropdown-icon.svg';
import {LocaleUtil} from "../../utils/locale.util";
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../utils/translation.util";

export class LanguageSelector extends Component {
    static propTypes = {
        compact: PropTypes.bool,
        dark: PropTypes.bool,
        locale: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.locale,
            showDropdown: false
        };
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);

        if (!Object.keys(languages).includes(this.props.locale) && this.props.locale) {
            this.handleChangeLanguage("en")
        }
    }

    handleChangeLanguage(locale) {
        const url = LocaleUtil.resolveNewUrl(locale);
        navigate(url);
        this.setState({
            ...this.state,
            language: locale,
        });
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
        const {compact, dark, locale} = this.props;
        const {language, showDropdown} = this.state;

        let lang = language;

        return (
            <div className={`lang  ${compact && 'compact'}`} onClick={() => this.toggleDropdown()}>
                <img src={dark ? languageIconDark : languageIcon}/> {!compact && TranslationUtil.translate(locale, 'lang', 'languages') + ' '}
                <div className="dropdown">
                    {(!compact && <b>{TranslationUtil.translate(locale, 'languages.langs.' + lang)}</b>) || lang}
                    <img src={dropdownIcon} alt="" className="dropdown-icon"/>
                    {showDropdown && (
                        <div className="dropdown-selector">
                            {Object.keys(languages).map((lng, k) => (
                                <div key={k} onClick={e => {
                                    e.stopPropagation();
                                    this.handleChangeLanguage(lng);
                                }}>
                                    <FormattedMessage id={'languages.langs.' + lng}/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
