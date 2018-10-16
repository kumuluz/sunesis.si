import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';

import './service-full-list.scss';
import {getListOfServices} from '../../../content/services/services-full-list';
import chevron from '../../../assets/images/services/chevron.svg';
import {MEDIA_PHONE, returnScreenSize} from "../../../layouts/common";

@translate('services')
export class ServiceFullList extends Component {

    static propTypes = {
        t: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    renderItem(item, i) {
        if (!item.multilevel) {
            return (
                <ServiceFullListItem key={i} title={item.title}
                                     services={item.services} desc={item.description}
                />
            );
        } else {
            return (
                <ServiceFullListMultilevelItem key={i} item={item}/>
            );
        }
    }

    render() {
        const {t} = this.props;

        const data = getListOfServices(t);

        return (
            <div className="full-list-component">
                <ul>
                    {data.map((item, i) => (
                        this.renderItem(item, i)
                    ))}
                </ul>
            </div>
        );
    }
}

export class ServiceFullListMultilevelItem extends Component {

    static propTypes = {
        item: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
        this.changeState = this.changeState.bind(this);
    }

    rotateChevron(opened) {
        if (opened) {
            return {transform: "rotate(90deg)"};
        }
        return {};
    }

    changeState() {
        const currentState = this.state.opened;
        this.setState({
            opened: !currentState
        });
    }

    getGridStyle(service) {
        const rightBorderShouldBeShown = returnScreenSize() > MEDIA_PHONE && service.meta.endsWith("left");

        return {
            //width: "50%",
            padding: "20px",
            borderBottom: "1px solid #dadada",
            borderTop: "1px solid #dadada",
            borderLeft: "1px solid #dadada",
            borderRight: ( rightBorderShouldBeShown ? "0" : "1px solid #dadada")
        }
    }

    render() {
        const {item} = this.props;

        return (
            <li>
                <div className="flc-title" onClick={this.changeState}>
                    <div className="caret">
                        <img src={chevron} style={this.rotateChevron(this.state.opened)}/>
                    </div>
                    <div className="title">
                        {item.title}
                    </div>
                </div>
                <div
                    className={this.state.opened ? 'flc-desc changeable-content' : 'flc-desc skrito changeable-content'}>
                    {item.description}
                </div>
                <div className={this.state.opened ? 'flc-multilist' : 'flc-multilist skrito'}>
                    {item.services && item.services.map((service, j) => (
                        <div key={j} className="table-elem" style={this.getGridStyle(service)}>
                            <h4>
                                {service.title}
                            </h4>
                            <ul>
                            {service.items.map((level1Item, k) => (
                                <li key={k} className="level-1-item">
                                    <div className="title">
                                        <div className="blue-box">
                                        </div>
                                        <div className="text">
                                            {level1Item.text}
                                        </div>
                                    </div>

                                    <ul>
                                        {level1Item.children.length > 0 && level1Item.children.map((level2Item, l) => (
                                            <li key={l} className="level-2-item">
                                                <div>
                                                    <div className="dark-blue-box"/>
                                                </div>
                                                <div className="level-2-text">
                                                    {level2Item}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </li>
        );
    }
}

export class ServiceFullListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: false
        };
        this.changeState = this.changeState.bind(this);
    }

    static propTypes = {
        title: PropTypes.string,
        desc: PropTypes.string,
        services: PropTypes.array
    };

    rotateChevron(opened) {
        if (opened) {
            return {transform: "rotate(90deg)"};
        }
        return {};
    }

    changeState() {
        const currentState = this.state.opened;
        this.setState({
            opened: !currentState
        });
    }

    render() {
        const {title, desc, services} = this.props;

        const replaceNewLines = (tekst) => {
            return tekst.replace(new RegExp(/\n/, 'g'), '<br/>');
        };

        return (
            <li>
                <div className="flc-title" onClick={this.changeState}>
                    <div className="caret">
                        <img src={chevron} style={this.rotateChevron(this.state.opened)}/>
                    </div>
                    <div className="title">
                        {title}
                    </div>
                </div>
                <div
                    className={this.state.opened ? 'flc-desc changeable-content' : 'flc-desc skrito changeable-content'}
                    dangerouslySetInnerHTML={{__html: replaceNewLines(desc)}}>
                </div>
                <div className={this.state.opened ? 'flc-list' : 'flc-list skrito'}>
                    {services && services.map((service, j) => (
                        <div key={j} className="flc-list-item">
                            <div className="blue-box">
                            </div>
                            <div className="serv-desc">
                                {service}
                            </div>
                        </div>
                    ))}
                </div>
            </li>
        );
    }
}
