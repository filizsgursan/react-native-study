
// Constants
import { HOME_NAV } from '../../common/constants/Navigations'
import AddToCard from '../../components/AddToCard/AddToCard';
import ProductCardDetail from '../../components/ProductCardDetail/ProductCardDetail';
import CartScreen from '../../screens/bottomTab/home/cart/CartScreen';

import HomeScreen from './../../screens/bottomTab/home/HomeScreen';

export default homeRoutes = [
    {
        name: HOME_NAV.HOME,
        component: HomeScreen,
    },
    {
        name: HOME_NAV.PRODUCT_DETAIL,
        component: ProductCardDetail,
    },
    {
        name: HOME_NAV.CART,
        component: CartScreen,
    }
]
