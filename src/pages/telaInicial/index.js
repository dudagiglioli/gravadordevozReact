import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import Audio from "../ouvir";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import InAppReview from "react-native-in-app-review";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import RNFS from "react-native-fs";
import sqlite from "../../classes/sqlite";

const audioRecorderPlayer = new AudioRecorderPlayer();
const arrayOpcoes = ["Sem Tag", "Estudo", "Faculdade", "Minhas Músicas"];

export default function TelaInicial() {
  const [opcao, setOpcao] = useState();
  const [nome, setNome] = useState();
  const [defaultRating, setDefaultRating] = useState(0); //definindo o estado das estrela, que se inicia em 0, ou seja, nenhuma está preenchida
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]); // definindo a qtde de estrelas que irá aparecer na tela
  const [visibleModal, setVisibleModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [gravar, setGravar] = useState(true);
  const [tempograv, setTempoGrav] = useState({
    recordSecs: 0,
    recordTime: "00:00",
  });
  const [gravando, setGravando] = useState(false);
  const [frase, setFrase] = useState({
    inicio: "Pronto para começar",
    grav: "Gravando",
  });

  //iniciar gravação
  async function startRecording() {
    setGravando(true);
    if (Platform.OS === "android") {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log("write external stroage", grants);

        if (
          grants["android.permission.WRITE_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.READ_EXTERNAL_STORAGE"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants["android.permission.RECORD_AUDIO"] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("Permissions granted");
        } else {
          console.log("All required permissions not granted");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setTempoGrav({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      return;
    });
    console.log(result);
  }

  async function SalvarBanco() {
    const date = new Date().toLocaleString();
    await sqlite.query(
      `INSERT INTO audios (title, data_hora, tamanho, tags, duracao, caminho) VALUES ("${nome}", "${date}", "", "${opcao}", "${tempograv.recordTime}", "") `
    );
  }

  //parar gravação
  async function onStopRecording() {
    setGravando(false);
    const result = await audioRecorderPlayer.stopRecorder();

    audioRecorderPlayer.removeRecordBackListener();
    setTempoGrav({
      recordSecs: 0,
      recordTime: tempograv.recordTime,
    });

    setVisibleModal(!visibleModal);
  }

  function toggleMudarTela(teste) {
    setGravar(teste);
  }

  const RatingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <AntDesign
                name={item <= defaultRating ? "star" : "staro"}
                size={40}
                color="#BFCDE0"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggleMudarTela(true)}>
          <Text style={gravar ? styles.gravar : styles.ouvir}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleMudarTela(false)}>
          <Text style={gravar ? styles.ouvir : styles.gravar}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      {!gravar ? (
        <Audio />
      ) : (
        <>
          <View style={styles.meio}>
            <Text style={styles.timer}>{tempograv.recordTime}</Text>

            <Text style={styles.text}>
              {gravando > 0 ? frase.grav : frase.inicio}
            </Text>
          </View>

          <View style={styles.footer}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={visibleModal}
              onRequestClose={() => {
                setVisibleModal(!visibleModal);
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => setVisibleModal(!visibleModal)}
              >
                <View style={styles.modal}>
                  <View style={styles.view}>
                    <Text style={styles.salvarGrav}>Salvar Gravação</Text>

                    <TextInput
                      onChangeText={(tex) => {
                        setNome(tex);
                        console.log(tex);
                      }}
                      style={styles.input}
                      maxLength={50}
                      placeholderTextColor={"#3B3355"}
                      placeholder="Nome"
                    />

                    <SelectDropdown
                      data={arrayOpcoes}
                      onSelect={(selectedItem, index) => {
                        setOpcao(selectedItem);
                        console.log(selectedItem, index);
                      }}
                      defaultButtonText={"Tag"}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      buttonStyle={styles.opcoes}
                      buttonTextStyle={styles.textbutton}
                      renderDropdownIcon={(isOpened) => {
                        return (
                          <AntDesign
                            name={isOpened ? "caretup" : "caretdown"}
                            color={"#3B3355"}
                            size={18}
                          />
                        );
                      }}
                      dropdownIconPosition={"right"}
                      dropdownStyle={styles.colorClick}
                      rowStyle={styles.linhaClick}
                      rowTextStyle={styles.textClick}
                    />

                    <View style={styles.linha2}>
                      <TouchableOpacity
                        style={styles.circle2}
                        onPress={() => setVisibleModal(false)}
                      >
                        <LinearGradient
                          style={styles.btcircle}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Feather
                            style={styles.xicon}
                            name="x"
                            size={30}
                            color="white"
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.linha}>
                      <TouchableOpacity onPress={() => setVisible(!visible)}>
                        <LinearGradient
                          style={styles.salvar}
                          colors={["#BFCDE0", "#5D5D81"]}
                        >
                          <Text style={styles.textsalvar} onPress={SalvarBanco}>
                            Salvar
                          </Text>
                        </LinearGradient>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => setVisibleModal(!visibleModal)}
                      >
                        <LinearGradient
                          style={styles.botaoCancelar}
                          colors={["#5D5D81", "#3B3355"]}
                        >
                          <Text style={styles.textCancelar}>Cancelar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            <LinearGradient
              style={styles.icon2}
              colors={["#BFCDE0", "#5D5D81"]}
            >
              <TouchableOpacity
                onPress={gravando > 0 ? onStopRecording : startRecording}
              >
                {gravando ? (
                  <Entypo name="controller-record" size={50} color={"#fff"} />
                ) : (
                  <Ionicons name="mic" size={60} color="#fff" />
                )}
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.final}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
              onRequestClose={() => {
                setVisible(!visible);
              }}
            >
              <View style={styles.modal}>
                <View style={styles.view}>
                  <TouchableOpacity
                    style={styles.circle}
                    onPress={() => setVisible(false)}
                  >
                    <LinearGradient
                      style={styles.btcircle}
                      colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                    >
                      <Feather
                        style={styles.xicon}
                        name="x"
                        size={30}
                        color="white"
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  <Text style={styles.salvarGrav}>
                    Parabéns! Você gravou seu primeiro áudio!
                  </Text>
                  <View>
                    <Text style={styles.avaliacao}>
                      Nos avalie com 5 estrelas se estiver gostando do
                      aplicativo!
                    </Text>
                    <RatingBar />
                    <Text>
                      {defaultRating} / {Math.max.apply(null, maxRating)}
                    </Text>
                    <View style={styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => {
                          if (defaultRating >= 4) {
                            InAppReview.RequestInAppReview();
                            console.log(defaultRating);
                          } else {
                            setVisible(false);
                          }
                        }}
                      >
                        <LinearGradient
                          style={styles.avaliar}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Text style={styles.textStyle1}>Avaliar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </>
      )}
    </View>
  );
}
