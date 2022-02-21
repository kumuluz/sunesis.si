import {useState} from "react";
import anime from "animejs";
import {useI18next} from "gatsby-plugin-react-i18next";

export function useLanguageState() {
    const {t, i18n, changeLanguage} = useI18next("language");
    
    const [showDropdown, toggleDropdown] = useState(false);
    
    return {
        t,
        language: i18n.language,
        showDropdown,
        toggleLanguage: function(lang) {
            toggleDropdown(false);
            changeLanguage(lang);
        },
        toggleDropdown: function(val) {
            if (typeof window === 'undefined') return;
            
            const newVal = val != null ? val : !showDropdown;
            
            const setNewState = () => toggleDropdown(() => newVal);
            
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
    }
}
