import React from "react";
import * as PropTypes from "prop-types";
import { Row, Col, Container } from "reactstrap";

import { LineTitle } from "..";
import { innovativeProducts } from "../../../content/indexPage/innovatite-products";

import "./capabilities-section.scss";
import imageStrategicTactical from "../../../assets/images/strategic-tactical.svg";
import imageOperational from "../../../assets/images/operational.svg";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Link } from "../../link/link.component";

const strategicTacticalBullets = [
  ["core-services.strat-and-tact.item-1-1", "core-services.strat-and-tact.item-1-2"],
  ["core-services.strat-and-tact.item-2-1", "core-services.strat-and-tact.item-2-2"],
  ["core-services.strat-and-tact.item-3-1", "core-services.strat-and-tact.item-3-2"],
];

const operationalBullets = [
  ["core-services.operational.item-1-1", "core-services.operational.item-1-2"],
  ["core-services.operational.item-2-1", "core-services.operational.item-2-2"],
  ["core-services.operational.item-3-1", "core-services.operational.item-3-2"],
  ["core-services.operational.item-3-3", "core-services.operational.item-4-1"],
  ["core-services.operational.item-4-2"],
  ["core-services.operational.item-4-3", "core-services.operational.item-4-4"],
];

export function CapabilitiesSection() {
  const { t } = useI18next();

  return (
    <Container fluid={true}>
      <Row className="justify-content-center services-section">
        <Col xs="12" lg="10" xl="8" className="content p-0">
          <LineTitle title={t("core-services.title")} />

          <div className="core-services-section">
            <p>{t("core-services.para1")}</p>
            <p>{t("core-services.para2")}</p>
            <div className="first-section">
              <div className="image">
                <img src={imageStrategicTactical} />
              </div>
              <div className="bullets">
                <h3>{t("core-services.strat-and-tact.title")}</h3>
                {strategicTacticalBullets.map((row, rowIndex) => (
                  <div key={rowIndex} className="bullet-container">
                    {row.map((item, itemIndex) => (
                      <span key={itemIndex} className="bullet-item">
                        <span className="blue-box" />
                        <span className="bullet-item-text">{t(item)}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="second-section">
              <div className="bullets">
                <h3>{t("core-services.operational.title")}</h3>
                {operationalBullets.map((row, rowIndex) => (
                  <div key={rowIndex} className="bullet-container">
                    {row.map((item, itemIndex) => (
                      <span key={itemIndex} className="bullet-item">
                        <span className="blue-box" />
                        <span className="bullet-item-text">{t(item)}</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="image">
                <img src={imageOperational} />
              </div>
            </div>
            <p>{t("core-services.para3")}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
