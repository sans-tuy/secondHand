import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../../pages/Home/index';
import Notification from '../../pages/Notification';
import Sell from '../../pages/Sell';
import SellList from '../../pages/SellList';
import Account from '../../pages/Account';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notifikasi') {
            iconName = focused ? 'notifications' : 'ios-notifications-outline';
          } else if (route.name === 'Jual') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Daftar Jual') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Akun') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Notifikasi"
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Jual" component={Sell} options={{headerShown: false}} />
      <Tab.Screen
        name="Daftar Jual"
        component={SellList}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akun"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
