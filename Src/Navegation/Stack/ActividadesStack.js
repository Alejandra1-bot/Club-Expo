import { createNativeStackNavigator} from '@react-navigation/native-stack'
import ListarActividad from "../../../Screen/Actividades/listarActividades";
import DetalleActividad from "../../../Screen/Actividades/detalleActividad";
import EditarActividad from "../../../Screen/Actividades/editarActividad";

const Stack = createNativeStackNavigator();   

export default function ActividadesStack(){
    return(
        <Stack.Navigator>   
            <Stack.Screen
                name="ListarActividad"
                component={ListarActividad}   
                options={{ title: 'Actividades' }}
            />
            <Stack.Screen       
                name="DetalleActividad"
                component={DetalleActividad}   
                options={{ title: 'Detalle de Actividad'}}      
            />
            <Stack.Screen       
                name="EditarActividad"        
                component={EditarActividad}   
                options={{ title: 'Editar Actividad' }}      
            />
        </Stack.Navigator>
    );
}
