import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Commissioner', sans-serif;
        font-size: .875rem;
        line-height: 1.71;
        color: ${({ theme }) => theme.colors.body};
        background-color: ${({ theme }) => theme.colors.bg};
    }

    h1,
    h2 {
        font-weight: 700;
        line-height: 1.22;
        color: ${({ theme }) => theme.colors.headings};
    }

    h1 {
        font-size: 1.25rem;
    }

    h2 {
        font-size: 1.125rem;
    }
`