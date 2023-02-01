import React, {useEffect} from "react";
import TelaInicial from "./src/pages/telaInicial";
import Pagvenda from "./src/pages/pagVenda";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/routes";
import DrawerNavigation from "./src/routes/drawer";
import  SQLite from "react-native-sqlite-storage";


// const db = SQLite.openDatabase(
//   {
//     name: "MainDB",
//     location: "default"
//   },
//   ()=> {}, 
//   error => {console.error(error)}
// )

export default function App() {
// useEffect(() => {
//   const createTable = () => {
//     db.transaction(tx => {
//       tx.executeSql(`CREATE TABLE IF NOT EXISTS audios
//       (id INTEGER AUTOINCREMENT PRIMARY KEY NOT NULL, audios (title, datahora TEXT, tamanho TEXT, tags TEXT, duracao TEXT, caminho TEXT)
//       `);
//     });
//   };

//   createTable();
// }, []);


  return (
    <NavigationContainer>
      {/* //   <StackNavigation></StackNavigation> */}
      <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>


  );
}
