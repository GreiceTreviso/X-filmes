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
  
    <View style= {{width: '90%'}}> 
      <FlatList
      horizontal= {true}
      data={filmes}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) => ( 

        <TouchableOpacity>
          <Image style = {{width:80,height: 100}}source = {{uri: item.Image}}></Image>
          <Text > {item.nome} </Text>
        </TouchableOpacity>
        



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
