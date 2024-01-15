import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Edit from 'react-native-vector-icons/Octicons'
import Check from 'react-native-vector-icons/Feather'

export default function HeaderRight({onEditPress,isEditing}) {

  return (
    <View style={styles.container}>
      <Pressable onPress={onEditPress}  android_ripple={{color:'rgba(0, 0, 0, 0.2)'}}>
        <View style={{overflow:'hidden'}}>
         {!isEditing&&<Edit size={26} color="black" name="pencil" />}
         {isEditing&&<Check size={26} color="black" name="check" />}
        </View>
      </Pressable>
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
    position:'relative',
    overflow: 'hidden', // Ensure ripple effect stays within the bounds of the button
  },
});