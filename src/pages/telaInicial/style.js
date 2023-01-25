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

  modal: {
    flex: 0.5,
    marginTop: "50%",
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    width: 330,
    left: 30,
    borderRadius: 8,
  },

  view: {
    flexDirection: "column",
    marginTop: 15,
    justifyContent: "center",
  },

  salvarGrav: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },

  input: {
    borderWidth: 1,
    borderColor: "rgba(59, 51, 85, 1)",
    borderRadius: 8,
    width: 300,
    fontSize: 20,
    alignSelf: "center",
    color: "black",
    marginTop: 15,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },

  textCancelar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  botaoCancelar: {
    borderRadius: 6,
    height: 38,
    width: 78,
    textAlign: "center",
    marginLeft: "4%",
    justifyContent: "center",
    alignItems: "center",
  },

  salvar: {
    borderRadius: 6,
    height: 38,
    width: 160,
    marginRight: "4%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  textsalvar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});

export default styles;
