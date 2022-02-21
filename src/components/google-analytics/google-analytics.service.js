import ReactGA from "react-ga";

export class GoogleAnalyticsService {

    static __INSTANCE = null;
    
    static getInstance() {
        if (GoogleAnalyticsService.__INSTANCE === null) {
            GoogleAnalyticsService.__INSTANCE = new GoogleAnalyticsService();
        }
        return GoogleAnalyticsService.__INSTANCE;
    }
    
    constructor() {
        // ReactGA.initialize("UA-96110617-4");
    }
    
    static registerPageView() {
        /*if (typeof window !== "undefined") {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }*/
    }
}
