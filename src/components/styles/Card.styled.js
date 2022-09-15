import styled from "styled-components";

export const StyledCard = styled.div`
    width: 100%;
    max-width: 730px;
    text-align: ${({ textAlign }) => textAlign};
    border-radius: .5rem;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background-color: #fff;
    margin-bottom: ${({ mb }) => mb};
    padding: ${({ padding }) => padding};

    h1 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1.5rem;
    }
`