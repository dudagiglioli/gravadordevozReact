import React, {useEffect} from "react";
import TelaInicial from "./src/pages/telaInicial";
import Pagvenda from "./src/pages/pagVenda";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/routes/drawer";
import sqlite from "./src/classes/sqlite";

sqlite.initDB();

export default function App() {

  return (
    <NavigationContainer>
      <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>


  );
}
