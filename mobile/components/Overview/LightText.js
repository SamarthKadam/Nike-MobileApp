import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LightText({title}) {
  return (
      <Text style={styles.txt}>{title}</Text>
  )
}
const styles=StyleSheet.create({
    txt:{
        color:'grey',
        fontSize:13
    }
})