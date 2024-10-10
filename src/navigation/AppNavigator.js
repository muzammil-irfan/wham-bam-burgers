import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LandingScreen from "../screens/LandingScreen";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import { Ionicons } from "react-native-vector-icons";
import CheckoutScreen from "../screens/CheckoutScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import ManageMenuScreen from "../screens/ManageMenuScreen";
import OrderManagementScreen from "../screens/OrderManagementScreen";
import ReportsScreen from "../screens/ReportsScreen";
import Header from "../components/Header"; // Import the header

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomerTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#ff5722", // Active tab color
      tabBarInactiveTintColor: "gray", // Inactive tab color
    }}
  >
    <Tab.Screen
      name="Menu"
      component={MenuScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="fast-food-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Order History"
      component={OrderHistoryScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document-text-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const StaffTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#ff5722", // Active tab color
      tabBarInactiveTintColor: "gray", // Inactive tab color
    }}
  >
    <Tab.Screen
      name="Reports"
      component={ReportsScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bar-chart-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Order Management"
      component={OrderManagementScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="clipboard-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Manage Menu"
      component={ManageMenuScreen}
      options={{
        header: () => <Header />,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }} // Hide header on landing
      />
      <Stack.Screen
        name="Customer"
        component={CustomerTabNavigator}
        options={{ headerShown: false }} // Hide header when navigating to Customer
      />
      <Stack.Screen
        name="Staff"
        component={StaffTabNavigator}
        options={{ headerShown: false }} // Hide header when navigating to Staff
      />
      <Stack.Screen 
        name="Checkout" 
        component={CheckoutScreen} // Use tab navigator for staff
        options={{ header: () => <Header />, }} // Hide header when navigating to Staff
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
