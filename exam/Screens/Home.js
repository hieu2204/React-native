import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hello 👋</Text>
          <Text style={styles.subtitle}>Christie Doe</Text>
        </View>
        <Image source={require("../assets/MaskGroup.png")} style={styles.avatar} />

      </View>
      <Text style={styles.insights}>Your Insights</Text>

      {/* Hàng icon */}
      <View style={styles.iconRow}>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/Group157.png")} style={styles.icon} />
          <Text>Scan new</Text>
          <Text style={styles.below}>Scanned 483</Text>

        </View>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/Frame.png")} style={styles.icon} />
          <Text>Counterfeits</Text>
          <Text style={styles.below}>Counterfeited 32</Text>
        </View>
      </View>

      {/* Hàng icon thứ hai */}
      <View style={styles.iconRow}>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/Group158.png")} style={styles.icon} />
          <Text>Success</Text>
          <Text style={styles.below}>Checkouts 8</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/Group151.png")} style={styles.icon} />
          <Text>Directory</Text>
          <Text style={styles.below}>History 26</Text>
        </View>
      </View>

      <Text style={styles.insights}>Explore More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insights: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    // width: 158,
    // height: 176,
    marginVertical: 10,
  },
  iconContainer: {
    width: 158,
    height: 176,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Nền mờ 10%
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10, // Khoảng cách giữa các icon
  },
  icon: {
    width: 40,
    height: 40,
  },
  below: {
    color: 'gray',
    fontSize: 12
  }
});

