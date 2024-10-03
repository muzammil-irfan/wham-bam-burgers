import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <View>
      {cartItems.map(item => (
        <View key={item.id}>
          <Text>{item.name} - ${item.price}</Text>
          <Button title="Remove" onPress={() => removeFromCart(item.id)} />
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
