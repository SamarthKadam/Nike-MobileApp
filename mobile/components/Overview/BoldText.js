import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BoldText({title}) {
  return (
      <Text style={styles.txt}>{title}</Text>
  )
}
const styles=StyleSheet.create({
txt:{
    fontFamily:'DMSans',
    color:'black',
    fontWeight:'bold',
    fontSize:24
}
})