import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Button } from "react-native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        
        <Text style={styles.sectionTitle}>Product Details</Text>
        <Text style={styles.description}>
          Apples Are Nutritious. Apples May Be Good For Weight Loss.
          Apples May Be Good For Your Heart. As Part Of A Health!
          And Varied Diet.
        </Text>

        <Text style={styles.sectionTitle}>Nutritions</Text>
        <Text style={styles.nutrition}>100g</Text>

        <Button title="Add to Basket" color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  image: { width: "100%", height: 300, resizeMode: "contain" },
  details: { padding: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  price: { fontSize: 20, color: "#4CAF50", marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginVertical: 10 },
  description: { fontSize: 16, color: "#666", lineHeight: 24 },
  nutrition: { fontSize: 16, color: "#666" }
});

export default ProductDetail;