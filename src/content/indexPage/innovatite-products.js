import platform from '../../assets/images/platform.svg';
import apis from '../../assets/images/apis.svg';
import community from '../../assets/images/community.svg';
import dapis from '../../assets/images/dapis.svg';
import {EE_KUMULUZ_URL, IO_KUMULUZ_URL, KUMULUZ_URL} from "../constants";


export const innovativeProducts = t => [
    {
        title: t('innovative-products.apis.title'),
        shortDesc: t('innovative-products.apis.short-desc'),
        desc: t('innovative-products.apis.desc'),
        image: apis,
        url: KUMULUZ_URL + '/business-apis'
    },
    {
        title: t('innovative-products.platform.title'),
        shortDesc: t('innovative-products.platform.short-desc'),
        desc: t('innovative-products.platform.desc'),
        image: platform,
        url: KUMULUZ_URL + '/digital-platform'
    },
    {
        title: t('innovative-products.community.title'),
        shortDesc: t('innovative-products.community.short-desc'),
        desc: t('innovative-products.community.desc'),
        image: community,
        url: EE_KUMULUZ_URL
    },
    {
        title: t('innovative-products.dapis.title'),
        shortDesc: t('innovative-products.dapis.short-desc'),
        desc: t('innovative-products.dapis.desc'),
        image: dapis,
        url: IO_KUMULUZ_URL
    }
];
