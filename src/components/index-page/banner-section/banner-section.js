import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {Container, Row, Col} from 'reactstrap';
import {links} from "../../../content";

import sunesisCubeFull from "../../../assets/images/sunesisCube-full.svg";
import sunesisCube from "../../../pages/products/images/sunesis-cube-full.png";

import './banner-section.scss';

@translate()
export class BannerSection extends Component {
    static propTypes = {
        t: PropTypes.func
    };

    render() {
        const {t} = this.props;

        return (
            <div className="banner-section">
                <div className="banner">
                    <h1 className="col-lg-9 col-xl-8 px-5 mx-auto"
                        dangerouslySetInnerHTML={{__html: t('banner.title')}}/>
                    <h2 className="h1-subtitle px-5 mt-3">{t('banner.subTitle')}</h2>
                </div>

                <div className="cube-section">
                    <Container>
                        <div>
                            <div className="cube-text">
                                <p className="in-bold">
                                    {t('banner.cubeTitle')}
                                </p>
                            </div>
                            <div className="cube-image">
                                <img src={sunesisCubeFull}/>
                                <div className="mobile-cube-logo">
                                    <img src={sunesisCube}/>
                                </div>
                                <div className="mobile-cube">
                                    <div className="mobile-cube-item">{t('banner.mobile-cube-1')}</div>
                                    <div className="mobile-cube-item">{t('banner.mobile-cube-2')}</div>
                                    <div className="mobile-cube-item">{t('banner.mobile-cube-3')}</div>
                                    <div className="mobile-cube-item">{t('banner.mobile-cube-4')}</div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs="12" lg="3"
                                 className="d-flex flex-column justify-content-between align-items-center order-2 order-lg-1">
                                <span>
                                    <h3>{t('theWay.oldWay.title')}</h3>
                                    <ul className="mt-4">{[1, 2, 3, 4, 5].map((reason, i) => <li
                                        key={i}>{t(`theWay.oldWay.reason${reason}`)}</li>)}</ul>
                                </span>
                            </Col>
                            <Col md="12" lg="6" className="order-1 order-lg-2 cube"/>
                            <Col md="12" lg="3"
                                 className="d-flex flex-column justify-content-between align-items-center order-3 order-lg-3">
                                <span>
                                  <h3>{t('theWay.newWay.title')}</h3>
                                  <ul className="mt-4">
                                    {[1, 2, 3, 4, 5, 6, 7].map((reason, i) => <li
                                        key={i}>{t(`theWay.newWay.reason${reason}`)}</li>)}
                                  </ul>
                                </span>
                                <a href={links.blog} className="btn btn-primary mt-3 mb-5" color="primary"
                                   target="_blank" rel="noopener noreferrer">
                                    {t('theWay.newWay.readOurBlog')}
                                </a>
                            </Col>
                        </Row>
                    </Container>

                    <div className="arrow-left-ro-right"/>
                </div>
            </div>
        );
    }
}
