import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Image } from "native-base";
import { styles } from './ProductCardStyle';
import { PixelRatio } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { HOME_NAV } from '../../common/constants/Navigations';
import { useDispatch, useSelector } from 'react-redux';
import { cartCount } from '../../redux/slices/cartSlice';


export default function ProductCard({
    product, style
}) {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const cartTotalCount = useSelector(
        (state) => state.cartTotalCount.cartCount
    );

    const goToProductDetailPage = (product) => {
        navigation.navigate(HOME_NAV.PRODUCT_DETAIL, { item: product, initial: false })
    }

    const handleOnAddToCart = () => {
        dispatch(cartCount(cartTotalCount + 1))
        navigation.navigate(HOME_NAV.CART, { item: product, initial: false })
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
            >
                <Icon
                    name="star-o"
                    type="font-awesome"
                    size={16}
                    color="#D9D9D9"
                />

            </TouchableOpacity>

            <TouchableOpacity
                style={{ backgroundColor: "#2A59FE", height: 36, width: "100%", justifyContent: "center", alignSelf: "center", borderRadius: 4 }}
                activeOpacity={0.7}
                onPress={() => handleOnAddToCart()}
            >
                <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 16, lineHeight: 19.5 }}>
                    Add to Cart
                </Text>

            </TouchableOpacity>
        </TouchableOpacity >
    )
}