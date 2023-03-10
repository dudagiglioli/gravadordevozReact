import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import { Item } from "./function";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Slider } from "@miblanchard/react-native-slider";
import { useNavigation } from "@react-navigation/native";
import sqlite from "../../classes/sqlite";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import _ from "lodash";

const audioRecorderPlayer = new AudioRecorderPlayer(); //p tocar o audio

export default function Audio() {
  const [playerState, setPlayerSatate] = useState(false);
  const [lista, setLista] = useState([]);
  const [exibirPlayer, setExibirPLayer] = useState(false); //chamar o player
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };
  const [recording, setRecording] = useState(false);
  const [posicaoTimerAudio, setPosicaoTimerAudio] = useState({
    currentPositionSec: 1,
    currentDurationSec: 20,
    playTime: "00:00",
    duration: "00:00",
  });

  function toggleMusicPlay() {
    setPlayerSatate(!playerState);
  }

  //chamar o player
  function Exibir() {
    setExibirPLayer(!exibirPlayer);
  }

  function renderItem({ item }) {
    return (
      <Item
        data={item}
        setLista={setLista}
        setExibirPLayer={setExibirPLayer}
        exibirPlayer={exibirPlayer}
      />
    ); //chamar o player
  }

  //ver posição da array
  async function idTeste() {
    try {
      let index;
      _.findIndex(lista, (valor, i) => {
        if (valor.id_audio === exibirPlayer) {
          index = i;
        }
      });

      setExibirPLayer(lista[index + 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  //ver posição da array
  async function idVoltar() {
    try {
      let index;
      _.findIndex(lista, (valor, i) => {
        if (valor.id_audio === exibirPlayer) {
          index = i;
        }
      });

      setExibirPLayer(lista[index - 1].id_audio);
      console.log(index);
    } catch (error) {
      console.log(error);
    }
  }

  // tocar audio
  async function onStartPlay() {
    let index;
    _.findIndex(lista, (valor, i) => {
      if (valor.id_audio === exibirPlayer) {
        index = i;
      }
    });
    setRecording(true);
    const msg = await audioRecorderPlayer.startPlayer(lista[index].caminho);
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener((e) => {
      setPosicaoTimerAudio({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmss(
          Math.floor(e.currentPosition / 1000)
        ),
        duration: audioRecorderPlayer.mmss(Math.floor(e.duration / 1000)),
      });

      return;
    });
  }

  async function onPausePlay() {
    setRecording(false);
    await audioRecorderPlayer.pausePlayer();
  }

  async function onStopPlay() {
    console.log("onStopPlay");
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  }

  useEffect(() => {
    async function getData() {
      // set os valores do database
      const data = await sqlite.query("SELECT * FROM audios");
      console.log(data);
      setLista(data);
    }

    getData();
  }, []);

  // const changeAudio= async(context, select) => {
  // plabackObj,
  // currentAudioIndex,
  // totalAudioCount,
  // audioFiles,
  // updateState
  // } = context;
  // try{
  //   const {isLoaded} = await plabackObj.getStatusAsync()
  //   const isLastAudio = currentAudioIndex + 1 === totalAudioCount;
  //   const isFirstAudio = currentAudioIndex <= 0;
  // }

  // if (select == 'next'){
  //   audio = audioFiles[currentAudioIndex +1]

  //   if(isLoaded && !isLastAudio){

  //   }
  // const handleNext = async () =>{
  //   const {isLoaded} = await context.recording.getStatusAsync();
  //   const isLastAudio = context.id_audio + 1 ===
  // }

  return (
    <View style={styles.container}>
      <View style={styles.meio}>
        <FlatList
          data={lista}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {exibirPlayer ? (
        <LinearGradient style={styles.footer} colors={["#BFCDE0", "#5D5D81"]}>
          <View style={styles.view}>
            <Text style={styles.text3}>{posicaoTimerAudio.playTime}</Text>
            <Slider
              containerStyle={{
                flex: 1,
                marginRight: "6%",
                marginLeft: "6%",
              }}
              thumbTintColor="#FFFFFF"
              value={posicaoTimerAudio.currentPositionSec} //posição que está a "bolinha do slider"
              minimumValue={1}
              maximumValue={posicaoTimerAudio.currentDurationSec}
              step={1}
              trackClickable={true}
              maximumTrackTintColor="#e9f0ef"
              minimumTrackTintColor="#fff"
            />

            <Text style={styles.text4}>{posicaoTimerAudio.duration}</Text>
          </View>

          <View style={styles.linha} color={"white"}>
            {/* <TouchableOpacity>
              <Ionicons name="ios-repeat-outline" size={35} color={"white"} />
            </TouchableOpacity> */}

            <TouchableOpacity onPress={idVoltar}>
              <AntDesign name="banckward" color={"white"} size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={recording ? onPausePlay : onStartPlay}>
              {recording ? (
                <Ionicons
                  name="ios-stop-circle-outline"
                  size={100}
                  color={"white"}
                />
              ) : (
                <Ionicons
                  name="play-circle-outline"
                  size={100}
                  color={"white"}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={idTeste}>
              <AntDesign name="forward" color={"white"} size={30} />
            </TouchableOpacity>

            {/* <TouchableOpacity>
              <Text style={styles.text2}>1x</Text>
            </TouchableOpacity> */}
          </View>
        </LinearGradient>
      ) : null}
    </View>
  );
}
