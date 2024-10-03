import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    const cartItem = { ...item, quantity };
    addToCart(cartItem);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.menuItemContainer}>
      {item.image && (
        <Image
          source={{ uri: `${item.image}` }}
          style={styles.menuItemImage}
        />
      )}
      <View style={styles.itemDetails}>
        <View style={styles.titlePriceContainer}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <View style={styles.cartButtonContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuItemImage: {
    width: 180,
    height: 150,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  menuItemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  menuItemPrice: {
    fontSize: 18,
    color: 'green',
    marginLeft: 10,
  },
  menuItemDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0
  },
  quantityButton: {
    fontSize: 20,
    padding: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    minWidth: 30,
  },
  quantityText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#ff5722',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    // marginLeft: 10, // Add some space between quantity and button
    width: "50%"
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10, // Add margin for spacing
  },
});

export default MenuItem;
