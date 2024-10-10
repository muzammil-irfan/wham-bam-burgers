import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  FlatList
} from "react-native";
import axios from "axios";
import BACKEND_URL from "../utils/backendUrl";
import CustomButton from "../components/CustomButton";

const OrderManagementScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/orders`)
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const updateOrderStatus = (orderId, status) => {
    axios
      .patch(`${BACKEND_URL}/orders/${orderId}`, { status })
      .then((response) => {
        Alert.alert("Success", "Order status updated successfully!");
        setOrders(
          orders.map((order) =>
            order._id === orderId ? { ...order, status } : order
          )
        ); // Update local state
      })
      .catch((error) => console.error(error));
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderId}>Order ID: {item._id}</Text>
      <Text style={styles.orderDate}>Address: {item.deliveryAddress}</Text>
      <Text style={styles.orderDate}>
        Date: {new Date(item.createdAt).toLocaleDateString()}
      </Text>
      <Text style={styles.orderStatus}>Status: {item.status}</Text>
      {item.status !== "Completed" && (
        <CustomButton
          title="Mark as Completed"
          onPress={() => updateOrderStatus(item._id, "Completed")}
        />
      )}
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderItem: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderStatus: {
    fontSize: 14,
    color: "green",
    marginBottom: 10
  },
  orderDate: {
    fontSize: 12,
    color: "#555",
  },
  loading: {
    marginTop: 20,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});


export default OrderManagementScreen;
