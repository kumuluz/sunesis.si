import React, {Component} from "react";
import * as PropTypes from "prop-types";
import {Layout} from "../../layouts";
import {navigate} from "gatsby";
import SEO from "../../components/seo/seo.component";
import {Container, Row, Col} from "reactstrap";
import {FormattedMessage} from "react-intl";
import InternalLink from "../../components/links/internal-link.component";
import {Footer} from "../../components";

import "./index.scss";

export default class ThanksPage extends Component {

    static propTypes = {
        pageContext: PropTypes.object
    };

    constructor(props) {
        super(props);

        setTimeout(() => {
            navigate("/");
        }, 3000);
    }

    render() {
        const {pageContext} = this.props;
        const locale = pageContext.locale;

        return (
            <Layout locale={locale}>
                <div className="sun-thanks-page">
                    <SEO locale={locale} siteTitleId={"site.title"}/>
                    <Container fluid={true}>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h1 className="text-center">
                                    <FormattedMessage id="thanks.title"/>
                                </h1>
                                <p className="text-center">
                                    <FormattedMessage id="thanks.text"/>&#160;
                                    <InternalLink to="/">
                                        <FormattedMessage id="thanks.link"/>
                                    </InternalLink>.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <Footer social locale={locale}/>
                </div>
            </Layout>
        );
    }
}
