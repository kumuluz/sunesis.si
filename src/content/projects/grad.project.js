import {Col, Container, Row} from "reactstrap";
import React from "react";
import nextGenEuLogo from "../../assets/images/projects/nextgen-eu.png";
import nooLogo from "../../assets/images/projects/noo.png";
import ministryGRITLogo from "../../assets/images/projects/ministry_grit_v2.png";

export function ProjectGrad() {
    return (
        <>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
                        <img src={nextGenEuLogo} alt="Next Gen EU"/>
                    </Col>
                    <Col sm={12} md={4} lg={2} className="noo-logo sponsor-logo sponsor-logo-2">
                        <img src={nooLogo} alt="NOO"/>
                    </Col>
                    <Col sm={12} md={4} lg={2} className="sponsor-logo sponsor-logo-2">
                        <img src={ministryGRITLogo} alt="Ministry GRIT"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="project-header small-header mb-5 mt-2">
                <Row className="align-items-center flex-column">
                    <Col xs={12}>
                        <h2 className="text-center">GRAD 4.0</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={10} lg={8}>
                        <p>
                            Konzorcij podjetij v sestavi <strong>GIC Gradnje d.o.o., SRC d.o.o., Robotina d.o.o. in
                            Sunesis
                            d.o.o.</strong> je pridobil sredstva EU v okviru razpisa Digitalna preobrazba
                            gospodarstva za
                            izvedbo projekta <strong>Gradbeništvo 4.0</strong>.
                        </p>
                        <p>
                            Namen projekta je izvedba celovite digitalne preobrazbe vodilnega partnerja konzorcija,
                            podjetja GIC Gradnje, in številnih poslovnih funkcij pri ostalih partnerjih. S tem
                            naslavljamo glavne izzive, ki jih globalno in posledično tudi v Sloveniji zaznava in
                            občuti <strong>gradbena panoga</strong>, na kar imajo pomemben vpliv tudi digitalne
                            tehnologije in
                            digitalizacija. O ambiciji in zahtevnosti projekta priča predvsem dejstvo, da je
                            gradbeništvo na samem repu panog po stopnji digitalizacije.
                        </p>
                        <p>
                            Pričakovan rezultat projekta bodo vpeljane <strong>nove metode, procesi in načini
                            dela</strong> kot
                            pozitiven učinek <strong>tehnološko napredne digitalne preobrazbe</strong>. Z
                            aktivnostmi v sklopu
                            podprojektov <em>Gradbišče 4.0</em> in <em>Betonarna 2.0</em>. bomo prenovili in
                            digitalizirali procese na
                            gradbiščih in v betonarnah, z vpeljavo <em>Gradbene platforme</em> posodobili upravljanje
                            postopkov in dokumentacije, z <em>Zgradbo kot platformo</em> pa spremenili način dojemanja
                            zgradb. Projekt vključuje tudi izdelavo celovite digitalne strategije in namenja velik
                            poudarek ne samo razvoju in uporabi naprednih digitalnih tehnologij, pač pa tudi dvigu
                            digitalnih kompetenc zaposlenih, spremembi (digitalne) kulture ter krepitvi zmogljivosti
                            partnerjev.
                        </p>
                        <p>
                            Projekt je del <a
                            target="_blank" rel="noreferrer noopener"
                            href="https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost"
                        >Načrta za okrevanje in odpornost</a>, ki ga financira Mehanizem za okrevanje in odpornost.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
