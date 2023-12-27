import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';

const width=Dimensions.get('screen').width;

export const Picker = ({ title, onPress, btnStyle, txtStyle }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { label: '6 UK', value: '6' },
    { label: '7 UK', value: '7' },
    { label: '8 UK', value: '8' },
    { label: '9 UK', value: '9' },
    { label: '10 UK', value: '10' },
  ];

  return (
    <View style={styles.container}>
       <DropDownPicker
        items={items}
        defaultValue={selectedValue}
        containerStyle={{ height: 50, width: width-25}}
        dropDownStyle={{borderRadius:20}}
        labelStyle={styles.lblstyle}
        placeholderStyle={{
          fontFamily:'DMSans',
          fontWeight:'bold',
          fontSize:16,
          textAlign:"left"
      }}
      activeLabelStyle={{fontWeight:'600'}}
        itemStyle={{justifyContent: 'flex-start'}}
        onChangeItem={(item) => setSelectedValue(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lblstyle:{
    fontSize: 16,
    textAlign: 'left',
    color: '#000'
}
});

export default Picker;