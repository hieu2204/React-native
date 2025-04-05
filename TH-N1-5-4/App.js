import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./BottomTab/BottomTab";
import ProductDetail from "./screens/ProductDetail";
import Beverages from "./screens/Beverages";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        {/* The TabNavigator contains the bottom tabs */}
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Hide the header for the tab navigator
        />
        {/* The ProductDetail screen is outside the tab navigator */}
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product Detail" }}
        />
        {/* If you still need the Beverages screen */}
        <Stack.Screen
          name="Beverages"
          component={Beverages}
          options={{ title: "Beverages" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;