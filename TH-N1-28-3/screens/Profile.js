import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerBackground} />
      </View>

      {/* Ảnh đại diện và icon edit */}
      <View style={styles.avatarWrapper}>
        <Image source={require("../assets/Avatar.png")} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome5 name="pen" size={12} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tên và email */}
      <Text style={styles.profileName}>Rakibul Hasan</Text>
      <Text style={styles.profileEmail}>rakibhbrand@gmail.com</Text>

      {/* Danh sách tính năng */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="home" size={18} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>Home</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="credit-card" size={18} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>My Card</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="moon" size={18} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>Dark Mode</Text>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="truck" size={18} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>Truck Your Order</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="cog" size={18} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>Settings</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="question-circle" size={18} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>Help Center</Text>
          </View>
          <FontAwesome5 name="chevron-right" size={16} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Nút Log Out */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 30,
    position: "relative",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: "#FFFBC3",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
  },
  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    position: "absolute",
    top: 130,
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderWidth: 3,
    borderColor: "#FFFBC3",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#7E57C2",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 70,
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  menuContainer: {
    marginTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(254, 255, 191, 1)",
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: "#ccc",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  logoutButton: {
    backgroundColor: "#5843BE",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    paddingVertical: 15,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;