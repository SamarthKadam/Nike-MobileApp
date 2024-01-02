import { View,ScrollView, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import React from 'react'
import Gallery from '../components/Overview/Gallery'
import BoldText from '../components/Overview/BoldText'
import MdText from '../components/Overview/MdText'
import LightText from '../components/Overview/LightText'
import Description from '../components/Overview/Description'
// import { data } from '../dummydata/bestseller'
import HeaderRight from '../components/Shop/HeaderRight'
import { Picker } from '../components/Overview/Picker'
import Button from '../components/Overview/Button'
import { useQuery, gql,useMutation} from '@apollo/client';
import { ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux'


const SHOE_OVERVIEW_QUERY = gql`
  query ShoeOverview($id: ID!) {
    shoe(id: $id) {
      id,
      name,
      brand,
      gallery,
      price,
      description
    }
  }
`;

const ADDTOFAV_MUTATION=gql`
mutation AddToFavourites( $id: ID!, $shoeId: ID!) {
  addToFavourites(id: $id, shoeId: $shoeId) {
    name
  }
}`;


export default function Overview({navigation}) {

  const id=useSelector((state)=>state.user.id);
  const route=useRoute();
  const { shoeId } = route.params;
  useEffect(()=>{
    navigation.setOptions({headerRight:()=><HeaderRight></HeaderRight>})
  },[])

  const { loading, error, data,refetch} = useQuery(SHOE_OVERVIEW_QUERY, {
    variables: { id:shoeId },
  });

  const [addFavMutation,{loading:mutationLoading,data:mutationdata}] = useMutation(ADDTOFAV_MUTATION);



  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  const ADDTOFAVOURTIES=async()=>{
    try {
      const { data } = await addFavMutation({
      variables: { id, shoeId },
      });
      } catch (error) {
      console.error('Error:', error);
      }
  }

  return (
    <ScrollView style={styles.screen}>
      <Gallery images={data.shoe.gallery}></Gallery>
      <View style={styles.btmContainer}>
        <MdText title={`${data.shoe.brand}Shoes`}></MdText>
        <BoldText title={data.shoe.name}></BoldText>
        <MdText style={styles.mdTextStyle} title='MRP : ₹ 8,685.00'></MdText>
        <LightText title='Incl of taxes (Also includes all applicable duties)'></LightText>
        <Description description={data.shoe.description}></Description>
        <View style={{marginBottom:10}}>
        <LightText title='View Product Details'></LightText>
        </View>
        <Picker></Picker>   
        <Button btnStyle={styles.button1Container} txtStyle={styles.button1txt} title={'Add to Bag'} ></Button>
        <Button onPress={ADDTOFAVOURTIES} isfav={1} btnStyle={styles.button2Container} txtStyle={styles.button2txt} title={'Favourite '} ></Button>
      </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
   screen:{
    flex:1,
    backgroundColor:'white'
   },
   btmContainer:{
    paddingHorizontal:10,
   },
   mdTextStyle:{
    marginTop:10
   },
   button1Container:{
    backgroundColor:'black',
    marginVertical:10
   },
   button2Container:{
    borderWidth:1,
    marginVertical:10
   },
   button2txt:{
    color:'black'
   },
   button1txt:{
    color:'white'
   },
   loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})