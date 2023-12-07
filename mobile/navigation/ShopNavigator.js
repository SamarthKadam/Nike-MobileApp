import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shop from '../screens/Shop';
import Overview from '../screens/Overview';
import Results from '../screens/Results';

const Stack = createNativeStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator screenOptions={{animation:"slide_from_right"}}>
    <Stack.Screen options={{headerShown:false}} name="Shop" component={Shop} />
    <Stack.Screen name="Overview" component={Overview} />
    <Stack.Screen name="Results" component={Results} />
  </Stack.Navigator>
  )
}