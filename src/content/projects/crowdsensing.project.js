import {Col, Container, Row} from "reactstrap";
import crowdsensingLogo from "../../assets/images/projects/crowdsensing_logo.png";
import React from "react";

export function ProjectCrowdsensing() {
    return (
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
    );
}