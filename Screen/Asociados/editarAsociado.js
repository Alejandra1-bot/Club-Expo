import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EditarAsociado({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");

  const handleGuardar = () => {
    if (!nombre || !correo || !rol) {
      alert("⚠️ Completa todos los campos");
      return;
    }
    alert(`✅ Asociado guardado: ${nombre}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Imagen industrial de fondo */}
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1581091876020-7e0cdfbb7c92" }}
        style={styles.header}
        imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
      >
        <Text style={styles.headerTitle}>Gestión de Asociado</Text>
        <Text style={styles.headerSubtitle}>Agrega o edita información</Text>
      </ImageBackground>

      {/* Formulario */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="👤 Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="📧 Correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="🏭 Rol dentro del clud"
          value={rol}
          onChangeText={setRol}
        />

        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Ionicons name="save-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Guardar Asociado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },
  header: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1E3A8A",
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  headerSubtitle: { fontSize: 14, color: "#E5E7EB", marginTop: 6 },
  form: { padding: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, marginLeft: 8, fontWeight: "600" },
});
