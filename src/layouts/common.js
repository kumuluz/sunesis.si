
export const MEDIA_PHONE = 790;
export const MEDIA_TABLET = 1260;

export const returnScreenSize = () => {
    if (typeof window !== 'undefined') {
        if (typeof window.visualViewport !== 'undefined') {
            return window.visualViewport.width;
        } else {
            return window.innerWidth;
        }
    }
    return 0;
};
