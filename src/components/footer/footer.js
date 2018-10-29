import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {Container, Row, Col} from 'reactstrap';
import Link from 'gatsby-link';

import {LanguageSelector, ContactForm} from '../../components';

import {businessApis, products as kumuluzDigitalProducts} from '../../content/products';
import {footerLinks, socialLinks} from '../../content';

import './footer.scss';
import email from "../../assets/images/email.png";

@translate()
export class Footer extends Component {
    static propTypes = {
        t: PropTypes.func,
        social: PropTypes.any,
        contact: PropTypes.any,
        grey: PropTypes.any
    };

    renderLink(link, index) {
        if (link.href.startsWith("/")) {
            return (
                <div key={index}>
                    <Link to={link.href}>
                        {link.title}
                    </Link>
                </div>
            )
        } else {
            return (
                <div key={index}>
                    <a href={link.href} target="_blank">
                        {link.title}
                    </a>
                </div>
            )
        }
    }

    render() {
        const {t, social, contact, grey} = this.props;

        return (
            <div id="footer" className="footer">
                <div className={`arrow ${grey && 'grey'}`}/>
                <div className="darkSection">
                    {social && (
                        <div className="social">
                            <h4 className="position-relative text-center">{t('social.title')}</h4>
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
                                        <ContactForm/>
                                    </Col>
                                    <Col xs="12" xl="3" className="mt-5 text-center text-xl-left">
                                        <h4 className="blue">{t('contact.contact.title')}</h4>
                                        <h4>{t('contact.contact.company')}</h4>
                                        <p dangerouslySetInnerHTML={{__html: t('contact.contact.address')}}/>
                                        <p className="mt-4">
                                            <img style={{cursor: "pointer"}} src={email} onClick={() => window.location = "mailto:info@sunesis.si"}/>
                                        </p>
                                        {/*<p>{t('contact.contact.phone')}</p>*/}

                                        <h4 className="blue">{t('social.title')}</h4>
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
                                <LanguageSelector/>
                            </Col>
                        </Row>
                        <Row className="links">
                            <Col xs="6" md="4" lg="auto">
                                <div className="title">{t('footer.products.title')}</div>
                                <div className="footer-digital-platform">
                                    <div className="title-digital-platform">
                                        {t("products.title")}
                                    </div>
                                    <div className="content-digital-platform">
                                        {kumuluzDigitalProducts(t).map((prod, i) => {
                                            if (prod.external) {
                                                return (
                                                    <a key={i} href={prod.href} target="_blank">
                                                        {prod.name}
                                                    </a>
                                                );
                                            }
                                            return (
                                                <Link key={i} to={prod.href}>
                                                    {prod.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="footer-business-apis">
                                    <div className="title-business-apis">
                                        {t("business-apis.title")}
                                    </div>
                                    <div className="content-business-apis">
                                        {businessApis(t).map((api, i) => {
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
                                                    <Link to={api.url}>
                                                        {api.title}
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Col>
                            {footerLinks(t).map((fl, i) => (
                                <Col key={i} xs="6" md="4" lg="auto">
                                    <div className="title">{fl.title}</div>
                                    {fl.links.map(
                                        (link, ind) =>{
                                            if(link.href) {
                                                return this.renderLink(link, ind);
                                            } else {
                                                return (<div key={ind}>{link.title}</div>);
                                            }
                                        })}
                                </Col>
                            ))}
                        </Row>

                        <Row>
                            <Col>
                                <div className="line"/>
                                <p className="copyright" dangerouslySetInnerHTML={{__html: t('copyright')}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
