import React from "react"

// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import favoritesRoutes from "../../routes/home/favoritesRoutes"

const Stack = createNativeStackNavigator()

export default function FavoritesNavigation() {

    return (
        <Stack.Navigator
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
                favoritesRoutes.map((item, index) => {
                    return (
                        <Stack.Screen
                            key={index}
                            name={item?.name}
                            component={item?.component}
                            options={item?.options}
                        />
                    )
                })
            }
        </Stack.Navigator>
    )
}
