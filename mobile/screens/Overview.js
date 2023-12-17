import { View, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import Gallery from '../components/Overview/Gallery'
import BoldText from '../components/Overview/BoldText'
import MdText from '../components/Overview/MdText'
import LightText from '../components/Overview/LightText'
import Description from '../components/Overview/Description'
import { data } from '../dummydata/bestseller'
import HeaderRight from '../components/Shop/HeaderRight'

export default function Overview({navigation}) {

  useEffect(()=>{
    navigation.setOptions({headerRight:()=><HeaderRight></HeaderRight>})
  },[])


  return (
    <View style={styles.screen}>
      <Gallery></Gallery>
      <View style={styles.btmContainer}>
        <MdText title={`${data[0].brand}Shoes`}></MdText>
        <BoldText title={data[0].name}></BoldText>
        <MdText style={styles.mdTextStyle} title='MRP : ₹ 8,685.00'></MdText>
        <LightText title='Incl of taxes (Also includes all applicable duties)'></LightText>
        <Description description={data[0].description}></Description>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
   screen:{
    flex:1,
    backgroundColor:'white'
   },
   btmContainer:{
    paddingHorizontal:10,
   },
   mdTextStyle:{
    marginTop:10
   }
})