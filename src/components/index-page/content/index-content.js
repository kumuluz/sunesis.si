import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {Col, Row} from "reactstrap";

import "./index-content.scss";
import {FormattedMessage} from "react-intl";
import {Itemized} from "../../itemized/itemized.component";
import digitalExperienceEN from "./images/digi-izkusnja-eng.svg";
import digitalExperience from "./images/digi-izkusnja.svg";
import omniChannelEN from "./images/omni-channel-eng.svg";
import omniChannel from "./images/omni-channel.svg";
import techSpecialist from "./images/tech-specialists.png";
import stockGroup from "./images/stock-group.svg";
import stockBoard from "./images/board-stock.svg";

export class IndexContent extends Component {
    static propTypes = {
        locale: PropTypes.string
    };
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const {locale} = this.props;
        
        return (
            <div className="index-content-component">
                
                    <div className="flex-column d-flex align-items-center">
                        <Row className="content-body">
                            <Col md={6}>
                                <div className="title">
                                    <h2>
                                        <FormattedMessage id="index-page.content.tabs.digitalization.experience.title"/>
                                    </h2>
                                    <div className="title-underline"/>
                                </div>
                                <h3>
                                    <FormattedMessage id="index-page.content.tabs.digitalization.experience.subtitle"/>
                                </h3>
                                <p>
                                    <FormattedMessage id="index-page.content.tabs.digitalization.experience.description"/>
                                </p>
                                <Row>
                                    <Col ms={12}>
                                        <Row>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.experience.items.item-1"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.experience.items.item-2"/>
                                            </Col>
                                        </Row>
                                        <Row className="items-margin-top">
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.experience.items.item-3"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.experience.items.item-4"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <img src={locale === "en" ? digitalExperienceEN : digitalExperience} style={{width: "100%"}} alt="digital-experience"/>
                                <p className="image-subtitle text-center">
                                    <FormattedMessage id="index-page.content.tabs.digitalization.experience.image"/>
                                </p>
                            </Col>
                        </Row>
                        <Row className="space-top content-body">
                            <Col md={6}>
                                <img src={locale === "en" ? omniChannelEN : omniChannel} style={{width: "100%"}} alt="omni-channel"/>
                                <p className="image-subtitle text-center">
                                    <FormattedMessage id="index-page.content.tabs.digitalization.omni-channel.image"/>
                                </p>
                            </Col>
                            <Col md={6}>
                                <div className="title">
                                    <h2>
                                        <FormattedMessage id="index-page.content.tabs.digitalization.omni-channel.title"/>
                                    </h2>
                                    <div className="title-underline"/>
                                </div>
                                <h3>
                                    <FormattedMessage id="index-page.content.tabs.digitalization.omni-channel.subtitle"/>
                                </h3>
                                <p>
                                    <FormattedMessage id="index-page.content.tabs.digitalization.omni-channel.description"/>
                                </p>
                                <Row>
                                    <Col ms={12}>
                                        <Row>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.omni-channel.items.item-1"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.omni-channel.items.item-2"/>
                                            </Col>
                                        </Row>
                                        <Row className="items-margin-top">
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.omni-channel.items.item-3"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.digitalization.omni-channel.items.item-4"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="points flex-column d-flex align-items-center">
                            <div className="arrow"/>
                            <Row className="content-body">
                                <Col md={12} className="p-0">
                                    <Row style={{marginBottom: "60px"}} className="d-flex justify-content-center">
                                        <div className="points-title">
                                            <div>1</div>
                                            <h2>
                                                <FormattedMessage
                                                    id="index-page.content.tabs.digitalization.points.point-1.title"/>
                                            </h2>
                                        </div>
                                        <div className="points-body">
                                            <p>
                                                <FormattedMessage
                                                    id="index-page.content.tabs.digitalization.points.point-1.description"/>
                                            </p>
                                        </div>
                                        <div className="points-items">
                                            <Row>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-1.items.item-1"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-1.items.item-2"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-1.items.item-3"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-1.items.item-4"/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>
                                    <Row style={{marginBottom: "60px"}} className="d-flex justify-content-center">
                                        <div className="points-title">
                                            <div>2</div>
                                            <h2>
                                                <FormattedMessage
                                                    id="index-page.content.tabs.digitalization.points.point-2.title"/>
                                            </h2>
                                        </div>
                                        <div className="points-body">
                                            <p>
                                                <FormattedMessage
                                                    id="index-page.content.tabs.digitalization.points.point-2.description"/>
                                            </p>
                                        </div>
                                        <div className="points-items">
                                            <Row>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-2.items.item-1"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-2.items.item-2"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-2.items.item-3"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-2.items.item-4"/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>
                                    <Row className="d-flex justify-content-center">
                                        <div className="points-title" >
                                            <div>3</div>
                                            <h2>
                                                <FormattedMessage
                                                    id="index-page.content.tabs.digitalization.points.point-3.title"/>
                                            </h2>
                                        </div>
                                        <div className="points-body">
                                            <p>
                                                <FormattedMessage
                                                    id="index-page.content.tabs.digitalization.points.point-3.description"/>
                                            </p>
                                        </div>
                                        <div className="points-items">
                                            <Row>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-3.items.item-1"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-3.items.item-2"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-3.items.item-3"/>
                                                </Col>
                                                <Col md="12">
                                                    <Itemized small={true}
                                                        trKey="index-page.content.tabs.digitalization.points.point-3.items.item-4"/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    
                    
                    
                    
                    <div className="flex-column d-flex align-items-center dark-blue-specialist">
                        <div className="beige-arrow" style={{marginBottom: "60px"}}/>
                        <Row style={{paddingBottom: "80px"}} className="content-body">
                            <Col md={6}>
                                <div className="title">
                                    <h2 className="title-slim">
                                        <FormattedMessage id="index-page.content.tabs.development.above-title"/>
                                    </h2>
                                    <h2>
                                        <FormattedMessage id="index-page.content.tabs.development.title"/>
                                    </h2>
                                    <div className="title-underline"/>
                                </div>
                                <p style={{marginTop: "20px", marginBottom: "40px"}}>
                                    <FormattedMessage id="index-page.content.tabs.development.description"/>
                                </p>
                                <Row>
                                    <Col ms={12}>
                                        <Row>
                                            <Col md="6">
                                                <Itemized trKey="index-page.content.tabs.development.items.item-1"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized trKey="index-page.content.tabs.development.items.item-2"/>
                                            </Col>
                                        </Row>
                                        <Row className="items-margin-top">
                                            <Col md="6">
                                                <Itemized trKey="index-page.content.tabs.development.items.item-3"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized trKey="index-page.content.tabs.development.items.item-4"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <img src={techSpecialist} alt="tech specialists" style={{width: "100%"}}/>
                            </Col>
                        </Row>
                        <div className="white-arrow-reversed"/>
                    </div>
                
                    
                    
                    
                    
                    <div className="flex-column d-flex align-items-center" style={{marginTop: "60px"}}>
                        <Row className="content-body">
                            <Col md={6}>
                                <img src={stockGroup} style={{width: "100%"}} alt="stock-photo-group"/>
                            </Col>
                            <Col md={6}>
                                <div className="title">
                                    <h2>
                                        <FormattedMessage
                                            id="index-page.content.tabs.knowledge-transfer.opportunities.title"/>
                                    </h2>
                                    <div className="title-underline"/>
                                </div>
                                <h3>
                                    <FormattedMessage
                                        id="index-page.content.tabs.knowledge-transfer.opportunities.subtitle"/>
                                </h3>
                                <p>
                                    <FormattedMessage
                                        id="index-page.content.tabs.knowledge-transfer.opportunities.description"/>
                                </p>
                                <Row>
                                    <Col ms={12}>
                                        <Row>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.knowledge-transfer.opportunities.items.item-1"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.knowledge-transfer.opportunities.items.item-2"/>
                                            </Col>
                                        </Row>
                                        <Row className="items-margin-top">
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.knowledge-transfer.opportunities.items.item-3"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="space-top content-body">
                            <Col md={6}>
                                <h3 style={{marginBottom: 0}}>
                                    <FormattedMessage id="index-page.content.tabs.knowledge-transfer.concepts.above-title"/>
                                </h3>
                                <div className="title" style={{marginBottom: "30px"}}>
                                    <h2>
                                        <FormattedMessage id="index-page.content.tabs.knowledge-transfer.concepts.title"/>
                                    </h2>
                                    <div className="title-underline"/>
                                </div>
                                <p>
                                    <FormattedMessage id="index-page.content.tabs.knowledge-transfer.concepts.description"/>
                                </p>
                                <Row>
                                    <Col ms={12}>
                                        <Row>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.knowledge-transfer.concepts.items.item-1"/>
                                            </Col>
                                            <Col md="6">
                                                <Itemized
                                                    trKey="index-page.content.tabs.knowledge-transfer.concepts.items.item-2"/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <img src={stockBoard} style={{width: "100%"}} alt="omni-channel"/>
                            </Col>
                        </Row>
                    </div>
            </div>
        );
    }
    
}
