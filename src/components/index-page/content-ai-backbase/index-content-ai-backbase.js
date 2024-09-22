import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "../../link/link.component";

import "./index-content-ai-backbase.scss";
import { Itemized } from "../../itemized/itemized.component";
import chatGptLogo from "./images/chatgpt-logo.png";
import backbaseStock from "./images/backbase-stock-photo.png";
import { useI18next } from "gatsby-plugin-react-i18next";

export function IndexContentAiBackbase() {
  const { t } = useI18next();

  return (
    <div className="index-content-component">
      <div className="flex-column d-flex align-items-center">
        <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
          <Row className="mt-5 content-body">
            <Col md={6}>
              <img src={chatGptLogo} style={{ width: "100%" }} alt="openai" />
            </Col>
            <Col md={6}>
              <div className="title">
                <h2>{t("index:content.tabs.ai-backbase.ai.title")}</h2>
                <div className="title-underline" />
              </div>
              <h3>{t("index:content.tabs.ai-backbase.ai.subtitle")}</h3>
              <p>{t("index:content.tabs.ai-backbase.ai.description")}</p>
              <Row>
                <Col ms={12}>
                  <Row>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.ai.items.item-1" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.ai.items.item-2" />
                    </Col>
                  </Row>
                  <Row className="items-margin-top">
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.ai.items.item-3" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.ai.items.item-4" />
                    </Col>
                  </Row>
                  <Row className="items-margin-top">
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.ai.items.item-5" />
                    </Col>
                  </Row>
                  <Row>
                    <Link to={"/services/ai"} external={false} className="link mt-4">
                      {t("index:content.tabs.services.learn-more")}
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="space-top content-body">
            <Col md={6}>
              <h3 style={{ marginBottom: 0 }}>{t("index:content.tabs.ai-backbase.backbase.above-title")}</h3>
              <div className="title" style={{ marginBottom: "30px" }}>
                <h2>{t("index:content.tabs.ai-backbase.backbase.title")}</h2>
                <div className="title-underline" />
              </div>
              <p>{t("index:content.tabs.ai-backbase.backbase.description")}</p>
              <Row>
                <Col ms={12}>
                  <Row>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.backbase.items.item-1" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.backbase.items.item-2" />
                    </Col>
                  </Row>
                  <Row className="items-margin-top">
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.backbase.items.item-3" />
                    </Col>
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.backbase.items.item-4" />
                    </Col>
                  </Row>
                  <Row className="items-margin-top">
                    <Col md="6">
                      <Itemized trKey="index:content.tabs.ai-backbase.backbase.items.item-5" />
                    </Col>
                  </Row>
                  <Row>
                    <Link to={"/services/backbase"} external={false} className="link mt-4">
                      {t("index:content.tabs.services.learn-more")}
                    </Link>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <img src={backbaseStock} style={{ width: "100%" }} alt="backbase-stock-photo" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
