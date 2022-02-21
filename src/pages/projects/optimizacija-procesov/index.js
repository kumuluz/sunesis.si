import React from "react";
import Helmet from "react-helmet";
import {Col, Container, Row} from "reactstrap";

import {Footer} from "../../../components";

import "./index.scss";
import euLogo from "../../../assets/images/projects/eu_logo_cut.jpg";
import ministryLogo from "../../../assets/images/projects/ministry_logo_cut.png";
import spiritSloveniaLogo from "../../../assets/images/projects/spirit_slo.jpg";
import {Layout} from "../../../layouts";
import {graphql} from "gatsby";

export default function OptimizacijaProcesovPage() {
    return (
        <Layout>
            <div className="projects-page">
                <Helmet title="Optimizacija procesov - Sunesis"/>
                
                <Container fluid={true} className="banner-dark pl-0 pr-0">
                    <Row className="justify-content-center m-0">
                        <Col xs="12">
                            <h1 className="text-center">Optimizacija procesov podjetja Sunesis (OP-S)</h1>
                        </Col>
                    </Row>
                    <div className="arrow"/>
                </Container>
                
                <Container fluid={true} className="process-opt-logos">
                    <Row className="justify-content-center">
                        <Col xs={10} sm={8} md={3} lg={3} xl={2} className="sponsor-logo">
                            <img src={euLogo} alt="EU"/>
                        </Col>
                        <Col xs={10} sm={8} md={3} lg={3} xl={2} className="sponsor-logo">
                            <img src={spiritSloveniaLogo} alt="Spirit Slovenia"/>
                        </Col>
                        <Col xs={10} sm={8} md={3} lg={3} xl={2} className="sponsor-logo">
                            <img src={ministryLogo} alt="RS - Ministry for economical development and technology"/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col sm={7}>
                            <ul className="process-opt-ul">
                                <li>Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada za
                                    regionalni razvoj.
                                </li>
                                <li>
                                    Spletna stran EKP v Sloveniji:
                                    &nbsp;
                                    <a className="skladi-url" href="http://www.eu-skladi.si" target="_blank"
                                        rel="noreferrer noopener">
                                        www.eu-skladi.si
                                    </a>
                                </li>
                                <li>Višina sofinanciranja: 20.000 EUR</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                
                <Container fluid={true} className="project-header">
                    <Row className="justify-content-center mt-5">
                        <Col xs={12} md={10} lg={8}>
                            <h2>Optimizacija procesov podjetja Sunesis (OP-S)</h2>
                            
                            <p>
                                Operacija OP-S zajema celostno prenovo poslovnih procesov in drugih organizacijskih
                                prvin (organizacijska shema ipd.), ki bodo prispevali k prihranku časa in
                                večji produktivnosti podjetja, standardizaciji poslovanja in doseganju kakovosti
                                ter doseganju večje dodane vrednosti. Celostna prenova bo prispevala k izboljšanju
                                ključnih indikatorjev poslovanja podjetja, doseženo pa bo tudi aktivnejše širjenje
                                na tuje trge. Celostna prenova poslovnih procesov bo pokrivala naslednje
                                ključne poslovne funkcije:
                            </p>
                            
                            <h3>Marketing</h3>
                            <p>
                                Prenova marketinški poslovnih procesov bo zajemala tako uvedbo povsem novih
                                procesov za profesionalno vzpostavitev marketinga kot poslovne funkcije,
                                s primarnim ciljem generiranja novih ”leadov”, obstoječi marketinški procesi
                                pa bodo ustrezno posodobljeni.
                            </p>
                            
                            <h3>Prodaja</h3>
                            <p>
                                Prenova prodajnih procesov bo zajemala celotno profesionalno vzpostavitev prodaje,
                                ki bo temeljila na prodajnem lijaku. Na podlagi prodajnega lijaka bo prenova
                                zajemala ustrezno identifikacijo potencialnih kupcev ter nato vodenje kupcev skozi
                                različne faze prodajnega procesa.
                            </p>
                            
                            <h3>Kadri</h3>
                            <p>
                                Kadrovski procesi so ključni v IT panogi, saj je povpraševanje po
                                tehničnih kadrih bistveno večje od ponudbe. Posodobitev kadrovskih procesov
                                se bo dotikalo tako vzpostavitve procesov za pridobivanje novega kadra, kot tudi
                                za ”on-boarding” proces ter razvoj in vodenja kadrov.
                            </p>
                            
                            <h3>Uvedba vitkega poslovanja</h3>
                            <p>
                                Vitko poslovanje je ključno pri tem, da se podjetje osredotoči na tiste aktivnosti,
                                ki prinašajo največjo dodano vrednost s čim manj ”odpada” in izpada produktivnosti.
                                To zajema predvsem iskanje ”produkt-trg” preseka, kjer je največja dodana vrednost
                                in možnost za rast, obenem pa uvedba procesov ter standardov, ki omogočajo produktivno
                                delo, torej doseči čim več s čim manjšo uporabo virov.
                            </p>
                            
                            <p className="process-opt-goals">
                                Cilj operacije OP-S je doseganje petih ključnih ciljev:
                                <ul className="process-opt-ul">
                                    <li>Povečanje prodaje</li>
                                    <li>Povečanje produktivnosti in dodane vrednosti</li>
                                    <li>Pridobivanje, uvedba in razvoj kadrov</li>
                                    <li>Razvoj novi proizvodov, trgov in projektov na podlagi vitke metodologije</li>
                                    <li>Uvedba Kaizen kulture podjetja</li>
                                </ul>
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
