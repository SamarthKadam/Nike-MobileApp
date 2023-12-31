import { View, Image,Text, StyleSheet,Dimensions,ActivityIndicator} from 'react-native'
import React from 'react'
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height
const content=(DeviceWidth/2)-20;
const contentHeight=(DeviceHeight/5)
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native';

export default function Card({id,brand,gallery,name,price}) {

  const navigation=useNavigation();

  return (
    <Ripple onPress={()=>{navigation.navigate('Overview',{shoeId:id})}}>
    <View style={styles.container}>
        <View style={styles.imgContainer}>
        <Image style={[styles.img,name==='ExcelCourt M Basketball Shoes For Men '&&{aspectRatio:640/382}]} source={{uri:gallery}}></Image>
        </View>
        <Text style={styles.txt}>{brand}</Text>
        <Text style={styles.lighttxt}>{name}</Text>
        <Text style={styles.txt} >MRP : ₹{price}</Text>
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
        height:contentHeight,
        width:content,
        justifyContent:"center",
        marginBottom:10,
    },
    img:{
        aspectRatio:720/300
    },
    txt:{
        color:'black',
        fontSize:14,
        fontWeight:'600'
    },
    lighttxt:{
        fontSize:13,
        color:'grey'
    },
    coltxt:{
        color:'#B63D22',
        fontFamily:'Roboto-Medium',
        fontSize:16
    }

})