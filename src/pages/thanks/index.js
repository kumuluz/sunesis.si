import React, {useEffect} from "react";
import {graphql, navigate} from "gatsby";
import {Container, Row, Col} from "reactstrap";
import {useI18next} from "gatsby-plugin-react-i18next";

import {Layout} from "../../layouts";
import {Footer, Link, SEO} from "../../components";

import "./index.scss";

export default function ThanksPage() {
    const {t} = useI18next();
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, []);
    
    return (
        <Layout>
            <div className="sun-thanks-page">
                <SEO siteTitleId={"site.title"} canonical="/thanks"/>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <h1 className="text-center">
                                {t("thanks.title")}
                            </h1>
                            <p className="text-center">
                                {t("thanks.text")}&#160;
                                <Link to="/" external={false}>
                                    {t("thanks.link")}
                                </Link>.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer social/>
            </div>
        </Layout>
    );
    
}

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
