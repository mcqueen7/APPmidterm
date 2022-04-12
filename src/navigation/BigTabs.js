import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {Box,HStack,Text} from "native-base"

const Stack = createNativeStackNavigator();
// const Tab =  createMaterialBottomTabNavigator();   //trash navigator full of bugs
const Tab =  createBottomTabNavigator();         //normal navigator

import HomeDetailScreen from '../screens/HomeDetailScreen';
import HomeStack from "./HomeStack";
import HomeTraceStack from "./HomeTraceStack";
import PersonalStack from "./PersonalStack";
import ExploreTabs from "./ExploreTabs";
import SearchScreen from "../screens/SearchScreen";
import DisplaySettingScreen from '../screens/DisplaySettingScreen';
import SettingsScreen from '../screens/SettingsScreen';


const BigTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        // tabBarActiveTintColor: '#3B5998',
        lazy:true,
        headerShown:false,
      }}
      shifting={true}
      labeled={true}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          title: "Home",
          // tabBarBadge:7,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarColor:"#3B5998",
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={30} />
          ),
          tabBarColor:"#415fa6",
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={HomeTraceStack} 
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={30} />
          ),
          // tabBarOptions: {
          //   iconStyle: {
          //     width: 1000,
          //     height: 1000,
          //   },
          // },
          tabBarColor:"#4666b3",
        }}
      />
        <Tab.Screen 
        name="Explore" 
        component={ExploreTabs} 
        options={{
          title: "Explore",
          tabBarBadge:"7",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-edit" color={color} size={30} />
          ),tabBarColor:"#4b6ebf",
        }}
      />
        <Tab.Screen 
        name="Personal" 
        component={PersonalStack} 
        options={{
          title: "Personal",
          tabBarBadge:"99+",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),tabBarColor:"#5075cc",
        }}
      />
    </Tab.Navigator>
  );
}
const SettingsStack = ({ navigation }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            Platform.OS == 'ios' ?
              <></> :
              <MaterialCommunityIcons
                name={'menu'}
                color={colorMode == 'light' ? 'black' : 'white'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
              />
          ),
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "Display",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{
          title: "Account",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? 'white' : 'black',
          },
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />

    </Stack.Navigator>
  );
}

export default BigTabs;