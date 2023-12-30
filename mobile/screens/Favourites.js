import { View, StyleSheet,Dimensions,FlatList} from 'react-native'
import React, { useEffect,useState} from 'react'
import Card from '../components/Favourites/Card'
import HeaderRight from '../components/Favourites/HeaderRight'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
const width=Dimensions.get('screen').width

export default function Favourites({navigation}) {

  const dispatch=useDispatch();
  const isFocused = useIsFocused();

  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(false));
  },[isFocused])
  

  const [isEditing,setEditing]=useState(false);

  const [data,setData]=useState([
    {
        id:'0',
        brand: "Nike ",
        name: "Revolution 5 Running Shoes For Men",
        description: "The Revolution 5 Running Shoes for Men offer superior comfort and performance. These sleek and stylish shoes feature advanced cushioning for a smooth stride, making them the perfect choice for your runs.",
        gallery:[
          "https://i.ibb.co/KG78PnL/1nike1.png",
          "https://i.ibb.co/JFsz7Z0/2nike2.png",
          "https://i.ibb.co/xFYDHLv/3nike3.png",
          "https://i.ibb.co/wgPj6g1/4nike4.png"
        ],
        price: "1,799",
        sizes: [6, 7, 8, 9, 10, 11, 12]
      },
      {
        id:'1',
        brand: "Nike",
        name: "Air Max SC Men's Shoes Sneakers For Men ",
        description: "Air Max SC Men's Shoes - the perfect blend of style and comfort. With iconic Air Max cushioning, they offer exceptional support and timeless design, ideal for fashion-forward men.",
        gallery: [
          "https://i.ibb.co/RySQ2HX/nike1.png",
          "https://i.ibb.co/QvrL6wq/nike2.png",
          "https://i.ibb.co/m4SqZVR/nike3.png",
          "https://i.ibb.co/WV5XfP5/nike4.png"
        ],
        price: "5,885",
        sizes: [6, 7, 8, 9, 10, 11, 12]
      },
      {
        id:'2',
        brand: "Puma",
        name: "Amaze Runner Sneakers For Men",
        description: " Amaze Runner Sneakers for Men: A perfect blend of style and comfort for men on the go.",
        gallery: [
          "https://i.ibb.co/8zy6bN4/puma1.png",
          "https://i.ibb.co/ZzmG9FW/puma2.png",
          "https://i.ibb.co/3vzX3KT/puma3.png",
          "https://i.ibb.co/PM7RdKb/puma4.png"
        ],
        price: "2,589",
        sizes: [6, 7, 8, 9, 10, 11, 12]
      },
      {
        id:'3',
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
      {
        id:'4',
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
      {
        id:'5',
        brand: "Reebok",
        name: "Stride Runner M Running Shoes For Men ",
        description: "The Reebok Stride Runner M Running Shoes for Men are a fantastic combination of style and performance. These shoes feature a sleek and contemporary design, making them a fashionable choice for running and daily activities. Prioritizing comfort, they provide excellent cushioning and support for a smooth and comfortable running experience.",
        gallery: [
          "https://i.ibb.co/3CDLtfz/reebok1.png",
          "https://i.ibb.co/whfxqFV/reebok2.png",
          "https://i.ibb.co/TR1GT3c/reebok3.png",
          "https://i.ibb.co/6nQB91t/reebok4.png"
        ],
        price: "1,332",
        sizes: [6, 7, 8, 9, 10, 11, 12]
      }
  ])

  const UndoHandler=(id)=>{
    setData((data)=>data.filter((val)=>val.id!==id))
  }

  const EditFavourites=()=>{
    setEditing((value)=>!value);
  }

  useEffect(()=>{
    navigation.setOptions({headerRight:()=><HeaderRight isEditing={isEditing} onEditPress={EditFavourites}></HeaderRight>})
  },[isEditing])
  return (
    <View style={styles.screen}>
      <FlatList data={data}
      key={'#'}
      keyExtractor={(item,index)=>"#"+index}
      numColumns={2}
      contentContainerStyle={styles.flatlist}
      renderItem={({ index, item }) => (
        <Card id={item.id} undo={UndoHandler} isEditing={isEditing} name={item.name} brand={item.brand} gallery={item.gallery[0]} />
        )}
      >
      </FlatList>
    </View>
  )
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    width:width,
    backgroundColor:'white',
    paddingHorizontal:10
  },
  flatlist:{
    // alignItems:'center'
  }
})
