import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import {Footer, SubNavbar} from '../../../components';
import {GoogleAnalyticsService} from "../../../components/google-analytics/google-analytics.service";

import '../index.scss';

import {references} from '../../../content/references';
import {ParallaxBlock} from '../../../components';

import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';
import {Layout} from "../../../layouts";
import SEO from "../../../components/seo/seo.component";
import {FormattedMessage} from "react-intl";

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

        const rows = Math.ceil(references.length / 3);
        const ref = Object.assign([], references);
        const newRefs = [];
        for (let i = 0; i < rows; i++) {
            newRefs.push([...ref.splice(0, 3)]);
        }

        return (
            <Layout locale={locale}>
                <div className="aboutUs">
                    <SEO siteTitleId={["about-page.site.references.title", "site.title"]} locale={locale} canonical="/about/references"/>
                    <SubNavbar nav="/about" locale={locale}/>
                    <Container fluid className="banner-dark">
                        <Row className="justify-content-center">
                            <Col xs="12" lg="8">
                                <h1>
                                    <FormattedMessage id="about-page.references.title"/>
                                </h1>
                                <h2>
                                    <FormattedMessage id="about-page.references.subtitle"/>
                                </h2>
                            </Col>
                        </Row>
                        <div className="arrow"/>
                    </Container>
                    <ParallaxBlock image={cube01} size={100} xOffset="10%" yOffset="-80px"/>
                    <ParallaxBlock image={cube02} size={70} xOffset="90%" yOffset="-260px"/>

                    <Container className="whiteSection">
                        {newRefs.map(refs => [
                            <Row key="references" className="justify-content-center ref-white-section">
                                {refs.map((ref, key) => (
                                    <Col key={key} md="4" lg="3" className="text-center ref mb-4">
                                        <img alt={ref.description} className="img-fluid mb-3" src={ref.image}/>
                                        <h4 className="blue-400">{ref.name}</h4>
                                        <p>{ref.description}</p>
                                    </Col>
                                ))}
                            </Row>,
                            <Row key="line">
                                <Col className="d-flex justify-content-center">
                                    <div className="line"/>
                                </Col>
                            </Row>
                        ])}
                    </Container>

                    <ParallaxBlock image={cube02} size={90} xOffset="15%" yOffset="480px"/>
                    <ParallaxBlock image={cube01} size={80} xOffset="70%" yOffset="380px"/>

                    <Footer social locale={locale}/>
                </div>
            </Layout>
        );
    }
}
