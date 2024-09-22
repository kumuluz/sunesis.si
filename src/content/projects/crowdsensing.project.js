import { Col, Container, Row } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import crowdsensingLogo from "../../assets/images/projects/crowdsensing_logo.png";
import React from "react";

export function ProjectCrowdsensing() {
  const { t } = useI18next("projects");

  return (
    <Container fluid={true} className="project-header">
      <Row className="align-items-center flex-column">
        <Col xs={12} className="justify-content-center d-flex">
          <img className="crowdsensing-logo" src={crowdsensingLogo} alt="Kumuluz Crowdsensing" />
        </Col>
        <Col xs={12}>
          <h2 className="text-center" dangerouslySetInnerHTML={{ __html: t("crowdsensing.title") }} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <p dangerouslySetInnerHTML={{ __html: t("crowdsensing.description") }} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <p className="text-center">{t("crowdsensing.fundingNotice")}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-1">
        <Col xs={8} className="d-flex justify-content-center">
          <a className="skladi-url" href="http://www.eu-skladi.si" target="_blank" rel="noreferrer noopener">
            {t("crowdsensing.url")}
          </a>
        </Col>
      </Row>
    </Container>
  );
}
