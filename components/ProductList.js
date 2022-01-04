import * as React from "react";
import { Platform, StyleSheet, Text, View, SafeAreaView } from "react-native";
import ProductCard from "./ProductCard";
import foodList from "../api/grocery";

const productList = () => {
  //return <ProductCard data={foodList[3]} />;
  const list = foodList.map((item) => {
    return <ProductCard data={item} />;
  });

  return list;
};

export default productList;
