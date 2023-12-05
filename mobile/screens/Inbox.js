import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '../components/Inbox/Heading'
import SmText from '../components/Inbox/SmText'

export default function Inbox() {
  return (
    <View style={styles.screen}>
      <View style={styles.txtContainer}>
      <Heading></Heading>
      <SmText></SmText>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
   screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   },
   txtContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:'80%'
   }
})