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

  meio: {
    backgroundColor: "white",
    flex: 3,
    flexDirection: "row",
  },

  mp4: {
    color: "black",
    fontSize: 20,
    textAlign: "justify",
    left: 25,
  },

  p1: {
    flexDirection: "row",
    left: 25,
  },

  l1: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
  },

  p2: {
    flexDirection: "row",
    alignItems: "flex-start",
    left: 25,
  },

  tipo: {
    fontSize: 10,
    color: "rgba(191, 205, 224, 1)",
    backgroundColor: "#3B3355",
    borderRadius: 3,
  },

  timer: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
  },

  tesoura: {
    right: 60,
    top: 15,
  },

  ponto: {
    right: 50,
    top: 15,
  },

  footer: {
    backgroundColor: "#5D5D81",
    flex: 0.8,
    bottom: 0,
  },

  text1: {
    color: "black",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },

  slider: {},

  gravar: {
    color: "rgba(59, 51, 85, 0.45)",
  },

  ouvir: {
    color: "#3B3355",
  },

  text2: {
    fontSize: 25,
    color: "white",
  },

  text3: {
    borderWidth: 1,
    borderColor: "white",
    width: 35,
    height: 20,
    color: "white",
    fontSize: 13,
  },

  text4: {
    fontSize: 13,
    color: "white",
  },

  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 30,
  },
});

export default styles;
