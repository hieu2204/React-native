import { StatusBar } from 'expo-status-bar';
import {  Text,View } from 'react-native';
import CustomText from './Components/Square';
export default function App() {
  return (
    <View>
      <CustomText> 1</CustomText>
      <CustomText> 2</CustomText>
      <CustomText> 3</CustomText>
      <StatusBar style="auto" />
    </View>
  );
}