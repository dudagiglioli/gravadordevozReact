import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  linearGradient: {
    height: 370,
    width: 500,
    opacity: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    flex: 1,
  },

  icon: {
    flexDirection: "row-reverse",
    top: 10,
    left: 100,
  },

  icon2: {
    top: 178,
    left: -178,
    borderRadius: 70,
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  easy: {
    color: "#BFCDE0",
    left: -100,
    fontSize: 43,
    top: 120,
    fontWeight: "400",
  },

  recorder: {
    color: "#3B3355",
    fontSize: 43,
    fontWeight: "500",
    top: 62,
    left: 35,
  },

  rectangle: {
    top: 150,
    borderRadius: 100,
    color: "black",
  },

  text3: {
    color: "#5D5D81",
    fontWeight: "450",
    fontSize: 30,
    top: 10,
    left: -1,
    justifyContent: "center",
    alignItems: "center",
  },

  text4: {
    color: "#5D5D81",
    fontWeight: "300",
    fontSize: 25,
    top: 15,
    left: 3,
    textAlign: "center",
  },

  text5: {
    color: "#5D5D81",
    fontWeight: "500",
    fontSize: 35,
    top: 7,
    left: -0.5,
    alignItems: "center",
  },

  vitalicio: {
    color: "#5D5D81",
    fontWeight: "450",
    fontSize: 25,
    top: 10,
    left: -0.5,
    textAlign: "center",
  },

  text: {
    color: "black",
    fontSize: 10,
    left: 15,
    margin: 3,
    width: 380,
    top: -10,
    textAlign: "justify",
    lineHeight: 15,
  },

  text2: {
    color: "white",
    fontSize: 20,
  },

  text6: {
    color: "#5D5D81",
    fontWeight: "205",
    fontSize: 20,
    top: 4,
    left: -0.5,
    alignItems: "center",
  },

  linha2: {
    top: 151,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#5D5D81",
    left: 20,
    width: 100,
    borderRadius: 10,
    height: 110,
  },

  linha3: {
    top: 40,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#5D5D81",
    left: 150,
    width: 100,
    borderRadius: 10,
    height: 110,
  },

  linha4: {
    top: -80,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#5D5D81",
    left: 280,
    width: 120,
    borderRadius: 10,
    height: 130,
  },

  touch: {
    top: -25,
    left: 20,
    width: 380,
    color: "black",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    padding: 5,
    borderRadius: 13,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: -50,
  },

  linhav: {
    backgroundColor: "#918DA0",
    width: 60,
    height: 2,
    left: 310,
    top: -190,
    transform: [{ rotateY: "1deg" }, { rotateZ: "15deg" }],
  },
});

export default styles;
