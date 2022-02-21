import React from "react";
import Helmet from "react-helmet";
import {Col, Container, Row} from "reactstrap";
import euLogo from "../../assets/images/projects/eu_logo.jpg";
import ministryLogo from "../../assets/images/projects/ministry_logo.png";
import {Footer} from "../../components";
import {Layout} from "../../layouts";

import "./index.scss";
import {graphql} from "gatsby";

export default function EdisonProjectPage() {
    return (
        <Layout>
            <div className="edison-page">
                <Helmet title="Edison"/>
                
                <Container fluid={true} className="banner-dark pl-0 pr-0">
                    <Row className="justify-content-center m-0">
                        <Col xs="12">
                            <h1 className="text-center">
                                Projekt EDISON WINCI za celovit pristop in razvoj rešitev, ki<br/>
                                bodo uporabnikom omogočale enostaven prehod k novim tehnologijam<br/>
                                iz področja elektromobilnosti
                            </h1>
                        </Col>
                    </Row>
                    <div className="arrow"/>
                </Container>
                
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col sm={12} md={6} lg={3} className="sponsor-logo">
                            <img src={euLogo} alt="EU"/>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="sponsor-logo">
                            <img src={ministryLogo} alt="RS - Ministry for economical development and technology"/>
                        </Col>
                    </Row>
                </Container>
                
                <Container fluid={true} className="project-header">
                    <Row className="justify-content-center mt-5">
                        <Col xs={12} md={10} lg={8}>
                            <p>
                                Partnerji projekta EDISON WINCI smo uspešno kandidirali na javnem razpisu Demo
                                Piloti II 2018 za pridobitev dodelitev spodbud razvojnim in inovacijskim
                                dejavnostim za izvedbo pilotnih/demonstracijskih projektov iz strateških področij
                                Slovenske Strategije Pametne Specializacije (S4). Sredstva smo pridobili z prijavo
                                projekta Razvoj infrastrukture, kompetenc in gradnikov poslovnih modelov logističnih
                                sistemov električnih vozil z brezkontaktnim polnjenjem - EDISON WINCI.
                            </p>
                            <p>
                                Konzorcij projekta EDISON WINCI sestavljajo: Hidria d.o.o., razvoj in proizvodnja
                                avtomobilskih in industrijskih sistemov (koordinator), Abelium d.o.o, raziskave in
                                razvoj, GoOpti Inteligentne Transportne Rešitve d.o.o., Iskra d.d., elektro in
                                elektronska industrija, NELA d.o.o., razvojni center za elektroindustrijo in
                                elektroniko, Pošta Slovenije d.o.o., Sunesis d.o.o., inovativne tehnologije in storitve.
                            </p>
                            <p>
                                Projekt poteka od oktobra letos in traja do maja 2022. Njegova skupna vrednost pa
                                znaša 8.114.325,80 EUR in je sofinancirana v višini 3.131.129,07 EUR.
                            </p>
                            <p>
                                Projekt EDISON WINCI naslavlja celovit pristop k doseganju okolijskih ciljev preko
                                razvoja novih, zelenih tehnologij v mobilnosti, saj le-ta prispeva k okvirno 30 %
                                celotnih emisij CO2, poleg tega pa je predvsem v večjih urbanih mestih, skoraj v
                                celoti vir škodljivih emisij prašnih delcev in NOx. Razvoj novih rešitev, kot je
                                razvoj čistejših vozil, poleg spremembe obnašanja uporabnikov zahteva tudi spremembo
                                obnašanja ponudnikov novih čistejših rešitev oz. poslovnih modelov, ki spremembo v
                                prvi vrsti sploh omogočajo. Če želimo doseči tako celovite preboje, pa so potrebni
                                tudi celoviti pristopi in razvoj rešitev, ki bodo uporabnikom omogočali enostaven
                                prehod k novim tehnologijam ob večjem udobju in boljši uporabniški izkušnji ter jih
                                spodbujali k širjenju in vnovični uporabi zelene mobilnosti.
                            </p>
                            <p>
                                Projekt EDISON WINCI kot enega od ključnih tehnoloških omogočiteljev (KET) preboja
                                pri razvoju in implementaciji tehnologij za zeleno mobilnost naslavlja
                                tehnologijo brezžičnega polnjenja. Le-ta v kombinaciji z drugimi hitro
                                razvijajočimi tehnologijami (veriženje blokov, internet storitev/stvari,
                                družbena omrežja, računalniški oblak in pametni telefoni ...) omogoča razvoj
                                novih inovativnih poslovnih modelov multimodalne mobilnosti, ki podpirajo tudi
                                razvoj delitvene ekonomije.
                            </p>
                            <p>
                                Razvoj brezstičnega polnjenja EV, ki temelji na ustvarjanju magnetnega polja in
                                posledično električnega toka med oddajnimi tuljavami v vozišču oz. vozni podlagi
                                ter sprejemnimi  tuljavami v vozilu. Projekt EDISON WINCI razvija rešitev, ki bo
                                s pomočjo brezkontaktnega polnjenja omogočala:
                            </p>
                            <ul className="edison-benefit-list">
                                <li>zmanjšanje količine potrebnih baterij in s tem zmanjšanje teže in cene vozila,</li>
                                <li>bistveno daljše dosege električnih vozil (z več polnjenji na vmesnih postankih),</li>
                                <li>enostavno polnjenje (v dinamični izvedbi brez nepotrebnih in neželenih postankov),</li>
                                <li>zmanjšanje negativnega okoljskega vpliva proizvodnje in razgradnje baterij in</li>
                                <li>enostavno zaračunavanje stroškov porabljene električne energije</li>
                            </ul>
                            <p>
                                s čimer bodo električna vozila postala privlačnejša, njihova uporaba pa bo
                                omogočala več udobja v primerjavi s klasičnimi vozili.
                            </p>
                            <p>
                                Zato želimo partnerji konzorcija v Sloveniji kot prvi razviti in v realnem okolju
                                validirati manjkajoče ključne gradnike celovitega podpornega okolja, ki bodo
                                omogočali enostavno brezkontaktno polnjenje električnih vozil in s tem podpirali
                                razvoj inovativnih poslovnih modelov delitvene ekonomije med uporabniki in
                                ponudniki (energije, infrastrukture, komponent, storitev, vozil idr.).
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-4">
                        <Col xs={12} md={10} lg={8}>
                            <p className="text-center">NALOŽBO SOFINANCIRATA REPUBLIKA SLOVENIJA IN EVROPSKA UNIJA
                                IZ EVROPSKEGA SKLADA ZA REGIONALNI RAZVOJ</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-1">
                        <Col xs={8} className="d-flex justify-content-center">
                            <a className="skladi-url" href="http://www.eu-skladi.si" target="_blank"
                                rel="noreferrer noopener">
                                www.eu-skladi.si
                            </a>
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
