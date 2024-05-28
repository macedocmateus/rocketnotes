import { Container, Links, Content } from "./styles.js"
import { Header } from "../../components/Header/index.jsx"
import { Button } from "../../components/Button/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Esse culpa atque expedita dignissimos ipsa hic eos sint ipsum
            sed, impedit minus cum! Dolore modi facere placeat
            necessitatibus, molestias delectus ametLorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Esse culpa atque expedita dignissimos ipsa hic eos sint ipsum
            sed, impedit minus cum! Dolore modi facere placeat
            necessitatibus, molestias delectus ametLorem ipsum dolor sit
            amet consectetur adipisicing elit.
            Esse culpa atque expedita dignissimos ipsa hic eos sint ipsum
            sed, impedit minus cum! Dolore modi facere placeat
            necessitatibus, molestias delectus amet.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}