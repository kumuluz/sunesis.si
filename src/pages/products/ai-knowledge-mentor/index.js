import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { SubNavbar } from "../../../components";

import { Layout } from "../../../layouts";
import { Footer, ServiceRangeBox, SEO, ReferencesSpinner, DarkFloatingSection } from "../../../components";
import { ServiceFullListItem } from "../../../components/services/service-full-list/list-item";

import rangeDev from "../../../assets/images/services/dev.svg";
import rangeReplatforming from "../../../assets/images/services/replafroming.svg";
import rangeTransformation from "../../../assets/images/services/transformation.svg";
import rangeTransProducts from "../../../assets/images/services/trans-products.svg";
import aiChatbot from "../../../assets/images/products/ai-chatbot.png";

import { LineTitle } from "../../../components";
import features from "./features";

import "../index.scss";
import "../../../components/index-page/content/index-content.scss";

function ProductsAiDigitalAssistantPage() {
  const { t } = useI18next("products");
  return (
    <Layout>
      <div className="products">
        <SEO siteTitleId={["products:site.title-knowledge-mentor", "translations:site.title"]} canonical="/products" />
        <SubNavbar nav="/products" />
        <Container fluid={true} className="header">
          <Row>
            <Col xs="12" className="px-0">
              <div className="text-center pt-5 p-3 p-lg p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("knowledge-mentor.title")}</h1>
                    <p>{t("knowledge-mentor.block1")}</p>
                    <p>{t("knowledge-mentor.block2")}</p>
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
                    <h4 dangerouslySetInnerHTML={{ __html: t("knowledge-mentor.servicerange.title") }} />
                  </Col>
                  <Col xs="12" lg="10" xl="8">
                    <div className="boxes-container">
                      <ServiceRangeBox
                        img={rangeTransformation}
                        text={t("knowledge-mentor.servicerange.box.box-1.title")}
                        description={t("knowledge-mentor.servicerange.box.box-1.description")}
                      />
                      <ServiceRangeBox
                        img={rangeTransProducts}
                        text={t("knowledge-mentor.servicerange.box.box-2.title")}
                        description={t("knowledge-mentor.servicerange.box.box-2.description")}
                      />
                      <ServiceRangeBox
                        img={rangeReplatforming}
                        text={t("knowledge-mentor.servicerange.box.box-3.title")}
                        description={t("knowledge-mentor.servicerange.box.box-3.description")}
                      />
                      <ServiceRangeBox
                        img={rangeDev}
                        text={t("knowledge-mentor.servicerange.box.box-4.title")}
                        description={t("knowledge-mentor.servicerange.box.box-4.description")}
                      />
                    </div>
                  </Col>
                  <Col xs="12" lg="10" xl="8" className="mt-5">
                    <h4 dangerouslySetInnerHTML={{ __html: t("knowledge-mentor.servicerange.end") }} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="container-margin interface">
          <Row className="justify-content-center text-center">
            <Col xs="12" lg="10" xl="8">
              <h2>{t("knowledge-mentor.interface.title")}</h2>
              <p className="mt-3">{t("knowledge-mentor.interface.description")}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={aiChatbot} alt="ai-chatbot" className="" />
            </Col>
          </Row>
        </div>

        <DarkFloatingSection
          topContent={
            <Container fluid={true}>
              <Row className="justify-content-center services-section">
                <Col xs="12" lg="10" xl="8" className="content p-0">
                  <LineTitle title={t("knowledge-mentor.features.title")} className="products-title" />

                  <div className="innovative-products-section">
                    <p>{t("knowledge-mentor.features.subtitle")}</p>
                    <div className="box-area">
                      {features(t).map((box, index) => (
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
          }
        />
        <div className="arrow pt-5" />

        <div className="mt-5 container-margin">
          <Row className="content-body">
            <Col xs="12" className="text-center">
              <h2>{t("knowledge-mentor.use-cases.title")}</h2>
              <p className="">{t("knowledge-mentor.use-cases.subtitle")}</p>
            </Col>
          </Row>
          <Row className="full-list-component">
            <ul>
              <ServiceFullListItem
                title={t("knowledge-mentor.use-cases.item-1.title")}
                desc={t("knowledge-mentor.use-cases.item-1.description")}
              />
              <ServiceFullListItem
                title={t("knowledge-mentor.use-cases.item-2.title")}
                desc={t("knowledge-mentor.use-cases.item-2.description")}
                services={[
                  t("knowledge-mentor.use-cases.item-2.point-1"),
                  t("knowledge-mentor.use-cases.item-2.point-2"),
                ]}
                end={t("knowledge-mentor.use-cases.item-2.end")}
              />
              <ServiceFullListItem
                title={t("knowledge-mentor.use-cases.item-3.title")}
                desc={t("knowledge-mentor.use-cases.item-3.description")}
              />
              <ServiceFullListItem
                title={t("knowledge-mentor.use-cases.item-4.title")}
                desc={t("knowledge-mentor.use-cases.item-4.description")}
              />
            </ul>
          </Row>
        </div>

        <div className="flex-column d-flex align-items-center beige-div">
          <div className="beige-arrow-reversed" />
          <div className="beige-content container-padding text-center">
            <h2>{t("knowledge-mentor.cta.title")}</h2>
            <p className="mt-5">{t("knowledge-mentor.cta.end-1")}</p>
            <p className="mt-5">{t("knowledge-mentor.cta.end-2")}</p>
            <p className="mt-5 end-2">{t("knowledge-mentor.cta.end-3")}</p>
          </div>
          <div className="beige-arrow" />
        </div>

        <Footer contact />
      </div>
    </Layout>
  );
}

export default ProductsAiDigitalAssistantPage;

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
