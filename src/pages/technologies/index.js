import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {Container} from 'reactstrap';

import {Footer, References, Benefits, ParallaxBlock} from '../../components';
import {BannerSection, KeySection, CustomersSection, DarkFloatingSection} from '../../components/index-page';
import {ServicesSection} from '../../components/index-page/services-section/services-section';
import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";

import '../../assets/images/check-mark.svg';
import cube01 from '../../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../../assets/images/cubes/3d-cube-02.svg';
import cube03 from '../../assets/images/cubes/3d-cube-03.svg';
import './index.scss';

import {benefits} from '../../content/indexPage';
import {Layout} from "../../layouts";
import SEO from "../../components/seo/seo.component";
import {TranslationUtil} from "../../utils/translation.util";

 class TechnologiesPage extends Component {
    static propTypes = {
        pageContext: PropTypes.object
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {pageContext} = this.props;
        const locale = pageContext.locale;

        return (
            <Layout locale={locale}>
                <div className="technologies-page">
                    <SEO siteTitleId={['technologies-page.site.title', 'site.title']} canonical="/technologies" locale={locale}/>

                    <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="1%" yOffset={270}/>
                    <ParallaxBlock className="d-none d-md-block" image={cube01} size={60} xOffset="20%" yOffset={100}/>
                    <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="95%" yOffset={160}/>
                    <ParallaxBlock className="d-none d-sm-block" image={cube01} size={100} xOffset="80%" yOffset={550}/>
                    <ParallaxBlock image={cube02} size={50} xOffset="60%" yOffset={100}/>
                    <ParallaxBlock className="d-none d-md-block" image={cube02} size={80} xOffset="55%" yOffset={500}/>
                    <ParallaxBlock className="d-none d-sm-block" image={cube03} size={60} xOffset="8%" yOffset={550}/>

                    <BannerSection locale={locale}/>

                    <KeySection locale={locale}/>

                    <ParallaxBlock image={cube02} size={130} xOffset="12%" yOffset={150}/>
                    <ParallaxBlock className="d-none d-lg-block" image={cube02} size={60} xOffset="5%" yOffset={1300}/>

                    <DarkFloatingSection
                        topContent={<ServicesSection locale={locale}/>}
                        bottomContent={
                            <Benefits
                                locale={locale}
                                title={TranslationUtil.translate(locale,"technologies-page.benefits.title")}
                                description={TranslationUtil.translate(locale,"technologies-page.benefits.description")}
                                benefits={benefits}
                                quote={TranslationUtil.translate(locale,"technologies-page.benefits.start")}
                            />
                        }
                    />

                    <CustomersSection locale={locale}/>

                    <Container className="text-center">
                        <References/>
                    </Container>

                    <ParallaxBlock image={cube02} size={100} xOffset="10%" yOffset={300}/>
                    <ParallaxBlock className="d-none d-md-block" image={cube01} size={80} xOffset="70%" yOffset={450}/>
                    <Footer locale={locale} social/>
                </div>
            </Layout>
        );
    }
}

export default TechnologiesPage
