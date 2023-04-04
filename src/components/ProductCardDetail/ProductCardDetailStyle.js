
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        flexGrow:1,
        paddingBottom:40
    },
    imageContainer: {
        paddingTop:10,
        width: "100%",       
        borderRadius: 6,
        resizeMode: "stretch"
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    title: {
        marginBottom: 10,
        color: "#323338",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 17,
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
    dataName: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
        lineHeight: 30,
        color: "#000000",
        textAlignVertical: "center",
        marginTop: 16,
        marginBottom: 16
    },
    description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 20,
        color: "#000000",
        textAlignVertical: "center",
        marginBottom: 10
    },
    infoRow: {
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        width: 200,
        padding: 10,
        borderColor: "#45a2e5",
        marginTop: 3,
        marginBottom: 2,
    },
    sellerInfo: {
        flex: 2,
    },
    textBlue: {
        marginLeft: 2,
        color: "#45a2e5",
    },
});
