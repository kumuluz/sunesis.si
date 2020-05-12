import React, {Component} from "react";
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import {FormattedMessage} from "react-intl";

import {GoogleAnalyticsService} from "../components/google-analytics/google-analytics.service";
import {Layout} from "../layouts";
import SEO from "../components/seo/seo.component";

import "./index.scss";
import emphasizedPartners from "../assets/images/emphasized-partners.svg";
import apiEconomy from "../assets/images/index/api-ekonomija.svg";
import digitalProducts from "../assets/images/index/dig-produkti.svg";
import digitalization from "../assets/images/index/digitalizacija.svg";
import newWays from "../assets/images/index/nove-poti.svg";
import {TranslationUtil} from "../utils/translation.util";
import {Footer} from "../components";

const headerItems = [
    {
        icon: digitalProducts,
        text: 'index-page.blue-header.digital-products'
    },
    {
        icon: digitalization,
        text: 'index-page.blue-header.digitalize'
    },
    {
        icon: apiEconomy,
        text: 'index-page.blue-header.api-economy'
    },
    {
        icon: newWays,
        text: 'index-page.blue-header.new-ways'
    }
];

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
                <div className="index-page">
                    <SEO siteTitleId={'site.title'} canonical="/" locale={locale}/>
                    <div className="index-header">
                        <div className="index-header-content">
                            <div className="index-header-title">
                                <div>
                                    <h1>
                                        <FormattedMessage id="index-page.header.titleStrong"/>
                                    </h1>
                                    <div className="title-underline"/>
                                </div>
                                &nbsp;
                                <div>
                                    <h1 className="normal">
                                        <FormattedMessage id="index-page.header.title"/>
                                    </h1>
                                    <div className="title-underline transparent"/>
                                </div>
                            </div>
                            <h2>
                                <FormattedMessage id="index-page.header.subtitle-1"/>
                                <br/>
                                <FormattedMessage id="index-page.header.subtitle-2"/>
                            </h2>
                            <div className="header-button">
                                <button className="btn btn-primary">
                                    <FormattedMessage id="index-page.header.button"/>
                                </button>
                            </div>
                            <div className="emphasized-partners">
                                <div>
                                    <h3 className="text-center">
                                        <FormattedMessage id="index-page.header.they-trust-us"/>
                                    </h3>
                                    <img src={emphasizedPartners} alt="emphasized partners"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="index-blue-header">
                        <div className="arrow"/>
                        <div className="index-blue-header-content">
                            <Row>
                                {headerItems.map((item, index) => (
                                    <Col key={index} md={3} className="header-item">
                                        <div>
                                            <img src={item.icon} alt="header-icon"/>
                                        </div>
                                        <p className="text-center"
                                            dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, item.text)}}/>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <div className="arrow-reversed"/>
                    </div>
                    
                    
                    <Footer contact locale={locale}/>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;
