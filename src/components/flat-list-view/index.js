import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";

export const FlatListView = ({ list, extractor, renderItem }) => {
  return (
    <FlatList
      style={[styles.list]}
      data={list}
      renderItem={renderItem}
      keyExtractor={extractor}
    />
  );
};
