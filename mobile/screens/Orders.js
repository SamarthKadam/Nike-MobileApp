import { ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';
import Card from '../components/Orders/Card';
import { data } from '../dummydata/bestseller';
export default function Orders() {

  return (
    <ScrollView style={styles.screen}>
      <Card data={data[0]}></Card>
      <Card data={data[1]}></Card>
    </ScrollView>
  );
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:24,
    backgroundColor:'white'
  }
})