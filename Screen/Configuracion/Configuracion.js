import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Configuracion() {
  return (
    <ScrollView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={70} color="#fff" />
        <Text style={styles.headerTitle}>Configuración</Text>
        <Text style={styles.status}>⚙️ Ajusta tu aplicación</Text>
      </View>

      {/* Opciones de configuración */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="color-palette-outline" size={28} color="#2563EB" />
          <Text style={styles.optionText}>Apariencia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="globe-outline" size={28} color="#F59E0B" />
          <Text style={styles.optionText}>Idioma</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="notifications-circle-outline" size={28} color="#10B981" />
          <Text style={styles.optionText}>Preferencias de Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="lock-closed-outline" size={28} color="#8B5CF6" />
          <Text style={styles.optionText}>Privacidad y Seguridad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <Ionicons name="help-circle-outline" size={28} color="#EF4444" />
          <Text style={styles.optionText}>Ayuda y Soporte</Text>
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
    color: "#E5E7EB",
    marginTop: 4,
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
