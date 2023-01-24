import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import TelaInicial from "../pages/telaInicial";
import Pagvenda from "../pages/pagVenda";
import Audio from "../pages/ouvir";
import Configuracoes from "../pages/configuracoes";
import styles from "./style";
import StackNavigation from ".";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };

  return (
    <Drawer.Navigator
      initialRouteName="EasyRecorder"
      screenOptions={{
        drawerActiveBackgroundColor: "white",
      }}
    >
      <Drawer.Screen
        name="EasyRecorder"
        component={TelaInicial}
        options={{
          headerTitle: () => (
            <Text style={styles.easy}>
              Easy<Text style={styles.recorder}>Recorder</Text>
            </Text>
          ),
          title: () => (
            <View style={styles.view}>
              <Text style={styles.easy}>
                Easy<Text style={styles.recorder}>Recorder</Text>
              </Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          //   headerLeft: () => (
          //     <TouchableOpacity>
          //       <EvilIcons
          //         style={styles.icon}
          //         name="navicon"
          //         color={"black"}
          //         size={60}
          //         onPress={() => navegar("Configurações")}
          //       />
          //     </TouchableOpacity>
          //   ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navegar("Pagvenda")}
              style={styles.button}
            >
              <Text style={styles.pro}>Seja Pro</Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen
        name="Pagvenda"
        component={Pagvenda}
        options={{
          title: () => (
            <View style={styles.view2}>
              <Text style={styles.pro2}> Pro </Text>
              <Text style={styles.atualize}> Atualize para o Pro</Text>
            </View>
          ),

          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          drawerIcon: ({ size }) => (
            <AntDesign name="setting" size={size} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Ouvir"
        component={Audio}
        options={{
          headerTitle: () => (
            <Text style={styles.easy}>
              Easy<Text style={styles.recorder}>Recorder</Text>
            </Text>
          ),
          drawerIcon: ({ size }) => (
            <Entypo name="sound-mix" size={size} color="black" />
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",

          headerRight: () => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.pro}>Seja Pro</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
