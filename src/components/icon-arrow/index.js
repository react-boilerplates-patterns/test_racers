import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

export const IconArrow = ({ direction }) => {
  return <SimpleLineIcons name={direction} size={24} color="black" />;
};
