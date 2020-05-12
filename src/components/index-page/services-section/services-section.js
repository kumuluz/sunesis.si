import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Row, Col, Container} from 'reactstrap';

import {LineTitle} from "..";
import {innovativeProducts} from "../../../content/indexPage/innovatite-products";

import './services-section.scss';
import imageStrategicTactical from '../../../assets/images/strategic-tactical.svg';
import imageOperational from '../../../assets/images/operational.svg';
import imageDuke from '../../../assets/images/duke.svg';
import {FormattedMessage} from "react-intl";
import InternalLink from "../../links/internal-link.component";
import {TranslationUtil} from "../../../utils/translation.util";


const strategicTacticalBullets = [
    ['technologies-page.core-services.strat-and-tact.item-1-1', 'technologies-page.core-services.strat-and-tact.item-1-2'],
    ['technologies-page.core-services.strat-and-tact.item-2-1', 'technologies-page.core-services.strat-and-tact.item-2-2'],
    ['technologies-page.core-services.strat-and-tact.item-3-1', 'technologies-page.core-services.strat-and-tact.item-3-2']
];

const operationalBullets = [
    ['technologies-page.core-services.operational.item-1-1', 'technologies-page.core-services.operational.item-1-2'],
    ['technologies-page.core-services.operational.item-2-1', 'technologies-page.core-services.operational.item-2-2'],
    ['technologies-page.core-services.operational.item-3-1', 'technologies-page.core-services.operational.item-3-2'],
    ['technologies-page.core-services.operational.item-3-3', 'technologies-page.core-services.operational.item-4-1'],
    ['technologies-page.core-services.operational.item-4-2']
];

export class ServicesSection extends Component {
    static propTypes = {
        locale: PropTypes.string
    };

    render() {
        const {locale} = this.props;

        return (
            <Container fluid={true}>
                <Row className="justify-content-center services-section">
                    <Col xs="12" lg="10" xl="8" className="content p-0">
                        <div className="description-section">
                            <h2>
                                <FormattedMessage id="technologies-page.description.title"/>
                            </h2>
                            <p>
                                <FormattedMessage id="technologies-page.description.para1"/>
                            </p>
                            <p>
                                <FormattedMessage id="technologies-page.description.para2"/>
                            </p>
                            <div className="duke-award-box">
                                <div className="duke-award-box-background">
                                    <div className="duke-award-box-img">
                                        <img src={imageDuke}/>
                                    </div>
                                    <div className="duke-award-box-content">
                                        <FormattedMessage id="technologies-page.description.award"/> <br/>
                                        <strong><FormattedMessage id="technologies-page.description.award-bold"/></strong>
                                    </div>
                                </div>

                            </div>
                            <p><FormattedMessage id="technologies-page.description.para3"/> <InternalLink to="/services"><FormattedMessage id="technologies-page.description.more"/></InternalLink></p>

                        </div>
                        <LineTitle title={TranslationUtil.translate(locale, "technologies-page.core-services.title")}/>

                        <div className="core-services-section">
                            <p>
                                <FormattedMessage id="technologies-page.core-services.para1"/>
                            </p>
                            <p>
                                <FormattedMessage id="technologies-page.core-services.para2"/>
                            </p>
                            <div className="first-section">
                                <div className="image">
                                    <img src={imageStrategicTactical}/>
                                </div>
                                <div className="bullets">
                                    <h3>
                                        <FormattedMessage id="technologies-page.core-services.strat-and-tact.title"/>
                                    </h3>
                                    {strategicTacticalBullets.map((row, rowIndex) => (
                                        <div key={rowIndex} className="bullet-container">
                                            {row.map((item, itemIndex) => (
                                                <span key={itemIndex} className="bullet-item">
                                                <span className="blue-box"/>
                                                <span className="bullet-item-text">{TranslationUtil.translate(locale, item)}</span>
                                            </span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="second-section">
                                <div className="bullets">
                                    <h3>
                                        <FormattedMessage id="technologies-page.core-services.operational.title"/>
                                    </h3>
                                    {operationalBullets.map((row, rowIndex) => (
                                        <div key={rowIndex} className="bullet-container">
                                            {row.map((item, itemIndex) => (
                                                <span key={itemIndex} className="bullet-item">
                                                <span className="blue-box"/>
                                                <span className="bullet-item-text">{
                                                    TranslationUtil.translate(locale, item)
                                                }</span>
                                            </span>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                <div className="image">
                                    <img src={imageOperational}/>
                                </div>
                            </div>
                            <p>
                                <FormattedMessage id="technologies-page.core-services.para3"/>
                            </p>
                        </div>
                        <InternalLink to="/services" className="btn btn-primary">
                            <FormattedMessage id="technologies-page.core-services.more-about"/>
                        </InternalLink>
                        <br/>

                        <LineTitle title={TranslationUtil.translate(locale, "technologies-page.innovative-products.title")}/>

                        <div className="innovative-products-section">
                            <p>
                                <FormattedMessage id="technologies-page.innovative-products.para1"/>
                            </p>
                            <p>
                                <FormattedMessage id="technologies-page.innovative-products.para2"/>
                            </p>
                            <div className="box-area">
                                {innovativeProducts.map((box, index) => (
                                    <div key={index} className="box-item">
                                        <div className="box-item-img">
                                            <img src={box.image}/>
                                        </div>
                                        <div className="box-item-content">
                                            <div className="box-item-title">{
                                                TranslationUtil.translate(locale, box.title)
                                            }</div>
                                            <div className="box-item-sh-desc">{
                                                TranslationUtil.translate(locale, box.shortDesc)
                                            }</div>
                                            <div className="box-item-desc">{
                                                TranslationUtil.translate(locale, box.desc)
                                            }</div>
                                            <a target="_blank"
                                                href={box.url}>
                                                <FormattedMessage id="technologies-page.innovative-products.learn-more"/> &rarr;</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
