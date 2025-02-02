import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ProductItem = ({ product, onViewDetails }) => {
  return (
    <View style={styles.product}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Button
          title="View Details"
          onPress={() => onViewDetails(product)}
          color="#841584" // Change the button color
          style={styles.button} // Apply custom styles
        />
      </View>
      <Image source={product.Image} style={styles.image} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 120,
    height: 100,
  },
  button: {
    // Add custom button styles here
  },
  name:{
    color:'black',
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center'
      },
      price:{
        color:'black',
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center'
      },
});

export default ProductItem;
