// React
import React, { useState } from 'react'

// React Native
import { View, Text, TouchableOpacity, PixelRatio } from 'react-native'
import { Box, Image } from "native-base"
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './ProductCardStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { HOME_NAV } from '../../common/constants/Navigations'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { cartCount, setAddedProduct } from '../../redux/slices/cartSlice'

export default function ProductCard({
    product, style
}) {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [favorite, setFavorite] = useState(false)

    const cartTotalCount = useSelector(
        (state) => state.cart?.cartCount
    );

    const goToProductDetailPage = (product) => {
        navigation.navigate(HOME_NAV.PRODUCT_DETAIL, { item: product, initial: false, isFav: favorite })
    }

    const handleOnAddToCart = () => {
        dispatch(cartCount(cartTotalCount + 1))
        navigation.navigate(HOME_NAV.CART, { item: product, initial: false })
        dispatch(setAddedProduct(product))
    }

    const handleOnLikeFavPress = () => {
        setFavorite(!favorite)
    }

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={() => goToProductDetailPage(product)}
        >

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image, width: PixelRatio.getPixelSizeForLayoutSize(170) }}
                    alt=" "
                    resizeMode="contain" />

            </View>

            <Text style={styles.priceText} numberOfLines={2}>
                {product?.price} ₺
            </Text>

            <Text style={styles.title} numberOfLines={2}>
                {product?.name}
            </Text>

            <Box style={styles.sellerInfo}>

            </Box>

            <TouchableOpacity
                style={styles.likeButton}
                activeOpacity={0.9}
                onPress={handleOnLikeFavPress}
            >
                {

                    favorite ?
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

            <TouchableOpacity
                style={{
                    backgroundColor: "#2A59FE",
                    height: 36,
                    width: "100%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 4
                }}
                activeOpacity={0.7}
                onPress={() => handleOnAddToCart()}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: 16,
                        lineHeight: 19.5
                    }}>
                    Add to Cart
                </Text>

            </TouchableOpacity>
        </TouchableOpacity >
    )
}