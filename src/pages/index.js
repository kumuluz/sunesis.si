import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import { Layout } from "../layouts";
import {
  DarkFloatingSection,
  Footer,
  IndexContent,
  References,
  CustomersSection,
  SEO,
  GoogleAnalyticsService,
  ServicesSection,
  ReferencesSpinner,
} from "../components";

import "./index.scss";
import apiEconomy from "../assets/images/index/api-ekonomija.svg";
import digitalProducts from "../assets/images/index/dig-produkti.svg";
import digitalization from "../assets/images/index/digitalizacija.svg";
import newWays from "../assets/images/index/nove-poti.svg";

const headerItems = (t) => [
  {
    icon: digitalProducts,
    text: t("blue-header.digital-products"),
  },
  {
    icon: digitalization,
    text: t("blue-header.digitalize"),
  },
  {
    icon: apiEconomy,
    text: t("blue-header.api-economy"),
  },
  {
    icon: newWays,
    text: t("blue-header.new-ways"),
  },
];

const IndexPage = () => {
  const { t, i18n } = useI18next("index");

  useEffect(() => {
    GoogleAnalyticsService.registerPageView();
  }, []);

  return (
    <Layout locale={i18n.language}>
      <div className="index-page">
        <SEO siteTitleId={["translations:site.title"]} canonical="/" locale={i18n.language} />

        <div className="index-header">
          <div className="index-header-content">
            <div className="index-header-title">
              <div>
                <h1>{t("index:header.titleStrong")}</h1>
                <div className="title-underline" />
              </div>
              <span className="breaking-space localized-title-2">&nbsp;</span>
              <div>
                <h1 className="normal">{t("index:header.title")}</h1>
                <div className="title-underline transparent" />
              </div>
            </div>
            <h2 className="">{t("index:header.subtitle-1")}</h2>
            <div className="header-button" />
            <div className="emphasized-partners">
              <div>
                <h3 className="text-center">{t("index:header.they-trust-us")}</h3>

                <div className="references-spinning">
                  <ReferencesSpinner />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="index-blue-header">
          <div className="arrow" />
          <div className="index-blue-header-content">
            <Row>
              {headerItems(t).map((item, index) => (
                <Col key={index} md={3} sm={12} className="header-item">
                  <div>
                    <img src={item.icon} alt="header-icon" />
                  </div>
                  <p className="text-center" dangerouslySetInnerHTML={{ __html: item.text }} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="arrow-reversed" />
        </div>

        <div className="main-content">
          <IndexContent locale={i18n.language} />
        </div>

        <div className="index-services-section">
          <DarkFloatingSection topContent={<ServicesSection locale={i18n.language} showCoreServices={true} />} />
          <div className="dark-blue-white-arrow" />
        </div>

        <div className="index-customers-section">
          <CustomersSection locale={i18n.language} />
        </div>

        <div className="index-references-section">
          <References />
        </div>

        <Footer contact locale={i18n.language} />
      </div>
    </Layout>
  );
};

export default IndexPage;

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
