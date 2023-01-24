import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Item } from "./function";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { Slider } from "@miblanchard/react-native-slider";
import { useNavigation } from "@react-navigation/native";

export default function Audio() {
  const [gravarState, setGravarState] = useState(false);
  const [playerState, setPlayerSatate] = useState(false);
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };
  const ARRAY = [
    {
      id: "1",
      nome: "Teste.mp4",
      data: "12/01/2023",
      hora: "  14:50",
      kb: "  46,21Kb",
      tipo: "Estudo",
      timer: "  00:45",
    },
  ];

  function toggleMusicPlay() {
    setPlayerSatate(!playerState);
  }

  function gravar() {
    setGravarState(!gravarState);
  }

  function renderItem({ item }) {
    return <Item data={item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navegar("EasyRecorder")}>
          <Text style={styles.gravar}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.ouvir}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.meio}>
        <FlatList
          data={ARRAY}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <Feather
          name="scissors"
          color={"rgba(59, 51, 85, 1)"}
          size={20}
          style={styles.tesoura}
        />

        <Entypo
          name="dots-three-vertical"
          size={20}
          color={"rgba(59, 51, 85, 1)"}
          style={styles.ponto}
        />
      </View>

      <LinearGradient style={styles.footer} colors={["#BFCDE0", "#5D5D81"]}>
        <View style={styles.view}>
          <Text style={styles.text3}>00:00</Text>
          <Slider
            containerStyle={{ flex: 1, marginRight: "6%", marginLeft: "6%" }}
            thumbTintColor="#FFFFFF"
            value={2}
            minimumValue={1}
            maximumValue={5}
            step={2}
            trackClickable={true}
            maximumTrackTintColor="#e9f0ef"
            minimumTrackTintColor="#fff"
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

          <TouchableOpacity onPress={toggleMusicPlay}>
            {playerState ? (
              <Ionicons name="play-circle-outline" size={100} color={"white"} />
            ) : (
              <Ionicons
                name="ios-stop-circle-outline"
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
    </View>
  );
}
