import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
const width=Dimensions.get('screen').width;

export default function Card({data}) {


  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
     <View style={styles.imgContainer}><Image style={styles.img} source={{uri:data.gallery[0]}}></Image></View>
     <View style={styles.txtContainer}>
        <Text style={[styles.darktxt,{color:'black'}]}>{data.brand.trim()} {data.name}</Text>
        <Text style={{color:'grey',marginTop:4}}>Size 7</Text>
     </View>
     </View>
     <View style={styles.btmContainer}>
        <View style={{width:'20%'}}>
        </View>
        <View>
        <Text style={[styles.darktxt,{textAlign:"right"}]}>MRP:₹ 10,785.00</Text>
        <Text style={[styles.lighttxt,{textAlign:"right"}]}>Incl. of taxes</Text>
        <Text style={[styles.lighttxt,{textAlign:"right"}]}>(Also includes all applicable duties)</Text>
        </View>
     </View>
     <View style={styles.line}></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:8,
    },
    img:{
        width:'100%',
        aspectRatio:700/288
    },
    imgContainer:{
        width:(width/3),
    },
    txtContainer:{
        width:'50%',
        paddingHorizontal:12,
    },
    darktxt:{
        fontFamily:"DMSans",
        fontWeight:"700",
        color:'black',
    },
    btmContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:12,
    },
    lighttxt:{
        fontWeight:'400',
        color:'#A9A9A9'
    },
    line:{
        marginVertical:8,
        height:1,
        width:'100%',
        backgroundColor:'#CCCCCC'
      }
})