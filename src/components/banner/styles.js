import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({ 
    Banner: {
        flex: 1,
        backgroundColor: '#363636',
        alignItems: 'center',
      },

      imageBanner: {
        width: '90%',
        height: 200,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderRadius: 10,
    
      },
    
      textao: {
        color: '#FF0000',
        width: '90%',
        fontSize:20,
        marginTop:15,
        fontWeight:'bold',
        marginBottom: 15
      }
    

});

export default styles;