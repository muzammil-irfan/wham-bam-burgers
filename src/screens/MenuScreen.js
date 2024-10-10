import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';
import { CartContext } from '../context/CartContext';
import MenuItem from '../components/MenuItem';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext); // Using CartContext

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/menu`);
        setMenuItems(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const renderMenuItem = ({ item }) => (
    <MenuItem item={item} addToCart={addToCart} /> // Pass addToCart as a prop
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={item => item._id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MenuScreen;
