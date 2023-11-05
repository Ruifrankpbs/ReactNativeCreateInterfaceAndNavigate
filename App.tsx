import { Loading } from "@components/loading";
/* Importa o indicador de carregamento de fonte */
import { ActivityIndicator } from "react-native";
/* Provedor de temas */
import {ThemeProvider } from "styled-components";

/* importa o utilizador de fontes e configuração da font personalizada */
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

/* importa o tema */
import theme from "./src/theme";
import { Groups } from '@screens/Groups';

/* função principal que carrega a aplicação */
export default function App() {

  /* Constante de carregamento da fonte personalizada */
  const [fontCarregada] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  
  return (
    <ThemeProvider theme={theme}>

      
     { !fontCarregada ? <Groups/> : <Loading/>} 
    </ThemeProvider>
    
  );
}


