import { useEffect, useMemo, useState } from "react";
import { Text, TextInput, View, StyleSheet, Touchable, Pressable } from "react-native";
import Lista  from "../Components/Lista"
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.medata.json';
import { useIsFocused } from "@react-navigation/native";
import Tarefa from "../Components/Tarefa";

const Tarefas = ({route, navigation}) => {
    const { lista, IndexLista, setListas, listas } = route.params;
    const focus = useIsFocused();



    const carregarTarefas = useMemo(() => {
        return (
            <View>
                {
                    lista.tarefas.map((item, index) => {
                        return (
                            <Tarefa key={index} Titulo={item.titulo} listas={listas} setListas={setListas} IndexLista={IndexLista} IndexTarefa={index} />
                        )
                    })
                }
            </View>
        )
    }, [listas]);

    return (
        <>
            <View style={styles.container}>
                <Pressable style={styles.pressable} onPress={() => {
                    navigation.navigate("CriarEditarTarefa", {
                        acao: "Criar",
                        listas: listas,
                        IndexLista: IndexLista
                    })
                }}>
                    <Text style={styles.pressableText}>Nova tarefa</Text>
                </Pressable>

                {
                    carregarTarefas
                }
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
    title: {
        fontSize: 30,
        textAlign: "center"
    },
    pressable: {
        flex: 1,
        backgroundColor: "#069",
        width: 200,
        height: 40,
        maxHeight: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    pressableText: {
        color: "#fff",
    }

});

export default Tarefas