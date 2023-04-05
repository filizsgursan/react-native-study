// React
import React, { useLayoutEffect } from 'react'

// React Native
import { Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'native-base'
import { Icon } from 'react-native-elements'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Assets
import user from '../../../../../assets/image/user.jpg'

// Navigations
import { HOME_NAV } from '../../../../common/constants/Navigations'

// Styles
import { styles } from './ProfileScreenStyle'

export default function ProfileScreen() {

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
            Profil
          </Text>
        </View>
      )
    })
  }, [navigation])

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={user}
            alt=''
          />

          <Text style={styles.name}>Filiz Gürsan </Text>

        </View>
      </View>

      <View style={styles.body}>

        <View style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        >

          <TouchableOpacity
            onPress={() => navigation.navigate(HOME_NAV.HOME)}>
            <Icon
              name="home-outline"
              type="ionicon"
              size={28}
              color="#2A59FE"
              style={{ marginRight: 10 }}
            />

          </TouchableOpacity>

          <Text style={{
            fontSize: 16,
            color: "black"
          }}>Anasayfa</Text>


        </View>

        <View style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <TouchableOpacity
            onPress={() => navigation.navigate(HOME_NAV.CART)}>

            <Icon
              name="shopping-outline"
              type="material-community"
              size={26}
              color="#2A59FE"
              style={{ marginRight: 10 }}

            />
          </TouchableOpacity>

          <Text style={{
            fontSize: 16,
            color: "black"
          }}>Sepetim</Text>

        </View>

        <View style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <TouchableOpacity
            onPress={() => navigation.navigate(HOME_NAV.FAVORITES)}>

            <Icon
              name="star-o"
              type="font-awesome"
              size={26}
              color="#2A59FE"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <Text style={{
            fontSize: 16,
            color: "black"
          }}>Favorilerim</Text>

        </View>

      </View>

    </View>
  )
}