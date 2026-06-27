import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from './src/components/header';
import Search from './src/components/search';
import Banner from './src/components/banner';
import filmes from './movies';
import { FlatList } from 'react-native-web';


export default function App(){
  return(
    <View style={styles.container}>
     
   <Header></Header>
   <Search></Search>
   <Banner></Banner>
  
    <View style= {{width: '90%', marginTop: '8%',  }}> 
      <FlatList
      horizontal= {true}
      data={filmes}
      keyExtractor={(item)=> item.id}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      //separador entre itens da flatList, dando espaço entre eles
      renderItem={({item}) => ( 

        <TouchableOpacity >
          <Image style = {{width:120,height: 180}}source = {{uri: item.Image}}></Image>
          <Text style={{ width: 120, textAlign: 'center', marginTop: '5', }} numberOfLines={2}> {item.nome} </Text>
        </TouchableOpacity>
        // width pra defi largura texto e numberOflines diz quantas linhas ocupar



      )}

    />
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#363636',
    alignItems: 'center',
  },




});
