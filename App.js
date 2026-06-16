import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './src/components/header';
import Search from './src/components/search';
export default function App() {
  return (
    <View style={styles.container}>
     
   <Header></Header>
   <Search></Search>
  
   
 
{/*inicio do banner*/}

    <Text style={styles.textao}> Em Cartaz </Text>

    <Image
    source={require("./imagens/banner.avif")}
    style={styles.imageBanner}
    />








      
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

  containerBusca: {
    marginTop:20,
    width:'90%',
    backgroundColor:'white',
    borderRadius:5,
    padding:8,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  inputSearch: {
    height: 10,
    padding: 8,
    width: '100%'
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
