import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export function Item({ data }) {
  return (
    <View>
      <Text style={styles.mp4}>{data.nome}</Text>

      <View style={styles.p1}>
        <Text style={styles.l1}>{data.data}</Text>
        <Text style={styles.l1}>{data.hora}</Text>
        <Text style={styles.l1}>{data.kb}</Text>
      </View>

      <View style={styles.p2}>
        <Text style={styles.tipo}>{data.tipo}</Text>
        <Text style={styles.timer}>{data.timer}</Text>
      </View>
    </View>
  );
}
