import platform from '../../assets/images/platform.svg';
import apis from '../../assets/images/apis.svg';
import community from '../../assets/images/community.svg';
import dapis from '../../assets/images/dapis.svg';
import {EE_KUMULUZ_URL, IO_KUMULUZ_URL, KUMULUZ_URL} from "../constants";


export const innovativeProducts = [
    {
        title: 'technologies-page.innovative-products.apis.title',
        shortDesc: 'technologies-page.innovative-products.apis.short-desc',
        desc: 'technologies-page.innovative-products.apis.desc',
        image: apis,
        url: KUMULUZ_URL + '/business-apis'
    },
    {
        title: 'technologies-page.innovative-products.platform.title',
        shortDesc: 'technologies-page.innovative-products.platform.short-desc',
        desc: 'technologies-page.innovative-products.platform.desc',
        image: platform,
        url: KUMULUZ_URL + '/digital-platform'
    },
    {
        title: 'technologies-page.innovative-products.community.title',
        shortDesc: 'technologies-page.innovative-products.community.short-desc',
        desc: 'technologies-page.innovative-products.community.desc',
        image: community,
        url: EE_KUMULUZ_URL
    },
    {
        title: 'technologies-page.innovative-products.dapis.title',
        shortDesc: 'technologies-page.innovative-products.dapis.short-desc',
        desc: 'technologies-page.innovative-products.dapis.desc',
        image: dapis,
        url: IO_KUMULUZ_URL
    }
];
