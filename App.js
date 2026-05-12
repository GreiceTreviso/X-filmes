import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
     
   <view style={styles.cabeçalho}>
  
   <Feather name="menu" size={24} color="#FF0000" />
   

   </view>

   <Text style={styles.textoCabe}>X Filmes</Text>
      <TouchableOpacity>

      </TouchableOpacity>

   <view style={styles.containerBusca}>
    <TextInput
      placeholder='digite o filme que desejar'
    ></TextInput>





   </view>














      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636',
    alignItems: 'center',
  },

  cabeçalho: {
   flexDirection:'row',
   width: "90%",
   alignItems: 'center',
   marginTop:10,
   justifyContent:''
  },

  textoCabe: {
   fontSize:25,
   color:'#FF0000',
   fontWeight:'bold'
  },

  containerBusca: {
    marginTop:20,
    width:'90%',
    backgroundColor:'white',
    borderRadius:5,
    padding:8
  }
});
