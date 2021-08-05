import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LeftHeader } from '../components/CommonHeader'
// import IntroScreen from '../scenes/LoginFlowScreens/IntroScreen'
import EnterMobileScreen from '../scenes/LoginFlowScreens/MobileScreen'
import EnterOtpScreen from '../scenes/LoginFlowScreens/OtpScreen'
import {Colors, Mixins, Spacing} from '../styles/index'

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <Stack.Navigator mode={"card"} initialRouteName={"IntroScreen"} >
                <Stack.Screen name={"EnterMobileScreen"} component={EnterMobileScreen} options={({ navigation }) => ({
                        title: '',
                        // headerLeft: () => <LeftHeader onPress={()=>navigation.goBack()}/>,
                        headerStyle: {
                            backgroundColor: Colors.PRIMARY,
                            height: Mixins.scaleSize(100),
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    })}
                />
                <Stack.Screen name={"EnterOtpScreen"} component={EnterOtpScreen} options={({ navigation }) => ({
                        title: '',
                        headerLeft: () => <LeftHeader onPress={()=>navigation.goBack()}/>,
                        headerStyle: {
                            backgroundColor: Colors.PRIMARY,
                            height: Mixins.scaleSize(100),
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                    })}
                />
        </Stack.Navigator>
    );
}
export default AuthNavigator;