import { createDrawerNavigator } from '@react-navigation/drawer';
import Orders from './Orders';
import Feed from './Feed';
const Drawer = createDrawerNavigator();
import { View, Text } from 'react-native'
import React from 'react'

export default function Home() {
  return (
      <Drawer.Navigator screenOptions={{headerShadowVisible:false}}>
        <Drawer.Screen name="ORDERS" component={Orders} />
        <Drawer.Screen name="FEED" component={Feed} />
      </Drawer.Navigator>
    );
}