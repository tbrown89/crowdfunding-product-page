import { StyledFlex } from "./styles/Flex.styled";

export default function Flex(props) {
    return (
        <>
            <StyledFlex
                justify={props.justify}
                align={props.align}>
                {props.children}
            </StyledFlex>
        </>
    )
}