import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const EmptyList = () => {
  return (
    <View style={styles.emptyListBlock}>
      <Text style={styles.emptyListText}>Nothing to show.</Text>
    </View>
  );
};
