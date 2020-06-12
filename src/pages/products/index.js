import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import {Footer, ProductsGrid, References, ParallaxBlock, BusinessApisComponent} from '../../components';

import './index.scss';
import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";

import monkey from '../../assets/images/monkey.png';
import cube01 from '../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../assets/images/cubes/3d-cube-02.svg';
import cube03 from '../../assets/images/cubes/3d-cube-03.svg';

import sunesisCube from './images/sunesis-cube-full.png';

import awardDuke from '../../assets/images/awards/duke.jpg';
import awardEurocloud from '../../assets/images/awards/euro-cloud.png';
import awardStartup from '../../assets/images/awards/startup.png';
import {BLOG_URL, URL_KUMULUZ_COM} from "../../content/constants";

import deployDataCenterImage from "../../assets/images/products/deployDatacenter.svg";
import fullSupportImage from "../../assets/images/products/fullSupport.svg";
import knowledgeImage from "../../assets/images/products/knowledge.svg";
import lockInImage from "../../assets/images/products/lockIn.svg";
import minInvestementImage from "../../assets/images/products/minInvestment.svg";
import transitionCloudImage from "../../assets/images/products/transitionCloud.svg";
import {Layout} from "../../layouts";
import {FormattedMessage} from "react-intl";
import SEO from "../../components/seo/seo.component";
import {TranslationUtil} from "../../utils/translation.util";

const advantages = [
    {
        icon: transitionCloudImage,
        description: 'advantages.advantage1'
    },
    {
        icon: lockInImage,
        description: 'advantages.advantage2'
    },
    {
        icon: deployDataCenterImage,
        description: 'advantages.advantage3'
    },
    {
        icon: knowledgeImage,
        description: 'advantages.advantage4'
    },
    {
        icon: minInvestementImage,
        description: 'advantages.advantage5'
    },
    {
        icon: fullSupportImage,
        description: 'advantages.advantage6'
    }
];

const caseStudyAdvantages = [
    {
        icon: monkey,
        description: 'caseStudy.advantages.advantage1'
    },
    {
        icon: monkey,
        description: 'caseStudy.advantages.advantage2'
    },
    {
        icon: monkey,
        description: 'caseStudy.advantages.advantage3'
    }
];

