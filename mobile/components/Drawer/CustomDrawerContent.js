import React, { useEffect } from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar} from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import { useSelector } from 'react-redux'
const ViewPortHeight = Dimensions.get('window').height;
const CustomDrawerContent = ({navigation}) => {


  const [activeItem,setActiveItem]=useState(0);
  const Name=useSelector((state)=>state.user.name);
  const isActive=useSelector((state)=>state.ui.isShopScreen);

  useEffect(()=>{
    if(isActive===true)
    setActiveItem(0);

  },[isActive])

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.userCard}>
        <Avatar.Image
          size={56}
          source={{
            uri: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
          }}
        />
        <Text style={styles.text}>{Name}</Text>
      </View>
      <View style={styles.headerContainer}>
        <DrawerItem
          label="Shop"
          icon={({color, size}) => (
            <Icon1 name="home" size={22} color={color} />
          )}
          onPress={() => {
            navigation.navigate('Shopping')
            setActiveItem(0);
          }}
          activeBackgroundColor='#D4D4D4'
          activeTintColor='black'
          labelStyle={[styles.labelStyle,activeItem===0&&styles.boldText]}
          style={styles.drawerItemStyle}
          focused={activeItem===0}
        />
        <DrawerItem
          label="Orders"
          icon={({color, size}) => (
            <Icon name="shopping-bag" size={22} color={color} />
          )}
          onPress={() => {
            navigation.navigate('Cart')
            setActiveItem(1);
          }}
          activeBackgroundColor='#D4D4D4'
          activeTintColor='black'
          labelStyle={[styles.labelStyle,activeItem===0&&styles.boldText]}
          style={styles.drawerItemStyle}
          focused={activeItem===1}
        />
        <DrawerItem
          label="Favourite"
          icon={({color, size}) => (
            <Icon3 name="hearto" size={22} color={color} />
          )}
          onPress={() => {
            navigation.navigate("Favourite")
            setActiveItem(2);
          }}
          activeBackgroundColor='#D4D4D4'
          activeTintColor='black'
          labelStyle={[styles.labelStyle,activeItem===0&&styles.boldText]}
          style={styles.drawerItemStyle}
          focused={activeItem===2}
        />
        <DrawerItem
          label="Inbox"
          icon={({focused,color,size}) => (
            <Icon3 name="mail" size={22} color={color} />
          )}
          onPress={() => {
            navigation.navigate('Inbox')
            setActiveItem(3)
          }}
          activeBackgroundColor='#D4D4D4'
          activeTintColor='black'
          labelStyle={[styles.labelStyle,activeItem===0&&styles.boldText]}
          style={styles.drawerItemStyle}
          focused={activeItem===3}
        />
        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon3 name="setting" size={22} color={color} />
          )}
          onPress={() => {
            navigation.navigate('Settings')
            setActiveItem(4);
          }}
          activeBackgroundColor='#D4D4D4'
          activeTintColor='black'
          labelStyle={[styles.labelStyle,activeItem===0&&styles.boldText]}
          style={styles.drawerItemStyle}
          focused={activeItem===4}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userCard: {
    height: ViewPortHeight / 4 - 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C0C0C0',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  text: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 5,
  },
  headerContainer: {
    marginTop: 10,
  },
  drawerItemStyle: {
    marginVertical: 1,
    marginHorizontal: 0,
    paddingHorizontal: 14,
    borderRadius: 0,
    width: '100%',
  },
  labelStyle:{marginLeft: -15, fontFamily: 'Roboto',fontSize:15},
  boldText:{
    fontWeight:'600'
  }
});

export default CustomDrawerContent;
