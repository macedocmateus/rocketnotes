import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles.js";

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/macedocmateus.png"
                    alt="Foto de Mateus de Castro Macedo">
                </img>

                <div>
                    <span>Bem-vindo</span>
                    <strong>Mateus de Castro Macedo</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>

    );
}