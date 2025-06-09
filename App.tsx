import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Src/Screens/HomeScreen';
import ScreenSplash from './Src/Screens/ScreenSplash';
import AboutScreen from './Src/Screens/AboutScreen';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './Src/Screens/LoginScreen';
import CreateAccount from './Src/Screens/CreateAccount';

const Stack = createNativeStackNavigator();

interface Props {
  // navigation: any;
}
const App: React.FC<Props> = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenSplash"
          component={ScreenSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
