import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={80} color="#fff" />
        <Text style={styles.headerTitle}>Mi Perfil</Text>
        <Text style={styles.status}>Usuario Activo ✅</Text>
      </View>

      {/* Información del usuario */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>👤 Nombre: Juan Pérez</Text>
        <Text style={styles.infoText}>📧 Correo: juanperez@aceros.com</Text>
        <Text style={styles.infoText}>🔑 Rol: Administrador</Text>
      </View>

      {/* Opciones del perfil */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="create-outline" size={28} color="#2563EB" />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="lock-closed-outline" size={28} color="#F59E0B" />
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="notifications-outline" size={28} color="#10B981" />
          <Text style={styles.optionText}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="log-out-outline" size={28} color="#EF4444" />
          <Text style={styles.optionText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  header: {
    backgroundColor: "#4a67a7ff",
    paddingVertical: 40,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    elevation: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FACC15",
    marginTop: 10,
  },
  status: {
    fontSize: 14,
    color: "#22C55E",
    marginTop: 4,
  },
  infoBox: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 8,
  },
  optionsContainer: {
    marginHorizontal: 20,
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: "#111827",
    marginLeft: 12,
  },
});
