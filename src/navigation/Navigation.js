import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ManageMenuScreen from "../screens/ManageMenuScreen";
import OrderManagementScreen from "../screens/OrderManagementScreen";
import { CartContext } from "../context/CartContext";

const Tab = createBottomTabNavigator();

// Main Navigation component
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
          component={CartScreen} // Directly use CartScreen
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Checkout"
          component={CheckoutScreen} // Directly use CheckoutScreen
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="check" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrderManagementScreen} // Directly use OrderManagementScreen
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="clipboard" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
