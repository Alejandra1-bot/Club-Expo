import { NavigationContainer } from "@react-navigation/native";
import AuthNavegation from "./AuthNavegation";
import NavegacionPrincipal from "./NavegacionPrincipal";

export default function AppNavegacion(){
    return(
        <NavigationContainer>
            <NavegacionPrincipal/>
        </NavigationContainer>
    );
}