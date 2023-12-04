import {  StyleSheet, Text } from 'react-native'
import React from 'react'

export default function LightText({text}) {
  return (
      <Text style={style.txt}>MRP:₹{text}</Text>
  )
}
const style=StyleSheet.create({
    txt:{
        color:'#6B6B6B',
        marginTop:5
    }
})