import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ParallaxBlock } from '../..';
import { Container, Row, Col } from 'reactstrap';

import './dark-floating-section.scss';

import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';

export class DarkFloatingSection extends Component {
  static propTypes = {
    topContent: PropTypes.object,
    bottomContent: PropTypes.object,
  };
  
  render() {
    const { topContent, bottomContent } = this.props;

    return (
      <div className="dark-floating-section">
        <Container fluid={true}>
          <Row>
            <Col xs="12" className="px-0">
              <div className="arrow" />
              <div className="content text-center pt-5">{topContent}</div>
              {(bottomContent) && (
                  <>
                  <div className="reverse-arrow" />
  
                  <div className="content-gradient text-center">{bottomContent}</div>
  
                  <ParallaxBlock className="d-none d-md-block" image={cube02} size={130} xOffset="5%" yOffset={100} />
                  <ParallaxBlock className="d-none d-md-block" image={cube01} size={150} xOffset="80%" yOffset={200} />
                  {/*<div className="reverse-arrow-empty" />*/}
                  </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
