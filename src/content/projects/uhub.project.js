import { Col, Container, Row } from "reactstrap";
import uhubLogo from "../../assets/images/projects/uhub_logo.png";
import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

export function ProjectUhub() {
  const { t } = useI18next("projects");

  return (
    <Container fluid={true} className="project-header">
      <Row className="align-items-center flex-column">
        <Col xs={12} className="justify-content-center d-flex">
          <img src={uhubLogo} alt="Kumuluz Crowdsensing" />
        </Col>
        <Col xs={12}>
          <h2 className="text-center">{t("uhub.title")}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <p dangerouslySetInnerHTML={{ __html: t("uhub.description") }} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <p className="text-center">{t("uhub.footer")}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-1">
        <Col xs={8} className="d-flex justify-content-center">
          <a className="skladi-url" href="http://www.eu-skladi.si" target="_blank" rel="noreferrer noopener">
            {t("uhub.link")}
          </a>
        </Col>
      </Row>
    </Container>
  );
}
