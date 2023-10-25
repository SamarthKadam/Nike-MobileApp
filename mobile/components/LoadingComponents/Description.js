import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/svgImages/nike_logo.svg'

export default function Description() {
  return (
    <View style={styles.container}>
      <Logo height={80} width={80}></Logo>
      <Text style={styles.txt}>Bringing Nyke Members the best products,inspiration and stories in sport.</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        height:'35%',
        width:'85%',
        position:'absolute',
        bottom:0,
        paddingHorizontal:15,
    },
    txt:{
        color:'white',
        fontSize:22,
        lineHeight:28,
        fontWeight:'600'
    }
})