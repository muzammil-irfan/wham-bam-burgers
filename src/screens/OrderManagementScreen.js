import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';

const OrderManagementScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/orders`)
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const updateOrderStatus = (orderId, status) => {
    axios.patch(`${BACKEND_URL}/orders/${orderId}`, { status })
      .then(response => {
        Alert.alert('Success', 'Order status updated successfully!');
        setOrders(orders.map(order => 
          order._id === orderId ? { ...order, status } : order
        )); // Update local state
      })
      .catch(error => console.error(error));
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {orders.map(order => (
        <View key={order._id} style={styles.orderItem}>
          <Text>Order #{order._id} - {order.status}</Text>
          <Button title="Mark as Completed" onPress={() => updateOrderStatus(order._id, 'Completed')} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  orderItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 1,
  },
});

export default OrderManagementScreen;
