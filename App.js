import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { CartProvider } from './src/context/CartContext';
// import Navigation from './src/navigation/Navigation';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your!</Text>
//       <Navigation />
//     </View>
//   );
// }
export default function App() {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
