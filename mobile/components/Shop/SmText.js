import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SmText({text}) {
  return (
      <Text style={style.txt}>{text}</Text>
  )
}

const style=StyleSheet.create({
    txt:{
        color:'black',
        fontFamily:'Roboto-Medium',
        fontSize:12,
        marginTop:10
    }
})