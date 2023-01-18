import TelaInicial from "../pages/telaInicial";
import Pagvenda from "../pages/pagVenda";
import Configuracoes from "../pages/configuracoes";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate("Pagvenda");
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
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navegar()} style={styles.button}>
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
      <Stack.Screen name="Configuracoes" component={Configuracoes} />
    </Stack.Navigator>
  );
}
