import {  Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Description({description}) {
  return (
      <Text style={styles.txt}>{description}</Text>
  )
}
const styles=StyleSheet.create({
    txt:{
        marginTop:20,
        fontSize:16,
        color:'black',
        lineHeight:25,
        fontFamily:'Roboto'
    }
})