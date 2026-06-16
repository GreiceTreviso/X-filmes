import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header(){
    return(
       
   <View style={styles.cabeçalho}>
  
   <Feather name="menu" size={24} color="#FF0000" />    {/*icone do site vector*/}
   
   <Text style={styles.textoCabe}>X Filmes</Text>
   <TouchableOpacity>

   </TouchableOpacity>
   </View>
    
       
    )
}
