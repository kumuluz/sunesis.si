import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

import { Footer, ProductsGrid, References, ParallaxBlock, BusinessApisComponent, SEO } from "../../../components";
import { Layout } from "../../../layouts";

import "../index.scss";

import monkey from "../../../assets/images/monkey.png";
import cube01 from "../../../assets/images/cubes/3d-cube-01.svg";
import cube02 from "../../../assets/images/cubes/3d-cube-02.svg";
import cube03 from "../../../assets/images/cubes/3d-cube-03.svg";

import sunesisCube from "../images/sunesis-cube-full.png";

import awardDuke from "../../../assets/images/awards/duke.jpg";
import awardEurocloud from "../../../assets/images/awards/euro-cloud.png";
import awardStartup from "../../../assets/images/awards/startup.png";
import { BLOG_URL, URL_KUMULUZ_COM } from "../../../content/constants";

import deployDataCenterImage from "../../../assets/images/products/deployDatacenter.svg";
import fullSupportImage from "../../../assets/images/products/fullSupport.svg";
import knowledgeImage from "../../../assets/images/products/knowledge.svg";
import lockInImage from "../../../assets/images/products/lockIn.svg";
import minInvestementImage from "../../../assets/images/products/minInvestment.svg";
import transitionCloudImage from "../../../assets/images/products/transitionCloud.svg";

const advantages = (t) => [
  {
    icon: transitionCloudImage,
    description: t("advantages.advantage1"),
  },
  {
    icon: lockInImage,
    description: t("advantages.advantage2"),
  },
  {
    icon: deployDataCenterImage,
    description: t("advantages.advantage3"),
  },
  {
    icon: knowledgeImage,
    description: t("advantages.advantage4"),
  },
  {
    icon: minInvestementImage,
    description: t("advantages.advantage5"),
  },
  {
    icon: fullSupportImage,
    description: t("advantages.advantage6"),
  },
];

const caseStudyAdvantages = (t) => [
  {
    icon: monkey,
    description: t("caseStudy.advantages.advantage1"),
  },
  {
    icon: monkey,
    description: t("caseStudy.advantages.advantage2"),
  },
  {
    icon: monkey,
    description: t("caseStudy.advantages.advantage3"),
  },
];

function ProductsPage() {
  const { t } = useI18next("products");

  return (
    <Layout>
      <div className="products">
        <SEO siteTitleId={["products:site.title", "translations:site.title"]} canonical="/products" />

        <Container className="bapis" fluid={true}>
          <Row className="justify-content-center">
            <Col xs={12} xl={10}>
              <BusinessApisComponent />
            </Col>
          </Row>
        </Container>
        <Container className="white-section">
          <Row className="case-study justify-content-center mt-5 pt-5">
            <Col lg="8" xl="6">
              <h3 className="blue-400 font-weight-bold">{t("caseStudy.title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("caseStudy.description") }} />

              <p dangerouslySetInnerHTML={{ __html: t("caseStudy.advantages.title") }} />
              {caseStudyAdvantages(t).map((adv, i) => (
                <p className="case-study-item" key={i}>
                  <span className="case-study-blue-icon" />
                  <span dangerouslySetInnerHTML={{ __html: t(adv.description) }} />
                </p>
              ))}
            </Col>
            <Col lg="8" xl="5" className="mt-5">
              <div className="box">
                <div className="quote-wrapper">
                  <p className="position-relative">
                    <span className="quote">&quot;</span>
                    <span>{t("caseStudy.quote.quote")}</span>
                    <span className="quote right">&quot;</span>
                  </p>
                </div>
                <div className="arrow" />
                <p className="footer text-center mb-0 px-4 pb-4">
                  <a target="_blank" href={BLOG_URL}>
                    {t("caseStudy.quote.readMore")}
                  </a>
                  <br />
                  {t("caseStudy.quote.about")}
                </p>
              </div>
            </Col>
          </Row>

          <References />
        </Container>
        <ParallaxBlock className="d-none d-lg-block" image={cube02} size={100} xOffset="5%" yOffset={200} />
        <ParallaxBlock className="d-none d-lg-block" image={cube01} size={90} xOffset="90%" yOffset={350} />
        <ParallaxBlock className="d-none d-xl-block" image={cube02} size={90} xOffset="10%" yOffset={800} />
        <Footer contact />
      </div>
    </Layout>
  );
}

export default ProductsPage;

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
