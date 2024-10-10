import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Wham Bam Burgers</Text>
      <Button
        title="Enter as Customer"
        onPress={() => navigation.navigate('Customer')} // Navigate to the Customer tabs
      />
      <Button
        title="Enter as Staff"
        onPress={() => navigation.navigate('Staff')} // Navigate to the Staff tabs
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LandingScreen;
