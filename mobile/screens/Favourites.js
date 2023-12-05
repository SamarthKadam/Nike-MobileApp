import { View, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Favourites/Card'
import { data } from '../dummydata/bestseller'

export default function Favourites() {
  return (
    <View style={styles.screen}>
      <Card value={data[0]}></Card>
    </View>
  )
}

const styles=StyleSheet.create({
  screen:{
    flex:2
  }
})