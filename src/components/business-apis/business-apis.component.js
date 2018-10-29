import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./business-apis.component.scss";
import {Needs} from "./needs.class";
import checkMarkImage from "../../assets/images/checkMark.svg";
import forWhoImage from "../../assets/images/forWho.svg";
import whatCostImage from "../../assets/images/whatCost.svg";
import whatIsImage from "../../assets/images/whatIs.svg";
import {KUMULUZ_URL} from "../../content/constants";

const applicationNeeds = (t) => {
    return {
        row1: [
            new Needs(t("what-are-apis.needs.item-1")),
            new Needs(t("what-are-apis.needs.item-2")),
            new Needs(t("what-are-apis.needs.item-3"))
        ],
        row2: [
            new Needs(t("what-are-apis.needs.item-4")),
            new Needs(t("what-are-apis.needs.item-5")),
            new Needs(t("what-are-apis.needs.item-6"))
        ],
        row3: [
            new Needs(t("what-are-apis.needs.item-7")),
            new Needs(t("what-are-apis.needs.item-8")),
            new Needs(t("what-are-apis.needs.item-9"))
        ],
        row4: [
            new Needs(t("what-are-apis.needs.item-10")),
            new Needs(t("what-are-apis.needs.item-11"), true),
        ]
    };
};
const whatAreApisList = t => [
    {
        image: whatIsImage,
        title: t("what-are-apis.items.item-1.title"),
        desc: t("what-are-apis.items.item-1.desc")
    },
    {
        image: forWhoImage,
        title: t("what-are-apis.items.item-2.title"),
        desc: t("what-are-apis.items.item-2.desc")
    },
    {
        image: whatCostImage,
        title: t("what-are-apis.items.item-3.title"),
        desc: t("what-are-apis.items.item-3.desc")
    }
];

@translate("products")
export class BusinessApisComponent extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    renderBox(item, index) {
        if (item.isButton) {
            return (
                // eslint-disable-next-line react/jsx-no-target-blank
                <a target="_blank" href={KUMULUZ_URL + "/business-apis"} key={index}>
                    <span className="btn btn-primary">
                        {item.title}
                    </span>
                </a>
            );
        } else {
            return (
                <span key={index}>
                    <img src={checkMarkImage}/>
                    {item.title}
                </span>
            );
        }
    }

    render() {
        const {t} = this.props;

        return (
            <div className="col-12 sun-business-apis-component">
                <div className="api-header">
                    <h1 className="text-center">{t("what-are-apis.title")}</h1>
                    <p className="text-center">{t("what-are-apis.subtitle")}</p>
                </div>

                <div className="what-is">
                    {whatAreApisList(t).map((item, index) => (
                        <div className="what-is-item" key={index}>
                            <div className="image">
                                <img src={item.image}/>
                            </div>
                            <p className="title">{item.title}</p>
                            <p className="desc" dangerouslySetInnerHTML={{__html: item.desc}} />
                        </div>
                    ))}

                </div>




                <div className="subtitle">
                    {t("what-are-apis.needs.title")}
                </div>
                <div>
                    <div className="needs-row">
                        {applicationNeeds(t).row1.map((item, index) => this.renderBox(item, index))}
                    </div>
                    <div className="needs-row">
                        {applicationNeeds(t).row2.map((item, index) => this.renderBox(item, index))}
                    </div>
                    <div className="needs-row">
                        {applicationNeeds(t).row3.map((item, index) => this.renderBox(item, index))}
                    </div>
                    <div className="needs-row">
                        {applicationNeeds(t).row4.map((item, index) => this.renderBox(item, index))}
                    </div>
                </div>
            </div>
        );
    }
}
