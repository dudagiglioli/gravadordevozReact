import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";

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
      <View style={styles.teste}></View>
      <LinearGradient style={styles.view} colors={["#BFCDE0", "#5D5D81"]}>
        <Text style={styles.text1}>aaaa</Text>

        <View style={styles.linha} color={"white"}>
          <TouchableOpacity>
            <AntDesign name="banckward" color={"white"} size={30} />
          </TouchableOpacity>
          <AntDesign name="playcircleo" size={70} />

          <TouchableOpacity>
            <AntDesign name="forward" color={"white"} size={30} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
