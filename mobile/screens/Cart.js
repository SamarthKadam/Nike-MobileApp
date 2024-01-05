import { ScrollView,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import Card from '../components/Cart/Card'
import Info from '../components/Cart/Info'
import { getPrice,toNumber,formatToPrice, generateRandomNumber} from '../helper'
import Button from '../components/Cart/Button'

export default function Cart() {


   const[data,setData]=useState([{
    shoe:{
    id:"6581beb544d439dab8a2fe4a",
    "brand": "Reebok",
    "name": "Run Gazele Running Shoes For Men",
    "description": "The Reebok Run Gazele Running Shoes for Men are the ultimate choice for runners and active individuals. These shoes offer a perfect combination of style and performance. With their dynamic design and vibrant flair, they are sure to turn heads.",
    "gallery": [
      "https://i.ibb.co/1nQczs5/reebok1.png",
      "https://i.ibb.co/0yQJgXD/reebok2.png",
      "https://i.ibb.co/QfbxNM3/reebok3.png",
      "https://i.ibb.co/QJDLL11/reebok4.png"
    ],
    "price": "2,371",
    "sizes": [6, 7, 8, 9, 10, 11, 12]
  },
  count:1
  },
  {
    shoe:{
    id:"6581bea544d439dab8a2fe40",
    brand: "Puma",
    name: "Flair 2 Running Shoes For Men",
    description: "The PUMA Flair 2 Running Shoes for Men are the ultimate choice for runners and active individuals. These shoes offer a perfect combination of style and performance. With their dynamic design and vibrant flair, they are sure to turn heads. ",
    gallery: [
      "https://i.ibb.co/MnmqW2R/puma1.png",
      "https://i.ibb.co/jWsmMGL/puma2.png",
      "https://i.ibb.co/G3rKWxH/puma3.png",
      "https://i.ibb.co/LRkjRky/puma4.png"
    ],
    price: "1,499",
    sizes: [6, 7, 8, 9, 10, 11, 12]
  },
  count:1
  }])

  const price1=toNumber(getPrice(data[0].shoe.price));
  const price2=toNumber(getPrice(data[1].shoe.price));
  // console.log(formatToPrice(price1+price2))


  let price=0;
  const totalPrice=data.forEach((value)=>{
    const numberPrice=toNumber(getPrice(value.shoe.price));
    price+=numberPrice*value.count
  })

  const onIncrement=(id,count)=>{

    setData((data)=>{
      const modifieddata=data.map((val)=>{
        if(val.shoe===id)
        return {...val,count:count}
        else
        return val;
      })
      return modifieddata;
    })
  }

  const onDecrement=(id,count)=>{
    console.log("decrement the shoe of id",id,"with count",count);
  }

  console.log(data);



  return (
    <ScrollView style={styles.screen}>
      {data.map((val,index)=><Card onIncrement={onIncrement} onDecrement={onDecrement} count={val.count} key={index} data={val.shoe}></Card>)}
      <Info left='Subtotal' right={formatToPrice(price)}></Info>
      <Info left='Delivery' right={formatToPrice(1250)}></Info>
      <Info isDark={true} left='Estimated Total' right={formatToPrice(price+1250)} ></Info>
      <Button onPress={()=>{}} title='Checkout'></Button>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  screen:{
   flex:1,
   paddingVertical:24,
   backgroundColor:'white',
   paddingHorizontal:18
  },
})