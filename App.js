import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

import AppNavegacion from './Src/Navegation/AppNavegacion';


export default function App() {
  return (
    <>
   
      <StatusBar style="auto" />
      <AppNavegacion/>
     
   </>
  );  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb0d0dff',
    alignItems: 'center',
    justifyContent: 'center',
  },



});
