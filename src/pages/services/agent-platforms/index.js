import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { SubNavbar } from "../../../components";

import { Layout } from "../../../layouts";
import { Footer, SEO, ReferencesSpinner, Link } from "../../../components";
import { Itemized } from "../../../components/itemized/itemized.component";

import stockArchitecture from "../../../components/index-page/content/images/stock-architecture.jpg";
import stockDataSecurity from "../../../components/index-page/content/images/data-security-stock.jpg";
import stockScalability from "../../../components/index-page/content/images/scalability-stock.jpg";
import stockAiForm from "../../../components/index-page/content/images/stock-ai-form.jpg";

import "../index.scss";
import "../../../components/index-page/content/index-content.scss";

function ServicesAgentPlatformsPage() {
  const { t } = useI18next("services");

  return (
    <Layout>
      <div className="services">
        <SEO siteTitleId={["services:site.title-agent-platforms", "translations:site.title"]} canonical="/services/agent-platforms" />
        <SubNavbar nav="/services" />
        <Container fluid={true} className="header">
          <Row>
            <Col xs="12" className="px-0">
              <div className="text-center pt-5 p-3 p-lg p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("agent-platforms.title")}</h1>
                    <p>{t("agent-platforms.block1")}</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="service-range">
          <Row>
            <Col xs="12" className="px-0">
              <div className="arrow" />

              <div className="emphasized-partners">
                <div>
                  <h3 className="text-center">{t("index:header.they-trust-us")}</h3>

                  <div className="references-spinning">
                    <ReferencesSpinner />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="main-content">
          <div className="index-content-component">
            <div className="flex-column d-flex align-items-center">
              <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
                <Row className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockAiForm}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-agent-harness"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("agent-platforms.services.beyond-chatbots.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("agent-platforms.services.beyond-chatbots.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.beyond-chatbots.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.beyond-chatbots.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.beyond-chatbots.items.item-3" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("agent-platforms.services.architecture.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("agent-platforms.services.architecture.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.architecture.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.architecture.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.architecture.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.architecture.items.item-4" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.architecture.items.item-5" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <img
                      src={stockArchitecture}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-architecture"
                    />
                  </Col>
                </Row>
              </div>
            </div>

            <div className="flex-column d-flex align-items-center">
              <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
                <Row className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockDataSecurity}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-security"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("agent-platforms.services.security.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("agent-platforms.services.security.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.security.items.item-1" />
                          </Col>
                          <Col md="6">
                            <div className="itemized-component">
                              <div className="box-container">
                                <span className="box" />
                              </div>
                              <div className="content">
                                <span>{t("agent-platforms.services.security.items.item-2")}</span>
                                <div style={{ paddingLeft: "24px", marginTop: "8px" }}>
                                  <Itemized trKey="agent-platforms.services.security.items.item-2-1" small boxColor="#2B2B6F" />
                                  <Itemized trKey="agent-platforms.services.security.items.item-2-2" small boxColor="#2B2B6F" />
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.security.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.security.items.item-4" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("agent-platforms.services.compliance.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("agent-platforms.services.compliance.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("agent-platforms.services.compliance.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.compliance.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.compliance.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.compliance.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.compliance.items.item-4" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <img
                      src={stockScalability}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-compliance"
                    />
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("agent-platforms.services.tech-stack.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("agent-platforms.services.tech-stack.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.tech-stack.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.tech-stack.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="agent-platforms.services.tech-stack.items.item-3" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <img
                      src={stockArchitecture}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-tech-stack"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-5 container-margin">
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <h2>{t("agent-platforms.why.title")}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col xs="12" lg="10" xl="8">
              <Itemized trKey="agent-platforms.why.items.item-1" />
              <Itemized trKey="agent-platforms.why.items.item-2" />
              <Itemized trKey="agent-platforms.why.items.item-3" />
            </Col>
          </Row>
        </div>

        <div className="flex-column d-flex align-items-center beige-div">
          <div className="beige-arrow-reversed" />
          <div className="beige-content container-padding">
            <div>
              <h2>{t("agent-platforms.cta.title")}</h2>
              <p>{t("agent-platforms.cta.description")}</p>
              <Link to="/about/sunesis#footer">{t("agent-platforms.cta.button")}</Link>
            </div>
          </div>
          <div className="beige-arrow" />
        </div>

        <Footer contact />
      </div>
    </Layout>
  );
}

export default ServicesAgentPlatformsPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
