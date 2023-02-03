import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    backgroundColor: "white",
    // flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: '10%'
  },

  gravar: {
    color: "#3B3355",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "SofiaSans-Light",
  },

  ouvir: {
    color: "rgba(59, 51, 85, 0.45)",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "SofiaSans-Light",
  },

  meio: {
    backgroundColor: "white",
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  timer: {
    fontFamily: "SofiaSans-Light",
    fontWeight: "500",
    fontSize: 50,
    color: "#3B3355",
  },

  text: {
    fontFamily: "SofiaSans-Light",
    fontWeight: "500",
    fontSize: 20,
    color: "rgba(59, 51, 85, 0.45)",
  },

  footer: {
    flex: 1,
    bottom: 0,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  icon2: {
    borderRadius: 70,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    backgroundColor: "rgba(0,0,0,0.5)", //deixa o fundo cinza
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  view: {
    flexDirection: "column",
    marginHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
  },

  centeredView3: {
    flex: 1,
    width: 330,
    height: 310,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "SofiaSans-Light",
  },

  salvarGrav: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SofiaSans-Light",
  },

  input: {
    marginBottom: "4%",
    marginTop: "4%",
    borderWidth: 1,
    borderColor: "#3B3355",
    padding: 10,
    borderRadius: 5,
    width: 262,
    height: 47,
    color: "#3B3355",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "SofiaSans-Light",
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
    fontFamily: "SofiaSans-Light",
  },

  botaoCancelar: {
    borderRadius: 6,
    height: 38,
    width: 92,
    textAlign: "center",
    marginLeft: "4%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    fontFamily: "SofiaSans-Light",
  },

  salvar: {
    borderRadius: 6,
    height: 38,
    width: 160,
    marginRight: "4%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    fontFamily: "SofiaSans-Light",
  },

  textsalvar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "SofiaSans-Light",
  },

  opcoes: {
    borderWidth: 1,
    borderColor: "#3B3355",
    borderRadius: 5,
    width: 262,
    height: 47,
    backgroundColor: "white",
  },

  textbutton: {
    color: "#3B3355",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontFamily: "SofiaSans-Light",
  },

  colorClick: {
    backgroundColor: "#DDDD",
  },

  linhaClick: {
    backgroundColor: "#FFFF",
    borderBottomColor: "#FFFF",
  },

  textClick: {
    color: "#000",
    textAlign: "left",
    marginLeft: "5%",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "SofiaSans-Light",
  },

  avaliacao: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: "#000",
    marginTop: "5%",
    fontFamily: "SofiaSans-Light",
  },

  circle: {
    flexDirection: "row-reverse",
    left: 150,
    bottom: 35,
  },

  btcircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  xicon: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 3,
  },

  alinhar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  avaliar: {
    width: 260,
    height: 42,
    borderRadius: 6,
    marginRight: 10,
    fontFamily: "SofiaSans-Light",
  },

  textStyle1: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    top: 5,
    fontFamily: "SofiaSans-Light",
  },

  ratingBarStyle: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 30,
  },

  final: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },

  botao: {
    borderRadius: 100,
    width: 87,
    height: 87,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
