//React
import React, { useState, useEffect } from 'react'

//React Native
import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import { HStack, Image, Box, VStack } from 'native-base'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './CartScreenStyle'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { cartCount } from '../../../../redux/slices/cartSlice'

export default function CartScreen({
  route
}) {

  const dispatch = useDispatch()

  const cartTotalCount = useSelector(
    (state) => state.cartTotalCount?.cartCount
  );

  const [data, setData] = useState()

  useEffect(() => {
    setData(route?.params?.item)
  }, [route])

  const handleOnDecreaseButtonPress = () => {
    dispatch(cartCount(cartTotalCount - 1))
  }

  const handleOnIncreaseButtonPress = () => {
    dispatch(cartCount(cartTotalCount + 1))
  }

  return (

    cartTotalCount === 0 ?
      <>
      </>
      :
      <View style={styles.container}>

        <Image
          style={styles.image}
          source={{ uri: data?.image }}
          alt=" "
        />

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
          <HStack style={[styles.infoRow, styles.infoMidRow]}>
            <HStack style={styles.brandInfo}>
              <Text style={styles.text}>
                Brand
              </Text>
              <TouchableOpacity>
                <Text
                  style={[styles.text, styles.textBlue]}
                  numberOfLines={1}
                >
                  {data?.brand}
                </Text>
              </TouchableOpacity>
            </HStack>
          </HStack>

          <HStack style={styles.infoRow}>
            <VStack>
              <HStack>
                <Text
                  style={[
                    styles.text,
                    styles.bigText,
                    styles.textBold,
                    styles.textRed,
                  ]}
                >
                  {data?.price} TL
                </Text>

              </HStack>
            </VStack>

            <HStack style={styles.addCartContainer}>
              <TouchableOpacity
                style={[styles.addCartButton, styles.addCartButtonLeft]}
              >
                <Icon
                  name="minus"
                  type="antdesign"
                  size={20}
                  color="black"
                  onPress={handleOnDecreaseButtonPress}
                />
              </TouchableOpacity>

              <Box style={styles.inCartNumberBox}>
                <TextInput
                  selectionColor={"#A0A3A3"}
                  selectTextOnFocus={true}
                  keyboardType="numeric"
                  type="numeric"
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#D0261C",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                  value={cartTotalCount.toString()}
                  editable={false}
                />

              </Box>

              <TouchableOpacity
                style={[styles.addCartButton, styles.addCartButtonRight]}
              >
                <Icon
                  name="plus"
                  type="antdesign"
                  size={20}
                  color="black"
                  onPress={handleOnIncreaseButtonPress}
                />
              </TouchableOpacity>
            </HStack>
          </HStack>

        </VStack>
      </View>
  )
}