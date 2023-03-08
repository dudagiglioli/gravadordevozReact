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

  // tocar audio
  async function onStartPlay() {
    setRecording(true);
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    this.audioRecorderPlayer.addPlayBackListener((e) => {
      this.setTempoGrav({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.currentPosition)
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
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
    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
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
          // style={[styles.backg2, id === "id_audio" ? styles.backg : false]}
        />
      </View>

      {exibirPlayer ? (
        <LinearGradient style={styles.footer} colors={["#BFCDE0", "#5D5D81"]}>
          <View style={styles.view}>
            <Text style={styles.text3}>00:00</Text>
            <Slider
              containerStyle={{
                flex: 1,
                marginRight: "6%",
                marginLeft: "6%",
              }}
              thumbTintColor="#FFFFFF"
              value={1}
              minimumValue={1}
              maximumValue={20}
              step={2}
              trackClickable={true}
              maximumTrackTintColor="#e9f0ef"
              minimumTrackTintColor="#fff"
              onValueChange={(value) => {
                console.log(value);
              }}
              //slider acompanhar o audio
              onSlidingStart={() => {
                if (!onStartPlay) return;

                try {
                  pause(onPausePlay);
                } catch (error) {
                  console.log("error inside onSlidingStart callback", error);
                }
              }}
              onSlidingComplete={async (value) => {
                if (onStartPlay == null) return;

                try {
                  const status = await onStartPlay.setPositionAsync(
                    Math.floor(
                      onStartPlay({
                        onStartPlay: status,
                        playbackPosition: status,
                      })
                    )
                  );
                } catch (error) {
                  console.log("error inside onSlidingStart callback", error);
                }
              }}
            />

            <Text style={styles.text4}>00:45</Text>
          </View>

          <View style={styles.linha} color={"white"}>
            <TouchableOpacity>
              <Ionicons name="ios-repeat-outline" size={35} color={"white"} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="banckward" color={"white"} size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={recording ? onPausePlay : onStartPlay}>
              {recording ? (
                <Ionicons
                  name="ios-stop-circle-outline"
                  size={100}
                  color={"white"}
                  onPress={idTeste}
                />
              ) : (
                <Ionicons
                  name="play-circle-outline"
                  size={100}
                  color={"white"}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesign name="forward" color={"white"} size={30} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.text2}>1x</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : null}
    </View>
  );
}
