import React from "react";
import TelaInicial from "./src/pages/telaInicial";
import Menu from "./src/pages/menu";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation></StackNavigation>
    </NavigationContainer>
  );
}
