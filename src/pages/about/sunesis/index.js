import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import {
    Footer,
    SubNavbar,
    ParallaxBlock,
    CheckboxListComponent,
    ProductsServicesBoxesComponent
} from '../../../components';
import {GoogleAnalyticsService} from "../../../components/google-analytics/google-analytics.service";

import '../index.scss';

import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';
import {EE_KUMULUZ_URL, IO_KUMULUZ_URL, KUMULUZ_URL} from "../../../content/constants";
import {Layout} from "../../../layouts";
import SEO from "../../../components/seo/seo.component";
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../../utils/translation.util";
import Form from "reactstrap/es/Form";

const products = [
    {
        title: 'products-services.item-1.title',
        subtitle: 'products-services.item-1.subtitle',
        description: 'products-services.item-1.desc',
        url: "/services",
        size: 2
    },
    {
        title: 'products-services.item-2.title',
        subtitle: 'products-services.item-2.subtitle',
        description: 'products-services.item-2.desc',
        url: KUMULUZ_URL + "/digital-platform",
        size: 1
    },
    {
        title: 'products-services.item-3.title',
        subtitle: 'products-services.item-3.subtitle',
        description: 'products-services.item-3.desc',
        url: KUMULUZ_URL + "/business-apis",
        size: 1
    },
    {
        title: 'products-services.item-4.title',
        subtitle: 'products-services.item-4.subtitle',
        description: 'products-services.item-4.desc',
        url: EE_KUMULUZ_URL,
        size: 1
    },
    {
        title: 'products-services.item-5.title',
        subtitle: 'products-services.item-5.subtitle',
        description: 'products-services.item-5.desc',
        url: IO_KUMULUZ_URL,
        size: 1
    }
];

export default class AboutUsPage extends Component {
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
                <div className="aboutUs">
                    <SEO siteTitleId={["about-page.site.sunesis.title", "site.title"]} locale={locale}/>
                    <SubNavbar nav="/about" locale={locale}/>
                    <Container className="banner mt-5 mb-5">
                        <Row className="justify-content-center pt-5">
                            <Col xl="8" className="text-center">
                                <h1 className="font-weight-bold mb-4">
                                    <FormattedMessage id="about-page.header.title"/>
                                </h1>
                            </Col>
                        </Row>
                        <Row className="justify-content-center pt-4">
                            <Col xs="10" className="mb-4">
                                <p>
                                    <FormattedMessage id="about-page.header.para-1"/>
                                </p>
                            </Col>
                            <Col xs="10" lg="5">
                                <p>
                                    <FormattedMessage id="about-page.header.para-2"/>
                                </p>
                            </Col>
                            <Col xs="10" lg="5">
                                <p>
                                    <FormattedMessage id="about-page.header.para-3"/>
                                </p>
                            </Col>
                            <Col xs="10" className="mt-4">
                                <p>
                                    <FormattedMessage id="about-page.header.para-4"/>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <ParallaxBlock image={cube01} size={100} xOffset="5%" yOffset="-350px"/>
                    <ParallaxBlock image={cube01} size={40} xOffset="80%" yOffset="-50px"/>
                    <ParallaxBlock image={cube02} size={80} xOffset="85%" yOffset="-400px"/>

                    <Container fluid className="slider">
                        <Row>
                            <Col xs={12} className="p-0">
                                <div className="slider-top-arrow"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="slider-title mb-4">
                                <h3>
                                    <FormattedMessage id="about-page.products-services.title"/>
                                </h3>
                            </Col>
                        </Row>
                        <ProductsServicesBoxesComponent learnMoreLabel={TranslationUtil.translate(locale, 'products-services.learn-more', 'about-page') }
                            items={products} locale={locale}/>
                        <Row>
                            <Col xs={12} className="p-0">
                                <div className="slider-bottom-arrow"/>
                            </Col>
                        </Row>
                    </Container>

                    <ParallaxBlock image={cube01} size={40} xOffset="15%" yOffset="200px"/>
                    <ParallaxBlock image={cube02} size={60} xOffset="85%" yOffset="300px"/>

                    <Container fluid className="mt-5">
                        <Row className="flex-column align-items-center">
                            <Col xs="12" lg="6">
                                <h2 className="text-center blue-400">
                                    <FormattedMessage id="about-page.sunesis-name.title"/>
                                </h2>
                            </Col>
                            <Col xs="12" lg="6" className="mt-4">
                                <p className="">
                                    <FormattedMessage id="about-page.sunesis-name.para-1"/>
                                </p>
                            </Col>
                            <Col xs={12} lg={6} className="mt-4">
                                <CheckboxListComponent items={[
                                    TranslationUtil.translate(locale, 'sunesis-name.words.item-1', 'about-page'),
                                    TranslationUtil.translate(locale, 'sunesis-name.words.item-2', 'about-page'),
                                    TranslationUtil.translate(locale, 'sunesis-name.words.item-3', 'about-page')
                                ]}/>
                            </Col>
                            <Col xs={12} lg={6} className="mt-4">
                                <p>
                                    <FormattedMessage id="about-page.sunesis-name.para-2"/>
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <ParallaxBlock image={cube01} size={80} xOffset="10%" yOffset="200px"/>
                    <ParallaxBlock image={cube02} size={80} xOffset="85%" yOffset="330px"/>

                    <Footer contact locale={locale}/>
                </div>
            </Layout>
        );
    }
}
