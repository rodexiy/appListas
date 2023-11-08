import react from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";


const Lista = ({Titulo, listas, setListas, IndexLista, goEditarLista}) => {

    const removeLista = () => {
        var novaLista = [...listas];
        novaLista.splice(IndexLista, 1);
        setListas(novaLista);
    }

    return (
        <>
            <View style={styles.lista}>
                <Text>{Titulo}</Text>

                <View style={styles.containerbotoes}>
                    <Pressable style={styles.removeButton} onPress={removeLista} />
                    <Pressable onPress={() => goEditarLista(IndexLista)} style={styles.editButton} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    lista: {
        paddingLeft: 30,
      flex: 1,
      gap: 200,
      backgroundColor: '#FFFAFA',
      borderRadius: 15,
      minWidth: 400,
      maxWidth: 400,
      minHeight: 80,
      maxHeight: 80,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },

    removeButton: {
        flex: 1,
        backgroundColor: "#911",
        minWidth: 50,
        minHeight: 50,
        maxWidth: 50,
        maxHeight:50
    },

    containerbotoes: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row"
    },

    editButton: {
        flex: 1,
        backgroundColor: "#191",
        minWidth: 50,
        minHeight: 50,
        maxWidth: 50,
        maxHeight: 50
    }
  });

export default Lista;