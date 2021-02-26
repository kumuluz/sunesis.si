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
import apiSponsorLogo from "../../assets/images/projects/sponsor_logo_1.png";
import apiHeaderLogo from "../../assets/images/projects/api_header.png";
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
                            <Col sm={12} md={4} lg={2} className="sponsor-logo">
                                <img src={euLogo} alt="EU"/>
                            </Col>
                            <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-1">
                                <img src={apiSponsorLogo} alt=""/>
                            </Col>
                            <Col sm={12} md={4} lg={2} className="sponsor-logo">
                                <img src={ministryLogo} alt="RS - Ministry for economical development and technology"/>
                            </Col>
                        </Row>
                    </Container>
    
                    <Container fluid={true} className="project-header">
                        <Row className="align-items-center flex-column">
    
                            <Col xs={12} className="justify-content-center d-flex">
                                <img className="crowdsensing-logo api-logo" src={apiHeaderLogo} alt="Kumuluz API"/>
                            </Col>
                            <Col xs={12}>
                                <h2 className="text-center">
                                    Platforma KumuluzAPI za upravljanje ekosistema APIjev v okoljih pametnih mest in skupnosti
                                </h2>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <Col xs={12} md={10} lg={8}>
                                <p>
                                    Cilj projekta je razviti inovativno platformo za vzpostavitev ekosistema APIjev v okolju pametnih mest in skupnosti – KumuluzAPI in jo lansirati na globalni trg. Platforma KumuluzAPI pomembno poenostavlja vzpostavitev API ekonomije na nivoju pametnih mest. Vpeljuje decentraliziran marketplace, ki omogoča hitro in učinkovito povezovanje zainteresiranih deležnikov in napredne metode monetizacije APIjev na osnovi uporabe AI. Iz vidika tehničnih inovacij KumuluzAPI vpeljuje city-native APIje, ki omogočajo kontekstno odvisno obnašanje, prilagojen smart-city API prehod s podporo IoT in analitična orodja za spremljanje uporabe APIje na osnovi strojnega učenja. K temu dodaja industrijsko oblikovanje in ekodesign. Gradi na temeljih ekonomije APIjev in vpeljavi novih vrednostnih verig ter omogoča razvoj novih inovativnih rešitev za pametna mesta in skupnosti na različnih področjih, kot so promet, zdravstvo, javna uprava, logistika, itd. Temelji na tehnologijah mikrostoritev, vsebnikov Docker, Kubernetes, edge in fog computinga, decentraliziranih tehnologij, agilnega razvoj ain DevOps.
                                </p>
                                <p>
                                    KumuluzAPI omogoča bolj enostavno povezovanje deležnikov, ki želijo ponuditi APIje, zaradi decentraliziranega načina delovanja pa ne zahteva usklajevanja posameznih deležnikov in omogoča lažje integracije. Prodajno bo umeščen kot eden od elementov digitalne platforme Kumuluz (kumuluz.com), ki je že mednarodno priznana in je že prejela več mednarodnih nagrad.
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
                    
                    
                    
                    

                    {/*<Container fluid={true}>*/}
                    {/*    <Row className="justify-content-center">*/}
                    {/*        <Col sm={12} md={6} lg={3} className="sponsor-logo">*/}
                    {/*            <img src={euLogo} alt="EU"/>*/}
                    {/*        </Col>*/}
                    {/*        <Col sm={12} md={6} lg={3} className="sponsor-logo">*/}
                    {/*            <img src={ministryLogo} alt="RS - Ministry for economical development and technology"/>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Container>*/}
                    
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
                                    Projekt EDISON WINCI (ang. Eco Driving Innovative SOlutions and Networking - Wireless Induction Charging Infrastructure) je bil uspešno izbran na Javnem razpisu za »<a target="_blank" rel="noreferrer noopener" href="https://www.gov.si/zbirke/javne-objave/javni-razpis-demo-piloti-ii-2018/">Demo piloti II 2018</a>«, ki ga je razpisalo <a target="_blank" rel="noreferrer noopener" href="https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/">Ministrstvo za gospodarski razvoj in tehnologijo - MGRT</a>.
                                </p>
                                
                                <p>NAZIV PROJEKTA:
                                    EDISON WINCI - Razvoj infrastrukture, kompetenc in gradnikov poslovnih modelov logističnih sistemov električnih vozil z brezkontaktnim polnjenjem
                                </p>
                                
                                <p>
                                    Na doseganje okoljskih ciljev ima pomemben vpliv razvoj novih, zelenih tehnologij v mobilnosti, saj ta prispeva k okvirno 30 % celotnih emisij CO2, poleg tega pa je predvsem v večjih urbanih mestih, skoraj v celoti vir škodljivih emisij prašnih delcev in NOx. Razvoj novih rešitev, kot je razvoj čistejših vozil, poleg spremembe obnašanja uporabnikov zahteva tudi spremembo obnašanja ponudnikov novih čistejših rešitev oz. poslovnih modelov, ki spremembo v prvi vrsti sploh omogočajo. Če želimo doseči tako celovite preboje, pa so potrebni tudi celoviti pristopi in razvoj rešitev, ki bodo uporabnikom omogočali enostaven prehod k novim tehnologijam ob večjem udobju in boljši uporabniški izkušnji ter jih spodbujali k širjenju in vnovični uporabi zelene mobilnosti.
                                </p>
                                
                                <p>
                                    Hitrejši preboj električnih vozil (EV) na trg je mogoče pospešiti z več ukrepi. Eden od teh je razvoj brezstičnega polnjenja EV, ki temelji na ustvarjanju magnetnega polja in posledično električnega toka med oddajnimi tuljavami v vozišču oz. vozni podlagi ter sprejemnimi tuljavami v vozilu. Naša rešitev bo s pomočjo brezkontaktnega polnjenja omogočala:
    
                                    <ul>
                                        <li>zmanjšanje količine potrebnih baterij in s tem zmanjšanje teže in cene vozila,</li>
                                        <li>bistveno daljše dosege električnih vozil (z več polnjenji na vmesnih postankih),</li>
                                        <li>enostavno polnjenje (v dinamični izvedbi brez nepotrebnih in neželenih postankov),</li>
                                        <li>zmanjšanje negativnega okoljskega vpliva proizvodnje in razgradnje baterij in</li>
                                        <li>enostavno zaračunavanje stroškov porabljene električne energije,</li>
                                    </ul>
    
                                    s čimer bodo električna vozila postala privlačnejša, njihova uporaba pa bo omogočala več udobja v primerjavi s klasičnimi vozili.
                                </p>
                                
                                <p>
                                    V projektu obravnavamo tehnologijo brezžičnega polnjenja, kot enega od ključnih tehnoloških omogočiteljev (KET), ki v kombinaciji z drugimi hitro razvijajočimi tehnologijami (veriženje blokov, internet storitev/stvari, družbena omrežja, računalniški oblak in pametni telefoni ...) omogoča razvoj novih inovativnih poslovnih modelov multimodalne mobilnosti, ki podpirajo tudi razvoj delitvene ekonomije.
                                </p>
                                <p>
                                    Zato želimo partnerji konzorcija v Sloveniji kot prvi razviti in v realnem okolju validirati manjkajoče ključne gradnike celovitega podpornega okolja, ki bodo omogočali enostavno brezkontaktno polnjenje električnih vozil in s tem podpirali razvoj inovativnih poslovnih modelov delitvene ekonomije med uporabniki in ponudniki (energije, infrastrukture, komponent, storitev, vozil idr.).
                                </p>
                                <p>
                                    Glavni cilji in kazalniki projekta:<br/>
                                    <strong>Cilj 1: Razvoj digitalnih rešitev</strong><br/>
                                    Kazalnik: Aplikacija, s katero uporabnik (na mobilni napravi) enostavno in varno poišče, rezervira, uporabi, vrne in plača storitev električne mobilnosti, ki temelji na sistemu brezkontaktnega polnjenja EV (in povezuje storitve več kot enega ponudnika).
                                    <br/><strong>Cilj 2: Razvoj gradnikov multimodalne mobilnosti</strong><br/>
                                    Kazalnik: Razvit poslovni model za multimodalnost, ki vključuje EV z brezkontaktnim polnjenjem (kot modul integriran v mobilno/spletno aplikacijo tretjih ponudnikov in pospešuje uporabo EV z brezkontaktnim polnjenjem).
                                    <br/><strong>Cilj 3: Prenos energije in povezava z energetskim sistemom</strong><br/>
                                    Kazalnik: Razviti prototipi sestavnih elementov, s katerimi je omogočeno delovanje statičnega indukcijskega polnjenja, z dokumentirani APIji. Vsaj 5 prototipov komponent za opremljanje polnilnih postaj, z dokumentiranimi APIji.
                                    <br/><strong>Cilj 4: Identifikacija in razvoj rešitev, primernih za integracijo v vozila</strong><br/>
                                    Kazalnik: Razvite komponente za povečanje učinkovitosti in varnosti električnih vozil. Vsaj 5 prototipov komponent za povečanje učinkovitosti in varnosti električnih vozil.
                                    <br/><strong>Cilj 5: Demonstracija delovanja sistema</strong><br/>
                                    Kazalnik: Izvedena demonstracija delovanja celovite IT rešitve brezstičnega polnjenja električnega vozila in demonstracije delovanja razvitih komponent sistema ter novo razvitih tehnologij. 5 demonstracij novih rešitev.
                                </p>
                                
                                <p>
                                    <strong>Vodilni partner:</strong>
                                    <ul>
                                        <li>HIDRIA, razvoj in proizvodnja avtomobilskih in industrijskih sistemov, d.o.o.</li>
                                    </ul>
    
                                    <strong>Partnerji:</strong>
                                    <ul>
                                        <li>Abelium d.o.o., raziskave in razvoj</li>
                                        <li>GoOpti Inteligentne Transportne Rešitve d.o.o.</li>
                                        <li>ISKRA d.d.</li>
                                        <li>NELA, razvojni center za elektroindustrijo in elektroniko, d.o.o.</li>
                                        <li>Pošta Slovenije d.o.o.</li>
                                        <li>Sunesis, inovativne tehnologije in storitve, d.o.o.</li>
                                    </ul>
                                </p>
                                <p>OBDOBJE: 1. 10. 2019 - 31. 5. 2022</p>
                                <p>VODJE / KOORDINATORJI:
                                
                                    <ul>
                                        <li>dr. Vitoslav Bratuš - HIDRIA d.o.o.</li>
                                        <li>dr. Alen Orbanić - Abelium d.o.o.</li>
                                        <li>Marko Guček - GoOpti d.o.o.</li>
                                        <li>mag. Simon Štrancar - ISKRA d.d.</li>
                                        <li>dr. Špela Bolka - NELA d.o.o.</li>
                                        <li>Branka Leskovšek - Pošta Slovenije d.o.o.</li>
                                        <li>dr. Eva Zupančič - Sunesis d.o.o.</li>
                                    </ul>
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
