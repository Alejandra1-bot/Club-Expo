import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CardComponents from "../../components/CardComponents";
import { Ionicons } from "@expo/vector-icons";

export default function Inicio({navigation}) {
  return (
    <ScrollView style={styles.container}>
     {/* Encabezado */}
      <View style={styles.header}>
        <Ionicons name="business-outline" size={42} color="#fff" />
        <Text style={styles.headerTitle}>Clud de Acerías</Text>
        <Text style={styles.cloudText}>
          🏭 Innovación y gestión para la industria del acero
        </Text>
        <Text style={styles.status}>Plataforma Activa ⚡</Text>
        <Text style={styles.subtitle}>Selecciona una opción</Text>
      </View>

      {/* Grid de tarjetas */}
      <View style={styles.gridContainer}>
        <CardComponents
        
          tittle="Asociados"
          description="Gestión de Asociados."
          icon="people-outline"
          color="#2563EB"
         onPress={() => navigation.navigate("AsociadosFlow")}
          
        />
        <CardComponents
          tittle="Actividades"
          description="Gestión de Actividades."
          icon="calendar-outline"
          color="#F59E0B"
        />
        <CardComponents
          tittle="Prestamos"
          description="Gestión de Prestamos."
          icon="cash-outline"
          color="#10B981"
        />
        <CardComponents
          tittle="Pagos"
          description="Gestión de pagos."
          icon="card-outline"
          color="#8B5CF6"
        />
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
    backgroundColor: "#4a67a7ff", // azul oscuro industrial
    paddingVertical: 45,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    marginBottom: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FACC15", // amarillo metal
    marginTop: 10,
  },
  status: {
    fontSize: 16,
    color: "#22C55E",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#D1D5DB",
    marginTop: 2,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
