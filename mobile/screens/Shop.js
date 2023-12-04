import { View,ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import Title from '../components/Shop/Title'
import Card from '../components/Shop/Card'
import Library from '../components/Shop/Library'
import Brand from '../components/Shop/Brand'

export default function Shop() {
  return (
    <ScrollView style={style.screen}>
      <Title title="This Week's Highlights"></Title>
      <View style={style.cardContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Card src='https://i.ibb.co/Xs6dHQP/ee1b42b1-bc89-44ef-8d91-c27623a3843d.webp' text="Air Jordon 1 'Light Olive'"></Card>
        <Card src='https://i.ibb.co/G2Rg0kL/one.png' text="Air Luka2 'Caves' PF"></Card>
        <Card src='https://i.ibb.co/Rv8y667/usama-akram-k-P6kn-T7tjn4-unsplash.jpg' text="NikeCourt AirZoom"></Card>
        <Card src='https://i.ibb.co/yRJQxqB/e5af6045b77004da36a712bab87c9bd5714e2281-1536x1536.webp' text="Puma Speedcat Unisex"></Card>
        <Card src='https://i.ibb.co/wQDvNpn/F8-g-Ge-Xo-AAmli-Z.jpg' text="Reebok 2023 Classic"></Card>
        <Card src='https://i.ibb.co/55VLd97/24791c74b0a5e1fbd671885f9282376c.jpg' text="Adidas RUNFALCON 3.0"></Card>
      </ScrollView>
      </View>
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