import React from 'react';

import './service-full-list.scss';
import {getListOfServices} from '../../../content/services/services-full-list';
import {useI18next} from "gatsby-plugin-react-i18next";
import {ServiceFullListItem} from "./list-item";
import {ServiceFullListMultilevelItem} from "./multi-level-item";

export function ServiceFullList() {
    const {t} = useI18next("services");
    
    function renderItem(item, i) {
        if (!item.multilevel) {
            return (
                <ServiceFullListItem key={i} title={t(item.title)} desc={t(item.description)}
                    services={item.services}/>
            );
        } else {
            return (
                <ServiceFullListMultilevelItem key={i} item={item}/>
            );
        }
    }
    
    return (
        <div className="full-list-component">
            <ul>
                {getListOfServices.map((item, i) => (
                    renderItem(item, i)
                ))}
            </ul>
        </div>
    );
}
