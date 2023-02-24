import styled from "styled-components";

export const TextInfo = styled.p`
    font-size: 1rem;
    font-weight: 100;
    margin-top: 50px;
    color: #adacac;
    cursor: pointer;
`;

export const Title = styled.p`
    font-size: 1.15rem;
    font-weight: 100;
    text-transform: capitalize;
    color: #73787c;
`;

export const Container = styled.div`
    height: 100vh;
    @media (max-width: 1000px) {
        height: 100%;
    }
    background-color: #eff2f5;
    padding-top: 3em;
`;
