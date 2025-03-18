import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import Header from "./Header";

const ItemList = ({ title, data }) => {
  return (
    <View>
      <Header title={title} />
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            {item.price && <Text style={styles.price}>${item.price}</Text>}
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 15,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
  },
});

export default ItemList;
