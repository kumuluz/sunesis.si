import platform from '../../assets/images/platform.svg';
import apis from '../../assets/images/apis.svg';
import community from '../../assets/images/community.svg';
import dapis from '../../assets/images/dapis.svg';
import {EE_KUMULUZ_URL, IO_KUMULUZ_URL, KUMULUZ_URL} from "../constants";


export const innovativeProducts = [
    {
        title: 'innovative-products.apis.title',
        shortDesc: 'innovative-products.apis.short-desc',
        desc: 'innovative-products.apis.desc',
        image: apis,
        url: KUMULUZ_URL + '/business-apis'
    },
    {
        title: 'innovative-products.platform.title',
        shortDesc: 'innovative-products.platform.short-desc',
        desc: 'innovative-products.platform.desc',
        image: platform,
        url: KUMULUZ_URL + '/digital-platform'
    },
    {
        title: 'innovative-products.community.title',
        shortDesc: 'innovative-products.community.short-desc',
        desc: 'innovative-products.community.desc',
        image: community,
        url: EE_KUMULUZ_URL
    },
    {
        title: 'innovative-products.dapis.title',
        shortDesc: 'innovative-products.dapis.short-desc',
        desc: 'innovative-products.dapis.desc',
        image: dapis,
        url: IO_KUMULUZ_URL
    }
];
