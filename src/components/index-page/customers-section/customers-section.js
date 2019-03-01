import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import anime from 'animejs';
import * as PropTypes from "prop-types";

import './customers-section.scss';

import { quotes } from '../../../content';
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../../utils/translation.util";

export class CustomersSection extends Component {
  static propTypes = {
    locale: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      quotesPage: 0,
      width: '0',
      height: '0'
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
  }

  toQuotesPage(page) {
    anime({
      targets: '.customers .customer',
      rotateY: '720deg',
      duration: 500,
      easing: 'easeInQuad'
    }).finished.then(() => {
      this.setState(state => {
        return {
          ...state,
          quotesPage: page
        };
      });
      anime({
        targets: '.customers .customer',
        rotateY: '-720deg',
        duration: 500,
        easing: 'easeOutQuad'
      });
    });
  }

  render() {
    const {locale} = this.props;
    const { width } = this.state;
    const quotePagesArray = [];
    const quotePages = width > 992 ? Math.ceil(quotes.length / 3) : quotes.length;
    const quotesPerPage = width > 992 ? 3 : 1;
    for (let i = 0; i < quotePages; i++) {
      quotePagesArray.push(i);
    }

    return (
      <div className="customers-section">
        <div className="customers text-center">
          <Container>
            <h2>
              <FormattedMessage id="customers.title"/>
            </h2>
            <h2 className="h2-subtitle" dangerouslySetInnerHTML={{ __html: TranslationUtil.translate(locale, "customers.subtitle") }} />

            <Row className="customers justify-content-center">
              {quotes
                .slice(this.state.quotesPage * quotesPerPage, this.state.quotesPage * quotesPerPage + quotesPerPage)
                .map((customer, i) => (
                  <Col className="customer" key={i} xs="12" lg="4">
                    <p className="quote">
                      <span dangerouslySetInnerHTML={{ __html: `&quot;${TranslationUtil.translate(locale, customer.quote)}&quot;`}} />
                    </p>
                    <img className="rounded-circle my-3" src={customer.photo} />
                    <p className="font-weight-bold mb-0">{customer.name}</p>
                    <p className="font-italic">{TranslationUtil.translate(locale, customer.company)}</p>
                  </Col>
                ))}

              <Col md="12" className="mt-3 mb-5 quotesPagination">
                {quotePagesArray.map((p, i) => (
                  <button key={i} onClick={() => this.toQuotesPage(p)} className={p === this.state.quotesPage ? 'active' : ''} />
                ))}
                <br />
                <br />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
