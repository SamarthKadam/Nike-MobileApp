import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Button= ({ title, onPress, btnStyle,txtStyle}) => {
  return (
    <TouchableOpacity style={[styles.button, btnStyle]} onPress={onPress}>
      <Text style={[styles.buttonText,txtStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { // Change the background color to your preference
    paddingHorizontal:24,
    paddingVertical:10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth:1,
    borderColor:'grey',
    borderRadius:20
  },
  buttonText: {
    color:'black',
    fontSize: 15,
    fontWeight:'600',
    fontFamily:'Roboto-Medium'
  },
});

export default Button;