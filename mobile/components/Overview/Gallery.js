import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { data } from '../../dummydata/bestseller'
import { Dimensions } from 'react-native'
const width=Dimensions.get('window').width;

export default function Gallery({images}) {

  return (
    <View style={styles.container} >
      <Image style={styles.img} source={{uri:images[0]}}></Image>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:width,
        height:300,
        justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center'
    },
    img:{
        width:width-20,
        aspectRatio:668/288
    }

})