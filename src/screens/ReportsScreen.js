import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import BACKEND_URL from '../utils/backendUrl'; // Ensure you have a backend URL for fetching reports

const ReportsScreen = () => {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/orders/reports`); // Endpoint for reports
        setReports(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    fetchReports();
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
        <Button title="Retry" onPress={handleRefresh} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports</Text>
      <Text style={styles.reportItem}>Total Orders: {reports.totalOrders}</Text>
      <Text style={styles.reportItem}>Completed Orders: {reports.completedOrders}</Text>
      <Text style={styles.reportItem}>Pending Orders: {reports.pendingOrders}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportItem: {
    fontSize: 18,
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  loading: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ReportsScreen;
