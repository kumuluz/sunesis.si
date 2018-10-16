import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import './media-section.scss';

import awardDuke from '../../../assets/images/awards/duke.jpg';
import awardEurocloud from '../../../assets/images/awards/euro-cloud.png';
import awardStartup from '../../../assets/images/awards/startup.png';

@translate()
export class MediaSection extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="media-section">
        <div className="media">
          <Container>
            <Row>
              <Col>
                <h3>{t('awards.title')}</h3>
                <div className="d-flex align-items-center justify-content-around awards">
                  <img className="img-fluid" src={awardDuke} />
                  <img src={awardEurocloud} />
                  <img src={awardStartup} />
                </div>

                <div className="line" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
