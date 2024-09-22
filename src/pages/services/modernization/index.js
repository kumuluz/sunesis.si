import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { SubNavbar } from "../../../components";

import { Layout } from "../../../layouts";
import { Footer, ServiceRangeBox, SEO, ReferencesSpinner, DarkFloatingSection, Link } from "../../../components";
import { ServiceFullListItem } from "../../../components/services/service-full-list/list-item";

import rangeDev from "../../../assets/images/services/dev.svg";
import rangeReplatforming from "../../../assets/images/services/replafroming.svg";
import rangeTransformation from "../../../assets/images/services/transformation.svg";
import rangeTransProducts from "../../../assets/images/services/trans-products.svg";

import { LineTitle } from "../../../components";
import capabilities from "../../../components/services/modernization/capabilities";

import "../index.scss";
import "../../../components/index-page/content/index-content.scss";

function ServicesModernizationPage() {
  const { t } = useI18next("services");
  return (
    <Layout>
      <div className="services">
        <SEO siteTitleId={["services:site.title-modernization", "translations:site.title"]} canonical="/services" />
        <SubNavbar nav="/services" />
        <Container fluid={true} className="header">
          <Row>
            <Col xs="12" className="px-0">
              <div className="text-center pt-5 p-3 p-lg p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("modernization.title")}</h1>
                    <p>{t("modernization.block1")}</p>
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
                    <h4 dangerouslySetInnerHTML={{ __html: t("modernization.servicerange.title") }} />
                  </Col>
                  <Col xs="12" lg="10" xl="8">
                    <div className="boxes-container">
                      <ServiceRangeBox
                        img={rangeTransformation}
                        text={t("modernization.servicerange.box.agility.title")}
                        description={t("modernization.servicerange.box.agility.description")}
                      />
                      <ServiceRangeBox
                        img={rangeTransProducts}
                        text={t("modernization.servicerange.box.satisfaction.title")}
                        description={t("modernization.servicerange.box.satisfaction.description")}
                      />
                      <ServiceRangeBox
                        img={rangeReplatforming}
                        text={t("modernization.servicerange.box.speed.title")}
                        description={t("modernization.servicerange.box.speed.description")}
                      />
                      <ServiceRangeBox
                        img={rangeDev}
                        text={t("modernization.servicerange.box.scalability.title")}
                        description={t("modernization.servicerange.box.scalability.description")}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <DarkFloatingSection
          topContent={
            <>
              <Container fluid={true}>
                <Row className="justify-content-center services-section">
                  <Col xs="12" lg="10" xl="8" className="content p-0">
                    <LineTitle title={t("modernization.capabilities.title")} className="products-title" />

                    <div className="innovative-products-section">
                      <p>{t("modernization.capabilities.subtitle")}</p>
                      <div className="box-area">
                        {capabilities(t).map((box, index) => (
                          <div key={index} className="box-item">
                            <div className="box-item-img">
                              <img src={box.image} />
                            </div>
                            <div className="box-item-content">
                              <div className="box-item-title">{box.title}</div>
                              <div className="box-item-desc">{box.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="mt-5 pb-5 container-margin">
                <div className="use-case-table-title">{t("modernization.capabilities.table.title")}</div>
                <div className="use-case-table">
                  <div className="content text-center">
                    <h4>{t("modernization.capabilities.table.items-left.title")}</h4>
                    <p2>{t("modernization.capabilities.table.items-left.description-1")}</p2>
                    <br />
                    <br />
                    <p2>{t("modernization.capabilities.table.items-left.description-2")}</p2>
                    <br />
                    <br />
                    <Link to="/products/digital-platform" className="cta-link">
                      {t("modernization.capabilities.table.learn-more")}
                    </Link>
                  </div>
                  <div className="table-separator" />
                  <div className="content text-center">
                    <h4>{t("modernization.capabilities.table.items-right.title")}</h4>
                    <p2>{t("modernization.capabilities.table.items-right.description-1")}</p2>
                    <br />
                    <br />
                    <p2>{t("modernization.capabilities.table.items-right.description-2")}</p2>
                    <br />
                    <br />
                    <Link to="/products/business-api" className="cta-link">
                      {t("modernization.capabilities.table.learn-more")}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <div className="arrow" />

        <div className="mt-5 container-margin">
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <h2>{t("modernization.use-cases.title")}</h2>
              <p className="">{t("modernization.use-cases.subtitle")}</p>
            </Col>
          </Row>
          <Row className="full-list-component">
            <ul>
              <ServiceFullListItem
                title={t("modernization.use-cases.item-1.title")}
                desc={t("modernization.use-cases.item-1.description")}
                cta={{
                  title: t("modernization.use-cases.item-1.cta-title"),
                  link: "/services/backbase",
                  text: t("modernization.use-cases.item-1.cta-text"),
                }}
              />
              <ServiceFullListItem
                title={t("modernization.use-cases.item-2.title")}
                desc={t("modernization.use-cases.item-2.description")}
              />
              <ServiceFullListItem
                title={t("modernization.use-cases.item-3.title")}
                desc={t("modernization.use-cases.item-3.description")}
              />
            </ul>
          </Row>
          <Row className="content-body mt-5">
            <Col xs="12" className="text-center">
              <p className="end-2">{t("modernization.cta.end-1")}</p>
            </Col>
          </Row>
        </div>

        <Footer contact />
      </div>
    </Layout>
  );
}

export default ServicesModernizationPage;

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
