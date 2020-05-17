import React from "react";
import {CarouselItem, Row, Col} from "reactstrap";
import {FormattedMessage} from "react-intl";

import digitalExperience from "./images/digi-izkusnja.svg";
import omniChannel from "./images/omni-channel.svg";
import monitoring from "./images/monitoring.svg";
import stockGroup from "./images/stock-group.svg";
import stockBoard from "./images/board-stock.svg";

import {Itemized} from "../../itemized/itemized.component";
import {References} from "../..";

export const tabs = (setAnimating) => {
    return [
        // TAB 1
        (
            <CarouselItem key={0} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
                <Row>
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
                                        <Itemized trKey="index-page.content.tabs.digitalization.experience.items.item-1"/>
                                    </Col>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.digitalization.experience.items.item-2"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "40px"}}>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.digitalization.experience.items.item-3"/>
                                    </Col>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.digitalization.experience.items.item-4"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img src={digitalExperience} style={{width: "100%"}} alt="digital-experience"/>
                        <p className="image-subtitle text-center">
                            <FormattedMessage id="index-page.content.tabs.digitalization.experience.image"/>
                        </p>
                    </Col>
                </Row>
                <Row className="space-top">
                    <Col md={6}>
                        <img src={omniChannel} style={{width: "100%"}} alt="omni-channel"/>
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
                                        <Itemized trKey="index-page.content.tabs.digitalization.omni-channel.items.item-1"/>
                                    </Col>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.digitalization.omni-channel.items.item-2"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "40px"}}>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.digitalization.omni-channel.items.item-3"/>
                                    </Col>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.digitalization.omni-channel.items.item-4"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </CarouselItem>
        ),
        // TAB 2
        (
            <CarouselItem key={1} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
                <Row style={{paddingBottom: "80px"}}>
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
                                <Row style={{marginTop: "40px"}}>
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
                        <img src={monitoring} alt="monitoring" style={{width: "100%"}}/>
                    </Col>
                </Row>
            </CarouselItem>
        ),
        // TAB 3
        (
            <CarouselItem key={2} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
                <Row>
                    <Col md={6}>
                        <img src={stockGroup} style={{width: "100%"}} alt="stock-photo-group"/>
                    </Col>
                    <Col md={6}>
                        <div className="title">
                            <h2>
                                <FormattedMessage id="index-page.content.tabs.knowledge-transfer.opportunities.title"/>
                            </h2>
                            <div className="title-underline"/>
                        </div>
                        <h3>
                            <FormattedMessage id="index-page.content.tabs.knowledge-transfer.opportunities.subtitle"/>
                        </h3>
                        <p>
                            <FormattedMessage id="index-page.content.tabs.knowledge-transfer.opportunities.description"/>
                        </p>
                        <Row>
                            <Col ms={12}>
                                <Row>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.knowledge-transfer.opportunities.items.item-1"/>
                                    </Col>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.knowledge-transfer.opportunities.items.item-2"/>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: "40px"}}>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.knowledge-transfer.opportunities.items.item-3"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="space-top">
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
                                        <Itemized trKey="index-page.content.tabs.knowledge-transfer.concepts.items.item-1"/>
                                    </Col>
                                    <Col md="6">
                                        <Itemized trKey="index-page.content.tabs.knowledge-transfer.concepts.items.item-2"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img src={stockBoard} style={{width: "100%"}} alt="omni-channel"/>
                    </Col>
                </Row>
                <Row style={{marginTop: "150px"}}>
                    <References/>
                </Row>
            </CarouselItem>
        ),
    ];
}
