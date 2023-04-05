import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FavoritesScreen() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <View>
          <Text
            style={{
              fontSize: 24,
              color: "#FFFFFF",
              fontWeight: "bold"
            }}
          >
            Favorilerim
          </Text>
        </View>
      )
    })
  }, [navigation])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Favorilerinizde ürün bulunmamaktadır.</Text>
    </View>
  )
}