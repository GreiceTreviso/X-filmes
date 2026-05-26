import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
     
   {/*inicio header*/}

   <View style={styles.cabeçalho}>
  
   <Feather name="menu" size={24} color="#FF0000" />    {/*icone do site vector*/}
   

   </View>

   <Text style={styles.textoCabe}>X Filmes</Text>
      <TouchableOpacity>

      </TouchableOpacity>

   <View style={styles.containerBusca}>
    <TextInput
      placeholder='digite o filme que desejar'
      style = {styles.inputSearch}    
    ></TextInput> {/*barra de pesquisa*/}


    <TouchableOpacity>
    <Ionicons name="search-circle-sharp" size={24} color="black" />
    </TouchableOpacity>    {/*icone de pesquisa*/}
</View>

 
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
