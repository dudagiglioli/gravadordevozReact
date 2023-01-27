import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

export default function Pagvenda() {
  const navigation = useNavigation();
  const Navegar = () => {
    navigation.goBack();
  };
  //goBack - voltar p a pagInicial, ou seja a principal ("uma atrás")

  
  return (
    <View style={styles.container}>
      <View style={styles.inicio}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/images/background.png")}
        >
          <LinearGradient
            colors={["transparent", "white"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}
          >
            <TouchableOpacity onPress={() => Navegar()} style={styles.icon}>
              <EvilIcons name="close-o" color={"white"} size={60} />
            </TouchableOpacity>

            <View style={styles.meio}>
              <LinearGradient
                style={styles.icon2}
                colors={["#BFCDE0", "#5D5D81"]}
              >
                <Ionicons name="mic" size={30} />
              </LinearGradient>

              <Text style={styles.easy}>Easy</Text>
              <Text style={styles.recorder}>Recorder</Text>
            </View>

            <View
              style={{
                flex: 0.1,
                flexDirection: "row",
                justifyContent: "space-around",
                height: 75,
                top: 70,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  flex: 0.2,
                  borderRadius: 8,
                  height: 130,
                  left: -75,
                }}
              />
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  flex: 0.3,
                  height: 130,
                  borderRadius: 8,
                  left: -50,
                }}
              />
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  flex: 0.3,
                  height: 130,
                  borderRadius: 8,
                  left: -23,
                }}
              />
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  flex: 0.2,
                  height: 130,
                  borderRadius: 8,
                }}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.valores}>
        <View style={styles.linha2}>
          <Text style={styles.text3}>4,99</Text>
          <Text style={styles.text4}>Mensal</Text>
        </View>

        <View style={styles.linha3}>
          <Text style={styles.text3}>15,99</Text>
          <Text style={styles.text4}>Anual</Text>
        </View>

        <View style={styles.linha4}>
          <Text style={styles.text6}>39,99</Text>
          <Text style={styles.text5}>29,99</Text>
          <Text style={styles.vitalicio}>Vitalício</Text>
          <View style={styles.linhav} />
        </View>
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

      <View style={styles.footer}>
        <LinearGradient style={styles.touch} colors={["#BFCDE0", "#5D5D81"]}>
          <TouchableOpacity>
            <Text style={styles.text2} onPress={() => Navegar()}>
              Continuar
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
}
