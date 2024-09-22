import { Col, Container, Row } from "reactstrap";
import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

export function ProjectAgriTrace() {
  const { t } = useI18next("projects");

  return (
    <Container fluid={true} className="project-header small-header mb-5 mt-2">
      <Row className="align-items-center flex-column">
        <Col xs={12}>
          <h2 className="text-center" dangerouslySetInnerHTML={{ __html: t("agriTrace.title") }} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <p dangerouslySetInnerHTML={{ __html: t("agriTrace.description1") }} />
          <p dangerouslySetInnerHTML={{ __html: t("agriTrace.description2") }} />
        </Col>
      </Row>
    </Container>
  );
}
