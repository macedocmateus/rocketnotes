import { Input } from "../../components/Input/index.jsx";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button/index.jsx";
import { Container, Form, Background } from "./styles.js";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>

            <Background
                alt="Imagem de fundo de uma escrivaninha com uma xícara de café, bloco de anotações e um notebook."
            />

            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button
                    title="Cadastrar"
                />

                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>


        </Container>
    );
}