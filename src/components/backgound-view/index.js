import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";

export const BackgroundView = ({ children, style }) => (
  <SafeAreaProvider style={[styles.root, style]}>{children}</SafeAreaProvider>
);
