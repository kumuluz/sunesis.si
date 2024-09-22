import { Col, Container, Row } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

export function ProjectEdisonWinci() {
  const { t } = useI18next("projects");

  return (
    <Container fluid={true} className="project-header">
      <Row className="align-items-center flex-column">
        <Col xs={12} className="justify-content-center d-flex">
          <h2 className="text-center" dangerouslySetInnerHTML={{ __html: t("edisonWinci.title") }} />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={10} lg={8}>
          <p dangerouslySetInnerHTML={{ __html: t("edisonWinci.description1") }} />
          <p>{t("edisonWinci.description2")}</p>
          <p>{t("edisonWinci.description3")}</p>
          <p>{t("edisonWinci.description4")}</p>
          <ul>
            <li>{t("edisonWinci.features.feature1")}</li>
            <li>{t("edisonWinci.features.feature2")}</li>
            <li>{t("edisonWinci.features.feature3")}</li>
            <li>{t("edisonWinci.features.feature4")}</li>
            <li>{t("edisonWinci.features.feature5")}</li>
          </ul>
          <p>{t("edisonWinci.description4-2")}</p>
          <p>{t("edisonWinci.description5")}</p>
          <p>{t("edisonWinci.description6")}</p>
          <p>{t("edisonWinci.goals.title")}</p>
          <p>
            <strong>{t("edisonWinci.goals.goal1")}</strong>
            <br />
            {t("edisonWinci.goals.goal1_indicator")}
            <br />
            <strong>{t("edisonWinci.goals.goal2")}</strong>
            <br />
            {t("edisonWinci.goals.goal2_indicator")}
            <br />
            <strong>{t("edisonWinci.goals.goal3")}</strong>
            <br />
            {t("edisonWinci.goals.goal3_indicator")}
            <br />
            <strong>{t("edisonWinci.goals.goal4")}</strong>
            <br />
            {t("edisonWinci.goals.goal4_indicator")}
            <br />
            <strong>{t("edisonWinci.goals.goal5")}</strong>
            <br />
            {t("edisonWinci.goals.goal5_indicator")}
          </p>
          <p>
            <strong>{t("edisonWinci.partners.leading_title")}</strong>
            <ul>
              <li>{t("edisonWinci.partners.leading")}</li>
            </ul>
            <strong>{t("edisonWinci.partners.partner_title")}</strong>
            <ul>
              {t("edisonWinci.partners.partner_list", { returnObjects: true }).map((partner, index) => (
                <li key={index}>{partner}</li>
              ))}
            </ul>
            <p>{t("edisonWinci.partners.project_period")}</p>
            <p>
              <strong>{t("edisonWinci.partners.leaders")}</strong>
            </p>
            <ul>
              {t("edisonWinci.leaders.leader_list", { returnObjects: true }).map((leader, index) => (
                <li key={index}>{leader}</li>
              ))}
            </ul>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={10} lg={8}>
          <p className="text-center">{t("edisonWinci.disclaimer")}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-1">
        <Col xs={8} className="d-flex justify-content-center">
          <a className="skladi-url" href="http://www.eu-skladi.si" target="_blank" rel="noreferrer noopener">
            {t("edisonWinci.website")}
          </a>
        </Col>
      </Row>
    </Container>
  );
}
