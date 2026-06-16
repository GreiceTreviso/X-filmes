import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Search() {
    return(
        <View style={styles.containerBusca}>
        <TextInput
          placeholder='digite o filme que desejar'
          style = {styles.inputSearch}    
        ></TextInput> {/*barra de pesquisa*/}
    
    
        <TouchableOpacity>
        <Ionicons name="search-circle-sharp" size={24} color="black" />
        </TouchableOpacity>    {/*icone de pesquisa*/}
    </View>
    )
}