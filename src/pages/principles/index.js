import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";
import {Layout} from "../../layouts";
import {Footer} from "../../components";
import SEO from "../../components/seo/seo.component";


class PrinciplesPage extends Component {
    static propTypes = {
        pageContext: PropTypes.object
    };
    
    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const {pageContext} = this.props;
        const {locale} = pageContext;
        
        return (
            <Layout locale={locale}>
                <div>
                    <SEO siteTitleId={['principles-page.site.title', 'site.title']} canonical="/principles" locale={locale}/>
                    
                    
                    <Footer contact locale={locale}/>
                </div>
            </Layout>
        );
    }
    
}

export default PrinciplesPage;
