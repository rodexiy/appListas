
import { useEffect, useMemo, useState } from "react";
import { Text, TextInput, View, StyleSheet, Touchable, Pressable } from "react-native";
import Lista from "../Components/Lista"
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';
import { useIsFocused } from "@react-navigation/native";
import { Button, TouchableOpacity } from "react-native-web";

function CriarEditarLista({ route, navigation}) {
    const { acao, listas, indexLista } = route.params;
    const [nomeLista, setNomeLista] = useState("")

    const buttonPressed = () => {
        if (nomeLista.length == 0) {
            alert("Nome inválido!")
            return
        }

        let novaLista
        if (acao == "Criar") {
            novaLista = [{titulo: nomeLista, ultimaMod:(new Date().toLocaleString()), tarefas:[]}, ...listas];
        }else if(acao == "Editar") {
            novaLista = listas
            console.log(indexLista)
            var lista = novaLista[indexLista]
            lista.titulo = nomeLista
            lista.ultimaMod = new Date().toLocaleString()
        }

        AsyncStorage.setItem(metadata.LISTAS, JSON.stringify(novaLista));

        navigation.navigate("Listas", {
        });
    }



    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder={"Nome da lista"} onChangeText={setNomeLista} />
                <Pressable style={styles.pressable} onPress={buttonPressed}> 
                    <Text style={styles.pressableText}>{acao + " lista"}</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 16,
        marginTop: 24
    },
    textInput: {
        backgroundColor: "#C0C0C0",
        borderColor: "#000",
        borderRadius: 5,
        width: 250,
        height: 35,
        
    },

    pressable: {
        flex: 1,
        backgroundColor: "#069",
        minWidth: 200,
        minHeight: 40,
        maxWidth: 200,
        maxHeight: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    pressableText: {
        color: "#fff",
    }
});
export default CriarEditarLista