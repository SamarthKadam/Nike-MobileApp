import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple'
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-paper';
import {useSelector} from 'react-redux'

export default function HeaderRight() {
  const navigation=useNavigation();
  const itemsInCart=useSelector((state)=>state.user.cartItems);
  return (
    <View style={styles.container}>
       <Ripple onPress={()=>{navigation.navigate('Search')}}>
        <View style={styles.button}>
          <Icon size={26} color="black" name="search" />
        </View>
       </Ripple>
       <Ripple onPress={()=>{navigation.navigate("Cart")}}>
        <View style={styles.button}>
        <Badge size={16} style={styles.badge}>{itemsInCart.length}</Badge>
          <Icon size={26} color="black" name="shopping-bag" />
        </View>
       </Ripple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:8,
    height:'100%',
  },
  button: {
    borderRadius: 50, // Half of the width/height for a circle effect
    padding: 3,
    overflow: 'hidden', // Ensure ripple effect stays within the bounds of the button
  },
  badge:{
    position:'absolute',
    top:10,
    backgroundColor:'#B3251E',
    color:'white',
    zIndex:100,
    fontSize:12,
  }
});