import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  //const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar placeholder="Search your favourites" />
    </View>
  );
};

export default SearchScreen;
