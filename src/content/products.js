import React from 'react';
import {KUMULUZ_URL} from "./constants";

export const products = t => {
    return [
        {
            id: 'kumuluzEE',
            name: <div dangerouslySetInnerHTML={{__html: t('products.kumuluzEE.title')}}/>,
            description: t('products.kumuluzEE.description'),
            transformation: t('products.kumuluzEE.transformation'),
            href: KUMULUZ_URL + '/digital-components/ee',
            external: true
        },
        {
            id: 'kumuluzAPI',
            name: <div dangerouslySetInnerHTML={{__html: t('products.kumuluzAPI.title')}}/>,
            description: t('products.kumuluzAPI.description'),
            transformation: t('products.kumuluzAPI.transformation'),
            href: KUMULUZ_URL + '/digital-components/api',
            external: true
        },
        {
            id: 'kumuluzIntegration',
            name: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: t('products.kumuluzIntegration.title')
                    }}
                />
            ),
            description: t('products.kumuluzIntegration.description'),
            transformation: t('products.kumuluzIntegration.transformation'),
            href: KUMULUZ_URL + '/digital-components/integration',
            external: true
        },
        {
            id: 'kumuluzUX',
            name: <div dangerouslySetInnerHTML={{__html: t('products.kumuluzUX.title')}}/>,
            description: t('products.kumuluzUX.description'),
            transformation: t('products.kumuluzUX.transformation'),
            href: KUMULUZ_URL + '/digital-components/ux',
            external: true
        },
        {
            id: 'kumuluzMarketplace',
            name: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: t('products.kumuluzMarketplace.title')
                    }}
                />
            ),
            description: t('products.kumuluzMarketplace.description'),
            transformation: t('products.kumuluzMarketplace.transformation'),
            href: KUMULUZ_URL + '/digital-components/marketplace',
            external: true
        },
        {
            id: 'kumuluzCrowdsensing',
            name: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: t('products.kumuluzCrowdsensing.title')
                    }}
                />
            ),
            description: t('products.kumuluzCrowdsensing.description'),
            transformation: t('products.kumuluzCrowdsensing.transformation'),
            href: KUMULUZ_URL + '/digital-components/crowdsensing',
            external: true
        }
    ];
};

export const businessApis = t => [
    {
        title: t("business-apis.payment"),
        url: KUMULUZ_URL + "/business-apis/payment/",
        external: true
    },
    {
        title: t("business-apis.product-catalog"),
        url: KUMULUZ_URL + "/business-apis/product-catalog",
        external: true
    },
    {
        title: t("business-apis.cart"),
        url: KUMULUZ_URL + "/business-apis/cart",
        external: true
    },
    {
        title: t("business-apis.order"),
        url: KUMULUZ_URL + "/business-apis/order",
        external: true
    },
    {
        title: t("business-apis.fulfillment"),
        url: KUMULUZ_URL + "/business-apis/fulfillment",
        external: true
    },
    {
        title: t("business-apis.invoice"),
        url: KUMULUZ_URL + "/business-apis/invoice",
        external: true
    },
    {
        title: t("business-apis.customer"),
        url: KUMULUZ_URL + "/business-apis/customer",
        external: true
    },
    {
        title: t("business-apis.ccm"),
        url: KUMULUZ_URL + "/business-apis/ccm",
        external: true
    },
    {
        title: t("business-apis.subscription"),
        url: KUMULUZ_URL + "/business-apis/subscription",
        external: true
    },
    {
        title: t("business-apis.kyc"),
        url: KUMULUZ_URL + "/business-apis/kyc",
        external: true
    }
];
