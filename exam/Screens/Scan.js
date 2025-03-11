import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ScanScreen() {
  return (
    <View style={styles.container}>
       <Image source={require("../assets/Group5.png")} style={styles.icon} />
       <Image source={require("../assets/Group4.png")} style={styles.icon} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 165, 0, 0.6)"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
