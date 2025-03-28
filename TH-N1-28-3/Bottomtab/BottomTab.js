import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/Home";
import CartScreen from "../screens/Cart";
import ProfileScreen from "../screens/Profile";
import ChatScreen from "../screens/Inbox";

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ icon, label }) => {
    return (
        <View style={styles.iconContainer}>
            <FontAwesome5 name={icon} size={22} color="black" />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarShowLabel: false, // Ẩn label mặc định
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false , tabBarIcon: () => <CustomTabBarIcon icon="home" label="HOME" />,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false ,tabBarIcon: () => <CustomTabBarIcon icon="shopping-bag" label="ORDER" />,
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={ChatScreen}
                options={{
                    tabBarIcon: () => <CustomTabBarIcon icon="comment-dots" label="INBOX" />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false ,tabBarIcon: () => <CustomTabBarIcon icon="user" label="PROFILE" />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: "center",
    },
    label: {
        
        fontSize: 8,
        color: "black",
        marginTop: 4,
    },
});

export default TabNavigator;
