import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navContainer: {
    paddingVertical: 80,
    flex: 2,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  button: {
    minWidth: 100,
  },
});
