import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import {FlatListSlider} from 'react-native-flatlist-slider';
const width=Dimensions.get('window').width;

export default function Gallery({images}) {

  const modifiedImages=images.map((val)=>{
    return {
      image:val,
    }
  })
  modifiedImages.length=2;
  return (
    <View style={styles.container} >
      {/* <Image style={styles.img} source={{uri:images[0]}}></Image> */}
      <FlatListSlider    indicatorActiveColor={'#000000'}
    indicatorInActiveColor={'#D4D4D4'} onPress={()=>{console.log("clicked")}} contentContainerStyle={styles.sliderContentContainer} width={width} height={170} autoscroll={false} data={modifiedImages} ></FlatListSlider>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:width,
        height:400,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'white',
        alignItems:'center',
    },
    // img:{
    //     width:width-20,
    //     aspectRatio:668/288
    // },
    sliderContentContainer: {
      alignItems: 'center', // Center content horizontally
      justifyContent:'center'
    },

})