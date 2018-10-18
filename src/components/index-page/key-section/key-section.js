import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import './key-section.scss';

import imageKey from '../../../assets/images/key-diagram.svg';

@translate()
export class KeySection extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  render() {
    const { t } = this.props;

    return (
      <div className="key-section">
        <div className="key">
          <Container>
            <Row className="justify-content-center">
              <Col xl="8">
                <h2 className="text-center" dangerouslySetInnerHTML={{ __html: t('key.title') }} />
                <h3 className="h2-subtitle text-center">{t('key.subtitle')}</h3>
              </Col>
            </Row>

            <Row>
              <Col md="12" lg="6" xl="5">
                <h3 className="mb-3">{t('key.weHelp.title')}</h3>
                <p className="checkbox one">{t('key.weHelp.key1')}</p>
                <p className="checkbox two">{t('key.weHelp.key2')}</p>
                <p className="checkbox three">{t('key.weHelp.key3')}</p>

                <h3 className="mb-3">{t('key.weAchieve.title')}</h3>
                <p className="checkbox one">{t('key.weAchieve.key1')}</p>
                <p className="checkbox two">{t('key.weAchieve.key2')}</p>
                <p className="checkbox three">{t('key.weAchieve.key3')}</p>
                <p className="checkbox four">{t('key.weAchieve.key4')}</p>
              </Col>
              <Col xl="2" className="d-none d-xl-block" />
              <Col md="12" lg="6" xl="5" className="d-none d-lg-block">
                <img src={imageKey} className="img-fluid" style={{ height: '650px' }} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
