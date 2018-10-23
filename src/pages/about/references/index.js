import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';
import { Footer, SubNavbar } from '../../../components';

import '../index.scss';

import { references } from '../../../content/references';
import { ParallaxBlock } from '../../../components';

import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';
import Helmet from "react-helmet";

@translate('about')
export default class AboutUsPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  componentDidMount() {
    GoogleAnalyticsService.registerPageView();
  }

  render() {
    const { t } = this.props;

    const rows = Math.ceil(references.length / 3);
    const ref = Object.assign([], references);
    const newRefs = [];
    for (let i = 0; i < rows; i++) {
      newRefs.push([...ref.splice(0, 3)]);
    }

    return (
      <div className="aboutUs">
          <Helmet title={t("site.references.title") + " - " + t("site.title")}/>
        <SubNavbar nav="/about" />
        <Container fluid className="banner-dark">
          <Row className="justify-content-center">
            <Col xs="12" lg="8">
              <h1>{t("references.title")}</h1>
              <h2>{t("references.subtitle")}</h2>
            </Col>
          </Row>
          <div className="arrow" />
        </Container>
        <ParallaxBlock image={cube01} size={100} xOffset="10%" yOffset="-80px" />
        <ParallaxBlock image={cube02} size={70} xOffset="90%" yOffset="-260px" />

        <Container className="whiteSection">
          {newRefs.map(refs => [
            <Row key="references" className="justify-content-center ref-white-section">
              {refs.map((ref, key) => (
                <Col key={key} md="4" lg="3" className="text-center ref mb-4">
                  <img className="img-fluid mb-3" src={ref.image} />
                  <h4 className="blue-400">{ref.name}</h4>
                  <p>{ref.description}</p>
                </Col>
              ))}
            </Row>,
            <Row key="line">
              <Col className="d-flex justify-content-center">
                <div className="line" />
              </Col>
            </Row>
          ])}
        </Container>

        <ParallaxBlock image={cube02} size={90} xOffset="15%" yOffset="480px" />
        <ParallaxBlock image={cube01} size={80} xOffset="70%" yOffset="380px" />

        <Footer social />
      </div>
    );
  }
}
