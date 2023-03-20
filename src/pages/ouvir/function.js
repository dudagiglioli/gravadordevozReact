import React, { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import sqlite from "../../classes/sqlite";
import Ionicons from "react-native-vector-icons/Ionicons";
import Trimmer from "react-native-trimmer";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import _ from "lodash";

const audioRecorderPlayer = new AudioRecorderPlayer(); //p tocar o audio

//atualizar lista
export function Item({ data, setLista, setExibirPLayer, exibirPlayer }) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [nome, setNome] = useState("");
  const [state, setState] = useState({
    trimmerLeftHandlePosition: 0,
    trimmerRightHandlePosition: 13,
  });
  const [posicaoTimerAudio, setPosicaoTimerAudio] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: "00:00",
    duration: "00:00",
  });
  const [recording, setRecording] = useState(false);

  async function onStartPlay() {
    setRecording(true);
    const msg = await audioRecorderPlayer.startPlayer(data.caminho);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setPosicaoTimerAudio({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmss(
          Math.floor(e.currentPosition / 1000) //gravar em segundos
        ),
        duration: audioRecorderPlayer.mmss(Math.floor(e.duration / 1000)), //gravar em segundos
      });

      return;
    });
  }

  //pausar o audio
  async function onPausePlay() {
    setRecording(false);
    await audioRecorderPlayer.pausePlayer();
  }

  async function onHandleChange({ leftPosition, rightPosition }) {
    setState({
      trimmerRightHandlePosition: rightPosition,
      trimmerLeftHandlePosition: leftPosition,
    });
  }

  async function deleteId(id_audio) {
    await sqlite.query(`DELETE FROM audios WHERE id_audio = ${id_audio}`);
    setLista(await sqlite.query("SELECT * FROM audios")); //atualizar lista
  }

  async function UpdateName(id_audio) {
    await sqlite.query(
      `UPDATE audios SET title = "${nome}" WHERE id_audio = ${id_audio}`
    );
    setLista(await sqlite.query("SELECT * FROM audios")); //atualizar lista
  }

  // async function editar(){
  // }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setExibirPLayer(data.id_audio)}
        style={[
          styles.backg2,
          exibirPlayer === data.id_audio ? styles.backg : false,
        ]}
        // puxando o exibir player(PAI) para mudar a cor de cada item selecionado pelo ID(filhos) e aparecer o player
        // OBS: quando for chamar algo(do BD ou outro lugar), não colocar entre aspas pq ñ estará funcionando, será considerado uma palavra
      >
        <Text style={styles.mp4}>{data.title}</Text>
        <View style={styles.p1}>
          <Text style={styles.l1}>{data.data}</Text>
          <Text style={styles.l2}>{data.hora}</Text>
          <Text style={styles.l3}>{data.tamanho}kb</Text>
        </View>

        <View style={styles.linha5}>
          <TouchableOpacity onPress={() => setModalVisibleIcon(true)}>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={"rgba(59, 51, 85, 1)"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalEditar(true)}
            style={{ backgroundColor: "#F8EFFB", height: 30, width: 30 }}
          >
            <Feather name="scissors" color={"rgba(59, 51, 85, 1)"} size={20} />

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalEditar}
              enum="overFullScreen"
              onRequestClose={() => {
                modalEditar(!setModalEditar);
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => setModalEditar(!modalEditar)}
              >
                <View style={styles.modalOpen}>
                  <View style={styles.modalView2}>
                    <TouchableOpacity
                      style={styles.buttonClose2}
                      onPress={() => setModalEditar(false)}
                    >
                      <LinearGradient
                        colors={["#BFCDE0", "#5D5D81"]}
                        style={styles.buttonCloseStyles2}
                      >
                        <AntDesign name="close" size={20} color="#fff" />
                      </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.textEditar}>Editar</Text>

                    {/* //slider com dois thumbs p editar o audio */}
                    <View style={styles.viewtrimmer}>
                      <Trimmer
                        onHandleChange={onHandleChange}
                        totalDuration={posicaoTimerAudio.currentDurationSec}
                        trimmerLeftHandlePosition={
                          state.trimmerLeftHandlePosition
                        }
                        trimmerRightHandlePosition={
                          state.trimmerRightHandlePosition
                        }
                      />
                    </View>

                    <View style={styles.editor}>
                      <Text style={styles.timer2}>
                        {posicaoTimerAudio.playTime}
                      </Text>

                      <TouchableOpacity
                        onPress={recording ? onPausePlay : onStartPlay}
                      >
                        {recording ? (
                          <Ionicons
                            name="ios-stop-circle-outline"
                            size={100}
                            color={"#3B3355"}
                            style={styles.button}
                          />
                        ) : (
                          <Ionicons
                            name="play-circle-outline"
                            size={100}
                            color={"#3B3355"}
                            style={styles.button}
                          />
                        )}
                      </TouchableOpacity>

                      <Text style={styles.timer2}>{data.duracao}</Text>
                    </View>

                    <View style={styles.linhaeditar}>
                      <TouchableOpacity>
                        <LinearGradient
                          colors={["#BFCDE0", "#5D5D81"]}
                          style={styles.buttonBack}
                        >
                          <Text style={styles.Text}>Back</Text>
                        </LinearGradient>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <LinearGradient
                          colors={["#BFCDE0", "#5D5D81"]}
                          style={styles.buttonDone}
                          onPress={data.duracao >= 10 ? cortarAudio : recording}
                        >
                          <Text style={styles.Text}>Done</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </TouchableOpacity>
        </View>

        <View style={styles.p2}>
          <Text style={styles.tipo}>{data.tags}</Text>
          <Text style={styles.timer}>{data.duracao}</Text>
        </View>

        <View style={styles.linhadivide} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleIcon}
          enum="overFullScreen"
          onRequestClose={() => {
            setModalVisibleIcon(!setModalVisibleIcon);
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setModalVisibleIcon(!modalVisibleIcon)}
          >
            <View style={styles.modalOpen}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisibleIcon(false)}
                >
                  <LinearGradient
                    colors={["#BFCDE0", "#5D5D81"]}
                    style={styles.buttonCloseStyles}
                  >
                    <AntDesign name="close" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.text}>Propriedades</Text>

                <TextInput
                  onChangeText={(tex) => {
                    setNome(tex);
                  }}
                  style={styles.input}
                  placeholderTextColor={"#3B3355"}
                  placeholder="Nome"
                />

                <View style={styles.linhadelete}>
                  <TouchableOpacity onPress={() => UpdateName(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={styles.salvar}
                    >
                      <Text style={styles.Text}>Editar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => deleteId(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={styles.salvar}
                    >
                      <AntDesign name="delete" size={25} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}
