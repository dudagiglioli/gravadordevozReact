import { View, Text } from "react-native";
import React from "react";
import styles from "./style";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.geral}>Geral</Text>

      <Text style={styles.linguagem}>Linguagem</Text>
      <Text style={styles.port}>Português (Brasil)</Text>

      <Text style={styles.audio}>Fonte de áudio</Text>
      <Text style={styles.padrao}>Padrão</Text>

      <Text style={styles.grav}>Qualidade da gravação</Text>
      <Text style={styles.padrao2}>Padrão</Text>

      <Text style={styles.amost}>Taxa de amostragem</Text>
      <Text style={styles.khz}>48 KHz</Text>

      <View style={styles.avanc}>
        <Text style={styles.geral}>Avançado</Text>

        <Text style={styles.linguagem}>Linguagem</Text>
        <Text style={styles.port}>Português (Brasil)</Text>

        <Text style={styles.audio}>Fonte de áudio</Text>
        <Text style={styles.padrao}>Padrão</Text>

        <Text style={styles.grav}>Qualidade da gravação</Text>
        <Text style={styles.padrao2}>Padrão</Text>

        <Text style={styles.amost}>Taxa de amostragem</Text>
      </View>
    </View>
  );
}
