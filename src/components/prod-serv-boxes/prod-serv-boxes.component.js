import React, {Component} from "react";
import * as PropTypes from "prop-types";
import Link from "gatsby-link";
import {Row, Col} from "reactstrap";

import "./prod-serv-boxes.component.scss";
import {TranslationUtil} from "../../utils/translation.util";
import InternalLink from "../links/internal-link.component";

export class ProductsServicesBoxesComponent extends Component {

    static propTypes = {
        items: PropTypes.array,
        learnMoreLabel: PropTypes.string,
        locale: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    renderLink(label, url) {
        if (url.startsWith("/")) {
            return (
                <InternalLink to={url}>
                    {label} &rarr;
                </InternalLink>
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
        const {learnMoreLabel, locale} = this.props;

        return (
          <div className="box-item">
              <div className="box-item-content">
                  <div className="box-item-title">{
                      TranslationUtil.translate(locale, item.title, "about-page")
                  }</div>
                  <div className="box-item-subtitle">{
                      TranslationUtil.translate(locale, item.subtitle, "about-page")
                  }</div>
                  <div className="box-item-desc">{
                      TranslationUtil.translate(locale, item.description, "about-page")
                  }</div>
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
