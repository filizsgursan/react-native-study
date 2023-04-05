// React
import React, { useEffect, useLayoutEffect, useState } from 'react'

// React Native
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Image, ScrollView } from 'native-base'

// Style
import { styles } from './ProductCardDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { cartCount, setAddedProduct } from '../../redux/slices/cartSlice'

// Navigations
import { HOME_NAV } from '../../common/constants/Navigations'

export default function ProductCardDetail({
    route
}) {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [data, setData] = useState()
    const [isFav, setIsFav] = useState(false)
    const handleOnLikeFavPress = () => {
        setIsFav(!isFav)
    }

    const cartTotalCount = useSelector(
        (state) => state.cart.cartCount
    )

    useEffect(() => {
        setData(route?.params?.item)
        setIsFav(route?.params?.isFav)
    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: route?.params?.item?.name,
        })
    }, [navigation])

    const handleOnAddToCart = () => {
        dispatch(cartCount(cartTotalCount + 1))
        navigation.navigate(HOME_NAV.CART, { item: data, initial: false })

        dispatch(setAddedProduct(data))
    }
    return (

        <ScrollView
            style={styles.container}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: data?.image }}
                    alt=" "
                />

                <TouchableOpacity style={{
                    height: 18,
                    width: 18,
                    marginLeft: 4,
                    position: "absolute",
                    right: 15,
                    top: 25
                }}
                    activeOpacity={0.9}
                    onPress={handleOnLikeFavPress}
                    hitSlop={{
                        top: 8,
                        bottom: 8,
                        left: 5,
                        right: 5
                    }}
                >{

                        isFav ?
                            <Icon
                                name="star"
                                type="font-awesome"
                                size={16}
                                color="#FFB800"
                            />
                            :
                            <Icon
                                name="star-o"
                                type="font-awesome"
                                size={16}
                                color="#D9D9D9"
                            />
                    }
                </TouchableOpacity>

            </View>

            <Text style={styles.dataName}>
                {data?.name}
            </Text>

            <Text style={styles.description}>
                {data?.description}
            </Text>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >

                <View
                    style={{
                        width: "50%",
                        alignContent: "center",
                        justifyContent: "center"
                    }}>

                    <Text
                        style={{
                            fontSize: 20,
                            color: "#2A59FE"
                        }}>
                        Price:
                    </Text>

                    <Text
                        style={{
                            fontSize: 18,
                            color: "#000000",
                            fontWeight: "bold"
                        }}>
                        {data?.price} ₺
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
                    onPress={() => handleOnAddToCart()}
                >

                    <Text
                        style={{
                            textAlign: "center",
                            color: "#FFFFFF",
                            fontSize: 16,
                            lineHeight: 19.5,
                            fontWeight: "bold"
                        }}>
                        Add to Card
                    </Text>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}