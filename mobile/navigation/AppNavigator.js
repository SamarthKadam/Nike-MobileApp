import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from '../screens/Loading';
import HomeNavigator from './HomeNavigator';
import Results from '../screens/Results';
import Overview from '../screens/Overview';
import Cart from '../screens/Cart';
import Search from '../screens/Search';
import OrderConfirmed from '../screens/OrderConfirmed';
import BestSeller from '../screens/BestSeller';
const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LOADING" component={Loading}></Stack.Screen>
        <Stack.Screen name="HOME" options={{animation:"slide_from_right"}} component={HomeNavigator}></Stack.Screen>
        <Stack.Screen
          name="Results"
          options={{headerShown: true, animation: 'fade_from_bottom'}}
          component={Results}
        />
        <Stack.Screen
          name="Overview"
          options={{headerShown: true, animation: 'fade_from_bottom'}}
          component={Overview}
        />
         <Stack.Screen
          name="Cart"
          options={{headerShown: true, animation:"slide_from_right"}}
          component={Cart}
        />
            <Stack.Screen
          name="Search"
          options={{headerShown: false, animation:"fade"}}
          component={Search}
        />
          <Stack.Screen
          name="OrderConfirmed"
          options={{headerShown: false, animation:"fade"}}
          component={OrderConfirmed}
        />
        <Stack.Screen
        name="BestSeller"
        options={{animation:"fade",headerShown:true}}
        component={BestSeller}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
