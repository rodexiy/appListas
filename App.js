import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Listas from "./components/Listas"


export default function App() {
  
  const [ArrayListas, setArrayListas] = useState([ {Titulo: "aaa"} ])

  return (
    <View style={styles.container}>
      <Text>Minhas listas</Text>
      <Listas Titulo="Titulo teste" ArrayListas={ArrayListas} setArrayListas={setArrayListas}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: "center",
    justifyContent: "flex-start"
  },
});