export default class ProductsPage extends Component {
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
                <div className="products">
                    <SEO siteTitleId={["products-page.site.title", "site.title"]} locale={locale} canonical="/products"/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube01} size={60} xOffset="11%" yOffset={50}/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube02} size={30} xOffset="70%" yOffset={100}/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="85%" yOffset={100}/>

                    <Row className="align-items-center justify-content-center banner">
                        <Col xs="10" xl="4" className="mx-3">
                            <img src={sunesisCube} alt="sunesis-cube"/>
                        </Col>
                        <Col xs="10" xl="6" className="text-center text-xl-left mx-3">
                            <h1 className="font-bold">
                                <FormattedMessage id="products-page.header.title"/>
                            </h1>
                            <h2>
                                <FormattedMessage id="products-page.header.subtitle"/>
                            </h2>
                        </Col>
                    </Row>

                    <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="3%" yOffset={50}/>
                    <ParallaxBlock className="d-none d-lg-block" image={cube01} size={100} xOffset="15%" yOffset={150}/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube02} size={90} xOffset="70%" yOffset={50}/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube03} size={60} xOffset="90%" yOffset={-50}/>

                    <Container fluid={true} className="strategy">
                        <Row>
                            <Col xs="12" className="px-0">
                                <div className="arrow"/>
                                <div className="content text-center pt-5 p-3 p-lg-0">
                                    <Row className="justify-content-center">
                                        <Col xs="12" lg="10" xl="8">
                                            <h2><FormattedMessage id="products-page.strategy.title"/></h2>
                                            <p dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'strategy.description', 'products-page')}}/>
                                        </Col>
                                        <Col xs="12">
                                            <div className="down-arrow"/>
                                        </Col>
                                        <Col xs="12" lg="10" xl="10">
                                            <ProductsGrid transformation locale={locale}/>
                                        </Col>
                                        <Col xs="12">
                                            <div className="down-arrow"/>
                                        </Col>
                                        <Col xs="12" lg="8" xl="6">
                                            <h2><FormattedMessage id="products-page.strategy.quote"/></h2>
                                            <br/>
                                            <a className="btn btn-primary" href={URL_KUMULUZ_COM + "/digital-platform"}
                                                target="_blank">
                                                <FormattedMessage id="products-page.strategy.action"/>
                                            </a>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <br/>
                                </div>
                                <div className="reverse-arrow-empty"/>
                                <ParallaxBlock className="d-none d-lg-block" image={cube01} size={100} xOffset="15%"
                                    yOffset={0}/>
                                <ParallaxBlock className="d-none d-lg-block" image={cube02} size={90} xOffset="80%"
                                    yOffset={100}/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="white-section">
                        <Row>
                            <Col>
                                <h2 className="text-center mb-5">
                                    <FormattedMessage id='products-page.weForYou.title'/>
                                </h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs="12" lg="10" xl="6">
                                <p dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'weForYou.descriptionLeft', 'products-page')}}/>
                            </Col>
                            <Col xs="12" lg="10" xl="6">
                                <p dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'weForYou.descriptionRight', 'products-page')}}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg="10" xl="8" className="mt-5 text-center">
                                <h2>
                                    <FormattedMessage id="products-page.advantages.title"/>
                                </h2>
                                <h3 className="h2-subtitle mt-3">
                                    <FormattedMessage id="products-page.advantages.subtitle"/>
                                </h3>
                            </Col>
                        </Row>
                        <Row>
                            {advantages.map((adv, key) => (
                                <Col xs="12" md="6" lg="4" className="advantage text-center" key={key}>
                                    <img src={adv.icon} className="mt-5 mb-4"/>
                                    <p>{
                                        TranslationUtil.translate(locale, adv.description, "products-page")
                                    }</p>
                                </Col>
                            ))}
                        </Row>
                        <Row className="justify-content-center">
                            <Col>
                                <div className="line mx-auto"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs="12" xl="6" className="d-flex align-items-center">
                                <h3 className="blue">
                                    <FormattedMessage id="products-page.awards"/>
                                </h3>
                            </Col>
                            <Col xl="2" className="d-flex align-items-center">
                                <img className="img-fluid" src={awardDuke}/>
                            </Col>
                            <Col xl="2" className="d-flex align-items-center">
                                <img className="img-fluid" src={awardEurocloud}/>
                            </Col>
                            <Col xl="2" className="d-flex align-items-center">
                                <img className="img-fluid" src={awardStartup}/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="bapis mt-5" fluid={true}>
                        <Row className="justify-content-center">
                            <Col xs={12} xl={10}>
                                <BusinessApisComponent locale={locale}/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="white-section">
                        <Row className="case-study justify-content-center mt-5 pt-5">
                            <Col lg="8" xl="6">
                                <h3 className="blue-400 font-weight-bold">
                                    <FormattedMessage id="products-page.caseStudy.title"/>
                                </h3>
                                <p dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'caseStudy.description', 'products-page')}}/>

                                <p dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'caseStudy.advantages.title', 'products-page')}}/>
                                {caseStudyAdvantages.map((adv, i) => (
                                    <p className="case-study-item" key={i}>
                                        <span className="case-study-blue-icon"/>
                                        <span dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, adv.description, 'products-page')}}/>
                                    </p>
                                ))}
                            </Col>
                            <Col lg="8" xl="5" className="mt-5">
                                <div className="box">
                                    <div className="quote-wrapper">
                                        <p className="position-relative">
                                            <span className="quote">&quot;</span>
                                            <FormattedMessage id="products-page.caseStudy.quote.quote"/>
                                            <span className="quote right">&quot;</span>
                                        </p>
                                    </div>
                                    <div className="arrow"/>
                                    <p className="footer text-center mb-0 px-4 pb-4">
                                        <a target="_blank" href={BLOG_URL}>
                                            <FormattedMessage id="products-page.caseStudy.quote.readMore"/>
                                        </a>
                                        <br/>
                                        <FormattedMessage id="products-page.caseStudy.quote.about"/>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <References/>
                    </Container>
                    <ParallaxBlock className="d-none d-lg-block" image={cube02} size={100} xOffset="5%" yOffset={200}/>
                    <ParallaxBlock className="d-none d-lg-block" image={cube01} size={90} xOffset="90%" yOffset={350}/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube02} size={90} xOffset="10%" yOffset={800}/>
                    <Footer contact locale={locale}/>
                </div>
            </Layout>
        );
    }
}
