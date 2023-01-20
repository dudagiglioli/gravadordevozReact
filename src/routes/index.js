import TelaInicial from "../pages/telaInicial";
import Pagvenda from "../pages/pagVenda";
import Configuracoes from "../pages/configuracoes";
import Audio from "../pages/ouvir";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EasyRecorder"
        component={TelaInicial}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerLeft: () => (
            <TouchableOpacity>
              <EvilIcons
                style={styles.icon}
                name="navicon"
                color={"black"}
                size={60}
                onPress={() => navegar("Configurações")}
              />
            </TouchableOpacity>
          ),
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

      <Stack.Screen
        name="Pagvenda"
        component={Pagvenda}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Configurações" component={Configuracoes} />

      <Stack.Screen
        name="Ouvir"
        component={Audio}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "black",
          headerLeft: () => (
            <TouchableOpacity>
              <EvilIcons
                style={styles.icon}
                name="navicon"
                color={"black"}
                size={60}
              />
            </TouchableOpacity>
          ),
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
    </Stack.Navigator>
  );
}
