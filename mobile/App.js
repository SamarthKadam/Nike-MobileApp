import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
