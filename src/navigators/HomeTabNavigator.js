import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LeftHeader } from '../components/CommonHeader'
import HomeScreen from '../scenes/HomeTabScreenFlow/Home'
import {Colors, Mixins, Spacing} from '../styles/index'

const Stack = createStackNavigator();
const HomeTabNavigator = () => {
    return (
        <Stack.Navigator mode={"card"} initialRouteName={"Home"} screenOptions={{
            headerShown: false
          }}>
                <Stack.Screen name={"Home"} component={HomeScreen}/>
        </Stack.Navigator>
    );
}
export default HomeTabNavigator;