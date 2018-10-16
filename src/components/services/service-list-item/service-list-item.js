import React, {Component} from "react";
import PropTypes from 'prop-types';

import "./service-list-item.scss";

export class ServiceListItem extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        const {text} = this.props;
        return (
            <span className="service-list-item">
                <span className="blue-box">
                </span>
                <span className="box-text">
                    {text}
                </span>
            </span>
        );
    }
}

export class ServiceListItemRow extends Component {
    static propTypes = {
        texts: PropTypes.array
    };

    render() {
        const {texts} = this.props;
        return (
            <div className="list-item-row">
                {texts &&
                texts.map((item, i) => (
                    <ServiceListItem key={i} text={item}/>
                ))
                }
            </div>
        );
    }
}

export class ServiceList extends Component {
    static propTypes = {
        items: PropTypes.array
    };
    render() {
        const {items} = this.props;
        return (
            <div className="itemized">
                {items && items.map((item, i) => (
                    <ServiceListItemRow texts={item} key={i} />
                ))}
            </div>
        );
    }
}
