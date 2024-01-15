import { View,ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import Title from '../components/Shop/Title'
import Library from '../components/Shop/Library'
import Brand from '../components/Shop/Brand'
import ProductSlider from '../components/Shop/ProductSlider'
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action'
import { useEffect } from 'react'
import { useQuery, gql,useMutation} from '@apollo/client';
import { useSelector } from 'react-redux'
import { InitializeFavourites,InitializeCartItems} from '../store/actions/user/action'

const GET_FAVOURITES_QUERY = gql`
  query getFavourites($id: ID!) {
    userInfo(id: $id) {
      favourites {
        id,
      },
      cartItems{
        shoe {
          id,
        },
        count
      }
    }
  }
`;



export default function Shop() {

  const id=useSelector((state)=>state.user.id);
  const isFocused = useIsFocused();
  const dispatch=useDispatch();
  const { loading, error, data,refetch} = useQuery(GET_FAVOURITES_QUERY, {
    variables: { id:id },
  });


  useEffect(()=>{
    if(data===undefined)
    return

    dispatch(InitializeCartItems(data.userInfo.cartItems));
    dispatch(InitializeFavourites(data.userInfo.favourites));
  },[data])

  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(true));
  },[isFocused])


  return (
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode={'never'} style={style.screen}>
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