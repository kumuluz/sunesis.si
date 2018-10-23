import React, {Component} from 'react';
import Helmet from "react-helmet";
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {Container, Row, Col} from 'reactstrap';
import {Footer, CheckboxListComponent, References} from '../../components';

import './index.scss';
import bossStockPhoto from "../../assets/images/stock-boss.jpg";
import planStockPhoto from "../../assets/images/plan-stock.jpg";
import teamStockPhoto from "../../assets/images/team-stock.jpg";

const typicalCustomersList = t => [
    t("who-are.typical-customers.item-1"),
    t("who-are.typical-customers.item-2"),
    t("who-are.typical-customers.item-3"),
    t("who-are.typical-customers.item-4"),
    t("who-are.typical-customers.item-5")
];

const commonIndustriesList = t => [
    t("who-are.common-industries.item-1"),
    t("who-are.common-industries.item-2"),
    t("who-are.common-industries.item-3"),
    t("who-are.common-industries.item-4"),
    t("who-are.common-industries.item-5"),
    t("who-are.common-industries.item-6"),
    t("who-are.common-industries.item-7"),
    t("who-are.common-industries.item-8")
];

@translate('customers')
export default class CustomersPage extends Component {
    static propTypes = {
        t: PropTypes.func
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {t} = this.props;

        return (
            <div className="customers">
                <Helmet title={t("site.title")}/>
                <Container fluid={true} className="banner-dark pl-0 pr-0">
                    <Row className="justify-content-center m-0">
                        <Col xs="12" lg="8">
                            <h1>{t("header.title")}</h1>
                            {/*<h2>{t("header.subtitle")}</h2>*/}
                        </Col>
                    </Row>
                    <div className="arrow"/>
                </Container>

                <Container>
                    <Row className="justify-content-center pt-3">
                        <Col xs="12" xl="9">
                            <p className="mb-4">
                                {t("who-are.para-1")}
                            </p>
                            <div className="header-image">
                                <img src={bossStockPhoto}/>
                            </div>
                            <p className="mb-5 font-italic">
                                {t("who-are.para-2")}
                            </p>
                        </Col>
                        <Col xs="12" xl="9">

                            <CheckboxListComponent title={t("who-are.typical-customers.title")}
                                items={typicalCustomersList(t)} checkboxColor={"#367dbf"}/>
                            <div className="mt-5"/>
                            <CheckboxListComponent title={t("who-are.common-industries.title")}
                                items={commonIndustriesList(t)} checkboxColor={"#367dbf"}/>

                            <h3 className="text-center mt-5 blue-400">{t("who-are.list-of-clients")}</h3>
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
                            <h2 className="blue-400 mb-4">{t("who-are.struggle.title")}</h2>
                            <p className="mb-4">{t("who-are.struggle.para")}</p>

                            <CheckboxListComponent title={t("who-are.struggle.problems.title")}
                                items={[
                                    t("who-are.struggle.problems.item-1"),
                                    t("who-are.struggle.problems.item-2"),
                                    t("who-are.struggle.problems.item-3"),
                                    t("who-are.struggle.problems.item-4")
                                ]}

                            />
                            <p className="mt-5">
                                {t("who-are.struggle.summary")}
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
                            <h2 className="blue-400 mb-4">{t("who-are.help.title")}</h2>
                            <p className="mb-4">{t("who-are.help.para-1")}</p>
                            <div className="header-image">
                                <img src={teamStockPhoto}/>
                            </div>
                            <p className="mb-4">{t("who-are.help.para-2")}</p>

                            <CheckboxListComponent title={t("who-are.help.advantages.title")}
                                items={[
                                    t("who-are.help.advantages.item-1"),
                                    t("who-are.help.advantages.item-2"),
                                    t("who-are.help.advantages.item-3"),
                                    t("who-are.help.advantages.item-4"),
                                    t("who-are.help.advantages.item-5"),
                                    t("who-are.help.advantages.item-6"),
                                    t("who-are.help.advantages.item-7"),
                                    t("who-are.help.advantages.item-8"),
                                    t("who-are.help.advantages.item-9"),
                                    t("who-are.help.advantages.item-10")
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
                            <h2 className="blue-400 mb-4">{t("who-are.replatforming.title")}</h2>
                            <p className="mb-4">{t("who-are.replatforming.para-1")}</p>
                            <div className="header-image">
                                <img src={planStockPhoto}/>
                            </div>
                            <p className="mb-4">{t("who-are.replatforming.para-2")}</p>

                            <CheckboxListComponent title={t("who-are.replatforming.decisions.title")}
                                items={[
                                    t("who-are.replatforming.decisions.item-1"),
                                    t("who-are.replatforming.decisions.item-2"),
                                    t("who-are.replatforming.decisions.item-3"),
                                    t("who-are.replatforming.decisions.item-4"),
                                    t("who-are.replatforming.decisions.item-5"),
                                    t("who-are.replatforming.decisions.item-6")
                                ]}/>
                            <div className="mt-5"/>
                            <CheckboxListComponent title={t("who-are.replatforming.transitions.title")}
                                items={[
                                    t("who-are.replatforming.transitions.item-1"),
                                    t("who-are.replatforming.transitions.item-2"),
                                    t("who-are.replatforming.transitions.item-3"),
                                    t("who-are.replatforming.transitions.item-4"),
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
                            <h2 className="blue-400 mb-4">{t("who-are.striving.title")}</h2>
                            <p className="mb-4">{t("who-are.striving.para")}</p>

                            <CheckboxListComponent title={t("who-are.striving.enabled.title")}
                               items={[
                                   t("who-are.striving.enabled.item-1"),
                                   t("who-are.striving.enabled.item-2"),
                                   t("who-are.striving.enabled.item-3")
                               ]}/>
                            <p className="mt-5">{t("who-are.striving.summary")}</p>
                        </Col>
                    </Row>
                </Container>

                <Footer contact/>
            </div>
        );
    }
}
