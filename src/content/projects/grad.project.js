import { Col, Container, Row } from "reactstrap";
import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

import nextGenEuLogo from "../../assets/images/projects/nextgen-eu.png";
import nooLogo from "../../assets/images/projects/noo.png";
import ministryGRITLogo from "../../assets/images/projects/ministry_grit_v2.png";

export function ProjectGrad() {
  const { t } = useI18next("projects");

  return (
    <>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
            <img src={nextGenEuLogo} alt="Next Gen EU" />
          </Col>
          <Col sm={12} md={4} lg={2} className="noo-logo sponsor-logo sponsor-logo-2">
            <img src={nooLogo} alt="NOO" />
          </Col>
          <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
            <img src={ministryGRITLogo} alt="Ministry GRIT" />
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="project-header small-header mb-5 mt-2">
        <Row className="align-items-center flex-column">
          <Col xs={12}>
            <h2 className="text-center">{t("grad.title")}</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={10} lg={8}>
            <p dangerouslySetInnerHTML={{ __html: t("grad.description1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("grad.description2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("grad.description3") }} />
            <p dangerouslySetInnerHTML={{ __html: t("grad.description4") }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
