import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { products as kumuluzDigitalProducts } from '../../content/products';
import { navigationLinks, rightNavigationLinks } from '../../content';

import './sub-navbar.scss';
import InternalLink from "../links/internal-link.component";
import {TranslationUtil} from "../../utils/translation.util";

export class SubNavbar extends Component {
  static propTypes = {
    transformation: PropTypes.any,
    nav: PropTypes.any,
    locale: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      index: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
  }

  toRight(t, content) {
    if (this.state.index === content.length) {
      this.setState({ ...this.state, index: 1 });
    } else {
      this.setState({ ...this.state, index: this.state.index + 1 });
    }
  }

  toLeft(t, content) {
    if (this.state.index === 0) {
      this.setState({ ...this.state, index: content.length - 1 });
    } else {
      this.setState({ ...this.state, index: this.state.index - 1 });
    }
  }

  isActive(product) {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === product.href || window.location.pathname === product.href + '/') {
        return true;
      }
    }
    return false;
  }

  render() {
    const { nav, locale } = this.props;
    const { width, index } = this.state;

    const bigEnough = width > 1500;

    let content = [];
    if (nav) {
      content = [...navigationLinks, ...rightNavigationLinks].find(n => n.href.includes(nav)).children;
    } else {
      content = kumuluzDigitalProducts;
    }

    const leftArray = content.slice(index);
    const rightArray = content.slice(0, index);

    return (
      <div className="subheader position-relative d-flex">
        {!bigEnough && (
          <div className="nav-left-right position-absolute" onClick={() => this.toRight(t, content)}>
            &#60;
          </div>
        )}
        <div className={'d-flex align-items-center justify-content-center w-100 ' + (bigEnough ? 'mx-auto' : '')}>
          {leftArray.map((prod, i) => (
            <div key={i} className="text-center">
              <InternalLink to={prod.href} className={this.isActive(prod) ? (prod.id ? prod.id : 'active') : ''}>
                {TranslationUtil.translate(locale, prod.name)}
              </InternalLink>
            </div>
          ))}
          {rightArray.map((prod, i) => (
            <div key={i}>
              <InternalLink to={prod.href} className={this.isActive(prod) ? (prod.id ? prod.id : 'active') : ''}>
                {TranslationUtil.translate(locale, prod.name)}
              </InternalLink>
            </div>
          ))}
        </div>
        {!bigEnough && (
          <div className="nav-left-right right position-absolute" onClick={() => this.toLeft(t, content)}>
            &#62;
          </div>
        )}
      </div>
    );
  }
}
