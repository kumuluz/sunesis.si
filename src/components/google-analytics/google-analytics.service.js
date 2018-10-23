import ReactGA from "react-ga";

export class GoogleAnalyticsService {

    static registerPageView() {
        if (!GoogleAnalyticsService.isLoaded) {
            ReactGA.initialize("UA-96110617-4");
            GoogleAnalyticsService.isLoaded = true;
        }
        if (typeof window !== "undefined" && GoogleAnalyticsService.isLoaded) {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }
}
