import {Col, Container, Row} from "reactstrap";
import React from "react";
import nextGenEuLogo from "../../assets/images/projects/nextgen-eu.png";
import nooLogo from "../../assets/images/projects/noo.png";
import ministryGRITLogo from "../../assets/images/projects/ministry_grit.png";

export function ProjectAgriTrace() {
    return (
        <>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
                        <img src={nextGenEuLogo} alt="Next Gen EU"/>
                    </Col>
                    <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
                        <img src={nooLogo} alt="NOO"/>
                    </Col>
                    <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
                        <img src={ministryGRITLogo} alt="Ministry GRIT"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="project-header small-header mb-5">
                <Row className="align-items-center flex-column">
                    <Col xs={12}>
                        <h2 className="text-center">Platforma AgriTrace za generiranje in upravljanje zelenih
                            vrednostnih verig</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={10} lg={8}>
                        <p>
                            Platforma AgriTrace za generiranje in upravljanje zelenih vrednostnih verig je prva rešitev
                            na trgu, ki bo naslovila nadzor in upravljanje celotnega življenjskega cikla produktov, in
                            ne zgolj dobavne verige. Omogočala bo transparenten zajem, spremljanje ter poročanje
                            okoljskih
                            (in socialnih) vplivov v vseh procesih vzdolž verige vrednosti. Platforma AgriTrace bo
                            temeljila na najnovejši tehnologiji – procesiranje na robu, v megli in v oblaku, blockchain
                            in pametne pogodbe, Internet stvari – in tehnikah za prilagajanje številu procesov in
                            deležnikov
                            v verigi, kar bo omogočalo njeno uporabo za širok spekter uporabniških primerov v različnih
                            industrijah.
                        </p>
                        <p>
                            Projekt financira Evropska unija - NextGenerationEU in je del Načrta za okrevanje in
                            odpornosti, ki ga financira{" "}
                            <a href="http://www.noo.gov.si" target="_blank" rel="noreferrer noopener">Mehanizem za okrevanje in odpornost</a>
                            {" "}v okviru{" "}
                            <a href="http://www.evropskasredstva.si" target="_blank" rel="noreferrer noopener">evropskih sredstev</a>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}