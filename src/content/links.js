import {BLOG_URL, GITHUB_ORG_URL, SOCIAL} from "./constants";

export const navigation = t => [
    {href: '/services', name: t('menu.services')},
    {href: '/products', name: t('menu.products')},
    {
        name: t('menu.customers'),
        href: '/customers'
    },
    {
        name: t('menu.aboutUs.title'),
        href: '/about',
        children: [
            {href: '/about/sunesis', name: t('menu.aboutUs.aboutUs')},
            {href: '/about/references', name: t('menu.aboutUs.references')},
            {href: '/about/awards', name: t('menu.aboutUs.awards')}
        ]
    },
    {href: BLOG_URL, name: t('menu.blog'), external: true}
];

export const footerLinks = t => [
    {
        title: t('footer.services.title'),
        links: [
            {title: t('footer.services.service1')},
            {title: t('footer.services.service2')},
            {title: t('footer.services.service3')},
            {title: t('footer.services.service4')},
            {title: t('footer.services.service5')},
            {title: t('footer.services.service6')},
            {title: t('footer.services.service7')},
            {title: t('footer.services.service8')},
            {title: t('footer.services.service9')},
            {title: t('footer.services.service10')}
        ]
    },
    {
        title: t('footer.community.title'),
        links: [
            {
                title: t('footer.community.link1'),
                href: BLOG_URL
            },
            {
                title: t('footer.community.link2'),
                href: GITHUB_ORG_URL
            },
            {
                title: t('footer.community.link3'),
                href: SOCIAL.TWITTER_URL
            },
            {
                title: t('footer.community.link4'),
                href: SOCIAL.LINKEDIN_URL
            }
        ]
    },
    {
        title: t('footer.company.title'),
        links: [
            {
                title: t('footer.company.link1'),
                href: "/about/sunesis"
            },
            {
                title: t('footer.company.link2'),
                href: "/about/awards"
            },
            {
                title: t('footer.company.link3'),
                href: BLOG_URL
            },
            {
                title: t('footer.company.link4'),
                href: ""
            }
        ]
    }
];

import linkedInIcon from './images/social/linkedin.svg';
import twitterIcon from './images/social/twitter.svg';

export const socialLinks = [
    {
        img: twitterIcon,
        href: SOCIAL.TWITTER_URL
    },
    {
        img: linkedInIcon,
        href: SOCIAL.LINKEDIN_URL
    }
];
