import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ParallaxBlock } from '../../parallax-block/parallax-block';

import { cubes } from './cubes';

export class ProductsParallax extends Component {
  static propTypes = {
    top: PropTypes.any,
    mid: PropTypes.any,
    bottom: PropTypes.any,
    product: PropTypes.string
  };

  render() {
    const { top, mid, bottom, product } = this.props;

    if (top) {
      return (
        <span>
          <ParallaxBlock image={cubes[product].cube01} size={100} xOffset="10%" yOffset="-100px" />
          <ParallaxBlock image={cubes[product].cube02} size={90} xOffset="90%" yOffset="-260px" />
          <ParallaxBlock image={cubes[product].cube03} size={60} xOffset="88%" yOffset="150px" />
        </span>
      );
    }

    if (mid) {
      return (
        <span>
          <ParallaxBlock image={cubes[product].cube01} size={100} xOffset="25%" yOffset="0px" />
          <ParallaxBlock image={cubes[product].cube01} size={50} xOffset="85%" yOffset="150px" />
        </span>
      );
    }

    if (bottom) {
      return (
        <span>
          <ParallaxBlock image={cubes[product].cube01} size={100} xOffset="10%" yOffset="200px" />
          <ParallaxBlock image={cubes[product].cube01} size={50} xOffset="90%" yOffset="350px" />
        </span>
      );
    }
  }
}
