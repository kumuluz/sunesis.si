import React from 'react';
import {graphql} from "gatsby";
import {useI18next} from "gatsby-plugin-react-i18next";

import {Footer, ParallaxBlock} from '../components';
import {Layout} from "../layouts";

import './technologies/index.scss';
import cube01 from '../assets/images/cubes/3d-cube-01.svg';
import cube02 from '../assets/images/cubes/3d-cube-02.svg';
import cube03 from '../assets/images/cubes/3d-cube-03.svg';

function ErrorPage() {
    const {t} = useI18next();
    
    return (
        <Layout>
            <div className="index">
                <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="1%" yOffset={250}/>
                <ParallaxBlock className="d-none d-md-block" image={cube01} size={60} xOffset="20%" yOffset={100}/>
                <ParallaxBlock className="d-none d-xl-block" image={cube01} size={40} xOffset="95%" yOffset={150}/>
                <ParallaxBlock className="d-none d-sm-block" image={cube01} size={100} xOffset="80%" yOffset={550}/>
                <ParallaxBlock image={cube02} size={50} xOffset="60%" yOffset={100}/>
                <ParallaxBlock className="d-none d-md-block" image={cube02} size={80} xOffset="55%" yOffset={500}/>
                <ParallaxBlock className="d-none d-sm-block" image={cube03} size={60} xOffset="8%" yOffset={550}/>
                
                <div className="banner">
                    <h1 className="col-lg-9 col-xl-8 px-5 mx-auto" dangerouslySetInnerHTML={{__html: t('404')}}/>
                </div>
                
                <Footer social/>
            </div>
        </Layout>
    );
}

export default ErrorPage;

export const query = graphql`
    query($language: String!) {
        locales: allLocale(filter: {language: {eq: $language}}) {
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
