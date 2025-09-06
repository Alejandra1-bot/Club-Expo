import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import MiSaludo from '../AppClud/components/saludo';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={{ fontSize: 24, color: "red ", fontWeight: "bold" }}>Bienvenidos a Clud !</Text>

      {/*compomente */}
      <MiSaludo 
      
      />
      <Image
        source={{ uri: 'https://blog.nashtechglobal.com/wp-content/uploads/2025/08/image-33-1024x576.png' }}
        style={estilos.imagen}
      />
      <Button 
        title="Presiona aquí"
        onPress={() => alert('¡Hola! Has presionado el botón.')}
      />
      <TextInput
      style={estilos.input}
      placeholder='Escribe algo aquí'
      />
    
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
  // texto:{
  //   color: '#ffffff',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // }

  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,

  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 15,
  },

});
