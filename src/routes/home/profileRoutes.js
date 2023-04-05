
// Constants
import { PROFILE_NAV } from '../../common/constants/Navigations'

// Screens
import HomeScreen from '../../screens/bottomTab/home/HomeScreen'
import ProfileScreen from '../../screens/bottomTab/home/profile/ProfileScreen'
import CartScreen from './../../screens/bottomTab/home/cart/CartScreen'
import FavoritesScreen from './../../screens/bottomTab/home/favorites/FavoritesScreen'

export default homeRoutes = [
    {
        name: PROFILE_NAV.PROFILE,
        component: ProfileScreen
    },
    {
        name: PROFILE_NAV.HOME,
        component: HomeScreen
    },
    {
        name: PROFILE_NAV.CART,
        component: CartScreen
    },
    {
        name: PROFILE_NAV.FAVORITES,
        component: FavoritesScreen
    }
]
