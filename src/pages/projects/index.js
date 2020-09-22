import React, {Component} from "react";
import * as PropTypes from 'prop-types';
import Helmet from "react-helmet";
import {Col, Container, Row} from "reactstrap";

import {GoogleAnalyticsService} from "../../components/google-analytics/google-analytics.service";
import {Footer} from "../../components";

import "./index.scss";
import euLogo from "../../assets/images/projects/eu_logo.jpg";
import ministryLogo from "../../assets/images/projects/ministry_logo.png";
import crowdsensingLogo from "../../assets/images/projects/crowdsensing_logo.png";
import uhubLogo from "../../assets/images/projects/uhub_logo.png";
import {Layout} from "../../layouts";

export default class ProjectsPage extends Component {

    static propTypes = {
        pageContext: PropTypes.string
    };

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {pageContext} = this.props;
        const locale = pageContext.locale;
        return (
            <Layout locale={"en"}>
                <div className="projects-page">
                    <Helmet title="Projekti"/>

                    <Container fluid={true} className="banner-dark pl-0 pr-0">
                        <Row className="justify-content-center m-0">
                            <Col xs="12">
                                <h1 className="text-center">Projekti</h1>
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
                        <Row className="align-items-center flex-column">
                            <Col xs={12} className="justify-content-center d-flex">
                                <h2 className="text-center">
                                    Projekt EDISON WINCI <br/>(ang. Eco Driving Innovative SOlutions and Networking - Wireless Induction Charging Infrastructure)
                                </h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={10} lg={8}>
                                <p>
                                    EDISON WINCI - Razvoj infrastrukture, kompetenc in gradnikov poslovnih modelov logističnih sistemov električnih vozil z brezkontaktnim polnjenjem
                                </p>
                                <p>
                                    V projektu obravnavamo tehnologijo brezžičnega polnjenja, kot enega od ključnih tehnoloških omogočiteljev (KET), ki v kombinaciji z drugimi hitro razvijajočimi tehnologijami (veriženje blokov, internet storitev/stvari, družbena omrežja, računalniški oblak in pametni telefoni ...) omogoča razvoj novih inovativnih poslovnih modelov multimodalne mobilnosti, ki podpirajo tudi razvoj delitvene ekonomije.
                                </p>
                                <p>
                                    Zato želimo partnerji konzorcija v Sloveniji kot prvi razviti in v realnem okolju validirati manjkajoče ključne gradnike celovitega podpornega okolja, ki bodo omogočali enostavno brezkontaktno polnjenje električnih vozil in s tem podpirali razvoj inovativnih poslovnih modelov delitvene ekonomije med uporabniki in ponudniki (energije, infrastrukture, komponent, storitev, vozil idr.).
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

                    <Container fluid={true} className="project-header">
                        <Row className="align-items-center flex-column">
                            <Col xs={12} className="justify-content-center d-flex">
                                <img className="crowdsensing-logo" src={crowdsensingLogo} alt="Kumuluz Crowdsensing"/>
                            </Col>
                            <Col xs={12}>
                                <h2 className="text-center">Platforma za zbiranje podatkov in zaznavanje potreb množic v
                                    okoljih pametnih mest in skupnosti</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={10} lg={8}>
                                <p>Cilj projekta je razviti inovativno platformo za zbiranje podatkov in zaznavanje
                                    potreb množic v okoljih pametnih mest in skupnosti – KumuluzCrowdsensing in jo
                                    lansirati na globalni trg. Platforma KumuluzCrowdsensing omogoča zbiranje podatkov
                                    in zaznavanje potreb množic v okoljih pametnih mest in skupnosti skozi enostavno in
                                    učinkovito zbiranje podatkov iz mobilnih naprav, senzorjev, naprav IoT, pametne
                                    prometne infrastrukture, pametnih stavb in ostalih virov. Omogoča aktivno in pasivno
                                    vključevanje uporabnikov (prosumerjev). Zbrane podatke anonimizirano izpostavlja
                                    skozi APIje, kar bo omogočilo razvoj novih inovativnih rešitev za pametna mesta in
                                    skupnosti na različnih področjih, kot so promet, zdravstvo, javna uprava, logistika,
                                    itd. Take rešitve bodo izkoriščale podatke množic, enostavno dostopne na
                                    KumuluzCrowdsensing. To bo dalo priložnost drugim (slovenskim in tujim) podjetjem,
                                    da se z inovativnimi rešitvami prebijejo na globalni trg, s čemer bo projekt dosegel
                                    multiplikativne učinke. Ker je pri zbiranju podatkov uporabnikov (prosumerjev) vedno
                                    prisotna bojazen slednjih v smislu, kje se ti podatki shranjujejo in za kaj se
                                    uporabljajo, bo platforma KumuluzCrowdsensing temeljila na distribuirani in
                                    šifrirani hrambi podatkov z uporabo tehnologije blockchain za shranjevanje
                                    občutljivih podatkov ter uporabi pametnih pogodb za urejanje dostopa do podatkov ter
                                    njihovo kasnejšo monetizacijo. S to tehnologijo bomo kljub enostavnemu vmesniku za
                                    uporabnike zagotovili transparentnost v smislu zbiranja, obdelave in dostopa do
                                    podatkov.</p>
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

                    <Container fluid={true} className="project-header">
                        <Row className="align-items-center flex-column">
                            <Col xs={12} className="justify-content-center d-flex">
                                <img src={uhubLogo} alt="Kumuluz Crowdsensing"/>
                            </Col>
                            <Col xs={12}>
                                <h2 className="text-center">UHUB – storitvena informacijska platforma za digitalno
                                    transformacijo pošte in lokalizacijo gospodarstva</h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={10} lg={8}>
                                <p>UHUB je inovativen RR projekt, katerega končni cilj je povsem nov izdelek podjetja,
                                    ki v bistveni meri spreminja poslovno dejavnost gospodarske skupine. UHUB je
                                    storitvena informacijska platforma za digitalno transformacijo Pošte in lokalizacijo
                                    gospodarstva – pošte ključno razširijo svojo storitveno kapaciteto in portfelj
                                    funkcionalnosti, lokalne skupnosti pa pridobijo konkretno infrastrukturno podporo za
                                    spodbudo ekonomske aktivnosti za samooskrbo ter lokalno kroženje dobrin. UHUB je
                                    trajnostna storitvena platforma za digitalno transformacijo pošte in lokalizacijo
                                    gospdarstva, ki bo temeljila na samooskrbi in skrajševanju logističnih verig. Je
                                    razvojni odgovor na izziv upadanja pisemskega prometa in s tem zmanjševanja pomena
                                    in relevantnosti pošt, kot na izziv vse večje izključenosti lokalnih skupnosti iz
                                    ekonomskih odnosov. UHUB skozi transformacijo Pošte inovativno naslovi in rešuje oba
                                    problema. Osredotočen je na lokalne skupnosti, omogoča lokalno kroženje dobrin ter s
                                    tem samouravnalni mehanizem ponudbe in povpraševanja.</p>
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

                    <Footer social locale={locale}/>
                </div>
            </Layout>
        );
    }
}
