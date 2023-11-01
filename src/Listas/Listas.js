import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Lista  from "./Lista"
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from './../storage.medata.json';

const Listas = ({ArrayListas, setArrayListas}) => {
    const [userData, setUserData] = useState("");
    useEffect(() => { getUserData() }, [])
    useEffect(() => { saveUserData() }, [userData]);

    const getUserData = async () => {
        const userData = await AsyncStorage.getItem(metadata.USER);
        console.log(userData)
        if (userData) {
            setUserData(userData);
        }
    }

    const saveUserData = async () => {
        const saveData = userData || {};
        await AsyncStorage.setItem(metadata.USER, saveData);
    }


    const removeLista = (indexLista) => {
        // let Listas = userData.Listas
        // if (Listas[indexLista]) {
        // let newArrayLista = [...Listas] 
        // newArrayLista.splice(indexLista, 1)
        // setArrayListas(newArrayLista)
        // console.log(newArrayLista)
        // }
    }

  
    return (
        <>
            {
                // userData.Listas.map((objLista, index) => {
                //     // return (<Lista key={index} IndexLista={index} removeLista={removeLista} Titulo={objLista.Titulo} />)
                // })
            }
        </>
    )

}

export default Listas