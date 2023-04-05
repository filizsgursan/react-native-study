// Components
import { View } from "native-base"
import { ActivityIndicator, Dimensions } from "react-native"

export default function Loading() {

    const screenWidth = Dimensions.get("window").width

    return (
        <View style={{
            position: "absolute",
            width: screenWidth,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.8,
            backgroundColor: "#DADADA",
            zIndex: 20
        }}>
            <ActivityIndicator size={55} color="#323338" />
        </View>
    );
}
