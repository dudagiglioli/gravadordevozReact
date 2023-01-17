import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./style";
import Entypo from "react-native-vector-icons/Entypo";

export default function Pagvenda() {
  return (
    <View style={styles.container}>
      <Entypo name="circle" size={18} color={"#5D5D81"} style={styles.icon} />
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text2}>Continuar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}
