import { View, Image, StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import Puma from '../../assets/images/svgImages/puma.svg'
import Adidas from '../../assets/images/svgImages/adidas.svg'
import Nike from '../../assets/images/svgImages/nike.svg'
import Reebok from '../../assets/images/svgImages/reebok.svg'

const DeviceWidth=Dimensions.get('window').width
const boxWidth=(DeviceWidth/2)-20;
export default function Brand() {
  return (
    <View style={styles.container}>
     <View style={{flexDirection:'row'}}>
        <View style={[styles.box,styles.box1]}><Puma height={90} width={90}></Puma></View>
        <View style={[styles.box,styles.box2]}><Adidas height={90} width={90}></Adidas></View>
     </View>
     <View style={{flexDirection:'row'}}>
        <View style={[styles.box,styles.box3]}><Nike height={90} width={90}></Nike></View>
        <View style={styles.box}><Reebok height={90} width={90}></Reebok></View>
     </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginTop:10
    },
    box:{
        height:boxWidth,
        width:boxWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    box1:{
        borderBottomWidth:0.5,
        borderRightWidth:0.5,
        borderColor:'grey'
    },
    box2:{
        borderBottomWidth:0.5,
        borderColor:'grey'
    },
    box3:{
        borderRightWidth:0.5,
        borderColor:'grey'
    }
})