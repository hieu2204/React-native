import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./AuthStack";
import MainStackNavigator from "./MainStack";
import { AuthContext } from "../context/AuthContext";

export default function AppNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
