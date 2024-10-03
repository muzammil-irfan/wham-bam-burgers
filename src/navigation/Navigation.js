import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ManageMenuScreen from '../screens/ManageMenuScreen';
import OrderManagementScreen from '../screens/OrderManagementScreen';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="ManageMenu" component={ManageMenuScreen} />
      <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
