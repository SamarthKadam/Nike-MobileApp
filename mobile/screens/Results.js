import {View, StyleSheet, Dimensions, FlatList,Text} from 'react-native';
import { useEffect } from 'react';
import React from 'react';
import Card from '../components/Results/Card';
import HeaderRight from '../components/Shop/HeaderRight';
import { useRoute } from '@react-navigation/native';
import { useQuery, gql } from '@apollo/client';
import { ActivityIndicator } from 'react-native';
const width = Dimensions.get('screen').width;

const SHOE_CATEGORY_QUERY = gql`
  query ShoeCategory($brand: String!) {
    shoeCategory(brand: $brand) {
      name,
      brand,
      gallery,
      price
    }
  }
`;

export default function Results({navigation}) {
  const route = useRoute();
  const { brand } = route.params;
  const { loading, error, data,refetch} = useQuery(SHOE_CATEGORY_QUERY, {
    variables: { brand },
  });

  useEffect(()=>{
    navigation.setOptions({headerRight:()=><HeaderRight></HeaderRight>})
  },[])

  // useEffect(()=>{
  //   refetch();
  // },[])

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!data || !data.shoeCategory) {
    return (
      <View style={styles.error}>
        <Text>No data available.</Text>
      </View>
    );
  }


  return (
    <View style={styles.screen}>
      <FlatList
        data={data.shoeCategory}
        key={'#'}
        keyExtractor={(item, index) => '#' + index}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
        renderItem={({index, item}) => (
          <Card name={item.name} brand={item.brand} price={item.price} gallery={item.gallery[0]} />
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: width,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  flatlist: {
    // alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
