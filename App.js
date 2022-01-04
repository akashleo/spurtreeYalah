/*import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNaviationOptions: {
      title: "Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);*/

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <Navbar />
          <SearchBar />
          <ProductList style={styles.product} />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 70,
  },
  product: {
    padding: 20,
    width: "50%",
    margin: 10,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});

export default App;
