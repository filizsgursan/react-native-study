import React from "react"

// Routes


// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Routes
import cartRoutes from "../../routes/home/cartRoutes"

const Stack = createNativeStackNavigator()

export default function CartNavigation() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: "Back",
                headerShown: true,
                headerTitleAlign: "center",              
                tabBarActiveTintColor: 'black',
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                headerStyle: { backgroundColor: "#2A59FE" }
            }}
        >
            {
                cartRoutes.map((item, index) => {
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
