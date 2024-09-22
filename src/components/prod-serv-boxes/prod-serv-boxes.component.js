import React from "react";
import * as PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import { useI18next } from "gatsby-plugin-react-i18next";

import "./prod-serv-boxes.component.scss";
import { Link } from "../link/link.component";

export function ProductsServicesBoxesComponent({ items, learnMoreLabel }) {
  const { t } = useI18next("about");

  function renderLink(label, url) {
    if (url.startsWith("/")) {
      return <Link to={url}>{label} &rarr;</Link>;
    } else {
      return (
        <Link to={url} external={true}>
          {label} &rarr;
        </Link>
      );
    }
  }

  function renderBox(item) {
    return (
      <div className="box-item">
        <div className="box-item-content">
          <div className="box-item-title">{t(item.title)}</div>
          <div className="box-item-subtitle">{t(item.subtitle)}</div>
          <div className="box-item-desc">{t(item.description)}</div>
        </div>
        <div className="box-item-link">{renderLink(learnMoreLabel, item.url)}</div>
      </div>
    );
  }

  return (
    <div className="prod-serv-boxes-component">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={7}>
          <Row>
            {items.map((item, index) => (
              <Col key={index} xs={12} lg={item.size === 2 ? 12 : 6}>
                {renderBox(item)}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

ProductsServicesBoxesComponent.propTypes = {
  items: PropTypes.array,
  learnMoreLabel: PropTypes.string,
};
