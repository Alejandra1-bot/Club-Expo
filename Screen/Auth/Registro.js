import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from "react-native";
import BottonComponent from "../../components/BottonComponents";

export default function RegistroAcerias({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/2726/2726554.png" }}
          style={styles.image}
        />

        <Text style={styles.title}>🔧 Registro Club Acerías</Text>
        <Text style={styles.subtitle}>
          Únete a la comunidad industrial registrándote
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          secureTextEntry
          value={confirmarPassword}
          onChangeText={setConfirmarPassword}
        />

        <BottonComponent
          title="Registrarme"
          style={{ backgroundColor: "#FFB400" }}
        />

        <BottonComponent
          title="Ya tengo cuenta, Iniciar Sesión"
          onPress={() => navigation.navigate("Login")}
          style={{ backgroundColor: "#1B262C" }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1B262C",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#393E46",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 15,
    fontSize: 16,
  },
});
