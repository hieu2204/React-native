import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './Screens/SignIn'
import HomeScreen from './Screens/Home'
console.log("NavigationContainer loaded successfully!");
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
