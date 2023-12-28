import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import Card from '../components/Cart/Card'
import { data } from '../dummydata/bestseller'
import Info from '../components/Cart/Info'

export default function Cart() {
  return (
    <View style={styles.screen}>
      <Card data={data[0]}></Card>
      <Card data={data[1]}></Card>
      <Info left='Subtotal' right='₹ 25 780.00'></Info>
      <Info left='Delivery' right='₹ 1 250.00'></Info>
      <Info isDark={true} left='Estimated Total' right='₹ 26 780.00' ></Info>
    </View>
  )
}

const styles=StyleSheet.create({
  screen:{
   flex:1,
   paddingVertical:24,
   backgroundColor:'white',
   paddingHorizontal:18
  },
})