import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>&copy; 2023 Wham Bam Burgers</Text>
    {/* <View style={styles.socialIcons}>
      <Icon name="facebook" size={24} color="#333" />
      <Icon name="instagram" size={24} color="#333" />
      <Icon name="twitter" size={24} color="#333" />
    </View> */}
  </View>
);

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
},
text: {
    padding:10,
    justifyContent: 'center',
    textAlign: "center"
  },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
});

export default Footer;