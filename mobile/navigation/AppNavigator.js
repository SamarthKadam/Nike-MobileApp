import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import HomeNavigator from './HomeNavigator';
const Stack=createNativeStackNavigator();
export default function AppNavigator() {

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="LOADING" component={Loading}></Stack.Screen>
    <Stack.Screen name="HOME" component={HomeNavigator}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
