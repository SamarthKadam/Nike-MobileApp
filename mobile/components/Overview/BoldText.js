import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BoldText({title}) {
  return (
      <Text style={styles.txt}>{title}</Text>
  )
}
const styles=StyleSheet.create({
txt:{
    fontFamily:'Roboto-Medium',
    color:'black',
    fontSize:28
}
})