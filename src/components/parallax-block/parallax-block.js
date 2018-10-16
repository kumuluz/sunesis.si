import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {returnScreenSize} from "../../layouts/common";

export class ParallaxBlock extends Component {
  static propTypes = {
    image: PropTypes.string,
    size: PropTypes.number,
    xOffset: PropTypes.string,
    yOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    const isWindow = typeof window !== 'undefined';

    this.state = {
      scroll: isWindow ? window.scrollY : 0,
      scrollMove: 0,
      elmTop: 0,
      width: isWindow ? window.innerWidth : 0,
      height: isWindow ? window.innerHeight : 0
    };

    this.ref = null;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    this.setState(ns => {
      ns.scrollMove = window.scrollY - ns.scroll;
      ns.scroll = window.scrollY;

      if (this.ref) {
        if (this.isElementInViewport(this.ref)) {
          ns.elmTop -= ns.scrollMove / 2;
        }
        if (ns.elmTop > 0) ns.elmTop = 0;
      }
      return ns;
    });
  }

  render() {
    const { image, size, xOffset, yOffset, className } = this.props;
    const { elmTop } = this.state;

    const showBlock = returnScreenSize() <= 790;

    return (

      <div
        ref={ref => (this.ref = ref)}
        className={`position-relative ${className ? className : ''}`}
        style={{ zIndex: 1000, top: yOffset, left: xOffset, display: showBlock ? "none": ""}}
      >
        <img className="position-absolute" style={{ width: size + 'px', top: elmTop + 'px' }} src={image} />
      </div>
    );
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }
}
