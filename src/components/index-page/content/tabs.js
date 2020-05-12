import React from "react";
import {CarouselItem, Row, Col} from "reactstrap";

import digitalExperience from "./images/digi-izkusnja.svg";
import omniChannel from "./images/omni-channel.svg";
import {FormattedMessage} from "react-intl";

export const tabs = (setAnimating) => {
    return [
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
                    </Col>
                    <Col md={6}>
                        <img src={digitalExperience}/>
                        <p className="image-subtitle text-center">
                            <FormattedMessage id="index-page.content.tabs.digitalization.experience.image"/>
                        </p>
                    </Col>
                </Row>
                <Row className="space-top">
                    <Col md={6}>
                        <img src={omniChannel}/>
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
                    </Col>
                </Row>
            </CarouselItem>
        ),
        (
            <CarouselItem key={1} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
                tab2
            </CarouselItem>
        ),
        (
            <CarouselItem key={2} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
                tab3
            </CarouselItem>
        ),
    ];
}
