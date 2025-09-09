import {  ScrollView, StatusBar } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import CardComponents from "../../components/CardComponents";


    export default function Inicio(){
        return(
          <ScrollView> 
         <View style={styles.gridContainer}> 
            <CardComponents
            tittle="Asociados"
            description=" Gestión de Asociados."
            icon="people-outline"
            />
            <CardComponents
            tittle="Actividades"
            description=" Gestión de Actividades."
            icon="calendar-outline"
            />
            <CardComponents
            tittle="Prestamos"
            description=" Gestión de Prestamos."
            icon="cash-outline"
            />
            <CardComponents
            tittle="Pagos"
            description=" Gestión de pagos."
            icon="card-outline"
            />


         </View>
        </ScrollView>
        )
    }

 const styles = StyleSheet.create({
    gridContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        
    },

    });  