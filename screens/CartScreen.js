// src/screens/CartScreen.js
import React from 'react';
import { View, FlatList, Text, StyleSheet,Image } from 'react-native';

const CartScreen = ({ route }) => {
  const { cart } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.item}>
                  <Image source={item.Image} style={styles.image} /> 

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'grey',
    
    
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
   left:100
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

export default CartScreen;
