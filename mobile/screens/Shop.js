import { View,ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import Title from '../components/Shop/Title'
import Library from '../components/Shop/Library'
import Brand from '../components/Shop/Brand'
import ProductSlider from '../components/Shop/ProductSlider'

export default function Shop() {
  return (
    <ScrollView overScrollMode={'never'} style={style.screen}>
      <Title title="This Week's Highlights"></Title>
      <ProductSlider></ProductSlider>
      <View style={style.showCaseContainer}>
        <Title title='Our Bestsellers'></Title>
        <Library></Library>
      </View>
      <View style={style.brandContainer}>
        <Title title='Shop by Brand'></Title>
      <Brand></Brand>
      </View>
    </ScrollView>
  )
}

const style=StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingTop:10,
  },
  cardContainer:{
    marginTop:26,
  },
  showCaseContainer:{
    marginTop:10
  },
  brandContainer:{
    marginTop:16,
    marginBottom:16
  }
})