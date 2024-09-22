import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { SubNavbar } from "../../../components";

import { Layout } from "../../../layouts";
import { Footer, ServiceRangeBox, SEO, ReferencesSpinner, Link } from "../../../components";
import { Itemized } from "../../../components/itemized/itemized.component";
import { ServiceFullListItem } from "../../../components/services/service-full-list/list-item";

import stockLibrary from "../../../components/index-page/content/images/stock-library.jpg";
import stockArchitecture from "../../../components/index-page/content/images/stock-architecture-2.jpg";
import stockPrivacy from "../../../components/index-page/content/images/stock-privacy.jpg";
import stockFramework from "../../../components/index-page/content/images/stock-framework.jpg";
import stockCrossPlatform from "../../../components/index-page/content/images/stock-cross-platform.jpg";

import rangeDev from "../../../assets/images/services/dev.svg";
import rangeReplatforming from "../../../assets/images/services/replafroming.svg";
import rangeTransformation from "../../../assets/images/services/transformation.svg";
import rangeTransProducts from "../../../assets/images/services/trans-products.svg";

import "../index.scss";
import "../../../components/index-page/content/index-content.scss";

function ProductsAiKnowledgeMentorPage() {
  const { t } = useI18next("products");

  return (
    <Layout>
      <div className="products">
        <SEO siteTitleId={["products:site.title-digital-assistant", "translations:site.title"]} canonical="/products" />
        <SubNavbar nav="/products" />
        <Container fluid={true} className="header">
          <Row>
            <Col xs="12" className="px-0">
              <div className="text-center pt-5 p-3 p-lg p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("smart-assistant.title")}</h1>
                    <p>{t("smart-assistant.block1")}</p>
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
                    <h4 dangerouslySetInnerHTML={{ __html: t("smart-assistant.servicerange.title") }} />
                  </Col>
                  <Col xs="12" lg="10" xl="8">
                    <div className="boxes-container">
                      <ServiceRangeBox
                        img={rangeTransformation}
                        text={t("smart-assistant.servicerange.box.box-1.title")}
                        description={t("smart-assistant.servicerange.box.box-1.description")}
                      />
                      <ServiceRangeBox
                        img={rangeTransProducts}
                        text={t("smart-assistant.servicerange.box.box-2.title")}
                        description={t("smart-assistant.servicerange.box.box-2.description")}
                      />
                      <ServiceRangeBox
                        img={rangeReplatforming}
                        text={t("smart-assistant.servicerange.box.box-3.title")}
                        description={t("smart-assistant.servicerange.box.box-3.description")}
                      />
                      <ServiceRangeBox
                        img={rangeDev}
                        text={t("smart-assistant.servicerange.box.box-4.title")}
                        description={t("smart-assistant.servicerange.box.box-4.description")}
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
                <h2 className="apply-margin">{t("smart-assistant.services.title")}</h2>
                <p className="mt-3 apply-margin">{t("smart-assistant.services.subtitle")}</p>
                <Row className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockLibrary}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-library"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("smart-assistant.services.library.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("smart-assistant.services.library.subtitle")}</h3>
                    <p>{t("smart-assistant.services.library.description")}</p>
                    <Row>
                      <Col ms={12}>
                        <Row>
                          <Col md="6">
                            <Itemized trKey="smart-assistant.services.library.items.item-1" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="smart-assistant.services.library.items.item-2" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="smart-assistant.services.library.items.item-3" />
                          </Col>
                          <Col md="6">
                            <Itemized trKey="smart-assistant.services.library.items.item-4" />
                          </Col>
                        </Row>
                        <Row className="items-margin-top">
                          <Col md="6">
                            <Itemized trKey="smart-assistant.services.library.items.item-5" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("smart-assistant.services.architecture.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("smart-assistant.services.architecture.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("smart-assistant.services.architecture.description")}</p>
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
                      src={stockPrivacy}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-privacy"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("smart-assistant.services.security.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("smart-assistant.services.security.subtitle")}</h3>
                    <p>{t("smart-assistant.services.security.description")}</p>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("smart-assistant.services.framework.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("smart-assistant.services.framework.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("smart-assistant.services.framework.description")}</p>
                  </Col>
                  <Col md={6}>
                    <img
                      src={stockFramework}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-framework"
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
                      src={stockCrossPlatform}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-cross-platform"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("smart-assistant.services.integration.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("smart-assistant.services.integration.subtitle")}</h3>
                    <p>{t("smart-assistant.services.integration.description")}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-5 container-margin">
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <h2>{t("smart-assistant.use-cases.title")}</h2>
              <p className="">{t("smart-assistant.use-cases.subtitle")}</p>
            </Col>
          </Row>

          <Row className="full-list-component">
            <ul>
              <ServiceFullListItem
                title={t("smart-assistant.use-cases.item-1.title")}
                desc={t("smart-assistant.use-cases.item-1.description")}
              />
              <ServiceFullListItem
                title={t("smart-assistant.use-cases.item-2.title")}
                desc={t("smart-assistant.use-cases.item-2.description")}
              />
              <ServiceFullListItem
                title={t("smart-assistant.use-cases.item-3.title")}
                desc={t("smart-assistant.use-cases.item-3.description")}
              />
            </ul>
          </Row>
        </div>

        <div className="flex-column d-flex align-items-center beige-div">
          <div className="beige-arrow-reversed" />
          <div className="beige-content container-padding text-center">
            <h2>{t("smart-assistant.cta.title")}</h2>
            <p className="mt-5">{t("smart-assistant.cta.end-1")}</p>
            <p className="mt-5 end-2">{t("smart-assistant.cta.end-2")}</p>
            <Link to="/about/sunesis#footer">{t("smart-assistant.cta.contact-us")}</Link>
          </div>
          <div className="beige-arrow" />
        </div>

        <Footer contact />
      </div>
    </Layout>
  );
}

export default ProductsAiKnowledgeMentorPage;

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
