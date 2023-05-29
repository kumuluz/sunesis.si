import {Col, Container, Row} from "reactstrap";
import apiHeaderLogo from "../../assets/images/projects/api_header.png";
import React from "react";

export function ProjectKumuluzApi() {
    return (
        <Container fluid={true} className="project-header">
            <Row className="align-items-center flex-column">
                
                <Col xs={12} className="justify-content-center d-flex">
                    <img className="crowdsensing-logo api-logo" src={apiHeaderLogo} alt="Kumuluz API"/>
                </Col>
                <Col xs={12}>
                    <h2 className="text-center">
                        Platforma KumuluzAPI za upravljanje ekosistema APIjev v okoljih pametnih mest in
                        skupnosti
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={10} lg={8}>
                    <p>
                        Cilj projekta je razviti inovativno platformo za vzpostavitev ekosistema APIjev v okolju
                        pametnih mest in skupnosti – KumuluzAPI in jo lansirati na globalni trg. Platforma
                        KumuluzAPI pomembno poenostavlja vzpostavitev API ekonomije na nivoju pametnih mest.
                        Vpeljuje decentraliziran marketplace, ki omogoča hitro in učinkovito povezovanje
                        zainteresiranih deležnikov in napredne metode monetizacije APIjev na osnovi uporabe AI.
                        Iz vidika tehničnih inovacij KumuluzAPI vpeljuje city-native APIje, ki omogočajo
                        kontekstno odvisno obnašanje, prilagojen smart-city API prehod s podporo IoT in
                        analitična orodja za spremljanje uporabe APIje na osnovi strojnega učenja. K temu dodaja
                        industrijsko oblikovanje in ekodesign. Gradi na temeljih ekonomije APIjev in vpeljavi
                        novih vrednostnih verig ter omogoča razvoj novih inovativnih rešitev za pametna mesta in
                        skupnosti na različnih področjih, kot so promet, zdravstvo, javna uprava, logistika,
                        itd. Temelji na tehnologijah mikrostoritev, vsebnikov Docker, Kubernetes, edge in fog
                        computinga, decentraliziranih tehnologij, agilnega razvoj ain DevOps.
                    </p>
                    <p>
                        KumuluzAPI omogoča bolj enostavno povezovanje deležnikov, ki želijo ponuditi APIje,
                        zaradi decentraliziranega načina delovanja pa ne zahteva usklajevanja posameznih
                        deležnikov in omogoča lažje integracije. Prodajno bo umeščen kot eden od elementov
                        digitalne platforme Kumuluz (kumuluz.com), ki je že mednarodno priznana in je že prejela
                        več mednarodnih nagrad.
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
    );
}