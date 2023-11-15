import { useEffect, useMemo, useState } from "react";
import { Text, TextInput, View, StyleSheet, Touchable, Pressable } from "react-native";
import Lista  from "../Components/Lista"
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';
import { useIsFocused } from "@react-navigation/native";
import { Button, TouchableOpacity } from "react-native-web";

const Listas = ({route, navigation}) => {
    const focus = useIsFocused();
    const [listas, setListas] = useState([]);

    useEffect(() => {
        // AsyncStorage.clear()
        getListas();
    }, [focus]);

    useEffect(() => {
        saveListas();
    }, [listas]);

    const saveListas = async () => {
        const saveListas = listas || "";
        await AsyncStorage.setItem(metadata.LISTAS, JSON.stringify(saveListas));
    }

    const getListas = async () => {

        const getLista = await AsyncStorage.getItem(metadata.LISTAS);
        if (getLista) {
            setListas(JSON.parse(getLista));
        }
    }

    const goEditarLista = (indexLista) => {
        console.log(indexLista)
        navigation.navigate("CriarEditarLista", {
            acao: "Editar",
            listas: listas,
            indexLista: indexLista
        })
    }

    
    const removeLista = (indexLista) => {
        let novaLista = [...listas]
        novaLista.splice(indexLista, 1)
        setListas(novaLista)
    }

    const abrirLista = (IndexLista) => {
        console.log(IndexLista)
        navigation.navigate("Tarefas", {
            IndexLista: IndexLista,
            lista: listas[IndexLista],
            listas: listas,
            setListas: setListas
        })
    }

    const carregarListas = useMemo(() => {
        return (
            <View style={{ width: "100%", alignItems: "center", gap: 8 }}>
                {
                    listas.map((item, index) => {
                        return (
                            <Lista Titulo={item.titulo} IndexLista={index} key={index} listas={listas} setListas={setListas} goEditarLista={goEditarLista} abrirLista={abrirLista} />
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
                    navigation.navigate("CriarEditarLista", {
                        acao: "Criar",
                        listas: listas
                    })
                }}>
                    <Text style={styles.pressableText}>Nova Lista</Text>
                </Pressable>

                {
                    carregarListas
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

export default Listas