import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';

const MenuScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/menu`)
      .then(response => {
        setMenuItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Axios Error:", error);
        console.error("Error Message:", error.message);
        console.error("Error Response:", error.response);
        console.error("Error Config:", error.config);
        console.error("Error Stack:", error.stack);
      });
  }, []);

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        menuItems.map(item => (
          <Text key={item.id}>{item.name} - ${item.price}</Text>
        ))
      )}
      <Button title="Add to Cart" onPress={() => { /* handle adding to cart */ }} />
    </ScrollView>
  );
};

export default MenuScreen;
