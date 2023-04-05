import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2A59FE',
      },
      headerContent: {
        padding: 30,
        alignItems: 'center',
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
      },
      name: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600'
      },
      body: {
        backgroundColor: '#FFFFFF',
        height: 500,
        alignItems: 'center',
        paddingTop: 50    
      }
})
