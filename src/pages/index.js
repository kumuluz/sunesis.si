import React, {Component} from "react";
import * as PropTypes from 'prop-types';
import {GoogleAnalyticsService} from "../components/google-analytics/google-analytics.service";
import {Layout} from "../layouts";
import SEO from "../components/seo/seo.component";

class IndexPage extends Component {
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
        const locale = pageContext.locale;
        
        return (
            <Layout locale={locale}>
                <div className="index">
                    <SEO siteTitleId={'site.title'} canonical="/" locale={locale}/>
                    
                </div>
            </Layout>
        );
    }
}

export default IndexPage;
