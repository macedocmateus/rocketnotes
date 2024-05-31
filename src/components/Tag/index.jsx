import { Container } from "./styles.js";

export function Tag({ title }) {
    return (
        <Container {...rest}>
            {title}
        </Container>

    );
}