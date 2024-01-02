import { View, Image,Text, StyleSheet,Dimensions,ActivityIndicator} from 'react-native'
import React from 'react'
import Heart from './Heart';
const DeviceWidth=Dimensions.get('screen').width;
const content=(DeviceWidth/2)-20;
import Ripple from 'react-native-material-ripple'

export default function Card({brand,gallery,name,isEditing,undo,id,price}) {


  return (
    <Ripple onPress={isEditing&&undo.bind(this,id)} >
    <View style={styles.container}>
        <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri:gallery}}></Image>
        </View>
        <Text style={[styles.coltxt,{alignSelf:'flex-start'}]}>{brand}</Text>
        <Text style={[styles.txt,{alignSelf:'flex-start'}]}>{name}</Text>
        <Text style={[styles.txt,{alignSelf:'flex-start'}]} >₹{price}</Text>
        {isEditing&&<Heart></Heart>}
    </View>
    </Ripple>
  )
}

const styles=StyleSheet.create({
    container:{
        width:content,
        marginHorizontal:5,
        marginVertical:5,
        alignItems:'center',
        },
    imgContainer:{
        height:130,
        width:content-10,
        justifyContent:"flex-end",
        marginBottom:10,
    },
    img:{
        aspectRatio:700/288,
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