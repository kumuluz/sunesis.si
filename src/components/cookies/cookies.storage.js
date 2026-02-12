import {useEffect, useState} from "react";

const COOKIES_STORAGE_KEY = "COOKIES_AGREED";

export function useCookieStorage() {
    const [displayCookies, toggleCookies] = useState(false);
    
    function checkPriorAgreement() {
        // Check if we're in the browser environment
        if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
            return false;
        }
        try {
            const item = localStorage.getItem(COOKIES_STORAGE_KEY);
            if (item) {
                return JSON.parse(item);
            }
        } catch (error) {
            console.error('Error reading from localStorage:', error);
        }
        return false;
    }
    
    useEffect(() => {
        // Only run in browser environment
        if (typeof window !== 'undefined') {
            toggleCookies(!checkPriorAgreement());
        }
    }, []);
    
    return {
        displayCookies,
        agreeToCookies: function() {
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                try {
                    localStorage.setItem(COOKIES_STORAGE_KEY, JSON.stringify(true));
                    toggleCookies(false);
                } catch (error) {
                    console.error('Error writing to localStorage:', error);
                }
            }
        }
    }
}
