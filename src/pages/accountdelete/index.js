import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { graphql } from "gatsby";
import { Footer, SEO } from "../../components";
import { Layout } from "../../layouts";
import { AccountDeleteForm } from "../../components/account-delete-form/account-delete-form";

function CustomersPage() {
    return (
        <Layout>
            <div className="customers">
                <SEO siteTitleId={["Account deletion request", "Sunesis"]}
                     translateSiteTitle={false} canonical="/accountdelete"/>
                <Container fluid={true} className="banner-dark pl-0 pr-0">
                    <Row className="justify-content-center m-0">
                        <Col xs="12" lg="8">
                            <h1>
                                Account deletion request
                            </h1>
                        </Col>
                    </Row>
                    <div className="arrow"/>
                </Container>
                
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={8}>
                            <h4 className="blue">
                                Request the deletion of your account
                            </h4>
                            <AccountDeleteForm/>
                        </Col>
                    </Row>
                </Container>
                
                <Footer contact/>
            </div>
        </Layout>
    );
}

export default CustomersPage;

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
