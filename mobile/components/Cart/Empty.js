import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'


export default function Empty() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/images/svgImages/cart.png')}></Image>
      <Text style={styles.bgText}>Your Cart is Empty</Text>
      <View style={styles.txtContainer}>
      <Text style={styles.smText}>Looks like you have'nt added any products to your cart yet.</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:75,
        width:75,
        marginBottom:18
    },
    smText:{
        fontSize:13,
        color:'#9C9C9C',
        marginVertical:8,
        textAlign:'center'
    },
    bgText:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    txtContainer:{
        width:'60%',
    }
})