import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./screens/SignUp";
import LoginScreen from "./screens/Login";
import SelectLocationScreen from "./screens/Location";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectLocation" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
