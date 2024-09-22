import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";

import { references, referencesHorizon } from "../../content/references";
import "./references.scss";

export function References({ showIntro, marginTopClass, hideHorizon }) {
  const { t } = useI18next();
  const showIntroText = showIntro === undefined ? true : showIntro;
  const marginTop = marginTopClass === undefined ? "mt-5" : marginTopClass;

  return (
    <Row className={"references-section " + marginTop}>
      <Col>
        {showIntroText && (
          <div className="references-text">
            <h3>{t("references.title")}</h3>
            <p>{t("references.para")}</p>
          </div>
        )}
        <Row className="references">
          {references.map((ref, i) => (
            <Col key={i} xs="5" md="3" lg="2" style={{ backgroundImage: "url(" + ref.image + ")" }}>
              <span>
                <p>{ref.name}</p>
              </span>
            </Col>
          ))}
        </Row>

        {!hideHorizon && (
          <>
            <div className="references-text mt-5">
              <h3>{t("references.title-horizon")}</h3>
            </div>
            <Row className="references">
              {referencesHorizon.map((ref, i) => (
                <Col key={i} xs="5" md="3" lg="2" style={{ backgroundImage: "url(" + ref.image + ")" }}>
                  <span>
                    <p>{ref.name}</p>
                  </span>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Col>
    </Row>
  );
}

References.propTypes = {
  showIntro: PropTypes.bool,
  marginTopClass: PropTypes.string,
};
