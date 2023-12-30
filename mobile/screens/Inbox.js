import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '../components/Inbox/Heading'
import SmText from '../components/Inbox/SmText'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
import { useEffect } from 'react';

export default function Inbox() {

  const dispatch=useDispatch();
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(false));
  },[isFocused])


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