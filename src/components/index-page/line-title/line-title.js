import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './line-title.scss';

export class LineTitle extends Component {

    static propTypes = {
        title: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;
        return (
            <div className="line-title-separator">
                <span className="lts-line"/>
                <h2>{title}</h2>
                <span className="lts-line"/>
            </div>
        )
    }
}
