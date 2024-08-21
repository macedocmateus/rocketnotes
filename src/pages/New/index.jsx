import { useState } from 'react';
import { Header } from '../../components/Header/index.jsx';
import { Input } from '../../components/Input/index.jsx';
import { Textarea } from '../../components/TextArea/index.jsx';
import { NoteItem } from '../../components/NoteItem/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Link } from 'react-router-dom';

import { Container, Form } from './styles.js';

export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    function handleAddLink() {
        setLinks((prevState) => [...prevState, newLink]);
        setNewLink('');
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title={'Links úteis'}>
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={link} 
                                onClick={() => {}}
                                />
                            ))
                        }

                        <NoteItem
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={(e) => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title={'Marcadores'}>
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}
