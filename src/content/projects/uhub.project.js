import {Col, Container, Row} from "reactstrap";
import uhubLogo from "../../assets/images/projects/uhub_logo.png";
import React from "react";

export function ProjectUhub() {
    return (
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
                        tem samouravnalni mehanizem ponudbe in povpraševanja.<br/>
                        Po sklepu Ministrstva za gospodarski razvoj in tehnologijo je projekt UHUB, ki ga je
                        prijavil konzorcij partnerjev APS PLUS, Result in Sunesis, prejel sofinanciranje
                        prijavljenega projekta v skladu z oddano vlogo v višini največ do 499.561,99 EUR
                        nepovratnih sredstev.</p>
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