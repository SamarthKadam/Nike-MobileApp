import { View, StyleSheet,Dimensions, Image } from 'react-native'
import SmText from './SmText';
import React from 'react'
import LightText from './LightText';
const DeviceWidth=Dimensions.get('window').width;
const componentWidth=(DeviceWidth/3)-20;
export default function ShoeCard(value) {
  return (
    <View style={style.container}>
      <Image style={style.img} source={{uri:value.data.gallery[0]}}></Image>
      <SmText text={value.data.name}></SmText>
      <LightText text={value.data.price}></LightText>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        width:componentWidth,
    },
    img:{
        aspectRatio:700/288,
    },
})