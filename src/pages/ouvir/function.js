import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

export function Item({ data }) {
  return (

    <View>
      <Text style={styles.mp4}>{data.title}</Text>

      <View style={styles.p1}>
        <Text style={styles.l1}>{data.data_hora}</Text>
        <Text style={styles.l1}>{data.hora}</Text>
        <Text style={styles.l1}>{data.tamanho}</Text>
      </View>

      <View style={styles.linha5}>
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

      <View style={styles.p2}>
        <Text style={styles.tipo}>{data.tags}</Text>
        <Text style={styles.timer}>{data.duracao}</Text>
      </View>
      
    </View>
  );
}
