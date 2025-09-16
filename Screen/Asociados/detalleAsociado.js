import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DetalleAsociado({ navigation, route }) {
  const asociado = route.params?.asociado || {
    nombre: "Juan Pérez",
    correo: "juanperez@aceros.com",
    rol: "Administrador",
  };

  return (
    <View style={styles.container}>
      {/* Encabezado con imagen */}
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1565105745114-2c63b5f6e2d7" }}
        style={styles.header}
        imageStyle={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
      >
        <Text style={styles.headerTitle}>{asociado.nombre}</Text>
        <Text style={styles.headerSubtitle}>{asociado.rol}</Text>
      </ImageBackground>

      {/* Información */}
      <View style={styles.card}>
        <Text style={styles.info}>📧 {asociado.correo}</Text>
        <Text style={styles.info}>🔑 {asociado.rol}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditarAsociado", { asociado })}
      >
        <Ionicons name="create-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Editar Asociado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  header: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1F2937",
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#FACC15" },
  headerSubtitle: { fontSize: 14, color: "#E5E7EB", marginTop: 6 },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    margin: 20,
    elevation: 3,
  },
  info: { fontSize: 16, marginBottom: 10, color: "#374151" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  buttonText: { color: "#fff", fontSize: 16, marginLeft: 8, fontWeight: "600" },
});
