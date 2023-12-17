import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'


export default function Heart() {
  return (
    <View style={styles.container}>
      <Icon size={18} color='black' name="heart" ></Icon>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#DFDFDF',
        height:30,
        width:30,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:'75%',
    }
})