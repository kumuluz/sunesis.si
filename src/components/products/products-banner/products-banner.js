import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import './products-banner.scss';

import { logos } from './logos';

export class ProductsBanner extends Component {
  static propTypes = {
    features: PropTypes.array,
    product: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
  };

  render() {
    const { features, product, title, subtitle } = this.props;

    return (
      <Container fluid className="banner">
        <Row className="align-items-center justify-content-center mb-5">
          <Col xs="12" xl="8" className="my-3">
            <img src={logos[product]} />
          </Col>
          <Col xs="12" xl="6" className="text-center">
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <h2>{subtitle}</h2>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          {features &&
            features.map((feature, i) => (
              <Col key={i} sm="12" md="3" xl="3" className="feature d-flex justify-content-center my-2 my-md-5">
                <img className="ml-0 ml-md-auto" src={feature.icon} />
                <h4>{feature.feature}</h4>
              </Col>
            ))}
          <div className="arrow" />
        </Row>
      </Container>
    );
  }
}
