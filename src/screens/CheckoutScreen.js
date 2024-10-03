import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = () => {
  const { cartItems } = useContext(CartContext);
  const [deliveryDetails, setDeliveryDetails] = useState('');

  const handleCheckout = () => {
    // API call to handle order submission
    console.log('Submitting order with delivery details:', deliveryDetails);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter delivery address"
        value={deliveryDetails}
        onChangeText={setDeliveryDetails}
      />
      <Button title="Submit Order" onPress={handleCheckout} />
    </View>
  );
};

export default CheckoutScreen;
