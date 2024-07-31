import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles.js';
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/macedocmateus.png" alt="Foto de Mateus de Castro Macedo"></img>

                <div>
                    <span>Bem-vindo</span>
                    <strong>Mateus de Castro Macedo</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
