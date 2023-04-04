import React from "react"

// Routes
import bottomTabRoutes from "../routes/bottomTabRoutes"

// Navigations
import { BOTTOM_TAB_NAV } from "../common/constants/Navigations"

// Tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigation() {

    return (
        <Tab.Navigator
            initialRouteName={BOTTOM_TAB_NAV.HOME}
            screenOptions={{
                headerBackTitle: "Back",
                headerShown: false,
                headerTitleAlign: "center",              
                tabBarActiveTintColor: 'black',
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
            }}
        >
            {
                bottomTabRoutes.map((item, index) => {
                    return (
                        <Tab.Screen
                            key={index}
                            name={item?.name}
                            component={item?.component}
                            options={item?.options}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}
