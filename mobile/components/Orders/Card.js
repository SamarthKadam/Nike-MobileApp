import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import { data } from '../../dummydata/bestseller'
import { Dimensions } from 'react-native'
import Ripple from 'react-native-material-ripple';
const width=Dimensions.get('screen').width;
export default function Card({data}) {
  return (
    <Ripple style={styles.container}>
     <View style={styles.imgContainer}><Image style={styles.img} source={{uri:data.gallery[0]}}></Image></View>
     <View style={styles.txtContainer}>
        <Text style={[styles.darktxt,{color:'#4A8B3F'}]}>Shipped</Text>
        <Text style={{color:'grey'}}>Expect Delivery By 18 Dec</Text>
        <Text style={[styles.darktxt,{color:'black'}]}>{data.brand.trim()} {data.name}</Text>
        <Text style={{color:'grey',marginTop:4}}>Size L</Text>
     </View>
    </Ripple>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        marginVertical:8,
        justifyContent:'space-between'
    },
    img:{
        width:'100%',
        aspectRatio:700/288
    },
    imgContainer:{
        width:(width/2)-10,
    },
    txtContainer:{
        width:'50%',
        paddingHorizontal:12,
    },
    darktxt:{
        fontFamily:"DMSans",
        fontWeight:"700",
    }
})