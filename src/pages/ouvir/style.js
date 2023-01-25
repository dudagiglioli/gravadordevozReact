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
    top: 30,
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
    flex: 1,
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

  gravar: {
    color: "rgba(59, 51, 85, 0.45)",
    fontSize: 20,
    fontWeight: "300",
  },

  ouvir: {
    color: "#3B3355",
    fontSize: 20,
    fontWeight: "500",
  },

  text2: {
    fontSize: 25,
    color: "white",
  },

  text3: {
    borderWidth: 2,
    borderColor: "white",
    width: 50,
    height: 25,
    color: "white",
    fontSize: 15,
    marginTop: 10,
    left: 10,
    lineHeight: 24,
    textAlign: "center",
  },

  text4: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
    width: 55,
    textAlign: "center",
  },

  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
    padding: 100,
  },
});

export default styles;
