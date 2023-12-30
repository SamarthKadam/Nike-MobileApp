import { View, Text } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
import { useEffect } from 'react';

export default function Settings() {

  const dispatch=useDispatch();
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(false));
  },[isFocused])


  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}