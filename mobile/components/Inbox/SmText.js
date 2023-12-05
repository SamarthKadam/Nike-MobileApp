import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SmText() {
  return (
      <Text style={styles.txt}>Messages and notification from Nykee will show up here</Text>
  )
}

const styles=StyleSheet.create({
    txt:{
        fontFamily:'Roboto-Regular',
        fontSize:12,
        color:'grey',
        textAlign:'center',
        marginTop:10
    }
})