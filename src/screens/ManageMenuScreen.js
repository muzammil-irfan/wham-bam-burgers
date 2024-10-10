import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';
import CustomButton from '../components/CustomButton';

const ManageMenuScreen = () => {
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const addItem = () => {
    if (!newItem.name || isNaN(newItem.price) || Number(newItem.price) <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid item name and price.');
      return;
    }

    axios.post(`${BACKEND_URL}/menu`, newItem)
      .then(response => {
        Alert.alert('Success', 'Item added successfully!');
        setNewItem({ name: '', price: '' }); // Reset form
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu</Text>
      <TextInput
        placeholder="Item Name"
        value={newItem.name}
        onChangeText={name => setNewItem({ ...newItem, name })}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={newItem.price}
        onChangeText={price => setNewItem({ ...newItem, price })}
        keyboardType="numeric"
        style={styles.input}
      />
      <CustomButton title="Add Item" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ManageMenuScreen;
