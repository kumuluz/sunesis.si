import { Col, Container, Row } from "reactstrap";
import apiHeaderLogo from "../../assets/images/projects/api_header.png";
import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

export function ProjectKumuluzApi() {
  const { t } = useI18next("projects");

  return (
    <Container fluid={true} className="project-header">
      <Row className="align-items-center flex-column">
        <Col xs={12} className="justify-content-center d-flex">
          <img className="crowdsensing-logo api-logo" src={apiHeaderLogo} alt="Kumuluz API" />
        </Col>
        <Col xs={12}>
          <h2 className="text-center">{t("kumuluzApi.title")}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <p>{t("kumuluzApi.description1")}</p>
          <p>{t("kumuluzApi.description2")}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <p className="text-center">{t("kumuluzApi.fundingText")}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-1">
        <Col xs={8} className="d-flex justify-content-center">
          <a className="skladi-url" href="http://www.eu-skladi.si" target="_blank" rel="noreferrer noopener">
            {t("kumuluzApi.fundingUrl")}
          </a>
        </Col>
      </Row>
    </Container>
  );
}
