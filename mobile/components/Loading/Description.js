import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import Logo from '../../assets/images/svgImages/nike_logo.svg';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

export default function Description() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Logo height={80} width={80}></Logo>
      <Text style={styles.txt}>
        Bringing Nyke Members the best products,inspiration and stories in
        sport.
      </Text>
      <View style={styles.btnContainer}>
        {/* {!IsLoggedIn&&<Button title="LOADING..." onPress={() => {}} btnStyle={styles.btn2} txtStyle={styles.btn2txt}></Button>} */}
        {<>
          <Button title="Login" onPress={() => {}} btnStyle={styles.btn1} txtStyle={styles.btn1txt}></Button>
          <Button title="Sign In" onPress={() => {navigation.navigate('HOME')}} btnStyle={styles.btn2} txtStyle={styles.btn2txt}></Button>
        </>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '87%',
    position: 'absolute',
    bottom: 0,
    justifyContent:"flex-end",
    paddingHorizontal: 15,
    paddingVertical:20
  },
  txt: {
    color: 'white',
    fontSize: 25,
    lineHeight: 30,
    fontFamily:'Oswald-Regular'
  },
  btn1: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: 20,
  },
  btn1txt:{
    color: 'black'
  },
  btn2: {
    borderWidth:1,
    borderColor:'white',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginTop: 20,
  },
  btn2txt:{
    color:'white'
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
});
