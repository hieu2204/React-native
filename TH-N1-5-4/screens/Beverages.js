import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

// Sample data for beverages
const beverages = [
  { id: "1", name: "Diet Coke", size: "355ml", price: "$1.99", image: require("../assets/diet_coke.png") },
  { id: "2", name: "Sprite Can", size: "325ml", price: "$1.50", image: require("../assets/sprite_can.png") },
  { id: "3", name: "Apple & Grape Juice", size: "2L", price: "$15.99", image: require("../assets/apple_grape_juice.png") },
  { id: "4", name: "Orange Juice", size: "2L", price: "$15.99", image: require("../assets/orange_juice.png") },
  { id: "5", name: "Coca Cola Can", size: "325ml", price: "$4.99", image: require("../assets/coca_cola_can.png") },
  { id: "6", name: "Pepsi Can", size: "330ml", price: "$4.99", image: require("../assets/pepsi_can.png") },
];

const Beverages = () => {
  // Render each beverage item
  const renderBeverage = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardSize}>{item.size}, Price</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={beverages}
        renderItem={renderBeverage}
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
    paddingTop: 10,
  },
  grid: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    elevation: 3, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardName: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
  },
  cardSize: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 5,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  addButton: {
    backgroundColor: "#28A745",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Beverages;