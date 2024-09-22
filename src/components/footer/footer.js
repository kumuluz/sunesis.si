import React from "react";
import * as PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import { LanguageSelector, ContactForm, Link } from "..";

import { businessApis, products as kumuluzDigitalProducts } from "../../content/products";
import { footerLinks, socialLinks } from "../../content";

import "./footer.scss";
import email from "../../assets/images/email.png";
import { useI18next } from "gatsby-plugin-react-i18next";

export function Footer({ social, contact, grey, beige, blue }) {
  const { t } = useI18next();

  function renderLink(link, index) {
    if (link.href.startsWith("/")) {
      return (
        <div key={index}>
          <Link to={link.href} external={false} className="link">
            {t(link.title)}
          </Link>
        </div>
      );
    }
    return (
      <div key={index}>
        <a href={link.href} target="_blank" rel="noreferrer noopener">
          {t(link.title)}
        </a>
      </div>
    );
  }

  return (
    <div id="footer" className="footer">
      <div className={`arrow ${grey && "grey"} ${beige && "beige"} ${blue && "blue"}`} />
      <div className="darkSection">
        {social && (
          <div className="social">
            <h4 className="position-relative text-center">{t("social.title")}</h4>
            <div className="social-icons">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank">
                  <img src={link.img} alt={link.href} />
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
                  <ContactForm />
                </Col>
                <Col xs="12" xl="3" className="mt-5 text-center text-xl-left">
                  <h4 className="blue">{t("contact.contact.title")}</h4>
                  <h4>{t("contact.contact.company")}</h4>
                  <p className="address" dangerouslySetInnerHTML={{ __html: t("contact.contact.address") }} />
                  <p className="mt-4">
                    <img
                      style={{ cursor: "pointer" }}
                      src={email}
                      onClick={() => (window.location = "mailto:info@sunesis.si")}
                    />
                  </p>

                  <h4 className="blue">{t("social.title")}</h4>
                  <div className="social-icons text-center text-xl-left">
                    {socialLinks.map((link, i) => (
                      <a key={i} href={link.href} target="_blank">
                        <img src={link.img} alt={link.href} />
                      </a>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
      <div className="reverse-arrow" />
      <div className="content">
        <Container>
          <Row>
            <Col>
              <LanguageSelector />
            </Col>
          </Row>
          <Row className="links">
            <Col xs="6" md="4" lg="auto">
              <div className="title">{t("footer.products.title")}</div>
              <div className="footer-digital-platform">
                <div className="title-digital-platform">{t("products.title")}</div>
                <div className="content-digital-platform">
                  {kumuluzDigitalProducts(t).map((prod, i) => (
                    <Link to={prod.href} external={prod.external} key={i}>
                      {prod.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="footer-business-apis">
                <div className="title-business-apis">{t("business-apis.title")}</div>
                <div className="content-business-apis">
                  {businessApis(t).map((api, i) => (
                    <div key={i}>
                      <Link to={api.url} key={i} external={api.external}>
                        {api.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            {footerLinks.map((fl, i) => (
              <Col key={i} xs="6" md="4" lg="auto">
                <div className="title">{t(fl.title)}</div>
                {fl.links.map((link, ind) => {
                  if (link.href) {
                    return renderLink(link, ind);
                  } else {
                    return (
                      <div key={ind}>
                        <div className="footer-bulletpoints">
                          <div className="bullet-point" />
                          <div>{t(link.title)}</div>
                        </div>
                        {link.items && (
                          <div className="ml-4 d-flex flex-column">
                            {link.items.map((item, j) => (
                              <div key={j} className="footer-bulletpoints">
                                <div className="bullet-point" />
                                <div>{t(item)}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                })}
              </Col>
            ))}
          </Row>

          <Row>
            <Col>
              <div className="line" />
              <p className="copyright" dangerouslySetInnerHTML={{ __html: t("copyright") }} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

Footer.propTypes = {
  social: PropTypes.any,
  contact: PropTypes.any,
  grey: PropTypes.any,
  beige: PropTypes.bool,
  blue: PropTypes.bool,
};
