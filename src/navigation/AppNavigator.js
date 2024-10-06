import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import ManageMenuScreen from '../screens/ManageMenuScreen';
import OrderManagementScreen from '../screens/OrderManagementScreen';
import ReportsScreen from '../screens/ReportsScreen';

const Stack = createStackNavigator();

const CustomerStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
    <Stack.Screen name="Order History" component={OrderHistoryScreen} />
  </Stack.Navigator>
);

const StaffStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Manage Menu" component={ManageMenuScreen} />
    <Stack.Screen name="Order Management" component={OrderManagementScreen} />
    <Stack.Screen name="Reports" component={ReportsScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Customer" component={CustomerStack} />
      <Stack.Screen name="Staff" component={StaffStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
