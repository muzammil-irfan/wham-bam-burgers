// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Wham Bam Burgers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80, // Increase this value for more height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722', // Example background color
    elevation: 4, // Add shadow on Android
    shadowColor: '#000', // Shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 24, // Adjust font size as needed
    color: '#fff', // Text color
    fontWeight: 'bold',
    marginTop: 20
  },
});

export default Header;
