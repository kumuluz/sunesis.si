import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import { products as kumuluzDigitalProducts } from '../../content/products';

import './products-grid.scss';

export class ProductsGrid extends Component {
  static propTypes = {
    transformation: PropTypes.any,
    dark: PropTypes.any,
    locale: PropTypes.string
  };

  render() {
    const { transformation, dark, locale } = this.props;

    const kumuluzDigitalProductsLastRows = Math.ceil(kumuluzDigitalProducts.length / 3);
    const kumuluzDigitalProductsLastRowIndex = (kumuluzDigitalProductsLastRows - 1) * 3 - 1;

    return (
      <Row>
        {kumuluzDigitalProducts(locale).map((service, i) => (
          <Col
            key={i}
            xs="12"
            md="4"
            className={'product ' + (i > kumuluzDigitalProductsLastRowIndex ? 'lastRow ' : '') + (dark ? 'dark' : 'light')}
          >
            <a href={service.href} target="_blank">
              <div className="name">{service.name}</div>
            </a>
            {(!transformation && <div className="description">{service.description}</div>) || (
              <div className="description">{service.transformation}</div>
            )}
          </Col>
        ))}
      </Row>
    );
  }
}
