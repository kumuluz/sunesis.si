import {useEffect, useState} from "react";
import {MEDIA_TABLET, returnScreenSize} from "../../layouts/common";
import sunesisLogo from "./sunesis-logo.svg";
import sunesisWhiteLogo from "./sunesis-logo-white.svg";



export function useNavbarState() {
    
    const [state, setter] = useState({
        isOpen: false,
        dropdownOpen: false,
        sunesisLogo: returnScreenSize() > MEDIA_TABLET ? sunesisLogo : sunesisWhiteLogo
    });
    
    function onWindowResize() {
        setter(prevState => {
            return {
                ...prevState,
                sunesisLogo: returnScreenSize() > MEDIA_TABLET ? sunesisLogo : sunesisWhiteLogo
            };
        });
    }
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            onWindowResize();
            window.addEventListener("resize", onWindowResize);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("resize", onWindowResize);
            }
        };
    }, []);
    
    return {
        navbarState: state,
        toggle: function() {
            setter(prevState => {
                return {
                    ...prevState,
                    isOpen: !prevState.isOpen
                };
            });
        },
        toggleDropdown: function() {
            setter(prevState => {
                return {
                    ...prevState,
                    dropdownOpen: !prevState.dropdownOpen
                };
            });
        },
        closeMobileMenu: function() {
            setter(prevState => {
                const screenSize = returnScreenSize();
                if (screenSize <= MEDIA_TABLET) {
                    return {
                        ...prevState,
                        isOpen: false,
                    };
                }
                return prevState;
            });
        },
        linkActive: function(path) {
            if (typeof window !== 'undefined') {
                if (window.location.pathname.includes(path)) {
                    if (window.location.pathname === path || window.location.pathname === path + '/') {
                        return 'active';
                    }
                    return 'active plus position-relative';
                }
            }
            return "";
        }
    }
}
