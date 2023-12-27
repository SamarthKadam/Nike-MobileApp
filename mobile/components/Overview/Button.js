import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ripple from 'react-native-material-ripple';

const Button= ({ title, onPress, btnStyle,txtStyle,isfav}) => {
  return (
        <Ripple style={[styles.button, btnStyle]} onPress={onPress}>
      <Text style={[styles.buttonText,txtStyle]}>{title} {isfav==1&&<Icon size={20} name="hearto"></Icon>}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  button: { // Change the background color to your preference
    paddingHorizontal:24,
    paddingVertical:18,
    borderColor:'#CCCCCC',
    borderRadius: 28,
    alignItems: 'center',
    color:'black',
    overflow:"hidden"
  },
  buttonText: {
   // Change the text color to your preference
    fontSize: 17,
    fontWeight:'700',
    fontFamily:"DmSans",
    color:'black'
  },
});

export default Button;