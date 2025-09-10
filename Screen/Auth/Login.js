import { TextInput, Text, View, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import BottonComponent from  "../../components/BottonComponents";
import { useState } from "react";
import CardComponents from "../../components/CardComponents";

    export default function Login({navigation}){
        const [email, setEmail ]= useState('');
        const [password, setPassword ]= useState('');
        const [loading, setLoading ]= useState(false);
    
        return(
            <View style={styles.container}>
                     <Text style={styles.titulo}>🏥 Citas Médicas</Text>
      <Text style={styles.subtitulo}>Inicia sesión para continuar</Text>
                <TextInput
                style={styles.input}
                placeholder="Correo Electronico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                />

                <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                editable={!loading}
                />
           
                <BottonComponent title="Iniciar Sesion"/>
                <BottonComponent
                 title="¿No tienes una cuenta? Registrate"
                 onPress={() => navigation.navigate('Registro')}
                 style={{ backgroundColor: "##0A2647"}}
                  />
            </View>
        );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF", // Fondo claro con un toque celeste
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0A74DA", // Azul principal
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: "#555",
    marginBottom: 25,
  },
  form: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#d0d7e2",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  linkContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  link: {
    fontSize: 14,
    color: "#444",
  },
  linkStrong: {
    fontWeight: "bold",
    color: "#0A74DA",
  },
});
    