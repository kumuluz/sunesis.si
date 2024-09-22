import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./benefits.scss";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useBenefitsState } from "./benefits.state";

export function Benefits({ title, description, benefits: initialBenefits, quote }) {
  const { t } = useI18next();
  const { benefits, moveRight, moveLeft, shiftAmount } = useBenefitsState(initialBenefits);

  const renderBenefit = (benefit, i) => {
    return benefit.content ? (
      <div key={i}>{benefit.content}</div>
    ) : (
      <div key={i} className="benefit">
        <img src={benefit.icon} alt={`benefit-icon-${i}`} />
        <h4>{t(benefit.title)}</h4>
        <p className="p-small" dangerouslySetInnerHTML={{ __html: t(benefit.description) }} />
      </div>
    );
  };

  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md="10" lg="7">
          <h2>{title}</h2>
          <p>{description}</p>
        </Col>
      </Row>
      <Row className="scroller-container">
        <Col xs="2" className="my-5 scroller-buttons">
          <div className="nav-buttons">
            <button onClick={moveLeft} aria-label="Move left">
              <p>&#60;</p>
            </button>
            <button onClick={moveRight} aria-label="Move right">
              <p>&#62;</p>
            </button>
          </div>
        </Col>
        <Col xs="10" className="my-5 scroller-content" style={{ overflow: "hidden" }}>
          <div className="benefits" style={{ transform: `translateX(-${shiftAmount}px)` }}>
            {benefits.map(renderBenefit)}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="10" md={{ size: 7, offset: 5 }} lg={{ size: 4, offset: 7 }}>
          <p className="text-left" dangerouslySetInnerHTML={{ __html: quote }} />
        </Col>
      </Row>
    </Container>
  );
}
