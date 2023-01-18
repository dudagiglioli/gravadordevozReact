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
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Pagvenda() {
  const navigation = useNavigation();
  const Navegar = () => {
    navigation.goBack();
  };
  //goBack - voltar p a pagInicial, ou seja a principal ("uma atrás")

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/images/background.png")}
      >
        <TouchableOpacity onPress={() => Navegar()} style={styles.icon}>
          <EvilIcons name="close-o" color={"white"} size={60} />
        </TouchableOpacity>

        <Ionicons name="ios-mic-circle" size={64} style={styles.icon2} />

        <Text style={styles.easy}>Easy</Text>
        <Text style={styles.recorder}>Recorder</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            height: 75,
            top: 120,
          }}
        >
          <View
            style={{
              backgroundColor: "#D9D9D9",
              flex: 0.2,
              borderRadius: 8,
              height: 120,
              left: -75,
            }}
          />
          <View
            style={{
              backgroundColor: "#D9D9D9",
              flex: 0.3,
              height: 120,
              borderRadius: 8,
              left: -50,
            }}
          />
          <View
            style={{
              backgroundColor: "#D9D9D9",
              flex: 0.3,
              height: 120,
              borderRadius: 8,
              left: -23,
            }}
          />
          <View
            style={{
              backgroundColor: "#D9D9D9",
              flex: 0.2,
              height: 120,
              borderRadius: 8,
            }}
          />
        </View>
      </ImageBackground>

      <View style={styles.linha2}>
        <Text style={styles.text3}>4,99</Text>
        <Text style={styles.text3}>15,99</Text>
        <Text style={styles.text5}>29,99</Text>
      </View>

      <View style={styles.linha2}>
        <Text style={styles.text4}>Mensal</Text>
        <Text style={styles.text4}>Anual</Text>
        <Text style={styles.vitalicio}>Vitalício</Text>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity>
          <Entypo name="circle" size={18} color={"#5D5D81"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="circle" size={18} color={"#5D5D81"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="circle" size={18} color={"#5D5D81"} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text2} onPress={() => Navegar()}>
          Continuar
        </Text>
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
