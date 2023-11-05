/* IMPORTANDO A STATUS BAR DO REACT NATIVE */
import { StatusBar } from "react-native";

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
      
{/* CARREGANDO A STATUS BAR DENTRO DA NOSSA APLICAÇÃO, NOTE QUE FIZEMOS AS SEGUINTES CONFIGURAÇÕES PARA QUE ELA FICASSE TRANSPARENTE COM A NOSSA APLICAÇÃO AO FUNDO */}
      <StatusBar 
      barStyle={"light-content"}
      backgroundColor={"transparent"}
      translucent
      />
      
     { !fontCarregada ? <Groups/> : <Loading/>} 
    </ThemeProvider>
    
  );
}


