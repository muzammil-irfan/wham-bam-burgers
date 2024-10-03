import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl';

const OrderManagementScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/orders`)
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  const updateOrderStatus = (orderId, status) => {
    axios.patch(`${BACKEND_URL}/orders/${orderId}`, { status })
      .then(response => console.log('Order status updated:', response.data))
      .catch(error => console.error(error));
  };

  return (
    <View>
      {orders.map(order => (
        <View key={order.id}>
          <Text>Order #{order.id} - {order.status}</Text>
          <Button title="Mark as Completed" onPress={() => updateOrderStatus(order.id, 'Completed')} />
        </View>
      ))}
    </View>
  );
};

export default OrderManagementScreen;
