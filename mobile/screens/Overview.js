import {View, ScrollView, ToastAndroid, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import React from 'react';
import Gallery from '../components/Overview/Gallery';
import BoldText from '../components/Overview/BoldText';
import MdText from '../components/Overview/MdText';
import LightText from '../components/Overview/LightText';
import Description from '../components/Overview/Description';
import HeaderRight from '../components/Shop/HeaderRight';
import {Picker} from '../components/Overview/Picker';
import Button from '../components/Overview/Button';
import {useQuery, gql, useMutation} from '@apollo/client';
import {ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {AddToFavourites,AddToCartItems} from '../store/actions/user/action';

const SHOE_OVERVIEW_QUERY = gql`
  query ShoeOverview($id: ID!) {
    shoe(id: $id) {
      id
      name
      brand
      gallery
      price
      description
    }
  }
`;

const ADDTOFAV_MUTATION = gql`
  mutation AddToFavourites($id: ID!, $shoeId: ID!) {
    addToFavourites(id: $id, shoeId: $shoeId) {
      name
    }
  }
`;

const ADDTOCART_MUTATION=gql`
mutation AddToCart($id: ID!, $shoeId: ID!) {
  addToCart(id:$id,shoeId:$shoeId){
    name,
    cartItems{
      shoe {
        id,
        name
      },
      count
    }
  }
}`

export default function Overview({navigation}) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.user.id);
  const favouriteId = useSelector(state => state.user.favourites);
  const cartId=useSelector(state=>state.user.cartItems)
  const route = useRoute();
  const {shoeId} = route.params;
  useEffect(() => {
    navigation.setOptions({headerRight: () => <HeaderRight></HeaderRight>});
  }, []);

  const {loading, error, data, refetch} = useQuery(SHOE_OVERVIEW_QUERY, {
    variables: {id: shoeId},
  });

  const [addFavMutation, {loading: mutationLoading, data: mutationdata}] =
    useMutation(ADDTOFAV_MUTATION);

  const [addCartMutation,{loading:cartmutationLoading,data:cartmutationdata}]=useMutation(ADDTOCART_MUTATION)

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const ADDTOFAVOURTIES = async () => {
    if (favouriteId.includes(shoeId))
      return showToast('Already in Favourites !');

    try {
      const {data} = await addFavMutation({
        variables: {id, shoeId},
      });
      dispatch(AddToFavourites(shoeId));
      showToast('Added To Favourites !');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const ADDTOCART=async()=>{
    if (cartId.includes(shoeId))
    return showToast('Already in Cart!');

  try {
    const {data} = await addCartMutation({
      variables: {id, shoeId},
    });
    dispatch(AddToCartItems(shoeId));
    showToast('Added To Cart !');
  } catch (error) {
    console.error('Error:', error);
  }
  }

  return (
    <ScrollView style={styles.screen}>
      <Gallery images={data.shoe.gallery}></Gallery>
      <View style={styles.btmContainer}>
        <MdText title={`${data.shoe.brand} Shoes`}></MdText>
        <BoldText title={data.shoe.name}></BoldText>
        <MdText style={styles.mdTextStyle} title={`MRP : ₹ ${data.shoe.price}.00`}></MdText>
        <LightText title="Incl of taxes (Also includes all applicable duties)"></LightText>
        <Description description={data.shoe.description}></Description>
        <View style={{marginBottom: 10}}>
          <LightText title="View Product Details"></LightText>
        </View>
        <Picker></Picker>
        <Button
        onPress={ADDTOCART}
          btnStyle={styles.button1Container}
          txtStyle={styles.button1txt}
          title={'Add to Bag'}></Button>
        <Button
          onPress={ADDTOFAVOURTIES}
          isColored={favouriteId.includes(shoeId)}
          isfav={1}
          btnStyle={styles.button2Container}
          txtStyle={styles.button2txt}
          title={'Favourite '}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  btmContainer: {
    paddingHorizontal: 10,
  },
  mdTextStyle: {
    marginTop: 10,
  },
  button1Container: {
    backgroundColor: 'black',
    marginVertical: 10,
  },
  button2Container: {
    borderWidth: 1,
    marginVertical: 10,
  },
  button2txt: {
    color: 'black',
  },
  button1txt: {
    color: 'white',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
