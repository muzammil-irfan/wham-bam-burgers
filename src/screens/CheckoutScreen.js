import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = () => {
  const { cartItems } = useContext(CartContext);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [error, setError] = useState('');

  const handleCheckout = () => {
    if (!deliveryAddress) {
      setError('Please enter a delivery address');
      return;
    }

    // Simulate API call for order submission
    Alert.alert('Order Submitted', `Your order will be delivered to: ${deliveryAddress}`);
    console.log('Submitting order with delivery address:', deliveryAddress);
    // Here you would typically make an API call to submit the order
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <TextInput
        placeholder="Enter delivery address"
        value={deliveryAddress}
        onChangeText={setDeliveryAddress}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Text style={styles.subtotal}>Order Summary:</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemText}>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <Text style={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleCheckout}>
        <Text style={styles.submitButtonText}>Submit Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff', // White background for input
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  subtotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cartItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemText: {
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  submitButton: {
    backgroundColor: '#ff5722',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CheckoutScreen;
