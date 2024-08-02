import { useState } from 'react';
import { Container, Form, Avatar } from './styles.js';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function Profile() {
    const { user } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/macedocmateus.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser} value={user.name} onChange={(e) => setName(e.target.value)} />

                <Input placeholder="E-mail" type="text" icon={FiMail} value={user.email} onChange={(e) => setEmail(e.target.value)} />

                <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={(e) => setOldPassword(e.target.value)} />

                <Input placeholder="Nova senha " type="password" icon={FiLock} onChange={(e) => setNewPassword(e.target.value)} />

                <Button title="Salvar" />
            </Form>
        </Container>
    );
}
