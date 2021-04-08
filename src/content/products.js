import React from 'react';
import {KUMULUZ_URL} from "./constants";
import {TranslationUtil} from "../utils/translation.util";

export const products = (locale) => [
    {
        id: 'kumuluzEE',
        name: <div dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale, 'products.kumuluzEE.title')}}/>,
        description: TranslationUtil.translate(locale,'products.kumuluzEE.description'),
        transformation: TranslationUtil.translate(locale,'products.kumuluzEE.transformation'),
        href: KUMULUZ_URL + '/digital-components/ee',
        external: true
    },
    {
        id: 'kumuluzAPI',
        name: <div dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale,'products.kumuluzAPI.title')}}/>,
        description: TranslationUtil.translate(locale,'products.kumuluzAPI.description'),
        transformation: TranslationUtil.translate(locale,'products.kumuluzAPI.transformation'),
        href: KUMULUZAPI_URL,
        external: true
    },
    {
        id: 'kumuluzIntegration',
        name: (
            <div
                dangerouslySetInnerHTML={{
                    __html: TranslationUtil.translate(locale,'products.kumuluzIntegration.title')
                }}
            />
        ),
        description: TranslationUtil.translate(locale,'products.kumuluzIntegration.description'),
        transformation: TranslationUtil.translate(locale,'products.kumuluzIntegration.transformation'),
        href: KUMULUZ_URL + '/digital-components/integration',
        external: true
    },
    {
        id: 'kumuluzUX',
        name: <div dangerouslySetInnerHTML={{__html: TranslationUtil.translate(locale,'products.kumuluzUX.title')}}/>,
        description: TranslationUtil.translate(locale,'products.kumuluzUX.description'),
        transformation: TranslationUtil.translate(locale,'products.kumuluzUX.transformation'),
        href: KUMULUZ_URL + '/digital-components/ux',
        external: true
    },
    {
        id: 'kumuluzMarketplace',
        name: (
            <div
                dangerouslySetInnerHTML={{
                    __html: TranslationUtil.translate(locale,'products.kumuluzMarketplace.title')
                }}
            />
        ),
        description: TranslationUtil.translate(locale,'products.kumuluzMarketplace.description'),
        transformation: TranslationUtil.translate(locale,'products.kumuluzMarketplace.transformation'),
        href: KUMULUZ_URL + '/digital-components/marketplace',
        external: true
    },
    {
        id: 'kumuluzCrowdsensing',
        name: (
            <div
                dangerouslySetInnerHTML={{
                    __html: TranslationUtil.translate(locale,'products.kumuluzCrowdsensing.title')
                }}
            />
        ),
        description: TranslationUtil.translate(locale,'products.kumuluzCrowdsensing.description'),
        transformation: TranslationUtil.translate(locale,'products.kumuluzCrowdsensing.transformation'),
        href: KUMULUZ_URL + '/digital-components/crowdsensing',
        external: true
    }
];

export const businessApis = (locale) => [
    {
        title: TranslationUtil.translate(locale,"business-apis.payment"),
        url: KUMULUZ_URL + "/business-apis/payment/",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.product-catalog"),
        url: KUMULUZ_URL + "/business-apis/product-catalog",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.cart"),
        url: KUMULUZ_URL + "/business-apis/cart",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.order"),
        url: KUMULUZ_URL + "/business-apis/order",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.fulfillment"),
        url: KUMULUZ_URL + "/business-apis/fulfillment",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.invoice"),
        url: KUMULUZ_URL + "/business-apis/invoice",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.customer"),
        url: KUMULUZ_URL + "/business-apis/customer",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.ccm"),
        url: KUMULUZ_URL + "/business-apis/ccm",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.subscription"),
        url: KUMULUZ_URL + "/business-apis/subscription",
        external: true
    },
    {
        title: TranslationUtil.translate(locale,"business-apis.kyc"),
        url: KUMULUZ_URL + "/business-apis/kyc",
        external: true
    }
];
