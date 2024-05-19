import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product, addToCart } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.Image} style={styles.image} /> 
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button
      color="#841584" // Change the button color
      style={styles.button} // Apply custom styles
       title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'grey'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
   
  },
});

export default ProductDetailsScreen;
