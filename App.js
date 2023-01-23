import React from "react";
import TelaInicial from "./src/pages/telaInicial";
import Pagvenda from "./src/pages/pagVenda";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/routes";
import DrawerNavigation from "./src/routes/drawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* //   <StackNavigation></StackNavigation> */}
      <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>
  );
}
