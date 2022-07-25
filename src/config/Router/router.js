import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../../pages/Home/index';
import Notification from '../../pages/Notification';
import Sell from '../../pages/Sell';
import SellList from '../../pages/SellList';
import Account from '../../pages/Account';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import PreviewProduct from '../../pages/PreviewProduct';
import PreviewProductSeller from '../../pages/PreviewProductSeller';
import DetailProduct from '../../pages/DetailProduct';
import EditAccount from "../../pages/EditAccount";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let size = 25;
          let color = focused ? '#7126B5' : 'gray';

          if (route.name === 'Home') {
            iconName = 'home-outline';
            return <Ionic name={iconName} size={size} color={color} />;
          } else if (route.name === 'Notifikasi') {
            iconName = 'ios-notifications-outline';
            return <Ionic name={iconName} size={size} color={color} />;
          } else if (route.name === 'Jual') {
            iconName = 'add-circle-outline';
            return <Ionic name={iconName} size={size} color={color} />;
          } else if (route.name === 'Daftar Jual') {
            iconName = 'list-outline';
            return <Ionic name={iconName} size={size} color={color} />;
          } else if (route.name === 'Akun') {
            iconName = 'person-outline';
            return <Ionic name={iconName} size={size} color={color} />;
          }
        },
        tabBarLabel: ({ focused }) => {
          let titleStyle = {
            fontSize: 12,
            fontWeight: focused ? 'bold' : '500',
            color: focused ? '#7126B5' : 'gray',
          };
          if (route.name === 'Home') {
            return <Text style={titleStyle}>{route.name}</Text>;
          } else if (route.name === 'Notifikasi') {
            return <Text style={titleStyle}>{route.name}</Text>;
          } else if (route.name === 'Jual') {
            return <Text style={titleStyle}>{route.name}</Text>;
          } else if (route.name === 'Daftar Jual') {
            return <Text style={titleStyle}>{route.name}</Text>;
          } else if (route.name === 'Akun') {
            return <Text style={titleStyle}>{route.name}</Text>;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="Notifikasi"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Jual"
        component={DetailProduct}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Daftar Jual"
        component={SellList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Akun"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PreviewProduct"
        component={PreviewProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PreviewProductSeller"
        component={PreviewProductSeller}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};


export default Router;

const styles = StyleSheet.create({});
