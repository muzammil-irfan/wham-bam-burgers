import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigation = useNavigation(); // Use the navigation hook

  const handleProceedToCheckout = () => {
    navigation.navigate('Checkout'); // Navigate to Checkout screen
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>
              ${item.price.toFixed(2)} x {item.quantity}
            </Text>
              <TouchableOpacity 
                style={styles.removeButton} 
                onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      )}
      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton} onPress={handleProceedToCheckout}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#888',
  },
  cartItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#4CAF50',
  },
  removeButton: {
    backgroundColor: '#FF5733',
    borderRadius: 5,
    padding: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CartScreen;
