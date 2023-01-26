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
import SelectDropdown from "react-native-select-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import InAppReview from "react-native-in-app-review";

export default function TelaInicial() {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const options = ["Sem Tag", "Estudo", "Faculdade", "Minhas Músicas"];
  const [visibleModal, setVisibleModal] = useState(false);
  const [gravar, setGravar] = useState(true);
  const navigation = useNavigation();
  const navegar = (tela) => {
    navigation.navigate(tela, {});
  };

  function toggleMudarTela(teste) {
    setGravar(teste);
  }

  const RatingBar = () => {
    return (
      <View style={styles.ratingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <AntDesign
                name={item <= defaultRating ? "star" : "staro"}
                size={40}
                color="#BFCDE0"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

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
            {/* <Modal
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
                    />

                    <SelectDropdown
                      data={options}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                      }}
                      defaultButtonText={"Tag"}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      buttonStyle={styles.opcoes}
                      buttonTextStyle={styles.textbutton}
                      renderDropdownIcon={(isOpened) => {
                        return (
                          <AntDesign
                            name={isOpened ? "caretup" : "caretdown"}
                            color={"#3B3355"}
                            size={18}
                          />
                        );
                      }}
                      dropdownIconPosition={"right"}
                      dropdownStyle={styles.colorClick}
                      rowStyle={styles.linhaClick}
                      rowTextStyle={styles.textClick}
                    />

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
            </Modal> */}

<Modal
              animationType="slide"
              transparent={true}
              visible={visibleModal}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setVisibleModal(!visibleModal);
              }}
            >
              <View style={styles.centeredView3}>
                <View style={styles.view}>
                  <TouchableOpacity
                    style={styles.circle}
                    onPress={() => setVisibleModal(!visibleModal)}
                  >
                    <LinearGradient
                      style={styles.btcircle}
                      colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                    >
                      <Feather
                        style={styles.xicon}
                        name="x"
                        size={30}
                        color="white"
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  <Text style={styles.salvarGrav}>
                    Parabéns! Você gravou seu primeiro áudio!
                  </Text>
                  <View>
                    <Text style={styles.avaliacao}>
                      Nos avalie com 5 estrelas se estiver gostando do
                      aplicativo!
                    </Text>
                    <RatingBar />
                    <Text>
                      {defaultRating} / {Math.max.apply(null, maxRating)}
                    </Text>
                    <View style={styles.alinhar}>
                      <TouchableOpacity
                        onPress={() => setVisibleModal(!visibleModal)}
                      >
                        <LinearGradient
                          style={styles.avaliar}
                          colors={["#BFCDE0", "#b0bdcf", "#96a2b3", "#697687"]}
                        >
                          <Text style={styles.textStyle1}>Avaliar</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
         

                    {/* <View style={styles.linha}>
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
              </TouchableWithoutFeedback> */}
            </Modal>

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
