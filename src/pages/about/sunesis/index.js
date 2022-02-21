import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {useI18next} from "gatsby-plugin-react-i18next";
import {graphql} from "gatsby";

import {
    Footer,
    SubNavbar,
    ParallaxBlock,
    CheckboxListComponent,
    ProductsServicesBoxesComponent,
    SEO
} from '../../../components';
import {Layout} from "../../../layouts";

import '../index.scss';
import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';
import {EE_KUMULUZ_URL, IO_KUMULUZ_URL, KUMULUZ_URL} from "../../../content/constants";


const products = t => [
    {
        title: t('products-services.item-1.title'),
        subtitle: t('products-services.item-1.subtitle'),
        description: t('products-services.item-1.desc'),
        url: "/services",
        size: 2
    },
    {
        title: t('products-services.item-2.title'),
        subtitle: t('products-services.item-2.subtitle'),
        description: t('products-services.item-2.desc'),
        url: KUMULUZ_URL + "/digital-platform",
        size: 1
    },
    {
        title: t('products-services.item-3.title'),
        subtitle: t('products-services.item-3.subtitle'),
        description: t('products-services.item-3.desc'),
        url: KUMULUZ_URL + "/business-apis",
        size: 1
    },
    {
        title: t('products-services.item-4.title'),
        subtitle: t('products-services.item-4.subtitle'),
        description: t('products-services.item-4.desc'),
        url: EE_KUMULUZ_URL,
        size: 1
    },
    {
        title: t('products-services.item-5.title'),
        subtitle: t('products-services.item-5.subtitle'),
        description: t('products-services.item-5.desc'),
        url: IO_KUMULUZ_URL,
        size: 1
    }
];

function AboutUsPage() {
    const {t} = useI18next("about");
    return (
        <Layout>
            <div className="aboutUs">
                <SEO siteTitleId={["site.sunesis.title", "translations:site.title"]} canonical="/about/sunesis"/>
                <SubNavbar nav="/about"/>
                <Container className="banner mt-5 mb-5">
                    <Row className="justify-content-center pt-5">
                        <Col xl="8" className="text-center">
                            <h1 className="font-weight-bold mb-4">
                                {t("header.title")}
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-4">
                        <Col xs="10" className="mb-4">
                            <p>
                                {t("header.para-1")}
                            </p>
                        </Col>
                        <Col xs="10" lg="5">
                            <p>
                                {t("header.para-2")}
                            </p>
                        </Col>
                        <Col xs="10" lg="5">
                            <p>
                                {t("header.para-3")}
                            </p>
                        </Col>
                        <Col xs="10" className="mt-4">
                            <p>
                                {t("header.para-4")}
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
                                {t("products-services.title")}
                            </h3>
                        </Col>
                    </Row>
                    <ProductsServicesBoxesComponent learnMoreLabel={t('products-services.learn-more')}
                        items={products(t)}/>
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
                                {t("sunesis-name.title")}
                            </h2>
                        </Col>
                        <Col xs="12" lg="6" className="mt-4">
                            <p className="">
                                {t("sunesis-name.para-1")}
                            </p>
                        </Col>
                        <Col xs={12} lg={6} className="mt-4">
                            <CheckboxListComponent items={[
                                t('sunesis-name.words.item-1'),
                                t('sunesis-name.words.item-2'),
                                t('sunesis-name.words.item-3')
                            ]}/>
                        </Col>
                        <Col xs={12} lg={6} className="mt-4">
                            <p>
                                {t("sunesis-name.para-2")}
                            </p>
                        </Col>
                    </Row>
                </Container>
                
                <ParallaxBlock image={cube01} size={80} xOffset="10%" yOffset="200px"/>
                <ParallaxBlock image={cube02} size={80} xOffset="85%" yOffset="330px"/>
                
                <Footer contact/>
            </div>
        </Layout>
    );
}

export default AboutUsPage;

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
