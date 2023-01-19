import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import LinearGradient from "react-native-linear-gradient";

export default function Audio() {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.view} colors={["#BFCDE0", "#5D5D81"]}>
        <Text style={styles.text1}>aaaa</Text>
      </LinearGradient>
    </View>
  );
}
