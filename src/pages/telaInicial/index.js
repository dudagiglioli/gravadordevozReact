import styles from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.gravar}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navegar("Ouvir")}>
          <Text style={styles.ouvir}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.meio}>
        <Text style={styles.timer}>00:00</Text>

        <Text style={styles.text}>Pronto para começar</Text>
      </View>

      <View style={styles.footer}>
        <LinearGradient style={styles.icon2} colors={["#BFCDE0", "#5D5D81"]}>
          <TouchableOpacity>
            <Ionicons name="mic" size={60} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
