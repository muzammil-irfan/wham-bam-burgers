import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';

const ManageMenuScreen = () => {
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const addItem = () => {
    axios.post(`${BACKEND_URL}/menu`, newItem)
      .then(response => console.log('Item added:', response.data))
      .catch(error => console.error(error));
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        onChangeText={name => setNewItem({ ...newItem, name })}
      />
      <TextInput
        placeholder="Price"
        onChangeText={price => setNewItem({ ...newItem, price })}
      />
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
};

export default ManageMenuScreen;
