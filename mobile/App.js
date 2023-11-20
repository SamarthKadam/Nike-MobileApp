import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from './screens/Loading';
import Home from './screens/Home';
const Stack=createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="LOADING" component={Loading}></Stack.Screen>
      <Stack.Screen name="HOME" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
