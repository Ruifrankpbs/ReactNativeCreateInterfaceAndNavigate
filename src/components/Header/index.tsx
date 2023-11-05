
import { Container, Logo, BackButton, BackIcon } from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
    mostrarBackButton?: boolean;
}

export function Header({ mostrarBackButton = false }: Props) {
    return (
        <Container>
            {
                mostrarBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }


            <Logo source={logoImg} />
        </Container>
    );

}