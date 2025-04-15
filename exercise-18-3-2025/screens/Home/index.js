import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ItemList from "../../components/ItemList";

const HomeScreen = () => {
  const categories = [
    { id: 1, name: "Pizza", image: "https://source.unsplash.com/100x100/?pizza" },
    { id: 2, name: "Burger", image: "https://source.unsplash.com/100x100/?burger" },
    { id: 3, name: "Steak", image: "https://source.unsplash.com/100x100/?steak" },
  ];

  const popularItems = [
    { id: 1, name: "Food 1", image: "https://source.unsplash.com/100x100/?food", price: 1 },
    { id: 2, name: "Food 2", image: "https://source.unsplash.com/100x100/?meal", price: 3 },
  ];

  const saleItems = [
    { id: 1, name: "Food 3", image: "https://source.unsplash.com/100x100/?dish", price: 2 },
    { id: 2, name: "Food 4", image: "https://source.unsplash.com/100x100/?plate", price: 4 },
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput style={styles.searchBar} placeholder="Search for meals or area" />
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={20} color="orange" />
        </TouchableOpacity>
      </View>

      {/* Danh sách */}
      <ItemList title="Top Categories" data={categories} />
      <ItemList title="Popular Items" data={popularItems} />
      <ItemList title="Sale-off Items" data={saleItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default HomeScreen;
