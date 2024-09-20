import React, { Component } from "react";
import PropTypes from "prop-types";

import "./service-range-box.scss";

export class ServiceRangeBox extends Component {
  static propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const { img, description, text } = this.props;

    return (
      <div className="box">
        <div className="img-div">
          <img src={img} />
        </div>
        <p>{text}</p>
        {description && <p style={{ fontWeight: 500, fontSize: "16px", lineHeight: "18px" }}>{description}</p>}
      </div>
    );
  }
}
