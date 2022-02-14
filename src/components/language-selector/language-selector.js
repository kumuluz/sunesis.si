import React from 'react';
import * as PropTypes from 'prop-types';
import languages from "../../i18n/languages";

import './language-selector.scss';
import languageIcon from './language-select.svg';
import languageIconDark from './language-select-dark.svg';
import dropdownIcon from './dropdown-icon.svg';
import {useLanguageState} from "./language-selector.state";

export function LanguageSelector({compact, dark}) {
    const {t, language, showDropdown, toggleDropdown, toggleLanguage} = useLanguageState();
    return (
        <div className={`lang  ${compact && 'compact'}`} onClick={toggleDropdown}>
            <img
                src={dark ? languageIconDark : languageIcon}/> {!compact && t('lang') + ' '}
            <div className="dropdown">
                {(!compact && <b>{t('langs.' + language)}</b>) || language}
                <img src={dropdownIcon} alt="" className="dropdown-icon"/>
                {showDropdown && (
                    <div className="dropdown-selector">
                        {Object.keys(languages).map((lng, k) => (
                            <div key={k} onClick={e => {
                                e.stopPropagation();
                                toggleLanguage(lng);
                            }}>
                                {t('langs.' + lng)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

LanguageSelector.propTypes = {
    compact: PropTypes.bool,
    dark: PropTypes.bool
};
