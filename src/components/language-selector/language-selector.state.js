import { useState } from "react";
import anime from "animejs";
import { useI18next } from "gatsby-plugin-react-i18next";

export function useLanguageState() {
  const { t, i18n, changeLanguage } = useI18next("language");

  const [showDropdown, setShowDropdown] = useState(false);

  return {
    t,
    language: i18n.language,
    showDropdown,
    toggleLanguage: function (lang) {
      setShowDropdown(false);
      changeLanguage(lang);
    },
    toggleDropdown: function () {
      setShowDropdown((prev) => !prev);
    },
  };
}
