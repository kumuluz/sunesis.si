import React from "react";
import * as PropTypes from "prop-types";
import { Row, Col, Container } from "reactstrap";

import { LineTitle } from "..";
import { innovativeProducts } from "../../../content/indexPage/innovatite-products";

import "./services-section.scss";
import imageStrategicTactical from "../../../assets/images/strategic-tactical.svg";
import imageOperational from "../../../assets/images/operational.svg";
import imageDuke from "../../../assets/images/duke.svg";
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
];

export function ServicesSection({ showCoreServices }) {
  const { t } = useI18next();
  return (
    <Container fluid={true}>
      <Row className="justify-content-center services-section">
        <Col xs="12" lg="10" xl="8" className="content p-0">
          <div className="description-section">
            <h2>{t("description.title")}</h2>
            <p>{t("description.para1")}</p>
            <p>{t("description.para2")}</p>
            <div className="duke-award-box">
              <div className="duke-award-box-background">
                <div className="duke-award-box-img">
                  <img src={imageDuke} alt="Duke award" />
                </div>
                <div className="duke-award-box-content">
                  {t("description.award")}
                  <br />
                  <strong>{t("description.award-bold")}</strong>
                </div>
              </div>
            </div>
            <p>
              {t("description.para3")}{" "}
              <Link external={false} to="/services/solutions">
                {t("description.more")}
              </Link>
            </p>
          </div>

          {showCoreServices && (
            <>
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
              <Link external={false} to="/services/solutions" className="btn btn-primary">
                {t("core-services.more-about")}
              </Link>
              <br />
            </>
          )}

          <LineTitle title={t("innovative-products.title")} />

          <div className="innovative-products-section">
            <p>{t("innovative-products.para1")}</p>
            <p>{t("innovative-products.para2")}</p>
            <div className="box-area">
              {innovativeProducts(t).map((box, index) => (
                <div key={index} className="box-item">
                  <div className="box-item-img">
                    <img src={box.image} />
                  </div>
                  <div className="box-item-content">
                    <div className="box-item-title">{box.title}</div>
                    <div className="box-item-sh-desc">{box.shortDesc}</div>
                    <div className="box-item-desc">{box.desc}</div>
                    <a target="_blank" href={box.url}>
                      {t("innovative-products.learn-more")}
                      &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

ServicesSection.propTypes = {
  showCoreServices: PropTypes.bool,
};
