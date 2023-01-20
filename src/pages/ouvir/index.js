import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Slider } from "@miblanchard/react-native-slider";

const ARRAY = [
  {
    id: "1",
    nome: "Teste.mp4",
    data: "12/01/2023",
    hora: "14:50",
    kb: "46,21Kb",
    tipo: "Estudo",
    timer: "00:45",
  },
];

function renderItem({ item }) {
  return <Item data={item} />;
}
export default function Audio() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.gravar}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.ouvir}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.meio}></View>

      <LinearGradient style={styles.footer} colors={["#BFCDE0", "#5D5D81"]}>
        <View style={styles.view}>
          <Text style={styles.text3}>00:00</Text>
          <Slider thumbTintColor="#FFFFFF" />
          <Text style={styles.text4}>00:45</Text>
        </View>

        <View style={styles.linha} color={"white"}>
          <TouchableOpacity>
            <Ionicons name="ios-repeat-outline" size={35} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="banckward" color={"white"} size={30} />
          </TouchableOpacity>
          <AntDesign name="playcircleo" size={80} color={"white"} />

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
