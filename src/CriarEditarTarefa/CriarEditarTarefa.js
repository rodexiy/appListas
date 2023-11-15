
import { useEffect, useMemo, useState } from "react";
import { Text, TextInput, View, StyleSheet, Touchable, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';

function CriarEditarTarefa({ route, navigation}) {
    const { acao, listas, setListas, IndexLista, IndexTarefa } = route.params;
    const [nomeTarefa, setNomeTarefa] = useState("")

    const buttonPressed = () => {
        let lista = listas[IndexLista]
        if (nomeTarefa.length == 0) {
            alert("Nome inválido!")
            return
        }

        let novaTarefas 
        if (acao == "Criar") {
            novaTarefas = [{titulo: nomeTarefa, ultimaMod:(new Date().toLocaleString())}, ...lista.tarefas];
            lista.tarefas = novaTarefas
        }
        console.log(setListas)
        setListas(listas)
        // AsyncStorage.setItem(metadata.LISTAS, JSON.stringify(listas));
        navigation.navigate("Tarefas", {
            lista: lista
        });
    }



    return (
        <>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder={"Nome da tarefa"} onChangeText={setNomeTarefa} />
                <Pressable style={styles.pressable} onPress={buttonPressed}> 
                    <Text style={styles.pressableText}>{acao + " tarefa"}</Text>
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
export default CriarEditarTarefa