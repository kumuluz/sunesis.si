import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "../../link/link.component";

import "./index-content.scss";
import { Itemized } from "../../itemized/itemized.component";
import techSpecialist from "./images/tech-specialists.png";
import stockCloud from "./images/stock-cloud.jpg";
import stockModernization from "./images/stock-modernization.jpg";
import stockGroup from "./images/stock-group.svg";
import stockBoard from "./images/board-stock.svg";
import { useI18next } from "gatsby-plugin-react-i18next";

export function IndexContent() {
  const { t, i18n } = useI18next();

  return (
    <div className="index-content-component">
      <div className="flex-column d-flex align-items-center">
        <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
          <h2>{t("index:content.tabs.services.title")}</h2>
          <p className="mt-3">{t("index:content.tabs.services.subtitle")}</p>
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

        {/* <div className="points flex-column d-flex align-items-center">
          <div className="arrow" />
          <Row className="content-body">
            <Col md={12} className="p-0">
              <Row style={{ marginBottom: "60px" }} className="d-flex justify-content-center">
                <div className="points-title">
                  <div>1</div>
                  <h2>{t("index:content.tabs.digitalization.points.point-1.title")}</h2>
                </div>
                <div className="points-body">
                  <p>{t("index:content.tabs.digitalization.points.point-1.description")}</p>
                </div>
                <div className="points-items">
                  <Row>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-1.items.item-1" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-1.items.item-2" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-1.items.item-3" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-1.items.item-4" />
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row style={{ marginBottom: "60px" }} className="d-flex justify-content-center">
                <div className="points-title">
                  <div>2</div>
                  <h2>{t("index:content.tabs.digitalization.points.point-2.title")}</h2>
                </div>
                <div className="points-body">
                  <p>{t("index:content.tabs.digitalization.points.point-2.description")}</p>
                </div>
                <div className="points-items">
                  <Row>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-2.items.item-1" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-2.items.item-2" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-2.items.item-3" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-2.items.item-4" />
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row className="d-flex justify-content-center">
                <div className="points-title">
                  <div>3</div>
                  <h2>{t("index:content.tabs.digitalization.points.point-3.title")}</h2>
                </div>
                <div className="points-body">
                  <p>{t("index:content.tabs.digitalization.points.point-3.description")}</p>
                </div>
                <div className="points-items">
                  <Row>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-3.items.item-1" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-3.items.item-2" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-3.items.item-3" />
                    </Col>
                    <Col md="12">
                      <Itemized small={true} trKey="index:content.tabs.digitalization.points.point-3.items.item-4" />
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
        </div> */}
      </div>

      {/* <div className="flex-column d-flex align-items-center dark-blue-specialist">
        <div className="beige-arrow" style={{ marginBottom: "60px" }} />
        <Row style={{ paddingBottom: "80px" }} className="content-body">
          <Col md={6}>
            <div className="title">
              <h2 className="title-slim">{t("index:content.tabs.development.above-title")}</h2>
              <h2>{t("index:content.tabs.development.title")}</h2>
              <div className="title-underline" />
            </div>
            <p style={{ marginTop: "20px", marginBottom: "40px" }}>{t("index:content.tabs.development.description")}</p>
            <Row>
              <Col ms={12}>
                <Row>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.development.items.item-1" />
                  </Col>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.development.items.item-2" />
                  </Col>
                </Row>
                <Row className="items-margin-top">
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.development.items.item-3" />
                  </Col>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.development.items.item-4" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <img src={techSpecialist} alt="tech specialists" style={{ width: "100%" }} />
          </Col>
        </Row>
        <div className="white-arrow-reversed" />
      </div> */}

      <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
        <Row className="content-body">
          <Col md={6}>
            <img src={stockGroup} style={{ width: "100%" }} alt="stock-photo-group" />
          </Col>
          <Col md={6}>
            <div className="title">
              <h2>{t("index:content.tabs.knowledge-transfer.opportunities.title")}</h2>
              <div className="title-underline" />
            </div>
            <h3>{t("index:content.tabs.knowledge-transfer.opportunities.subtitle")}</h3>
            <p>{t("index:content.tabs.knowledge-transfer.opportunities.description")}</p>
            <Row>
              <Col ms={12}>
                <Row>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.knowledge-transfer.opportunities.items.item-1" />
                  </Col>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.knowledge-transfer.opportunities.items.item-2" />
                  </Col>
                </Row>
                <Row className="items-margin-top">
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.knowledge-transfer.opportunities.items.item-3" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="space-top content-body">
          <Col md={6}>
            <h3 style={{ marginBottom: 0 }}>{t("index:content.tabs.knowledge-transfer.concepts.above-title")}</h3>
            <div className="title" style={{ marginBottom: "30px" }}>
              <h2>{t("index:content.tabs.knowledge-transfer.concepts.title")}</h2>
              <div className="title-underline" />
            </div>
            <p>{t("index:content.tabs.knowledge-transfer.concepts.description")}</p>
            <Row>
              <Col ms={12}>
                <Row>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.knowledge-transfer.concepts.items.item-1" />
                  </Col>
                  <Col md="6">
                    <Itemized trKey="index:content.tabs.knowledge-transfer.concepts.items.item-2" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <img src={stockBoard} style={{ width: "100%" }} alt="omni-channel" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
