import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { data } from '../dummydata/bestseller';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SetShopScreen } from '../store/actions/ui/action';
import { FlatList } from 'react-native';
import Card from '../components/Results/Card';
export default function BestSeller() {

  const dispatch=useDispatch();
  const isFocused = useIsFocused();
  useEffect(()=>{
    if(isFocused)
  dispatch(SetShopScreen(false));
  },[isFocused])

  return (
    <View style={styles.screen}>
        <FlatList
        data={data}
        key={'#'}
        keyExtractor={(item, index) => '#' + index}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
        renderItem={({index, item}) => (
          <Card id={item.id} name={item.name} brand={item.brand} price={item.price} gallery={item.gallery[0]} />
        )}></FlatList>
    </View>
  );
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingHorizontal:12,
    paddingVertical:24,
    backgroundColor:'white'
  }
})