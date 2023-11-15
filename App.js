import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Listas from './src/Listas';
import CriarEditarLista from './src/CriarEditarLista'
import Tarefas from './src/Tarefas'
import CriarEditarTarefa from './src/CriarEditarTarefa';


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listas" component={Listas} />
        <Stack.Screen name="CriarEditarLista" component={CriarEditarLista} />
        <Stack.Screen name="Tarefas" component={Tarefas} />
        <Stack.Screen name="CriarEditarTarefa" component={CriarEditarTarefa} />
      </Stack.Navigator>
    </NavigationContainer>
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
