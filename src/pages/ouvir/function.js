import React, { useState } from "react";
import styles from "./style";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import sqlite from "../../classes/sqlite";
import { Slider } from "@miblanchard/react-native-slider";
import Ionicons from "react-native-vector-icons/Ionicons";


{
  /* //slider com dois thumbs p editar o audio */
}
const borderWidth = 4;
const trackMarkStyles = StyleSheet.create({
  activeMark: {
    borderColor: "red",
    borderWidth,
    left: -borderWidth / 2,
  },
  inactiveMark: {
    borderColor: "grey",
    borderWidth,
    left: -borderWidth / 2,
  },
});

const SliderContainer = ({
  caption,
  children,
  sliderValue,
  trackMarks,
  vertical,
}) => {
  const [value, setValue] = useState(sliderValue);
  let renderTrackMarkComponent;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(" - ") : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};
//atualizar lista
export function Item({
  data,
  setLista,
  setExibirPLayer,
  exibirPlayer,
  posicaoTimerAudio,
}) {
  const [modalVisibleIcon, setModalVisibleIcon] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
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

  // async function editar(){
  // }

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
          <Text style={styles.l3}>{data.tamanho}</Text>
        </View>

        <View style={styles.linha5}>
          <TouchableOpacity onPress={() => setModalVisibleIcon(true)}>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={"rgba(59, 51, 85, 1)"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalEditar(true)}
            style={{ backgroundColor: "#F8EFFB", height: 30, width: 30 }}
          >
            <Feather name="scissors" color={"rgba(59, 51, 85, 1)"} size={20} />

            <Modal
              animationType="fade"
              transparent={true}
              visible={modalEditar}
              enum="overFullScreen"
              onRequestClose={() => {
                modalEditar(!setModalEditar);
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => setModalEditar(!modalEditar)}
              >
                <View style={styles.modalOpen}>
                  <View style={styles.modalView2}>
                    <TouchableOpacity
                      style={styles.buttonClose2}
                      onPress={() => setModalEditar(false)}
                    >
                      <LinearGradient
                        colors={["#BFCDE0", "#5D5D81"]}
                        style={styles.buttonCloseStyles2}
                      >
                        <AntDesign name="close" size={20} color="#fff" />
                      </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.textEditar}>Editar</Text>

                    {/* //slider com dois thumbs p editar o audio */}
                    <View>
                      <SliderContainer caption="" sliderValue={[6, 18]}>
                        <Slider
                          animateTransitions
                          maximumTrackTintColor="#d3d3d3"
                          maximumValue={20}
                          minimumTrackTintColor="#3B3355"
                          minimumValue={4}
                          step={2}
                          thumbTintColor="#5D5D81"
                        />
                      </SliderContainer>
                    </View>

                    <TouchableOpacity>
                        <Ionicons
                          name="ios-stop-circle-outline"
                          size={50}
                          color={"black"}
                          style={styles.button}
                        />
                      </TouchableOpacity>

                    <View style={styles.linhaeditar}>

                      <TouchableOpacity>
                        <LinearGradient
                          colors={["#BFCDE0", "#5D5D81"]}
                          style={styles.buttonBack}
                        >
                          <Text style={styles.Text}>Back</Text>
                        </LinearGradient>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <LinearGradient
                          colors={["#BFCDE0", "#5D5D81"]}
                          style={styles.buttonDone}
                        >
                          <Text style={styles.Text}>Done</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </TouchableOpacity>
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
