import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import { useEffect } from 'react';
import React from 'react';
import Card from '../components/Results/Card';
import {data} from '../dummydata/bestseller';
import HeaderRight from '../components/Shop/HeaderRight';
const width = Dimensions.get('screen').width;

export default function Results({navigation}) {


  useEffect(()=>{
    navigation.setOptions({headerRight:()=><HeaderRight></HeaderRight>})
  },[])

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        key={'#'}
        keyExtractor={(item, index) => '#' + index}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
        renderItem={({index, item}) => (
          <Card name={item.name} brand={item.brand} gallery={item.gallery[0]} />
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
    alignItems: 'center',
  },
});
