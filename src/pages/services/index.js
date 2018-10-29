import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {Container, Row, Col} from 'reactstrap';
import {Helmet} from 'react-helmet';

import './index.scss'
import {Footer} from "../../components";
import {ServiceFullList, ServiceList, ServiceRangeBox} from "../../components/services";

import sunesisDevs from '../../assets/images/services/sunesis-developers.jpg';
import certifications from '../../assets/images/services/certifications.png';
import rangeDev from '../../assets/images/services/dev.svg';
import rangeReplatforming from '../../assets/images/services/replafroming.svg';
import rangeTransformation from '../../assets/images/services/transformation.svg';
import rangeTransProducts from '../../assets/images/services/trans-products.svg';
import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";

@translate('services')
export default class ServicesPage extends Component {

    static propTypes = {
        t: PropTypes.func
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {t} = this.props;
        return (
            <div className="services">
                <Helmet title={t('site.title')}/>
                <div className="header-nav">
                    <div className="header-nav-container">
                        <div>{t('navbar.dig-app')}</div>
                        <div>{t('navbar.soft-mod')}</div>
                        <div>{t('navbar.trans-2-cloud')}</div>
                        <div>{t('navbar.agile-dev')}</div>
                        <div>{t('navbar.app-integ')}</div>
                        <div>{t('navbar.bus-proc-manage')}</div>
                        <div>{t('navbar.ment-train')}</div>
                    </div>

                </div>

                <Container fluid={true} className="header">
                    <Row>
                        <Col xs="12" className="px-0">
                            <div className="text-center pt-5 p-3 p-lg p-lg-0">
                                <Row className="justify-content-center">
                                    <Col xs="12" lg="10" xl="8">
                                        <h1>{t('header.title')}</h1>
                                        <p>{t('header.block1')}</p>
                                        <p>{t('header.block2')}</p>
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
                                        <h4 dangerouslySetInnerHTML={{__html: t('servicerange.title')}}/>
                                    </Col>
                                    <Col xs="12" lg="10" xl="8">
                                        <div className="boxes-container">
                                            <ServiceRangeBox img={rangeTransformation}
                                                             text={t('servicerange.box.transformation')}>
                                            </ServiceRangeBox>
                                            <ServiceRangeBox img={rangeTransProducts}
                                                             text={t('servicerange.box.tacplan')}>
                                            </ServiceRangeBox>
                                            <ServiceRangeBox img={rangeReplatforming}
                                                             text={t('servicerange.box.replatforming')}>
                                            </ServiceRangeBox>
                                            <ServiceRangeBox img={rangeDev}
                                                             text={t('servicerange.box.dev')}>
                                            </ServiceRangeBox>
                                        </div>
                                    </Col>
                                    <Col xs="12" lg="10" xl="8" className="normal-text-wrapper">
                                        <p className="normal-text">
                                            {t('servicerange.body')}
                                        </p>
                                    </Col>
                                    <Col xs="12" lg="10" xl="8">
                                        <p className="darker-text">
                                            {t('servicerange.summary.normal')}&#160;
                                            <span className="highlighted-darker-text">
                                                {t('servicerange.summary.emphasized')}
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
                                                <h3>{t('capabilities.title')}</h3>
                                                <p>{t('capabilities.intro')}</p>
                                                <h4>{t('capabilities.strategic.title')}</h4>
                                                <ServiceList items={[
                                                    [
                                                        t('capabilities.strategic.dig-trans'),
                                                        t('capabilities.strategic.impl-strat')
                                                    ],
                                                    [
                                                        t('capabilities.strategic.dig-prod-id'),
                                                        t('capabilities.strategic.app-repl')
                                                    ],
                                                    [
                                                        t('capabilities.strategic.leg-code-mod'),
                                                        t('capabilities.strategic.trans-2-cloud')
                                                    ]
                                                ]}/>
                                                <h4>{t('capabilities.operational.title')}</h4>
                                                <ServiceList items={[
                                                    [
                                                        t('capabilities.operational.cloud-dev'),
                                                        t('capabilities.operational.micro-apis')
                                                    ],
                                                    [
                                                        t('capabilities.operational.dock-kube'),
                                                        t('capabilities.operational.ent-arch')
                                                    ],
                                                    [
                                                        t('capabilities.operational.integration'),
                                                        t('capabilities.operational.blockc-dev'),
                                                        t('capabilities.operational.mobil-ux')
                                                    ],
                                                    [
                                                        t('capabilities.operational.html-resp-web'),
                                                        t('capabilities.operational.jee-dev')
                                                    ]
                                                ]}/>
                                                <p>{t('capabilities.outro')}</p>
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
                                    <h5>{t('certifications.title')}</h5>
                                    <p>{t('certifications.body')}</p>
                                    {/*<p>{t('certifications.summary')}</p>*/}
                                </div>
                                <div className="right-cert">
                                    <img src={certifications}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="cert-divider"/>
                    <div className="service-full-list">
                        <div className="full-list-container">
                            <div className="left-full-list">
                                <h4>{t('servicelist.title')}</h4>
                                <p>{t('servicelist.desc')}</p>
                            </div>
                            <div className="right-full-list">
                                <ServiceFullList />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer contact/>
            </div>
        );
    }
}
