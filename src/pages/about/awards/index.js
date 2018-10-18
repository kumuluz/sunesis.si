import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { translate } from 'react-i18next';
import { Container, Row, Col, Button } from 'reactstrap';
import { Footer, SubNavbar, ParallaxBlock } from '../../../components';

import '../index.scss';

import { articles } from '../../../content/articles';

import cube01 from '../../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../../assets/images/cubes/3d-cube-02.svg';
import cube03 from '../../../assets/images/cubes/3d-cube-03.svg';

import awardDuke from '../../../assets/images/awards/duke.jpg';
import awardEurocloud from '../../../assets/images/awards/euro-cloud.png';
import awardStartup from '../../../assets/images/awards/startup.png';
import Helmet from "react-helmet";

const awards = t => [
  {
    img: awardDuke,
    title: t("awards.duke.title"),
    text: t("awards.duke.text"),
    href: 'https://community.oracle.com/community/technology_network_community/java/javaone/dukes-choice-awards'
  },
  {
    img: awardEurocloud,
    title: t("awards.eurocloud.title"),
    text: t("awards.eurocloud.text"),
    href: 'https://krog.sta.si/2022184/na-gzs-podelili-nagrade-za-najboljse-storitve-v-oblaku'
  },
  {
    img: awardStartup,
    title: t("awards.startup.title"),
    text: t("awards.startup.text"),
    href: 'https://www.startup.si/en-us'
  }
];

@translate('about', 'language')
export default class AboutUsPage extends Component {
  static propTypes = {
    t: PropTypes.func
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

  render() {
    const { t } = this.props;
    const { howManyArticles, allLoaded, articles } = this.state;

    return (
      <div className="aboutUs awards">
          <Helmet title={t("site.awards.title") + " - " + t("site.title")}/>
        <SubNavbar nav="/about" />
        <Container className="banner mt-5 mb-5">
          <Row className="justify-content-center pt-5">
            <Col xl="8" className="text-center">
              <h1 className="font-weight-bold mb-4">{t("awards.title")}</h1>
              <h2>{t("awards.subtitle")}</h2>
            </Col>
          </Row>
        </Container>
        <ParallaxBlock image={cube01} size={100} xOffset="5%" yOffset="-80px" />
        <ParallaxBlock image={cube03} size={30} xOffset="15%" yOffset="400px" />
        <ParallaxBlock image={cube01} size={40} xOffset="80%" yOffset="-40px" />
        <ParallaxBlock image={cube02} size={80} xOffset="85%" yOffset="300px" />

        <Container className="banner mt-5 mb-5">
          {awards(t).map((award, key) => (
            <Row key={key} className="justify-content-center pt-5">
              <Col xl="10" className="d-flex award">
                <div className="award-img">
                  <img className="img-fluid" src={award.img} />
                </div>
                <div className="award-content">
                  <h3 className="font-weight-bold mb-4">{award.title}</h3>
                  <p>{award.text}</p>
                    <a href={award.href} rel="noreferrer noopener" target="_blank" className="btn btn-info award-btn">
                      {t("awards.view-more")}
                    </a>
                </div>
              </Col>
            </Row>
          ))}
        </Container>

        <Container className="whiteSection">
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="line" />
            </Col>
          </Row>
        </Container>

        <Container className="inThePress">
          <Row>
            <Col>
              <h1>{t("awards.press.title")}</h1>
              <h2>{t("awards.press.subtitle")}</h2>
            </Col>
          </Row>
          <Row>
            {articles.slice(0, howManyArticles).map((article, key) => (
              <Col key={key} xl="4" className="article">
                <h5>{moment(article.date).format(t('language:dateFormat'))}</h5>
                {article.image && <img src={article.image} className="img-fluid" />}
                <h4>{article.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: article.content }} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="justify-content-center my-5 d-flex">
              {!allLoaded && (
                <Button color="info" onClick={() => this.showMore()}>
                    {t("awards.view-more")}
                </Button>
              )}
            </Col>
          </Row>
        </Container>

        <ParallaxBlock image={cube02} size={90} xOffset="15%" yOffset="350px" />
        <ParallaxBlock image={cube01} size={80} xOffset="70%" yOffset="250px" />
        <ParallaxBlock image={cube03} size={80} xOffset="85%" yOffset="-100px" />
        <Footer social/>
      </div>
    );
  }
}
