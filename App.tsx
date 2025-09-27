// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Button } from "react-native";

// Define types for navigation
export type RootStackParamList = {
  Menu: undefined;
  Cart: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Placeholder Menu Screen
function MenuScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>🍽️ Menu Screen</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
}

// Placeholder Cart Screen
function CartScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>🛒 Cart Screen</Text>
      <Button
        title="Proceed to Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
}

// Placeholder Checkout Screen
function CheckoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>💳 Checkout Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
