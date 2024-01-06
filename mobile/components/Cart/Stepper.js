import { View, Text, StyleSheet,Pressable} from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';


export default function Stepper({shoeId,onIncrement,onDecrement,value}) {

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{onDecrement(shoeId,value-1)}}>
        <Icon1 color="black" size={28} name="remove-circle-outline"></Icon1>
      </Pressable>
      <Text style={styles.txt}>{value}</Text>
      <Pressable onPress={()=>{onIncrement(shoeId,value+1)}}>
        <Icon1 color="black" size={28} name="add-circle-outline"></Icon1>
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    txt:{
        color:'black',
        marginHorizontal:6,
        fontSize:20
    }
})