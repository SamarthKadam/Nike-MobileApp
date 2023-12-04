import { createDrawerNavigator } from '@react-navigation/drawer';
import Orders from '../screens/Orders';
import Favourites from '../screens/Favourites';
import Shop from '../screens/Shop';
import Inbox from '../screens/Inbox';
import Settings from '../screens/Settings';
import React from 'react'
import CustomDrawerContent from '../components/Drawer/CustomDrawerContent';
import HeaderRight from '../components/Drawer/HeaderRight';
const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
      <Drawer.Navigator screenOptions={{headerShadowVisible:false,headerShadowVisible:true}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Shop" options={{headerRight:()=><HeaderRight></HeaderRight>}} component={Shop} />
        <Drawer.Screen name="Orders"  component={Orders} />
        <Drawer.Screen name="Favourite"  component={Favourites} />
        <Drawer.Screen name="Inbox"  component={Inbox} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    );
}