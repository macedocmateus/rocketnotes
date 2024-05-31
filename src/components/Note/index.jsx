import { Container } from './styles.js'

export function Note(data, ...rest) {
    <Container {...rest}>
        <h1>{data.title}</h1>

        {
            data.tags &&
            <footer>
                {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
            </footer>
        }
    </Container>
}