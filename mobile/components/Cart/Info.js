import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Info({left,right,isDark}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt,isDark&&{color:'black',fontWeight:"700"}]}>{left}</Text>
      <Text style={[styles.txt,isDark&&{color:'black',fontWeight:"700"}]}>{right}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:4
    },
    txt:{
        color:'#A9A9A9'
    }
})