import React from "react";
import * as PropTypes from "prop-types";
import { Row, Col, Container } from "reactstrap";

import { LineTitle } from "..";
import { innovativeProducts } from "../../../content/indexPage/innovatite-products";

import "./products-section.scss";
import imageStrategicTactical from "../../../assets/images/strategic-tactical.svg";
import imageOperational from "../../../assets/images/operational.svg";
import imageDuke from "../../../assets/images/duke.svg";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Link } from "../../link/link.component";

export function ProductsSection() {
  const { t } = useI18next();

  return (
    <Container fluid={true}>
      <Row className="justify-content-center services-section">
        <Col xs="12" lg="10" xl="8" className="content p-0">
          <LineTitle title={t("innovative-products.title")} className="products-title" />

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

          <div className="description-section">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}
