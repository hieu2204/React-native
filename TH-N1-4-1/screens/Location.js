import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, IconButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const SelectLocationScreen = () => {
  const navigation = useNavigation();
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <IconButton
        icon="arrow-left"
        size={24}
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />

      {/* Image */}
      <Image
        source={require("../assets/location.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with what's happening in your area
      </Text>

      {/* Dropdown Zone */}
      <Text style={styles.label}>Your Zone</Text>
      <View style={styles.dropdown}>
        <Picker selectedValue={zone} onValueChange={(itemValue) => setZone(itemValue)}>
          <Picker.Item label="Banasree" value="Banasree" />
          <Picker.Item label="Gulshan" value="Gulshan" />
          <Picker.Item label="Dhanmondi" value="Dhanmondi" />
        </Picker>
      </View>

      {/* Dropdown Area */}
      <Text style={styles.label}>Your Area</Text>
      <View style={styles.dropdown}>
        <Picker selectedValue={area} onValueChange={(itemValue) => setArea(itemValue)}>
          <Picker.Item label="Types of your area" value="" />
          <Picker.Item label="Residential" value="Residential" />
          <Picker.Item label="Commercial" value="Commercial" />
        </Picker>
      </View>

      {/* Submit Button */}
      <Button mode="contained" onPress={() => alert("Location Selected!")} style={styles.submitButton}>
        Submit
      </Button>
    </View>
  );
};

export default SelectLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginVertical: 10,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },
  dropdown: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 5,
  },
  submitButton: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#4CAF50",
  },
});
