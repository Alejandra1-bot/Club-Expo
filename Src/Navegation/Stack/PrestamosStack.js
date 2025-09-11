import { createNativeStackNavigator} from '@react-navigation/native-stack'
import ListarPrestamos from "../../../Screen/Prestamos/listarPrestamos";
import DetallePrestamo from "../../../Screen/Prestamos/detallePrestamo";
import EditarPrestamo from "../../../Screen/Prestamos/editarPrestamo";

const Stack = createNativeStackNavigator();   

export default function PrestamoStack( ){
    return(
        <Stack.Navigator>   
            <Stack.Screen
                name="ListarPrestamos"
                component={ListarPrestamos}   
                options={{ title: 'Prestamos' }}
            />
            <Stack.Screen       
                name="DetallePrestamo"
                component={DetallePrestamo}   
                options={{ title: 'Detalle de Prestamo'}}      
            />
            <Stack.Screen       
                name="EditarPrestamo"        
                component={EditarPrestamo}   
                options={{ title: 'Editar Prestamo' }}      
            />
        </Stack.Navigator>
    );
}
