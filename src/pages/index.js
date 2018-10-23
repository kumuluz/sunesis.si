import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { translate } from 'react-i18next';
import { Container } from 'reactstrap';
import { Footer, References, Benefits, ParallaxBlock } from '../components';
import { BannerSection, KeySection, CustomersSection, DarkFloatingSection } from '../components/index-page';

import './index.scss';

import { benefits } from '../content/indexPage';

import '../assets/images/check-mark.svg';
import cube01 from '../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../assets/images/cubes/3d-cube-02.svg';
import cube03 from '../assets/images/cubes/3d-cube-03.svg';
import { ServicesSection } from '../components/index-page/services-section/services-section';

@translate()
export default class IndexPage extends Component {
  static propTypes = {
    t: PropTypes.func
  };

  componentDidMount() {
    GoogleAnalyticsService.registerPageView();
  }

  render() {
    const { t } = this.props;

    return (
      <div className="index">
        <Helmet title={t('site.title')} />

        <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="1%" yOffset={270} />
        <ParallaxBlock className="d-none d-md-block" image={cube01} size={60} xOffset="20%" yOffset={100} />
        <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="95%" yOffset={160} />
        <ParallaxBlock className="d-none d-sm-block" image={cube01} size={100} xOffset="80%" yOffset={550} />
        <ParallaxBlock image={cube02} size={50} xOffset="60%" yOffset={100} />
        <ParallaxBlock className="d-none d-md-block" image={cube02} size={80} xOffset="55%" yOffset={500} />
        <ParallaxBlock className="d-none d-sm-block" image={cube03} size={60} xOffset="8%" yOffset={550} />

        <BannerSection />

        <KeySection />

        <ParallaxBlock image={cube02} size={130} xOffset="12%" yOffset={150} />
        <ParallaxBlock className="d-none d-lg-block" image={cube02} size={60} xOffset="5%" yOffset={1300} />

        <DarkFloatingSection
          topContent={<ServicesSection />}
          bottomContent={
            <Benefits
              title={t('benefits.title')}
              description={t('benefits.description')}
              benefits={benefits(t)}
              quote={t('benefits.start')}
            />
          }
        />

        <CustomersSection />

        <Container className="text-center">
          <References />
        </Container>

        <ParallaxBlock image={cube02} size={100} xOffset="10%" yOffset={300} />
        <ParallaxBlock className="d-none d-md-block" image={cube01} size={80} xOffset="70%" yOffset={450} />
        <Footer social />
      </div>
    );
  }
}
