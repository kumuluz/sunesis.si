import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import {Helmet} from 'react-helmet';

import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";
import {Layout} from "../../layouts";
import {Footer} from "../../components";
import {ServiceFullList, ServiceList, ServiceRangeBox} from "../../components/services";

import sunesisDevs from '../../assets/images/services/sunesis-developers.jpg';
import certifications from '../../assets/images/services/certifications.png';
import rangeDev from '../../assets/images/services/dev.svg';
import rangeReplatforming from '../../assets/images/services/replafroming.svg';
import rangeTransformation from '../../assets/images/services/transformation.svg';
import rangeTransProducts from '../../assets/images/services/trans-products.svg';
import './index.scss'
import {TranslationUtil} from "../../utils/translation.util";
import {FormattedMessage} from "react-intl";
import SEO from "../../components/seo/seo.component";

export default class ServicesPage extends Component {

    static propTypes = {
        pageContext: PropTypes.object
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {pageContext} = this.props;
        const locale = pageContext.locale;

        return (
            <Layout locale={locale}>
                <div className="services">
                    <SEO siteTitleId={"services-page.site.title"} locale={locale} canonical="/services"/>
                    <div className="header-nav">
                        <div className="header-nav-container">
                            <div><FormattedMessage id={'services-page.navbar.dig-app'}/></div>
                            <div><FormattedMessage id={'services-page.navbar.soft-mod'}/></div>
                            <div><FormattedMessage id={'services-page.navbar.trans-2-cloud'}/></div>
                            <div><FormattedMessage id={'services-page.navbar.agile-dev'}/></div>
                            <div><FormattedMessage id={'services-page.navbar.app-integ'}/></div>
                            <div><FormattedMessage id={'services-page.navbar.bus-proc-manage'}/></div>
                            <div><FormattedMessage id={'services-page.navbar.ment-train'}/></div>
                        </div>

                    </div>

                    <Container fluid={true} className="header">
                        <Row>
                            <Col xs="12" className="px-0">
                                <div className="text-center pt-5 p-3 p-lg p-lg-0">
                                    <Row className="justify-content-center">
                                        <Col xs="12" lg="10" xl="8">
                                            <h1><FormattedMessage id={'services-page.header.title'}/></h1>
                                            <p><FormattedMessage id={'services-page.header.block1'}/></p>
                                            <p><FormattedMessage id={'services-page.header.block2'}/></p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="service-range">
                        <Row>
                            <Col xs="12" className="px-0">
                                <div className="arrow"/>
                                <div className="content text-center pr-3 pl-3 p-lg-0">
                                    <Row className="justify-content-center">
                                        <Col xs="12" lg="10" xl="8">
                                            <h4 dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, "servicerange.title", "services-page")}}/>
                                        </Col>
                                        <Col xs="12" lg="10" xl="8">
                                            <div className="boxes-container">
                                                <ServiceRangeBox img={rangeTransformation}
                                                    text={TranslationUtil.translate(locale, "servicerange.box.transformation", "services-page")}>
                                                </ServiceRangeBox>
                                                <ServiceRangeBox img={rangeTransProducts}
                                                    text={TranslationUtil.translate(locale, "servicerange.box.tacplan", "services-page")}>
                                                </ServiceRangeBox>
                                                <ServiceRangeBox img={rangeReplatforming}
                                                    text={TranslationUtil.translate(locale, "servicerange.box.replatforming", "services-page")}>
                                                </ServiceRangeBox>
                                                <ServiceRangeBox img={rangeDev}
                                                    text={TranslationUtil.translate(locale, "servicerange.box.dev", "services-page")}>
                                                </ServiceRangeBox>
                                            </div>
                                        </Col>
                                        <Col xs="12" lg="10" xl="8" className="normal-text-wrapper">
                                            <p className="normal-text">
                                                <FormattedMessage id="services-page.servicerange.body"/>
                                            </p>
                                        </Col>
                                        <Col xs="12" lg="10" xl="8">
                                            <p className="darker-text">
                                                <FormattedMessage id="services-page.servicerange.summary.normal"/>&#160;
                                                <span className="highlighted-darker-text">
                                                    <FormattedMessage id="services-page.servicerange.summary.emphasized"/>
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className="capabilities pr-0 pl-0" id="capabilities">
                        <Row>
                            <Col lg="3" className="hidden-xs">
                            </Col>
                            <Col xs="12" className="px-0">
                                <div className="white-arrow"/>
                                <div className="content pr-3 pl-3 p-lg-0">
                                    <Row className="justify-content-center">
                                        <div className="no-pad center-image">
                                            <img src={sunesisDevs} className="sunesis-devs-img"/>
                                        </div>
                                        <div className="list no-pad right-content">
                                            <Row className="justify-content-start" style={{marginLeft: '0'}}>
                                                <div className="list-text">
                                                    <h3><FormattedMessage id='services-page.capabilities.title'/></h3>
                                                    <p><FormattedMessage id='services-page.capabilities.intro'/></p>
                                                    <h4><FormattedMessage id='services-page.capabilities.strategic.title'/></h4>
                                                    <ServiceList items={[
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.strategic.dig-trans", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.strategic.impl-strat", "services-page")
                                                        ],
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.strategic.dig-prod-id", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.strategic.app-repl", "services-page")
                                                        ],
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.strategic.leg-code-mod", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.strategic.trans-2-cloud", "services-page")
                                                        ]
                                                    ]}/>
                                                    <h4><FormattedMessage id="services-page.capabilities.operational.title"/></h4>
                                                    <ServiceList items={[
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.operational.cloud-dev", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.operational.micro-apis", "services-page")
                                                        ],
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.operational.dock-kube", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.operational.ent-arch", "services-page"),
                                                        ],
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.operational.integration", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.operational.blockc-dev", "services-page"),
                                                            TranslationUtil.translate(locale, "capabilities.operational.mobil-ux", "services-page"),
                                                        ],
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.operational.html-resp-web", "services-page"),
                                                        ],
                                                        [
                                                            TranslationUtil.translate(locale, "capabilities.operational.jee-dev", "services-page"),
                                                        ]
                                                    ]}/>
                                                    <p><FormattedMessage id="services-page.capabilities.outro"/></p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Row>
                                </div>
                                <div className="white-arrow-reversed"/>
                            </Col>
                        </Row>
                    </Container>
                    <div className="certifications-wrapper">
                        <div className="certifications">
                            <div className="content text-center pt-5 p-3 p-lg-0">
                                <div className="cert-content">
                                    <div className="left-cert">
                                        <h5><FormattedMessage id='services-page.certifications.title'/></h5>
                                        <p><FormattedMessage id='services-page.certifications.body'/></p>
                                    </div>
                                    <div className="right-cert">
                                        <img src={certifications} alt="certificates"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="cert-divider"/>
                        <div className="service-full-list">
                            <div className="full-list-container">
                                <div className="left-full-list">
                                    <h4><FormattedMessage id='services-page.servicelist.title'/></h4>
                                    <p><FormattedMessage id='services-page.servicelist.desc'/></p>
                                </div>
                                <div className="right-full-list">
                                    <ServiceFullList locale={locale}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer contact locale={locale}/>
                </div>
            </Layout>
        );
    }
}
