import React from "react"

// Routes
import homeRoutes from "../../routes/home/homeRoutes"

// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View } from "react-native"
import { Text } from "react-native"
const Stack = createNativeStackNavigator()

export default function HomeNavigation() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: "Back",
                headerShown: true,
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#2A59FE" },
            }}
        >
            {
                homeRoutes.map((item, index) => {
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
