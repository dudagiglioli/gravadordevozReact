import styles from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <EvilIcons
          style={styles.icon}
          name="navicon"
          color={"black"}
          size={60}
        />
      </TouchableOpacity>
      <Text style={styles.easy}>
        Easy
        <Text style={styles.recorder}>Recorder</Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.pro}>Seja Pro</Text>
      </TouchableOpacity>
    </View>
  );
}
