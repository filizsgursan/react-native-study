// Constants
import { FAV_NAV } from '../../common/constants/Navigations'
import HomeScreen from '../../screens/bottomTab/home/HomeScreen'

// Screens
import FavoritesScreen from "../../screens/bottomTab/home/favorites/FavoritesScreen"

export default favoritesRoutes = [
    {
        name: FAV_NAV.FAVORITES,
        component: FavoritesScreen,
    }
]
