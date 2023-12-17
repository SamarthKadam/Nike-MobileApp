import { View, StyleSheet,Dimensions,FlatList} from 'react-native'
import React, { useEffect,useState} from 'react'
import Card from '../components/Favourites/Card'
import { data } from '../dummydata/bestseller'
import HeaderRight from '../components/Favourites/HeaderRight'
const width=Dimensions.get('screen').width
export default function Favourites({navigation}) {

  const [isEditing,setEditing]=useState(false);

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
        <Card isEditing={isEditing} name={item.name} brand={item.brand} gallery={item.gallery[0]} />
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
    alignItems:'center'
  }
})
