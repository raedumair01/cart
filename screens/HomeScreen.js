// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { products } from './products';
import ProductItem from './ProductItem';

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const viewDetails = (product) => {
    navigation.navigate('ProductDetails', { product, addToCart });
  };

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem product={item} onViewDetails={viewDetails} />}
        keyExtractor={(item) => item.id}
      />
      <Button 
      color="#841584" // Change the button color
      style={styles.button} // Apply custom styles
      title={`View Cart (${cart.length})`} onPress={() => navigation.navigate('Cart', { cart })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    

  },
});

export default HomeScreen;
