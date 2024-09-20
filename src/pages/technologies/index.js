import React, { Component } from "react";
import * as PropTypes from "prop-types";

import {
  Footer,
  Benefits,
  ParallaxBlock,
  BannerSection,
  KeySection,
  DarkFloatingSection,
  GoogleAnalyticsService,
  ServicesSection,
  SEO,
} from "../../components";

import "../../assets/images/check-mark.svg";
import cube01 from "../../assets/images/cubes/3d-cube-01.svg";
import cube02 from "../../assets/images/cubes/3d-cube-02.svg";
import cube03 from "../../assets/images/cubes/3d-cube-03.svg";
import "./index.scss";

import { benefits } from "../../content/indexPage";
import { Layout } from "../../layouts";
import { withTranslation } from "react-i18next";
import { graphql } from "gatsby";

class TechnologiesPage extends Component {
  static propTypes = {
    pageContext: PropTypes.object,
    t: PropTypes.func,
    i18n: PropTypes.object,
  };

  componentDidMount() {
    GoogleAnalyticsService.registerPageView();
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;

    return (
      <Layout>
        <div className="technologies-page">
          <SEO siteTitleId={["technologies:site.title", "translations:site.title"]} canonical="/technologies" />

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
            topContent={<ServicesSection showCoreServices={false} />}
            bottomContent={
              <Benefits
                title={t("benefits.title")}
                description={t("benefits.description")}
                benefits={benefits(t)}
                quote={t("benefits.start")}
              />
            }
          />

          {/*<CustomersSection locale={locale}/>*/}

          {/*<Container className="text-center">*/}
          {/*    <References/>*/}
          {/*</Container>*/}

          <ParallaxBlock image={cube02} size={100} xOffset="10%" yOffset={300} />
          <ParallaxBlock className="d-none d-md-block" image={cube01} size={80} xOffset="70%" yOffset={450} />
          <Footer social blue={true} />
        </div>
      </Layout>
    );
  }
}

export default withTranslation("technologies")(TechnologiesPage);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
