import { Center } from "native-base";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: 165,
        flexDirection: "column",
        height: 302,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.1)",
        backgroundColor: "#FFFFFF",
        padding: 10

    },
    imageContainer: {
        width: "100%",
        aspectRatio: 1,
        backgroundColor: "#FFFFFF",
        overflow: "hidden"
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    title: {
        height: 32,
        marginTop: 3,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
        color: "#000000",
        marginTop: 15
    },
    text: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        marginVertical: 4,
        color: "#323338",
    },
    textBlue: {
        marginLeft: 2,
        color: "#45a2e5",
    },
    priceText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 17,
        color: "#2A59FE",
        marginTop: 15
    },
    priceCurrency: {
        marginRight: 2,
    },
    likeButton: {
        position: "absolute",
        top: 10,
        right: 10,
        height: 27,
        width: 27,
        paddingTop: 5,
        paddingRight: 4,
        paddingBottom: 4,
        paddingLeft: 5,
        borderRadius: 6,
        backgroundColor: "#ffffff",
    }
});
