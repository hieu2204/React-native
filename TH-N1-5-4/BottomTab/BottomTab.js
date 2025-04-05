import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Cart from "../screens/Cart";
import Favourite from "../screens/Favourite";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgba(83, 177, 117, 1)",
        tabBarInactiveTintColor: "rgba(24, 23, 37, 1)",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="storefront-outline" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="search-outline" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="cart-outline" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="heart-outline" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="person-outline" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;