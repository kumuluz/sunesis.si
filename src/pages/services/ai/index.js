import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { Layout } from "../../../layouts";
import { Footer, ServiceRangeBox, SEO, ReferencesSpinner, Link } from "../../../components";
import { Itemized } from "../../../components/itemized/itemized.component";

import stockModernization from "../../../components/index-page/content/images/stock-modernization.jpg";

import rangeDev from "../../../assets/images/services/dev.svg";
import rangeReplatforming from "../../../assets/images/services/replafroming.svg";
import rangeTransformation from "../../../assets/images/services/transformation.svg";
import rangeTransProducts from "../../../assets/images/services/trans-products.svg";

import "../index.scss";
import "../../../components/index-page/content/index-content.scss";

function ServicesAiPage() {
  const { t } = useI18next("services");
  return (
    <Layout>
      <div className="services">
        <SEO siteTitleId={["services:site.title", "translations:site.title"]} canonical="/services" />

        <Container fluid={true} className="header">
          <Row>
            <Col xs="12" className="px-0">
              <div className="text-center pt-5 p-3 p-lg p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("ai.title")}</h1>
                    <p>{t("ai.block1")}</p>
                    <p>{t("ai.block2")}</p>
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
              <div className="content text-center pr-3 pl-3 p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h4 dangerouslySetInnerHTML={{ __html: t("ai.servicerange.title") }} />
                  </Col>
                  <Col xs="12" lg="10" xl="8">
                    <div className="boxes-container">
                      <ServiceRangeBox
                        img={rangeTransformation}
                        text={t("ai.servicerange.box.efficiency.title")}
                        description={t("ai.servicerange.box.efficiency.description")}
                      />
                      <ServiceRangeBox
                        img={rangeTransProducts}
                        text={t("ai.servicerange.box.decision-making.title")}
                        description={t("ai.servicerange.box.decision-making.description")}
                      />
                      <ServiceRangeBox
                        img={rangeReplatforming}
                        text={t("ai.servicerange.box.experiences.title")}
                        description={t("ai.servicerange.box.experiences.description")}
                      />
                      <ServiceRangeBox
                        img={rangeDev}
                        text={t("ai.servicerange.box.advantage.title")}
                        description={t("ai.servicerange.box.advantage.description")}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="main-content">
          <div className="index-content-component">
            <div className="flex-column d-flex align-items-center">
              <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
                <h2 className="container-title">{t("ai.services.title")}</h2>
                <p className="mt-3 container-subtitle">{t("ai.services.subtitle")}</p>
                <Row className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockModernization}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-photo-cloud"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("ai.services.integration.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("ai.services.integration.subtitle")}</h3>
                    <p>{t("ai.services.integration.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="ai.services.integration.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.integration.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="ai.services.integration.items.item-3" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("ai.services.openai.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("ai.services.openai.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("ai.services.openai.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="ai.services.openai.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.openai.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="ai.services.openai.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.openai.items.item-4" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <img
                      src={stockModernization}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-modernization"
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
                      src={stockModernization}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-photo-cloud"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("ai.services.security.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("ai.services.security.subtitle")}</h3>
                    <p>{t("ai.services.security.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="ai.services.security.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.security.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="ai.services.security.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.security.items.item-4" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="ai.services.security.items.item-5" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("ai.services.scalability.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("ai.services.scalability.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("ai.services.scalability.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="ai.services.scalability.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.scalability.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="ai.services.scalability.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="ai.services.scalability.items.item-4" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <img
                      src={stockModernization}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-modernization"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        <Footer contact />
      </div>
    </Layout>
  );
}

export default ServicesAiPage;

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
