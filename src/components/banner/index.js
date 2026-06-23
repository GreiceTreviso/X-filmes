import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles'


export default function Banner () {
 return(

    <>
         
        <Text style={styles.textao}> Em Cartaz </Text>
         
        <Image
        source={require("../../../imagens/banner.avif")}
        style={styles.imageBanner}/>
         
        <StatusBar style="auto" />
    </>
 )
}




