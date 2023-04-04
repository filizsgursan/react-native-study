import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 7,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#FFFFFF",
    },
    loadingContainer: {
        position: "absolute",
        backgroundColor: "#DADADA",
        width: "100%",
        flexDirection: "row",
        borderRadius: 8,
        zIndex: 10,
    },
    image: {
        width: 60,
        height: 60,
        marginLeft: 5,
        borderRadius: 6,
        resizeMode: "stretch",
    },
    infoContainer: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 10,
        marginTop: 1.5,
    },
    infoRow: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoMidRow: {
        marginTop: 3,
        marginBottom: 2,
    },
    title: {
        flex: 1,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: "#323338",
    },
    brandInfo: {
        flex: 2,
    },
    discountInfo: {
        flex: 1,
    },
    sizeInfo: {
        flex: 1,
        justifyContent: "flex-end",
    },
    text: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        color: "#323338",
    },
    discountText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        lineHeight: 12,
        color: "#D0261C",
    },
    bigText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        color: "#323338",
    },
    oldText: {
        textDecorationLine: "line-through",
        alignSelf: "center",
    },
    textBlue: {
        marginLeft: 2,
        color: "#45a2e5",
    },
    textBold: {
        fontWeight: "bold",
    },
    textRed: {
        color: "#D0261C",
    },
    textBlack: {
        color: "#000",
    },
    textYellow: {
        color: "#FB8200",
    },

    footer: {
        height: 29,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 4,
    },

    likeButton: {
        height: 18,
        width: 18,
        marginLeft: 4,
    },
    variantText: {
        fontWeight: "700",
        fontSize: 10
    },
    addCartContainer: {
        alignItems: "center",
        marginRight: 5,
    },
    addCartButton: {
        height: 27,
        justifyContent: "center",
    },
    addCartButtonLeft: {
        paddingRight: 12,
    },
    addCartButtonRight: {
        paddingLeft: 12,
    },
    inCartNumberBox: {
        width: 27,
        height: 27,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E8E8E8"
    },
    inCartNumber: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 16,
        color: "#D0261C"
    },
    imageContainer: {
        paddingTop:10,
        width: 50,       
        borderRadius: 6,
    }
});
