import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Compra from "../../components/Compra";
import { useState } from "react";

export default function Home() {
  const [compras, setCompras] = useState<String[]>([]);

  const [compraName, setCompraName] = useState("");

  function handleCompraAdd() {
    if (compraName.trim() === "") {
      Alert.alert("Problema ao adicionar compra", "-> Nome está vazio");
      return;
    }
    if (compras.includes(compraName)) {
      Alert.alert(
        "Problema ao adicionar compra",
        "-> Esta compra já foi adicionado"
      );
      setCompraName("");
      return;
    }
    setCompras([...compras, compraName]);
    setCompraName("");
  }

  function handleCompraRemove(name: String) {
    Alert.alert(
      "Remover produto",
      `Tem certeza que deseja remover o produto ${name}?`,
      [
        { text: "Não", style: "cancel" },
        {
          text: "Sim",
          onPress: () =>
            setCompras(compras.filter((compra) => compra !== name)),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>
      <Text style={styles.date}>Quarta, 23 de agosto de 2023.</Text>

      <View style={styles.form}>
        <TextInput
          onChangeText={setCompraName}
          style={styles.input}
          placeholder="Nome do produto"
          placeholderTextColor={"#6B6B6B"}
          value={compraName}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={handleCompraAdd}>
          <Text style={styles.buttonText}>ADICIONAR</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.title}>Produtos</Text>

        <FlatList
          data={compras}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Compra name={item} onRemove={() => handleCompraRemove(item)} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyComponent}>
              Não existe produto na sua lista de compras
            </Text>
          )}
        />
      </View>
    </View>
  );
}
