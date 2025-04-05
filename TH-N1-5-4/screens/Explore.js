import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Sample data for categories with background colors
const categories = [
  { id: "1", title: "Fresh Fruits & Vegetable", image: require("../assets/fruits_vegetables.png"), backgroundColor: "#E6F3E6" },
  { id: "2", title: "Cooking Oil & Ghee", image: require("../assets/cooking_oil.png"), backgroundColor: "#FFF3E0" },
  { id: "3", title: "Meat & Fish", image: require("../assets/meat_fish.png"), backgroundColor: "#FFE6E6" },
  { id: "4", title: "Bakery & Snacks", image: require("../assets/bakery_snacks.png"), backgroundColor: "#F3E6F3" },
  { id: "5", title: "Dairy & Eggs", image: require("../assets/dairy_eggs.png"), backgroundColor: "#E6F3F3" },
  { id: "6", title: "Beverages", image: require("../assets/beverages.png"), backgroundColor: "#E6E6FF" },
];

const Explore = () => {
  const navigation = useNavigation();

  // Render each category card
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.backgroundColor }]}
      onPress={() => {
        if (item.title === "Beverages") {
          navigation.navigate("Beverages");
        }
        // Add more conditions for other categories if needed
      }}
    >
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Find Products</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#888"
        />
      </View>

      {/* Categories Grid */}
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  grid: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Explore;