import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  background: {
    opacity: 0.9,
    flex: 0.57,
  },

  icon: {
    flexDirection: "row-reverse",
    top: 50,
    right: 15,
  },

  icon2: {
    color: "#BFCDE0",
    top: 238,
    left: 40,
  },

  easy: {
    color: "#C0C0C0",
    left: 98,
    fontSize: 43,
    top: 173,
  },

  recorder: {
    color: "black",
    fontSize: 43,
    fontWeight: "500",
    top: 115,
    left: 190,
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
    top: 140,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  text4: {
    color: "#5D5D81",
    fontWeight: "300",
    fontSize: 25,
    top: 140,
    left: 15,
    textAlign: "center",
  },

  text5: {
    color: "#5D5D81",
    fontWeight: "500",
    fontSize: 35,
    top: 140,
    left: 15,
    alignItems: "center",
  },

  vitalicio: {
    color: "#5D5D81",
    fontWeight: "450",
    fontSize: 25,
    top: 140,
    left: 15,
    textAlign: "center",
  },

  text: {
    color: "black",
    fontSize: 10,
    left: 15,
    margin: 3,
    width: 380,
    top: 250,
    textAlign: "justify",
    lineHeight: 15,
    justifyContent: "flex-end",
  },

  text2: {
    color: "black",
    fontSize: 20,
  },

  linha2: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: 50,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },

  touch: {
    top: 230,
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
    top: 200,
  },
});

export default styles;
