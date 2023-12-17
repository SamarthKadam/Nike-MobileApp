import {  Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MdText({title,style}) {
  return (
      <Text style={[styles.txt,style]}>{title}</Text>
  )
}
const styles=StyleSheet.create({
txt:{
    fontFamily:'Roboto',
    color:'black',
    fontSize:17
}
})