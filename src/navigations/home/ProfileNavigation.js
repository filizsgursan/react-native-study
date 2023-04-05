import React from "react"

// Routes
import profileRoutes from "../../routes/home/profileRoutes"


// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

export default function ProfileNavigation() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: "Back",
                headerShown: true,
                headerTitleAlign: "center",
                tabBarActiveTintColor: 'black',
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                headerStyle: { backgroundColor: "#2A59FE" },
                headerTintColor: '#FFFFFF'
            }}
        >
            {
                profileRoutes.map((item, index) => {
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
