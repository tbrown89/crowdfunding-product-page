import styled from "styled-components";

const ButtonBase = styled.button`
    font-size: 1rem;
    font-weight: 700;
    width: ${({ width }) => width};
    padding: 1.125rem 2.625rem;
    border-radius: 2rem;
    border: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonPrimary = styled(ButtonBase)`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const ButtonDisabled = styled(ButtonBase)`
    color: #fff;
    background-color: #2F2F2F;
`