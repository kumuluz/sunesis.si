import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';

import {references} from '../../content/references';

import './references.scss';
import {FormattedMessage} from "react-intl";

export class References extends Component {
    static propTypes = {
        showIntro: PropTypes.bool,
        marginTopClass: PropTypes.string
    };

    render() {
        const {showIntro, marginTopClass} = this.props;
        const showIntroText = showIntro === undefined ? true : showIntro;
        const marginTop = marginTopClass === undefined ? "mt-5" : marginTopClass;

        return (
            <Row className={"references-section " + marginTop}>
                <Col>
                    {showIntroText && (
                        <div className="references-text">
                            <h3>
                                <FormattedMessage id="references.title"/>
                            </h3>
                            <p>
                                <FormattedMessage id="references.para"/>
                            </p>
                        </div>
                    )}
                    <Row className="references">
                        {references.map((ref, i) => (
                            <Col key={i} xs="5" md="3" lg="2" style={{backgroundImage: 'url(' + ref.image + ')'}}>
                                <span>
                                  <p>{ref.name}</p>
                                </span>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        );
    }
}
