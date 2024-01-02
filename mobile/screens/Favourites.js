import { View, StyleSheet,Dimensions,FlatList} from 'react-native'
import React, { useEffect,useState} from 'react'
import Card from '../components/Favourites/Card'
import HeaderRight from '../components/Favourites/HeaderRight'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
import { useQuery, gql } from '@apollo/client';
import { useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native';
const width=Dimensions.get('screen').width;
const GET_FAVOURITES_QUERY = gql`
  query getFavourites($id: ID!) {
    userInfo(id: $id) {
      favourites {
        id,
        name,
        brand,
        gallery,
        price
      }
    }
  }
`;

export default function Favourites({navigation}) {

  const id=useSelector((state)=>state.user.id);
  const dispatch=useDispatch();
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(false));
  },[isFocused])

  const EditFavourites=()=>{
    setEditing((value)=>!value);
  }
  const [isEditing,setEditing]=useState(false);

  useEffect(()=>{
    navigation.setOptions({headerRight:()=><HeaderRight isEditing={isEditing} onEditPress={EditFavourites}></HeaderRight>})
  },[isEditing])

  const { loading, error, data,refetch} = useQuery(GET_FAVOURITES_QUERY, {
    variables: { id:id },
  });

  useEffect(()=>{
    if(isFocused)
    refetch();
  },[isFocused])

  const [Favourites,setFavourites]=useState([])

  useEffect(()=>{
    if(data===undefined)
    return;
    setFavourites(data.userInfo.favourites);
  },[data])



  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  const UndoHandler=(id)=>{
    setFavourites((data)=>data.filter((val)=>val.id!==id))
  }
  return (
    <View style={styles.screen}>
      <FlatList data={Favourites}
      key={'#'}
      keyExtractor={(item,index)=>"#"+index}
      numColumns={2}
      contentContainerStyle={styles.flatlist}
      renderItem={({ index, item }) => (
        <Card id={item.id} undo={UndoHandler} price={item.price} isEditing={isEditing} name={item.name} brand={item.brand} gallery={item.gallery[0]} />
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
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
