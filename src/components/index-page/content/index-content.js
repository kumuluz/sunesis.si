import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {Carousel} from "reactstrap";

import "./index-content.scss";
import {Toggler} from "./toggler/toggler";
import {tabs} from "./tabs";

export class IndexContent extends Component {
    static propTypes = {
        onTabChange: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
            animating: false,
            inBox: false
        };
        this.lastScrollPosition = 0;
        this.nextTab = this.nextTab.bind(this);
        this.prevTab = this.prevTab.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.setAnimating = this.setAnimating.bind(this);
        this.scrollingInBox = this.scrollingInBox.bind(this);
        if (typeof window !== "undefined") {
            window.onscroll = this.scrollingInBox;
        }
    }
    
    nextTab() {
        if (this.state.animating) {
            return;
        }
        const nextTab = this.state.tab === 2 ? this.state.tab : this.state.tab + 1;
        this.setState({
            ...this.state,
            tab: nextTab
        });
        this.props.onTabChange(nextTab);
    }
    
    prevTab() {
        if (this.state.animating) {
            return;
        }
        const prevTab = this.state.tab === 0 ? this.state.tab : this.state.tab - 1;
        this.setState({
            ...this.state,
            tab: prevTab
        });
        this.props.onTabChange(prevTab);
    }
    
    setAnimating(animating) {
        this.setState({
            ...this.state,
            animating: animating
        });
    }
    
    goToIndex(newTab) {
        if (this.state.animating) {
            return;
        }
        this.setState({
            ...this.state,
            tab: newTab
        });
        this.props.onTabChange(newTab);
    }
    
    mouseInBox(entered) {
        this.setState({
            ...this.state,
            inBox: entered
        });
    }
    
    scrollingInBox(event) {
        if (this.state.inBox && typeof window !== "undefined") {
            event.preventDefault();
            const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > this.lastScrollPosition) {
                // scroll down
                this.nextTab();
            } else {
                // scroll up
                this.prevTab();
            }
            this.lastScrollPosition = st <= 0 ? 0 : st;
        }
    }
    
    render() {
        return (
            <div className="index-content-component" onMouseEnter={() => this.mouseInBox(true)}
                onMouseLeave={() => this.mouseInBox(false)}>
                
                <div className="toggler">
                    <Toggler activeTab={this.state.tab} clicked={(newTab) => this.goToIndex(newTab)}/>
    
                    <div className="carousel-container">
                        <Carousel activeIndex={this.state.tab} next={this.nextTab} previous={this.prevTab} interval={false}>
                            {tabs(this.setAnimating)}
                        </Carousel>
                    </div>
                </div>
                
            </div>
        );
    }
    
}
