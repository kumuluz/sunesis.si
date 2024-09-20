import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { Layout } from "../../../layouts";
import { Footer, ServiceRangeBox, SEO, ReferencesSpinner, Link, DarkFloatingSection } from "../../../components";
import { ServiceFullListItem } from "../../../components/services/service-full-list/list-item";
import { Benefits } from "../../../components";
import { benefits } from "./benefits";

import stockModernization from "../../../components/index-page/content/images/stock-modernization.jpg";

import rangeDev from "../../../assets/images/services/dev.svg";
import rangeReplatforming from "../../../assets/images/services/replafroming.svg";
import rangeTransformation from "../../../assets/images/services/transformation.svg";
import rangeTransProducts from "../../../assets/images/services/trans-products.svg";

import "../index.scss";
import "../../../components/index-page/content/index-content.scss";

function ServicesPage() {
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
                    <h1>{t("backbase.title")}</h1>
                    <p>{t("backbase.block1")}</p>
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
                    <h4 dangerouslySetInnerHTML={{ __html: t("backbase.servicerange.title") }} />
                  </Col>
                  <Col xs="12" lg="10" xl="8">
                    <div className="boxes-container">
                      <ServiceRangeBox
                        img={rangeTransformation}
                        text={t("backbase.servicerange.box.efficiency.title")}
                        description={t("backbase.servicerange.box.efficiency.description")}
                      />
                      <ServiceRangeBox
                        img={rangeTransProducts}
                        text={t("backbase.servicerange.box.loyalty.title")}
                        description={t("backbase.servicerange.box.loyalty.description")}
                      />
                      <ServiceRangeBox
                        img={rangeReplatforming}
                        text={t("backbase.servicerange.box.market.title")}
                        description={t("backbase.servicerange.box.market.description")}
                      />
                      <ServiceRangeBox
                        img={rangeDev}
                        text={t("backbase.servicerange.box.future.title")}
                        description={t("backbase.servicerange.box.future.description")}
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
                <h2 className="apply-margin">{t("backbase.features.title")}</h2>
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
                      <h2>{t("backbase.features.banking.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("backbase.features.banking.subtitle")}</h3>
                    <p>{t("backbase.features.banking.description")}</p>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("backbase.features.journey.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("backbase.features.journey.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("backbase.features.journey.description")}</p>
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
                      <h2>{t("backbase.features.architecture.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("backbase.features.architecture.subtitle")}</h3>
                    <p>{t("backbase.features.architecture.description")}</p>
                  </Col>
                </Row>
                <Row className="space-top content-body">
                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("backbase.features.automation.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("backbase.features.automation.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("backbase.features.automation.description")}</p>
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

        <Container fluid={true} className="main-content">
          <div className="index-content-component">
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
                      <h2>{t("backbase.features.data.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("backbase.features.data.subtitle")}</h3>
                    <p>{t("backbase.features.data.description")}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-5 container-margin">
          <p className="mt-5 end-2">{t("backbase.features.end")}</p>
        </div>

        <DarkFloatingSection
          topContent={
            <Benefits
              title={t("backbase.benefits.title")}
              description={t("backbase.benefits.subtitle")}
              benefits={benefits(t)}
              quote={t("backbase.benefits.end")}
            />
          }
        />
        <div className="arrow" />

        <div className="mt-5 container-margin">
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <h2>{t("backbase.use-cases.title")}</h2>
              <p className="">{t("backbase.use-cases.subtitle")}</p>
            </Col>
          </Row>

          <Row className="full-list-component">
            <ul>
              <ServiceFullListItem
                title={t("backbase.use-cases.item-1.title")}
                desc={t("backbase.use-cases.item-1.description")}
              />
              <ServiceFullListItem
                title={t("backbase.use-cases.item-2.title")}
                desc={t("backbase.use-cases.item-2.description")}
              />
              <ServiceFullListItem
                title={t("backbase.use-cases.item-3.title")}
                desc={t("backbase.use-cases.item-3.description")}
              />
              <ServiceFullListItem
                title={t("backbase.use-cases.item-4.title")}
                desc={t("backbase.use-cases.item-4.description")}
              />
            </ul>
          </Row>
        </div>

        <div className="flex-column d-flex align-items-center beige-div">
          <div className="beige-arrow-reversed" />
          <div className="beige-content container-padding">
            <p className="mt-5 end-2">{t("backbase.cta.end-1")}</p>
            <p className="mt-5">{t("backbase.cta.end-2")}</p>
          </div>
          <div className="beige-arrow" />
        </div>

        <Footer contact />
      </div>
    </Layout>
  );
}

export default ServicesPage;

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
