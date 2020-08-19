import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "./styles";

export const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
    style={styles.container}
  >
    {children}
  </TouchableWithoutFeedback>
);
