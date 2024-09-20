import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "../../link/link.component";

import "./index-content.scss";
import { Itemized } from "../../itemized/itemized.component";
import stockCloud from "./images/stock-cloud.jpg";
import stockModernization from "./images/stock-modernization.jpg";
import { useI18next } from "gatsby-plugin-react-i18next";

export function IndexContent() {
  const { t } = useI18next();

  return (
    <div className="index-content-component">
      <div className="flex-column d-flex align-items-center">
        <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
          <h2>{t("index:content.tabs.services.title")}</h2>
          <p className="mt-3 mx-5">{t("index:content.tabs.services.subtitle")}</p>
          <Row className="mt-5 content-body">
            <Col md={6}>
              <img
                src={stockCloud}
                style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                alt="stock-photo-cloud"
              />
            </Col>
            <Col md={6}>
              <div className="title">
                <h2>{t("index:content.tabs.services.development.title")}</h2>
                <div className="title-underline" />
              </div>
              <h3>{t("index:content.tabs.services.development.subtitle")}</h3>
              <p>{t("index:content.tabs.services.development.description")}</p>
              <p>{t("index:content.tabs.services.development.description-2")}</p>
              <Row>
                <Col ms={12}>
                  <Row>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.development.items.item-1" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.development.items.item-2" />
                    </Col>
                  </Row>
                  <Row className="items-margin-top">
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.development.items.item-3" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.development.items.item-4" />
                    </Col>
                  </Row>
                  <Row>
                    <Link to={"/services/solutions"} external={false} className="link mt-4">
                      {t("index:content.tabs.services.learn-more")}
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="space-top content-body">
            <Col md={6}>
              <h3 style={{ marginBottom: 0 }}>{t("index:content.tabs.services.modernization.above-title")}</h3>
              <div className="title" style={{ marginBottom: "30px" }}>
                <h2>{t("index:content.tabs.services.modernization.title")}</h2>
                <div className="title-underline" />
              </div>
              <p>{t("index:content.tabs.services.modernization.description")}</p>
              <p>{t("index:content.tabs.services.modernization.description-2")}</p>
              <Row>
                <Col ms={12}>
                  <Row>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.modernization.items.item-1" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.modernization.items.item-2" />
                    </Col>
                  </Row>
                  <Row className="items-margin-top">
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.modernization.items.item-3" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.services.modernization.items.item-4" />
                    </Col>
                  </Row>
                  <Row>
                    <Link to={"/services/solutions"} external={false} className="link mt-4">
                      {t("index:content.tabs.services.learn-more")}
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <img
                src={stockModernization}
                style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                alt="stock-modernization"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
