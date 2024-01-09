import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

export default function OrderConfirmed() {
  return (
    <View style={styles.screen}>
        <View style={styles.box}>
        <Icon name="checkcircle" size={62} color="black"></Icon>
        <Text style={styles.bgText}>Order Placed</Text>
        <View style={{width:'85%'}}>
        <Text style={styles.smtext}>Your Order was Placed Successfully.It is Now Very Easy To Reach The Best Quality Among All The Products On The Internet</Text>
        </View>
        <View style={styles.btncontainer}>
         <Text style={{color:'white',fontWeight:'bold'}}>ORDER MORE</Text>
        </View>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    box:{
        borderWidth:1,
        borderColor:'black',
        height:'50%',
        width:'80%',
        borderColor:'#61BB78',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EDF8ED'
    },
    bgText:{
        color:'#61BB78',
        fontWeight:'700',
        // fontFamily:"Roboto-Medium",
        fontSize:28,
        marginTop:12
    },
    smtext:{
        marginTop:12,
        color:'grey',
        fontSize:12,
        lineHeight:20,
        textAlign:'center'
    },
    btncontainer:{
        backgroundColor:'#004401',
        paddingHorizontal:18,
        paddingVertical:12,
        borderRadius:22,
        marginTop:10
    }
})