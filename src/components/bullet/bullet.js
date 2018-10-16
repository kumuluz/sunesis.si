import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './bullet.scss';
import './chevron.svg';
import './chevron-down.svg';

export class Bullet extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    open: PropTypes.bool,
    titleClass: PropTypes.string,
    color: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open ? props.open : false
    };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { title, titleClass, content, color } = this.props;

    let className = 'bullet ';
    if (this.state.open) className += 'open ';
    if (color) {
      className += color + ' ';
    }

    return (
      <li className={className} onClick={() => this.toggle()}>
        <div>
          <div className={titleClass}>{title}</div>
          {this.state.open && <small>{content}</small>}
        </div>
      </li>
    );
  }
}
