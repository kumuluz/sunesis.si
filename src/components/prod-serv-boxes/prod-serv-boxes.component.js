import React, {Component} from "react";
import PropType from "prop-types";
import Link from "gatsby-link";
import {Row, Col} from "reactstrap";

import "./prod-serv-boxes.component.scss";

export class ProductsServicesBoxesComponent extends Component {

    static propTypes = {
        items: PropType.array,
        learnMoreLabel: PropType.string
    };

    constructor(props) {
        super(props);
    }

    renderLink(label, url) {
        if (url.startsWith("/")) {
            return (
                <Link to={url}>
                    {label} &rarr;
                </Link>
            )
        } else {
            return (
                <a href={url} target="_blank">
                    {label} &rarr;
                </a>
            )
        }
    }

    renderBox(item) {
        const {learnMoreLabel} = this.props;

        return (
          <div className="box-item">
              <div className="box-item-content">
                  <div className="box-item-title">{item.title}</div>
                  <div className="box-item-subtitle">{item.subtitle}</div>
                  <div className="box-item-desc">{item.description}</div>
              </div>
              <div className="box-item-link">
                  {this.renderLink(learnMoreLabel, item.url)}
              </div>
          </div>
        );
    }

    render() {
        const {items} = this.props;

        return (
            <div className="prod-serv-boxes-component">
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={7}>
                        <Row>
                            {items.map((item, index) => (
                                <Col key={index} xs={12} lg={item.size === 2 ? 12 : 6}>
                                    {this.renderBox(item)}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
