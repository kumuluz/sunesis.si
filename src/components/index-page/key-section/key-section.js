import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import imageKey from '../../../assets/images/key-diagram.svg';
import './key-section.scss';
import {useI18next} from "gatsby-plugin-react-i18next";

export function KeySection() {
    const {t} = useI18next("technologies");
    
    return (
        <div className="key-section">
            <div className="key">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl="8">
                            <h2 className="text-center"
                                dangerouslySetInnerHTML={{__html: t("key.title")}}/>
                            <h3 className="h2-subtitle text-center">
                                {t("key.subtitle")}
                            </h3>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md="12" lg="6" xl="5">
                            <h3 className="mb-3 checkbox-title">
                                {t("key.weHelp.title")}
                            </h3>
                            <p className="checkbox one">
                                {t("key.weHelp.key1")}
                            </p>
                            <p className="checkbox two">
                                {t("key.weHelp.key2")}
                            </p>
                            <p className="checkbox three">
                                {t("key.weHelp.key3")}
                            </p>
                            
                            <h3 className="mb-3 checkbox-title">
                                {t("key.weAchieve.title")}
                            </h3>
                            <p className="checkbox one">
                                {t("key.weAchieve.key1")}
                            </p>
                            <p className="checkbox two">
                                {t("key.weAchieve.key2")}
                            </p>
                            <p className="checkbox three">
                                {t("key.weAchieve.key3")}
                            </p>
                            <p className="checkbox four">
                                {t("key.weAchieve.key4")}
                            </p>
                        </Col>
                        <Col xl="2" className="d-none d-xl-block"/>
                        <Col md="12" lg="6" xl="5" className="d-none d-lg-block">
                            <img src={imageKey} className="img-fluid" style={{height: '650px'}}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
