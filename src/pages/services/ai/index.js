import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { SubNavbar } from "../../../components";

import { Layout } from "../../../layouts";
import { Footer, ServiceRangeBox, SEO, ReferencesSpinner, Link } from "../../../components";
import { Itemized } from "../../../components/itemized/itemized.component";
import { ServiceFullListItem } from "../../../components/services/service-full-list/list-item";

import stockArchitecture from "../../../components/index-page/content/images/stock-architecture.jpg";
import stockScalability from "../../../components/index-page/content/images/scalability-stock.jpg";
import stockDataSecurity from "../../../components/index-page/content/images/data-security-stock.jpg";
import stockAiForm from "../../../components/index-page/content/images/stock-ai-form.jpg";

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
        <SEO siteTitleId={["services:site.title-ai-integration", "translations:site.title"]} canonical="/services" />
        <SubNavbar nav="/services" />
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
                <h2 className="apply-margin">{t("ai.services.title")}</h2>
                <p className="mt-3 apply-margin">{t("ai.services.subtitle")}</p>
                <Row className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockAiForm}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-ai-form"
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
                      src={stockScalability}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-scalability"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        <div className="mt-5 container-margin">
          <div className="use-case-table">
            <div className="content">{t("ai.services.table.left")}</div>
            <div className="table-separator" />
            <div className="content">{t("ai.services.table.right")}</div>
          </div>
        </div>

        <div className="mt-5 container-margin">
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <h2>{t("ai.use-cases.title")}</h2>
              <p className="">{t("ai.use-cases.subtitle")}</p>
            </Col>
          </Row>
          <div className="use-case-table">
            <ul>
              <li>{t("ai.use-cases.table.item-1-1")}</li>
              <li>{t("ai.use-cases.table.item-1-2")}</li>
              <li>{t("ai.use-cases.table.item-1-3")}</li>
              <li>{t("ai.use-cases.table.item-1-4")}</li>
              <li>{t("ai.use-cases.table.item-1-5")}</li>
            </ul>
            <div className="table-separator" />
            <ul>
              <li>{t("ai.use-cases.table.item-2-1")}</li>
              <li>{t("ai.use-cases.table.item-2-2")}</li>
              <li>{t("ai.use-cases.table.item-2-3")}</li>
              <li>{t("ai.use-cases.table.item-2-4")}</li>
              <li>{t("ai.use-cases.table.item-2-5")}</li>
            </ul>
          </div>
          <Row className="full-list-component">
            <ul>
              <ServiceFullListItem title={t("ai.use-cases.item-1.title")} desc={t("ai.use-cases.item-1.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-2.title")} desc={t("ai.use-cases.item-2.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-3.title")} desc={t("ai.use-cases.item-3.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-4.title")} desc={t("ai.use-cases.item-4.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-5.title")} desc={t("ai.use-cases.item-5.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-6.title")} desc={t("ai.use-cases.item-6.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-7.title")} desc={t("ai.use-cases.item-7.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-8.title")} desc={t("ai.use-cases.item-8.description")} />
              <ServiceFullListItem title={t("ai.use-cases.item-9.title")} desc={t("ai.use-cases.item-9.description")} />
              <ServiceFullListItem
                title={t("ai.use-cases.item-10.title")}
                desc={t("ai.use-cases.item-10.description")}
              />
            </ul>
          </Row>
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <p>{t("ai.use-cases.end")}</p>
            </Col>
          </Row>
        </div>

        <div className="flex-column d-flex align-items-center beige-div">
          <div className="beige-arrow-reversed" />
          <div className="beige-content container-padding">
            <div>
              <h2>{t("ai.cta.table-item-1.title")}</h2>
              <p>{t("ai.cta.table-item-1.description")}</p>
              <Link to="/products/ai-knowledge-mentor">{t("ai.cta.table-item-1.learn-more")}</Link>
            </div>
            <div className="mt-5">
              <h2>{t("ai.cta.table-item-2.title")}</h2>
              <p>{t("ai.cta.table-item-2.description")}</p>
              <Link to="/products/ai-knowledge-mentor">{t("ai.cta.table-item-2.give-it-a-try")}</Link>
            </div>
            <p className="mt-5">{t("ai.cta.end-1")}</p>
            <p className="mt-5 end-2">{t("ai.cta.end-2")}</p>
          </div>
          <div className="beige-arrow" />
        </div>

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
