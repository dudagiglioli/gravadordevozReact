import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "blue",
    flex: 0.3,
  },

  teste: {
    backgroundColor: "red",
    flex: 3,
  },

  view: {
    backgroundColor: "#5D5D81",
    flex: 0.5,

    bottom: 0,
  },

  text1: {
    color: "black",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 1,
  },
});

export default styles;
