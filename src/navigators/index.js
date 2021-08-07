// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import 'react-native-gesture-handler';
import * as React from 'react';
import AuthNavigator from './AuthNavigator';
// import BottomTabNavigator from './BottomTabNavigator';

// import AuthLoadingScreen from '../scenes/AuthLoadingScreen';

// const RootNavigator = createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     Auth: AuthNavigator
//   },
//   {
//     initialRouteName: 'Auth',
//   },
// );

// export default RootNavigator;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const AuthContext = React.createContext();
export default function App({ navigation }) {
    const [state, dispatch] = React.useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
            };
          case 'SIGN_OUT':
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
            };
        }
      },
      {
        isLoading: true,
        isSignout: false,
        userToken: null,
      }
    );
  
    React.useEffect(() => {
      // Fetch the token from storage then navigate to our appropriate place
      const bootstrapAsync = async () => {
        let userToken;
  
        try {
          // Restore token stored in `SecureStore` or any other encrypted storage
          // userToken = await SecureStore.getItemAsync('userToken');
        } catch (e) {
          // Restoring token failed
        }
  
        // After restoring token, we may need to validate it in production apps
  
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      };
  
      bootstrapAsync();
    }, []);
  
    const authContext = React.useMemo(
      () => ({
        signIn: async (data) => {
          // In a production app, we need to send some data (usually username, password) to server and get a token
          // We will also need to handle errors if sign in failed
          // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
          // In the example, we'll use a dummy token
  
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' }),
        signUp: async (data) => {
          // In a production app, we need to send user data to server and get a token
          // We will also need to handle errors if sign up failed
          // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
          // In the example, we'll use a dummy token
  
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        },
      }),
      []
    );
  
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            {state.isLoading ? null: <AuthNavigator />}
          {/* <Stack.Navigator>
            {state.isLoading ? (
                null
              // We haven't finished checking for the token yet
            //   <Stack.Screen name="Splash" component={SplashScreen} />
            ) : state.userToken == null ? (
              // No token found, user isn't signed in
              <Stack.Screen
                name="AuthNavigator"
                component={AuthNavigator}
                options={{
                  // When logging out, a pop animation feels intuitive
                //   animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
            ) : (
                null
              // User is signed in
            //   <Stack.Screen name="Home" component={HomeScreen} />
            )}
          </Stack.Navigator> */}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }