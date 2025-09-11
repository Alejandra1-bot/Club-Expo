import { createNativeStackNavigator} from '@react-navigation/native-stack'
import ListarAsociado from "../../../Screen/Asociados/listarAsociados";
import DetalleAsociado from "../../../Screen/Asociados/detalleAsociado";
import EditarAsociado from "../../../Screen/Asociados/editarAsociado";

const Stack = createNativeStackNavigator();   

export default function AsociadosStack(){
    return(
        <Stack.Navigator>   
            <Stack.Screen
                name="ListarAsociado"
                component={ListarAsociado}   
                options={{ title: 'Asociados' }}
            />
            <Stack.Screen       
                name="DetalleAsociado"
                component={DetalleAsociado}   
                options={{ title: 'Detalle de Asociado'}}      
            />
            <Stack.Screen       
                name="EditarAsociado"        
                component={EditarAsociado}   
                options={{ title: 'Editar Asociado' }}      
            />
        </Stack.Navigator>
    );
}
