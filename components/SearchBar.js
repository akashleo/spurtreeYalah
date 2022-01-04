/*import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput style="styles.inputStyle" placeholder="Search">
        <Feather name="search" style="styles.iconStyle" />
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  iconStyle: {
    flex: 1,
    fontSize: 30,
  },
  inputStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    backgroundColor: "#FF00FF",
    borderWidth: 2,
    borderColor: "black",
  },
});

export default SearchBar;*/

import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search your favourites"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
