import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  buttonsBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    minWidth: 100,
  },
  notDisplay: {
    display: "none",
  },
  emptyListText: {
    fontSize: 24,
    textAlign: "center",
    top: "50%",
  },
});
