import React, { Component } from "react";
import PropTypes from 'prop-types';

import './service-range-box.scss';

export class ServiceRangeBox extends Component {

    static propTypes = {
        img: PropTypes.string,
        text: PropTypes.string,
    };

    render() {
        const {img, text} = this.props;

        return (
            <div className="box">
                <div className="img-div">
                    <img src={img} />
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
}
