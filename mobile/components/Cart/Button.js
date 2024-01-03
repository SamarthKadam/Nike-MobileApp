import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';

const Button= ({ title, onPress}) => {
  return (
        <Ripple rippleColor={'rgb(211, 211, 211)'} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  button: { // Change the background color to your preference
    paddingHorizontal:20,
    paddingVertical:16,
    borderColor:'#CCCCCC',
    borderRadius: 28,
    alignItems: 'center',
    color:'black',
    overflow:"hidden",
    backgroundColor:'black',
    marginVertical:12
  },
  buttonText: {
   // Change the text color to your preference
    fontSize: 17,
    fontWeight:'700',
    fontFamily:"DmSans",
    color:'white'
  },
});

export default Button;