import TelaInicial from "../pages/telaInicial";
import Menu from "../pages/menu";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}
