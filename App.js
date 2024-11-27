import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen'; // Path to HomeScreen
import LoginScreen from './screens/LoginScreen'; // Path to LoginScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // Hide headers for all screens by default
        }}
      >
        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* Home Screen */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
