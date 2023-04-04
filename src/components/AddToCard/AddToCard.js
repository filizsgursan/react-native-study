import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './AddToCardStyle'
import { HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Box } from 'native-base';

export default function AddToCard() {
    return (
        <HStack style={styles.addCartContainer}>
            <TouchableOpacity
                style={[styles.addCartButton, styles.addCartButtonLeft]}
                hitSlop={{ top: 8, bottom: 8, left: 5, right: 5 }}
            >
                {/* <MinusBasic
                    stroke={
                        notFoundInStock
                            ? "#A0A3A3"
                            : inverted
                                ? "#fff"
                                : "#D0261C"
                    }
                /> */}
            </TouchableOpacity>

            <Box style={styles.inCartNumberBox}>

                <TouchableOpacity >
                    <Text style={[
                        {
                            width: "100%",
                            height: "100%",
                            textAlign: "center",
                            fontWeight: "600",
                        },

                    ]}>
                        5
                    </Text>
                </TouchableOpacity>
            </Box>
        </HStack>
    )
}