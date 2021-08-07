import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabNavigator from './HomeTabNavigator';
import MyBookingTabNavigator from './MyBookingTabNavigator';
import { Colors, Typography } from '../styles';
import { scaleSize } from '../styles/mixins';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator initialRouteName={"HomeTabNavigator"} screenOptions={{
        headerShown: false
      }} tabBarOptions={{
        activeTintColor: Colors.SECONDARY,
        inactiveTintColor: Colors.GRAY_DARK,
        tabStyle: {
            backgroundColor:Colors.PRIMARY,
            borderBottomWidth: 0,
            justifyContent:"center",
            alignItems:"center"
        },
        labelStyle:{
            fontSize: Typography.FONT_SIZE_16,
        },
        keyboardHidesTabBar: true,
        safeAreaInsets:{
            bottom:0
        },
        style: {
            height:scaleSize(60),
            borderTopColor: Colors.GRAY_DARK
        }
      }}>
      <Tab.Screen
        options={{title: "Home", unmountOnBlur: true}}
        name="HomeTabNavigator"
        component={HomeTabNavigator} 
    />
      <Tab.Screen 
      options={{title: "My Bookings", unmountOnBlur: true}}
        name="MyBookingTabNavigator"
       component={MyBookingTabNavigator}
       />
    </Tab.Navigator>
  );
}
export default Tabs;