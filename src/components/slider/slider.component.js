import React, {Component} from "react";
import PropType from "prop-types";
import Link from "gatsby-link";
import anime from "animejs";
import {Row, Col} from "reactstrap";
import {translate} from "react-i18next";

import "./slider.component.scss";
import {MEDIA_PHONE, returnScreenSize} from "../../layouts/common";
import arrow from "../../assets/images/arrow.svg";

@translate("about")
export class SliderComponent extends Component {

    static propTypes = {
        t: PropType.func,
        items: PropType.array
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [
                props.items[props.items.length - 1],
                ...props.items.slice(),
                ...props.items.slice(0, props.items.length - 1)
            ]
        };
        this.animating = false;
    }

    returnShiftFor() {
        const screenSize = returnScreenSize();
        if (screenSize <= MEDIA_PHONE) {
            return screenSize;
        }
        return 420;
    }

    moveLeft() {
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        const moveLeftAnimation = anime({
            targets: '.items',
            translateX: `-=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            this.setState(state => {
                const {items} = state;
                let modifiedItems = [...items.slice(1), ...items[0]];

                anime({
                    targets: '.items',
                    translateX: 0,
                    easing: 'none',
                    duration: 0
                });

                this.animating = false;
                return {
                    ...state,
                    items: modifiedItems
                };
            });
        });
    }

    moveRight() {
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        const moveLeftAnimation = anime({
            targets: '.items',
            translateX: `+=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            this.setState(state => {
                const {items} = state;

                let modifiedItems = [...items[items.length - 1], ...items.slice(0, items.length - 1)];

                anime({
                    targets: '.items',
                    translateX: 0,
                    easing: 'none',
                    duration: 0
                });

                this.animating = false;
                return {
                    ...state,
                    items: modifiedItems
                };
            });
        });
    }

    renderLink(item) {
        const {t} = this.props;

        if (item.url.startsWith("/")) {
            return (
                <Link to={item.url} className="learn-more-link">
                    <span>{t("products-services.learn-more")}</span>
                    <img src={arrow}/>
                </Link>
            )
        } else {
            return (
                <a target="_blank" href={item.url} className="learn-more-link">
                    {t("products-services.learn-more")}
                    <img src={arrow}/>
                </a>
            )
        }
    }

    renderItem(item, i) {
        return (
            (item.content && <div key={i}>{item.content}</div>) || (
                <div key={i} className="item">
                    <div className="content-area">
                        {item.icon && (<img src={item.icon}/>)}
                        <h4 className={item.icon ? "": "no-image"}>{item.title}</h4>
                        {item.subtitle && (<p className="font-italic">{item.subtitle}</p>)}
                        <p className="p-small" dangerouslySetInnerHTML={{__html: item.description}}/>
                    </div>
                    <div className="link-area">
                        {this.renderLink(item)}
                    </div>
                </div>
            )
        );
    }

    returnItemsStyle() {
        return {
            marginLeft: `-${this.returnShiftFor()}px`
        };
    }

    render() {
        const {items} = this.state;

        return (
            <div className="sun-slider-component">
                <Row className="scroller-container">
                    <Col xs="1 my-5" className="scroller-buttons">
                        <div className="nav-buttons">
                            <button onClick={() => this.moveLeft()}>
                                <p>&#60;</p>
                            </button>
                            <br/>
                            <button onClick={() => this.moveRight()}>
                                <p>&#62;</p>
                            </button>
                        </div>
                    </Col>
                    <Col xs="11 my-5" style={{overflow: 'hidden'}} className="scroller-content">
                        <div className="items" style={this.returnItemsStyle()}>
                            {items.map((item, i) => this.renderItem(item, i))}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
