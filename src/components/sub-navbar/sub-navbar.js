import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';

import { products as kumuluzDigitalProducts } from '../../content/products';
import { navigation } from '../../content/links';

import './sub-navbar.scss';

@translate()
export class SubNavbar extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
    transformation: PropTypes.any,
    nav: PropTypes.any
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
    const { t, nav } = this.props;
    const { width, index } = this.state;

    const bigEnough = width > 1500;

    let content = [];
    if (nav) {
      content = navigation(t)
        .find(n => n.href.includes(nav))
        .children.map(c => Object.assign({}, { ...c, name: <div>{c.name}</div> }));
    } else {
      content = kumuluzDigitalProducts(t);
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
              <Link to={prod.href} className={this.isActive(prod) ? (prod.id ? prod.id : 'active') : ''}>
                {prod.name}
              </Link>
            </div>
          ))}
          {rightArray.map((prod, i) => (
            <div key={i}>
              <Link to={prod.href} className={this.isActive(prod) ? (prod.id ? prod.id : 'active') : ''}>
                {prod.name}
              </Link>
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
