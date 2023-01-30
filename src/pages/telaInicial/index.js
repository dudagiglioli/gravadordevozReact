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
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import Audio from "../ouvir";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import InAppReview from "react-native-in-app-review";
import AudioRecorderPlayer from "react-native-audio-recorder-player";

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function TelaInicial() {
  const [defaultRating, setDefaultRating] = useState(0); //definindo o estado das estrela, que se inicia em 0, ou seja, nenhuma está preenchida
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]); // definindo a qtde de estrelas que irá aparecer na tela
  const options = ["Sem Tag", "Estudo", "Faculdade", "Minhas Músicas"];
  const [visibleModal, setVisibleModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [gravar, setGravar] = useState(true);
  const [tempograv, setTempoGrav] = useState({ recordSecs: 0, recordTime: 0 });
  const [gravando, setGravando] = useState(false);

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

  //parar gravação
  async function onStopRecording() {
    setGravando(false);
    const result = await audioRecorderPlayer.stopRecorder();

    audioRecorderPlayer.removeRecordBackListener();
    setTempoGrav({
      recordSecs: 0,
      recordTime: tempograv.recordTime,
    });
    console.log(result);
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

            <Text style={styles.text}>Pronto para começar</Text>
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
                      style={styles.input}
                      maxLength={50}
                      placeholder="Nome"
                    />

                    <SelectDropdown
                      data={options}
                      onSelect={(selectedItem, index) => {
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

                    <View style={styles.linha}>
                      <LinearGradient
                        style={styles.salvar}
                        colors={["#BFCDE0", "#5D5D81"]}
                      >
                        <Text style={styles.textsalvar}>Salvar</Text>
                      </LinearGradient>

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
                <Ionicons
                  name="mic"
                  size={60}
                  color={gravando ? "red" : "white"}
                />
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={styles.final}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setVisible(!visible);
              }}
            >
              <View style={styles.modal}>
                <View style={styles.view}>
                  <TouchableOpacity
                    style={styles.circle}
                    onPress={() => setVisible(!visible)}
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

            <TouchableOpacity onPress={() => setVisible(true)}>
              <LinearGradient
                style={styles.text}
                colors={["#BFCDE0", "#5D5D81"]}
              >
                <Text>Avaliar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
