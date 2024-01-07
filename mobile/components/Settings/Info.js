import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Info({val,ans}) {
  return (
    <View style={styles.container}>
      <Text style={styles.key}>{val}</Text>
      <Text style={styles.value}>{ans}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        borderBottomWidth:1,
        paddingVertical:16,
        borderBottomColor:'#ADADAD'
    },
    key:{
      color:'black',
      fontSize:15
    },
    value:{
      fontSize:15,
      color:'#E18A42'
    }
})