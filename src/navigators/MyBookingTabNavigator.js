import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LeftHeader } from '../components/CommonHeader'
import MyBookingScreen from '../scenes/MyBookingsTabNavigator/MyBooking'
import {Colors, Mixins, Spacing} from '../styles/index'

const Stack = createStackNavigator();
const MyBookingTabNavigator = () => {
    return (
        <Stack.Navigator mode={"card"} initialRouteName={"MyBooking"} screenOptions={{
            headerShown: false
          }}>
                <Stack.Screen name={"MyBooking"} component={MyBookingScreen}/>
        </Stack.Navigator>
    );
}
export default MyBookingTabNavigator;