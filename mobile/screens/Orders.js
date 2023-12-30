import { ScrollView, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Card from '../components/Orders/Card';
import { data } from '../dummydata/bestseller';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
export default function Orders() {

  const dispatch=useDispatch();
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(false));
  },[isFocused])

  return (
    <ScrollView style={styles.screen}>
      <Card data={data[0]}></Card>
      <Card data={data[1]}></Card>
    </ScrollView>
  );
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:24,
    backgroundColor:'white'
  }
})