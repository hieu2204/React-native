import React  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screens/Home";
import ProfileScreen from "../Screens/Profile";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
};

// Stack Navigator cho Profile
const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    );
};
// Bottom Tab navigator
const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "HomeTab") iconName = "home-outline";
              else if (route.name === "ProfileTab") iconName = "person-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
            <Tab.Screen name="HomeTab" component={HomeStack} options={{title: "Home"}}/>
            <Tab.Screen name="ProfileTab" component={ProfileStack} options={{title: "Profile"}}/>
        </Tab.Navigator>
    )
}
export default MainTabNavigator;
