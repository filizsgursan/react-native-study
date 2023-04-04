import React from 'react'

// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import appRoutes from './routes/appRoutes'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitle: "Back",
                headerShown: false,
                headerTitleAlign: "center",
            }}
        >
            {appRoutes.map((item, index) => {
                return (
                    <Stack.Screen
                        key={index}
                        name={item?.name}
                        component={item?.component}
                        options={item?.options}
                    />
                );
            })}
        </Stack.Navigator>
    )
}