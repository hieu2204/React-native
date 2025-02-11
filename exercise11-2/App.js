import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Custombtn from './components/button';
import { useState } from 'react';
export default function App() {
  const [color, setColor] = useState("gray");
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Text>Chọn màu nút</Text>
      <Custombtn title="Red" color={"red"} onPress={() => setColor("red")} />
      <Custombtn title="Yellow" color={"yellow"} onPress={() => setColor("yellow")} />
      <Custombtn title="Blue" color={"blue"} onPress={() => setColor("blue")} />
      <Custombtn title="Black" color={"black"} onPress={() => setColor("black")} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
