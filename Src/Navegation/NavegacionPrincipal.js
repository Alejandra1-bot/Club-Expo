import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import{ Ionicons, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
import  InicioStack  from "./Stack/InicioStack";

export default function NavegacionPrincipal(){
    return(
        <Tab.Navigator
            screenOptions={{
                //Estilos para la barra de pestañas en general 
                tabBarSyle:{
                    backgroundColor: '#fefefe',
                    borderTopColor: '#eee',
                    borderTopWidth: 1,  
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                // colores de los iconos y texto de la pestaña 
                tabBarActiveTintColor: '#0A74DA',
                tabBarInactiveTintColor: '#555',
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontweight: 'bold',
                    marginTop: 2,
                },
                
            }}
        >
        <Tab.Screen
            name="Inicio" 
            component={InicioStack} 
            options={{
              headerShown: false,
              tabBarIcon:({ color, size}) => (
                <Ionicons name="home" size={size} color={color} />
            ),
            tabBarLabel: 'Inicio',
        }} 
        />

        <Tab.Screen 
            name="Perfil"
             component={PerfilesStack}
             opctions={{
            headerShown: false,
            tabBarIcon:({ color, size})=>(  
                <Feather name="setting-outline" size={size} color={color} /> // setting-outline 
            ),
            tabBarLabel: 'perfil',
           }} 
       />

        <Tab.Screen 
            name="configuracion"
             component={configuracionesStack}
             opctions={{
            headerShown: false,
            tabBarIcon:({ color, size})=>(  
                <Ionicons name="setting-outline" size={size} color={color} /> // setting-outline 
            ),
            tabBarLabel: 'configuracion',
           }} 
       />
        </Tab.Navigator>
    );

}