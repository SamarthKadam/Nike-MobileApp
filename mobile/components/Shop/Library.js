import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ShoeCard from './ShoeCard'
import { data } from '../../dummydata/bestseller'
import Button from './Button'

export default function Library() {
  return (
    <View>
      <View style={styles.container}>
        <ShoeCard data={data[0]}></ShoeCard>
        <ShoeCard data={data[1]}></ShoeCard>
        <ShoeCard data={data[2]}></ShoeCard>
      </View>
      <View style={styles.container}>
       <ShoeCard data={data[4]}></ShoeCard>
        <ShoeCard data={data[5]}></ShoeCard>
        <ShoeCard data={data[3]}></ShoeCard>
      </View>
      <View style={styles.btnContainer}>
        <Button title="View All" style={styles.btn1} onPress={() => {}} ></Button>
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