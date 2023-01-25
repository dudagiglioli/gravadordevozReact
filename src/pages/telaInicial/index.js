import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import Audio from "../ouvir";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const [visibleModal, setVisibleModal] = useState(false);
  const [gravar, setGravar] = useState(true);
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };

  function toggleMudarTela(teste) {
    setGravar(teste);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => toggleMudarTela(true)}>
          <Text style={gravar ? styles.gravar : styles.ouvir}>Gravar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleMudarTela(false)}>
          <Text style={gravar ? styles.ouvir : styles.gravar}>Ouvir</Text>
        </TouchableOpacity>
      </View>

      {!gravar ? (
        <Audio />
      ) : (
        <>
          <View style={styles.meio}>
            <Text style={styles.timer}>00:00</Text>

            <Text style={styles.text}>Pronto para começar</Text>
          </View>

          <View style={styles.footer}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={visibleModal}
              onRequestClose={() => {
                setModalVisible(!visibleModal);
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => setVisibleModal(!visibleModal)}
              >
                <View style={styles.modal}>
                  <View style={styles.view}>
                    <Text style={styles.salvarGrav}>Salvar Gravação</Text>
                    <TextInput
                      style={styles.input}
                      maxLength={50}
                      placeholder="Nome"
                    ></TextInput>

                    <TextInput
                      style={styles.input}
                      placeholder="Tag"
                    ></TextInput>

                    <View style={styles.linha}>
                      <LinearGradient
                        style={styles.salvar}
                        colors={["#BFCDE0", "#5D5D81"]}
                      >
                        <Text style={styles.textsalvar}>Salvar</Text>
                      </LinearGradient>

                      <TouchableOpacity
                        onPress={() => setVisibleModal(!visibleModal)}
                      >
                        <LinearGradient
                          style={styles.botaoCancelar}
                          colors={["#5D5D81", "#3B3355"]}
                        >
                          <Text style={styles.textCancelar}>Cancelar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>

            {/* <View style={styles.container2}>
                <Modal
                  visible={visibleModal}
                  transparent={false}
                  onRequestClose={() => setVisibleModal(false)}
                ><TouchableWithoutFeedback
                onPress={() => setModalVisible(!modalVisible)}>
                <View >
                  <View >
                    <Text>Salvar Gravação</Text>
                    <TextInput
                      
                      maxLength={50}
                      placeholder="Nome"></TextInput>

                    <TextInput
                  
                      placeholder="Tag"></TextInput>

</TouchableWithoutFeedback>
</Modal>
              </View> */}
            <LinearGradient
              style={styles.icon2}
              colors={["#BFCDE0", "#5D5D81"]}
            >
              <TouchableOpacity onPress={() => setVisibleModal(true)}>
                <Ionicons name="mic" size={60} />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </>
      )}
    </View>
  );
}
