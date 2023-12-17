import { View, StyleSheet,Dimensions, Image,ActivityIndicator} from 'react-native'
import SmText from './SmText';
import React from 'react'
import LightText from './LightText';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
const DeviceWidth=Dimensions.get('window').width;
const componentWidth=(DeviceWidth/3)-20;
export default function ShoeCard(value) {

  const navigation=useNavigation();

  return (
    <Ripple onPress={()=>{navigation.navigate('Overview')}}>
    <View style={style.container}>
      <Image style={style.img} source={{uri:value.data.gallery[0]}}></Image>
      <SmText text={`${value.data.brand}:${value.data.name}`}></SmText>
      <LightText text={value.data.price}></LightText>
    </View>
    </Ripple>
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