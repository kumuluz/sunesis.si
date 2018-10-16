import React from 'react';

export const products = t => {
    return [
        {
            id: 'kumuluzEE',
            name: <div dangerouslySetInnerHTML={{__html: t('products.kumuluzEE.title')}}/>,
            description: t('products.kumuluzEE.description'),
            transformation: t('products.kumuluzEE.transformation'),
            href: 'https://www.kumuluz.com/digital-components/ee',
            external: true
        },
        {
            id: 'kumuluzAPI',
            name: <div dangerouslySetInnerHTML={{__html: t('products.kumuluzAPI.title')}}/>,
            description: t('products.kumuluzAPI.description'),
            transformation: t('products.kumuluzAPI.transformation'),
            href: 'https://www.kumuluz.com/digital-components/api',
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
            href: 'https://www.kumuluz.com/digital-components/integration',
            external: true
        },
        {
            id: 'kumuluzUX',
            name: <div dangerouslySetInnerHTML={{__html: t('products.kumuluzUX.title')}}/>,
            description: t('products.kumuluzUX.description'),
            transformation: t('products.kumuluzUX.transformation'),
            href: 'https://www.kumuluz.com/digital-components/ux',
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
            href: 'https://www.kumuluz.com/digital-components/marketplace',
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
            href: 'https://www.kumuluz.com/digital-components/crowdsensing',
            external: true
        }
    ];
};

export const businessApis = t => [
    {
        title: t("business-apis.payment"),
        url: "https://www.kumuluz.com/business-apis/payment/",
        external: true
    },
    {
        title: t("business-apis.product-catalog"),
        url: "https://www.kumuluz.com/business-apis/product-catalog",
        external: true
    },
    {
        title: t("business-apis.cart"),
        url: "https://www.kumuluz.com/business-apis/cart",
        external: true
    },
    {
        title: t("business-apis.order"),
        url: "https://www.kumuluz.com/business-apis/order",
        external: true
    },
    {
        title: t("business-apis.fulfillment"),
        url: "https://www.kumuluz.com/business-apis/fulfillment",
        external: true
    },
    {
        title: t("business-apis.invoice"),
        url: "https://www.kumuluz.com/business-apis/invoice",
        external: true
    },
    {
        title: t("business-apis.customer"),
        url: "https://www.kumuluz.com/business-apis/customer",
        external: true
    },
    {
        title: t("business-apis.ccm"),
        url: "https://www.kumuluz.com/business-apis/ccm",
        external: true
    },
    {
        title: t("business-apis.subscription"),
        url: "https://www.kumuluz.com/business-apis/subscription",
        external: true
    },
    {
        title: t("business-apis.kyc"),
        url: "https://www.kumuluz.com/business-apis/kyc",
        external: true
    }
];
