import React from "react";
import Helmet from "react-helmet";
import {Col, Container, Row} from "reactstrap";

import {Footer} from "../../components";

import "./index.scss";
import euLogo from "../../assets/images/projects/eu_logo.jpg";
import ministryLogo from "../../assets/images/projects/ministry_logo.png";
import apiSponsorLogo from "../../assets/images/projects/sponsor_logo_1.png";
import {Layout} from "../../layouts";
import {graphql} from "gatsby";
import {ProjectGrad} from "../../content/projects/grad.project";
import {ProjectKumuluzApi} from "../../content/projects/kumuluz-api.project";
import {ProjectEdisonWinci} from "../../content/projects/edison-winci.project";
import {ProjectCrowdsensing} from "../../content/projects/crowdsensing.project";
import {ProjectUhub} from "../../content/projects/uhub.project";
import {ProjectAgriTrace} from "../../content/projects/agritrace.project";

export default function ProjectsPage() {
    return (
        <Layout>
            <div className="projects-page">
                <Helmet title="Projekti - Sunesis"/>
                
                <Container fluid={true} className="banner-dark pl-0 pr-0">
                    <Row className="justify-content-center m-0">
                        <Col xs="12">
                            <h1 className="text-center">Projekti</h1>
                        </Col>
                    </Row>
                    <div className="arrow"/>
                </Container>
                
                <ProjectAgriTrace/>
                
                <ProjectGrad/>
                
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col sm={12} md={4} lg={2} className="sponsor-logo">
                            <img src={euLogo} alt="EU"/>
                        </Col>
                        <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-1">
                            <img src={apiSponsorLogo} alt=""/>
                        </Col>
                        <Col sm={12} md={4} lg={2} className="sponsor-logo">
                            <img src={ministryLogo} alt="RS - Ministry for economical development and technology"/>
                        </Col>
                    </Row>
                </Container>
                
                <ProjectKumuluzApi/>
                
                <ProjectEdisonWinci/>
                
                <ProjectCrowdsensing/>
                
                <ProjectUhub/>
                
                <Footer social/>
            </div>
        </Layout>
    );
    
}

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
