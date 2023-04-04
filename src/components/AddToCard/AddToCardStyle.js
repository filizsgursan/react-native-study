import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    inCartNumberInverted: {
        color: "#fff",
    }
})