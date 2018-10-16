import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

export class ProductsStrategy extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    children: PropTypes.any
  };

  render() {
    const { title, subtitle, children } = this.props;

    return (
      <Container fluid={true} className="strategy">
        <Row>
          <Col xs="12" className="px-0">
            <div className="arrow" />
            <div className="content text-center pt-5 p-3 p-lg-0">
              <Container>
                <Row className="d-flex justify-content-center">
                  <Col xl="9">
                    <div className="line" />
                    <h2 className="mb-4">{title}</h2>
                    {(typeof subtitle === 'string' && <p className="mb-0" dangerouslySetInnerHTML={{ __html: subtitle }} />) || subtitle}
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="reverse-arrow" />
            <div className="content-gradient text-center pt-5 p-3 p-lg-0">{children}</div>
            <div className="reverse-arrow-empty" />
          </Col>
        </Row>
      </Container>
    );
  }
}
