import { View, Image,Text, StyleSheet,Dimensions,ActivityIndicator} from 'react-native'
import React from 'react'
const DeviceWidth=Dimensions.get('screen').width;
const content=DeviceWidth/2

export default function Card(value) {

  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri:value.value.gallery[0]}}></Image>
        </View>
        <Text>Nike Dunk Low</Text>
        <Text>Rs:8,685</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        },
    imgContainer:{
        height:150,
        width:content,
        justifyContent:'center'
    },
    img:{
        aspectRatio:700/288
    }
})