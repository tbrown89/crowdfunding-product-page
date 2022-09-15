import styled from "styled-components"

export const StyledFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
`