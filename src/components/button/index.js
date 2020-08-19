import React from "react";
import { Button as RNElementsButton } from "react-native-elements";
import { styles } from "./styles";

export const Button = ({
  iconComponent,
  title,
  buttonStyle,
  onPress,
  loading,
  disabled,
  disabledStyle,
}) => {
  return (
    <RNElementsButton
      title={title}
      loading={loading}
      icon={iconComponent}
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      type="clear"
      disabled={disabled}
      disabledStyle={disabledStyle}
    />
  );
};
