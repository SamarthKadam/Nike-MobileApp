import { View, StyleSheet,ToastAndroid,Dimensions,FlatList} from 'react-native'
import React, { useEffect,useState} from 'react'
import Card from '../components/Favourites/Card'
import HeaderRight from '../components/Favourites/HeaderRight'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
import { useQuery, gql,useMutation } from '@apollo/client';
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

const REMOVEFROM_FAV=gql`
mutation AddToFavourites( $id: ID!, $shoeId: ID!) {
  removefromFavourites(id: $id, shoeId: $shoeId) {
    name
  }
}`;

export default function Favourites({navigation}) {

  const id=useSelector((state)=>state.user.id);
  const dispatch=useDispatch();
  const isFocused = useIsFocused();
  const [Favourites,setFavourites]=useState([])
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

  const [removeFavMutation,{loading:mutationLoading,data:mutationdata}] = useMutation(REMOVEFROM_FAV);

  useEffect(()=>{
    if(isFocused)
    {
      refetch();
      setFavourites(data.userInfo.favourites);
    }
  },[isFocused,data])

  useEffect(()=>{
    if(data===undefined)
    return;
    setFavourites(data.userInfo.favourites);
  },[data])


  const showToast = () => {
    ToastAndroid.show('Successfully removed !', ToastAndroid.SHORT);
  };

  const REMOVEFROMFAVOURTIES=async(shoeId)=>{
    try {
      const { data } = await removeFavMutation({
      variables: { id, shoeId },
      });
      showToast();
      } catch (error) {
      console.error('Error:', error);
      }
  }


  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  const UndoHandler=(id)=>{
    REMOVEFROMFAVOURTIES(id);
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
