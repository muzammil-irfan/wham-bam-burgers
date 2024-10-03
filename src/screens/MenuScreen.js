import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, FlatList, Image } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    const cartItem = { ...item, quantity }; // Include quantity in cart item
    addToCart(cartItem);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.menuItemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.menuImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemPrice}>${item.price}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <View style={styles.quantityContainer}>
          <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
          <Text style={styles.quantityText}>{quantity}</Text>
          <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>
        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
    </View>
  );
};

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/menu`)
      .then(response => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList 
          data={menuItems} 
          renderItem={({ item }) => <MenuItem item={item} />} 
          keyExtractor={item => item._id} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  menuItemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    fontSize: 16,
    color: 'green',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default MenuScreen;
