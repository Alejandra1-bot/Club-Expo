import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import BottonComponent from "../../components/BottonComponents";

export default function LoginAcerias({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Imagen ilustrativa de acerías */}
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2527/2527905.png", // Fábrica industrial
        }}
        style={styles.image}
      />

      <Text style={styles.title}>⚙️ Club de Acerías</Text>
      <Text style={styles.subtitle}>Accede a tu cuenta</Text>

      {/* Inputs */}
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
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botones */}
      <BottonComponent
        title="Iniciar Sesión"
        style={{ backgroundColor: "#FFB400" }}
      />

      <BottonComponent
        title="¿No tienes cuenta? Regístrate"
        onPress={() => navigation.navigate("Registro")}
        style={{ backgroundColor: "#1B262C" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
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
    marginBottom: 25,
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
