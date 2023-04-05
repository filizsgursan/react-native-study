// Constants
import { BOTTOM_TAB_NAV } from '../common/constants/Navigations'

// React Native
import { Icon } from 'react-native-elements'

// Navigations
import HomeNavigation from '../navigations/home/HomeNavigation'
import ProfileNavigation from '../navigations/home/ProfileNavigation'
import CartNavigation from '../navigations/home/CartNavigation'
import FavoritesNavigation from '../navigations/home/FavoritesNavigation'
import IconBadge from 'react-native-icon-badge';
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

export default bottomTabRoutes = [
    {
        name: BOTTOM_TAB_NAV.HOME,
        component: HomeNavigation,
        options: {
            tabBarLabel: "",
            tabBarIcon: () =>               
                    <Icon
                        name="home-outline"
                        type="ionicon"
                        size={26}
                        color="black"                      
                    />            
        }
    },
    {
        name: BOTTOM_TAB_NAV.CART,
        component: CartNavigation,
        options: {
            tabBarLabel: "",
            tabBarIcon: () => (
                <IconBadge
                    MainElement={
                       
                            <Icon
                                name="shopping-outline"
                                type="material-community"
                                size={26}
                                color="black"
                                
                            />
                        
                    }
                    BadgeElement={
                        <Text style={{ color: 'white', fontSize: 10, textAlign: "center" }}>
                            {useSelector((state) => state.cart.cartCount)}
                        </Text>
                    }
                    IconBadgeStyle={
                        {
                            width: 15,
                            height: 20,
                            backgroundColor: 'red'
                        }
                    }
                    Hidden={useSelector((state) => state.cart.cartCount) === 0}

                />
            )
        }
    },
    {
        name: BOTTOM_TAB_NAV.FAVORITES,
        component: FavoritesNavigation,
        options: {
            tabBarLabel: "",
            tabBarIcon: () => (
             
                    <Icon
                        name="star-o"
                        type="font-awesome"
                        size={26}
                        color="black"
                    />
              
            ),
        }
    },
    {
        name: BOTTOM_TAB_NAV.PROFILE,
        component: ProfileNavigation,
        options: {
            tabBarLabel: "",
            tabBarIcon: () => (

                <Icon
                    name="user-o"
                    type="font-awesome"
                    size={26}
                    color="black"
                />

            ),
        }
    },
]
