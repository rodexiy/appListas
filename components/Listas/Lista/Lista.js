import react from "react";
import { StyleSheet, Button, Text, View, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-web";

const Lista = ({Titulo, removeLista, IndexLista}) => {
    return (
        <>
            <View style={styles.lista} key={IndexLista}>
                {/* <Text>AAA</Text> */}
                <View>
                    <Text>{Titulo}</Text>
                </View>

                <Pressable style={styles.removeButton} onPress={() => removeLista(IndexLista)} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    lista: {
      flex: 1,
      backgroundColor: '#FAFFFA',
      borderRadius: "15px",
      width: "85%",
      flexDirection: "row",
      maxHeight: "80px",
      alignItems: "center",
      justifyContent: "center",
    },

    removeButton: {
        flex: 1,
        backgroundColor: "#911",
        minWidth: "50px",
        minHeight: "50px",
        maxWidth: "50px",
        maxHeight: "50px"
    }
  });

export default Lista;