// React
import React, { useEffect, useLayoutEffect, useState } from 'react'

// React Native
import { View, Text, TouchableOpacity } from 'react-native'
import { Image, ScrollView, HStack } from 'native-base'

// Style
import { styles } from './ProductCardDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { cartCount } from '../../redux/slices/cartSlice'

export default function ProductCardDetail({
    route
}) {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [data, setData] = useState()

    const cartTotalCount = useSelector(
        (state) => state.cartTotalCount.cartCount
    );

    useEffect(() => {
        setData(route?.params?.item)
    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: route?.params?.item?.name,
        })
    }, [navigation])

    const handleOnAddToCart = () => {
        dispatch(cartCount(cartTotalCount + 1))
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

            </View>

            <Text style={styles.dataName}>
                {data?.name}
            </Text>

            <Text style={styles.description}>
                {data?.description}
            </Text>

            <HStack style={styles.infoRow}>
                <HStack style={styles.brandInfo}>
                    <Text style={{ fontSize: 14 }}>
                        Brand:
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 14,
                                marginLeft: 2,
                                color: "#45a2e5"
                            }}
                            numberOfLines={1}
                        >
                            {data?.brand}
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </HStack>

            <HStack style={styles.infoRow}>
                <HStack style={styles.brandInfo}>
                    <Text style={{ fontSize: 14 }}>
                        Model:
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 14,
                                marginLeft: 2,
                                color: "#45a2e5"
                            }}
                            numberOfLines={1}
                        >
                            {data?.model}
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </HStack>

            <TouchableOpacity
                style={{
                    backgroundColor: "#2A59FE",
                    height: 45,
                    width: "100%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 8,
                    marginTop: 16,
                    marginBottom: 16
                }}
                activeOpacity={0.9}
                onPress={() => handleOnAddToCart()}
            >
                <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 16, lineHeight: 19.5 }}>
                    Add to Card
                </Text>

            </TouchableOpacity>

        </ScrollView >
    )
}