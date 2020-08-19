import React from "react";
import { Button } from "@components/button";
import { View } from "react-native";
import { styles } from "./styles";

export const NavigationButtons = ({ resetHandler, navigateToDrivers }) => {
  return (
    <View style={styles.buttonsBlock}>
      <Button title="Reset" onPress={resetHandler} />
      <Button title="Submit" onPress={navigateToDrivers} />
    </View>
  );
};
