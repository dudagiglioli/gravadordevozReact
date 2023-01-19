import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  icon: {
    margin: 15,
    marginTop: 40,
    bottom: 20,
    right: -48,
  },

  gravar: {
    width: 49,
    height: 50,
    top: 17,
    left: 76,
    position: "absolute",
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
    lineHeight: 20,
    right: 12,
    marginTop: 20,
  },

  ouvir: {
    position: "absolute",
    with: 49,
    height: 50,
    left: 275,
    top: 17,
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 20,
    color: "rgba(59, 51, 85, 0.45)",
    marginTop: -109,
  },

  timer: {
    position: "absolute",
    width: 180,
    height: 129,
    left: 148,
    top: 300,
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 50,
    lineHeight: 100,
    color: "#3B3355",
  },

  text: {
    position: "absolute",
    width: 180,
    height: 129,
    left: 154,
    top: 335,
    fontFamily: "Sofia Sans",
    fontWeight: "500",
    fontSize: 12.5,
    lineHeight: 100,
    color: "rgba(59, 51, 85, 0.45)",
  },

  icon2: {
    top: 500,
    left: 160,
    borderRadius: 70,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
