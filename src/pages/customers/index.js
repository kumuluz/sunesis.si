import React, {Component} from 'react';
import Helmet from "react-helmet";
import * as PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';

import {Footer, CheckboxListComponent, References} from '../../components';
import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";

import './index.scss';
import bossStockPhoto from "../../assets/images/stock-boss.jpg";
import planStockPhoto from "../../assets/images/plan-stock.jpg";
import teamStockPhoto from "../../assets/images/team-stock.jpg";
import {Layout} from "../../layouts";
import SEO from "../../components/seo/seo.component";
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../utils/translation.util";

const typicalCustomersList = (locale) => [
    TranslationUtil.translate(locale, "who-are.typical-customers.item-1", "customers-page"),
    TranslationUtil.translate(locale, "who-are.typical-customers.item-2", "customers-page"),
    TranslationUtil.translate(locale, "who-are.typical-customers.item-3", "customers-page"),
    TranslationUtil.translate(locale, "who-are.typical-customers.item-4", "customers-page"),
    TranslationUtil.translate(locale, "who-are.typical-customers.item-5", "customers-page")
];

const commonIndustriesList = (locale) => [
    TranslationUtil.translate(locale, "who-are.common-industries.item-1", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-2", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-3", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-4", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-5", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-6", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-7", "customers-page"),
    TranslationUtil.translate(locale, "who-are.common-industries.item-8", "customers-page"),
];

export default class CustomersPage extends Component {
    static propTypes = {
        pageContext: PropTypes.object
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {pageContext} = this.props;
        const locale = pageContext.locale;

        return (
            <Layout locale={locale}>
                <div className="customers">
                    <SEO siteTitleId={["customers-page.site.title", "site.title"]} locale={locale}/>
                    <Container fluid={true} className="banner-dark pl-0 pr-0">
                        <Row className="justify-content-center m-0">
                            <Col xs="12" lg="8">
                                <h1>
                                    <FormattedMessage id="customers-page.header.title"/>
                                </h1>
                            </Col>
                        </Row>
                        <div className="arrow"/>
                    </Container>

                    <Container>
                        <Row className="justify-content-center pt-3">
                            <Col xs="12" xl="9">
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.para-1"/>
                                </p>
                                <div className="header-image">
                                    <img src={bossStockPhoto} alt="stock photo"/>
                                </div>
                                <p className="mb-5 font-italic">
                                    <FormattedMessage id="customers-page.who-are.para-2"/>
                                </p>
                            </Col>
                            <Col xs="12" xl="9">
                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.typical-customers.title", "customers-page")}
                                    items={typicalCustomersList(locale)} checkboxColor={"#367dbf"}/>
                                <div className="mt-5"/>
                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.common-industries.title", "customers-page")}
                                    items={commonIndustriesList(locale)} checkboxColor={"#367dbf"}/>
                                <h3 className="text-center mt-5 blue-400">
                                    <FormattedMessage id="customers-page.who-are.list-of-clients"/>
                                </h3>
                                <References showIntro={false} marginTopClass={"mt-2"}/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center whiteSection">
                            <Col>
                                <div className="line mx-auto"/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center pt-3">
                            <Col xs="12" xl="9">
                                <h2 className="blue-400 mb-4">
                                    <FormattedMessage id="customers-page.who-are.struggle.title"/>
                                </h2>
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.struggle.para"/>
                                </p>

                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.struggle.problems.title", "customers-page")}
                                    items={[
                                        TranslationUtil.translate(locale, "who-are.struggle.problems.item-1", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.struggle.problems.item-2", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.struggle.problems.item-3", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.struggle.problems.item-4", "customers-page"),
                                    ]}

                                />
                                <p className="mt-5">
                                    <FormattedMessage id="customers-page.who-are.struggle.summary"/>
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center whiteSection">
                            <Col>
                                <div className="line mx-auto"/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center pt-3">
                            <Col xs="12" xl="9">
                                <h2 className="blue-400 mb-4">
                                    <FormattedMessage id="customers-page.who-are.help.title"/>
                                </h2>
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.help.para-1"/>
                                </p>
                                <div className="header-image">
                                    <img src={teamStockPhoto}/>
                                </div>
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.help.para-2"/>
                                </p>

                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.help.advantages.title", "customers-page")}
                                    items={[
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-1", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-2", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-3", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-4", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-5", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-6", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-7", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-8", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-9", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.help.advantages.item-10", "customers-page"),
                                    ]}/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center whiteSection">
                            <Col>
                                <div className="line mx-auto"/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center pt-3">
                            <Col xs="12" xl="9">
                                <h2 className="blue-400 mb-4">
                                    <FormattedMessage id="customers-page.who-are.replatforming.title"/>
                                </h2>
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.replatforming.para-1"/>
                                </p>
                                <div className="header-image">
                                    <img src={planStockPhoto}/>
                                </div>
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.replatforming.para-2"/>
                                </p>

                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.replatforming.decisions.title", "customers-page")}
                                    items={[
                                        TranslationUtil.translate(locale, "who-are.replatforming.decisions.item-1", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.decisions.item-2", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.decisions.item-3", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.decisions.item-4", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.decisions.item-5", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.decisions.item-6", "customers-page"),
                                    ]}/>
                                <div className="mt-5"/>
                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.replatforming.transitions.title", "customers-page")}
                                    items={[
                                        TranslationUtil.translate(locale, "who-are.replatforming.transitions.item-1", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.transitions.item-2", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.transitions.item-3", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.replatforming.transitions.item-4", "customers-page"),
                                    ]}/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center whiteSection">
                            <Col>
                                <div className="line mx-auto"/>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row className="justify-content-center pt-3">
                            <Col xs="12" xl="9">
                                <h2 className="blue-400 mb-4">
                                    <FormattedMessage id="customers-page.who-are.striving.title"/>
                                </h2>
                                <p className="mb-4">
                                    <FormattedMessage id="customers-page.who-are.striving.para"/>
                                </p>

                                <CheckboxListComponent title={TranslationUtil.translate(locale, "who-are.striving.enabled.title", "customers-page")}
                                    items={[
                                        TranslationUtil.translate(locale, "who-are.striving.enabled.item-1", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.striving.enabled.item-2", "customers-page"),
                                        TranslationUtil.translate(locale, "who-are.striving.enabled.item-3", "customers-page")
                                    ]}/>
                                <p className="mt-5">
                                    <FormattedMessage id="customers-page.who-are.striving.summary"/>
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Footer contact locale={locale}/>
                </div>
            </Layout>
        );
    }
}
