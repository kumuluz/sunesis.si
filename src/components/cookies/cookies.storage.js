import {useEffect, useState} from "react";

const COOKIES_STORAGE_KEY = "COOKIES_AGREED";

export function useCookieStorage() {
    const [displayCookies, toggleCookies] = useState(false);
    
    function checkPriorAgreement() {
        const item = localStorage.getItem(COOKIES_STORAGE_KEY);
        if (item) {
            return JSON.parse(item);
        }
        return false;
    }
    
    useEffect(() => {
        toggleCookies(!checkPriorAgreement());
    }, []);
    
    return {
        displayCookies,
        agreeToCookies: function() {
            localStorage.setItem(COOKIES_STORAGE_KEY, JSON.stringify(true));
            toggleCookies(false);
        }
    }
}
