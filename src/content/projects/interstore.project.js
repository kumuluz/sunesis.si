import { Col, Container, Row } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

export function ProjectInterstore() {
  const { t } = useI18next("projects");

  return (
    <Container fluid={true} className="project-header">
      <Row className="align-items-center flex-column">
        <Col xs={12} className="justify-content-center d-flex">
          <h2 className="text-center">{t("interstore.title")}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <p>
            <strong>{t("interstore.funding")}</strong>
          </p>
          <p>{t("interstore.description1")}</p>
          <p>{t("interstore.description2")}</p>
          <p>{t("interstore.description3")}</p>
          <p className="text-center">
            <a className="skladi-url" href={t("interstore.website")} target="_blank" rel="noreferrer noopener">
              {t("interstore.website")}
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
