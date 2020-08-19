import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from "./styles";
import { View } from "react-native";

export const NavigationDropdown = ({
  items,
  placeholder,
  onValueChange,
  value,
}) => {
  return (
    <View style={styles.selectBlock}>
      <RNPickerSelect
        onValueChange={onValueChange}
        style={{ ...pickerSelectStyles }}
        items={items}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};
