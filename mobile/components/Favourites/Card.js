import { View, Image,Text, StyleSheet,Dimensions,ActivityIndicator} from 'react-native'
import React from 'react'
const DeviceWidth=Dimensions.get('screen').width;
const content=(DeviceWidth/2)-20;
import Ripple from 'react-native-material-ripple'

export default function Card({brand,gallery,name}) {

  return (

    <Ripple>
    <View style={styles.container}>
        <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri:gallery}}></Image>
        </View>
        <Text style={styles.coltxt}>{brand}</Text>
        <Text style={styles.txt}>{name}</Text>
        <Text style={styles.txt} >₹8,685</Text>
    </View>
    </Ripple>
  )
}

const styles=StyleSheet.create({
    container:{
        width:content,
        marginHorizontal:5
        },
    imgContainer:{
        height:130,
        width:content,
        justifyContent:"flex-end",
        marginBottom:10
    },
    img:{
        aspectRatio:700/288
    },
    txt:{
        color:'black',
        fontSize:14,
        fontWeight:'600'
    },
    coltxt:{
        color:'#B63D22',
        fontFamily:'Roboto-Medium',
        fontSize:16
    }

})