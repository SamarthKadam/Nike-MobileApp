import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple'

export default function HeaderRight() {

  return (
    <View style={styles.container}>
       <Ripple>
        <View style={styles.button}>
          <Icon size={26} color="black" name="search" />
        </View>
       </Ripple>
       <Ripple>
        <View style={styles.button}>
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
    justifyContent: 'space-evenly',
    width: '40%',
    height:'100%',
  },
  button: {
    borderRadius: 50, // Half of the width/height for a circle effect
    padding: 3,
    overflow: 'hidden', // Ensure ripple effect stays within the bounds of the button
  },
});