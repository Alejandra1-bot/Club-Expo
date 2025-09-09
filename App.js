import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Inicio from '../Screen/Inicio/inicio'; 

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={{ fontSize: 24, color: "red ", fontWeight: "bold" }}>Bienvenidos a Clud !</Text>
      <Inicio/>
      <StatusBar style="auto" />
    </View>
  );  
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb0d0dff',
    alignItems: 'center',
    justifyContent: 'center',
  },



});
