import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ListarAsociados({ navigation }) {
  const asociados = [
    { id: "1", nombre: "Juan Pérez", correo: "juan@aceros.com", rol: "Administrador" },
    { id: "2", nombre: "María López", correo: "maria@aceros.com", rol: "Operario" },
    { id: "3", nombre: "Carlos Ruiz", correo: "carlos@aceros.com", rol: "Supervisor" },
  ];

  return (
    <View style={styles.container}>
      {/* Encabezado con imagen industrial */}
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1581091870622-1a73d9f62b6b" }}
        style={styles.header}
        imageStyle={{ borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
      >
        <Text style={styles.headerTitle}>Asociados</Text>
        <Text style={styles.headerSubtitle}>Gestión y control del equipo</Text>
      </ImageBackground>

      {/* Lista de asociados */}
      <FlatList
        data={asociados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("DetalleAsociado", { asociado: item })}
          >
            <Ionicons name="person-circle-outline" size={45} color="#2563EB" />
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.email}>{item.correo}</Text>
              <Text style={styles.role}>{item.rol}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        )}
      />

      {/* Botón para nuevo asociado */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("EditarAsociado")}
      >
        <Ionicons name="person-add-outline" size={22} color="#fff" />
        <Text style={styles.addButtonText}>Agregar Asociado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  header: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#1E3A8A",
  },
  headerTitle: { fontSize: 26, fontWeight: "bold", color: "#fff" },
  headerSubtitle: { fontSize: 14, color: "#E5E7EB", marginTop: 6 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
  },
  name: { fontSize: 16, fontWeight: "600", color: "#111827" },
  email: { fontSize: 14, color: "#4B5563" },
  role: { fontSize: 13, color: "#2563EB", marginTop: 2 },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    margin: 20,
  },
  addButtonText: { color: "#fff", fontSize: 16, marginLeft: 8, fontWeight: "600" },
});
