// Constants
import { CART_NAV } from '../../common/constants/Navigations'
import HomeScreen from '../../screens/bottomTab/home/HomeScreen'
import CartScreen from '../../screens/bottomTab/home/cart/CartScreen'


export default cartRoutes = [
    {
        name: CART_NAV.CART,
        component: CartScreen,
    },
    {
        name: CART_NAV.HOME,
        component: HomeScreen,
    }

]
