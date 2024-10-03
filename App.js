import React from 'react';
import Navigation from './src/navigation/Navigation';
import { CartProvider } from './src/context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}