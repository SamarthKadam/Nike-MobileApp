import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading() {
  return (
      <Text style={styles.txt}>NO MESSAGE YET</Text>
  )
}
const styles=StyleSheet.create({
    txt:{
        fontFamily:'Roboto-Medium',
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    }
})