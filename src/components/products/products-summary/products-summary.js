import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

import './products-summary.scss';
import {Link} from "../../link/link.component";

export class ProductsSummary extends Component {
  static propTypes = {
    sections: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  changeSelected(key) {
    this.setState({ ...this.state, selected: key });
  }

  render() {
    const { sections } = this.props;
    const { selected } = this.state;

    const selectedBlocks = sections[selected] ? sections[selected].blocks : [];

    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="d-lg-flex justify-content-center">
              {sections.map(
                (section, key) =>
                  (!section.href && (
                    <div
                      key={key}
                      className={`section-title mr-3 mb-3 ${selected === key && 'active '}`}
                      onClick={() => this.changeSelected(key)}
                    >
                      <img src={section.icon} />
                      {section.title}
                    </div>
                  )) || (
                    <Link key={key} to={section.href} external={true} className="section-title mr-3 mb-3">
                      <img src={section.icon} />
                      {section.title}
                    </Link>
                  )
              )}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mt-5 d-flex">
            {selectedBlocks &&
              selectedBlocks.map((block, key) => (
                <Col xs="12" lg key={key} className={block.class}>
                  {block.content}
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}
