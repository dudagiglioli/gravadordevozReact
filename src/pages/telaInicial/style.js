import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "white",
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  gravar: {
    color: "#3B3355",
    fontSize: 20,
    fontWeight: "500",
  },

  ouvir: {
    color: "rgba(59, 51, 85, 0.45)",
    fontSize: 20,
    fontWeight: "300",
  },

  meio: {
    backgroundColor: "white",
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  timer: {
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 50,
    color: "#3B3355",
  },

  text: {
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 12.5,
    color: "rgba(59, 51, 85, 0.45)",
  },

  footer: {
    flex: 1,
    bottom: 0,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  icon2: {
    borderRadius: 70,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
