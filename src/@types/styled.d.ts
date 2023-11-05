
/* Este presente arquivo serve para tipar o nosso tema para que todas as configurações do nosso THEME apareça na hora que estivermos digitando */
import 'styled-components';
import theme  from "../theme";

declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}