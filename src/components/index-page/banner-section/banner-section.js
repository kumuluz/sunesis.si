import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import {Container, Row, Col} from 'reactstrap';
import {FormattedMessage} from "react-intl";

import sunesisCubeFull from "../../../assets/images/sunesisCube-full.svg";
import sunesisCube from "../../../pages/products/images/sunesis-cube-full.png";
import './banner-section.scss';

import {BLOG_URL} from "../../../content/constants";
import {TranslationUtil} from "../../../utils/translation.util";

export class BannerSection extends Component {

    static propTypes = {
        locale: PropTypes.string
    };

    render() {
        const {locale} = this.props;
        return (
            <div className="banner-section">
                <div className="banner">
                    <h1 className="col-lg-9 col-xl-8 px-5 mx-auto"
                        dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, "technologies-page.banner.title")}}/>
                    <h2 className="h1-subtitle px-5 mt-3">
                        <FormattedMessage id="technologies-page.banner.subTitle"/>
                    </h2>
                </div>

                <div className="cube-section">
                    <Container>
                        <div>
                            <div className="cube-text">
                                <p className="in-bold">
                                    <FormattedMessage id="technologies-page.banner.cubeTitle"/>
                                </p>
                            </div>
                            <div className="cube-image">
                                <img src={sunesisCubeFull} alt="sunesis-cube"/>
                                <div className="mobile-cube-logo">
                                    <img src={sunesisCube} alt="sunesis-mobile-cube"/>
                                </div>
                                <div className="mobile-cube">
                                    <div className="mobile-cube-item">
                                        <FormattedMessage id="technologies-page.banner.mobile-cube-1"/>
                                    </div>
                                    <div className="mobile-cube-item">
                                        <FormattedMessage id="technologies-page.banner.mobile-cube-2"/>
                                    </div>
                                    <div className="mobile-cube-item">
                                        <FormattedMessage id="technologies-page.banner.mobile-cube-3"/>
                                    </div>
                                    <div className="mobile-cube-item">
                                        <FormattedMessage id="technologies-page.banner.mobile-cube-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs="12" lg="3"
                                 className="d-flex flex-column justify-content-between align-items-center order-2 order-lg-1">
                                <span>
                                    <h3>
                                        <FormattedMessage id="technologies-page.theWay.oldWay.title"/>
                                    </h3>
                                    <ul className="mt-4">{[1, 2, 3, 4, 5].map((reason, i) => <li
                                        key={i}>
                                        <FormattedMessage id={`technologies-page.theWay.oldWay.reason${reason}`}/>
                                    </li>)}</ul>
                                </span>
                            </Col>
                            <Col md="12" lg="6" className="order-1 order-lg-2 cube"/>
                            <Col md="12" lg="3"
                                 className="d-flex flex-column justify-content-between align-items-center order-3 order-lg-3">
                                <span>
                                  <h3>
                                      <FormattedMessage id="technologies-page.theWay.newWay.title"/>
                                  </h3>
                                  <ul className="mt-4">
                                    {[1, 2, 3, 4, 5, 6, 7].map((reason, i) => <li
                                        key={i}>
                                        <FormattedMessage id={`technologies-page.theWay.newWay.reason${reason}`}/>
                                    </li>)}
                                  </ul>
                                </span>
                                <a href={BLOG_URL} className="btn btn-primary mt-3 mb-5" color="primary"
                                   target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage id="technologies-page.theWay.newWay.readOurBlog"/>
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
