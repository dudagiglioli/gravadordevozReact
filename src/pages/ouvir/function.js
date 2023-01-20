import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export function Item({ data }) {
  return (
    <View>
      <Text style={styles.title}>{data.nome}</Text>

      <View>
        <Text style={styles.data}>{data.data}</Text>
        <Text style={styles.hr}>{data.hora}</Text>
        <Text style={styles.kb}>{data.kb}</Text>
      </View>

      <View>
        <Text style={styles.tipo}>{data.tipo}</Text>
        <Text style={styles.timer}>{data.timer}</Text>
      </View>
    </View>
  );
}
