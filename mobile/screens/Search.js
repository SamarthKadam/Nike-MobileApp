import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
  const [text, setText] = useState('');
  const navigation=useNavigation();

  return (
    <View style={styles.screen}>
        <TextInput  style={[styles.content]}
        onChangeText={()=>{}}
        mode="flat"
        textColor='black'
        activeUnderlineColor='white'
        left={<TextInput.Icon onPress={()=>{navigation.goBack()}} iconColor="black" size={28} icon="keyboard-backspace" />}
        placeholderTextColor='#C9C9C9'
        placeholder="Search Products"/>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
    paddingTop: 10,
  },
  content: {
    height: 50,
    borderColor: '#DED4D3',
    fontSize:18,
    fontWeight:"100",
    paddingHorizontal: 10,
    width: '98%',
    backgroundColor:'white',
    marginVertical:5    
  },
});
