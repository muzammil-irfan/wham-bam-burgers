import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { FaHamburger, FaShoppingCart, FaClipboardList } from 'react-icons/fa'; // Import icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import icons
// import {
//   faHamburger,
// } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome } from '@expo/vector-icons';

import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ManageMenuScreen from "../screens/ManageMenuScreen";
import OrderManagementScreen from "../screens/OrderManagementScreen";
import { CartContext } from "../context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

const OrderStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
    <Stack.Screen name="ManageMenu" component={ManageMenuScreen} />
  </Stack.Navigator>
);

const Navigation = () => {
  const { cartItems } = useContext(CartContext); // Get cart items from context

  return (
    <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen 
      name="Menu" 
      component={MenuScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="bars" color={color} size={size} />
        ),
      }} 
    />
    <Tab.Screen 
      name="Cart" 
      component={CartScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="shopping-cart" color={color} size={size} />
        ),
      }} 
    />
    <Tab.Screen 
      name="Checkout" 
      component={CheckoutScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="check" color={color} size={size} />
        ),
      }} 
    />
  </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
