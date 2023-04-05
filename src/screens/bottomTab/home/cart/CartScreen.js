//React
import React, { useState, useEffect, useLayoutEffect } from 'react'

//React Native
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { HStack, Image, Box, VStack } from 'native-base'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './CartScreenStyle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { cartCount } from '../../../../redux/slices/cartSlice'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function CartScreen({
  route
}) {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [data, setData] = useState()

  const cartTotalCount = useSelector(
    (state) => state.cart?.cartCount
  )

  const setAddedProduct = useSelector(
    (state) => state.cart?.setAddedProduct
  )

  useEffect(() => {
    setData(route?.params?.item)
  }, [route])

  const handleOnDecreaseButtonPress = () => {
    dispatch(cartCount(cartTotalCount - 1))
  }

  const handleOnIncreaseButtonPress = () => {
    dispatch(cartCount(cartTotalCount + 1))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: props => (
        <View>
          <Text style={{ fontSize: 24, color: "#FFFFFF", fontWeight: "bold" }}>
            Sepetim
          </Text>
        </View>
      )
    })
  }, [navigation])

  useEffect(() => {
    if (data === undefined) {
      setData(setAddedProduct)
    }
  }, [data])


  return (

    cartTotalCount === 0 ?
      <View style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text
          style={{ fontSize: 14 }}>
          Sepetinizde ürün bulunmamaktadır.
        </Text>
      </View>
      :

      <>
        <View style={styles.container}>
          <VStack style={styles.infoContainer}>
            <HStack style={styles.infoRow}>
              <Text style={styles.title} numberOfLines={1}>
                {data?.name}
              </Text>

              <TouchableOpacity
                style={styles.likeButton}
                activeOpacity={0.9}
              >
              </TouchableOpacity>

            </HStack>

            <HStack style={styles.infoRow}>
              <VStack>
                <HStack>
                  <Text
                    style={[
                      styles.text,
                      styles.bigText,
                      styles.textBold,
                      styles.textBlue,
                    ]}
                  >
                    {data?.price} ₺
                  </Text>

                </HStack>
              </VStack>

              <HStack style={styles.addCartContainer}>
                <View style={{ backgroundColor: "#DADADA", width: 50, height: 40, justifyContent: "center", alignItems: "center" }}>

                  <TouchableOpacity
                    style={[styles.addCartButton, styles.addCartButtonLeft]}
                  >
                    <Icon
                      name="minus"
                      type="antdesign"
                      size={16}
                      color="black"
                      onPress={handleOnDecreaseButtonPress}
                    />
                  </TouchableOpacity>
                </View>

                <Box style={styles.inCartNumberBox}>
                  <TextInput
                    selectionColor={"#A0A3A3"}
                    selectTextOnFocus={true}
                    keyboardType="numeric"
                    type="numeric"
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "#FFFFFF",
                      textAlign: "center",
                      fontSize: 20
                    }}
                    value={cartTotalCount.toString()}
                    editable={false}
                  />

                </Box>

                <View style={{ backgroundColor: "#DADADA", width: 50, height: 40, justifyContent: "center", alignItems: "center" }}>

                  <TouchableOpacity
                    style={[styles.addCartButton, styles.addCartButtonRight]}
                  >
                    <Icon
                      name="plus"
                      type="antdesign"
                      size={16}
                      color="black"
                      onPress={handleOnIncreaseButtonPress}
                    />
                  </TouchableOpacity>
                </View>
              </HStack>
            </HStack>

          </VStack>

        </View>
        {
          cartTotalCount !== 0 &&

          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            backgroundColor: "#FFFFFF",
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            height: 76,
            alignContent: "center"
          }}>

            <View
              style={{
                width: "50%",
                alignContent: "center",
                justifyContent: "center"
              }}
            >

              <Text style={{ fontSize: 20, color: "#2A59FE" }}>
                Total:
              </Text>

              <Text style={{ fontSize: 18, color: "#000000", fontWeight: "bold" }}>
                {data?.price * cartTotalCount} ₺
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#2A59FE",
                height: 45,
                width: "50%",
                justifyContent: "center",
                borderRadius: 8,
                marginTop: 16,
                marginBottom: 16
              }}
              activeOpacity={0.9}

            >

              <Text
                style={{
                  textAlign: "center",
                  color: "#FFFFFF",
                  fontSize: 16,
                  lineHeight: 19.5,
                  fontWeight: "bold"
                }}
              >
                Complete
              </Text>

            </TouchableOpacity>
          </View>
        }

      </>
  )
}