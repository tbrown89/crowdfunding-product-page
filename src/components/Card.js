import { StyledCard } from "./styles/Card.styled";
import { Container } from "./styles/Container";

export default function Card(props) {
    return (
        <>
            <Container>
                <StyledCard
                    padding={props.padding}
                    mb={props.mb}
                    textAlign={props.textAlign}>
                    {props.children}
                </StyledCard>
            </Container>
        </>
    )
}