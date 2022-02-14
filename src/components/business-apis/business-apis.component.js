import React from "react";
import {useI18next} from "gatsby-plugin-react-i18next";

import "./business-apis.component.scss";
import {Needs} from "./needs.class";
import checkMarkImage from "../../assets/images/checkMark.svg";
import forWhoImage from "../../assets/images/forWho.svg";
import whatCostImage from "../../assets/images/whatCost.svg";
import whatIsImage from "../../assets/images/whatIs.svg";
import {KUMULUZ_URL} from "../../content/constants";


const applicationNeeds = {
    row1: [
        new Needs('what-are-apis.needs.item-1'),
        new Needs('what-are-apis.needs.item-2'),
        new Needs('what-are-apis.needs.item-3')
    ],
    row2: [
        new Needs('what-are-apis.needs.item-4'),
        new Needs('what-are-apis.needs.item-5'),
        new Needs('what-are-apis.needs.item-6')
    ],
    row3: [
        new Needs('what-are-apis.needs.item-7'),
        new Needs('what-are-apis.needs.item-8'),
        new Needs('what-are-apis.needs.item-9')
    ],
    row4: [
        new Needs('what-are-apis.needs.item-10'),
        new Needs('what-are-apis.needs.item-11', true),
    ]
};
const whatAreApisList = [
    {
        image: whatIsImage,
        title: 'what-are-apis.items.item-1.title',
        desc: 'what-are-apis.items.item-1.desc'
    },
    {
        image: forWhoImage,
        title: 'what-are-apis.items.item-2.title',
        desc: 'what-are-apis.items.item-2.desc'
    },
    {
        image: whatCostImage,
        title: 'what-are-apis.items.item-3.title',
        desc: 'what-are-apis.items.item-3.desc'
    }
];

export function BusinessApisComponent() {
    const {t} = useI18next("products");
    
    function renderBox(item, index) {
        if (item.isButton) {
            return (
                <a target="_blank" href={KUMULUZ_URL + "/business-apis"} key={index}>
                    <span className="btn btn-primary">
                        {t(item.title)}
                    </span>
                </a>
            );
        } else {
            return (
                <span key={index}>
                    <img src={checkMarkImage} alt="checkmark"/>
                    {t(item.title)}
                </span>
            );
        }
    }
    
    return (
        <div className="col-12 sun-business-apis-component">
            <div className="api-header">
                <h1 className="text-center">
                    {t("what-are-apis.title")}
                </h1>
                <p className="text-center">
                    {t("what-are-apis.subtitle")}
                </p>
            </div>
            
            <div className="what-is">
                {whatAreApisList.map((item, index) => (
                    <div className="what-is-item" key={index}>
                        <div className="image">
                            <img src={item.image} alt="api-image"/>
                        </div>
                        <p className="title">
                            {t(item.title)}
                        </p>
                        <p className="desc"
                            dangerouslySetInnerHTML={{__html: t(item.desc)}}/>
                    </div>
                ))}
            </div>
            
            <div className="subtitle">
                {t("what-are-apis.needs.title")}
            </div>
            
            <div>
                <div className="needs-row">
                    {applicationNeeds.row1.map((item, index) => renderBox(item, index))}
                </div>
                <div className="needs-row">
                    {applicationNeeds.row2.map((item, index) => renderBox(item, index))}
                </div>
                <div className="needs-row">
                    {applicationNeeds.row3.map((item, index) => renderBox(item, index))}
                </div>
                <div className="needs-row">
                    {applicationNeeds.row4.map((item, index) => renderBox(item, index))}
                </div>
            </div>
        </div>
    );
}
