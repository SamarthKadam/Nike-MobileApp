import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({title}) {
  return (
    <View>
      <Text style={style.text}>{title}</Text>
    </View>
  )
}

const style=StyleSheet.create({
    text:{
        color:'black',
        fontSize:20,
        letterSpacing:0.01,
        fontFamily:'Roboto-Medium'
    }
})