import { StyleSheet, Text, View } from 'react-native'
import AppNavigation from './src/AppNavigation'

// Stack navigator
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider, extendTheme } from "native-base"

// Redux
import { Provider } from "react-redux"

import store from "./src/redux/store"

import Theme from './src/common/theme/Theme'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'

export default function App() {

  const theme = extendTheme(Theme())

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        {
          Platform.OS === "android" ?
            <StatusBar translucent={false} />
            :
            <SafeAreaView style={{ backgroundColor: "#2A59FE" }} edges={["top", "left", "right"]} />
        }

        <NavigationContainer
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}

        >
          <AppNavigation />
        </NavigationContainer>
      </NativeBaseProvider>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
