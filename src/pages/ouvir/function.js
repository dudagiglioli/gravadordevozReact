import React, { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import sqlite from "../../classes/sqlite";

//atualizar lista
export function Item({ data, setLista, setExibirPLayer, exibirPlayer }) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [nome, setNome] = useState("");

  async function deleteId(id_audio) {
    await sqlite.query(`DELETE FROM audios WHERE id_audio = ${id_audio}`);
    setLista(await sqlite.query("SELECT * FROM audios")); //atualizar lista
  }

  async function UpdateName(id_audio) {
    await sqlite.query(
      `UPDATE audios SET title = "${nome}" WHERE id_audio = ${id_audio}`
    );
    setLista(await sqlite.query("SELECT * FROM audios")); //atualizar lista
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setExibirPLayer(data.id_audio)}
        style={[
          styles.backg2,
          exibirPlayer === data.id_audio ? styles.backg : false,
        ]}
        // puxando o exibir player(PAI) para mudar a cor de cada item selecionado pelo ID(filhos) e aparecer o player
        // OBS: quando for chamar algo(do BD ou outro lugar), não colocar entre aspas pq ñ estará funcionando, será considerado uma palavra
      >
        <Text style={styles.mp4}>{data.title}</Text>
        <View style={styles.p1}>
          <Text style={styles.l1}>{data.data}</Text>
          <Text style={styles.l2}>{data.hora}</Text>
          <Text style={styles.l2}>{data.tamanho}</Text>
        </View>

        <View style={styles.linha5}>
          <TouchableOpacity onPress={() => setModalVisibleIcon(true)}>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={"rgba(59, 51, 85, 1)"}
            />
          </TouchableOpacity>

          <Feather name="scissors" color={"rgba(59, 51, 85, 1)"} size={20} />
        </View>

        <View style={styles.p2}>
          <Text style={styles.tipo}>{data.tags}</Text>
          <Text style={styles.timer}>{data.duracao}</Text>
        </View>

        <View style={styles.linhadivide} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleIcon}
          enum="overFullScreen"
          onRequestClose={() => {
            setModalVisibleIcon(!setModalVisibleIcon);
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setModalVisibleIcon(!modalVisibleIcon)}
          >
            <View style={styles.modalOpen}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setModalVisibleIcon(false)}
                >
                  <LinearGradient
                    colors={["#BFCDE0", "#5D5D81"]}
                    style={styles.buttonCloseStyles}
                  >
                    <AntDesign name="close" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <Text style={styles.text}>Propriedades</Text>

                <TextInput
                  onChangeText={(tex) => {
                    setNome(tex);
                  }}
                  style={styles.input}
                  placeholderTextColor={"#3B3355"}
                  placeholder="Nome"
                />

                <View style={styles.linhadelete}>
                  <TouchableOpacity onPress={() => UpdateName(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={styles.salvar}
                    >
                      <Text style={styles.Text}>Editar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => deleteId(data.id_audio)}>
                    <LinearGradient
                      colors={["#BFCDE0", "#5D5D81"]}
                      style={styles.salvar}
                    >
                      <AntDesign name="delete" size={25} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}
