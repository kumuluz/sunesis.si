import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';

import {LanguageSelector, ContactForm} from '..';

import {businessApis, products as kumuluzDigitalProducts} from '../../content/products';
import {footerLinks, socialLinks} from '../../content';

import './footer.scss';
import email from "../../assets/images/email.png";
import InternalLink from "../links/internal-link.component";
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../utils/translation.util";

export class Footer extends Component {
    static propTypes = {
        social: PropTypes.any,
        contact: PropTypes.any,
        grey: PropTypes.any,
        beige: PropTypes.bool,
        locale: PropTypes.string
    };

    renderLink(link, index) {
        if (link.href.startsWith("/")) {
            return (
                <div key={index}>
                    <InternalLink to={link.href}>
                        {TranslationUtil.translate(this.props.locale, link.title)}
                    </InternalLink>
                </div>
            )
        } else {
            return (
                <div key={index}>
                    <a href={link.href} target="_blank" rel="noreferrer noopener">
                        {TranslationUtil.translate(this.props.locale, link.title)}
                    </a>
                </div>
            )
        }
    }

    render() {
        const {social, contact, grey, locale, beige} = this.props;
        
        return (
            <div id="footer" className="footer">
                <div className={`arrow ${grey && 'grey'} ${beige && 'beige'}`}/>
                <div className="darkSection">
                    {social && (
                        <div className="social">
                            <h4 className="position-relative text-center">
                                <FormattedMessage id="social.title"/>
                            </h4>
                            <div className="social-icons">
                                {socialLinks.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank">
                                        <img src={link.img}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {contact && (
                        <div className="contact pb-5">
                            <Container>
                                <Row>
                                    <Col xs="12" xl="9">
                                        <ContactForm locale={locale}/>
                                    </Col>
                                    <Col xs="12" xl="3" className="mt-5 text-center text-xl-left">
                                        <h4 className="blue">
                                            <FormattedMessage id="contact.contact.title"/>
                                        </h4>
                                        <h4>
                                            <FormattedMessage id="contact.contact.company"/>
                                        </h4>
                                        <p className="address" dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'contact.contact.address')}}/>
                                        <p className="mt-4">
                                            <img style={{cursor: "pointer"}} src={email} onClick={() => window.location = "mailto:info@sunesis.si"}/>
                                        </p>
                                        {/*<p>{t('contact.contact.phone')}</p>*/}

                                        <h4 className="blue">
                                            <FormattedMessage id="social.title"/>
                                        </h4>
                                        <div className="social-icons text-center text-xl-left">
                                            {socialLinks.map((link, i) => (
                                                <a key={i} href={link.href} target="_blank">
                                                    <img src={link.img}/>
                                                </a>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )}
                </div>
                <div className="reverse-arrow"/>
                <div className="content">
                    <Container>
                        <Row>
                            <Col>
                                <LanguageSelector locale={locale}/>
                            </Col>
                        </Row>
                        <Row className="links">
                            <Col xs="6" md="4" lg="auto">
                                <div className="title">
                                    <FormattedMessage id="footer.products.title"/>
                                </div>
                                <div className="footer-digital-platform">
                                    <div className="title-digital-platform">
                                        <FormattedMessage id="products.title"/>
                                    </div>
                                    <div className="content-digital-platform">
                                        {kumuluzDigitalProducts(locale).map((prod, i) => {
                                            if (prod.external) {
                                                return (
                                                    <a key={i} href={prod.href} target="_blank">
                                                        {prod.name}
                                                    </a>
                                                );
                                            }
                                            return (
                                                <InternalLink key={i} to={prod.href}>
                                                    {prod.name}
                                                </InternalLink>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="footer-business-apis">
                                    <div className="title-business-apis">
                                        <FormattedMessage id="business-apis.title"/>
                                    </div>
                                    <div className="content-business-apis">
                                        {businessApis(locale).map((api, i) => {
                                            if (api.external) {
                                                return (
                                                    <div key={i}>
                                                        <a href={api.url} target="_blank">
                                                            {api.title}
                                                        </a>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div key={i}>
                                                    <InternalLink key={i} to={api.url}>
                                                        {api.title}
                                                    </InternalLink>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Col>
                            {footerLinks.map((fl, i) => (
                                <Col key={i} xs="6" md="4" lg="auto">
                                    <div className="title">{TranslationUtil.translate(locale, fl.title)}</div>
                                    {fl.links.map(
                                        (link, ind) =>{
                                            if(link.href) {
                                                return this.renderLink(link, ind);
                                            } else {
                                                return (<div key={ind}>{TranslationUtil.translate(locale, link.title)}</div>);
                                            }
                                        })}
                                </Col>
                            ))}
                        </Row>

                        <Row>
                            <Col>
                                <div className="line"/>
                                <p className="copyright" dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, "copyright")}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
