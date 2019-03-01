import React, {Component} from 'react';
import * as PropTypes from "prop-types";
import {Container, Row, Col} from 'reactstrap';

import imageKey from '../../../assets/images/key-diagram.svg';
import './key-section.scss';
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../../utils/translation.util";

export class KeySection extends Component {

    static propTypes = {
        locale: PropTypes.string
    };

    render() {
        const {locale} = this.props;
        return (
            <div className="key-section">
                <div className="key">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xl="8">
                                <h2 className="text-center" dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, "key.title")}}/>
                                <h3 className="h2-subtitle text-center">
                                    <FormattedMessage id="key.subtitle"/>
                                </h3>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" lg="6" xl="5">
                                <h3 className="mb-3 checkbox-title">
                                    <FormattedMessage id="key.weHelp.title"/>
                                </h3>
                                <p className="checkbox one">
                                    <FormattedMessage id="key.weHelp.key1"/>
                                </p>
                                <p className="checkbox two">
                                    <FormattedMessage id="key.weHelp.key2"/>
                                </p>
                                <p className="checkbox three">
                                    <FormattedMessage id="key.weHelp.key3"/>
                                </p>

                                <h3 className="mb-3 checkbox-title">
                                    <FormattedMessage id="key.weAchieve.title"/>
                                </h3>
                                <p className="checkbox one">
                                    <FormattedMessage id="key.weAchieve.key1"/>
                                </p>
                                <p className="checkbox two">
                                    <FormattedMessage id="key.weAchieve.key2"/>
                                </p>
                                <p className="checkbox three">
                                    <FormattedMessage id="key.weAchieve.key3"/>
                                </p>
                                <p className="checkbox four">
                                    <FormattedMessage id="key.weAchieve.key4"/>
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
}
