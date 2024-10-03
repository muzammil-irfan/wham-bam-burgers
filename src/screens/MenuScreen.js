import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import MenuItem from "../components/MenuItem"

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
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList 
          data={menuItems} 
          renderItem={({ item }) => <MenuItem item={item} />} 
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
  menuItemContainer: {
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
  itemDetails: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItemPrice: {
    fontSize: 18,
    color: 'green',
  },
  menuItemDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MenuScreen;
