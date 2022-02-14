import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'reactstrap';

import './customers-section.scss';

import {quotes} from '../../../content';
import {useI18next} from "gatsby-plugin-react-i18next";

export function CustomersSection() {
    const {t} = useI18next();
    
    const [state, setState] = useState({
        quotesPage: 0,
        width: '0',
        height: '0'
    });
    
    function updateWindowDimensions() {
        setState(prevState => {
            return {
                ...prevState,
                width: window.innerWidth,
                height: window.innerHeight,
            }
        });
    }
    
    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener('resize', updateWindowDimensions);
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, []);
    
    function toQuotesPage(page) {
        setState(prevState => {
            return {
                ...prevState,
                quotesPage: page,
            };
        });
    }
    
    const quotePagesArray = [];
    const quotePages = state.width > 992 ? Math.ceil(quotes.length / 3) : quotes.length;
    const quotesPerPage = state.width > 992 ? 3 : 1;
    for (let i = 0; i < quotePages; i++) {
        quotePagesArray.push(i);
    }
    
    return (
        <div className="customers-section">
            <div className="customers text-center">
                <Container>
                    <h2>
                        {t("customers.title")}
                    </h2>
                    <h2 className="h2-subtitle"
                        dangerouslySetInnerHTML={{__html: t("customers.subtitle")}}/>
                    
                    <Row className="customers justify-content-center">
                        {quotes
                            .slice(state.quotesPage * quotesPerPage, state.quotesPage * quotesPerPage + quotesPerPage)
                            .map((customer, i) => (
                                <Col className="customer" key={i} xs="12" lg="4">
                                    <p className="quote">
                                            <span
                                                dangerouslySetInnerHTML={{__html: `&quot;${t(customer.quote)}&quot;`}}/>
                                    </p>
                                    <img className="rounded-circle my-3" src={customer.photo}/>
                                    <p className="font-weight-bold mb-0">{customer.name}</p>
                                    <p className="font-italic">{t(customer.company)}</p>
                                </Col>
                            ))}
                        
                        <Col md="12" className="mt-3 mb-5 quotesPagination">
                            {quotePagesArray.map((p, i) => (
                                <button key={i} onClick={() => toQuotesPage(p)}
                                    className={p === state.quotesPage ? 'active' : ''}/>
                            ))}
                            <br/>
                            <br/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
