import {createDrawerNavigator} from '@react-navigation/drawer';
import Favourites from '../screens/Favourites';
import Inbox from '../screens/Inbox';
import Settings from '../screens/Settings';
import React from 'react';
import CustomDrawerContent from '../components/Drawer/CustomDrawerContent';
import HeaderRightShop from '../components/Shop/HeaderRight';
import HeaderRightFavourite from '../components/Favourites/HeaderRight';
import Shop from '../screens/Shop';
import BestSeller from '../screens/BestSeller';
const Drawer = createDrawerNavigator();
export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Shopping"
        options={{headerRight: () => <HeaderRightShop></HeaderRightShop>}}
        component={Shop}
      />
      {/* <Drawer.Screen name="BestSeller" component={BestSeller} /> */}
      <Drawer.Screen
        name="Favourite"
        options={{
          headerRight: () => <HeaderRightFavourite></HeaderRightFavourite>,
        }}
        component={Favourites}
      />
      <Drawer.Screen name="Inbox" component={Inbox} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
