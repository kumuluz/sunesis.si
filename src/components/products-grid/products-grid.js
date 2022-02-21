import React from 'react';
import * as PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';

import {products as kumuluzDigitalProducts} from '../../content/products';

import './products-grid.scss';
import {useI18next} from "gatsby-plugin-react-i18next";

export function ProductsGrid({transformation, dark}) {
    const {t} = useI18next();
    
    const kumuluzDigitalProductsLastRows = Math.ceil(kumuluzDigitalProducts(t).length / 3);
    const kumuluzDigitalProductsLastRowIndex = (kumuluzDigitalProductsLastRows - 1) * 3 - 1;
    
    return (
        <Row>
            {kumuluzDigitalProducts(t).map((service, i) => (
                <Col
                    key={i}
                    xs="12"
                    md="4"
                    className={'product ' + (i > kumuluzDigitalProductsLastRowIndex ? 'lastRow ' : '') + (dark ? 'dark' : 'light')}
                >
                    <a href={service.href} target="_blank">
                        <div className="name">{service.name}</div>
                    </a>
                    {(!transformation && <div className="description">{service.description}</div>) || (
                        <div className="description">{service.transformation}</div>
                    )}
                </Col>
            ))}
        </Row>
    );
}

ProductsGrid.propTypes = {
    transformation: PropTypes.any,
    dark: PropTypes.any,
};
