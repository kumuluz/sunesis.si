import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import {Container, Row, Col, Button} from 'reactstrap';
import {Footer, SubNavbar, ParallaxBlock} from '../../../components';
import {GoogleAnalyticsService} from "../../../components/google-analytics/google-analytics.service";

import '../index.scss';

import {articles} from '../../../content/articles';
import languages from "../../../i18n/languages";

import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';
import cube03 from '../../../assets/images/cubes/3d-cube-03.svg';

import awardDuke from '../../../assets/images/awards/duke.jpg';
import awardEurocloud from '../../../assets/images/awards/euro-cloud.png';
import awardStartup from '../../../assets/images/awards/startup.png';
import {Layout} from "../../../layouts";
import SEO from "../../../components/seo/seo.component";
import {FormattedMessage} from "react-intl";
import {TranslationUtil} from "../../../utils/translation.util";

const awards = [
    {
        img: awardDuke,
        title: 'awards.duke.title',
        text: 'awards.duke.text',
        href: 'https://community.oracle.com/community/technology_network_community/java/javaone/dukes-choice-awards'
    },
    {
        img: awardEurocloud,
        title: 'awards.eurocloud.title',
        text: 'awards.eurocloud.text',
        href: 'https://krog.sta.si/2022184/na-gzs-podelili-nagrade-za-najboljse-storitve-v-oblaku'
    },
    {
        img: awardStartup,
        title: 'awards.startup.title',
        text: 'awards.startup.text',
        href: 'https://www.startup.si/en-us'
    }
];

export default class AboutUsPage extends Component {
    static propTypes = {
        pageContext: PropTypes.object
    };

    constructor(props) {
        super(props);

        const arts = articles
            .map(a => {
                a.date = moment(a.date);
                return a;
            })
            .sort((a, b) => {
                return moment(b.date).format('X') - moment(a.date).format('X');
            });

        this.state = {
            articles: arts,
            howManyArticles: 6,
            allLoaded: articles.length <= 6
        };
    }

    showMore() {
        this.setState(state => {
            return {
                ...state,
                howManyArticles: state.howManyArticles + 3,
                allLoaded: articles.length <= state.howManyArticles + 3
            };
        });
    }

    goTo(link) {
        window.location = link;
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {howManyArticles, allLoaded, articles} = this.state;
        const {pageContext} = this.props;
        const locale = pageContext.locale;

        return (
            <Layout locale={locale}>
                <div className="aboutUs awards">
                    <SEO locale={locale} siteTitleId={["about-page.site.awards.title", "site.title"]} canonical="/about/awards"/>
                    <SubNavbar nav="/about" locale={locale}/>
                    <Container className="banner mt-5 mb-5">
                        <Row className="justify-content-center pt-5">
                            <Col xl="8" className="text-center">
                                <h1 className="font-weight-bold mb-4">
                                    <FormattedMessage id="about-page.awards.title"/>
                                </h1>
                                <FormattedMessage id="about-page.awards.subtitle"/>
                            </Col>
                        </Row>
                    </Container>
                    <ParallaxBlock image={cube01} size={100} xOffset="5%" yOffset="-80px"/>
                    <ParallaxBlock image={cube03} size={30} xOffset="15%" yOffset="400px"/>
                    <ParallaxBlock image={cube01} size={40} xOffset="80%" yOffset="-40px"/>
                    <ParallaxBlock image={cube02} size={80} xOffset="85%" yOffset="300px"/>

                    <Container className="banner mt-5 mb-5">
                        {awards.map((award, key) => (
                            <Row key={key} className="justify-content-center pt-5">
                                <Col xl="10" className="d-flex award">
                                    <div className="award-img">
                                        <img className="img-fluid" src={award.img}/>
                                    </div>
                                    <div className="award-content">
                                        <h3 className="font-weight-bold mb-4">
                                            {TranslationUtil.translate(locale, award.title, "about-page")}
                                        </h3>
                                        <p>{TranslationUtil.translate(locale, award.text, "about-page")}</p>
                                        <a href={award.href} rel="noreferrer noopener" target="_blank"
                                            className="btn btn-info award-btn">
                                            {TranslationUtil.translate(locale, "awards.view-more", "about-page")}
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </Container>

                    <Container className="whiteSection">
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <div className="line"/>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="inThePress">
                        <Row>
                            <Col>
                                <h1>
                                    <FormattedMessage id="about-page.awards.press.title"/>
                                </h1>
                                <h2>
                                    <FormattedMessage id="about-page.awards.press.subtitle"/>
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            {articles.slice(0, howManyArticles).map((article, key) => (
                                <Col key={key} xl="4" className="article">
                                    <h5>{moment(article.date).format(languages[locale].dateFormat)}</h5>
                                    {article.image && <img src={article.image} className="img-fluid"/>}
                                    <h4>{article.title}</h4>
                                    <p dangerouslySetInnerHTML={{__html: article.content}}/>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col className="justify-content-center my-5 d-flex">
                                {!allLoaded && (
                                    <Button color="info" onClick={() => this.showMore()}>
                                        {TranslationUtil.translate(locale, 'awards.view-more', 'about-page')}
                                    </Button>
                                )}
                            </Col>
                        </Row>
                    </Container>

                    <ParallaxBlock image={cube02} size={90} xOffset="15%" yOffset="350px"/>
                    <ParallaxBlock image={cube01} size={80} xOffset="70%" yOffset="250px"/>
                    <ParallaxBlock image={cube03} size={80} xOffset="85%" yOffset="-100px"/>
                    <Footer social locale={locale}/>
                </div>
            </Layout>
        );
    }
}
