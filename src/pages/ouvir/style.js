import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  meio: {
    backgroundColor: "white",
    flex: 3,
    flexDirection: "row",
    marginTop: "8%",
  },

  mp4: {
    color: "black",
    fontSize: 20,
    textAlign: "justify",
    left: 25,
    fontFamily: "SofiaSans-Light",
    marginTop: "3%",
  },

  p1: {
    flexDirection: "row",
    left: 25,
  },

  l1: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "SofiaSans-Light",
  },

  l2: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "SofiaSans-Light",
    left: 10,
  },

  l3: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "SofiaSans-Light",
    left: 20,
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
    fontFamily: "SofiaSans-Light",
  },

  timer: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "SofiaSans-Light",
    left: 10,
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
    fontFamily: "SofiaSans-Light",
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
    fontFamily: "SofiaSans-Light",
  },

  ouvir: {
    color: "#3B3355",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "SofiaSans-Light",
  },

  text2: {
    fontSize: 25,
    color: "white",
    fontFamily: "SofiaSans-Light",
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
    fontFamily: "SofiaSans-Light",
  },

  text4: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
    width: 55,
    textAlign: "center",
    fontFamily: "SofiaSans-Light",
  },

  buttonBack: {
    height: "23%",
    width: "300%",
    borderRadius: 35,
    justifyContent: "center",
    marginTop: "30%",
    right: "100%",
  },

  buttonDone: {
    height: "23%",
    width: "300%",
    borderRadius: 35,
    justifyContent: "center",
    marginTop: "30%",
    right: "100%",
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

  linha5: {
    flexDirection: "row-reverse",
    right: 20,
    marginTop: -20,
  },

  modalOpen: {
    backgroundColor: "rgba(0,0,0,0.5)", //deixa o fundo cinza
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  modalView: {
    flexDirection: "column",
    marginHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center",
    width: 300,
    height: 200,
  },

  modalView2: {
    flexDirection: "column",
    marginHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 25,
    width: "100%",
    height: "70%",
    marginTop: "50%",
  },

  buttonClose: {
    position: "absolute",
    left: 280,
    top: -10,
  },

  buttonClose2: {
    position: "absolute",
    left: "88%",
    marginTop: "160%",
  },

  buttonCloseStyles: {
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonCloseStyles2: {
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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

  text: {
    color: "#3B3355",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "SofiaSans-Light",
  },

  textEditar: {
    color: "#3B3355",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "SofiaSans-Light",
  },

  Text: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "SofiaSans-Light",
  },

  salvar: {
    height: 30,
    width: 50,
    borderRadius: 5,
    justifyContent: "space-around",
    // alignItems: "center",
    marginTop: "10%",
  },

  linhadelete: {
    flexDirection: "row",
  },

  linhadivide: {
    backgroundColor: "#BFCDE0",
    height: 1,
    marginTop: "2%",
    width: "90%",
    left: "5%",
  },

  linhaeditar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  backg: {
    backgroundColor: "#E6E8FA",
    width: "90%",
    left: "5%",
    borderRadius: 3,
  },

  backg2: {
    backgroundColor: "white",
  },

  button: {
    marginTop: "15%",
    right: "25%",
    left: "20%",
  },

  editor: {
    flexDirection: "row",
    justifyContent: "center",
  },

  timer2: {
    marginTop: "13%",
    fontFamily: "SofiaSans",
    fontSize: 30,
    fontWeight: "600",
    color: "#5D5D81",
  },

  timer3: {
    marginTop: "13%",
    fontFamily: "SofiaSans",
    fontSize: 30,
    fontWeight: "600",
    color: "#5D5D81",
    left: "30%",
  },
});

export default styles;
