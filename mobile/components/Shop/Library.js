import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ShoeCard from './ShoeCard'
import { data } from '../../dummydata/bestseller'
import Button from './Button'
import { useNavigation } from '@react-navigation/native';
// BestSeller

export default function Library() {

  const navigation=useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <ShoeCard value={data[0]}></ShoeCard>
        <ShoeCard value={data[1]}></ShoeCard>
        <ShoeCard value={data[2]}></ShoeCard>
      </View>
      <View style={styles.container}>
       <ShoeCard value={data[4]}></ShoeCard>
        <ShoeCard value={data[5]}></ShoeCard>
        <ShoeCard value={data[3]}></ShoeCard>
      </View>
      <View style={styles.btnContainer}>
        <Button title="View All" style={styles.btn1} onPress={() => {navigation.navigate('BestSeller')}} ></Button>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:5,
        marginTop:40,
        justifyContent:'space-around',
    },
    btnContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:16
    },
    btn1: {
      backgroundColor: 'white',
      alignSelf: 'flex-start',
      borderRadius: 20,
      // marginTop: 20,
    }
})