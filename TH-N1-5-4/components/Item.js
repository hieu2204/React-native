import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Item = ({ product, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.itemContainer}
      onPress={onPress}
    >
      <Image source={product.image} style={styles.productImage} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        
        <View style={styles.priceAndAddButton}>
          <Text style={styles.productPrice}>${product.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={30} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 2,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '45%',
    marginRight: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#888',
    marginVertical: 5,
    textAlign: 'center',
  },
  priceAndAddButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  addButton: {
    marginLeft: 10,
  },
});

export default Item;