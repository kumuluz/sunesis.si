import React, { useState, useEffect } from "react";
import * as PropTypes from "prop-types";
import languages from "../../i18n/languages";
import "./language-selector.scss";
import languageIcon from "./language-select.svg";
import languageIconDark from "./language-select-dark.svg";
import dropdownIcon from "./dropdown-icon.svg";
import { useLanguageState } from "./language-selector.state";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { MEDIA_TABLET, MEDIA_PHONE, returnScreenSize } from "../../layouts/common";

export function LanguageSelector({ compact, dark }) {
  const { t, language, showDropdown, toggleDropdown, toggleLanguage } = useLanguageState();

  const [screenSize, setScreenSize] = useState(0); // Default to 0 during SSR

  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== "undefined") {
      setScreenSize(returnScreenSize());

      const handleResize = () => {
        setScreenSize(returnScreenSize());
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Dropdown isOpen={showDropdown} toggle={toggleDropdown} className={`lang ${compact ? "compact" : ""}`}>
      <DropdownToggle tag="div" className="dropdown-toggle">
        <img
          src={screenSize > MEDIA_TABLET && dark ? languageIconDark : languageIcon}
          alt="Language Icon"
          className="language-icon"
        />
        {compact ? (
          <div className="dropdown-lang-compact">{language}</div>
        ) : (
          <div className="dropdown-lang">
            <span className="lang-text">{t("lang")} </span>
            <p>{t(`langs.${language}`)}</p>
          </div>
        )}
        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
      </DropdownToggle>
      <DropdownMenu right={screenSize > MEDIA_PHONE}>
        {Object.keys(languages).map((lng, k) => (
          <DropdownItem
            key={k}
            onClick={(e) => {
              e.stopPropagation();
              toggleLanguage(lng);
            }}
          >
            {t(`langs.${lng}`)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

LanguageSelector.propTypes = {
  compact: PropTypes.bool,
  dark: PropTypes.bool,
};
