import * as React from "react";
import ProductList from "./ProductList";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={ProductList}
        options={{ title: "My home" }}
      />
      <Stack.Screen
        name="Restaurants"
        component={ProductList}
        options={{ title: "Restaurants" }}
      />
      <Stack.Screen
        name="SuperMarkets"
        component={ProductList}
        options={{ title: "SuperMarkets" }}
      />
    </Stack.Navigator>
  );
};

export default MyTabs;
